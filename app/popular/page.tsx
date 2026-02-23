import { Footer } from "@/app/my-components/Footer";
import { PopularMovies } from "@/app/my-components/PopularMovies";
import { getPopularMovies } from "@/lib/api";

const PopularMoviesPage = async () => {
  const { results } = await getPopularMovies("1");
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <PopularMovies movies={results} />
      </div>
      <Footer />
    </div>
  );
};
export default PopularMoviesPage;
