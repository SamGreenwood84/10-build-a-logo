//lib/shapes.test.js

const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  test('Generate Circle SVG', () => {
    const shape = new Circle();
    shape.setColor('green');
    shape.setText('ABC');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="40" fill="green" />');
  });
});

describe('Square', () => {
  test('Generate Square SVG', () => {
    const shape = new Square();
    shape.setColor('green');
    shape.setText('ABC');
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />');
  });
});

describe('Triangle', () => {
  test('Generate Triangle SVG', () => {
    const shape = new Triangle();
    shape.setColor('blue'); // Example provided a specific color for triangle
    shape.setText('ABC');
    expect(shape.render()).toEqual('<polygon points="150,10 250,190 50,190" fill="blue" />');
  });
});
