// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons update display of the running total', () => {
    cy.get('#number1').click()
    cy.get('#number2').click()
    cy.get('#number3').click()
    cy.get('#number4').click();
    cy.get('.display').should('contain', '1234')
  });

  it('arithmetical operations update display with the result of the operation', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  });

  it('multiple operations can be chained together', () => {
    cy.get('#number1').click()
    cy.get('#operator_multiply').click()
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator_divide').click()
    cy.get('#number4').click()
    cy.get('#operator_subtract').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3.75')
  });

  it('output as expected for decimal numbers', () => {
    cy.get('#number1').click()
    cy.get('#operator_divide').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  });

  it('output as expected for negative numbers', () => {
    cy.get('#number1').click()
    cy.get('#operator_subtract').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  });

  it('output as expected for positive numbers', () => {
    cy.get('#number1').click()
    cy.get('#operator_add').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  });

  it('output as expected for very large numbers', () => {
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_divide').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '50000')
  });

  it('dividing by 0 should display nope', () => {
    cy.get('#number2').click()
    cy.get('#operator_divide').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'NOPE')
  });

  

})
