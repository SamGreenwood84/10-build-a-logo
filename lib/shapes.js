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
  
