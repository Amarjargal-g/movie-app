"use client";
import { Movie } from "@/lib/type";
import { useEffect, useState } from "react";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";
import { getPopularMovies } from "@/lib/api";

type PopularMoviesProps = {
  movies: Movie[];
};

export const PopularMovies = ({ movies }: PopularMoviesProps) => {
  const [movie, setMovie] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await getPopularMovies();
      setMovie(results);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="flex justify-between m-2">
        {" "}
        <h1 className="font-bold">Popular</h1>
        <Link href="/popular">
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
