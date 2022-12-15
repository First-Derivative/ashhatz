import React, { useState } from "react"
import ProjectTag from "./ProjectTag"

import { Col, Row, Container } from "react-bootstrap"

import temp from "../../assets/images/kaedim_temp.png"
import { ReactComponent as LinkIcon } from "../../assets/svgs/link.svg"

export interface ProjectInterface {
  id: number,
  name: string,
  summary: string,
  link: string
  tags: ProjectTagInterface[]
}

export interface ProjectTagInterface {
  id: number,
  name: string,
  css_body: string,
  css_text: string
}

function Project({ project }: { project: ProjectInterface }) {

  const handleClick = () => {
    window.open(project.link)
  }

  const [hover, setHover] = useState(false)

  return (
    <Col>
      <div className="project-card d-flex flex-column ptr" onClick={e => handleClick()} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
        <img className="project-img" src={temp} alt={`${project.name} web application`} />
        <Container className="project-card-infodeck p-3">
          <Row className="mb-3">
            <Col xs={10}>
              <div className="h2 mb-0">
                {project.name}
              </div>
            </Col>
            <Col>
              <div className="my-auto mx-auto">
                <LinkIcon width={32} height={32} />
              </div>
            </Col>
          </Row>

          {hover &&
            (<Row className="gap-3">
              <Col xs={12}>
                <div className="p small">
                  {project.summary}
                </div>
              </Col>
              <Col className="">
                {project.tags.map((tag, index) => {
                  return (
                    <ProjectTag key={index} tag={tag} />
                  )
                })}
              </Col>
            </Row>
            )}
        </Container>
      </div>
    </Col>
  )
}

export default Project

// <div className="project-card-infodeck d-flex p-3">
// <Row className="p-0">
//   <Col sm={hover ? 9 : 10} className="h2 mb-0 p-0">
//     {project.name}
//   </Col>
//   <Col sm={hover ? 3 : 2} className="p-0">
//     <LinkIcon width={32} height={32} />
//   </Col>

//   {hover && <Col sm={12} className="project-card-infodeck-content">
//     <div className="p small">
//       {project.summary}
//     </div>
//   </Col>}
// </Row>
// </div>