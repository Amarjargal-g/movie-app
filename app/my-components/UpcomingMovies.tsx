"use client";
import { Movie } from "@/lib/type";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getUpcomingMovies } from "@/lib/api";

type UpcomingMoviesProps = {
  movies: Movie[];
};

export const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
  const [movie, setMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await getUpcomingMovies();
      setMovie(results);
    };
    fetchMovies();
  }, []);
  return (
    <div className="m-2">
      <div className="flex justify-between">
        {" "}
        <h1 className="font-bold">Upcoming Movies</h1>
        <Link href="/upcoming">
          <button>See more → </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {movies.map((movie) => {
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
