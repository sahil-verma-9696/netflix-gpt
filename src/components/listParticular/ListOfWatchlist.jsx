import React from "react";
import MovieList from "./MovieList";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ListOfWatchlist = () => {
  const { watchlistId } = useParams();

  const watchLists = useSelector((store) => store.movies?.watchLists);
  const [list] = watchLists?.filter((list) => list.id === watchlistId);
  console.log(list)
  return (
    <div className="size-full flex">
      <SideBar
        movie={list?.movies[0]}
        totalMovies={list?.movies.length}
        discription={list?.discription}
        title={list?.name}
      />
      <MovieList />
    </div>
  );
};

export default ListOfWatchlist;
