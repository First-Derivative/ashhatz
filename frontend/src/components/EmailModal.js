import React, { useEffect } from 'react'
import reactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'
import {ReactComponent as RemoveIcon } from '../assets/remove.svg'
import {ReactComponent as SubmitIcon } from '../assets/sign-in.svg'

function EmailModal({open, openHandler}) {

  const darkmode = useDarkmode()

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
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="input-email" placeholder="johnny@silverhand.com" required/>
              <label for="input-email">Email address</label>
            </div>
          </div>

          {/* user number */}
          <div className="col-12 col-sm-6">
            <div class="form-floating mb-3">
              <input type="tel" class="form-control" id="input-number" placeholder="+44 7659973412"/>
              <label for="input-number">Number</label>
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
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="input-subject" placeholder="Arasaka Riot"/>
              <label for="input-subject">Subject </label>
            </div>
          </div>
        </div>

        {/* user content */}
        <div className="row">
          <div className="col-12">
          <div class="form-floating">
            <textarea 
            class="form-control" 
            placeholder="Leave a comment here" 
            id="input-content"
            style={{height: '28vh'}}
            >
            </textarea>
            <label for="input-content">Content</label>
          </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-2 col-sm-1 mt-4 pe-3">
            <SubmitIcon 
            className="target hover-icon"
            style={{...svgStyle, width: '32px', height: '32px'}}/>
          </div>
        </div>

        </div>
      </div>
      </div>
    </div>
  , document.getElementById("email-portal"))
}

export default EmailModal