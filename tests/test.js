var gtbLocker = require('../index');
var fs = require('fs');
var files = gtbLocker('node_modules/@wordpress/**/package.json');

fs.writeFileSync('./tests/pkg.json', JSON.stringify(files, null, 2));
