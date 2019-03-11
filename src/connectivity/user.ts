import axios from 'axios'
import { AuthParams } from '../common/types'
import { API_URI } from '../common/constants'

export async function signinUser(props: AuthParams) {
  const { username, password } = props
  try {
    const { data }: any = await axios.post(`${API_URI}/users`, {
      username,
      password
    })
    if (data.error) {
      throw new Error(data.message)
    }
    return data.user
  } catch (e) {
    throw new Error(e.message)
  }
}
