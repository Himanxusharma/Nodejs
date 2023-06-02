
const os = require('os');
const path = require('path');
console.log('freemem',os.freemem());
console.log('homedir',os.homedir());
console.log('hostname',os.hostname());
console.log('platform',os.platform());
console.log('release',os.release());
console.log('totalmem',os.totalmem());

const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a1);
console.log(a2);