import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sign from './pages/Sign'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


export const router = createBrowserRouter([
  

  {
    path: "/",
    element: <App />,
    children : [
      {
        path:"/",
        element : <Home/>
      },
      {
        path : "/sign",
        element : <Sign/>
      }
    ]
  },
])

function App() {
  return <div className='App size-full bg-red-50'>
    <Navbar />
    <Outlet/>
  </div>
}