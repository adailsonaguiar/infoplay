import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";
import MainRoute from "./pages/MainRoute.jsx";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import MovieList from "./pages/MovieList";

export default function Routes() {
  return (
    <BrowserRouter>
      <MainRoute>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={DetailMovie} />
          <Route exact path="/movies" component={MovieList} />
        </Switch>
      </MainRoute>

      <GlobalStyles />
    </BrowserRouter>
  );
}
