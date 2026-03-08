import { getMoviesByGenre, getGenres } from "@/lib/api";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

type GenrePageProps = {
  searchParams: Promise<{
    genre?: string;
  }>;
};

const GenrePage = async ({ searchParams }: GenrePageProps) => {
  const resolvedParams = await searchParams;
  const selectedGenre = resolvedParams.genre;

  if (!selectedGenre) {
    return (
      <div className="p-10 text-center">
        <p className="text-gray-500">
          No genre selected. Please pick one from the list.
        </p>
      </div>
    );
  }

  const [movieData, genreListData] = await Promise.all([
    getMoviesByGenre(selectedGenre),
    getGenres(),
  ]);

  const firstId = selectedGenre.split(",")[0];
  const currentGenre = genreListData.genres.find(
    (g: any) => g.id.toString() === firstId,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-12">
        <h1 className="text-3xl font-bold mb-8">
          {currentGenre ? `${currentGenre.name} Movies` : "Movies"}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movieData.results?.length > 0 ? (
            movieData.results.map((movie: any) => (
              <Link key={movie.id} href={`/${movie.id}`}>
                <div className="flex flex-col rounded-2xl overflow-hidden bg-card shadow-md hover:opacity-80 transition-opacity cursor-pointer">
                  <div className="relative w-full aspect-2/3">
                    {movie.poster_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-zinc-800 text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="p-3 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm font-bold">
                        {movie.vote_average?.toFixed(1)}
                      </span>
                      <span className="text-[10px] text-gray-400">/10</span>
                    </div>
                    <h3 className="text-white text-sm font-medium line-clamp-1 leading-snug">
                      {movie.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center py-10 text-gray-500">
              No movies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
