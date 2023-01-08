import App from "../../src/App"

describe("NotificationBar mounts and renders", () => {
  it("is not present on startup", () => {

    // Mount component
    cy.mount(<App />)

    // Check that notifbar not rendered on start up
    cy.get(".notifbar").should("not.exist")

    // Notification bar 
  })
})