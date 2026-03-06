import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
type HeroCardProps = {
  backdrop_path: string;
  name: string;
  rating: number;
  description: string;
};

export const Hero = (probs: HeroCardProps) => {
  const { backdrop_path, name, rating, description } = probs;
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  return (
    <div className="relative group">
      <div className="relative w-full h-75 sm:h-100 md:h-125 lg:h-150">
        <img
          className="  w-full h-full object-cover"
          src={backdropUrl}
          alt="Backround"
        />
      </div>
      <div className="p-4 lg:p-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-12 lg:max-w-2xl lg:text-white">
        <div className="flex justify-between lg:block">
          <div>
            <p>Now playing</p>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
              {name}
            </h1>
          </div>
          <div className="flex gap-1 m-2">
            <Star className="h-4 w-4 text-white fill-white m-1" />
            <span>{rating}/10</span>
          </div>
        </div>

        <p className="text-sm md:text-base line-clamp-3 md:line-clamp-none">
          {description}
        </p>
        <Button variant={"outline"} className="text-black bg-transparent">
          ▷ Watch Trailer
        </Button>
      </div>
    </div>
  );
};
