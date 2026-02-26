import { getMoviesByGenre } from "@/lib/api";
import { GenreList } from "../my-components/GenreList";

export default async function SearchByGenre({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { genre } = await searchParams;

  return (
    <div>
      {/* <div>
        {results.map((movie) => {
          return <h1 key={movie.id}>{movie.title}</h1>;
        })}
      </div> */}
      <GenreList />
    </div>
  );
}
