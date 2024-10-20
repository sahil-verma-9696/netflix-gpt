import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

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
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Body;
