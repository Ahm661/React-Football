import React from 'react';
import Header from './Components/header';
import Header2 from './Components/header2';
import Body from './Components/body';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MatchDay from './Components/MatchDay';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className=''>
      <div className='mb-10'><Header /></div>
      <div><Body /></div>
    </div>,
  },
  {
    path: "/Matchday",
    element: <div>
      <div className='mb-10'><Header2 /></div>
      <div><MatchDay /></div>
    </div>


  },
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
