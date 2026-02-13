import { Footer } from "@/app/my-components/Footer";
import { PopularMovies } from "@/app/my-components/PopularMovies";
import { getPopularMovies } from "@/lib/api";

const PopularMoviesPage = async () => {
  const { results } = await getPopularMovies();
  return (
    <div>
      <PopularMovies movies={results} />
      <Footer />
    </div>
  );
};
export default PopularMoviesPage;
