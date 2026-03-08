import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreList } from "./GenreList";
import { getGenres } from "@/lib/api";
import { ChevronDown } from "lucide-react";

export const DropDownMenu = async () => {
  const { genres } = await getGenres();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          <ChevronDown className="h-4 w-4" />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-150 p-6">
        <p className="text-base font-bold mb-1">Search by genre</p>
        <p className="text-gray-500 text-sm mb-4">
          See lists of movies by genre
        </p>
        <DropdownMenuGroup>
          <GenreList genres={genres} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
