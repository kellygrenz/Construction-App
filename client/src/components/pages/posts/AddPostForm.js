import React from 'react'
import PropTypes from 'prop-types'

const AddPostForm = ({title, notes, img, onChangeHandler, submitPostToServer}) => {
  return (
    <div>
      <div>
        <h3>Title:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='title' id={'title'} />
      </div>
      <div>
        <h3>Notes:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='Write something' id={'notes'} />
      </div>
      <div>
        <h3>Img:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='image URL' id={'img'} />
      </div>
      <button type='button' onClick={submitPostToServer}>Submit Post</button>
    </div>
  )
}

AddPostForm.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired
}
export default AddPostForm
