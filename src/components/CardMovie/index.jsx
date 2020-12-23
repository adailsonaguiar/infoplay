import * as S from "./styles";

export default function CardMovie({ movie }) {
  return (
    <S.CardWrapper backgroundImage={movie.Poster}>
      <S.MovieInfo>
        <S.Title>{movie.Title}</S.Title>
        <S.MoreInfo>
          <S.Imdb></S.Imdb>
          <S.Year>{movie.Year}</S.Year>
        </S.MoreInfo>
      </S.MovieInfo>
    </S.CardWrapper>
  );
}
