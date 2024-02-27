import { useState } from 'react'
import { RegisterUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })

    setFormValues(initialState)

    navigate('/')
  }

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          onChange={handleChange}
          value={formValues.name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={formValues.email}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formValues.password}
          required
        />
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formValues.confirmPassword}
          required
        />
        <button
          type="submit"
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Register
        </button>
      </form>
    </section>
  )
}

export default Register
