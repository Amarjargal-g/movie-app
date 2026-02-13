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
      <Card className="flex overflow-hidden">
        <CardContent className="p-0">
          <div className="relative w-40 h-60">
            <Image src={posterUrl} alt="pic" fill className=" object-cover" />
          </div>
        </CardContent>
        <div className="flex">
          <Star color="#FDE047" />
          <span>{rating}/10</span>
        </div>
        <CardTitle>{name}</CardTitle>
      </Card>
    </div>
  );
};
