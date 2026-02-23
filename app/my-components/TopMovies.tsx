"use client";
import { Movie } from "@/lib/type";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getTopMovies } from "@/lib/api";

type TopMoviesProps = {
  movies: Movie[];
};

export const TopMovies = ({}: TopMoviesProps) => {
  const [movie, setMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await getTopMovies("1");
      setMovie(results);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="flex justify-between m-2">
        {" "}
        <h1 className="font-bold">Top Movies</h1>
        <Link href="/top">
          <button>See more → </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movie.map((movie) => {
          return (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                posterPath={movie.poster_path}
                name={movie.title}
                rating={movie.vote_average}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
