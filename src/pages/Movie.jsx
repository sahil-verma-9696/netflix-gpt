import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { TMDB_MOVIE_BACK_DROP_POSTER } from "../utils/constants";
import { useMovieCastCrew } from "../hooks/useMovieCastCrew";
import CastCont from "../components/Movie/CastCont";
import TxtDetails from "../components/Movie/TxtDetails";
import TopMenu from "../components/Movie/TopMenu";
import Poster from "../components/Movie/Poster";
import SideBar from "../components/Movie/SideBar";

function Movie() {
  const { movie_id } = useParams();
  useMovieDetails(movie_id);
  useMovieCastCrew(movie_id);

  const movieDetails = useSelector(
    (store) => store.movies?.movieDetails[movie_id]
  );

  console.log(movieDetails);

  if (!movieDetails) return;

  const {
    poster_path,
    backdrop_path,
    budget,
    status,
    spoken_languages,
    revenue,
  } = movieDetails;

  return (
    <div className="movie-page w-full">
      <div className="movie-details bg-violet-500 w-full">
        <TopMenu />

        <div className="Movie-detail-banner w-full h-[550px] relative overflow-hidden ">
          <div className=" z-10 absolute top-6 left-20 flex items-center  ">
            <Poster poster_path={poster_path} />
            <TxtDetails movieDetails={movieDetails} />
          </div>

          <img
            className="bg-img z-0 absolute top-0 h-full w-1/2 object-cover scale-125 translate-x-full"
            src={TMDB_MOVIE_BACK_DROP_POSTER + backdrop_path}
            alt=""
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold w-4/5 m-auto mt-6 ">Top Billed Cast</h2>
      <div className="flex w-4/5 m-auto">
        <CastCont />
        <SideBar
          budget={budget}
          status={status}
          spoken_languages={spoken_languages}
          revenue={revenue}
        />
      </div>
    </div>
  );
}

export default Movie;
