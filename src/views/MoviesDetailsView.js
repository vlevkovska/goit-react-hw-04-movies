import { useRouteMatch, Route, useParams, Switch } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Reviews/Reviews";

export default function MoviesDetailsView() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  //   const { original_title } = useParams();

  return (
    <>
      {/* <PageHeading text={`Movie "${original_title}"`} /> */}
      <MovieDetails movieId={movieId} />

      <Switch>
        <Route path={`${url}/cast`} exact>
          <Cast movieId={movieId} />
        </Route>
        <Route path={`${url}/reviews`} exact>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
