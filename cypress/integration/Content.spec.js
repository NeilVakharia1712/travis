describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('check if header is visible', () => {
    cy.visit ('/');
    cy.get('[data-cy=TopAppBar]').should('contain', 'Thrift Shift');
  });

});