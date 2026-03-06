"use client";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMovieBySearchValue } from "@/lib/api";
import { Movie } from "@/lib/type";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  const handleSeeAll = () => {
    router.push(`/search?q=${encodeURIComponent(searchValue)}`);

    setMovies([]);
  };

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      setLoading(false);
      return;
    }

    let isActive = true;
    setLoading(true);

    const timer = setTimeout(async () => {
      const data = await getMovieBySearchValue(searchValue);
      if (isActive) {
        setMovies(data.results);
        setLoading(false);
      }
    }, 500);

    return () => {
      isActive = false;
      clearTimeout(timer);
    };
  }, [searchValue]);

  return (
    <div className="relative flex flex-col items-center rounded-lg">
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={(e) => e.key === "Enter" && handleSeeAll()}
        className="max-w-xs mx-auto"
      />

      {loading && <p className="absolute right-3 top-2">⟳</p>}

      {!loading && movies.length > 0 && (
        <div className="absolute top-full mt-2 w-80 flex flex-col border border-zinc-700 rounded-md z-50 bg-black shadow-lg overflow-hidden">
          {movies.slice(0, 5).map((movie) => (
            <div
              key={movie.id}
              className="flex gap-3 p-2 hover:bg-zinc-800 cursor-pointer border-b border-zinc-800 last:border-0"
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/no-image.png"
                }
                alt={movie.title}
                className="w-10 h-14 object-cover rounded"
              />
              <span className="text-sm self-center truncate">
                {movie.title}
              </span>
            </div>
          ))}

          <button
            onClick={handleSeeAll}
            className="p-3 text-sm text-blue-400 hover:bg-zinc-800 font-bold border-t border-zinc-700"
          >
            See all results for "{searchValue}"
          </button>
        </div>
      )}
    </div>
  );
};
