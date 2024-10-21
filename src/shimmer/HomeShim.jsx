import React from "react";
import BannerShim from "./BannerShim";
import HorizontalContShim from "./HorizontalContShim";

function HomeShim() {
  return (
    <div className="w-4/5 m-auto opacity-70">
      <BannerShim />
      <div className="animate-pulse my-2 mt-4 w-40 h-8 rounded-lg bg-gray-700"></div>
      <HorizontalContShim />
      <div className="animate-pulse my-2 mt-4 w-40 h-8 rounded-lg bg-gray-700"></div>

      <BannerShim />
      <div className="animate-pulse my-2 mt-4 w-40 h-8 rounded-lg bg-gray-700"></div>

      <HorizontalContShim />
      <div className="animate-pulse my-2 mt-4 w-40 h-8 rounded-lg bg-gray-700"></div>

      <HorizontalContShim />
    </div>
  );
}

export default HomeShim;
