import React from 'react';
import {logout} from "../services/auth/authApi";
import {Button} from "antd";
import {useDispatch} from "react-redux";


const About = () => {
  const dispatch = useDispatch();

  const appLogout = () => {
    console.log("appLogout Pushed");
    dispatch(logout({ username: "dyg2" }));
    console.log("appLogout Pushed");
  };
  return(<div>
    <Button onClick={appLogout}>LOGOUT</Button>

    About ...

  </div>)
};


export default About
