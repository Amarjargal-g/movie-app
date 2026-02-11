import { Movie } from "@/lib/type";
import { MovieCard } from "@/components/ui/MovieCard";

type TopMoviesProps = {
  movies: Movie[];
};

export const TopMovies = ({ movies }: TopMoviesProps) => {
  return (
    <div>
      <div className="flex gap-5">
        {" "}
        <h1>Top Movies</h1>
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
