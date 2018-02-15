import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DeveloperSignUpForm from './DeveloperSignUpForm'
import PropTypes from 'prop-types'

class DeveloperSignUpContainer extends Component {
  state = {
    developerFirstName: undefined,
    developerLastName: undefined,
    developerEmail: undefined,
    developerPassword: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }
  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  submitDeveloperToServer = (e) => {
    e.preventDefault()
    this.props.domainData.newDeveloper(this.state)
      .then(() => this.props.history.push('/developer-login'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <h2>Sign up</h2>
        <DeveloperSignUpForm
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          submitDeveloperToServer={this.submitDeveloperToServer} />
      </div>
    )
  }
}

export default withRouter(DeveloperSignUpContainer)
