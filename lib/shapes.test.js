// lib/shapes.test.js
const { generateCircleSVG, generateSquareSVG, generateTriangleSVG } = require('./shapes');

test('Generate Circle SVG', () => {
  const choices = { text: 'ABC', textColor: 'black', backgroundColor: 'green' };
  const svg = generateCircleSVG(choices);
  expect(svg).toMatchInlineSnapshot(`
"<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="40" stroke="black" stroke-width="3" fill="green" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="black">ABC</text>
</svg>"
`);
});

test('Generate Square SVG', () => {
  const choices = { text: 'ABC', textColor: 'black', backgroundColor: 'green' };
  const svg = generateSquareSVG(choices);
  expect(svg).toMatchInlineSnapshot(`
"<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="200px" height="200px" stroke="black" stroke-width="3" fill="green" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="black">ABC</text>
  </svg>"
`);
});

test('Generate Triangle SVG', () => {
  const choices = { text: 'ABC', textColor: 'black', backgroundColor: '' };
  const svg = generateTriangleSVG(choices);
  expect(svg).toMatchInlineSnapshot(`
"<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,10 250,190 50,190" stroke="black" stroke-width="3" fill="" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="black">ABC</text>
</svg>"
`);
});
