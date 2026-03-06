import { Star } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type MovieCardProps = {
  posterPath: string;
  name: string;
  rating: number;
};

export const MovieCard = ({ posterPath, name, rating }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden h-full group">
      <div className="relative w-full aspect-2/3 overflow-hidden">
        <Image
          src={posterUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="px-3 pb-3">
        <div className="flex gap-1 items-center mb-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 dark:text-white dark:fill-white" />
          <span className="text-sm font-medium">{rating?.toFixed(1)}/10</span>
        </div>

        <CardTitle className="text-sm sm:text-base font-semibold line-clamp-2 leading-tight">
          {name}
        </CardTitle>
      </div>
    </Card>
  );
};
