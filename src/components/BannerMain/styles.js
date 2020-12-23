import styled, { css } from "styled-components";
import Button from "../Button";

export const BannerMainContainer = styled.section`
  ${({ theme, backgroundImage }) => css`
    height: 80vh;
    color: ${theme.colors.white}
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;

    @media (max-width: 800px) {
      height: auto;
      min-height: 50vh;
    }
  `}
`;

export const ContentAreaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1``;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  line-height: 1.5;
  margin-right: 10px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 2.6rem;

  @media (min-width: 800px) {
    font-size: 3.5rem;
  }
`;

export const WatchButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    margin-left: auto;
    margin-right: auto;
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
  `}
`;
