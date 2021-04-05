const canvas = document.getElementById('canvas');
var playCount = 0;

var drawGrid = function () {
  /* Initialize any needed variables */
  const canvasDraw = canvas.getContext('2d');
  var height = canvas.height;
  var width = canvas.width;

  /* Draw the Lines for the Tic Tac Toe Grid */
  /* Draw Vertical Lines */
  for (var i = 1; i < 3; i ++) {
    canvasDraw.beginPath();
    canvasDraw.moveTo(i * width / 3, 0);
    canvasDraw.lineTo(i * width / 3, height);
    canvasDraw.stroke();
  }
  /* Draw Horizontal Lines */
  for (var i = 1; i < 3; i ++) {
    canvasDraw.beginPath();
    canvasDraw.moveTo(0, i * height / 3);
    canvasDraw.lineTo(width, i * height / 3);
    canvasDraw.stroke();
  }
};

/* Handle Play Event */
var handlePlayEvent = function (x, y) {
  currentPlayer = playCount % 2 === 0 ? 'X' : 'O';
  console.log('Player ', currentPlayer);
  playCount ++;
};

/* Handle Click Event on Grid */
canvas.addEventListener('click', event => {
  handlePlayEvent(event.clientX, event.clientY);
});

var init = function () {
  drawGrid();
};

init();
