import React from 'react'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'

function ProjectCard({project}) {
  const darkmode = useDarkmode()

  const cardStyles = {
    backgroundColor: darkmode ? lightTheme.body : darkTheme.body
  }

  const pStyles = {
    color: darkmode ? lightTheme.text : darkTheme.text
  }

  return (
    <div className="col-12 col-sm-4 mb-3 mb-sm-0">
      
      <div 
        className="card project-card target"
        style={cardStyles}
        >
        <img src="https://images.pexels.com/photos/4693135/pexels-photo-4693135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="ProjectCardImage"/>
          <div className="card-body">
            <p
            className="card-text"
            style={pStyles}
            >{project.name}</p>
          </div>
      </div>

    </div>
  )
}

export default ProjectCard