import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

<<<<<<< Updated upstream
export class AdminContainer extends Component {
  render () {
    return (
      <div>
        
      </div>
=======
const style = {
  container: {
    background: '#263238',
    padding: '10%'
  }
}

class AdminContainer extends Component {
  render () {
    return (
      <div style={style.container}>
      <div />
>>>>>>> Stashed changes
    )
  }
}

export default withRouter(AdminContainer)
