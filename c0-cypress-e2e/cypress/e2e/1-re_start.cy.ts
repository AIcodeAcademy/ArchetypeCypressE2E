// * Configuration, Performance and Conventions: arrange, act, assert

/**
 * The Activity Bookings home page
 *   should be visible
 *   should have a footer
 *   should have a footer with 'Angular' text
 *   should have a link to albertobasalo.dev
 *   should have an italic element with 'Angular' content
 *   should have a link with css class 'secondary'
 */

describe('The Activity Bookings home page', () => {
  beforeEach(() => {
    // * Use the baseUrl from cypress.config.ts
    cy.visit(''); // Arrange
  });

  it('should be visible', () => {
    cy.get('body') // act
      .should('be.visible'); // Assert
  });

  // ! redundant test
  // it("should have an footer", () => {
  //   cy.get("footer") // Act Assert
  // });

  it(`should have a footer with 'Angular' text`, () => {
    cy.get('footer') // Act
      .should('contains.text', 'Angular'); // Assert
  });

  // * Grouped assertions for better performance

  it(`should have a link to https://albertobasalo.dev and an italic element with 'Angular' content and a link with css class 'secondary`, () => {
    cy.get(`a[href="https://albertobasalo.dev"]`).should('exist');
    cy.get('i').contains('Angular');
    cy.get('a.secondary');
  });

  // it("should have an italic element with 'Angular' content", () => {
  // });

  // it("should have a link with css class 'secondary'", () => {
  // });
});
