//Add New Components' file names.
var components = [
  'hello_world'
];

var path = require('path');
var fileExists = require('file-exists');
var pathFromRoot = path.resolve(__dirname, "./");
module.exports = validatePaths(components);

function validatePaths(components) {
  var validComponentPaths = {};
  for(var i=0; i < components.length; i++){
    var componentPath = pathFromRoot + '/'+ components[i] + '/' + components[i] + '.jsx';
    if (checkPath(components[i], componentPath)) {
      validComponentPaths[components[i]] = componentPath;
    }
  }
  return validComponentPaths;
}

function checkPath(name, path) {
  if (!fileExists(path)) {var error = 'Component "'+ name + '" was not found at ' + path + ".\n";
    throw error;
  }
  return true;
}
