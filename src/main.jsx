import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App";
import "./styles.css";
import Lobby from "./pages/lobby";
import Login from "./Components/login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/lobby',
        element: <Lobby />,
    },
    {
        path: '/lobby',
        element: <Lobby />,
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
);
