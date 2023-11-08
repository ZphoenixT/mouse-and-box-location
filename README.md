# Mouse and Box Location

## Overview
The Mouse and Box Location Page is a simple, interactive web page designed to display and track the position of the user's mouse cursor as well as the location of a designated box within the page.
It's like a fun tool to see how your mouse moves and how you can move an object around. It helps to learn about positions and how things move on a webpage.

## Mouse location
In order to find the location of the mouse cursor I used the `clientX` and `clientY` events to tract the X-axis and Y-axis of the mouse.
```javascript
const X = document.getElementById("x");
const Y = document.getElementById("y");


document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    X.innerText = `X: ${mouseX}`;
    const mouseY = event.clientY;
    Y.innerText = `Y: ${mouseY}`;
});
```

## getBoundingClientReact()
The `getBoundingClientReact()` method returns information about the objects position relative the the size of the screen/webpage. It returns different values such as: `left`, `right`, `top`, `bottom`, `x`, `y`, `width`, and `height`. In this project in order to the get center for the X-axis I use this line of code: 
```javascript 
boxX.innerText = `X: ${divPosition.left + (divPosition.width / 2)}`;
```
and to the get Y-axis I used: 
```javascript 
boxY.innerText = `Y: ${divPosition.top + (divPosition.height / 2)}`;
```
 For the first one, it finds the position of the edge of the box on the left side and the width of the box, then it takes the width, divides it by 2, and adds it the the position of the left side. For the second one, it finds the top edge of the box and the height, then it takes the height and divides it by 2, and adds it to the position of the top.

## Moving the box
In order to move the box around the screen using the arrow keys I used the `keydown` event alongside `ArrowUp`, `ArrowDown`, `ArrowLeft`, and `ArrowRight` events inside of a switch case. Depending on what key is pressed it moves the box by 10px in that direction and updates its position.
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const theBox = document.getElementById('box1');
    const boxX = document.getElementById('boxX');
    const boxY = document.getElementById('boxY');

    let topPos = 0;
    let leftPos = 0;
    const movementAmount = 10;

    function updateDivLocation() {
        const divPosition = theBox.getBoundingClientRect();
        boxX.innerText = `X: ${divPosition.left + (divPosition.width / 2)}`;
        boxY.innerText = `Y: ${divPosition.top + (divPosition.height / 2)}`;
    }

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp':
                topPos -= movementAmount;
                break;
            case 'ArrowDown':
                topPos += movementAmount;
                break;
            case 'ArrowLeft':
                leftPos -= movementAmount;
                break;
            case 'ArrowRight':
                leftPos += movementAmount;
                break;
        }

        theBox.style.top = topPos + 'px';
        theBox.style.left = leftPos + 'px';

        updateDivLocation();
    });
});
```
## Demo
Click <a href="file:///C:/Users/ztoew/Documents/School%20Work%20MITT%20SD/MouseLocation/index.html">here</a> to test it.
