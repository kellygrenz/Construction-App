import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import AddDeveloperForm from './AddDeveloperForm'

class AddDeveloperContainer extends Component {
  state = {
    name: undefined,
    email: undefined
  }
  static propTypes = {
    domainData: PropTypes.object.isRequired
    // history: PropTypes.object.isRequired
  }

  // methodName = {
  //   addAdmin: (e) => {
  //     e.preventDefault()
  //     const {name, email} = this.state
  //     const developer = {name, email}
  //     console.log('onSubmit()', developer)
  //     $.ajax({
  //       url: '/api/admins',
  //       method: 'POST',
  //       data: developer
  //     }).done((response) => {
  //       this.props.domiainData.addAdmin()
  //       this.props.history.push('/developer')
  //     })
  //   }
  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  addDeveloper = (e) => {
    e.preventDefault()
    const {name, email} = this.state
    const developer = {name, email}
    console.log('onSubmit()', developer)
    $.ajax({
      url: '/api/developers',
      method: 'POST',
      data: developer
    }).done((response) => {
      this.props.domainData.addDeveloper()
      // this.props.history.push('/developer')
    })
  }

  render () {
    // const domainDataAdd = {
    //   ...this.props.domainData,
    //   ...this.state,
    //   ...this.methodName
    // }
    return (
      <div>
        {/* <AddDeveloperForm domainDataAdd={domainDataAdd} /> */}
        <AddDeveloperForm
          {...this.state}
          addDeveloper={this.addDeveloper}
          onChangeHandler={this.onChangeHandler} />
      </div>
    )
  }
}

export default withRouter(AddDeveloperContainer)
