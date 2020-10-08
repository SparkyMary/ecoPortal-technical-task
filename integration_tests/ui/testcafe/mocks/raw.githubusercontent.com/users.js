import { USERS_DEFAULT_RESPONSE } from '../../tests/users/dataForMocks/users'
import {
  DATA_BASE_URL,
  USER_DATA_URL,
} from '../../../../../src/components/appCalls'

const ALLOW_ORIGIN_HEADER = { 'access-control-allow-origin': '*' }
const URL = `${DATA_BASE_URL}/${USER_DATA_URL}`

export const mockUserDataDefault = (mock) => {
  mock
    .onRequestTo(URL)
    .respond(USERS_DEFAULT_RESPONSE, 200, ALLOW_ORIGIN_HEADER)
}

export const mockUserDataEmpty = (mock) => {
  mock.onRequestTo(URL).respond('', 200, ALLOW_ORIGIN_HEADER)
}

export const mockUserDataError = (mock) => {
  mock.onRequestTo(URL).respond(null, 500, ALLOW_ORIGIN_HEADER)
}
