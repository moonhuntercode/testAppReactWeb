import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,Routes
} from 'react-router-dom';
import Page2 from './views/page2/Page2';
import Page3 from './views/page3/Page3';
import Page4 from './views/page4/Page4';
import Page5 from './views/page5/Page5';
const router=createBrowserRouter([
  {
path:"/",
element:<App/>,
  },
  {
    path:"/page2",
    element:<Page2/>,
  },
  {
    path:"/page3",
    element:<Page3/>
  },
  {
    path:"/page4",
    element:<Page4/>
  },
  {
    path:"/page5",
    element:<Page5/>
  }
]);
ReactDOM.createRoot(document.getElementById
  ('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
