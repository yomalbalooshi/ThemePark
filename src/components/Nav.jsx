import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logodiv">
        <NavLink to="/">YTE LAND</NavLink>
      </div>
      <div className="navbar-othersdiv">
        <NavLink to="events">Events</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  )
}

export default Nav
