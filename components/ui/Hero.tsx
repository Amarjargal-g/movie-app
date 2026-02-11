import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarouselContent } from "@/components/ui/carousel";
type HeroCardProps = {
  backdrop_path: string;
  name: string;
  rating: number;
  describtion: string;
};

export const Hero = (probs: HeroCardProps) => {
  const { backdrop_path, name, rating, describtion } = probs;
  const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <div>
      <CarouselContent>
        <img src={backdropUrl} alt="Image" />
      </CarouselContent>
      <div>
        <p>Now playing</p>
        <h1>{name}</h1>
      </div>
      <div className="flex gap-1">
        <Star />
        <p>{rating}</p>
      </div>
      <p>{describtion}</p>
      <Button variant={"outline"}>▷ Watch Trailer</Button>
    </div>
  );
};
