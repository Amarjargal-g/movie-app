import { getGenres } from "@/lib/api";
import Link from "next/link";
import { Genre } from "./Genre";

export const GenreList = async () => {
  const { genres } = await getGenres();

  return (
    <div>
      <h1>Search by genre</h1>
      <p>See lists of movies by genre</p>
      <div className="grid grid-cols-3 gap-2">
        {genres.map((genre) => {
          return (
            <Link key={genre.id} href={`/genre?genreId=${genre.id}`}>
              <Genre genre={genre} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
