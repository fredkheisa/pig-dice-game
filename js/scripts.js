// back end
var turnTotal1 = 0;
var turnTotal2 = 0;

var random;
var dieCount;
var newPlayer1;
var newPlayer2;

function Player(name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

function getRandomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return dieCount;
}

// front end
$(function () {
  $("form#intake").submit(function (event) {
    event.preventDefault();

    var inputtedFirstPlayer = $("input#p1").val();
    var inputtedSecondPlayer = $("input#p2").val();
    newPlayer1 = new Player(inputtedFirstPlayer, 0, true);
    newPlayer2 = new Player(inputtedSecondPlayer, 0, false);

    $("#intake").hide();
    $(".playField").show();
    $(".playField2").show();

    $("#player1name").text(newPlayer1.name);
    $("#player2name").text(newPlayer2.name);
    $("#player1score").text(newPlayer1.score);
    $("#player2score").text(newPlayer2.score);
  });
});

$(function () {


  $("button#roll1").click(function (event) {
    event.preventDefault();
    random = getRandomNumber(1, 6);
    if (random === 1) {
      turnTotal1 = 0;
      newPlayer1.turn = false;
      newPlayer2.turn = true;
      alert(turnTotal1);
    } else if (random > 1) {
      turnTotal1 += random;
      alert(turnTotal1);
    }
    $("button#hold1").click(function (event) {
      event.preventDefault();
      newPlayer1.turn = false;
      newPlayer2.turn = true;
      newPlayer1.score += turnTotal1;
      turnTotal1 = 0;
      $("#player1score").text(newPlayer1.score);
      $(".playerField").hide();
    });
  });
});


$(function () {

  $("button#roll2").click(function (event) {
    event.preventDefault();
    random = getRandomNumber(1, 6);
    if (random === 1) {
      turnTotal2 = 0;
      newPlayer1.turn = true;
      newPlayer2.turn = false;
      alert(turnTotal2);
    } else if (random > 1) {
      turnTotal2 += random;
      alert(turnTotal2);
    }
    $("button#hold2").click(function (event) {
      event.preventDefault();
      newPlayer1.turn = true;
      newPlayer2.turn = false;
      newPlayer2.score += turnTotal2;
      turnTotal2 = 0;
      $("#player2score").text(newPlayer2.score);
    });
  });
});

