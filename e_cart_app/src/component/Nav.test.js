import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Nav from "./Nav";

const mockStore = configureStore([]);

describe("Nav Component", () => {
  it("should render all navigation links with correct labels", () => {
    const initialState = {
      cart: { items: [{ id: 1 }, { id: 2 }] },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    // Check if navigation links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument(); // Items in the cart
    expect(screen.getByText("Info Page")).toBeInTheDocument();
  });

  it("should render the logo image with the correct source and alt text", () => {
    const store = mockStore({ cart: { items: [] } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const logo = screen.getByAltText("app logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "../util/constants"); // Replace with actual `myUrl` value
  });
});
