import Square from '../shapes/Square.js';

test('Square generates correct SVG', () => {
    const square = new Square('red');
    expect(square.getSVG()).toBe('<rect x="100" y="50" width="100" height="100" fill="red" />');
});
