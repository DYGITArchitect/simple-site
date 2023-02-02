import React from 'react';
import {RoutesNames} from "../routers";


const MainPage = () => {
  console.log("main-page")

  return(<div data-testid={RoutesNames.MAIN}>
    MAIN ...
  </div>)
};

export default MainPage