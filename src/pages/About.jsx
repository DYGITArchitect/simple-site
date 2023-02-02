import React, {useState} from 'react';
import {Button} from "antd";
import {RoutesNames} from "../routers";


const About = () => {
  console.log("about-page")
  return(<div data-testid={RoutesNames.ABOUT}>
    About ...
  </div>)
};


export default About
