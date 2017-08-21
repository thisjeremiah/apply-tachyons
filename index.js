const t = require('tachyons-js');

// apply :: String -> { k: v }
const apply = className =>
    className.split(' ').map(obj => t[obj]);

module.exports = apply;
