//Add New Components to this Array
var components = [
  'hello_world.jsx'
];

var path = require('path');
var pathFromRoot = path.resolve(__dirname, "./");
module.exports = validatePaths(components);

function validatePaths(components) {
  var validComponentPaths = [];
  for(var i=0; i < components.length; i++){
    var component = pathFromRoot + '/'+ components[i];
    require(component);
    validComponentPaths.push(component);
  }
  return validComponentPaths;
}