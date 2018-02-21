import React from 'react'
import ProjectList from './ProjectList'
import PropTypes from 'prop-types'

const style = {
  container: {
    background: '#263238',
    padding: '10%'
  }
}

const ProjectContainer = ({domainData}) => {
  return (
    <div style={style.container}>
      <ProjectList projects={domainData.projects}/>
    </div>
  )
}

ProjectContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default ProjectContainer
