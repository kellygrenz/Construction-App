import React from 'react'
import PostList from './PostList'
import PropTypes from 'prop-types'

const PostContainer = ({domainData}) => {
  return (
    <div>
      <PostList weather={domainData.weather} posts={domainData.posts} />
    </div>
  )
}

PostContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default PostContainer
