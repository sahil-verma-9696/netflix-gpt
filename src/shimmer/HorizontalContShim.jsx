import React from "react";
import CardShim from "./CardShim";

function HorizontalContShim() {
  return (
    <div
      className="my-6 py-2 w-full overflow-x-hidden flex flex-col gap-6
    sm:flex sm:flex-row sm:overflow-x-scroll"
    >
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <CardShim key={index} />
      ))}
    </div>
  );
}

export default HorizontalContShim;
