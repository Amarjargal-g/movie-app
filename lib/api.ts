import { Response } from "./type";

const baseUrl = "https://api.themoviedb.org/3";

const popularUrl = "/movie/popular?language=en-US&page=1";
const upcomingUrl = "/movie/upcoming?language=en-US&page=1";
const topMoviesUrl = "/movie/top_rated?language=en-US&page=1";

const token = process.env.TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (): Promise<Response> => {
  const response = await fetch(`${baseUrl}${popularUrl}`, options);
  const movies = await response.json();
  console.log(movies);
  return movies;
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${baseUrl}${upcomingUrl}`, options);
  const movies = await response.json();

  return movies;
};

export const getTopMovies = async () => {
  const response = await fetch(`${baseUrl}${topMoviesUrl}`, options);
  const movies = await response.json();

  return movies;
};
