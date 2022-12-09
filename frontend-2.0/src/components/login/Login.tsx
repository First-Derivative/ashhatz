import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useAuth, useAuthUpdate } from "../../contexts/AuthContext"
import axiosInstance from "../../utils/axios"

import CSRFToken from "../common/CSRFToken"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { ReactComponent as User } from "../../assets/svgs/user-circle.svg"

function Login({ open, openHandler }: { open: boolean, openHandler: Function }) {

  // State
  interface Error {
    text: String
  }
  const portal = document.getElementById("login-portal")
  const default_jsx_null = <></>
  const auth = useAuth()
  const [handleSignIn, handleSignOut] = useAuthUpdate()
  const [errorBar, setErrorBar] = useState<Array<Error>>([])
  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  })

  // Handles "escape" key windowEventListener
  useEffect(() => {
    if (!open) return

    function handleEscape(e: any) {
      if (e.key === 'Escape') openHandler()
    }
    window.addEventListener("keyup", handleEscape);
    return () => window.removeEventListener("keyup", handleEscape);
  }, [open])

  // Login (modal) render handler
  if (!open || auth.isAuth) return (default_jsx_null)

  // Update errorBar intuitively 
  function updateErrorBar(text: string): void {
    setErrorBar(prev => [...prev, { "text": text }])
  }

  // Handle user input on formData
  const handleInput = (e: any) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  // Handle "enter" key on input tags
  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const email_input = document.getElementById("input-email")
      const password_input = document.getElementById("input-password")
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

  // Handle submit button for form
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setErrorBar([])

    const valid = validateForm()
    if (valid) {

      axiosInstance.post("users/auth/login", formData).then((res) => {
        handleSignIn(res.data)
      }).catch((err) => {
        updateErrorBar(err.response.data.error)
      })
    }
  }

  // Validate formData
  const validateForm = (): boolean => {
    const { email } = formData
    const { password } = formData
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (email === "") {
      updateErrorBar("Email required")
    } else if (password === "") {
      updateErrorBar("Password required")
    } else if (email.match(regex)) {
      return true
    }

    return false
  }

  if (portal) {
    return ReactDOM.createPortal(
      <>
        <div id="login-wrapper" onClick={e => openHandler()} />
        <Container className="rounded p-5 gap-5 text-center" id="login-container">
          <Row className="row-cols-1 gap-3">
            <CSRFToken />
            {/* Title */}
            <Col className="gap-5">
              <User className="mb-2" width={"32px"} height={"32px"} />
              <div className="h3 fw-light text-dark">
                Admin Access
              </div>
            </Col>
            {/* Email Input */}
            <Col>
              <form className="form-floating">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="input-email" placeholder="name@example.com"
                  autoComplete="on"
                  defaultValue={formData.email}
                  onChange={e => handleInput(e)}
                  onKeyDown={e => handleEnter(e)}
                />
                <label htmlFor="input-email">Email</label>
              </form>
            </Col>
            {/* Password Input */}
            <Col>
              <form className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="input-password" placeholder="name@example.com"
                  autoComplete="on"
                  defaultValue={formData.password}
                  onChange={e => handleInput(e)}
                  onKeyDown={e => handleEnter(e)}
                />
                <label htmlFor="input-password">Password</label>
              </form>
            </Col>
            {/* errorBar */}
            <Col id="login-errorbar">
              {errorBar.map((elem, index) => {
                return (
                  <div
                    className="ptr alert alert-danger p-1"
                    role="alert"
                    key={index}
                    onClick={(e) => setErrorBar((prev) => prev.filter((item) => item.text !== elem.text))}
                  >
                    {elem.text}
                  </div>
                )
              })}
            </Col>
            {/* Submit Button */}
            <Col>
              <button type="button" className="btn px-4 py-2" id="btn-login" onClick={(e) => handleSubmit(e)}>
                login
              </button>
            </Col>
          </Row>
        </Container>
      </>
      , portal)
  } else {
    return default_jsx_null
  }
}

export default Login