// Given When Then

/**
 * Given The Application page with no data
 *  When IP API server is not available
 *   Then should display an error message
 *    And should not display the data
 */

describe("Given The Application page", () => {
  beforeEach(() => {
    cy.visit("");
  });
  context("When no API server is available", () => {
    it("Then should not display a busy message Nor an error message And should display the data", () => {
      cy.get('[aria-invalid="true"]');
      cy.get('[aria-busy="true"]').should("not.exist");
      cy.get("table").should("not.exist");
    });
  });
});
