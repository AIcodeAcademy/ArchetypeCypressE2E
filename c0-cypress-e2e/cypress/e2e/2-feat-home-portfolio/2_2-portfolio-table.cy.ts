// exercise
/**
 * Given the Portfolio Home page
 *   When the data is loaded
 *    Then should display the table with 3 table rows
 *    And should display the table header with 4 columns
 *    And should display the table footer with total label and value
 */
describe("Given the Portfolio Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("table").as("table");
  });
  it("should display the table header with 4 columns", () => {
    cy.get("@table").find("thead tr th").should("have.length", 4);
  });
  it("should display the table with 3 table rows", () => {
    cy.get("@table").find("tbody tr").should("have.length", 3);
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
