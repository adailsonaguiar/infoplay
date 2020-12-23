import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  ${({ theme, backgroundImage }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    width: 15rem;
    min-height: 22rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: transform ${theme.transition.default};

    &:hover {
      transform: scale(1.03);
    }
  `}
`;
export const MovieInfo = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
    height: 10rem;
    bottom: 0;
    width: 100%;
    text-align: center;
  `}
`;
export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem;
`;
export const Imdb = styled.p``;
export const Year = styled.p``;
