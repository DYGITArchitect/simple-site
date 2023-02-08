import { render } from "@testing-library/react";
import { renderAppRouterHelper } from "../../../test/helper/renderAppRouterHelper";
import { getLoginState } from "./loginSelector";

describe("Test login selector describe", () => {
  const setup = (container) => {
    render(
      renderAppRouterHelper(undefined, {
        rout: "/",
      })
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
