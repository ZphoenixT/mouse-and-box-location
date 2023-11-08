# Mouse and Box Location

## Overview
The Mouse and Box Location Page is a simple, interactive web page designed to display and track the position of the user's mouse cursor as well as the location of a designated box within the page.
It's like a fun tool to see how your mouse moves and how you can move an object around. It helps to learn about positions and how things move on a webpage.

## getBoundingClientReact()
The `getBoundingClientReact()` method returns information about the objects position relative the the size of the screen/webpage. It returns different values such as: `left`, `right`, `top`, `bottom`, `x`, `y`, `width`, and `height`. In this project in order to the get center for the X-axis I use this line of code: `boxX.innerText = `X: ${divPosition.left + (divPosition.width / 2)}`;` and to the get Y-axis I used: `boxY.innerText = `Y: ${divPosition.top + (divPosition.height / 2)}`;`. For the first one, it finds the position of the edge of the box on the left side and the width of the box, then it takes the width, divides it by 2, and adds it the the position of the left side. For the second one, it finds the top edge of the box and the height, then it takes the height and divides it by 2 and adds it to the position of the top.
