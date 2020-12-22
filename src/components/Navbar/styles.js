import styled, { css } from "styled-components";

export const MenuWrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    height: 7rem;
    z-index: 100;

    position: fixed;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    align-items: center;

    background: ${theme.colors.mainBg};
    border-bottom: 2px solid ${theme.colors.primary};
  `}
`;

export const LogoImage = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;
