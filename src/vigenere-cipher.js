const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  transform(message, key, type) {
    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      let charCodeMessage = upperMessage.charCodeAt(i);
      let charCodeKey = upperKey.charCodeAt(keyIndex);

      if (charCodeMessage > 64 && charCodeMessage < 91) {
        if (type === 'encrypt') {
          result.push(String.fromCharCode((charCodeMessage + charCodeKey - 'A'.charCodeAt(0) * 2) % 26 + 'A'.charCodeAt(0)));
        } else {
          let difference = charCodeMessage - charCodeKey;
          result.push(String.fromCharCode(difference < 0 ? difference + 'Z'.charCodeAt(0) + 1 : difference + 'A'.charCodeAt(0)));
        }
        keyIndex = keyIndex == upperKey.length - 1 ? 0 : keyIndex + 1;
      } else {
        result.push(String.fromCharCode(charCodeMessage));
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
  encrypt(message, key) {
    return this.transform(message, key, 'encrypt');
  }
  decrypt(message, key) {
    return this.transform(message, key);
  }
}

module.exports = VigenereCipheringMachine;
