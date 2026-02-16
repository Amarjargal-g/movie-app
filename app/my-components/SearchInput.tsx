"use client";
import { ChangeEventHandler, useEffect, useState } from "react";

import { getMovieBySearchValue } from "@/lib/api";
import { Movie } from "@/lib/type";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);

      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      const data = await getMovieBySearchValue(searchValue);
      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);
  return (
    <div className="relative w-fit">
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={onChangeSearchValue}
        className="max-w-xs mx-auto"
      />
      {loading && <p>⟳</p>}
      {!loading && movies.map((movie) => <h1 key={movie.id}>{movie.title}</h1>)}
      <div className={`w-144.5 bg-transparent absolute`}></div>
    </div>
  );
};
