import MakeGridRow from './MakeGridRow.jsx';

var MakeGrid = function (props) {
  var rowNumbers = [];
  for (var i = 0; i < props.n; i++) {
    rowNumbers.push(i);
  }
  return (
    <ul>
      {rowNumbers.map(rowNumber => (
        <MakeGridRow rowNumber={rowNumber} n={props.n} />
      ))}
    </ul>
  );
};

export default MakeGrid;