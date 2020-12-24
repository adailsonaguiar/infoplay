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

    ${media.greaterThan("large")`
      padding-left: 25rem;
      padding-right: 25rem;
    `}

    ${media.greaterThan("medium")`
      padding-left: 15rem;
      padding-right: 15rem;
    `}
  `}
`;

export const LogoImage = styled.img`
  max-width: 8rem;
  margin-right: 2rem;

  ${media.greaterThan("medium")`
    max-width: 10rem;     
  `}
`;

export const LogoImageRounded = styled.img`
  max-width: 4rem;
  margin-right: 2rem;
`;

export const IconSearch = styled(MdSearch)`
  color: #fff;
  font-size: 3.2rem;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LogoWrapperMobile = styled.div`
  ${media.greaterThan("small")`
    display: none;
  `}
`;

export const LogoWrapperDesk = styled.div`
  ${media.lessThan("small")`
    display: none;
  `}
`;
