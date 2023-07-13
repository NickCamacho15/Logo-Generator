import Triangle from '../shapes/Triangle.js';

test('Triangle generates correct SVG', () => {
    const triangle = new Triangle('green');
    expect(triangle.getSVG()).toBe('<polygon points="150,50 100,150 200,150" fill="green" />');
});
