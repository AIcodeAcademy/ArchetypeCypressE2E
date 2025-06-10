// Exercise

/**
 * Given the app home with an empty portfolio
 *  When the add new asset button is clicked
 *   Then should navigate to the asset form page
 *    And should display the asset form
 */
describe("Given the app home with an empty portfolio", () => {
  beforeEach(() => {
    cy.visit("/");
  });
});
