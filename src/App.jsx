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
  const [zones, setZones] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    setToken(localStorage.getItem('token'))

    const allZones = async () => {
      let data = await getZones()
      setZones(data)
    }
    allZones()
  }, [])

  return (
    <div className="App">
      <header>{<Nav token={token} />}</header>
      <main>
        <Routes>
          {zones && <Route path="/" element={<Home themeParkData={zones} />} />}
          <Route path="events" element={<Events />} />
          <Route path="/login" element={<Login />} />
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
