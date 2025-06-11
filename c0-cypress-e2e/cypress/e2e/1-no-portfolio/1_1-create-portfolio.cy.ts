// exercise

/**
 * Given the create portfolio form
 *  When the form is submitted
 *   Then should display a the portfolio summary
 */
describe("Given the create portfolio form", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display a the portfolio summary", () => {
    cy.get("form").as("form");
    cy.get("@form").find("input[name='initial_cash']").clear().type("1000");
    cy.get("@form").find("input[name='name']").clear().type("Test Portfolio");
    cy.get("@form").find("button").contains("Create").click();
    cy.get("article header dl").as("headSummary");
    cy.get("@headSummary").find("dd").first().contains("$1,000.00");
  });
});
