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

const ProjectList = ({projects, removePostFromProject, projectCheck}) => {
  return (
    <div style={style.container}>
      {
        projectCheck
          ? projects.map(project => {
            return <ProjectCard
              project={project}
              removePostFromProject={removePostFromProject} />
          })
          : 'Project is empty'
      }
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  removePostFromProject: PropTypes.func.isRequired,
  projectCheck: PropTypes.bool.isRequired
}

export default ProjectList
