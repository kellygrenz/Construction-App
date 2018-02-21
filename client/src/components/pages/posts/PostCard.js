import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '1px solid black'
  },
  img: {
    width: '20%',
    height: '20%'
  }
}

const PostCard = ({title, img, notes, zip, deletePost, _id}) => {
  return (
    <div style={style.container}>
      {title}
      <img style={style.img} src={img} />
      {notes}
      {}
      {zip}
      <div>
        <button type='button' onClick={() => deletePost(_id)}>Delete Post</button>
      </div>

    </div>
  )
}
PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired
}
export default PostCard
