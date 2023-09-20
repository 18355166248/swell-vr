;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.Vr = {})))
})(this, function (exports2) {
  'use strict'
  class Vr360 {}
  exports2.Vr360 = Vr360
  Object.defineProperty(exports2, Symbol.toStringTag, {value: 'Module'})
})
//# sourceMappingURL=vr.umd.js.map
