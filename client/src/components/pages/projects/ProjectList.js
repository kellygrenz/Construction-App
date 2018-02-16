import React from 'react'
import ProjectCard from './ProjectCard'
import PropTypes from 'prop-types'

const ProjectList = ({projects}) => {
  return (
    <div>
      {/* <ProjectCard 
        projectName={projectName}
      /> */}
      {
        projects.map((project, index ) => {
          return <ProjectCard
            {...project}
            key={index} />
        })
      }
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectList
