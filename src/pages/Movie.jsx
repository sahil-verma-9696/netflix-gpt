import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { TMDB_MOVIE_BACK_DROP_POSTER, TMDB_MOVIE_POSTER } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


function Movie() {
  const { movie_id } = useParams();
  useMovieDetails(movie_id);

  const movieDetails = useSelector((store) => store.movies?.movieDetails[movie_id]);
  
  console.log(movieDetails)

  if (!movieDetails) return;


  const {
    poster_path,
    backdrop_path,
    vote_average,
    overview,
    tagline,
    runtime,
    genres,
    title,
    release_date,
    adult,
    production_companies: [{ origin_country }],
  } = movieDetails;

  function getTimeFormate(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    return `${hours} hr ${mins} min`;
  }

  return (
    <div className="movie-page bg-violet-500">
      <div className="top-menu w-full bg-red-50">
        <ul className="w-fit m-auto flex gap-8 text-lg">
          <li>Overview</li>
          <li>Media</li>
          <li>Fandom</li>
          <li>Share</li>
        </ul>
      </div>

      <div className="Movie-detail-banner w-full h-[550px] relative overflow-hidden ">
        <div className=" z-10 absolute top-6 left-20 flex items-center  ">
          <div className="poster-wrapper rounded-md w-[300px] h-[450px] overflow-hidden">
            <img
              className="size-full object-cover"
              src={TMDB_MOVIE_POSTER+poster_path}
              alt=""
            />
          </div>

          <div className="details w-4/6 ml-6 text-white">
            <h1 className="text-4xl font-bold">
              {title}{" "}
              <span className="text-slate-100 font-normal">
                ({release_date?.substring(0, 4)})
              </span>
            </h1>
            <h2 className="flex text-white gap-1 font-semibold items-center">
              {!adult ? (
                <div className="size-7 flex justify-center items-center text-lg font-semibold text-slate-100 border-2 p-[2px]">
                  PG
                </div>
              ) : (
                <div className="text-xl font-semibold text-red-500 border-2 border-red-600  rounded-full size-7 flex justify-center items-center">
                  18
                </div>
              )}
              <span className="">{release_date}</span>
              <span>({origin_country})</span>
              <span className="dot size-[6px] bg-white rounded-full"></span>
              <ul className="flex">
                {genres.map((e) => (
                  <li key={e.id}>{e.name},</li>
                ))}
              </ul>
              <span className="dot size-[6px] bg-white rounded-full"></span>
              <span>{getTimeFormate(runtime)}</span>
            </h2>

            <div className="my-2 size-12 rounded-full flex justify-center items-center bg-purple-500 font-bold text-lg [text-shadow:_0_2px_4px_black]">
              {Math.floor(vote_average * 10)}%
            </div>
            <div className="buttons flex gap-4 items-center my-2">
              <div className="size-8 bg-violet-500 border-2 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faListUl} />
              </div>
              <div className="size-8 bg-violet-500 border-2 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="font-bold">
                <FontAwesomeIcon icon={faPlay} />
                <span> Play Trailer</span>
              </div>
            </div>
            <h2 className="italic font-semibold text-xl text-slate-200 ">
              {tagline}
            </h2>
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-slate-100 text-wrap">{overview}</p>
          </div>
        </div>

        <img
          className="bg-img z-0 absolute top-0 h-full w-1/2 object-cover scale-125 translate-x-full"
          src={TMDB_MOVIE_BACK_DROP_POSTER + backdrop_path}
          alt=""
        />
      </div>
    </div>
  );
}

export default Movie;
