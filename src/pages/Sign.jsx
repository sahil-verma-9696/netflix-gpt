import SignForm from "../components/SignForm";
import React, { useState } from "react";
import welcomeGif from "../assets/browse.png";

function Sign() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  return (
    <div className="w-full h-[calc(100vh-89px)] flex items-center px-4 relative">
      {errorMsg && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-b-xl py-2 px-4 w-96 ">
          <h2 className="text-red-600 font-bold underline text-lg">
            ❌ Error ❌
          </h2>

          <p className="px-2">{errorMsg}</p>

          <div
            onClick={() => setErrorMsg(null)}
            className="bg-red-500 px-2 py-1 cursor-pointer rounded-xl font-bold text-white w-fit"
          >
            Close
          </div>
        </div>
      )}
      {successMsg && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-b-xl py-2 px-4 w-96 ">
          <h2 className="text-green-600 font-bold  text-lg">
            ✅ {successMsg?.heading}
          </h2>
          <p className="px-2">{successMsg?.msg}</p>
          <div
            onClick={() => setSuccessMsg(null)}
            className="bg-green-500 px-2 py-1 cursor-pointer rounded-xl font-bold text-white w-fit"
          >
            Close
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <h1 className="animate-bounce text-8xl font-semibold">Browse</h1>
        <div className="img-wrapper w-[500px] overflow-hidden object-fit ">
          <img src={welcomeGif} alt="welcome gif" className=" object-cover" />
        </div>
      </div>

      <SignForm
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
      />
    </div>
  );
}

export default Sign;
