import { useEffect, useState } from "react"
import Project, { ProjectInterface, ProjectTagInterface } from "./components/portfolio/Project"
import ErrorAlert from "./components/common/ErrorAlert"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import axiosInstance from "./utils/axios"

export interface TagsInterface {
  [id: number]: ProjectTagInterface
}

function Portfolio() {

  const [projects, setProjects] = useState<Array<ProjectInterface>>([])
  const [tags, setTags] = useState<TagsInterface>({})
  const [error, setError] = useState<string>("")

  const closeErrors = () => {
    setError("")
  }

  const getProjects = async () => {
    setError("")
    await axiosInstance.get(`portfolio/api/get/projects/`).then(res => {
      setProjects(res.data)
      // setLoading(false)
    }
    ).catch(err => {
      setError(err.message)
    })
  }

  const getTags = async () => {
    await axiosInstance.get("portfolio/api/get/tags/").then(res => {
      setTags(res.data)
    }).catch(err => {
      setError(err.message)
    })
  }

  useEffect(() => {
    getTags()
    getProjects()
  }, [])

  return (
    <Container fluid={true} className="p-5" id="portfolio-container">
      {/* Title */}
      <Row className="mb-5">
        <Col>
          <div className="h1">
            My works:
          </div>
        </Col>
      </Row>
      {/* Projects */}
      <Row>
        <Col xs={12} className="p-0">
          {/* Default render when no projects */}
          {projects.length === 0 && (
            <Row>
              <Col className="mb-5">
                <div className="h5 text-white text-center">
                  Getting projects from backend...
                </div>
              </Col>
            </Row>
          )}
          {/* Render when projects */}
          <Row className="gap-5 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
            {
              projects.map((project, index) => {
                return (
                  <Project
                    key={index}
                    project={project}
                    tags={tags}
                  />
                )
              })
            }
            {/* Error Message */}
            {error !== "" && <ErrorAlert message={error} styling={"col-3 mb-3 mx-auto text-center"} handler={closeErrors} />}
          </Row>
        </Col>
      </Row >
    </Container >
  )
}

export default Portfolio