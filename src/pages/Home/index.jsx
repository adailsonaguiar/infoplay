import { useContext, useEffect } from "react";
import api from "../../config/config";
import BannerMain from "../../components/BannerMain";
import CardMovie from "../../components/CardMovie";
import { MoviesContext } from "../../contexts";

import * as S from "./styles";
import { Link } from "react-router-dom";

function Home() {
  const API_KEY = process.env.REACT_APP_KEY;
  const { movies, setMovies } = useContext(MoviesContext);

  async function getData() {
    try {
      const res = await api.get(`?s=action&apikey=${API_KEY}`);
      console.log(res);
    } catch (error) {
      console.error(error.response);
    }
  }
  useEffect(() => {
    // getData();
  }, []);
  return (
    <>
      {/* <BannerMain
        url="https://www.youtube.com/watch?v=eLEwNo78f0k"
        title="Fast & Furious 9 – Official Trailer (Universal Pictures) HD"
        description="Genre: Action Thriller  
        Cast: Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris “Ludacris” Bridges, John Cena, Jordana Brewster, Nathalie Emmanuel, Sung Kang, with Helen Mirren and Charlize Theron 
        Director: Justin Lin 
        Written by: Dan Casey
        Based on Characters Created by: Gary Scott Thompson 
        Producers: Neal H. Moritz, Vin Diesel, Jeff Kirschenbaum, Joe Roth, Justin Lin, Clayton Townsend, Samantha Vincent"
      /> */}
      <S.MovieList>
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.imdbID}`} key={index}>
            <CardMovie movie={movie} />
          </Link>
        ))}
      </S.MovieList>
    </>
  );
}

export default Home;
