// See: https://jsbin.com/cehesodare/edit?js,console
// See: https://github.com/zsoltszabo/node-uglifier/pull/13

console.log('----- Current version ------------------------------');
(function(){
console.log('Start');

var cachedModules=[];
cachedModules[0]={exports:{}};
(function(module,exports) {
  console.log('  Building cachedModule 0');
  module.exports = 'Exports from cachedModule 0';
}).call(this,cachedModules[0],cachedModules[0].exports);
cachedModules[1]={exports:{}};
(function(module,exports) {
  console.log('  Building cachedModule 1');
  module.exports = function(arg1) { return 'Exports from cachedModule 1 - arg1:['+arg1+']'; };
}).call(this,cachedModules[1],cachedModules[1].exports);


var moduleA = cachedModules[0].exports; console.log('  moduleA: '+moduleA);
var moduleB = cachedModules[0].exports; console.log('  moduleB: '+moduleB);
var moduleC = cachedModules[1].exports('Hello'); console.log('  moduleC: '+moduleC);

console.log('Finish');
})();



console.log('----- Proposed version -----------------------------');
(function(){
console.log('Start');

var that = this;
var cachedModules=[];
var getCachedModule = function(index) {
  if (cachedModules[index].builder!=null) {
    cachedModules[index].builder.call(that,cachedModules[index],cachedModules[index].exports);
    delete cachedModules[index].builder;
  }
  return cachedModules[index].exports;
};
cachedModules[0]={exports:null, builder:
(function(module,exports) {
  console.log('  Building cachedModule 0');
  module.exports = 'Exports from cachedModule 0';
})};
cachedModules[1]={exports:null, builder:
(function(module,exports) {
  console.log('  Building cachedModule 1');
  module.exports = function(arg1) { return 'Exports from cachedModule 1 - arg1:['+arg1+']'; };
})};  


var moduleA = getCachedModule(0); console.log('  moduleA: '+moduleA);
var moduleB = getCachedModule(0); console.log('  moduleB: '+moduleB);
var moduleC = getCachedModule(1)('Hello'); console.log('  moduleC: '+moduleC);
console.log('Finish');
})();