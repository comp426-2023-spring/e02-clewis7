// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function homeNav() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
}

function helpNav() {
    document.getElementById("home").className = "inactive";
    document.getElementById("disp").className = "inactive";
    document.getElementById("opponent").className = "inactive";
    document.getElementById("disp2").className = "inactive";
    document.getElementById("help").className = "active";
}

let game = None;
let opponent = None;

function display() {
    if (document.getElementById("rps").checked) {
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        game = "rps";
    } else if (document.getElementById("rpsls").checked) {
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        game = "rpsls";
    } else {
        document.getElementById("disp").innerHTML
                    = "You have not selected which game you would like to play.";
    }
}

function getGame() {
    if (document.getElementById("opponent").checked) {
        document.getElementById("disp2").innerHTML = "You have selected to play {} against {}.";
        opponent = True;
    } else if (document.getElementById("no-opponent").checked) {
        document.getElementById("disp2").innerHTML = "You have selected to play {} against {}.";
        opponent = False;
    } else {
        document.getElementById("disp2").innerHTML = "You have not selected an opponent style.";
}
}