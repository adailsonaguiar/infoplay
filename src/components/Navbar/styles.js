import styled, { css } from "styled-components";
import { MdSearch } from "react-icons/md";
import media from "styled-media-query";

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
    justify-content: space-between;

    background: ${theme.colors.mainBg};
  `}
`;

export const LogoImage = styled.img`
  max-width: 8rem;
  margin-right: 2rem;

  @media (min-width: 800px) {
    max-width: 10rem;
  }
`;

export const ButtonSearch = styled.button`
  background: transparent;
  outline: none;
  border: none;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const IconSearch = styled(MdSearch)`
  color: #fff;
  font-size: 3.2rem;
`;

export const SearchDeskWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const SearchMobileWrapper = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    display: none;
  `}
`;
