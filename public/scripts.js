// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function homeNav() {
    document.getElementById("help").className = "inactive";
    document.getElementById("home").className = "active";
}

function helpNav() {
    document.getElementById("home").className = "inactive";
    document.getElementById("help").className = "active";
}