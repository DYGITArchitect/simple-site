import { Navigate } from "react-router-dom";
import { RoutesNames } from "./index";
import React from "react";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import CourseList from "../pages/CourseList";
import TrainingList from "../pages/TrainingList";
import Store from "../pages/Store";

export const privateRouter = [
  { path: RoutesNames.MAIN, element: React.createElement(MainPage) },
  { path: RoutesNames.ABOUT, element: React.createElement(About) },
  { path: RoutesNames.TRAINIGLIST, element: React.createElement(TrainingList) },
  { path: RoutesNames.COURSELIST, element: React.createElement(CourseList) },
  { path: RoutesNames.STORE, element: React.createElement(Store) },
  { path: "*", element: <Navigate to="/" replace /> }, // если логин корректный, то отрабатывает этот переход
];
