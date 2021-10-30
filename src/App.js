import { Switch, Route } from "react-router";
// import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";

// import "./App.css";

export default function App() {
  return (
    // <Container>
    <>
      <AppBar />
      <Route path="/" exact>
        <HomeView />
      </Route>
      {/* // </Container> */}
    </>
  );
}
