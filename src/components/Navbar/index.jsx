import React, { useState } from "react";
import logo from "../../assets/imgs/logo.svg";
import TextField from "../TextField";
import * as S from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.MenuWrapper>
      <S.SearchDeskWrapper>
        <a href="/">
          <S.LogoImage src={logo} alt="infoplay logo" />
        </a>
        <TextField
          placeholder="Sobre qual filme você quer saber?"
          onClickClear={() => {}}
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
            placeholder="Sobre qual filme você quer saber?"
            onClickClear={() => setIsOpen(!isOpen)}
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
