import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import api from "../../config/config";

import * as S from "./styles";

export default function DetailMovie() {
  const API_KEY = process.env.REACT_APP_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState({ loading: true });

  async function getMovie() {
    const res = await api.get(`?apikey=${API_KEY}&i=${id}&plot=full`);
    if (res) setMovie({ ...res.data, loading: false });
    else setMovie({ ...movie, loading: false });
  }

  function getYouTubeId(youtubeURL) {
    return youtubeURL.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      "$7"
    );
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <S.Container>
      {movie.loading ? (
        <>
          <S.PostShimmer />
          <S.InfoTextShimmer />
          <S.InfoTextShimmer2 />
          <S.InfoTextShimmer />
          <S.InfoTextShimmer2 />
          <S.InfoTextShimmer2 />
          <S.InfoTextShimmer />
        </>
      ) : (
        <>
          <S.Header>
            <S.Poster src={movie.Poster} />
            <Heading>{movie.Title}</Heading>
          </S.Header>
          <S.InfoWrapper>
            <S.SpaceWrapper></S.SpaceWrapper>
            <S.InfoText>{movie.Genre}</S.InfoText>
            <S.SpaceWrapper>
              <S.RowWrapper>
                <S.InfoText>{movie.Runtime}</S.InfoText>
                <S.ImdbIcon src="https://assets.website-files.com/5cd4713f7f96b4b83247d01d/5cd4b1e190d2dee152a71076_imdb.svg" />
                <S.InfoText>{movie.imdbRating}</S.InfoText>
              </S.RowWrapper>
            </S.SpaceWrapper>
            <S.SpaceWrapper>
              <S.InfoText>{movie.Plot}</S.InfoText>
            </S.SpaceWrapper>
            <S.SpaceWrapper>
              <S.InfoText>Director: {movie.Director}</S.InfoText>
              <S.InfoText>Release: {movie.Released}</S.InfoText>
              <S.InfoText>Actors: {movie.Actors}</S.InfoText>
            </S.SpaceWrapper>
            {movie.trailer && (
              <S.SpaceWrapper>
                <S.ResponsiveIframe
                  title="Titulo do Iframe"
                  src={`https://www.youtube.com/embed/${getYouTubeId(
                    movie.trailer
                  )}?autoplay=0&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.SpaceWrapper>
            )}
          </S.InfoWrapper>
        </>
      )}
    </S.Container>
  );
}
