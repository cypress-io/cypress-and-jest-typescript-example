it('works', () => {
  cy.wrap('foo').should('equal', 'foo')
})
