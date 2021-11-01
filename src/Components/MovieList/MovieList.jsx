import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li className={styles.li} key={id}>
              <Link
                className={styles.a}
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from:
                      location.pathname === "/"
                        ? "/"
                        : "/movies" + location.search,
                  },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
