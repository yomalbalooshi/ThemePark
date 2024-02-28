import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from '../services/auth'
const Nav = ({ token }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (token) {
      const checkToken = async () => {
        setUser(await CheckSession())
      }
      checkToken()
    }
  }, [token])

  return (
    <nav className="navbar">
      <div className="navbar-logodiv">
        <NavLink to="/">YTE LAND</NavLink>
      </div>
      <div className="navbar-othersdiv">
        <NavLink to="events">Events</NavLink>
        {user ? <NavLink to="/ticket">Buy Ticket</NavLink> : ''}
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  )
}

export default Nav
