import React from "react";

const WatchListForm = () => {
  return (
    <div
      className="form p-2 rounded-lg text-black bg-white 
        sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
    >
      <div>
        <h1 className="mb-2 font-semibold">Create WatchList</h1>

        <label htmlFor="name" className="cursor-pointer font-semibold">
          Name :
        </label>
        <input
          className="pl-2 border-b border-black outline-none "
          type="text"
          id="name"
          placeholder="Watch list name"
        />
        <br />
        <textarea
          className="w-full h-20 mt-2 rounded-lg resize-none pl-2 outline-none"
          type="text"
          id="about"
          placeholder="Discription..."
        />
        <button className="px-2 py-1 rounded-lg bg-blue-500 text-white font-semibold ">
          Create
        </button>
      </div>
    </div>
  );
};

export default WatchListForm;
