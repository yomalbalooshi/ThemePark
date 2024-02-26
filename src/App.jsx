import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Events from './components/Events'
const App = () => {
  return (
    <div className="App">
      <header>{<Nav />}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
