import React, { useState } from 'react'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'
import ProjectModal from './ProjectModal'

function ProjectCard({project, tags, links}) {
  
  const darkmode = useDarkmode()
  const [modalOpen, setModalOpen] = useState(false)

  const cardStyles = {
    backgroundColor: darkmode ? lightTheme.body : darkTheme.body
  }

  const pStyles = {
    color: darkmode ? lightTheme.text : darkTheme.text
  }

  const handleModalOpen = () => {
    if(Object.entries(tags).length === 0) {
      setModalOpen(false)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <div className="col-12 col-sm-4 mb-3 mb-sm-0">
      
      <div 
        className="card project-card target"
        style={cardStyles}
        onClick={ () => handleModalOpen() }
        >
        <img src="https://images.pexels.com/photos/4693135/pexels-photo-4693135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="ProjectCardImage"/>
          <div className="card-body">
            <p
            className="card-text"
            style={pStyles}
            >{project.name}</p>
          </div>
      </div>

      <ProjectModal
      open={modalOpen}
      openHandler={ () => setModalOpen(false)}
      project={project}
      tags={tags}
      links={links}
      />

    </div>
  )
}

export default ProjectCard