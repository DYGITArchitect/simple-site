import { Navigate } from "react-router-dom";
import { RoutesNames } from "./index";
import React from "react";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import TrainingList from "../pages/TrainingList";
import Login from "../pages/Login";

export const publicRouter = [
  { path: RoutesNames.MAIN, element: React.createElement(MainPage) },
  { path: RoutesNames.ABOUT, element: React.createElement(About) },
  { path: RoutesNames.TRAINIGLIST, element: React.createElement(TrainingList) },
  { path: RoutesNames.LOGIN, element: React.createElement(Login) },
  { path: "*", element: <Navigate to="/" replace /> }, // если логин корректный, то отрабатывает этот переход
];
