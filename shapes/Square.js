class Square {
    constructor(color) {
        this.color = color;
    }

    getSVG() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

export default Square;