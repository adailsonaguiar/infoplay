import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";
import MainRoute from "./pages/MainRoute.jsx";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <MainRoute>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MainRoute>

      <GlobalStyles />
    </BrowserRouter>
  );
}
