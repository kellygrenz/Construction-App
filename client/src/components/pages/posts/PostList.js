import React from 'react'
import PostCard from './PostCard'
import PropTypes from 'prop-types'


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

  return (
    <div style={style.container}>
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
  deletePost: PropTypes.func.isRequired,
  weather: PropTypes.object
}
export default PostList
