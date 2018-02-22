import React from 'react'

const SingleProject = ({ project }) =>
  <div>
    <h1>this is a single project which should display all posts</h1>
  
  </div>

SingleProject.PropTypes = {
  project: PropTypes.string.isRequired
}

export default SingleProject