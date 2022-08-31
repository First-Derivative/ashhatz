import React from 'react'
import ProjectCard from './ProjectCard'

function PortfolioContent({projects, tags, links}) {

  return (
    <div className="col-12 text-start px-0 px-sm-3">
      <div className="h5 mx-auto ms-4">
        Commercial Applications
      </div>

      <div className="row row-cols-3 mx-auto ms-2 mt-4">
          {projects.filter( project => project.id < 5 ).map((project, index) => (
            <ProjectCard 
            key={index}
            project={project}
            tags={tags}
            links={links}
            />
          ))}
      </div>
    </div>
  )
}

export default PortfolioContent