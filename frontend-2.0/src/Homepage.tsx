import React from "react"
import Navbar from "./components/common/Navbar"
import { useAuth } from "./contexts/AuthContext"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import space_small from "./assets/images/space.png"
import astronaut from "./assets/images/astronaut_1.png"
import cv from "./assets/images/cv.png"
import { ReactComponent as NewTab } from "./assets/svgs/new_tab.svg"

function Homepage() {

  const cv_src = process.env.REACT_APP_CV_LINK
  const auth = useAuth()
  return (
    <>
      <Navbar />

      <Container fluid={true} className="p-5 h-90vh" id="home-container">
        <div id="space-ship-wrapper">
          <img src={space_small} alt="The Final Frontier" className="img-fluid" />
        </div>

        <div id="astronaut-wrapper">
          <img src={astronaut} alt="The Thinking Man" className="img-fluid" />
        </div>
        <Row className="justify-content-around h-100">

          {/* Main Content */}
          <Col lg={6}>
            <div className="d-flex mx-auto" id="home-profile-wrapper">
              <div className="row-cols-1" id="home-profile-container">

                <Col>
                  <div className="h1" id="profile-name" style={{ fontSize: "60px" }}>{auth.isAuth ? `Imperator ${auth.name}` : `Ashraff Hatz`}</div>
                </Col>
                <Col>
                  <div className="h2"> Software Engineer </div>
                </Col>
                <Col>
                  <a href="mailto:ashraff.hatz@gmail.com">
                    <div className="h5 fw-light"> ashraff.hatz@gmail.com</div>
                  </a>
                </Col>
                <Col>
                  <div className="p text-faded"> An engineer with a keyboard, a degree, and an unhealthy obsession with staying wired in.
                  </div>
                </Col>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center z-10">
            <div className="w-fit-content mx-auto" id="cv-wrapper">
              <figure className="figure">
                <a href={cv_src} target="_blank" rel="noopener noreferrer">
                  <img src={cv} className="figure-img img-fluid rounded cv-pdf" alt="CV Preview" />
                  <figcaption className="figure-caption">curriculum vitae</figcaption>
                </a>
              </figure>
              <div className="cv-overlay">
                <NewTab />
                <p>Open in new tab</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage