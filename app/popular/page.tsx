import { Footer } from "@/app/my-components/Accessories/Footer";
import { PopularMovies } from "@/app/my-components/MoviePages/PopularMovies";
import { getPopularMovies } from "@/lib/api";
import PopularPagination from "../my-components/Paginations/PopularPagination";

type PopularMoviesPageProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

const PopularMoviesPage = async ({ searchParams }: PopularMoviesPageProps) => {
  const page = (await searchParams).page ?? "1";
  const { results } = await getPopularMovies(page);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <PopularMovies movies={results} />
      </div>
      <PopularPagination searchParams={searchParams} />
      <Footer />
    </div>
  );
};
export default PopularMoviesPage;
