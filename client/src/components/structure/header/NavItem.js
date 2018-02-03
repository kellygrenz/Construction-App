import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const NavItem = ({to}) => {
  return (
    <div>
      <NavLink to={to}>som text</NavLink>
    </div>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired
}

NavItem.defaultProps = {exact: false}
export default NavItem
