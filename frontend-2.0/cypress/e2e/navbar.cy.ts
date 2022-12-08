/*
  Should handle more complex e2e tests such ass:
  Opening emailModal:
    Enter input values,
    submit the form,
    check HTTP requests/responses
*/
const base = Cypress.config().baseUrl

describe("Navbar links <a> test", () => {
  it("links all point to corret ref", () => {
    // visiting react frontend server; need to change to django server to consider admin data
    cy.visit(base)

    // Test Profile Link
    cy.get("#profile-link").click()
    cy.url().should("eq", `${base + "/#profile"}`)

    // Test Portfolio Link
    cy.get("#portfolio-link").click()
    cy.url().should("eq", `${base + "/#portfolio"}`)

    // Test Portfolio Link
    cy.get("#github-link > a").should("be.visible").then(($link) => {
      expect($link).to.have.attr("target", "_blank")
      // update attr to open in same tab
      $link.attr("target", "_self")

    }).click().url().should("eq", "")
  })
})

describe("Navbar icons <small> test", () => {
  it("nav icons all trigger their <small> hover", () => {

    cy.visit(base)

    // Test Profile Link
    cy.get(".navlink-icon").each((link) => {
      cy.get(link).trigger("mouseover")
      // cy.get($link).children("small").should('be.visible')
    })

  })
})