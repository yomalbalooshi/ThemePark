import Client from './api'

export const getEvents = async () => {
  try {
    const res = await Client.get('/events')
    return res.data
  } catch (error) {}
}
