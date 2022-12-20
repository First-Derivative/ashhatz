import { useState, useEffect } from "react"
import { TagsInterface } from "../../Portfolio"
import ProjectTag from "./ProjectTag"

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
interface Size {
  width: number | undefined;
  height: number | undefined;
}

function Project({ project, tags }: { project: ProjectInterface, tags: TagsInterface }) {

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [infoDeck, setInfoDeck] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })

  const handleClick = () => { window.open(project.link) }
  const updateMobile = () => {
    if (windowSize.width !== undefined) {
      if (windowSize.width <= 740) {
        setIsMobile(true)
        return
      }
      setIsMobile(false)
    }
  }

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

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

  useEffect(() => {
    updateMobile()
  }, [windowSize])

  return (
    <Col>
      <div className={`project-card d-flex flex-column ${isMobile ? "" : "ptr"}`} onClick={e => {
        if (!isMobile) handleClick()
        else {
          if (infoDeck) setInfoDeck(false)
        }
      }} onMouseEnter={e => setInfoDeck(true)} onMouseLeave={e => setInfoDeck(false)}>
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
                <LinkIcon width={32} height={32} onClick={e => handleClick()} />
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
    </Col>
  )
}

export default Project