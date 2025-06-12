import { BuyAssetPo } from "../../support/buy-asset.po";

/**
 * Given the the user is adding a new asset
 *   When the user adds a valid asset
 *    Then should not display error
 */
describe("Given the the user is adding a new asset", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.deleteAllPortfolios();
    cy.createPortfolio(1000, "Test Portfolio");
    cy.get("a").contains("Buy assets").click();
  });
  context("When the user adds a valid asset", () => {
    it("should not display error", () => {
      const buyAssetPo = new BuyAssetPo();
      buyAssetPo.selectSymbol("MSFT");
      // buyAssetPo.inputSymbol.type("Microsoft");
      // buyAssetPo.inputSymbol.clear().type("10");
      buyAssetPo.typeUnits(1);
      buyAssetPo.clickButton();
      cy.get(buyAssetPo.selectorAppError).should("not.exist");
    });
  });
});
