import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Zone from './components/Zone'
import Nav from './components/Nav'
import Events from './components/Events'
import Login from './components/Login'
import Register from './components/Register'
import AttractionDetails from './components/AttractionDetails'
import BuyTicket from './components/BuyTicket'
import { getZones } from './services/zones'

const App = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)
  const [zones, setZones] = useState([])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    if (token) {
      const checkToken = async () => {
        setUser(await CheckSession())
      }
      checkToken()
    }

    const allZones = async () => {
      let data = await getZones()
      setZones(data)
    }
    allZones()
  }, [])

  return (
    <div className="App">
      <header>{<Nav user={user} />}</header>
      <main>
        <Routes>
          {zones && <Route path="/" element={<Home themeParkData={zones} />} />}
          <Route path="events" element={<Events />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/zone/:_id" element={<Zone themeParkData={zones} />} />
          <Route path="/ticket" element={<BuyTicket zones={zones} />} />
          <Route
            path="/attractions/:attractionId"
            element={<AttractionDetails />}
          />
        </Routes>
      </main>
    </div>
  )
}
export default App
