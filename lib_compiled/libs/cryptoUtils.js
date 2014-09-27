// Generated by CoffeeScript 1.7.1
(function() {
  var crypto, cryptoUtils, seedrandom, sugar, _;

  _ = require('underscore');

  sugar = require('sugar');

  crypto = require("crypto");

  seedrandom = require("seedrandom");

  cryptoUtils = module.exports;

  cryptoUtils.generateSalt = function(saltLength) {
    return crypto.randomBytes(Math.ceil(saltLength / 2)).toString('hex').substring(0, saltLength);
  };

  cryptoUtils.getSaltedHash = function(message, hashAlgorithm, salt) {
    return crypto.createHmac(hashAlgorithm, salt).update(message).digest('hex');
  };

  cryptoUtils.shuffleArray = function(array, seed) {
    var i, j, randFnc, temp, _i, _ref;
    if (seed == null) {
      seed = null;
    }
    randFnc = Math.random;
    if (seed) {
      randFnc = seedrandom(seed);
    }
    for (i = _i = _ref = array.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
      j = Math.floor(randFnc() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

}).call(this);

//# sourceMappingURL=cryptoUtils.map