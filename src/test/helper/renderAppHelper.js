import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import { createReduxStore } from "../../store/store";

export const renderAppHelper = () => {
  const store = createReduxStore();

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};
