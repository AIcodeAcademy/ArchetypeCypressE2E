// Example of stubbing

/**
 * Given the Portfolio Home page
 *   When got a portfolio with 1000 initial cash and no assets
 *    Then should display the summary with the initial cash
 */
describe("Given the Portfolio Home page", () => {
  context("When got a portfolio with 1000 initial cash and no assets", () => {
    it("should display the summary with the initial cash", () => {
      const apiUrl = Cypress.env("API_URL");
      const stubbedPortfolioResponse = [
        {
          id: "165.30",
          initial_cash: 1000,
          name: "Test Portfolio",
          cash: 1000,
          assets: [],
          lastUpdated: "2025-06-12T08:12:39.104Z",
        },
      ];
      cy.intercept("GET", `${apiUrl}/portfolios`, stubbedPortfolioResponse);
      cy.visit("/");
      cy.get("article header dl").find("dd").first().contains("$1,000.00");
    });
  });
});
