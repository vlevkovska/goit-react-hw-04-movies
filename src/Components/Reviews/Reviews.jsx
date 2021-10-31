import { useState, useEffect } from "react";
import * as themoviedbAPI from "../../services/themoviedb-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    themoviedbAPI.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.total_results !== 0 ? (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> There aren't any reviews for this movie.</p>
      )}
    </>
  );
}
