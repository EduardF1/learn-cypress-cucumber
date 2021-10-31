When("I remove {string}", (title) => {
  cy.get(".todo-list li .view label")
    .contains(title)
    .parent()                   // go 1 level up in the DOM tree
    .find(".destroy")    // find the element ".destroy" in that parent
    .click({force:true})
});
