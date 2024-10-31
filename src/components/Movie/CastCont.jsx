import React from "react";
import CastCard from "./CastCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CastCont = () => {
  const { movie_id } = useParams();
  const castAndCrew = useSelector(
    (store) => store.movies?.castAndCrew[movie_id]
  );
  // console.log(castAndCrew);
  return (
    <div className="cast-cont flex gap-4 py-4 overflow-x-scroll">
      {castAndCrew?.cast?.map((cast) => (
        <CastCard
          key={cast.id}
          profile_path={cast.profile_path}
          name={cast.name}
          character={cast.character}
        />
      ))}
    </div>
  );
};

export default CastCont;
