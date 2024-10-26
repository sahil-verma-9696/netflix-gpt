import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../store/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toggleSideBar } from "../store/appStatesSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showSideBar = useSelector((store) => store.appStates.showSideBar);
  async function handleLogout() {
    if (user) {
      const res = await signOut(auth);
      console.log(res);
      dispatch(removeUser());
    }
  }
  return (
    <nav className="w-full h-16 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-between items-center px-6 sticky top-0 z-50">
      {/* left part */}
      <ul className="flex gap-6 items-center">
        <li
          className="text-3xl font-extrabold cursor-pointer size-12 flex justify-center items-center px-1 rounded-full [text-shadow:_0_2px_4px_black] hover:bg-black hover:bg-opacity-30"
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          {showSideBar ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </li>
        <Link to={"/"}>
          <h1 className="logo  font-extrabold text-3xl [text-shadow:_0_2px_4px_black]">
            Netflix-Gpt
          </h1>
        </Link>
      </ul>

      {/* right part */}
      <ul>
        {user && (
          <li
            onClick={handleLogout}
            className="font-bold  text-xl border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-40 hover:[text-shadow:_0_2px_4px_black] "
          >
            Logout
          </li>
        )}
        {!user && (
          <Link
            to={"/sign"}
            className="font-bold  text-xl border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-40 hover:[text-shadow:_0_2px_4px_black] "
          >
            {"Sign up"}
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
