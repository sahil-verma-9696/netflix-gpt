import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ListCard({ list }) {
  return (
    <Link to={"/watchlist/" + list?.id}>
      <div className="w-44 h-36 p-2 bg-red-400 rounded-lg relative">
        <div className="absolute right-2 top-2">
          {list?.name && <FontAwesomeIcon icon={faEllipsisVertical} />}
        </div>
        <h1 className="absolute bottom-2">{list?.name ?? "Favourite"}</h1>
      </div>
    </Link>
  );
}
export default ListCard;
