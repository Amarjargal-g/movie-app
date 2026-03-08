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
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-1 max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-16">
        <UpcomingMovies movies={results} showSeeMore={false} />

        <div className="mt-20">
          <UpcomingPagination searchParams={searchParams} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpcomingMoviesPage;
