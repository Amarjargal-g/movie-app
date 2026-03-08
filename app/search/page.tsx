import { getMovieBySearchValue, getGenres } from "@/lib/api";
import { MovieCard } from "@/app/my-components/MovieCard";
import { Movie } from "@/lib/type";
import Link from "next/link";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: query } = await searchParams;
  const searchQuery = query || "";

  if (!searchQuery)
    return (
      <p className="p-20 text-center text-gray-500">
        Please enter a search term.
      </p>
    );

  const [{ results: movies }, { genres }] = await Promise.all([
    getMovieBySearchValue(searchQuery),
    getGenres(),
  ]);

  const genreMap: Record<number, string> = {};
  genres?.forEach((g: { id: number; name: string }) => {
    genreMap[g.id] = g.name;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-16">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            Search Results
          </h1>
          <p className="text-gray-500 text-sm">
            {movies?.length ?? 0} results for {searchQuery}
          </p>
        </div>

        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {(!movies || movies.length === 0) && (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <p className="text-5xl mb-4">🎬</p>
                <p className="text-xl font-semibold mb-2">No movies found</p>
                <p className="text-gray-400 text-sm">
                  Try searching for a different title
                </p>
              </div>
            )}

            {movies && movies.length > 0 && (
              <div className="grid grid-cols-4 gap-6">
                {movies.map((movie: Movie & { genre_ids?: number[] }) => (
                  <Link key={movie.id} href={`/${movie.id}`}>
                    <MovieCard
                      posterPath={movie.poster_path}
                      name={movie.title}
                      rating={movie.vote_average}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="hidden lg:block shrink-0 w-125">
            <h2 className="text-lg font-bold mb-1">Search by genre</h2>
            <p className="text-gray-400 text-sm mb-3">
              See lists of movies by genre
            </p>
            <hr className="border-zinc-700 mb-4" />
            <div className="grid grid-cols-4 gap-2">
              {genres?.map((genre: { id: number; name: string }) => (
                <Link key={genre.id} href={`/genre?id=${genre.id}`}>
                  <span className="flex items-center justify-between px-3 py-1.5 rounded-full border border-zinc-700 text-sm text-foreground hover:bg-zinc-800 cursor-pointer transition-colors whitespace-nowrap">
                    {genre.name} <span className="text-gray-500 ml-1">›</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
