describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Title', () => {
    cy.visit ('/');
    cy.get('[data-cy=TopAppBar]').should('contain', 'Thrift Shift');
  });

  it('Sign In', () => {
    cy.visit ('/');
    cy.get('[data-cy=signin]').click();
    cy.get('[data-cy=role]').should('contain' ,"seller");
  });
});


