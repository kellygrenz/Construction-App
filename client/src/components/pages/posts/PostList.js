import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'

const PostList = ({posts, deletePost}) => {
  return (
    <div>
      {
        posts.map((post, index) => {
          return <PostCard
            {...post}
            key={index}
            deletePost={deletePost}
          />
        })
      }

    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}
export default PostList
