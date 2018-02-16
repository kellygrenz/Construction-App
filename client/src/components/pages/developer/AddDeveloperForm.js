import React from 'react'
import PropTypes from 'prop-types'

const AddDeveloperForm = ({id, onChangeHandler, addDeveloper}) => {
  return (
    <div>

      <div>
        <h3>Name:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='name' id='name' />
      </div>
      <div>
        <h3>Email:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='email' id='email' />
      </div>
      <button>
        <input type='text' onChange={onChangeHandler} placeholder='email' />
      </button>
    </div>
  )
}

AddDeveloperForm.propTypes = {
  id: PropTypes.object,
  onChangeHandler: PropTypes.func.isRequired,
  addDeveloper: PropTypes.func.isRequired
}

export default AddDeveloperForm
