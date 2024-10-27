import React from "react";
import SideBar from "../components/watchlist/SideBar";
import List from "../components/watchlist/List";
import { useSelector } from "react-redux";

const Favourite = () => {
  const nowPlayingMovieslst = useSelector((store) => store?.movies?.favourites);

  if (nowPlayingMovieslst.length === 0)
    return (
      <div className="w-full flex justify-center items-center">
        <div className="bg-gray-400 rounded-xl py-4 px-6 bg-opacity-50">
          <h1 className="text-2xl font-bold">No item found</h1>
        </div>
      </div>
    );

  return (
    <div className="flex">
      <SideBar movie={nowPlayingMovieslst[0]} totalMovies={nowPlayingMovieslst.length} />
      <List list={nowPlayingMovieslst} />
    </div>
  );
};

export default Favourite;
