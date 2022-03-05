import { mount } from "@cypress/react";
import { Button } from "../components/Button";

describe("Button component", () => {
  it("Button render", () => {
    mount(<Button>Click me!</Button>);
    cy.get("button")
      .contains("Click me!")
      .should("be.visible")
      .and("be.enabled");
  });

  it("handles a button click event", () => {
    mount(<Button onClick={cy.stub().as("buttonHandler")}>Click here</Button>);

    cy.get("button").contains("Click here").click();

    cy.get("@buttonHandler").should("have.been.calledOnce");
  });
});
