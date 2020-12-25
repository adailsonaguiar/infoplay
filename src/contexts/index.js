import React, { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState({ highlights: [], listSearch: [] });

  function setHighlights(highlights) {
    setMovies({ ...movies, highlights });
  }

  function setListSearch(listSearch) {
    setMovies({ ...movies, listSearch });
  }

  function setArrayTop10(arrayTop10) {
    setMovies({ ...movies, arrayTop10 });
  }

  return (
    <MoviesContext.Provider
      value={{ movies, setHighlights, setListSearch, setArrayTop10 }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default AppProvider;
