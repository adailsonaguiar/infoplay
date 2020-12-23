import React, { useContext, useState } from "react";
import debounce from "lodash.debounce";
import logo from "../../assets/imgs/logo.svg";
import api from "../../config/config";
import TextField from "../TextField";
import { MoviesContext } from "../../contexts";

import * as S from "./styles";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const API_KEY = process.env.REACT_APP_KEY;
  const { setMovies } = useContext(MoviesContext);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  async function getData(searchTherm) {
    try {
      const res = await api.get(`?s=${searchTherm}&apikey=${API_KEY}`);
      if (res.data.Search) setMovies(res.data.Search);
      history.push("/");
    } catch (error) {
      console.error(error.response);
    }
  }

  const searchDebounce = debounce(getData, 800);

  function handleValueInput(e) {
    const { value } = e.target;
    // setSearchTherm(value);
    searchDebounce(value);
  }

  return (
    <S.MenuWrapper>
      <S.SearchDeskWrapper>
        <a href="/">
          <S.LogoImage src={logo} alt="infoplay logo" />
        </a>
        <TextField
          type="text"
          placeholder="Sobre qual filme você quer saber?"
          onClickClear={() => {}}
          onChange={handleValueInput}
        />
      </S.SearchDeskWrapper>
      <S.SearchMobileWrapper>
        {!isOpen && (
          <a href="/">
            <S.LogoImage src={logo} alt="infoplay logo" />
          </a>
        )}
        {isOpen && (
          <TextField
            type="text"
            placeholder="Sobre qual filme você quer saber?"
            onClickClear={() => {
              setIsOpen(!isOpen);
            }}
            onChange={handleValueInput}
          />
        )}
      </S.SearchMobileWrapper>
      {!isOpen && (
        <S.ButtonSearch onClick={() => setIsOpen(!isOpen)}>
          <S.IconSearch />
        </S.ButtonSearch>
      )}
    </S.MenuWrapper>
  );
};

export default Navbar;
