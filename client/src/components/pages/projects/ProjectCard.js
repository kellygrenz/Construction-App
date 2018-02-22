import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    width: '25%',
    marginRight: '10px',
    marginBottom: '50px',
    boxShadow: 'none',
    marginTop: '40px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    border: '10px solid white',
    background: '#ebebeb',
    padding: '15px'

  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Oswald, sans-serif',
    color: '#1fa8a8'
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    display: 'flex',

    marginTop: '50px',
    background: '#f27935',
    color: '#fff',
    padding: '10px 35px'
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'Oswald, sans-serif'
  }
}

const ProjectCard = ({project, removePostFromProject}) => {
  return (
    <div style={style.container}>
      <div style={style.cardContent}>
        <h1 style={style.name}>{project.projectName}</h1>
        <p>{project.projectDescription}</p>
        <h3>Developer: {project.developer}</h3>
        <h4>Address: {project.address}</h4>
      </div>
      <div>POSTS stuff:
        <br />Title: {project.title}<br />Zip: {project.zip}<br />Notes: {project.notes}
      </div>
      <div style={style.actions}>
        <button style={style.button}><Link style={style.link} to={`/project/${project._id}`}>View Project</Link></button>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.array.isRequired,
  removePostFromProject: PropTypes.func.isRequired
}
export default ProjectCard
