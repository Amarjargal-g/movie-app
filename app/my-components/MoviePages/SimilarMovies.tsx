"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MovieCard } from "@/app/my-components/MovieCard";

type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type SimilarMoviesProps = {
  movieId: string;
  movies: SimilarMovie[];
};

export const SimilarMovies = ({ movieId, movies }: SimilarMoviesProps) => {
  const router = useRouter();
  const visibleMovies = movies.slice(0, 5);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">More like this</h2>
        {movies.length > 5 && (
          <button
            type="button"
            onClick={() => router.push(`/${movieId}/similar`)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {"See more ->"}
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {visibleMovies.map((movie) => (
          <Link key={movie.id} href={`/${movie.id}`}>
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
