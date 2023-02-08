import { Navigate } from "react-router-dom";
import { RoutesNames } from "./index";
import React from "react";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import TrainingList from "../pages/TrainingList";
import Login from "../pages/Login";
import Store from "../pages/Store";
import CourseList from "../pages/CourseList";

export const mainRouter = [
  {
    path: RoutesNames.MAIN,
    element: React.createElement(MainPage),
    isAuth: false,
  },
  {
    path: RoutesNames.ABOUT,
    element: React.createElement(About),
    isAuth: false,
  },
  {
    path: RoutesNames.TRAINIGLIST,
    element: React.createElement(TrainingList),
    isAuth: false,
  },
  {
    path: RoutesNames.LOGIN,
    element: React.createElement(Login),
    isAuth: false,
  },
  {
    path: RoutesNames.COURSELIST,
    element: React.createElement(CourseList),
    isAuth: true,
  },
  {
    path: RoutesNames.STORE,
    element: React.createElement(Store),
    isAuth: false,
  },
  { path: "*", element: <Navigate to="/" replace /> }, // если логин корректный, то отрабатывает этот переход
];
