export const createPortfolio = (initialCash: number, name: string) => {
  cy.get("form").as("form");
  cy.get("@form")
    .find("input[name='initial_cash']")
    .clear()
    .type(initialCash.toString());
  cy.get("@form").find("input[name='name']").clear().type(name);
  cy.get("@form").find("button").contains("Create").click();
};

export const deleteAllPortfolios = () => {
  const apiUrl = Cypress.env("API_URL");
  cy.request("DELETE", `${apiUrl}/portfolios`);
};
