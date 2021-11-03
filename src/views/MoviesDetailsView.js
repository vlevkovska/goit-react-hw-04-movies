import { useRouteMatch, Route, useParams, Switch } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Reviews/Reviews";

export default function MoviesDetailsView() {
  const { path } = useRouteMatch();
  const { movieId } = useParams();

  return (
    <>
      <MovieDetails movieId={movieId} />

      <Switch>
        <Route path={`${path}/cast`} exact>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${path}/reviews`} exact>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
