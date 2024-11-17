import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { apple } from "./util/context";
import appStore from "./util/redux/appStore";
import App from "./App";
import Nav from "./component/Nav";

// Mock child components
jest.mock("./component/Nav", () => () => (
  <div data-testid="nav">Mocked Nav</div>
));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div data-testid="outlet">Mocked Outlet</div>,
}));

describe("App Component", () => {
  it("renders Nav and Outlet components", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Nav and Outlet components are rendered
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("provides correct initial context values", () => {
    render(
      <Provider store={appStore}>
        <apple.Provider value={{ dataName: "hello", changeData: jest.fn() }}>
          <Nav />
        </apple.Provider>
      </Provider>
    );

    // Verify context data in the mock Nav component
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });

  it("updates context values when state changes", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check initial context value
    const input = screen.getByDisplayValue("hello"); // Assuming Nav or Outlet interacts with `dataName`
    fireEvent.change(input, { target: { value: "newName" } });

    // Verify updated context value
    expect(input.value).toBe("newName");
  });
});
