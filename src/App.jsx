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
const App = () => {
  const themeParkData = [
    {
      mapId: 11,
      mapName: 'Water Zone',
      attractions: [
        { id: 'attraction1', x: 100, y: 150, color: 'blue' },
        { id: 'attraction2', x: 300, y: 250, color: 'green' }
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      mapId: 22,
      mapName: 'Kids Zone',
      attractions: [
        { id: 'attraction1', x: 200, y: 180, color: 'red' },
        { id: 'attraction2', x: 400, y: 280, color: 'orange' }
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      mapId: 33,
      mapName: 'Castle Zone',
      attractions: [
        { id: 'attraction1', x: 200, y: 180, color: 'red' },
        { id: 'attraction2', x: 400, y: 280, color: 'orange' }
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      mapId: 44,
      mapName: 'Beach Zone',
      attractions: [
        { id: 'attraction1', x: 200, y: 180, color: 'red' },
        { id: 'attraction2', x: 400, y: 280, color: 'orange' }
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    }
  ]
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
        </Routes>
      </main>
    </div>
  )
}
export default App
