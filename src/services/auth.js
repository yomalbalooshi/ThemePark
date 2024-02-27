import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
  } catch (error) {
    console.log(error)
  }
}
