import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const List = () => {
  const { watchlistId } = useParams();

  const watchLists = useSelector((store) => store.movies?.watchLists);
  const list = watchLists?.filter((list) => list.id === watchlistId);

  if (list[0]?.movies.length === 0)
    return (
      <div className="size-full flex justify-center items-center">
        No movie found in {"{ " + list[0].name + " }"}
      </div>
    );

  return (
    <div className="mt-4 overflow-y-scroll h-[calc(100vh-100px)] px-8">
      particularlist
    </div>
  );
};

export default List;
