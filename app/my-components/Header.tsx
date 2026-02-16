import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../toggle-mode";
import { Search } from "lucide-react";
import { SearchInput } from "./SearchInput";
import { DropDownMenu } from "./DropDownMenu";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3">
        <div className="mt-2">
          <img
            src="Logo.png"
            alt="logo"
            className="w-24 sm:w-28 md:w-32 h-auto"
          />
        </div>
        <div className="flex gap-1">
          <DropDownMenu />
          <SearchInput />
        </div>

        <div className="flex items-center gap-2 sm:gap-3  ">
          <Button variant={"outline"} size="icon">
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
