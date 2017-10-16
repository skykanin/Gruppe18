//is called in layout before any other scripts. main will be avaliable in any subsequent scripts called except ts files
const path = require('path');
const remote = require('electron').remote
const resolvedPath = path.resolve('./js','main.js');
//console.log(resolvedPath);
var main = remote.require(resolvedPath);