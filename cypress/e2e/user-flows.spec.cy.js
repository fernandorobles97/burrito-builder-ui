describe('user flows', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: 'orders.json'
    }).as('getOrders')

    cy.intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode: 200,
      fixture: 'newOrder.json'
    }).as('postOrder')
    
    cy.visit('http://localhost:3000')
  })

  // Write a test covering what should be displayed when the user first visits the page.
  it('should display a header, form, and 3 existing orders', () => {
    cy.wait('@getOrders').then((interception) => {
      cy.get('h1').contains('Burrito Builder')
      .get('input[placeholder="Name"]')
      .get('button').should('have.length', 13)
      .get('p').contains('Order: Nothing selected')
      .get('.order-wrapper').children().should('have.length', 3)
      .get('.order-wrapper').children().first().contains('Pat')
      .get('.order-wrapper').children().last().contains('Alex')
    })
  })

  // Write a test to check the user flow of adding a new order to the DOM.
  it('should be able to add a new order', () => {
    cy.wait('@getOrders').then((interception) => {
      cy.get('input[type="text"]').type('Cat')
      .get('button').contains('beans').click()
      .get('button').contains('lettuce').click()
      .get('button').contains('Submit Order').click()
      .get('.order-wrapper').children().should('have.length', 4)
      .get('.order-wrapper').children().last().contains('Cat')
      .get('.order-wrapper').children().last().contains('beans')
      .get('.order-wrapper').children().last().contains('lettuce')
    })
  })

    // Write a test to check that orders cannot be submitted without a name and at least one ingredient.
    it('should let user know what they are missing to be able to submit an order', () => {
      cy.wait('@getOrders').then((interception) => {
        cy.get('input[type="text"]').type('Cat')
        .get('button').contains('Submit Order').click()
        .get('h3').contains('Please enter your first name and select at least one ingredient')
        .get('input[type="text"]').clear()
        .get('button').contains('beans').click()
        .get('button').contains('lettuce').click()
        .get('button').contains('Submit Order').click()
        .get('h3').contains('Please enter your first name and select at least one ingredient')
      })
    })
  
})