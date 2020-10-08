// Examples of inheritance and composition

class Card {
  constructor({ owner, source }) {
    this.owner = owner
    this.source = source
  }
  displayOwner() {
    console.log('Owner is: ', this.owner)
  }
}

// examples of inheritance
class CardWithVideo extends Card {
  constructor(card) {
    super(card)
    this.playing = false
  }
  playVideo() {
    this.displayOwner()
    this.playing = true
    console.log('I am playing video')
  }
}

class CardWithDocument extends Card {
  constructor(card) {
    super(card)
    this.displaying = false
  }
  displayDocument() {
    this.displayOwner()
    this.displaying = true
    console.log('I am displaying document')
  }
}

// Example of composition
export class PairOfCards {
  constructor(videoCard, docCard) {
    this.cardWithVideo = new CardWithVideo(videoCard)
    this.cardWithDocument = new CardWithDocument(docCard)
  }
  showOffCards() {
    this.cardWithVideo.playVideo()
    this.cardWithDocument.displayDocument()
  }
}
