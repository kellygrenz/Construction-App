import React from 'react'
import ProjectCard from './ProjectCard'
import PropTypes from 'prop-types'

const style = {
  container: {
    
    display: 'flex',
    width: '80vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}

const ProjectList = ({projects}) => {
  return (
    <div style={style.container}>
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
