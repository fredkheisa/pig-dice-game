//this is the user interface.
function check() {
    var playerOne = parseInt(document.getElementById("player1").value);
    var playerTwo = parseInt(document.getElementById("player2").value);
    var relativeOne = 0;
    var relativeTwo = 0;

    if (playerOne === 2 && playerOne === 3 && playerOne === 4 && playerOne === 5 && playerOne === 6) {
        return relativeOne = + playerOne
    }
    else if (playerOne === 1) {
        return relativeTwo= relativeTwo +playerTwo
    }
    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "here is your score";
};
