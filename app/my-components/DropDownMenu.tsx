import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DropDownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">⏷ Genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <p className="w-full p-1">See lists of movies by genre</p>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="grid grid-cols-3 gap-1 p-2">
            <DropdownMenuItem className="border rounded-full text-xs">
              Action ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Adventure ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Adventure ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Animation ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Biography ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Comedy ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Crime ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Documentary ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Drama ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Family ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Fantasy ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Film-Noir ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Game-Show ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              History ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Horror ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Music ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Musical ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Mistery ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              News ▸
            </DropdownMenuItem>
            <DropdownMenuItem className="border rounded-full text-xs">
              Reality-Tv ▸
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
