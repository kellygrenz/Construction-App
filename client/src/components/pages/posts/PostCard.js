import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
<<<<<<< Updated upstream
    border: '1px solid black'
=======
    display: 'flex',
    width: '25%',
    marginRight: '10px',
    marginBottom: '50px',
    boxShadow: 'none',
    marginTop: '40px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    border: '10px solid white',
    background: '#ebebeb',
    padding: '15px'

  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Oswald, sans-serif',
    color: '#1fa8a8'
  },
  img: {
    display: 'flex',
    maxWidth: '200px'
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    background: '#f27935',
    color: '#fff',
    padding: '10px 35px'
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'Oswald, sans-serif'
>>>>>>> Stashed changes
  }
}

const PostCard = ({title, img, notes, zip}) => {

  return (
    <div style={style.container}>
<<<<<<< Updated upstream
      {title}
      <img src={img} />
      {notes}
      {/* {current_observation.icon} */}
      {zip}

=======
      <div style={style.cardContent}>
        <h1 style={style.name}> {title}</h1>
        <img style={style.img} src={img} />
        <p> Notes: {notes}</p>
        {city}
        {weather}
        {zip}
      </div>
      <div>
        <button style={style.button} type='button' onClick={() => deletePost(_id)}>Delete Post</button>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}
PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
}
export default PostCard
