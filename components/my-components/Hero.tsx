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
    <div>
      <div className="relative w-full overflow-hidden">
        <img
          className="  w-full h-full object-cover"
          src={backdropUrl}
          alt="Backround"
        />
      </div>
      {/* <div className="flex justify-between"> */}
      {/* <div>
          <p>Now playing</p>
          <h1 className="font-bold">{name}</h1>
        </div>
        <div className="flex gap-1 m-2">
          <Star color="" />
          <span>{rating}/10</span>
        </div>
      </div>
      <p>{description}</p>
      <Button variant={"outline"}>▷ Watch Trailer</Button> */}
    </div>
  );
};
