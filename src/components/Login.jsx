import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" id="email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </form>
    </section>
  )
}

export default Login
