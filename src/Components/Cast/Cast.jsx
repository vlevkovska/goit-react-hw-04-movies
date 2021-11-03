import { useState, useEffect } from "react";
import * as themoviedbAPI from "../../services/themoviedb-api";
import styles from "./Cast.module.css";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    themoviedbAPI.getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <div className={styles.castThumb}>
          <ul className={styles.castList}>
            {cast.cast.map(({ id, character, name, profile_path }) => (
              <li key={id} className={styles.castList__item}>
                <img
                  className={styles.actorProfilePic}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={100}
                />
                <span className={styles.actorName}>{name}</span>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
