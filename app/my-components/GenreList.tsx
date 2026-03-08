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

    router.push(`/genre${query}`);
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {genres.map((genre) => (
        <div
          key={genre.id}
          onClick={() => onSelectGenre(String(genre.id))}
          className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-sm flex items-center justify-between transition-colors whitespace-nowrap hover:bg-muted"
        >
          <Genre genre={genre} />
        </div>
      ))}
    </div>
  );
};
