import React from "react";
import Browse from "./../browse/Browse";
import Sign from "./../sign/Sign";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Body() {
  // router set-up
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Sign />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="body size-full">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
