import React from "react";
import { useSelector } from "react-redux";
import SelectWatchListElement from "./SelectWatchListElement";

const SelectWatchList = () => {
  const watchLists = useSelector((store) => store.movies?.watchLists);
  console.log(watchLists);
  return (
    <div
      className="form p-2 rounded-lg text-black bg-white 
    sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
    >
      <h1 className="font-bold">Select your watch list : </h1>
      <ul className="max-h-44 overflow-y-scroll">
        {watchLists?.map((watchList) => (
          <SelectWatchListElement key={watchList.name} watachList={watchList} />
        ))}
      </ul>
      <button className="bg-purple-500 text-white font-bold px-2 rounded-md mt-2">
        New +
      </button>
    </div>
  );
};

export default SelectWatchList;
