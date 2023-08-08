import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("When a page is created", () => {
  it("a list of events is displayed", async() => {
    // to implement
    render(<Home />);
    const events = screen.queryAllByTestId("card-image-testid").length;
      expect (events).toBeGreaterThan(1)
  })
  it("a list a people is displayed", async() => {
    // to implement
    render(<Home />)
    const people = screen.queryAllByTestId("people-testid").length;
    expect (people).toBe(6)
  })
  it("a footer is displayed", async () => {
    // to implement
    render(<Home />);
    await screen.findByTestId("footer-testid");
  })
  it("an event card, with the last event, is displayed", async() => {
    // to implement
    render(<Home />);
    await screen.findByTestId("lastEvent-testid");
  })
});
