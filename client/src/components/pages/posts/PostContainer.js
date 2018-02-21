import React from 'react'
import PostList from './PostList'
import PropTypes from 'prop-types'

const PostContainer = ({domainData}) => {
  // console.log('from PostContaner.js', domainData.city)
  return (
    <div>
      <PostList
        posts={domainData.posts}
        city={domainData.city}
        weather={domainData.weather} />
    </div>
  )
}

PostContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default PostContainer
