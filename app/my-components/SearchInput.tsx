"use client";
import { ChangeEventHandler, useEffect, useState } from "react";
import { getMovieBySearchValue } from "@/lib/api";
import { Movie } from "@/lib/type";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showAll, setShowAll] = useState(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
    setShowAll(false);
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
        className="max-w-xs mx-auto"
      />

      {loading && <p>⟳</p>}

      {!loading && movies.length > 0 && (
        <div className="absolute top-full mt-2 w-105 flex flex-col gap-2 border border-zinc-700 rounded-md z-50 bg-black shadow-lg">
          {(showAll ? movies : movies.slice(0, 5)).map((movie) => (
            <div
              key={movie.id}
              className="flex gap-3 p-2 hover:bg-zinc-800 cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-12 h-18 object-cover rounded"
              />
              <span className="text-sm">{movie.title}</span>
            </div>
          ))}

          {!showAll && movies.length > 5 && (
            <button
              onClick={() => setShowAll(true)}
              className="p-2 text-sm text-blue-400 hover:underline"
            >
              See All Results
            </button>
          )}
        </div>
      )}
    </div>
  );
};
