import React from "react";
function Form({ isSign, setIsSign, action }) {
  function toggleSign() {
    setIsSign(!isSign);
  }

  return (
    <div className="py-12">
      <form
        action={action}
        className="login-form w-1/3 m-auto border border-purple-500 rounded-lg overflow-hidden"
      >
        <h1 className="form-title bg-purple-500 px-8 py-4 text-white font-bold text-5xl">
          {isSign ? "Sign up" : "Log in"}
        </h1>
        <div className="w-4/5 m-auto flex flex-col my-12">
          {
            isSign && <input
            type="text"
            name="email"
            placeholder="Full name"
            className="bg-purple-100 h-12 p-4 rounded-md my-2"
          />
          }
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            className="bg-purple-100 h-12 p-4 rounded-md my-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-purple-100 h-12 p-4 rounded-md my-2"
          />
          {
            isSign && <input
            type="password"
            name="confirPassword"
            placeholder="Confirm password"
            className="bg-purple-100 h-12 p-4 rounded-md my-2"
          />
          }
          <button
            type="submit"
            className="bg-purple-400 my-6 text-xl font-bold text-white p-2 rounded-lg"
          >
            {isSign ? "Sign up" : "Log in"}
          </button>

          <div onClick={toggleSign} className="cursor-pointer">
            {!isSign ? (
              <p>
                New to Netflix-gpt ?
                <span className="text-blue-600"> Sign up</span>
              </p>
            ) : (
              <p>
                Already have an account ?
                <span className="text-blue-600">Log in</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
