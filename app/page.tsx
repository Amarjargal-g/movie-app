// import { Header } from "@/components/ui/Header";
import { PopularMovies } from "@/app/my-components/PopularMovies";
import { TopMovies } from "@/app/my-components/TopMovies";
import { getPopularMovies } from "../lib/api";
import { getUpcomingMovies } from "../lib/api";
import { getTopMovies } from "../lib/api";
import { UpcomingMovies } from "@/app/my-components/UpcomingMovies";
import { Hero } from "@/app/my-components/Hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Footer } from "@/app/my-components/Footer";
import { Key } from "react";

const Home = async () => {
  const { results: popular } = await getPopularMovies("1");
  const { results: upcoming } = await getUpcomingMovies("1");
  const { results: top } = await getTopMovies("1");
  return (
    <div className="min-h-screen ">
      <div>
        <Carousel className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <CarouselContent>
            {popular
              .slice(0, 3)
              .map(
                (
                  movie: {
                    id: Key | null | undefined;
                    backdrop_path: string;
                    title: string;
                    vote_average: number;
                    overview: string;
                  },
                  index: Key | null | undefined,
                ) => (
                  <CarouselItem key={movie.id}>
                    <Hero
                      key={index}
                      backdrop_path={movie.backdrop_path}
                      name={movie.title}
                      rating={movie.vote_average}
                      description={movie.overview}
                    />
                  </CarouselItem>
                ),
              )}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="left-2 lg:left-4" />
            <CarouselNext className="right-2 lg:right-4" />
          </div>
        </Carousel>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 mt-12">
        <PopularMovies movies={popular} />
        <UpcomingMovies movies={upcoming} />
        <TopMovies movies={top} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
