const SUITS = [
  new Suit('C', 'club', '♣'),
  new Suit('D', 'diamond', '♦'),
  new Suit('H', 'heart', '♥'),
  new Suit('S', 'spade', '♠')
];

const RANKS = [
  new Rank('2', 'two'),
  new Rank('3', 'three'),
  new Rank('4', 'four'),
  new Rank('5', 'five'),
  new Rank('6', 'six'),
  new Rank('7', 'seven'),
  new Rank('8', 'eight'),
  new Rank('9', 'nine'),
  new Rank('10', 'ten'),
  new Rank('J', 'jack'),
  new Rank('Q', 'queen'),
  new Rank('K', 'king'),
  new Rank('A', 'ace')
];

const DECK = new Deck(SUITS, RANKS);
