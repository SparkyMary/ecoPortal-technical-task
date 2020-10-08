import { RequestMock, RequestLogger } from 'testcafe'
import _ from 'lodash'
import { BASE_URL } from '../../consts'
import {
  DATA_BASE_URL,
  USER_DATA_URL,
} from '../../../../../src/components/appCalls'

import {
  mockUserDataDefault,
  mockUserDataEmpty,
  mockUserDataError,
} from '../../mocks/raw.githubusercontent.com/users'
import {
  UsersPage,
  MainContainer,
  UserNode,
} from '../../tests/users/selectors/usersPage'

const url = `${DATA_BASE_URL}/${USER_DATA_URL}`

const dataGetterLogger = RequestLogger(
  { url, method: 'get' },
  {
    logResponseHeaders: true,
    logResponseBody: true,
  }
)

fixture('Users - Default')
  .page(BASE_URL)
  .requestHooks(
    (() => {
      const mock = RequestMock()
      mockUserDataDefault(mock)
      return mock
    })()
  )

test('Main Container is rendered and has H1 ', async (t) => {
  await t
    .expect(MainContainer.exists)
    .ok('Main contanier must be shown')
    .expect(MainContainer.find('h1').exists)
    .ok('H1 must be shown')
    .expect(UsersPage.exists)
    .ok('Users Page must be shown')
})

test('All tree nodes are rendered', async (t) => {
  await t.expect(UserNode.count).eql(14, 'Every person must be shown')
})

fixture('Users - Empty data')
  .page(BASE_URL)
  .requestHooks(
    (() => {
      const mock = RequestMock()
      mockUserDataEmpty(mock)
      return mock
    })(),
    (() => dataGetterLogger)()
  )

test('Main Container is rendered and has H1, there is appropriate message ', async (t) => {
  const TryAgainButton = UsersPage.find('button').withText('Try again')
  await t
    .expect(MainContainer.exists)
    .ok('Main contanier must be shown')
    .expect(MainContainer.find('h1').exists)
    .ok('H1 must be shown')
    .expect(UsersPage.exists)
    .ok('Users Page must be shown')
    .expect(UsersPage.find('div').withText('no data available').exists)
    .ok('There must be no data available message shown')
})

fixture('Users - Error')
  .page(BASE_URL)
  .requestHooks(
    (() => {
      const mock = RequestMock()
      mockUserDataError(mock)
      return mock
    })(),
    (() => dataGetterLogger)()
  )

test('Main Container is rendered and has H1, there is appropriate message ', async (t) => {
  const TryAgainButton = UsersPage.find('button').withText('Try again')
  await t
    .expect(MainContainer.exists)
    .ok('Main contanier must be shown')
    .expect(MainContainer.find('h1').exists)
    .ok('H1 must be shown')
    .expect(UsersPage.exists)
    .ok('Users Page must be shown')
    .expect(UsersPage.find('div').withText('an error has occurred').exists)
    .ok('There must be an error has occurred message shown')
    .expect(TryAgainButton.exists)
    .ok('There must be button to try again')
    .click(TryAgainButton)
    .expect(dataGetterLogger.count(() => true))
    .eql(2, 'Call must be made on click')
})
