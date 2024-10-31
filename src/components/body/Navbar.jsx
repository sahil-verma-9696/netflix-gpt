import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../store/userSlice";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { toggleSideBar } from "../../store/appStatesSlice";

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
          className="hidden 
          sm:size-12 sm:px-1 sm:text-3xl sm:font-extrabold sm:cursor-pointer sm:flex sm:justify-center sm:items-center sm:rounded-full sm:hover:bg-black sm:hover:bg-opacity-30"
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
          <h1
            className="logo 
          font-extrabold [text-shadow:_0_2px_4px_black] 
          sm:text-3xl"
          >
            Netflix-Gpt
          </h1>
        </Link>
      </ul>

      {/* right part */}
      <ul>
        {user && (
          <li
            onClick={handleLogout}
            className="text-sm px-1 py-1 font-semibold border-2 rounded-md cursor-pointer 
            sm:text-xl sm:font-bold
            hover:bg-white hover:bg-opacity-40 hover:[text-shadow:_0_2px_4px_black] "
          >
            Logout
          </li>
        )}
        {!user && (
          <Link
            to={"/sign"}
            className="text-sm px-1 py-1 font-semibold border-2 rounded-md cursor-pointer 
            sm:text-xl sm:font-bold
            hover:bg-white hover:bg-opacity-40 hover:[text-shadow:_0_2px_4px_black] "
          >
            Sign up
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
