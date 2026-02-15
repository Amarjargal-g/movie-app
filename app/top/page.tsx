import { Footer } from "@/app/my-components/Footer";
import { TopMovies } from "@/app/my-components/TopMovies";
import { getTopMovies } from "@/lib/api";

const TopMoviesPage = async () => {
  const { results } = await getTopMovies();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <TopMovies movies={[results]} />
      </div>
      <Footer />
    </div>
  );
};
export default TopMoviesPage;
