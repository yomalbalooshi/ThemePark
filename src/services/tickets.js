import Client from './api'

export const CreateTicket = async (data) => {
  try {
    const res = Client.post('/tickets', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getTickets = async (userId) => {
  try {
    const res = await Client.get(`/tickets/${userId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteTicket = async (ticketId) => {
  try {
    const res = await Client.delete(`/tickets/${ticketId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
