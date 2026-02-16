import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org" }],
  },
  env: {
    TMDB_TOKEN:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWU0NWMwOWMyYzZiOWQ1Nzg2ZmFjYzIwNDJhMDVjMCIsIm5iZiI6MTc3MDYwNzk1Ny4zMTcsInN1YiI6IjY5ODk1NTU1ZDBkZGI4MzRhZmY4MTRhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nxYYedmrBAE3geybZo0lFnZUDFDsIqH0T5wtNs3-UBY",
    BASE_URL: "https://api.themoviedb.org/3",
  },
};

export default nextConfig;
