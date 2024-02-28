import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Zone from './components/Zone'
import Nav from './components/Nav'
import Events from './components/Events'
import Login from './components/Login'
import Register from './components/Register'
import eventsArray from './data/events'
import AttractionDetails from './components/AttractionDetails'
import themeParkData from './data/themeParkData'
import BuyTicket from './components/BuyTicket'
import { getZones } from './services/zones'

const App = () => {
  const [events, setEvents] = useState(eventsArray)
  let [zones, setZones] = useState({})

  const allZones = async () => {
    setZones(await getZones())
  }

  useEffect(() => {
    allZones()
  }, [])

  return (
    <div className="App">
      <header>{<Nav />}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home themeParkData={themeParkData} />} />
          <Route path="events" element={<Events events={events} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/zone/:mapId"
            element={<Zone themeParkData={themeParkData} />}
          />
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
