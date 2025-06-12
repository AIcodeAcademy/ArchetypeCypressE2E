// Example of interceptor

/**
 * Given the Portfolio Home page
 *  Then should call the portfolios get endpoint
 *  When create a new portfolio
 *   Then should call the portfolios post endpoint
 */
describe("Given the Portfolio Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should call the portfolios get endpoint", () => {
    const apiUrl = Cypress.env("API_URL");
    cy.intercept("GET", `${apiUrl}/portfolios`).as("getPortfolio");
    cy.wait("@getPortfolio");
  });
  context("When create a new portfolio", () => {
    it("Then should call the portfolios post endpoint", () => {
      const apiUrl = Cypress.env("API_URL");
      cy.intercept("POST", `${apiUrl}/portfolios`).as("postPortfolio");
      cy.deleteAllPortfolios();
      cy.createPortfolio(1000, "Test Portfolio");
      cy.wait("@postPortfolio");
    });
  });
});
