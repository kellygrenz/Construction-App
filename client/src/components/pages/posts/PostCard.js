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

const PostCard = ({title, img, notes, zip, city, weather}) => {
  // console.log('from PostCard.js', city)
  return (
    <div style={style.container}>
      {title}
      <img style={style.img} src={img} />
      {notes}
      {city}
      {weather}
      {zip}

    </div>
  )
}
PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  city: PropTypes.object,
  weather: PropTypes.object
}
export default PostCard
