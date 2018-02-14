import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    background: '#fff',
    justifyContent: 'flex-start',
    padding: '20px',
    borderBottom: '1px dashed #f26522'


  },
  headerImg: {

    // marginRight: '50px'

  },
  userLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '200px',
    color: '#fff'
  }
}

const Header = ({domainData}) => {
  return (
    <nav style={style.container}>
      <img src='images/logo.png' style={style.headerImg} />

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
