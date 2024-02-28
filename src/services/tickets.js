import Client from './api'

export const CreateTicket = async (data) => {
  try {
    const res = Client.post('/tickets', data)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
