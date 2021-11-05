import { useState, useEffect } from "react";
import {
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import * as themoviedbAPI from "../../services/themoviedb-api";
import styles from "./MovieDetails.module.css";

export default function MovieDetails({ movieId }) {
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  function handleGoBack() {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  }

  useEffect(() => {
    themoviedbAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <></>;
  }

  return (
    <div>
      {movie && (
        <>
          <button
            className={styles.btn}
            onClick={handleGoBack}
            style={{ display: "block" }}
          >
            &#102229; Go back
          </button>
          <div className={styles.card}>
            <div className={styles.card__inner}>
              <header className={styles.card__header}>
                <nav className={styles.card__nav}></nav>
              </header>
              <main className={styles.card__body}>
                <div className={styles.card__info}>
                  <h1 className={styles.card__title}>{movie.title}</h1>
                  <p className={styles.card__slug}>{movie.overview}</p>
                  <p>Popularity: {movie.popularity}</p>
                  <p>Rating: {movie.vote_average}</p>
                  <div className={styles.card__rating}></div>
                  <img
                    className={styles.card__img}
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
              </main>

              <footer className={styles.card__footer}>
                <ul className={styles.list__info}>
                  <li>Release date: {movie.release_date}</li>
                  <li>{movie.runtime} min</li>
                  <li>
                    Genres:{" "}
                    <ul>
                      {movie.genres
                        ? movie.genres.map(({ id, name }) => (
                            <li key={id} className={styles.li}>
                              {name}
                            </li>
                          ))
                        : "no genres"}
                    </ul>
                  </li>
                </ul>
              </footer>
            </div>
            <div
              className={styles.blur_back}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}
            ></div>
          </div>
          <hr />
          <ul className={styles.list__nav}>
            <li className={styles.li}>
              <NavLink
                className={styles.a}
                activeClassName={styles.activeLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { ...location.state, id: movieId },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                className={styles.a}
                activeClassName={styles.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: { ...location.state, id: movieId },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
