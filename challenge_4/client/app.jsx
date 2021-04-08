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
    this.state = {gameBoard: gameBoard, n: props.n, currentPlayer: 1, currentPlayerColor: 'Red', rowFull: ''};
  }


  onClick(event) {
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
      var currentPlayerColor = this.state.currentPlayerColor === 'Red' ? 'Black' : 'Red';
      this.setState({gameBoard: gameBoard, currentPlayer: currentPlayer, currentPlayerColor: currentPlayerColor, rowFull: ''});
    } else {
      this.setState({rowFull: 'This row column is full, please play in another column.'});
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
          {this.state.currentPlayerColor}'s Turn
        </div>
        <div>
          {this.state.rowFull}
        </div>
      </div>
    );
  }
}

export default App;