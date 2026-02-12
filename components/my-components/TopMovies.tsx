import { Movie } from "@/lib/type";
import { MovieCard } from "@/components/my-components/MovieCard";

type TopMoviesProps = {
  movies: Movie[];
};

export const TopMovies = ({ movies }: TopMoviesProps) => {
  return (
    <div className="m-2">
      <div className="flex justify-between">
        {" "}
        <h1 className="font-bold">Top Movies</h1>
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
