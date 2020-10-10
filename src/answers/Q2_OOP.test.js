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
  expect(newPairOfCards.leftCard.playing).toBe(false)
  expect(newPairOfCards.rightCard.displaying).toBe(false)

  newPairOfCards.displayCards()
  expect(newPairOfCards.leftCard.playing).toBe(true)
  expect(newPairOfCards.rightCard.displaying).toBe(true)
})
