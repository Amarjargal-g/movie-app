import { Button } from "@/components/ui/button";
import { ModeToggle } from "../toggle-mode";

export const Header = () => {
  return (
    <div className="flex w-100 justify-between">
      <div>
        <img src="Logo.png" alt="logo" />
      </div>
      <div className="flex gap-2">
        <Button variant={"outline"} size="icon">
          🔍
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};
