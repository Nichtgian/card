class category {
    constructor(title, emoji, imgStartY, imgEndY) {
        this.title = title;
        this.emoji = emoji;
        this.imgStartY = imgStartY;
        this.imgEndY = imgEndY;
    }
}

const CATEGORIES = [
    new category('clover', '☘', 5, 141),
    new category('pike', '🛡', 142, 278),
    new category('heart', '❤', 279, 415),
    new category('tile', '⬛', 416, 553)
];