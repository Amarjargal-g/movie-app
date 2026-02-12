// import { Header } from "@/components/ui/Header";
import { PopularMovies } from "@/components/my-components/PopularMovies";
import { TopMovies } from "@/components/my-components/TopMovies";
import { getPopularMovies } from "../lib/api";
import { getUpcomingMovies } from "../lib/api";
import { getTopMovies } from "../lib/api";
import { UpcomingMovies } from "@/components/my-components/UpcomingMovies";
import { Hero } from "@/components/my-components/Hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Footer } from "@/components/my-components/Footer";

const Home = async () => {
  const { results: popular } = await getPopularMovies();
  const { results: upcoming } = await getUpcomingMovies();
  const { results: top } = await getTopMovies();

  return (
    <div className="w-[375]">
      <div>
        <Carousel className="w-full max-w-7xl mx-auto px-12">
          <CarouselContent>
            {popular.slice(0, 3).map((movie, index) => (
              <CarouselItem key={movie.id}>
                <Hero
                  key={index}
                  backdrop_path={movie.backdrop_path}
                  name={movie.title}
                  rating={movie.vote_average}
                  description={movie.overview}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </div>
        </Carousel>
      </div>
      <PopularMovies movies={popular} />
      <UpcomingMovies movies={upcoming} />
      <TopMovies movies={top} />
      <Footer />
    </div>
  );
};

export default Home;
