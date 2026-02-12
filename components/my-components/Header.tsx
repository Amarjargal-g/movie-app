import { Button } from "@/components/ui/button";
import { ModeToggle } from "../../toggle-mode";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex w-100 justify-between p-2 m-2">
      <div className="mt-2">
        <img src="Logo.png" alt="logo" />
      </div>
      <div className="flex gap-2">
        <Button variant={"outline"} size="icon">
          <Search />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};
