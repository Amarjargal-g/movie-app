import { PopularMovies } from "@/app/my-components/MoviePages/PopularMovies";
import { TopMovies } from "@/app/my-components/MoviePages/TopMovies";
import { UpcomingMovies } from "@/app/my-components/MoviePages/UpcomingMovies";
import { getPopularMovies, getUpcomingMovies, getTopMovies } from "../lib/api";
import { HeroCarousel } from "./my-components/Accessories/Hero";
import { Footer } from "@/app/my-components/Accessories/Footer";

const Home = async () => {
  const { results: popular } = await getPopularMovies("1");
  const { results: upcoming } = await getUpcomingMovies("1");
  const { results: top } = await getTopMovies("1");

  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel movies={popular} />

      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24 space-y-32 mt-20 pb-40">
        <PopularMovies movies={popular.slice(0, 12)} />
        <UpcomingMovies movies={upcoming.slice(0, 12)} />
        <TopMovies movies={top.slice(0, 12)} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
