import { Navigate } from "react-router-dom";
import { RoutesNames } from "./index";
import React from "react";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import TrainingList from "../pages/TrainingList";
import Login from "../pages/Login";
import Store from "../pages/Store";

export const publicRouter = [
  { path: RoutesNames.MAIN, element: React.createElement(MainPage) },
  { path: RoutesNames.ABOUT, element: React.createElement(About) },
  { path: RoutesNames.TRAINIGLIST, element: React.createElement(TrainingList) },
  { path: RoutesNames.LOGIN, element: React.createElement(Login) },
  { path: RoutesNames.STORE, element: React.createElement(Store) },
  { path: "*", element: <Navigate to="/" replace /> }, // если логин корректный, то отрабатывает этот переход
];
