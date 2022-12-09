import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { ReactComponent as User } from "../../assets/svgs/user-circle.svg"

function Login({ open, openHandler }: { open: boolean, openHandler: Function }) {

  // State
  interface InfoElement {
    text: String
    type: String
  }
  const portalHook = document.getElementById("login-portal")
  const def_null = <></>
  const [infoBar, setInfoBar] = useState<Array<InfoElement>>([])
  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  })

  // Login (modal) render handler
  if (!open) return (def_null)

  // Form input & submission handlers
  const handleInput = (e: any) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let email_input = document.getElementById("input-email")
      let password_input = document.getElementById("input-password")
      if (e.target === email_input) {
        if (password_input) {
          password_input.focus()
        }
      }
      else {
        handleSubmit(e)
      }
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setInfoBar([])// Reset infoBar on submit
    console.log(formData)
  }

  if (portalHook) {
    return ReactDOM.createPortal(
      <>
        <div id="modal-wrapper" onClick={e => openHandler()} />
        <Container className="rounded p-5 gap-5 text-center" id="login-container">
          <Row className="row-cols-1 gap-3">
            <Col className="gap-5">
              <User className="mb-2" width={"32px"} height={"32px"} />
              <div className="h3 fw-light text-dark">
                Admin Access
              </div>
            </Col>
            <Col>
              <form className="form-floating">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="input-email" placeholder="name@example.com"
                  onChange={e => handleInput(e)}
                  onKeyDown={e => handleEnter(e)}
                />
                <label htmlFor="input-email">Email</label>
              </form>
            </Col>
            <Col>
              <form className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="input-password" placeholder="name@example.com"
                  onChange={e => handleInput(e)}
                  onKeyDown={e => handleEnter(e)}
                />
                <label htmlFor="input-password">Password</label>
              </form>
            </Col>
            <Col>
              {infoBar.map((elem, index) => {
                return (
                  <div
                    className={`ptr alert alert-${elem.type === "success" ? "success" : "danger"} p-1`}
                    role="alert"
                    key={index}
                    onClick={(e) => setInfoBar((prev) => prev.filter((item) => item.text !== elem.text))}
                  >
                    {elem.text}
                  </div>
                )
              })}
            </Col>
            <Col>
              <button type="button" className="btn px-4 py-2" id="btn-login" onClick={(e) => handleSubmit(e)}>
                login
              </button>
            </Col>
          </Row>
        </Container>
      </>
      , portalHook)
  } else {
    return def_null
  }
}

export default Login