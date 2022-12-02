import React from "react"
import Navbar from "./components/common/Navbar"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Homepage() {
  return (
    <>
      <Navbar />
      <Container className="container">
        <Row>
          <Col>
            <div className="h1 text-center">
              Homepage
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage