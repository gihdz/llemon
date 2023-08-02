import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "components/Homepage/Homepage";
import ErrorPage from "components/Pages/ErrorPage/ErrorPage";
import BookingPage from "components/Pages/BookingPage/BookingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/book",
        element: <BookingPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
