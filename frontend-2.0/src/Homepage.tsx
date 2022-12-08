import React from "react"
import Navbar from "./components/common/Navbar"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import space_small from "./assets/images/space.png"
import astronaut from "./assets/images/astronaut_1.png"
import cv from "./assets/images/cv.png"
import { ReactComponent as NewTab } from "./assets/svgs/new_tab.svg"

function Homepage() {

  const cv_src = process.env.REACT_APP_CV_LINK

  return (
    <>
      <Navbar />

      <div id="space-ship-wrapper">
        <img src={space_small} alt="The Final Frontier" className="img-fluid" />
      </div>

      <div id="astronaut-wrapper">
        <img src={astronaut} alt="The Thinking Man" className="img-fluid" />
      </div>

      <Container fluid={true} className="section p-5">
        <Row className="justify-content-around ">

          {/* Main Content */}
          <Col lg={6}>
            <div className="d-flex mx-auto" id="id-wrapper">
              <div className="row-cols-1">

                <Col>
                  <div className="h1" style={{ fontSize: "60px" }}> Ashraff Hatz</div>
                </Col>
                <Col>
                  <div className="h2"> Software Engineer </div>
                </Col>
                <Col>
                  <div className="h5 fw-light"> ashraff.hatz@gmail.com</div>
                </Col>
                <Col>
                  <div className="p text-faded"> An engineer with a keyboard, a degree, and an unhealthy obsession with staying wired in.
                  </div>
                </Col>
              </div>
            </div>
          </Col>

          <Col className="text-center">
            <div className="cv-wrapper w-fit-content mx-auto">
              <figure className="figure">
                <a href={cv_src} target="_blank" rel="noopener noreferrer">
                  <img src={cv} className="figure-img img-fluid rounded cv-pdf" alt="CV Preview" />
                  <figcaption className="figure-caption">curriculum vitae</figcaption>
                </a>
              </figure>
              <div className="cv-overlay">
                <NewTab
                />
                <p>
                  Open in new tab
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage