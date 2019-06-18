class ShitHead {
  constructor() {
    this.rankCodeOrder = RANKS.map(r => r.code);
    this.specialCases = ['2', '3', '7', '8', '10']
  }

  canCardBePlayed(card, stack) {
    let stackTopCard = stack[stack.length - 1];

    return this.specialCases.indexOf(card) != -1 || this.rankCodeOrder.indexOf(card) >= this.rankCodeOrder.indexOf(stackTopCard);
  }
}
