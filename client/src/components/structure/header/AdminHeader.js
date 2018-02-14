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
const AdminHeader = ({domainData}) => {
  return (
    <div style={style.bar}>
      <div>
        <NavItem to='/admin'>Home</NavItem>
      </div>
      <div style={style.signAndLog}>
        <NavItem to='/admin-sign-up'>Sign-Up</NavItem>
        <NavItem to='/admin-login'>Login</NavItem>
      </div>
    </div>
  )
}

AdminHeader.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default AdminHeader
