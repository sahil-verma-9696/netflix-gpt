import React from "react";
import ListItem from "./ListItem";

const List = ({ list }) => {
  return (
    <div className="mt-4 overflow-y-scroll h-[calc(100vh-100px)] px-8">
      {list?.map((movie) => (
        <ListItem
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

export default List;
