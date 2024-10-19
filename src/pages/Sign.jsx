import SignForm from "../components/SignForm";
import React from "react";
import welcomeGif from "../assets/browse.png";
function Sign() {
  return (
    <div className="w-full h-[calc(100vh-89px)] flex items-center px-4">
      <div className="flex items-center justify-center">
        <h1 className="text-8xl font-semibold">Browse</h1>
        <div className="img-wrapper w-[500px] overflow-hidden object-fit ">
          <img src={welcomeGif} alt="welcome gif" className="object-cover" />
        </div>
      </div>

      <SignForm />
    </div>
  );
}

export default Sign;
