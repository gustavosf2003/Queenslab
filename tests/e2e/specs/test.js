// https://docs.cypress.io/api/introduction/api.html

describe("Check submit button", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("input", "Buy Product");
  });
});
describe("Correct", () => {
  it('Correct Data', () => {
    cy.visit("/");
    cy.get('#number')
      .should('be.visible')
      .type('132133453312313')
    cy.get('#holder')
      .should('be.visible')
      .type('Gustavo Ferreira')
    cy.get('#month')
      .should('be.visible')
      .select('10')
    cy.get('#year')
      .should('be.visible')
      .select('2027')
    cy.get('#ccv')
      .should('be.visible')
      .type('345')
    cy.get('input[type="submit"]')
      .should('be.visible')
      .click()
    cy.contains('Successful Purchase')
      .should('be.visible')
  })
  it('Correct Data 2', () => {
    cy.visit("/");
    cy.get('#number')
      .should('be.visible')
      .type('9876543210987')
    cy.get('#holder')
      .should('be.visible')
      .type('Marcus Nordquist')
    cy.get('#month')
      .should('be.visible')
      .select('12')
    cy.get('#year')
      .should('be.visible')
      .select('2030')
    cy.get('#ccv')
      .should('be.visible')
      .type('345')
    cy.get('#form')
      .submit()
    cy.contains('Successful Purchase')
      .should('be.visible')
  })
});
describe("Incorrect submit", () => {
  it('Wrong year', () => {
    cy.visit("/");
    cy.get('#number')
      .should('be.visible')
      .type('12345678901234')
    cy.get('#holder')
      .should('be.visible')
      .type('Paul Mcartney')
    cy.get('#month')
      .should('be.visible')
      .select('11')
    cy.get('#year')
      .should('be.visible')
      .select('2021')
    cy.get('#ccv')
      .should('be.visible')
      .type('224')
    cy.get('#form')
      .submit()
    cy.contains('Successful Purchase')
      .should('be.visible')
  })
});
