class Circle {
    constructor(color) {
        this.color = color;
    }

    getSVG() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

export default Circle;
