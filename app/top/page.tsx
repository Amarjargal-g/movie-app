import { Footer } from "@/app/my-components/Accessories/Footer";
import { TopMovies } from "@/app/my-components/MoviePages/TopMovies";
import { getTopMovies } from "@/lib/api";
import TopPagination from "../my-components/Paginations/TopPagination";

type TopMoviesPageProps = {
  searchParams: Promise<{ page: string | undefined }>;
};

const TopMoviesPage = async ({ searchParams }: TopMoviesPageProps) => {
  const page = (await searchParams).page ?? "1";
  const { results } = await getTopMovies(page);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <TopMovies movies={results} />
      </div>
      <TopPagination searchParams={searchParams} />
      <Footer />
    </div>
  );
};
export default TopMoviesPage;
