import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const style = {
  bar: {
    border: 'solid red 1px',
    display: 'flex',
    justifyContent: 'space-between'
    // marginLeft: 0,
    // marginRight: 0
  },
  signAndLog: {
    border: 'solid black 1px',
    flex: '0',
    display: 'flex',
    textAlign: 'center'
  }
}
const DeveloperHeader = ({domainData}) => {
  return (
    <div style={style.bar}>
      <div>
        <NavItem to='/developer'>Developer</NavItem>
        <NavItem to='/add-posts'>+ Post</NavItem>
      </div>
      <div style={style.signAndLog}>
        <NavItem to='/developer-sign-up'>Sign-Up</NavItem>
        <NavItem to='/developer-login'>Login</NavItem>
      </div>
    </div>
  )
}

DeveloperHeader.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default DeveloperHeader