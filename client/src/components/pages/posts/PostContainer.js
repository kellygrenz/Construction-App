import React from 'react'
import PostList from './PostList'
import PropTypes from 'prop-types'

const style = {
  container: {
    background: '#263238',
    padding: '10%'
  }
}

const PostContainer = ({domainData}) => {
  return (
    <div style={style.container} >
      <PostList
        posts={domainData.posts}
        city={domainData.city}
        weather={domainData.weather}
        deletePost={domainData.deletePost} />
    </div>
  )
}

PostContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default PostContainer
