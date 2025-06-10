/**
 * Given the app home is visited
 *  When the create command is called
 *   Then should display a portfolio summary
 */
describe("Given the app home is visited", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.deleteAllPortfolios();
  });
  it("should display a portfolio summary", () => {
    cy.createPortfolio(1000, "Test Portfolio");
    cy.get("header dl").as("headSummary");
    cy.get("@headSummary").find("dd").first().contains("$1,000.00");
  });
});
