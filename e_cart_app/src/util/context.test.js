// appleContext.test.js
import { render } from "@testing-library/react";
import { context } from "./context";

// A mock component to test context values
const MockComponent = () => {
  const contextValue = context._currentValue;
  return (
    <div>
      <span data-testid="dataName">{contextValue.dataName}</span>
      <span data-testid="age">{contextValue.age}</span>
      <span data-testid="school">{contextValue.school}</span>
    </div>
  );
};

describe("context context", () => {
  it("should have default values", () => {
    const { getByTestId } = render(<MockComponent />);

    // Check each value in the context
    expect(getByTestId("dataName").textContent).toBe("hello");
    expect(getByTestId("age").textContent).toBe("29");
    expect(getByTestId("school").textContent).toBe("sda");
  });
});
