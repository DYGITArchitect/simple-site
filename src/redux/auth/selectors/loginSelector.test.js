import { render } from "@testing-library/react";
import { App } from "antd";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "../../../store/store";
import { getLoginState } from "./loginSelector";

describe("Test login selector describe", () => {
  const setup = () => {
    render(
      <Provider store={createReduxStore()}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };

  test("Login empty selector", () => {
    setup();

    expect(getLoginState({})).toEqual({
      id: 1,
      username: "",
      isAuth: false,
      isLoading: false,
      error: "",
    });
  });

  test("Login filled selector", () => {
    setup();

    expect(
      getLoginState({
        login: {
          id: 1,
          username: "",
          isAuth: false,
          isLoading: false,
          error: "",
        },
      })
    ).toEqual({
      id: 1,
      username: "",
      isAuth: false,
      isLoading: false,
      error: "",
    });
  });
});
