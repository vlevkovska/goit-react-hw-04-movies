import { Switch, Route } from "react-router";
import { lazy, Suspense } from "react";
// import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import "./App.css";
const HomeView = lazy(() => import("./views/HomeView"));
const MoviesView = lazy(() => import("./views/MoviesView"));
const MoviesDetailsView = lazy(() => import("./views/MoviesDetailsView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

export default function App() {
  return (
    // <Container>
    <div className="container">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeView />
          </Suspense>
        </Route>

        <Route path="/movies/:movieId">
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesDetailsView />
          </Suspense>
        </Route>

        <Route path="/movies">
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesView />
          </Suspense>
        </Route>

        <Route>
          <NotFoundView />
          <Suspense fallback={<div>Loading...</div>}></Suspense>
        </Route>
      </Switch>
      {/* // </Container> */}
    </div>
  );
}
