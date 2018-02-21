import React from 'react'
import PropTypes from 'prop-types'
import DeveloperHeader from '../../structure/header/DeveloperHeader'
import PostContainer from '../posts/PostContainer'

const Developer = ({domainData}) => {
  return (
    <div>
      <DeveloperHeader domainData={domainData} />
      <div>
        {
          domainData.developerLoggedIn
            ? <PostContainer domainData={domainData} />
            : <h1>YOU MUST LOGIN TO BE IN THIS AREA</h1>
        }
      </div>
    </div>
  )
}

Developer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Developer
