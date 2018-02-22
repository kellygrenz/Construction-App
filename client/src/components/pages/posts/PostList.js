import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'

<<<<<<< Updated upstream
const PostList = ({posts, weather}) => {
=======
const style = {
  container: {

    display: 'flex',
    width: '80vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}

const PostList = ({posts, city, weather, deletePost}) => {
>>>>>>> Stashed changes
  return (
    <div style={style.container}>
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
