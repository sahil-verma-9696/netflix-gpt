import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import SideBar from "./SideBar";
function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, photoURL, uid, email } = user;
        // console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            accessToken: accessToken,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/");
      } else {
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return ( 
    <div className="w-full">
      <Navbar />
      <div className="w-full h-full flex">
        <SideBar />
        <div className="sm:w-[calc(100vw-117px)]">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Body;
