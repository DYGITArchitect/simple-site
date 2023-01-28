import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../services/auth/authApi";
import {Button} from "antd";


const CourseList = () => {
  const dispatch = useDispatch();
  const appLogout = () => {
    console.log("appLogout Pushed");
    dispatch(logout({ username: "dyg2" }));
    console.log("appLogout Pushed");
  };
  console.log("CourseList");
  return(<div>
    <Button onClick={appLogout}>LOGOUT</Button>

    CourseList ...
    </div>)
};


export default CourseList