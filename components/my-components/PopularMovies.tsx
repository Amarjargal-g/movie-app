import { Movie } from "@/lib/type";
import { MovieCard } from "@/components/my-components/MovieCard";
import { Header } from "./Header";

type PopularMoviesProps = {
  movies: Movie[];
};

export const PopularMovies = ({ movies }: PopularMoviesProps) => {
  return (
    <div>
      <div className="flex justify-between m-2">
        {" "}
        <h1 className="font-bold">Popular</h1>
        <button>See more → </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {movies.map((movie) => {
          return (
            <MovieCard
              posterPath={movie.poster_path}
              key={movie.id}
              name={movie.title}
              rating={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};
