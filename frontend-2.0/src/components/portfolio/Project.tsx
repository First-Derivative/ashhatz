import React, { useState } from "react"
import { TagsInterface } from "../../Portfolio"
import ProjectTag from "./ProjectTag"

import { Col, Row, Container } from "react-bootstrap"

import kaedim_temp from "../../assets/images/kaedim_temp.png"
import dlk_temp from "../../assets/images/dlk_temp.png"
import dlk_ms_temp from "../../assets/images/dlk_ms_temp.png"
import { ReactComponent as LinkIcon } from "../../assets/svgs/link.svg"


export interface ProjectInterface {
  id: number,
  name: string,
  summary: string,
  link: string
  tags: number[]
}
export interface ProjectTagInterface {
  id: number,
  name: string,
  css_body: string,
  css_text: string
}

function Project({ project, tags }: { project: ProjectInterface, tags: TagsInterface }) {

  const handleClick = () => {
    window.open(project.link)
  }

  const [hover, setHover] = useState(false)

  const evalImage = () => {
    switch (project.id) {
      case 2:
        return dlk_ms_temp
        break
      case 3:
        return dlk_temp
        break
      case 4:
        return kaedim_temp
        break
      default:
        return "https://images.pexels.com/photos/4693135/pexels-photo-4693135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    }
  }

  return (
    <Col>
      <div className="project-card d-flex flex-column ptr" onClick={e => handleClick()} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
        <img className="project-img" src={evalImage()} alt={`${project.name} web application`} />
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
                {
                  project.tags.map((tag_id, index) => {
                    if (tags.hasOwnProperty(tag_id)) {
                      return (
                        <ProjectTag key={index} tag={tags[tag_id]} />
                      )
                    }
                  })
                }
              </Col>
            </Row>
            )}
        </Container>
      </div>
    </Col>
  )
}

export default Project