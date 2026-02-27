"use client";

import { Genre as GenreType } from "@/lib/api";

import { Genre } from "./Genre";
import { useRouter, useSearchParams } from "next/navigation";

export const GenreList = ({ genres }: { genres: GenreType[] }) => {
  const router = useRouter();
  const params = useSearchParams();
  const selectedGenre = params.get("genre");

  const onSelectGenre = (newGenre: string) => {
    if (!selectedGenre) {
      router.push(`/search?genre=${newGenre}`);
      return;
    }
    const oldGenres = String(selectedGenre)
      .split(",")
      .filter((value) => value);

    const isIncluded = oldGenres.includes(newGenre);
    if (!isIncluded) {
      let newGenres = [...oldGenres, newGenre];
      router.push(`/search?genre=${newGenres}`);
    } else {
      const newGenres = oldGenres.filter((genre) => genre !== newGenre);
      router.push(`/search?gone=${newGenres}`);
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
                String(selectedGenre).split(",").includes(String(genre.id))
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
