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
  // console.log('aslkdfalskdjglakjgoaaogjaoigjaogijdogijadfgdfg', domainData.developer.projectPage)
  return (
    <div style={style.container}>
      {
        domainData.projectCheck
          ? <ProjectList
            projects={domainData.developer.projectPage} // should be using somthing like projectPage
            removePostFromProject={domainData.removePostFromProject}
            projectCheck={domainData.projectCheck} />
          : 'You are not logged in.'
      }
    </div>
  )
}

ProjectContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default ProjectContainer
