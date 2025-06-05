// use of property , then...

/**
 * Given the Portfolio Home page
 *   When the data is loaded
 *    Then should display the same info in every property="totalAssetsValue"
 */
describe("Given the Portfolio Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display the same info in every property='totalAssetsValue'", () => {
    // get all elements with property="totalAssetsValue"
    cy.get("[property='totalAssetsValue']").as("totalAssetsValue");
    // ensure all of them have the same value
    cy.get("@totalAssetsValue").then((elements: JQuery<HTMLElement>) => {
      // get an array of text contents
      const textContents = elements.map((elementId, element) => {
        return element.textContent?.trim().toLocaleLowerCase();
      });
      // ensure all of them have the same value
      const uniqueContents = new Set(textContents);
      expect(uniqueContents).to.have.length(1);
    });
  });
});
