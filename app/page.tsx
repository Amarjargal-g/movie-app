// import { Header } from "@/components/ui/Header";
// import { Hero } from "@/components/ui/Hero";
import { PopularMovies } from "@/components/ui/PopularMovies";
import { TopMovies } from "@/components/ui/TopMovies";
import { getPopularMovies } from "../lib/api";
import { getUpcomingMovies } from "../lib/api";
import { getTopMovies } from "../lib/api";
import { UpcomingMovies } from "@/components/ui/UpcomingMovies]";
import { Hero } from "@/components/ui/Hero";

const Home = async () => {
  const { results: popular } = await getPopularMovies();
  const { results: upcoming } = await getUpcomingMovies();
  const { results: top } = await getTopMovies();

  return (
    <div>
      <PopularMovies movies={popular} />
      <UpcomingMovies movies={upcoming} />
      <TopMovies movies={top} />
    </div>
  );
};

export default Home;
