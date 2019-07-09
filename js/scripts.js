//Scoring

// var scoreboard = {
//   player1Score: 0,
//   player2Score: 0,
//   currentPlayer: 1,
//   turnScore: 0,
// };

var scoreboard = {
  player1Score: 0,
  player2Score: 0,
  firstPlayerTurn: true,
  turnScore: 5,
};

var addScore = function() {
  if (scoreboard.firstPlayerTurn) {
    scoreboard.player1Score = scoreboard.player1Score += scoreboard.turnScore;
  }
  else {
    scoreboard.player2Score = scoreboard.player2Score += scoreboard.turnScore;
  }
  scoreboard.turnScore = 0;
  changeTurn();
  console.log(scoreboard);
};

var changeTurn = function() {
  scoreboard.firstPlayerTurn = !scoreboard.firstPlayerTurn;
}
//Dice Roll

var diceRoll = function() {
  var x = Math.floor((Math.random() * 6) + 1);
  if (x > 1) {
    scoreboard.turnScore = x;
    alert("you made it");
  } else {
    scoreboard.turnScore = 0;
    changeTurn();
  };
  console.log("the die roll is " + x);
};

//Win Conditions

var checkScore = function() {

};

//UI Logic
