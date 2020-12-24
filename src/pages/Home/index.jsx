import { useContext, useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie";
import { MoviesContext } from "../../contexts";
import { Link } from "react-router-dom";
import axios from "axios";

import * as S from "./styles";
import Heading from "../../components/Heading";

export default function Home() {
  const { movies, setHighlights } = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function mapMoviePattern(movies) {
      const newArrayMovies = movies.map((item) => {
        return {
          ...item,
          Title: item.title,
          Poster: `https://api.streamingmoviesright.com/storage/${item.thumbnail}`,
          Plot: item.synopsis,
          Runtime: item.runtime,
          Genre: item.country,
          imdbID: item.imdb_id,
        };
      });
      return newArrayMovies;
    }

    async function getData() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://api.streamingmoviesright.com/site/movies"
        );
        res && setHighlights(mapMoviePattern(res.data.data.data));
      } catch (error) {
        console.error(error.response);
      }
      setLoading(false);
    }
    !movies.highlights.length && getData();
  }, []);
  return (
    <>
      <Heading lineLeft lineColor="secondary">
        Destaques
      </Heading>
      {loading ? (
        <S.MovieList>
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
          <S.CardShimmer />
        </S.MovieList>
      ) : (
        <S.MovieList>
          {movies.highlights.map((movie, index) => (
            <Link to={`/movie/${movie.imdbID}`} key={index}>
              <CardMovie movie={movie} />
            </Link>
          ))}
        </S.MovieList>
      )}
    </>
  );
}
