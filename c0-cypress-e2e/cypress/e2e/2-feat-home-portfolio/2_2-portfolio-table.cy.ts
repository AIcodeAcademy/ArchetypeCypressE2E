// exercise
/**
 * Given the Portfolio Home page
 *   When the data is loaded
 *    Then should display the table with at least 1 table rows
 *    And should display the table header with 5 columns
 *    And should display the table footer with total label and value
 */
describe("Given the Portfolio Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("table").as("table");
  });
  it("should display the table header with 5 columns", () => {
    cy.get("@table").find("thead tr th").should("have.length", 5);
  });
  it("should display the table with at least 1 table rows", () => {
    cy.get("@table").find("tbody tr").should("have.length.at.least", 1);
  });
  it("should display the table footer with total label and value", () => {
    // alias
    cy.get("@table").find("tfoot tr").children().as("tableFooterChildren");
    cy.get("@tableFooterChildren").first().as("totalLabel");
    cy.get("@tableFooterChildren").last().as("totalValue");
    cy.get("@totalLabel").should("have.text", "Total");
    cy.get("@totalValue").contains("$");
    cy.get("@totalValue").contains(/\d+/);
  });
});
