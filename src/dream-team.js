const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let rightMembers = members.filter(x => typeof x === 'string')
                            .map(x => x.trim()[0].toUpperCase());

  return rightMembers.sort().join('');
};
