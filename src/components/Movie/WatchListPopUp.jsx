import { useDispatch, useSelector } from "react-redux";
import SelectWatchList from "./SelectWatchList";
import WatchListForm from "./WatchListForm";
import {
  toggleWatchListForm,
  toggleWatchListPopup,
} from "../../store/appStatesSlice";

function WatchListPopUp() {
  const dispatch = useDispatch();
  const showWatchListForm = useSelector(
    (store) => store.appStates.showWatchListForm
  );
  return (
    <div
      className="relative
  sm:w-[calc(100vw-117px)] sm:h-full sm:fixed sm:top-0 sm:left-[110px]"
    >
      <div
        className="bg bg-purple-300  bg-opacity-50 
    sm:w-full sm:h-full"
        onClick={() => {
          dispatch(toggleWatchListPopup());
          
        }}
      ></div>
      {showWatchListForm && <WatchListForm />}
      {!showWatchListForm && <SelectWatchList />}
    </div>
  );
}

export default WatchListPopUp;
