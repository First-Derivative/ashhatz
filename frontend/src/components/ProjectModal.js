import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'

function ModalEntry({title, value}) {
  const darkmode = useDarkmode()

  const darkModeStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text
  }

  return (
    <div className="d-flex my-3">
      <div className="p" style={darkModeStyling}>
        <span className="fw-light">{title}</span>: <span className="fw-bold">{value}</span>
      </div>
    </div>
  )
}

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
  }

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div className="rounded project-container" id={`${project.id}`} style={containerStyle}>
        
        <div className="container p-3">
          
          <div className="row">

            {/* Project Media */}
            <div className="col-5">
              media content
            </div>
            
            {/* Project Content */}
            <div className="col-7">
              
              <div className="row">
                <div className="col-12">
                  <ModalEntry title={"Name"} value={project.name} />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <ModalEntry title={"Summary"} value={project.summary} />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <ModalEntry title={"Tags"} value={"1,2,3"} />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <ModalEntry title={"Links"} value={"Link 1 "} />
                </div>
              </div>

            </div>

          </div>

        </div>
        
      </div>
    </div>
  , document.getElementById('project-portal'))
}

export default ProjectModal