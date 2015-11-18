//Add New Components' file names.
var components = [
  'hello_world'
];

var path = require('path');
var pathFromRoot = path.resolve(__dirname, "./");
module.exports = validatePaths(components);

function validatePaths(components) {
  var validComponentPaths = [];
  for(var i=0; i < components.length; i++){
    var component = pathFromRoot + '/'+ components[i] + '.jsx';
    validComponentPaths.push(component);
  }
  return validComponentPaths;
}