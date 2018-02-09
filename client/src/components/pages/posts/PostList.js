import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'

const PostList = ({posts, weather}) => {
  return (
    <div>
      {

        posts.map((post, index) => {
          return <PostCard
            weather={weather}
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
