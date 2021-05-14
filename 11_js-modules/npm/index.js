const _ = require("lodash");

console.log("NPM Project");

const arr = [1, [2, [3, [4]], 5]];

const flatterArray = _.flattenDeep(arr);

console.log(flatterArray); // [1, 2, 3, 4, 5]
