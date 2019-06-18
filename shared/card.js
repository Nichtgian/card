class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.imageName = rank.code + suit.code + '.png';
  }
}
