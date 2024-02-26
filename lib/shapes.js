// lib/shapes.js
function generateCircleSVG(answers) {
    // Add logic to generate SVG for a circle based on user input
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${answers.backgroundColor}" />`;
  }
  
  function generateSquareSVG(answers) {
    // Add logic to generate SVG for a square based on user input
    return `<rect width="80" height="80" stroke="black" stroke-width="3" fill="${answers.backgroundColor}" />`;
  }
  
  function generateTriangleSVG(answers) {
    // Add logic to generate SVG for a triangle based on user input
    return `<polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="${answers.backgroundColor}" />`;
  }
  
  module.exports = {
    generateCircleSVG,
    generateSquareSVG,
    generateTriangleSVG,
  };
  