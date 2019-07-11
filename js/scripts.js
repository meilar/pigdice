//Scoring

var scoreboard = {
  player1Score: 0,
  player2Score: 0,
  firstPlayerTurn: true,
  turnScore: 0,
};

var updateScore = function() {
  $("#player1-score").html(scoreboard.player1Score);
  $("#player2-score").html(scoreboard.player2Score);
};

var addScore = function() {
  if (scoreboard.firstPlayerTurn) {
    scoreboard.player1Score = scoreboard.player1Score += scoreboard.turnScore;
  }
  else {
    scoreboard.player2Score = scoreboard.player2Score += scoreboard.turnScore;
  }
  scoreboard.turnScore = 0;
  checkScore();
  changeTurn();
  updateScore();
  console.log(scoreboard);
};

var changeTurn = function() {
  scoreboard.firstPlayerTurn = !scoreboard.firstPlayerTurn;
  $(".ui").toggle();
  $(".last-move").html("It's your turn!");
}

//Dice Roll

var diceRoll = function() {
  var x = Math.floor((Math.random() * 6) + 1);
  $(".last-move").html("You rolled a " + x + ". Your current turn score is " + scoreboard.turnScore + ".");
  if (x > 1) {
    scoreboard.turnScore = scoreboard.turnScore += x;
  } else {
    scoreboard.turnScore = 0;
    changeTurn();
  };
  console.log("the die roll is " + x);
  console.log(scoreboard);
};

//Win Conditions

var checkScore = function() {
  if (scoreboard.player1Score >= 100) {
    $(".win-area").show();
    $(".play-area").hide();
    $("#win-message").html("Player 1 wins!");
    console.log("Player 1 wins");
  } else if (scoreboard.player2Score >= 100) {
    $(".win-area").show();
    $(".play-area").hide();
    $("#win-message").html("Player 2 wins!");
    console.log("Player 2 wins");
  } else {
  };
};

//UI Logic

$(document).ready(function() {
  $(".last-move").html("It's your turn!");
  updateScore();
  $("button.roll").click(function() {
    diceRoll();
  });
  $("button.hold").click(function() {
    addScore();
  });
  $("button#restart").click(function() {
    location.reload(true);
  });
});
