import { Switch, Route } from "react-router";
// import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import MoviesDetailsView from "./views/MoviesDetailsView";

// import "./App.css";

export default function App() {
  return (
    // <Container>
    <>
      <AppBar />
      <Route path="/" exact>
        <HomeView />
      </Route>

      <Route path="/movies" exact>
        <MoviesView />
      </Route>

      <Route path="/movies/:movieId" exact>
        <MoviesDetailsView />
      </Route>
      {/* // </Container> */}
    </>
  );
}
