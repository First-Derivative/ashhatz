import { useState } from "react"
import { TagsInterface } from "../../Portfolio"
import ProjectTag from "./ProjectTag"
import useMobile from "../../utils/useMobile"

import { Col, Row, Container } from "react-bootstrap"

import kaedim_temp from "../../assets/images/kaedim_temp.png"
import dlk_temp from "../../assets/images/dlk_temp.png"
import dlk_ms_temp from "../../assets/images/dlk_ms_temp.png"
import { ReactComponent as LinkIcon } from "../../assets/svgs/link.svg"
import { ReactComponent as ExpandUpIcon } from "../../assets/svgs/expand_up.svg"
import { ReactComponent as ExpandDownIcon } from "../../assets/svgs/expand_down.svg"


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

  const [infoDeck, setInfoDeck] = useState<boolean>(false)
  const isMobile = useMobile(820)

  const handleClick = (): void => {
    if (isMobile) {
      setInfoDeck(prev => !prev)
      return
    }
    handleLink()
  }

  const handleLink = (): void => {
    setInfoDeck(false)
    window.open(project.link)
  }

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
      <div
        className="project-card d-flex flex-column ptr"
        onClick={e => handleClick()}
        onMouseEnter={e => { if (!isMobile) setInfoDeck(true) }}
        onMouseLeave={e => { if (!isMobile) setInfoDeck(false) }}
      >
        <img className={`project-img ${infoDeck ? "project-img-raised" : ""}`} src={evalImage()} alt={`${project.name} web application`} />
        <Container className={`project-card-infodeck p-3 ${infoDeck ? "project-card-infodeck-raised" : ""}`}>
          <Row className="mb-3">
            <Col xs={10}>
              <div className="h3 mb-0 fw-normal">
                {project.name}
                {infoDeck ? (<ExpandDownIcon width={24} height={24} />) : (<ExpandUpIcon width={24} height={24} />)}
              </div>
            </Col>
            <Col>
              <div className="my-auto mx-auto">
                <LinkIcon width={isMobile ? 24 : 32} height={isMobile ? 24 : 32} onClick={e => handleLink()} />
              </div>
            </Col>
          </Row>

          {infoDeck &&
            (<Row className="gap-3 justify-content-between h-80">
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
                    return null
                  })
                }
              </Col>
            </Row>
            )}
        </Container>
      </div>
    </Col >
  )
}

export default Project

// onMouseEnter={e => { if (!isMobile) setInfoDeck(true); console.log("setInfoDeck from mouseEvent") }} onMouseLeave={e => { if (!isMobile) setInfoDeck(false); console.log("setInfoDeck from mouseEvent") }}