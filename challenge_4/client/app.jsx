class App extends React.Component {
  constructor(props) {
    super(props);
    var gameBoard = [];
    for (var i = 0; i < props.n; i++) {
      var subBoard = [];
      for (var j = 0; j < props.n; j++) {
        subBoard.push({value: 0, indices: 'R' + i + 'C' + j});
      }
      gameBoard.push(subBoard);
    }
    this.state = {gameBoard: gameBoard, n: props.n, currentPlayer: 1, currentPlayerColor: 'Red\'s Turn', rowFull: '', totalPlays: 0, winner: ''};
  }


  onClick(event) {
    if (this.state.winner === '') {
      var clickedToken = event.target.classList[1];
      var clickedIndices = clickedToken.split('R')[1].split('C'[0]);
      var row = clickedIndices[0];
      var column = clickedIndices[1];
      var gameBoard = this.state.gameBoard;
      var n = this.state.n;
      /* Traverse from the bottom row until empty */
      var changeIndex = -1;
      for (var i = n - 1; i > -1; i--) {
        if (gameBoard[i][column].value === 0) {
          changeIndex = i;
          break;
        }
      }
      if (changeIndex > -1) {
        gameBoard[changeIndex][column].value = this.state.currentPlayer;
        var currentPlayer = this.state.currentPlayer === 1 ? 2 : 1;
        var currentPlayerColor = this.state.currentPlayerColor === 'Red\'s Turn' ? 'Black\'s Turn' : 'Red\'s Turn';
        var totalPlays = this.state.totalPlays + 1;
        this.setState(
          {
            gameBoard: gameBoard,
            currentPlayer: currentPlayer,
            currentPlayerColor: currentPlayerColor,
            rowFull: '',
            totalPlays: totalPlays
          }
        );
        if (totalPlays > 6) {
          this.checkWin(gameBoard);
        }
      } else {
        this.setState({rowFull: 'This row column is full, please play in another column.'});
      }
    }
  }

  checkWin(gameBoard) {
    /* For every coordinate we must check the three to the right, three to the bottom, three on each diagnoal (if they exist)*/
    if (this.state.winner === '') {
      var winner = -1;
      for (var i = 0; i < gameBoard.length; i++) {
        for (var j = 0; j < gameBoard.length; j++) {
          var currentPiece = gameBoard[i][j].value;
          /* Check down of the piece */
          if (i < 4 && currentPiece !== 0) {
            if (currentPiece === gameBoard[i + 1][j].value && currentPiece === gameBoard[i + 2][j].value && currentPiece === gameBoard[i + 3][j].value) {
              winner = currentPiece;
            }
          }
          /* Check right of the piece */
          if (j < 4 && currentPiece !== 0) {
            if (currentPiece === gameBoard[i][j + 1].value && currentPiece === gameBoard[i][j + 2].value && currentPiece === gameBoard[i][j + 3].value) {
              winner = currentPiece;
            }
          }
        }
      }
      if (winner === 1) {
        this.setState({winner: 'Red has won the game.', currentPlayerColor: ''});
      } else if (winner === 2) {
        this.setState({winner: 'Black has won the game.', currentPlayerColor: ''});
      }
    }
  }

  render () {
    return (
      <div>
        <div>
          {this.state.gameBoard.map(row => (
            <div>
              {row.map(gridEntry => {
                var classString = 'circle' + gridEntry.value + ' ' + gridEntry.indices;
                return <div class={classString} onClick={this.onClick.bind(this)}></div>;
              }
              )}
            </div>
          ))}
        </div>
        <div>
          {this.state.currentPlayerColor}
        </div>
        <div>
          {this.state.rowFull}
        </div>
        <div>
          {this.state.winner}
        </div>
      </div>
    );
  }
}

export default App;