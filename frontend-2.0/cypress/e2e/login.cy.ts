/*
  Should handle more complex e2e tests such ass:
*/
const base = Cypress.config().baseUrl

describe("Login component test ", () => {
  it("mounts and renders correctly ", () => {
    cy.visit(base)

    // Test Admin access modal
    cy.get("#navlink-icon-admin").click().then((obj) => {
      cy.get("#login-container").should("be.visible")
      cy.get("#modal-wrapper").invoke('css', 'position')
        .should('equal', 'fixed')
    })
  })
})