import axios from 'axios'

export const DATA_BASE_URL =
  'https://raw.githubusercontent.com/ecoPortal/dev-test/master'

export const USER_DATA_URL = 'data.txt'

// Setting config defaults
const getUserDataInstance = axios.create({
  baseURL: DATA_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json, text/plain, */*',
  },
})

export const makeUserDataCall = () => {
  return getUserDataInstance.get(`/${USER_DATA_URL}`)
}
