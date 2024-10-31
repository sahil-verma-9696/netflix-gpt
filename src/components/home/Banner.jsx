import React from "react";
import { useSelector } from "react-redux";
import { TMDB_MOVIE_BACK_DROP_POSTER } from "../../utils/constants";

function Banner() {
  const trendingMovies = useSelector(
    (store) => store?.movies?.trending?.movies?.results
  );
  if (!trendingMovies) return;
  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  let rand = Math.floor(getRandomInRange(1,trendingMovies?.length))
  const imgUrl = trendingMovies[rand]?.backdrop_path;
  const originalTitle = trendingMovies[rand]?.original_title
  console.log()
  return (
    <div
      className={
        "Banner-banner-wrapper drop-shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 pl-8 gap-2 w-full h-56 flex items-center justify-between border-2 rounded-b-xl"
      }
    >
      <h1 className="text-5xl font-extrabold [text-shadow:_0_2px_4px_black] text-white">{originalTitle}</h1>
      <img
        className="w-1/2 h-full object-cover bg-top  rounded-lg"
        src={TMDB_MOVIE_BACK_DROP_POSTER + imgUrl}
        alt="trending movie poster"
      />
    </div>
  );
}

export default Banner;
