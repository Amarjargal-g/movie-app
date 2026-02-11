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
    <div className="flex  m-2 p-2 w-100">
      <Card>
        <CardContent>
          <div className="relative w-50 h-60">
            <Image src={posterUrl} alt={name} fill className="object-cover" />
          </div>
        </CardContent>
        <div className="flex gap-1">
          <Star />
          <CardHeader>{rating}</CardHeader>
        </div>
        <CardTitle>{name}</CardTitle>
      </Card>
    </div>
  );
};
