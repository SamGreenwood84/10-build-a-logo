// lib/shapes.test.js
const { generateCircleSVG, generateSquareSVG, generateTriangleSVG } = require('./shapes');

test('Generate Circle SVG', () => {
  const answers = { backgroundColor: 'blue' };
  const svg = generateCircleSVG(answers);
  // Add your expectations for the generated SVG content
  expect(svg).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />');
});

test('Generate Square SVG', () => {
  // Similar tests for square generation
});

test('Generate Triangle SVG', () => {
  // Similar tests for triangle generation
});
