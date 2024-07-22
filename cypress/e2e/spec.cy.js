describe('when loaded', () => {
  beforeEach(() => {
    cy.fixture('example').then((reservations)=> {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode:200,
        body:reservations,
      }).as('getReservations')
    })
  })

  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('should display the header', () => {
    cy.get('h1').contains('Turing Cafe Reservations');
  });
  it('should display the inputs', () => {
    cy.get('input').should('have.length', 4)
  })
  it('should display the reservation cards', () => {
    cy.get('.resy-container').should('exist');
  })
  it('should reflect the value that is entered in the input form', () => {
    cy.get('[placeholder="Name"]').type('Seong')
    cy.get('[placeholder="Date(mm/dd)"]').type('01/01')
    cy.get('[placeholder="Time"]').type('7:00')
    cy.get('[placeholder="Number of Guests"]').type('2')
  })
  it('should click make reservation button and add a new reservation card', () => {
    cy.get('.Reserve-button').click()
    cy.get('.resy-container > :nth-child(1) > :nth-child(3)').should('exist')
    cy.get('.resy-container > :nth-child(1) > :nth-child(3)').contains('Seong')
  })

})

