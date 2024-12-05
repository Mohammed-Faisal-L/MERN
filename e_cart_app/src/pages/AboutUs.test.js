import { fireEvent, render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("about us component", () => {
  it("click button to increment", () => {
    render(<AboutUs initialValue={0} />);
    const counterElement = screen.getByText("Increment");
    fireEvent.click(counterElement); // clicking the button to increment
    const h1Element = screen.getByRole("counter");
    const countValue = h1Element.textContent;
    expect(countValue).toBe("Count: 1");
  });

  it("click button to decrement", () => {
    render(<AboutUs initialValue={0} />);
    const counterElement = screen.getByText("Decrement");
    fireEvent.click(counterElement); // clicking the button to decrement
    const h1Element = screen.getByRole("counter");
    const countValue = h1Element.textContent; //innerText or innerHtml
    expect(countValue).toBe("Count: -1");
  });

  it("click button to reset", () => {
    render(<AboutUs initialValue={0} />);
    const counterElement = screen.getByText("Reset");
    fireEvent.click(counterElement);
    const h1Element = screen.getByRole("counter");
    const countValue = h1Element.textContent;
    expect(countValue).toBe("Count: 0");
  });

  it("click button to multiply ten", () => {
    render(<AboutUs initialValue={0} />);
    const counterElement = screen.getByText("Multiply Ten");
    fireEvent.click(counterElement);
    const h1Element = screen.getByRole("counter");
    const countValue = h1Element.textContent;
    expect(countValue).toBe("Count: 0");
  });
});
