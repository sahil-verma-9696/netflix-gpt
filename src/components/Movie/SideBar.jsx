import React from "react";

const SideBar = ({ budget, revenue, status, spoken_languages }) => {
  return (
    <div className=" ">
      <ul className="w-72 px-6 py-2 ">
        <li
          className="text-xl font-semibold"
        >
          Status
        </li>
        <li>{status}</li>
        <li className="text-xl font-semibold">Original Language</li>
        <li>
          {spoken_languages.map((lang) => (
            <span key={lang.name}>{lang.name}</span>
          ))}
        </li>
        <li className="text-xl font-semibold">Budget</li>
        <li>💲{budget ? budget : "Comming Soon"}.00</li>
        <li className="text-xl font-semibold">Revenue</li>
        <li>💲{revenue ? revenue : "Comming Soon"}.00</li>
      </ul>
    </div>
  );
};

export default SideBar;
