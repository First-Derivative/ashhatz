import React, { useEffect } from 'react'
import reactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'
import {ReactComponent as RemoveIcon } from '../assets/remove.svg'

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

        </div>
      </div>
    </div>
  , document.getElementById("email-portal"))
}

export default EmailModal