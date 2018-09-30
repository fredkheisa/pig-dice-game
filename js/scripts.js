function add(){

    var a = parseInt(document.getElementById("player1").value);
    var b = parseInt(document.getElementById("player2").value);


        if (a ===b && b === c && c === a) {
          alert("Equilateral Triangle");
      }
        else if (a === 1) {
          alert("OOPS! TURN FOR PLAYER 2 : ");
      }
      else if (b === 1) {
        alert("OOPS! TURN FOR PLAYER 1 : ");
    }
        else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
          alert("THIS IS NOT A Triangle");
      }
        else if (a !== b && b !== c ) {
          alert("Scalene Triangle");
      }
    }

