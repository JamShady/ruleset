const v = (e) => e != null, V = (e) => {
  if (!v(e))
    return !1;
  if (typeof e == "boolean")
    return e;
  if (typeof e == "string" && e.length === 0)
    return !1;
  const t = (n) => n.some((l) => v(l));
  return !(Array.isArray(e) && !t(e) || typeof e == "object" && !t(Object.values(e)));
}, X = (e, t) => !!(typeof e == "number" && e >= t || typeof e == "string" && e.length >= t || Array.isArray(e) && e.filter(v).length >= t), Z = (e, t) => !!(typeof e == "number" && e <= t || typeof e == "string" && e.length <= t || Array.isArray(e) && e.filter(v).length <= t), x = (e) => typeof e == "number" || typeof e == "string" && e.match(/^-?\d+(\.\d+)?$/) !== null, G = (e, t) => x(e) && x(t) && Number(e) >= Number(t), K = (e, t) => x(e) && x(t) && Number(e) <= Number(t), T = (e) => {
  if (typeof e == "string") {
    if (e[0] === "/") {
      const [, t, n] = e.split("/");
      return new RegExp(t, n);
    }
    return new RegExp(e);
  }
  return e;
}, j = (e, t) => typeof e == "string" && e.match(T(t)) !== null, C = (e, t) => e === t || typeof e == typeof t && JSON.stringify(e) === JSON.stringify(t) ? !0 : typeof e != typeof t && x(e) && x(t) ? Number(e) === Number(t) : !1, L = (e, t) => !C(e, t), ee = (e, t) => t.every((n) => L(e, n));
function te(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var D = { exports: {} }, A = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  function n(s) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(a) {
      return typeof a;
    } : n = function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, n(s);
  }
  function l(s) {
    var i = typeof s == "string" || s instanceof String;
    if (!i) {
      var a = n(s);
      throw s === null ? a = "null" : a === "object" && (a = s.constructor.name), new TypeError("Expected a string but received a ".concat(a));
    }
  }
  e.exports = t.default, e.exports.default = t.default;
})(A, A.exports);
var w = A.exports, $ = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var n = l(w);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function s(a) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? s = function(u) {
      return typeof u;
    } : s = function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, s(a);
  }
  function i(a, r) {
    (0, n.default)(a);
    var u, c;
    s(r) === "object" ? (u = r.min || 0, c = r.max) : (u = arguments[1], c = arguments[2]);
    var o = encodeURI(a).split(/%..|./).length - 1;
    return o >= u && (typeof c > "u" || o <= c);
  }
  e.exports = t.default, e.exports.default = t.default;
})($, $.exports);
var re = $.exports, S = { exports: {} }, P = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    for (var i in s)
      typeof l[i] > "u" && (l[i] = s[i]);
    return l;
  }
  e.exports = t.default, e.exports.default = t.default;
})(P, P.exports);
var B = P.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = s(w), l = s(B);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };
  function a(r, u) {
    (0, n.default)(r), u = (0, l.default)(u, i), u.allow_trailing_dot && r[r.length - 1] === "." && (r = r.substring(0, r.length - 1)), u.allow_wildcard === !0 && r.indexOf("*.") === 0 && (r = r.substring(2));
    var c = r.split("."), o = c[c.length - 1];
    return u.require_tld && (c.length < 2 || !u.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o) || /\s/.test(o)) || !u.allow_numeric_tld && /^\d+$/.test(o) ? !1 : c.every(function(_) {
      return !(_.length > 63 && !u.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(_) || /[\uff01-\uff5e]/.test(_) || /^-|-$/.test(_) || !u.allow_underscores && /_/.test(_));
    });
  }
  e.exports = t.default, e.exports.default = t.default;
})(S, S.exports);
var ne = S.exports, q = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = c;
  var n = l(w);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var s = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", i = "(".concat(s, "[.]){3}").concat(s), a = new RegExp("^".concat(i, "$")), r = "(?:[0-9a-fA-F]{1,4})", u = new RegExp("^(" + "(?:".concat(r, ":){7}(?:").concat(r, "|:)|") + "(?:".concat(r, ":){6}(?:").concat(i, "|:").concat(r, "|:)|") + "(?:".concat(r, ":){5}(?::").concat(i, "|(:").concat(r, "){1,2}|:)|") + "(?:".concat(r, ":){4}(?:(:").concat(r, "){0,1}:").concat(i, "|(:").concat(r, "){1,3}|:)|") + "(?:".concat(r, ":){3}(?:(:").concat(r, "){0,2}:").concat(i, "|(:").concat(r, "){1,4}|:)|") + "(?:".concat(r, ":){2}(?:(:").concat(r, "){0,3}:").concat(i, "|(:").concat(r, "){1,5}|:)|") + "(?:".concat(r, ":){1}(?:(:").concat(r, "){0,4}:").concat(i, "|(:").concat(r, "){1,6}|:)|") + "(?::((?::".concat(r, "){0,5}:").concat(i, "|(?::").concat(r, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function c(o) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, n.default)(o), _ = String(_), _ ? _ === "4" ? a.test(o) : _ === "6" ? u.test(o) : !1 : c(o, 4) || c(o, 6);
  }
  e.exports = t.default, e.exports.default = t.default;
})(q, q.exports);
var ae = q.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = W;
  var n = r(w), l = r(re), s = r(ne), i = r(ae), a = r(B);
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var u = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: []
  }, c = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, o = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, _ = /^[a-z\d]+$/, Q = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, Y = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, k = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, H = 254;
  function O(d) {
    var f = d.replace(/^"(.+)"$/, "$1");
    if (!f.trim())
      return !1;
    var p = /[\.";<>]/.test(f);
    if (p) {
      if (f === d)
        return !1;
      var m = f.split('"').length === f.split('\\"').length;
      if (!m)
        return !1;
    }
    return !0;
  }
  function W(d, f) {
    if ((0, n.default)(d), f = (0, a.default)(f, u), f.require_display_name || f.allow_display_name) {
      var p = d.match(c);
      if (p) {
        var m = p[1];
        if (d = d.replace(m, "").replace(/(^<|>$)/g, ""), m.endsWith(" ") && (m = m.slice(0, -1)), !O(m))
          return !1;
      } else if (f.require_display_name)
        return !1;
    }
    if (!f.ignore_max_length && d.length > H)
      return !1;
    var M = d.split("@"), y = M.pop(), h = y.toLowerCase();
    if (f.host_blacklist.includes(h) || f.host_whitelist.length > 0 && !f.host_whitelist.includes(h))
      return !1;
    var g = M.join("@");
    if (f.domain_specific_validation && (h === "gmail.com" || h === "googlemail.com")) {
      g = g.toLowerCase();
      var N = g.split("+")[0];
      if (!(0, l.default)(N.replace(/\./g, ""), {
        min: 6,
        max: 30
      }))
        return !1;
      for (var R = N.split("."), b = 0; b < R.length; b++)
        if (!_.test(R[b]))
          return !1;
    }
    if (f.ignore_max_length === !1 && (!(0, l.default)(g, {
      max: 64
    }) || !(0, l.default)(y, {
      max: 254
    })))
      return !1;
    if (!(0, s.default)(y, {
      require_tld: f.require_tld,
      ignore_max_length: f.ignore_max_length,
      allow_underscores: f.allow_underscores
    })) {
      if (!f.allow_ip_domain)
        return !1;
      if (!(0, i.default)(y)) {
        if (!y.startsWith("[") || !y.endsWith("]"))
          return !1;
        var I = y.slice(1, -1);
        if (I.length === 0 || !(0, i.default)(I))
          return !1;
      }
    }
    if (g[0] === '"')
      return g = g.slice(1, g.length - 1), f.allow_utf8_local_part ? k.test(g) : Q.test(g);
    for (var J = f.allow_utf8_local_part ? Y : o, U = g.split("."), E = 0; E < U.length; E++)
      if (!J.test(U[E]))
        return !1;
    return !(f.blacklisted_chars && g.search(new RegExp("[".concat(f.blacklisted_chars, "]+"), "g")) !== -1);
  }
  e.exports = t.default, e.exports.default = t.default;
})(D, D.exports);
var fe = D.exports;
const ue = /* @__PURE__ */ te(fe), le = (e) => {
  try {
    return ue(e);
  } catch {
    return !1;
  }
}, se = (e) => {
  const t = e.match(/^(\d{4}(?:-\d{2}){2})(?: (\d{2}(:\d{2}){2}))?$/);
  if (t)
    return {
      date: t[1],
      time: t[2]
    };
  throw new Error("datetime expected in YYYY-MM-DD[ HH:MM:SS] format");
}, ie = (e, t) => {
  const { date: n, time: l } = se(e);
  return /* @__PURE__ */ new Date(`${n} ${l || t}`);
}, F = (e, t = "00:00:00") => e instanceof Date ? e : typeof e == "number" ? new Date(e) : ie(e, t), oe = (e, t) => {
  try {
    if (typeof e == "string" || typeof e == "number" || e instanceof Date) {
      const n = F(e), l = F(t);
      return n.getTime() >= l.getTime();
    }
  } catch {
  }
  return !1;
}, ce = (e, t) => {
  try {
    if (typeof e == "string" || typeof e == "number" || e instanceof Date) {
      const n = F(e), l = F(t, "23:59:59");
      return n.getTime() <= l.getTime();
    }
  } catch {
  }
  return !1;
}, z = {
  required: V,
  min: X,
  max: Z,
  gte: G,
  lte: K,
  pattern: j,
  match: C,
  differ: L,
  differs: ee,
  email: le,
  onOrAfter: oe,
  onOrBefore: ce
}, de = (e, t) => Object.keys(z).filter(
  (n) => n in t && t[n] !== !1 && t[n] != null && !z[n](e, t[n])
);
export {
  de as default
};
