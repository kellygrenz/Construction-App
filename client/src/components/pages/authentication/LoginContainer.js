import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
// import AdminLoginForm from './AdminLoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
    // adminEmail: undefined,
    // adminPassword: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }

  handleChange = (e) => this.setState({[e.target.id]: e.target.value})

  onSubmit = (e) => { // going to be changed to submitDeveloper later
    e.preventDefault()
    console.log('loginUser message')
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  // loginAdmin = (e) => {
  //   e.preventDefault()
  //   this.props.domainData.loginAdmin(this.state.adminEmail, this.state.adminPassword)
  //     .then(() => this.props.history.push('/admin'))
  //     .catch(err => alert(err, Object.key(err)))
  // }

  render () {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm
          {...this.state}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit} />
        {/* there might need to be two buttons that say Developer and Admin here */}
        {/* <AdminLoginForm
          {...this.state}
          handleChange={this.handleChange}
          loginAdmin={this.loginAdmin} /> */}
      </div>
    )
  }
}

export default withRouter(LoginContainer)
