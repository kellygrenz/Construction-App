import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import DeveloperLoginForm from './DeveloperLoginForm'

class DeveloperLoginContainer extends Component {
  state = {
    developerEmail: undefined,
    developerPassword: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }

  handleChange = (e) => this.setState({[e.target.id]: e.target.value})

  loginDeveloper = (e) => {
    e.preventDefault()
    // console.log('loginDeveloper message')
    this.props.domainData.loginDeveloper(this.state.developerEmail, this.state.developerPassword)
      .then(() => this.props.history.push('/developer'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <h2>Login</h2>
        <DeveloperLoginForm
          {...this.state}
          handleChange={this.handleChange}
          loginDeveloper={this.loginDeveloper} />
      </div>
    )
  }
}

export default withRouter(DeveloperLoginContainer)
