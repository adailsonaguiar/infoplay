import styled from "styled-components";
import media from "styled-media-query";
import Shimmer from "../../components/Shimmer";

export const MovieList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${media.greaterThan("large")`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  `}
`;

export const CardShimmer = styled(Shimmer)`
  width: 15rem;
  height: 22rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;
