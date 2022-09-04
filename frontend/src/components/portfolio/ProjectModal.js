import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDarkmode } from '../../DarkmodeContext'
import { lightTheme, darkTheme } from '../../utils/theme'
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'

import ProjectModalEntry from './ProjectModalEntry'
import ProjectModalTag from './ProjectModalTag'
import ProjectModalLink from './ProjectModalLink'

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
            <div className="col-12 col-sm-5 my-auto">
              <div className="row">
                <div className="col-12">
                  <img src="https://picsum.photos/300/300" alt="Media Content" className="img-fluid d-block mx-auto rounded" />
                </div>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="col-12 col-sm-7">
              
              <div className="row">
                <div className="col-12">
                  <ProjectModalEntry title={"Name"} value={project.name} />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <ProjectModalEntry title={"Summary"} value={project.summary} />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="col-12 fw-bold mb-2">Tech Stack: </div>
                    { Object.entries(tags).length > 0 && (
                      Object.entries(project.tags).map( (id, index) => {
                        return (
                            <ProjectModalTag key={index} tag={tags[id[1]]}/>
                        )
                      }))
                    }
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="col-12 fw-bold mb-3">Links: </div>
                  {
                    Object.entries(links).length > 0 && (
                      Object.entries(project.links).map( (id, index) => {
                        return (
                          <ProjectModalLink key={index} link={links[id[1]]}/>
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