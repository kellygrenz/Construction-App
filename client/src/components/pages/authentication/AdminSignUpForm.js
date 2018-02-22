import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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

const AdminSignUpForm = ({id, onChangeHandler, submitAdminToServer}) => {
  return (
    <div style={style.container}>
     <div style={style.headerContainer}><h1>Sign up</h1></div>
      <div style={style.section}>
          <h3 style={style.label}>First Name:</h3>
          <input style={style.input} type='text' onChange={onChangeHandler} placeholder='First Name' id='adminFirstName' />
        </div>

        <div style={style.section}>
          <h3 style={style.label}>Last Name:</h3>
          <input style={style.input} type='text' onChange={onChangeHandler} placeholder='Last Name' id='adminLastName' />
        </div>

        <div style={style.section}>
          <h3 style={style.label}>Email:</h3>
          <input style={style.input} type='text' onChange={onChangeHandler} placeholder='Email' id='adminEmail' />
        </div>

        <div style={style.section}>
          <h3 style={style.label}>Password:</h3>
          <input style={style.input} type='text' onChange={onChangeHandler} placeholder='Password' id='adminPassword' />
        </div>
      
      
      <div style={style.section}>
        
          <p>Already signed-up? Click the LOGIN button</p>
          <button style={style.button} raised onClick={submitAdminToServer}>Register</button>
          <button style={style.button} raised><Link style={style.link} to='/admin-login' style={style.link}>Login</Link></button>
        
  
      </div>
    </div>
  )
}

AdminSignUpForm.propTypes = {
  id: PropTypes.object,
  onChangeHandler: PropTypes.func.isRequired,
  submitAdminToServer: PropTypes.func.isRequired
}
export default AdminSignUpForm
