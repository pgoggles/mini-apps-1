var MakeGridEntry = function (props) {
  var classString = 'emptyCircle Row' + props.rowNumber + 'Column' + props.columnNumber;
  return (
    <div class={classString}></div>
  );
};

export default MakeGridEntry;