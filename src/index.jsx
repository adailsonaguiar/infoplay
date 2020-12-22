import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainRoute from "./pages/MainRoute.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MainRoute>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MainRoute>

      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
