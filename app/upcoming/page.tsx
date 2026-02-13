import { getUpcomingMovies } from "@/lib/api";
import { UpcomingMovies } from "@/app/my-components/UpcomingMovies";
import { Footer } from "@/app/my-components/Footer";

const UpcomingMoviesPage = async () => {
  const { results } = await getUpcomingMovies();
  return (
    <div>
      <UpcomingMovies movies={[results]} />
      <Footer />
    </div>
  );
};
export default UpcomingMoviesPage;
