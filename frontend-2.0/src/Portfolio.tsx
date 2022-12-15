import React, { useState } from "react"
import Project, { ProjectInterface } from "./components/portfolio/Project"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Portfolio() {
  const tag_temp = { "id": 0, "name": "js", "css_body": "#0a0a0a", "css_text": "#FFF" }
  const temp = {
    "id": 0,
    "name": "Kaedim 3D",
    "summary": "Celebrate your fucking failures. Then you'll prove to yourself that you can survive anything.Design as if your fucking life depended on it.Practice won't get you anywhere if you mindlessly fucking practice the same thing. Change only occurs when you work deliberately with purpose toward a goal. The graphic",
    "link": "https://www.kaedim3d.com",
    "tags": [tag_temp, tag_temp, tag_temp, tag_temp, tag_temp]
  }
  const init = [temp, temp, temp, temp]
  const [projects, setProjects] = useState<Array<ProjectInterface>>(init)

  return (
    <Container fluid={true} className="p-5" id="portfolio-container">
      <Row className="mb-5">
        <Col>
          <div className="h1">
            My works:
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-0">
          <Row className="gap-5 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
            {
              projects.map((project, index) => {
                return (
                  <Project
                    key={index}
                    project={project}
                  />
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio