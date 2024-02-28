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
import BuyTicket from './components/BuyTicket'
import { getZones } from './services/zones'

const App = () => {
  const [events, setEvents] = useState(eventsArray)
  const [zones, setZones] = useState([])

  useEffect(() => {
    const allZones = async () => {
      let data = await getZones()
      setZones(data)
    }
    allZones()
  }, [])
  console.log('zones')

  console.log(zones)
  console.log('zones')

  return (
    <div className="App">
      <header>{<Nav />}</header>
      <main>
        <Routes>
          {zones && <Route path="/" element={<Home themeParkData={zones} />} />}
          <Route path="events" element={<Events events={events} />} />
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
