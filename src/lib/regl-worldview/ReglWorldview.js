/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

var ReglWorldview = function (e, t, n) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var r = "default" in n ? n.default : n;

    function i() {
        return (i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function (t) {
                o(e, t, n[t])
            })
        }
        return e
    }

    var s = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function c(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function u(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var f = "object" == typeof s && s && s.Object === Object && s,
        l = "object" == typeof self && self && self.Object === Object && self, d = f || l || Function("return this")(),
        p = d.Symbol, h = Object.prototype, m = h.hasOwnProperty, v = h.toString, g = p ? p.toStringTag : void 0;
    var b = function (e) {
        var t = m.call(e, g), n = e[g];
        try {
            e[g] = void 0
        } catch (e) {
        }
        var r = v.call(e);
        return t ? e[g] = n : delete e[g], r
    }, y = Object.prototype.toString;
    var x = function (e) {
        return y.call(e)
    }, w = "[object Null]", _ = "[object Undefined]", C = p ? p.toStringTag : void 0;
    var S = function (e) {
        return null == e ? void 0 === e ? _ : w : C && C in Object(e) ? b(e) : x(e)
    };
    var j = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }, E = "[object AsyncFunction]", A = "[object Function]", k = "[object GeneratorFunction]", O = "[object Proxy]";
    var T, D = function (e) {
            if (!j(e)) return !1;
            var t = S(e);
            return t == A || t == k || t == E || t == O
        }, M = d["__core-js_shared__"],
        z = (T = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + T : "";
    var P = function (e) {
        return !!z && z in e
    }, I = Function.prototype.toString;
    var F = function (e) {
            if (null != e) {
                try {
                    return I.call(e)
                } catch (e) {
                }
                try {
                    return e + ""
                } catch (e) {
                }
            }
            return ""
        }, B = /^\[object .+?Constructor\]$/, L = Function.prototype, R = Object.prototype, H = L.toString,
        N = R.hasOwnProperty,
        W = RegExp("^" + H.call(N).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var U = function (e) {
        return !(!j(e) || P(e)) && (D(e) ? W : B).test(F(e))
    };
    var q = function (e, t) {
        return null == e ? void 0 : e[t]
    };
    var G = function (e, t) {
        var n = q(e, t);
        return U(n) ? n : void 0
    }, V = function () {
        try {
            var e = G(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {
        }
    }();
    var K = function (e, t, n) {
        "__proto__" == t && V ? V(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
    };
    var $ = function (e) {
        return function (t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                var c = a[e ? s : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return t
        }
    }();
    var Y = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    };
    var Z = function (e) {
        return null != e && "object" == typeof e
    }, X = "[object Arguments]";
    var Q = function (e) {
        return Z(e) && S(e) == X
    }, J = Object.prototype, ee = J.hasOwnProperty, te = J.propertyIsEnumerable, ne = Q(function () {
        return arguments
    }()) ? Q : function (e) {
        return Z(e) && ee.call(e, "callee") && !te.call(e, "callee")
    }, re = Array.isArray;
    var ie = function () {
        return !1
    }, oe = u(function (e, t) {
        var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, i = r && r.exports === n ? d.Buffer : void 0,
            o = (i ? i.isBuffer : void 0) || ie;
        e.exports = o
    }), ae = 9007199254740991, se = /^(?:0|[1-9]\d*)$/;
    var ce = function (e, t) {
        var n = typeof e;
        return !!(t = null == t ? ae : t) && ("number" == n || "symbol" != n && se.test(e)) && e > -1 && e % 1 == 0 && e < t
    }, ue = 9007199254740991;
    var fe = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ue
    }, le = {};
    le["[object Float32Array]"] = le["[object Float64Array]"] = le["[object Int8Array]"] = le["[object Int16Array]"] = le["[object Int32Array]"] = le["[object Uint8Array]"] = le["[object Uint8ClampedArray]"] = le["[object Uint16Array]"] = le["[object Uint32Array]"] = !0, le["[object Arguments]"] = le["[object Array]"] = le["[object ArrayBuffer]"] = le["[object Boolean]"] = le["[object DataView]"] = le["[object Date]"] = le["[object Error]"] = le["[object Function]"] = le["[object Map]"] = le["[object Number]"] = le["[object Object]"] = le["[object RegExp]"] = le["[object Set]"] = le["[object String]"] = le["[object WeakMap]"] = !1;
    var de = function (e) {
        return Z(e) && fe(e.length) && !!le[S(e)]
    };
    var pe = function (e) {
        return function (t) {
            return e(t)
        }
    }, he = u(function (e, t) {
        var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, i = r && r.exports === n && f.process,
            o = function () {
                try {
                    var e = r && r.require && r.require("util").types;
                    return e || i && i.binding && i.binding("util")
                } catch (e) {
                }
            }();
        e.exports = o
    }), me = he && he.isTypedArray, ve = me ? pe(me) : de, ge = Object.prototype.hasOwnProperty;
    var be = function (e, t) {
        var n = re(e), r = !n && ne(e), i = !n && !r && oe(e), o = !n && !r && !i && ve(e), a = n || r || i || o,
            s = a ? Y(e.length, String) : [], c = s.length;
        for (var u in e) !t && !ge.call(e, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ce(u, c)) || s.push(u);
        return s
    }, ye = Object.prototype;
    var xe = function (e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || ye)
    };
    var we = function (e, t) {
        return function (n) {
            return e(t(n))
        }
    }, _e = we(Object.keys, Object), Ce = Object.prototype.hasOwnProperty;
    var Se = function (e) {
        if (!xe(e)) return _e(e);
        var t = [];
        for (var n in Object(e)) Ce.call(e, n) && "constructor" != n && t.push(n);
        return t
    };
    var je = function (e) {
        return null != e && fe(e.length) && !D(e)
    };
    var Ee = function (e) {
        return je(e) ? be(e) : Se(e)
    };
    var Ae = function (e, t) {
        return e && $(e, t, Ee)
    };
    var ke = function () {
        this.__data__ = [], this.size = 0
    };
    var Oe = function (e, t) {
        return e === t || e != e && t != t
    };
    var Te = function (e, t) {
        for (var n = e.length; n--;) if (Oe(e[n][0], t)) return n;
        return -1
    }, De = Array.prototype.splice;
    var Me = function (e) {
        var t = this.__data__, n = Te(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : De.call(t, n, 1), --this.size, 0))
    };
    var ze = function (e) {
        var t = this.__data__, n = Te(t, e);
        return n < 0 ? void 0 : t[n][1]
    };
    var Pe = function (e) {
        return Te(this.__data__, e) > -1
    };
    var Ie = function (e, t) {
        var n = this.__data__, r = Te(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };

    function Fe(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    Fe.prototype.clear = ke, Fe.prototype.delete = Me, Fe.prototype.get = ze, Fe.prototype.has = Pe, Fe.prototype.set = Ie;
    var Be = Fe;
    var Le = function () {
        this.__data__ = new Be, this.size = 0
    };
    var Re = function (e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n
    };
    var He = function (e) {
        return this.__data__.get(e)
    };
    var Ne = function (e) {
        return this.__data__.has(e)
    }, We = G(d, "Map"), Ue = G(Object, "create");
    var qe = function () {
        this.__data__ = Ue ? Ue(null) : {}, this.size = 0
    };
    var Ge = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }, Ve = "__lodash_hash_undefined__", Ke = Object.prototype.hasOwnProperty;
    var $e = function (e) {
        var t = this.__data__;
        if (Ue) {
            var n = t[e];
            return n === Ve ? void 0 : n
        }
        return Ke.call(t, e) ? t[e] : void 0
    }, Ye = Object.prototype.hasOwnProperty;
    var Ze = function (e) {
        var t = this.__data__;
        return Ue ? void 0 !== t[e] : Ye.call(t, e)
    }, Xe = "__lodash_hash_undefined__";
    var Qe = function (e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Ue && void 0 === t ? Xe : t, this
    };

    function Je(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    Je.prototype.clear = qe, Je.prototype.delete = Ge, Je.prototype.get = $e, Je.prototype.has = Ze, Je.prototype.set = Qe;
    var et = Je;
    var tt = function () {
        this.size = 0, this.__data__ = {hash: new et, map: new (We || Be), string: new et}
    };
    var nt = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    };
    var rt = function (e, t) {
        var n = e.__data__;
        return nt(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    };
    var it = function (e) {
        var t = rt(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    };
    var ot = function (e) {
        return rt(this, e).get(e)
    };
    var at = function (e) {
        return rt(this, e).has(e)
    };
    var st = function (e, t) {
        var n = rt(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };

    function ct(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    ct.prototype.clear = tt, ct.prototype.delete = it, ct.prototype.get = ot, ct.prototype.has = at, ct.prototype.set = st;
    var ut = ct, ft = 200;
    var lt = function (e, t) {
        var n = this.__data__;
        if (n instanceof Be) {
            var r = n.__data__;
            if (!We || r.length < ft - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new ut(r)
        }
        return n.set(e, t), this.size = n.size, this
    };

    function dt(e) {
        var t = this.__data__ = new Be(e);
        this.size = t.size
    }

    dt.prototype.clear = Le, dt.prototype.delete = Re, dt.prototype.get = He, dt.prototype.has = Ne, dt.prototype.set = lt;
    var pt = dt, ht = "__lodash_hash_undefined__";
    var mt = function (e) {
        return this.__data__.set(e, ht), this
    };
    var vt = function (e) {
        return this.__data__.has(e)
    };

    function gt(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.__data__ = new ut; ++t < n;) this.add(e[t])
    }

    gt.prototype.add = gt.prototype.push = mt, gt.prototype.has = vt;
    var bt = gt;
    var yt = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
        return !1
    };
    var xt = function (e, t) {
        return e.has(t)
    }, wt = 1, _t = 2;
    var Ct = function (e, t, n, r, i, o) {
        var a = n & wt, s = e.length, c = t.length;
        if (s != c && !(a && c > s)) return !1;
        var u = o.get(e);
        if (u && o.get(t)) return u == t;
        var f = -1, l = !0, d = n & _t ? new bt : void 0;
        for (o.set(e, t), o.set(t, e); ++f < s;) {
            var p = e[f], h = t[f];
            if (r) var m = a ? r(h, p, f, t, e, o) : r(p, h, f, e, t, o);
            if (void 0 !== m) {
                if (m) continue;
                l = !1;
                break
            }
            if (d) {
                if (!yt(t, function (e, t) {
                    if (!xt(d, t) && (p === e || i(p, e, n, r, o))) return d.push(t)
                })) {
                    l = !1;
                    break
                }
            } else if (p !== h && !i(p, h, n, r, o)) {
                l = !1;
                break
            }
        }
        return o.delete(e), o.delete(t), l
    }, St = d.Uint8Array;
    var jt = function (e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function (e, r) {
            n[++t] = [r, e]
        }), n
    };
    var Et = function (e) {
            var t = -1, n = Array(e.size);
            return e.forEach(function (e) {
                n[++t] = e
            }), n
        }, At = 1, kt = 2, Ot = "[object Boolean]", Tt = "[object Date]", Dt = "[object Error]", Mt = "[object Map]",
        zt = "[object Number]", Pt = "[object RegExp]", It = "[object Set]", Ft = "[object String]",
        Bt = "[object Symbol]", Lt = "[object ArrayBuffer]", Rt = "[object DataView]", Ht = p ? p.prototype : void 0,
        Nt = Ht ? Ht.valueOf : void 0;
    var Wt = function (e, t, n, r, i, o, a) {
        switch (n) {
            case Rt:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case Lt:
                return !(e.byteLength != t.byteLength || !o(new St(e), new St(t)));
            case Ot:
            case Tt:
            case zt:
                return Oe(+e, +t);
            case Dt:
                return e.name == t.name && e.message == t.message;
            case Pt:
            case Ft:
                return e == t + "";
            case Mt:
                var s = jt;
            case It:
                var c = r & At;
                if (s || (s = Et), e.size != t.size && !c) return !1;
                var u = a.get(e);
                if (u) return u == t;
                r |= kt, a.set(e, t);
                var f = Ct(s(e), s(t), r, i, o, a);
                return a.delete(e), f;
            case Bt:
                if (Nt) return Nt.call(e) == Nt.call(t)
        }
        return !1
    };
    var Ut = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e
    };
    var qt = function (e, t, n) {
        var r = t(e);
        return re(e) ? r : Ut(r, n(e))
    };
    var Gt = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a)
        }
        return o
    };
    var Vt = function () {
        return []
    }, Kt = Object.prototype.propertyIsEnumerable, $t = Object.getOwnPropertySymbols, Yt = $t ? function (e) {
        return null == e ? [] : (e = Object(e), Gt($t(e), function (t) {
            return Kt.call(e, t)
        }))
    } : Vt;
    var Zt = function (e) {
        return qt(e, Ee, Yt)
    }, Xt = 1, Qt = Object.prototype.hasOwnProperty;
    var Jt = function (e, t, n, r, i, o) {
            var a = n & Xt, s = Zt(e), c = s.length;
            if (c != Zt(t).length && !a) return !1;
            for (var u = c; u--;) {
                var f = s[u];
                if (!(a ? f in t : Qt.call(t, f))) return !1
            }
            var l = o.get(e);
            if (l && o.get(t)) return l == t;
            var d = !0;
            o.set(e, t), o.set(t, e);
            for (var p = a; ++u < c;) {
                var h = e[f = s[u]], m = t[f];
                if (r) var v = a ? r(m, h, f, t, e, o) : r(h, m, f, e, t, o);
                if (!(void 0 === v ? h === m || i(h, m, n, r, o) : v)) {
                    d = !1;
                    break
                }
                p || (p = "constructor" == f)
            }
            if (d && !p) {
                var g = e.constructor, b = t.constructor;
                g != b && "constructor" in e && "constructor" in t && !("function" == typeof g && g instanceof g && "function" == typeof b && b instanceof b) && (d = !1)
            }
            return o.delete(e), o.delete(t), d
        }, en = G(d, "DataView"), tn = G(d, "Promise"), nn = G(d, "Set"), rn = G(d, "WeakMap"), on = F(en), an = F(We),
        sn = F(tn), cn = F(nn), un = F(rn), fn = S;
    (en && "[object DataView]" != fn(new en(new ArrayBuffer(1))) || We && "[object Map]" != fn(new We) || tn && "[object Promise]" != fn(tn.resolve()) || nn && "[object Set]" != fn(new nn) || rn && "[object WeakMap]" != fn(new rn)) && (fn = function (e) {
        var t = S(e), n = "[object Object]" == t ? e.constructor : void 0, r = n ? F(n) : "";
        if (r) switch (r) {
            case on:
                return "[object DataView]";
            case an:
                return "[object Map]";
            case sn:
                return "[object Promise]";
            case cn:
                return "[object Set]";
            case un:
                return "[object WeakMap]"
        }
        return t
    });
    var ln = fn, dn = 1, pn = "[object Arguments]", hn = "[object Array]", mn = "[object Object]",
        vn = Object.prototype.hasOwnProperty;
    var gn = function (e, t, n, r, i, o) {
        var a = re(e), s = re(t), c = a ? hn : ln(e), u = s ? hn : ln(t), f = (c = c == pn ? mn : c) == mn,
            l = (u = u == pn ? mn : u) == mn, d = c == u;
        if (d && oe(e)) {
            if (!oe(t)) return !1;
            a = !0, f = !1
        }
        if (d && !f) return o || (o = new pt), a || ve(e) ? Ct(e, t, n, r, i, o) : Wt(e, t, c, n, r, i, o);
        if (!(n & dn)) {
            var p = f && vn.call(e, "__wrapped__"), h = l && vn.call(t, "__wrapped__");
            if (p || h) {
                var m = p ? e.value() : e, v = h ? t.value() : t;
                return o || (o = new pt), i(m, v, n, r, o)
            }
        }
        return !!d && (o || (o = new pt), Jt(e, t, n, r, i, o))
    };
    var bn = function e(t, n, r, i, o) {
        return t === n || (null == t || null == n || !Z(t) && !Z(n) ? t != t && n != n : gn(t, n, r, i, e, o))
    }, yn = 1, xn = 2;
    var wn = function (e, t, n, r) {
        var i = n.length, o = i, a = !r;
        if (null == e) return !o;
        for (e = Object(e); i--;) {
            var s = n[i];
            if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
        }
        for (; ++i < o;) {
            var c = (s = n[i])[0], u = e[c], f = s[1];
            if (a && s[2]) {
                if (void 0 === u && !(c in e)) return !1
            } else {
                var l = new pt;
                if (r) var d = r(u, f, c, e, t, l);
                if (!(void 0 === d ? bn(f, u, yn | xn, r, l) : d)) return !1
            }
        }
        return !0
    };
    var _n = function (e) {
        return e == e && !j(e)
    };
    var Cn = function (e) {
        for (var t = Ee(e), n = t.length; n--;) {
            var r = t[n], i = e[r];
            t[n] = [r, i, _n(i)]
        }
        return t
    };
    var Sn = function (e, t) {
        return function (n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n))
        }
    };
    var jn = function (e) {
        var t = Cn(e);
        return 1 == t.length && t[0][2] ? Sn(t[0][0], t[0][1]) : function (n) {
            return n === e || wn(n, e, t)
        }
    }, En = "[object Symbol]";
    var An = function (e) {
        return "symbol" == typeof e || Z(e) && S(e) == En
    }, kn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, On = /^\w*$/;
    var Tn = function (e, t) {
        if (re(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !An(e)) || On.test(e) || !kn.test(e) || null != t && e in Object(t)
    }, Dn = "Expected a function";

    function Mn(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(Dn);
        var n = function () {
            var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = e.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new (Mn.Cache || ut), n
    }

    Mn.Cache = ut;
    var zn = Mn, Pn = 500;
    var In = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Fn = /\\(\\)?/g, Bn = function (e) {
            var t = zn(e, function (e) {
                return n.size === Pn && n.clear(), e
            }), n = t.cache;
            return t
        }(function (e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(In, function (e, n, r, i) {
                t.push(r ? i.replace(Fn, "$1") : n || e)
            }), t
        });
    var Ln = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }, Rn = 1 / 0, Hn = p ? p.prototype : void 0, Nn = Hn ? Hn.toString : void 0;
    var Wn = function e(t) {
        if ("string" == typeof t) return t;
        if (re(t)) return Ln(t, e) + "";
        if (An(t)) return Nn ? Nn.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Rn ? "-0" : n
    };
    var Un = function (e) {
        return null == e ? "" : Wn(e)
    };
    var qn = function (e, t) {
        return re(e) ? e : Tn(e, t) ? [e] : Bn(Un(e))
    }, Gn = 1 / 0;
    var Vn = function (e) {
        if ("string" == typeof e || An(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Gn ? "-0" : t
    };
    var Kn = function (e, t) {
        for (var n = 0, r = (t = qn(t, e)).length; null != e && n < r;) e = e[Vn(t[n++])];
        return n && n == r ? e : void 0
    };
    var $n = function (e, t, n) {
        var r = null == e ? void 0 : Kn(e, t);
        return void 0 === r ? n : r
    };
    var Yn = function (e, t) {
        return null != e && t in Object(e)
    };
    var Zn = function (e, t, n) {
        for (var r = -1, i = (t = qn(t, e)).length, o = !1; ++r < i;) {
            var a = Vn(t[r]);
            if (!(o = null != e && n(e, a))) break;
            e = e[a]
        }
        return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && fe(i) && ce(a, i) && (re(e) || ne(e))
    };
    var Xn = function (e, t) {
        return null != e && Zn(e, t, Yn)
    }, Qn = 1, Jn = 2;
    var er = function (e, t) {
        return Tn(e) && _n(t) ? Sn(Vn(e), t) : function (n) {
            var r = $n(n, e);
            return void 0 === r && r === t ? Xn(n, e) : bn(t, r, Qn | Jn)
        }
    };
    var tr = function (e) {
        return e
    };
    var nr = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    };
    var rr = function (e) {
        return function (t) {
            return Kn(t, e)
        }
    };
    var ir = function (e) {
        return Tn(e) ? nr(Vn(e)) : rr(e)
    };
    var or = function (e) {
        return "function" == typeof e ? e : null == e ? tr : "object" == typeof e ? re(e) ? er(e[0], e[1]) : jn(e) : ir(e)
    };
    var ar = function (e, t) {
        var n = {};
        return t = or(t, 3), Ae(e, function (e, r, i) {
            K(n, r, t(e, r, i))
        }), n
    }, sr = Object.prototype.hasOwnProperty;
    var cr = function (e, t, n) {
        var r = e[t];
        sr.call(e, t) && Oe(r, n) && (void 0 !== n || t in e) || K(e, t, n)
    };
    var ur = function (e, t, n, r) {
        if (!j(e)) return e;
        for (var i = -1, o = (t = qn(t, e)).length, a = o - 1, s = e; null != s && ++i < o;) {
            var c = Vn(t[i]), u = n;
            if (i != a) {
                var f = s[c];
                void 0 === (u = r ? r(f, c, s) : void 0) && (u = j(f) ? f : ce(t[i + 1]) ? [] : {})
            }
            cr(s, c, u), s = s[c]
        }
        return e
    };
    var fr = function (e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var a = t[r], s = Kn(e, a);
            n(s, a) && ur(o, qn(a, e), s)
        }
        return o
    }, lr = we(Object.getPrototypeOf, Object), dr = Object.getOwnPropertySymbols ? function (e) {
        for (var t = []; e;) Ut(t, Yt(e)), e = lr(e);
        return t
    } : Vt;
    var pr = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t
    }, hr = Object.prototype.hasOwnProperty;
    var mr = function (e) {
        if (!j(e)) return pr(e);
        var t = xe(e), n = [];
        for (var r in e) ("constructor" != r || !t && hr.call(e, r)) && n.push(r);
        return n
    };
    var vr = function (e) {
        return je(e) ? be(e, !0) : mr(e)
    };
    var gr = function (e) {
        return qt(e, vr, dr)
    };
    var br = function (e, t) {
            if (null == e) return {};
            var n = Ln(gr(e), function (e) {
                return [e]
            });
            return t = or(t), fr(e, n, function (e, n) {
                return t(e, n[0])
            })
        }, yr = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty,
        wr = Object.prototype.propertyIsEnumerable;
    var _r = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, r, i = function (e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }(e), o = 1; o < arguments.length; o++) {
            for (var a in n = Object(arguments[o])) xr.call(n, a) && (i[a] = n[a]);
            if (yr) {
                r = yr(n);
                for (var s = 0; s < r.length; s++) wr.call(n, r[s]) && (i[r[s]] = n[r[s]])
            }
        }
        return i
    }, Cr = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Sr = function () {
    }, jr = Cr, Er = {};
    Sr = function (e) {
        var t = "Warning: " + e;
        "undefined" != typeof console && console.error(t);
        try {
            throw new Error(t)
        } catch (e) {
        }
    };
    var Ar = function (e, t, n, r, i) {
        for (var o in e) if (e.hasOwnProperty(o)) {
            var a;
            try {
                if ("function" != typeof e[o]) {
                    var s = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.");
                    throw s.name = "Invariant Violation", s
                }
                a = e[o](t, o, r, n, null, jr)
            } catch (e) {
                a = e
            }
            if (!a || a instanceof Error || Sr((r || "React class") + ": type specification of " + n + " `" + o + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof a + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), a instanceof Error && !(a.message in Er)) {
                Er[a.message] = !0;
                var c = i ? i() : "";
                Sr("Failed " + n + " type: " + a.message + (null != c ? c : ""))
            }
        }
    }, kr = function () {
    };

    function Or() {
        return null
    }

    kr = function (e) {
        var t = "Warning: " + e;
        "undefined" != typeof console && console.error(t);
        try {
            throw new Error(t)
        } catch (e) {
        }
    };
    var Tr = function (e, t) {
        var n = "function" == typeof Symbol && Symbol.iterator, r = "@@iterator";
        var i = "<<anonymous>>", o = {
            array: u("array"),
            bool: u("boolean"),
            func: u("function"),
            number: u("number"),
            object: u("object"),
            string: u("string"),
            symbol: u("symbol"),
            any: c(Or),
            arrayOf: function (e) {
                return c(function (t, n, r, i, o) {
                    if ("function" != typeof e) return new s("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var a = t[n];
                    if (!Array.isArray(a)) {
                        var c = l(a);
                        return new s("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected an array.")
                    }
                    for (var u = 0; u < a.length; u++) {
                        var f = e(a, u, r, i, o + "[" + u + "]", Cr);
                        if (f instanceof Error) return f
                    }
                    return null
                })
            },
            element: function () {
                return c(function (t, n, r, i, o) {
                    var a = t[n];
                    if (!e(a)) {
                        var c = l(a);
                        return new s("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected a single ReactElement.")
                    }
                    return null
                })
            }(),
            instanceOf: function (e) {
                return c(function (t, n, r, o, a) {
                    if (!(t[n] instanceof e)) {
                        var c = e.name || i, u = function (e) {
                            if (!e.constructor || !e.constructor.name) return i;
                            return e.constructor.name
                        }(t[n]);
                        return new s("Invalid " + o + " `" + a + "` of type `" + u + "` supplied to `" + r + "`, expected instance of `" + c + "`.")
                    }
                    return null
                })
            },
            node: function () {
                return c(function (e, t, n, r, i) {
                    if (!f(e[t])) return new s("Invalid " + r + " `" + i + "` supplied to `" + n + "`, expected a ReactNode.");
                    return null
                })
            }(),
            objectOf: function (e) {
                return c(function (t, n, r, i, o) {
                    if ("function" != typeof e) return new s("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var a = t[n], c = l(a);
                    if ("object" !== c) return new s("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected an object.");
                    for (var u in a) if (a.hasOwnProperty(u)) {
                        var f = e(a, u, r, i, o + "." + u, Cr);
                        if (f instanceof Error) return f
                    }
                    return null
                })
            },
            oneOf: function (e) {
                if (!Array.isArray(e)) return kr("Invalid argument supplied to oneOf, expected an instance of array."), Or;
                return c(function (t, n, r, i, o) {
                    for (var c = t[n], u = 0; u < e.length; u++) if (a(c, e[u])) return null;
                    var f = JSON.stringify(e);
                    return new s("Invalid " + i + " `" + o + "` of value `" + c + "` supplied to `" + r + "`, expected one of " + f + ".")
                })
            },
            oneOfType: function (e) {
                if (!Array.isArray(e)) return kr("Invalid argument supplied to oneOfType, expected an instance of array."), Or;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ("function" != typeof n) return kr("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + p(n) + " at index " + t + "."), Or
                }
                return c(function (t, n, r, i, o) {
                    for (var a = 0; a < e.length; a++) {
                        var c = e[a];
                        if (null == c(t, n, r, i, o, Cr)) return null
                    }
                    return new s("Invalid " + i + " `" + o + "` supplied to `" + r + "`.")
                })
            },
            shape: function (e) {
                return c(function (t, n, r, i, o) {
                    var a = t[n], c = l(a);
                    if ("object" !== c) return new s("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                    for (var u in e) {
                        var f = e[u];
                        if (f) {
                            var d = f(a, u, r, i, o + "." + u, Cr);
                            if (d) return d
                        }
                    }
                    return null
                })
            },
            exact: function (e) {
                return c(function (t, n, r, i, o) {
                    var a = t[n], c = l(a);
                    if ("object" !== c) return new s("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                    var u = _r({}, t[n], e);
                    for (var f in u) {
                        var d = e[f];
                        if (!d) return new s("Invalid " + i + " `" + o + "` key `" + f + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                        var p = d(a, f, r, i, o + "." + f, Cr);
                        if (p) return p
                    }
                    return null
                })
            }
        };

        function a(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }

        function s(e) {
            this.message = e, this.stack = ""
        }

        function c(e) {
            var n = {}, r = 0;

            function o(o, a, c, u, f, l, d) {
                if (u = u || i, l = l || c, d !== Cr) {
                    if (t) {
                        var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw p.name = "Invariant Violation", p
                    }
                    if ("undefined" != typeof console) {
                        var h = u + ":" + c;
                        !n[h] && r < 3 && (kr("You are manually calling a React.PropTypes validation function for the `" + l + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[h] = !0, r++)
                    }
                }
                return null == a[c] ? o ? null === a[c] ? new s("The " + f + " `" + l + "` is marked as required in `" + u + "`, but its value is `null`.") : new s("The " + f + " `" + l + "` is marked as required in `" + u + "`, but its value is `undefined`.") : null : e(a, c, u, f, l)
            }

            var a = o.bind(null, !1);
            return a.isRequired = o.bind(null, !0), a
        }

        function u(e) {
            return c(function (t, n, r, i, o, a) {
                var c = t[n];
                return l(c) !== e ? new s("Invalid " + i + " `" + o + "` of type `" + d(c) + "` supplied to `" + r + "`, expected `" + e + "`.") : null
            })
        }

        function f(t) {
            switch (typeof t) {
                case"number":
                case"string":
                case"undefined":
                    return !0;
                case"boolean":
                    return !t;
                case"object":
                    if (Array.isArray(t)) return t.every(f);
                    if (null === t || e(t)) return !0;
                    var i = function (e) {
                        var t = e && (n && e[n] || e[r]);
                        if ("function" == typeof t) return t
                    }(t);
                    if (!i) return !1;
                    var o, a = i.call(t);
                    if (i !== t.entries) {
                        for (; !(o = a.next()).done;) if (!f(o.value)) return !1
                    } else for (; !(o = a.next()).done;) {
                        var s = o.value;
                        if (s && !f(s[1])) return !1
                    }
                    return !0;
                default:
                    return !1
            }
        }

        function l(e) {
            var t = typeof e;
            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function (e, t) {
                return "symbol" === e || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol
            }(t, e) ? "symbol" : t
        }

        function d(e) {
            if (null == e) return "" + e;
            var t = l(e);
            if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp"
            }
            return t
        }

        function p(e) {
            var t = d(e);
            switch (t) {
                case"array":
                case"object":
                    return "an " + t;
                case"boolean":
                case"date":
                case"regexp":
                    return "a " + t;
                default:
                    return t
            }
        }

        return s.prototype = Error.prototype, o.checkPropTypes = Ar, o.PropTypes = o, o
    }, Dr = u(function (e) {
        var t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        e.exports = Tr(function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === t
        }, !0)
    }), Mr = u(function (e) {
        (e.exports = {}).forEach = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = t(e[n]);
                if (r) return r
            }
        }
    }), zr = u(function (e) {
        var t = e.exports = {};
        t.isIE = function (e) {
            return (-1 !== (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")) && (!e || e === function () {
                var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i");
                do {
                    t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e"
                } while (n[0]);
                return e > 4 ? e : void 0
            }());
            var t
        }, t.isLegacyOpera = function () {
            return !!window.opera
        }
    }), Pr = u(function (e) {
        (e.exports = {}).getOption = function (e, t, n) {
            var r = e[t];
            if (null == r && void 0 !== n) return n;
            return r
        }
    }), Ir = function (e) {
        var t = (e = e || {}).reporter, n = Pr.getOption(e, "async", !0), r = Pr.getOption(e, "auto", !0);
        r && !n && (t && t.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
        var i, o = Fr(), a = !1;

        function s() {
            for (a = !0; o.size();) {
                var e = o;
                o = Fr(), e.process()
            }
            a = !1
        }

        function c() {
            var e;
            e = s, i = setTimeout(e, 0)
        }

        return {
            add: function (e, t) {
                !a && r && n && 0 === o.size() && c(), o.add(e, t)
            }, force: function (e) {
                a || (void 0 === e && (e = n), i && (clearTimeout(i), i = null), e ? c() : s())
            }
        }
    };

    function Fr() {
        var e = {}, t = 0, n = 0, r = 0;
        return {
            add: function (i, o) {
                o || (o = i, i = 0), i > n ? n = i : i < r && (r = i), e[i] || (e[i] = []), e[i].push(o), t++
            }, process: function () {
                for (var t = r; t <= n; t++) for (var i = e[t], o = 0; o < i.length; o++) (0, i[o])()
            }, size: function () {
                return t
            }
        }
    }

    var Br = "_erd";

    function Lr(e) {
        return e[Br]
    }

    var Rr = {
        initState: function (e) {
            return e[Br] = {}, Lr(e)
        }, getState: Lr, cleanState: function (e) {
            delete e[Br]
        }
    }, Hr = Mr.forEach, Nr = function (e) {
        var t = (e = e || {}).reporter, n = e.batchProcessor, r = e.stateHandler.getState,
            i = (e.stateHandler.hasState, e.idHandler);
        if (!n) throw new Error("Missing required dependency: batchProcessor");
        if (!t) throw new Error("Missing required dependency: reporter.");
        var o = function () {
            var e = document.createElement("div");
            e.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
            var t = document.createElement("div");
            t.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;", t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
            var n = 500 - t.clientWidth, r = 500 - t.clientHeight;
            return document.body.removeChild(t), {width: n, height: r}
        }(), a = "erd_scroll_detection_container";

        function s(e, n, r) {
            if (e.addEventListener) e.addEventListener(n, r); else {
                if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                e.attachEvent("on" + n, r)
            }
        }

        function c(e, n, r) {
            if (e.removeEventListener) e.removeEventListener(n, r); else {
                if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                e.detachEvent("on" + n, r)
            }
        }

        function u(e) {
            return r(e).container.childNodes[0].childNodes[0].childNodes[0]
        }

        function f(e) {
            return r(e).container.childNodes[0].childNodes[0].childNodes[1]
        }

        return function (e, t) {
            if (!document.getElementById(e)) {
                var n = t + "_animation", r = t + "_animation_active",
                    i = "/* Created by the element-resize-detector library. */\n";
                i += "." + t + " > div::-webkit-scrollbar { display: none; }\n\n", i += "." + r + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + n + "; animation-name: " + n + "; }\n", i += "@-webkit-keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n", function (t, n) {
                    n = n || function (e) {
                        document.head.appendChild(e)
                    };
                    var r = document.createElement("style");
                    r.innerHTML = t, r.id = e, n(r)
                }(i += "@keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
            }
        }("erd_scroll_detection_scrollbar_style", a), {
            makeDetectable: function (e, c, l) {
                function d() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if (n.unshift(i.get(c), "Scroll: "), t.log.apply) t.log.apply(null, n); else for (var r = 0; r < n.length; r++) t.log(n[r])
                    }
                }

                function p(e) {
                    var t = r(e).container.childNodes[0], n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf("px")
                }

                function h() {
                    var e = window.getComputedStyle(c), t = {};
                    return t.position = e.position, t.width = c.offsetWidth, t.height = c.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                }

                function m() {
                    if (d("storeStyle invoked."), r(c)) {
                        var e = h();
                        r(c).style = e
                    } else d("Aborting because element has been uninstalled")
                }

                function v(e, t, n) {
                    r(e).lastWidth = t, r(e).lastHeight = n
                }

                function g() {
                    return 2 * o.width + 1
                }

                function b() {
                    return 2 * o.height + 1
                }

                function y(e) {
                    return e + 10 + g()
                }

                function x(e) {
                    return e + 10 + b()
                }

                function w(e, t, n) {
                    var r = u(e), i = f(e), o = y(t), a = x(n), s = function (e) {
                        return 2 * e + g()
                    }(t), c = function (e) {
                        return 2 * e + b()
                    }(n);
                    r.scrollLeft = o, r.scrollTop = a, i.scrollLeft = s, i.scrollTop = c
                }

                function _() {
                    var e = r(c).container;
                    if (!e) {
                        (e = document.createElement("div")).className = a, e.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;", r(c).container = e, function (e) {
                            e.className += " " + a + "_animation_active"
                        }(e), c.appendChild(e);
                        var t = function () {
                            r(c).onRendered && r(c).onRendered()
                        };
                        s(e, "animationstart", t), r(c).onAnimationStart = t
                    }
                    return e
                }

                function C() {
                    if (d("Injecting elements"), r(c)) {
                        !function () {
                            var e = r(c).style;
                            if ("static" === e.position) {
                                c.style.position = "relative";
                                var n = function (e, t, n, r) {
                                    var i = n[r];
                                    "auto" !== i && "0" !== function (e) {
                                        return e.replace(/[^-\d\.]/g, "")
                                    }(i) && (e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0)
                                };
                                n(t, c, e, "top"), n(t, c, e, "right"), n(t, c, e, "bottom"), n(t, c, e, "left")
                            }
                        }();
                        var e = r(c).container;
                        e || (e = _());
                        var n, i, u, f, l = o.width, p = o.height,
                            h = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; left: " + (n = (n = -(1 + l)) ? n + "px" : "0") + "; top: " + (i = (i = -(1 + p)) ? i + "px" : "0") + "; right: " + (f = (f = -l) ? f + "px" : "0") + "; bottom: " + (u = (u = -p) ? u + "px" : "0") + ";",
                            m = document.createElement("div"), v = document.createElement("div"),
                            g = document.createElement("div"), b = document.createElement("div"),
                            y = document.createElement("div"), x = document.createElement("div");
                        m.dir = "ltr", m.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", m.className = a, v.className = a, v.style.cssText = h, g.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", b.style.cssText = "position: absolute; left: 0; top: 0;", y.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", x.style.cssText = "position: absolute; width: 200%; height: 200%;", g.appendChild(b), y.appendChild(x), v.appendChild(g), v.appendChild(y), m.appendChild(v), e.appendChild(m), s(g, "scroll", w), s(y, "scroll", C), r(c).onExpandScroll = w, r(c).onShrinkScroll = C
                    } else d("Aborting because element has been uninstalled");

                    function w() {
                        r(c).onExpand && r(c).onExpand()
                    }

                    function C() {
                        r(c).onShrink && r(c).onShrink()
                    }
                }

                function S() {
                    function o(e, t, n) {
                        var r = function (e) {
                            return u(e).childNodes[0]
                        }(e), i = y(t), o = x(n);
                        r.style.width = i + "px", r.style.height = o + "px"
                    }

                    function a(a) {
                        var u = c.offsetWidth, f = c.offsetHeight;
                        d("Storing current size", u, f), v(c, u, f), n.add(0, function () {
                            if (r(c)) if (s()) {
                                if (e.debug) {
                                    var n = c.offsetWidth, a = c.offsetHeight;
                                    n === u && a === f || t.warn(i.get(c), "Scroll: Size changed before updating detector elements.")
                                }
                                o(c, u, f)
                            } else d("Aborting because element container has not been initialized"); else d("Aborting because element has been uninstalled")
                        }), n.add(1, function () {
                            r(c) ? s() ? w(c, u, f) : d("Aborting because element container has not been initialized") : d("Aborting because element has been uninstalled")
                        }), a && n.add(2, function () {
                            r(c) ? s() ? a() : d("Aborting because element container has not been initialized") : d("Aborting because element has been uninstalled")
                        })
                    }

                    function s() {
                        return !!r(c).container
                    }

                    function l() {
                        d("notifyListenersIfNeeded invoked");
                        var e = r(c);
                        return void 0 === r(c).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? d("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? d("Not notifying: Size already notified") : (d("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, void Hr(r(c).listeners, function (e) {
                            e(c)
                        }))
                    }

                    function h() {
                        if (d("Scroll detected."), p(c)) d("Scroll event fired while unrendered. Ignoring..."); else {
                            var e = c.offsetWidth, t = c.offsetHeight;
                            e !== r(c).lastWidth || t !== r(c).lastHeight ? (d("Element size changed."), a(l)) : d("Element size has not changed (" + e + "x" + t + ").")
                        }
                    }

                    if (d("registerListenersAndPositionElements invoked."), r(c)) {
                        r(c).onRendered = function () {
                            if (d("startanimation triggered."), p(c)) d("Ignoring since element is still unrendered..."); else {
                                d("Element rendered.");
                                var e = u(c), t = f(c);
                                0 !== e.scrollLeft && 0 !== e.scrollTop && 0 !== t.scrollLeft && 0 !== t.scrollTop || (d("Scrollbars out of sync. Updating detector elements..."), a(l))
                            }
                        }, r(c).onExpand = h, r(c).onShrink = h;
                        var m = r(c).style;
                        o(c, m.width, m.height)
                    } else d("Aborting because element has been uninstalled")
                }

                function j() {
                    if (d("finalizeDomMutation invoked."), r(c)) {
                        var e = r(c).style;
                        v(c, e.width, e.height), w(c, e.width, e.height)
                    } else d("Aborting because element has been uninstalled")
                }

                function E() {
                    l(c)
                }

                function A() {
                    var e;
                    d("Installing..."), r(c).listeners = [], e = h(), r(c).startSize = {
                        width: e.width,
                        height: e.height
                    }, d("Element start size", r(c).startSize), n.add(0, m), n.add(1, C), n.add(2, S), n.add(3, j), n.add(4, E)
                }

                l || (l = c, c = e, e = null), e = e || {}, d("Making detectable..."), function (e) {
                    return !function (e) {
                        return e === e.ownerDocument.body || e.ownerDocument.body.contains(e)
                    }(e) || null === window.getComputedStyle(e)
                }(c) ? (d("Element is detached"), _(), d("Waiting until element is attached..."), r(c).onRendered = function () {
                    d("Element is now attached"), A()
                }) : A()
            }, addListener: function (e, t) {
                if (!r(e).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
                r(e).listeners.push(t)
            }, uninstall: function (e) {
                var t = r(e);
                t && (t.onExpandScroll && c(u(e), "scroll", t.onExpandScroll), t.onShrinkScroll && c(f(e), "scroll", t.onShrinkScroll), t.onAnimationStart && c(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
            }
        }
    }, Wr = Mr.forEach;

    function Ur(e) {
        return Array.isArray(e) || void 0 !== e.length
    }

    function qr(e) {
        if (Array.isArray(e)) return e;
        var t = [];
        return Wr(e, function (e) {
            t.push(e)
        }), t
    }

    function Gr(e) {
        return e && 1 === e.nodeType
    }

    var Vr = function (e) {
        var t;
        if ((e = e || {}).idHandler) t = {
            get: function (t) {
                return e.idHandler.get(t, !0)
            }, set: e.idHandler.set
        }; else {
            var n = function (e) {
                var t = e.idGenerator, n = e.stateHandler.getState;
                return {
                    get: function (e) {
                        var t = n(e);
                        return t && void 0 !== t.id ? t.id : null
                    }, set: function (e) {
                        var r = n(e);
                        if (!r) throw new Error("setId required the element to have a resize detection state.");
                        var i = t.generate();
                        return r.id = i, i
                    }
                }
            }({
                idGenerator: function () {
                    var e = 1;
                    return {
                        generate: function () {
                            return e++
                        }
                    }
                }(), stateHandler: Rr
            });
            t = n
        }
        var r = e.reporter;
        r || (r = function (e) {
            function t() {
            }

            var n = {log: t, warn: t, error: t};
            if (!e && window.console) {
                var r = function (e, t) {
                    e[t] = function () {
                        var e = console[t];
                        if (e.apply) e.apply(console, arguments); else for (var n = 0; n < arguments.length; n++) e(arguments[n])
                    }
                };
                r(n, "log"), r(n, "warn"), r(n, "error")
            }
            return n
        }(!1 === r));
        var i = Kr(e, "batchProcessor", Ir({reporter: r})), o = {};
        o.callOnAdd = !!Kr(e, "callOnAdd", !0), o.debug = !!Kr(e, "debug", !1);
        var a, s = function (e) {
                var t = {};

                function n(n) {
                    var r = e.get(n);
                    return void 0 === r ? [] : t[r] || []
                }

                return {
                    get: n, add: function (n, r) {
                        var i = e.get(n);
                        t[i] || (t[i] = []), t[i].push(r)
                    }, removeListener: function (e, t) {
                        for (var r = n(e), i = 0, o = r.length; i < o; ++i) if (r[i] === t) {
                            r.splice(i, 1);
                            break
                        }
                    }, removeAllListeners: function (e) {
                        var t = n(e);
                        t && (t.length = 0)
                    }
                }
            }(t), c = function (e) {
                var t = e.stateHandler.getState;
                return {
                    isDetectable: function (e) {
                        var n = t(e);
                        return n && !!n.isDetectable
                    }, markAsDetectable: function (e) {
                        t(e).isDetectable = !0
                    }, isBusy: function (e) {
                        return !!t(e).busy
                    }, markBusy: function (e, n) {
                        t(e).busy = !!n
                    }
                }
            }({stateHandler: Rr}), u = Kr(e, "strategy", "object"),
            f = {reporter: r, batchProcessor: i, stateHandler: Rr, idHandler: t};
        if ("scroll" === u && (zr.isLegacyOpera() ? (r.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), u = "object") : zr.isIE(9) && (r.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), u = "object")), "scroll" === u) a = Nr(f); else {
            if ("object" !== u) throw new Error("Invalid strategy name: " + u);
            a = function (e) {
                var t = (e = e || {}).reporter, n = e.batchProcessor, r = e.stateHandler.getState;
                if (!t) throw new Error("Missing required dependency: reporter.");

                function i(e) {
                    return r(e).object
                }

                return {
                    makeDetectable: function (e, i, o) {
                        o || (o = i, i = e, e = null), (e = e || {}).debug, zr.isIE(8) ? o(i) : function (e, i) {
                            var o = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
                                a = !1, s = window.getComputedStyle(e), c = e.offsetWidth, u = e.offsetHeight;

                            function f() {
                                function n() {
                                    if ("static" === s.position) {
                                        e.style.position = "relative";
                                        var n = function (e, t, n, r) {
                                            var i = n[r];
                                            "auto" !== i && "0" !== function (e) {
                                                return e.replace(/[^-\d\.]/g, "")
                                            }(i) && (e.warn("An element that is positioned static has style." + r + "=" + i + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", t), t.style[r] = 0)
                                        };
                                        n(t, e, s, "top"), n(t, e, s, "right"), n(t, e, s, "bottom"), n(t, e, s, "left")
                                    }
                                }

                                "" !== s.position && (n(), a = !0);
                                var c = document.createElement("object");
                                c.style.cssText = o, c.tabIndex = -1, c.type = "text/html", c.onload = function () {
                                    a || n(), function e(t, n) {
                                        t.contentDocument ? n(t.contentDocument) : setTimeout(function () {
                                            e(t, n)
                                        }, 100)
                                    }(this, function (t) {
                                        i(e)
                                    })
                                }, zr.isIE() || (c.data = "about:blank"), e.appendChild(c), r(e).object = c, zr.isIE() && (c.data = "about:blank")
                            }

                            r(e).startSize = {width: c, height: u}, n ? n.add(f) : f()
                        }(i, o)
                    }, addListener: function (e, t) {
                        if (!i(e)) throw new Error("Element is not detectable by this strategy.");

                        function n() {
                            t(e)
                        }

                        zr.isIE(8) ? (r(e).object = {proxy: n}, e.attachEvent("onresize", n)) : i(e).contentDocument.defaultView.addEventListener("resize", n)
                    }, uninstall: function (e) {
                        zr.isIE(8) ? e.detachEvent("onresize", r(e).object.proxy) : e.removeChild(i(e)), delete r(e).object
                    }
                }
            }(f)
        }
        var l = {};
        return {
            listenTo: function (e, n, i) {
                function u(e) {
                    var t = s.get(e);
                    Wr(t, function (t) {
                        t(e)
                    })
                }

                function f(e, t, n) {
                    s.add(t, n), e && n(t)
                }

                if (i || (i = n, n = e, e = {}), !n) throw new Error("At least one element required.");
                if (!i) throw new Error("Listener required.");
                if (Gr(n)) n = [n]; else {
                    if (!Ur(n)) return r.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    n = qr(n)
                }
                var d = 0, p = Kr(e, "callOnAdd", o.callOnAdd), h = Kr(e, "onReady", function () {
                }), m = Kr(e, "debug", o.debug);
                Wr(n, function (e) {
                    Rr.getState(e) || (Rr.initState(e), t.set(e));
                    var o = t.get(e);
                    if (m && r.log("Attaching listener to element", o, e), !c.isDetectable(e)) return m && r.log(o, "Not detectable."), c.isBusy(e) ? (m && r.log(o, "System busy making it detectable"), f(p, e, i), l[o] = l[o] || [], void l[o].push(function () {
                        ++d === n.length && h()
                    })) : (m && r.log(o, "Making detectable..."), c.markBusy(e, !0), a.makeDetectable({debug: m}, e, function (e) {
                        if (m && r.log(o, "onElementDetectable"), Rr.getState(e)) {
                            c.markAsDetectable(e), c.markBusy(e, !1), a.addListener(e, u), f(p, e, i);
                            var t = Rr.getState(e);
                            if (t && t.startSize) {
                                var s = e.offsetWidth, v = e.offsetHeight;
                                t.startSize.width === s && t.startSize.height === v || u(e)
                            }
                            l[o] && Wr(l[o], function (e) {
                                e()
                            })
                        } else m && r.log(o, "Element uninstalled before being detectable.");
                        delete l[o], ++d === n.length && h()
                    }));
                    m && r.log(o, "Already detecable, adding listener."), f(p, e, i), d++
                }), d === n.length && h()
            }, removeListener: s.removeListener, removeAllListeners: s.removeAllListeners, uninstall: function (e) {
                if (!e) return r.error("At least one element is required.");
                if (Gr(e)) e = [e]; else {
                    if (!Ur(e)) return r.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                    e = qr(e)
                }
                Wr(e, function (e) {
                    s.removeAllListeners(e), a.uninstall(e), Rr.cleanState(e)
                })
            }
        }
    };

    function Kr(e, t, n) {
        var r = e[t];
        return null == r && void 0 !== n ? n : r
    }

    var $r = function (e, t, n, r, i, o, a, s) {
        if (void 0 === t) throw new Error("invariant requires an error message argument");
        if (!e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var u = [n, r, i, o, a, s], f = 0;
                (c = new Error(t.replace(/%s/g, function () {
                    return u[f++]
                }))).name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }, Yr = c(u(function (e, n) {
        Object.defineProperty(n, "__esModule", {value: !0});
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), a = l(r), s = l(Dr), c = l(t), u = l(Vr), f = l($r);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var d = function (e) {
            function t() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {initiated: !1}, e.onResize = e.onResize.bind(e), e
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component), o(t, null, [{
                key: "getDomNodeDimensions", value: function (e) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    }
                }
            }]), o(t, [{
                key: "componentDidMount", value: function () {
                    this.parentNode = c.default.findDOMNode(this).parentNode, this.elementResizeDetector = (0, u.default)({
                        strategy: "scroll",
                        callOnAdd: !1
                    }), this.elementResizeDetector.listenTo(this.parentNode, this.onResize), this.onResize()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.elementResizeDetector.uninstall(this.parentNode)
                }
            }, {
                key: "onResize", value: function () {
                    var e = t.getDomNodeDimensions(this.parentNode);
                    this.setState(i({initiated: !0}, e))
                }
            }, {
                key: "render", value: function () {
                    if ((0, f.default)(this.props.children, "Expected children to be one of function or React.Element"), !this.state.initiated) return a.default.createElement("div", null);
                    if ("function" == typeof this.props.children) {
                        var e = this.props.children(this.state);
                        return e && r.Children.only(e)
                    }
                    return r.Children.only(a.default.cloneElement(this.props.children, this.state))
                }
            }]), t
        }();
        d.propTypes = {children: s.default.oneOfType([s.default.element, s.default.func]).isRequired}, n.default = d
    })), Zr = 1e-6, Xr = "undefined" != typeof Float32Array ? Float32Array : Array;
    Math.PI;

    function Qr() {
        var e = new Xr(16);
        return Xr != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e
    }

    function Jr(e, t) {
        var n = t[0], r = t[1], i = t[2], o = t[3], a = t[4], s = t[5], c = t[6], u = t[7], f = t[8], l = t[9],
            d = t[10], p = t[11], h = t[12], m = t[13], v = t[14], g = t[15], b = n * s - r * a, y = n * c - i * a,
            x = n * u - o * a, w = r * c - i * s, _ = r * u - o * s, C = i * u - o * c, S = f * m - l * h,
            j = f * v - d * h, E = f * g - p * h, A = l * v - d * m, k = l * g - p * m, O = d * g - p * v,
            T = b * O - y * k + x * A + w * E - _ * j + C * S;
        return T ? (T = 1 / T, e[0] = (s * O - c * k + u * A) * T, e[1] = (i * k - r * O - o * A) * T, e[2] = (m * C - v * _ + g * w) * T, e[3] = (d * _ - l * C - p * w) * T, e[4] = (c * E - a * O - u * j) * T, e[5] = (n * O - i * E + o * j) * T, e[6] = (v * x - h * C - g * y) * T, e[7] = (f * C - d * x + p * y) * T, e[8] = (a * k - s * E + u * S) * T, e[9] = (r * E - n * k - o * S) * T, e[10] = (h * _ - m * x + g * b) * T, e[11] = (l * x - f * _ - p * b) * T, e[12] = (s * j - a * A - c * S) * T, e[13] = (n * A - r * j + i * S) * T, e[14] = (m * y - h * w - v * b) * T, e[15] = (f * w - l * y + d * b) * T, e) : null
    }

    function ei(e, t, n) {
        var r = t[0], i = t[1], o = t[2], a = t[3], s = t[4], c = t[5], u = t[6], f = t[7], l = t[8], d = t[9],
            p = t[10], h = t[11], m = t[12], v = t[13], g = t[14], b = t[15], y = n[0], x = n[1], w = n[2], _ = n[3];
        return e[0] = y * r + x * s + w * l + _ * m, e[1] = y * i + x * c + w * d + _ * v, e[2] = y * o + x * u + w * p + _ * g, e[3] = y * a + x * f + w * h + _ * b, y = n[4], x = n[5], w = n[6], _ = n[7], e[4] = y * r + x * s + w * l + _ * m, e[5] = y * i + x * c + w * d + _ * v, e[6] = y * o + x * u + w * p + _ * g, e[7] = y * a + x * f + w * h + _ * b, y = n[8], x = n[9], w = n[10], _ = n[11], e[8] = y * r + x * s + w * l + _ * m, e[9] = y * i + x * c + w * d + _ * v, e[10] = y * o + x * u + w * p + _ * g, e[11] = y * a + x * f + w * h + _ * b, y = n[12], x = n[13], w = n[14], _ = n[15], e[12] = y * r + x * s + w * l + _ * m, e[13] = y * i + x * c + w * d + _ * v, e[14] = y * o + x * u + w * p + _ * g, e[15] = y * a + x * f + w * h + _ * b, e
    }

    function ti(e, t, n) {
        var r = n[0], i = n[1], o = n[2], a = void 0, s = void 0, c = void 0, u = void 0, f = void 0, l = void 0,
            d = void 0, p = void 0, h = void 0, m = void 0, v = void 0, g = void 0;
        return t === e ? (e[12] = t[0] * r + t[4] * i + t[8] * o + t[12], e[13] = t[1] * r + t[5] * i + t[9] * o + t[13], e[14] = t[2] * r + t[6] * i + t[10] * o + t[14], e[15] = t[3] * r + t[7] * i + t[11] * o + t[15]) : (a = t[0], s = t[1], c = t[2], u = t[3], f = t[4], l = t[5], d = t[6], p = t[7], h = t[8], m = t[9], v = t[10], g = t[11], e[0] = a, e[1] = s, e[2] = c, e[3] = u, e[4] = f, e[5] = l, e[6] = d, e[7] = p, e[8] = h, e[9] = m, e[10] = v, e[11] = g, e[12] = a * r + f * i + h * o + t[12], e[13] = s * r + l * i + m * o + t[13], e[14] = c * r + d * i + v * o + t[14], e[15] = u * r + p * i + g * o + t[15]), e
    }

    function ni(e, t, n) {
        var r = Math.sin(n), i = Math.cos(n), o = t[0], a = t[1], s = t[2], c = t[3], u = t[8], f = t[9], l = t[10],
            d = t[11];
        return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = o * i - u * r, e[1] = a * i - f * r, e[2] = s * i - l * r, e[3] = c * i - d * r, e[8] = o * r + u * i, e[9] = a * r + f * i, e[10] = s * r + l * i, e[11] = c * r + d * i, e
    }

    function ri(e, t, n, r) {
        var i = t[0], o = t[1], a = t[2], s = t[3], c = i + i, u = o + o, f = a + a, l = i * c, d = i * u, p = i * f,
            h = o * u, m = o * f, v = a * f, g = s * c, b = s * u, y = s * f, x = r[0], w = r[1], _ = r[2];
        return e[0] = (1 - (h + v)) * x, e[1] = (d + y) * x, e[2] = (p - b) * x, e[3] = 0, e[4] = (d - y) * w, e[5] = (1 - (l + v)) * w, e[6] = (m + g) * w, e[7] = 0, e[8] = (p + b) * _, e[9] = (m - g) * _, e[10] = (1 - (l + h)) * _, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e
    }

    var ii = ei;

    function oi() {
        var e = new Xr(3);
        return Xr != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
    }

    function ai(e, t, n) {
        var r = new Xr(3);
        return r[0] = e, r[1] = t, r[2] = n, r
    }

    function si(e, t, n) {
        return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e
    }

    function ci(e, t, n) {
        return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e
    }

    function ui(e, t, n, r) {
        return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e
    }

    function fi(e, t) {
        var n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
        return Math.sqrt(n * n + r * r + i * i)
    }

    function li(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }

    function di(e, t) {
        var n = t[0], r = t[1], i = t[2], o = n * n + r * r + i * i;
        return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o, e[2] = t[2] * o), e
    }

    function pi(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function hi(e, t, n) {
        var r = t[0], i = t[1], o = t[2], a = n[0], s = n[1], c = n[2];
        return e[0] = i * c - o * s, e[1] = o * a - r * c, e[2] = r * s - i * a, e
    }

    function mi(e, t, n) {
        var r = t[0], i = t[1], o = t[2], a = n[3] * r + n[7] * i + n[11] * o + n[15];
        return a = a || 1, e[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, e[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, e[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, e
    }

    function vi(e, t, n) {
        var r = n[0], i = n[1], o = n[2], a = n[3], s = t[0], c = t[1], u = t[2], f = i * u - o * c, l = o * s - r * u,
            d = r * c - i * s, p = i * d - o * l, h = o * f - r * d, m = r * l - i * f, v = 2 * a;
        return f *= v, l *= v, d *= v, p *= 2, h *= 2, m *= 2, e[0] = s + f + p, e[1] = c + l + h, e[2] = u + d + m, e
    }

    var gi, bi = function (e) {
        var t = e[0], n = e[1], r = e[2];
        return Math.sqrt(t * t + n * n + r * r)
    };
    gi = oi();
    !function () {
        var e, t = (e = new Xr(4), Xr != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e)
    }();

    function yi() {
        var e = new Xr(4);
        return Xr != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e
    }

    function xi(e, t, n) {
        n *= .5;
        var r = Math.sin(n);
        return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = Math.cos(n), e
    }

    function wi(e, t, n) {
        n *= .5;
        var r = t[0], i = t[1], o = t[2], a = t[3], s = Math.sin(n), c = Math.cos(n);
        return e[0] = r * c - o * s, e[1] = i * c + a * s, e[2] = o * c + r * s, e[3] = a * c - i * s, e
    }

    function _i(e, t, n, r) {
        var i = t[0], o = t[1], a = t[2], s = t[3], c = n[0], u = n[1], f = n[2], l = n[3], d = void 0, p = void 0,
            h = void 0, m = void 0, v = void 0;
        return (p = i * c + o * u + a * f + s * l) < 0 && (p = -p, c = -c, u = -u, f = -f, l = -l), 1 - p > Zr ? (d = Math.acos(p), h = Math.sin(d), m = Math.sin((1 - r) * d) / h, v = Math.sin(r * d) / h) : (m = 1 - r, v = r), e[0] = m * i + v * c, e[1] = m * o + v * u, e[2] = m * a + v * f, e[3] = m * s + v * l, e
    }

    var Ci, Si, ji, Ei, Ai, ki, Oi, Ti = function (e, t) {
        var n = t[0], r = t[1], i = t[2], o = t[3], a = n * n + r * r + i * i + o * o;
        return a > 0 && (a = 1 / Math.sqrt(a), e[0] = n * a, e[1] = r * a, e[2] = i * a, e[3] = o * a), e
    }, Di = (Ci = oi(), Si = ai(1, 0, 0), ji = ai(0, 1, 0), function (e, t, n) {
        var r = pi(t, n);
        return r < -.999999 ? (hi(Ci, Si, t), bi(Ci) < 1e-6 && hi(Ci, ji, t), di(Ci, Ci), xi(e, Ci, Math.PI), e) : r > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (hi(Ci, t, n), e[0] = Ci[0], e[1] = Ci[1], e[2] = Ci[2], e[3] = 1 + r, Ti(e, e))
    });
    Ei = yi(), Ai = yi(), ki = new Xr(9), Xr != Float32Array && (ki[1] = 0, ki[2] = 0, ki[3] = 0, ki[5] = 0, ki[6] = 0, ki[7] = 0), ki[0] = 1, ki[4] = 1, ki[8] = 1, Oi = ki;
    !function () {
        var e, t = (e = new Xr(2), Xr != Float32Array && (e[0] = 0, e[1] = 0), e)
    }();

    class Mi {
        constructor(e, t) {
            o(this, "left", void 0), o(this, "right", void 0), o(this, "top", void 0), o(this, "bottom", void 0), o(this, "width", void 0), o(this, "height", void 0), this.left = e, this.top = t, this.right = -e, this.bottom = -t, this.width = 2 * Math.abs(e), this.height = 2 * Math.abs(t)
        }
    }

    function zi(e, t, n) {
        const r = t / n, i = Math.abs(e);
        return new Mi(-i / 2 * r, i / 2)
    }

    const Pi = 0, Ii = 1, Fi = [0, 0, 0, 0];
    var Bi = u(function (e, t) {
        function n(e, t) {
            return e === t
        }

        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n, r = null, i = null;
            return function () {
                return function (e, t, n) {
                    if (null === t || null === n || t.length !== n.length) return !1;
                    for (var r = t.length, i = 0; i < r; i++) if (!e(t[i], n[i])) return !1;
                    return !0
                }(t, r, arguments) || (i = e.apply(null, arguments)), r = arguments, i
            }
        }

        function i(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return function () {
                for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                var a = 0, s = i.pop(), c = function (e) {
                    var t = Array.isArray(e[0]) ? e[0] : e;
                    if (!t.every(function (e) {
                        return "function" == typeof e
                    })) {
                        var n = t.map(function (e) {
                            return typeof e
                        }).join(", ");
                        throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
                    }
                    return t
                }(i), u = e.apply(void 0, [function () {
                    return a++, s.apply(null, arguments)
                }].concat(n)), f = r(function () {
                    for (var e = [], t = c.length, n = 0; n < t; n++) e.push(c[n].apply(null, arguments));
                    return u.apply(null, e)
                });
                return f.resultFunc = s, f.recomputations = function () {
                    return a
                }, f.resetRecomputations = function () {
                    return a = 0
                }, f
            }
        }

        t.__esModule = !0, t.defaultMemoize = r, t.createSelectorCreator = i, t.createStructuredSelector = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
            if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
            var n = Object.keys(e);
            return t(n.map(function (t) {
                return e[t]
            }), function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.reduce(function (e, t, r) {
                    return e[n[r]] = t, e
                }, {})
            })
        };
        var o = t.createSelector = i(r)
    });
    c(Bi);
    Bi.defaultMemoize, Bi.createSelectorCreator, Bi.createStructuredSelector;
    var Li = Bi.createSelector;
    const Ri = "\n  uniform vec3 _position;\n  uniform vec4 _rotation;\n\n  // rotate a 3d point v by a rotation quaternion q\n  vec3 rotate(vec3 v, vec4 q) {\n    vec3 temp = cross(q.xyz, v) + q.w * v;\n    return v + (2.0 * cross(q.xyz, temp));\n  }\n\n  vec3 applyPose(vec3 point) {\n    // rotate the point and then add the position of the pose\n    return rotate(point, _rotation) + _position;\n  }\n",
        Hi = [0, 0, 0, 1], Ni = {r: 1, g: 1, b: 1, a: 1}, Wi = ({x: e, y: t, z: n}) => [e, t, n],
        Ui = ({x: e, y: t, z: n, w: r}) => [e, t, n, r], qi = ([e, t, n]) => ({x: e, y: t, z: n}),
        Gi = ([e, t, n, r]) => ({x: e, y: t, z: n, w: r}), Vi = e => {
            const t = new Float32Array(3 * e.length);
            let n = 0;
            for (const r of e) {
                const {x: e, y: i, z: o} = r;
                t[n++] = e, t[n++] = i, t[n++] = o
            }
            return t
        }, Ki = e => [e.r, e.g, e.b, e.a];

    function $i(e = Ni) {
        const {r: t, g: n, b: r, a: i} = e;
        return `rgba(${(255 * t).toFixed()}, ${(255 * n).toFixed()}, ${(255 * r).toFixed()}, ${i.toFixed(3)})`
    }

    const Yi = e => {
        const t = new Float32Array(4 * e.length);
        let n = 0;
        for (const r of e) {
            const {r: e, g: i, b: o, a: a} = r;
            t[n++] = e, t[n++] = i, t[n++] = o, t[n++] = a
        }
        return t
    }, Zi = (e, {r: t, g: n, b: r, a: i}) => {
        const o = new Float32Array(4 * e);
        for (let a = 0; a < e; a++) o[4 * a + 0] = t, o[4 * a + 1] = n, o[4 * a + 2] = r, o[4 * a + 3] = i;
        return o
    }, Xi = {
        enable: !0,
        func: {src: "src alpha", dst: "one minus src alpha", srcAlpha: 1, dstAlpha: "one minus src alpha"},
        equation: {rgb: "add", alpha: "add"}
    };

    function Qi(e) {
        const {vert: t, uniforms: n} = e, r = t.replace("#WITH_POSE", Ri), i = a({}, n, {
            _position: (e, t) => {
                const {position: n} = t.pose;
                return Array.isArray(n) ? n : Wi(n)
            }, _rotation: (e, t) => {
                const {orientation: n} = t.pose;
                return Array.isArray(n) ? n : [n.x, n.y, n.z, n.w]
            }
        });
        return a({}, e, {vert: r, uniforms: i})
    }

    function Ji({colors: e, color: t, points: n}) {
        return e && e.length || !t ? e ? to(e) ? Yi(e) : e : [] : Zi(n.length, t)
    }

    function eo(e) {
        const t = e.buffer({usage: "dynamic", data: []});
        return function (e, n, r) {
            let i, o;
            return n && n.length ? (i = to(n) ? Yi(n) : n, o = 1) : (i = to(e) ? Ki(e) : e, o = r), {
                buffer: t({
                    usage: "dynamic",
                    data: i
                }), divisor: o
            }
        }
    }

    function to(e) {
        return !(!e || (t = e, t.length && Array.isArray(t[0])) || !isNaN(e[0]));
        var t
    }

    function no(e = 0) {
        return [(e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255, 1]
    }

    function ro(e) {
        return function (e) {
            const t = e[0], n = e[1];
            return e[2] | n << 8 | t << 16
        }(e)
    }

    function io(e, t, n, r) {
        const i = t * Math.sin(r);
        return e[0] = i * Math.sin(n), e[1] = t * Math.cos(r), e[2] = i * Math.cos(n), e
    }

    const oo = Object.freeze([1, 0, 0]), ao = [0, 0, 0], so = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        co = [0, 0, 0, 0], uo = e => e, fo = Li(uo, ({perspective: e}) => e), lo = Li(uo, ({distance: e}) => e),
        po = Li(uo, ({phi: e}) => e), ho = Li(uo, ({thetaOffset: e}) => e), mo = Li(uo, ({targetOrientation: e}) => e),
        vo = Li(mo, e => {
            const t = vi(ao, oo, e);
            return -Math.atan2(t[1], t[0])
        }), go = Li(fo, po, ho, (e, t, n) => {
            const r = function (e) {
                return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e
            }([0, 0, 0, 0]);
            return function (e, t, n) {
                n *= .5;
                var r = t[0], i = t[1], o = t[2], a = t[3], s = Math.sin(n), c = Math.cos(n);
                e[0] = r * c + i * s, e[1] = i * c - r * s, e[2] = o * c + a * s, e[3] = a * c - o * s
            }(r, r, -n), e && function (e, t, n) {
                n *= .5;
                var r = t[0], i = t[1], o = t[2], a = t[3], s = Math.sin(n), c = Math.cos(n);
                e[0] = r * c + a * s, e[1] = i * c + o * s, e[2] = o * c - i * s, e[3] = a * c - r * s
            }(r, r, t), r
        }), bo = Li(ho, po, lo, (e, t, n) => {
            const r = io([], n, e, t), [i, o, a] = r;
            return r[0] = -i, r[1] = -a, r[2] = o, r
        });
    var yo = {
        orientation: go,
        position: bo,
        targetHeading: vo,
        view: Li(uo, go, bo, vo, ({target: e, targetOffset: t, perspective: n}, r, i, o) => {
            const a = function (e) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
            }([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            return ei(a, a, function (e, t) {
                var n = t[0], r = t[1], i = t[2], o = t[3], a = n + n, s = r + r, c = i + i, u = n * a, f = r * a,
                    l = r * s, d = i * a, p = i * s, h = i * c, m = o * a, v = o * s, g = o * c;
                return e[0] = 1 - l - h, e[1] = f + g, e[2] = d - v, e[3] = 0, e[4] = f - g, e[5] = 1 - u - h, e[6] = p + m, e[7] = 0, e[8] = d + v, e[9] = p - m, e[10] = 1 - u - l, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
            }(so, function (e, t) {
                var n = t[0], r = t[1], i = t[2], o = t[3], a = n * n + r * r + i * i + o * o, s = a ? 1 / a : 0;
                return e[0] = -n * s, e[1] = -r * s, e[2] = -i * s, e[3] = o * s, e
            }(co, r))), n && ti(a, a, li(ao, i)), ti(a, a, li(ao, t)), function (e, t, n) {
                var r = Math.sin(n), i = Math.cos(n), o = t[0], a = t[1], s = t[2], c = t[3], u = t[4], f = t[5],
                    l = t[6], d = t[7];
                t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = o * i + u * r, e[1] = a * i + f * r, e[2] = s * i + l * r, e[3] = c * i + d * r, e[4] = u * i - o * r, e[5] = f * i - a * r, e[6] = l * i - s * r, e[7] = d * i - c * r
            }(a, a, o), li(ao, e), n || (ao[2] = -2500), ti(a, a, ao), a
        })
    };
    const xo = Object.freeze([0, 0, 1]), wo = [0, 0, 0, 0], _o = {
        distance: 75,
        perspective: !0,
        phi: Math.PI / 4,
        target: [0, 0, 0],
        targetOffset: [0, 0, 0],
        targetOrientation: [0, 0, 0, 1],
        thetaOffset: 0
    };

    class Co {
        constructor(e = (() => {
        }), t = _o) {
            o(this, "state", void 0), o(this, "_onChange", void 0), o(this, "setCameraState", e => {
                this.state = e
            }), o(this, "cameraRotate", ([e, t]) => {
                if (0 === e && 0 === t) return;
                const {thetaOffset: n, phi: r} = this.state;
                this.state = a({}, this.state, {
                    thetaOffset: n - e,
                    phi: Math.max(0, Math.min(r + t, Math.PI))
                }), this._onChange(this.state)
            }), o(this, "cameraMove", ([e, t]) => {
                if (0 === e && 0 === t) return;
                const {targetOffset: n, thetaOffset: r} = this.state, i = [e, t, 0], o = vi(i, i, xi(wo, xo, -r));
                this.state = a({}, this.state, {targetOffset: si(o, n, o)}), this._onChange(this.state)
            }), o(this, "cameraZoom", e => {
                const {distance: t} = this.state, n = function (e, t) {
                    return Math.max(.001, e * (1 - t / 100))
                }(t, e);
                t !== n && (this.state = a({}, this.state, {distance: n}), this._onChange(this.state))
            }), this._onChange = e, this.state = t
        }
    }

    const So = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var jo, Eo, Ao, ko, Oo, To, Do, Mo, zo, Po, Io, Fo, Bo, Lo, Ro, Ho = e => (class {
        constructor() {
            o(this, "viewportWidth", 0), o(this, "viewportHeight", 0), o(this, "cameraState", _o), o(this, "draw", e({
                context: {
                    projection(e, t) {
                        const {viewportWidth: n, viewportHeight: r} = e;
                        return this.viewportWidth = n, this.viewportHeight = r, this.cameraState = t, this.getProjection()
                    }, view(e, t) {
                        return this.getView()
                    }
                }, uniforms: {view: e.context("view"), projection: e.context("projection")}
            }))
        }

        getProjection() {
            if (!this.cameraState.perspective) {
                const e = zi(this.cameraState.distance, this.viewportWidth, this.viewportHeight), {
                    left: t,
                    right: n,
                    bottom: r,
                    top: i
                } = e;
                return function (e, t, n, r, i, o, a) {
                    var s = 1 / (t - n), c = 1 / (r - i), u = 1 / (o - a);
                    return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * u, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = (a + o) * u, e[15] = 1, e
                }([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t, n, r, i, .01, 5e3)
            }
            return function (e, t, n, r, i) {
                var o = 1 / Math.tan(t / 2), a = void 0;
                return e[0] = o / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = o, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, null != i && i !== 1 / 0 ? (a = 1 / (r - i), e[10] = (i + r) * a, e[14] = 2 * i * r * a) : (e[10] = -1, e[14] = -2 * r), e
            }([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Math.PI / 4, this.viewportWidth / this.viewportHeight, .01, 5e3)
        }

        getView() {
            return yo.view(this.cameraState)
        }

        toScreenCoord(e, t) {
            const n = this.getProjection(), r = yo.view(this.cameraState),
                i = ei(So, n, r), [o, a, s, c] = function (e, t, n, r) {
                    const i = n[0], o = n[1], a = n[2], s = n[3], c = Pi, u = Ii;
                    !function (e, t, n, r, i) {
                        e[0] = t, e[1] = n, e[2] = r, e[3] = i
                    }(Fi, t[0], t[1], t[2], 1), function (e, t, n) {
                        var r = t[0], i = t[1], o = t[2], a = t[3];
                        e[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * a, e[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * a, e[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * a, e[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * a
                    }(Fi, Fi, r);
                    const f = Fi[3];
                    return 0 !== f && (Fi[0] = Fi[0] / f, Fi[1] = Fi[1] / f, Fi[2] = Fi[2] / f), e[0] = i + a / 2 * Fi[0] + (0 + a / 2), e[1] = o + s / 2 * Fi[1] + (0 + s / 2), e[2] = (u - c) / 2 * Fi[2] + (u + c) / 2, e[3] = 0 === f ? 0 : 1 / f, e
                }([], t, e, i);
            if (s < 0 || s > 1 || c < 0) return;
            const u = e[3] + e[1];
            return [o - e[0], u - a, s]
        }
    }), No = !1;

    function Wo() {
        if (!No) {
            No = !0;
            var e = navigator.userAgent,
                t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
                n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
            if (Fo = /\b(iPhone|iP[ao]d)/.exec(e), Bo = /\b(iP[ao]d)/.exec(e), Po = /Android/i.exec(e), Lo = /FBAN\/\w+;/i.exec(e), Ro = /Mobile/i.exec(e), Io = !!/Win64/.exec(e), t) {
                (jo = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN) && document && document.documentMode && (jo = document.documentMode);
                var r = /(?:Trident\/(\d+.\d+))/.exec(e);
                To = r ? parseFloat(r[1]) + 4 : jo, Eo = t[2] ? parseFloat(t[2]) : NaN, Ao = t[3] ? parseFloat(t[3]) : NaN, (ko = t[4] ? parseFloat(t[4]) : NaN) ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Oo = t && t[1] ? parseFloat(t[1]) : NaN) : Oo = NaN
            } else jo = Eo = Ao = Oo = ko = NaN;
            if (n) {
                if (n[1]) {
                    var i = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                    Do = !i || parseFloat(i[1].replace("_", "."))
                } else Do = !1;
                Mo = !!n[2], zo = !!n[3]
            } else Do = Mo = zo = !1
        }
    }

    var Uo, qo = {
        ie: function () {
            return Wo() || jo
        }, ieCompatibilityMode: function () {
            return Wo() || To > jo
        }, ie64: function () {
            return qo.ie() && Io
        }, firefox: function () {
            return Wo() || Eo
        }, opera: function () {
            return Wo() || Ao
        }, webkit: function () {
            return Wo() || ko
        }, safari: function () {
            return qo.webkit()
        }, chrome: function () {
            return Wo() || Oo
        }, windows: function () {
            return Wo() || Mo
        }, osx: function () {
            return Wo() || Do
        }, linux: function () {
            return Wo() || zo
        }, iphone: function () {
            return Wo() || Fo
        }, mobile: function () {
            return Wo() || Fo || Bo || Po || Ro
        }, nativeApp: function () {
            return Wo() || Lo
        }, android: function () {
            return Wo() || Po
        }, ipad: function () {
            return Wo() || Bo
        }
    }, Go = qo, Vo = !("undefined" == typeof window || !window.document || !window.document.createElement), Ko = {
        canUseDOM: Vo,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: Vo && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: Vo && !!window.screen,
        isInWorker: !Vo
    };
    Ko.canUseDOM && (Uo = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
    var $o = function (e, t) {
        if (!Ko.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e, r = n in document;
        if (!r) {
            var i = document.createElement("div");
            i.setAttribute(n, "return;"), r = "function" == typeof i[n]
        }
        return !r && Uo && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
    }, Yo = 10, Zo = 40, Xo = 800;

    function Qo(e) {
        var t = 0, n = 0, r = 0, i = 0;
        return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * Yo, i = n * Yo, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || i) && e.deltaMode && (1 == e.deltaMode ? (r *= Zo, i *= Zo) : (r *= Xo, i *= Xo)), r && !t && (t = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: n,
            pixelX: r,
            pixelY: i
        }
    }

    Qo.getEventType = function () {
        return Go.firefox() ? "DOMMouseScroll" : $o("wheel") ? "wheel" : "mousewheel"
    };
    var Jo = Qo;
    const ea = 4, ta = .3, na = .3, ra = 150, ia = 1.5, oa = {
        a: "moveLeft",
        d: "moveRight",
        e: "rotateRight",
        f: "tiltUp",
        q: "rotateLeft",
        r: "tiltDown",
        s: "moveDown",
        w: "moveUp",
        x: "zoomOut",
        z: "zoomIn"
    };

    class aa extends n.Component {
        constructor(...e) {
            super(...e), o(this, "_keyTimer", void 0), o(this, "_keys", new Set), o(this, "_buttons", new Set), o(this, "_listeners", []), o(this, "_shiftKey", !1), o(this, "_metaKey", !1), o(this, "_ctrlKey", !1), o(this, "_el", void 0), o(this, "_rect", void 0), o(this, "_initialMouse", void 0), o(this, "_getMouseOnScreen", e => {
                const {clientX: t, clientY: n} = e, {top: r, left: i, width: o, height: a} = this._rect;
                return [(t - i) / o, (n - r) / a]
            }), o(this, "_onMouseDown", e => {
                const {_el: t} = this;
                t && (e.preventDefault(), this._buttons.add(e.button), t.focus(), this._rect = t.getBoundingClientRect(), this._initialMouse = this._getMouseOnScreen(e), this.startDragging(e))
            }), o(this, "_onWindowMouseMove", e => {
                if (!this._buttons.size) return;
                this._shiftKey = e.shiftKey;
                const {cameraStore: {cameraMove: t, cameraRotate: n, state: {perspective: r}}} = this.props;
                let i, o;
                const a = this._getMouseOnScreen(e);
                if (document.pointerLockElement && (e.movementX || e.movementY) ? (i = -e.movementX / this._rect.width, o = -e.movementY / this._rect.height) : (i = this._initialMouse[0] - a[0], o = this._initialMouse[1] - a[1]), this._initialMouse = a, this._isRightMouseDown()) {
                    const e = this._getMagnitude(ea);
                    n([(r ? i : -i) * e, r ? o * e : 0])
                }
                if (this._isLeftMouseDown()) {
                    const {x: e, y: n} = this._getMoveMagnitude();
                    t([i * e, -o * n])
                }
            }), o(this, "_onMouseUp", e => {
                this._buttons.delete(e.button), this._endDragging()
            }), o(this, "_onWindowMouseUp", e => {
                const {_el: t} = this;
                t && (t.contains(e.target) || e.target === t || (this._buttons.clear(), this._endDragging()))
            }), o(this, "getKeyMotion", e => {
                const t = this._getMagnitude(na), n = this._getMagnitude(ra),
                    r = this._getMagnitude(ia), {keyMap: i} = this.props, o = i && i[e] || oa[e] || !1;
                switch (o) {
                    case"moveRight":
                        return {x: t};
                    case"moveLeft":
                        return {x: -t};
                    case"moveUp":
                        return {y: t};
                    case"moveDown":
                        return {y: -t};
                    case"zoomIn":
                        return {zoom: n};
                    case"zoomOut":
                        return {zoom: -n};
                    case"rotateLeft":
                        return {yaw: -r};
                    case"rotateRight":
                        return {yaw: r};
                    case"tiltUp":
                        return {tilt: -r};
                    case"tiltDown":
                        return {tilt: r};
                    case!1:
                        return null;
                    default:
                        return console.warn("Unrecognized key action:", o), null
                }
            }), o(this, "_onKeyDown", e => {
                const {onKeyDown: t, keyMap: n} = this.props;
                if (this._shiftKey = e.shiftKey, this._metaKey = e.metaKey, this._ctrlKey = e.ctrlKey, !(e.altKey || e.ctrlKey || e.metaKey)) return !(n && e.key in n && !n[e.key]) && void (this._keys.has(e.key) ? (e.stopPropagation(), e.preventDefault()) : this.getKeyMotion(e.key) ? (this._keys.add(e.key), this._startKeyTimer(), e.stopPropagation(), e.preventDefault()) : t && t(e));
                t && t(e)
            }), o(this, "_onKeyUp", e => {
                this._shiftKey = e.shiftKey, this._metaKey = e.metaKey, this._ctrlKey = e.ctrlKey, this._keys.delete(e.key)
            }), o(this, "_onWheel", e => {
                e.preventDefault(), e.stopPropagation(), this._shiftKey = e.shiftKey;
                const {pixelX: t, pixelY: n} = Jo(e), r = n || t, i = -1 * Math.sign(r), o = Math.abs(r),
                    a = Math.max(1, Math.min(o, 50)), s = this._getMagnitude(a * i * ta);
                this.props.cameraStore.cameraZoom(s)
            }), o(this, "_onBlur", e => {
                this._keys = new Set, this._ctrlKey = !1, this._shiftKey = !1, this._metaKey = !1, this._stopKeyTimer()
            }), o(this, "_onContextMenu", e => {
                e.preventDefault(), e.stopPropagation()
            })
        }

        componentDidMount() {
            const {_el: e} = this;
            if (!e) return;
            this._rect = e.getBoundingClientRect();
            const t = (e, t, n) => {
                e.addEventListener(t, n), this._listeners.push({target: e, name: t, fn: n})
            };
            t(document, "blur", this._onBlur), t(window, "mouseup", this._onWindowMouseUp)
        }

        componentWillUnmount() {
            this._listeners.forEach(e => {
                e.target.removeEventListener(e.name, e.fn)
            }), this._endDragging()
        }

        _isLeftMouseDown() {
            return this._buttons.has(0)
        }

        _isRightMouseDown() {
            return this._buttons.has(2)
        }

        _getMagnitude(e = 1) {
            return this._shiftKey ? e / 10 : e
        }

        _getMoveMagnitude() {
            if (this._ctrlKey) return {x: 0, y: 0};
            const {cameraStore: {state: {distance: e, perspective: t}}} = this.props;
            if (t) {
                const t = this._getMagnitude(e);
                return {x: t, y: t}
            }
            const {width: n, height: r} = this._rect, i = zi(e, n, r);
            return {x: this._getMagnitude(i.width), y: this._getMagnitude(i.height)}
        }

        startDragging(e) {
            0 !== e.button && this._el && "function" == typeof this._el.requestPointerLock && this._el.requestPointerLock(), window.addEventListener("mousemove", this._onWindowMouseMove)
        }

        _endDragging() {
            window.removeEventListener("mousemove", this._onWindowMouseMove), "function" == typeof document.exitPointerLock && document.exitPointerLock()
        }

        moveKeyboard(e) {
            const t = {x: 0, y: 0, zoom: 0, yaw: 0, tilt: 0};
            this._keys.forEach(e => {
                const {x: n = 0, y: r = 0, zoom: i = 0, yaw: o = 0, tilt: a = 0} = this.getKeyMotion(e) || {};
                t.x += n, t.y += r, t.zoom += i, t.yaw += o, t.tilt += a
            });
            const {cameraStore: {cameraMove: n, cameraRotate: r, cameraZoom: i, state: {perspective: o}}} = this.props;
            if (t.x || t.y) {
                const {x: r, y: i} = this._getMoveMagnitude();
                n([t.x * r * e, t.y * i * e])
            }
            (t.yaw || o && t.tilt) && r([t.yaw * e, o ? t.tilt * e : 0]), t.zoom && i(t.zoom * e)
        }

        _startKeyTimer(e) {
            this._keyTimer || (this._keyTimer = requestAnimationFrame(t => {
                this.moveKeyboard((e ? t - e : 0) / 1e3), this._keyTimer = void 0, this._keys.size && this._startKeyTimer(t)
            }))
        }

        _stopKeyTimer() {
            this._keyTimer && cancelAnimationFrame(this._keyTimer), this._keyTimer = void 0
        }

        render() {
            const {children: e} = this.props;
            return n.createElement("div", {
                tabIndex: 0,
                style: {outline: "none"},
                draggable: !0,
                ref: e => this._el = e,
                onMouseDown: this._onMouseDown,
                onMouseUp: this._onMouseUp,
                onWheel: this._onWheel,
                onBlur: this._onBlur,
                onContextMenu: this._onContextMenu,
                onKeyDown: this._onKeyDown,
                onKeyUp: this._onKeyUp
            }, e)
        }
    }

    function sa() {
        return process && process.env && "development"
    }

    const ca = [0, 0, 0], ua = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    class fa {
        constructor(e, t, n) {
            o(this, "origin", void 0), o(this, "dir", void 0), o(this, "point", void 0), this.origin = e, this.dir = t, this.point = n
        }

        distanceToPoint(e) {
            return fi(this.origin, e)
        }

        planeIntersection(e, t) {
            const n = pi(t, e), r = pi(t, this.dir);
            if (0 === r) return null;
            const i = n - pi(t, this.origin) / r;
            var o, a, s;
            return si([0, 0, 0], this.origin, (o = ca, a = this.dir, s = i, o[0] = a[0] * s, o[1] = a[1] * s, o[2] = a[2] * s, o))
        }
    }

    function la(e, {clientX: t, clientY: n, width: r, height: i}) {
        const o = e.getProjection(), a = e.getView(), s = ei(ua, o, a),
            c = mi([0, 0, 0], [2 * t / r - 1, -2 * n / i + 1, 0], Jr(ua, s)), u = mi([0, 0, 0], [0, 0, 0], Jr(ua, a)),
            f = di([0, 0, 0], ci(ca, c, u));
        return new fa(u, f, c)
    }

    var da = function () {
        return d.Date.now()
    }, pa = NaN, ha = /^\s+|\s+$/g, ma = /^[-+]0x[0-9a-f]+$/i, va = /^0b[01]+$/i, ga = /^0o[0-7]+$/i, ba = parseInt;
    var ya = function (e) {
        if ("number" == typeof e) return e;
        if (An(e)) return pa;
        if (j(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = j(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(ha, "");
        var n = va.test(e);
        return n || ga.test(e) ? ba(e.slice(2), n ? 2 : 8) : ma.test(e) ? pa : +e
    }, xa = "Expected a function", wa = Math.max, _a = Math.min;
    var Ca = function (e, t, n) {
        var r, i, o, a, s, c, u = 0, f = !1, l = !1, d = !0;
        if ("function" != typeof e) throw new TypeError(xa);

        function p(t) {
            var n = r, o = i;
            return r = i = void 0, u = t, a = e.apply(o, n)
        }

        function h(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || l && e - u >= o
        }

        function m() {
            var e = da();
            if (h(e)) return v(e);
            s = setTimeout(m, function (e) {
                var n = t - (e - c);
                return l ? _a(n, o - (e - u)) : n
            }(e))
        }

        function v(e) {
            return s = void 0, d && r ? p(e) : (r = i = void 0, a)
        }

        function g() {
            var e = da(), n = h(e);
            if (r = arguments, i = this, c = e, n) {
                if (void 0 === s) return function (e) {
                    return u = e, s = setTimeout(m, t), f ? p(e) : a
                }(c);
                if (l) return s = setTimeout(m, t), p(c)
            }
            return void 0 === s && (s = setTimeout(m, t)), a
        }

        return t = ya(t) || 0, j(n) && (f = !!n.leading, o = (l = "maxWait" in n) ? wa(ya(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d), g.cancel = function () {
            void 0 !== s && clearTimeout(s), u = 0, r = c = i = s = void 0
        }, g.flush = function () {
            return void 0 === s ? a : v(da())
        }, g
    }, Sa = u(function (e, t) {
        e.exports = function () {
            var e = function (e) {
                return e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Float32Array || e instanceof Float64Array || e instanceof Uint8ClampedArray
            }, t = function (e, t) {
                for (var n = Object.keys(t), r = 0; r < n.length; ++r) e[n[r]] = t[n[r]];
                return e
            }, n = "\n";

            function r(e) {
                var t = new Error("(regl) " + e);
                throw console.error(t), t
            }

            function i(e, t) {
                e || r(t)
            }

            function o(e) {
                return e ? ": " + e : ""
            }

            function a(e, t, n) {
                t.indexOf(e) < 0 && r("invalid value" + o(n) + ". must be one of: " + t)
            }

            var s = ["gl", "canvas", "container", "attributes", "pixelRatio", "extensions", "optionalExtensions", "profile", "onDone"];

            function c(e, t) {
                for (e += ""; e.length < t;) e = " " + e;
                return e
            }

            function u() {
                this.name = "unknown", this.lines = [], this.index = {}, this.hasErrors = !1
            }

            function f(e, t) {
                this.number = e, this.line = t, this.errors = []
            }

            function l(e, t, n) {
                this.file = e, this.line = t, this.message = n
            }

            function d() {
                var e = new Error, t = (e.stack || e).toString(), n = /compileProcedure.*\n\s*at.*\((.*)\)/.exec(t);
                if (n) return n[1];
                var r = /compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(t);
                return r ? r[1] : "unknown"
            }

            function p() {
                var e = new Error, t = (e.stack || e).toString(), n = /at REGLCommand.*\n\s+at.*\((.*)\)/.exec(t);
                if (n) return n[1];
                var r = /at REGLCommand.*\n\s+at\s+(.*)\n/.exec(t);
                return r ? r[1] : "unknown"
            }

            function h(e, t) {
                var n, r = e.split("\n"), i = 1, o = 0, a = {unknown: new u, 0: new u};
                a.unknown.name = a[0].name = t || d(), a.unknown.lines.push(new f(0, ""));
                for (var s = 0; s < r.length; ++s) {
                    var c = r[s], l = /^\s*\#\s*(\w+)\s+(.+)\s*$/.exec(c);
                    if (l) switch (l[1]) {
                        case"line":
                            var p = /(\d+)(\s+\d+)?/.exec(l[2]);
                            p && (i = 0 | p[1], p[2] && ((o = 0 | p[2]) in a || (a[o] = new u)));
                            break;
                        case"define":
                            var h = /SHADER_NAME(_B64)?\s+(.*)$/.exec(l[2]);
                            h && (a[o].name = h[1] ? (n = h[2], "undefined" != typeof atob ? atob(n) : "base64:" + n) : h[2])
                    }
                    a[o].lines.push(new f(i++, c))
                }
                return Object.keys(a).forEach(function (e) {
                    var t = a[e];
                    t.lines.forEach(function (e) {
                        t.index[e.number] = e
                    })
                }), a
            }

            function m(e) {
                e._commandRef = d()
            }

            function v(e, t) {
                var n = p();
                r(e + " in command " + (t || d()) + ("unknown" === n ? "" : " called from " + n))
            }

            function g(e, t, n, r) {
                typeof e !== t && v("invalid parameter type" + o(n) + ". expected " + t + ", got " + typeof e, r || d())
            }

            var b = 33071, y = 9728, x = 9984, w = 9985, _ = 9986, C = 9987, S = 5126, j = 32819, E = 32820, A = 33635,
                k = 34042, O = {};

            function T(e, t) {
                return e === E || e === j || e === A ? 2 : e === k ? 4 : O[e] * t
            }

            function D(e) {
                return !(e & e - 1 || !e)
            }

            O[5120] = O[5121] = 1, O[5122] = O[5123] = O[36193] = O[A] = O[j] = O[E] = 2, O[5124] = O[5125] = O[S] = O[k] = 4;
            var M = t(i, {
                optional: function (e) {
                    e()
                }, raise: r, commandRaise: v, command: function (e, t, n) {
                    e || v(t, n || d())
                }, parameter: function (e, t, n) {
                    e in t || r("unknown parameter (" + e + ")" + o(n) + ". possible values: " + Object.keys(t).join())
                }, commandParameter: function (e, t, n, r) {
                    e in t || v("unknown parameter (" + e + ")" + o(n) + ". possible values: " + Object.keys(t).join(), r || d())
                }, constructor: function (e) {
                    Object.keys(e).forEach(function (e) {
                        s.indexOf(e) < 0 && r('invalid regl constructor argument "' + e + '". must be one of ' + s)
                    })
                }, type: function (e, t, n) {
                    typeof e !== t && r("invalid parameter type" + o(n) + ". expected " + t + ", got " + typeof e)
                }, commandType: g, isTypedArray: function (t, n) {
                    e(t) || r("invalid parameter type" + o(n) + ". must be a typed array")
                }, nni: function (e, t) {
                    e >= 0 && (0 | e) === e || r("invalid parameter type, (" + e + ")" + o(t) + ". must be a nonnegative integer")
                }, oneOf: a, shaderError: function (e, t, r, o, a) {
                    if (!e.getShaderParameter(t, e.COMPILE_STATUS)) {
                        var s = e.getShaderInfoLog(t), u = o === e.FRAGMENT_SHADER ? "fragment" : "vertex";
                        g(r, "string", u + " shader source must be a string", a);
                        var f = h(r, a), d = function (e) {
                            var t = [];
                            return e.split("\n").forEach(function (e) {
                                if (!(e.length < 5)) {
                                    var n = /^ERROR\:\s+(\d+)\:(\d+)\:\s*(.*)$/.exec(e);
                                    n ? t.push(new l(0 | n[1], 0 | n[2], n[3].trim())) : e.length > 0 && t.push(new l("unknown", 0, e))
                                }
                            }), t
                        }(s);
                        !function (e, t) {
                            t.forEach(function (t) {
                                var n = e[t.file];
                                if (n) {
                                    var r = n.index[t.line];
                                    if (r) return r.errors.push(t), void (n.hasErrors = !0)
                                }
                                e.unknown.hasErrors = !0, e.unknown.lines[0].errors.push(t)
                            })
                        }(f, d), Object.keys(f).forEach(function (e) {
                            var t = f[e];
                            if (t.hasErrors) {
                                var r = [""], i = [""];
                                o("file number " + e + ": " + t.name + "\n", "color:red;text-decoration:underline;font-weight:bold"), t.lines.forEach(function (e) {
                                    if (e.errors.length > 0) {
                                        o(c(e.number, 4) + "|  ", "background-color:yellow; font-weight:bold"), o(e.line + n, "color:red; background-color:yellow; font-weight:bold");
                                        var t = 0;
                                        e.errors.forEach(function (r) {
                                            var i = r.message, a = /^\s*\'(.*)\'\s*\:\s*(.*)$/.exec(i);
                                            if (a) {
                                                var s = a[1];
                                                switch (i = a[2], s) {
                                                    case"assign":
                                                        s = "="
                                                }
                                                t = Math.max(e.line.indexOf(s, t), 0)
                                            } else t = 0;
                                            o(c("| ", 6)), o(c("^^^", t + 3) + n, "font-weight:bold"), o(c("| ", 6)), o(i + n, "font-weight:bold")
                                        }), o(c("| ", 6) + n)
                                    } else o(c(e.number, 4) + "|  "), o(e.line + n, "color:red")
                                }), "undefined" == typeof document || window.chrome ? console.log(r.join("")) : (i[0] = r.join("%c"), console.log.apply(console, i))
                            }

                            function o(e, t) {
                                r.push(e), i.push(t || "")
                            }
                        }), i.raise("Error compiling " + u + " shader, " + f[0].name)
                    }
                }, linkError: function (e, t, r, o, a) {
                    if (!e.getProgramParameter(t, e.LINK_STATUS)) {
                        var s = e.getProgramInfoLog(t), c = h(r, a), u = h(o, a),
                            f = 'Error linking program with vertex shader, "' + u[0].name + '", and fragment shader "' + c[0].name + '"';
                        "undefined" != typeof document ? console.log("%c" + f + n + "%c" + s, "color:red;text-decoration:underline;font-weight:bold", "color:red") : console.log(f + n + s), i.raise(f)
                    }
                }, callSite: p, saveCommandRef: m, saveDrawInfo: function (e, t, n, r) {
                    function i(e) {
                        return e ? r.id(e) : 0
                    }

                    function o(e, t) {
                        Object.keys(t).forEach(function (t) {
                            e[r.id(t)] = !0
                        })
                    }

                    m(e), e._fragId = i(e.static.frag), e._vertId = i(e.static.vert);
                    var a = e._uniformSet = {};
                    o(a, t.static), o(a, t.dynamic);
                    var s = e._attributeSet = {};
                    o(s, n.static), o(s, n.dynamic), e._hasCount = "count" in e.static || "count" in e.dynamic || "elements" in e.static || "elements" in e.dynamic
                }, framebufferFormat: function (e, t, n) {
                    e.texture ? a(e.texture._texture.internalformat, t, "unsupported texture format for attachment") : a(e.renderbuffer._renderbuffer.format, n, "unsupported renderbuffer format for attachment")
                }, guessCommand: d, texture2D: function (e, t, n) {
                    var r, o = t.width, a = t.height, s = t.channels;
                    i(o > 0 && o <= n.maxTextureSize && a > 0 && a <= n.maxTextureSize, "invalid texture shape"), (e.wrapS !== b || e.wrapT !== b) && i(D(o) && D(a), "incompatible wrap mode for texture, both width and height must be power of 2"), 1 === t.mipmask ? 1 !== o && 1 !== a && i(e.minFilter !== x && e.minFilter !== _ && e.minFilter !== w && e.minFilter !== C, "min filter requires mipmap") : (i(D(o) && D(a), "texture must be a square power of 2 to support mipmapping"), i(t.mipmask === (o << 1) - 1, "missing or incomplete mipmap data")), t.type === S && (n.extensions.indexOf("oes_texture_float_linear") < 0 && i(e.minFilter === y && e.magFilter === y, "filter not supported, must enable oes_texture_float_linear"), i(!e.genMipmaps, "mipmap generation not supported with float textures"));
                    var c = t.images;
                    for (r = 0; r < 16; ++r) if (c[r]) {
                        var u = o >> r, f = a >> r;
                        i(t.mipmask & 1 << r, "missing mipmap data");
                        var l = c[r];
                        if (i(l.width === u && l.height === f, "invalid shape for mip images"), i(l.format === t.format && l.internalformat === t.internalformat && l.type === t.type, "incompatible type for mip image"), l.compressed) ; else if (l.data) {
                            var d = Math.ceil(T(l.type, s) * u / l.unpackAlignment) * l.unpackAlignment;
                            i(l.data.byteLength === d * f, "invalid data for image, buffer size is inconsistent with image format")
                        } else l.element || l.copy
                    } else e.genMipmaps || i(0 == (t.mipmask & 1 << r), "extra mipmap data");
                    t.compressed && i(!e.genMipmaps, "mipmap generation for compressed images not supported")
                }, textureCube: function (e, t, n, r) {
                    var o = e.width, a = e.height, s = e.channels;
                    i(o > 0 && o <= r.maxTextureSize && a > 0 && a <= r.maxTextureSize, "invalid texture shape"), i(o === a, "cube map must be square"), i(t.wrapS === b && t.wrapT === b, "wrap mode not supported by cube map");
                    for (var c = 0; c < n.length; ++c) {
                        var u = n[c];
                        i(u.width === o && u.height === a, "inconsistent cube map face shape"), t.genMipmaps && (i(!u.compressed, "can not generate mipmap for compressed textures"), i(1 === u.mipmask, "can not specify mipmaps and generate mipmaps"));
                        for (var f = u.images, l = 0; l < 16; ++l) {
                            var d = f[l];
                            if (d) {
                                var p = o >> l, h = a >> l;
                                i(u.mipmask & 1 << l, "missing mipmap data"), i(d.width === p && d.height === h, "invalid shape for mip images"), i(d.format === e.format && d.internalformat === e.internalformat && d.type === e.type, "incompatible type for mip image"), d.compressed || (d.data ? i(d.data.byteLength === p * h * Math.max(T(d.type, s), d.unpackAlignment), "invalid data for image, buffer size is inconsistent with image format") : d.element || d.copy)
                            }
                        }
                    }
                }
            }), z = 0, P = 0;

            function I(e, t) {
                this.id = z++, this.type = e, this.data = t
            }

            function F(e) {
                return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
            }

            function B(e) {
                return "[" + function e(t) {
                    if (0 === t.length) return [];
                    var n = t.charAt(0), r = t.charAt(t.length - 1);
                    if (t.length > 1 && n === r && ('"' === n || "'" === n)) return ['"' + F(t.substr(1, t.length - 2)) + '"'];
                    var i = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(t);
                    if (i) return e(t.substr(0, i.index)).concat(e(i[1])).concat(e(t.substr(i.index + i[0].length)));
                    var o = t.split(".");
                    if (1 === o.length) return ['"' + F(t) + '"'];
                    for (var a = [], s = 0; s < o.length; ++s) a = a.concat(e(o[s]));
                    return a
                }(e).join("][") + "]"
            }

            var L = {
                DynamicVariable: I, define: function (e, t) {
                    return new I(e, B(t + ""))
                }, isDynamic: function (e) {
                    return "function" == typeof e && !e._reglType || e instanceof I
                }, unbox: function (e, t) {
                    return "function" == typeof e ? new I(P, e) : e
                }, accessor: B
            }, R = {
                next: "function" == typeof requestAnimationFrame ? function (e) {
                    return requestAnimationFrame(e)
                } : function (e) {
                    return setTimeout(e, 16)
                }, cancel: "function" == typeof cancelAnimationFrame ? function (e) {
                    return cancelAnimationFrame(e)
                } : clearTimeout
            }, H = "undefined" != typeof performance && performance.now ? function () {
                return performance.now()
            } : function () {
                return +new Date
            };

            function N(e) {
                return "string" == typeof e ? e.split() : (M(Array.isArray(e), "invalid extension array"), e)
            }

            function W(e) {
                return "string" == typeof e ? (M("undefined" != typeof document, "not supported outside of DOM"), document.querySelector(e)) : e
            }

            function U(e) {
                var n, r, i, o, a, s = e || {}, c = {}, u = [], f = [],
                    l = "undefined" == typeof window ? 1 : window.devicePixelRatio, d = !1, p = function (e) {
                        e && M.raise(e)
                    }, h = function () {
                    };
                if ("string" == typeof s ? (M("undefined" != typeof document, "selector queries only supported in DOM enviroments"), n = document.querySelector(s), M(n, "invalid query string for element")) : "object" == typeof s ? "string" == typeof (a = s).nodeName && "function" == typeof a.appendChild && "function" == typeof a.getBoundingClientRect ? n = s : function (e) {
                    return "function" == typeof e.drawArrays || "function" == typeof e.drawElements
                }(s) ? i = (o = s).canvas : (M.constructor(s), "gl" in s ? o = s.gl : "canvas" in s ? i = W(s.canvas) : "container" in s && (r = W(s.container)), "attributes" in s && (c = s.attributes, M.type(c, "object", "invalid context attributes")), "extensions" in s && (u = N(s.extensions)), "optionalExtensions" in s && (f = N(s.optionalExtensions)), "onDone" in s && (M.type(s.onDone, "function", "invalid or missing onDone callback"), p = s.onDone), "profile" in s && (d = !!s.profile), "pixelRatio" in s && (l = +s.pixelRatio, M(l > 0, "invalid pixel ratio"))) : M.raise("invalid arguments to regl"), n && ("canvas" === n.nodeName.toLowerCase() ? i = n : r = n), !o) {
                    if (!i) {
                        M("undefined" != typeof document, "must manually specify webgl context outside of DOM environments");
                        var m = function (e, n, r) {
                            var i = document.createElement("canvas");

                            function o() {
                                var n = window.innerWidth, o = window.innerHeight;
                                if (e !== document.body) {
                                    var a = e.getBoundingClientRect();
                                    n = a.right - a.left, o = a.bottom - a.top
                                }
                                i.width = r * n, i.height = r * o, t(i.style, {width: n + "px", height: o + "px"})
                            }

                            return t(i.style, {
                                border: 0,
                                margin: 0,
                                padding: 0,
                                top: 0,
                                left: 0
                            }), e.appendChild(i), e === document.body && (i.style.position = "absolute", t(e.style, {
                                margin: 0,
                                padding: 0
                            })), window.addEventListener("resize", o, !1), o(), {
                                canvas: i, onDestroy: function () {
                                    window.removeEventListener("resize", o), e.removeChild(i)
                                }
                            }
                        }(r || document.body, 0, l);
                        if (!m) return null;
                        i = m.canvas, h = m.onDestroy
                    }
                    o = function (e, t) {
                        function n(n) {
                            try {
                                return e.getContext(n, t)
                            } catch (e) {
                                return null
                            }
                        }

                        return n("webgl") || n("experimental-webgl") || n("webgl-experimental")
                    }(i, c)
                }
                return o ? {
                    gl: o,
                    canvas: i,
                    container: r,
                    extensions: u,
                    optionalExtensions: f,
                    pixelRatio: l,
                    profile: d,
                    onDone: p,
                    onDestroy: h
                } : (h(), p("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"), null)
            }

            function q(e, t) {
                for (var n = Array(e), r = 0; r < e; ++r) n[r] = t(r);
                return n
            }

            var G = 5120, V = 5121, K = 5122, $ = 5123, Y = 5124, Z = 5125, X = 5126;

            function Q(e) {
                var t, n;
                return t = (e > 65535) << 4, t |= n = ((e >>>= t) > 255) << 3, t |= n = ((e >>>= n) > 15) << 2, (t |= n = ((e >>>= n) > 3) << 1) | (e >>>= n) >> 1
            }

            function J() {
                var e = q(8, function () {
                    return []
                });

                function t(t) {
                    var n = function (e) {
                        for (var t = 16; t <= 1 << 28; t *= 16) if (e <= t) return t;
                        return 0
                    }(t), r = e[Q(n) >> 2];
                    return r.length > 0 ? r.pop() : new ArrayBuffer(n)
                }

                function n(t) {
                    e[Q(t.byteLength) >> 2].push(t)
                }

                return {
                    alloc: t, free: n, allocType: function (e, n) {
                        var r = null;
                        switch (e) {
                            case G:
                                r = new Int8Array(t(n), 0, n);
                                break;
                            case V:
                                r = new Uint8Array(t(n), 0, n);
                                break;
                            case K:
                                r = new Int16Array(t(2 * n), 0, n);
                                break;
                            case $:
                                r = new Uint16Array(t(2 * n), 0, n);
                                break;
                            case Y:
                                r = new Int32Array(t(4 * n), 0, n);
                                break;
                            case Z:
                                r = new Uint32Array(t(4 * n), 0, n);
                                break;
                            case X:
                                r = new Float32Array(t(4 * n), 0, n);
                                break;
                            default:
                                return null
                        }
                        return r.length !== n ? r.subarray(0, n) : r
                    }, freeType: function (e) {
                        n(e.buffer)
                    }
                }
            }

            var ee = J();
            ee.zero = J();
            var te = function (e, t) {
                var n = 1;
                t.ext_texture_filter_anisotropic && (n = e.getParameter(34047));
                var r = 1, i = 1;
                t.webgl_draw_buffers && (r = e.getParameter(34852), i = e.getParameter(36063));
                var o = !!t.oes_texture_float;
                if (o) {
                    var a = e.createTexture();
                    e.bindTexture(3553, a), e.texImage2D(3553, 0, 6408, 1, 1, 0, 6408, 5126, null);
                    var s = e.createFramebuffer();
                    if (e.bindFramebuffer(36160, s), e.framebufferTexture2D(36160, 36064, 3553, a, 0), e.bindTexture(3553, null), 36053 !== e.checkFramebufferStatus(36160)) o = !1; else {
                        e.viewport(0, 0, 1, 1), e.clearColor(1, 0, 0, 1), e.clear(16384);
                        var c = ee.allocType(5126, 4);
                        e.readPixels(0, 0, 1, 1, 6408, 5126, c), e.getError() ? o = !1 : (e.deleteFramebuffer(s), e.deleteTexture(a), o = 1 === c[0]), ee.freeType(c)
                    }
                }
                var u = !0, f = e.createTexture(), l = ee.allocType(5121, 36);
                return e.activeTexture(33984), e.bindTexture(34067, f), e.texImage2D(34069, 0, 6408, 3, 3, 0, 6408, 5121, l), ee.freeType(l), e.bindTexture(34067, null), e.deleteTexture(f), u = !e.getError(), {
                    colorBits: [e.getParameter(3410), e.getParameter(3411), e.getParameter(3412), e.getParameter(3413)],
                    depthBits: e.getParameter(3414),
                    stencilBits: e.getParameter(3415),
                    subpixelBits: e.getParameter(3408),
                    extensions: Object.keys(t).filter(function (e) {
                        return !!t[e]
                    }),
                    maxAnisotropic: n,
                    maxDrawbuffers: r,
                    maxColorAttachments: i,
                    pointSizeDims: e.getParameter(33901),
                    lineWidthDims: e.getParameter(33902),
                    maxViewportDims: e.getParameter(3386),
                    maxCombinedTextureUnits: e.getParameter(35661),
                    maxCubeMapSize: e.getParameter(34076),
                    maxRenderbufferSize: e.getParameter(34024),
                    maxTextureUnits: e.getParameter(34930),
                    maxTextureSize: e.getParameter(3379),
                    maxAttributes: e.getParameter(34921),
                    maxVertexUniforms: e.getParameter(36347),
                    maxVertexTextureUnits: e.getParameter(35660),
                    maxVaryingVectors: e.getParameter(36348),
                    maxFragmentUniforms: e.getParameter(36349),
                    glsl: e.getParameter(35724),
                    renderer: e.getParameter(7937),
                    vendor: e.getParameter(7936),
                    version: e.getParameter(7938),
                    readFloat: o,
                    npotTextureCube: u
                }
            };

            function ne(t) {
                return !!t && "object" == typeof t && Array.isArray(t.shape) && Array.isArray(t.stride) && "number" == typeof t.offset && t.shape.length === t.stride.length && (Array.isArray(t.data) || e(t.data))
            }

            var re = function (e) {
                return Object.keys(e).map(function (t) {
                    return e[t]
                })
            }, ie = {
                shape: function (e) {
                    for (var t = [], n = e; n.length; n = n[0]) t.push(n.length);
                    return t
                }, flatten: function (e, t, n, r) {
                    var i = 1;
                    if (t.length) for (var o = 0; o < t.length; ++o) i *= t[o]; else i = 0;
                    var a = r || ee.allocType(n, i);
                    switch (t.length) {
                        case 0:
                            break;
                        case 1:
                            !function (e, t, n) {
                                for (var r = 0; r < t; ++r) n[r] = e[r]
                            }(e, t[0], a);
                            break;
                        case 2:
                            !function (e, t, n, r) {
                                for (var i = 0, o = 0; o < t; ++o) for (var a = e[o], s = 0; s < n; ++s) r[i++] = a[s]
                            }(e, t[0], t[1], a);
                            break;
                        case 3:
                            oe(e, t[0], t[1], t[2], a, 0);
                            break;
                        default:
                            !function e(t, n, r, i, o) {
                                for (var a = 1, s = r + 1; s < n.length; ++s) a *= n[s];
                                var c = n[r];
                                if (n.length - r == 4) {
                                    var u = n[r + 1], f = n[r + 2], l = n[r + 3];
                                    for (s = 0; s < c; ++s) oe(t[s], u, f, l, i, o), o += a
                                } else for (s = 0; s < c; ++s) e(t[s], n, r + 1, i, o), o += a
                            }(e, t, 0, a, 0)
                    }
                    return a
                }
            };

            function oe(e, t, n, r, i, o) {
                for (var a = o, s = 0; s < t; ++s) for (var c = e[s], u = 0; u < n; ++u) for (var f = c[u], l = 0; l < r; ++l) i[a++] = f[l]
            }

            var ae = {
                    "[object Int8Array]": 5120,
                    "[object Int16Array]": 5122,
                    "[object Int32Array]": 5124,
                    "[object Uint8Array]": 5121,
                    "[object Uint8ClampedArray]": 5121,
                    "[object Uint16Array]": 5123,
                    "[object Uint32Array]": 5125,
                    "[object Float32Array]": 5126,
                    "[object Float64Array]": 5121,
                    "[object ArrayBuffer]": 5121
                }, se = {
                    int8: 5120,
                    int16: 5122,
                    int32: 5124,
                    uint8: 5121,
                    uint16: 5123,
                    uint32: 5125,
                    float: 5126,
                    float32: 5126
                }, ce = {dynamic: 35048, stream: 35040, static: 35044}, ue = ie.flatten, fe = ie.shape, le = 35044,
                de = 35040, pe = 5121, he = 5126, me = [];

            function ve(e) {
                return 0 | ae[Object.prototype.toString.call(e)]
            }

            function ge(e, t) {
                for (var n = 0; n < t.length; ++n) e[n] = t[n]
            }

            function be(e, t, n, r, i, o, a) {
                for (var s = 0, c = 0; c < n; ++c) for (var u = 0; u < r; ++u) e[s++] = t[i * c + o * u + a]
            }

            me[5120] = 1, me[5122] = 2, me[5124] = 4, me[5121] = 1, me[5123] = 2, me[5125] = 4, me[5126] = 4;
            var ye = {
                    points: 0,
                    point: 0,
                    lines: 1,
                    line: 1,
                    triangles: 4,
                    triangle: 4,
                    "line loop": 2,
                    "line strip": 3,
                    "triangle strip": 5,
                    "triangle fan": 6
                }, xe = 0, we = 1, _e = 4, Ce = 5120, Se = 5121, je = 5122, Ee = 5123, Ae = 5124, ke = 5125, Oe = 34963,
                Te = 35040, De = 35044, Me = new Float32Array(1), ze = new Uint32Array(Me.buffer), Pe = 5123;

            function Ie(e) {
                for (var t = ee.allocType(Pe, e.length), n = 0; n < e.length; ++n) if (isNaN(e[n])) t[n] = 65535; else if (e[n] === 1 / 0) t[n] = 31744; else if (e[n] === -1 / 0) t[n] = 64512; else {
                    Me[0] = e[n];
                    var r = ze[0], i = r >>> 31 << 15, o = (r << 1 >>> 24) - 127, a = r >> 13 & 1023;
                    if (o < -24) t[n] = i; else if (o < -14) {
                        var s = -14 - o;
                        t[n] = i + (a + 1024 >> s)
                    } else t[n] = o > 15 ? i + 31744 : i + (o + 15 << 10) + a
                }
                return t
            }

            function Fe(t) {
                return Array.isArray(t) || e(t)
            }

            var Be = function (e) {
                    return !(e & e - 1 || !e)
                }, Le = 34467, Re = 3553, He = 34067, Ne = 34069, We = 6408, Ue = 6406, qe = 6407, Ge = 6409, Ve = 6410,
                Ke = 32854, $e = 32855, Ye = 36194, Ze = 32819, Xe = 32820, Qe = 33635, Je = 34042, et = 6402,
                tt = 34041, nt = 35904, rt = 35906, it = 36193, ot = 33776, at = 33777, st = 33778, ct = 33779,
                ut = 35986, ft = 35987, lt = 34798, dt = 35840, pt = 35841, ht = 35842, mt = 35843, vt = 36196,
                gt = 5121, bt = 5123, yt = 5125, xt = 5126, wt = 10242, _t = 10243, Ct = 10497, St = 33071, jt = 33648,
                Et = 10240, At = 10241, kt = 9728, Ot = 9729, Tt = 9984, Dt = 9985, Mt = 9986, zt = 9987, Pt = 33170,
                It = 4352, Ft = 4353, Bt = 4354, Lt = 34046, Rt = 3317, Ht = 37440, Nt = 37441, Wt = 37443, Ut = 37444,
                qt = 33984, Gt = [Tt, Mt, Dt, zt], Vt = [0, Ge, Ve, qe, We], Kt = {};

            function $t(e) {
                return "[object " + e + "]"
            }

            Kt[Ge] = Kt[Ue] = Kt[et] = 1, Kt[tt] = Kt[Ve] = 2, Kt[qe] = Kt[nt] = 3, Kt[We] = Kt[rt] = 4;
            var Yt = $t("HTMLCanvasElement"), Zt = $t("CanvasRenderingContext2D"), Xt = $t("ImageBitmap"),
                Qt = $t("HTMLImageElement"), Jt = $t("HTMLVideoElement"),
                en = Object.keys(ae).concat([Yt, Zt, Xt, Qt, Jt]), tn = [];
            tn[gt] = 1, tn[xt] = 4, tn[it] = 2, tn[bt] = 2, tn[yt] = 4;
            var nn = [];

            function rn(e) {
                return Array.isArray(e) && (0 === e.length || "number" == typeof e[0])
            }

            function on(e) {
                if (!Array.isArray(e)) return !1;
                var t = e.length;
                return !(0 === t || !Fe(e[0]))
            }

            function an(e) {
                return Object.prototype.toString.call(e)
            }

            function sn(e) {
                return an(e) === Yt
            }

            function cn(e) {
                if (!e) return !1;
                var t = an(e);
                return en.indexOf(t) >= 0 || rn(e) || on(e) || ne(e)
            }

            function un(e) {
                return 0 | ae[Object.prototype.toString.call(e)]
            }

            function fn(e, t) {
                return ee.allocType(e.type === it ? xt : e.type, t)
            }

            function ln(e, t) {
                e.type === it ? (e.data = Ie(t), ee.freeType(t)) : e.data = t
            }

            function dn(e, t, n, r, i, o) {
                var a;
                if (a = void 0 !== nn[e] ? nn[e] : Kt[e] * tn[t], o && (a *= 6), i) {
                    for (var s = 0, c = n; c >= 1;) s += a * c * c, c /= 2;
                    return s
                }
                return a * n * r
            }

            function pn(n, r, i, o, a, s, c) {
                var u = {"don't care": It, "dont care": It, nice: Bt, fast: Ft},
                    f = {repeat: Ct, clamp: St, mirror: jt}, l = {nearest: kt, linear: Ot}, d = t({
                        mipmap: zt,
                        "nearest mipmap nearest": Tt,
                        "linear mipmap nearest": Dt,
                        "nearest mipmap linear": Mt,
                        "linear mipmap linear": zt
                    }, l), p = {none: 0, browser: Ut}, h = {uint8: gt, rgba4: Ze, rgb565: Qe, "rgb5 a1": Xe}, m = {
                        alpha: Ue,
                        luminance: Ge,
                        "luminance alpha": Ve,
                        rgb: qe,
                        rgba: We,
                        rgba4: Ke,
                        "rgb5 a1": $e,
                        rgb565: Ye
                    }, v = {};
                r.ext_srgb && (m.srgb = nt, m.srgba = rt), r.oes_texture_float && (h.float32 = h.float = xt), r.oes_texture_half_float && (h.float16 = h["half float"] = it), r.webgl_depth_texture && (t(m, {
                    depth: et,
                    "depth stencil": tt
                }), t(h, {
                    uint16: bt,
                    uint32: yt,
                    "depth stencil": Je
                })), r.webgl_compressed_texture_s3tc && t(v, {
                    "rgb s3tc dxt1": ot,
                    "rgba s3tc dxt1": at,
                    "rgba s3tc dxt3": st,
                    "rgba s3tc dxt5": ct
                }), r.webgl_compressed_texture_atc && t(v, {
                    "rgb atc": ut,
                    "rgba atc explicit alpha": ft,
                    "rgba atc interpolated alpha": lt
                }), r.webgl_compressed_texture_pvrtc && t(v, {
                    "rgb pvrtc 4bppv1": dt,
                    "rgb pvrtc 2bppv1": pt,
                    "rgba pvrtc 4bppv1": ht,
                    "rgba pvrtc 2bppv1": mt
                }), r.webgl_compressed_texture_etc1 && (v["rgb etc1"] = vt);
                var g = Array.prototype.slice.call(n.getParameter(Le));
                Object.keys(v).forEach(function (e) {
                    var t = v[e];
                    g.indexOf(t) >= 0 && (m[e] = t)
                });
                var b = Object.keys(m);
                i.textureFormats = b;
                var y = [];
                Object.keys(m).forEach(function (e) {
                    var t = m[e];
                    y[t] = e
                });
                var x = [];
                Object.keys(h).forEach(function (e) {
                    var t = h[e];
                    x[t] = e
                });
                var w = [];
                Object.keys(l).forEach(function (e) {
                    var t = l[e];
                    w[t] = e
                });
                var _ = [];
                Object.keys(d).forEach(function (e) {
                    var t = d[e];
                    _[t] = e
                });
                var C = [];
                Object.keys(f).forEach(function (e) {
                    var t = f[e];
                    C[t] = e
                });
                var S = b.reduce(function (e, t) {
                    var n = m[t];
                    return n === Ge || n === Ue || n === Ge || n === Ve || n === et || n === tt ? e[n] = n : n === $e || t.indexOf("rgba") >= 0 ? e[n] = We : e[n] = qe, e
                }, {});

                function j() {
                    this.internalformat = We, this.format = We, this.type = gt, this.compressed = !1, this.premultiplyAlpha = !1, this.flipY = !1, this.unpackAlignment = 1, this.colorSpace = Ut, this.width = 0, this.height = 0, this.channels = 0
                }

                function E(e, t) {
                    e.internalformat = t.internalformat, e.format = t.format, e.type = t.type, e.compressed = t.compressed, e.premultiplyAlpha = t.premultiplyAlpha, e.flipY = t.flipY, e.unpackAlignment = t.unpackAlignment, e.colorSpace = t.colorSpace, e.width = t.width, e.height = t.height, e.channels = t.channels
                }

                function A(e, t) {
                    if ("object" == typeof t && t) {
                        if ("premultiplyAlpha" in t && (M.type(t.premultiplyAlpha, "boolean", "invalid premultiplyAlpha"), e.premultiplyAlpha = t.premultiplyAlpha), "flipY" in t && (M.type(t.flipY, "boolean", "invalid texture flip"), e.flipY = t.flipY), "alignment" in t && (M.oneOf(t.alignment, [1, 2, 4, 8], "invalid texture unpack alignment"), e.unpackAlignment = t.alignment), "colorSpace" in t && (M.parameter(t.colorSpace, p, "invalid colorSpace"), e.colorSpace = p[t.colorSpace]), "type" in t) {
                            var n = t.type;
                            M(r.oes_texture_float || !("float" === n || "float32" === n), "you must enable the OES_texture_float extension in order to use floating point textures."), M(r.oes_texture_half_float || !("half float" === n || "float16" === n), "you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."), M(r.webgl_depth_texture || !("uint16" === n || "uint32" === n || "depth stencil" === n), "you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."), M.parameter(n, h, "invalid texture type"), e.type = h[n]
                        }
                        var o = e.width, a = e.height, s = e.channels, c = !1;
                        "shape" in t ? (M(Array.isArray(t.shape) && t.shape.length >= 2, "shape must be an array"), o = t.shape[0], a = t.shape[1], 3 === t.shape.length && (s = t.shape[2], M(s > 0 && s <= 4, "invalid number of channels"), c = !0), M(o >= 0 && o <= i.maxTextureSize, "invalid width"), M(a >= 0 && a <= i.maxTextureSize, "invalid height")) : ("radius" in t && (o = a = t.radius, M(o >= 0 && o <= i.maxTextureSize, "invalid radius")), "width" in t && (o = t.width, M(o >= 0 && o <= i.maxTextureSize, "invalid width")), "height" in t && (a = t.height, M(a >= 0 && a <= i.maxTextureSize, "invalid height")), "channels" in t && (s = t.channels, M(s > 0 && s <= 4, "invalid number of channels"), c = !0)), e.width = 0 | o, e.height = 0 | a, e.channels = 0 | s;
                        var u = !1;
                        if ("format" in t) {
                            var f = t.format;
                            M(r.webgl_depth_texture || !("depth" === f || "depth stencil" === f), "you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."), M.parameter(f, m, "invalid texture format");
                            var l = e.internalformat = m[f];
                            e.format = S[l], f in h && ("type" in t || (e.type = h[f])), f in v && (e.compressed = !0), u = !0
                        }
                        !c && u ? e.channels = Kt[e.format] : c && !u ? e.channels !== Vt[e.format] && (e.format = e.internalformat = Vt[e.channels]) : u && c && M(e.channels === Kt[e.format], "number of channels inconsistent with specified format")
                    }
                }

                function k(e) {
                    n.pixelStorei(Ht, e.flipY), n.pixelStorei(Nt, e.premultiplyAlpha), n.pixelStorei(Wt, e.colorSpace), n.pixelStorei(Rt, e.unpackAlignment)
                }

                function O() {
                    j.call(this), this.xOffset = 0, this.yOffset = 0, this.data = null, this.needsFree = !1, this.element = null, this.needsCopy = !1
                }

                function T(t, n) {
                    var r = null;
                    if (cn(n) ? r = n : n && (M.type(n, "object", "invalid pixel data type"), A(t, n), "x" in n && (t.xOffset = 0 | n.x), "y" in n && (t.yOffset = 0 | n.y), cn(n.data) && (r = n.data)), M(!t.compressed || r instanceof Uint8Array, "compressed texture data must be stored in a uint8array"), n.copy) {
                        M(!r, "can not specify copy and data field for the same texture");
                        var o = a.viewportWidth, s = a.viewportHeight;
                        t.width = t.width || o - t.xOffset, t.height = t.height || s - t.yOffset, t.needsCopy = !0, M(t.xOffset >= 0 && t.xOffset < o && t.yOffset >= 0 && t.yOffset < s && t.width > 0 && t.width <= o && t.height > 0 && t.height <= s, "copy texture read out of bounds")
                    } else if (r) {
                        if (e(r)) t.channels = t.channels || 4, t.data = r, "type" in n || t.type !== gt || (t.type = un(r)); else if (rn(r)) t.channels = t.channels || 4, function (e, t) {
                            var n = t.length;
                            switch (e.type) {
                                case gt:
                                case bt:
                                case yt:
                                case xt:
                                    var r = ee.allocType(e.type, n);
                                    r.set(t), e.data = r;
                                    break;
                                case it:
                                    e.data = Ie(t);
                                    break;
                                default:
                                    M.raise("unsupported texture type, must specify a typed array")
                            }
                        }(t, r), t.alignment = 1, t.needsFree = !0; else if (ne(r)) {
                            var c = r.data;
                            Array.isArray(c) || t.type !== gt || (t.type = un(c));
                            var u, f, l, d, p, h, m = r.shape, v = r.stride;
                            3 === m.length ? (l = m[2], h = v[2]) : (M(2 === m.length, "invalid ndarray pixel data, must be 2 or 3D"), l = 1, h = 1), u = m[0], f = m[1], d = v[0], p = v[1], t.alignment = 1, t.width = u, t.height = f, t.channels = l, t.format = t.internalformat = Vt[l], t.needsFree = !0, function (e, t, n, r, i, o) {
                                for (var a = e.width, s = e.height, c = e.channels, u = fn(e, a * s * c), f = 0, l = 0; l < s; ++l) for (var d = 0; d < a; ++d) for (var p = 0; p < c; ++p) u[f++] = t[n * d + r * l + i * p + o];
                                ln(e, u)
                            }(t, c, d, p, h, r.offset)
                        } else if (sn(r) || an(r) === Zt) sn(r) ? t.element = r : t.element = r.canvas, t.width = t.element.width, t.height = t.element.height, t.channels = 4; else if (function (e) {
                            return an(e) === Xt
                        }(r)) t.element = r, t.width = r.width, t.height = r.height, t.channels = 4; else if (function (e) {
                            return an(e) === Qt
                        }(r)) t.element = r, t.width = r.naturalWidth, t.height = r.naturalHeight, t.channels = 4; else if (function (e) {
                            return an(e) === Jt
                        }(r)) t.element = r, t.width = r.videoWidth, t.height = r.videoHeight, t.channels = 4; else if (on(r)) {
                            var g = t.width || r[0].length, b = t.height || r.length, y = t.channels;
                            y = Fe(r[0][0]) ? y || r[0][0].length : y || 1;
                            for (var x = ie.shape(r), w = 1, _ = 0; _ < x.length; ++_) w *= x[_];
                            var C = fn(t, w);
                            ie.flatten(r, x, "", C), ln(t, C), t.alignment = 1, t.width = g, t.height = b, t.channels = y, t.format = t.internalformat = Vt[y], t.needsFree = !0
                        }
                    } else t.width = t.width || 1, t.height = t.height || 1, t.channels = t.channels || 4;
                    t.type === xt ? M(i.extensions.indexOf("oes_texture_float") >= 0, "oes_texture_float extension not enabled") : t.type === it && M(i.extensions.indexOf("oes_texture_half_float") >= 0, "oes_texture_half_float extension not enabled")
                }

                function D(e, t, r) {
                    var i = e.element, a = e.data, s = e.internalformat, c = e.format, u = e.type, f = e.width,
                        l = e.height, d = e.channels;
                    if (k(e), i) n.texImage2D(t, r, c, c, u, i); else if (e.compressed) n.compressedTexImage2D(t, r, s, f, l, 0, a); else if (e.needsCopy) o(), n.copyTexImage2D(t, r, c, e.xOffset, e.yOffset, f, l, 0); else {
                        var p = !a;
                        p && (a = ee.zero.allocType(u, f * l * d)), n.texImage2D(t, r, c, f, l, 0, c, u, a), p && a && ee.zero.freeType(a)
                    }
                }

                function z(e, t, r, i, a) {
                    var s = e.element, c = e.data, u = e.internalformat, f = e.format, l = e.type, d = e.width,
                        p = e.height;
                    k(e), s ? n.texSubImage2D(t, a, r, i, f, l, s) : e.compressed ? n.compressedTexSubImage2D(t, a, r, i, u, d, p, c) : e.needsCopy ? (o(), n.copyTexSubImage2D(t, a, r, i, e.xOffset, e.yOffset, d, p)) : n.texSubImage2D(t, a, r, i, d, p, f, l, c)
                }

                var P = [];

                function I() {
                    return P.pop() || new O
                }

                function F(e) {
                    e.needsFree && ee.freeType(e.data), O.call(e), P.push(e)
                }

                function B() {
                    j.call(this), this.genMipmaps = !1, this.mipmapHint = It, this.mipmask = 0, this.images = Array(16)
                }

                function L(e, t, n) {
                    var r = e.images[0] = I();
                    e.mipmask = 1, r.width = e.width = t, r.height = e.height = n, r.channels = e.channels = 4
                }

                function R(e, t) {
                    var n = null;
                    if (cn(t)) E(n = e.images[0] = I(), e), T(n, t), e.mipmask = 1; else if (A(e, t), Array.isArray(t.mipmap)) for (var r = t.mipmap, i = 0; i < r.length; ++i) E(n = e.images[i] = I(), e), n.width >>= i, n.height >>= i, T(n, r[i]), e.mipmask |= 1 << i; else E(n = e.images[0] = I(), e), T(n, t), e.mipmask = 1;
                    E(e, e.images[0]), (e.compressed && e.internalformat === ot || e.internalformat === at || e.internalformat === st || e.internalformat === ct) && M(e.width % 4 == 0 && e.height % 4 == 0, "for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")
                }

                function H(e, t) {
                    for (var n = e.images, r = 0; r < n.length; ++r) {
                        if (!n[r]) return;
                        D(n[r], t, r)
                    }
                }

                var N = [];

                function W() {
                    var e = N.pop() || new B;
                    j.call(e), e.mipmask = 0;
                    for (var t = 0; t < 16; ++t) e.images[t] = null;
                    return e
                }

                function U(e) {
                    for (var t = e.images, n = 0; n < t.length; ++n) t[n] && F(t[n]), t[n] = null;
                    N.push(e)
                }

                function q() {
                    this.minFilter = kt, this.magFilter = kt, this.wrapS = St, this.wrapT = St, this.anisotropic = 1, this.genMipmaps = !1, this.mipmapHint = It
                }

                function G(e, t) {
                    if ("min" in t) {
                        var n = t.min;
                        M.parameter(n, d), e.minFilter = d[n], Gt.indexOf(e.minFilter) >= 0 && !("faces" in t) && (e.genMipmaps = !0)
                    }
                    if ("mag" in t) {
                        var r = t.mag;
                        M.parameter(r, l), e.magFilter = l[r]
                    }
                    var o = e.wrapS, a = e.wrapT;
                    if ("wrap" in t) {
                        var s = t.wrap;
                        "string" == typeof s ? (M.parameter(s, f), o = a = f[s]) : Array.isArray(s) && (M.parameter(s[0], f), M.parameter(s[1], f), o = f[s[0]], a = f[s[1]])
                    } else {
                        if ("wrapS" in t) {
                            var c = t.wrapS;
                            M.parameter(c, f), o = f[c]
                        }
                        if ("wrapT" in t) {
                            var p = t.wrapT;
                            M.parameter(p, f), a = f[p]
                        }
                    }
                    if (e.wrapS = o, e.wrapT = a, "anisotropic" in t) {
                        var h = t.anisotropic;
                        M("number" == typeof h && h >= 1 && h <= i.maxAnisotropic, "aniso samples must be between 1 and "), e.anisotropic = t.anisotropic
                    }
                    if ("mipmap" in t) {
                        var m = !1;
                        switch (typeof t.mipmap) {
                            case"string":
                                M.parameter(t.mipmap, u, "invalid mipmap hint"), e.mipmapHint = u[t.mipmap], e.genMipmaps = !0, m = !0;
                                break;
                            case"boolean":
                                m = e.genMipmaps = t.mipmap;
                                break;
                            case"object":
                                M(Array.isArray(t.mipmap), "invalid mipmap type"), e.genMipmaps = !1, m = !0;
                                break;
                            default:
                                M.raise("invalid mipmap type")
                        }
                        !m || "min" in t || (e.minFilter = Tt)
                    }
                }

                function V(e, t) {
                    n.texParameteri(t, At, e.minFilter), n.texParameteri(t, Et, e.magFilter), n.texParameteri(t, wt, e.wrapS), n.texParameteri(t, _t, e.wrapT), r.ext_texture_filter_anisotropic && n.texParameteri(t, Lt, e.anisotropic), e.genMipmaps && (n.hint(Pt, e.mipmapHint), n.generateMipmap(t))
                }

                var K = 0, $ = {}, Y = i.maxTextureUnits, Z = Array(Y).map(function () {
                    return null
                });

                function X(e) {
                    j.call(this), this.mipmask = 0, this.internalformat = We, this.id = K++, this.refCount = 1, this.target = e, this.texture = n.createTexture(), this.unit = -1, this.bindCount = 0, this.texInfo = new q, c.profile && (this.stats = {size: 0})
                }

                function Q(e) {
                    n.activeTexture(qt), n.bindTexture(e.target, e.texture)
                }

                function J() {
                    var e = Z[0];
                    e ? n.bindTexture(e.target, e.texture) : n.bindTexture(Re, null)
                }

                function te(e) {
                    var t = e.texture;
                    M(t, "must not double destroy texture");
                    var r = e.unit, i = e.target;
                    r >= 0 && (n.activeTexture(qt + r), n.bindTexture(i, null), Z[r] = null), n.deleteTexture(t), e.texture = null, e.params = null, e.pixels = null, e.refCount = 0, delete $[e.id], s.textureCount--
                }

                return t(X.prototype, {
                    bind: function () {
                        this.bindCount += 1;
                        var e = this.unit;
                        if (e < 0) {
                            for (var t = 0; t < Y; ++t) {
                                var r = Z[t];
                                if (r) {
                                    if (r.bindCount > 0) continue;
                                    r.unit = -1
                                }
                                Z[t] = this, e = t;
                                break
                            }
                            e >= Y && M.raise("insufficient number of texture units"), c.profile && s.maxTextureUnits < e + 1 && (s.maxTextureUnits = e + 1), this.unit = e, n.activeTexture(qt + e), n.bindTexture(this.target, this.texture)
                        }
                        return e
                    }, unbind: function () {
                        this.bindCount -= 1
                    }, decRef: function () {
                        --this.refCount <= 0 && te(this)
                    }
                }), c.profile && (s.getTotalTextureSize = function () {
                    var e = 0;
                    return Object.keys($).forEach(function (t) {
                        e += $[t].stats.size
                    }), e
                }), {
                    create2D: function (e, t) {
                        var r = new X(Re);

                        function o(e, t) {
                            var n = r.texInfo;
                            q.call(n);
                            var a = W();
                            return "number" == typeof e ? L(a, 0 | e, "number" == typeof t ? 0 | t : 0 | e) : e ? (M.type(e, "object", "invalid arguments to regl.texture"), G(n, e), R(a, e)) : L(a, 1, 1), n.genMipmaps && (a.mipmask = (a.width << 1) - 1), r.mipmask = a.mipmask, E(r, a), M.texture2D(n, a, i), r.internalformat = a.internalformat, o.width = a.width, o.height = a.height, Q(r), H(a, Re), V(n, Re), J(), U(a), c.profile && (r.stats.size = dn(r.internalformat, r.type, a.width, a.height, n.genMipmaps, !1)), o.format = y[r.internalformat], o.type = x[r.type], o.mag = w[n.magFilter], o.min = _[n.minFilter], o.wrapS = C[n.wrapS], o.wrapT = C[n.wrapT], o
                        }

                        return $[r.id] = r, s.textureCount++, o(e, t), o.subimage = function (e, t, n, i) {
                            M(!!e, "must specify image data");
                            var a = 0 | t, s = 0 | n, c = 0 | i, u = I();
                            return E(u, r), u.width = 0, u.height = 0, T(u, e), u.width = u.width || (r.width >> c) - a, u.height = u.height || (r.height >> c) - s, M(r.type === u.type && r.format === u.format && r.internalformat === u.internalformat, "incompatible format for texture.subimage"), M(a >= 0 && s >= 0 && a + u.width <= r.width && s + u.height <= r.height, "texture.subimage write out of bounds"), M(r.mipmask & 1 << c, "missing mipmap data"), M(u.data || u.element || u.needsCopy, "missing image data"), Q(r), z(u, Re, a, s, c), J(), F(u), o
                        }, o.resize = function (e, t) {
                            var i, a = 0 | e, s = 0 | t || a;
                            if (a === r.width && s === r.height) return o;
                            o.width = r.width = a, o.height = r.height = s, Q(r);
                            for (var u = r.channels, f = r.type, l = 0; r.mipmask >> l; ++l) {
                                var d = a >> l, p = s >> l;
                                if (!d || !p) break;
                                i = ee.zero.allocType(f, d * p * u), n.texImage2D(Re, l, r.format, d, p, 0, r.format, r.type, i), i && ee.zero.freeType(i)
                            }
                            return J(), c.profile && (r.stats.size = dn(r.internalformat, r.type, a, s, !1, !1)), o
                        }, o._reglType = "texture2d", o._texture = r, c.profile && (o.stats = r.stats), o.destroy = function () {
                            r.decRef()
                        }, o
                    }, createCube: function (e, t, r, o, a, u) {
                        var f = new X(He);
                        $[f.id] = f, s.cubeCount++;
                        var l = new Array(6);

                        function d(e, t, n, r, o, a) {
                            var s, u = f.texInfo;
                            for (q.call(u), s = 0; s < 6; ++s) l[s] = W();
                            if ("number" != typeof e && e) if ("object" == typeof e) if (t) R(l[0], e), R(l[1], t), R(l[2], n), R(l[3], r), R(l[4], o), R(l[5], a); else if (G(u, e), A(f, e), "faces" in e) {
                                var p = e.faces;
                                for (M(Array.isArray(p) && 6 === p.length, "cube faces must be a length 6 array"), s = 0; s < 6; ++s) M("object" == typeof p[s] && !!p[s], "invalid input for cube map face"), E(l[s], f), R(l[s], p[s])
                            } else for (s = 0; s < 6; ++s) R(l[s], e); else M.raise("invalid arguments to cube map"); else {
                                var h = 0 | e || 1;
                                for (s = 0; s < 6; ++s) L(l[s], h, h)
                            }
                            for (E(f, l[0]), i.npotTextureCube || M(Be(f.width) && Be(f.height), "your browser does not support non power or two texture dimensions"), u.genMipmaps ? f.mipmask = (l[0].width << 1) - 1 : f.mipmask = l[0].mipmask, M.textureCube(f, u, l, i), f.internalformat = l[0].internalformat, d.width = l[0].width, d.height = l[0].height, Q(f), s = 0; s < 6; ++s) H(l[s], Ne + s);
                            for (V(u, He), J(), c.profile && (f.stats.size = dn(f.internalformat, f.type, d.width, d.height, u.genMipmaps, !0)), d.format = y[f.internalformat], d.type = x[f.type], d.mag = w[u.magFilter], d.min = _[u.minFilter], d.wrapS = C[u.wrapS], d.wrapT = C[u.wrapT], s = 0; s < 6; ++s) U(l[s]);
                            return d
                        }

                        return d(e, t, r, o, a, u), d.subimage = function (e, t, n, r, i) {
                            M(!!t, "must specify image data"), M("number" == typeof e && e === (0 | e) && e >= 0 && e < 6, "invalid face");
                            var o = 0 | n, a = 0 | r, s = 0 | i, c = I();
                            return E(c, f), c.width = 0, c.height = 0, T(c, t), c.width = c.width || (f.width >> s) - o, c.height = c.height || (f.height >> s) - a, M(f.type === c.type && f.format === c.format && f.internalformat === c.internalformat, "incompatible format for texture.subimage"), M(o >= 0 && a >= 0 && o + c.width <= f.width && a + c.height <= f.height, "texture.subimage write out of bounds"), M(f.mipmask & 1 << s, "missing mipmap data"), M(c.data || c.element || c.needsCopy, "missing image data"), Q(f), z(c, Ne + e, o, a, s), J(), F(c), d
                        }, d.resize = function (e) {
                            var t = 0 | e;
                            if (t !== f.width) {
                                d.width = f.width = t, d.height = f.height = t, Q(f);
                                for (var r = 0; r < 6; ++r) for (var i = 0; f.mipmask >> i; ++i) n.texImage2D(Ne + r, i, f.format, t >> i, t >> i, 0, f.format, f.type, null);
                                return J(), c.profile && (f.stats.size = dn(f.internalformat, f.type, d.width, d.height, !1, !0)), d
                            }
                        }, d._reglType = "textureCube", d._texture = f, c.profile && (d.stats = f.stats), d.destroy = function () {
                            f.decRef()
                        }, d
                    }, clear: function () {
                        for (var e = 0; e < Y; ++e) n.activeTexture(qt + e), n.bindTexture(Re, null), Z[e] = null;
                        re($).forEach(te), s.cubeCount = 0, s.textureCount = 0
                    }, getTexture: function (e) {
                        return null
                    }, restore: function () {
                        for (var e = 0; e < Y; ++e) {
                            var t = Z[e];
                            t && (t.bindCount = 0, t.unit = -1, Z[e] = null)
                        }
                        re($).forEach(function (e) {
                            e.texture = n.createTexture(), n.bindTexture(e.target, e.texture);
                            for (var t = 0; t < 32; ++t) if (0 != (e.mipmask & 1 << t)) if (e.target === Re) n.texImage2D(Re, t, e.internalformat, e.width >> t, e.height >> t, 0, e.internalformat, e.type, null); else for (var r = 0; r < 6; ++r) n.texImage2D(Ne + r, t, e.internalformat, e.width >> t, e.height >> t, 0, e.internalformat, e.type, null);
                            V(e.texInfo, e.target)
                        })
                    }
                }
            }

            nn[Ke] = 2, nn[$e] = 2, nn[Ye] = 2, nn[tt] = 4, nn[ot] = .5, nn[at] = .5, nn[st] = 1, nn[ct] = 1, nn[ut] = .5, nn[ft] = 1, nn[lt] = 1, nn[dt] = .5, nn[pt] = .25, nn[ht] = .5, nn[mt] = .25, nn[vt] = .5;
            var hn = 36161, mn = 32854, vn = [];

            function gn(e, t, n) {
                return vn[e] * t * n
            }

            vn[mn] = 2, vn[32855] = 2, vn[36194] = 2, vn[33189] = 2, vn[36168] = 1, vn[34041] = 4, vn[35907] = 4, vn[34836] = 16, vn[34842] = 8, vn[34843] = 6;
            var bn = function (e, t, n, r, i) {
                    var o = {
                        rgba4: mn,
                        rgb565: 36194,
                        "rgb5 a1": 32855,
                        depth: 33189,
                        stencil: 36168,
                        "depth stencil": 34041
                    };
                    t.ext_srgb && (o.srgba = 35907), t.ext_color_buffer_half_float && (o.rgba16f = 34842, o.rgb16f = 34843), t.webgl_color_buffer_float && (o.rgba32f = 34836);
                    var a = [];
                    Object.keys(o).forEach(function (e) {
                        var t = o[e];
                        a[t] = e
                    });
                    var s = 0, c = {};

                    function u(e) {
                        this.id = s++, this.refCount = 1, this.renderbuffer = e, this.format = mn, this.width = 0, this.height = 0, i.profile && (this.stats = {size: 0})
                    }

                    function f(t) {
                        var n = t.renderbuffer;
                        M(n, "must not double destroy renderbuffer"), e.bindRenderbuffer(hn, null), e.deleteRenderbuffer(n), t.renderbuffer = null, t.refCount = 0, delete c[t.id], r.renderbufferCount--
                    }

                    return u.prototype.decRef = function () {
                        --this.refCount <= 0 && f(this)
                    }, i.profile && (r.getTotalRenderbufferSize = function () {
                        var e = 0;
                        return Object.keys(c).forEach(function (t) {
                            e += c[t].stats.size
                        }), e
                    }), {
                        create: function (t, s) {
                            var f = new u(e.createRenderbuffer());

                            function l(t, r) {
                                var s = 0, c = 0, u = mn;
                                if ("object" == typeof t && t) {
                                    var d = t;
                                    if ("shape" in d) {
                                        var p = d.shape;
                                        M(Array.isArray(p) && p.length >= 2, "invalid renderbuffer shape"), s = 0 | p[0], c = 0 | p[1]
                                    } else "radius" in d && (s = c = 0 | d.radius), "width" in d && (s = 0 | d.width), "height" in d && (c = 0 | d.height);
                                    "format" in d && (M.parameter(d.format, o, "invalid renderbuffer format"), u = o[d.format])
                                } else "number" == typeof t ? (s = 0 | t, c = "number" == typeof r ? 0 | r : s) : t ? M.raise("invalid arguments to renderbuffer constructor") : s = c = 1;
                                if (M(s > 0 && c > 0 && s <= n.maxRenderbufferSize && c <= n.maxRenderbufferSize, "invalid renderbuffer size"), s !== f.width || c !== f.height || u !== f.format) return l.width = f.width = s, l.height = f.height = c, f.format = u, e.bindRenderbuffer(hn, f.renderbuffer), e.renderbufferStorage(hn, u, s, c), M(0 === e.getError(), "invalid render buffer format"), i.profile && (f.stats.size = gn(f.format, f.width, f.height)), l.format = a[f.format], l
                            }

                            return c[f.id] = f, r.renderbufferCount++, l(t, s), l.resize = function (t, r) {
                                var o = 0 | t, a = 0 | r || o;
                                return o === f.width && a === f.height ? l : (M(o > 0 && a > 0 && o <= n.maxRenderbufferSize && a <= n.maxRenderbufferSize, "invalid renderbuffer size"), l.width = f.width = o, l.height = f.height = a, e.bindRenderbuffer(hn, f.renderbuffer), e.renderbufferStorage(hn, f.format, o, a), M(0 === e.getError(), "invalid render buffer format"), i.profile && (f.stats.size = gn(f.format, f.width, f.height)), l)
                            }, l._reglType = "renderbuffer", l._renderbuffer = f, i.profile && (l.stats = f.stats), l.destroy = function () {
                                f.decRef()
                            }, l
                        }, clear: function () {
                            re(c).forEach(f)
                        }, restore: function () {
                            re(c).forEach(function (t) {
                                t.renderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(hn, t.renderbuffer), e.renderbufferStorage(hn, t.format, t.width, t.height)
                            }), e.bindRenderbuffer(hn, null)
                        }
                    }
                }, yn = 36160, xn = 36161, wn = 3553, _n = 34069, Cn = 36064, Sn = 36096, jn = 36128, En = 33306,
                An = 36053, kn = 6402, On = [6407, 6408], Tn = [];
            Tn[6408] = 4, Tn[6407] = 3;
            var Dn = [];
            Dn[5121] = 1, Dn[5126] = 4, Dn[36193] = 2;
            var Mn = 33189, zn = 36168, Pn = 34041, In = [32854, 32855, 36194, 35907, 34842, 34843, 34836], Fn = {};
            Fn[An] = "complete", Fn[36054] = "incomplete attachment", Fn[36057] = "incomplete dimensions", Fn[36055] = "incomplete, missing attachment", Fn[36061] = "unsupported";
            var Bn = 5126;

            function Ln() {
                this.state = 0, this.x = 0, this.y = 0, this.z = 0, this.w = 0, this.buffer = null, this.size = 0, this.normalized = !1, this.type = Bn, this.offset = 0, this.stride = 0, this.divisor = 0
            }

            var Rn = 35632, Hn = 35633, Nn = 35718, Wn = 35721, Un = 6408, qn = 5121, Gn = 3333, Vn = 5126;

            function Kn(t, n, r, i, o, a, s) {
                function c(c) {
                    var u;
                    null === n.next ? (M(o.preserveDrawingBuffer, 'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'), u = qn) : (M(null !== n.next.colorAttachments[0].texture, "You cannot read from a renderbuffer"), u = n.next.colorAttachments[0].texture._texture.type, a.oes_texture_float ? (M(u === qn || u === Vn, "Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"), u === Vn && M(s.readFloat, "Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")) : M(u === qn, "Reading from a framebuffer is only allowed for the type 'uint8'"));
                    var f = 0, l = 0, d = i.framebufferWidth, p = i.framebufferHeight, h = null;
                    e(c) ? h = c : c && (M.type(c, "object", "invalid arguments to regl.read()"), f = 0 | c.x, l = 0 | c.y, M(f >= 0 && f < i.framebufferWidth, "invalid x offset for regl.read"), M(l >= 0 && l < i.framebufferHeight, "invalid y offset for regl.read"), d = 0 | (c.width || i.framebufferWidth - f), p = 0 | (c.height || i.framebufferHeight - l), h = c.data || null), h && (u === qn ? M(h instanceof Uint8Array, "buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'") : u === Vn && M(h instanceof Float32Array, "buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")), M(d > 0 && d + f <= i.framebufferWidth, "invalid width for read pixels"), M(p > 0 && p + l <= i.framebufferHeight, "invalid height for read pixels"), r();
                    var m = d * p * 4;
                    return h || (u === qn ? h = new Uint8Array(m) : u === Vn && (h = h || new Float32Array(m))), M.isTypedArray(h, "data buffer for regl.read() must be a typedarray"), M(h.byteLength >= m, "data buffer for regl.read() too small"), t.pixelStorei(Gn, 4), t.readPixels(f, l, d, p, Un, u, h), h
                }

                return function (e) {
                    return e && "framebuffer" in e ? function (e) {
                        var t;
                        return n.setFBO({framebuffer: e.framebuffer}, function () {
                            t = c(e)
                        }), t
                    }(e) : c(e)
                }
            }

            function $n(e) {
                return Array.prototype.slice.call(e)
            }

            function Yn(e) {
                return $n(e).join("")
            }

            var Zn = "xyzw".split(""), Xn = 5121, Qn = 1, Jn = 2, er = 0, tr = 1, nr = 2, rr = 3, ir = 4, or = "dither",
                ar = "blend.enable", sr = "blend.color", cr = "blend.equation", ur = "blend.func", fr = "depth.enable",
                lr = "depth.func", dr = "depth.range", pr = "depth.mask", hr = "colorMask", mr = "cull.enable",
                vr = "cull.face", gr = "frontFace", br = "lineWidth", yr = "polygonOffset.enable",
                xr = "polygonOffset.offset", wr = "sample.alpha", _r = "sample.enable", Cr = "sample.coverage",
                Sr = "stencil.enable", jr = "stencil.mask", Er = "stencil.func", Ar = "stencil.opFront",
                kr = "stencil.opBack", Or = "scissor.enable", Tr = "scissor.box", Dr = "viewport", Mr = "profile",
                zr = "framebuffer", Pr = "vert", Ir = "frag", Fr = "elements", Br = "primitive", Lr = "count",
                Rr = "offset", Hr = "instances", Nr = zr + "Width", Wr = zr + "Height", Ur = Dr + "Width",
                qr = Dr + "Height", Gr = "drawingBufferWidth", Vr = "drawingBufferHeight",
                Kr = [ur, cr, Er, Ar, kr, Cr, Dr, Tr, xr], $r = 34962, Yr = 34963, Zr = 3553, Xr = 34067, Qr = 2884,
                Jr = 3042, ei = 3024, ti = 2960, ni = 2929, ri = 3089, ii = 32823, oi = 32926, ai = 32928, si = 5126,
                ci = 35664, ui = 35665, fi = 35666, li = 5124, di = 35667, pi = 35668, hi = 35669, mi = 35670,
                vi = 35671, gi = 35672, bi = 35673, yi = 35674, xi = 35675, wi = 35676, _i = 35678, Ci = 35680, Si = 4,
                ji = 1028, Ei = 1029, Ai = 2304, ki = 2305, Oi = 32775, Ti = 32776, Di = 519, Mi = 7680, zi = 0, Pi = 1,
                Ii = 32774, Fi = 513, Bi = 36160, Li = 36064, Ri = {
                    0: 0,
                    1: 1,
                    zero: 0,
                    one: 1,
                    "src color": 768,
                    "one minus src color": 769,
                    "src alpha": 770,
                    "one minus src alpha": 771,
                    "dst color": 774,
                    "one minus dst color": 775,
                    "dst alpha": 772,
                    "one minus dst alpha": 773,
                    "constant color": 32769,
                    "one minus constant color": 32770,
                    "constant alpha": 32771,
                    "one minus constant alpha": 32772,
                    "src alpha saturate": 776
                },
                Hi = ["constant color, constant alpha", "one minus constant color, constant alpha", "constant color, one minus constant alpha", "one minus constant color, one minus constant alpha", "constant alpha, constant color", "constant alpha, one minus constant color", "one minus constant alpha, constant color", "one minus constant alpha, one minus constant color"],
                Ni = {
                    never: 512,
                    less: 513,
                    "<": 513,
                    equal: 514,
                    "=": 514,
                    "==": 514,
                    "===": 514,
                    lequal: 515,
                    "<=": 515,
                    greater: 516,
                    ">": 516,
                    notequal: 517,
                    "!=": 517,
                    "!==": 517,
                    gequal: 518,
                    ">=": 518,
                    always: 519
                }, Wi = {
                    0: 0,
                    zero: 0,
                    keep: 7680,
                    replace: 7681,
                    increment: 7682,
                    decrement: 7683,
                    "increment wrap": 34055,
                    "decrement wrap": 34056,
                    invert: 5386
                }, Ui = {frag: 35632, vert: 35633}, qi = {cw: Ai, ccw: ki};

            function Gi(t) {
                return Array.isArray(t) || e(t) || ne(t)
            }

            function Vi(e) {
                return e.sort(function (e, t) {
                    return e === Dr ? -1 : t === Dr ? 1 : e < t ? -1 : 1
                })
            }

            function Ki(e, t, n, r) {
                this.thisDep = e, this.contextDep = t, this.propDep = n, this.append = r
            }

            function $i(e) {
                return e && !(e.thisDep || e.contextDep || e.propDep)
            }

            function Yi(e) {
                return new Ki(!1, !1, !1, e)
            }

            function Zi(e, t) {
                var n = e.type;
                if (n === er) {
                    var r = e.data.length;
                    return new Ki(!0, r >= 1, r >= 2, t)
                }
                if (n === ir) {
                    var i = e.data;
                    return new Ki(i.thisDep, i.contextDep, i.propDep, t)
                }
                return new Ki(n === rr, n === nr, n === tr, t)
            }

            var Xi = new Ki(!1, !1, !1, function () {
            });

            function Qi(e, n, r, i, o, a, s, c, u, f, l, d, p, h, m) {
                var v = f.Record, g = {add: 32774, subtract: 32778, "reverse subtract": 32779};
                r.ext_blend_minmax && (g.min = Oi, g.max = Ti);
                var b = r.angle_instanced_arrays, y = r.webgl_draw_buffers, x = {dirty: !0, profile: m.profile}, w = {},
                    _ = [], C = {}, S = {};

                function j(e) {
                    return e.replace(".", "_")
                }

                function E(e, t, n) {
                    var r = j(e);
                    _.push(e), w[r] = x[r] = !!n, C[r] = t
                }

                function A(e, t, n) {
                    var r = j(e);
                    _.push(e), Array.isArray(n) ? (x[r] = n.slice(), w[r] = n.slice()) : x[r] = w[r] = n, S[r] = t
                }

                E(or, ei), E(ar, Jr), A(sr, "blendColor", [0, 0, 0, 0]), A(cr, "blendEquationSeparate", [Ii, Ii]), A(ur, "blendFuncSeparate", [Pi, zi, Pi, zi]), E(fr, ni, !0), A(lr, "depthFunc", Fi), A(dr, "depthRange", [0, 1]), A(pr, "depthMask", !0), A(hr, hr, [!0, !0, !0, !0]), E(mr, Qr), A(vr, "cullFace", Ei), A(gr, gr, ki), A(br, br, 1), E(yr, ii), A(xr, "polygonOffset", [0, 0]), E(wr, oi), E(_r, ai), A(Cr, "sampleCoverage", [1, !1]), E(Sr, ti), A(jr, "stencilMask", -1), A(Er, "stencilFunc", [Di, 0, -1]), A(Ar, "stencilOpSeparate", [ji, Mi, Mi, Mi]), A(kr, "stencilOpSeparate", [Ei, Mi, Mi, Mi]), E(Or, ri), A(Tr, "scissor", [0, 0, e.drawingBufferWidth, e.drawingBufferHeight]), A(Dr, Dr, [0, 0, e.drawingBufferWidth, e.drawingBufferHeight]);
                var k = {
                    gl: e,
                    context: p,
                    strings: n,
                    next: w,
                    current: x,
                    draw: d,
                    elements: a,
                    buffer: o,
                    shader: l,
                    attributes: f.state,
                    uniforms: u,
                    framebuffer: c,
                    extensions: r,
                    timer: h,
                    isBufferArgs: Gi
                }, O = {
                    primTypes: ye,
                    compareFuncs: Ni,
                    blendFuncs: Ri,
                    blendEquations: g,
                    stencilOps: Wi,
                    glTypes: se,
                    orientationType: qi
                };
                M.optional(function () {
                    k.isArrayLike = Fe
                }), y && (O.backBuffer = [Ei], O.drawBuffer = q(i.maxDrawbuffers, function (e) {
                    return 0 === e ? [0] : q(e, function (e) {
                        return Li + e
                    })
                }));
                var T = 0;

                function D() {
                    var e = function () {
                        var e = 0, n = [], r = [];

                        function i() {
                            var n = [], r = [];
                            return t(function () {
                                n.push.apply(n, $n(arguments))
                            }, {
                                def: function () {
                                    var t = "v" + e++;
                                    return r.push(t), arguments.length > 0 && (n.push(t, "="), n.push.apply(n, $n(arguments)), n.push(";")), t
                                }, toString: function () {
                                    return Yn([r.length > 0 ? "var " + r + ";" : "", Yn(n)])
                                }
                            })
                        }

                        function o() {
                            var e = i(), n = i(), r = e.toString, o = n.toString;

                            function a(t, r) {
                                n(t, r, "=", e.def(t, r), ";")
                            }

                            return t(function () {
                                e.apply(e, $n(arguments))
                            }, {
                                def: e.def, entry: e, exit: n, save: a, set: function (t, n, r) {
                                    a(t, n), e(t, n, "=", r, ";")
                                }, toString: function () {
                                    return r() + o()
                                }
                            })
                        }

                        var a = i(), s = {};
                        return {
                            global: a, link: function (t) {
                                for (var i = 0; i < r.length; ++i) if (r[i] === t) return n[i];
                                var o = "g" + e++;
                                return n.push(o), r.push(t), o
                            }, block: i, proc: function (e, n) {
                                var r = [];

                                function i() {
                                    var e = "a" + r.length;
                                    return r.push(e), e
                                }

                                n = n || 0;
                                for (var a = 0; a < n; ++a) i();
                                var c = o(), u = c.toString;
                                return s[e] = t(c, {
                                    arg: i, toString: function () {
                                        return Yn(["function(", r.join(), "){", u(), "}"])
                                    }
                                })
                            }, scope: o, cond: function () {
                                var e = Yn(arguments), n = o(), r = o(), i = n.toString, a = r.toString;
                                return t(n, {
                                    then: function () {
                                        return n.apply(n, $n(arguments)), this
                                    }, else: function () {
                                        return r.apply(r, $n(arguments)), this
                                    }, toString: function () {
                                        var t = a();
                                        return t && (t = "else{" + t + "}"), Yn(["if(", e, "){", i(), "}", t])
                                    }
                                })
                            }, compile: function () {
                                var e = ['"use strict";', a, "return {"];
                                Object.keys(s).forEach(function (t) {
                                    e.push('"', t, '":', s[t].toString(), ",")
                                }), e.push("}");
                                var t = Yn(e).replace(/;/g, ";\n").replace(/}/g, "}\n").replace(/{/g, "{\n");
                                return Function.apply(null, n.concat(t)).apply(null, r)
                            }
                        }
                    }(), r = e.link, i = e.global;
                    e.id = T++, e.batchId = "0";
                    var o = r(k), a = e.shared = {props: "a0"};
                    Object.keys(k).forEach(function (e) {
                        a[e] = i.def(o, ".", e)
                    }), M.optional(function () {
                        e.CHECK = r(M), e.commandStr = M.guessCommand(), e.command = r(e.commandStr), e.assert = function (e, t, n) {
                            e("if(!(", t, "))", this.CHECK, ".commandRaise(", r(n), ",", this.command, ");")
                        }, O.invalidBlendCombinations = Hi
                    });
                    var s = e.next = {}, c = e.current = {};
                    Object.keys(S).forEach(function (e) {
                        Array.isArray(x[e]) && (s[e] = i.def(a.next, ".", e), c[e] = i.def(a.current, ".", e))
                    });
                    var u = e.constants = {};
                    Object.keys(O).forEach(function (e) {
                        u[e] = i.def(JSON.stringify(O[e]))
                    }), e.invoke = function (t, n) {
                        switch (n.type) {
                            case er:
                                var i = ["this", a.context, a.props, e.batchId];
                                return t.def(r(n.data), ".call(", i.slice(0, Math.max(n.data.length + 1, 4)), ")");
                            case tr:
                                return t.def(a.props, n.data);
                            case nr:
                                return t.def(a.context, n.data);
                            case rr:
                                return t.def("this", n.data);
                            case ir:
                                return n.data.append(e, t), n.data.ref
                        }
                    }, e.attribCache = {};
                    var l = {};
                    return e.scopeAttrib = function (e) {
                        var t = n.id(e);
                        if (t in l) return l[t];
                        var i = f.scope[t];
                        i || (i = f.scope[t] = new v);
                        var o = l[t] = r(i);
                        return o
                    }, e
                }

                function z(e, t, r, s, u) {
                    var f = e.static, d = e.dynamic;
                    M.optional(function () {
                        var e = [zr, Pr, Ir, Fr, Br, Rr, Lr, Hr, Mr].concat(_);

                        function t(t) {
                            Object.keys(t).forEach(function (t) {
                                M.command(e.indexOf(t) >= 0, 'unknown parameter "' + t + '"', u.commandStr)
                            })
                        }

                        t(f), t(d)
                    });
                    var p = function (e, t) {
                        var n = e.static, r = e.dynamic;
                        if (zr in n) {
                            var i = n[zr];
                            return i ? (i = c.getFramebuffer(i), M.command(i, "invalid framebuffer object"), Yi(function (e, t) {
                                var n = e.link(i), r = e.shared;
                                t.set(r.framebuffer, ".next", n);
                                var o = r.context;
                                return t.set(o, "." + Nr, n + ".width"), t.set(o, "." + Wr, n + ".height"), n
                            })) : Yi(function (e, t) {
                                var n = e.shared;
                                t.set(n.framebuffer, ".next", "null");
                                var r = n.context;
                                return t.set(r, "." + Nr, r + "." + Gr), t.set(r, "." + Wr, r + "." + Vr), "null"
                            })
                        }
                        if (zr in r) {
                            var o = r[zr];
                            return Zi(o, function (e, t) {
                                var n = e.invoke(t, o), r = e.shared, i = r.framebuffer,
                                    a = t.def(i, ".getFramebuffer(", n, ")");
                                M.optional(function () {
                                    e.assert(t, "!" + n + "||" + a, "invalid framebuffer object")
                                }), t.set(i, ".next", a);
                                var s = r.context;
                                return t.set(s, "." + Nr, a + "?" + a + ".width:" + s + "." + Gr), t.set(s, "." + Wr, a + "?" + a + ".height:" + s + "." + Vr), a
                            })
                        }
                        return null
                    }(e), h = function (e, t, n) {
                        var r = e.static, i = e.dynamic;

                        function o(e) {
                            if (e in r) {
                                var o = r[e];
                                M.commandType(o, "object", "invalid " + e, n.commandStr);
                                var a, s, c = !0, u = 0 | o.x, f = 0 | o.y;
                                return "width" in o ? (a = 0 | o.width, M.command(a >= 0, "invalid " + e, n.commandStr)) : c = !1, "height" in o ? (s = 0 | o.height, M.command(s >= 0, "invalid " + e, n.commandStr)) : c = !1, new Ki(!c && t && t.thisDep, !c && t && t.contextDep, !c && t && t.propDep, function (e, t) {
                                    var n = e.shared.context, r = a;
                                    "width" in o || (r = t.def(n, ".", Nr, "-", u));
                                    var i = s;
                                    return "height" in o || (i = t.def(n, ".", Wr, "-", f)), [u, f, r, i]
                                })
                            }
                            if (e in i) {
                                var l = i[e], d = Zi(l, function (t, n) {
                                    var r = t.invoke(n, l);
                                    M.optional(function () {
                                        t.assert(n, r + "&&typeof " + r + '==="object"', "invalid " + e)
                                    });
                                    var i = t.shared.context, o = n.def(r, ".x|0"), a = n.def(r, ".y|0"),
                                        s = n.def('"width" in ', r, "?", r, ".width|0:", "(", i, ".", Nr, "-", o, ")"),
                                        c = n.def('"height" in ', r, "?", r, ".height|0:", "(", i, ".", Wr, "-", a, ")");
                                    return M.optional(function () {
                                        t.assert(n, s + ">=0&&" + c + ">=0", "invalid " + e)
                                    }), [o, a, s, c]
                                });
                                return t && (d.thisDep = d.thisDep || t.thisDep, d.contextDep = d.contextDep || t.contextDep, d.propDep = d.propDep || t.propDep), d
                            }
                            return t ? new Ki(t.thisDep, t.contextDep, t.propDep, function (e, t) {
                                var n = e.shared.context;
                                return [0, 0, t.def(n, ".", Nr), t.def(n, ".", Wr)]
                            }) : null
                        }

                        var a = o(Dr);
                        if (a) {
                            var s = a;
                            a = new Ki(a.thisDep, a.contextDep, a.propDep, function (e, t) {
                                var n = s.append(e, t), r = e.shared.context;
                                return t.set(r, "." + Ur, n[2]), t.set(r, "." + qr, n[3]), n
                            })
                        }
                        return {viewport: a, scissor_box: o(Tr)}
                    }(e, p, u), m = function (e, t) {
                        var n = e.static, r = e.dynamic, i = function () {
                            if (Fr in n) {
                                var e = n[Fr];
                                Gi(e) ? e = a.getElements(a.create(e, !0)) : e && (e = a.getElements(e), M.command(e, "invalid elements", t.commandStr));
                                var i = Yi(function (t, n) {
                                    if (e) {
                                        var r = t.link(e);
                                        return t.ELEMENTS = r, r
                                    }
                                    return t.ELEMENTS = null, null
                                });
                                return i.value = e, i
                            }
                            if (Fr in r) {
                                var o = r[Fr];
                                return Zi(o, function (e, t) {
                                    var n = e.shared, r = n.isBufferArgs, i = n.elements, a = e.invoke(t, o),
                                        s = t.def("null"), c = t.def(r, "(", a, ")"),
                                        u = e.cond(c).then(s, "=", i, ".createStream(", a, ");").else(s, "=", i, ".getElements(", a, ");");
                                    return M.optional(function () {
                                        e.assert(u.else, "!" + a + "||" + s, "invalid elements")
                                    }), t.entry(u), t.exit(e.cond(c).then(i, ".destroyStream(", s, ");")), e.ELEMENTS = s, s
                                })
                            }
                            return null
                        }();

                        function o(e, o) {
                            if (e in n) {
                                var a = 0 | n[e];
                                return M.command(!o || a >= 0, "invalid " + e, t.commandStr), Yi(function (e, t) {
                                    return o && (e.OFFSET = a), a
                                })
                            }
                            if (e in r) {
                                var s = r[e];
                                return Zi(s, function (t, n) {
                                    var r = t.invoke(n, s);
                                    return o && (t.OFFSET = r, M.optional(function () {
                                        t.assert(n, r + ">=0", "invalid " + e)
                                    })), r
                                })
                            }
                            return o && i ? Yi(function (e, t) {
                                return e.OFFSET = "0", 0
                            }) : null
                        }

                        var s = o(Rr, !0);
                        return {
                            elements: i, primitive: function () {
                                if (Br in n) {
                                    var e = n[Br];
                                    return M.commandParameter(e, ye, "invalid primitve", t.commandStr), Yi(function (t, n) {
                                        return ye[e]
                                    })
                                }
                                if (Br in r) {
                                    var o = r[Br];
                                    return Zi(o, function (e, t) {
                                        var n = e.constants.primTypes, r = e.invoke(t, o);
                                        return M.optional(function () {
                                            e.assert(t, r + " in " + n, "invalid primitive, must be one of " + Object.keys(ye))
                                        }), t.def(n, "[", r, "]")
                                    })
                                }
                                return i ? $i(i) ? i.value ? Yi(function (e, t) {
                                    return t.def(e.ELEMENTS, ".primType")
                                }) : Yi(function () {
                                    return Si
                                }) : new Ki(i.thisDep, i.contextDep, i.propDep, function (e, t) {
                                    var n = e.ELEMENTS;
                                    return t.def(n, "?", n, ".primType:", Si)
                                }) : null
                            }(), count: function () {
                                if (Lr in n) {
                                    var e = 0 | n[Lr];
                                    return M.command("number" == typeof e && e >= 0, "invalid vertex count", t.commandStr), Yi(function () {
                                        return e
                                    })
                                }
                                if (Lr in r) {
                                    var o = r[Lr];
                                    return Zi(o, function (e, t) {
                                        var n = e.invoke(t, o);
                                        return M.optional(function () {
                                            e.assert(t, "typeof " + n + '==="number"&&' + n + ">=0&&" + n + "===(" + n + "|0)", "invalid vertex count")
                                        }), n
                                    })
                                }
                                if (i) {
                                    if ($i(i)) {
                                        if (i) return s ? new Ki(s.thisDep, s.contextDep, s.propDep, function (e, t) {
                                            var n = t.def(e.ELEMENTS, ".vertCount-", e.OFFSET);
                                            return M.optional(function () {
                                                e.assert(t, n + ">=0", "invalid vertex offset/element buffer too small")
                                            }), n
                                        }) : Yi(function (e, t) {
                                            return t.def(e.ELEMENTS, ".vertCount")
                                        });
                                        var a = Yi(function () {
                                            return -1
                                        });
                                        return M.optional(function () {
                                            a.MISSING = !0
                                        }), a
                                    }
                                    var c = new Ki(i.thisDep || s.thisDep, i.contextDep || s.contextDep, i.propDep || s.propDep, function (e, t) {
                                        var n = e.ELEMENTS;
                                        return e.OFFSET ? t.def(n, "?", n, ".vertCount-", e.OFFSET, ":-1") : t.def(n, "?", n, ".vertCount:-1")
                                    });
                                    return M.optional(function () {
                                        c.DYNAMIC = !0
                                    }), c
                                }
                                return null
                            }(), instances: o(Hr, !1), offset: s
                        }
                    }(e, u), y = function (e, t) {
                        var n = e.static, r = e.dynamic, o = {};
                        return _.forEach(function (e) {
                            var a = j(e);

                            function s(t, i) {
                                if (e in n) {
                                    var s = t(n[e]);
                                    o[a] = Yi(function () {
                                        return s
                                    })
                                } else if (e in r) {
                                    var c = r[e];
                                    o[a] = Zi(c, function (e, t) {
                                        return i(e, t, e.invoke(t, c))
                                    })
                                }
                            }

                            switch (e) {
                                case mr:
                                case ar:
                                case or:
                                case Sr:
                                case fr:
                                case Or:
                                case yr:
                                case wr:
                                case _r:
                                case pr:
                                    return s(function (n) {
                                        return M.commandType(n, "boolean", e, t.commandStr), n
                                    }, function (t, n, r) {
                                        return M.optional(function () {
                                            t.assert(n, "typeof " + r + '==="boolean"', "invalid flag " + e, t.commandStr)
                                        }), r
                                    });
                                case lr:
                                    return s(function (n) {
                                        return M.commandParameter(n, Ni, "invalid " + e, t.commandStr), Ni[n]
                                    }, function (t, n, r) {
                                        var i = t.constants.compareFuncs;
                                        return M.optional(function () {
                                            t.assert(n, r + " in " + i, "invalid " + e + ", must be one of " + Object.keys(Ni))
                                        }), n.def(i, "[", r, "]")
                                    });
                                case dr:
                                    return s(function (e) {
                                        return M.command(Fe(e) && 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1] && e[0] <= e[1], "depth range is 2d array", t.commandStr), e
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, e.shared.isArrayLike + "(" + n + ")&&" + n + ".length===2&&typeof " + n + '[0]==="number"&&typeof ' + n + '[1]==="number"&&' + n + "[0]<=" + n + "[1]", "depth range must be a 2d array")
                                        }), [t.def("+", n, "[0]"), t.def("+", n, "[1]")]
                                    });
                                case ur:
                                    return s(function (e) {
                                        M.commandType(e, "object", "blend.func", t.commandStr);
                                        var n = "srcRGB" in e ? e.srcRGB : e.src,
                                            r = "srcAlpha" in e ? e.srcAlpha : e.src,
                                            i = "dstRGB" in e ? e.dstRGB : e.dst,
                                            o = "dstAlpha" in e ? e.dstAlpha : e.dst;
                                        return M.commandParameter(n, Ri, a + ".srcRGB", t.commandStr), M.commandParameter(r, Ri, a + ".srcAlpha", t.commandStr), M.commandParameter(i, Ri, a + ".dstRGB", t.commandStr), M.commandParameter(o, Ri, a + ".dstAlpha", t.commandStr), M.command(-1 === Hi.indexOf(n + ", " + i), "unallowed blending combination (srcRGB, dstRGB) = (" + n + ", " + i + ")", t.commandStr), [Ri[n], Ri[i], Ri[r], Ri[o]]
                                    }, function (t, n, r) {
                                        var i = t.constants.blendFuncs;

                                        function o(o, a) {
                                            var s = n.def('"', o, a, '" in ', r, "?", r, ".", o, a, ":", r, ".", o);
                                            return M.optional(function () {
                                                t.assert(n, s + " in " + i, "invalid " + e + "." + o + a + ", must be one of " + Object.keys(Ri))
                                            }), s
                                        }

                                        M.optional(function () {
                                            t.assert(n, r + "&&typeof " + r + '==="object"', "invalid blend func, must be an object")
                                        });
                                        var a = o("src", "RGB"), s = o("dst", "RGB");
                                        M.optional(function () {
                                            var e = t.constants.invalidBlendCombinations;
                                            t.assert(n, e + ".indexOf(" + a + '+", "+' + s + ") === -1 ", "unallowed blending combination for (srcRGB, dstRGB)")
                                        });
                                        var c = n.def(i, "[", a, "]"), u = n.def(i, "[", o("src", "Alpha"), "]");
                                        return [c, n.def(i, "[", s, "]"), u, n.def(i, "[", o("dst", "Alpha"), "]")]
                                    });
                                case cr:
                                    return s(function (n) {
                                        return "string" == typeof n ? (M.commandParameter(n, g, "invalid " + e, t.commandStr), [g[n], g[n]]) : "object" == typeof n ? (M.commandParameter(n.rgb, g, e + ".rgb", t.commandStr), M.commandParameter(n.alpha, g, e + ".alpha", t.commandStr), [g[n.rgb], g[n.alpha]]) : void M.commandRaise("invalid blend.equation", t.commandStr)
                                    }, function (t, n, r) {
                                        var i = t.constants.blendEquations, o = n.def(), a = n.def(),
                                            s = t.cond("typeof ", r, '==="string"');
                                        return M.optional(function () {
                                            function n(e, n, r) {
                                                t.assert(e, r + " in " + i, "invalid " + n + ", must be one of " + Object.keys(g))
                                            }

                                            n(s.then, e, r), t.assert(s.else, r + "&&typeof " + r + '==="object"', "invalid " + e), n(s.else, e + ".rgb", r + ".rgb"), n(s.else, e + ".alpha", r + ".alpha")
                                        }), s.then(o, "=", a, "=", i, "[", r, "];"), s.else(o, "=", i, "[", r, ".rgb];", a, "=", i, "[", r, ".alpha];"), n(s), [o, a]
                                    });
                                case sr:
                                    return s(function (e) {
                                        return M.command(Fe(e) && 4 === e.length, "blend.color must be a 4d array", t.commandStr), q(4, function (t) {
                                            return +e[t]
                                        })
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, e.shared.isArrayLike + "(" + n + ")&&" + n + ".length===4", "blend.color must be a 4d array")
                                        }), q(4, function (e) {
                                            return t.def("+", n, "[", e, "]")
                                        })
                                    });
                                case jr:
                                    return s(function (e) {
                                        return M.commandType(e, "number", a, t.commandStr), 0 | e
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, "typeof " + n + '==="number"', "invalid stencil.mask")
                                        }), t.def(n, "|0")
                                    });
                                case Er:
                                    return s(function (n) {
                                        M.commandType(n, "object", a, t.commandStr);
                                        var r = n.cmp || "keep", i = n.ref || 0, o = "mask" in n ? n.mask : -1;
                                        return M.commandParameter(r, Ni, e + ".cmp", t.commandStr), M.commandType(i, "number", e + ".ref", t.commandStr), M.commandType(o, "number", e + ".mask", t.commandStr), [Ni[r], i, o]
                                    }, function (e, t, n) {
                                        var r = e.constants.compareFuncs;
                                        return M.optional(function () {
                                            function i() {
                                                e.assert(t, Array.prototype.join.call(arguments, ""), "invalid stencil.func")
                                            }

                                            i(n + "&&typeof ", n, '==="object"'), i('!("cmp" in ', n, ")||(", n, ".cmp in ", r, ")")
                                        }), [t.def('"cmp" in ', n, "?", r, "[", n, ".cmp]", ":", Mi), t.def(n, ".ref|0"), t.def('"mask" in ', n, "?", n, ".mask|0:-1")]
                                    });
                                case Ar:
                                case kr:
                                    return s(function (n) {
                                        M.commandType(n, "object", a, t.commandStr);
                                        var r = n.fail || "keep", i = n.zfail || "keep", o = n.zpass || "keep";
                                        return M.commandParameter(r, Wi, e + ".fail", t.commandStr), M.commandParameter(i, Wi, e + ".zfail", t.commandStr), M.commandParameter(o, Wi, e + ".zpass", t.commandStr), [e === kr ? Ei : ji, Wi[r], Wi[i], Wi[o]]
                                    }, function (t, n, r) {
                                        var i = t.constants.stencilOps;

                                        function o(o) {
                                            return M.optional(function () {
                                                t.assert(n, '!("' + o + '" in ' + r + ")||(" + r + "." + o + " in " + i + ")", "invalid " + e + "." + o + ", must be one of " + Object.keys(Wi))
                                            }), n.def('"', o, '" in ', r, "?", i, "[", r, ".", o, "]:", Mi)
                                        }

                                        return M.optional(function () {
                                            t.assert(n, r + "&&typeof " + r + '==="object"', "invalid " + e)
                                        }), [e === kr ? Ei : ji, o("fail"), o("zfail"), o("zpass")]
                                    });
                                case xr:
                                    return s(function (e) {
                                        M.commandType(e, "object", a, t.commandStr);
                                        var n = 0 | e.factor, r = 0 | e.units;
                                        return M.commandType(n, "number", a + ".factor", t.commandStr), M.commandType(r, "number", a + ".units", t.commandStr), [n, r]
                                    }, function (t, n, r) {
                                        return M.optional(function () {
                                            t.assert(n, r + "&&typeof " + r + '==="object"', "invalid " + e)
                                        }), [n.def(r, ".factor|0"), n.def(r, ".units|0")]
                                    });
                                case vr:
                                    return s(function (e) {
                                        var n = 0;
                                        return "front" === e ? n = ji : "back" === e && (n = Ei), M.command(!!n, a, t.commandStr), n
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, n + '==="front"||' + n + '==="back"', "invalid cull.face")
                                        }), t.def(n, '==="front"?', ji, ":", Ei)
                                    });
                                case br:
                                    return s(function (e) {
                                        return M.command("number" == typeof e && e >= i.lineWidthDims[0] && e <= i.lineWidthDims[1], "invalid line width, must be a positive number between " + i.lineWidthDims[0] + " and " + i.lineWidthDims[1], t.commandStr), e
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, "typeof " + n + '==="number"&&' + n + ">=" + i.lineWidthDims[0] + "&&" + n + "<=" + i.lineWidthDims[1], "invalid line width")
                                        }), n
                                    });
                                case gr:
                                    return s(function (e) {
                                        return M.commandParameter(e, qi, a, t.commandStr), qi[e]
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, n + '==="cw"||' + n + '==="ccw"', "invalid frontFace, must be one of cw,ccw")
                                        }), t.def(n + '==="cw"?' + Ai + ":" + ki)
                                    });
                                case hr:
                                    return s(function (e) {
                                        return M.command(Fe(e) && 4 === e.length, "color.mask must be length 4 array", t.commandStr), e.map(function (e) {
                                            return !!e
                                        })
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, e.shared.isArrayLike + "(" + n + ")&&" + n + ".length===4", "invalid color.mask")
                                        }), q(4, function (e) {
                                            return "!!" + n + "[" + e + "]"
                                        })
                                    });
                                case Cr:
                                    return s(function (e) {
                                        M.command("object" == typeof e && e, a, t.commandStr);
                                        var n = "value" in e ? e.value : 1, r = !!e.invert;
                                        return M.command("number" == typeof n && n >= 0 && n <= 1, "sample.coverage.value must be a number between 0 and 1", t.commandStr), [n, r]
                                    }, function (e, t, n) {
                                        return M.optional(function () {
                                            e.assert(t, n + "&&typeof " + n + '==="object"', "invalid sample.coverage")
                                        }), [t.def('"value" in ', n, "?+", n, ".value:1"), t.def("!!", n, ".invert")]
                                    })
                            }
                        }), o
                    }(e, u), x = function (e) {
                        var t = e.static, r = e.dynamic;

                        function i(e) {
                            if (e in t) {
                                var i = n.id(t[e]);
                                M.optional(function () {
                                    l.shader(Ui[e], i, M.guessCommand())
                                });
                                var o = Yi(function () {
                                    return i
                                });
                                return o.id = i, o
                            }
                            if (e in r) {
                                var a = r[e];
                                return Zi(a, function (t, n) {
                                    var r = t.invoke(n, a), i = n.def(t.shared.strings, ".id(", r, ")");
                                    return M.optional(function () {
                                        n(t.shared.shader, ".shader(", Ui[e], ",", i, ",", t.command, ");")
                                    }), i
                                })
                            }
                            return null
                        }

                        var o, a = i(Ir), s = i(Pr), c = null;
                        return $i(a) && $i(s) ? (c = l.program(s.id, a.id), o = Yi(function (e, t) {
                            return e.link(c)
                        })) : o = new Ki(a && a.thisDep || s && s.thisDep, a && a.contextDep || s && s.contextDep, a && a.propDep || s && s.propDep, function (e, t) {
                            var n, r, i = e.shared.shader;
                            n = a ? a.append(e, t) : t.def(i, ".", Ir), r = s ? s.append(e, t) : t.def(i, ".", Pr);
                            var o = i + ".program(" + r + "," + n;
                            return M.optional(function () {
                                o += "," + e.command
                            }), t.def(o + ")")
                        }), {frag: a, vert: s, progVar: o, program: c}
                    }(e);

                    function w(e) {
                        var t = h[e];
                        t && (y[e] = t)
                    }

                    w(Dr), w(j(Tr));
                    var C = Object.keys(y).length > 0, S = {framebuffer: p, draw: m, shader: x, state: y, dirty: C};
                    return S.profile = function (e) {
                        var t, n = e.static, r = e.dynamic;
                        if (Mr in n) {
                            var i = !!n[Mr];
                            (t = Yi(function (e, t) {
                                return i
                            })).enable = i
                        } else if (Mr in r) {
                            var o = r[Mr];
                            t = Zi(o, function (e, t) {
                                return e.invoke(t, o)
                            })
                        }
                        return t
                    }(e), S.uniforms = function (e, t) {
                        var n = e.static, r = e.dynamic, i = {};
                        return Object.keys(n).forEach(function (e) {
                            var r, o = n[e];
                            if ("number" == typeof o || "boolean" == typeof o) r = Yi(function () {
                                return o
                            }); else if ("function" == typeof o) {
                                var a = o._reglType;
                                "texture2d" === a || "textureCube" === a ? r = Yi(function (e) {
                                    return e.link(o)
                                }) : "framebuffer" === a || "framebufferCube" === a ? (M.command(o.color.length > 0, 'missing color attachment for framebuffer sent to uniform "' + e + '"', t.commandStr), r = Yi(function (e) {
                                    return e.link(o.color[0])
                                })) : M.commandRaise('invalid data for uniform "' + e + '"', t.commandStr)
                            } else Fe(o) ? r = Yi(function (t) {
                                return t.global.def("[", q(o.length, function (n) {
                                    return M.command("number" == typeof o[n] || "boolean" == typeof o[n], "invalid uniform " + e, t.commandStr), o[n]
                                }), "]")
                            }) : M.commandRaise('invalid or missing data for uniform "' + e + '"', t.commandStr);
                            r.value = o, i[e] = r
                        }), Object.keys(r).forEach(function (e) {
                            var t = r[e];
                            i[e] = Zi(t, function (e, n) {
                                return e.invoke(n, t)
                            })
                        }), i
                    }(r, u), S.attributes = function (e, t) {
                        var r = e.static, i = e.dynamic, a = {};
                        return Object.keys(r).forEach(function (e) {
                            var i = r[e], s = n.id(e), c = new v;
                            if (Gi(i)) c.state = Qn, c.buffer = o.getBuffer(o.create(i, $r, !1, !0)), c.type = 0; else {
                                var u = o.getBuffer(i);
                                if (u) c.state = Qn, c.buffer = u, c.type = 0; else if (M.command("object" == typeof i && i, "invalid data for attribute " + e, t.commandStr), "constant" in i) {
                                    var f = i.constant;
                                    c.buffer = "null", c.state = Jn, "number" == typeof f ? c.x = f : (M.command(Fe(f) && f.length > 0 && f.length <= 4, "invalid constant for attribute " + e, t.commandStr), Zn.forEach(function (e, t) {
                                        t < f.length && (c[e] = f[t])
                                    }))
                                } else {
                                    u = Gi(i.buffer) ? o.getBuffer(o.create(i.buffer, $r, !1, !0)) : o.getBuffer(i.buffer), M.command(!!u, 'missing buffer for attribute "' + e + '"', t.commandStr);
                                    var l = 0 | i.offset;
                                    M.command(l >= 0, 'invalid offset for attribute "' + e + '"', t.commandStr);
                                    var d = 0 | i.stride;
                                    M.command(d >= 0 && d < 256, 'invalid stride for attribute "' + e + '", must be integer betweeen [0, 255]', t.commandStr);
                                    var p = 0 | i.size;
                                    M.command(!("size" in i) || p > 0 && p <= 4, 'invalid size for attribute "' + e + '", must be 1,2,3,4', t.commandStr);
                                    var h = !!i.normalized, m = 0;
                                    "type" in i && (M.commandParameter(i.type, se, "invalid type for attribute " + e, t.commandStr), m = se[i.type]);
                                    var g = 0 | i.divisor;
                                    "divisor" in i && (M.command(0 === g || b, 'cannot specify divisor for attribute "' + e + '", instancing not supported', t.commandStr), M.command(g >= 0, 'invalid divisor for attribute "' + e + '"', t.commandStr)), M.optional(function () {
                                        var n = t.commandStr,
                                            r = ["buffer", "offset", "divisor", "normalized", "type", "size", "stride"];
                                        Object.keys(i).forEach(function (t) {
                                            M.command(r.indexOf(t) >= 0, 'unknown parameter "' + t + '" for attribute pointer "' + e + '" (valid parameters are ' + r + ")", n)
                                        })
                                    }), c.buffer = u, c.state = Qn, c.size = p, c.normalized = h, c.type = m || u.dtype, c.offset = l, c.stride = d, c.divisor = g
                                }
                            }
                            a[e] = Yi(function (e, t) {
                                var n = e.attribCache;
                                if (s in n) return n[s];
                                var r = {isStream: !1};
                                return Object.keys(c).forEach(function (e) {
                                    r[e] = c[e]
                                }), c.buffer && (r.buffer = e.link(c.buffer), r.type = r.type || r.buffer + ".dtype"), n[s] = r, r
                            })
                        }), Object.keys(i).forEach(function (e) {
                            var t = i[e];
                            a[e] = Zi(t, function (n, r) {
                                var i = n.invoke(r, t), o = n.shared, a = o.isBufferArgs, s = o.buffer;
                                M.optional(function () {
                                    n.assert(r, i + "&&(typeof " + i + '==="object"||typeof ' + i + '==="function")&&(' + a + "(" + i + ")||" + s + ".getBuffer(" + i + ")||" + s + ".getBuffer(" + i + ".buffer)||" + a + "(" + i + '.buffer)||("constant" in ' + i + "&&(typeof " + i + '.constant==="number"||' + o.isArrayLike + "(" + i + ".constant))))", 'invalid dynamic attribute "' + e + '"')
                                });
                                var c = {isStream: r.def(!1)}, u = new v;
                                u.state = Qn, Object.keys(u).forEach(function (e) {
                                    c[e] = r.def("" + u[e])
                                });
                                var f = c.buffer, l = c.type;

                                function d(e) {
                                    r(c[e], "=", i, ".", e, "|0;")
                                }

                                return r("if(", a, "(", i, ")){", c.isStream, "=true;", f, "=", s, ".createStream(", $r, ",", i, ");", l, "=", f, ".dtype;", "}else{", f, "=", s, ".getBuffer(", i, ");", "if(", f, "){", l, "=", f, ".dtype;", '}else if("constant" in ', i, "){", c.state, "=", Jn, ";", "if(typeof " + i + '.constant === "number"){', c[Zn[0]], "=", i, ".constant;", Zn.slice(1).map(function (e) {
                                    return c[e]
                                }).join("="), "=0;", "}else{", Zn.map(function (e, t) {
                                    return c[e] + "=" + i + ".constant.length>" + t + "?" + i + ".constant[" + t + "]:0;"
                                }).join(""), "}}else{", "if(", a, "(", i, ".buffer)){", f, "=", s, ".createStream(", $r, ",", i, ".buffer);", "}else{", f, "=", s, ".getBuffer(", i, ".buffer);", "}", l, '="type" in ', i, "?", o.glTypes, "[", i, ".type]:", f, ".dtype;", c.normalized, "=!!", i, ".normalized;"), d("size"), d("offset"), d("stride"), d("divisor"), r("}}"), r.exit("if(", c.isStream, "){", s, ".destroyStream(", f, ");", "}"), c
                            })
                        }), a
                    }(t, u), S.context = function (e) {
                        var t = e.static, n = e.dynamic, r = {};
                        return Object.keys(t).forEach(function (e) {
                            var n = t[e];
                            r[e] = Yi(function (e, t) {
                                return "number" == typeof n || "boolean" == typeof n ? "" + n : e.link(n)
                            })
                        }), Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            r[e] = Zi(t, function (e, n) {
                                return e.invoke(n, t)
                            })
                        }), r
                    }(s), S
                }

                function P(e, t, n) {
                    var r = e.shared, i = r.context, o = e.scope();
                    Object.keys(n).forEach(function (r) {
                        t.save(i, "." + r);
                        var a = n[r];
                        o(i, ".", r, "=", a.append(e, t), ";")
                    }), t(o)
                }

                function I(e, t, n, r) {
                    var i, o = e.shared, a = o.gl, s = o.framebuffer;
                    y && (i = t.def(o.extensions, ".webgl_draw_buffers"));
                    var c, u = e.constants, f = u.drawBuffer, l = u.backBuffer;
                    c = n ? n.append(e, t) : t.def(s, ".next"), r || t("if(", c, "!==", s, ".cur){"), t("if(", c, "){", a, ".bindFramebuffer(", Bi, ",", c, ".framebuffer);"), y && t(i, ".drawBuffersWEBGL(", f, "[", c, ".colorAttachments.length]);"), t("}else{", a, ".bindFramebuffer(", Bi, ",null);"), y && t(i, ".drawBuffersWEBGL(", l, ");"), t("}", s, ".cur=", c, ";"), r || t("}")
                }

                function F(e, t, n) {
                    var r = e.shared, i = r.gl, o = e.current, a = e.next, s = r.current, c = r.next,
                        u = e.cond(s, ".dirty");
                    _.forEach(function (t) {
                        var r, f, l = j(t);
                        if (!(l in n.state)) if (l in a) {
                            r = a[l], f = o[l];
                            var d = q(x[l].length, function (e) {
                                return u.def(r, "[", e, "]")
                            });
                            u(e.cond(d.map(function (e, t) {
                                return e + "!==" + f + "[" + t + "]"
                            }).join("||")).then(i, ".", S[l], "(", d, ");", d.map(function (e, t) {
                                return f + "[" + t + "]=" + e
                            }).join(";"), ";"))
                        } else {
                            r = u.def(c, ".", l);
                            var p = e.cond(r, "!==", s, ".", l);
                            u(p), l in C ? p(e.cond(r).then(i, ".enable(", C[l], ");").else(i, ".disable(", C[l], ");"), s, ".", l, "=", r, ";") : p(i, ".", S[l], "(", r, ");", s, ".", l, "=", r, ";")
                        }
                    }), 0 === Object.keys(n.state).length && u(s, ".dirty=false;"), t(u)
                }

                function B(e, t, n, r) {
                    var i = e.shared, o = e.current, a = i.current, s = i.gl;
                    Vi(Object.keys(n)).forEach(function (i) {
                        var c = n[i];
                        if (!r || r(c)) {
                            var u = c.append(e, t);
                            if (C[i]) {
                                var f = C[i];
                                $i(c) ? t(s, u ? ".enable(" : ".disable(", f, ");") : t(e.cond(u).then(s, ".enable(", f, ");").else(s, ".disable(", f, ");")), t(a, ".", i, "=", u, ";")
                            } else if (Fe(u)) {
                                var l = o[i];
                                t(s, ".", S[i], "(", u, ");", u.map(function (e, t) {
                                    return l + "[" + t + "]=" + e
                                }).join(";"), ";")
                            } else t(s, ".", S[i], "(", u, ");", a, ".", i, "=", u, ";")
                        }
                    })
                }

                function R(e, t) {
                    b && (e.instancing = t.def(e.shared.extensions, ".angle_instanced_arrays"))
                }

                function H(e, t, n, r, i) {
                    var o, a, s, c = e.shared, u = e.stats, f = c.current, l = c.timer, d = n.profile;

                    function p() {
                        return "undefined" == typeof performance ? "Date.now()" : "performance.now()"
                    }

                    function m(e) {
                        o = t.def(), e(o, "=", p(), ";"), "string" == typeof i ? e(u, ".count+=", i, ";") : e(u, ".count++;"), h && (r ? (a = t.def(), e(a, "=", l, ".getNumPendingQueries();")) : e(l, ".beginQuery(", u, ");"))
                    }

                    function v(e) {
                        e(u, ".cpuTime+=", p(), "-", o, ";"), h && (r ? e(l, ".pushScopeStats(", a, ",", l, ".getNumPendingQueries(),", u, ");") : e(l, ".endQuery();"))
                    }

                    function g(e) {
                        var n = t.def(f, ".profile");
                        t(f, ".profile=", e, ";"), t.exit(f, ".profile=", n, ";")
                    }

                    if (d) {
                        if ($i(d)) return void (d.enable ? (m(t), v(t.exit), g("true")) : g("false"));
                        g(s = d.append(e, t))
                    } else s = t.def(f, ".profile");
                    var b = e.block();
                    m(b), t("if(", s, "){", b, "}");
                    var y = e.block();
                    v(y), t.exit("if(", s, "){", y, "}")
                }

                function N(e, t, n, r, i) {
                    var o = e.shared;
                    r.forEach(function (r) {
                        var a, s = r.name, c = n.attributes[s];
                        if (c) {
                            if (!i(c)) return;
                            a = c.append(e, t)
                        } else {
                            if (!i(Xi)) return;
                            var u = e.scopeAttrib(s);
                            M.optional(function () {
                                e.assert(t, u + ".state", "missing attribute " + s)
                            }), a = {}, Object.keys(new v).forEach(function (e) {
                                a[e] = t.def(u, ".", e)
                            })
                        }
                        !function (n, r, i) {
                            var a = o.gl, s = t.def(n, ".location"), c = t.def(o.attributes, "[", s, "]"), u = i.state,
                                f = i.buffer, l = [i.x, i.y, i.z, i.w],
                                d = ["buffer", "normalized", "offset", "stride"];

                            function p() {
                                t("if(!", c, ".buffer){", a, ".enableVertexAttribArray(", s, ");}");
                                var n, o = i.type;
                                if (n = i.size ? t.def(i.size, "||", r) : r, t("if(", c, ".type!==", o, "||", c, ".size!==", n, "||", d.map(function (e) {
                                    return c + "." + e + "!==" + i[e]
                                }).join("||"), "){", a, ".bindBuffer(", $r, ",", f, ".buffer);", a, ".vertexAttribPointer(", [s, n, o, i.normalized, i.stride, i.offset], ");", c, ".type=", o, ";", c, ".size=", n, ";", d.map(function (e) {
                                    return c + "." + e + "=" + i[e] + ";"
                                }).join(""), "}"), b) {
                                    var u = i.divisor;
                                    t("if(", c, ".divisor!==", u, "){", e.instancing, ".vertexAttribDivisorANGLE(", [s, u], ");", c, ".divisor=", u, ";}")
                                }
                            }

                            function h() {
                                t("if(", c, ".buffer){", a, ".disableVertexAttribArray(", s, ");", "}if(", Zn.map(function (e, t) {
                                    return c + "." + e + "!==" + l[t]
                                }).join("||"), "){", a, ".vertexAttrib4f(", s, ",", l, ");", Zn.map(function (e, t) {
                                    return c + "." + e + "=" + l[t] + ";"
                                }).join(""), "}")
                            }

                            u === Qn ? p() : u === Jn ? h() : (t("if(", u, "===", Qn, "){"), p(), t("}else{"), h(), t("}"))
                        }(e.link(r), function (e) {
                            switch (e) {
                                case ci:
                                case di:
                                case vi:
                                    return 2;
                                case ui:
                                case pi:
                                case gi:
                                    return 3;
                                case fi:
                                case hi:
                                case bi:
                                    return 4;
                                default:
                                    return 1
                            }
                        }(r.info.type), a)
                    })
                }

                function W(e, t, r, i, o) {
                    for (var a, s = e.shared, c = s.gl, u = 0; u < i.length; ++u) {
                        var f, l = i[u], d = l.name, p = l.info.type, h = r.uniforms[d], m = e.link(l),
                            v = m + ".location";
                        if (h) {
                            if (!o(h)) continue;
                            if ($i(h)) {
                                var g = h.value;
                                if (M.command(null != g, 'missing uniform "' + d + '"', e.commandStr), p === _i || p === Ci) {
                                    M.command("function" == typeof g && (p === _i && ("texture2d" === g._reglType || "framebuffer" === g._reglType) || p === Ci && ("textureCube" === g._reglType || "framebufferCube" === g._reglType)), "invalid texture for uniform " + d, e.commandStr);
                                    var b = e.link(g._texture || g.color[0]._texture);
                                    t(c, ".uniform1i(", v, ",", b + ".bind());"), t.exit(b, ".unbind();")
                                } else if (p === yi || p === xi || p === wi) {
                                    M.optional(function () {
                                        M.command(Fe(g), "invalid matrix for uniform " + d, e.commandStr), M.command(p === yi && 4 === g.length || p === xi && 9 === g.length || p === wi && 16 === g.length, "invalid length for matrix uniform " + d, e.commandStr)
                                    });
                                    var y = e.global.def("new Float32Array([" + Array.prototype.slice.call(g) + "])"),
                                        x = 2;
                                    p === xi ? x = 3 : p === wi && (x = 4), t(c, ".uniformMatrix", x, "fv(", v, ",false,", y, ");")
                                } else {
                                    switch (p) {
                                        case si:
                                            M.commandType(g, "number", "uniform " + d, e.commandStr), a = "1f";
                                            break;
                                        case ci:
                                            M.command(Fe(g) && 2 === g.length, "uniform " + d, e.commandStr), a = "2f";
                                            break;
                                        case ui:
                                            M.command(Fe(g) && 3 === g.length, "uniform " + d, e.commandStr), a = "3f";
                                            break;
                                        case fi:
                                            M.command(Fe(g) && 4 === g.length, "uniform " + d, e.commandStr), a = "4f";
                                            break;
                                        case mi:
                                            M.commandType(g, "boolean", "uniform " + d, e.commandStr), a = "1i";
                                            break;
                                        case li:
                                            M.commandType(g, "number", "uniform " + d, e.commandStr), a = "1i";
                                            break;
                                        case vi:
                                        case di:
                                            M.command(Fe(g) && 2 === g.length, "uniform " + d, e.commandStr), a = "2i";
                                            break;
                                        case gi:
                                        case pi:
                                            M.command(Fe(g) && 3 === g.length, "uniform " + d, e.commandStr), a = "3i";
                                            break;
                                        case bi:
                                        case hi:
                                            M.command(Fe(g) && 4 === g.length, "uniform " + d, e.commandStr), a = "4i"
                                    }
                                    t(c, ".uniform", a, "(", v, ",", Fe(g) ? Array.prototype.slice.call(g) : g, ");")
                                }
                                continue
                            }
                            f = h.append(e, t)
                        } else {
                            if (!o(Xi)) continue;
                            f = t.def(s.uniforms, "[", n.id(d), "]")
                        }
                        p === _i ? t("if(", f, "&&", f, '._reglType==="framebuffer"){', f, "=", f, ".color[0];", "}") : p === Ci && t("if(", f, "&&", f, '._reglType==="framebufferCube"){', f, "=", f, ".color[0];", "}"), M.optional(function () {
                            function n(n, r) {
                                e.assert(t, n, 'bad data or missing for uniform "' + d + '".  ' + r)
                            }

                            function r(e) {
                                n("typeof " + f + '==="' + e + '"', "invalid type, expected " + e)
                            }

                            function i(t, r) {
                                n(s.isArrayLike + "(" + f + ")&&" + f + ".length===" + t, "invalid vector, should have length " + t, e.commandStr)
                            }

                            function o(t) {
                                n("typeof " + f + '==="function"&&' + f + '._reglType==="texture' + (t === Zr ? "2d" : "Cube") + '"', "invalid texture type", e.commandStr)
                            }

                            switch (p) {
                                case li:
                                    r("number");
                                    break;
                                case di:
                                    i(2);
                                    break;
                                case pi:
                                    i(3);
                                    break;
                                case hi:
                                    i(4);
                                    break;
                                case si:
                                    r("number");
                                    break;
                                case ci:
                                    i(2);
                                    break;
                                case ui:
                                    i(3);
                                    break;
                                case fi:
                                    i(4);
                                    break;
                                case mi:
                                    r("boolean");
                                    break;
                                case vi:
                                    i(2);
                                    break;
                                case gi:
                                    i(3);
                                    break;
                                case bi:
                                case yi:
                                    i(4);
                                    break;
                                case xi:
                                    i(9);
                                    break;
                                case wi:
                                    i(16);
                                    break;
                                case _i:
                                    o(Zr);
                                    break;
                                case Ci:
                                    o(Xr)
                            }
                        });
                        var w = 1;
                        switch (p) {
                            case _i:
                            case Ci:
                                var _ = t.def(f, "._texture");
                                t(c, ".uniform1i(", v, ",", _, ".bind());"), t.exit(_, ".unbind();");
                                continue;
                            case li:
                            case mi:
                                a = "1i";
                                break;
                            case di:
                            case vi:
                                a = "2i", w = 2;
                                break;
                            case pi:
                            case gi:
                                a = "3i", w = 3;
                                break;
                            case hi:
                            case bi:
                                a = "4i", w = 4;
                                break;
                            case si:
                                a = "1f";
                                break;
                            case ci:
                                a = "2f", w = 2;
                                break;
                            case ui:
                                a = "3f", w = 3;
                                break;
                            case fi:
                                a = "4f", w = 4;
                                break;
                            case yi:
                                a = "Matrix2fv";
                                break;
                            case xi:
                                a = "Matrix3fv";
                                break;
                            case wi:
                                a = "Matrix4fv"
                        }
                        if (t(c, ".uniform", a, "(", v, ","), "M" === a.charAt(0)) {
                            var C = Math.pow(p - yi + 2, 2), S = e.global.def("new Float32Array(", C, ")");
                            t("false,(Array.isArray(", f, ")||", f, " instanceof Float32Array)?", f, ":(", q(C, function (e) {
                                return S + "[" + e + "]=" + f + "[" + e + "]"
                            }), ",", S, ")")
                        } else t(w > 1 ? q(w, function (e) {
                            return f + "[" + e + "]"
                        }) : f);
                        t(");")
                    }
                }

                function U(e, t, n, r) {
                    var i = e.shared, o = i.gl, a = i.draw, s = r.draw, c = function () {
                        var i, c = s.elements, u = t;
                        return c ? ((c.contextDep && r.contextDynamic || c.propDep) && (u = n), i = c.append(e, u)) : i = u.def(a, ".", Fr), i && u("if(" + i + ")" + o + ".bindBuffer(" + Yr + "," + i + ".buffer.buffer);"), i
                    }();

                    function u(i) {
                        var o = s[i];
                        return o ? o.contextDep && r.contextDynamic || o.propDep ? o.append(e, n) : o.append(e, t) : t.def(a, ".", i)
                    }

                    var f, l, d = u(Br), p = u(Rr), h = function () {
                        var i, o = s.count, c = t;
                        return o ? ((o.contextDep && r.contextDynamic || o.propDep) && (c = n), i = o.append(e, c), M.optional(function () {
                            o.MISSING && e.assert(t, "false", "missing vertex count"), o.DYNAMIC && e.assert(c, i + ">=0", "missing vertex count")
                        })) : (i = c.def(a, ".", Lr), M.optional(function () {
                            e.assert(c, i + ">=0", "missing vertex count")
                        })), i
                    }();
                    if ("number" == typeof h) {
                        if (0 === h) return
                    } else n("if(", h, "){"), n.exit("}");
                    b && (f = u(Hr), l = e.instancing);
                    var m = c + ".type", v = s.elements && $i(s.elements);

                    function g() {
                        function e() {
                            n(l, ".drawElementsInstancedANGLE(", [d, h, m, p + "<<((" + m + "-" + Xn + ")>>1)", f], ");")
                        }

                        function t() {
                            n(l, ".drawArraysInstancedANGLE(", [d, p, h, f], ");")
                        }

                        c ? v ? e() : (n("if(", c, "){"), e(), n("}else{"), t(), n("}")) : t()
                    }

                    function y() {
                        function e() {
                            n(o + ".drawElements(" + [d, h, m, p + "<<((" + m + "-" + Xn + ")>>1)"] + ");")
                        }

                        function t() {
                            n(o + ".drawArrays(" + [d, p, h] + ");")
                        }

                        c ? v ? e() : (n("if(", c, "){"), e(), n("}else{"), t(), n("}")) : t()
                    }

                    b && ("number" != typeof f || f >= 0) ? "string" == typeof f ? (n("if(", f, ">0){"), g(), n("}else if(", f, "<0){"), y(), n("}")) : g() : y()
                }

                function G(e, t, n, r, i) {
                    var o = D(), a = o.proc("body", i);
                    return M.optional(function () {
                        o.commandStr = t.commandStr, o.command = o.link(t.commandStr)
                    }), b && (o.instancing = a.def(o.shared.extensions, ".angle_instanced_arrays")), e(o, a, n, r), o.compile().body
                }

                function V(e, t, n, r) {
                    R(e, t), N(e, t, n, r.attributes, function () {
                        return !0
                    }), W(e, t, n, r.uniforms, function () {
                        return !0
                    }), U(e, t, t, n)
                }

                function K(e, t, n, r) {
                    function i() {
                        return !0
                    }

                    e.batchId = "a1", R(e, t), N(e, t, n, r.attributes, i), W(e, t, n, r.uniforms, i), U(e, t, t, n)
                }

                function $(e, t, n, r) {
                    R(e, t);
                    var i = n.contextDep, o = t.def(), a = t.def();
                    e.shared.props = a, e.batchId = o;
                    var s = e.scope(), c = e.scope();

                    function u(e) {
                        return e.contextDep && i || e.propDep
                    }

                    function f(e) {
                        return !u(e)
                    }

                    if (t(s.entry, "for(", o, "=0;", o, "<", "a1", ";++", o, "){", a, "=", "a0", "[", o, "];", c, "}", s.exit), n.needsContext && P(e, c, n.context), n.needsFramebuffer && I(e, c, n.framebuffer), B(e, c, n.state, u), n.profile && u(n.profile) && H(e, c, n, !1, !0), r) N(e, s, n, r.attributes, f), N(e, c, n, r.attributes, u), W(e, s, n, r.uniforms, f), W(e, c, n, r.uniforms, u), U(e, s, c, n); else {
                        var l = e.global.def("{}"), d = n.shader.progVar.append(e, c), p = c.def(d, ".id"),
                            h = c.def(l, "[", p, "]");
                        c(e.shared.gl, ".useProgram(", d, ".program);", "if(!", h, "){", h, "=", l, "[", p, "]=", e.link(function (t) {
                            return G(K, e, n, t, 2)
                        }), "(", d, ");}", h, ".call(this,a0[", o, "],", o, ");")
                    }
                }

                function Y(e, t, n) {
                    var r = t.static[n];
                    if (r && function (e) {
                        if ("object" == typeof e && !Fe(e)) {
                            for (var t = Object.keys(e), n = 0; n < t.length; ++n) if (L.isDynamic(e[t[n]])) return !0;
                            return !1
                        }
                    }(r)) {
                        var i = e.global, o = Object.keys(r), a = !1, s = !1, c = !1, u = e.global.def("{}");
                        o.forEach(function (t) {
                            var n = r[t];
                            if (L.isDynamic(n)) {
                                "function" == typeof n && (n = r[t] = L.unbox(n));
                                var o = Zi(n, null);
                                a = a || o.thisDep, c = c || o.propDep, s = s || o.contextDep
                            } else {
                                switch (i(u, ".", t, "="), typeof n) {
                                    case"number":
                                        i(n);
                                        break;
                                    case"string":
                                        i('"', n, '"');
                                        break;
                                    case"object":
                                        Array.isArray(n) && i("[", n.join(), "]");
                                        break;
                                    default:
                                        i(e.link(n))
                                }
                                i(";")
                            }
                        }), t.dynamic[n] = new L.DynamicVariable(ir, {
                            thisDep: a,
                            contextDep: s,
                            propDep: c,
                            ref: u,
                            append: function (e, t) {
                                o.forEach(function (n) {
                                    var i = r[n];
                                    if (L.isDynamic(i)) {
                                        var o = e.invoke(t, i);
                                        t(u, ".", n, "=", o, ";")
                                    }
                                })
                            }
                        }), delete t.static[n]
                    }
                }

                return {
                    next: w, current: x, procs: function () {
                        var e = D(), t = e.proc("poll"), n = e.proc("refresh"), r = e.block();
                        t(r), n(r);
                        var o, a = e.shared, s = a.gl, c = a.next, u = a.current;
                        r(u, ".dirty=false;"), I(e, t), I(e, n, null, !0), b && (o = e.link(b));
                        for (var f = 0; f < i.maxAttributes; ++f) {
                            var l = n.def(a.attributes, "[", f, "]"), d = e.cond(l, ".buffer");
                            d.then(s, ".enableVertexAttribArray(", f, ");", s, ".bindBuffer(", $r, ",", l, ".buffer.buffer);", s, ".vertexAttribPointer(", f, ",", l, ".size,", l, ".type,", l, ".normalized,", l, ".stride,", l, ".offset);").else(s, ".disableVertexAttribArray(", f, ");", s, ".vertexAttrib4f(", f, ",", l, ".x,", l, ".y,", l, ".z,", l, ".w);", l, ".buffer=null;"), n(d), b && n(o, ".vertexAttribDivisorANGLE(", f, ",", l, ".divisor);")
                        }
                        return Object.keys(C).forEach(function (i) {
                            var o = C[i], a = r.def(c, ".", i), f = e.block();
                            f("if(", a, "){", s, ".enable(", o, ")}else{", s, ".disable(", o, ")}", u, ".", i, "=", a, ";"), n(f), t("if(", a, "!==", u, ".", i, "){", f, "}")
                        }), Object.keys(S).forEach(function (i) {
                            var o, a, f = S[i], l = x[i], d = e.block();
                            if (d(s, ".", f, "("), Fe(l)) {
                                var p = l.length;
                                o = e.global.def(c, ".", i), a = e.global.def(u, ".", i), d(q(p, function (e) {
                                    return o + "[" + e + "]"
                                }), ");", q(p, function (e) {
                                    return a + "[" + e + "]=" + o + "[" + e + "];"
                                }).join("")), t("if(", q(p, function (e) {
                                    return o + "[" + e + "]!==" + a + "[" + e + "]"
                                }).join("||"), "){", d, "}")
                            } else o = r.def(c, ".", i), a = r.def(u, ".", i), d(o, ");", u, ".", i, "=", o, ";"), t("if(", o, "!==", a, "){", d, "}");
                            n(d)
                        }), e.compile()
                    }(), compile: function (e, t, r, i, o) {
                        var a = D();
                        a.stats = a.link(o), Object.keys(t.static).forEach(function (e) {
                            Y(a, t, e)
                        }), Kr.forEach(function (t) {
                            Y(a, e, t)
                        });
                        var s = z(e, t, r, i, a);
                        return function (e, t) {
                            var n = e.proc("draw", 1);
                            R(e, n), P(e, n, t.context), I(e, n, t.framebuffer), F(e, n, t), B(e, n, t.state), H(e, n, t, !1, !0);
                            var r = t.shader.progVar.append(e, n);
                            if (n(e.shared.gl, ".useProgram(", r, ".program);"), t.shader.program) V(e, n, t, t.shader.program); else {
                                var i = e.global.def("{}"), o = n.def(r, ".id"), a = n.def(i, "[", o, "]");
                                n(e.cond(a).then(a, ".call(this,a0);").else(a, "=", i, "[", o, "]=", e.link(function (n) {
                                    return G(V, e, t, n, 1)
                                }), "(", r, ");", a, ".call(this,a0);"))
                            }
                            Object.keys(t.state).length > 0 && n(e.shared.current, ".dirty=true;")
                        }(a, s), function (e, t) {
                            var r = e.proc("scope", 3);
                            e.batchId = "a2";
                            var i = e.shared, o = i.current;

                            function a(n) {
                                var o = t.shader[n];
                                o && r.set(i.shader, "." + n, o.append(e, r))
                            }

                            P(e, r, t.context), t.framebuffer && t.framebuffer.append(e, r), Vi(Object.keys(t.state)).forEach(function (n) {
                                var o = t.state[n].append(e, r);
                                Fe(o) ? o.forEach(function (t, i) {
                                    r.set(e.next[n], "[" + i + "]", t)
                                }) : r.set(i.next, "." + n, o)
                            }), H(e, r, t, !0, !0), [Fr, Rr, Lr, Hr, Br].forEach(function (n) {
                                var o = t.draw[n];
                                o && r.set(i.draw, "." + n, "" + o.append(e, r))
                            }), Object.keys(t.uniforms).forEach(function (o) {
                                r.set(i.uniforms, "[" + n.id(o) + "]", t.uniforms[o].append(e, r))
                            }), Object.keys(t.attributes).forEach(function (n) {
                                var i = t.attributes[n].append(e, r), o = e.scopeAttrib(n);
                                Object.keys(new v).forEach(function (e) {
                                    r.set(o, "." + e, i[e])
                                })
                            }), a(Pr), a(Ir), Object.keys(t.state).length > 0 && (r(o, ".dirty=true;"), r.exit(o, ".dirty=true;")), r("a1(", e.shared.context, ",a0,", e.batchId, ");")
                        }(a, s), function (e, t) {
                            var n = e.proc("batch", 2);
                            e.batchId = "0", R(e, n);
                            var r = !1, i = !0;
                            Object.keys(t.context).forEach(function (e) {
                                r = r || t.context[e].propDep
                            }), r || (P(e, n, t.context), i = !1);
                            var o = t.framebuffer, a = !1;

                            function s(e) {
                                return e.contextDep && r || e.propDep
                            }

                            o ? (o.propDep ? r = a = !0 : o.contextDep && r && (a = !0), a || I(e, n, o)) : I(e, n, null), t.state.viewport && t.state.viewport.propDep && (r = !0), F(e, n, t), B(e, n, t.state, function (e) {
                                return !s(e)
                            }), t.profile && s(t.profile) || H(e, n, t, !1, "a1"), t.contextDep = r, t.needsContext = i, t.needsFramebuffer = a;
                            var c = t.shader.progVar;
                            if (c.contextDep && r || c.propDep) $(e, n, t, null); else {
                                var u = c.append(e, n);
                                if (n(e.shared.gl, ".useProgram(", u, ".program);"), t.shader.program) $(e, n, t, t.shader.program); else {
                                    var f = e.global.def("{}"), l = n.def(u, ".id"), d = n.def(f, "[", l, "]");
                                    n(e.cond(d).then(d, ".call(this,a0,a1);").else(d, "=", f, "[", l, "]=", e.link(function (n) {
                                        return G($, e, t, n, 2)
                                    }), "(", u, ");", d, ".call(this,a0,a1);"))
                                }
                            }
                            Object.keys(t.state).length > 0 && n(e.shared.current, ".dirty=true;")
                        }(a, s), a.compile()
                    }
                }
            }

            var Ji = 34918, eo = 34919, to = 35007, no = function (e, t) {
                    if (!t.ext_disjoint_timer_query) return null;
                    var n = [];

                    function r(e) {
                        n.push(e)
                    }

                    var i = [];

                    function o() {
                        this.startQueryIndex = -1, this.endQueryIndex = -1, this.sum = 0, this.stats = null
                    }

                    var a = [];

                    function s(e) {
                        a.push(e)
                    }

                    var c = [];

                    function u(e, t, n) {
                        var r = a.pop() || new o;
                        r.startQueryIndex = e, r.endQueryIndex = t, r.sum = 0, r.stats = n, c.push(r)
                    }

                    var f = [], l = [];
                    return {
                        beginQuery: function (e) {
                            var r = n.pop() || t.ext_disjoint_timer_query.createQueryEXT();
                            t.ext_disjoint_timer_query.beginQueryEXT(to, r), i.push(r), u(i.length - 1, i.length, e)
                        }, endQuery: function () {
                            t.ext_disjoint_timer_query.endQueryEXT(to)
                        }, pushScopeStats: u, update: function () {
                            var e, n, o = i.length;
                            if (0 !== o) {
                                l.length = Math.max(l.length, o + 1), f.length = Math.max(f.length, o + 1), f[0] = 0, l[0] = 0;
                                var a = 0;
                                for (e = 0, n = 0; n < i.length; ++n) {
                                    var u = i[n];
                                    t.ext_disjoint_timer_query.getQueryObjectEXT(u, eo) ? (a += t.ext_disjoint_timer_query.getQueryObjectEXT(u, Ji), r(u)) : i[e++] = u, f[n + 1] = a, l[n + 1] = e
                                }
                                for (i.length = e, e = 0, n = 0; n < c.length; ++n) {
                                    var d = c[n], p = d.startQueryIndex, h = d.endQueryIndex;
                                    d.sum += f[h] - f[p];
                                    var m = l[p], v = l[h];
                                    v === m ? (d.stats.gpuTime += d.sum / 1e6, s(d)) : (d.startQueryIndex = m, d.endQueryIndex = v, c[e++] = d)
                                }
                                c.length = e
                            }
                        }, getNumPendingQueries: function () {
                            return i.length
                        }, clear: function () {
                            n.push.apply(n, i);
                            for (var e = 0; e < n.length; e++) t.ext_disjoint_timer_query.deleteQueryEXT(n[e]);
                            i.length = 0, n.length = 0
                        }, restore: function () {
                            i.length = 0, n.length = 0
                        }
                    }
                }, ro = 16384, io = 256, oo = 1024, ao = 34962, so = "webglcontextlost", co = "webglcontextrestored",
                uo = 1, fo = 2, lo = 3;

            function po(e, t) {
                for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
                return -1
            }

            return function (n) {
                var r = U(n);
                if (!r) return null;
                var i = r.gl, o = i.getContextAttributes(), a = i.isContextLost(), s = function (e, t) {
                    var n = {};

                    function r(t) {
                        M.type(t, "string", "extension name must be string");
                        var r, i = t.toLowerCase();
                        try {
                            r = n[i] = e.getExtension(i)
                        } catch (e) {
                        }
                        return !!r
                    }

                    for (var i = 0; i < t.extensions.length; ++i) {
                        var o = t.extensions[i];
                        if (!r(o)) return t.onDestroy(), t.onDone('"' + o + '" extension is not supported by the current WebGL context, try upgrading your system or a different browser'), null
                    }
                    return t.optionalExtensions.forEach(r), {
                        extensions: n, restore: function () {
                            Object.keys(n).forEach(function (e) {
                                if (n[e] && !r(e)) throw new Error("(regl): error restoring extension " + e)
                            })
                        }
                    }
                }(i, r);
                if (!s) return null;
                var c, u, f = (c = {"": 0}, u = [""], {
                        id: function (e) {
                            var t = c[e];
                            return t || (t = c[e] = u.length, u.push(e), t)
                        }, str: function (e) {
                            return u[e]
                        }
                    }), l = {
                        bufferCount: 0,
                        elementsCount: 0,
                        framebufferCount: 0,
                        shaderCount: 0,
                        textureCount: 0,
                        cubeCount: 0,
                        renderbufferCount: 0,
                        maxTextureUnits: 0
                    }, d = s.extensions, p = no(i, d), h = H(), m = i.drawingBufferWidth, v = i.drawingBufferHeight, g = {
                        tick: 0,
                        time: 0,
                        viewportWidth: m,
                        viewportHeight: v,
                        framebufferWidth: m,
                        framebufferHeight: v,
                        drawingBufferWidth: m,
                        drawingBufferHeight: v,
                        pixelRatio: r.pixelRatio
                    }, b = te(i, d), y = function (e, t, n, r) {
                        for (var i = n.maxAttributes, o = new Array(i), a = 0; a < i; ++a) o[a] = new Ln;
                        return {Record: Ln, scope: {}, state: o}
                    }(0, 0, b), x = function (t, n, r, i) {
                        var o = 0, a = {};

                        function s(e) {
                            this.id = o++, this.buffer = t.createBuffer(), this.type = e, this.usage = le, this.byteLength = 0, this.dimension = 1, this.dtype = pe, this.persistentData = null, r.profile && (this.stats = {size: 0})
                        }

                        s.prototype.bind = function () {
                            t.bindBuffer(this.type, this.buffer)
                        }, s.prototype.destroy = function () {
                            l(this)
                        };
                        var c = [];

                        function u(e, n, r) {
                            e.byteLength = n.byteLength, t.bufferData(e.type, n, r)
                        }

                        function f(t, n, r, i, o, a) {
                            var s, c;
                            if (t.usage = r, Array.isArray(n)) {
                                if (t.dtype = i || he, n.length > 0) if (Array.isArray(n[0])) {
                                    s = fe(n);
                                    for (var f = 1, l = 1; l < s.length; ++l) f *= s[l];
                                    t.dimension = f, c = ue(n, s, t.dtype), u(t, c, r), a ? t.persistentData = c : ee.freeType(c)
                                } else if ("number" == typeof n[0]) {
                                    t.dimension = o;
                                    var d = ee.allocType(t.dtype, n.length);
                                    ge(d, n), u(t, d, r), a ? t.persistentData = d : ee.freeType(d)
                                } else e(n[0]) ? (t.dimension = n[0].length, t.dtype = i || ve(n[0]) || he, c = ue(n, [n.length, n[0].length], t.dtype), u(t, c, r), a ? t.persistentData = c : ee.freeType(c)) : M.raise("invalid buffer data")
                            } else if (e(n)) t.dtype = i || ve(n), t.dimension = o, u(t, n, r), a && (t.persistentData = new Uint8Array(new Uint8Array(n.buffer))); else if (ne(n)) {
                                s = n.shape;
                                var p = n.stride, h = n.offset, m = 0, v = 0, g = 0, b = 0;
                                1 === s.length ? (m = s[0], v = 1, g = p[0], b = 0) : 2 === s.length ? (m = s[0], v = s[1], g = p[0], b = p[1]) : M.raise("invalid shape"), t.dtype = i || ve(n.data) || he, t.dimension = v;
                                var y = ee.allocType(t.dtype, m * v);
                                be(y, n.data, m, v, g, b, h), u(t, y, r), a ? t.persistentData = y : ee.freeType(y)
                            } else M.raise("invalid buffer data")
                        }

                        function l(e) {
                            n.bufferCount--;
                            for (var r = 0; r < i.state.length; ++r) {
                                var o = i.state[r];
                                o.buffer === e && (t.disableVertexAttribArray(r), o.buffer = null)
                            }
                            var s = e.buffer;
                            M(s, "buffer must not be deleted already"), t.deleteBuffer(s), e.buffer = null, delete a[e.id]
                        }

                        return r.profile && (n.getTotalBufferSize = function () {
                            var e = 0;
                            return Object.keys(a).forEach(function (t) {
                                e += a[t].stats.size
                            }), e
                        }), {
                            create: function (i, o, c, u) {
                                n.bufferCount++;
                                var d = new s(o);

                                function p(n) {
                                    var i = le, o = null, a = 0, s = 0, c = 1;
                                    return Array.isArray(n) || e(n) || ne(n) ? o = n : "number" == typeof n ? a = 0 | n : n && (M.type(n, "object", "buffer arguments must be an object, a number or an array"), "data" in n && (M(null === o || Array.isArray(o) || e(o) || ne(o), "invalid data for buffer"), o = n.data), "usage" in n && (M.parameter(n.usage, ce, "invalid buffer usage"), i = ce[n.usage]), "type" in n && (M.parameter(n.type, se, "invalid buffer type"), s = se[n.type]), "dimension" in n && (M.type(n.dimension, "number", "invalid dimension"), c = 0 | n.dimension), "length" in n && (M.nni(a, "buffer length must be a nonnegative integer"), a = 0 | n.length)), d.bind(), o ? f(d, o, i, s, c, u) : (a && t.bufferData(d.type, a, i), d.dtype = s || pe, d.usage = i, d.dimension = c, d.byteLength = a), r.profile && (d.stats.size = d.byteLength * me[d.dtype]), p
                                }

                                function h(e, n) {
                                    M(n + e.byteLength <= d.byteLength, "invalid buffer subdata call, buffer is too small.  Can't write data of size " + e.byteLength + " starting from offset " + n + " to a buffer of size " + d.byteLength), t.bufferSubData(d.type, n, e)
                                }

                                return a[d.id] = d, c || p(i), p._reglType = "buffer", p._buffer = d, p.subdata = function (t, n) {
                                    var r, i = 0 | (n || 0);
                                    if (d.bind(), e(t)) h(t, i); else if (Array.isArray(t)) {
                                        if (t.length > 0) if ("number" == typeof t[0]) {
                                            var o = ee.allocType(d.dtype, t.length);
                                            ge(o, t), h(o, i), ee.freeType(o)
                                        } else if (Array.isArray(t[0]) || e(t[0])) {
                                            r = fe(t);
                                            var a = ue(t, r, d.dtype);
                                            h(a, i), ee.freeType(a)
                                        } else M.raise("invalid buffer data")
                                    } else if (ne(t)) {
                                        r = t.shape;
                                        var s = t.stride, c = 0, u = 0, f = 0, l = 0;
                                        1 === r.length ? (c = r[0], u = 1, f = s[0], l = 0) : 2 === r.length ? (c = r[0], u = r[1], f = s[0], l = s[1]) : M.raise("invalid shape");
                                        var m = Array.isArray(t.data) ? d.dtype : ve(t.data), v = ee.allocType(m, c * u);
                                        be(v, t.data, c, u, f, l, t.offset), h(v, i), ee.freeType(v)
                                    } else M.raise("invalid data for buffer subdata");
                                    return p
                                }, r.profile && (p.stats = d.stats), p.destroy = function () {
                                    l(d)
                                }, p
                            }, createStream: function (e, t) {
                                var n = c.pop();
                                return n || (n = new s(e)), n.bind(), f(n, t, de, 0, 1, !1), n
                            }, destroyStream: function (e) {
                                c.push(e)
                            }, clear: function () {
                                re(a).forEach(l), c.forEach(l)
                            }, getBuffer: function (e) {
                                return e && e._buffer instanceof s ? e._buffer : null
                            }, restore: function () {
                                re(a).forEach(function (e) {
                                    e.buffer = t.createBuffer(), t.bindBuffer(e.type, e.buffer), t.bufferData(e.type, e.persistentData || e.byteLength, e.usage)
                                })
                            }, _initBuffer: f
                        }
                    }(i, l, r, y), w = function (t, n, r, i) {
                        var o = {}, a = 0, s = {uint8: Se, uint16: Ee};

                        function c(e) {
                            this.id = a++, o[this.id] = this, this.buffer = e, this.primType = _e, this.vertCount = 0, this.type = 0
                        }

                        n.oes_element_index_uint && (s.uint32 = ke), c.prototype.bind = function () {
                            this.buffer.bind()
                        };
                        var u = [];

                        function f(i, o, a, s, c, u, f) {
                            if (i.buffer.bind(), o) {
                                var l = f;
                                f || e(o) && (!ne(o) || e(o.data)) || (l = n.oes_element_index_uint ? ke : Ee), r._initBuffer(i.buffer, o, a, l, 3)
                            } else t.bufferData(Oe, u, a), i.buffer.dtype = d || Se, i.buffer.usage = a, i.buffer.dimension = 3, i.buffer.byteLength = u;
                            var d = f;
                            if (!f) {
                                switch (i.buffer.dtype) {
                                    case Se:
                                    case Ce:
                                        d = Se;
                                        break;
                                    case Ee:
                                    case je:
                                        d = Ee;
                                        break;
                                    case ke:
                                    case Ae:
                                        d = ke;
                                        break;
                                    default:
                                        M.raise("unsupported type for element array")
                                }
                                i.buffer.dtype = d
                            }
                            i.type = d, M(d !== ke || !!n.oes_element_index_uint, "32 bit element buffers not supported, enable oes_element_index_uint first");
                            var p = c;
                            p < 0 && (p = i.buffer.byteLength, d === Ee ? p >>= 1 : d === ke && (p >>= 2)), i.vertCount = p;
                            var h = s;
                            if (s < 0) {
                                h = _e;
                                var m = i.buffer.dimension;
                                1 === m && (h = xe), 2 === m && (h = we), 3 === m && (h = _e)
                            }
                            i.primType = h
                        }

                        function l(e) {
                            i.elementsCount--, M(null !== e.buffer, "must not double destroy elements"), delete o[e.id], e.buffer.destroy(), e.buffer = null
                        }

                        return {
                            create: function (t, n) {
                                var o = r.create(null, Oe, !0), a = new c(o._buffer);

                                function u(t) {
                                    if (t) if ("number" == typeof t) o(t), a.primType = _e, a.vertCount = 0 | t, a.type = Se; else {
                                        var n = null, r = De, i = -1, c = -1, l = 0, d = 0;
                                        Array.isArray(t) || e(t) || ne(t) ? n = t : (M.type(t, "object", "invalid arguments for elements"), "data" in t && (n = t.data, M(Array.isArray(n) || e(n) || ne(n), "invalid data for element buffer")), "usage" in t && (M.parameter(t.usage, ce, "invalid element buffer usage"), r = ce[t.usage]), "primitive" in t && (M.parameter(t.primitive, ye, "invalid element buffer primitive"), i = ye[t.primitive]), "count" in t && (M("number" == typeof t.count && t.count >= 0, "invalid vertex count for elements"), c = 0 | t.count), "type" in t && (M.parameter(t.type, s, "invalid buffer type"), d = s[t.type]), "length" in t ? l = 0 | t.length : (l = c, d === Ee || d === je ? l *= 2 : d !== ke && d !== Ae || (l *= 4))), f(a, n, r, i, c, l, d)
                                    } else o(), a.primType = _e, a.vertCount = 0, a.type = Se;
                                    return u
                                }

                                return i.elementsCount++, u(t), u._reglType = "elements", u._elements = a, u.subdata = function (e, t) {
                                    return o.subdata(e, t), u
                                }, u.destroy = function () {
                                    l(a)
                                }, u
                            }, createStream: function (e) {
                                var t = u.pop();
                                return t || (t = new c(r.create(null, Oe, !0, !1)._buffer)), f(t, e, Te, -1, -1, 0, 0), t
                            }, destroyStream: function (e) {
                                u.push(e)
                            }, getElements: function (e) {
                                return "function" == typeof e && e._elements instanceof c ? e._elements : null
                            }, clear: function () {
                                re(o).forEach(l)
                            }
                        }
                    }(i, d, x, l), _ = function (e, t, n, r) {
                        var i = {}, o = {};

                        function a(e, t, n, r) {
                            this.name = e, this.id = t, this.location = n, this.info = r
                        }

                        function s(e, t) {
                            for (var n = 0; n < e.length; ++n) if (e[n].id === t.id) return void (e[n].location = t.location);
                            e.push(t)
                        }

                        function c(n, r, a) {
                            var s = n === Rn ? i : o, c = s[r];
                            if (!c) {
                                var u = t.str(r);
                                c = e.createShader(n), e.shaderSource(c, u), e.compileShader(c), M.shaderError(e, c, u, n, a), s[r] = c
                            }
                            return c
                        }

                        var u = {}, f = [], l = 0;

                        function d(e, t) {
                            this.id = l++, this.fragId = e, this.vertId = t, this.program = null, this.uniforms = [], this.attributes = [], r.profile && (this.stats = {
                                uniformsCount: 0,
                                attributesCount: 0
                            })
                        }

                        function p(n, i) {
                            var o, u, f = c(Rn, n.fragId), l = c(Hn, n.vertId), d = n.program = e.createProgram();
                            e.attachShader(d, f), e.attachShader(d, l), e.linkProgram(d), M.linkError(e, d, t.str(n.fragId), t.str(n.vertId), i);
                            var p = e.getProgramParameter(d, Nn);
                            r.profile && (n.stats.uniformsCount = p);
                            var h = n.uniforms;
                            for (o = 0; o < p; ++o) if (u = e.getActiveUniform(d, o)) if (u.size > 1) for (var m = 0; m < u.size; ++m) {
                                var v = u.name.replace("[0]", "[" + m + "]");
                                s(h, new a(v, t.id(v), e.getUniformLocation(d, v), u))
                            } else s(h, new a(u.name, t.id(u.name), e.getUniformLocation(d, u.name), u));
                            var g = e.getProgramParameter(d, Wn);
                            r.profile && (n.stats.attributesCount = g);
                            var b = n.attributes;
                            for (o = 0; o < g; ++o) (u = e.getActiveAttrib(d, o)) && s(b, new a(u.name, t.id(u.name), e.getAttribLocation(d, u.name), u))
                        }

                        return r.profile && (n.getMaxUniformsCount = function () {
                            var e = 0;
                            return f.forEach(function (t) {
                                t.stats.uniformsCount > e && (e = t.stats.uniformsCount)
                            }), e
                        }, n.getMaxAttributesCount = function () {
                            var e = 0;
                            return f.forEach(function (t) {
                                t.stats.attributesCount > e && (e = t.stats.attributesCount)
                            }), e
                        }), {
                            clear: function () {
                                var t = e.deleteShader.bind(e);
                                re(i).forEach(t), i = {}, re(o).forEach(t), o = {}, f.forEach(function (t) {
                                    e.deleteProgram(t.program)
                                }), f.length = 0, u = {}, n.shaderCount = 0
                            }, program: function (e, t, r) {
                                M.command(e >= 0, "missing vertex shader", r), M.command(t >= 0, "missing fragment shader", r);
                                var i = u[t];
                                i || (i = u[t] = {});
                                var o = i[e];
                                return o || (o = new d(t, e), n.shaderCount++, p(o, r), i[e] = o, f.push(o)), o
                            }, restore: function () {
                                i = {}, o = {};
                                for (var e = 0; e < f.length; ++e) p(f[e])
                            }, shader: c, frag: -1, vert: -1
                        }
                    }(i, f, l, r), C = pn(i, d, b, function () {
                        E.procs.poll()
                    }, g, l, r), S = bn(i, d, b, l, r), j = function (e, n, r, i, o, a) {
                        var s = {cur: null, next: null, dirty: !1, setFBO: null}, c = ["rgba"],
                            u = ["rgba4", "rgb565", "rgb5 a1"];
                        n.ext_srgb && u.push("srgba"), n.ext_color_buffer_half_float && u.push("rgba16f", "rgb16f"), n.webgl_color_buffer_float && u.push("rgba32f");
                        var f = ["uint8"];

                        function l(e, t, n) {
                            this.target = e, this.texture = t, this.renderbuffer = n;
                            var r = 0, i = 0;
                            t ? (r = t.width, i = t.height) : n && (r = n.width, i = n.height), this.width = r, this.height = i
                        }

                        function d(e) {
                            e && (e.texture && e.texture._texture.decRef(), e.renderbuffer && e.renderbuffer._renderbuffer.decRef())
                        }

                        function p(e, t, n) {
                            if (e) if (e.texture) {
                                var r = e.texture._texture, i = Math.max(1, r.width), o = Math.max(1, r.height);
                                M(i === t && o === n, "inconsistent width/height for supplied texture"), r.refCount += 1
                            } else {
                                var a = e.renderbuffer._renderbuffer;
                                M(a.width === t && a.height === n, "inconsistent width/height for renderbuffer"), a.refCount += 1
                            }
                        }

                        function h(t, n) {
                            n && (n.texture ? e.framebufferTexture2D(yn, t, n.target, n.texture._texture.texture, 0) : e.framebufferRenderbuffer(yn, t, xn, n.renderbuffer._renderbuffer.renderbuffer))
                        }

                        function m(e) {
                            var t = wn, n = null, r = null, i = e;
                            "object" == typeof e && (i = e.data, "target" in e && (t = 0 | e.target)), M.type(i, "function", "invalid attachment data");
                            var o = i._reglType;
                            return "texture2d" === o ? (n = i, M(t === wn)) : "textureCube" === o ? (n = i, M(t >= _n && t < _n + 6, "invalid cube map target")) : "renderbuffer" === o ? (r = i, t = xn) : M.raise("invalid regl object for attachment"), new l(t, n, r)
                        }

                        function v(e, t, n, r, a) {
                            if (n) {
                                var s = i.create2D({width: e, height: t, format: r, type: a});
                                return s._texture.refCount = 0, new l(wn, s, null)
                            }
                            var c = o.create({width: e, height: t, format: r});
                            return c._renderbuffer.refCount = 0, new l(xn, null, c)
                        }

                        function g(e) {
                            return e && (e.texture || e.renderbuffer)
                        }

                        function b(e, t, n) {
                            e && (e.texture ? e.texture.resize(t, n) : e.renderbuffer && e.renderbuffer.resize(t, n), e.width = t, e.height = n)
                        }

                        n.oes_texture_half_float && f.push("half float", "float16"), n.oes_texture_float && f.push("float", "float32");
                        var y = 0, x = {};

                        function w() {
                            this.id = y++, x[this.id] = this, this.framebuffer = e.createFramebuffer(), this.width = 0, this.height = 0, this.colorAttachments = [], this.depthAttachment = null, this.stencilAttachment = null, this.depthStencilAttachment = null
                        }

                        function _(e) {
                            e.colorAttachments.forEach(d), d(e.depthAttachment), d(e.stencilAttachment), d(e.depthStencilAttachment)
                        }

                        function C(t) {
                            var n = t.framebuffer;
                            M(n, "must not double destroy framebuffer"), e.deleteFramebuffer(n), t.framebuffer = null, a.framebufferCount--, delete x[t.id]
                        }

                        function S(t) {
                            var n;
                            e.bindFramebuffer(yn, t.framebuffer);
                            var i = t.colorAttachments;
                            for (n = 0; n < i.length; ++n) h(Cn + n, i[n]);
                            for (n = i.length; n < r.maxColorAttachments; ++n) e.framebufferTexture2D(yn, Cn + n, wn, null, 0);
                            e.framebufferTexture2D(yn, En, wn, null, 0), e.framebufferTexture2D(yn, Sn, wn, null, 0), e.framebufferTexture2D(yn, jn, wn, null, 0), h(Sn, t.depthAttachment), h(jn, t.stencilAttachment), h(En, t.depthStencilAttachment);
                            var o = e.checkFramebufferStatus(yn);
                            e.isContextLost() || o === An || M.raise("framebuffer configuration not supported, status = " + Fn[o]), e.bindFramebuffer(yn, s.next ? s.next.framebuffer : null), s.cur = s.next, e.getError()
                        }

                        function j(e, i) {
                            var o = new w;

                            function l(e, t) {
                                var i;
                                M(s.next !== o, "can not update framebuffer which is currently in use");
                                var a = 0, d = 0, h = !0, b = !0, y = null, x = !0, w = "rgba", C = "uint8", j = 1,
                                    E = null, A = null, k = null, O = !1;
                                if ("number" == typeof e) a = 0 | e, d = 0 | t || a; else if (e) {
                                    M.type(e, "object", "invalid arguments for framebuffer");
                                    var T = e;
                                    if ("shape" in T) {
                                        var D = T.shape;
                                        M(Array.isArray(D) && D.length >= 2, "invalid shape for framebuffer"), a = D[0], d = D[1]
                                    } else "radius" in T && (a = d = T.radius), "width" in T && (a = T.width), "height" in T && (d = T.height);
                                    ("color" in T || "colors" in T) && (y = T.color || T.colors, Array.isArray(y) && M(1 === y.length || n.webgl_draw_buffers, "multiple render targets not supported")), y || ("colorCount" in T && (j = 0 | T.colorCount, M(j > 0, "invalid color buffer count")), "colorTexture" in T && (x = !!T.colorTexture, w = "rgba4"), "colorType" in T && (C = T.colorType, x ? (M(n.oes_texture_float || !("float" === C || "float32" === C), "you must enable OES_texture_float in order to use floating point framebuffer objects"), M(n.oes_texture_half_float || !("half float" === C || "float16" === C), "you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")) : "half float" === C || "float16" === C ? (M(n.ext_color_buffer_half_float, "you must enable EXT_color_buffer_half_float to use 16-bit render buffers"), w = "rgba16f") : "float" !== C && "float32" !== C || (M(n.webgl_color_buffer_float, "you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"), w = "rgba32f"), M.oneOf(C, f, "invalid color type")), "colorFormat" in T && (w = T.colorFormat, c.indexOf(w) >= 0 ? x = !0 : u.indexOf(w) >= 0 ? x = !1 : x ? M.oneOf(T.colorFormat, c, "invalid color format for texture") : M.oneOf(T.colorFormat, u, "invalid color format for renderbuffer"))), ("depthTexture" in T || "depthStencilTexture" in T) && (O = !(!T.depthTexture && !T.depthStencilTexture), M(!O || n.webgl_depth_texture, "webgl_depth_texture extension not supported")), "depth" in T && ("boolean" == typeof T.depth ? h = T.depth : (E = T.depth, b = !1)), "stencil" in T && ("boolean" == typeof T.stencil ? b = T.stencil : (A = T.stencil, h = !1)), "depthStencil" in T && ("boolean" == typeof T.depthStencil ? h = b = T.depthStencil : (k = T.depthStencil, h = !1, b = !1))
                                } else a = d = 1;
                                var z = null, P = null, I = null, F = null;
                                if (Array.isArray(y)) z = y.map(m); else if (y) z = [m(y)]; else for (z = new Array(j), i = 0; i < j; ++i) z[i] = v(a, d, x, w, C);
                                M(n.webgl_draw_buffers || z.length <= 1, "you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."), M(z.length <= r.maxColorAttachments, "too many color attachments, not supported"), a = a || z[0].width, d = d || z[0].height, E ? P = m(E) : h && !b && (P = v(a, d, O, "depth", "uint32")), A ? I = m(A) : b && !h && (I = v(a, d, !1, "stencil", "uint8")), k ? F = m(k) : !E && !A && b && h && (F = v(a, d, O, "depth stencil", "depth stencil")), M(!!E + !!A + !!k <= 1, "invalid framebuffer configuration, can specify exactly one depth/stencil attachment");
                                var B = null;
                                for (i = 0; i < z.length; ++i) if (p(z[i], a, d), M(!z[i] || z[i].texture && On.indexOf(z[i].texture._texture.format) >= 0 || z[i].renderbuffer && In.indexOf(z[i].renderbuffer._renderbuffer.format) >= 0, "framebuffer color attachment " + i + " is invalid"), z[i] && z[i].texture) {
                                    var L = Tn[z[i].texture._texture.format] * Dn[z[i].texture._texture.type];
                                    null === B ? B = L : M(B === L, "all color attachments much have the same number of bits per pixel.")
                                }
                                return p(P, a, d), M(!P || P.texture && P.texture._texture.format === kn || P.renderbuffer && P.renderbuffer._renderbuffer.format === Mn, "invalid depth attachment for framebuffer object"), p(I, a, d), M(!I || I.renderbuffer && I.renderbuffer._renderbuffer.format === zn, "invalid stencil attachment for framebuffer object"), p(F, a, d), M(!F || F.texture && F.texture._texture.format === Pn || F.renderbuffer && F.renderbuffer._renderbuffer.format === Pn, "invalid depth-stencil attachment for framebuffer object"), _(o), o.width = a, o.height = d, o.colorAttachments = z, o.depthAttachment = P, o.stencilAttachment = I, o.depthStencilAttachment = F, l.color = z.map(g), l.depth = g(P), l.stencil = g(I), l.depthStencil = g(F), l.width = o.width, l.height = o.height, S(o), l
                            }

                            return a.framebufferCount++, l(e, i), t(l, {
                                resize: function (e, t) {
                                    M(s.next !== o, "can not resize a framebuffer which is currently in use");
                                    var n = Math.max(0 | e, 1), r = Math.max(0 | t || n, 1);
                                    if (n === o.width && r === o.height) return l;
                                    for (var i = o.colorAttachments, a = 0; a < i.length; ++a) b(i[a], n, r);
                                    return b(o.depthAttachment, n, r), b(o.stencilAttachment, n, r), b(o.depthStencilAttachment, n, r), o.width = l.width = n, o.height = l.height = r, S(o), l
                                }, _reglType: "framebuffer", _framebuffer: o, destroy: function () {
                                    C(o), _(o)
                                }, use: function (e) {
                                    s.setFBO({framebuffer: l}, e)
                                }
                            })
                        }

                        return t(s, {
                            getFramebuffer: function (e) {
                                if ("function" == typeof e && "framebuffer" === e._reglType) {
                                    var t = e._framebuffer;
                                    if (t instanceof w) return t
                                }
                                return null
                            }, create: j, createCube: function (e) {
                                var o = Array(6);

                                function a(e) {
                                    var r;
                                    M(o.indexOf(s.next) < 0, "can not update framebuffer which is currently in use");
                                    var u, l = {color: null}, d = 0, p = null, h = "rgba", m = "uint8", v = 1;
                                    if ("number" == typeof e) d = 0 | e; else if (e) {
                                        M.type(e, "object", "invalid arguments for framebuffer");
                                        var g = e;
                                        if ("shape" in g) {
                                            var b = g.shape;
                                            M(Array.isArray(b) && b.length >= 2, "invalid shape for framebuffer"), M(b[0] === b[1], "cube framebuffer must be square"), d = b[0]
                                        } else "radius" in g && (d = 0 | g.radius), "width" in g ? (d = 0 | g.width, "height" in g && M(g.height === d, "must be square")) : "height" in g && (d = 0 | g.height);
                                        ("color" in g || "colors" in g) && (p = g.color || g.colors, Array.isArray(p) && M(1 === p.length || n.webgl_draw_buffers, "multiple render targets not supported")), p || ("colorCount" in g && (v = 0 | g.colorCount, M(v > 0, "invalid color buffer count")), "colorType" in g && (M.oneOf(g.colorType, f, "invalid color type"), m = g.colorType), "colorFormat" in g && (h = g.colorFormat, M.oneOf(g.colorFormat, c, "invalid color format for texture"))), "depth" in g && (l.depth = g.depth), "stencil" in g && (l.stencil = g.stencil), "depthStencil" in g && (l.depthStencil = g.depthStencil)
                                    } else d = 1;
                                    if (p) if (Array.isArray(p)) for (u = [], r = 0; r < p.length; ++r) u[r] = p[r]; else u = [p]; else {
                                        u = Array(v);
                                        var y = {radius: d, format: h, type: m};
                                        for (r = 0; r < v; ++r) u[r] = i.createCube(y)
                                    }
                                    for (l.color = Array(u.length), r = 0; r < u.length; ++r) {
                                        var x = u[r];
                                        M("function" == typeof x && "textureCube" === x._reglType, "invalid cube map"), d = d || x.width, M(x.width === d && x.height === d, "invalid cube map shape"), l.color[r] = {
                                            target: _n,
                                            data: u[r]
                                        }
                                    }
                                    for (r = 0; r < 6; ++r) {
                                        for (var w = 0; w < u.length; ++w) l.color[w].target = _n + r;
                                        r > 0 && (l.depth = o[0].depth, l.stencil = o[0].stencil, l.depthStencil = o[0].depthStencil), o[r] ? o[r](l) : o[r] = j(l)
                                    }
                                    return t(a, {width: d, height: d, color: u})
                                }

                                return a(e), t(a, {
                                    faces: o, resize: function (e) {
                                        var t, n = 0 | e;
                                        if (M(n > 0 && n <= r.maxCubeMapSize, "invalid radius for cube fbo"), n === a.width) return a;
                                        var i = a.color;
                                        for (t = 0; t < i.length; ++t) i[t].resize(n);
                                        for (t = 0; t < 6; ++t) o[t].resize(n);
                                        return a.width = a.height = n, a
                                    }, _reglType: "framebufferCube", destroy: function () {
                                        o.forEach(function (e) {
                                            e.destroy()
                                        })
                                    }
                                })
                            }, clear: function () {
                                re(x).forEach(C)
                            }, restore: function () {
                                s.cur = null, s.next = null, s.dirty = !0, re(x).forEach(function (t) {
                                    t.framebuffer = e.createFramebuffer(), S(t)
                                })
                            }
                        })
                    }(i, d, b, C, S, l), E = Qi(i, f, d, b, x, w, 0, j, {}, y, _, {
                        elements: null,
                        primitive: 4,
                        count: -1,
                        offset: 0,
                        instances: -1
                    }, g, p, r), A = Kn(i, j, E.procs.poll, g, o, d, b), k = E.next, O = i.canvas, T = [], D = [], z = [],
                    P = [r.onDestroy], I = null;

                function F() {
                    if (0 === T.length) return p && p.update(), void (I = null);
                    I = R.next(F), Z();
                    for (var e = T.length - 1; e >= 0; --e) {
                        var t = T[e];
                        t && t(g, null, 0)
                    }
                    i.flush(), p && p.update()
                }

                function B() {
                    !I && T.length > 0 && (I = R.next(F))
                }

                function N() {
                    I && (R.cancel(F), I = null)
                }

                function W(e) {
                    e.preventDefault(), a = !0, N(), D.forEach(function (e) {
                        e()
                    })
                }

                function q(e) {
                    i.getError(), a = !1, s.restore(), _.restore(), x.restore(), C.restore(), S.restore(), j.restore(), p && p.restore(), E.procs.refresh(), B(), z.forEach(function (e) {
                        e()
                    })
                }

                function G(e) {
                    function n(e) {
                        var t = {}, n = {};
                        return Object.keys(e).forEach(function (r) {
                            var i = e[r];
                            L.isDynamic(i) ? n[r] = L.unbox(i, r) : t[r] = i
                        }), {dynamic: n, static: t}
                    }

                    M(!!e, "invalid args to regl({...})"), M.type(e, "object", "invalid args to regl({...})");
                    var r = n(e.context || {}), i = n(e.uniforms || {}), o = n(e.attributes || {}), s = n(function (e) {
                            var n = t({}, e);

                            function r(e) {
                                if (e in n) {
                                    var t = n[e];
                                    delete n[e], Object.keys(t).forEach(function (r) {
                                        n[e + "." + r] = t[r]
                                    })
                                }
                            }

                            return delete n.uniforms, delete n.attributes, delete n.context, "stencil" in n && n.stencil.op && (n.stencil.opBack = n.stencil.opFront = n.stencil.op, delete n.stencil.op), r("blend"), r("depth"), r("cull"), r("stencil"), r("polygonOffset"), r("scissor"), r("sample"), n
                        }(e)), c = {gpuTime: 0, cpuTime: 0, count: 0}, u = E.compile(s, o, i, r, c), f = u.draw,
                        l = u.batch, d = u.scope, p = [];
                    return t(function (e, t) {
                        var n;
                        if (a && M.raise("context lost"), "function" == typeof e) return d.call(this, null, e, 0);
                        if ("function" == typeof t) {
                            if ("number" == typeof e) {
                                for (n = 0; n < e; ++n) d.call(this, null, t, n);
                                return
                            }
                            if (Array.isArray(e)) {
                                for (n = 0; n < e.length; ++n) d.call(this, e[n], t, n);
                                return
                            }
                            return d.call(this, e, t, 0)
                        }
                        if ("number" == typeof e) {
                            if (e > 0) return l.call(this, function (e) {
                                for (; p.length < e;) p.push(null);
                                return p
                            }(0 | e), 0 | e)
                        } else {
                            if (!Array.isArray(e)) return f.call(this, e);
                            if (e.length) return l.call(this, e, e.length)
                        }
                    }, {stats: c})
                }

                O && (O.addEventListener(so, W, !1), O.addEventListener(co, q, !1));
                var V = j.setFBO = G({framebuffer: L.define.call(null, uo, "framebuffer")});

                function K(e, t) {
                    var n = 0;
                    E.procs.poll();
                    var r = t.color;
                    r && (i.clearColor(+r[0] || 0, +r[1] || 0, +r[2] || 0, +r[3] || 0), n |= ro), "depth" in t && (i.clearDepth(+t.depth), n |= io), "stencil" in t && (i.clearStencil(0 | t.stencil), n |= oo), M(!!n, "called regl.clear with no buffer specified"), i.clear(n)
                }

                function $(e) {
                    return M.type(e, "function", "regl.frame() callback must be a function"), T.push(e), B(), {
                        cancel: function () {
                            var t = po(T, e);
                            M(t >= 0, "cannot cancel a frame twice"), T[t] = function e() {
                                var t = po(T, e);
                                T[t] = T[T.length - 1], T.length -= 1, T.length <= 0 && N()
                            }
                        }
                    }
                }

                function Y() {
                    var e = k.viewport, t = k.scissor_box;
                    e[0] = e[1] = t[0] = t[1] = 0, g.viewportWidth = g.framebufferWidth = g.drawingBufferWidth = e[2] = t[2] = i.drawingBufferWidth, g.viewportHeight = g.framebufferHeight = g.drawingBufferHeight = e[3] = t[3] = i.drawingBufferHeight
                }

                function Z() {
                    g.tick += 1, g.time = Q(), Y(), E.procs.poll()
                }

                function X() {
                    Y(), E.procs.refresh(), p && p.update()
                }

                function Q() {
                    return (H() - h) / 1e3
                }

                X();
                var J = t(G, {
                    clear: function (e) {
                        if (M("object" == typeof e && e, "regl.clear() takes an object as input"), "framebuffer" in e) if (e.framebuffer && "framebufferCube" === e.framebuffer_reglType) for (var n = 0; n < 6; ++n) V(t({framebuffer: e.framebuffer.faces[n]}, e), K); else V(e, K); else K(null, e)
                    },
                    prop: L.define.bind(null, uo),
                    context: L.define.bind(null, fo),
                    this: L.define.bind(null, lo),
                    draw: G({}),
                    buffer: function (e) {
                        return x.create(e, ao, !1, !1)
                    },
                    elements: function (e) {
                        return w.create(e, !1)
                    },
                    texture: C.create2D,
                    cube: C.createCube,
                    renderbuffer: S.create,
                    framebuffer: j.create,
                    framebufferCube: j.createCube,
                    attributes: o,
                    frame: $,
                    on: function (e, t) {
                        var n;
                        switch (M.type(t, "function", "listener callback must be a function"), e) {
                            case"frame":
                                return $(t);
                            case"lost":
                                n = D;
                                break;
                            case"restore":
                                n = z;
                                break;
                            case"destroy":
                                n = P;
                                break;
                            default:
                                M.raise("invalid event, must be one of frame,lost,restore,destroy")
                        }
                        return n.push(t), {
                            cancel: function () {
                                for (var e = 0; e < n.length; ++e) if (n[e] === t) return n[e] = n[n.length - 1], void n.pop()
                            }
                        }
                    },
                    limits: b,
                    hasExtension: function (e) {
                        return b.extensions.indexOf(e.toLowerCase()) >= 0
                    },
                    read: A,
                    destroy: function () {
                        T.length = 0, N(), O && (O.removeEventListener(so, W), O.removeEventListener(co, q)), _.clear(), j.clear(), S.clear(), C.clear(), w.clear(), x.clear(), p && p.clear(), P.forEach(function (e) {
                            e()
                        })
                    },
                    _gl: i,
                    _refresh: X,
                    poll: function () {
                        Z(), p && p.update()
                    },
                    now: Q,
                    stats: l
                });
                return r.onDone(null, J), J
            }
        }()
    });

    function ja(e, t) {
        if (null == e) return {};
        var n, r, i = function (e, t) {
            if (null == e) return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    var Ea = r.createContext(void 0);
    const Aa = ["onClick", "onMouseUp", "onMouseMove", "onMouseDown", "onDoubleClick"];

    class ka extends n.Component {
        constructor(e) {
            super(e), o(this, "context", void 0), "production" !== sa() && (this.shouldComponentUpdate = (e => (e.reglCommand !== this.props.reglCommand && console.error("Changing the regl command prop on a <Command /> is not supported."), !0)))
        }

        componentDidMount() {
            this.context.onMount(this, this.props.reglCommand), this._updateContext()
        }

        componentDidUpdate() {
            this._updateContext()
        }

        componentWillUnmount() {
            this.context.onUnmount(this)
        }

        _updateContext() {
            const e = this.context;
            if (!e) return;
            const t = this.props.drawProps;
            if (null == t) return;
            e.registerDrawCall({
                instance: this,
                command: this.props.reglCommand,
                drawProps: t,
                layerIndex: this.props.layerIndex
            });
            const n = this.props.hitmapProps;
            n && e.registerHitmapCall({
                instance: this,
                command: this.props.reglCommand,
                drawProps: n,
                layerIndex: this.props.layerIndex
            })
        }

        handleMouseEvent(e, t, n, r) {
            const i = this.props[r], {hitmapProps: o = [], getObjectFromHitmapId: a} = this.props;
            if (!i || 0 === o.length || !a) return;
            const s = a(e, o);
            s && i(t, {ray: n, objectId: e, object: s})
        }

        render() {
            return n.createElement(Ea.Consumer, null, e => (e && (this.context = e), null))
        }
    }

    function Oa(e, t) {
        return t.find(t => {
            if (t.color) {
                if (ro(t.color.map(e => 255 * e)) === e) return !0
            }
            return !1
        })
    }

    function Ta(e, t, r = {}) {
        let o = !1;
        const s = s => {
            let {children: c, getObjectFromHitmapId: u, getHitmapProps: f, getHitmapId: l} = s,
                d = ja(s, ["children", "getObjectFromHitmapId", "getHitmapProps", "getHitmapId"]),
                p = u || r.getObjectFromHitmapId;
            const h = f || r.getHitmapProps;
            let m;
            return (f && !u || !f && u) && console.error("Possible wrong hitmap id mapping in the instanced rendering. Keep or remove both `getHitmapProps` and `getObjectFromHitmapId` props."), (l || Aa.some(e => e in d)) && (l ? (o || (console.warn(`"getHitmapId" is deprecated. Check "${e}" to use default hitmap mapping or set the "getHitmapProps" and "getObjectFromHitmapId" props explicitly. `), o = !0), m = function (e, t) {
                if (t && 0 !== t.length) return t.reduce((t, n) => {
                    const r = e(n);
                    return null != r && t.push(a({}, n, {color: no(r || 0)})), t
                }, [])
            }(l, c), p = Oa) : h && p ? h && p && (m = h(c)) : (m = null, p = null, console.error(`Default hitmap for ${e} is not supported yet.`))), n.createElement(ka, i({}, d, {
                reglCommand: t,
                drawProps: c,
                hitmapProps: m,
                getObjectFromHitmapId: p
            }))
        };
        return s.displayName = e, s.reglCommand = t, s
    }

    function Da(e, t) {
        const n = t(e);
        return "function" == typeof n ? n : e(n)
    }

    o(ka, "displayName", "Command");

    class Ma {
        constructor({dimension: e, canvasBackgroundColor: t, cameraState: n, onCameraStateChange: r}) {
            o(this, "_commands", new Set), o(this, "_compiled", new Map), o(this, "_drawCalls", new Map), o(this, "_hitmapCalls", new Map), o(this, "_paintCalls", new Map), o(this, "reglCommandObjects", []), o(this, "counters", {}), o(this, "dimension", void 0), o(this, "onDirty", void 0), o(this, "cameraStore", void 0), o(this, "canvasBackgroundColor", [0, 0, 0, 1]), o(this, "initializedData", void 0), o(this, "raycast", (e, t) => {
                if (!this.initializedData) return;
                const {width: n, height: r} = this.dimension;
                return la(this.initializedData.camera, {clientX: e, clientY: t, width: n, height: r})
            }), o(this, "_debouncedPaint", Ca(this.paint, 10)), o(this, "callComponentHandlers", (e, t, n, r) => {
                this._hitmapCalls.forEach((i, o) => {
                    o.handleMouseEvent && o.handleMouseEvent(e, n, t, r)
                })
            }), o(this, "_drawInput", e => {
                const t = e ? this._hitmapCalls : this._drawCalls;
                Array.from(t.values()).sort((e, t) => (e.layerIndex || 0) - (t.layerIndex || 0)).forEach(t => {
                    const {command: n, drawProps: r, instance: i} = t;
                    if (!r) return console.debug(`${e ? "hitmap" : ""} draw skipped, props was falsy`, t);
                    const o = this._compiled.get(n);
                    if (!o) return console.warn("could not find draw command for", i.constructor.displayName);
                    r.context && r.props ? o(r.props, r.context) : o(r)
                })
            }), o(this, "_clearCanvas", e => {
                e.poll(), e.clear({color: this.canvasBackgroundColor, depth: 1})
            }), this.onDirty = this._debouncedPaint, this.dimension = e, this.canvasBackgroundColor = t, this.cameraStore = new Co(e => {
                r ? r(e) : this.paint()
            }, n)
        }

        initialize(e) {
            if (this.initializedData) throw new Error("can not initialize regl twice");
            const t = this._instrumentCommands(Sa({
                canvas: e,
                extensions: ["angle_instanced_arrays", "oes_texture_float", "oes_element_index_uint"],
                profile: "production" !== sa()
            }));
            this._commands.forEach(e => {
                const n = Da(t, e);
                this._compiled.set(e, n)
            });
            const n = new (Da(t, Ho)),
                r = t.framebuffer({width: Math.round(this.dimension.width), height: Math.round(this.dimension.height)});
            this.initializedData = {_fbo: r, camera: n, regl: t}
        }

        destroy() {
            this.initializedData && this.initializedData.regl.destroy()
        }

        onMount(e, t) {
            const {initializedData: n} = this;
            n && !this._commands.has(t) && (this._commands.add(t), this._compiled.set(t, Da(n.regl, t)))
        }

        onUnmount(e) {
            this._hitmapCalls.delete(e), this._drawCalls.delete(e)
        }

        unregisterPaintCallback(e) {
            this._paintCalls.delete(e)
        }

        registerDrawCall(e) {
            this._drawCalls.set(e.instance, e)
        }

        registerPaintCallback(e) {
            this._paintCalls.set(e, e)
        }

        registerHitmapCall(e) {
            this._hitmapCalls.set(e.instance, e)
        }

        setDimension(e) {
            this.dimension = e
        }

        paint() {
            const e = Date.now();
            if (this.reglCommandObjects.forEach(e => e.stats.count = 0), !this.initializedData) return;
            const {regl: t, camera: n} = this.initializedData;
            this._clearCanvas(t), n.draw(this.cameraStore.state, () => {
                const e = Date.now();
                this._drawInput(), this.counters.paint = Date.now() - e
            }), this._paintCalls.forEach(e => {
                e()
            }), this.counters.render = Date.now() - e
        }

        readHitmap(e, t) {
            if (!this.initializedData) return new Promise((e, t) => t(new Error("regl data not initialized yet")));
            const {regl: n, camera: r, _fbo: i} = this.initializedData, {width: o, height: a} = this.dimension, s = e,
                c = a - t;
            return i.resize(Math.floor(o), Math.floor(a)), new Promise(e => {
                n({framebuffer: i})(() => {
                    n.clear({color: [0, 0, 0, 1], depth: 1}), r.draw(this.cameraStore.state, () => {
                        this._drawInput(!0);
                        let t = 0;
                        if (s < Math.floor(o) && c < Math.floor(a) && s >= 0 && c >= 0) {
                            const e = new Uint8Array(4);
                            n.read({x: s, y: c, width: 1, height: 1, data: e}), t = ro(e)
                        }
                        e(t)
                    })
                })
            })
        }

        _instrumentCommands(e) {
            return "production" === sa() ? e : new Proxy(e, {
                apply: (e, t, n) => {
                    const r = e(...n);
                    return "object" == typeof r.stats && this.reglCommandObjects.push(r), r
                }
            })
        }
    }

    const za = [0, 0, 0, 1];

    function Pa(e, t, n, r) {
        const i = 0 !== e ? e : void 0, o = {
            ray: t, objectId: i, get clickedObjectId() {
                return console.warn('"clickedObjectId" is deprecated. Please use "objectId" instead.'), i
            }
        };
        try {
            r(n, o)
        } catch (e) {
            console.error("Error during mouse handler", e)
        }
    }

    class Ia extends n.Component {
        constructor(e) {
            super(e), o(this, "_canvas", n.createRef()), o(this, "_tick", void 0), o(this, "_onClick", e => {
                this._onMouseInteraction(e, "onClick")
            }), o(this, "_onDoubleClick", e => {
                this._onMouseInteraction(e, "onDoubleClick")
            }), o(this, "_onMouseDown", e => {
                this._onMouseInteraction(e, "onMouseDown")
            }), o(this, "_onMouseMove", e => {
                this._onMouseInteraction(e, "onMouseMove", this.props.hitmapOnMouseMove)
            }), o(this, "_onMouseUp", e => {
                this._onMouseInteraction(e, "onMouseUp")
            }), o(this, "_onMouseInteraction", (e, t, n = !0) => {
                const {worldviewContext: r} = this.state, i = this.props[t];
                if (!(e.target instanceof window.HTMLElement) || 0 !== e.button) return;
                const {top: o, left: a} = e.target.getBoundingClientRect(), {clientX: s, clientY: c} = e, u = s - a,
                    f = c - o, l = r.raycast(u, f);
                if (l) {
                    if (!n && i) return Pa(0, l, e, i);
                    e.persist(), r.readHitmap(u, f).then(n => {
                        i && Pa(n, l, e, i), r.callComponentHandlers(n, l, e, t)
                    }).catch(e => {
                        console.error(e)
                    })
                }
            });
            const {
                width: t,
                height: r,
                top: i,
                left: a,
                backgroundColor: s,
                onCameraStateChange: c,
                cameraState: u,
                defaultCameraState: f
            } = e;
            c ? (u || console.warn("You provided `onCameraStateChange` without `cameraState`. Use Worldview as a controlled component with `cameraState` and `onCameraStateChange`, or uncontrolled with `defaultCameraState`."), u && f && console.warn("You provided both `cameraState` and `defaultCameraState`. `defaultCameraState` will be ignored.")) : u && console.warn("You provided `cameraState` without an `onCameraStateChange` handler. This will prevent moving the camera. If the camera should be movable, use `defaultCameraState`, otherwise set `onCameraStateChange`."), this.state = {
                worldviewContext: new Ma({
                    dimension: {
                        width: t,
                        height: r,
                        top: i,
                        left: a
                    },
                    canvasBackgroundColor: s || za,
                    cameraState: e.cameraState || e.defaultCameraState || _o,
                    onCameraStateChange: e.onCameraStateChange || void 0
                })
            }
        }

        static getDerivedStateFromProps({width: e, height: t, top: n, left: r}, {worldviewContext: i}) {
            return i.setDimension({width: e, height: t, top: n, left: r}), null
        }

        componentDidMount() {
            if (!this._canvas.current) return console.warn("missing canvas element");
            const {worldviewContext: e} = this.state;
            e.initialize(this._canvas.current), this.setState({}), e.paint()
        }

        componentWillUnmount() {
            this._tick && cancelAnimationFrame(this._tick), this.state.worldviewContext.destroy()
        }

        componentDidUpdate() {
            const {worldviewContext: e} = this.state;
            this.props.cameraState && e.cameraStore.setCameraState(this.props.cameraState), this._tick || (this._tick = requestAnimationFrame(() => {
                this._tick = void 0, e.paint()
            }))
        }

        _renderDebug() {
            const {worldviewContext: e} = this.state, t = e.initializedData;
            if ("production" === sa() || !t) return null;
            const {regl: r} = t, i = window.performance.memory, {counters: o, reglCommandObjects: a} = e,
                s = ar(o, e => `${e} ms`);
            if (s["draw calls"] = a.reduce((e, t) => e + t.stats.count, 0), i && (s["heap used"] = `${(i.usedJSHeapSize / i.jsHeapSizeLimit * 100).toFixed(3)}%`), Object.assign(s, br(r.stats, e => "number" == typeof e && 0 !== e)), r.stats.bufferCount > 1e3) throw new Error("Memory leak: Buffer count > 1000.");
            const c = Object.keys(s).map(e => n.createElement("tr", {
                key: e,
                style: {backgroundColor: "transparent", border: "none"}
            }, n.createElement("td", {
                style: {
                    paddingRight: 10,
                    border: "none"
                }
            }, e), n.createElement("td", {style: {width: "100%", border: "none"}}, s[e])));
            return n.createElement("table", {
                style: {
                    bottom: 5,
                    right: 10,
                    width: 200,
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    fontFamily: "monospace",
                    fontSize: 10
                }
            }, n.createElement("tbody", null, c))
        }

        render() {
            const {
                width: e,
                height: t,
                showDebug: r,
                keyMap: i,
                style: o
            } = this.props, {worldviewContext: s} = this.state;
            return n.createElement("div", {
                style: a({
                    position: "relative",
                    overflow: "hidden"
                }, o)
            }, n.createElement(aa, {cameraStore: s.cameraStore, keyMap: i}, n.createElement("canvas", {
                style: {
                    width: e,
                    height: t,
                    maxWidth: "100%",
                    maxHeight: "100%"
                },
                width: e,
                height: t,
                ref: this._canvas,
                onMouseUp: this._onMouseUp,
                onMouseDown: this._onMouseDown,
                onDoubleClick: this._onDoubleClick,
                onMouseMove: this._onMouseMove,
                onClick: this._onClick
            }), r ? this._renderDebug() : null), s.initializedData && n.createElement(Ea.Provider, {value: s}, this.props.children))
        }
    }

    o(Ia, "defaultProps", {backgroundColor: za, style: {}});
    const Fa = e => n.createElement(Yr, null, ({
                                                   width: t,
                                                   height: r,
                                                   left: o,
                                                   top: a
                                               }) => n.createElement(Ia, i({width: t, height: r, left: o, top: a}, e)));
    Fa.displayName = "Worldview";

    class Ba {
        constructor() {
            o(this, "min", void 0), o(this, "max", void 0), this.min = Number.MAX_SAFE_INTEGER, this.max = Number.MIN_SAFE_INTEGER
        }

        update(e) {
            this.min = Math.min(this.min, e), this.max = Math.max(this.max, e)
        }
    }

    const La = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Ra = (e, t) => n => {
        const r = Float32Array.from([].concat(...e));
        if (t.some(e => e.some(e => e < 0 || e >= 65536))) throw new Error("Element index out of bounds for Uint16");
        const i = Uint16Array.from([].concat(...t)), o = n.buffer({usage: "dynamic", data: []}), a = eo(n);
        return Qi({
            vert: "\n    precision mediump float;\n    attribute vec3 point;\n    attribute vec3 offset;\n    attribute vec4 color;\n    uniform mat4 projection, view;\n    uniform vec3 scale;\n    varying vec4 vColor;\n\n    #WITH_POSE\n\n    void main () {\n      vec3 p = applyPose(scale * point) + offset;\n      vColor = color;\n      gl_Position = projection * view * vec4(p, 1);\n    }\n    ",
            frag: "\n    precision mediump float;\n    varying vec4 vColor;\n    void main () {\n      gl_FragColor = vColor;\n    }",
            attributes: {
                point: r,
                color: (e, t) => a(t.color, t.colors, t.points ? t.points.length : 1),
                offset: (e, t) => {
                    const n = to(t.points) ? t.points.map(Wi) : t.points || [0, 0, 0];
                    return {buffer: o({usage: "dynamic", data: n}), divisor: 1}
                }
            },
            elements: i,
            blend: Xi,
            uniforms: {scale: (e, t) => to(t.scale) ? Wi(t.scale) : t.scale},
            count: i.length,
            instances: (e, t) => t.points ? t.points.length : 1
        })
    };

    async function Ha(e) {
        const t = new DataView(e);
        let n = 0;

        function r() {
            const e = t.getUint32(n, !0);
            return n += 4, e
        }

        const i = r();
        if (1179937895 !== i) throw new Error(`incorrect magic value 0x${i.toString(16)}`);
        const o = r();
        if (2 !== o) throw new Error(`incorrect version ${o}`);
        const a = r();
        if (a !== t.byteLength) throw new Error(`length ${a} doesn't match response length ${t.byteLength}`);

        function s(e) {
            do {
                const i = r();
                if (r() === e) {
                    const e = new DataView(t.buffer, n, i);
                    return n += i, e
                }
                n += i
            } while (n < a)
        }

        const c = s(1313821514);
        if (!c) throw new Error("no JSON chunk found");
        const u = JSON.parse((new TextDecoder).decode(c)), f = s(5130562);
        if (!f) return {json: u};
        if (void 0 !== u.buffers[0].uri) throw new Error("expected GLB-stored buffer");
        const l = u.accessors.map(e => {
            let t, n;
            switch (e.componentType) {
                case WebGLRenderingContext.BYTE:
                    t = Int8Array;
                    break;
                case WebGLRenderingContext.UNSIGNED_BYTE:
                    t = Uint8Array;
                    break;
                case WebGLRenderingContext.SHORT:
                    t = Int16Array;
                    break;
                case WebGLRenderingContext.UNSIGNED_SHORT:
                    t = Uint16Array;
                    break;
                case WebGLRenderingContext.UNSIGNED_INT:
                    t = Uint32Array;
                    break;
                case WebGLRenderingContext.FLOAT:
                    t = Float32Array;
                    break;
                default:
                    throw new Error(`unrecognized componentType ${e.componentType}`)
            }
            switch (e.type) {
                case"SCALAR":
                    n = 1;
                    break;
                case"VEC2":
                    n = 2;
                    break;
                case"VEC3":
                    n = 3;
                    break;
                case"VEC4":
                case"MAT2":
                    n = 4;
                    break;
                case"MAT3":
                    n = 9;
                    break;
                case"MAT4":
                    n = 16;
                    break;
                default:
                    throw new Error(`unrecognized type ${e.type}`)
            }
            const r = u.bufferViews[e.bufferView];
            if (0 !== r.buffer) throw new Error("only GLB-stored buffers are supported");
            if (r.byteLength % t.BYTES_PER_ELEMENT != 0) throw new Error("bufferView.byteLength mismatch");
            return new t(f.buffer, f.byteOffset + (r.byteOffset || 0) + (e.byteOffset || 0), e.count * n)
        }), d = u.images && await Promise.all(u.images.map(e => {
            const t = u.bufferViews[e.bufferView],
                n = new DataView(f.buffer, f.byteOffset + t.byteOffset, t.byteLength);
            return self.createImageBitmap(new Blob([n], {type: e.mimeType}))
        }));
        return {json: u, accessors: l, images: d}
    }

    function Na(e, t = 0) {
        return (e && e.id || 0) + t
    }

    function Wa(e) {
        if (e && 0 !== e.length) return e.reduce((e, t) => {
            if (t.points) e.push(a({}, t, {colors: t.points.map((e, n) => no(Na(t, n) || 0))})); else {
                const n = Na(t);
                null != n && e.push(a({}, t, {color: no(n)}))
            }
            return e
        }, [])
    }

    function Ua(e, t) {
        return t.find(t => {
            if (t.points && t.id) {
                if (e >= t.id && e < t.id + t.points.length) return !0
            } else if (t.color) {
                if (ro(t.color.map(e => 255 * e)) === e) return !0
            }
            return !1
        })
    }

    function qa(e) {
        if (e && 0 !== e.length) return e.reduce((e, t) => (t.points && e.push(a({}, t, {colors: t.points.map((e, n) => no(Na(t, n) || 0))})), e), [])
    }

    function Ga(e, t) {
        return t.find(t => !!(t.points && t.id && e >= t.id && e < t.id + t.points.length))
    }

    function Va(e, t) {
        const n = [[0, 0, .5], [0, 0, -.5]], r = [], i = [];
        for (let o = 0; o < e; o++) {
            const a = 2 * Math.PI * o / e, s = .5 * Math.cos(a), c = .5 * Math.sin(a);
            n.push([s, c, .5], [s, c, -.5]);
            const u = n.length - 1, f = t ? 0 : o + 1 === e ? 2 : n.length, l = o + 1 === e ? 3 : n.length + 1;
            if (r.push([u, f, l]), i.push([u, l, 1]), !t) {
                const e = n.length - 2;
                r.push([e, u, f]), i.push([e, f, 0])
            }
        }
        return {points: n, sideFaces: r, endCapFaces: i}
    }

    const {points: Ka, sideFaces: $a, endCapFaces: Ya} = Va(30, !1),
        Za = Ta("Cylinders", Ra(Ka, $a.concat(Ya)), {getHitmapProps: Wa, getObjectFromHitmapId: Ua}), {
            points: Xa,
            sideFaces: Qa,
            endCapFaces: Ja
        } = Va(30, !0), es = Ta("Cylinders", Ra(Xa, Qa.concat(Ja)), {getHitmapProps: Wa, getObjectFromHitmapId: Ua}),
        ts = Object.freeze([0, 0, 1]);
    const ns = Float32Array.BYTES_PER_ELEMENT, rs = 3 * ns, is = [1, 1, 1, .2], os = {BL: 0, TR: 1, BR: 2, TL: 3},
        as = Object.keys(os).length,
        ss = `\nprecision mediump float;\n\nattribute float pointType;\n\n// per-instance attributes\nattribute vec4 colorB;\nattribute vec4 colorC;\nattribute vec3 positionA;\nattribute vec3 positionB;\nattribute vec3 positionC;\nattribute vec3 positionD;\n\nuniform mat4 projection, view;\nuniform float viewportWidth;\nuniform float viewportHeight;\nuniform float alpha;\nuniform float thickness;\nuniform bool joined;\nuniform bool scaleInvariant;\n\nvarying vec4 vColor;\n\n${Object.keys(os).map(e => `const float POINT_${e} = ${os[e]}.0;`).join("\n")}\n\n#WITH_POSE\n\nvec2 rotateCCW(vec2 v) {\n  return vec2(-v.y, v.x);\n}\n\nvec2 normalizeOrZero(vec2 v) {\n  return length(v) < 0.00001 ? vec2(0, 0) : normalize(v);\n}\n\nvoid setPosition(vec4 proj, vec2 offset) {\n  gl_Position = proj;\n\n  offset *= thickness / 2.;\n\n  if (scaleInvariant) {\n    // The given thickness is a number of pixels on screen. Divide x by width/2 and\n    // y by height/2 so that they correspond to pixel distances when scaled from clip space to NDC.\n    offset.x /= viewportWidth / 2.0;\n    offset.y /= viewportHeight / 2.0;\n    // Compensate for automatic division by w\n    offset *= proj.w;\n  } else {\n    // The line thickness should be scaled the same way the camera scales other distances.\n    // projection[0].xyz is the result of projecting a unit x-vector, so its length represents\n    // how much distances are scaled by the camera projection.\n    offset *= length(projection[0].xyz);\n    offset.y *= viewportWidth / viewportHeight;\n  }\n\n  gl_Position.xy += offset;\n}\n\nvoid main () {\n  bool isStart = positionA == positionB;\n  bool isEnd = positionC == positionD;\n  bool isLeft = (pointType == POINT_TL || pointType == POINT_BL);\n  bool isTop = (pointType == POINT_TL || pointType == POINT_TR);\n  bool isEndpoint = isLeft ? isStart : isEnd;\n\n  float scale = isTop ? 1. : -1.;\n\n  mat4 projView = projection * view;\n  vec4 projA = projView * vec4(applyPose(positionA), 1);\n  vec4 projB = projView * vec4(applyPose(positionB), 1);\n  vec4 projC = projView * vec4(applyPose(positionC), 1);\n  vec4 projD = projView * vec4(applyPose(positionD), 1);\n\n  vec2 aspectVec = vec2(viewportWidth / viewportHeight, 1.0);\n  vec2 screenA = projA.xy / projA.w * aspectVec;\n  vec2 screenB = projB.xy / projB.w * aspectVec;\n  vec2 screenC = projC.xy / projC.w * aspectVec;\n  vec2 screenD = projD.xy / projD.w * aspectVec;\n\n  vec2 dirAB = normalizeOrZero(screenB - screenA);\n  vec2 dirBC = normalizeOrZero(screenC - screenB);\n  vec2 dirCD = normalizeOrZero(screenD - screenC);\n\n  vec2 perpAB = rotateCCW(dirAB); // vector perpendicular to AB\n  vec2 perpBC = rotateCCW(dirBC); // vector perpendicular to BC\n\n  vColor = isLeft ? colorB : colorC;\n  vColor.a *= alpha;\n\n  vec4 proj = isLeft ? projB : projC;\n\n  // simple case: non-joined line list\n  if (!joined || isEndpoint) {\n    setPosition(proj, scale * perpBC);\n    return;\n  }\n\n  // clamp to prevent rounding errors from breaking the sqrt()s below\n  float cosB = clamp(-dot(dirAB, dirBC), -1., 1.);\n  float cosC = clamp(-dot(dirBC, dirCD), -1., 1.);\n\n  bool tooSharpB = cosB > 0.01;\n  bool tooSharpC = cosC > 0.01;\n  bool tooSharp = isLeft ? tooSharpB : tooSharpC;\n\n  bool turningRightB = dot(dirAB, rotateCCW(dirBC)) > 0.;\n  bool turningRightC = dot(dirBC, rotateCCW(dirCD)) > 0.;\n  bool turningRight = isLeft ? turningRightB : turningRightC;\n\n  if (tooSharp) {\n    // "fold join"\n    vec2 perp = isLeft ? perpAB : perpBC;\n    vec2 dir = isLeft ? dirAB : dirBC;\n    float scalePerp = isLeft ? -1. : 1.;\n    float scaleDir = (turningRight == isLeft) ? 1. : -1.;\n    float tanHalfB = sqrt((1. - cosB) / (1. + cosB));\n    float tanHalfC = sqrt((1. - cosC) / (1. + cosC));\n    float tanHalf = isLeft ? tanHalfB : tanHalfC;\n    setPosition(proj, scale * (scalePerp * perp + scaleDir * dir * tanHalf));\n  } else {\n    // miter join\n    vec2 bisectorB = rotateCCW(normalize(dirAB + dirBC)); // angle bisector of ABC\n    vec2 bisectorC = rotateCCW(normalize(dirBC + dirCD)); // angle bisector of BCD\n    vec2 bisector = isLeft ? bisectorB : bisectorC;\n    float sinHalfB = sqrt((1. - cosB) / 2.);\n    float sinHalfC = sqrt((1. - cosC) / 2.);\n    float sinHalf = isLeft ? sinHalfB : sinHalfC;\n    setPosition(proj, scale * bisector / sinHalf);\n  }\n}\n`;
    const cs = Ta("Lines", e => {
            const t = e.buffer({type: "uint16", usage: "static", data: [os.TL, os.BL, os.TR, os.BR]}), n = e.buffer({
                type: "float",
                usage: "static",
                data: [[0, 1, 1, 1], [1, 0, 0, 1], [0, 1, 0, 1], [1, 0, 1, 1]]
            }), r = e.buffer({type: "float"}), i = e.buffer({type: "float"}), o = e.buffer({type: "float"}), s = e(Qi({
                vert: ss,
                frag: "\nprecision mediump float;\nvarying vec4 vColor;\nvoid main () {\n  gl_FragColor = vColor;\n}\n",
                blend: Xi,
                uniforms: {
                    thickness: e.prop("scale.x"),
                    viewportWidth: e.context("viewportWidth"),
                    viewportHeight: e.context("viewportHeight"),
                    alpha: e.prop("alpha"),
                    joined: e.prop("joined"),
                    scaleInvariant: e.prop("scaleInvariant")
                },
                attributes: {
                    pointType: t,
                    colorB: (e, {joined: t, monochrome: i, debug: o}) => ({
                        buffer: o ? n : r,
                        offset: 0,
                        stride: 4 * (t || i || o ? 1 : 2) * ns,
                        divisor: i || o ? 0 : 1
                    }),
                    colorC: (e, {joined: t, monochrome: i, debug: o}) => ({
                        buffer: o ? n : r,
                        offset: i || o ? 0 : 4 * ns,
                        stride: 4 * (t || i || o ? 1 : 2) * ns,
                        divisor: i || o ? 0 : 1
                    }),
                    positionA: (e, {joined: t}) => ({buffer: i, offset: 0, stride: (t ? 1 : 2) * rs, divisor: 1}),
                    positionB: (e, {joined: t}) => ({buffer: i, offset: rs, stride: (t ? 1 : 2) * rs, divisor: 1}),
                    positionC: (e, {joined: t, instances: n}) => ({
                        buffer: o,
                        offset: 2 * rs,
                        stride: (t ? 1 : 2) * rs,
                        divisor: 1
                    }),
                    positionD: (e, {joined: t}) => ({buffer: o, offset: 3 * rs, stride: (t ? 1 : 2) * rs, divisor: 1})
                },
                count: as,
                instances: e.prop("instances"),
                primitive: e.prop("primitive")
            })), c = new Array(as);
            let u = new Float32Array(0), f = 0;
            const l = t => {
                const {debug: n, primitive: l = "lines", scaleInvariant: d = !1} = t, p = t.points.length,
                    h = p > 2 && function (e, t) {
                        const [n, r, i] = to(e) ? Wi(e) : e, [o, a, s] = to(t) ? Wi(t) : t;
                        return n === o && r === a && i === s
                    }(t.points[0], t.points[p - 1]), m = !h && t.closed;
                ((e, t, n) => {
                    const r = e.length + (n ? 3 : 2);
                    f < r && (u = new Float32Array(3 * r), f = r), e.forEach((e, t) => {
                        const [n, r, i] = to(e) ? Wi(e) : e, o = 3 + 3 * t;
                        u[o + 0] = n, u[o + 1] = r, u[o + 2] = i
                    });
                    const i = 3 * r;
                    t ? (u.copyWithin(0, i - 9, i - 6), u.copyWithin(i - 3, 6, 9)) : n ? (u.copyWithin(0, i - 9, i - 6), u.copyWithin(i - 6, 3, 9)) : (u.copyWithin(0, 3, 6), u.copyWithin(i - 3, i - 6, i - 3))
                })(t.points, h, m), i({data: u, usage: "dynamic"}), o({data: u, usage: "dynamic"});
                const v = !(t.colors && t.colors.length);
                let g;
                v ? g = to(t.color) ? c.fill(t.color ? Ki(t.color) : is) : c.fill(t.color || is) : (g = to(t.colors) ? t.colors.map(Ki) : t.colors.slice(), m && g.push(g[0])), r({
                    data: g,
                    usage: "dynamic"
                });
                const b = "line strip" === l, y = p + (m ? 1 : 0), x = b ? y - 1 : Math.floor(y / 2);
                ((t, n) => {
                    t ? e({depth: {enable: !1}})(n) : n()
                })(n, () => {
                    s(a({}, t, {
                        joined: b,
                        primitive: "triangle strip",
                        alpha: n ? .2 : 1,
                        monochrome: v,
                        instances: x,
                        scaleInvariant: d
                    })), n && s(a({}, t, {
                        joined: b,
                        primitive: "line strip",
                        alpha: 1,
                        monochrome: v,
                        instances: x,
                        scaleInvariant: d
                    }))
                })
            };
            return e => {
                Array.isArray(e) ? e.forEach(l) : l(e)
            }
        }), us = e => ({x: e[0], y: e[1], z: e[2]}), fs = 100,
        ls = {orientation: {x: 0, y: 0, z: 0, w: 0}, position: {x: 0, y: 0, z: 0}};

    class ds extends r.Component {
        render() {
            return r.createElement(cs, null, this.props.children)
        }
    }

    o(ds, "defaultProps", {
        children: [{
            pose: ls,
            points: [[-fs, 0, 0], [fs, 0, 0]].map(us),
            scale: {x: .5, y: .5, z: .5},
            color: {r: .95, g: .26, b: .4, a: 1}
        }, {
            pose: ls,
            points: [[0, -100, 0], [0, 100, 0]].map(us),
            scale: {x: .5, y: .5, z: .5},
            color: {r: .02, g: .82, b: .49, a: 1}
        }, {
            pose: ls,
            points: [[0, 0, -100], [0, 0, 100]].map(us),
            scale: {x: .5, y: .5, z: .5},
            color: {r: .11, g: .51, b: .92, a: 1}
        }]
    });
    const ps = Ta("Cubes", Ra([[-.5, -.5, -.5], [-.5, .5, -.5], [.5, -.5, -.5], [.5, .5, -.5], [-.5, -.5, .5], [-.5, .5, .5], [.5, -.5, .5], [.5, .5, .5]], [[0, 1, 2], [1, 2, 3], [4, 5, 6], [5, 6, 7], [0, 2, 4], [2, 4, 6], [1, 3, 5], [3, 5, 7], [2, 3, 6], [3, 6, 7], [0, 1, 4], [1, 4, 5]]), {
        getHitmapProps: Wa,
        getObjectFromHitmapId: Ua
    });
    var hs = vs, ms = vs;

    function vs(e, t, n) {
        n = n || 2;
        var r, i, o, a, s, c, u, f = t && t.length, l = f ? t[0] * n : e.length, d = gs(e, 0, l, n, !0), p = [];
        if (!d) return p;
        if (f && (d = function (e, t, n, r) {
            var i, o, a, s, c, u = [];
            for (i = 0, o = t.length; i < o; i++) a = t[i] * r, s = i < o - 1 ? t[i + 1] * r : e.length, (c = gs(e, a, s, r, !1)) === c.next && (c.steiner = !0), u.push(As(c));
            for (u.sort(Ss), i = 0; i < u.length; i++) js(u[i], n), n = bs(n, n.next);
            return n
        }(e, t, d, n)), e.length > 80 * n) {
            r = o = e[0], i = a = e[1];
            for (var h = n; h < l; h += n) (s = e[h]) < r && (r = s), (c = e[h + 1]) < i && (i = c), s > o && (o = s), c > a && (a = c);
            u = 0 !== (u = Math.max(o - r, a - i)) ? 1 / u : 0
        }
        return ys(d, p, n, r, i, u), p
    }

    function gs(e, t, n, r, i) {
        var o, a;
        if (i === Ls(e, t, n, r) > 0) for (o = t; o < n; o += r) a = Is(o, e[o], e[o + 1], a); else for (o = n - r; o >= t; o -= r) a = Is(o, e[o], e[o + 1], a);
        return a && Ds(a, a.next) && (Fs(a), a = a.next), a
    }

    function bs(e, t) {
        if (!e) return e;
        t || (t = e);
        var n, r = e;
        do {
            if (n = !1, r.steiner || !Ds(r, r.next) && 0 !== Ts(r.prev, r, r.next)) r = r.next; else {
                if (Fs(r), (r = t = r.prev) === r.next) break;
                n = !0
            }
        } while (n || r !== t);
        return t
    }

    function ys(e, t, n, r, i, o, a) {
        if (e) {
            !a && o && function (e, t, n, r) {
                var i = e;
                do {
                    null === i.z && (i.z = Es(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
                } while (i !== e);
                i.prevZ.nextZ = null, i.prevZ = null, function (e) {
                    var t, n, r, i, o, a, s, c, u = 1;
                    do {
                        for (n = e, e = null, o = null, a = 0; n;) {
                            for (a++, r = n, s = 0, t = 0; t < u && (s++, r = r.nextZ); t++) ;
                            for (c = u; s > 0 || c > 0 && r;) 0 !== s && (0 === c || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), o ? o.nextZ = i : e = i, i.prevZ = o, o = i;
                            n = r
                        }
                        o.nextZ = null, u *= 2
                    } while (a > 1)
                }(i)
            }(e, r, i, o);
            for (var s, c, u = e; e.prev !== e.next;) if (s = e.prev, c = e.next, o ? ws(e, r, i, o) : xs(e)) t.push(s.i / n), t.push(e.i / n), t.push(c.i / n), Fs(e), e = c.next, u = c.next; else if ((e = c) === u) {
                a ? 1 === a ? ys(e = _s(e, t, n), t, n, r, i, o, 2) : 2 === a && Cs(e, t, n, r, i, o) : ys(bs(e), t, n, r, i, o, 1);
                break
            }
        }
    }

    function xs(e) {
        var t = e.prev, n = e, r = e.next;
        if (Ts(t, n, r) >= 0) return !1;
        for (var i = e.next.next; i !== e.prev;) {
            if (ks(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && Ts(i.prev, i, i.next) >= 0) return !1;
            i = i.next
        }
        return !0
    }

    function ws(e, t, n, r) {
        var i = e.prev, o = e, a = e.next;
        if (Ts(i, o, a) >= 0) return !1;
        for (var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, c = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, u = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, f = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, l = Es(s, c, t, n, r), d = Es(u, f, t, n, r), p = e.prevZ, h = e.nextZ; p && p.z >= l && h && h.z <= d;) {
            if (p !== e.prev && p !== e.next && ks(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && Ts(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, h !== e.prev && h !== e.next && ks(i.x, i.y, o.x, o.y, a.x, a.y, h.x, h.y) && Ts(h.prev, h, h.next) >= 0) return !1;
            h = h.nextZ
        }
        for (; p && p.z >= l;) {
            if (p !== e.prev && p !== e.next && ks(i.x, i.y, o.x, o.y, a.x, a.y, p.x, p.y) && Ts(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ
        }
        for (; h && h.z <= d;) {
            if (h !== e.prev && h !== e.next && ks(i.x, i.y, o.x, o.y, a.x, a.y, h.x, h.y) && Ts(h.prev, h, h.next) >= 0) return !1;
            h = h.nextZ
        }
        return !0
    }

    function _s(e, t, n) {
        var r = e;
        do {
            var i = r.prev, o = r.next.next;
            !Ds(i, o) && Ms(i, r, r.next, o) && zs(i, o) && zs(o, i) && (t.push(i.i / n), t.push(r.i / n), t.push(o.i / n), Fs(r), Fs(r.next), r = e = o), r = r.next
        } while (r !== e);
        return r
    }

    function Cs(e, t, n, r, i, o) {
        var a = e;
        do {
            for (var s = a.next.next; s !== a.prev;) {
                if (a.i !== s.i && Os(a, s)) {
                    var c = Ps(a, s);
                    return a = bs(a, a.next), c = bs(c, c.next), ys(a, t, n, r, i, o), void ys(c, t, n, r, i, o)
                }
                s = s.next
            }
            a = a.next
        } while (a !== e)
    }

    function Ss(e, t) {
        return e.x - t.x
    }

    function js(e, t) {
        if (t = function (e, t) {
            var n, r = t, i = e.x, o = e.y, a = -1 / 0;
            do {
                if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                    var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                    if (s <= i && s > a) {
                        if (a = s, s === i) {
                            if (o === r.y) return r;
                            if (o === r.next.y) return r.next
                        }
                        n = r.x < r.next.x ? r : r.next
                    }
                }
                r = r.next
            } while (r !== t);
            if (!n) return null;
            if (i === a) return n.prev;
            var c, u = n, f = n.x, l = n.y, d = 1 / 0;
            r = n.next;
            for (; r !== u;) i >= r.x && r.x >= f && i !== r.x && ks(o < l ? i : a, o, f, l, o < l ? a : i, o, r.x, r.y) && ((c = Math.abs(o - r.y) / (i - r.x)) < d || c === d && r.x > n.x) && zs(r, e) && (n = r, d = c), r = r.next;
            return n
        }(e, t)) {
            var n = Ps(t, e);
            bs(n, n.next)
        }
    }

    function Es(e, t, n, r, i) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
    }

    function As(e) {
        var t = e, n = e;
        do {
            t.x < n.x && (n = t), t = t.next
        } while (t !== e);
        return n
    }

    function ks(e, t, n, r, i, o, a, s) {
        return (i - a) * (t - s) - (e - a) * (o - s) >= 0 && (e - a) * (r - s) - (n - a) * (t - s) >= 0 && (n - a) * (o - s) - (i - a) * (r - s) >= 0
    }

    function Os(e, t) {
        return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
            var n = e;
            do {
                if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Ms(n, n.next, e, t)) return !0;
                n = n.next
            } while (n !== e);
            return !1
        }(e, t) && zs(e, t) && zs(t, e) && function (e, t) {
            var n = e, r = !1, i = (e.x + t.x) / 2, o = (e.y + t.y) / 2;
            do {
                n.y > o != n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
            } while (n !== e);
            return r
        }(e, t)
    }

    function Ts(e, t, n) {
        return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
    }

    function Ds(e, t) {
        return e.x === t.x && e.y === t.y
    }

    function Ms(e, t, n, r) {
        return !!(Ds(e, t) && Ds(n, r) || Ds(e, r) && Ds(n, t)) || Ts(e, t, n) > 0 != Ts(e, t, r) > 0 && Ts(n, r, e) > 0 != Ts(n, r, t) > 0
    }

    function zs(e, t) {
        return Ts(e.prev, e, e.next) < 0 ? Ts(e, t, e.next) >= 0 && Ts(e, e.prev, t) >= 0 : Ts(e, t, e.prev) < 0 || Ts(e, e.next, t) < 0
    }

    function Ps(e, t) {
        var n = new Bs(e.i, e.x, e.y), r = new Bs(t.i, t.x, t.y), i = e.next, o = t.prev;
        return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
    }

    function Is(e, t, n, r) {
        var i = new Bs(e, t, n);
        return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
    }

    function Fs(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
    }

    function Bs(e, t, n) {
        this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function Ls(e, t, n, r) {
        for (var i = 0, o = t, a = n - r; o < n; o += r) i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), a = o;
        return i
    }

    vs.deviation = function (e, t, n, r) {
        var i = t && t.length, o = i ? t[0] * n : e.length, a = Math.abs(Ls(e, 0, o, n));
        if (i) for (var s = 0, c = t.length; s < c; s++) {
            var u = t[s] * n, f = s < c - 1 ? t[s + 1] * n : e.length;
            a -= Math.abs(Ls(e, u, f, n))
        }
        var l = 0;
        for (s = 0; s < r.length; s += 3) {
            var d = r[s] * n, p = r[s + 1] * n, h = r[s + 2] * n;
            l += Math.abs((e[d] - e[h]) * (e[p + 1] - e[d + 1]) - (e[d] - e[p]) * (e[h + 1] - e[d + 1]))
        }
        return 0 === a && 0 === l ? 0 : Math.abs((l - a) / a)
    }, vs.flatten = function (e) {
        for (var t = e[0][0].length, n = {vertices: [], holes: [], dimensions: t}, r = 0, i = 0; i < e.length; i++) {
            for (var o = 0; o < e[i].length; o++) for (var a = 0; a < t; a++) n.vertices.push(e[i][o][a]);
            i > 0 && (r += e[i - 1].length, n.holes.push(r))
        }
        return n
    }, hs.default = ms;
    const Rs = Ta("Triangles", e => {
            const t = e((e => Qi({
                primitive: "triangles",
                vert: "\n  precision mediump float;\n\n  attribute vec3 point;\n\n  uniform mat4 projection, view;\n\n  #WITH_POSE\n\n  void main () {\n    vec3 pos = applyPose(point);\n    gl_Position = projection * view * vec4(pos, 1);\n  }\n  ",
                frag: "\n  precision mediump float;\n  uniform vec4 color;\n  void main () {\n    gl_FragColor = color;\n  }\n  ",
                attributes: {
                    point: (e, t) => to(t.points) ? Vi(t.points) : t.points,
                    color: (e, t) => to(t.colors) || to(t.color) ? Ji(t) : t.color || t.colors
                },
                uniforms: {color: (e, t) => to(t.color) ? Ki(t.color) : t.color},
                depth: {enable: !0, mask: !1},
                blend: Xi,
                count: (e, t) => t.points.length
            }))()), n = e((e => Qi({
                primitive: "triangles",
                vert: "\n  precision mediump float;\n\n  attribute vec3 point;\n  attribute vec4 color;\n\n  uniform mat4 projection, view;\n\n  varying vec4 vColor;\n\n  #WITH_POSE\n\n  void main () {\n    vec3 pos = applyPose(point);\n    vColor = color;\n    gl_Position = projection * view * vec4(pos, 1);\n  }\n  ",
                frag: "\n  precision mediump float;\n  varying vec4 vColor;\n  void main () {\n    gl_FragColor = vColor;\n  }\n  ",
                attributes: {
                    point: (e, t) => to(t.points) ? Vi(t.points) : t.points,
                    color: (e, t) => to(t.colors) || to(t.color) ? Ji(t) : t.color || t.colors
                },
                blend: Xi,
                depth: {enable: !0, func: "<="},
                count: (e, t) => t.points.length
            }))());
            return e => {
                const r = Array.isArray(e) ? e : [e], i = [], o = [];
                r.forEach(e => {
                    e.colors && e.colors.length ? o.push(e) : i.push(e)
                }), t(i), n(o)
            }
        }, {getHitmapProps: qa, getObjectFromHitmapId: Ga}),
        Hs = {position: {x: 0, y: 0, z: 0}, orientation: {x: 0, y: 0, z: 0, w: 0}}, Ns = {x: 1, y: 1, z: 1};

    function Ws(e) {
        const t = function (e) {
            const t = new Float32Array(3 * e.length);
            for (let n = 0; n < e.length; n++) {
                const [r, i, o] = e[n];
                t[3 * n] = r, t[3 * n + 1] = i, t[3 * n + 2] = o
            }
            return t
        }(e), n = hs(t, null, 3), r = [];
        for (let t = 0; t < n.length; t++) {
            const i = n[t];
            r.push(e[i])
        }
        return r
    }

    function Us(e) {
        if (void 0 !== e) {
            switch (e) {
                case WebGLRenderingContext.NEAREST:
                    return "nearest";
                case WebGLRenderingContext.LINEAR:
                    return "linear";
                case WebGLRenderingContext.NEAREST_MIPMAP_NEAREST:
                    return "nearest mipmap nearest";
                case WebGLRenderingContext.NEAREST_MIPMAP_LINEAR:
                    return "nearest mipmap linear";
                case WebGLRenderingContext.LINEAR_MIPMAP_NEAREST:
                    return "linear mipmap nearest";
                case WebGLRenderingContext.LINEAR_MIPMAP_LINEAR:
                    return "linear mipmap linear";
                case WebGLRenderingContext.REPEAT:
                    return "repeat";
                case WebGLRenderingContext.CLAMP_TO_EDGE:
                    return "clamp";
                case WebGLRenderingContext.MIRRORED_REPEAT:
                    return "mirror"
            }
            throw new Error(`unhandled constant value ${JSON.stringify(e)}`)
        }
    }

    const qs = e => {
        const t = e({
            primitive: "triangles",
            blend: Xi,
            uniforms: {
                globalAlpha: e.context("globalAlpha"),
                poseMatrix: e.context("poseMatrix"),
                baseColorTexture: e.prop("baseColorTexture"),
                baseColorFactor: e.prop("baseColorFactor"),
                nodeMatrix: e.prop("nodeMatrix"),
                "light.direction": [0, 0, -1],
                "light.ambientIntensity": .5,
                "light.diffuseIntensity": .5
            },
            attributes: {position: e.prop("positions"), normal: e.prop("normals"), texCoord: e.prop("texCoords")},
            elements: e.prop("indices"),
            vert: "\n  uniform mat4 projection, view;\n  uniform mat4 nodeMatrix;\n  uniform mat4 poseMatrix;\n  attribute vec3 position, normal;\n  varying vec3 vNormal;\n  attribute vec2 texCoord;\n  varying vec2 vTexCoord;\n\n  void main() {\n    // using the projection matrix for normals breaks lighting for orthographic mode\n    mat4 mv = view * poseMatrix * nodeMatrix;\n    vNormal = normalize((mv * vec4(normal, 0)).xyz);\n    vTexCoord = texCoord;\n    gl_Position = projection * mv * vec4(position, 1);\n  }\n  ",
            frag: "\n  precision mediump float;\n  uniform float globalAlpha;\n  uniform sampler2D baseColorTexture;\n  uniform vec4 baseColorFactor;\n  varying mediump vec2 vTexCoord;\n  varying mediump vec3 vNormal;\n\n  // Basic directional lighting from:\n  // http://ogldev.atspace.co.uk/www/tutorial18/tutorial18.html\n  struct DirectionalLight {\n    mediump vec3 direction;\n    lowp float ambientIntensity;\n    lowp float diffuseIntensity;\n  };\n  uniform DirectionalLight light;\n\n  void main() {\n    vec4 baseColor = texture2D(baseColorTexture, vTexCoord) * baseColorFactor;\n    float diffuse = light.diffuseIntensity * max(0.0, dot(vNormal, -light.direction));\n    gl_FragColor = vec4((light.ambientIntensity + diffuse) * baseColor.rgb, baseColor.a * globalAlpha);\n  }\n  "
        }), n = e.buffer([0, 0]), r = e.texture({data: [255, 255, 255, 255], width: 1, height: 1});
        let i;

        function o(t) {
            if (i) return;
            const o = t.json.textures && t.json.textures.map(n => {
                const r = t.json.samplers[n.sampler], i = t.images[n.source];
                return e.texture({
                    data: i,
                    min: Us(r.minFilter),
                    mag: Us(r.magFilter),
                    wrapS: Us(r.wrapS),
                    wrapT: Us(r.wrapT)
                })
            });

            function a(e, s) {
                const c = e.matrix ? (u = e.matrix, (f = new Xr(16))[0] = u[0], f[1] = u[1], f[2] = u[2], f[3] = u[3], f[4] = u[4], f[5] = u[5], f[6] = u[6], f[7] = u[7], f[8] = u[8], f[9] = u[9], f[10] = u[10], f[11] = u[11], f[12] = u[12], f[13] = u[13], f[14] = u[14], f[15] = u[15], f) : ri(Qr(), e.rotation || [0, 0, 0, 1], e.translation || [0, 0, 0], e.scale || [1, 1, 1]);
                var u, f;
                if (ii(c, s, c), null != e.mesh && function (e, a) {
                    for (const s of e.primitives) {
                        const e = t.json.materials[s.material], c = e.pbrMetallicRoughness.baseColorTexture;
                        i.push({
                            indices: t.accessors[s.indices],
                            positions: t.accessors[s.attributes.POSITION],
                            normals: t.accessors[s.attributes.NORMAL],
                            texCoords: c ? t.accessors[s.attributes[`TEXCOORD_${c.texCoord || 0}`]] : {
                                divisor: 1,
                                buffer: n
                            },
                            baseColorTexture: c ? o[c.index] : r,
                            baseColorFactor: e.pbrMetallicRoughness.baseColorFactor || [1, 1, 1, 1],
                            nodeMatrix: a
                        })
                    }
                }(t.json.meshes[e.mesh], c), e.children) for (const n of e.children) a(t.json.nodes[n], c)
            }

            t.images && t.images.forEach(e => e.close()), i = [];
            for (const e of t.json.scenes[t.json.scene].nodes) {
                const n = Qr();
                s = n, c = n, u = Math.PI / 2, f = void 0, l = void 0, d = void 0, p = void 0, h = void 0, m = void 0, v = void 0, g = void 0, b = void 0, y = void 0, f = Math.sin(u), l = Math.cos(u), d = c[4], p = c[5], h = c[6], m = c[7], v = c[8], g = c[9], b = c[10], y = c[11], c !== s && (s[0] = c[0], s[1] = c[1], s[2] = c[2], s[3] = c[3], s[12] = c[12], s[13] = c[13], s[14] = c[14], s[15] = c[15]), s[4] = d * l + v * f, s[5] = p * l + g * f, s[6] = h * l + b * f, s[7] = m * l + y * f, s[8] = v * l - d * f, s[9] = g * l - p * f, s[10] = b * l - h * f, s[11] = y * l - m * f, ni(n, n, Math.PI / 2), a(t.json.nodes[e], n)
            }
            var s, c, u, f, l, d, p, h, m, v, g, b, y
        }

        const a = e({
            context: {
                poseMatrix: (e, t) => ri(Qr(), Ui(t.pose.orientation), Wi(t.pose.position), t.scale ? Wi(t.scale) : [1, 1, 1]),
                globalAlpha: (e, t) => null == t.alpha ? 1 : t.alpha
            }
        });
        return e => {
            o(e.model), a(e, () => {
                t(i)
            })
        }
    };

    function Gs() {
        return Qi({
            vert: "\n    precision mediump float;\n    uniform mat4 projection, view;\n\n    attribute vec3 point;\n\n    void main () {\n      vec3 p = point;\n      gl_Position = projection * view * vec4(p, 1);\n    }\n    ",
            frag: "\n      precision mediump float;\n      void main () {\n        gl_FragColor = vec4(.3, .3, .3, 1.);\n      }\n    ",
            primitive: "lines",
            attributes: {
                point: (e, t) => {
                    const n = [], r = t.count;
                    for (let e = -t.count; e < t.count; e++) n.push([-r, e, 0]), n.push([r, e, 0]), n.push([e, -r, 0]), n.push([e, r, 0]);
                    return n
                }
            },
            count: (e, t) => {
                return 4 * t.count * 2
            }
        })
    }

    class Vs extends r.Component {
        render() {
            return r.createElement(ka, {reglCommand: Gs, drawProps: this.props})
        }
    }

    o(Vs, "displayName", "Grid"), o(Vs, "defaultProps", {count: 6});
    const Ks = Ta("Points", e => {
        const [t, n] = e.limits.pointSizeDims;
        return Qi({
            primitive: "points",
            vert: "\n    precision mediump float;\n\n    #WITH_POSE\n\n    uniform mat4 projection, view;\n    uniform float pointSize;\n\n    attribute vec3 point;\n    attribute vec4 color;\n    varying vec4 fragColor;\n    void main () {\n      gl_PointSize = pointSize;\n      vec3 pos = applyPose(point);\n      gl_Position = projection * view * vec4(pos, 1);\n      fragColor = color;\n    }\n    ",
            frag: "\n    precision mediump float;\n    varying vec4 fragColor;\n    void main () {\n      gl_FragColor = vec4(fragColor.x, fragColor.y, fragColor.z, 1);\n    }\n    ",
            attributes: {point: (e, t) => t.points.map(e => Array.isArray(e) ? e : Wi(e)), color: (e, t) => Ji(t)},
            uniforms: {
                pointSize: (e, r) => {
                    const i = r.scale.x || 1;
                    return Math.min(n, Math.max(t, i))
                }
            },
            count: e.prop("points.length")
        })
    }, {getHitmapProps: qa, getObjectFromHitmapId: Ga}), $s = [[0, 0, .5], [0, 0, -.5]], Ys = [];
    for (let e = 0; e < 15; e++) {
        for (let t = 0; t < 15; t++) {
            const n = (e + 1) / 16 * Math.PI, r = .5 * Math.cos(n), i = .5 * Math.sin(n), o = 2 * t * Math.PI / 15,
                a = i * Math.cos(o), s = i * Math.sin(o);
            if ($s.push([a, s, r]), t > 0) {
                const t = 0 === e ? 0 : $s.length - 1 - 15;
                Ys.push([$s.length - 2, $s.length - 1, t]), e > 0 && Ys.push([$s.length - 2, t - 1, t])
            }
        }
        const t = 0 === e ? 0 : $s.length - 30;
        Ys.push([$s.length - 1, $s.length - 15, t]), e > 0 && Ys.push([$s.length - 1, $s.length - 15 - 1, t])
    }
    for (let e = 0; e < 15; e++) {
        const t = $s.length - 15 + e, n = 0 === e ? $s.length - 1 : t - 1;
        Ys.push([t, n, 1])
    }
    const Zs = Ta("Spheres", Ra($s, Ys), {getHitmapProps: Wa, getObjectFromHitmapId: Ua});
    let Xs = !1;

    class Qs {
        constructor() {
            o(this, "wrapper", document.createElement("span")), o(this, "_inner", document.createElement("span")), o(this, "_text", document.createTextNode("")), o(this, "_color", ""), function () {
                if (Xs) return;
                const e = document.createElement("style");
                e.innerHTML = "\n    .regl-worldview-text-wrapper {\n      position: absolute;\n      white-space: nowrap;\n      z-index: 100;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      will-change: transform;\n    }\n    .regl-worldview-text-inner {\n      position: relative;\n      left: -50%;\n      top: -0.5em;\n      white-space: pre-line;\n    }\n  ", document.body && document.body.appendChild(e), Xs = !0
            }(), this.wrapper.className = "regl-worldview-text-wrapper", this._inner.className = "regl-worldview-text-inner", this.wrapper.appendChild(this._inner), this._inner.appendChild(this._text)
        }

        update(e, t, n) {
            this.wrapper.style.transform = `translate(${t.toFixed()}px,${n.toFixed()}px)`;
            const r = $i(e.color);
            this._color !== r && (this._color = r, this.wrapper.style.color = r), this._text.textContent !== e.text && (this._text.textContent = e.text || "")
        }
    }

    class Js extends r.Component {
        constructor(...e) {
            super(...e), o(this, "_context", void 0), o(this, "_textComponents", new Map), o(this, "_textContainerRef", r.createRef()), o(this, "componentWillUnmount", () => {
                this._context && this._context.unregisterPaintCallback(this.paint)
            }), o(this, "paint", () => {
                const e = this._context,
                    t = this._textComponents, {children: n} = this.props, {current: r} = this._textContainerRef,
                    i = e && e.initializedData;
                if (!r || !e || !i) return;
                const {dimension: o, dimension: {width: a, height: s}} = e, {camera: c} = i, u = new Set(t.keys());
                for (const e of n) {
                    const {pose: n, name: i} = e, {position: f} = n, l = this.project(f, c, o);
                    if (!l) continue;
                    const [d, p] = l;
                    if (d < -10 || p < -10 || d > a + 10 || p > s + 10) continue;
                    let h = t.get(i || e);
                    h ? u.delete(i || e) : (h = new Qs, t.set(i || e, h), r.appendChild(h.wrapper)), h.update(e, d, p)
                }
                for (const e of u) {
                    const n = t.get(e);
                    n && (n.wrapper.remove(), t.delete(e))
                }
            }), o(this, "project", (e, t, n) => {
                const r = [e.x, e.y, e.z], {left: i, top: o, width: a, height: s} = n, c = [i, o, a, s];
                return t.toScreenCoord(c, r)
            })
        }

        componentDidMount() {
            this._context && this._context.registerPaintCallback(this.paint)
        }

        render() {
            return r.createElement(r.Fragment, null, r.createElement("div", {ref: this._textContainerRef}), r.createElement(Ea.Consumer, null, e => (e && (this._context = e), null)))
        }
    }

    return o(Js, "defaultProps", {children: []}), e.Worldview = Fa, e.default = Fa, e.Bounds = class {
        constructor() {
            o(this, "x", void 0), o(this, "y", void 0), o(this, "z", void 0), this.x = new Ba, this.y = new Ba, this.z = new Ba
        }

        update(e) {
            this.x.update(e.x), this.y.update(e.y), this.z.update(e.z)
        }
    }, e.cameraStateSelectors = yo, e.CameraStore = Co, e.DEFAULT_CAMERA_STATE = _o, e.eulerFromQuaternion = function (e, t) {
        const n = function (e, t) {
            var n = t[0], r = t[1], i = t[2], o = t[3], a = n + n, s = r + r, c = i + i, u = n * a, f = r * a,
                l = r * s, d = i * a, p = i * s, h = i * c, m = o * a, v = o * s, g = o * c;
            return e[0] = 1 - l - h, e[3] = f - g, e[6] = d + v, e[1] = f + g, e[4] = 1 - u - h, e[7] = p - m, e[2] = d - v, e[5] = p + m, e[8] = 1 - u - l, e
        }(La, t), r = n[0], i = n[3], o = n[6], a = n[4], s = n[7], c = n[5], u = n[8];
        return e[1] = Math.asin(o < -1 ? -1 : o > 1 ? 1 : o), Math.abs(o) < .99999 ? (e[0] = Math.atan2(-s, u), e[2] = Math.atan2(-i, r)) : (e[0] = Math.atan2(c, a), e[2] = 0), e
    }, e.fromGeometry = Ra, e.parseGLB = Ha, e.WorldviewReactContext = Ea, e.pointToVec3 = Wi, e.orientationToVec4 = Ui, e.vec3ToPoint = qi, e.vec4ToOrientation = Gi, e.pointToVec3Array = Vi, e.toRGBA = Ki, e.vec4ToRGBA = (e => ({
        r: e[0],
        g: e[1],
        b: e[2],
        a: e[3]
    })), e.getCSSColor = $i, e.blend = Xi, e.withPose = Qi, e.getVertexColors = Ji, e.colorBuffer = eo, e.shouldConvert = to, e.intToRGB = no, e.getIdFromColor = ro, e.changePropsColors = function (e) {
        const {color: t, colors: n} = e;
        if (!t && !n) throw new Error("No color/colors attribute found, could not produce a hitmap color");
        const r = function (e) {
            if (!e.hitmapId) return Hi;
            const t = no(e.hitmapId);
            return e.points ? e.points.map(() => t) : t
        }(e);
        return e.color ? a({}, e, {color: r}) : e.colors ? a({}, e, {colors: r}) : void 0
    }, e.fromSpherical = io, e.Ray = fa, e.getRayFromClick = la, e.Arrows = class extends n.PureComponent {
        render() {
            const e = [], t = [];
            for (const n of this.props.children) {
                let r, i, o, a, s, c, u, f, l;
                if (n.points && 2 === n.points.length) {
                    const [e, t] = n.points;
                    u = [e.x, e.y, e.z];
                    const d = [t.x, t.y, t.z], p = fi(u, d);
                    di(l = ci([0, 0, 0], d, u), l), f = Di([0, 0, 0, 0], ts, l), a = s = n.scale.y, c = n.scale.z || .3 * p, r = i = n.scale.x, o = p - c
                } else u = Wi(n.pose.position), wi(f = Ui(n.pose.orientation), f, Math.PI / 2), l = vi([0, 0, 0], ts, f), r = n.scale.y || 1, i = n.scale.z || 1, a = 2 * r, s = 2 * i, c = .23 * (n.scale.x || 1), o = .77 * (n.scale.x || 1);
                const d = ui([0, 0, 0], u, l, o / 2), p = ui([0, 0, 0], u, l, o + c / 2);
                e.push({
                    scale: {x: r, y: i, z: o},
                    color: n.color,
                    pose: {position: qi(d), orientation: Gi(f)}
                }), t.push({scale: {x: a, y: s, z: c}, color: n.color, pose: {position: qi(p), orientation: Gi(f)}})
            }
            return n.createElement(n.Fragment, null, n.createElement(Za, null, e), n.createElement(es, null, t))
        }
    }, e.Axes = ds, e.Command = ka, e.makeCommand = Ta, e.SUPPORTED_MOUSE_EVENTS = Aa, e.Cones = es, e.Cubes = ps, e.Cylinders = Za, e.FilledPolygons = function (e) {
        let {children: t = [], getHitmapId: n} = e, o = ja(e, ["children", "getHitmapId"]);
        const s = [];
        for (const e of t) {
            const t = to(e.points) ? e.points.map(Wi) : e.points, n = e.pose ? e.pose : Hs, r = Ws(t);
            s.push(a({}, e, {points: r, pose: n, scale: Ns}))
        }
        return r.createElement(Rs, i({}, o, {getHitmapId: n}), s)
    }, e.GLTFScene = class extends r.Component {
        constructor(...e) {
            super(...e), o(this, "state", {loadedModel: void 0}), o(this, "_context", void 0)
        }

        async _loadModel() {
            const {model: e} = this.props;
            if ("function" == typeof e) return e();
            if ("string" == typeof e) {
                const t = await fetch(e);
                if (!t.ok) throw new Error(`failed to fetch GLB: ${t.status}`);
                return Ha(await t.arrayBuffer())
            }
            throw new Error(`unsupported model prop: ${typeof e}`)
        }

        componentDidMount() {
            this._loadModel().then(e => {
                this.setState({loadedModel: e}), this._context && this._context.onDirty()
            }).catch(e => {
                console.error("error loading GLB model:", e)
            })
        }

        render() {
            const {loadedModel: e} = this.state;
            return e ? r.createElement(Ea.Consumer, null, t => (this._context = t, r.createElement(ka, {
                reglCommand: qs,
                drawProps: a({model: e}, this.props.children)
            }))) : null
        }
    }, e.Grid = Vs, e.Lines = cs, e.Overlay = class extends n.Component {
        constructor(...e) {
            super(...e), o(this, "_context", void 0), o(this, "state", {items: []}), o(this, "componentWillUnmount", () => {
                this._context && this._context.unregisterPaintCallback(this.paint)
            }), o(this, "paint", () => {
                const e = this._context, t = e && e.dimension, {renderItem: n, children: r} = this.props;
                if (!e || !t) return;
                const i = r.map((r, i) => {
                    const o = this.project(r.pose.position, e);
                    return n({item: r, index: i, coordinates: o, dimension: t})
                });
                this.setState({items: i})
            }), o(this, "project", (e, t) => {
                if (!t || !t.initializedData) return;
                const {dimension: n} = t, {camera: r} = t.initializedData, i = [e.x, e.y, e.z], {
                    left: o,
                    top: a,
                    width: s,
                    height: c
                } = n, u = [o, a, s, c];
                return r.toScreenCoord(u, i)
            })
        }

        componentDidMount() {
            this._context && this._context.registerPaintCallback(this.paint)
        }

        render() {
            return n.createElement(n.Fragment, null, n.createElement(Ea.Consumer, null, e => (e && (this._context = e), this.state.items)))
        }
    }, e.Points = Ks, e.Spheres = Zs, e.Text = Js, e.Triangles = Rs, e
}({}, ReactDOM, React);
//# sourceMappingURL=index.umd.js.map

export default ReglWorldview;