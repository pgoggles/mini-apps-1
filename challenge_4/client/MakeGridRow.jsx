import MakeGridEntry from './MakeGridEntry.jsx';

var MakeGridRow = function (props) {
  var columnNumbers = [];
  for (var i = 0; i < props.n; i++) {
    columnNumbers.push(i);
  }
  return (
    <ul>
      {columnNumbers.map(columnNumber => (
        <MakeGridEntry columnNumber={columnNumber} rowNumber = {props.rowNumber} n={props.n} />
      ))}
    </ul>
  );
};

export default MakeGridRow;