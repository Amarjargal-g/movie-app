import { Movie } from "@/lib/type";
import { MovieCard } from "@/components/my-components/MovieCard";
import { Header } from "../my-components/Header";

type UpcomingMoviesProps = {
  movies: Movie[];
};

export const UpcomingMovies = ({ movies }: UpcomingMoviesProps) => {
  return (
    <div className="m-2">
      <div className="flex justify-between">
        {" "}
        <h1 className="font-bold">Upcoming Movies</h1>
        <button>See more → </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard
                posterPath={movie.poster_path}
                key={movie.id}
                name={movie.title}
                rating={movie.vote_average}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
