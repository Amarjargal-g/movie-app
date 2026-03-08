import { Star } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const MovieCard = ({ posterPath, name, rating }: any) => {
  return (
    <div className="flex flex-col group">
      <Card className="rounded-2xl border-none bg-card shadow-2xl overflow-hidden p-0">
        <div className="relative w-full aspect-2/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5 bg-card">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold text-sm">
              {rating?.toFixed(1)}
              <span className="text-[10px] text-gray-500 ml-1 font-normal">
                /10
              </span>
            </span>
          </div>

          <CardTitle className="text-sm md:text-base font-medium text-white/90 line-clamp-1 leading-snug">
            {name}
          </CardTitle>
        </div>
      </Card>
    </div>
  );
};
