import { Selector } from 'testcafe'

export const MainContainer = Selector('div').withAttribute(
  'data-test-id',
  'ecoPortal-MainContainer'
)

export const UsersPage = Selector('main').withAttribute(
  'data-test-id',
  'ecoPortal-UsersMain'
)

export const UserNode = Selector('div').withAttribute(
  'data-test-id',
  'ecoPortal-UserNode'
)
