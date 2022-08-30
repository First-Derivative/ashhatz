import React from 'react'
import ProjectCard from './ProjectCard'

function PortfolioContent({projects, tags}) {

  return (
    <>
    <div className="h5 mx-auto ms-4">
      Commercial Applications
    </div>

    <div className="row row-cols-3 mx-auto ms-2 mt-4">
        {projects.map((project, index) => (
          <ProjectCard 
          key={index}
          project={project}
          tags={tags}
          />
        ))}
    </div>
    </>
  )
}

export default PortfolioContent