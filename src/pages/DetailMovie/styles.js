import styled, { css } from "styled-components";
import media from "styled-media-query";
import Shimmer from "../../components/Shimmer";

export const Container = styled.main`
  ${media.greaterThan("small")`
   display: flex
  `}
`;

export const Poster = styled.img`
  width: 100%;

  ${media.greaterThan("small")`
    width: 30%;
  `}
`;

export const InfoWrapper = styled.div`
  ${media.greaterThan("small")`
    margin-left: 4rem;
  `}
`;

export const PostShimmer = styled(Shimmer)`
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;
`;

export const SpaceWrapper = styled.section`
  margin-bottom: 2rem;
`;
export const InfoText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
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
