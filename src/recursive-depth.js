const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (JSON.stringify(arr) === JSON.stringify(arr.flat(1))) return 1;
    return 1 + this.calculateDepth(arr.flat(1));
  }
};