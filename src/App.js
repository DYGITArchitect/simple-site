import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAuthLocalStoreValues, login } from "./services/auth/authApi";

function App() {
  const dispatch = useDispatch();
  const { isAuth, username } = useSelector((state) => state.login);

  useEffect(() => {
    console.log("useEffect");
    dispatch(login({ username: "dyg", password: "123" })); // Временно пока нет сервиса
    dispatch(getAuthLocalStoreValues());
  }, [dispatch]);

  return (
    <div className="App" data-testid="main-div">
      {isAuth && <div>${username}</div>}
      WORKING ...
    </div>
  );
}
export default App;
