"use client";
import { Movie } from "@/lib/type";
import { MovieCard } from "@/app/my-components/MovieCard";
import Link from "next/link";

type UpcomingMoviesProps = {
  movies: Movie[];
  showSeeMore?: boolean;
};

export const UpcomingMovies = ({
  movies,
  showSeeMore = true,
}: UpcomingMoviesProps) => {
  return (
    <div>
      <div className="flex justify-between m-6">
        {" "}
        <h1 className="text-2xl font-bold text-white">Upcoming Movies</h1>
        {showSeeMore && (
          <Link href="/upcoming">
            <button>See more → </button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
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
