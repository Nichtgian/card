class Deck {
  constructor(suits, ranks) {
    this.suits = suits;
    this.ranks = ranks;
    this.cards = this.setup(ranks, suits);
  }

setup(suits, ranks) {
  let cards = [];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      cards.push(new Card(suit, rank));
    });
  });

  return cards;
  }
}
