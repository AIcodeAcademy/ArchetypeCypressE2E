// Introduction: visit get and should

describe("The Angular home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer");
  });
  it("should have a footer with 'Angular' text", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer").contains("Angular");
  });
  it("should have a link to albertobasalo.dev", () => {
    cy.visit("http://localhost:4200/");
    cy.get('[href="https://albertobasalo.dev"]').should("exist");
  });
  it("should have an italic element with 'Angular' content", () => {
    cy.visit("http://localhost:4200/");
    cy.get("a").contains("Angular");
  });
  it("should have a link with css class 'secondary'", () => {
    cy.visit("http://localhost:4200/");
    cy.get("a.secondary");
  });
});
