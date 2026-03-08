import { Genre, GenreList, Movie, Response } from "./type";

const baseUrl = process.env.BASE_URL;

const token = process.env.TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (page?: string | undefined) => {
  const response = await fetch(
    `${baseUrl}/movie/popular?language=en-US&page=${page ?? 1}`,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getUpcomingMovies = async (page: string | undefined) => {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?language=en-US&page=${page ?? 1}`,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getTopMovies = async (page: string | undefined) => {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?language=en-US&page=${page ?? 1} `,
    options,
  );
  const movies = await response.json();

  return movies;
};

export const getMovieById = async (movieId: string): Promise<Movie> => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}?language=en-US`,
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
    `${baseUrl}/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    options,
  );
  const movies = await response.json();
  return movies;
};

export const getGenres = async (): Promise<GenreList> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    options,
  );
  const movies = await response.json();
  return movies;
};

export const getMoviesByGenre = async (genreIds: string): Promise<Response> => {
  const response = await fetch(
    `${baseUrl}/discover/movie?language=en&with_genres=${genreIds}`,
    options,
  );

  return response.json();
};
export type { Genre };

export const getMovieVideos = async (movieId: string) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/videos?language=en-US`,
    options,
  );
  const movies = await response.json();
  return movies;
};

export const getMovieCredits = async (movieId: string) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/credits?language=en-US`,
    options,
  );
  return response.json();
};

export const getSimilarMovies = async (movieId: string) => {
  const response = await fetch(
    `${baseUrl}/movie/${movieId}/similar?language=en-US`,
    options,
  );
  return response.json();
};
