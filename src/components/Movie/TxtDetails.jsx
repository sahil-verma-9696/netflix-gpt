import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../store/moviesSlice";
import WatchListPopUp from "./WatchListPopUp";
const TxtDetails = ({ movieDetails }) => {
  const {
    id,
    vote_average,
    overview,
    tagline,
    runtime,
    genres,
    title,
    release_date,
    adult,
    production_companies: [{ origin_country }],
  } = movieDetails;

  const dispatch = useDispatch();
  const isFavourite = useSelector((store) => store.movies?.favourites)?.some(
    (movie) => movie.id === id
  );

  function getTimeFormate(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    return `${hours} hr ${mins} min`;
  }

  return (
    <div className="details w-4/6 ml-6 text-white">
      <h1 className="text-4xl font-bold">
        {title}
        <span className="text-slate-100 font-normal">
          ({release_date?.substring(0, 4)})
        </span>
      </h1>
      <h2 className="flex text-white gap-1 font-semibold items-center">
        {!adult ? (
          <div className="size-7 flex justify-center items-center text-lg font-semibold text-slate-100 border-2 p-[2px]">
            PG
          </div>
        ) : (
          <div className="text-xl font-semibold text-red-500 border-2 border-red-600  rounded-full size-7 flex justify-center items-center">
            18
          </div>
        )}
        <span className="">{release_date}</span>
        <span>({origin_country})</span>
        <span className="dot size-[6px] bg-white rounded-full"></span>
        <ul className="flex">
          {genres.map((e) => (
            <li key={e.id}>{e.name},</li>
          ))}
        </ul>
        <span className="dot size-[6px] bg-white rounded-full"></span>
        <span>{getTimeFormate(runtime)}</span>
      </h2>

      <div className="my-2 size-12 rounded-full flex justify-center items-center bg-purple-500 font-bold text-lg [text-shadow:_0_2px_4px_black]">
        {Math.floor(vote_average * 10)}%
      </div>
      <div className="buttons flex gap-4 items-center my-2">
        <div className="size-8 bg-violet-500 border-2 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faListUl} />
          <WatchListPopUp/>
        </div>

        {
          <div
            onClick={() => {
              dispatch(
                isFavourite
                  ? removeFromFavourite(id)
                  : addToFavourite(movieDetails)
              );
            }}
            className={`${
              isFavourite ? "bg-red-500 " : "bg-violet-500"
            } cursor-pointer size-8  border-2 rounded-full flex justify-center items-center`}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        }

        <div className="font-bold">
          <FontAwesomeIcon icon={faPlay} />
          <span> Play Trailer</span>
        </div>
      </div>
      <h2 className="italic font-semibold text-xl text-slate-200 ">
        {tagline}
      </h2>
      <h2 className="text-2xl font-bold">Overview</h2>
      <p className="text-slate-100 text-wrap">{overview}</p>
    </div>
  );
};
export default TxtDetails;
