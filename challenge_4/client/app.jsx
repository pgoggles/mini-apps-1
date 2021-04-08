class App extends React.Component {
  constructor(props) {
    super(props);
    state: {

    }
  }

  gridInitialize (n) {
    var gameBoard = [];
    for (var i = 0; i < n; i++) {
      var subBoard = [];
      for (var j = 0; j < n; j++) {
        subBoard.push({value: 0, indices: 'R' + i + 'C' + j});
      }
      gameBoard.push(subBoard);
    }
    return gameBoard;
  }
  render () {
    var gameBoard = this.gridInitialize(7);
    return (
      <div>
        {gameBoard.map(row => (
          <div>
            {row.map(gridEntry => {
              var classString = 'emptyCircle ' + gridEntry.indices;
              return <div class={classString}></div>;
            }
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;