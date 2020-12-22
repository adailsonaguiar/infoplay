import React from "react";
import logo from "../../assets/imgs/logo.png";
import { MenuWrapper, LogoImage, ButtonLink } from "./styles";

const Navbar = () => (
  <MenuWrapper>
    <a href="/">
      <LogoImage src={logo} alt="infoplay logo" />
    </a>
  </MenuWrapper>
);

export default Navbar;
