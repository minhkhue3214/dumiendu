import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Happy from '../components/pages/Happy'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/happy",
    element: (
      <>
        Test
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
