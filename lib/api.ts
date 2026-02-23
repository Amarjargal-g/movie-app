import { Movie, Response } from "./type";

// const baseUrl = process.env.BASE_URL;

// const popularUrl = "/movie/popular?language=en-US&page=1";
// const upcomingUrl = "/movie/upcoming?language=en-US&page=1";
// const topMoviesUrl = "/movie/top_rated?language=en-US&page=1";

const token = process.env.TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (page: string | undefined) => {
  "/movie/popular?language=en-US&page=1";
  const response = await fetch(
    `${process.env.BASE_URL}/movie/popular?language=en-US&page=${page && 1}";
`,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getUpcomingMovies = async (page: string | undefined) => {
  const response = await fetch(
    `${process.env.BASE_URL}/movie/upcoming?language=en-US&page=${page && 1}`,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getTopMovies = async (page: string | undefined) => {
  const response = await fetch(
    `${process.env.BASE_URL}/movie/top_rated?language=en-US&page=${page && 1}`,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const response = await fetch(
    `${process.env.BASE_URL}/movie/${movieId}?language=en-USa`,
    options,
  );
  const movies = await response.json();
  return movies;
};

export const getMovieBySearchValue = async (
  searchValue: string,
  page = 1,
): Promise<Response> => {
  const response = await fetch(
    `${process.env.BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    options,
  );
  const movies = await response.json();
  return movies;
};
