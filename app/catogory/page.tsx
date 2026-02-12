import { getUpcomingMovies } from "@/lib/api";
import { UpcomingMovies } from "@/components/my-components/UpcomingMovies";
import { Header } from "@/components/my-components/Header";
import { Footer } from "@/components/my-components/Footer";

const MoviesPage = async () => {
  const { results } = await getUpcomingMovies();
  return (
    <div>
      <Header />
      <UpcomingMovies movies={[results]} />
      <Footer />
    </div>
  );
};
export default MoviesPage;
