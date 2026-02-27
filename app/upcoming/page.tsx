import { getUpcomingMovies } from "@/lib/api";
import { UpcomingMovies } from "@/app/my-components/MoviePages/UpcomingMovies";
import { Footer } from "@/app/my-components/Accessories/Footer";
import UpcomingPagination from "../my-components/Paginations/UpcomingPagination";

type UpcomingMoviesPageProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

const UpcomingMoviesPage = async ({
  searchParams,
}: UpcomingMoviesPageProps) => {
  const page = (await searchParams).page ?? "1";
  const { results } = await getUpcomingMovies(page);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <UpcomingMovies movies={results} />
      </div>
      <UpcomingPagination searchParams={searchParams} />
      <Footer />
    </div>
  );
};
export default UpcomingMoviesPage;
