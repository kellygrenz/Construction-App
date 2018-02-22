import React from 'react'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    background: '#fff',
    justifyContent: 'flex-start',
    padding: '10px',
    borderBottom: '1px dashed #f26522'

  },
  headerImg: {
    width: '200px',
    height: '83px',
    marginRight: '250px'

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
    <div style={style.container}>
      <div >
        <NavItem to='/'><img style={style.headerImg} src='images/logo.png' /></NavItem>
      </div>
      <div>
        <NavItem to='/admin'>Admin</NavItem>
        {/* <NavItem to='/admin-sign-up'>Sign-up</NavItem> */}
        <NavItem to='/developer'>Developer</NavItem>
        {/* <NavItem to='/add-posts'>Add Post</NavItem>
        <NavItem to='/posts'>Posts</NavItem> */}
      </div>
    </div>
  )
}

Header.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Header
