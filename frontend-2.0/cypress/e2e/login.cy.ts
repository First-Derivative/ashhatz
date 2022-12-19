/*
  Should handle more complex e2e tests such ass:
*/
const base = Cypress.config().baseUrl

describe("Login component test", () => {
  it("mounts and renders correctly ", () => {
    cy.visit(base)

    // Test Admin access modal
    cy.get("#navlink-icon-admin").click().then((obj) => {
      cy.get("#login-container").should("be.visible")
      cy.get("#login-wrapper").invoke('css', 'position')
        .should('equal', 'fixed')
    })
  })

  it("is accessible via mouse interaction ", () => {
    cy.visit(base)

    // Test Admin access modal
    cy.get("#navlink-icon-admin").click()
    cy.get("#input-email").click().type("email@emails.com")
    cy.get("#input-password").click().type("password")
    cy.get("#btn-login").click()
  })

  it("is acccessible via keyboard interaction", () => {
    cy.visit(base)

    // Test Admin access modal
    cy.get("#navlink-icon-admin").click()
    cy.get("#input-email").click().type("email@emails.com").type("{enter}").then(() => {
      // Test enter focus feature
      cy.get("#input-password").should("have.focus").type("password").type("{enter}").then(() => {
        cy.get(".alert-danger", { timeout: 12000 }).should("be.visible")
      })
    })

  })

  it("handles form validation", () => {
    cy.visit(base)
    cy.get("#navlink-icon-admin").click()

    // Test no email input
    cy.get("#btn-login").click().then(() => {
      cy.get("#login-errorbar").should("have.length", 1)
    })

    // Test no password input
    cy.get("#input-email").focus().type("email@emails.com")
    cy.get("#btn-login").click().then(() => {
      cy.get("#login-errorbar").should("have.length", 1)
    })

  })

  it("handles errorbar dismissal", () => {
    cy.visit(base)

    // Open login
    cy.get("#navlink-icon-admin").click()

    // Enters credentials
    cy.get("#input-email").focus().type("email@emails.com")
    cy.get("#input-password").focus().type("password")
    cy.get("#btn-login").click().then((obj) => {
      cy.get(".alert-danger", { timeout: 12000 }).click()
    })
    cy.get("#login-errorbar").should('be.empty')
  })

  it("handles incorrect credentials", () => {
    cy.visit(base)

    // Open login
    cy.get("#navlink-icon-admin").click()

    // Enters credentials
    cy.get("#input-email").focus().type("email@emails.com")
    cy.get("#input-password").focus().type("password")
    cy.get("#btn-login").click().then((obj) => {
      cy.get(".alert-danger", { timeout: 12000 }).should("be.visible").should("have.text", "Incorrect Credentials").click().then(() => {
        cy.get("#login-errorbar").should("have.length", 1)
      })

    })
  })

  it("handles correct credentials", () => {
    cy.visit(base)

    // Open login
    cy.get("#navlink-icon-admin").click()

    // Enters credentials
    cy.get("#input-email").focus().type("test@testingservice.com")
    cy.get("#input-password").focus().type("ilovetestingforyou")
    cy.get("#btn-login").click().then(() => {
      cy.get("#profile-name").should("have.text", "Imperator Testing Dummy")
    })

    cy.get("#admin-link").should("be.visible")
  })
})

describe("Signout component test", () => {
  it("signs out ", () => {
    cy.visit(base)

    // Login 
    cy.get("#navlink-icon-admin").click()
    cy.get("#input-email").focus().type("test@testingservice.com")
    cy.get("#input-password").focus().type("ilovetestingforyou")
    cy.get("#btn-login").click()


    // Logout
    cy.get("#navlink-icon-admin").children("small").should("have.text", "sign out")
    cy.get("#navlink-icon-admin").click().then(() => {
      cy.get("#profile-name").should("have.text", "Ashraff Hatz")
    })

    // Confirm logout
    cy.get("#login-portal").should("be.empty")

  })
})