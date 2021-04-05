var drawGrid = function () {
  /* Initialize any needed variables */
  const canvas = document.getElementById('canvas');
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

var init = function () {
  drawGrid();
};

init();
