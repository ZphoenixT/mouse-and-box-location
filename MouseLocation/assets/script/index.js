'use strict';

/*----------------------------------
                MOUSE
------------------------------------
*/
const X = document.getElementById("x");
const Y = document.getElementById("y");


document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    X.innerText = `X: ${mouseX}`;
    const mouseY = event.clientY;
    Y.innerText = `Y: ${mouseY}`;
});

/*---------------------------------------------------------
                  MOVING THE BOX
-----------------------------------------------------------
*/

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