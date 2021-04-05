const canvas = document.getElementById('canvas');
const canvasDraw = canvas.getContext('2d');
var playCount = 0;
var totalLength = canvas.height;
var gridLength = totalLength / 3;
var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];

var drawGrid = function () {
  /* Initialize any needed variables */

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

/* Handle Play Event */
var handlePlayEvent = function (x, y) {
  /* Determining Current Player */
  currentPlayer = playCount % 2 === 0 ? 'X' : 'O';
  /* Determining Box Clicked */
  var coordinates = findNearestBox(x, y);
  if (gameBoard[coordinates.x][coordinates.y] === null) {
    gameBoard[coordinates.x][coordinates.y] = currentPlayer;
    canvasDraw.font = '48px serif';
    canvasDraw.fillText(currentPlayer, (coordinates.x + 1) * gridLength - gridLength / 2, (coordinates.y + 1) * gridLength - gridLength / 2);
    playCount ++;
  } else {
    alert ('This box has already been played in, please select another box.');
  }

};

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
/* Handle Click Event on Grid */
canvas.addEventListener('click', event => {
  handlePlayEvent(event.clientX, event.clientY);
});

var init = function () {
  drawGrid();
};

init();
