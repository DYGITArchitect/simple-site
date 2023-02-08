import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../components/AppRouter";
import { createReduxStore } from "../../store/store";

export const renderAppRouterHelper = (component, options) => {
  const store = createReduxStore(options?.initialState);

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/" + options?.rout]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
