const nx = require('next-js-core2');
const globby = require('globby');
const nx2slice = require('next-slice2str');
const DEFAULT_OPTIONS = { key: '_id', path: 'node_modules/@wordpress/**/package.json' };

module.exports = function(inOptions) {
  const options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
  const files = globby.sync(options.path);
  const result = {};
  const ids = files.map((file) => {
    const str = require('./' + file)[options.key];
    const idx = str.lastIndexOf('@');
    return nx2slice(str, idx, 1);
  });
  ids.forEach((item) => {
    result[item[0]] = item[1];
  });
  return result;
};
