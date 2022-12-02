import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Navbar() {
  return (
    <Container fluid={true} className="custom-nav sticky-top">
      <Row className="w-100 h-100">
        <Col lg={6}>
          <ul className="d-flex flex-row gap-5 justify-content-start">

            <li>
              <a href="www.ashhatz.com">
                profile
              </a>
            </li>

            <li>
              <a href="www.ashhatz.com">
                portfolio
              </a>
            </li>
          </ul>
        </Col>

        <Col lg={6}>
          <ul className="d-flex flex-row gap-5 justify-content-end">

            <li>
              <a href="www.ashhatz.com">
                email
              </a>
            </li>

            <li>
              <a href="www.ashhatz.com">
                instagram
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar