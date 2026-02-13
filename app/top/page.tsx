import { Footer } from "@/app/my-components/Footer";
import { TopMovies } from "@/app/my-components/TopMovies";
import { getTopMovies } from "@/lib/api";

const TopMoviesPage = async () => {
  const { results } = await getTopMovies();
  return (
    <div>
      <TopMovies movies={[results]} />
      <Footer />
    </div>
  );
};
export default TopMoviesPage;
