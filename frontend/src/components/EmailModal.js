import React, { useEffect, useState } from 'react'
import reactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'
import {ReactComponent as RemoveIcon } from '../assets/remove.svg'
import {ReactComponent as SubmitIcon } from '../assets/sign-in.svg'
import axiosInstance from '../utils/axios.js'

function EmailModal({open, openHandler}) {

  const darkmode = useDarkmode()
  const [emailForm, setEmailForm] = useState({
    email: '',
    number: '',
    subject: '',
    content: ''
  })

  const [feedback, setFeedback] = useState(false)
  const [success, setSuccess] = useState(false)

  // Handle Open & Closing of Modal
  useEffect( ()=> {
    if (!open) return
  
    function handleEscape(e) {
      if(e.key === 'Escape') openHandler()
    }
    window.addEventListener("keyup", handleEscape);
    return () => window.removeEventListener("keyup", handleEscape);
  }, [open])

  if(!open) return null; // overrides render of elements if !open

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .8)',
    zIndex: 2000
  }

  const containerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: darkmode ? darkTheme.body : lightTheme.body ,
    zIndex: '2000',
  }

  const svgStyle = {
    width: '24px',
    height: '24px',
    filter : darkmode ? darkTheme.svg_filter : lightTheme.svg_filter 
  }

  function resetErrorFields () {
    const fields = document.querySelectorAll("input, textarea")
    fields.forEach( (field) => {
      if(field.classList.contains("input-error")){
        field.classList.toggle("input-error")
      }
    })
  }

  const updateEmailForms = ({target}) => setEmailForm({
    ...emailForm,
    [target.name] : target.value
  });

  const postEmail = async () => {
    setFeedback(false)
    setSuccess(false)
    
    await axiosInstance.post("", emailForm).then(
      (res) => {
        setFeedback(true)
        setSuccess(true)
      }
    ).catch( 
      (err) => {
        setFeedback(true)
    })
  }

  const handleSubmit = (e) => {
    console.log("got handlesubmit")
    e.preventDefault()
    resetErrorFields()

    let isValid = true;
    let invalidFields = []

    // validate fields
    if( emailForm["email"] === ""){
      isValid = false;
      invalidFields.push("email")
    }

    if( emailForm["subject"] === ""){
      isValid = false;
      invalidFields.push("subject");
    }

    if( emailForm["content"] === ""){
      isValid = false;
      invalidFields.push("content");
    }

    if(isValid){
      return postEmail()
      
    } else {
      invalidFields.forEach( (field) => {
        const elem = document.getElementById(`input-${field}`)
        elem.classList.add("input-error")
      })
    }

  }

  return reactDOM.createPortal(
    <div style={overlayStyle}>
      <div className="rounded email-container" style={containerStyle}>
        <div className="email-root-container">
        <div className="container p-3">

        {/* Modal Accesibility */}
        <div className="row mb-3">
          <div className="d-flex flex-row justify-content-end">
            <RemoveIcon 
            className="target" 
            style={svgStyle} 
            onClick={openHandler}/>
          </div>
        </div>

        {/* User Details */}
        <div className="row">

          <div className="col-12 mb-3">
            <div className="h4 fst-light"> Your Details </div>
          </div>

          {/* user email */}
          <div className="col-12 col-sm-6">
            <div className="form-floating mb-3">
              <input 
              type="email" 
              className="form-control" 
              id="input-email" 
              placeholder="johnny@silverhand.com"
              name="email"
              onChange={(e) => updateEmailForms(e)}
              required/>
              <label htmlFor="input-email">Email address</label>
            </div>
          </div>

          {/* user number */}
          <div className="col-12 col-sm-6">
            <div className="form-floating mb-3">
              <input 
              type="tel" 
              className="form-control" 
              id="input-number" 
              name="number"
              onChange={(e) => updateEmailForms(e)}
              placeholder="+44 7659973412"/>
              <label htmlFor="input-number">Number</label>
            </div>
          </div>

        </div>

        {/* User Letter */}

        {/* user email */}
        <div className="row">

          <div className="col-12 my-3">
            <div className="h4 fst-light"> Your Message </div>
          </div>


          <div className="col-12">
            <div className="form-floating mb-3">
              <input 
              type="text" 
              className="form-control" 
              id="input-subject" 
              name="subject"
              onChange={(e) => updateEmailForms(e)}
              placeholder="Arasaka Riot"/>
              <label htmlFor="input-subject">Subject </label>
            </div>
          </div>
        </div>

        {/* user content */}
        <div className="row">
          <div className="col-12">
            <div className="form-floating">
              <textarea 
              className="form-control" 
              placeholder="Leave a comment here" 
              id="input-content"
              name="content"
              onChange={(e) => updateEmailForms(e)}
              style={{height: '28vh'}}
              >
              </textarea>
              <label htmlFor="input-content">Content</label>
            </div>
          </div>
        </div>

        <div className="row justify-content-between mt-3 align-items-center">

          <div className="col-4">
            { feedback ? success ? (
              <div className="alert alert-success" role="alert">
                Message Sent
              </div>
            ) : (
              (
                <div className="alert alert-danger" role="alert">
                  Message Failed
                </div>
              )
            ) : null}
          </div>

          <div className="col-2 col-sm-1 pe-3">
            <SubmitIcon 
            className="target hover-icon"
            style={{...svgStyle, width: '32px', height: '32px'}}
            onClick={(e) => handleSubmit(e)}
            />
          </div>
        </div>

        </div>
      </div>
      </div>
    </div>
  , document.getElementById("email-portal"))
}

export default EmailModal