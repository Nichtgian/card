class ShitHead {
  constructor() {
    this.rankCodeOrder = RANKS.map(r => r.code);
    this.specialCases = ['2', '3', '7', '8', '10'];
    this.alwaysPlayable = ['2', '3', '10'];
  }

  isCardPlayable(card, stack) {
    let stackTopValueCard = this.getTopValueCard(stack);

    return stackTopValueCard == null ||
      this.isCardAlwaysPlayable(card) ||
      this.isCardPlayableByValue(card, stackTopValueCard);
  }

  isCardAlwaysPlayable(card) {
    return this.alwaysPlayable.indexOf(card) != -1;
  }

  isCardPlayableByValue(card, stackTopValueCard) {
    if (card == '7') {
      return this.isCardGreaterThanEqualTo(card, stackTopValueCard);
    } else {
      return this.isCardSmallerThanEqualTo(card, stackTopValueCard);
    }
  }

  isCardGreaterThanEqualTo(card, stackTopValueCard) {
    return this.rankCodeOrder.indexOf(card) <= this.rankCodeOrder.indexOf(stackTopValueCard)
  }

  isCardSmallerThanEqualTo(card, stackTopValueCard) {
    return this.rankCodeOrder.indexOf(card) >= this.rankCodeOrder.indexOf(stackTopValueCard)
  }

  getTopValueCard(stack) {
    if (stack.length == 0) {
      return null;
    }

    let i = -1;
    let topCard = stack[stack.length + i];

    while (topCard == 3) {
      if (stack.length + i <= 0) {
        return null;
      }

      i--;
      topCard = stack[stack.length + i];
    }

    return topCard;
  }
}
