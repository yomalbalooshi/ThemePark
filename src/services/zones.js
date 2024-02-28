import Client from './api'

export const getZones = async () => {
  try {
    const res = await Client.get('/zones')
    return res.data
  } catch (error) {}
}
