import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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
const App = () => {
  const [events, setEvents] = useState(eventsArray)

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
