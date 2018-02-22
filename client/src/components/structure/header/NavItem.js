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
    width: '75',
    color: '#333',
    fontSize: '20px',
    padding: '20px',
    fontFamily: 'Oswald, sans-serif'
  }
}

const NavItem = ({to, children, exact}) => {
  return (
    <div style={style.container}>
      <NavLink style={style.link} exact={exact} to={to}>{children}</NavLink>
    </div>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {exact: false}
export default NavItem
