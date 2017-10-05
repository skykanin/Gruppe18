//is called in layout before any other scripts. main will be avaliable in any subsequent scripts called
const remote = require('electron').remote
const main = remote.require('./main.js')
const dateFormat = require('dateformat');
const path = require('path')
locals = main.locals