import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import api from "../../config/config";

import * as S from "./styles";

export default function DetailMovie() {
  const API_KEY = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  async function getMovie() {
    const res = await api.get(`?apikey=${API_KEY}&i=${id}&plot=full`);
    if (res) setMovie(res.data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <S.Container>
      <S.Poster src={movie.Poster} />

      <Heading lineLeft lineColor="secondary">
        {movie.Title}
      </Heading>
      <S.InfoText>{movie.Genre}</S.InfoText>
      <S.SpaceWrapper>
        <S.InfoText>{movie.Runtime}</S.InfoText>
        <S.InfoText>IMDB {movie.imdbRating}</S.InfoText>
      </S.SpaceWrapper>
      <S.SpaceWrapper>
        <S.InfoText>{movie.Plot}</S.InfoText>
      </S.SpaceWrapper>
      <S.SpaceWrapper>
        <S.InfoText>Director: {movie.Director}</S.InfoText>
        <S.InfoText>Release: {movie.Released}</S.InfoText>
        <S.InfoText>Actors: {movie.Actors}</S.InfoText>
      </S.SpaceWrapper>
    </S.Container>
  );
}
