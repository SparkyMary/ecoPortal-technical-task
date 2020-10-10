// Examples of inheritance and composition

class Card {
  constructor({ owner, source }) {
    this.owner = owner
    this.source = source
  }
  displayOwner() {
    console.log('Owner is: ', this.owner)
  }
  display() {
    console.log('I am doing nothing')
  }
}

// examples of inheritance
class CardWithVideo extends Card {
  constructor(card) {
    super(card)
    this.playing = false
  }
  display() {
    this.displayOwner()
    this.playVideo()
  }
  playVideo() {
    this.playing = true
    console.log('I am playing video')
  }
}

class CardWithDocument extends Card {
  constructor(card) {
    super(card)
    this.displaying = false
  }
  display() {
    this.displayOwner()
    this.displayDocument()
  }
  displayDocument() {
    this.displaying = true
    console.log('I am displaying document')
  }
}

// Example of composition
export class PairOfCards {
  constructor(videoCard, docCard) {
    this.leftCard = new CardWithVideo(videoCard)
    this.rightCard = new CardWithDocument(docCard)
  }
  displayCards() {
    this.leftCard.display()
    this.rightCard.display()
  }
}
