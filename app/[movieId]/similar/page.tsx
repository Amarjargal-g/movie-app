import Link from "next/link";
import { getMovieById, getSimilarMovies } from "@/lib/api";
import { MovieCard } from "@/app/my-components/MovieCard";

type SimilarPageProps = {
  params: Promise<{ movieId: string }>;
  searchParams: Promise<{ page?: string }>;
};

const SimilarPage = async ({ params, searchParams }: SimilarPageProps) => {
  const { movieId } = await params;
  const { page = "1" } = await searchParams;

  const [movie, similar] = await Promise.all([
    getMovieById(movieId),
    getSimilarMovies(movieId, page),
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-480 mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">More like {movie.title}</h1>
          <Link
            href={`/${movieId}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to movie
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {similar.results?.map(
            (item: {
              id: number;
              poster_path: string;
              title: string;
              vote_average: number;
            }) => (
              <Link key={item.id} href={`/${item.id}`}>
                <MovieCard
                  posterPath={item.poster_path}
                  name={item.title}
                  rating={item.vote_average}
                />
              </Link>
            ),
          )}
        </div>

        <div className="mt-10 flex justify-end gap-4 text-sm">
          {Number(page) > 1 && (
            <Link
              href={`/${movieId}/similar?page=${Number(page) - 1}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Previous
            </Link>
          )}
          {similar.total_pages > Number(page) && (
            <Link
              href={`/${movieId}/similar?page=${Number(page) + 1}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
