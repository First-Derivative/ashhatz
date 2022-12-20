import React, { useEffect, useState } from "react"
import Login from "../login/Login"
import { useAuth, useAuthUpdate } from "../../contexts/AuthContext"
import { useNotifUpdate } from "../../contexts/NotificationContext"
import axiosInstance from "../../utils/axios"

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

  // State & Data
  const auth = useAuth()
  const [addNotif, popNotif] = useNotifUpdate()
  const [handleSignIn, handleSignOut] = useAuthUpdate()
  const [openLogin, setOpenLogin] = useState(false)
  const [links, setLinks] = useState<Array<Link>>([
    {
      "url": "#profile-container",
      "text": "profile",
      "new_tag": false
    },
    {
      "url": "#portfolio-container",
      "text": "portfolio",
      "new_tag": false
    },
    {
      "url": "https://www.github.com/First-Derivative",
      "text": "github",
      "new_tag": true
    }
  ])
  const iconStyling = {
    width: "24px",
    height: "24px"
  }

  const openHandler = () => {
    setOpenLogin(prev => !prev)
  }

  const handleLogout = () => {
    axiosInstance.post("users/auth/logout").then((res) => {
      handleSignOut()
      addNotif({ "message": "sign out success" })
    }).catch((err) => {
    })
  }

  useEffect(() => {
    if (auth.isAuth) {
      setLinks(prev => [...prev, {
        "url": "/admin",
        "text": "admin",
        "new_tag": true
      }])
    }
    else {
      setLinks(prev => prev.filter(link => link.text !== "admin"))
    }
  }, [auth])

  return (
    <>
      <Login open={openLogin} openHandler={openHandler} />
      <Container fluid={true} className="nav-container sticky-top p-xs-3 p-sm-5">
        <Row className="w-100 mx-auto" id="nav-wrapper">

          {/* Navbar Links */}
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="px-0">
            <ul className="d-flex flex-row gap-5 ps-0 justify-content-xs-center justify-content-sm-start">
              {links.map((link, index) => {
                return <NavLink link={link} key={index} />
              })}
            </ul>
          </Col>

          {/* Navbar Icon Links */}
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="px-0">
            <ul className="d-flex flex-row gap-4 p-xs-0 justify-content-xs-center justify-content-sm-end mb-xs-0">

              <a href="mailto:ashraff.hatz@gmail.com">
                <li className="navlink-icon" id="navlink-icon-email">
                  <EmailIcon
                    tabIndex={0}
                    className="svg-white ptr"
                    style={{ ...iconStyling, marginTop: "4px" }}
                  />
                  <small> email me </small>
                </li>
              </a>

              <a href="https://www.instagram.com/ashhhatz/" target="_blank" rel="noopener noreferrer" id="navlink-icon-instagram">
                <li className="navlink-icon">
                  <InstagramIcon
                    className="svg-white"
                    style={{ ...iconStyling, marginTop: "3px" }}
                  />
                  <small> @ashhhatz </small>
                </li>
              </a>

              {auth.isAuth ? (
                <li
                  className="navlink-icon" id="navlink-icon-admin"
                  onClick={e => handleLogout()}
                >
                  <UnlockIcon
                    tabIndex={0}
                    className="svg-white"
                    style={iconStyling}
                  />
                  <small>sign out</small>
                </li>)
                :
                (
                  <li
                    className="navlink-icon" id="navlink-icon-admin"
                    onClick={e => openHandler()}
                  >
                    <LockIcon
                      tabIndex={0}
                      className="svg-white"
                      style={iconStyling}

                    />
                    <small>admin</small>
                  </li>)}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Navbar