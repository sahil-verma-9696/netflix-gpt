import React from "react";
import { TMDB_MOVIE_POSTER } from "../utils/constants";
import { Link } from "react-router-dom";

function MovieCard({ item }) {
  const { original_title, poster_path, release_date, vote_average, id } = item;
  return (
    <Link to={"/movie/" + id}>
      <div className="movie-card min-w-[220px]  rounded-lg overflow-hidden">
        <div className="imgWrapper w-full h-4/5 relative bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <img
            className="size-full object-cover"
            src={TMDB_MOVIE_POSTER + poster_path}
            alt=""
          />
          <span className="absolute size-10 text-center bottom-0 translate-y-1/2 translate-x-1/2 bg-violet-500 rounded-full flex justify-center items-center font-bold text-white">
            {Math.ceil(vote_average * 10)}%
          </span>
        </div>
        <h1 className="text-wrap font-bold mt-4">{original_title}</h1>
        <h2>{release_date}</h2>
      </div>
    </Link>
  );
}

export default MovieCard;
