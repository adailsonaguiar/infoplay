import React from "react";
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainRoute = ({ children }) => {
  const Main = styled.main`
    ${({ theme }) => css`
      flex: 1;
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      padding-top: 7rem;
      padding-left: 5%;
      padding-right: 5%;
    `}
  `;
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainRoute;
