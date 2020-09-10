const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  if (addition === null) addition += '';
  let addStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  let result = Array(repeatTimes).fill(str + addStr).join(separator);

  return result;
};
