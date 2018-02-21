import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SingleProject from './SingleProject'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'

class ProjectPage extends Component {
  state = {
    project: null
  }

  componentDidMount () {
    this.singleProjectFromServer(this.props.match.params._Id)
  }

  singleProjectFromServer = (_Id) => {
    $.ajax({
      url: `/api/projects/${_Id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, 'YOU FOUND THE PROJECT')
      this.setState({project: response.data })
    })
  }

  render () {
    return (
      <div>
        {
          this.state.project
          ? <SingleProject project={this.state.project} />
          : 'NO PROJECTS'
        }
      </div>
    )
  }
}

ProjectPage.PropTypes = {
  project: PropTypes.string.isRequired
}

export default withRouter(ProjectPage)