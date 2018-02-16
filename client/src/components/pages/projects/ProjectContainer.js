import React from 'react'
import ProjectList from './ProjectList'
import PropTypes from 'prop-types'

const ProjectContainer = ({domainData}) => {
  return (
    <div>
      <ProjectList projects={domainData.projects}/>
    </div>
  )
}

ProjectContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default ProjectContainer
