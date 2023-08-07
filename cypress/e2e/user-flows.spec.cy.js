describe('user flows', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: 'orders.json'
    }).as('getOrders')
    cy.visit('http://localhost:3000')
  })

  it('should display a header, form, and 3 existing orders', () => {
    cy.wait('@getOrders').then((interception) => {
      cy.get('h1').contains('Burrito Builder')
      .get('form').children().should('have.length', 15)
      .get('.order-wrapper').children().should('have.length', 3)
    })
  })

})