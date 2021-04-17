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
    }
}

function sheetchange2() {
    document.getElementById('other').innerHTML = 'You make some bad choices...';
}