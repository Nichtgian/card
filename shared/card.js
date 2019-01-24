class card {
    constructor(category, cardType) {
        this.category = category;
        this.cardType = cardType;
    }

    static initCards() {
        let cards = [];
        for (let i = 0; i < CATEGORIES.length; i++) {
            cards[i] = [];
            for (let n = 0; n < CARDTYPES.length; n++) {
                cards[i][n] = new card(CATEGORIES[i], CARDTYPES[n])
            }
        }
        return cards;
    }
}

const CARDS = card.initCards();
