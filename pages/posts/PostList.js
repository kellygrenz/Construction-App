import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'

const PostList = ({posts}) => {
  return (
    <div>
      {

        posts.map((post, index) => {
          return <PostCard
            {...post}
            key={index} />
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}
export default PostList
