import { Provider } from 'react-redux';

import Home from './pages/Home'
import Sign from './pages/Sign'
import {
  createBrowserRouter,
} from "react-router-dom";
import store from './store/appStore';
import Body from './components/Body';

export const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign",
        element: <Sign />
      }
    ]
  },
])

function App() {

  return (
    <div className='App w-full'>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>);
}