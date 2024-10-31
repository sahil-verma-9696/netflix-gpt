import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieListItem from "./MovieListItem";
const MovieList = () => {
  const { watchlistId } = useParams();

  const watchLists = useSelector((store) => store.movies?.watchLists);
  const [list] = watchLists?.filter((list) => list.id === watchlistId);

  if (list?.movies.length === 0)
    return (
      <div className="size-full flex justify-center items-center">
        No movie found in {"{ " + list.name + " }"}
      </div>
    );

  return (
    <div className="mt-4 overflow-y-scroll h-[calc(100vh-100px)] px-8 ">
      {list?.movies?.map((movie) => (
        <MovieListItem
          key={movie.id}
          id={movie.id}
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          overview={movie.overview}
          tagline={movie.tagline}
        />
      ))}
    </div>
  );
};

export default MovieList;
