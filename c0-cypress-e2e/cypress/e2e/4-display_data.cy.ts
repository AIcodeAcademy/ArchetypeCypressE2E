// Given When Then

/**
 * Given The Application page with data
 *  When IP API server is available
 *   Then should not display a busy message
 *    Nor an error message
 *    And should display the data
 */

describe("Given The Application page", () => {
  beforeEach(() => {
    cy.visit("");
  });
  context("When no API server is available", () => {
    it("Then should not display a busy message Nor an error message And should display the data", () => {
      cy.get('[aria-busy="true"]').should("not.exist");
      cy.get('[aria-invalid="true"]').should("not.exist");
      cy.get("pre").should("exist");
    });
  });
});
