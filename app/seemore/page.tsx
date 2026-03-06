// app/search/page.tsx
import { getMovieBySearchValue } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: query } = await searchParams;

  if (!query)
    return <p className="p-10 text-center">Please enter a search term.</p>;

  const data = await getMovieBySearchValue(query);
  console.log("Search Results Data:", data);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Search results for: <span className="text-blue-500">"{query}"</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.results.length > 0 ? (
          data.results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} className="group">
              <div className="relative aspect-2/3 rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="mt-2 font-medium text-sm line-clamp-1">
                {movie.title}
              </p>
            </Link>
          ))
        ) : (
          <p>No movies found for "{query}"</p>
        )}
      </div>
    </div>
  );
}
