describe('Home Page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Home Page Title')
  })
})