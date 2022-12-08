import Navbar from "../../src/components/common/Navbar"

describe("Navbar component test", () => {
  it("contains the correct nav elements", () => {

    // Mount component
    cy.mount(<Navbar />)

    // Check correct number of <ul>
    cy.get("ul").should('have.length', 2)

    // Check correct number of <li>
    cy.get("li").should('have.length', 6)

    // Check correct navlink text
    const links = ["profile", "portfolio", "github"]
    cy.get(".navlink").each((item, index, list) => {
      expect(list).to.have.length(3)
      cy.wrap(item).should("contain.text", links[index])
    })

    // Check font style
    // Check background color
    // Check darkmode
  })
})