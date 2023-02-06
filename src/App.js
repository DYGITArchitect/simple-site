import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import "./App.css";
import MainApp from "./MainApp";
import { getAuthLocalStoreValues } from "./redux/auth/authApi";

function App() {
  const dispatch = useDispatch();
  console.log("App started");
  dispatch(getAuthLocalStoreValues());

  return (
    <div className="App" data-testid="app-div">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5eb153",
          },
          //algorithm: theme.darkAlgorithm,
        }}
      >
        <MainApp />
      </ConfigProvider>
    </div>
  );
}
export default App;
