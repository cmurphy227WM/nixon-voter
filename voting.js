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
            document.getElementById('other').style.color = "lightblue";
            document.getElementById('other').innerHTML = "<a id='sanslink' href='sans.html'>Get ready...</a>";
            document.getElementById('nixon').innerHTML = "<a href='gaster.html'>Vote for future President Nixon</a>";
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

let changeBtn = document.getElementById("nixon3");
var i = Math.floor(r_text.length * Math.random());
var intervalId = window.setInterval(function(){
        var i = Math.floor(r_text.length * Math.random());
        document.querySelector("#nixon3, #nixon4").innerHTML = r_text[i];
        if (i == 0) {
            document.getElementById("container1").setAttribute("id", "container2");
            document.getElementById("nixon3").setAttribute("id", "nixon4");
            document.getElementById("submitlink").href = "index5.html";
        } else {
    document.getElementById("container2").setAttribute("id", "container1");
    document.getElementById("nixon4").setAttribute("id", "nixon3");
    document.getElementById("submitlink").href = "blake.html";
    }
}, 2000);



    // let inputField = document.getElementById("rigged");
    // document.addEventListener("keydown", function changeText(e) {
    //     if (e.code == "KeyN" && (document.getElementById("rigged").hasAttribute("value") == false)) {
    //         document.getElementById("rigged").value = 'N';
    //         console.log("N was pressed");
    //     }
    //     else if (e.code == "KeyI" && (document.getElementById("rigged").value = "N")) {
    //         document.getElementById("rigged").value = 'Ni';
    //         console.log("I was pressed");
    //     }
    //     else if (e.code == "KeyX" && (document.getElementById("rigged").value = "Ni")) {
    //         document.getElementById("rigged").value = 'Nix';
    //         console.log("X was pressed");
    //     }
    //     else if (e.code == "KeyO" && (document.getElementById("rigged").value = "Nix")) {
    //         document.getElementById("rigged").value = 'Nixo';
    //         console.log("O was pressed");
    //     }
    //     else if (e.code == "KeyN" && (document.getElementById("rigged").value = "Nixo")) {
    //         document.getElementById("rigged").value = 'Nixon';
    //         console.log("N was pressed again");
    //     }
    // })

    let typecount = 0;
    document.onkeydown = function typechange() {

        typecount++;
        if (typecount == 1) {
            document.getElementById('rigged').value = 'N';
        }
        if (typecount == 2) {
            document.getElementById('rigged').value = 'Ni';
        }
        if (typecount == 3) {
            document.getElementById('rigged').value = 'Nix';
        }
        if (typecount == 4) {
            document.getElementById('rigged').value = 'Nixo';
        }
        if (typecount == 5) {
            document.getElementById('rigged').value = 'Nixon';
            window.location.replace("blake.html")
        }
    }

function submitButton() {
    window.location.replace("blake.html")
}