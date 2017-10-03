//is called in layout before any other scripts. main will be avaliable in any subsequent scripts called
const path = require('path');
const remote = require('electron').remote
const main = remote.require(path.resolve('main.js'));