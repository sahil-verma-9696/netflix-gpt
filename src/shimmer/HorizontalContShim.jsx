import React from "react";
import CardShim from "./CardShim";

function HorizontalContShim() {
  return (
    <div className="my-6 py-2 flex gap-6 w-full overflow-x-hidden ">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <CardShim key={index}/>
      ))}
      
    </div>
  );
}

export default HorizontalContShim;
