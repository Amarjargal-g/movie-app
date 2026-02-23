import { getUpcomingMovies } from "@/lib/api";
import { UpcomingMovies } from "@/app/my-components/UpcomingMovies";
import { Footer } from "@/app/my-components/Footer";

const UpcomingMoviesPage = async () => {
  const { results } = await getUpcomingMovies("1");
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <UpcomingMovies movies={[results]} />
      </div>
      <Footer />
    </div>
  );
};
export default UpcomingMoviesPage;
