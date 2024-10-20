import { useRef } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userSignUp from "../authentication/userSignUp";
import userSignIn from "../authentication/userSignIn";

function SignForm({ setErrorMsg, isSignIn, setIsSignIn }) {
  // all states
  const { signUp, googleSignUp } = userSignUp(setErrorMsg);
  const { signIn, googleSignIn } = userSignIn(setErrorMsg);
  const emailRef = useRef();
  const passwordRef = useRef(); 

  // email & password authentication

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    !isSignIn && (await signUp(email, password));
    isSignIn && (await signIn(email, password));
  }

  async function handleClick() {
    !isSignIn && (await googleSignUp());
    isSignIn && (await googleSignIn());
  }

  return (
    <div className="sign-form  bg-white border border-slate-500 py-4 px-8 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="text-2xl font-bold text-center ">Netflix-Gpt</h1>
        <h1 className="text-5xl font-extrabold text-wrap text-center ">
          {isSignIn ? "Sing in" : "Create"}
        </h1>
        <h1 className="text-5xl font-extrabold text-wrap text-center mb-4">
          Account
        </h1>
        {!isSignIn && (
          <input
            className="border border-slate-500 rounded-full pl-4 px-2 py-1 my-2"
            type="text"
            placeholder="user name"
          />
        )}
        <input
          ref={emailRef}
          className="border border-slate-500 rounded-full pl-4 px-2 py-1 my-2"
          type="text"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="border border-slate-500 rounded-full pl-4 px-2 py-1 my-2"
          type="password"
          placeholder="Password"
        />
        <button
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full font-bold py-2"
          type="submit"
        >
          {isSignIn ? "Sing in" : "Create account"}
        </button>
        <p className="text-center text-sm my-2">
          or {!isSignIn ? "sing up" : "sing in"} with
        </p>
        <button
          onClick={handleClick}
          className="flex items-center justify-center font-bold  text-white "
        >
          <FontAwesomeIcon
            className="bg-blue-500 p-2 rounded-full text-lg"
            icon={faGoogle}
          />
        </button>
        <p className="text-sm my-2 text-wrap">
          By creating account you become our part of Netflix-Gpt
        </p>
        <p className="text-center mt-20">
          <span>Already an account ? </span>
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {!isSignIn ? "Sing in" : "Sing up"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignForm;
