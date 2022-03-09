import {NavLink} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/tracker">Tracker</NavLink>
    </div>
  )
}

export default Navbar
