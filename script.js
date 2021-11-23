let compartment = document.getElementsByClassName('compartment');
let player1 = false;
let player2 = false;

const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

/*
Click management
 */

for(const square of compartment) {
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                insertPlayerText(this, "X");
                break;

            case CLICK_RIGHT:
                insertPlayerText(this, "O")
                break;
        }
        checkCases();
    });
}

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

/*
Management true or false
 */

function checkCases() {
    player1 = horizontal("X");
    player2 = horizontal("O");

    if (!player1 && !player2) {
        player1 = verticale("X");
        player2 = verticale("O")

        if (!player1 && !player2) {
            player1 = diagonale("X");
            player2 = diagonale("O");
        }
    }

    if (player1) {
        alert ("Le joueur 1 remporte la manche");
    }
    else if (player2) {
        alert("Le joueur 2 remporte la manche");
    }
}

/*
Victory's Conditions
 */

//horizontal
function horizontal (player) {
    for (let i=0; i < 3; i++) {
        if (compartment[i*3].innerHTML === player && compartment[1 + i*3].innerHTML === player && compartment[2+ i*3].innerHTML === player){
            return true;
        }
        else if (compartment[i*3].innerHTML === player && compartment[1 + i*3].innerHTML === player && compartment[2+ i*3].innerHTML === player){
            return true;
        }
    }
    return false;
}

//Vertical
function verticale (player) {
    for ( let i = 0 ; i < 3 ; i++ ) {
        if (compartment[i].innerHTML === player && compartment[3 + i].innerHTML === player && compartment[6 + i].innerHTML === player) {
            return true;
        }
        else if (compartment[i].innerHTML === player && compartment[3 + i].innerHTML === player && compartment[6 + i].innerHTML === player) {
            alert("Joueur 2 gagne");
            return true;
        }
    }
    return false;
}

//Diagonal
function diagonale(player) {
    if (compartment[0].innerHTML === player && compartment[4].innerHTML === player && compartment[8].innerHTML === player) {
        return true;
    }
    else if (compartment[2].innerHTML === player && compartment[4].innerHTML === player && compartment[6].innerHTML === player) {
        return true;
    }
    return false;
}

function insertPlayerText(element, playerChar) {
    if (!player1 && !player2) {
        if (element.innerHTML.length === 0) {
            element.innerHTML = playerChar;
        }
    }
}

/*
Button management
 */

document.getElementById("submit").addEventListener("click", function () {
    for (let square of compartment) {
        square.innerHTML = "";
    }
    player2 = player1 = false;
    document.getElementById("won").innerHTML = "";
})