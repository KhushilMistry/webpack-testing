(() => {
  var r = {
      825: (r) => {
        r.exports = "bar";
      },
    },
    t = {};
  function e(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var c = (t[o] = { exports: {} });
    return r[o](c, c.exports, e), c.exports;
  }
  (e.n = (r) => {
    var t = r && r.__esModule ? () => r.default : () => r;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (r, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(r, o) &&
          Object.defineProperty(r, o, { enumerable: !0, get: t[o] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
    (() => {
      var r;
      e.g.importScripts && (r = e.g.location + "");
      var t = e.g.document;
      if (!r && t && (t.currentScript && (r = t.currentScript.src), !r)) {
        var o = t.getElementsByTagName("script");
        o.length && (r = o[o.length - 1].src);
      }
      if (!r)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (r = r
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = r);
    })(),
    (() => {
      "use strict";
      var r = e(825),
        t = e.n(r);
      const o = "cat" + t() + "foo";
      e.p, console.log(o, t());
    })();
})();
