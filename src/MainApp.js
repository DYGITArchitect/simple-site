import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { login, logout } from "./services/auth/authApi";
import {Link} from "react-router-dom";

function MainApp() {
  const dispatch = useDispatch();
  const { isAuth, username } = useSelector( state => state.login);
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
      {isAuth && <div data-testid={"username-testid"}>{username}</div>}
      {/* <button onClick={}>
        login
      </button> */}
        <Button data-testid={"button-login"}  onClick={appLogin}>LOGIN</Button>
        <Button data-testid={"button-logout"} onClick={appLogout}>LOGOUT</Button>
        <Link to="/courses" data-testid="course-link">course</Link>

        <AppRouter />
      WORKING ...
    </div>
  );
}
export default MainApp;
