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
const AdminHeader = ({domainData}) => {
  return (
    <div style={style.bar}>
      <div>
        <NavItem to='/admin'>Admin</NavItem>
        <NavItem to='/add-posts'>+ Post</NavItem>
      </div>
      <div style={style.signAndLog}>
        {
          domainData.loggedOut
            ? <div>
              <NavItem to='/admin-sign-up'>Sign-Up</NavItem>
              <NavItem to='/admin-login'>Login</NavItem>
            </div>
            : null
        }
        {
          domainData.loggedIn
            ? <button type='button'><HeaderLink onClick={domainData.logoutAdmin}>Logout:{domainData.admin.local.adminEmail}</HeaderLink></button>
            : null
        }
      </div>
    </div>
  )
}

AdminHeader.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default AdminHeader
