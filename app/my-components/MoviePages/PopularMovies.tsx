"use client";
import { Movie } from "@/lib/type";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";

type PopularMoviesProps = {
  movies: Movie[];
};

export const PopularMovies = ({ movies }: PopularMoviesProps) => {
  return (
    <div>
      <div className="flex justify-between m-2">
        {" "}
        <h1 className="font-bold">Popular</h1>
        <Link href="/popular">
          <button>See more → </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
