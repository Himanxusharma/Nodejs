const os = require('os');
const path = require('path');
console.log(os.freemem);
const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a1);
console.log(a2);