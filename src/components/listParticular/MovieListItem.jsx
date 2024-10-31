import React from "react";
import { TMDB_MOVIE_BACK_DROP_POSTER } from "../../utils/constants";
import { Link } from "react-router-dom";

const MovieListItem = ({id,backdrop_path,title,release_date,vote_average,overview,tagline}) => {
  return (
    <Link to={"/movie/"+id}>
    <div className="bg-purple-300 w-full flex mt-2 p-2 rounded-xl">
      <div className=" w-52 h-32 rounded-xl overflow-hidden">
        <img
          className="size-full object-cover"
          src={TMDB_MOVIE_BACK_DROP_POSTER + backdrop_path}
          alt=""
        />
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold">
          { title + " "}
          <span className="text-slate-100 font-normal">
            ({ release_date?.substring(0, 4)})
          </span>
        </h1>
        <h2>{tagline}</h2>
        <p>{ vote_average}</p>
        <p className="text-wrap w-96"> { overview?.substring(0, 60)}...</p>
      </div>
    </div>
    </Link>
  );
};

export default MovieListItem;
