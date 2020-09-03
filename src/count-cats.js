const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let array = arguments[0];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '^^') count++;
    }
  }

  return count;
  // remove line with error and write your code here
};
