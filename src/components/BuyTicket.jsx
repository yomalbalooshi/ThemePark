import { CreateTicket } from '../services/tickets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const BuyTicket = ({ zones }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    zone: '',
    ticketType: '',
    numOfTickets: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateTicket({
      zone: formValues.zone,
      ticketType: formValues.ticketType,
      numOfTickets: formValues.numOfTickets
    })
    navigate('/')
  }

  return (
    <section>
      <h1>Buy Ticket</h1>
      <form onSubmit={handleSubmit}>
        <select id="zone" onChange={handleChange}>
          <option value="0" selected disabled>
            Select a Zone
          </option>
          {zones?.map((zone) => (
            <option key={zone._id} value={zone._id}>
              {zone.name}
            </option>
          ))}
        </select>
        <br />
        <select id="ticketType" onChange={handleChange}>
          <option value="0" selected disabled>
            Select Ticket Type
          </option>
          <option value="Normal">Normal</option>
          <option value="Fast Lane">Fast Lane</option>
        </select>
        <br />
        <input
          type="number"
          id="numOfTickets"
          placeholder="Number of Tickets"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Buy</button>
      </form>
    </section>
  )
}

export default BuyTicket
