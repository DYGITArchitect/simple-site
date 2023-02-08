import { render, screen } from "@testing-library/react";
import { RoutesNames } from "../../routers";
import { renderAppRouterHelper } from "../../test/helper/renderAppRouterHelper";
import DYGHeader from "./DYGHeader";

describe("Test router via url", function () {
  test("url main", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.MAIN }));
    expect(await screen.findByTestId("main-page")).toBeInTheDocument();
  });

  test("url about", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.ABOUT }));
    expect(await screen.findByTestId("about-page")).toBeInTheDocument();
  });

  test("url training", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.TRAINIGLIST }));
    expect(await screen.findByTestId("training-page")).toBeInTheDocument();
  });

  test("url course", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.COURSELIST }));
    expect(await screen.findByTestId("main-page")).toBeInTheDocument();
  });

  test("url store", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.STORE }));
    expect(await screen.findByTestId("store-page")).toBeInTheDocument();
  });

  test("url login", async () => {
    render(renderAppRouterHelper(undefined, { rout: RoutesNames.LOGIN }));
    expect(await screen.findByTestId("login-page")).toBeInTheDocument();
  });

  test("url incorrect", async () => {
    render(renderAppRouterHelper(undefined, { rout: "asdasdasssda" }));
    expect(await screen.findByTestId("main-page")).toBeInTheDocument();
  });
});

describe("Test router use menu", () => {
  test("menu main", async () => {
    render(renderAppRouterHelper(<DYGHeader />, { rout: RoutesNames.MAIN }));
    expect(await screen.findByTestId("DYGHeader")).toBeInTheDocument();

    // screen.debug();

    // const menuitems = await screen.findAllByRole("menuitem");
    // console.log(menuitems[0].onclick);

    // menuitems.map((item) => {
    //   console.log(item.key;
    // });
  });
});
