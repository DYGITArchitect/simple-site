import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { createReduxStore } from "./store/store";

test("renders learn react link", async () => {
  render(
    <Provider store={createReduxStore()}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const linkElement = await screen.findByTestId("app-div");
  expect(linkElement).toBeInTheDocument();
});
