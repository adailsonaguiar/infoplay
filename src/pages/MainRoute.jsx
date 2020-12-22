import React from "react";
import styled, { css } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainRoute = ({ children }) => {
  const Main = styled.main`
    ${({ theme }) => css`
      flex: 1;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      padding-top: 94px;
      padding-left: 5%;
      padding-right: 5%;

      @media (max-width: 800px) {
        padding-top: 40px;
      }
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
