# 10-build-a-logo
Object-oriented Programming Challenge: SVG Logo Maker

# Live Demo 

 [Live Demo-Video(Assumes all installations are complete first)](assets/demo/LiveDemo-build-a-logo.webm)

# User Story

AS a freelance web developer

I WANT to generate a simple logo for my projects

SO THAT I can organize my projects easily with color coding for subject , initials of my project title and shape for personal, business or client work.

# Acceptance Criteria

WHEN I have cloned the repository and inquirer and npm install is complete

THEN enter node.js in the command line

THEN a message setting user expectations will appear "Let's build-a-logo! This easy-to-use CLI tool takes your desired input and generates a simple clean logo! Enter 3 Initials in the font and background color of your choice with 3 shapes to choose from!" 

WHEN I am prompted to add 3 initials

THEN I can enter any 3 letters, upper or lowercase

WHEN I am prompted text color 

THEN I can enter a text color (OR a hexidecimal #)

WHEN I am prompted for the background color

THEN I can enter a color keyword (OR a hexadecimal #)

WHEN I am prompted for a shape 

THEN I am presented with a list of shapes to choose from: circle, square, 
and triangle that I can choose using the  up and down arrows

WHEN I have entered input for all the prompts

THEN an SVG file is created named `logo.svg` in your root folder

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered

# References

Referenced code from Challange: [09-build-a-readme](https://github.com/SamGreenwood84/09-build-a-readme.git) 

Youtube Walkthrough: [Thomas' Object Oriented Programming SVG LOGO MAKER](https://www.youtube.com/watch?v=GJYMcLus3v0)

```javascript
npm test -- -u
```

mdn web docs prvovided in BootCamp Spot

Stack Overflow [console.log](https://stackoverflow.com/questions/49660349/how-to-create-line-breaks-in-console-log-in-node-js) 



