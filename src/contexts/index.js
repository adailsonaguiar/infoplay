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

  return (
    <MoviesContext.Provider value={{ movies, setHighlights, setListSearch }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default AppProvider;
