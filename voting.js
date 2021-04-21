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

function sansChange1() {
    document.getElementById('spare').onclick = function btnChange() {
        document.getElementById('dialogue').innerHTML = '<a href="index2.html">Spare</a>';
}
}
function sansChange2() {
    document.getElementById('item').onclick = function btnChange() {
        document.getElementById('dialogue').innerHTML = '<a href="index2.html">Voting Ticket</a>';
}
}
function sansChange3() {
    document.getElementById('act').onclick = function btnChange() {
        document.getElementById('dialogue').innerHTML = '<a href="index2.html">Vote</a>';
}
}
function sansChange4() {
    document.getElementById('fight').onclick = function btnChange() {
        document.getElementById('dialogue').innerHTML = '<a href="index2.html">Sans</a>';
}
}

let face = document.querySelector('#nixon2');
document.addEventListener('mousemove', logKey);
function logKey(e) {
    face.style.top = `${e.clientY}px`;
    face.style.left = `${e.clientX}px`;
    face.style.transform = "translate(-50%, -50%)";
}



var r_text = new Array ();
r_text[0] = "Not Nixon";
r_text[1] = "Blatantly Correct Choice";
r_text[2] = "Good President";
r_text[3] = "Vote Nixon!";
r_text[4] = "A Good Choice";
r_text[5] = "Nixon for President";
r_text[6] = "We All Love Nixon!";
r_text[7] = "Support Nixon";
r_text[8] = "4 Years of Nixon";
r_text[9] = "Endorse Nixon";
r_text[10] = "History's Greatest Leader";

var i = Math.floor(r_text.length * Math.random());
var intervalId = window.setInterval(function(){
        var i = Math.floor(r_text.length * Math.random());
        document.getElementById("nixon3").innerHTML = "<a type='button' id='nixon'>" + r_text[i] + "</button>";
  }, 2000);
document.getElementById("nixon3").innerHTML = "<button type='button' id='nixon'>" + r_text[i] + "</button>";