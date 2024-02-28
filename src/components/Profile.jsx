import { useEffect, useState } from 'react'
import { getTickets, deleteTicket } from '../services/tickets'

const Profiles = ({ user }) => {
  const [tickets, setTickets] = useState([])
  const [deletedTicket, setDeletedTicket] = useState(false)

  useEffect(() => {
    const allTickets = async () => {
      const tickets = await getTickets(user.id)
      setTickets(tickets)
      setDeletedTicket(false)
    }
    allTickets()
  }, [deletedTicket])

  const handleDeleteTicket = async (e, ticketId) => {
    const res = await deleteTicket(ticketId)
    setDeletedTicket(true)
  }

  return (
    <div className="container1">
      <div className="profile-card" key={user.id}>
        <img
          className="profile-img"
          src="public/images/profile.webp"
          alt="user"
        />
        <h2 className="name">{user.name}</h2>
        <h2 className="email">{user.email}</h2>

        <h2>Tickets</h2>
        <div className="container44">
          {tickets.map((ticket) => (
            <div key={ticket._id} className="container2">
              <h2 className="ticket">
                Zone Name:
                {ticket.zone.name}
              </h2>
              <h2 className="ticket">
                Number of Ticket:
                {ticket.numOfTickets}
              </h2>
              <h2 className="ticket">
                Ticket Type:
                {ticket.ticketType}
              </h2>
              <button onClick={(e) => handleDeleteTicket(e, ticket._id)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profiles
