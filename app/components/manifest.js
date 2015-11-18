//Add New Components' file names.
var components = [
  'hello_world',
  'hello_world_other'
];

var path = require('path');
var pathFromRoot = path.resolve(__dirname, "./");
module.exports = validatePaths(components);

function validatePaths(components) {
  var validComponentPaths = [];
  for(var i=0; i < components.length; i++){
    var component = pathFromRoot + '/'+ components[i] + '.jsx';
    require(component);
    validComponentPaths.push(component);
  }
  return validComponentPaths;
}