import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    padding: '10px'
    
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#333',
    fontSize: '20px',
    padding: '20px',
    fontFamily: 'Oswald, sans-serif'
    
  }
}

const NavItem = ({to, children}) => {
  return (
    <div style={style.container}>
      <NavLink  style={style.link} to={to}>{children}</NavLink>
    </div>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

NavItem.defaultProps = {exact: false}
export default NavItem
