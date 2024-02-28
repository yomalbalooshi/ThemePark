import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from '../services/auth'
const Nav = ({ user }) => {
  const userLinks = (
    <div className="navbar-othersdiv">
      <NavLink to="events">Events</NavLink>
      <NavLink to="/ticket">Buy Ticket</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  )

  const links = (
    <div className="navbar-othersdiv">
      <NavLink to="events">Events</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  )

  return (
    <nav className="navbar">
      <div className="navbar-logodiv">
        <NavLink to="/">YTE LAND</NavLink>
      </div>
      {user ? userLinks : links}
    </nav>
  )
}

export default Nav
