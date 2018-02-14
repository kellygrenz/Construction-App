import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  container: {
    border: '1px solid black'
  },
  card: {
    width: '50vw'
  },
  butlin: {
    padding: 0
  },
  link: {
    color: 'black',
    width: 88,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '99%',
    height: 25,
    borderRadius: 5
  }
}
const AdminSignUpForm = ({id, onChangeHandler, submitAdminToServer}) => {
  return (
    <form style={style.container}>
      <div style={style.card}>
        <card raised='true'>
          <h3>
            First Name:
          </h3>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='First Name' id='adminFirstName' />
        </card>

        <card raised='true'>
          <h3>
            Last Name:
          </h3>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='Last Name' id='adminLastName' />
        </card>

        <card raised='true'>
          <h3>
            Email:
          </h3>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='Email' id='adminEmail' />
        </card>

        <card>
          <h3>
            Password:
          </h3>
          <input style={style.inputField} type='text' onChange={onChangeHandler} placeholder='Password' id='adminPassword' />
        </card>
      </div>
      <br />
      <div style={style.button}>
        <div>
          <small>Already signed-up? Click the LOGIN button</small>
        </div>
        <div>
          <button raised onClick={submitAdminToServer}>Register</button>
          <button style={style.butlin} raised><Link to='/admin-login' style={style.link}>Login</Link></button>
        </div>
      </div>
    </form>
  )
}

AdminSignUpForm.propTypes = {
  id: PropTypes.object,
  onChangeHandler: PropTypes.func.isRequired,
  submitAdminToServer: PropTypes.func.isRequired
}
export default AdminSignUpForm
