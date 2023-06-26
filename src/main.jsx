import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HeaderNav } from './layout/header/headerNav';
import { SignupRoute } from './routes/SignupRoute';




const routes = createBrowserRouter([
  {
    path: "/",
    element: <HeaderNav />
  },
  {
    path: "/signup",
    element: <SignupRoute />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
