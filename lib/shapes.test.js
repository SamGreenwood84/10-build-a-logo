const { generateCircleSVG, generateSquareSVG, generateTriangleSVG } = require('./shapes');

test('Generate Circle SVG', () => {
  const choices = { backgroundColor: '', textColor: "" };
  const svg = generateCircleSVG(choices);
  // Expectations for the generated SVG content
  expect(svg).toEqual('<circle cx="50" cy="50" r="40" stroke="" stroke-width="3" fill="" />');
});

test('Generate Square SVG', () => {
  const choices = { backgroundColor: '', textColor: "" };
  const svg = generateSquareSVG(choices);
  // Expectations for the generated SVG content
  expect(svg).toEqual('<rect width="80" height="80" stroke="" stroke-width="3" fill="" />');
});

test('Generate Triangle SVG', () => {
  const choices = { backgroundColor: '', textColor: "" };
  const svg = generateTriangleSVG(choices);
  // Expectations for the generated SVG content
  expect(svg).toEqual('<polygon points="50,10 90,90 10,90" stroke="" stroke-width="3" fill="" />');
});
