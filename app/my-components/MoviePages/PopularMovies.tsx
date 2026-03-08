"use client";
import { Movie } from "@/lib/type";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";

type PopularMoviesProps = {
  movies: Movie[];
  showSeeMore?: boolean;
};

export const PopularMovies = ({
  movies,
  showSeeMore = true,
}: PopularMoviesProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8 px-6">
        <h1 className="text-2xl font-bold text-white">Popular</h1>

        {showSeeMore && (
          <Link href="/popular">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">
              See more →
            </button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-10 gap-y-16">
        {movies.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <MovieCard
              posterPath={movie.poster_path}
              name={movie.title}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
