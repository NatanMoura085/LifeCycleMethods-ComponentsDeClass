

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";



describe("<Button/>", () => {



  it("should render the button with the text \"Env\"", () => {

    render(<Button text="Env" />);

    const button = screen.getByRole("button", { name: /Env/i });

    expect(button).toBeInTheDocument();



  });





  it("should call function on  button click\"", () => {

    const fn = jest.fn();

    render(<Button text="Env" onClick={fn} />);

    const button = screen.getByRole("button", { name: /Env/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);





  });

});

