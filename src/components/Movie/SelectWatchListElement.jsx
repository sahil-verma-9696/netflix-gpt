import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList } from "../../store/moviesSlice";
import { useParams } from "react-router-dom";

const SelectWatchListElement = ({ watachList }) => {
  const {movie_id} = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  console.log(movieDetails);
  return (
    <div
      className=" flex justify-between border-2 border-purple-500 rounded-md px-2 mt-2 cursor-pointer"
      onClick={() => {
        dispatch(
          dispatch(
            addToWatchList({ watchListId: watachList?.name, movie: movieDetails[movie_id] })
          )
        );
      }}
    >
      {watachList?.name ?? "Undefine"}
    </div>
  );
};

export default SelectWatchListElement;
