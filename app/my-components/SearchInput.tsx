"use client";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getMovieBySearchValue } from "@/lib/api";
import { Movie } from "@/lib/type";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSeeAll = () => {
    router.push(`/search?q=${encodeURIComponent(searchValue)}`);
    setMovies([]);
    setOpen(false);
    setSearchValue("");
  };

  const handleMovieClick = (id: number) => {
    router.push(`/${id}`);
    setMovies([]);
    setOpen(false);
    setSearchValue("");
  };

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
    setOpen(true);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      setLoading(false);
      setOpen(false);
      return;
    }

    let isActive = true;
    setLoading(true);

    const timer = setTimeout(async () => {
      const data = await getMovieBySearchValue(searchValue);
      if (isActive) {
        setMovies(data.results);
        setLoading(false);
        setOpen(true);
      }
    }, 500);

    return () => {
      isActive = false;
      clearTimeout(timer);
    };
  }, [searchValue]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center rounded-lg"
    >
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={(e) => e.key === "Enter" && handleSeeAll()}
        className="w-80"
      />

      {loading && <p className="absolute right-3 top-2">⟳</p>}

      {!loading && open && movies.length > 0 && (
        <div className="absolute top-full mt-1 w-125 flex flex-col rounded-xl z-50 bg-card shadow-2xl overflow-hidden border border-border">
          {movies.slice(0, 5).map((movie) => (
            <div
              key={movie.id}
              className="flex items-center gap-4 px-4 py-3 hover:bg-muted cursor-pointer border-b last:border-0"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "/no-image.png"
                }
                alt={movie.title}
                className="w-14 h-20 object-cover rounded shrink-0"
              />

              <div className="flex-1 min-w-0">
                <p className="font-bold text-white truncate">{movie.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">
                    <span className="text-yellow-400">
                      {movie.vote_average?.toFixed(1)}
                    </span>
                    <span className="text-white">/10</span>
                  </span>
                </div>
                {movie.release_date && (
                  <p className="text-sm text-gray-400 mt-1">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                )}
              </div>

              <button
                onClick={() => handleMovieClick(movie.id)}
                className="text-sm text-white shrink-0 flex items-center gap-1 hover:text-gray-300"
              >
                See more →
              </button>
            </div>
          ))}

          <button
            onClick={handleSeeAll}
            className="px-4 py-3 text-sm text-gray-400 hover:bg-muted text-left border-t  "
          >
            See all results for{" "}
            <span className="text-white font-semibold">{searchValue}</span>
          </button>
        </div>
      )}
    </div>
  );
};
