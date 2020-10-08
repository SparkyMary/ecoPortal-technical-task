import { PairOfCards } from './Q2_OOP'

test('it tests PairOfCards', () => {
  const videoCard = {
    owner: 'Teacher John Smith',
    source: 'something.mp3',
  }
  const docCard = {
    owner: 'Student Lala Bonna',
    source: 'something.doc',
  }
  const newPairOfCards = new PairOfCards(videoCard, docCard)
  expect(newPairOfCards.cardWithVideo.playing).toBe(false)
  expect(newPairOfCards.cardWithDocument.displaying).toBe(false)

  newPairOfCards.showOffCards()
  expect(newPairOfCards.cardWithVideo.playing).toBe(true)
  expect(newPairOfCards.cardWithDocument.displaying).toBe(true)
})
