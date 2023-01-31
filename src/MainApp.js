import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { login, logout } from "./services/auth/authApi";

function MainApp() {
  const dispatch = useDispatch();
  const { isAuth, username } = useSelector((state) => state.login);
  console.log("MainApp started");

  const appLogin = () => {
    console.log("appLogin Pushed");
    dispatch(login({ username: "dyg2", password: "123" }));
  };

  const appLogout = () => {
    console.log("appLogout Pushed");
    dispatch(logout({ username: "dyg2" }));
  };

  return (
    <div className="App" data-testid="main-div">
      {isAuth && <div>${username}</div>}
      {/* <button onClick={}>
        login
      </button> */}
      <Button onClick={appLogin}>LOGIN</Button>
      <Button onClick={appLogout}>LOGOUT</Button>
      <AppRouter />
      WORKING ...
    </div>
  );
}
export default MainApp;
