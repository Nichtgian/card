class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.imageName = rank.code + suit.code + '.png';
  }
}
