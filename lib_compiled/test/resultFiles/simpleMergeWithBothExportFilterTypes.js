var cachedModules=[];
cachedModules[183]={exports:{}};
(function(module,exports) {// Generated by CoffeeScript 1.9.0
(function() {
  module.exports.boothDeepAndShalow = function(strIn) {
    return "DEEP_TEST" + strIn;
  };

}).call(this);

//# sourceMappingURL=deepModule.js.map
}).call(this,cachedModules[183],cachedModules[183].exports);
cachedModules[3565]={exports:{}};
(function(module,exports) {// Generated by CoffeeScript 1.9.0
(function() {
  var GibberishAES, cryptoLoc, deepModule;

  GibberishAES = require('./lib_external/gibberish-aes');

  deepModule = cachedModules[183].exports;

  cryptoLoc = module.exports;

  cryptoLoc.enc = function(data, key) {
    var enc;
    enc = GibberishAES.enc(data, deepModule.boothDeepAndShalow(key));
    return enc;
  };

  cryptoLoc.dec = function(data, key) {
    var dec;
    dec = GibberishAES.dec(data, deepModule.boothDeepAndShalow(key));
    return dec;
  };

}).call(this);

//# sourceMappingURL=cryptoLoc.js.map
}).call(this,cachedModules[3565],cachedModules[3565].exports);
cachedModules[6804]={exports:{}};
(function(module,exports) {// Generated by CoffeeScript 1.9.0
(function() {
  module.exports.theNonTrivialFunction = function(strIn) {
    return "ROOT_TEST_" + strIn;
  };

}).call(this);

//# sourceMappingURL=rootDependency.js.map
}).call(this,cachedModules[6804],cachedModules[6804].exports);
cachedModules[1326]={exports:{}};
(function(module,exports) {// Generated by CoffeeScript 1.9.0
(function() {
  var SomeClass;

  SomeClass = (function() {
    function SomeClass(_at_initStr) {
      this.initStr = _at_initStr;
    }

    SomeClass.prototype.get = function() {
      return this.initStr;
    };

    return SomeClass;

  })();

  module.exports = SomeClass;

}).call(this);

//# sourceMappingURL=SomeClass.js.map
}).call(this,cachedModules[1326],cachedModules[1326].exports);
cachedModules[4102]={exports:{}};
(function(module,exports) {// Generated by CoffeeScript 1.9.0
(function() {
  var SomeClass2;

  SomeClass2 = (function() {
    function SomeClass2(_at_initStr) {
      this.initStr = _at_initStr;
    }

    SomeClass2.prototype.get = function() {
      return this.initStr;
    };

    return SomeClass2;

  })();

  module.exports = SomeClass2;

}).call(this);

//# sourceMappingURL=SomeClass2.js.map
}).call(this,cachedModules[4102],cachedModules[4102].exports);// Generated by CoffeeScript 1.9.0
(function() {
  var C, SomeClass, SomeClass2, crypto, cryptoLoc, deepModule, dynamicFileName, dynamicImport, emptyString, message, r, rootDependency, shasum, sugar, _;

  _ = require('underscore');

  sugar = require('sugar');

  C = require('./lib_external/constants');

  cryptoLoc = cachedModules[3565].exports;

  rootDependency = cachedModules[6804].exports;

  crypto = require('crypto');

  deepModule = cachedModules[183].exports;

  SomeClass = new (cachedModules[1326].exports)("test1");

  SomeClass2 = cachedModules[4102].exports;

  dynamicFileName = './depDynamic/filename_used_in_dynamic_require';

  if (GLOBAL._loadDynamic) {
    dynamicImport = require(dynamicFileName);
  }

  message = cryptoLoc.dec(cryptoLoc.enc(C.PART_A + C.PART_B, "secret"), "secret");

  shasum = crypto.createHash('sha1');

  r = shasum.update(message).digest("hex");

  console.log(rootDependency.theNonTrivialFunction(r));

  emptyString = "";

  if (!_.isEqual(rootDependency.theNonTrivialFunction(r), "ROOT_TEST_6af9b2faa8ae8e408decd4f7121888af71597a90")) {
    throw new Error("ups did not work we got: " + rootDependency.theNonTrivialFunction(r) + "  instead");
  }

  if (!_.isEqual(deepModule.boothDeepAndShalow(r), deepModule.boothDeepAndShalow("6af9b2faa8ae8e408decd4f7121888af71597a90"))) {
    throw new Error("ups did not work we got: " + r + "  instead");
  }

  if (!_.isEqual(SomeClass.get(), "test1")) {
    throw new Error("ups did not work we got: " + SomeClass.get() + "  instead test1 ");
  }

  if (!_.isEqual((new SomeClass2("test2").get()) + emptyString, "test2")) {
    throw new Error("ups did not work we got: " + (new SomeClass2("test2").get() + "  instead test2 "));
  }

}).call(this);

//# sourceMappingURL=main.js.map