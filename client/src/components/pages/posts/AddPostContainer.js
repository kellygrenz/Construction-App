import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import AddPostForm from './AddPostForm'

class AddPostContainer extends Component {
  state = {
    title: undefined,
    notes: undefined,
    img: undefined
  }

  static propTypes = {
    domainData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  submitPostToServer = (e) => {
    e.preventDefault()
    const {title, notes, img} = this.state
    const newPost = {title, notes, img}
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      console.log(response, 'submitPostToServer()')
      this.props.domainData.getAllPosts()
      this.props.history.push('/add-posts')
    })
  }
  render () {
    return (
      <div>
        <AddPostForm
          {...this.state}
          submitPostToServer={this.submitPostToServer}
          onChangeHandler={this.onChangeHandler} />
      </div>
    )
  }
}

export default withRouter(AddPostContainer)
