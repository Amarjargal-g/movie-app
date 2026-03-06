"use client";

import { Genre as GenreType } from "@/lib/api";
import { Genre } from "./Genre";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  genres: GenreType[];
  selectedGenre?: string | string[];
};

export const GenreList = ({ genres }: Props) => {
  const router = useRouter();
  const params = useSearchParams();

  const currentGenresRaw = params.get("genre") || "";

  const onSelectGenre = (newGenre: string) => {
    if (!currentGenresRaw) {
      router.push(`/search?genre=${newGenre}`);
      return;
    }

    const oldGenres = currentGenresRaw.split(",").filter((value) => value);

    const isIncluded = oldGenres.includes(newGenre);

    if (!isIncluded) {
      const newGenres = [...oldGenres, newGenre];
      router.push(`/search?genre=${newGenres.join(",")}`);
    } else {
      const newGenres = oldGenres.filter((genre) => genre !== newGenre);

      router.push(`/search?genre=${newGenres.join(",")}`);
    }
  };

  return (
    <div>
      <h1>Search by genre</h1>
      <p>See lists of movies by genre</p>
      <div className="grid grid-cols-3 gap-2">
        {genres.map((genre) => {
          return (
            <div
              key={genre.id}
              onClick={() => onSelectGenre(String(genre.id))}
              className={
                currentGenresRaw.split(",").includes(String(genre.id))
                  ? "selected"
                  : ""
              }
            >
              <Genre genre={genre} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
