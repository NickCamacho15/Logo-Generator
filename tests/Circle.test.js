import Circle from '../shapes/Circle.js';

test('Circle generates correct SVG', () => {
    const circle = new Circle('blue');
    expect(circle.getSVG()).toBe('<circle cx="150" cy="100" r="50" fill="blue" />');
});
