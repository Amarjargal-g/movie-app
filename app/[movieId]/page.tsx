import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getSimilarMovies,
} from "@/lib/api";
import { SimilarMovies } from "@/app/my-components/MoviePages/SimilarMovies";
import { Star, Play } from "lucide-react";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

async function Details({ params }: DetailsPageProps) {
  const { movieId } = await params;
  const [movie, videos, credits, similar] = await Promise.all([
    getMovieById(movieId),
    getMovieVideos(movieId),
    getMovieCredits(movieId),
    getSimilarMovies(movieId),
  ]);

  const trailer = videos?.results?.find(
    (v: { type: string; site: string }) =>
      v.type === "Trailer" && v.site === "YouTube",
  );

  const director = credits?.crew?.find(
    (p: { job: string }) => p.job === "Director",
  );
  const writers = credits?.crew
    ?.filter(
      (p: { job: string }) => p.job === "Writer" || p.job === "Screenplay",
    )
    .slice(0, 3);
  const stars = credits?.cast?.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              {movie.title}
            </h1>
            <p className="text-muted-foreground text-sm tracking-wide">
              {movie.release_date}
              {movie.runtime && <span> · {movie.runtime}m</span>}
            </p>
          </div>
          <div className="text-right shrink-0 ml-8">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
              Rating
            </p>
            <div className="flex items-center gap-1 justify-end">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold">
                {movie.vote_average?.toFixed(1)}
                <span className="text-muted-foreground text-sm font-normal">
                  /10
                </span>
              </span>
            </div>
            <p className="text-muted-foreground text-xs mt-1">
              {movie.vote_count >= 1000
                ? `${(movie.vote_count / 1000).toFixed(0)}k votes`
                : `${movie.vote_count} votes`}
            </p>
          </div>
        </div>

        <div className="flex gap-6 mb-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-64 md:w-96 rounded-2xl shadow-2xl shrink-0 object-cover"
          />

          <div className="relative flex-1 rounded-2xl overflow-hidden min-h-50">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 flex items-center gap-3 bg-white hover:bg-gray-100 transition-colors rounded-full px-5 py-2.5 shadow-lg"
              >
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <Play className="h-3.5 w-3.5 text-white fill-white ml-0.5" />
                </div>
                <span className="text-black font-semibold text-sm">
                  Play trailer
                </span>
              </a>
            )}
          </div>
        </div>

        {movie.genres && (
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre: { id: number; name: string }) => (
              <span
                key={genre.id}
                className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-foreground/30 transition-colors"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          {movie.overview}
        </p>

        <div className="mb-12">
          {director && (
            <>
              <div className="flex gap-8 py-5">
                <span className="font-bold text-base w-28 shrink-0">
                  Director
                </span>
                <span className="text-muted-foreground text-base">
                  {director.name}
                </span>
              </div>
              <hr className="border-border" />
            </>
          )}
          {writers && writers.length > 0 && (
            <>
              <div className="flex gap-8 py-5">
                <span className="font-bold text-base w-28 shrink-0">
                  Writers
                </span>
                <span className="text-muted-foreground text-base">
                  {writers.map((w: { name: string }) => w.name).join(" · ")}
                </span>
              </div>
              <hr className="border-border" />
            </>
          )}
          {stars && stars.length > 0 && (
            <>
              <div className="flex gap-8 py-5">
                <span className="font-bold text-base w-28 shrink-0">Stars</span>
                <span className="text-muted-foreground text-base">
                  {stars.map((s: { name: string }) => s.name).join(" · ")}
                </span>
              </div>
              <hr className="border-border" />
            </>
          )}
        </div>

        {similar?.results?.length > 0 && (
          <SimilarMovies movieId={movieId} movies={similar.results} />
        )}
      </div>
    </div>
  );
}

export default Details;
