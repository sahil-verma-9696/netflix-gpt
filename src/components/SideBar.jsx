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
    <aside className="px-5 py-4 bg-violet-500  h-[calc(100vh-80px)] text-white text-2xl sticky top-[80px]">
      <ul className="flex flex-col gap-4 justify-center">
        <li className="flex items-center gap-2 cursor-pointer ">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </span>
          {showSideBar && <span className="text-sm font-semibold">Home</span>}
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faList} />
          </span>
          {showSideBar && <span className="text-sm font-semibold">Watch list</span>}
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {showSideBar && <span className="text-sm font-semibold">Favourites</span>}
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <span className="size-12 flex justify-center items-center hover:bg-black hover:bg-opacity-30 rounded-full">
            <FontAwesomeIcon icon={faUser} />
          </span>
          {showSideBar && <span className="text-sm font-semibold">Profile</span>}
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
