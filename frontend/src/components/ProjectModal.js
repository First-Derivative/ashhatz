import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'
import { ReactComponent as RemoveIcon } from '../assets/remove.svg'
import { ReactComponent as LinkIcon } from '../assets/link.svg'

function ModalEntry({title, value}) {
  const darkmode = useDarkmode()

  const darkModeStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text
  }

  return (
    <div className="d-flex my-3">
      <div className="p" style={darkModeStyling}>
        <span className="fw-bold">{title}</span>: <br/>
        <span className="fw-lighter">{value}</span>
      </div>
    </div>
  )
}

function ModalTag({tag}) {
  const darkmode = useDarkmode()
  const tagStyling = {
    color: darkmode ? lightTheme.text : darkTheme.text,
    backgroundColor: darkmode ? darkTheme.body : darkTheme.body
  }

  // Edge Case: stop render of ModalTag incase of undefined tags
  if(tag === undefined) return null

  return (
    <span className="badge rounded-pill px-3 mx-2 fw-light text-end" style={tagStyling}>{tag.name}</span>
  )
}

function ModalLinks({link}) {
  const darkmode = useDarkmode()
  
  const linkStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text,
  }
  const iconStyling = {
    width: '24px',
    height: '24px',
    filter: darkmode ? darkTheme.svg_filter : lightTheme.svg_filter
  }

  if(link === undefined) return null

  return (
    <div className="d-flex flex-row">
      <LinkIcon style={iconStyling} />
      <div className="p" style={linkStyling}>{link.name}</div>
    </div>
  )
}

function ProjectModal({open, openHandler, project, tags, links}) {
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

  // overrides render of Modal 
  if (!open) return null 
  if(!Object.entries(tags).length > 0) return null

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

  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div className="rounded project-container" id={`${project.id}`} style={containerStyle}>
        
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
          
          <div className="row">

            {/* Project Media */}
            <div className="col-5">
              <div className="row">
                <div className="col-12">
                    media content
                </div>
              </div>
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
                  <div className="col-12 fw-bold mb-2">Tags: </div>
                    { Object.entries(tags).length > 0 && (
                      Object.entries(project.tags).map( (id, index) => {
                        return (
                            <ModalTag key={index} tag={tags[id[1]]}/>
                        )
                      }))
                    }
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="col-12 fw-bold mb-2">Links: </div>
                  {
                    Object.entries(links).length > 0 && (
                      Object.entries(project.links).map( (id, index) => {
                        return (
                          <ModalLinks key={index} link={links[id[1]]}/>
                        )
                      })
                    )
                  }
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