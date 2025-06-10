/**
 * Given The Application page with no data
 *  When IP API server is available
 *   Then should display a form to create a new portfolio
 */
describe("Given The Application page with no data", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display a form to create a new portfolio", () => {
    cy.get("form").should("exist");
  });
});
