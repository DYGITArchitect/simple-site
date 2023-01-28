import { Button } from "antd";
import React, {useEffect, useLayoutEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import {
    getAuthLocalStoreValues,
    login,
    logout,
} from "./services/auth/authApi";
import App from "./App";

function MainApp() {
    const dispatch = useDispatch();
    dispatch(getAuthLocalStoreValues());
    console.log("useEffectAppMain");
    return (
            <App />
    );
}
export default MainApp;
