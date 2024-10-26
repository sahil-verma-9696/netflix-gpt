import React from "react";
import { TMDB_CAST_IMG_BASE_URL } from "../../utils/constants";

const CastCard = ({ profile_path, name, character }) => {
  return (
    <div className="CastCard rounded-lg overflow-hidden min-w-32 shadow-lg">
      <div className="CastCard-img-wrapper">
        <img className="w-full" src={TMDB_CAST_IMG_BASE_URL+profile_path} alt="" />
      </div>
      <div className="px-2 py-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3>{character}</h3>
      </div>
    </div>
  );
};

export default CastCard;
