import { Badge } from "@/components/ui/badge";
import { Genre as GenreType } from "@/lib/type";
import { ChevronRight } from "lucide-react";

type GenreProps = {
  genre: GenreType;
};

export const Genre = ({ genre }: GenreProps) => {
  return (
    <div>
      <Badge>
        {genre.name}
        <ChevronRight />
      </Badge>
    </div>
  );
};
