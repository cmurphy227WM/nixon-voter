"use strict";

function sheetchange(){
    let clickcount = 0;

    document.getElementById('other').onclick = function clickchange() {
       clickcount++; 
        if (clickcount == 1) {
            document.getElementById('other').innerHTML = 'You serious?';
        }
        else if (clickcount == 2) {
            document.getElementById('other').innerHTML = "There's a good option to the left.";
        }
        else if (clickcount == 3) {
            document.getElementById('other').innerHTML = "What you're clicking now is a less desired option."
        }
        else if (clickcount == 4) {
            document.getElementById('other').innerHTML = "As in, don't click this one."
        }
        else if (clickcount == 5) {
            document.getElementById('other').innerHTML = 'Do you not speak English?'
        }
        else if (clickcount == 6) {
            document.getElementById('other').innerHTML = 'Haga clic en el botón izquierdo.'
        }
        else if (clickcount == 7) {
            document.getElementById('other').innerHTML = 'Klicken Sie auf die linke Schaltfläche.'
        }
        else if (clickcount == 8) {
            document.getElementById('other').innerHTML = 'Щелкните левую кнопку?'
        }
        else if (clickcount == 9) {
            document.getElementById('other').innerHTML = 'Going through every language would tire me as much as you...'
        }
        else if (clickcount == 10) {
            document.getElementById('other').innerHTML = "So let's assume you're just an idiot."
        }
        else if (clickcount == 11) {
            document.getElementById('other').innerHTML = 'Vote for Nixon';
            document.getElementById('nixon').innerHTML = 'Vote for someone else';
        }
        else if (clickcount == 12) {
            document.getElementById('other').innerHTML = "Didn't fool you?";
            document.getElementById('nixon').innerHTML = 'Vote for future President Nixon';
        }
        else if (clickcount == 13) {
            document.getElementById('other').innerHTML = "Fine then, you leave me no choice."
        }
        else if (clickcount == 14) {
            document.getElementById('other').innerHTML = "I'm going to have to use my special attack."
        }
        else if (clickcount == 15) {
            document.getElementById('other').innerHTML = "<a href='sans.html'>Get ready...</a>";
            document.getElementById('nixon').innerHTML = "<a href='gaster.html'>Vote for future President Nixon</a>";
        }
        else if (clickcount == 16) {
        }
    }
}