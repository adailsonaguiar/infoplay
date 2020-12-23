import React, { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default AppProvider;
