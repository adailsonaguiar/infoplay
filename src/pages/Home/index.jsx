import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie";
import { MoviesContext } from "../../contexts";
import Heading from "../../components/Heading";
import Carousel from "../../components/Carousel";

import * as S from "./styles";

export default function Home() {
  const { movies, setHighlights, setArrayTop10 } = useContext(MoviesContext);
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

    if (!movies.highlights.length) getData();
  }, []);

  useEffect(() => {
    if (movies.highlights.length) {
      function getRamdomHighlight() {
        let arrayCarousel = [];
        for (let i = 0; i < 10; i++) arrayCarousel.push(movies.highlights[i]);

        setArrayTop10(arrayCarousel);
      }
      getRamdomHighlight();
    }
  }, [movies.highlights]);

  return (
    <>
      <Heading lineLeft lineColor="secondary">
        Trailers
      </Heading>
      <Carousel items={movies.arrayTop10} />
      <Heading lineLeft lineColor="secondary">
        Highlights
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
