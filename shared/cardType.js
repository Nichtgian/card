class cardType {
    constructor(type, imgStartX, imgEndX) {
        this.type = type;
        this.imgStartX = imgStartX;
        this.imgEndX = imgEndX;
    }
}

const CARDTYPES = [
    new cardType('A', 4, 104),
    new cardType('2', 105, 205),
    new cardType('3', 205, 306),
    new cardType('4', 306, 407),
    new cardType('5', 408, 508),
    new cardType('6', 509, 609),
    new cardType('7', 609, 710),
    new cardType('8', 710, 811),
    new cardType('9', 811, 912),
    new cardType('10', 913, 1013),
    new cardType('J', 1015, 1116),
    new cardType('Q', 1116, 1217),
    new cardType('K', 1218, 1319)
];