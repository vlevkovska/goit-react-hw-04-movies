import { useState, useEffect } from "react";
import * as themoviedbAPI from "../services/themoviedb-api";
import MovieList from "../Components/MovieList/MovieList";

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    themoviedbAPI
      .fetchTrendingMovie()
      .then((moviesArr) => setMovies(moviesArr.results));
  }, []);

  return (
    <>
      <p>Trending today</p>
      <MovieList movies={movies} />;
    </>
  );
}
