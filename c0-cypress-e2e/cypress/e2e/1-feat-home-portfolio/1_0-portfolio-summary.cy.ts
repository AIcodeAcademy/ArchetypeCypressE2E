/**
 * Given the Portfolio Home page
 *   When the data is loaded
 *    Then should display the Net value
 */

describe("Given the Portfolio Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display the Net value", () => {
    cy.get("header dl").find("dt").first().contains("Net");
    // is a $amount
    cy.get("header dl").find("dd").first().contains("$");
    // is a number
    cy.get("header dl").find("dd").first().contains(/\d+/);
  });
});
