"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";

type Movie = {
  id: number;
  backdrop_path: string;
  title: string;
  vote_average: number;
  overview: string;
};

export function HeroCarousel({ movies }: { movies: Movie[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const displayMovies = movies.slice(0, 5);

  return (
    <div className="relative w-full overflow-hidden group">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {displayMovies.map((movie, index) => (
            <CarouselItem key={index} className="pl-0">
              <HeroItem {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden lg:block">
          <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Carousel>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {displayMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              current === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const HeroItem = ({
  id,
  backdrop_path,
  title,
  vote_average,
  overview,
}: Movie) => {
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="relative w-full h-137.5 sm:h-162.5 lg:h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={backdropUrl}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/40 lg:hidden" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent lg:bg-linear-to-r lg:from-black lg:via-black/20 lg:to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end lg:justify-center p-8 sm:p-12 lg:px-24 z-10 text-white pb-20 lg:pb-0">
        <div className="max-w-3xl space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] lg:text-xs uppercase tracking-[0.4em] text-white/60 font-semibold">
              Now playing
            </p>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight leading-none">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-bold">
              {vote_average.toFixed(1)}/10
            </span>
          </div>
          <p className="text-sm lg:text-lg text-white/80 line-clamp-2 lg:line-clamp-4 max-w-xl leading-relaxed">
            {overview}
          </p>
          <div className="pt-4">
            <Link href={`/${id}`}>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white text-white border-white hover:bg-gray-100 hover:text-black font-semibold rounded-full px-6 py-5 text-base shadow-lg transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-xs ml-0.5">▶</span>
                </div>
                Watch Trailer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
