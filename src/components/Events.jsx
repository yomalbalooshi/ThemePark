import { getEvents } from '../services/events'
import { useState, useEffect } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const allEvents = async () => {
      let data = await getEvents()
      setEvents(data)
    }
    allEvents()
  }, [])

  return (
    <div className="event-grid">
      {events?.map((event) => (
        <div className="event-card" key={event._id}>
          <img className="listing-img" src={event.image} alt={event.name} />
          <h3 className="name">{event.name}</h3>
          <p className="description">{event.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Events
