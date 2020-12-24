import styled, { css } from "styled-components";
import media from "styled-media-query";
import Shimmer from "../../components/Shimmer";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Poster = styled.img`
  width: 40%;
  margin-right: 2rem;
  border-radius: 8px;

  ${media.greaterThan("small")`
    width: 15rem;
  `};
`;

export const InfoWrapper = styled.div``;

export const PostShimmer = styled(Shimmer)`
  height: 15rem;
  width: 40%;
  height: 18rem;
  margin-right: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  ${media.greaterThan("small")`
    width: 15rem;
  `};
`;

export const SpaceWrapper = styled.section`
  margin-bottom: 2rem;
`;

export const InfoText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const ImdbIcon = styled.img`
  width: 38px;
  margin-left: 2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
`;

export const InfoTextShimmer = styled(Shimmer)`
  width: 60%;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const InfoTextShimmer2 = styled(Shimmer)`
  width: 40%;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
