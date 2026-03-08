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
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-1 max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-16">
        <PopularMovies movies={results} showSeeMore={false} />

        <div className="mt-20">
          <PopularPagination searchParams={searchParams} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PopularMoviesPage;
