import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button test case", () => {
  it("Render check", () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <Button onClick={onClick}>This is button</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should check onClick callback", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
    const element = screen.getByRole("button");
    userEvent.click(element);

    expect(onClick).toHaveBeenCalled();
  });
});
