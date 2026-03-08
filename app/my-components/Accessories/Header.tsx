import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../../toggle-mode";
import { Search } from "lucide-react";
import { SearchInput } from "../SearchInput";
import { DropDownMenu } from "../DropDownMenu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-480 mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-14">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="inline-block">
            <img src="mv.svg" alt="logo" className="w-24 sm:w-28 h-auto" />
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-4 px-4">
          <div className="flex items-center gap-2">
            <DropDownMenu />
            <SearchInput />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
            <Search className="h-4 w-4" />
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
