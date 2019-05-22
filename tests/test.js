var gtbLocker = require('../index');
var fs = require('fs');
var files1 = gtbLocker({ path: 'node_modules/@wordpress/**/package.json' , key: '_id'});
var files2 = gtbLocker({ path: 'node_modules/@wordpress/**/package.json' , key: '_from'});

fs.writeFileSync('./tests/pkg_id.json', JSON.stringify(files1, null, 2));
fs.writeFileSync('./tests/pkg_from.json', JSON.stringify(files2, null, 2));
