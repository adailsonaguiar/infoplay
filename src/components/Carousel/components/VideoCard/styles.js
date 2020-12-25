import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    border-radius: 4px;
    width: 298px;
    height: 166px;
    text-align: center;

    p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const VideoCardContainer = styled.a`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
  `}

  transition: transform 0.2s;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
