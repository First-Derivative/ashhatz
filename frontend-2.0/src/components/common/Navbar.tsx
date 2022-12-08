import React, { useState } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { ReactComponent as EmailIcon } from "../../assets/svgs/email.svg"
import { ReactComponent as InstagramIcon } from "../../assets/svgs/instagram.svg"
import { ReactComponent as LockIcon } from "../../assets/svgs/lock.svg"
import { ReactComponent as UnlockIcon } from "../../assets/svgs/unlock.svg"

interface Link {
  url: String
  text: String
  new_tag: Boolean
}

function NavLink({ link }: { link: Link }) {
  const options: any = { "href": link.url }

  if (link.new_tag) {
    options["target"] = "_blank"
    options["rel"] = "noopener noreferrer"
  }

  let a_tag = React.createElement("a", options, link.text)

  return (
    <li className="navlink" id={`${link.text}-link`}>
      {a_tag}
    </li>
  )
}

function Navbar() {

  const [adminHover, setAdminHover] = useState(false)

  const links: Array<Link> = [
    {
      "url": "#profile",
      "text": "profile",
      "new_tag": false
    },
    {
      "url": "#portfolio",
      "text": "portfolio",
      "new_tag": false
    },
    {
      "url": "https://www.github.com/First-Derivative",
      "text": "github",
      "new_tag": true
    }
  ]

  const iconStyling = {
    width: "24px",
    height: "24px"
  }

  return (
    <Container fluid={true} className="custom-nav sticky-top p-5">
      <Row className="w-100 h-100">
        <Col lg={6}>
          <ul className="d-flex flex-row gap-5 justify-content-start">
            {links.map((link, index) => {
              return <NavLink link={link} key={index} />
            })}
          </ul>
        </Col>

        <Col lg={6}>
          <ul className="d-flex flex-row gap-4 justify-content-end">

            <li className="navlink-icon">
              <EmailIcon
                className="svg-white ptr"
                style={{ ...iconStyling, marginTop: "4px" }}
              />
              <small> email me </small>
            </li>

            <a href="https://www.instagram.com/ashhhatz/" target="_blank" rel="noopener noreferrer">
              <li className="navlink-icon">
                <InstagramIcon
                  className="svg-white"
                  style={{ ...iconStyling, marginTop: "3px" }}
                />
                <small> @ashhhatz </small>
              </li>
            </a>

            <li className="navlink-icon"
              onMouseEnter={(e) => setAdminHover((prev) => !prev)}
              onMouseLeave={(e) => setAdminHover((prev) => !prev)}
            >
              {adminHover ?
                <UnlockIcon
                  className="svg-white"
                  style={iconStyling}
                />
                :
                <LockIcon
                  className="svg-white"
                  style={iconStyling}
                />}
              <small> admin </small>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar