// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function homeNav() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
}

function helpNav() {
    reset();
    document.getElementById("home").className = "inactive";
    document.getElementById("disp").className = "inactive";
    document.getElementById("help").className = "active";
}

function reset() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
    document.getElementById("opponent").className = "inactive";
    document.getElementById("disp2").className = "inactive";
    document.getElementById("opponent-options-rps").className = "inactive";
    document.getElementById("opponent-options-rpsls").className = "inactive";
    var ele = document.getElementsByName("option");
    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
    var ele = document.getElementsByName("opp");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
    var ele = document.getElementsByName("opponent-options-rps");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
    var ele2 = document.getElementsByName("opponent-options-rpsls");
        for(var i=0;i<ele2.length;i++)
            ele2[i].checked = false;
    document.getElementById("disp2").innerHTML
            = "";
    document.getElementById("disp").innerHTML
            = "";
}

function display() {
    if (document.getElementById("rps").checked) {
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        document.getElementById("game").innerHTML = "rps";
    } else if (document.getElementById("rpsls").checked) {
        document.getElementById("disp").innerHTML = "Would you like a random draw or to play an opponent?"
        document.getElementById("opponent").className = "active";
        document.getElementById("disp2").className = "active";
        document.getElementById("game").innerHTML = "rpsls";
    } else {
        document.getElementById("disp").innerHTML
                    = "You have not selected which game you would like to play.";
    }
}

function getGame() {
    if (document.getElementById("opps").checked) {
        document.getElementById("disp2").innerHTML = "Please select what you would like to play below.";
        if (document.getElementById("game").innerHTML == "rps") {
            document.getElementById("opponent-options-rpsls").className = "inactive";
            document.getElementById("opponent-options-rps").className = "active";
        } else {
            document.getElementById("opponent-options-rps").className = "inactive";
            document.getElementById("opponent-options-rpsls").className = "active";
        }
    } else if (document.getElementById("no-opponent").checked) {
        document.getElementById("disp2").innerHTML = "You have selected to play a random opponent.";
        playRandom();
    } else {
        document.getElementById("disp2").innerHTML = "You have not selected an opponent style.";
}
}

function playRandom() {

}

function playOpp() {

}