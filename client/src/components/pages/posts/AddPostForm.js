import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    width: '500px',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#263238',
    marginTop: '50px',
    marginLeft: '30%'
  },
  headerContainer: {
    background: '#f58831',
    width: '92%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px'
  },
  section: {
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#607D8B',
    marginBottom: '10px',
    width: '80%',
    marginTop: '10px'
  },
  label: {
    fontSize: '20px',
    // fontFamily: 'Oswald, sans-serif',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center'
  },
  input: {
    padding: '10px',
    fontSize: '17px',
    fontFamily: 'Oswald, sans-serif',
    color: '#333',
    width: '95%'
  },
  button: {
    // marginRight: '20px',
    color: '#fff',
    fontSize: '20px',
    background: '#f58831',
    marginBottom: '20px',
    padding: '15px',
    marginTop: '20px',

    border: 'none'

  },
  link: {
    textDecoration: 'none'
  },
  h1: {
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const AddPostForm = ({title, notes, img, onChangeHandler, submitPostToServer, zip}) => {
  return (

    <div style={style.container}>
      <div style={style.headerContainer}><h1 style={style.h1}>Add a New Post</h1></div>
      <div style={style.section}>
        <h3 style={style.label}>Status Update:</h3>
        <input style={style.input} type='text' onChange={onChangeHandler} placeholder='title' id={'title'} />
      </div>
      <div style={style.section}>
        <h3 style={style.label}>Notes:</h3>
        <input style={style.input} type='text' onChange={onChangeHandler} placeholder='Write something' id={'notes'} />
      </div>
      <div style={style.section}>
        <h3 style={style.label}>Img:</h3>
        <input style={style.input} type='text' onChange={onChangeHandler} placeholder='image URL' id={'img'} />
      </div>
      <div style={style.section}>
        <h3 style={style.label}>Zip:</h3>
        <input style={style.input} type='text' onChange={onChangeHandler} placeholder='Enter Zip' id={'zip'} />
      </div>
      <button style={style.button} type='button' onClick={submitPostToServer}>Submit Post</button>
    </div>
  )
}

AddPostForm.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired,
  zip: PropTypes.number.isRequired
}
export default AddPostForm
