const canvas = document.getElementById('canvas');
const canvasDraw = canvas.getContext('2d');
var playCount = 0;
var totalLength = canvas.height;
var gridLength = totalLength / 3;
var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];

var drawGrid = function () {
  /* Draw the Lines for the Tic Tac Toe Grid */
  /* Draw Vertical Lines */
  for (var i = 1; i < 3; i ++) {
    canvasDraw.beginPath();
    canvasDraw.moveTo(i * gridLength, 0);
    canvasDraw.lineTo(i * gridLength, totalLength);
    canvasDraw.stroke();
  }
  /* Draw Horizontal Lines */
  for (var i = 1; i < 3; i ++) {
    canvasDraw.beginPath();
    canvasDraw.moveTo(0, i * gridLength);
    canvasDraw.lineTo(totalLength, i * gridLength);
    canvasDraw.stroke();
  }
};

/* Handle Click Event on Grid */
canvas.addEventListener('click', event => {
  handlePlayEvent(event.clientX, event.clientY);
});

/* Handle Play Event */
var handlePlayEvent = function (x, y) {
  /* Determining Current Player */
  currentPlayer = playCount % 2 === 0 ? 'X' : 'O';
  /* Determining Box Clicked */
  var coordinates = findNearestBox(x, y);
  if (gameBoard[coordinates.y][coordinates.x] === null) {
    gameBoard[coordinates.y][coordinates.x] = currentPlayer;
    canvasDraw.font = '48px serif';
    canvasDraw.fillText(currentPlayer, (coordinates.x + 1) * gridLength - gridLength / 2, (coordinates.y + 1) * gridLength - gridLength / 2);
    playCount ++;
  } else {
    alert ('This box has already been played in, please select another box.');
  }
  if (playCount > 4) {
    var winner = checkWin();
    if (winner !== 'No Winner') {
      var winString = winner + ' has won the game!';
      setTimeout(alert.bind(this, winString), 100);
    } else if (playCount === 9) {
      setTimeout(alert.bind(this, 'Tie!'), 100);
    }
  }
};

/* Find Box Clicked Based on Coordinates */
var findNearestBox = function (x, y) {
  var xCoordinate = -1;
  var yCoordinate = -1;
  for (var i = 0; i < 3; i++) {
    if (x > i * gridLength) {
      xCoordinate ++;
    }
  }
  for (var i = 0; i < 3; i++) {
    if (y > i * gridLength) {
      yCoordinate ++;
    }
  }
  var coordinates = {x: xCoordinate, y: yCoordinate};
  return coordinates;
};

var checkWin = function () {
  /* Check Verticals for a Winner */
  for (var i = 0; i < 3; i++) {
    if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2] && gameBoard[i][0] !== null) {
      return gameBoard[i][0];
    }
  }
  /* Check Horizontals for a Winner */
  for (var i = 0; i < 3; i++) {
    if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i] && gameBoard[0][i] !== null) {
      return gameBoard[0][i];
    }
  }
  /* Check Major Diagonal for a Winner */
  if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2] && gameBoard[0][0] !== null) {
    return gameBoard[0][0];
  }
  /* Check Minor Diagonal for a Winner */
  if (gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2] && gameBoard[2][0] !== null) {
    return gameBoard[2][0];
  }
  /* If all else fails, return no winner */
  return 'No Winner';
};


var init = function () {
  drawGrid();
};

init();
