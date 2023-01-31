import { useDispatch } from "react-redux";
import "./App.css";
import MainApp from "./MainApp";
import { getAuthLocalStoreValues } from "./services/auth/authApi";

function App() {
  const dispatch = useDispatch();
  console.log("App started");
  dispatch(getAuthLocalStoreValues());

  return (
    <div className="App" data-testid="main-div">
      <MainApp />
    </div>
  );
}
export default App;
