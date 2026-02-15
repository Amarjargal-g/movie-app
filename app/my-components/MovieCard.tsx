import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type MovieCardProps = {
  posterPath: string;
  name: string;
  rating: number;
};

export const MovieCard = ({ posterPath, name, rating }: MovieCardProps) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div>
      <Card className=" overflow-hidden">
        <CardContent className="p-3 space-y-1">
          <div className="relative w-full aspect-2/3">
            <Image src={posterUrl} alt="pic" fill className=" object-cover" />
          </div>
        </CardContent>
        <div className="flex gap-1">
          <Star className="h-4 w-4 text-white fill-white m-1 " />
          <span>{rating}/10</span>
        </div>
        <CardTitle className="text-sm sm:text-base line-clamp-2">
          {name}
        </CardTitle>
      </Card>
    </div>
  );
};
