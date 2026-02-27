import { getGenres, getMoviesByGenre } from "@/lib/api";
import { MovieCard } from "./MovieCard";
import { GenreList } from "./GenreList";
import { Movie } from "@/lib/type";

export default async function SearchbyGenre({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { genre: selectedGenre } = await searchParams;
  const results = await getMoviesByGenre(String(selectedGenre));
  const { genres } = await getGenres();

  return (
    <div>
      <div>
        {results.map((movie: Movie) => {
          return (
            <MovieCard
              posterPath={""}
              name={""}
              rating={0}
              key={movie.id}
              {...movie}
            />
          );
        })}
      </div>
      <GenreList genres={genres} selectedGenre={selectedGenre} />
    </div>
  );
}
