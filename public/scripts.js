// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function homeNav() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
    document.getElementById("disp").className = "active";
}

function helpNav() {
    document.getElementById("home").className = "inactive";
    document.getElementById("disp").className = "inactive";
    document.getElementById("opponent").className = "inactive";
    document.getElementById("disp2").className = "inactive";
    document.getElementById("help").className = "active";
}

function display() {
    if (document.getElementById("rps").checked) {
        var game = "rps";
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
    } else if (document.getElementById("rpsls").checked) {
        var game = "rpsls";
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
    } else {
        document.getElementById("disp").innerHTML
                    = "You have not selected which game you would like to play.";
    }
}

function getGame() {
    var opponent = None;
    if (document.getElementById("opponent").checked) {
        opponent = True;
        document.getElementById("disp2").innerHTML = "You have selected to play {} against {}.";
} else if (document.getElementById("no-opponent").checked) {
        opponent = False; 
        document.getElementById("disp2").innerHTML = "You have selected to play {} against {}.";
} else {
    document.getElementById("disp2").innerHTML
    = "You have not selected an opponent style.";
}
}