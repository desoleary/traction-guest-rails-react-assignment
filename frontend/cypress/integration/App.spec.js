/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders app without errors', () => {
    cy.get('#root').should('contain.text', 'Learn some react with Wix components');
  });
});
