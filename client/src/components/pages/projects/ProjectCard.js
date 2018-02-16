import React from 'react'

const ProjectCard = ({projectName, projectDescription, developer, address}) => {
  
  return (
    <div>
      <h1>{projectName}</h1>
      <p>{projectDescription}</p>
      <h3>{developer}</h3>
      <h4>{address}</h4>
    </div>
  )
}

export default ProjectCard
