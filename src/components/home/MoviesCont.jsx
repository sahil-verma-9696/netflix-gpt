import React from "react";
import MovieCard from "./MovieCard";
function MoviesCont({ movieslst }) {
  if (!movieslst) return;

  return (
    <div className="flex overflow-x-scroll gap-6 py-4">
      {movieslst?.map((e) => (
        <MovieCard key={e.id} item={e} />
      ))}
    </div>
  );
}

export default MoviesCont;
