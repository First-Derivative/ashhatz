import { Parallax } from "react-scroll-parallax"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import profile_photo from "./assets/images/profile.jpg"

function Profile() {
  return (
    <Container fluid={true} className="p-5" id="profile-container">
      <Row>
        {/* Profile Photo */}
        <Col xs={12} sm={8} md={6} lg={4} xl={4} className="p-xs-0 order-xs-2 mx-sm-auto mx-xl-0 mt-xs-5 mt-sm-4 order-sm-2 order-md-1">
          <Parallax translateX={[-100, 0]} opacity={[0, 1]} startScroll={300} endScroll={900}>
            <div id="parallax-pp">
              <figure className="figure">
                <img
                  src={profile_photo}
                  alt="My senior graduation imago"
                  className="img-fluid rounded"
                />
                <figcaption
                  className="figure-caption text-center mt-1"
                >
                  Staring at my Github action run fail
                </figcaption>
              </figure>
            </div>
          </Parallax>
        </Col>
        {/* The Brief */}
        <Col xs={12} sm={8} md={6} lg={7} xl={4} className="p-xs-0 mx-sm-auto mx-md-0 px-md-5 order-xs-1 order-sm-1 order-md-2" id="profile-brief">
          <Parallax translateY={[-100, 0]} opacity={[0, 1]} startScroll={100} endScroll={900}>
            <div id="parallax-brief">
              <div className="h1">
                The Brief
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="p">
                  I'm a 22 year old developer from Singapore living in the grand metropolitan city of London.
                </div>
                <div className="p">
                  School was a prescription that I took gladly and earned a 1st Class BSc in Computer Science from Queen Mary University of London. Currently I'm immersing myself in what can only be described as <strong>"the-zone"</strong>, this is when you're coding consistently and constantly thinking about the next feature, the next solution, the infrastructure, and any other thought that involves lines of instructions.
                </div>

                <div className="p">
                  Colloquially my peers and I call this being <strong>"wired-in"</strong>.
                </div>
                <div className="p">
                  This season is wired-in working on Django/Python projects that involve a heavy backend. There is something satisfying in creating models, views, urls, and especially creating API endpoints. In terms of expansion, I really would love to work on projects which include a vast API infrastructure which I can dive into.

                </div>
              </div>
            </div>
          </Parallax>
        </Col>
      </Row>
    </Container >
  )
}

export default Profile