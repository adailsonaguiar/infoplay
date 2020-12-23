import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Provider from "./contexts";
import Routes from "./routes";

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
