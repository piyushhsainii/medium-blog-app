var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-TujMlo/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-TujMlo/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/@prisma/client/runtime/index-browser.js
var require_index_browser = __commonJS({
  "node_modules/@prisma/client/runtime/index-browser.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var he = Object.defineProperty;
    var Je = Object.getOwnPropertyDescriptor;
    var We = Object.getOwnPropertyNames;
    var je = Object.prototype.hasOwnProperty;
    var Ce = (e, n) => {
      for (var i in n)
        he(e, i, { get: n[i], enumerable: true });
    };
    var Ge = (e, n, i, r) => {
      if (n && typeof n == "object" || typeof n == "function")
        for (let t of We(n))
          !je.call(e, t) && t !== i && he(e, t, { get: () => n[t], enumerable: !(r = Je(n, t)) || r.enumerable });
      return e;
    };
    var Xe = (e) => Ge(he({}, "__esModule", { value: true }), e);
    var jn = {};
    Ce(jn, { Decimal: () => Ve, Public: () => de, detectRuntime: () => He, makeStrictEnum: () => Pe, objectEnumValues: () => Oe });
    module.exports = Xe(jn);
    var de = {};
    Ce(de, { validator: () => Me });
    function Me(...e) {
      return (n) => n;
    }
    var ne = Symbol();
    var pe = /* @__PURE__ */ new WeakMap();
    var ge = class {
      constructor(n) {
        n === ne ? pe.set(this, "Prisma.".concat(this._getName())) : pe.set(this, "new Prisma.".concat(this._getNamespace(), ".").concat(this._getName(), "()"));
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return pe.get(this);
      }
    };
    var j = class extends ge {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var G = class extends j {
    };
    me(G, "DbNull");
    var X = class extends j {
    };
    me(X, "JsonNull");
    var K = class extends j {
    };
    me(K, "AnyNull");
    var Oe = { classes: { DbNull: G, JsonNull: X, AnyNull: K }, instances: { DbNull: new G(ne), JsonNull: new X(ne), AnyNull: new K(ne) } };
    function me(e, n) {
      Object.defineProperty(e, "name", { value: n, configurable: true });
    }
    var Ke = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Pe(e) {
      return new Proxy(e, { get(n, i) {
        if (i in n)
          return n[i];
        if (!Ke.has(i))
          throw new TypeError("Invalid enum value: ".concat(String(i)));
      } });
    }
    var H = 9e15;
    var V = 1e9;
    var we = "0123456789abcdef";
    var re = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var te = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Ne = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -H, maxE: H, crypto: false };
    var qe;
    var Z;
    var w = true;
    var oe = "[DecimalError] ";
    var $ = oe + "Invalid argument: ";
    var Te = oe + "Precision limit exceeded";
    var Le = oe + "crypto unavailable";
    var Re = "[object Decimal]";
    var A = Math.floor;
    var M = Math.pow;
    var Qe = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Ye = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var xe = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Fe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var F = 1e7;
    var m = 7;
    var ze = 9007199254740991;
    var ye = re.length - 1;
    var ve = te.length - 1;
    var d = { toStringTag: Re };
    d.absoluteValue = d.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), p(e);
    };
    d.ceil = function() {
      return p(new this.constructor(this), this.e + 1, 2);
    };
    d.clampedTo = d.clamp = function(e, n) {
      var i, r = this, t = r.constructor;
      if (e = new t(e), n = new t(n), !e.s || !n.s)
        return new t(NaN);
      if (e.gt(n))
        throw Error($ + n);
      return i = r.cmp(e), i < 0 ? e : r.cmp(n) > 0 ? n : new t(r);
    };
    d.comparedTo = d.cmp = function(e) {
      var n, i, r, t, s = this, o = s.d, u = (e = new s.constructor(e)).d, l = s.s, f = e.s;
      if (!o || !u)
        return !l || !f ? NaN : l !== f ? l : o === u ? 0 : !o ^ l < 0 ? 1 : -1;
      if (!o[0] || !u[0])
        return o[0] ? l : u[0] ? -f : 0;
      if (l !== f)
        return l;
      if (s.e !== e.e)
        return s.e > e.e ^ l < 0 ? 1 : -1;
      for (r = o.length, t = u.length, n = 0, i = r < t ? r : t; n < i; ++n)
        if (o[n] !== u[n])
          return o[n] > u[n] ^ l < 0 ? 1 : -1;
      return r === t ? 0 : r > t ^ l < 0 ? 1 : -1;
    };
    d.cosine = d.cos = function() {
      var e, n, i = this, r = i.constructor;
      return i.d ? i.d[0] ? (e = r.precision, n = r.rounding, r.precision = e + Math.max(i.e, i.sd()) + m, r.rounding = 1, i = en(r, Be(r, i)), r.precision = e, r.rounding = n, p(Z == 2 || Z == 3 ? i.neg() : i, e, n, true)) : new r(1) : new r(NaN);
    };
    d.cubeRoot = d.cbrt = function() {
      var e, n, i, r, t, s, o, u, l, f, c = this, a = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new a(c);
      for (w = false, s = c.s * M(c.s * c, 1 / 3), !s || Math.abs(s) == 1 / 0 ? (i = O(c.d), e = c.e, (s = (e - i.length + 1) % 3) && (i += s == 1 || s == -2 ? "0" : "00"), s = M(i, 1 / 3), e = A((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), s == 1 / 0 ? i = "5e" + e : (i = s.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), r = new a(i), r.s = c.s) : r = new a(s.toString()), o = (e = a.precision) + 3; ; )
        if (u = r, l = u.times(u).times(u), f = l.plus(c), r = S(f.plus(c).times(u), f.plus(l), o + 2, 1), O(u.d).slice(0, o) === (i = O(r.d)).slice(0, o))
          if (i = i.slice(o - 3, o + 1), i == "9999" || !t && i == "4999") {
            if (!t && (p(u, e + 1, 0), u.times(u).times(u).eq(c))) {
              r = u;
              break;
            }
            o += 4, t = 1;
          } else {
            (!+i || !+i.slice(1) && i.charAt(0) == "5") && (p(r, e + 1, 1), n = !r.times(r).times(r).eq(c));
            break;
          }
      return w = true, p(r, e, a.rounding, n);
    };
    d.decimalPlaces = d.dp = function() {
      var e, n = this.d, i = NaN;
      if (n) {
        if (e = n.length - 1, i = (e - A(this.e / m)) * m, e = n[e], e)
          for (; e % 10 == 0; e /= 10)
            i--;
        i < 0 && (i = 0);
      }
      return i;
    };
    d.dividedBy = d.div = function(e) {
      return S(this, new this.constructor(e));
    };
    d.dividedToIntegerBy = d.divToInt = function(e) {
      var n = this, i = n.constructor;
      return p(S(n, new i(e), 0, 1, 1), i.precision, i.rounding);
    };
    d.equals = d.eq = function(e) {
      return this.cmp(e) === 0;
    };
    d.floor = function() {
      return p(new this.constructor(this), this.e + 1, 3);
    };
    d.greaterThan = d.gt = function(e) {
      return this.cmp(e) > 0;
    };
    d.greaterThanOrEqualTo = d.gte = function(e) {
      var n = this.cmp(e);
      return n == 1 || n === 0;
    };
    d.hyperbolicCosine = d.cosh = function() {
      var e, n, i, r, t, s = this, o = s.constructor, u = new o(1);
      if (!s.isFinite())
        return new o(s.s ? 1 / 0 : NaN);
      if (s.isZero())
        return u;
      i = o.precision, r = o.rounding, o.precision = i + Math.max(s.e, s.sd()) + 4, o.rounding = 1, t = s.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / fe(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), s = J(o, 1, s.times(n), new o(1), true);
      for (var l, f = e, c = new o(8); f--; )
        l = s.times(s), s = u.minus(l.times(c.minus(l.times(c))));
      return p(s, o.precision = i, o.rounding = r, true);
    };
    d.hyperbolicSine = d.sinh = function() {
      var e, n, i, r, t = this, s = t.constructor;
      if (!t.isFinite() || t.isZero())
        return new s(t);
      if (n = s.precision, i = s.rounding, s.precision = n + Math.max(t.e, t.sd()) + 4, s.rounding = 1, r = t.d.length, r < 3)
        t = J(s, 2, t, t, true);
      else {
        e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, t = t.times(1 / fe(5, e)), t = J(s, 2, t, t, true);
        for (var o, u = new s(5), l = new s(16), f = new s(20); e--; )
          o = t.times(t), t = t.times(u.plus(o.times(l.times(o).plus(f))));
      }
      return s.precision = n, s.rounding = i, p(t, n, i, true);
    };
    d.hyperbolicTangent = d.tanh = function() {
      var e, n, i = this, r = i.constructor;
      return i.isFinite() ? i.isZero() ? new r(i) : (e = r.precision, n = r.rounding, r.precision = e + 7, r.rounding = 1, S(i.sinh(), i.cosh(), r.precision = e, r.rounding = n)) : new r(i.s);
    };
    d.inverseCosine = d.acos = function() {
      var e, n = this, i = n.constructor, r = n.abs().cmp(1), t = i.precision, s = i.rounding;
      return r !== -1 ? r === 0 ? n.isNeg() ? R(i, t, s) : new i(0) : new i(NaN) : n.isZero() ? R(i, t + 4, s).times(0.5) : (i.precision = t + 6, i.rounding = 1, n = n.asin(), e = R(i, t + 4, s).times(0.5), i.precision = t, i.rounding = s, e.minus(n));
    };
    d.inverseHyperbolicCosine = d.acosh = function() {
      var e, n, i = this, r = i.constructor;
      return i.lte(1) ? new r(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = r.precision, n = r.rounding, r.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, r.rounding = 1, w = false, i = i.times(i).minus(1).sqrt().plus(i), w = true, r.precision = e, r.rounding = n, i.ln()) : new r(i);
    };
    d.inverseHyperbolicSine = d.asinh = function() {
      var e, n, i = this, r = i.constructor;
      return !i.isFinite() || i.isZero() ? new r(i) : (e = r.precision, n = r.rounding, r.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, r.rounding = 1, w = false, i = i.times(i).plus(1).sqrt().plus(i), w = true, r.precision = e, r.rounding = n, i.ln());
    };
    d.inverseHyperbolicTangent = d.atanh = function() {
      var e, n, i, r, t = this, s = t.constructor;
      return t.isFinite() ? t.e >= 0 ? new s(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = s.precision, n = s.rounding, r = t.sd(), Math.max(r, e) < 2 * -t.e - 1 ? p(new s(t), e, n, true) : (s.precision = i = r - t.e, t = S(t.plus(1), new s(1).minus(t), i + e, 1), s.precision = e + 4, s.rounding = 1, t = t.ln(), s.precision = e, s.rounding = n, t.times(0.5))) : new s(NaN);
    };
    d.inverseSine = d.asin = function() {
      var e, n, i, r, t = this, s = t.constructor;
      return t.isZero() ? new s(t) : (n = t.abs().cmp(1), i = s.precision, r = s.rounding, n !== -1 ? n === 0 ? (e = R(s, i + 4, r).times(0.5), e.s = t.s, e) : new s(NaN) : (s.precision = i + 6, s.rounding = 1, t = t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(), s.precision = i, s.rounding = r, t.times(2)));
    };
    d.inverseTangent = d.atan = function() {
      var e, n, i, r, t, s, o, u, l, f = this, c = f.constructor, a = c.precision, h = c.rounding;
      if (f.isFinite()) {
        if (f.isZero())
          return new c(f);
        if (f.abs().eq(1) && a + 4 <= ve)
          return o = R(c, a + 4, h).times(0.25), o.s = f.s, o;
      } else {
        if (!f.s)
          return new c(NaN);
        if (a + 4 <= ve)
          return o = R(c, a + 4, h).times(0.5), o.s = f.s, o;
      }
      for (c.precision = u = a + 10, c.rounding = 1, i = Math.min(28, u / m + 2 | 0), e = i; e; --e)
        f = f.div(f.times(f).plus(1).sqrt().plus(1));
      for (w = false, n = Math.ceil(u / m), r = 1, l = f.times(f), o = new c(f), t = f; e !== -1; )
        if (t = t.times(l), s = o.minus(t.div(r += 2)), t = t.times(l), o = s.plus(t.div(r += 2)), o.d[n] !== void 0)
          for (e = n; o.d[e] === s.d[e] && e--; )
            ;
      return i && (o = o.times(2 << i - 1)), w = true, p(o, c.precision = a, c.rounding = h, true);
    };
    d.isFinite = function() {
      return !!this.d;
    };
    d.isInteger = d.isInt = function() {
      return !!this.d && A(this.e / m) > this.d.length - 2;
    };
    d.isNaN = function() {
      return !this.s;
    };
    d.isNegative = d.isNeg = function() {
      return this.s < 0;
    };
    d.isPositive = d.isPos = function() {
      return this.s > 0;
    };
    d.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    d.lessThan = d.lt = function(e) {
      return this.cmp(e) < 0;
    };
    d.lessThanOrEqualTo = d.lte = function(e) {
      return this.cmp(e) < 1;
    };
    d.logarithm = d.log = function(e) {
      var n, i, r, t, s, o, u, l, f = this, c = f.constructor, a = c.precision, h = c.rounding, g = 5;
      if (e == null)
        e = new c(10), n = true;
      else {
        if (e = new c(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1))
          return new c(NaN);
        n = e.eq(10);
      }
      if (i = f.d, f.s < 0 || !i || !i[0] || f.eq(1))
        return new c(i && !i[0] ? -1 / 0 : f.s != 1 ? NaN : i ? 0 : 1 / 0);
      if (n)
        if (i.length > 1)
          s = true;
        else {
          for (t = i[0]; t % 10 === 0; )
            t /= 10;
          s = t !== 1;
        }
      if (w = false, u = a + g, o = B(f, u), r = n ? se(c, u + 10) : B(e, u), l = S(o, r, u, 1), Q(l.d, t = a, h))
        do
          if (u += 10, o = B(f, u), r = n ? se(c, u + 10) : B(e, u), l = S(o, r, u, 1), !s) {
            +O(l.d).slice(t + 1, t + 15) + 1 == 1e14 && (l = p(l, a + 1, 0));
            break;
          }
        while (Q(l.d, t += 10, h));
      return w = true, p(l, a, h);
    };
    d.minus = d.sub = function(e) {
      var n, i, r, t, s, o, u, l, f, c, a, h, g = this, v = g.constructor;
      if (e = new v(e), !g.d || !e.d)
        return !g.s || !e.s ? e = new v(NaN) : g.d ? e.s = -e.s : e = new v(e.d || g.s !== e.s ? g : NaN), e;
      if (g.s != e.s)
        return e.s = -e.s, g.plus(e);
      if (f = g.d, h = e.d, u = v.precision, l = v.rounding, !f[0] || !h[0]) {
        if (h[0])
          e.s = -e.s;
        else if (f[0])
          e = new v(g);
        else
          return new v(l === 3 ? -0 : 0);
        return w ? p(e, u, l) : e;
      }
      if (i = A(e.e / m), c = A(g.e / m), f = f.slice(), s = c - i, s) {
        for (a = s < 0, a ? (n = f, s = -s, o = h.length) : (n = h, i = c, o = f.length), r = Math.max(Math.ceil(u / m), o) + 2, s > r && (s = r, n.length = 1), n.reverse(), r = s; r--; )
          n.push(0);
        n.reverse();
      } else {
        for (r = f.length, o = h.length, a = r < o, a && (o = r), r = 0; r < o; r++)
          if (f[r] != h[r]) {
            a = f[r] < h[r];
            break;
          }
        s = 0;
      }
      for (a && (n = f, f = h, h = n, e.s = -e.s), o = f.length, r = h.length - o; r > 0; --r)
        f[o++] = 0;
      for (r = h.length; r > s; ) {
        if (f[--r] < h[r]) {
          for (t = r; t && f[--t] === 0; )
            f[t] = F - 1;
          --f[t], f[r] += F;
        }
        f[r] -= h[r];
      }
      for (; f[--o] === 0; )
        f.pop();
      for (; f[0] === 0; f.shift())
        --i;
      return f[0] ? (e.d = f, e.e = ue(f, i), w ? p(e, u, l) : e) : new v(l === 3 ? -0 : 0);
    };
    d.modulo = d.mod = function(e) {
      var n, i = this, r = i.constructor;
      return e = new r(e), !i.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || i.d && !i.d[0] ? p(new r(i), r.precision, r.rounding) : (w = false, r.modulo == 9 ? (n = S(i, e.abs(), 0, 3, 1), n.s *= e.s) : n = S(i, e, 0, r.modulo, 1), n = n.times(e), w = true, i.minus(n));
    };
    d.naturalExponential = d.exp = function() {
      return Ee(this);
    };
    d.naturalLogarithm = d.ln = function() {
      return B(this);
    };
    d.negated = d.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, p(e);
    };
    d.plus = d.add = function(e) {
      var n, i, r, t, s, o, u, l, f, c, a = this, h = a.constructor;
      if (e = new h(e), !a.d || !e.d)
        return !a.s || !e.s ? e = new h(NaN) : a.d || (e = new h(e.d || a.s === e.s ? a : NaN)), e;
      if (a.s != e.s)
        return e.s = -e.s, a.minus(e);
      if (f = a.d, c = e.d, u = h.precision, l = h.rounding, !f[0] || !c[0])
        return c[0] || (e = new h(a)), w ? p(e, u, l) : e;
      if (s = A(a.e / m), r = A(e.e / m), f = f.slice(), t = s - r, t) {
        for (t < 0 ? (i = f, t = -t, o = c.length) : (i = c, r = s, o = f.length), s = Math.ceil(u / m), o = s > o ? s + 1 : o + 1, t > o && (t = o, i.length = 1), i.reverse(); t--; )
          i.push(0);
        i.reverse();
      }
      for (o = f.length, t = c.length, o - t < 0 && (t = o, i = c, c = f, f = i), n = 0; t; )
        n = (f[--t] = f[t] + c[t] + n) / F | 0, f[t] %= F;
      for (n && (f.unshift(n), ++r), o = f.length; f[--o] == 0; )
        f.pop();
      return e.d = f, e.e = ue(f, r), w ? p(e, u, l) : e;
    };
    d.precision = d.sd = function(e) {
      var n, i = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error($ + e);
      return i.d ? (n = Ie(i.d), e && i.e + 1 > n && (n = i.e + 1)) : n = NaN, n;
    };
    d.round = function() {
      var e = this, n = e.constructor;
      return p(new n(e), e.e + 1, n.rounding);
    };
    d.sine = d.sin = function() {
      var e, n, i = this, r = i.constructor;
      return i.isFinite() ? i.isZero() ? new r(i) : (e = r.precision, n = r.rounding, r.precision = e + Math.max(i.e, i.sd()) + m, r.rounding = 1, i = rn(r, Be(r, i)), r.precision = e, r.rounding = n, p(Z > 2 ? i.neg() : i, e, n, true)) : new r(NaN);
    };
    d.squareRoot = d.sqrt = function() {
      var e, n, i, r, t, s, o = this, u = o.d, l = o.e, f = o.s, c = o.constructor;
      if (f !== 1 || !u || !u[0])
        return new c(!f || f < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
      for (w = false, f = Math.sqrt(+o), f == 0 || f == 1 / 0 ? (n = O(u), (n.length + l) % 2 == 0 && (n += "0"), f = Math.sqrt(n), l = A((l + 1) / 2) - (l < 0 || l % 2), f == 1 / 0 ? n = "5e" + l : (n = f.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + l), r = new c(n)) : r = new c(f.toString()), i = (l = c.precision) + 3; ; )
        if (s = r, r = s.plus(S(o, s, i + 2, 1)).times(0.5), O(s.d).slice(0, i) === (n = O(r.d)).slice(0, i))
          if (n = n.slice(i - 3, i + 1), n == "9999" || !t && n == "4999") {
            if (!t && (p(s, l + 1, 0), s.times(s).eq(o))) {
              r = s;
              break;
            }
            i += 4, t = 1;
          } else {
            (!+n || !+n.slice(1) && n.charAt(0) == "5") && (p(r, l + 1, 1), e = !r.times(r).eq(o));
            break;
          }
      return w = true, p(r, l, c.rounding, e);
    };
    d.tangent = d.tan = function() {
      var e, n, i = this, r = i.constructor;
      return i.isFinite() ? i.isZero() ? new r(i) : (e = r.precision, n = r.rounding, r.precision = e + 10, r.rounding = 1, i = i.sin(), i.s = 1, i = S(i, new r(1).minus(i.times(i)).sqrt(), e + 10, 0), r.precision = e, r.rounding = n, p(Z == 2 || Z == 4 ? i.neg() : i, e, n, true)) : new r(NaN);
    };
    d.times = d.mul = function(e) {
      var n, i, r, t, s, o, u, l, f, c = this, a = c.constructor, h = c.d, g = (e = new a(e)).d;
      if (e.s *= c.s, !h || !h[0] || !g || !g[0])
        return new a(!e.s || h && !h[0] && !g || g && !g[0] && !h ? NaN : !h || !g ? e.s / 0 : e.s * 0);
      for (i = A(c.e / m) + A(e.e / m), l = h.length, f = g.length, l < f && (s = h, h = g, g = s, o = l, l = f, f = o), s = [], o = l + f, r = o; r--; )
        s.push(0);
      for (r = f; --r >= 0; ) {
        for (n = 0, t = l + r; t > r; )
          u = s[t] + g[r] * h[t - r - 1] + n, s[t--] = u % F | 0, n = u / F | 0;
        s[t] = (s[t] + n) % F | 0;
      }
      for (; !s[--o]; )
        s.pop();
      return n ? ++i : s.shift(), e.d = s, e.e = ue(s, i), w ? p(e, a.precision, a.rounding) : e;
    };
    d.toBinary = function(e, n) {
      return ke(this, 2, e, n);
    };
    d.toDecimalPlaces = d.toDP = function(e, n) {
      var i = this, r = i.constructor;
      return i = new r(i), e === void 0 ? i : (q(e, 0, V), n === void 0 ? n = r.rounding : q(n, 0, 8), p(i, e + i.e + 1, n));
    };
    d.toExponential = function(e, n) {
      var i, r = this, t = r.constructor;
      return e === void 0 ? i = I(r, true) : (q(e, 0, V), n === void 0 ? n = t.rounding : q(n, 0, 8), r = p(new t(r), e + 1, n), i = I(r, true, e + 1)), r.isNeg() && !r.isZero() ? "-" + i : i;
    };
    d.toFixed = function(e, n) {
      var i, r, t = this, s = t.constructor;
      return e === void 0 ? i = I(t) : (q(e, 0, V), n === void 0 ? n = s.rounding : q(n, 0, 8), r = p(new s(t), e + t.e + 1, n), i = I(r, false, e + r.e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i;
    };
    d.toFraction = function(e) {
      var n, i, r, t, s, o, u, l, f, c, a, h, g = this, v = g.d, N = g.constructor;
      if (!v)
        return new N(g);
      if (f = i = new N(1), r = l = new N(0), n = new N(r), s = n.e = Ie(v) - g.e - 1, o = s % m, n.d[0] = M(10, o < 0 ? m + o : o), e == null)
        e = s > 0 ? n : f;
      else {
        if (u = new N(e), !u.isInt() || u.lt(f))
          throw Error($ + u);
        e = u.gt(n) ? s > 0 ? n : f : u;
      }
      for (w = false, u = new N(O(v)), c = N.precision, N.precision = s = v.length * m * 2; a = S(u, n, 0, 1, 1), t = i.plus(a.times(r)), t.cmp(e) != 1; )
        i = r, r = t, t = f, f = l.plus(a.times(t)), l = t, t = n, n = u.minus(a.times(t)), u = t;
      return t = S(e.minus(i), r, 0, 1, 1), l = l.plus(t.times(f)), i = i.plus(t.times(r)), l.s = f.s = g.s, h = S(f, r, s, 1).minus(g).abs().cmp(S(l, i, s, 1).minus(g).abs()) < 1 ? [f, r] : [l, i], N.precision = c, w = true, h;
    };
    d.toHexadecimal = d.toHex = function(e, n) {
      return ke(this, 16, e, n);
    };
    d.toNearest = function(e, n) {
      var i = this, r = i.constructor;
      if (i = new r(i), e == null) {
        if (!i.d)
          return i;
        e = new r(1), n = r.rounding;
      } else {
        if (e = new r(e), n === void 0 ? n = r.rounding : q(n, 0, 8), !i.d)
          return e.s ? i : e;
        if (!e.d)
          return e.s && (e.s = i.s), e;
      }
      return e.d[0] ? (w = false, i = S(i, e, 0, n, 1).times(e), w = true, p(i)) : (e.s = i.s, i = e), i;
    };
    d.toNumber = function() {
      return +this;
    };
    d.toOctal = function(e, n) {
      return ke(this, 8, e, n);
    };
    d.toPower = d.pow = function(e) {
      var n, i, r, t, s, o, u = this, l = u.constructor, f = +(e = new l(e));
      if (!u.d || !e.d || !u.d[0] || !e.d[0])
        return new l(M(+u, f));
      if (u = new l(u), u.eq(1))
        return u;
      if (r = l.precision, s = l.rounding, e.eq(1))
        return p(u, r, s);
      if (n = A(e.e / m), n >= e.d.length - 1 && (i = f < 0 ? -f : f) <= ze)
        return t = De(l, u, i, r), e.s < 0 ? new l(1).div(t) : p(t, r, s);
      if (o = u.s, o < 0) {
        if (n < e.d.length - 1)
          return new l(NaN);
        if (e.d[n] & 1 || (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1)
          return u.s = o, u;
      }
      return i = M(+u, f), n = i == 0 || !isFinite(i) ? A(f * (Math.log("0." + O(u.d)) / Math.LN10 + u.e + 1)) : new l(i + "").e, n > l.maxE + 1 || n < l.minE - 1 ? new l(n > 0 ? o / 0 : 0) : (w = false, l.rounding = u.s = 1, i = Math.min(12, (n + "").length), t = Ee(e.times(B(u, r + i)), r), t.d && (t = p(t, r + 5, 1), Q(t.d, r, s) && (n = r + 10, t = p(Ee(e.times(B(u, n + i)), n), n + 5, 1), +O(t.d).slice(r + 1, r + 15) + 1 == 1e14 && (t = p(t, r + 1, 0)))), t.s = o, w = true, l.rounding = s, p(t, r, s));
    };
    d.toPrecision = function(e, n) {
      var i, r = this, t = r.constructor;
      return e === void 0 ? i = I(r, r.e <= t.toExpNeg || r.e >= t.toExpPos) : (q(e, 1, V), n === void 0 ? n = t.rounding : q(n, 0, 8), r = p(new t(r), e, n), i = I(r, e <= r.e || r.e <= t.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + i : i;
    };
    d.toSignificantDigits = d.toSD = function(e, n) {
      var i = this, r = i.constructor;
      return e === void 0 ? (e = r.precision, n = r.rounding) : (q(e, 1, V), n === void 0 ? n = r.rounding : q(n, 0, 8)), p(new r(i), e, n);
    };
    d.toString = function() {
      var e = this, n = e.constructor, i = I(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + i : i;
    };
    d.truncated = d.trunc = function() {
      return p(new this.constructor(this), this.e + 1, 1);
    };
    d.valueOf = d.toJSON = function() {
      var e = this, n = e.constructor, i = I(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
      return e.isNeg() ? "-" + i : i;
    };
    function O(e) {
      var n, i, r, t = e.length - 1, s = "", o = e[0];
      if (t > 0) {
        for (s += o, n = 1; n < t; n++)
          r = e[n] + "", i = m - r.length, i && (s += U(i)), s += r;
        o = e[n], r = o + "", i = m - r.length, i && (s += U(i));
      } else if (o === 0)
        return "0";
      for (; o % 10 === 0; )
        o /= 10;
      return s + o;
    }
    function q(e, n, i) {
      if (e !== ~~e || e < n || e > i)
        throw Error($ + e);
    }
    function Q(e, n, i, r) {
      var t, s, o, u;
      for (s = e[0]; s >= 10; s /= 10)
        --n;
      return --n < 0 ? (n += m, t = 0) : (t = Math.ceil((n + 1) / m), n %= m), s = M(10, m - n), u = e[t] % s | 0, r == null ? n < 3 ? (n == 0 ? u = u / 100 | 0 : n == 1 && (u = u / 10 | 0), o = i < 4 && u == 99999 || i > 3 && u == 49999 || u == 5e4 || u == 0) : o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (e[t + 1] / s / 100 | 0) == M(10, n - 2) - 1 || (u == s / 2 || u == 0) && (e[t + 1] / s / 100 | 0) == 0 : n < 4 ? (n == 0 ? u = u / 1e3 | 0 : n == 1 ? u = u / 100 | 0 : n == 2 && (u = u / 10 | 0), o = (r || i < 4) && u == 9999 || !r && i > 3 && u == 4999) : o = ((r || i < 4) && u + 1 == s || !r && i > 3 && u + 1 == s / 2) && (e[t + 1] / s / 1e3 | 0) == M(10, n - 3) - 1, o;
    }
    function ie(e, n, i) {
      for (var r, t = [0], s, o = 0, u = e.length; o < u; ) {
        for (s = t.length; s--; )
          t[s] *= n;
        for (t[0] += we.indexOf(e.charAt(o++)), r = 0; r < t.length; r++)
          t[r] > i - 1 && (t[r + 1] === void 0 && (t[r + 1] = 0), t[r + 1] += t[r] / i | 0, t[r] %= i);
      }
      return t.reverse();
    }
    function en(e, n) {
      var i, r, t;
      if (n.isZero())
        return n;
      r = n.d.length, r < 32 ? (i = Math.ceil(r / 3), t = (1 / fe(4, i)).toString()) : (i = 16, t = "2.3283064365386962890625e-10"), e.precision += i, n = J(e, 1, n.times(t), new e(1));
      for (var s = i; s--; ) {
        var o = n.times(n);
        n = o.times(o).minus(o).times(8).plus(1);
      }
      return e.precision -= i, n;
    }
    var S = function() {
      function e(r, t, s) {
        var o, u = 0, l = r.length;
        for (r = r.slice(); l--; )
          o = r[l] * t + u, r[l] = o % s | 0, u = o / s | 0;
        return u && r.unshift(u), r;
      }
      function n(r, t, s, o) {
        var u, l;
        if (s != o)
          l = s > o ? 1 : -1;
        else
          for (u = l = 0; u < s; u++)
            if (r[u] != t[u]) {
              l = r[u] > t[u] ? 1 : -1;
              break;
            }
        return l;
      }
      function i(r, t, s, o) {
        for (var u = 0; s--; )
          r[s] -= u, u = r[s] < t[s] ? 1 : 0, r[s] = u * o + r[s] - t[s];
        for (; !r[0] && r.length > 1; )
          r.shift();
      }
      return function(r, t, s, o, u, l) {
        var f, c, a, h, g, v, N, _, C, T, E, P, x, D, le, z, W, ce, L, y, ee = r.constructor, ae = r.s == t.s ? 1 : -1, b = r.d, k = t.d;
        if (!b || !b[0] || !k || !k[0])
          return new ee(!r.s || !t.s || (b ? k && b[0] == k[0] : !k) ? NaN : b && b[0] == 0 || !k ? ae * 0 : ae / 0);
        for (l ? (g = 1, c = r.e - t.e) : (l = F, g = m, c = A(r.e / g) - A(t.e / g)), L = k.length, W = b.length, C = new ee(ae), T = C.d = [], a = 0; k[a] == (b[a] || 0); a++)
          ;
        if (k[a] > (b[a] || 0) && c--, s == null ? (D = s = ee.precision, o = ee.rounding) : u ? D = s + (r.e - t.e) + 1 : D = s, D < 0)
          T.push(1), v = true;
        else {
          if (D = D / g + 2 | 0, a = 0, L == 1) {
            for (h = 0, k = k[0], D++; (a < W || h) && D--; a++)
              le = h * l + (b[a] || 0), T[a] = le / k | 0, h = le % k | 0;
            v = h || a < W;
          } else {
            for (h = l / (k[0] + 1) | 0, h > 1 && (k = e(k, h, l), b = e(b, h, l), L = k.length, W = b.length), z = L, E = b.slice(0, L), P = E.length; P < L; )
              E[P++] = 0;
            y = k.slice(), y.unshift(0), ce = k[0], k[1] >= l / 2 && ++ce;
            do
              h = 0, f = n(k, E, L, P), f < 0 ? (x = E[0], L != P && (x = x * l + (E[1] || 0)), h = x / ce | 0, h > 1 ? (h >= l && (h = l - 1), N = e(k, h, l), _ = N.length, P = E.length, f = n(N, E, _, P), f == 1 && (h--, i(N, L < _ ? y : k, _, l))) : (h == 0 && (f = h = 1), N = k.slice()), _ = N.length, _ < P && N.unshift(0), i(E, N, P, l), f == -1 && (P = E.length, f = n(k, E, L, P), f < 1 && (h++, i(E, L < P ? y : k, P, l))), P = E.length) : f === 0 && (h++, E = [0]), T[a++] = h, f && E[0] ? E[P++] = b[z] || 0 : (E = [b[z]], P = 1);
            while ((z++ < W || E[0] !== void 0) && D--);
            v = E[0] !== void 0;
          }
          T[0] || T.shift();
        }
        if (g == 1)
          C.e = c, qe = v;
        else {
          for (a = 1, h = T[0]; h >= 10; h /= 10)
            a++;
          C.e = a + c * g - 1, p(C, u ? s + C.e + 1 : s, o, v);
        }
        return C;
      };
    }();
    function p(e, n, i, r) {
      var t, s, o, u, l, f, c, a, h, g = e.constructor;
      e:
        if (n != null) {
          if (a = e.d, !a)
            return e;
          for (t = 1, u = a[0]; u >= 10; u /= 10)
            t++;
          if (s = n - t, s < 0)
            s += m, o = n, c = a[h = 0], l = c / M(10, t - o - 1) % 10 | 0;
          else if (h = Math.ceil((s + 1) / m), u = a.length, h >= u)
            if (r) {
              for (; u++ <= h; )
                a.push(0);
              c = l = 0, t = 1, s %= m, o = s - m + 1;
            } else
              break e;
          else {
            for (c = u = a[h], t = 1; u >= 10; u /= 10)
              t++;
            s %= m, o = s - m + t, l = o < 0 ? 0 : c / M(10, t - o - 1) % 10 | 0;
          }
          if (r = r || n < 0 || a[h + 1] !== void 0 || (o < 0 ? c : c % M(10, t - o - 1)), f = i < 4 ? (l || r) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (i == 4 || r || i == 6 && (s > 0 ? o > 0 ? c / M(10, t - o) : 0 : a[h - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), n < 1 || !a[0])
            return a.length = 0, f ? (n -= e.e + 1, a[0] = M(10, (m - n % m) % m), e.e = -n || 0) : a[0] = e.e = 0, e;
          if (s == 0 ? (a.length = h, u = 1, h--) : (a.length = h + 1, u = M(10, m - s), a[h] = o > 0 ? (c / M(10, t - o) % M(10, o) | 0) * u : 0), f)
            for (; ; )
              if (h == 0) {
                for (s = 1, o = a[0]; o >= 10; o /= 10)
                  s++;
                for (o = a[0] += u, u = 1; o >= 10; o /= 10)
                  u++;
                s != u && (e.e++, a[0] == F && (a[0] = 1));
                break;
              } else {
                if (a[h] += u, a[h] != F)
                  break;
                a[h--] = 0, u = 1;
              }
          for (s = a.length; a[--s] === 0; )
            a.pop();
        }
      return w && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }
    function I(e, n, i) {
      if (!e.isFinite())
        return Ue(e);
      var r, t = e.e, s = O(e.d), o = s.length;
      return n ? (i && (r = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + U(r) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (s = "0." + U(-t - 1) + s, i && (r = i - o) > 0 && (s += U(r))) : t >= o ? (s += U(t + 1 - o), i && (r = i - t - 1) > 0 && (s = s + "." + U(r))) : ((r = t + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)), i && (r = i - o) > 0 && (t + 1 === o && (s += "."), s += U(r))), s;
    }
    function ue(e, n) {
      var i = e[0];
      for (n *= m; i >= 10; i /= 10)
        n++;
      return n;
    }
    function se(e, n, i) {
      if (n > ye)
        throw w = true, i && (e.precision = i), Error(Te);
      return p(new e(re), n, 1, true);
    }
    function R(e, n, i) {
      if (n > ve)
        throw Error(Te);
      return p(new e(te), n, i, true);
    }
    function Ie(e) {
      var n = e.length - 1, i = n * m + 1;
      if (n = e[n], n) {
        for (; n % 10 == 0; n /= 10)
          i--;
        for (n = e[0]; n >= 10; n /= 10)
          i++;
      }
      return i;
    }
    function U(e) {
      for (var n = ""; e--; )
        n += "0";
      return n;
    }
    function De(e, n, i, r) {
      var t, s = new e(1), o = Math.ceil(r / m + 4);
      for (w = false; ; ) {
        if (i % 2 && (s = s.times(n), Ae(s.d, o) && (t = true)), i = A(i / 2), i === 0) {
          i = s.d.length - 1, t && s.d[i] === 0 && ++s.d[i];
          break;
        }
        n = n.times(n), Ae(n.d, o);
      }
      return w = true, s;
    }
    function be(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Ze(e, n, i) {
      for (var r, t = new e(n[0]), s = 0; ++s < n.length; )
        if (r = new e(n[s]), r.s)
          t[i](r) && (t = r);
        else {
          t = r;
          break;
        }
      return t;
    }
    function Ee(e, n) {
      var i, r, t, s, o, u, l, f = 0, c = 0, a = 0, h = e.constructor, g = h.rounding, v = h.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (n == null ? (w = false, l = v) : l = n, u = new h(0.03125); e.e > -2; )
        e = e.times(u), a += 5;
      for (r = Math.log(M(2, a)) / Math.LN10 * 2 + 5 | 0, l += r, i = s = o = new h(1), h.precision = l; ; ) {
        if (s = p(s.times(e), l, 1), i = i.times(++c), u = o.plus(S(s, i, l, 1)), O(u.d).slice(0, l) === O(o.d).slice(0, l)) {
          for (t = a; t--; )
            o = p(o.times(o), l, 1);
          if (n == null)
            if (f < 3 && Q(o.d, l - r, g, f))
              h.precision = l += 10, i = s = u = new h(1), c = 0, f++;
            else
              return p(o, h.precision = v, g, w = true);
          else
            return h.precision = v, o;
        }
        o = u;
      }
    }
    function B(e, n) {
      var i, r, t, s, o, u, l, f, c, a, h, g = 1, v = 10, N = e, _ = N.d, C = N.constructor, T = C.rounding, E = C.precision;
      if (N.s < 0 || !_ || !_[0] || !N.e && _[0] == 1 && _.length == 1)
        return new C(_ && !_[0] ? -1 / 0 : N.s != 1 ? NaN : _ ? 0 : N);
      if (n == null ? (w = false, c = E) : c = n, C.precision = c += v, i = O(_), r = i.charAt(0), Math.abs(s = N.e) < 15e14) {
        for (; r < 7 && r != 1 || r == 1 && i.charAt(1) > 3; )
          N = N.times(e), i = O(N.d), r = i.charAt(0), g++;
        s = N.e, r > 1 ? (N = new C("0." + i), s++) : N = new C(r + "." + i.slice(1));
      } else
        return f = se(C, c + 2, E).times(s + ""), N = B(new C(r + "." + i.slice(1)), c - v).plus(f), C.precision = E, n == null ? p(N, E, T, w = true) : N;
      for (a = N, l = o = N = S(N.minus(1), N.plus(1), c, 1), h = p(N.times(N), c, 1), t = 3; ; ) {
        if (o = p(o.times(h), c, 1), f = l.plus(S(o, new C(t), c, 1)), O(f.d).slice(0, c) === O(l.d).slice(0, c))
          if (l = l.times(2), s !== 0 && (l = l.plus(se(C, c + 2, E).times(s + ""))), l = S(l, new C(g), c, 1), n == null)
            if (Q(l.d, c - v, T, u))
              C.precision = c += v, f = o = N = S(a.minus(1), a.plus(1), c, 1), h = p(N.times(N), c, 1), t = u = 1;
            else
              return p(l, C.precision = E, T, w = true);
          else
            return C.precision = E, l;
        l = f, t += 2;
      }
    }
    function Ue(e) {
      return String(e.s * e.s / 0);
    }
    function Se(e, n) {
      var i, r, t;
      for ((i = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (r = n.search(/e/i)) > 0 ? (i < 0 && (i = r), i += +n.slice(r + 1), n = n.substring(0, r)) : i < 0 && (i = n.length), r = 0; n.charCodeAt(r) === 48; r++)
        ;
      for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
        ;
      if (n = n.slice(r, t), n) {
        if (t -= r, e.e = i = i - r - 1, e.d = [], r = (i + 1) % m, i < 0 && (r += m), r < t) {
          for (r && e.d.push(+n.slice(0, r)), t -= m; r < t; )
            e.d.push(+n.slice(r, r += m));
          n = n.slice(r), r = m - n.length;
        } else
          r -= t;
        for (; r--; )
          n += "0";
        e.d.push(+n), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function nn(e, n) {
      var i, r, t, s, o, u, l, f, c;
      if (n.indexOf("_") > -1) {
        if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Fe.test(n))
          return Se(e, n);
      } else if (n === "Infinity" || n === "NaN")
        return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Ye.test(n))
        i = 16, n = n.toLowerCase();
      else if (Qe.test(n))
        i = 2;
      else if (xe.test(n))
        i = 8;
      else
        throw Error($ + n);
      for (s = n.search(/p/i), s > 0 ? (l = +n.slice(s + 1), n = n.substring(2, s)) : n = n.slice(2), s = n.indexOf("."), o = s >= 0, r = e.constructor, o && (n = n.replace(".", ""), u = n.length, s = u - s, t = De(r, new r(i), s, s * 2)), f = ie(n, i, F), c = f.length - 1, s = c; f[s] === 0; --s)
        f.pop();
      return s < 0 ? new r(e.s * 0) : (e.e = ue(f, c), e.d = f, w = false, o && (e = S(e, t, u * 4)), l && (e = e.times(Math.abs(l) < 54 ? M(2, l) : Y.pow(2, l))), w = true, e);
    }
    function rn(e, n) {
      var i, r = n.d.length;
      if (r < 3)
        return n.isZero() ? n : J(e, 2, n, n);
      i = 1.4 * Math.sqrt(r), i = i > 16 ? 16 : i | 0, n = n.times(1 / fe(5, i)), n = J(e, 2, n, n);
      for (var t, s = new e(5), o = new e(16), u = new e(20); i--; )
        t = n.times(n), n = n.times(s.plus(t.times(o.times(t).minus(u))));
      return n;
    }
    function J(e, n, i, r, t) {
      var s, o, u, l, f = 1, c = e.precision, a = Math.ceil(c / m);
      for (w = false, l = i.times(i), u = new e(r); ; ) {
        if (o = S(u.times(l), new e(n++ * n++), c, 1), u = t ? r.plus(o) : r.minus(o), r = S(o.times(l), new e(n++ * n++), c, 1), o = u.plus(r), o.d[a] !== void 0) {
          for (s = a; o.d[s] === u.d[s] && s--; )
            ;
          if (s == -1)
            break;
        }
        s = u, u = r, r = o, o = s, f++;
      }
      return w = true, o.d.length = a + 1, o;
    }
    function fe(e, n) {
      for (var i = e; --n; )
        i *= e;
      return i;
    }
    function Be(e, n) {
      var i, r = n.s < 0, t = R(e, e.precision, 1), s = t.times(0.5);
      if (n = n.abs(), n.lte(s))
        return Z = r ? 4 : 1, n;
      if (i = n.divToInt(t), i.isZero())
        Z = r ? 3 : 2;
      else {
        if (n = n.minus(i.times(t)), n.lte(s))
          return Z = be(i) ? r ? 2 : 3 : r ? 4 : 1, n;
        Z = be(i) ? r ? 1 : 4 : r ? 3 : 2;
      }
      return n.minus(t).abs();
    }
    function ke(e, n, i, r) {
      var t, s, o, u, l, f, c, a, h, g = e.constructor, v = i !== void 0;
      if (v ? (q(i, 1, V), r === void 0 ? r = g.rounding : q(r, 0, 8)) : (i = g.precision, r = g.rounding), !e.isFinite())
        c = Ue(e);
      else {
        for (c = I(e), o = c.indexOf("."), v ? (t = 2, n == 16 ? i = i * 4 - 3 : n == 8 && (i = i * 3 - 2)) : t = n, o >= 0 && (c = c.replace(".", ""), h = new g(1), h.e = c.length - o, h.d = ie(I(h), 10, t), h.e = h.d.length), a = ie(c, 10, t), s = l = a.length; a[--l] == 0; )
          a.pop();
        if (!a[0])
          c = v ? "0p+0" : "0";
        else {
          if (o < 0 ? s-- : (e = new g(e), e.d = a, e.e = s, e = S(e, h, i, r, 0, t), a = e.d, s = e.e, f = qe), o = a[i], u = t / 2, f = f || a[i + 1] !== void 0, f = r < 4 ? (o !== void 0 || f) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > u || o === u && (r === 4 || f || r === 6 && a[i - 1] & 1 || r === (e.s < 0 ? 8 : 7)), a.length = i, f)
            for (; ++a[--i] > t - 1; )
              a[i] = 0, i || (++s, a.unshift(1));
          for (l = a.length; !a[l - 1]; --l)
            ;
          for (o = 0, c = ""; o < l; o++)
            c += we.charAt(a[o]);
          if (v) {
            if (l > 1)
              if (n == 16 || n == 8) {
                for (o = n == 16 ? 4 : 3, --l; l % o; l++)
                  c += "0";
                for (a = ie(c, t, n), l = a.length; !a[l - 1]; --l)
                  ;
                for (o = 1, c = "1."; o < l; o++)
                  c += we.charAt(a[o]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (s < 0 ? "p" : "p+") + s;
          } else if (s < 0) {
            for (; ++s; )
              c = "0" + c;
            c = "0." + c;
          } else if (++s > l)
            for (s -= l; s--; )
              c += "0";
          else
            s < l && (c = c.slice(0, s) + "." + c.slice(s));
        }
        c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function Ae(e, n) {
      if (e.length > n)
        return e.length = n, true;
    }
    function tn(e) {
      return new this(e).abs();
    }
    function sn(e) {
      return new this(e).acos();
    }
    function on(e) {
      return new this(e).acosh();
    }
    function un(e, n) {
      return new this(e).plus(n);
    }
    function fn(e) {
      return new this(e).asin();
    }
    function ln(e) {
      return new this(e).asinh();
    }
    function cn(e) {
      return new this(e).atan();
    }
    function an(e) {
      return new this(e).atanh();
    }
    function hn(e, n) {
      e = new this(e), n = new this(n);
      var i, r = this.precision, t = this.rounding, s = r + 4;
      return !e.s || !n.s ? i = new this(NaN) : !e.d && !n.d ? (i = R(this, s, 1).times(n.s > 0 ? 0.25 : 0.75), i.s = e.s) : !n.d || e.isZero() ? (i = n.s < 0 ? R(this, r, t) : new this(0), i.s = e.s) : !e.d || n.isZero() ? (i = R(this, s, 1).times(0.5), i.s = e.s) : n.s < 0 ? (this.precision = s, this.rounding = 1, i = this.atan(S(e, n, s, 1)), n = R(this, s, 1), this.precision = r, this.rounding = t, i = e.s < 0 ? i.minus(n) : i.plus(n)) : i = this.atan(S(e, n, s, 1)), i;
    }
    function dn(e) {
      return new this(e).cbrt();
    }
    function pn(e) {
      return p(e = new this(e), e.e + 1, 2);
    }
    function gn(e, n, i) {
      return new this(e).clamp(n, i);
    }
    function mn(e) {
      if (!e || typeof e != "object")
        throw Error(oe + "Object expected");
      var n, i, r, t = e.defaults === true, s = ["precision", 1, V, "rounding", 0, 8, "toExpNeg", -H, 0, "toExpPos", 0, H, "maxE", 0, H, "minE", -H, 0, "modulo", 0, 9];
      for (n = 0; n < s.length; n += 3)
        if (i = s[n], t && (this[i] = Ne[i]), (r = e[i]) !== void 0)
          if (A(r) === r && r >= s[n + 1] && r <= s[n + 2])
            this[i] = r;
          else
            throw Error($ + i + ": " + r);
      if (i = "crypto", t && (this[i] = Ne[i]), (r = e[i]) !== void 0)
        if (r === true || r === false || r === 0 || r === 1)
          if (r)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[i] = true;
            else
              throw Error(Le);
          else
            this[i] = false;
        else
          throw Error($ + i + ": " + r);
      return this;
    }
    function wn(e) {
      return new this(e).cos();
    }
    function Nn(e) {
      return new this(e).cosh();
    }
    function $e(e) {
      var n, i, r;
      function t(s) {
        var o, u, l, f = this;
        if (!(f instanceof t))
          return new t(s);
        if (f.constructor = t, _e(s)) {
          f.s = s.s, w ? !s.d || s.e > t.maxE ? (f.e = NaN, f.d = null) : s.e < t.minE ? (f.e = 0, f.d = [0]) : (f.e = s.e, f.d = s.d.slice()) : (f.e = s.e, f.d = s.d ? s.d.slice() : s.d);
          return;
        }
        if (l = typeof s, l === "number") {
          if (s === 0) {
            f.s = 1 / s < 0 ? -1 : 1, f.e = 0, f.d = [0];
            return;
          }
          if (s < 0 ? (s = -s, f.s = -1) : f.s = 1, s === ~~s && s < 1e7) {
            for (o = 0, u = s; u >= 10; u /= 10)
              o++;
            w ? o > t.maxE ? (f.e = NaN, f.d = null) : o < t.minE ? (f.e = 0, f.d = [0]) : (f.e = o, f.d = [s]) : (f.e = o, f.d = [s]);
            return;
          } else if (s * 0 !== 0) {
            s || (f.s = NaN), f.e = NaN, f.d = null;
            return;
          }
          return Se(f, s.toString());
        } else if (l !== "string")
          throw Error($ + s);
        return (u = s.charCodeAt(0)) === 45 ? (s = s.slice(1), f.s = -1) : (u === 43 && (s = s.slice(1)), f.s = 1), Fe.test(s) ? Se(f, s) : nn(f, s);
      }
      if (t.prototype = d, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = mn, t.clone = $e, t.isDecimal = _e, t.abs = tn, t.acos = sn, t.acosh = on, t.add = un, t.asin = fn, t.asinh = ln, t.atan = cn, t.atanh = an, t.atan2 = hn, t.cbrt = dn, t.ceil = pn, t.clamp = gn, t.cos = wn, t.cosh = Nn, t.div = vn, t.exp = En, t.floor = Sn, t.hypot = kn, t.ln = Cn, t.log = Mn, t.log10 = Pn, t.log2 = On, t.max = bn, t.min = An, t.mod = _n, t.mul = qn, t.pow = Tn, t.random = Ln, t.round = Rn, t.sign = Fn, t.sin = In, t.sinh = Dn, t.sqrt = Zn, t.sub = Un, t.sum = Bn, t.tan = $n, t.tanh = Vn, t.trunc = Hn, e === void 0 && (e = {}), e && e.defaults !== true)
        for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < r.length; )
          e.hasOwnProperty(i = r[n++]) || (e[i] = this[i]);
      return t.config(e), t;
    }
    function vn(e, n) {
      return new this(e).div(n);
    }
    function En(e) {
      return new this(e).exp();
    }
    function Sn(e) {
      return p(e = new this(e), e.e + 1, 3);
    }
    function kn() {
      var e, n, i = new this(0);
      for (w = false, e = 0; e < arguments.length; )
        if (n = new this(arguments[e++]), n.d)
          i.d && (i = i.plus(n.times(n)));
        else {
          if (n.s)
            return w = true, new this(1 / 0);
          i = n;
        }
      return w = true, i.sqrt();
    }
    function _e(e) {
      return e instanceof Y || e && e.toStringTag === Re || false;
    }
    function Cn(e) {
      return new this(e).ln();
    }
    function Mn(e, n) {
      return new this(e).log(n);
    }
    function On(e) {
      return new this(e).log(2);
    }
    function Pn(e) {
      return new this(e).log(10);
    }
    function bn() {
      return Ze(this, arguments, "lt");
    }
    function An() {
      return Ze(this, arguments, "gt");
    }
    function _n(e, n) {
      return new this(e).mod(n);
    }
    function qn(e, n) {
      return new this(e).mul(n);
    }
    function Tn(e, n) {
      return new this(e).pow(n);
    }
    function Ln(e) {
      var n, i, r, t, s = 0, o = new this(1), u = [];
      if (e === void 0 ? e = this.precision : q(e, 1, V), r = Math.ceil(e / m), this.crypto)
        if (crypto.getRandomValues)
          for (n = crypto.getRandomValues(new Uint32Array(r)); s < r; )
            t = n[s], t >= 429e7 ? n[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = t % 1e7;
        else if (crypto.randomBytes) {
          for (n = crypto.randomBytes(r *= 4); s < r; )
            t = n[s] + (n[s + 1] << 8) + (n[s + 2] << 16) + ((n[s + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, s) : (u.push(t % 1e7), s += 4);
          s = r / 4;
        } else
          throw Error(Le);
      else
        for (; s < r; )
          u[s++] = Math.random() * 1e7 | 0;
      for (r = u[--s], e %= m, r && e && (t = M(10, m - e), u[s] = (r / t | 0) * t); u[s] === 0; s--)
        u.pop();
      if (s < 0)
        i = 0, u = [0];
      else {
        for (i = -1; u[0] === 0; i -= m)
          u.shift();
        for (r = 1, t = u[0]; t >= 10; t /= 10)
          r++;
        r < m && (i -= m - r);
      }
      return o.e = i, o.d = u, o;
    }
    function Rn(e) {
      return p(e = new this(e), e.e + 1, this.rounding);
    }
    function Fn(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function In(e) {
      return new this(e).sin();
    }
    function Dn(e) {
      return new this(e).sinh();
    }
    function Zn(e) {
      return new this(e).sqrt();
    }
    function Un(e, n) {
      return new this(e).sub(n);
    }
    function Bn() {
      var e = 0, n = arguments, i = new this(n[e]);
      for (w = false; i.s && ++e < n.length; )
        i = i.plus(n[e]);
      return w = true, p(i, this.precision, this.rounding);
    }
    function $n(e) {
      return new this(e).tan();
    }
    function Vn(e) {
      return new this(e).tanh();
    }
    function Hn(e) {
      return p(e = new this(e), e.e + 1, 1);
    }
    d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
    d[Symbol.toStringTag] = "Decimal";
    var Y = d.constructor = $e(Ne);
    re = new Y(re);
    te = new Y(te);
    var Ve = Y;
    var Jn = "Cloudflare-Workers";
    var Wn = "node";
    function He() {
      var e, n, i;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Jn ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((i = (n = globalThis.process) == null ? void 0 : n.release) == null ? void 0 : i.name) === Wn ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
  }
});

// node_modules/.prisma/client/wasm.js
var require_wasm = __commonJS({
  "node_modules/.prisma/client/wasm.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      Decimal: Decimal2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Public: Public2,
      detectRuntime: detectRuntime2
    } = require_index_browser();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.10.2",
      engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
    };
    Prisma.PrismaClientKnownRequestError = () => {
      throw new Error(
        `PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientUnknownRequestError = () => {
      throw new Error(
        `PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientRustPanicError = () => {
      throw new Error(
        `PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientInitializationError = () => {
      throw new Error(
        `PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.PrismaClientValidationError = () => {
      throw new Error(
        `PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.NotFoundError = () => {
      throw new Error(
        `NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.Decimal = Decimal2;
    Prisma.sql = () => {
      throw new Error(
        `sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.empty = () => {
      throw new Error(
        `empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.join = () => {
      throw new Error(
        `join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.raw = () => {
      throw new Error(
        `raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = () => {
      throw new Error(
        `Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.defineExtension = () => {
      throw new Error(
        `Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
      );
    };
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      password: "password"
    };
    exports.Prisma.PostsScalarFieldEnum = {
      id: "id",
      title: "title",
      description: "description",
      published: "published",
      authorID: "authorID"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Posts: "Posts"
    };
    var PrismaClient2 = class {
      constructor() {
        return new Proxy(this, {
          get(target, prop) {
            const runtime = detectRuntime2();
            const edgeRuntimeName = {
              "workerd": "Cloudflare Workers",
              "deno": "Deno and Deno Deploy",
              "netlify": "Netlify Edge Functions",
              "edge-light": "Vercel Edge Functions or Edge Middleware"
            }[runtime];
            let message = "PrismaClient is unable to run in ";
            if (edgeRuntimeName !== void 0) {
              message += edgeRuntimeName + ". As an alternative, try Accelerate: https://pris.ly/d/accelerate.";
            } else {
              message += "this browser environment, or has been bundled for the browser (running in `" + runtime + "`).";
            }
            message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;
            throw new Error(message);
          }
        });
      }
    };
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/wasm.js
var require_wasm2 = __commonJS({
  "node_modules/@prisma/client/wasm.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_wasm()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var default_index_exports = {};
    __export2(default_index_exports, {
      Prisma: () => Prisma,
      PrismaClient: () => PrismaClient2,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "5a9203d0590c951969e85a7d07215503f4672eb9"
    };
    var version = "5.10.2";
    var clientVersion = version;
    var PrismaClient2 = class {
      constructor() {
        throw new Error(
          `@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
        );
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    function getExtensionContext(that) {
      return that;
    }
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// .wrangler/tmp/bundle-TujMlo/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-TujMlo/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var _status;
var _executionCtx;
var _headers;
var _preparedHeaders;
var _res;
var _isFresh;
var Context = class {
  constructor(req, options) {
    this.env = {};
    this._var = {};
    this.finalized = false;
    this.error = void 0;
    __privateAdd(this, _status, 200);
    __privateAdd(this, _executionCtx, void 0);
    __privateAdd(this, _headers, void 0);
    __privateAdd(this, _preparedHeaders, void 0);
    __privateAdd(this, _res, void 0);
    __privateAdd(this, _isFresh, true);
    this.layout = void 0;
    this.renderer = (content) => this.html(content);
    this.notFoundHandler = () => new Response();
    this.render = (...args) => this.renderer(...args);
    this.setLayout = (layout) => this.layout = layout;
    this.getLayout = () => this.layout;
    this.setRenderer = (renderer) => {
      this.renderer = renderer;
    };
    this.header = (name, value, options2) => {
      if (value === void 0) {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).delete(name);
        } else if (__privateGet(this, _preparedHeaders)) {
          delete __privateGet(this, _preparedHeaders)[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!__privateGet(this, _headers)) {
          __privateSet(this, _isFresh, false);
          __privateSet(this, _headers, new Headers(__privateGet(this, _preparedHeaders)));
          __privateSet(this, _preparedHeaders, {});
        }
        __privateGet(this, _headers).append(name, value);
      } else {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).set(name, value);
        } else {
          __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
          __privateGet(this, _preparedHeaders)[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      __privateSet(this, _isFresh, false);
      __privateSet(this, _status, status);
    };
    this.set = (key, value) => {
      this._var ?? (this._var = {});
      this._var[key] = value;
    };
    this.get = (key) => {
      return this._var ? this._var[key] : void 0;
    };
    this.newResponse = (data, arg, headers) => {
      if (__privateGet(this, _isFresh) && !headers && !arg && __privateGet(this, _status) === 200) {
        return new Response(data, {
          headers: __privateGet(this, _preparedHeaders)
        });
      }
      if (arg && typeof arg !== "number") {
        const headers2 = setHeaders(new Headers(arg.headers), __privateGet(this, _preparedHeaders));
        return new Response(data, {
          headers: headers2,
          status: arg.status ?? __privateGet(this, _status)
        });
      }
      const status = typeof arg === "number" ? arg : __privateGet(this, _status);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers());
      setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      if (__privateGet(this, _res)) {
        __privateGet(this, _res).headers.forEach((v, k) => {
          __privateGet(this, _headers)?.set(k, v);
        });
        setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          __privateGet(this, _headers).set(k, v);
        } else {
          __privateGet(this, _headers).delete(k);
          for (const v2 of v) {
            __privateGet(this, _headers).append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: __privateGet(this, _headers)
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!__privateGet(this, _preparedHeaders)) {
        if (__privateGet(this, _isFresh) && !headers && !arg) {
          return new Response(text);
        }
        __privateSet(this, _preparedHeaders, {});
      }
      __privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
    };
    this.html = (html, arg, headers) => {
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "text/html; charset=UTF-8";
      if (typeof html === "object") {
        if (!(html instanceof Promise)) {
          html = html.toString();
        }
        if (html instanceof Promise) {
          return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
            return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
          });
        }
      }
      return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
    };
    this.redirect = (location, status = 302) => {
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers());
      __privateGet(this, _headers).set("Location", location);
      return this.newResponse(null, status);
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      __privateSet(this, _executionCtx, options.executionCtx);
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (__privateGet(this, _executionCtx) && "respondWith" in __privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (__privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    __privateSet(this, _isFresh, false);
    return __privateGet(this, _res) || __privateSet(this, _res, new Response("404 Not Found", { status: 404 }));
  }
  set res(_res2) {
    __privateSet(this, _isFresh, false);
    if (__privateGet(this, _res) && _res2) {
      __privateGet(this, _res).headers.delete("content-type");
      for (const [k, v] of __privateGet(this, _res).headers.entries()) {
        if (k === "set-cookie") {
          const cookies = __privateGet(this, _res).headers.getSetCookie();
          _res2.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res2.headers.append("set-cookie", cookie);
          }
        } else {
          _res2.headers.set(k, v);
        }
      }
    }
    __privateSet(this, _res, _res2);
    this.finalized = true;
  }
  get var() {
    return { ...this._var };
  }
};
_status = /* @__PURE__ */ new WeakMap();
_executionCtx = /* @__PURE__ */ new WeakMap();
_headers = /* @__PURE__ */ new WeakMap();
_preparedHeaders = /* @__PURE__ */ new WeakMap();
_res = /* @__PURE__ */ new WeakMap();
_isFresh = /* @__PURE__ */ new WeakMap();

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = async (request, options = { all: false }) => {
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (isFormDataContent(contentType)) {
    return parseFormData(request, options);
  }
  return {};
};
function isFormDataContent(contentType) {
  if (contentType === null) {
    return false;
  }
  return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
}
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = {};
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] && isArrayField(form[key])) {
    appendToExistingArray(form[key], value);
  } else if (form[key]) {
    convertToNewArray(form, key, value);
  } else {
    form[key] = value;
  }
};
function isArrayField(field) {
  return Array.isArray(field);
}
var appendToExistingArray = (arr, value) => {
  arr.push(value);
};
var convertToNewArray = (form, key, value) => {
  form[key] = [form[key], value];
};

// node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _validatedData;
var _matchResult;
var HonoRequest = class {
  constructor(request, path = "/", matchResult = [[]]) {
    __privateAdd2(this, _validatedData, void 0);
    __privateAdd2(this, _matchResult, void 0);
    this.routeIndex = 0;
    this.bodyCache = {};
    this.cachedBody = (key) => {
      const { bodyCache, raw: raw2 } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody) {
        return cachedBody;
      }
      if (bodyCache.arrayBuffer) {
        return (async () => {
          return await new Response(bodyCache.arrayBuffer)[key]();
        })();
      }
      return bodyCache[key] = raw2[key]();
    };
    this.raw = request;
    this.path = path;
    __privateSet2(this, _matchResult, matchResult);
    __privateSet2(this, _validatedData, {});
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = __privateGet2(this, _matchResult)[0][this.routeIndex][1][key];
    const param2 = this.getParamValue(paramKey);
    return param2 ? /\%/.test(param2) ? decodeURIComponent_(param2) : param2 : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(__privateGet2(this, _matchResult)[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(__privateGet2(this, _matchResult)[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return __privateGet2(this, _matchResult)[1] ? __privateGet2(this, _matchResult)[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    __privateGet2(this, _validatedData)[target] = data;
  }
  valid(target) {
    return __privateGet2(this, _validatedData)[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route);
  }
  get routePath() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};
_validatedData = /* @__PURE__ */ new WeakMap();
_matchResult = /* @__PURE__ */ new WeakMap();

// node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var COMPOSED_HANDLER = Symbol("composedHandler");
function defineDynamicClass() {
  return class {
  };
}
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var _path;
var _Hono = class extends defineDynamicClass() {
  constructor(options = {}) {
    super();
    this._basePath = "/";
    __privateAdd3(this, _path, "/");
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.onError = (handler) => {
      this.errorHandler = handler;
      return this;
    };
    this.notFound = (handler) => {
      this.notFoundHandler = handler;
      return this;
    };
    this.fetch = (request, Env, executionCtx) => {
      return this.dispatch(request, executionCtx, Env, request.method);
    };
    this.request = (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        if (requestInit !== void 0) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input, Env, executionCtx);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req, Env, executionCtx);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          __privateSet3(this, _path, args1);
        } else {
          this.addRoute(method, __privateGet3(this, _path), args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, __privateGet3(this, _path), handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        __privateSet3(this, _path, p);
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), __privateGet3(this, _path), handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        __privateSet3(this, _path, arg1);
      } else {
        __privateSet3(this, _path, "*");
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, __privateGet3(this, _path), handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url),
          c.req.raw
        ),
        ...optionsArray
      );
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};
var Hono = _Hono;
_path = /* @__PURE__ */ new WeakMap();

// node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node();
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ?? (wildcardRegExpCache[path] = new RegExp(
    path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}$`
  ));
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = {};
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = {};
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, {}]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = {};
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (methodNames.indexOf(method) === -1) {
      methodNames.push(method);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a2;
          (_a2 = middleware[m])[path] || (_a2[path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a = middleware[method])[path] || (_a[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a2 = routes[m])[path2] || (_a2[path2] = [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.params = {};
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    const parentPatterns = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
        possibleKeys.push(pattern[1]);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = {};
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, node.params, {}));
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, {}));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, {}));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/index.ts
var import_client = __toESM(require_wasm2());

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}

// node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}

// node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        const response = await fetcher(url, options);
        info = {
          cacheStatus: response.headers.get("accelerate-cache-status"),
          lastModified: new Date(response.headers.get("last-modified") ?? ""),
          region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
          requestId: response.headers.get("cf-ray") ?? "unspecified",
          signature: response.headers.get("accelerate-signature") ?? "unspecified"
        };
        machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
        return response;
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}

// node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}

// node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
var jwt_exports = {};
__export(jwt_exports, {
  decode: () => decode,
  sign: () => sign,
  verify: () => verify
});
init_checked_fetch();
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
var decodeBase64Url = (str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
};
var encodeBase64Url = (buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m);
var encodeBase64 = (buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var decodeBase64 = (str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
};

// node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};

// node_modules/hono/dist/utils/jwt/jwt.js
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();
var encodeJwtPart = (part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, "");
var encodeSignaturePart = (buf) => encodeBase64Url(buf).replace(/=/g, "");
var decodeJwtPart = (part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part)));
var param = (name) => {
  switch (name.toUpperCase()) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
};
var signing = async (data, secret, alg = "HS256") => {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  const utf8Encoder2 = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    utf8Encoder2.encode(secret),
    param(alg),
    false,
    [
      "sign"
      /* Sign */
    ]
  );
  return await crypto.subtle.sign(param(alg), cryptoKey, utf8Encoder2.encode(data));
};
var sign = async (payload, secret, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(partialToken, secret, alg);
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
};
var verify = async (token, secret, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { payload } = decode(token);
  const now = Math.floor(Date.now() / 1e3);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const signaturePart = tokenParts.slice(0, 2).join(".");
  const signature = await signing(signaturePart, secret, alg);
  const encodedSignature = encodeSignaturePart(signature);
  if (encodedSignature !== tokenParts[2]) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
};
var decode = (token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch (e) {
    throw new JwtTokenInvalid(token);
  }
};

// node_modules/hono/dist/middleware/jwt/index.js
var verify2 = jwt_exports.verify;
var decode2 = jwt_exports.decode;
var sign2 = jwt_exports.sign;

// src/index.ts
var app = new Hono2();
app.use("/message/*", async (c, next) => {
  const authorization = await c.req.header("Authorization");
  const token = authorization?.split(" ")[1];
  if (!token) {
    c.status(400);
    return c.json({ error: "Invalid Token" });
  }
  const decode3 = await verify2(token, c.env.SECRET);
  if (decode3.id) {
    await next();
  } else {
    return c.json({ error: "Invalid Token" });
  }
});
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/api/v1/signup", async (c) => {
  try {
    const primsa = await new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await primsa.user.create({
      data: {
        name: body.name,
        email: body.name,
        password: body.name
      }
    });
    const token = await sign2({ id: user.id }, c.env.SECRET);
    c.status(200);
    return c.json({
      token
    });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({
      error: "error while signing up"
    });
  }
});
app.post("/api/v1/signin", async (c) => {
  try {
    const prisma = new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const { email } = await c.req.json();
    const user = await prisma.user.findFirst({ where: email });
    if (!user) {
      c.status(400);
      return c.json({
        error: "User does not exist"
      });
    }
    const token = await sign2({ id: user.id }, c.env.SECRET);
    c.status(200);
    return c.json({
      token
    });
  } catch (error) {
    c.status(400);
    return c.json({ error: "Error occured while signing in" });
  }
});
app.post("/api/v1/blog", async (c) => {
  try {
    const prisma = new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const { title, description, published, userID } = await c.req.json();
    const blog = await prisma.posts.create({
      data: {
        title,
        description,
        published,
        authorID: userID
      }
    });
    c.status(201);
    return c.json({
      blog
    });
  } catch (error) {
    c.status(400);
    return c.json({
      error: "Error occured while creating blog post"
    });
  }
});
app.put("/api/v1/blog", async (c) => {
  try {
    const prisma = new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const { blogID, title, description, published } = await c.req.json();
    const updateBlog = await prisma.posts.update({
      where: blogID,
      data: {
        title,
        description,
        published
      }
    });
    c.status(200);
    return c.json({
      updateBlog
    });
  } catch (error) {
    c.status(400);
    return c.json({ error: "Something went wrong updating blog post" });
  }
});
app.get("/api/v1/blog", async (c) => {
  try {
    const prisma = new import_client.PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const blogs = await prisma.posts.findMany();
    if (!blogs) {
      c.status(400);
      return c.json({ error: "Something went wrong" });
    }
    c.status(200);
    return c.json({ blogs });
  } catch (error) {
    c.status(400);
    return c.json({ error: "Something went wrong" });
  }
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-TujMlo/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...src_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...src_default.middleware ? src_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-TujMlo/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@prisma/client/runtime/index-browser.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
//# sourceMappingURL=index.js.map
