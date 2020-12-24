import React, { useContext } from "react";
import debounce from "lodash.debounce";
import logo from "../../assets/imgs/logo.svg";
import logoRounded from "../../assets/imgs/logoRounded.svg";
import api from "../../config/config";
import TextField from "../TextField";
import { MoviesContext } from "../../contexts";

import * as S from "./styles";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const API_KEY = process.env.REACT_APP_KEY;
  const { setListSearch } = useContext(MoviesContext);
  const history = useHistory();

  async function getData(searchTherm) {
    try {
      const res = await api.get(`?s=${searchTherm}&apikey=${API_KEY}`);
      if (res.data.Search) setListSearch(res.data.Search);
      history.push("/movies");
    } catch (error) {
      console.error(error.response);
    }
  }

  const searchDebounce = debounce(getData, 800);

  function handleValueInput(e) {
    const { value } = e.target;
    searchDebounce(value);
  }

  return (
    <S.MenuWrapper>
      <S.SearchWrapper>
        <S.LogoWrapperDesk>
          <Link to="/">
            <S.LogoImage src={logo} alt="infoplay logo" />
          </Link>
        </S.LogoWrapperDesk>
        <S.LogoWrapperMobile>
          <Link to="/">
            <S.LogoImageRounded src={logoRounded} alt="infoplay logo" />
          </Link>
        </S.LogoWrapperMobile>
        <TextField
          type="text"
          placeholder="Sobre qual filme você quer saber?"
          onChange={handleValueInput}
        />
      </S.SearchWrapper>
    </S.MenuWrapper>
  );
};

export default Navbar;
