import {
  faHeart,
  faHouse,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.appStates.showSideBar);
  return (
    <aside
      className="bg-violet-500 w-full h-fit text-white text-2xl  fixed bottom-0 z-10 
     sm:w-fit sm:px-5 sm:py-4 sm:h-[calc(100vh-80px)] sm:sticky sm:top-[80px]"
    >
      <ul className="flex sm:flex-col gap-4 justify-center">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer ">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faHouse} />
          </span>
          {showSideBar && <span className="text-sm font-semibold">Home</span>}
        </Link>

        <Link
          to={"/watchlist"}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faList} />
          </span>
          {showSideBar && (
            <span className="text-sm font-semibold">Watch list</span>
          )}
        </Link>

        <Link
          to={"/watchlist/favourites"}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {showSideBar && (
            <span className="text-sm font-semibold">Favourites</span>
          )}
        </Link>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </span>
          {showSideBar && (
            <span className="text-sm font-semibold">Profile</span>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
