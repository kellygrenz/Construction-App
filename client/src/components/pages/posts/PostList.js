import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'

const PostList = ({posts, city, weather, deletePost}}) => {

  return (
    <div>
      {
        posts.map((post, index) => {
          return <PostCard
            {...post}
            city={city}
            weather={weather}
            key={index}
            deletePost={deletePost} />
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  city: PropTypes.object,
  weather: PropTypes.object
}
export default PostList
