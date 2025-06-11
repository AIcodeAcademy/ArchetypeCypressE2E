// Given When Then

/**
 * Given The Application home page
 *  When no API server is available
 *   Then should display an error message,
 *    And not a busy message
 *    And not the data
 */

describe.skip("Given The Application page", () => {
  beforeEach(() => {
    cy.visit("");
  });
  context("When no API server is available", () => {
    it("Then should display an error message, not a busy message and not the data", () => {
      cy.get('[aria-invalid="true"]');
      cy.get('[aria-busy="true"]').should("not.exist");
      cy.get("table").should("not.exist");
    });
  });
});
