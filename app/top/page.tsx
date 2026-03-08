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
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-1 max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-16">
        <TopMovies movies={results} showSeeMore={false} />

        <div className="mt-20">
          <TopPagination searchParams={searchParams} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TopMoviesPage;
