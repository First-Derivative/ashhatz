import React from 'react'
import ProjectCard from './ProjectCard'

function PortfolioContent({projects}) {

  return (
    <>
    <div className="h5 mx-auto ms-4">
      Commercial Applications
    </div>

    <div class="mx-auto ms-4 mt-3">
      {projects.map((project, index) => (
        <ProjectCard 
        key={index}
        project={project}
        />
      ))}
    </div>
    </>
  )
}

export default PortfolioContent