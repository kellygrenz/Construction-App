import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const Header = ({domainData}) => {
  return (
    <nav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/admin'>Admin</NavItem>
      <NavItem to='/admin-sign-up'>Sign-up</NavItem>
      <NavItem to='/developer'>Developer</NavItem>
      <NavItem to='/add-posts'>Add Post</NavItem>
      <NavItem to='/posts'>Posts</NavItem>
    </nav>
  )
}

Header.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Header
