import { getMoviesByGenre, getGenres } from "@/lib/api";
import Image from "next/image";

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
          <div key={movie.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-muted aspect-2/3">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  No Image
                </div>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold line-clamp-1">
              {movie.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {movie.release_date?.split("-")[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
