import { Button } from "antd";
import {useEffect, useLayoutEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import {
  getAuthLocalStoreValues,
  login,
  logout,
} from "./services/auth/authApi";

function App() {
  const dispatch = useDispatch();
  console.log("App");
  const { isAuth, username } = useSelector((state) => state.login);
  const [check,setCheckc] = useState(0);


  const appLogin = () => {
    console.log("appLogin Pushed");
    dispatch(login({ username: "dyg2", password: "123" }));
  };

  const appLogout = () => {
    console.log("appLogout Pushed");
    dispatch(logout({ username: "dyg2" }));
    console.log("appLogout Pushed");
  };
  const appLogout2 = () => {
    setCheckc(check+1);
  };

  return (
    <div className="App" data-testid="main-div">
      {/*isAuth && <div>${username}</div>*/}
      {/*console.log(`APPPPPPPPP`)}
      { <button onClick={}>
        login
      </button> */}
      <Button onClick={appLogin}>LOGIN</Button>
      <Button onClick={appLogout}>LOGOUT</Button>
      <AppRouter />
      WORKING ...
    </div>
  );
}
export default App;
