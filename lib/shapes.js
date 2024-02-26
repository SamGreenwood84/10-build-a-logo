// lib/shapes.js
function generateCircleSVG(choices) {
  const { text, textColor, backgroundColor } = choices;
  // Generate SVG for a circle based on user input
  return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${backgroundColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

function generateSquareSVG(choices) {
  const { text, textColor, backgroundColor } = choices;
  // Generate SVG for a square based on user input
  return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="300px" height="200px" stroke="black" stroke-width="3" fill="${backgroundColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

function generateTriangleSVG(choices) {
  const { text, textColor, backgroundColor } = choices;
  // Generate SVG for a triangle based on user input
  return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="${backgroundColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

module.exports = {
  generateCircleSVG,
  generateSquareSVG,
  generateTriangleSVG,
};
