import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Theme Park</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="events">Events</NavLink>
      </div>
    </nav>
  )
}

export default Nav
