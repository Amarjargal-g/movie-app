"use client";

import { Genre as GenreType } from "@/lib/api";
import { Genre } from "./Genre";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  genres: GenreType[];
};

export const GenreList = ({ genres }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentGenreParam = searchParams.get("genre") || "";
  const selectedGenres = currentGenreParam ? currentGenreParam.split(",") : [];

  const onSelectGenre = (id: string) => {
    let newGenreList: string[];

    if (selectedGenres.includes(id)) {
      newGenreList = selectedGenres.filter((g) => g !== id);
    } else {
      newGenreList = [...selectedGenres, id];
    }

    const query =
      newGenreList.length > 0 ? `?genre=${newGenreList.join(",")}` : "";

    router.push(`/search${query}`);
  };

  return (
    <section>
      <header className="mb-4">
        <h1 className="text-xl font-bold">Search by genre</h1>
        <p className="text-gray-500">See lists of movies by genre</p>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(String(genre.id));

          return (
            <div
              key={genre.id}
              onClick={() => onSelectGenre(String(genre.id))}
              className={`cursor-pointer transition-colors ${
                isSelected
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "hover:bg-gray-100"
              }`}
            >
              <Genre genre={genre} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
