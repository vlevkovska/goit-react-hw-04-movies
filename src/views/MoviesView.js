import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as themoviedbAPI from "../services/themoviedb-api";

// import PageHeading from "../Components/PageHeading/PageHeading";
import MovieList from "../Components/MovieList/MovieList";

export default function MoviesView() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery) {
      themoviedbAPI
        .fetchSearchMovie(searchQuery)
        .then(({ results }) => setMovies(results));
      setInputValue(searchQuery);
    }
  }, [searchQuery]);

  const handleChange = ({ target }) => {
    setInputValue(target.value.toLowerCase());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      themoviedbAPI
        .fetchSearchMovie(inputValue)
        .then(({ results }) => setMovies(results));

      history.push({ ...history.location, search: `?query=${inputValue}` });
    } else {
      alert("Enter a valid movie title, please");
    }
  };

  return (
    <>
      {/* <PageHeading text="Movies" /> */}
      <form onSubmit={onSubmit}>
        <input
          className="input"
          name="inputValue"
          value={inputValue}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button className="btn" type="submit">
          <span>Search</span>
        </button>
      </form>

      <MovieList movies={movies} />
    </>
  );
}
