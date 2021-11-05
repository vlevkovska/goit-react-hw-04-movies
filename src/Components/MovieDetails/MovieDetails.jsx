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
          <div className={styles.card}>
            <button
              className={styles.btn}
              onClick={handleGoBack}
              style={{ display: "block" }}
            >
              &#102229; Go back
            </button>
            <div className={styles.card__header}>
              {/* <div className={styles.card__inner}> */}
              {/* <header className={styles.card__header}>
                <nav className={styles.card__nav}></nav>
              </header> */}
              {/* <main className={styles.card__body}>*/}

              <img
                className={styles.card__img}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className={styles.card__info}>
              <h1 className={styles.card__title}>{movie.title}</h1>

              <p>Popularity: {movie.popularity}</p>
              <span className={styles.card__rating}>
                Rating: {movie.vote_average}
              </span>
              <ul className={styles.list__info}>
                <li>Release date: {movie.release_date}</li>
                <li>{movie.runtime} min</li>
              </ul>
              <div>
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
              </div>

              <div className={styles.card__footer}>
                <p className={styles.card__slug}>{movie.overview}</p>
              </div>

              <div className={styles.list__nav}>
                <ul>
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
              </div>
            </div>
          </div>

          <div
            className={styles.blur_back}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          ></div>
        </>
      )}
    </div>
  );
}
