import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from '../services/auth'
const Nav = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

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
