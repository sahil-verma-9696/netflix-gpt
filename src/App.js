import { Provider } from "react-redux";

import Home from "./pages/Home";
import Sign from "./pages/Sign";
import { createBrowserRouter } from "react-router-dom";
import store from "./store/appStore";
import Body from "./components/body/Body";
import Movie from "./pages/Movie";
import WatchList from "./pages/WatchList";
import ListOfWatchlist from "./components/listParticular/ListOfWatchlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign",
        element: <Sign />,
      },
      {
        path: "/movie/:movie_id",
        element: <Movie />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/watchlist/:watchlistId",
        element: <ListOfWatchlist />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App w-full">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}
