class Triangle {
    constructor(color) {
        this.color = color;
    }

    getSVG() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

export default Triangle;