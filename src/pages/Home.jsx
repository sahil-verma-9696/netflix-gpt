import React, { useEffect } from "react";
import { TMDB_API_OPTION, TMDB_NOWPLAYINGMOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./../store/moviesSlice";
function Home() {
  const dispatch = useDispatch();
  async function nowPlayingMovies() {
    const responce = await fetch(TMDB_NOWPLAYINGMOVIES, TMDB_API_OPTION);
    const data = await responce.json();
    dispatch(addNowPlayingMovies(data));
    console.log(data);
  }

  useEffect(() => {
    nowPlayingMovies();
  }, []);

  return (
    <div className="size-full flex justify-center items-center font-extrabold text-5xl">
      Movies
    </div>
  );
}

export default Home;
