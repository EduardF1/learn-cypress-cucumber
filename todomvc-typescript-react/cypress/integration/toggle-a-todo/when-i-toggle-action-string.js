defineParameterType({
  name: "toggle-action",
  regexp: /complete|un-complete/,
});

When("I {toggle-action} {string}", (_toggleAction, title) => {
  cy.get(".todo-list li .view label")
    .contains(title)
    .parent()                   // go 1 level up in the DOM tree
    .find(".toggle")    // find the element ".toggle" in that parent
    .click()
});
