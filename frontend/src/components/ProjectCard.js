import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="col-12 col-sm-4 mb-3 mb-sm-0">
      <div className="card project-card">
        <img src="https://images.pexels.com/photos/4693135/pexels-photo-4693135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="ProjectCardImage"/>
          <div className="card-body">
            <p className="card-text">{project.name}</p>
          </div>
      </div>
    </div>
  )
}

export default ProjectCard