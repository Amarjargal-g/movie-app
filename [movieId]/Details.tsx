import { getMovieById } from "@/lib/api";

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

async function Details({ params }: DetailsPageProps) {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Details;
