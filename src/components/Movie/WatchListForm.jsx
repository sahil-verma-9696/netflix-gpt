import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, createWatchList } from "../../store/moviesSlice";
import { toggleWatchListForm } from "../../store/appStatesSlice";
import { useParams } from "react-router-dom";

const WatchListForm = () => {
  const {movie_id} = useParams();

  const nameRef = useRef();
  const discriptionRef = useRef();
  const movieDetails = useSelector(store=>store.movies?.movieDetails)
  const dispatch = useDispatch();

  function handleCreateWatchList() {
    const name = nameRef.current.value;
    const discription = discriptionRef.current.value;

    if (name !== "") {
      dispatch(createWatchList({ id:name, name:name, discription:discription }));
      dispatch(addToWatchList({watchListId:name,movie:movieDetails[movie_id]}))
      dispatch(toggleWatchListForm())
      
    }else{
      alert("Mention the watchlist name")
    }
  }
  return (
    <div
      className="form p-2 rounded-lg text-black bg-white 
        sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
    >
      <div>
        <h1 className="mb-2 font-semibold">Create WatchList</h1>

        <label htmlFor="name" className="cursor-pointer font-semibold">
          Name :
        </label>
        <input
          ref={nameRef}
          className="pl-2 border-b border-black outline-none "
          type="text"
          id="name"
          placeholder="Watch list name"
        />
        <br />
        <textarea
          ref={discriptionRef}
          className="w-full h-20 mt-2 rounded-lg resize-none pl-2 outline-none"
          type="text"
          id="about"
          placeholder="Discription..."
        />
        <button
          className="px-2 py-1 rounded-lg bg-blue-500 text-white font-semibold "
          onClick={handleCreateWatchList}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default WatchListForm;
