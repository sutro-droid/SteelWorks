/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function o(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function (e, o) {
            return !!t.call(e, o, e) !== n
        });
        if (t.nodeType) return it.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function (e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var o = "data-" + t.replace(St, "-$1").toLowerCase();
            if (n = e.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, o) {
        if (it.acceptData(e)) {
            var i, r, a = it.expando,
                s = e.nodeType,
                l = s ? it.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (o || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = V.pop() || it.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: it.noop
            }), ("object" == typeof t || "function" == typeof t) && (o ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)), r = l[u], o || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[it.camelCase(t)] = n), "string" == typeof t ? (i = r[t], null == i && (i = r[it.camelCase(t)])) : i = r, i
        }
    }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var o, i, r = e.nodeType,
                a = r ? it.cache : e,
                s = r ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (o = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in o ? t = [t] : (t = it.camelCase(t), t = t in o ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete o[t[i]];
                    if (n ? !u(o) : !it.isEmptyObject(o)) return
                }(n || (delete a[s].data, u(a[s]))) && (r ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Ft.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, o, i = 0,
            r = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (o = n[i]); i++) !t || it.nodeName(o, t) ? r.push(o) : it.merge(r, g(o, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], r) : r
    }

    function v(e) {
        At.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, o = 0; null != (n = e[o]); o++) it._data(n, "globalEval", !t || it._data(t[o], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, o, i, r = it._data(e),
                a = it._data(t, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (o = 0, i = s[n].length; i > o; o++) it.event.add(t, n, s[n][o])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }

    function T(e, t) {
        var n, o, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (o in i.events) it.removeEvent(t, o, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var o, i = it(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (o = e.getDefaultComputedStyle(i[0])) ? o.display : it.css(i[0], "display");
        return i.detach(), r
    }

    function S(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = C(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Kt.detach()), Zt[e] = n), n
    }

    function E(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, i = pn.length; i--;)
            if (t = pn[i] + n, t in e) return t;
        return o
    }

    function M(e, t) {
        for (var n, o, i, r = [], a = 0, s = e.length; s > a; a++) o = e[a], o.style && (r[a] = it._data(o, "olddisplay"), n = o.style.display, t ? (r[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && Mt(o) && (r[a] = it._data(o, "olddisplay", S(o.nodeName)))) : (i = Mt(o), (n && "none" !== n || !i) && it._data(o, "olddisplay", i ? n : it.css(o, "display"))));
        for (a = 0; s > a; a++) o = e[a], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function $(e, t, n) {
        var o = un.exec(t);
        return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
    }

    function A(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += it.css(e, n + Nt[r], !0, i)), o ? ("content" === n && (a -= it.css(e, "padding" + Nt[r], !0, i)), "margin" !== n && (a -= it.css(e, "border" + Nt[r] + "Width", !0, i))) : (a += it.css(e, "padding" + Nt[r], !0, i), "padding" !== n && (a += it.css(e, "border" + Nt[r] + "Width", !0, i)));
        return a
    }

    function D(e, t, n) {
        var o = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = en(e),
            a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = tn(e, t, r), (0 > i || null == i) && (i = e.style[t]), on.test(i)) return i;
            o = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (a ? "border" : "content"), o, r) + "px"
    }

    function j(e, t, n, o, i) {
        return new j.prototype.init(e, t, n, o, i)
    }

    function H() {
        return setTimeout(function () {
            hn = void 0
        }), hn = it.now()
    }

    function L(e, t) {
        var n, o = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Nt[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function P(e, t, n) {
        for (var o, i = (xn[t] || []).concat(xn["*"]), r = 0, a = i.length; a > r; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function F(e, t, n) {
        var o, i, r, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Mt(e),
            m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = it.css(e, "display"), c = "none" === u ? it._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (o in t)
            if (i = t[o], gn.exec(i)) {
                if (delete t[o], r = r || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[o]) continue;
                    h = !0
                }
                f[o] = m && m[o] || it.style(e, o)
            } else u = void 0;
        if (it.isEmptyObject(f)) "inline" === ("none" === u ? S(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}), r && (m.hidden = !h), h ? it(e).show() : d.done(function () {
                it(e).hide()
            }), d.done(function () {
                var t;
                it._removeData(e, "fxshow");
                for (t in f) it.style(e, t, f[t])
            });
            for (o in f) a = P(h ? m[o] : 0, o, d), o in m || (m[o] = a.start, h && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function z(e, t) {
        var n, o, i, r, a;
        for (n in e)
            if (o = it.camelCase(n), i = t[o], r = e[n], it.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), a = it.cssHooks[o], a && "expand" in a) {
                r = a.expand(r), delete e[o];
                for (n in r) n in e || (e[n] = r[n], t[n] = i)
            } else t[o] = i
    }

    function _(e, t, n) {
        var o, i, r = 0,
            a = bn.length,
            s = it.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = hn || H(), n = Math.max(0, u.startTime + u.duration - t), o = n / u.duration || 0, r = 1 - o, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: it.extend({}, t),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var o = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(o), o
                },
                stop: function (t) {
                    var n = 0,
                        o = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; o > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (z(c, u.opts.specialEasing); a > r; r++)
            if (o = bn[r].call(u, e, c, u.opts)) return o;
        return it.map(c, P, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function I(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o, i = 0,
                r = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; o = r[i++];) "+" === o.charAt(0) ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }

    function W(e, t, n, o) {
        function i(s) {
            var l;
            return r[s] = !0, it.each(e[s] || [], function (e, s) {
                var u = s(t, n, o);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var r = {},
            a = e === Bn;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }

    function q(e, t) {
        var n, o, i = it.ajaxSettings.flatOptions || {};
        for (o in t) void 0 !== t[o] && ((i[o] ? e : n || (n = {}))[o] = t[o]);
        return n && it.extend(!0, e, n), e
    }

    function O(e, t, n) {
        for (var o, i, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                o || (o = a)
            }
            r = r || o
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function R(e, t, n, o) {
        var i, r, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = u[l + " " + r] || u["* " + r], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (r = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, o) {
        var i;
        if (it.isArray(t)) it.each(t, function (t, i) {
            n || Vn.test(e) ? o(e, i) : B(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, o)
        });
        else if (n || "object" !== it.type(t)) o(e, t);
        else
            for (i in t) B(e + "[" + i + "]", t[i], n, o)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Y() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = [],
        G = V.slice,
        Q = V.concat,
        J = V.push,
        K = V.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        ot = "1.11.2",
        it = function (e, t) {
            return new it.fn.init(e, t)
        },
        rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function (e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: ot,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function (e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return it.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(it.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: V.sort,
        splice: V.splice
    }, it.extend = it.fn.extend = function () {
        var e, t, n, o, i, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (o in i) e = a[o], n = i[o], a !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, r = e && it.isArray(e) ? e : []) : r = e && it.isPlainObject(e) ? e : {}, a[o] = it.extend(u, r, n)) : void 0 !== n && (a[o] = n));
        return a
    }, it.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === it.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !it.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && it.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, o) {
            var i, r = 0,
                a = e.length,
                s = n(e);
            if (o) {
                if (s)
                    for (; a > r && (i = t.apply(e[r], o), i !== !1); r++);
                else
                    for (r in e)
                        if (i = t.apply(e[r], o), i === !1) break
            } else if (s)
                for (; a > r && (i = t.call(e[r], r, e[r]), i !== !1); r++);
            else
                for (r in e)
                    if (i = t.call(e[r], r, e[r]), i === !1) break; return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(rt, "")
        },
        makeArray: function (e, t) {
            var o = t || [];
            return null != e && (n(Object(e)) ? it.merge(o, "string" == typeof e ? [e] : e) : J.call(o, e)), o
        },
        inArray: function (e, t, n) {
            var o;
            if (t) {
                if (K) return K.call(t, e, n);
                for (o = t.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, o = 0, i = e.length; n > o;) e[i++] = t[o++];
            if (n !== n)
                for (; void 0 !== t[o];) e[i++] = t[o++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var o, i = [], r = 0, a = e.length, s = !n; a > r; r++) o = !t(e[r], r), o !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, o) {
            var i, r = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > r; r++) i = t(e[r], r, o), null != i && l.push(i);
            else
                for (r in e) i = t(e[r], r, o), null != i && l.push(i);
            return Q.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, o, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = G.call(arguments, 2), o = function () {
                return e.apply(t || this, n.concat(G.call(arguments)))
            }, o.guid = e.guid = e.guid || it.guid++, o) : void 0
        },
        now: function () {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function (e) {
            function t(e, t, n, o) {
                var i, r, a, s, l, u, d, p, h, m;
                if ((t ? t.ownerDocument || t : W) !== j && D(t), t = t || j, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!o && L) {
                    if (11 !== s && (i = yt.exec(e)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && _(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!P || !P.test(e))) {
                        if (p = d = I, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = S(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                            h = bt.test(e) && c(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return K.apply(n, h.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(lt, "$1"), t, n, o)
            }

            function n() {
                function e(n, o) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = o
                }
                var t = [];
                return e
            }

            function o(e) {
                return e[I] = !0, e
            }

            function i(e) {
                var t = j.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), o = e.length; o--;) k.attrHandle[n[o]] = t
            }

            function a(e, t) {
                var n = t && e,
                    o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (o) return o;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return o(function (t) {
                    return t = +t, o(function (n, o) {
                        for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function f(e) {
                for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
                return o
            }

            function p(e, t, n) {
                var o = t.dir,
                    i = n && "parentNode" === o,
                    r = O++;
                return t.first ? function (t, n, r) {
                    for (; t = t[o];)
                        if (1 === t.nodeType || i) return e(t, n, r)
                } : function (t, n, a) {
                    var s, l, u = [q, r];
                    if (a) {
                        for (; t = t[o];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[o];)
                            if (1 === t.nodeType || i) {
                                if (l = t[I] || (t[I] = {}), (s = l[o]) && s[0] === q && s[1] === r) return u[2] = s[2];
                                if (l[o] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function (t, n, o) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, o)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, o) {
                for (var i = 0, r = n.length; r > i; i++) t(e, n[i], o);
                return o
            }

            function g(e, t, n, o, i) {
                for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(r = e[s]) && (!n || n(r, o, i)) && (a.push(r), u && t.push(s));
                return a
            }

            function v(e, t, n, i, r, a) {
                return i && !i[I] && (i = v(i)), r && !r[I] && (r = v(r, a)), o(function (o, a, s, l) {
                    var u, c, d, f = [],
                        p = [],
                        h = a.length,
                        v = o || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !o && t ? v : g(v, f, e, s, l),
                        b = n ? r || (o ? e : h || i) ? [] : a : y;
                    if (n && n(y, b, s, l), i)
                        for (u = g(b, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = r ? et(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, o, i = e.length, r = k.relative[e[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l = p(function (e) {
                        return e === t
                    }, a, !0), u = p(function (e) {
                        return et(t, e) > -1
                    }, a, !0), c = [function (e, n, o) {
                        var i = !r && (o || n !== M) || ((t = n).nodeType ? l(e, n, o) : u(e, n, o));
                        return t = null, i
                    }]; i > s; s++)
                    if (n = k.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                            for (o = ++s; i > o && !k.relative[e[o].type]; o++);
                            return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, o > s && y(e.slice(s, o)), i > o && y(e = e.slice(o)), i > o && f(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var i = n.length > 0,
                    r = e.length > 0,
                    a = function (o, a, s, l, u) {
                        var c, d, f, p = 0,
                            h = "0",
                            m = o && [],
                            v = [],
                            y = M,
                            b = o || r && k.find.TAG("*", u),
                            x = q += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (M = a !== j && a); h !== w && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (d = 0; f = e[d++];)
                                    if (f(c, a, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = x)
                            }
                            i && ((c = !f && c) && p--, o && m.push(c))
                        }
                        if (p += h, i && h !== p) {
                            for (d = 0; f = n[d++];) f(m, v, a, s);
                            if (o) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), u && !o && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (q = x, M = y), m
                    };
                return i ? o(a) : a
            }
            var x, w, k, T, C, S, E, N, M, $, A, D, j, H, L, P, F, z, _, I = "sizzle" + 1 * new Date,
                W = e.document,
                q = 0,
                O = 0,
                R = n(),
                B = n(),
                X = n(),
                Y = function (e, t) {
                    return e === t && (A = !0), 0
                },
                U = 1 << 31,
                V = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                J = G.push,
                K = G.push,
                Z = G.slice,
                et = function (e, t) {
                    for (var n = 0, o = e.length; o > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = ot.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + ot + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                at = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ut = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ft = new RegExp(at),
                pt = new RegExp("^" + it + "$"),
                ht = {
                    ID: new RegExp("^#(" + ot + ")"),
                    CLASS: new RegExp("^\\.(" + ot + ")"),
                    TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                xt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                kt = function (e, t, n) {
                    var o = "0x" + t - 65536;
                    return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
                },
                Tt = function () {
                    D()
                };
            try {
                K.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
            } catch (Ct) {
                K = {
                    apply: G.length ? function (e, t) {
                        J.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, o = 0; e[n++] = t[o++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function (e) {
                var t, n, o = e ? e.ownerDocument || e : W;
                return o !== j && 9 === o.nodeType && o.documentElement ? (j = o, H = o.documentElement, n = o.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), L = !C(o), w.attributes = i(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function (e) {
                    return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(o.getElementsByClassName), w.getById = i(function (e) {
                    return H.appendChild(e).id = I, !o.getElementsByName || !o.getElementsByName(I).length
                }), w.getById ? (k.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function (e) {
                    var t = e.replace(wt, kt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function (e) {
                    var t = e.replace(wt, kt);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = w.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, o = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                        return o
                    }
                    return r
                }, k.find.CLASS = w.getElementsByClassName && function (e, t) {
                    return L ? t.getElementsByClassName(e) : void 0
                }, F = [], P = [], (w.qsa = vt.test(o.querySelectorAll)) && (i(function (e) {
                    H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + I + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || P.push(".#.+[+~]")
                }), i(function (e) {
                    var t = o.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                })), (w.matchesSelector = vt.test(z = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                    w.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), F.push("!=", at)
                }), P = P.length && new RegExp(P.join("|")), F = F.length && new RegExp(F.join("|")), t = vt.test(H.compareDocumentPosition), _ = t || vt.test(H.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        o = t && t.parentNode;
                    return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = t ? function (e, t) {
                    if (e === t) return A = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === o || e.ownerDocument === W && _(W, e) ? -1 : t === o || t.ownerDocument === W && _(W, t) ? 1 : $ ? et($, e) - et($, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return A = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!r || !s) return e === o ? -1 : t === o ? 1 : r ? -1 : s ? 1 : $ ? et($, e) - et($, t) : 0;
                    if (r === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[i] === u[i];) i++;
                    return i ? a(l[i], u[i]) : l[i] === W ? -1 : u[i] === W ? 1 : 0
                }, o) : j
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== j && D(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !L || F && F.test(n) || P && P.test(n))) try {
                    var o = z.call(e, n);
                    if (o || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                } catch (i) {}
                return t(n, j, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== j && D(e), _(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== j && D(e);
                var n = k.attrHandle[t.toLowerCase()],
                    o = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== o ? o : w.attributes || !L ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [],
                    o = 0,
                    i = 0;
                if (A = !w.detectDuplicates, $ = !w.sortStable && e.slice(0), e.sort(Y), A) {
                    for (; t = e[i++];) t === e[i] && (o = n.push(i));
                    for (; o--;) e.splice(n[o], 1)
                }
                return $ = null, e
            }, T = t.getText = function (e) {
                var t, n = "",
                    o = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[o++];) n += T(t);
                return n
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(wt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(wt, kt).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = R[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && R(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, n, o) {
                        return function (i) {
                            var r = t.attr(i, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(o) > -1 : "|=" === n ? r === o || r.slice(0, o.length + 1) === o + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, o, i) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === o && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (c = g[I] || (g[I] = {}), u = c[e] || [], p = u[0] === q && u[1], f = u[0] === q && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            c[e] = [q, p, f];
                                            break
                                        }
                                } else if (y && (u = (t[I] || (t[I] = {}))[e]) && u[0] === q) f = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [q, f]), d !== t)););
                                return f -= i, f === o || f % o === 0 && f / o >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, n) {
                        var i, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[I] ? r(n) : r.length > 1 ? (i = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, t) {
                            for (var o, i = r(e, n), a = i.length; a--;) o = et(e, i[a]), e[o] = !(t[o] = i[a])
                        }) : function (e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: o(function (e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(lt, "$1"));
                        return i[I] ? o(function (e, t, n, o) {
                            for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: o(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: o(function (e) {
                        return e = e.replace(wt, kt),
                            function (t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: o(function (e) {
                        return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, kt).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === H
                    },
                    focus: function (e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function (e) {
                        return gt.test(e.nodeName)
                    },
                    input: function (e) {
                        return mt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (e, t) {
                        return [t - 1]
                    }),
                    eq: u(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function (e, t, n) {
                        for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
                        return e
                    }),
                    gt: u(function (e, t, n) {
                        for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[x] = l(x);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, S = t.tokenize = function (e, n) {
                var o, i, r, a, s, l, u, c = B[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = k.preFilter; s;) {
                    (!o || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), o = !1, (i = ct.exec(s)) && (o = i.shift(), r.push({
                        value: o,
                        type: i[0].replace(lt, " ")
                    }), s = s.slice(o.length));
                    for (a in k.filter) !(i = ht[a].exec(s)) || u[a] && !(i = u[a](i)) || (o = i.shift(), r.push({
                        value: o,
                        type: a,
                        matches: i
                    }), s = s.slice(o.length));
                    if (!o) break
                }
                return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
            }, E = t.compile = function (e, t) {
                var n, o = [],
                    i = [],
                    r = X[e + " "];
                if (!r) {
                    for (t || (t = S(e)), n = t.length; n--;) r = y(t[n]), r[I] ? o.push(r) : i.push(r);
                    r = X(e, b(i, o)), r.selector = e
                }
                return r
            }, N = t.select = function (e, t, n, o) {
                var i, r, a, s, l, u = "function" == typeof e && e,
                    d = !o && S(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && L && k.relative[r[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(wt, kt), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (i = ht.needsContext.test(e) ? 0 : r.length; i-- && (a = r[i], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (o = l(a.matches[0].replace(wt, kt), bt.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(i, 1), e = o.length && f(r), !e) return K.apply(n, o), n;
                            break
                        }
                }
                return (u || E(e, d))(o, t, !L, n, bt.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = I.split("").sort(Y).join("") === I, w.detectDuplicates = !!A, D(), w.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(j.createElement("div"))
            }), i(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function (e) {
                return null == e.getAttribute("disabled")
            }) || r(tt, function (e, t, n) {
                var o;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }), t
        }(e);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    it.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? it.find.matchesSelector(o, e) ? [o] : [] : it.find.matches(e, it.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function (e) {
            var t, n = [],
                o = this,
                i = o.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (it.contains(o[t], this)) return !0
            }));
            for (t = 0; i > t; t++) it.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = it.fn.init = function (e, t) {
            var n, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (o = ht.getElementById(n[2]), o && o.parentNode) {
                    if (o.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
        };
    gt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function (e, t, n) {
            for (var o = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && o.push(i), i = i[t];
            return o
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function (e) {
            var t, n = it(e, this),
                o = n.length;
            return this.filter(function () {
                for (t = 0; o > t; t++)
                    if (it.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, o = 0, i = this.length, r = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? it.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return it.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return it.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return it.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return it.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return it.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return it.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return it.sibling(e.firstChild)
        },
        contents: function (e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function (e, t) {
        it.fn[e] = function (n, o) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = it.filter(o, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g,
        xt = {};
    it.Callbacks = function (e) {
        e = "string" == typeof e ? xt[e] || r(e) : it.extend({}, e);
        var t, n, o, i, a, s, l = [],
            u = !e.once && [],
            c = function (r) {
                for (n = e.memory && r, o = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var o = l.length;
                        ! function r(t) {
                            it.each(t, function (t, n) {
                                var o = it.type(n);
                                "function" === o ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== o && r(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = o, c(n))
                    }
                    return this
                },
                remove: function () {
                    return l && it.each(arguments, function (e, n) {
                        for (var o;
                            (o = it.inArray(n, l, o)) > -1;) l.splice(o, 1), t && (i >= o && i--, a >= o && a--)
                    }), this
                },
                has: function (e) {
                    return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], i = 0, this
                },
                disable: function () {
                    return l = u = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, n || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, n) {
                    return !l || o && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return d
    }, it.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]],
                n = "pending",
                o = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return it.Deferred(function (n) {
                            it.each(t, function (t, r) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? it.extend(e, o) : o
                    }
                },
                i = {};
            return o.pipe = o.then, it.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                o[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function () {
                    return i[r[0] + "With"](this === i ? o : this, arguments), this
                }, i[r[0] + "With"] = a.fireWith
            }), o.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, o, i = 0,
                r = G.call(arguments),
                a = r.length,
                s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : it.Deferred(),
                u = function (e, n, o) {
                    return function (i) {
                        n[e] = this, o[e] = arguments.length > 1 ? G.call(arguments) : i, o === t ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), o = new Array(a); a > i; i++) r[i] && it.isFunction(r[i].promise) ? r[i].promise().done(u(i, o, r)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(o, r), l.promise()
        }
    });
    var wt;
    it.fn.ready = function (e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
            }
        }
    }), it.ready.promise = function (t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (o) {}
            n && n.doScroll && ! function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var kt, Tt = "undefined";
    for (kt in it(nt)) break;
    nt.ownLast = "0" !== kt, nt.inlineBlockNeedsLayout = !1, it(function () {
            var e, t, n, o;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), o = ht.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(o))
        }),
        function () {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), it.acceptData = function (e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !u(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), it.fn.extend({
        data: function (e, t) {
            var n, o, i, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(r), 1 === r.nodeType && !it._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = it.camelCase(o.slice(5)), l(r, o, i[o])));
                    it._data(r, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                it.data(this, e, t)
            }) : r ? l(r, e, it.data(r, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function (e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue", o = it._data(e, t), n && (!o || it.isArray(n) ? o = it._data(e, t, it.makeArray(n)) : o.push(n)), o || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = it.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = it._queueHooks(e, t),
                a = function () {
                    it.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, a, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function () {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                it.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, o = 1,
                i = it.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --o || i.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(r[a], e + "queueHooks"), n && n.empty && (o++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Nt = ["Top", "Right", "Bottom", "Left"],
        Mt = function (e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        },
        $t = it.access = function (e, t, n, o, i, r, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== o && (i = !0, it.isFunction(o) || (a = !0), u && (a ? (t.call(e, o), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(it(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        At = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (o) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function () {
        var t, n, o = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (o.setAttribute(n, "t"), nt[t + "Bubbles"] = o.attributes[n].expando === !1);
        o = null
    }();
    var Dt = /^(?:input|select|textarea)$/i,
        jt = /^key/,
        Ht = /^(?:mouse|pointer|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        Pt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function (e, t, n, o, i) {
            var r, a, s, l, u, c, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                        return typeof it === Tt || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) r = Pt.exec(t[s]) || [], p = m = r[1], h = (r[2] || "").split(".").sort(), p && (u = it.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = it.event.special[p] || {}, d = it.extend({
                    type: p,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, o, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, o, i) {
            var r, a, s, l, u, c, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Pt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = it.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) it.event.remove(e, p + t[u], n, o, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        },
        trigger: function (t, n, o, i) {
            var r, a, s, l, u, c, d, f = [o || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = o = o || ht, 3 !== o.nodeType && 8 !== o.nodeType && !Lt.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[p] || {}, i || !u.trigger || u.trigger.apply(o, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(o)) {
                    for (l = u.delegateType || p, Lt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (o.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, r = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && it.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && it.acceptData(o) && a && o[p] && !it.isWindow(o)) {
                    c = o[a], c && (o[a] = null), it.event.triggered = p;
                    try {
                        o[p]()
                    } catch (m) {}
                    it.event.triggered = void 0, c && (o[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = it.event.fix(e);
            var t, n, o, i, r, a = [],
                s = G.call(arguments),
                l = (it._data(this, "events") || {})[e.type] || [],
                u = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, r = 0;
                        (o = i.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((it.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, o, i, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], r = 0; s > r; r++) o = t[r], n = o.selector + " ", void 0 === i[n] && (i[n] = o.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[it.expando]) return e;
            var t, n, o, i = e.type,
                r = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ht.test(i) ? this.mouseHooks : jt.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, o, i, r = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = e.target.ownerDocument || ht, i = o.documentElement, n = o.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, o) {
            var i = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            o ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ht.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var o = "on" + t;
        e.detachEvent && (typeof e[o] === Tt && (e[o] = null), e.detachEvent(o, n))
    }, it.Event = function (e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, o = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return (!i || i !== o && !it.contains(o, i)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function () {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Dt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return it.event.remove(this, "._change"), !Dt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function () {
                var o = this.ownerDocument || this,
                    i = it._data(o, t);
                i || o.addEventListener(e, n, !0), it._data(o, t, (i || 0) + 1)
            },
            teardown: function () {
                var o = this.ownerDocument || this,
                    i = it._data(o, t) - 1;
                i ? it._data(o, t, i) : (o.removeEventListener(e, n, !0), it._removeData(o, t))
            }
        }
    }), it.fn.extend({
        on: function (e, t, n, o, i) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], i);
                return this
            }
            if (null == n && null == o ? (o = t, n = t = void 0) : null == o && ("string" == typeof t ? (o = n, n = void 0) : (o = n, n = t, t = void 0)), o === !1) o = p;
            else if (!o) return this;
            return 1 === i && (a = o, o = function (e) {
                return it().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = it.guid++)), this.each(function () {
                it.event.add(this, e, o, n, t)
            })
        },
        one: function (e, t, n, o) {
            return this.on(e, t, n, o, 1)
        },
        off: function (e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, it(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                it.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                it.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        zt = / jQuery\d+="(?:null|\d+)"/g,
        _t = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"),
        It = /^\s+/,
        Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qt = /<([\w:]+)/,
        Ot = /<tbody/i,
        Rt = /<|&#?\w+;/,
        Bt = /<(?:script|style|link)/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Yt = /^$|\/(?:java|ecma)script/i,
        Ut = /^true\/(.*)/,
        Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Qt = m(ht),
        Jt = Qt.appendChild(ht.createElement("div"));
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, it.extend({
        clone: function (e, t, n) {
            var o, i, r, a, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !_t.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Jt.innerHTML = e.outerHTML, Jt.removeChild(r = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (o = g(r), s = g(e), a = 0; null != (i = s[a]); ++a) o[a] && T(i, o[a]);
            if (t)
                if (n)
                    for (s = s || g(e), o = o || g(r), a = 0; null != (i = s[a]); a++) k(i, o[a]);
                else k(e, r);
            return o = g(r, "script"), o.length > 0 && w(o, !l && g(e, "script")), o = s = i = null, r
        },
        buildFragment: function (e, t, n, o) {
            for (var i, r, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === it.type(r)) it.merge(p, r.nodeType ? [r] : r);
                    else if (Rt.test(r)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (qt.exec(r) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, s.innerHTML = c[1] + r.replace(Wt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && It.test(r) && p.push(t.createTextNode(It.exec(r)[0])), !nt.tbody)
                    for (r = "table" !== l || Ot.test(r) ? "<table>" !== c[1] || Ot.test(r) ? 0 : s : s.firstChild, i = r && r.childNodes.length; i--;) it.nodeName(u = r.childNodes[i], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(r));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), v), h = 0; r = p[h++];)
                if ((!o || -1 === it.inArray(r, o)) && (a = it.contains(r.ownerDocument, r), s = g(f.appendChild(r), "script"), a && w(s), n))
                    for (i = 0; r = s[i++];) Yt.test(r.type || "") && n.push(r);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, o, i, r, a = 0, s = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], r = i && l[i])) {
                    if (r.events)
                        for (o in r.events) c[o] ? it.event.remove(n, o) : it.removeEvent(n, o, r.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, V.push(i))
                }
        }
    }), it.fn.extend({
        text: function (e) {
            return $t(this, function (e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, o = e ? it.filter(e, this) : this, i = 0; null != (n = o[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return it.clone(this, e, t)
            })
        },
        html: function (e) {
            return $t(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(zt, "") : void 0;
                if (!("string" != typeof e || Bt.test(e) || !nt.htmlSerialize && _t.test(e) || !nt.leadingWhitespace && It.test(e) || Gt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Wt, "<$1></$2>");
                    try {
                        for (; o > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Q.apply([], e);
            var n, o, i, r, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = it.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function (n) {
                var o = c.eq(n);
                p && (e[0] = f.call(this, n, o.html())), o.domManip(e, t)
            });
            if (u && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (r = it.map(g(s, "script"), b), i = r.length; u > l; l++) o = s, l !== d && (o = it.clone(o, !0, !0), i && it.merge(r, g(o, "script"))), t.call(this[l], o, l);
                if (i)
                    for (a = r[r.length - 1].ownerDocument, it.map(r, x), l = 0; i > l; l++) o = r[l], Yt.test(o.type || "") && !it._data(o, "globalEval") && it.contains(a, o) && (o.src ? it._evalUrl && it._evalUrl(o.src) : it.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Vt, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        it.fn[e] = function (e) {
            for (var n, o = 0, i = [], r = it(e), a = r.length - 1; a >= o; o++) n = o === a ? this : this.clone(!0), it(r[o])[t](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Kt, Zt = {};
    ! function () {
        var e;
        nt.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, o;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), o = ht.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(o), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/,
        on = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
        rn = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tn = function (e, t, n) {
            var o, i, r, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), on.test(a) && nn.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function (e) {
            return e.currentStyle
        }, tn = function (e, t, n) {
            var o, i, r, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), on.test(a) && !rn.test(t) && (o = s.left, i = e.runtimeStyle, r = i && i.left, r && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = o, r && (i.left = r)), void 0 === a ? a : a + "" || "auto"
        }),
        function () {
            function t() {
                var t, n, o, i;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), o = ht.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(o))
            }
            var n, o, i, r, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], o = i && i.style, o && (o.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === o.opacity, nt.cssFloat = !!o.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === o.boxSizing || "" === o.MozBoxSizing || "" === o.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                },
                boxSizingReliable: function () {
                    return null == a && t(), a
                },
                pixelPosition: function () {
                    return null == r && t(), r
                },
                reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), it.swap = function (e, t, n, o) {
            var i, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            i = n.apply(e, o || []);
            for (r in t) e.style[r] = a[r];
            return i
        };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + Et + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + Et + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, a, s = it.camelCase(t),
                    l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = N(l, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t];
                if (r = typeof n, "string" === r && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, o))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function (e, t, n, o) {
            var i, r, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = N(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tn(e, t, o)), "normal" === r && t in fn && (r = fn[t]), "" === n || n ? (i = parseFloat(r), n === !0 || it.isNumeric(i) ? i || 0 : r) : r
        }
    }), it.each(["height", "width"], function (e, t) {
        it.cssHooks[t] = {
            get: function (e, n, o) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function () {
                    return D(e, t, o)
                }) : D(e, t, o) : void 0
            },
            set: function (e, n, o) {
                var i = o && en(e);
                return $(e, n, o ? A(e, t, o, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                o = e.currentStyle,
                i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = o && o.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(r.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || o && !o.filter) || (n.filter = an.test(r) ? r.replace(an, i) : r + " " + i)
        }
    }), it.cssHooks.marginRight = E(nt.reliableMarginRight, function (e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        it.cssHooks[e + t] = {
            expand: function (n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[e + Nt[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = $)
    }), it.fn.extend({
        css: function (e, t) {
            return $t(this, function (e, t, n) {
                var o, i, r = {},
                    a = 0;
                if (it.isArray(t)) {
                    for (o = en(e), i = t.length; i > a; a++) r[t[a]] = it.css(e, t[a], !1, o);
                    return r
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return M(this, !0)
        },
        hide: function () {
            return M(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Mt(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = j, j.prototype = {
        constructor: j,
        init: function (e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (it.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = j.prototype.init, it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [F],
        xn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    o = n.cur(),
                    i = vn.exec(t),
                    r = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    a = (it.cssNumber[e] || "px" !== r && +o) && vn.exec(it.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], i = i || [], a = +o || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + r); while (s !== (s = n.cur() / o) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +o || 0, n.unit = r, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(_, {
            tweener: function (e, t) {
                it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, o = 0, i = e.length; i > o; o++) n = e[o], xn[n] = xn[n] || [], xn[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), it.speed = function (e, t, n) {
            var o = e && "object" == typeof e ? it.extend({}, e) : {
                complete: n || !n && t || it.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !it.isFunction(t) && t
            };
            return o.duration = it.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in it.fx.speeds ? it.fx.speeds[o.duration] : it.fx.speeds._default, (null == o.queue || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                it.isFunction(o.old) && o.old.call(this), o.queue && it.dequeue(this, o.queue)
            }, o
        }, it.fn.extend({
            fadeTo: function (e, t, n, o) {
                return this.filter(Mt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, o)
            },
            animate: function (e, t, n, o) {
                var i = it.isEmptyObject(e),
                    r = it.speed(t, n, o),
                    a = function () {
                        var t = _(this, it.extend({}, e), r);
                        (i || it._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        r = it.timers,
                        a = it._data(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yn.test(i) && o(a[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                    (t || !n) && it.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = it._data(this),
                        o = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        r = it.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function (e, t) {
            var n = it.fn[t];
            it.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, o, i)
            }
        }), it.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            it.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o)
            }
        }), it.timers = [], it.fx.tick = function () {
            var e, t = it.timers,
                n = 0;
            for (hn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), hn = void 0
        }, it.fx.timer = function (e) {
            it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function () {
            mn || (mn = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function () {
            clearInterval(mn), mn = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function (e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var o = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(o)
                }
            })
        },
        function () {
            var e, t, n, o, i;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], o.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(o.getAttribute("style")), nt.hrefNormalized = "/a" === o.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var wn = /\r/g;
    it.fn.extend({
        val: function (e) {
            var t, n, o, i = this[0]; {
                if (arguments.length) return o = it.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = o ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null : [], s = r ? i + 1 : o.length, l = 0 > i ? s : r ? i : 0; s > l; l++)
                        if (n = o[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, o, i = e.options, r = it.makeArray(t), a = i.length; a--;)
                        if (o = i[a], it.inArray(it.valHooks.option.get(o), r) >= 0) try {
                            o.selected = n = !0
                        } catch (s) {
                            o.scrollHeight
                        } else o.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function () {
        it.valHooks[this] = {
            set: function (e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var kn, Tn, Cn = it.expr.attrHandle,
        Sn = /^(?:checked|selected)$/i,
        En = nt.getSetAttribute,
        Nn = nt.input;
    it.fn.extend({
        attr: function (e, t) {
            return $t(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function (e, t, n) {
            var o, i, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Tt ? it.prop(e, t, n) : (1 === r && it.isXMLDoc(e) || (t = t.toLowerCase(), o = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Tn : kn)), void 0 === n ? o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, o, i = 0,
                r = t && t.match(bt);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) o = it.propFix[n] || n, it.expr.match.bool.test(n) ? Nn && En || !Sn.test(n) ? e[o] = !1 : e[it.camelCase("default-" + n)] = e[o] = !1 : it.attr(e, n, ""), e.removeAttribute(En ? n : o)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tn = {
        set: function (e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Nn && En || !Sn.test(n) ? e.setAttribute(!En && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Cn[t] || it.find.attr;
        Cn[t] = Nn && En || !Sn.test(t) ? function (e, t, o) {
            var i, r;
            return o || (r = Cn[t], Cn[t] = i, i = null != n(e, t, o) ? t.toLowerCase() : null, Cn[t] = r), i
        } : function (e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nn && En || (it.attrHooks.value = {
        set: function (e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : kn && kn.set(e, t, n)
        }
    }), En || (kn = {
        set: function (e, t, n) {
            var o = e.getAttributeNode(n);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Cn.id = Cn.name = Cn.coords = function (e, t, n) {
        var o;
        return n ? void 0 : (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null
    }, it.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: kn.set
    }, it.attrHooks.contenteditable = {
        set: function (e, t, n) {
            kn.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function (e, t) {
        it.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Mn = /^(?:input|select|textarea|button|object)$/i,
        $n = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function (e, t) {
            return $t(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = it.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var o, i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !it.isXMLDoc(e), r && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Mn.test(e.nodeName) || $n.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function (e, t) {
        it.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function (e) {
            var t, n, o, i, r, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (r = 0; i = t[r++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        a = it.trim(o), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, o, i, r, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (r = 0; i = t[r++];)
                            for (; o.indexOf(" " + i + " ") >= 0;) o = o.replace(" " + i + " ", " ");
                        a = e ? it.trim(o) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function (n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, o = 0, i = it(this), r = e.match(bt) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Tt || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        it.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn = it.now(),
        jn = /\?/,
        Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, o = null,
            i = it.trim(t + "");
        return i && !it.trim(i.replace(Hn, function (e, t, i, r) {
            return n && t && (o = 0), 0 === o ? e : (n = i || t, o += !r - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function (t) {
        var n, o;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (o = new DOMParser, n = o.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var Ln, Pn, Fn = /#.*$/,
        zn = /([?&])_=[^&]*/,
        _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wn = /^(?:GET|HEAD)$/,
        qn = /^\/\//,
        On = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rn = {},
        Bn = {},
        Xn = "*/".concat("*");
    try {
        Pn = location.href
    } catch (Yn) {
        Pn = ht.createElement("a"), Pn.href = "", Pn = Pn.href
    }
    Ln = On.exec(Pn.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pn,
            type: "GET",
            isLocal: In.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? q(q(e, it.ajaxSettings), t) : q(it.ajaxSettings, e)
        },
        ajaxPrefilter: I(Rn),
        ajaxTransport: I(Bn),
        ajax: function (e, t) {
            function n(e, t, n, o) {
                var i, c, v, y, x, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = o || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = O(d, w, n)), y = R(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[r] = x), x = w.getResponseHeader("etag"), x && (it.etag[r] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, i = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || k) + "", i ? h.resolveWith(f, [c, k, w]) : h.rejectWith(f, [w, k, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, k]), l && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var o, i, r, a, s, l, u, c, d = it.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event,
                h = it.Deferred(),
                m = it.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = _n.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Pn) + "").replace(Fn, "").replace(qn, Ln[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (o = On.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === Ln[1] && o[2] === Ln[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), W(Rn, d, t, w), 2 === b) return w;
            l = it.event && d.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Wn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (jn.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = zn.test(r) ? r.replace(zn, "$1_=" + Dn++) : r + (jn.test(r) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (it.lastModified[r] && w.setRequestHeader("If-Modified-Since", it.lastModified[r]), it.etag[r] && w.setRequestHeader("If-None-Match", it.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (u = W(Bn, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function (e, t) {
        it[t] = function (e, n, o, i) {
            return it.isFunction(n) && (i = i || o, o = n, n = void 0), it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            })
        }
    }), it._evalUrl = function (e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function (e) {
            if (it.isFunction(e)) return this.each(function (t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(it.isFunction(e) ? function (t) {
                it(this).wrapInner(e.call(this, t))
            } : function () {
                var t = it(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = it.isFunction(e);
            return this.each(function (n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function (e) {
        return !it.expr.filters.hidden(e)
    };
    var Un = /%20/g,
        Vn = /\[\]$/,
        Gn = /\r?\n/g,
        Qn = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    it.param = function (e, t) {
        var n, o = [],
            i = function (e, t) {
                t = it.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, i);
        return o.join("&").replace(Un, "+")
    }, it.fn.extend({
        serialize: function () {
            return it.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Jn.test(this.nodeName) && !Qn.test(e) && (this.checked || !At.test(e))
            }).map(function (e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Gn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Y()
    } : X;
    var Kn = 0,
        Zn = {},
        eo = it.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!eo && "withCredentials" in eo, eo = nt.ajax = !!eo, eo && it.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function (n, o) {
                    var i, r = e.xhr(),
                        a = ++Kn;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) r[i] = e.xhrFields[i];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && r.setRequestHeader(i, n[i] + "");
                    r.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, u;
                        if (t && (i || 4 === r.readyState))
                            if (delete Zn[a], t = void 0, r.onreadystatechange = it.noop, i) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && o(s, l, u, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zn[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function (o, i) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var to = [],
        no = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = to.pop() || it.expando + "_" + Dn++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function (t, n, o) {
        var i, r, a, s = t.jsonp !== !1 && (no.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && no.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(no, "$1" + i) : t.jsonp !== !1 && (t.url += (jn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function () {
            a = arguments
        }, o.always(function () {
            e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, to.push(i)), a && it.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), it.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var o = dt.exec(e),
            i = !n && [];
        return o ? [t.createElement(o[1])] : (o = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], o.childNodes))
    };
    var oo = it.fn.load;
    it.fn.load = function (e, t, n) {
        if ("string" != typeof e && oo) return oo.apply(this, arguments);
        var o, i, r, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (o = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && it.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(o ? it("<div>").append(it.parseHTML(e)).find(o) : e)
        }).complete(n && function (e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        it.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), it.expr.filters.animated = function (e) {
        return it.grep(it.timers, function (t) {
            return e === t.elem
        }).length
    };
    var io = e.document.documentElement;
    it.offset = {
        setOffset: function (e, t, n) {
            var o, i, r, a, s, l, u, c = it.css(e, "position"),
                d = it(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), r = it.css(e, "top"), l = it.css(e, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [r, l]) > -1, u ? (o = d.position(), a = o.top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, it.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, o = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                r = i && i.ownerDocument;
            if (r) return t = r.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Tt && (o = i.getBoundingClientRect()), n = U(r), {
                top: o.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: o.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : o
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    o = this[0];
                return "fixed" === it.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(o, "marginTop", !0),
                    left: t.left - n.left - it.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || io; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || io
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function (o) {
            return $t(this, function (e, o, i) {
                var r = U(e);
                return void 0 === i ? r ? t in r ? r[t] : r.document.documentElement[o] : e[o] : void(r ? r.scrollTo(n ? it(r).scrollLeft() : i, n ? i : it(r).scrollTop()) : e[o] = i)
            }, e, o, arguments.length, null)
        }
    }), it.each(["top", "left"], function (e, t) {
        it.cssHooks[t] = E(nt.pixelPosition, function (e, n) {
            return n ? (n = tn(e, t), on.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, o) {
            it.fn[o] = function (o, i) {
                var r = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || i === !0 ? "margin" : "border");
                return $t(this, function (t, n, o) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? it.css(t, n, a) : it.style(t, n, o, a)
                }, t, r ? o : void 0, r, null)
            }
        })
    }), it.fn.size = function () {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return it
    });
    var ro = e.jQuery,
        ao = e.$;
    return it.noConflict = function (t) {
        return e.$ === it && (e.$ = ao), t && e.jQuery === it && (e.jQuery = ro), it
    }, typeof t === Tt && (e.jQuery = e.$ = it), it
}),
function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, o = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function () {
            var t = e("meta[name=csrf-token]").attr("content"),
                n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function (t, n, o) {
            var i = e.Event(n);
            return t.trigger(i, o), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (o) {
            var i, r, a, s, l, u, c, d;
            if (n.fire(o, "ajax:before")) {
                if (s = o.data("cross-domain"), l = s === t ? null : s, u = o.data("with-credentials") || null, c = o.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, o.is("form")) {
                    i = o.attr("method"), r = o.attr("action"), a = o.serializeArray();
                    var f = o.data("ujs:submit-button");
                    f && (a.push(f), o.data("ujs:submit-button", null))
                } else o.is(n.inputChangeSelector) ? (i = o.data("method"), r = o.data("url"), a = o.serialize(), o.data("params") && (a = a + "&" + o.data("params"))) : o.is(n.buttonClickSelector) ? (i = o.data("method") || "get", r = o.data("url"), a = o.serialize(), o.data("params") && (a = a + "&" + o.data("params"))) : (i = o.data("method"), r = n.href(o), a = o.data("params") || null);
                return d = {
                    type: i || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(o, "ajax:beforeSend", [e, i]) ? void o.trigger("ajax:send", e) : !1
                    },
                    success: function (e, t, n) {
                        o.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        o.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        o.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: l
                }, u && (d.xhrFields = {
                    withCredentials: u
                }), r && (d.url = r), n.ajax(d)
            }
            return !1
        },
        handleMethod: function (o) {
            var i = n.href(o),
                r = o.data("method"),
                a = o.attr("target"),
                s = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                u = e('<form method="post" action="' + i + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, o;
            n = e.is("button") ? "html" : "val", o = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), o !== t && e[n](o), e.prop("disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function (e) {
            var t, o = e.data("confirm"),
                i = !1;
            return o ? (n.fire(e, "confirm") && (i = n.confirm(o), t = n.fire(e, "confirm:complete", [i])), i && t) : !0
        },
        blankInputs: function (t, n, o) {
            var i, r, a = e(),
                s = n || "input,textarea",
                l = t.find(s);
            return l.each(function () {
                if (i = e(this), r = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val(), !r == !o) {
                    if (i.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var o = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), o !== t && e.html(o), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(o, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, o) {
        e.crossDomain || n.CSRFProtection(o)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), o.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), o.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(e(this))
    }), o.delegate(n.linkClickSelector, "click.rails", function (o) {
        var i = e(this),
            r = i.data("method"),
            a = i.data("params"),
            s = o.metaKey || o.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(o);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), i.data("remote") !== t) {
            if (s && (!r || "GET" === r) && !a) return !0;
            var l = n.handleRemote(i);
            return l === !1 ? n.enableElement(i) : l.fail(function () {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), o.delegate(n.buttonClickSelector, "click.rails", function (t) {
        var o = e(this);
        if (!n.allowAction(o)) return n.stopEverything(t);
        o.is(n.buttonDisableSelector) && n.disableFormElement(o);
        var i = n.handleRemote(o);
        return i === !1 ? n.enableFormElement(o) : i.fail(function () {
            n.enableFormElement(o)
        }), !1
    }), o.delegate(n.inputChangeSelector, "change.rails", function (t) {
        var o = e(this);
        return n.allowAction(o) ? (n.handleRemote(o), !1) : n.stopEverything(t)
    }), o.delegate(n.formSubmitSelector, "submit.rails", function (o) {
        var i, r, a = e(this),
            s = a.data("remote") !== t;
        if (!n.allowAction(a)) return n.stopEverything(o);
        if (a.attr("novalidate") == t && (i = n.blankInputs(a, n.requiredInputSelector), i && n.fire(a, "ajax:aborted:required", [i]))) return n.stopEverything(o);
        if (s) {
            if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [r]);
                return l || setTimeout(function () {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function () {
            n.disableFormElements(a)
        }, 13)
    }), o.delegate(n.formInputClickSelector, "click.rails", function (t) {
        var o = e(this);
        if (!n.allowAction(o)) return n.stopEverything(t);
        var i = o.attr("name"),
            r = i ? {
                name: i,
                value: o.val()
            } : null;
        o.closest("form").data("ujs:submit-button", r)
    }), o.delegate(n.formSubmitSelector, "ajax:send.rails", function (t) {
        this == t.target && n.disableFormElements(e(this))
    }), o.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery),
/* Javascript plotting library for jQuery, version 0.8.0.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

*/
function (e) {
    e.color = {}, e.color.make = function (t, n, o, i) {
        var r = {};
        return r.r = t || 0, r.g = n || 0, r.b = o || 0, r.a = null != i ? i : 1, r.add = function (e, t) {
            for (var n = 0; n < e.length; ++n) r[e.charAt(n)] += t;
            return r.normalize()
        }, r.scale = function (e, t) {
            for (var n = 0; n < e.length; ++n) r[e.charAt(n)] *= t;
            return r.normalize()
        }, r.toString = function () {
            return r.a >= 1 ? "rgb(" + [r.r, r.g, r.b].join(",") + ")" : "rgba(" + [r.r, r.g, r.b, r.a].join(",") + ")"
        }, r.normalize = function () {
            function e(e, t, n) {
                return e > t ? e : t > n ? n : t
            }
            return r.r = e(0, parseInt(r.r), 255), r.g = e(0, parseInt(r.g), 255), r.b = e(0, parseInt(r.b), 255), r.a = e(0, r.a, 1), r
        }, r.clone = function () {
            return e.color.make(r.r, r.b, r.g, r.a)
        }, r.normalize()
    }, e.color.extract = function (t, n) {
        var o;
        do {
            if (o = t.css(n).toLowerCase(), "" != o && "transparent" != o) break;
            t = t.parent()
        } while (!e.nodeName(t.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == o && (o = "transparent"), e.color.parse(o)
    }, e.color.parse = function (n) {
        var o, i = e.color.make;
        if (o = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return i(parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10));
        if (o = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return i(parseInt(o[1], 10), parseInt(o[2], 10), parseInt(o[3], 10), parseFloat(o[4]));
        if (o = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return i(2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3]));
        if (o = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return i(2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3]), parseFloat(o[4]));
        if (o = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return i(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
        if (o = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return i(parseInt(o[1] + o[1], 16), parseInt(o[2] + o[2], 16), parseInt(o[3] + o[3], 16));
        var r = e.trim(n).toLowerCase();
        return "transparent" == r ? i(255, 255, 255, 0) : (o = t[r] || [0, 0, 0], i(o[0], o[1], o[2]))
    };
    var t = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function (e) {
    function t(t, n) {
        var o = n.children("." + t)[0];
        if (null == o && (o = document.createElement("canvas"), o.className = t, e(o).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(n), !o.getContext)) {
            if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            o = window.G_vmlCanvasManager.initElement(o)
        }
        this.element = o;
        var i = this.context = o.getContext("2d"),
            r = window.devicePixelRatio || 1,
            a = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
        this.pixelRatio = r / a, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function n(n, i, r, a) {
        function s(e, t) {
            t = [gt].concat(t);
            for (var n = 0; n < e.length; ++n) e[n].apply(this, t)
        }

        function l() {
            for (var n = {
                    Canvas: t
                }, o = 0; o < a.length; ++o) {
                var i = a[o];
                i.init(gt, n), i.options && e.extend(!0, it, i.options)
            }
        }

        function u(t) {
            e.extend(!0, it, t), null == it.xaxis.color && (it.xaxis.color = e.color.parse(it.grid.color).scale("a", .22).toString()), null == it.yaxis.color && (it.yaxis.color = e.color.parse(it.grid.color).scale("a", .22).toString()), null == it.xaxis.tickColor && (it.xaxis.tickColor = it.grid.tickColor || it.xaxis.color), null == it.yaxis.tickColor && (it.yaxis.tickColor = it.grid.tickColor || it.yaxis.color), null == it.grid.borderColor && (it.grid.borderColor = it.grid.color), null == it.grid.tickColor && (it.grid.tickColor = e.color.parse(it.grid.color).scale("a", .22).toString());
            var o, i, r, a = {
                style: n.css("font-style"),
                size: Math.round(.8 * (+n.css("font-size").replace("px", "") || 13)),
                variant: n.css("font-variant"),
                weight: n.css("font-weight"),
                family: n.css("font-family")
            };
            for (a.lineHeight = 1.15 * a.size, r = it.xaxes.length || 1, o = 0; r > o; ++o) i = it.xaxes[o], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, it.xaxis, i), it.xaxes[o] = i, i.font && (i.font = e.extend({}, a, i.font), i.font.color || (i.font.color = i.color));
            for (r = it.yaxes.length || 1, o = 0; r > o; ++o) i = it.yaxes[o], i && !i.tickColor && (i.tickColor = i.color), i = e.extend(!0, {}, it.yaxis, i), it.yaxes[o] = i, i.font && (i.font = e.extend({}, a, i.font), i.font.color || (i.font.color = i.color));
            for (it.xaxis.noTicks && null == it.xaxis.ticks && (it.xaxis.ticks = it.xaxis.noTicks), it.yaxis.noTicks && null == it.yaxis.ticks && (it.yaxis.ticks = it.yaxis.noTicks), it.x2axis && (it.xaxes[1] = e.extend(!0, {}, it.xaxis, it.x2axis), it.xaxes[1].position = "top"), it.y2axis && (it.yaxes[1] = e.extend(!0, {}, it.yaxis, it.y2axis), it.yaxes[1].position = "right"), it.grid.coloredAreas && (it.grid.markings = it.grid.coloredAreas), it.grid.coloredAreasColor && (it.grid.markingsColor = it.grid.coloredAreasColor), it.lines && e.extend(!0, it.series.lines, it.lines), it.points && e.extend(!0, it.series.points, it.points), it.bars && e.extend(!0, it.series.bars, it.bars), null != it.shadowSize && (it.series.shadowSize = it.shadowSize), null != it.highlightColor && (it.series.highlightColor = it.highlightColor), o = 0; o < it.xaxes.length; ++o) g(ct, o + 1).options = it.xaxes[o];
            for (o = 0; o < it.yaxes.length; ++o) g(dt, o + 1).options = it.yaxes[o];
            for (var l in mt) it.hooks[l] && it.hooks[l].length && (mt[l] = mt[l].concat(it.hooks[l]));
            s(mt.processOptions, [it])
        }

        function c(e) {
            ot = d(e), v(), y()
        }

        function d(t) {
            for (var n = [], o = 0; o < t.length; ++o) {
                var i = e.extend(!0, {}, it.series);
                null != t[o].data ? (i.data = t[o].data, delete t[o].data, e.extend(!0, i, t[o]), t[o].data = i.data) : i.data = t[o], n.push(i)
            }
            return n
        }

        function f(e, t) {
            var n = e[t + "axis"];
            return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
        }

        function p() {
            return e.grep(ct.concat(dt), function (e) {
                return e
            })
        }

        function h(e) {
            var t, n, o = {};
            for (t = 0; t < ct.length; ++t) n = ct[t], n && n.used && (o["x" + n.n] = n.c2p(e.left));
            for (t = 0; t < dt.length; ++t) n = dt[t], n && n.used && (o["y" + n.n] = n.c2p(e.top));
            return void 0 !== o.x1 && (o.x = o.x1), void 0 !== o.y1 && (o.y = o.y1), o
        }

        function m(e) {
            var t, n, o, i = {};
            for (t = 0; t < ct.length; ++t)
                if (n = ct[t], n && n.used && (o = "x" + n.n, null == e[o] && 1 == n.n && (o = "x"), null != e[o])) {
                    i.left = n.p2c(e[o]);
                    break
                }
            for (t = 0; t < dt.length; ++t)
                if (n = dt[t], n && n.used && (o = "y" + n.n, null == e[o] && 1 == n.n && (o = "y"), null != e[o])) {
                    i.top = n.p2c(e[o]);
                    break
                }
            return i
        }

        function g(t, n) {
            return t[n - 1] || (t[n - 1] = {
                n: n,
                direction: t == ct ? "x" : "y",
                options: e.extend(!0, {}, t == ct ? it.xaxis : it.yaxis)
            }), t[n - 1]
        }

        function v() {
            var t, n = ot.length,
                o = -1;
            for (t = 0; t < ot.length; ++t) {
                var i = ot[t].color;
                null != i && (n--, "number" == typeof i && i > o && (o = i))
            }
            o >= n && (n = o + 1);
            var r, a = [],
                s = it.colors,
                l = s.length,
                u = 0;
            for (t = 0; n > t; t++) r = e.color.parse(s[t % l] || "#666"), t % l == 0 && t && (u = u >= 0 ? .5 > u ? -u - .2 : 0 : -u), a[t] = r.scale("rgb", 1 + u);
            var c, d = 0;
            for (t = 0; t < ot.length; ++t) {
                if (c = ot[t], null == c.color ? (c.color = a[d].toString(), ++d) : "number" == typeof c.color && (c.color = a[c.color].toString()), null == c.lines.show) {
                    var p, h = !0;
                    for (p in c)
                        if (c[p] && c[p].show) {
                            h = !1;
                            break
                        }
                    h && (c.lines.show = !0)
                }
                null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = g(ct, f(c, "x")), c.yaxis = g(dt, f(c, "y"))
            }
        }

        function y() {
            function t(e, t, n) {
                t < e.datamin && t != -y && (e.datamin = t), n > e.datamax && n != y && (e.datamax = n)
            }
            var n, o, i, r, a, l, u, c, d, f, h, m, g = Number.POSITIVE_INFINITY,
                v = Number.NEGATIVE_INFINITY,
                y = Number.MAX_VALUE;
            for (e.each(p(), function (e, t) {
                    t.datamin = g, t.datamax = v, t.used = !1
                }), n = 0; n < ot.length; ++n) a = ot[n], a.datapoints = {
                points: []
            }, s(mt.processRawData, [a, a.data, a.datapoints]);
            for (n = 0; n < ot.length; ++n) {
                if (a = ot[n], h = a.data, m = a.datapoints.format, !m) {
                    if (m = [], m.push({
                            x: !0,
                            number: !0,
                            required: !0
                        }), m.push({
                            y: !0,
                            number: !0,
                            required: !0
                        }), a.bars.show || a.lines.show && a.lines.fill) {
                        var b = !!(a.bars.show && a.bars.zero || a.lines.show && a.lines.zero);
                        m.push({
                            y: !0,
                            number: !0,
                            required: !1,
                            defaultValue: 0,
                            autoscale: b
                        }), a.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
                    }
                    a.datapoints.format = m
                }
                if (null == a.datapoints.pointsize) {
                    a.datapoints.pointsize = m.length, u = a.datapoints.pointsize, l = a.datapoints.points;
                    var x = a.lines.show && a.lines.steps;
                    for (a.xaxis.used = a.yaxis.used = !0, o = i = 0; o < h.length; ++o, i += u) {
                        f = h[o];
                        var w = null == f;
                        if (!w)
                            for (r = 0; u > r; ++r) c = f[r], d = m[r], d && (d.number && null != c && (c = +c, isNaN(c) ? c = null : 1 / 0 == c ? c = y : c == -1 / 0 && (c = -y)), null == c && (d.required && (w = !0), null != d.defaultValue && (c = d.defaultValue))), l[i + r] = c;
                        if (w)
                            for (r = 0; u > r; ++r) c = l[i + r], null != c && (d = m[r], d.x && t(a.xaxis, c, c), d.y && t(a.yaxis, c, c)), l[i + r] = null;
                        else if (x && i > 0 && null != l[i - u] && l[i - u] != l[i] && l[i - u + 1] != l[i + 1]) {
                            for (r = 0; u > r; ++r) l[i + u + r] = l[i + r];
                            l[i + 1] = l[i - u + 1], i += u
                        }
                    }
                }
            }
            for (n = 0; n < ot.length; ++n) a = ot[n], s(mt.processDatapoints, [a, a.datapoints]);
            for (n = 0; n < ot.length; ++n) {
                a = ot[n], l = a.datapoints.points, u = a.datapoints.pointsize, m = a.datapoints.format;
                var k = g,
                    T = g,
                    C = v,
                    S = v;
                for (o = 0; o < l.length; o += u)
                    if (null != l[o])
                        for (r = 0; u > r; ++r) c = l[o + r], d = m[r], d && d.autoscale !== !1 && c != y && c != -y && (d.x && (k > c && (k = c), c > C && (C = c)), d.y && (T > c && (T = c), c > S && (S = c)));
                if (a.bars.show) {
                    var E;
                    switch (a.bars.align) {
                    case "left":
                        E = 0;
                        break;
                    case "right":
                        E = -a.bars.barWidth;
                        break;
                    case "center":
                        E = -a.bars.barWidth / 2;
                        break;
                    default:
                        throw new Error("Invalid bar alignment: " + a.bars.align)
                    }
                    a.bars.horizontal ? (T += E, S += E + a.bars.barWidth) : (k += E, C += E + a.bars.barWidth)
                }
                t(a.xaxis, k, C), t(a.yaxis, T, S)
            }
            e.each(p(), function (e, t) {
                t.datamin == g && (t.datamin = null), t.datamax == v && (t.datamax = null)
            })
        }

        function b() {
            n.css("padding", 0).children(":not(.flot-base,.flot-overlay)").remove(), "static" == n.css("position") && n.css("position", "relative"), rt = new t("flot-base", n), at = new t("flot-overlay", n), lt = rt.context, ut = at.context, st = e(at.element).unbind();
            var o = n.data("plot");
            o && (o.shutdown(), at.clear()), n.data("plot", gt)
        }

        function x() {
            it.grid.hoverable && (st.mousemove(X), st.bind("mouseleave", Y)), it.grid.clickable && st.click(U), s(mt.bindEvents, [st])
        }

        function w() {
            yt && clearTimeout(yt), st.unbind("mousemove", X), st.unbind("mouseleave", Y), st.unbind("click", U), s(mt.shutdown, [st])
        }

        function k(e) {
            function t(e) {
                return e
            }
            var n, o, i = e.options.transform || t,
                r = e.options.inverseTransform;
            "x" == e.direction ? (n = e.scale = pt / Math.abs(i(e.max) - i(e.min)), o = Math.min(i(e.max), i(e.min))) : (n = e.scale = ht / Math.abs(i(e.max) - i(e.min)), n = -n, o = Math.max(i(e.max), i(e.min))), e.p2c = i == t ? function (e) {
                return (e - o) * n
            } : function (e) {
                return (i(e) - o) * n
            }, e.c2p = r ? function (e) {
                return r(o + e / n)
            } : function (e) {
                return o + e / n
            }
        }

        function T(e) {
            for (var t = e.options, n = e.ticks || [], o = t.labelWidth || 0, i = t.labelHeight || 0, r = e.direction + "Axis " + e.direction + e.n + "Axis", a = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + r, s = t.font || "flot-tick-label tickLabel", l = 0; l < n.length; ++l) {
                var u = n[l];
                if (u.label) {
                    var c = rt.getTextInfo(a, u.label, s);
                    null == t.labelWidth && (o = Math.max(o, c.width)), null == t.labelHeight && (i = Math.max(i, c.height))
                }
            }
            e.labelWidth = Math.ceil(o), e.labelHeight = Math.ceil(i)
        }

        function C(t) {
            var n, o = t.labelWidth,
                i = t.labelHeight,
                r = t.options.position,
                a = t.options.tickLength,
                s = it.grid.axisMargin,
                l = it.grid.labelMargin,
                u = "x" == t.direction ? ct : dt,
                c = e.grep(u, function (e) {
                    return e && e.options.position == r && e.reserveSpace
                });
            if (e.inArray(t, c) == c.length - 1 && (s = 0), null == a) {
                var d = e.grep(u, function (e) {
                    return e && e.reserveSpace
                });
                n = 0 == e.inArray(t, d), a = n ? "full" : 5
            }
            isNaN(+a) || (l += +a), "x" == t.direction ? (i += l, "bottom" == r ? (ft.bottom += i + s, t.box = {
                top: rt.height - ft.bottom,
                height: i
            }) : (t.box = {
                top: ft.top + s,
                height: i
            }, ft.top += i + s)) : (o += l, "left" == r ? (t.box = {
                left: ft.left + s,
                width: o
            }, ft.left += o + s) : (ft.right += o + s, t.box = {
                left: rt.width - ft.right,
                width: o
            })), t.position = r, t.tickLength = a, t.box.padding = l, t.innermost = n
        }

        function S(e) {
            "x" == e.direction ? (e.box.left = ft.left - e.labelWidth / 2, e.box.width = rt.width - ft.left - ft.right + e.labelWidth) : (e.box.top = ft.top - e.labelHeight / 2, e.box.height = rt.height - ft.bottom - ft.top + e.labelHeight)
        }

        function E() {
            var t, n = it.grid.minBorderMargin,
                o = {
                    x: 0,
                    y: 0
                };
            if (null == n)
                for (n = 0, t = 0; t < ot.length; ++t) n = Math.max(n, 2 * (ot[t].points.radius + ot[t].points.lineWidth / 2));
            o.x = o.y = Math.ceil(n), e.each(p(), function (e, t) {
                var n = t.direction;
                t.reserveSpace && (o[n] = Math.ceil(Math.max(o[n], ("x" == n ? t.labelWidth : t.labelHeight) / 2)))
            }), ft.left = Math.max(o.x, ft.left), ft.right = Math.max(o.x, ft.right), ft.top = Math.max(o.y, ft.top), ft.bottom = Math.max(o.y, ft.bottom)
        }

        function N() {
            var t, n = p(),
                o = it.grid.show;
            for (var i in ft) {
                var r = it.grid.margin || 0;
                ft[i] = "number" == typeof r ? r : r[i] || 0
            }
            s(mt.processOffset, [ft]);
            for (var i in ft) ft[i] += "object" == typeof it.grid.borderWidth ? o ? it.grid.borderWidth[i] : 0 : o ? it.grid.borderWidth : 0;
            if (e.each(n, function (e, t) {
                    t.show = t.options.show, null == t.show && (t.show = t.used), t.reserveSpace = t.show || t.options.reserveSpace, M(t)
                }), o) {
                var a = e.grep(n, function (e) {
                    return e.reserveSpace
                });
                for (e.each(a, function (e, t) {
                        $(t), A(t), D(t, t.ticks), T(t)
                    }), t = a.length - 1; t >= 0; --t) C(a[t]);
                E(), e.each(a, function (e, t) {
                    S(t)
                })
            }
            pt = rt.width - ft.left - ft.right, ht = rt.height - ft.bottom - ft.top, e.each(n, function (e, t) {
                k(t)
            }), o && F(), R()
        }

        function M(e) {
            var t = e.options,
                n = +(null != t.min ? t.min : e.datamin),
                o = +(null != t.max ? t.max : e.datamax),
                i = o - n;
            if (0 == i) {
                var r = 0 == o ? 1 : .01;
                null == t.min && (n -= r), (null == t.max || null != t.min) && (o += r)
            } else {
                var a = t.autoscaleMargin;
                null != a && (null == t.min && (n -= i * a, 0 > n && null != e.datamin && e.datamin >= 0 && (n = 0)), null == t.max && (o += i * a, o > 0 && null != e.datamax && e.datamax <= 0 && (o = 0)))
            }
            e.min = n, e.max = o
        }

        function $(t) {
            var n, i = t.options;
            n = "number" == typeof i.ticks && i.ticks > 0 ? i.ticks : .3 * Math.sqrt("x" == t.direction ? rt.width : rt.height);
            var r = (t.max - t.min) / n,
                a = -Math.floor(Math.log(r) / Math.LN10),
                s = i.tickDecimals;
            null != s && a > s && (a = s);
            var l, u = Math.pow(10, -a),
                c = r / u;
            if (1.5 > c ? l = 1 : 3 > c ? (l = 2, c > 2.25 && (null == s || s >= a + 1) && (l = 2.5, ++a)) : l = 7.5 > c ? 5 : 10, l *= u, null != i.minTickSize && l < i.minTickSize && (l = i.minTickSize), t.delta = r, t.tickDecimals = Math.max(0, null != s ? s : a), t.tickSize = i.tickSize || l, "time" == i.mode && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
            if (t.tickGenerator || (t.tickGenerator = function (e) {
                    var t, n = [],
                        i = o(e.min, e.tickSize),
                        r = 0,
                        a = Number.NaN;
                    do t = a, a = i + r * e.tickSize, n.push(a), ++r; while (a < e.max && a != t);
                    return n
                }, t.tickFormatter = function (e, t) {
                    var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                        o = "" + Math.round(e * n) / n;
                    if (null != t.tickDecimals) {
                        var i = o.indexOf("."),
                            r = -1 == i ? 0 : o.length - i - 1;
                        if (r < t.tickDecimals) return (r ? o : o + ".") + ("" + n).substr(1, t.tickDecimals - r)
                    }
                    return o
                }), e.isFunction(i.tickFormatter) && (t.tickFormatter = function (e, t) {
                    return "" + i.tickFormatter(e, t)
                }), null != i.alignTicksWithAxis) {
                var d = ("x" == t.direction ? ct : dt)[i.alignTicksWithAxis - 1];
                if (d && d.used && d != t) {
                    var f = t.tickGenerator(t);
                    if (f.length > 0 && (null == i.min && (t.min = Math.min(t.min, f[0])), null == i.max && f.length > 1 && (t.max = Math.max(t.max, f[f.length - 1]))), t.tickGenerator = function (e) {
                            var t, n, o = [];
                            for (n = 0; n < d.ticks.length; ++n) t = (d.ticks[n].v - d.min) / (d.max - d.min), t = e.min + t * (e.max - e.min), o.push(t);
                            return o
                        }, !t.mode && null == i.tickDecimals) {
                        var p = Math.max(0, -Math.floor(Math.log(t.delta) / Math.LN10) + 1),
                            h = t.tickGenerator(t);
                        h.length > 1 && /\..*0$/.test((h[1] - h[0]).toFixed(p)) || (t.tickDecimals = p)
                    }
                }
            }
        }

        function A(t) {
            var n = t.options.ticks,
                o = [];
            null == n || "number" == typeof n && n > 0 ? o = t.tickGenerator(t) : n && (o = e.isFunction(n) ? n(t) : n);
            var i, r;
            for (t.ticks = [], i = 0; i < o.length; ++i) {
                var a = null,
                    s = o[i];
                "object" == typeof s ? (r = +s[0], s.length > 1 && (a = s[1])) : r = +s, null == a && (a = t.tickFormatter(r, t)), isNaN(r) || t.ticks.push({
                    v: r,
                    label: a
                })
            }
        }

        function D(e, t) {
            e.options.autoscaleMargin && t.length > 0 && (null == e.options.min && (e.min = Math.min(e.min, t[0].v)), null == e.options.max && t.length > 1 && (e.max = Math.max(e.max, t[t.length - 1].v)))
        }

        function j() {
            rt.clear(), s(mt.drawBackground, [lt]);
            var e = it.grid;
            e.show && e.backgroundColor && L(), e.show && !e.aboveData && P();
            for (var t = 0; t < ot.length; ++t) s(mt.drawSeries, [lt, ot[t]]), z(ot[t]);
            s(mt.draw, [lt]), e.show && e.aboveData && P(), rt.render()
        }

        function H(e, t) {
            for (var n, o, i, r, a = p(), s = 0; s < a.length; ++s)
                if (n = a[s], n.direction == t && (r = t + n.n + "axis", e[r] || 1 != n.n || (r = t + "axis"), e[r])) {
                    o = e[r].from, i = e[r].to;
                    break
                }
            if (e[r] || (n = "x" == t ? ct[0] : dt[0], o = e[t + "1"], i = e[t + "2"]), null != o && null != i && o > i) {
                var l = o;
                o = i, i = l
            }
            return {
                from: o,
                to: i,
                axis: n
            }
        }

        function L() {
            lt.save(), lt.translate(ft.left, ft.top), lt.fillStyle = nt(it.grid.backgroundColor, ht, 0, "rgba(255, 255, 255, 0)"), lt.fillRect(0, 0, pt, ht), lt.restore()
        }

        function P() {
            var t, n, o, i;
            lt.save(), lt.translate(ft.left, ft.top);
            var r = it.grid.markings;
            if (r)
                for (e.isFunction(r) && (n = gt.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, r = r(n)), t = 0; t < r.length; ++t) {
                    var a = r[t],
                        s = H(a, "x"),
                        l = H(a, "y");
                    null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), s.to < s.axis.min || s.from > s.axis.max || l.to < l.axis.min || l.from > l.axis.max || (s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), (s.from != s.to || l.from != l.to) && (s.from = s.axis.p2c(s.from), s.to = s.axis.p2c(s.to), l.from = l.axis.p2c(l.from), l.to = l.axis.p2c(l.to), s.from == s.to || l.from == l.to ? (lt.beginPath(), lt.strokeStyle = a.color || it.grid.markingsColor, lt.lineWidth = a.lineWidth || it.grid.markingsLineWidth, lt.moveTo(s.from, l.from), lt.lineTo(s.to, l.to), lt.stroke()) : (lt.fillStyle = a.color || it.grid.markingsColor, lt.fillRect(s.from, l.to, s.to - s.from, l.from - l.to))))
                }
            n = p(), o = it.grid.borderWidth;
            for (var u = 0; u < n.length; ++u) {
                var c, d, f, h, m = n[u],
                    g = m.box,
                    v = m.tickLength;
                if (m.show && 0 != m.ticks.length) {
                    for (lt.lineWidth = 1, "x" == m.direction ? (c = 0, d = "full" == v ? "top" == m.position ? 0 : ht : g.top - ft.top + ("top" == m.position ? g.height : 0)) : (d = 0, c = "full" == v ? "left" == m.position ? 0 : pt : g.left - ft.left + ("left" == m.position ? g.width : 0)), m.innermost || (lt.strokeStyle = m.options.color, lt.beginPath(), f = h = 0, "x" == m.direction ? f = pt + 1 : h = ht + 1, 1 == lt.lineWidth && ("x" == m.direction ? d = Math.floor(d) + .5 : c = Math.floor(c) + .5), lt.moveTo(c, d), lt.lineTo(c + f, d + h), lt.stroke()), lt.strokeStyle = m.options.tickColor, lt.beginPath(), t = 0; t < m.ticks.length; ++t) {
                        var y = m.ticks[t].v;
                        f = h = 0, isNaN(y) || y < m.min || y > m.max || "full" == v && ("object" == typeof o && o[m.position] > 0 || o > 0) && (y == m.min || y == m.max) || ("x" == m.direction ? (c = m.p2c(y), h = "full" == v ? -ht : v, "top" == m.position && (h = -h)) : (d = m.p2c(y), f = "full" == v ? -pt : v, "left" == m.position && (f = -f)), 1 == lt.lineWidth && ("x" == m.direction ? c = Math.floor(c) + .5 : d = Math.floor(d) + .5), lt.moveTo(c, d), lt.lineTo(c + f, d + h))
                    }
                    lt.stroke()
                }
            }
            o && (i = it.grid.borderColor, "object" == typeof o || "object" == typeof i ? ("object" != typeof o && (o = {
                top: o,
                right: o,
                bottom: o,
                left: o
            }), "object" != typeof i && (i = {
                top: i,
                right: i,
                bottom: i,
                left: i
            }), o.top > 0 && (lt.strokeStyle = i.top, lt.lineWidth = o.top, lt.beginPath(), lt.moveTo(0 - o.left, 0 - o.top / 2), lt.lineTo(pt, 0 - o.top / 2), lt.stroke()), o.right > 0 && (lt.strokeStyle = i.right, lt.lineWidth = o.right, lt.beginPath(), lt.moveTo(pt + o.right / 2, 0 - o.top), lt.lineTo(pt + o.right / 2, ht), lt.stroke()), o.bottom > 0 && (lt.strokeStyle = i.bottom, lt.lineWidth = o.bottom, lt.beginPath(), lt.moveTo(pt + o.right, ht + o.bottom / 2), lt.lineTo(0, ht + o.bottom / 2), lt.stroke()), o.left > 0 && (lt.strokeStyle = i.left, lt.lineWidth = o.left, lt.beginPath(), lt.moveTo(0 - o.left / 2, ht + o.bottom), lt.lineTo(0 - o.left / 2, 0), lt.stroke())) : (lt.lineWidth = o, lt.strokeStyle = it.grid.borderColor, lt.strokeRect(-o / 2, -o / 2, pt + o, ht + o))), lt.restore()
        }

        function F() {
            e.each(p(), function (e, t) {
                if (t.show && 0 != t.ticks.length) {
                    var n, o, i, r, a, s = t.box,
                        l = t.direction + "Axis " + t.direction + t.n + "Axis",
                        u = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + l,
                        c = t.options.font || "flot-tick-label tickLabel";
                    rt.removeText(u);
                    for (var d = 0; d < t.ticks.length; ++d) n = t.ticks[d], !n.label || n.v < t.min || n.v > t.max || ("x" == t.direction ? (r = "center", o = ft.left + t.p2c(n.v), "bottom" == t.position ? i = s.top + s.padding : (i = s.top + s.height - s.padding, a = "bottom")) : (a = "middle", i = ft.top + t.p2c(n.v), "left" == t.position ? (o = s.left + s.width - s.padding, r = "right") : o = s.left + s.padding), rt.addText(u, o, i, n.label, c, null, r, a))
                }
            })
        }

        function z(e) {
            e.lines.show && _(e), e.bars.show && q(e), e.points.show && I(e)
        }

        function _(e) {
            function t(e, t, n, o, i) {
                var r = e.points,
                    a = e.pointsize,
                    s = null,
                    l = null;
                lt.beginPath();
                for (var u = a; u < r.length; u += a) {
                    var c = r[u - a],
                        d = r[u - a + 1],
                        f = r[u],
                        p = r[u + 1];
                    if (null != c && null != f) {
                        if (p >= d && d < i.min) {
                            if (p < i.min) continue;
                            c = (i.min - d) / (p - d) * (f - c) + c, d = i.min
                        } else if (d >= p && p < i.min) {
                            if (d < i.min) continue;
                            f = (i.min - d) / (p - d) * (f - c) + c, p = i.min
                        }
                        if (d >= p && d > i.max) {
                            if (p > i.max) continue;
                            c = (i.max - d) / (p - d) * (f - c) + c, d = i.max
                        } else if (p >= d && p > i.max) {
                            if (d > i.max) continue;
                            f = (i.max - d) / (p - d) * (f - c) + c, p = i.max
                        }
                        if (f >= c && c < o.min) {
                            if (f < o.min) continue;
                            d = (o.min - c) / (f - c) * (p - d) + d, c = o.min
                        } else if (c >= f && f < o.min) {
                            if (c < o.min) continue;
                            p = (o.min - c) / (f - c) * (p - d) + d, f = o.min
                        }
                        if (c >= f && c > o.max) {
                            if (f > o.max) continue;
                            d = (o.max - c) / (f - c) * (p - d) + d, c = o.max
                        } else if (f >= c && f > o.max) {
                            if (c > o.max) continue;
                            p = (o.max - c) / (f - c) * (p - d) + d, f = o.max
                        }(c != s || d != l) && lt.moveTo(o.p2c(c) + t, i.p2c(d) + n), s = f, l = p, lt.lineTo(o.p2c(f) + t, i.p2c(p) + n)
                    }
                }
                lt.stroke()
            }

            function n(e, t, n) {
                for (var o = e.points, i = e.pointsize, r = Math.min(Math.max(0, n.min), n.max), a = 0, s = !1, l = 1, u = 0, c = 0;;) {
                    if (i > 0 && a > o.length + i) break;
                    a += i;
                    var d = o[a - i],
                        f = o[a - i + l],
                        p = o[a],
                        h = o[a + l];
                    if (s) {
                        if (i > 0 && null != d && null == p) {
                            c = a, i = -i, l = 2;
                            continue
                        }
                        if (0 > i && a == u + i) {
                            lt.fill(), s = !1, i = -i, l = 1, a = u = c + i;
                            continue
                        }
                    }
                    if (null != d && null != p) {
                        if (p >= d && d < t.min) {
                            if (p < t.min) continue;
                            f = (t.min - d) / (p - d) * (h - f) + f, d = t.min
                        } else if (d >= p && p < t.min) {
                            if (d < t.min) continue;
                            h = (t.min - d) / (p - d) * (h - f) + f, p = t.min
                        }
                        if (d >= p && d > t.max) {
                            if (p > t.max) continue;
                            f = (t.max - d) / (p - d) * (h - f) + f, d = t.max
                        } else if (p >= d && p > t.max) {
                            if (d > t.max) continue;
                            h = (t.max - d) / (p - d) * (h - f) + f, p = t.max
                        }
                        if (s || (lt.beginPath(), lt.moveTo(t.p2c(d), n.p2c(r)), s = !0), f >= n.max && h >= n.max) lt.lineTo(t.p2c(d), n.p2c(n.max)), lt.lineTo(t.p2c(p), n.p2c(n.max));
                        else if (f <= n.min && h <= n.min) lt.lineTo(t.p2c(d), n.p2c(n.min)), lt.lineTo(t.p2c(p), n.p2c(n.min));
                        else {
                            var m = d,
                                g = p;
                            h >= f && f < n.min && h >= n.min ? (d = (n.min - f) / (h - f) * (p - d) + d, f = n.min) : f >= h && h < n.min && f >= n.min && (p = (n.min - f) / (h - f) * (p - d) + d, h = n.min), f >= h && f > n.max && h <= n.max ? (d = (n.max - f) / (h - f) * (p - d) + d, f = n.max) : h >= f && h > n.max && f <= n.max && (p = (n.max - f) / (h - f) * (p - d) + d, h = n.max), d != m && lt.lineTo(t.p2c(m), n.p2c(f)), lt.lineTo(t.p2c(d), n.p2c(f)), lt.lineTo(t.p2c(p), n.p2c(h)), p != g && (lt.lineTo(t.p2c(p), n.p2c(h)), lt.lineTo(t.p2c(g), n.p2c(h)))
                        }
                    }
                }
            }
            lt.save(), lt.translate(ft.left, ft.top), lt.lineJoin = "round";
            var o = e.lines.lineWidth,
                i = e.shadowSize;
            if (o > 0 && i > 0) {
                lt.lineWidth = i, lt.strokeStyle = "rgba(0,0,0,0.1)";
                var r = Math.PI / 18;
                t(e.datapoints, Math.sin(r) * (o / 2 + i / 2), Math.cos(r) * (o / 2 + i / 2), e.xaxis, e.yaxis), lt.lineWidth = i / 2, t(e.datapoints, Math.sin(r) * (o / 2 + i / 4), Math.cos(r) * (o / 2 + i / 4), e.xaxis, e.yaxis)
            }
            lt.lineWidth = o, lt.strokeStyle = e.color;
            var a = O(e.lines, e.color, 0, ht);
            a && (lt.fillStyle = a, n(e.datapoints, e.xaxis, e.yaxis)), o > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis), lt.restore()
        }

        function I(e) {
            function t(e, t, n, o, i, r, a, s) {
                for (var l = e.points, u = e.pointsize, c = 0; c < l.length; c += u) {
                    var d = l[c],
                        f = l[c + 1];
                    null == d || d < r.min || d > r.max || f < a.min || f > a.max || (lt.beginPath(), d = r.p2c(d), f = a.p2c(f) + o, "circle" == s ? lt.arc(d, f, t, 0, i ? Math.PI : 2 * Math.PI, !1) : s(lt, d, f, t, i), lt.closePath(), n && (lt.fillStyle = n, lt.fill()), lt.stroke())
                }
            }
            lt.save(), lt.translate(ft.left, ft.top);
            var n = e.points.lineWidth,
                o = e.shadowSize,
                i = e.points.radius,
                r = e.points.symbol;
            if (0 == n && (n = 1e-4), n > 0 && o > 0) {
                var a = o / 2;
                lt.lineWidth = a, lt.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, i, null, a + a / 2, !0, e.xaxis, e.yaxis, r), lt.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, i, null, a / 2, !0, e.xaxis, e.yaxis, r)
            }
            lt.lineWidth = n, lt.strokeStyle = e.color, t(e.datapoints, i, O(e.points, e.color), 0, !1, e.xaxis, e.yaxis, r), lt.restore()
        }

        function W(e, t, n, o, i, r, a, s, l, u, c, d) {
            var f, p, h, m, g, v, y, b, x;
            c ? (b = v = y = !0, g = !1, f = n, p = e, m = t + o, h = t + i, f > p && (x = p, p = f, f = x, g = !0, v = !1)) : (g = v = y = !0, b = !1, f = e + o, p = e + i, h = n, m = t, h > m && (x = m, m = h, h = x, b = !0, y = !1)), p < s.min || f > s.max || m < l.min || h > l.max || (f < s.min && (f = s.min, g = !1), p > s.max && (p = s.max, v = !1), h < l.min && (h = l.min, b = !1), m > l.max && (m = l.max, y = !1), f = s.p2c(f), h = l.p2c(h), p = s.p2c(p), m = l.p2c(m), a && (u.beginPath(), u.moveTo(f, h), u.lineTo(f, m), u.lineTo(p, m), u.lineTo(p, h), u.fillStyle = a(h, m), u.fill()), d > 0 && (g || v || y || b) && (u.beginPath(), u.moveTo(f, h + r), g ? u.lineTo(f, m + r) : u.moveTo(f, m + r), y ? u.lineTo(p, m + r) : u.moveTo(p, m + r), v ? u.lineTo(p, h + r) : u.moveTo(p, h + r), b ? u.lineTo(f, h + r) : u.moveTo(f, h + r), u.stroke()))
        }

        function q(e) {
            function t(t, n, o, i, r, a, s) {
                for (var l = t.points, u = t.pointsize, c = 0; c < l.length; c += u) null != l[c] && W(l[c], l[c + 1], l[c + 2], n, o, i, r, a, s, lt, e.bars.horizontal, e.bars.lineWidth)
            }
            lt.save(), lt.translate(ft.left, ft.top), lt.lineWidth = e.bars.lineWidth, lt.strokeStyle = e.color;
            var n;
            switch (e.bars.align) {
            case "left":
                n = 0;
                break;
            case "right":
                n = -e.bars.barWidth;
                break;
            case "center":
                n = -e.bars.barWidth / 2;
                break;
            default:
                throw new Error("Invalid bar alignment: " + e.bars.align)
            }
            var o = e.bars.fill ? function (t, n) {
                return O(e.bars, e.color, t, n)
            } : null;
            t(e.datapoints, n, n + e.bars.barWidth, 0, o, e.xaxis, e.yaxis), lt.restore()
        }

        function O(t, n, o, i) {
            var r = t.fill;
            if (!r) return null;
            if (t.fillColor) return nt(t.fillColor, o, i, n);
            var a = e.color.parse(n);
            return a.a = "number" == typeof r ? r : .4, a.normalize(), a.toString()
        }

        function R() {
            if (n.find(".legend").remove(), it.legend.show) {
                for (var t, o, i = [], r = [], a = !1, s = it.legend.labelFormatter, l = 0; l < ot.length; ++l) t = ot[l], t.label && (o = s ? s(t.label, t) : t.label, o && r.push({
                    label: o,
                    color: t.color
                }));
                if (it.legend.sorted)
                    if (e.isFunction(it.legend.sorted)) r.sort(it.legend.sorted);
                    else if ("reverse" == it.legend.sorted) r.reverse();
                else {
                    var u = "descending" != it.legend.sorted;
                    r.sort(function (e, t) {
                        return e.label == t.label ? 0 : e.label < t.label != u ? 1 : -1
                    })
                }
                for (var l = 0; l < r.length; ++l) {
                    var c = r[l];
                    l % it.legend.noColumns == 0 && (a && i.push("</tr>"), i.push("<tr>"), a = !0), i.push('<td class="legendColorBox"><div style="border:1px solid ' + it.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + c.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + c.label + "</td>")
                }
                if (a && i.push("</tr>"), 0 != i.length) {
                    var d = '<table style="font-size:smaller;color:' + it.grid.color + '">' + i.join("") + "</table>";
                    if (null != it.legend.container) e(it.legend.container).html(d);
                    else {
                        var f = "",
                            p = it.legend.position,
                            h = it.legend.margin;
                        null == h[0] && (h = [h, h]), "n" == p.charAt(0) ? f += "top:" + (h[1] + ft.top) + "px;" : "s" == p.charAt(0) && (f += "bottom:" + (h[1] + ft.bottom) + "px;"), "e" == p.charAt(1) ? f += "right:" + (h[0] + ft.right) + "px;" : "w" == p.charAt(1) && (f += "left:" + (h[0] + ft.left) + "px;");
                        var m = e('<div class="legend">' + d.replace('style="', 'style="position:absolute;' + f + ";") + "</div>").appendTo(n);
                        if (0 != it.legend.backgroundOpacity) {
                            var g = it.legend.backgroundColor;
                            null == g && (g = it.grid.backgroundColor, g = g && "string" == typeof g ? e.color.parse(g) : e.color.extract(m, "background-color"), g.a = 1, g = g.toString());
                            var v = m.children();
                            e('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + f + "background-color:" + g + ';"> </div>').prependTo(m).css("opacity", it.legend.backgroundOpacity)
                        }
                    }
                }
            }
        }

        function B(e, t, n) {
            var o, i, r, a = it.grid.mouseActiveRadius,
                s = a * a + 1,
                l = null;
            for (o = ot.length - 1; o >= 0; --o)
                if (n(ot[o])) {
                    var u = ot[o],
                        c = u.xaxis,
                        d = u.yaxis,
                        f = u.datapoints.points,
                        p = c.c2p(e),
                        h = d.c2p(t),
                        m = a / c.scale,
                        g = a / d.scale;
                    if (r = u.datapoints.pointsize, c.options.inverseTransform && (m = Number.MAX_VALUE), d.options.inverseTransform && (g = Number.MAX_VALUE), u.lines.show || u.points.show)
                        for (i = 0; i < f.length; i += r) {
                            var v = f[i],
                                y = f[i + 1];
                            if (null != v && !(v - p > m || -m > v - p || y - h > g || -g > y - h)) {
                                var b = Math.abs(c.p2c(v) - e),
                                    x = Math.abs(d.p2c(y) - t),
                                    w = b * b + x * x;
                                s > w && (s = w, l = [o, i / r])
                            }
                        }
                    if (u.bars.show && !l) {
                        var k = "left" == u.bars.align ? 0 : -u.bars.barWidth / 2,
                            T = k + u.bars.barWidth;
                        for (i = 0; i < f.length; i += r) {
                            var v = f[i],
                                y = f[i + 1],
                                C = f[i + 2];
                            null != v && (ot[o].bars.horizontal ? p <= Math.max(C, v) && p >= Math.min(C, v) && h >= y + k && y + T >= h : p >= v + k && v + T >= p && h >= Math.min(C, y) && h <= Math.max(C, y)) && (l = [o, i / r])
                        }
                    }
                }
            return l ? (o = l[0], i = l[1], r = ot[o].datapoints.pointsize, {
                datapoint: ot[o].datapoints.points.slice(i * r, (i + 1) * r),
                dataIndex: i,
                series: ot[o],
                seriesIndex: o
            }) : null
        }

        function X(e) {
            it.grid.hoverable && V("plothover", e, function (e) {
                return 0 != e.hoverable
            })
        }

        function Y(e) {
            it.grid.hoverable && V("plothover", e, function () {
                return !1
            })
        }

        function U(e) {
            V("plotclick", e, function (e) {
                return 0 != e.clickable
            })
        }

        function V(e, t, o) {
            var i = st.offset(),
                r = t.pageX - i.left - ft.left,
                a = t.pageY - i.top - ft.top,
                s = h({
                    left: r,
                    top: a
                });
            s.pageX = t.pageX, s.pageY = t.pageY;
            var l = B(r, a, o);
            if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + i.left + ft.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + i.top + ft.top, 10)), it.grid.autoHighlight) {
                for (var u = 0; u < vt.length; ++u) {
                    var c = vt[u];
                    c.auto != e || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || K(c.series, c.point)
                }
                l && J(l.series, l.datapoint, e)
            }
            n.trigger(e, [s, l])
        }

        function G() {
            var e = it.interaction.redrawOverlayInterval;
            return -1 == e ? void Q() : void(yt || (yt = setTimeout(Q, e)))
        }

        function Q() {
            yt = null, ut.save(), at.clear(), ut.translate(ft.left, ft.top);
            var e, t;
            for (e = 0; e < vt.length; ++e) t = vt[e], t.series.bars.show ? tt(t.series, t.point) : et(t.series, t.point);
            ut.restore(), s(mt.drawOverlay, [ut])
        }

        function J(e, t, n) {
            if ("number" == typeof e && (e = ot[e]), "number" == typeof t) {
                var o = e.datapoints.pointsize;
                t = e.datapoints.points.slice(o * t, o * (t + 1))
            }
            var i = Z(e, t); - 1 == i ? (vt.push({
                series: e,
                point: t,
                auto: n
            }), G()) : n || (vt[i].auto = !1)
        }

        function K(e, t) {
            if (null == e && null == t) return vt = [], void G();
            if ("number" == typeof e && (e = ot[e]), "number" == typeof t) {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1))
            }
            var o = Z(e, t); - 1 != o && (vt.splice(o, 1), G())
        }

        function Z(e, t) {
            for (var n = 0; n < vt.length; ++n) {
                var o = vt[n];
                if (o.series == e && o.point[0] == t[0] && o.point[1] == t[1]) return n
            }
            return -1
        }

        function et(t, n) {
            var o = n[0],
                i = n[1],
                r = t.xaxis,
                a = t.yaxis,
                s = "string" == typeof t.highlightColor ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString();
            if (!(o < r.min || o > r.max || i < a.min || i > a.max)) {
                var l = t.points.radius + t.points.lineWidth / 2;
                ut.lineWidth = l, ut.strokeStyle = s;
                var u = 1.5 * l;
                o = r.p2c(o), i = a.p2c(i), ut.beginPath(), "circle" == t.points.symbol ? ut.arc(o, i, u, 0, 2 * Math.PI, !1) : t.points.symbol(ut, o, i, u, !1), ut.closePath(), ut.stroke()
            }
        }

        function tt(t, n) {
            var o = "string" == typeof t.highlightColor ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString(),
                i = o,
                r = "left" == t.bars.align ? 0 : -t.bars.barWidth / 2;
            ut.lineWidth = t.bars.lineWidth, ut.strokeStyle = o, W(n[0], n[1], n[2] || 0, r, r + t.bars.barWidth, 0, function () {
                return i
            }, t.xaxis, t.yaxis, ut, t.bars.horizontal, t.bars.lineWidth)
        }

        function nt(t, n, o, i) {
            if ("string" == typeof t) return t;
            for (var r = lt.createLinearGradient(0, o, 0, n), a = 0, s = t.colors.length; s > a; ++a) {
                var l = t.colors[a];
                if ("string" != typeof l) {
                    var u = e.color.parse(i);
                    null != l.brightness && (u = u.scale("rgb", l.brightness)), null != l.opacity && (u.a *= l.opacity), l = u.toString()
                }
                r.addColorStop(a / (s - 1), l)
            }
            return r
        }
        var ot = [],
            it = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {
                    redrawOverlayInterval: 1e3 / 60
                },
                hooks: {}
            },
            rt = null,
            at = null,
            st = null,
            lt = null,
            ut = null,
            ct = [],
            dt = [],
            ft = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            pt = 0,
            ht = 0,
            mt = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            gt = this;
        gt.setData = c, gt.setupGrid = N, gt.draw = j, gt.getPlaceholder = function () {
            return n
        }, gt.getCanvas = function () {
            return rt.element
        }, gt.getPlotOffset = function () {
            return ft
        }, gt.width = function () {
            return pt
        }, gt.height = function () {
            return ht
        }, gt.offset = function () {
            var e = st.offset();
            return e.left += ft.left, e.top += ft.top, e
        }, gt.getData = function () {
            return ot
        }, gt.getAxes = function () {
            var t = {};
            return e.each(ct.concat(dt), function (e, n) {
                n && (t[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
            }), t
        }, gt.getXAxes = function () {
            return ct
        }, gt.getYAxes = function () {
            return dt
        }, gt.c2p = h, gt.p2c = m, gt.getOptions = function () {
            return it
        }, gt.highlight = J, gt.unhighlight = K, gt.triggerRedrawOverlay = G, gt.pointOffset = function (e) {
            return {
                left: parseInt(ct[f(e, "x") - 1].p2c(+e.x) + ft.left, 10),
                top: parseInt(dt[f(e, "y") - 1].p2c(+e.y) + ft.top, 10)
            }
        }, gt.shutdown = w, gt.resize = function () {
            var e = n.width(),
                t = n.height();
            rt.resize(e, t), at.resize(e, t)
        }, gt.hooks = mt, l(gt), u(r), b(), c(i), N(), j(), x();
        var vt = [],
            yt = null
    }

    function o(e, t) {
        return t * Math.floor(e / t)
    }
    var i = Object.prototype.hasOwnProperty;
    t.prototype.resize = function (e, t) {
        if (0 >= e || 0 >= t) throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
        var n = this.element,
            o = this.context,
            i = this.pixelRatio;
        this.width != e && (n.width = e * i, n.style.width = e + "px", this.width = e), this.height != t && (n.height = t * i, n.style.height = t + "px", this.height = t), o.restore(), o.save(), o.scale(i, i)
    }, t.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height)
    }, t.prototype.render = function () {
        var e = this._textCache;
        for (var t in e)
            if (i.call(e, t)) {
                var n = this.getTextLayer(t),
                    o = e[t];
                n.hide();
                for (var r in o)
                    if (i.call(o, r)) {
                        var a = o[r];
                        for (var s in a)
                            if (i.call(a, s)) {
                                var l = a[s];
                                l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (delete a[s], l.rendered && l.element.detach())
                            }
                    }
                n.show()
            }
    }, t.prototype.getTextLayer = function (t) {
        var n = this.text[t];
        return null == n && (null == this.textContainer && (this.textContainer = e("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), n = this.text[t] = e("<div></div>").addClass(t).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), n
    }, t.prototype.getTextInfo = function (t, n, o) {
        var i, r, a, s;
        if (n = "" + n, i = "object" == typeof o ? o.style + " " + o.variant + " " + o.weight + " " + o.size + "px/" + o.lineHeight + "px " + o.family : o, r = this._textCache[t], null == r && (r = this._textCache[t] = {}), a = r[i], null == a && (a = r[i] = {}), s = a[n], null == s) {
            var l = e("<div></div>").html(n).css({
                position: "absolute",
                top: -9999
            }).appendTo(this.getTextLayer(t));
            "object" == typeof o ? l.css({
                font: i,
                color: o.color
            }) : "string" == typeof o && l.addClass(o), s = a[n] = {
                active: !1,
                rendered: !1,
                element: l,
                width: l.outerWidth(!0),
                height: l.outerHeight(!0)
            }, l.detach()
        }
        return s
    }, t.prototype.addText = function (e, t, n, o, i, r, a, s) {
        var l = this.getTextInfo(e, o, i, r);
        l.active = !0, "center" == a ? t -= l.width / 2 : "right" == a && (t -= l.width), "middle" == s ? n -= l.height / 2 : "bottom" == s && (n -= l.height), l.element.css({
            top: Math.round(n),
            left: Math.round(t)
        })
    }, t.prototype.removeText = function (e, t, n, o) {
        if (null == t) {
            var r = this._textCache[e];
            if (null != r)
                for (var a in r)
                    if (i.call(r, a)) {
                        var s = r[a];
                        for (var l in s) i.call(s, l) && (s[l].active = !1)
                    }
        } else this.getTextInfo(e, t, n, o).active = !1
    }, e.plot = function (t, o, i) {
        var r = new n(e(t), o, i, e.plot.plugins);
        return r
    }, e.plot.version = "0.8.0", e.plot.plugins = [], e.fn.plot = function (t, n) {
        return this.each(function () {
            e.plot(this, t, n)
        })
    }
}(jQuery),
/* Pretty handling of time axes.

Copyright (c) 2007-2013 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/
function (e) {
    function t(e, t) {
        return t * Math.floor(e / t)
    }

    function n(e, t, n, o) {
        if ("function" == typeof e.strftime) return e.strftime(t);
        var i = function (e, t) {
                return e = "" + e, t = "" + (null == t ? "0" : t), 1 == e.length ? t + e : e
            },
            r = [],
            a = !1,
            s = e.getHours(),
            l = 12 > s;
        null == n && (n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == o && (o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
        var u;
        u = s > 12 ? s - 12 : 0 == s ? 12 : s;
        for (var c = 0; c < t.length; ++c) {
            var d = t.charAt(c);
            if (a) {
                switch (d) {
                case "a":
                    d = "" + o[e.getDay()];
                    break;
                case "b":
                    d = "" + n[e.getMonth()];
                    break;
                case "d":
                    d = i(e.getDate());
                    break;
                case "e":
                    d = i(e.getDate(), " ");
                    break;
                case "H":
                    d = i(s);
                    break;
                case "I":
                    d = i(u);
                    break;
                case "l":
                    d = i(u, " ");
                    break;
                case "m":
                    d = i(e.getMonth() + 1);
                    break;
                case "M":
                    d = i(e.getMinutes());
                    break;
                case "q":
                    d = "" + (Math.floor(e.getMonth() / 3) + 1);
                    break;
                case "S":
                    d = i(e.getSeconds());
                    break;
                case "y":
                    d = i(e.getFullYear() % 100);
                    break;
                case "Y":
                    d = "" + e.getFullYear();
                    break;
                case "p":
                    d = l ? "am" : "pm";
                    break;
                case "P":
                    d = l ? "AM" : "PM";
                    break;
                case "w":
                    d = "" + e.getDay()
                }
                r.push(d), a = !1
            } else "%" == d ? a = !0 : r.push(d)
        }
        return r.join("")
    }

    function o(e) {
        function t(e, t, n, o) {
            e[t] = function () {
                return n[o].apply(n, arguments)
            }
        }
        var n = {
            date: e
        };
        void 0 != e.strftime && t(n, "strftime", e, "strftime"), t(n, "getTime", e, "getTime"), t(n, "setTime", e, "setTime");
        for (var o = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], i = 0; i < o.length; i++) t(n, "get" + o[i], e, "getUTC" + o[i]), t(n, "set" + o[i], e, "setUTC" + o[i]);
        return n
    }

    function i(e, t) {
        if ("browser" == t.timezone) return new Date(e);
        if (t.timezone && "utc" != t.timezone) {
            if ("undefined" != typeof timezoneJS && "undefined" != typeof timezoneJS.Date) {
                var n = new timezoneJS.Date;
                return n.setTimezone(t.timezone), n.setTime(e), n
            }
            return o(new Date(e))
        }
        return o(new Date(e))
    }

    function r(o) {
        o.hooks.processDatapoints.push(function (o) {
            e.each(o.getAxes(), function (e, o) {
                var r = o.options;
                "time" == r.mode && (o.tickGenerator = function (e) {
                    var n = [],
                        o = i(e.min, r),
                        a = 0,
                        l = r.tickSize && "quarter" === r.tickSize[1] || r.minTickSize && "quarter" === r.minTickSize[1] ? c : u;
                    null != r.minTickSize && (a = "number" == typeof r.tickSize ? r.tickSize : r.minTickSize[0] * s[r.minTickSize[1]]);
                    for (var d = 0; d < l.length - 1 && !(e.delta < (l[d][0] * s[l[d][1]] + l[d + 1][0] * s[l[d + 1][1]]) / 2 && l[d][0] * s[l[d][1]] >= a); ++d);
                    var f = l[d][0],
                        p = l[d][1];
                    if ("year" == p) {
                        if (null != r.minTickSize && "year" == r.minTickSize[1]) f = Math.floor(r.minTickSize[0]);
                        else {
                            var h = Math.pow(10, Math.floor(Math.log(e.delta / s.year) / Math.LN10)),
                                m = e.delta / s.year / h;
                            f = 1.5 > m ? 1 : 3 > m ? 2 : 7.5 > m ? 5 : 10, f *= h
                        }
                        1 > f && (f = 1)
                    }
                    e.tickSize = r.tickSize || [f, p];
                    var g = e.tickSize[0];
                    p = e.tickSize[1];
                    var v = g * s[p];
                    "second" == p ? o.setSeconds(t(o.getSeconds(), g)) : "minute" == p ? o.setMinutes(t(o.getMinutes(), g)) : "hour" == p ? o.setHours(t(o.getHours(), g)) : "month" == p ? o.setMonth(t(o.getMonth(), g)) : "quarter" == p ? o.setMonth(3 * t(o.getMonth() / 3, g)) : "year" == p && o.setFullYear(t(o.getFullYear(), g)), o.setMilliseconds(0), v >= s.minute ? o.setSeconds(0) : v >= s.hour ? o.setMinutes(0) : v >= s.day ? o.setHours(0) : v >= 4 * s.day ? o.setDate(1) : v >= 2 * s.month ? o.setMonth(t(o.getMonth(), 3)) : v >= 2 * s.quarter ? o.setMonth(t(o.getMonth(), 6)) : v >= s.year && o.setMonth(0);
                    var y, b = 0,
                        x = Number.NaN;
                    do
                        if (y = x, x = o.getTime(), n.push(x), "month" == p || "quarter" == p)
                            if (1 > g) {
                                o.setDate(1);
                                var w = o.getTime();
                                o.setMonth(o.getMonth() + ("quarter" == p ? 3 : 1));
                                var k = o.getTime();
                                o.setTime(x + b * s.hour + (k - w) * g), b = o.getHours(), o.setHours(0)
                            } else o.setMonth(o.getMonth() + g * ("quarter" == p ? 3 : 1));
                    else "year" == p ? o.setFullYear(o.getFullYear() + g) : o.setTime(x + v); while (x < e.max && x != y);
                    return n
                }, o.tickFormatter = function (e, t) {
                    var o = i(e, t.options);
                    if (null != r.timeformat) return n(o, r.timeformat, r.monthNames, r.dayNames);
                    var a, l = t.options.tickSize && "quarter" == t.options.tickSize[1] || t.options.minTickSize && "quarter" == t.options.minTickSize[1],
                        u = t.tickSize[0] * s[t.tickSize[1]],
                        c = t.max - t.min,
                        d = r.twelveHourClock ? " %p" : "",
                        f = r.twelveHourClock ? "%I" : "%H";
                    a = u < s.minute ? f + ":%M:%S" + d : u < s.day ? c < 2 * s.day ? f + ":%M" + d : "%b %d " + f + ":%M" + d : u < s.month ? "%b %d" : l && u < s.quarter || !l && u < s.year ? c < s.year ? "%b" : "%b %Y" : l && u < s.year ? c < s.year ? "Q%q" : "Q%q %Y" : "%Y";
                    var p = n(o, a, r.monthNames, r.dayNames);
                    return p
                })
            })
        })
    }
    var a = {
            xaxis: {
                timezone: null,
                timeformat: null,
                twelveHourClock: !1,
                monthNames: null
            }
        },
        s = {
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            month: 2592e6,
            quarter: 7776e6,
            year: 525949.2 * 60 * 1e3
        },
        l = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]],
        u = l.concat([[3, "month"], [6, "month"], [1, "year"]]),
        c = l.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
    e.plot.plugins.push({
        init: r,
        options: a,
        name: "time",
        version: "1.0"
    }), e.plot.formatDate = n
}(jQuery),
function (e, t, n) {
    function o(t, n) {
        this.bodyOverflowX, this.callbacks = {
            hide: [],
            show: []
        }, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, l, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
    }

    function i(t, n) {
        var o = !0;
        return e.each(t, function (e) {
            return "undefined" == typeof n[e] || t[e] !== n[e] ? (o = !1, !1) : void 0
        }), o
    }

    function r() {
        return !c && u
    }

    function a() {
        var e = n.body || n.documentElement,
            t = e.style,
            o = "transition";
        if ("string" == typeof t[o]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], o = o.charAt(0).toUpperCase() + o.substr(1);
        for (var i = 0; i < v.length; i++)
            if ("string" == typeof t[v[i] + o]) return !0;
        return !1
    }
    var s = "tooltipster",
        l = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function () {},
            functionBefore: function (e, t) {
                t()
            },
            functionReady: function () {},
            functionAfter: function () {},
            hideOnClick: !1,
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            positionTrackerCallback: function () {
                "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
            },
            restoration: "current",
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
    o.prototype = {
        _init: function () {
            var t = this;
            if (n.querySelector) {
                var o = null;
                void 0 === t.$el.data("tooltipster-initialTitle") && (o = t.$el.attr("title"), void 0 === o && (o = null), t.$el.data("tooltipster-initialTitle", o)), t._content_set(null !== t.options.content ? t.options.content : o);
                var i = t.options.functionInit.call(t.$el, t.$el, t.Content);
                "undefined" != typeof i && t._content_set(i), t.$el.removeAttr("title").addClass("tooltipstered"), !u && t.options.iconDesktop || u && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.$elProxy = t.options.iconCloning ? t.options.icon.clone(!0) : t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function () {
                    (!r() || t.options.touchDevices) && (t.mouseIsOverProxy = !0, t._show())
                }).on("mouseleave." + t.namespace, function () {
                    (!r() || t.options.touchDevices) && (t.mouseIsOverProxy = !1)
                }), u && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function () {
                    t._showNow()
                })) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function () {
                    (!r() || t.options.touchDevices) && t._show()
                })
            }
        },
        _show: function () {
            var e = this;
            "shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function () {
                ("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
            }, e.options.delay) : e._showNow())
        },
        _showNow: function (n) {
            var o = this;
            o.options.functionBefore.call(o.$el, o.$el, function () {
                if (o.enabled && null !== o.Content) {
                    n && o.callbacks.show.push(n), o.callbacks.hide = [], clearTimeout(o.timerShow), o.timerShow = null, clearTimeout(o.timerHide), o.timerHide = null, o.options.onlyOne && e(".tooltipstered").not(o.$el).each(function (t, n) {
                        var o = e(n),
                            i = o.data("tooltipster-ns");
                        e.each(i, function (e, t) {
                            var n = o.data(t),
                                i = n.status(),
                                r = n.option("autoClose");
                            "hidden" !== i && "disappearing" !== i && r && n.hide()
                        })
                    });
                    var i = function () {
                        o.Status = "shown", e.each(o.callbacks.show, function (e, t) {
                            t.call(o.$el)
                        }), o.callbacks.show = []
                    };
                    if ("hidden" !== o.Status) {
                        var r = 0;
                        "disappearing" === o.Status ? (o.Status = "appearing", a() ? (o.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + o.options.animation + "-show"), o.options.speed > 0 && o.$tooltip.delay(o.options.speed), o.$tooltip.queue(i)) : o.$tooltip.stop().fadeIn(i)) : "shown" === o.Status && i()
                    } else {
                        o.Status = "appearing";
                        var r = o.options.speed;
                        o.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
                        var s = "tooltipster-" + o.options.animation,
                            l = "-webkit-transition-duration: " + o.options.speed + "ms; -webkit-animation-duration: " + o.options.speed + "ms; -moz-transition-duration: " + o.options.speed + "ms; -moz-animation-duration: " + o.options.speed + "ms; -o-transition-duration: " + o.options.speed + "ms; -o-animation-duration: " + o.options.speed + "ms; -ms-transition-duration: " + o.options.speed + "ms; -ms-animation-duration: " + o.options.speed + "ms; transition-duration: " + o.options.speed + "ms; animation-duration: " + o.options.speed + "ms;",
                            c = o.options.minWidth ? "min-width:" + Math.round(o.options.minWidth) + "px;" : "",
                            d = o.options.maxWidth ? "max-width:" + Math.round(o.options.maxWidth) + "px;" : "",
                            f = o.options.interactive ? "pointer-events: auto;" : "";
                        if (o.$tooltip = e('<div class="tooltipster-base ' + o.options.theme + '" style="' + c + " " + d + " " + f + " " + l + '"><div class="tooltipster-content"></div></div>'), a() && o.$tooltip.addClass(s), o._content_insert(), o.$tooltip.appendTo("body"), o.reposition(), o.options.functionReady.call(o.$el, o.$el, o.$tooltip), a() ? (o.$tooltip.addClass(s + "-show"), o.options.speed > 0 && o.$tooltip.delay(o.options.speed), o.$tooltip.queue(i)) : o.$tooltip.css("display", "none").fadeIn(o.options.speed, i), o._interval_set(), e(t).on("scroll." + o.namespace + " resize." + o.namespace, function () {
                                o.reposition()
                            }), o.options.autoClose)
                            if (e("body").off("." + o.namespace), "hover" == o.options.trigger) {
                                if (u && setTimeout(function () {
                                        e("body").on("touchstart." + o.namespace, function () {
                                            o.hide()
                                        })
                                    }, 0), o.options.interactive) {
                                    u && o.$tooltip.on("touchstart." + o.namespace, function (e) {
                                        e.stopPropagation()
                                    });
                                    var p = null;
                                    o.$elProxy.add(o.$tooltip).on("mouseleave." + o.namespace + "-autoClose", function () {
                                        clearTimeout(p), p = setTimeout(function () {
                                            o.hide()
                                        }, o.options.interactiveTolerance)
                                    }).on("mouseenter." + o.namespace + "-autoClose", function () {
                                        clearTimeout(p)
                                    })
                                } else o.$elProxy.on("mouseleave." + o.namespace + "-autoClose", function () {
                                    o.hide()
                                });
                                o.options.hideOnClick && o.$elProxy.on("click." + o.namespace + "-autoClose", function () {
                                    o.hide()
                                })
                            } else "click" == o.options.trigger && (setTimeout(function () {
                                e("body").on("click." + o.namespace + " touchstart." + o.namespace, function () {
                                    o.hide()
                                })
                            }, 0), o.options.interactive && o.$tooltip.on("click." + o.namespace + " touchstart." + o.namespace, function (e) {
                                e.stopPropagation()
                            }))
                    }
                    o.options.timer > 0 && (o.timerHide = setTimeout(function () {
                        o.timerHide = null, o.hide()
                    }, o.options.timer + r))
                }
            })
        },
        _interval_set: function () {
            var t = this;
            t.checkInterval = setInterval(function () {
                if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length)("shown" == t.Status || "appearing" == t.Status) && t.hide(), t._interval_cancel();
                else if (t.options.positionTracker) {
                    var n = t._repositionInfo(t.$elProxy),
                        o = !1;
                    i(n.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? i(n.position, t.elProxyPosition.position) && (o = !0) : i(n.offset, t.elProxyPosition.offset) && (o = !0)), o || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
                }
            }, 200)
        },
        _interval_cancel: function () {
            clearInterval(this.checkInterval), this.checkInterval = null
        },
        _content_set: function (e) {
            "object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
        },
        _content_insert: function () {
            var e = this,
                t = this.$tooltip.find(".tooltipster-content");
            "string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
        },
        _update: function (e) {
            var t = this;
            t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (a() ? (t.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("tooltipster-content-changing"), setTimeout(function () {
                "hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function () {
                    "hidden" !== t.Status && t.$tooltip.css({
                        "-webkit-transition": t.options.speed + "ms",
                        "-moz-transition": t.options.speed + "ms",
                        "-o-transition": t.options.speed + "ms",
                        "-ms-transition": t.options.speed + "ms",
                        transition: t.options.speed + "ms"
                    })
                }, t.options.speed))
            }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function () {
                "hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
            }))) : t.hide()
        },
        _repositionInfo: function (e) {
            return {
                dimension: {
                    height: e.outerHeight(!1),
                    width: e.outerWidth(!1)
                },
                offset: e.offset(),
                position: {
                    left: parseInt(e.css("left")),
                    top: parseInt(e.css("top"))
                }
            }
        },
        hide: function (n) {
            var o = this;
            n && o.callbacks.hide.push(n), o.callbacks.show = [], clearTimeout(o.timerShow), o.timerShow = null, clearTimeout(o.timerHide), o.timerHide = null;
            var i = function () {
                e.each(o.callbacks.hide, function (e, t) {
                    t.call(o.$el)
                }), o.callbacks.hide = []
            };
            if ("shown" == o.Status || "appearing" == o.Status) {
                o.Status = "disappearing";
                var r = function () {
                    o.Status = "hidden", "object" == typeof o.Content && null !== o.Content && o.Content.detach(), o.$tooltip.remove(), o.$tooltip = null, e(t).off("." + o.namespace), e("body").off("." + o.namespace).css("overflow-x", o.bodyOverflowX), e("body").off("." + o.namespace), o.$elProxy.off("." + o.namespace + "-autoClose"), o.options.functionAfter.call(o.$el, o.$el), i()
                };
                a() ? (o.$tooltip.clearQueue().removeClass("tooltipster-" + o.options.animation + "-show").addClass("tooltipster-dying"), o.options.speed > 0 && o.$tooltip.delay(o.options.speed), o.$tooltip.queue(r)) : o.$tooltip.stop().fadeOut(o.options.speed, r)
            } else "hidden" == o.Status && i();
            return o
        },
        show: function (e) {
            return this._showNow(e), this
        },
        update: function (e) {
            return this.content(e)
        },
        content: function (e) {
            return "undefined" == typeof e ? this.Content : (this._update(e), this)
        },
        reposition: function () {
            function n() {
                var n = e(t).scrollLeft();
                0 > M - n && (r = M - n, M = n), M + l - n > a && (r = M - (a + n - l), M = a + n - l)
            }

            function o(n, o) {
                s.offset.top - e(t).scrollTop() - u - D - 12 < 0 && o.indexOf("top") > -1 && (H = n), s.offset.top + s.dimension.height + u + 12 + D > e(t).scrollTop() + e(t).height() && o.indexOf("bottom") > -1 && (H = n, A = s.offset.top - u - D - 12)
            }
            var i = this;
            if (0 !== e("body").find(i.$tooltip).length) {
                i.$tooltip.css("width", ""), i.elProxyPosition = i._repositionInfo(i.$elProxy);
                var r = null,
                    a = e(t).width(),
                    s = i.elProxyPosition,
                    l = i.$tooltip.outerWidth(!1),
                    u = (i.$tooltip.innerWidth() + 1, i.$tooltip.outerHeight(!1));
                if (i.$elProxy.is("area")) {
                    var c = i.$elProxy.attr("shape"),
                        d = i.$elProxy.parent().attr("name"),
                        f = e('img[usemap="#' + d + '"]'),
                        p = f.offset().left,
                        h = f.offset().top,
                        m = void 0 !== i.$elProxy.attr("coords") ? i.$elProxy.attr("coords").split(",") : void 0;
                    if ("circle" == c) {
                        var g = parseInt(m[0]),
                            v = parseInt(m[1]),
                            y = parseInt(m[2]);
                        s.dimension.height = 2 * y, s.dimension.width = 2 * y, s.offset.top = h + v - y, s.offset.left = p + g - y
                    } else if ("rect" == c) {
                        var g = parseInt(m[0]),
                            v = parseInt(m[1]),
                            b = parseInt(m[2]),
                            x = parseInt(m[3]);
                        s.dimension.height = x - v, s.dimension.width = b - g, s.offset.top = h + v, s.offset.left = p + g
                    } else if ("poly" == c) {
                        for (var w = 0, k = 0, T = 0, C = 0, S = "even", E = 0; E < m.length; E++) {
                            var N = parseInt(m[E]);
                            "even" == S ? (N > T && (T = N, 0 === E && (w = T)), w > N && (w = N), S = "odd") : (N > C && (C = N, 1 == E && (k = C)), k > N && (k = N), S = "even")
                        }
                        s.dimension.height = C - k, s.dimension.width = T - w, s.offset.top = h + k, s.offset.left = p + w
                    } else s.dimension.height = f.outerHeight(!1), s.dimension.width = f.outerWidth(!1), s.offset.top = h, s.offset.left = p
                }
                var M = 0,
                    $ = 0,
                    A = 0,
                    D = parseInt(i.options.offsetY),
                    j = parseInt(i.options.offsetX),
                    H = i.options.position;
                if ("top" == H) {
                    var L = s.offset.left + l - (s.offset.left + s.dimension.width);
                    M = s.offset.left + j - L / 2, A = s.offset.top - u - D - 12, n(), o("bottom", "top")
                }
                if ("top-left" == H && (M = s.offset.left + j, A = s.offset.top - u - D - 12, n(), o("bottom-left", "top-left")), "top-right" == H && (M = s.offset.left + s.dimension.width + j - l, A = s.offset.top - u - D - 12, n(), o("bottom-right", "top-right")), "bottom" == H) {
                    var L = s.offset.left + l - (s.offset.left + s.dimension.width);
                    M = s.offset.left - L / 2 + j, A = s.offset.top + s.dimension.height + D + 12, n(), o("top", "bottom")
                }
                if ("bottom-left" == H && (M = s.offset.left + j, A = s.offset.top + s.dimension.height + D + 12, n(), o("top-left", "bottom-left")), "bottom-right" == H && (M = s.offset.left + s.dimension.width + j - l, A = s.offset.top + s.dimension.height + D + 12, n(), o("top-right", "bottom-right")), "left" == H) {
                    M = s.offset.left - j - l - 12, $ = s.offset.left + j + s.dimension.width + 12;
                    var P = s.offset.top + u - (s.offset.top + s.dimension.height);
                    if (A = s.offset.top - P / 2 - D, 0 > M && $ + l > a) {
                        var F = 2 * parseFloat(i.$tooltip.css("border-width")),
                            z = l + M - F;
                        i.$tooltip.css("width", z + "px"), u = i.$tooltip.outerHeight(!1), M = s.offset.left - j - z - 12 - F, P = s.offset.top + u - (s.offset.top + s.dimension.height), A = s.offset.top - P / 2 - D
                    } else 0 > M && (M = s.offset.left + j + s.dimension.width + 12, r = "left")
                }
                if ("right" == H) {
                    M = s.offset.left + j + s.dimension.width + 12, $ = s.offset.left - j - l - 12;
                    var P = s.offset.top + u - (s.offset.top + s.dimension.height);
                    if (A = s.offset.top - P / 2 - D, M + l > a && 0 > $) {
                        var F = 2 * parseFloat(i.$tooltip.css("border-width")),
                            z = a - M - F;
                        i.$tooltip.css("width", z + "px"), u = i.$tooltip.outerHeight(!1), P = s.offset.top + u - (s.offset.top + s.dimension.height), A = s.offset.top - P / 2 - D
                    } else M + l > a && (M = s.offset.left - j - l - 12, r = "right")
                }
                if (i.options.arrow) {
                    var _ = "tooltipster-arrow-" + H;
                    if (i.options.arrowColor.length < 1) var I = i.$tooltip.css("background-color");
                    else var I = i.options.arrowColor;
                    if (r ? "left" == r ? (_ = "tooltipster-arrow-right", r = "") : "right" == r ? (_ = "tooltipster-arrow-left", r = "") : r = "left:" + Math.round(r) + "px;" : r = "", "top" == H || "top-left" == H || "top-right" == H) var W = parseFloat(i.$tooltip.css("border-bottom-width")),
                        q = i.$tooltip.css("border-bottom-color");
                    else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var W = parseFloat(i.$tooltip.css("border-top-width")),
                        q = i.$tooltip.css("border-top-color");
                    else if ("left" == H) var W = parseFloat(i.$tooltip.css("border-right-width")),
                        q = i.$tooltip.css("border-right-color");
                    else if ("right" == H) var W = parseFloat(i.$tooltip.css("border-left-width")),
                        q = i.$tooltip.css("border-left-color");
                    else var W = parseFloat(i.$tooltip.css("border-bottom-width")),
                        q = i.$tooltip.css("border-bottom-color");
                    W > 1 && W++;
                    var O = "";
                    if (0 !== W) {
                        var R = "",
                            B = "border-color: " + q + ";"; - 1 !== _.indexOf("bottom") ? R = "margin-top: -" + Math.round(W) + "px;" : -1 !== _.indexOf("top") ? R = "margin-bottom: -" + Math.round(W) + "px;" : -1 !== _.indexOf("left") ? R = "margin-right: -" + Math.round(W) + "px;" : -1 !== _.indexOf("right") && (R = "margin-left: -" + Math.round(W) + "px;"), O = '<span class="tooltipster-arrow-border" style="' + R + " " + B + ';"></span>'
                    }
                    i.$tooltip.find(".tooltipster-arrow").remove();
                    var X = '<div class="' + _ + ' tooltipster-arrow" style="' + r + '">' + O + '<span style="border-color:' + I + ';"></span></div>';
                    i.$tooltip.append(X)
                }
                i.$tooltip.css({
                    top: Math.round(A) + "px",
                    left: Math.round(M) + "px"
                })
            }
            return i
        },
        enable: function () {
            return this.enabled = !0, this
        },
        disable: function () {
            return this.hide(), this.enabled = !1, this
        },
        destroy: function () {
            var t = this;
            t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
            var n = t.$el.data("tooltipster-ns");
            if (1 === n.length) {
                var o = null;
                "previous" === t.options.restoration ? o = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (o = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), o && t.$el.attr("title", o), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
            } else n = e.grep(n, function (e) {
                return e !== t.namespace
            }), t.$el.data("tooltipster-ns", n);
            return t
        },
        elementIcon: function () {
            return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
        },
        elementTooltip: function () {
            return this.$tooltip ? this.$tooltip[0] : void 0
        },
        option: function (e, t) {
            return "undefined" == typeof t ? this.options[e] : (this.options[e] = t, this)
        },
        status: function () {
            return this.Status
        }
    }, e.fn[s] = function () {
        var t = arguments;
        if (0 === this.length) {
            if ("string" == typeof t[0]) {
                var n = !0;
                switch (t[0]) {
                case "setDefaults":
                    e.extend(l, t[1]);
                    break;
                default:
                    n = !1
                }
                return n ? !0 : this
            }
            return this
        }
        if ("string" == typeof t[0]) {
            var i = "#*$~&";
            return this.each(function () {
                var n = e(this).data("tooltipster-ns"),
                    o = n ? e(this).data(n[0]) : null;
                if (!o) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
                if ("function" != typeof o[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                var r = o[t[0]](t[1], t[2]);
                return r !== o ? (i = r, !1) : void 0
            }), "#*$~&" !== i ? i : this
        }
        var r = [],
            a = t[0] && "undefined" != typeof t[0].multiple,
            s = a && t[0].multiple || !a && l.multiple,
            u = t[0] && "undefined" != typeof t[0].debug,
            c = u && t[0].debug || !u && l.debug;
        return this.each(function () {
            var n = !1,
                i = e(this).data("tooltipster-ns"),
                a = null;
            i ? s ? n = !0 : c && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (a = new o(this, t[0]), i || (i = []), i.push(a.namespace), e(this).data("tooltipster-ns", i), e(this).data(a.namespace, a)), r.push(a)
        }), s ? r : this
    };
    var u = !!("ontouchstart" in t),
        c = !1;
    e("body").one("mousemove", function () {
        c = !0
    })
}(jQuery, window, document),
function () {
    var e;
    e = function () {
        function e() {}
        return e.prototype.connect = function () {
            return $("#plaid-connect button").click()
        }, e
    }(), window.plaid = new e
}.call(this),
    function () {
        var e, t, n, o, i;
        window.is_device = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), jQuery(function () {
            return e(), n(), t(), o(), i()
        }), n = function () {
            return $(document).on("click", "[data-action=connect]", function (e) {
                return window.plaid.connect(), e.preventDefault()
            }).on("submit", "form#plaid-connect", function () {
                return $(".onboarded").fadeOut(400, function () {
                    return $(".notice").html("Adding new connection...")
                })
            }).on("click", "[data-action=processing]", function () {
                return $(this).parents("tr").hide(), $("tr.processing").show()
            }).on("click", "[data-action=process][data-message]", function () {
                var e, t;
                return e = $(this), t = $(window), $("<a>").insertAfter(e).attr("class", e.attr("class") + " processing").html(e.attr("data-message")).prepend($('<i class="fa fa-cog fa-spin">')), e.hide()
            }).on("click", "[data-action=scroll]", function (e) {
                return e.preventDefault(), $("body,html").animate({
                    scrollTop: $(".hero").outerHeight() + $(".header").outerHeight()
                }, {
                    duration: 400,
                    easing: "easeInOutQuad"
                })
            }).on("click", "[data-action=submit-recipient-form]", function (e) {
                return e.preventDefault(), $(this).parents("tr").find("form").submit()
            }).on("click", "[data-action=new-recipient-form]", function (e) {
                var t, n;
                return e.preventDefault(), t = $(".form.recipient.hide"), n = t.clone(), n.removeClass("hide").insertBefore(t), $(".input", n).focus()
            })
        }, t = function () {
            return $(".hero .text").addClass("show")
        }, o = function () {
            var e, t, n;
            return $(".welcome").length ? (n = $(window), e = $(".hero .content"), t = $(".hero img"), n.on("scroll", function () {
                var o;
                return t.is(":visible") ? (o = n.scrollTop(), e.css("transform", "translate3d(0, " + o / 4.5 + "px, 0)")) : void 0
            }).on("resize", function () {
                var o;
                return t.is(":visible") ? (o = n.scrollTop(), e.css("transform", "translate3d(0, " + o / 4.5 + "px, 0)")) : e.css("transform", "translate3d(0, 0, 0)")
            })) : void 0
        }, i = function () {
            return $(".fa-question-circle").tooltipster({
                theme: "tooltipster-custom",
                position: "right",
                animation: "fade",
                speed: 200,
                delay: 0,
                maxWidth: 330,
                interactive: !0,
                autoClose: !0,
                content: $('<span>This is done through <a href="https://www.plaid.com" target="_blank">Plaid Technologies</a>, a service provider of banking data that powers some of the largest and most trusted financial apps in the world. Located in San Francisco, it\'s founded by Google Ventures, Spark Capital as well as some other important investors.</span>')
            })
        }, e = function () {
            var e;
            return e = {}, $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
                e[n] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), $.extend(e, {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function (e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function (e) {
                    var t, n;
                    for (n = void 0, t = 4; e < ((n = Math.pow(2, --t)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * n - 2) / 22 - e, 2)
                }
            }), $.each(e, function (e, t) {
                return $.easing["easeIn" + e] = t, $.easing["easeOut" + e] = function (e) {
                    return 1 - t(1 - e)
                }, $.easing["easeInOut" + e] = function (e) {
                    return .5 > e ? t(2 * e) / 2 : 1 - t(-2 * e + 2) / 2
                }
            })
        }
    }.call(this),
    function () {
        var e, t;
        jQuery(function () {
            return e()
        }), t = function () {
            var e;
            return e = 1, $(".insights > div").hide(), $(".insights > div:nth-child(" + e + ")").show(), $("[data-action=next]").on("click", function (t) {
                return e++, $(".insights > div:nth-child(" + e + ")").slideDown("fast"), e === $(".insights > div").length && $(this).remove(), t.preventDefault()
            })
        }, e = function () {
            return $(window).resize(function () {
                return $(".graph").each(function () {
                    var e, t, n, o;
                    return e = $(this), t = $(this).attr("id"), window[t].options.series.points.show = $(window).width() > 800, $.plot(e, window[t].data, window[t].options), n = !1, o = !1, e.on("plothover", function (e, t, i) {
                        var r;
                        if (i) {
                            if (n !== i.dataIndex || o !== i.seriesIndex) return n = i.dataIndex, o = i.seriesIndex, $(".tooltip").remove(), r = $("<div>").addClass("tooltip").html(number_to_currency(i.datapoint[1]) + " USD").appendTo("body"), r.css({
                                top: i.pageY - r.outerHeight(!1) - 10,
                                left: i.pageX - Math.round(.5 * r.outerWidth(!1)),
                                background: i.series.color
                            })
                        } else if (n || o) return $(".tooltip").remove(), n = !1, o = !1
                    })
                })
            }), $(window).trigger("resize")
        }
    }.call(this);