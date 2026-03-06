import { getMoviesByGenre, getGenres } from "@/lib/api";
import Image from "next/image";
import { Star } from "lucide-react"; // Added to match your card's icon

type GenrePageProps = {
  searchParams: Promise<{
    genreId?: string;
  }>;
};

const GenrePage = async ({ searchParams }: GenrePageProps) => {
  const { genreId } = await searchParams;

  if (!genreId) {
    return <p className="p-10 text-center">No genre selected.</p>;
  }

  const [movieData, genreListData] = await Promise.all([
    getMoviesByGenre(genreId),
    getGenres(),
  ]);

  const currentGenre = genreListData.genres.find(
    (g) => g.id.toString() === genreId,
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {currentGenre ? `${currentGenre.name} Movies` : "Movies"}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movieData.results?.map((movie) => (
          <div
            key={movie.id}
            className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden"
          >
            <div className="p-3 space-y-1">
              <div className="relative w-full aspect-2/3 overflow-hidden rounded-md">
                {movie.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-muted">
                    No Image
                  </div>
                )}
              </div>
            </div>

            <div className="px-3 pb-3">
              <div className="flex gap-1 items-center mb-1">
                <Star className="h-4 w-4 text-white fill-white" />
                <span className="text-sm">
                  {movie.vote_average?.toFixed(1)}/10
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
                {movie.title}
              </h3>

              <p className="text-xs text-muted-foreground mt-1">
                {movie.release_date?.split("-")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
