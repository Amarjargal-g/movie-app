import { Genre as GenreType } from "@/lib/type";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
};

export const Genre = ({ genre }: GenreProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span>{genre.name}</span>
      <ChevronRight className="h-3 w-3 text-gray-500" />
    </div>
  );
};
