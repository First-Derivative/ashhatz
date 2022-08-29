import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'

function ProjectModal({open, openHandler, project}) {

  const darkmode = useDarkmode()
  
  // Handle Open & Closing of Modal
  useEffect( () => {
    if (!open) return
  
    function handleEscape(e) {
      if(e.key === 'Escape') openHandler()
    }
    window.addEventListener("keyup", handleEscape);
    return () => window.removeEventListener("keyup", handleEscape);

  }, [open])

  if (!open) return null // overrides render of elements if !open

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
    width: '37.206rem'
  }

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={containerStyle}>
        {project.name}
      </div>
    </div>
  , document.getElementById('project-portal'))
}

export default ProjectModal