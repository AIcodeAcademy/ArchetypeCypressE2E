// Refactor using cypres aliases, get, find, within...

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
    // alias
    cy.get("article header dl").as("headSummary");
    cy.get("@headSummary").children().first().as("netValue");
    cy.get("@netValue").contains("Net");
    cy.get("@netValue").siblings("dd").as("netValueAmount");
    // is a $amount
    cy.get("@netValueAmount").contains("$");
    // is a number
    cy.get("@netValueAmount").contains(/\d+/);
  });
});
