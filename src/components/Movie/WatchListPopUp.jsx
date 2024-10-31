import SelectWatchList from "./SelectWatchList";
import WatchListForm from "./WatchListForm";

function WatchListPopUp() {
  return (
    <div
      className="relative
  sm:w-[calc(100vw-117px)] sm:h-full sm:fixed sm:top-0 sm:left-[110px]"
    >
      <div
        className="bg bg-purple-300  bg-opacity-50 
    sm:w-full sm:h-full"
      ></div>
      {/* <WatchListForm /> */}
      <SelectWatchList/>
    </div>
  );
}

export default WatchListPopUp;
