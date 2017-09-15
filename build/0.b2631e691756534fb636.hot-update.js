webpackHotUpdate(0,{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const log = function (target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log(`调用'${name}'方法，参数为：`, arguments);
    return oldValue.apply(null, arguments);
  };
  return descriptor;
};

exports.default = log;

/***/ })

})