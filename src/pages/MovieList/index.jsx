import { useContext } from "react";
import CardMovie from "../../components/CardMovie";
import { MoviesContext } from "../../contexts";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";

import * as S from "./styles";

export default function MovieList() {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      <Heading lineLeft lineColor="secondary">
        Search
      </Heading>
      <S.MovieList>
        {movies.listSearch.map((movie, index) => (
          <Link to={`/movie/${movie.imdbID}`} key={index}>
            <CardMovie movie={movie} />
          </Link>
        ))}
      </S.MovieList>
    </>
  );
}
