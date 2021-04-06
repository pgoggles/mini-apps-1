module.exports.parser = function(json) {
  var parsedJSON = JSON.parse(json['form']);
  var CSV = '';
  var keys = Object.keys(parsedJSON);
  keys.splice(keys.indexOf('children'), 1);
  for (var i = 0; i < keys.length; i++) {
    CSV += keys[i];
    if (i !== keys.length - 1) {
      CSV += ',';
    } else {
      CSV += '\n';
    }
  }
  var recursiveAdd = function (jsonBody) {
    var children = jsonBody['children'];
    delete jsonBody['children'];
    var keys = Object.keys(jsonBody);
    var lastKey = keys[keys.length - 1];
    for (var key in jsonBody) {
      if (key !== 'children') {
        CSV += jsonBody[key];
      }
      if (key !== lastKey) {
        CSV += ',';
      } else {
        CSV += '\n';
      }
    }
    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        recursiveAdd(children[i]);
      }
    }
  };
  recursiveAdd(parsedJSON);
  return CSV;
};