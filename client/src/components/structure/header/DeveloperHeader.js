import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import HeaderLink from './HeaderLink'

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
        {
          domainData.developerLoggedIn
            ? <div>
              <NavItem to='/developer'>Developer</NavItem>
              <NavItem to='/add-posts'>+ Post</NavItem>
              <NavItem to='/projects'>Projects</NavItem>
            </div>
            : null
        }
      </div>
      <div style={style.signAndLog}>
        {
          domainData.developerLoggedOut
            ? <div>
              <NavItem to='/developer-sign-up'>Sign-Up</NavItem>
              <NavItem to='/developer-login'>Login</NavItem>
            </div>
            : null
        }
        {
          domainData.developerLoggedIn
            ? <button type='button'><HeaderLink onClick={domainData.logoutDeveloper}>Logout:{domainData.developer.local.developerEmail}</HeaderLink></button>
            : null
        }
      </div>
    </div>
  )
}

DeveloperHeader.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default DeveloperHeader
