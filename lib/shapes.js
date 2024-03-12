// lib/shapes.js
class Shape {
  constructor(choices) {
    this.text = choices.text;
    this.textColor = choices.textColor;
    this.backgroundColor = choices.backgroundColor;
  }

  render() {
    // To be implemented in child classes
  }
}

module.exports = Shape;
  
const Shape = require('./shape');

class Circle extends Shape {
  render() {
    return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="40" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
        <rect width="200px" height="200px" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 250,190 50,190" stroke="black" stroke-width="3" fill="${this.backgroundColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
