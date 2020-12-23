import styled, { css } from "styled-components";

export const Container = styled.main``;
export const Poster = styled.img`
  width: 100%;
`;

export const SpaceWrapper = styled.section`
  margin-bottom: 2rem;
`;
export const InfoText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
