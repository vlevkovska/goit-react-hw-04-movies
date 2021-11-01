import { useState, useEffect } from "react";
import * as themoviedbAPI from "../services/themoviedb-api";
// import PageHeading from "../Components/PageHeading/PageHeading";
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
      {/* <PageHeading text="Добро пожаловать" /> */}
      <p>Trending today</p>
      <MovieList movies={movies} />;
    </>
  );
}
