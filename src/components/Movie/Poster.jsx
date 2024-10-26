import { TMDB_MOVIE_POSTER } from "../../utils/constants";

const Poster = ({poster_path}) => {
  return (
    <div className="poster-wrapper rounded-md w-[300px] h-[450px] overflow-hidden">
      <img
        className="size-full object-cover"
        src={TMDB_MOVIE_POSTER + poster_path}
        alt=""
      />
    </div>
  );
};

export default Poster;
