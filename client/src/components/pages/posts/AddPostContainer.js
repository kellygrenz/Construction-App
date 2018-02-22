import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import AddPostForm from './AddPostForm'

const style = {
  container: {
    background: '#263238',
    padding: '10%'
  }
}

class AddPostContainer extends Component {
  state = {
    title: undefined,
    notes: undefined,
    img: undefined,
    zip: undefined
  }

  static propTypes = {
    domainData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  submitPostToServer = (e) => {
    e.preventDefault()
    const {title, notes, img, zip} = this.state
    const weatherPost = this.props.domainData.getWeather(zip)
    const newPost = {title, notes, img, zip, weatherPost}
    // console.log('This is the weather we are looking for', weather)
    // console.log(zip, 'OVER')
    console.log(newPost, 'HERE')
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      console.log(response, 'submitPostToServer()')
      this.props.domainData.getAllPosts()
      this.props.history.push('/posts') // propbably needs a ? : when logged in
    })
  }
  render () {
    return (
      <div style={style.container}>
        <AddPostForm
          {...this.state}
          submitPostToServer={this.submitPostToServer}
          onChangeHandler={this.onChangeHandler} />
      </div>
    )
  }
}

export default withRouter(AddPostContainer)
