(window.webpackJsonp = window.webpackJsonp || []).push([
    [10, 64], {
        "1TCz": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("o0o1"),
                i = n.n(r),
                o = n("HaE+"),
                a = n("1OyB"),
                s = n("JX7q"),
                c = n("vuIU"),
                u = n("Ji7U"),
                f = n("md7G"),
                d = n("foSv"),
                l = n("rePB"),
                h = n("q1tI"),
                p = n.n(h),
                v = n("/MKj"),
                g = n("8Bbg"),
                m = n.n(g),
                y = function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                _ = function() {
                    return (_ = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                b = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(t) {
                            t.done ? i(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(a, s)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                },
                w = function(t, e) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (s) {
                                    o = [6, s], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                x = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                    }
                    return n
                },
                E = {
                    storeKey: "__NEXT_REDUX_STORE__",
                    debug: !1,
                    serializeState: function(t) {
                        return t
                    },
                    deserializeState: function(t) {
                        return t
                    }
                },
                S = n("ANjH"),
                T = n("ODXe"),
                O = n("LpSC"),
                I = n.n(O),
                A = n("cr+I"),
                j = n.n(A),
                k = n("MqDS");

            function P(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = Object(o.default)(i.a.mark((function t(e) {
                    var n, r, o, a;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.response) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 3:
                                return r = n.ok, o = Object.assign({}, e), r || ((a = new Error(n.statusText)).response = n, a.status = n.status, a.data = e.data, Object.assign(o, {
                                    error: a
                                })), t.abrupt("return", o);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function D(t) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = Object(o.default)(i.a.mark((function t(e) {
                    var n, r, o, a, s, c, u;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = Object.assign({}, e), r = e.response) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 4:
                                if (o = r.headers, a = o.get("content-type"), s = null, !/json/.test(a)) {
                                    t.next = 13;
                                    break
                                }
                                return t.next = 10, r.json();
                            case 10:
                                s = t.sent, t.next = 21;
                                break;
                            case 13:
                                if (!/text/.test(a)) {
                                    t.next = 20;
                                    break
                                }
                                return t.next = 16, r.text();
                            case 16:
                                c = t.sent;
                                try {
                                    s = JSON.parse(c)
                                } catch (i) {
                                    s = c
                                }
                                t.next = 21;
                                break;
                            case 20:
                                s = r || {};
                            case 21:
                                return Object.assign(n, {
                                    data: s
                                }), t.next = 24, P(n);
                            case 24:
                                return u = t.sent, t.abrupt("return", u);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function N(t) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = Object(o.default)(i.a.mark((function t(e) {
                    var n, r;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.data, !(r = e.error)) {
                                    t.next = 3;
                                    break
                                }
                                throw r;
                            case 3:
                                return t.abrupt("return", n);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var R = n("r6IF"),
                F = {
                    country: "US",
                    language: "en",
                    languageAlias: ""
                },
                U = {
                    INITIAL: "initial",
                    LOADING: "loading",
                    SUCCESS: "success",
                    FAILURE: "failure"
                },
                H = n("2oH+"),
                V = n.n(H),
                B = {
                    loadingState: U.INITIAL,
                    error: null,
                    data: {},
                    editting: {}
                },
                z = {
                    mobileMode: !1,
                    originPath: "",
                    subdomain: void 0,
                    withPathProject: []
                },
                q = {
                    settings: {},
                    editData: {},
                    translation: {}
                },
                K = {
                    edittingId: null,
                    loadingState: U.INITIAL,
                    error: null,
                    data: {}
                },
                $ = {
                    loadingState: U.INITIAL,
                    error: null,
                    data: {}
                };
            var G = {
                    loadingState: U.INITIAL,
                    error: null,
                    data: {}
                },
                W = {
                    loadingState: U.INITIAL,
                    error: null,
                    data: {}
                },
                X = {
                    loadingState: U.INITIAL,
                    error: null,
                    data: {}
                },
                J = {
                    resize: [],
                    scroll: []
                };
            var Y = Object(S.c)({
                    localization: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.SET_CONTEXT:
                                return Object.assign({}, t, {
                                    country: e.data.country,
                                    language: e.data.language,
                                    languageAlias: e.data.languageAlias
                                });
                            default:
                                return t
                        }
                    },
                    translation: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.FETCH_TRANSLATION_REQUEST:
                                return Object.assign({}, t, {
                                    loadingState: U.LOADING
                                });
                            case R.a.FETCH_TRANSLATION_SUCCESS:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: V()(t.data, e.payload.data)
                                });
                            case R.a.FETCH_TRANSLATION_FAILURE:
                                return Object.assign({}, t, {
                                    loadingState: U.FAILURE,
                                    error: e.payload
                                });
                            case R.a.INIT_TRANSLATION:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.text
                                });
                            case R.a.UPDATE_TRANSLATION_DATA:
                                var n = Object.assign({}, t),
                                    r = e.key,
                                    i = e.value,
                                    o = e.language,
                                    a = n.data[r];
                                return a || (n.data[r] = {}), "object" === typeof a ? a[o] = i : a = Object(l.a)({}, o, i), n.data[r] = a, n.editting[r] = i, n;
                            case R.a.CLEAR_TRANSLATION_KEY:
                                var s = Object.assign({}, t),
                                    c = e.key;
                                return delete s.data[c], delete s.editting[c], s;
                            case R.a.UPDATE_EDITING_DATA:
                                var u = Object.assign({}, t);
                                return e.reset && (u.data = e.translation), u.editting = {}, u;
                            default:
                                return t
                        }
                    },
                    context: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.SET_CONTEXT:
                                return Object.assign({}, t, {
                                    mobileMode: e.data.mobileMode,
                                    originPath: e.data.originPath,
                                    subdomain: e.data.subdomain,
                                    withPathProject: e.data.env.withPathProject
                                });
                            default:
                                return t
                        }
                    },
                    editSetting: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.SET_EDIT_SETTING:
                                return t.editData.id !== e.editData.id ? Object.assign({}, t, {
                                    settings: e.editSetting,
                                    editData: e.editData,
                                    originData: e.originData,
                                    editType: e.editType,
                                    translation: e.translation
                                }) : t;
                            case R.a.CLEAR_EDIT_SETTING:
                                return Object.assign({}, t, {
                                    settings: {},
                                    editData: {},
                                    editType: null,
                                    translation: {}
                                });
                            default:
                                return t
                        }
                    },
                    editPageData: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.FETCH_EDIT_PAGE_DATA_REQUEST:
                                return Object.assign({}, t, {
                                    loadingState: U.INITIAL
                                });
                            case R.a.FETCH_EDIT_PAGE_DATA_SUCCESS:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.payload
                                });
                            case R.a.FETCH_EDIT_PAGE_DATA_FAILURE:
                                return Object.assign({}, t, {
                                    loadingState: U.FAILURE,
                                    error: e.payload
                                });
                            case R.a.INIT_EDIT_PAGE_DATA:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.data
                                });
                            case R.a.SET_EDIT_PAGE_DATA:
                                var n = Object.assign({}, t);
                                return n.data.components_data.forEach((function(t) {
                                    t.data.id === e.data.id && (t.data.translation_data = e.data.translation_data, t.data.component_data = e.data.component_data)
                                })), n;
                            case R.a.UPDATE_COMPONENT_DATA:
                                var r = Object.assign({}, t);
                                return r.data.components_data.forEach((function(t) {
                                    t.data.id === e.id && (t.data.component_data || (t.data.component_data = {}), t.data.component_data[e.name] = e.value)
                                })), r;
                            case R.a.UPDATE_EDITING_DATA:
                                var i = Object.assign({}, t);
                                return i.edittingId = null, i.data.components_data.forEach((function(t) {
                                    e.editData.id === t.data.id && (t.data = e.editData), t.data.activeState = null
                                })), i;
                            case R.a.ACTIVATE_COMPONENT:
                                var o = Object.assign({}, t);
                                return o.edittingId !== e.id && (o.edittingId = e.id, o.data.components_data.forEach((function(t) {
                                    t.data.id === e.id ? t.data.activeState = "active" : t.data.activeState = "inactive"
                                }))), o;
                            default:
                                return t
                        }
                    },
                    page: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.INIT_PAGE_DATA:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.data
                                });
                            case R.a.UPDATE_EDITING_DATA:
                                var n = Object.assign({}, t);
                                return n.data.components_data.forEach((function(t) {
                                    e.editData.id === t.data.id && (t.data = e.editData), t.data.activeState = null
                                })), n;
                            default:
                                return t
                        }
                    },
                    header: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = [];
                        switch (e.type) {
                            case R.a.INIT_HEADER_FOOTER:
                                return e.header.forEach((function(t) {
                                    var e = {
                                        title: "",
                                        display_type: "",
                                        link: "",
                                        link_type: ""
                                    };
                                    t.title && (e.title = t.title), t.display_type && (e.display_type = t.display_type), t.link && (e.link = t.link), t.link_type && (e.link_type = t.link_type), n.push(e)
                                })), e.header = n, Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.header
                                });
                            default:
                                return t
                        }
                    },
                    footer: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.INIT_HEADER_FOOTER:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.footer
                                });
                            default:
                                return t
                        }
                    },
                    product: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.FETCH_PRODUCT_REQUEST:
                                return Object.assign({}, t, {
                                    loadingState: U.LOADING
                                });
                            case R.a.FETCH_PRODUCT_SUCCESS:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.payload
                                });
                            case R.a.FETCH_PRODUCT_FAILURE:
                                return Object.assign({}, t, {
                                    loadingState: U.FAILURE,
                                    error: e.payload
                                });
                            default:
                                return t
                        }
                    },
                    order: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.FETCH_ORDER_REQUEST:
                                return Object.assign({}, t, {
                                    loadingState: U.LOADING
                                });
                            case R.a.FETCH_ORDER_SUCCESS:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.payload
                                });
                            case R.a.FETCH_ORDER_FAILURE:
                                return Object.assign({}, t, {
                                    loadingState: U.FAILURE,
                                    error: e.payload
                                });
                            default:
                                return t
                        }
                    },
                    continent: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        switch (e.type) {
                            case R.a.FETCH_CONTINENTS_REQUEST:
                                return Object.assign({}, t, {
                                    loadingState: U.LOADING
                                });
                            case R.a.FETCH_CONTINENTS_SUCCESS:
                                return Object.assign({}, t, {
                                    loadingState: U.SUCCESS,
                                    data: e.payload
                                });
                            case R.a.FETCH_CONTINENTS_FAILURE:
                                return Object.assign({}, t, {
                                    loadingState: U.FAILURE,
                                    error: e.payload
                                });
                            default:
                                return t
                        }
                    },
                    customEventList: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.eventName,
                            i = e.eventFunc;
                        switch (n) {
                            case R.a.ADD_CUSTOM_EVENT:
                                t[r] ? t[r].push(i) : t[r] = [i];
                                break;
                            case R.a.REMOVE_CUSTOM_EVENT:
                                if (t[r]) {
                                    var o = t[r].findIndex(i);
                                    o > -1 && t[r].splice(o, 1)
                                }
                        }
                        return t
                    }
                }),
                Q = [function(t) {
                    return function(e) {
                        return function() {
                            var n = Object(o.default)(i.a.mark((function n(r) {
                                var o, a, s, c, u, f, d, l, h, p, v, g, m, y, _, b, w, x, E, S, O, A, P, L;
                                return i.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if ((o = r[k.a]) && "object" === typeof o) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.abrupt("return", e(r));
                                        case 3:
                                            if (a = o.query, s = o.method, c = o.url, u = o.data, f = o.types, "string" === typeof c) {
                                                n.next = 6;
                                                break
                                            }
                                            throw new Error("Specify a string endpoint URL");
                                        case 6:
                                            if (Array.isArray(f) && 3 === f.length && f.every((function(t) {
                                                    return "string" === typeof t
                                                }))) {
                                                n.next = 8;
                                                break
                                            }
                                            throw new TypeError("expect types as an array.");
                                        case 8:
                                            return d = function() {}, l = function() {}, h = Object(T.a)(f, 3), p = h[0], v = h[1], g = h[2], o.isSuccess && "function" === typeof o.isSuccess && (d = o.isSuccess), o.success && "function" === typeof o.success && (l = o.success), e({
                                                type: p,
                                                payload: o.data || {}
                                            }), m = {
                                                method: s || "GET",
                                                headers: {
                                                    "Content-Type": "application/json; charset=utf-8"
                                                },
                                                credentials: "include",
                                                query: a,
                                                body: null
                                            }, u ? m.body = JSON.stringify(u) : delete m.body, y = j.a.stringify(a), _ = t.getState(), b = _.localization, w = b.language, x = b.country, E = c, E += "".concat(y ? "".concat(E.indexOf("?") < 0 ? "?" : "&").concat(y) : ""), E += "".concat(E.indexOf("?") < 0 ? "?" : "&").concat(void 0 !== w ? "language=".concat(w) : ""), void 0 === j.a.parse(j.a.extract(E)).country && (E += x ? "&country=".concat(x) : ""), S = {
                                                options: m,
                                                url: E,
                                                response: null,
                                                error: null,
                                                data: null
                                            }, n.prev = 26, n.next = 29, I()(E, m);
                                        case 29:
                                            O = n.sent, Object.assign(S, {
                                                response: O
                                            }), n.next = 36;
                                            break;
                                        case 33:
                                            n.prev = 33, n.t0 = n.catch(26), Object.assign(S, {
                                                error: n.t0
                                            });
                                        case 36:
                                            return n.next = 38, D(S);
                                        case 38:
                                            return A = n.sent, n.prev = 39, n.next = 42, N(A);
                                        case 42:
                                            if (P = n.sent, L = d(P)) {
                                                n.next = 47;
                                                break
                                            }
                                            return l.call(null, A), n.abrupt("return", e({
                                                type: v,
                                                payload: P
                                            }));
                                        case 47:
                                            return console.log("Call Api Error:", E, L), n.abrupt("return", e({
                                                type: g,
                                                payload: L,
                                                error: !0
                                            }));
                                        case 51:
                                            return n.prev = 51, n.t1 = n.catch(39), console.log("Call Api Error:", E, n.t1.status, n.t1), n.abrupt("return", e({
                                                type: g,
                                                payload: n.t1,
                                                error: !0
                                            }));
                                        case 55:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [26, 33],
                                    [39, 51]
                                ])
                            })));
                            return function(t) {
                                return n.apply(this, arguments)
                            }
                        }()
                    }
                }],
                Z = Object(S.d)((function(t) {
                    return t
                })),
                tt = S.a.apply(void 0, Q)(S.e),
                et = n("8Kt/"),
                nt = n.n(et),
                rt = n("iVi/"),
                it = n.n(rt);
            var ot = n("Ukc1");
            n("S5C5");
            var at = n("efpO");
            var st = n("yWgo"),
                ct = n("XnI8"),
                ut = n("Ntax"),
                ft = (n("nSXv"), p.a.createElement);

            function dt(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var i = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n)
                }
            }
            var lt = function(t) {
                Object(u.a)(n, t);
                var e = dt(n);

                function n() {
                    return Object(a.default)(this, n), e.apply(this, arguments)
                }
                return Object(c.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.t,
                            n = t.logo,
                            r = t.chrome,
                            i = t.firefox,
                            o = t.edge,
                            a = t.safair;
                        return ft("div", {
                            className: "style__browserIncompatible-content___1c1_p"
                        }, ft("div", {
                            className: "style__browser-modal___FH6Pe"
                        }), ft("div", {
                            className: "style__brower-box___2zTyx"
                        }, ft("div", {
                            className: "style__browser-content___1bEYn"
                        }, ft("div", null, ft("div", {
                            className: "style__browser-dji-logo___1dy2f",
                            style: Object(ut.c)(n)
                        }), ft("div", {
                            className: "style__browser-text-title___Bj-Yi"
                        }, e("v1.modal.browser.title")), ft("p", {
                            className: "style__browser-text-desc___v7EoX"
                        }, e("v1.modal.browser.desc"))), ft("div", {
                            className: "style__browser-list___U3Mhg"
                        }, ft("div", {
                            className: "style__browser-item___1XFaD"
                        }, ft("a", {
                            href: e("v1.modal.browser.chrome.link")
                        }, ft("div", {
                            className: "style__browser-chrome___12_0k",
                            style: Object(ut.c)(r)
                        }), ft("h4", {
                            className: "style__name___3jE11"
                        }, e("v1.modal.browser.chrome.name")))), ft("div", {
                            className: "style__browser-item___1XFaD"
                        }, ft("a", {
                            href: e("v1.modal.browser.firefox.link")
                        }, ft("div", {
                            className: "style__browser-fiefox___2Ieax",
                            style: Object(ut.c)(i)
                        }), ft("h4", {
                            className: "style__name___3jE11"
                        }, e("v1.modal.browser.firefox.name")))), ft("div", {
                            className: "style__browser-item___1XFaD"
                        }, ft("a", {
                            href: e("v1.modal.browser.safair.link")
                        }, ft("div", {
                            className: "style__browser-safair___3RZmj",
                            style: Object(ut.c)(a)
                        }), ft("h4", {
                            className: "style__name___3jE11"
                        }, e("v1.modal.browser.safair.name")))), ft("div", {
                            className: "style__browser-item___1XFaD"
                        }, ft("a", {
                            href: e("v1.modal.browser.edge.link")
                        }, ft("div", {
                            className: "style__browser-edge___1ZY3b",
                            style: Object(ut.c)(o)
                        }), ft("h4", {
                            className: "style__name___3jE11"
                        }, e("v1.modal.browser.edge.name"))))))))
                    }
                }]), n
            }(p.a.PureComponent);
            Object(l.a)(lt, "defaultProps", {
                t: function() {},
                logo: "a722e747aaaffbef0c556f5125dbc802.png",
                chrome: "0bec16d49b322faacc2ea14797e3b990.jpg",
                firefox: "7d2cc073446426b7624d29155b886360.jpg",
                edge: "e64d0e3ca43f33ecf381486c6e1aa9e4.jpg",
                safair: "31f61db378d71ea41c55d5db9913045f.jpg"
            });
            var ht = Object(ct.a)(lt),
                pt = n("hKI/"),
                vt = n.n(pt),
                gt = n("9/5/"),
                mt = n.n(gt),
                yt = function() {};

            function _t() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function bt(t) {
                t && t.forEach((function(t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        n = Array.prototype.slice.call(t.removedNodes);
                    if (function t(e) {
                            var n, r;
                            for (n = 0; n < e.length; n += 1) {
                                if ((r = e[n]).dataset && r.dataset.aos) return !0;
                                if (r.children && t(r.children)) return !0
                            }
                            return !1
                        }(e.concat(n))) return yt()
                }))
            }
            var wt = {
                isSupported: function() {
                    return !!_t()
                },
                ready: function(t, e) {
                    var n = window.document,
                        r = new(_t())(bt);
                    yt = e, r.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }
            };
            var xt = new(function() {
                    function t() {
                        Object(a.default)(this, t)
                    }
                    return Object(c.default)(t, [{
                        key: "ie11",
                        value: function() {
                            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
                        }
                    }]), t
                }()),
                Et = function(t, e, n) {
                    if (t.inView) {
                        var r = t.node.getAttribute("data-aos-once");
                        e > t.position ? (t.node.classList.contains("aos-animate") || function(t, e) {
                            var n;
                            xt.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, {
                                detail: e
                            }) : n = new CustomEvent(t, {
                                detail: e
                            }), document.dispatchEvent(n)
                        }("aos:in"), t.node.classList.add("aos-animate")) : "undefined" !== typeof r && ("false" === r || !n && "true" !== r) && t.node.classList.remove("aos-animate")
                    }
                },
                St = function(t, e) {
                    if (function t(e) {
                            return t.memo ? t.memo : t.memo = e.some((function(t) {
                                return t.inView
                            }))
                        }(t)) {
                        var n = window.pageYOffset,
                            r = window.innerHeight;
                        t.forEach((function(t, i) {
                            Et(t, r + n, e)
                        }))
                    }
                },
                Tt = function(t) {
                    for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                    return {
                        top: n,
                        left: e
                    }
                },
                Ot = function(t, e) {
                    var n = 0,
                        r = 0,
                        i = window.innerHeight,
                        o = {
                            offset: t.getAttribute("data-aos-offset"),
                            anchor: t.getAttribute("data-aos-anchor"),
                            anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                        };
                    switch (o.offset && !isNaN(o.offset) && (r = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), n = Tt(t).top, o.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += t.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            n += t.offsetHeight;
                            break;
                        case "top-center":
                            n += i / 2;
                            break;
                        case "bottom-center":
                            n += i / 2 + t.offsetHeight;
                            break;
                        case "center-center":
                            n += i / 2 + t.offsetHeight / 2;
                            break;
                        case "top-top":
                            n += i;
                            break;
                        case "bottom-top":
                            n += t.offsetHeight + i;
                            break;
                        case "center-top":
                            n += t.offsetHeight / 2 + i
                    }
                    return o.anchorPlacement || o.offset || isNaN(e) || (r = e), n + r
                },
                It = n("r7AC"),
                At = function(t, e, n) {
                    return t.forEach((function(t, r) {
                        Object(It.b)({
                            elm: t.node.parentNode,
                            offset: 1600,
                            callback: function(r) {
                                var i = r.inView;
                                r.observer;
                                i && (t.inView = i, t.node.classList.add("aos-init"), t.position = Ot(t.node, e.offset), n())
                            },
                            defaultInViewOnIE: !0
                        })
                    })), t
                },
                jt = function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = [];
                    t.durations && t.delays || (t.durations = {}, t.delays = {}), e.forEach((function(e) {
                        var i = e.node;
                        if (i && i.dataset) {
                            var o = i.dataset,
                                a = o.aosDuration,
                                s = o.aosDelay;
                            a && !t.durations[a] && (n[a] = "exists"), s && !t.delays[s] && (r[s] = "exists")
                        }
                    }));
                    var o = Object.keys(n);
                    o.forEach((function(e) {
                        t.durations[e] = "exists";
                        var n = parseFloat(e) / 1e3,
                            r = '\n        [data-aos][data-aos][data-aos-duration="'.concat(e, '"],\n        body[data-aos-duration="').concat(e, '"] [data-aos] {\n          transition-duration: ').concat(n, "s\n        }");
                        i.push(r)
                    }));
                    var a = Object.keys(r);
                    if (a.forEach((function(e) {
                            t.delays[e] = "exists";
                            var n = parseFloat(e) / 1e3,
                                r = '\n        [data-aos][data-aos][data-aos-delay="'.concat(e, '"],\n        body[data-aos-delay="').concat(e, '"] [data-aos] {\n          transition-delay: 0\n        }\n\n        [data-aos][data-aos][data-aos-delay="').concat(e, '"].aos-animate,\n        body[data-aos-delay="').concat(e, '"] [data-aos].aos-animate {\n          transition-delay: ').concat(n, "s\n        }");
                            i.push(r)
                        })), i.length) {
                        var s = document.createElement("style");
                        s.type = "text/css", s.setAttribute("data-aos-css-durations", o.join("-")), s.setAttribute("data-aos-css-delays", a.join("-")), s.innerHTML = i.join("\n"), document.getElementsByTagName("head")[0].appendChild(s)
                    }
                },
                kt = function(t) {
                    var e = t || document.querySelectorAll("[data-aos]"),
                        n = Array.prototype.map.call(e, (function(t) {
                            return {
                                node: t
                            }
                        }));
                    return jt(n), n
                },
                Pt = [],
                Lt = !1,
                Dt = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                Ct = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (t && (Lt = !0), Lt) return Pt = At(Pt, Dt, (function() {
                        St(Pt, Dt.once)
                    })), window.$aosElements = Pt, St(Pt, Dt.once), Pt
                },
                Nt = function() {
                    Pt = kt(), Ct()
                },
                Mt = function(t) {
                    var e;
                    Dt = Object.assign(Dt, t), Pt = kt();
                    var n, r = document.all && !window.atob;
                    if (!(!0 === (n = Dt.disable) || "function" === typeof n && !0 === n() || r)) return Dt.disableMutationObserver || wt.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), Dt.disableMutationObserver = !0), document.querySelector("body").dataset.aosEasing = Dt.easing, document.querySelector("body").dataset.aosDuration = Dt.duration, document.querySelector("body").dataset.aosDelay = Dt.delay, jt([], (e = {}, Object(l.a)(e, Dt.duration, "exists"), Object(l.a)(e, Dt.delay, "exists"), e)), "DOMContentLoaded" === Dt.startEvent && ["complete", "interactive"].includes(document.readyState) ? Ct(!0) : "load" === Dt.startEvent ? window.addEventListener(Dt.startEvent, (function() {
                        Ct(!0)
                    })) : document.addEventListener(Dt.startEvent, (function() {
                        Ct(!0)
                    })), window.addEventListener("resize", mt()(Ct, Dt.debounceDelay, !0)), window.addEventListener("orientationchange", mt()(Ct, Dt.debounceDelay, !0)), window.addEventListener("scroll", vt()((function() {
                        St(Pt, Dt.once)
                    }), Dt.throttleDelay)), Dt.disableMutationObserver || wt.ready("[data-aos]", Nt), Pt;
                    Pt.forEach((function(t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    }))
                },
                Rt = Ct;

            function Ft(t, e) {
                var n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return Ut(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ut(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function Ut(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var Ht = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object(a.default)(this, t), t.instance ? (t.instance.debug("already consturcted."), t.instance) : (t.instance = this, this.init(e), this)
                    }
                    return Object(c.default)(t, [{
                        key: "init",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = {
                                    maxPrefetchOnLoadLimit: 1,
                                    maxPrefetchOnVisibleLimit: 5,
                                    hoverDelay: 300,
                                    maxHoverPrefetchLimit: 3,
                                    maxTouchStartOrMouseDownPrefetchLimit: 3,
                                    prefetchDocumentWhitelistReg: /REGEXP_MATCH_WHITE_LIST_IS_DISABLED/,
                                    maxPrefetchMainDocumentCount: 3,
                                    prefetchMainDocumentOnVisible: !1,
                                    prefetchMainDocumentOnHover: !1,
                                    prefetchMainDocumentOnTouchStartOrMouseDown: !1,
                                    APIURL: "http://localhost:1338/api/prophet",
                                    debug: !1,
                                    enable: !0,
                                    minLoadEnableThreshold: 800,
                                    maxLoadEnableThreshold: 5e3
                                },
                                r = Object.assign({}, n, e);
                            "string" === typeof r.prefetchDocumentWhitelistReg && (r.prefetchDocumentWhitelistReg = new RegExp(r.prefetchDocumentWhitelistReg)), this.config = {
                                maxPrefetchOnLoadLimit: r.maxPrefetchOnLoadLimit,
                                maxPrefetchOnVisibleLimit: r.maxPrefetchOnVisibleLimit,
                                hoverDelay: r.hoverDelay,
                                maxHoverPrefetchLimit: r.maxHoverPrefetchLimit,
                                maxTouchStartOrMouseDownPrefetchLimit: r.maxTouchStartOrMouseDownPrefetchLimit,
                                prefetchDocumentWhitelistReg: r.prefetchDocumentWhitelistReg,
                                maxPrefetchMainDocumentCount: r.maxPrefetchMainDocumentCount,
                                prefetchMainDocumentOnVisible: r.prefetchMainDocumentOnVisible,
                                prefetchMainDocumentOnHover: r.prefetchMainDocumentOnHover,
                                prefetchMainDocumentOnTouchStartOrMouseDown: r.prefetchMainDocumentOnTouchStartOrMouseDown,
                                APIURL: r.APIURL,
                                debug: r.debug,
                                enable: r.enable,
                                minLoadEnableThreshold: r.minLoadEnableThreshold,
                                maxLoadEnableThreshold: r.maxLoadEnableThreshold
                            }, this.predictionData = [], this.linkVisibleObserver = [], this.prefetchedResource = {}, this.prefetchOnVisibleCount = 0, this.prefetchOnHoverCount = 0, this.hoverActivatedDOM = new Set, this.prefetchOnTouchStartOrMouseDownCount = 0, this.touchActivatedDOM = new Set, this.prefetchMainDocumentCount = 0, this.prefetchedMainDocument = {}, this.shoulEnablePrefetch = this.determineShouldEnablePrefetch(), this.shoulEnablePrefetch && (this.addForEachPolyfill(), this.detectPrefetchCompatibility(), this.detectAlreadyPreloadedResources(), this.predictionPromise = this.fetchPredictionAndConfig(this.config.APIURL), this.predictionPromise.then((function() {
                                t.debug("Prediction map get, resolved."), t.prefetchTopPageOnLoad(), t.observeAllLinksVisibility(), t.initMouseOverEventHandler(), t.initMouseDownOrTouchStartEventHandler(), t.initHitRateTracker()
                            }), (function(e) {
                                t.debug("Rejected, reason:", e)
                            })))
                        }
                    }, {
                        key: "checkIsFireFox",
                        value: function() {
                            if ("undefined" !== typeof this.checkIsFireFox.cache) return this.checkIsFireFox.cache;
                            var t = window.navigator.userAgent;
                            return this.checkIsFireFox.cache = /firefox/i.test(t), this.checkIsFireFox.cache
                        }
                    }, {
                        key: "checkIsSafari",
                        value: function() {
                            if ("undefined" !== typeof this.checkIsSafari.cache) return this.checkIsSafari.cache;
                            var t = window.navigator.userAgent;
                            return this.checkIsSafari.cache = /Safari/i.test(t) && !/Chrome/i.test(t), this.checkIsSafari.cache
                        }
                    }, {
                        key: "checkIsIE",
                        value: function() {
                            if ("undefined" !== typeof this.checkIsIE.cache) return this.checkIsIE.cache;
                            var t = !1,
                                e = window.navigator.userAgent,
                                n = e.indexOf("MSIE "),
                                r = e.indexOf("Trident/"),
                                i = e.indexOf("Edge/");
                            return (n > 0 || r > 0 || i > 0) && (t = !0), this.checkIsIE.cache = t, this.checkIsIE.cache
                        }
                    }, {
                        key: "determineShouldEnablePrefetch",
                        value: function() {
                            var t = !0;
                            !1 === this.config.enable && (t = !1);
                            var e = window.location.search;
                            if (/prophet-client=disable/.test("".concat(e)) && (t = !1), window.navigator.connection && window.navigator.connection.saveData && (t = !1), this.config.minLoadEnableThreshold >= 0 && this.config.maxLoadEnableThreshold >= 0) {
                                var n = 0;
                                window.performance && (window.performance.getEntriesByType("navigation")[0] ? n = Math.round(window.performance.getEntriesByType("navigation")[0].loadEventStart) : window.performance.timing && (n = Math.round(window.performance.timing.loadEventStart - window.performance.timing.navigationStart))), this.debug("loadEventStartTime>>>", n), (this.config.minLoadEnableThreshold > n || this.config.maxLoadEnableThreshold < n) && (t = !1)
                            }
                            return this.debug("shouldEnableProphetClient>>>", t), t
                        }
                    }, {
                        key: "debug",
                        value: function() {
                            var t;
                            if (this.config.debug) {
                                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                (t = console).log.apply(t, ["[PROPHET-CLIENT]"].concat(n))
                            }
                        }
                    }, {
                        key: "addForEachPolyfill",
                        value: function() {
                            window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
                        }
                    }, {
                        key: "detectAlreadyPreloadedResources",
                        value: function() {
                            var t = this;
                            document.querySelectorAll("link[rel=preload").forEach((function(e) {
                                var n = e.getAttribute("href");
                                t.prefetchedResource[n] = !0
                            }));
                            var e = /^PROPHET_CLINET_PREFETCH_/;
                            Object.keys(sessionStorage).forEach((function(n) {
                                if (e.test(n)) {
                                    var r = n.replace(e, "");
                                    t.prefetchedResource[r] = !0
                                }
                            })), this.debug("detectAlreadyPreloadedResources this.prefetchedResource is", this.prefetchedResource)
                        }
                    }, {
                        key: "detectPrefetchCompatibility",
                        value: function() {
                            this.relPrefetch = this.hasRel("preload") && !this.hasRel("prefetch") ? "preload" : "prefetch"
                        }
                    }, {
                        key: "hasRel",
                        value: function(t, e) {
                            try {
                                return document.createElement("link").relList.supports(t)
                            } catch (n) {}
                        }
                    }, {
                        key: "prefetchTopPageOnLoad",
                        value: function() {
                            for (var t = 0; t < this.config.maxPrefetchOnLoadLimit; t++) {
                                var e = this.getPredictionFromIndex(t);
                                if (e) {
                                    var n = e.pagePath,
                                        r = this.prefetchAPage(n, !1);
                                    this.debug("STAGE1 Prefetch Status: ".concat(r, ", pagePath:").concat(n, ", index:").concat(t))
                                } else this.debug("STAGE1 Prefetch nextPage not found for index:".concat(t, ", not prefetching."))
                            }
                        }
                    }, {
                        key: "fetchPredictionAndConfig",
                        value: function(t) {
                            var e = this;
                            return new Promise((function(n, r) {
                                try {
                                    var i = new XMLHttpRequest,
                                        o = window.location,
                                        a = o.hostname,
                                        s = o.pathname;
                                    i.open("get", "".concat(t, "?hostname=").concat(a, "&pathname=").concat(s)), i.withCredentials = !0, i.onreadystatechange = function() {
                                        try {
                                            if (4 === i.readyState) {
                                                var t = i.status;
                                                if (0 === t || 200 === t) {
                                                    var o = JSON.parse(i.responseText);
                                                    e.predictionData = o, o && o.config && Object.assign(e.config, o.config), e.debug("this.config >>> ", e.config), e.debug("this.predictionData >>> ", e.predictionData), n(o)
                                                } else r(i)
                                            }
                                        } catch (a) {
                                            r(a)
                                        }
                                    }, i.send()
                                } catch (c) {
                                    r(c)
                                }
                            }))
                        }
                    }, {
                        key: "observeAllLinksVisibility",
                        value: function() {
                            var t = this;
                            "function" === typeof IntersectionObserver && "function" === typeof IntersectionObserverEntry && (0 !== this.predictionData.nextPages.length && (document.querySelectorAll("a[href]").forEach((function(e) {
                                t.observeLinks(e)
                            })), this.DOMMutationObserver = new MutationObserver((function(e) {
                                var n, r = Ft(e);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var i = n.value;
                                        "childList" === i.type && i.addedNodes.length > 0 && i.addedNodes.forEach((function(e) {
                                            "function" === typeof e.querySelectorAll && e.querySelectorAll("a[href]").forEach((function(e) {
                                                t.observeLinks(e)
                                            }))
                                        }))
                                    }
                                } catch (o) {
                                    r.e(o)
                                } finally {
                                    r.f()
                                }
                            })), this.DOMMutationObserver.observe(document.body, {
                                attributes: !1,
                                childList: !0,
                                subtree: !0
                            })))
                        }
                    }, {
                        key: "observeLinks",
                        value: function(t) {
                            var e = this,
                                n = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        if (e.prefetchOnVisibleCount >= e.config.maxPrefetchOnVisibleLimit && e.linkVisibleObserver.length > 0 && e.DOMMutationObserver && (e.debug("STAGE2 this.config.maxPrefetchOnVisibleLimit reached, disconnecting all the observers."), e.linkVisibleObserver.forEach((function(t) {
                                                t.disconnect()
                                            })), e.linkVisibleObserver = [], e.DOMMutationObserver.disconnect(), delete e.DOMMutationObserver), t.isIntersecting) {
                                            n.disconnect();
                                            for (var r = t.target.getAttribute("href"), i = e.hrefKeyGenerator(r), o = 0; o < e.config.maxPrefetchOnVisibleLimit && o < e.predictionData.nextPages.length && e.prefetchOnVisibleCount < e.config.maxPrefetchOnVisibleLimit; o++)
                                                if (e.predictionData.nextPages[o].pagePath === i) {
                                                    var a = !1;
                                                    e.config.prefetchMainDocumentOnVisible && e.prefetchMainDocumentCount < e.config.maxPrefetchMainDocumentCount && (a = !0);
                                                    var s = e.doPrefetch(r, t.target, a);
                                                    e.debug("STAGE2 entry.isIntersecting. shouldPrefetchMainDocument".concat(a, ", result: ").concat(s, ", href:").concat(r, ", hrefKey:").concat(i, ", index:").concat(o, ", entry.target:"), t.target), s && (e.prefetchOnVisibleCount += 1, a && (e.prefetchMainDocumentCount += 1))
                                                }
                                        }
                                    }))
                                }));
                            n.observe(t), this.linkVisibleObserver.push(n)
                        }
                    }, {
                        key: "initMouseOverEventHandler",
                        value: function() {
                            var t = this;
                            document.addEventListener("mouseover", (function e(n) {
                                t.prefetchOnHoverCount >= t.config.maxHoverPrefetchLimit ? (t.debug("STAGE3 this.config.maxHoverPrefetchLimit reached, removing event handler."), document.removeEventListener("mouseover", e)) : t.mouseOverElementHandler(n.target)
                            }))
                        }
                    }, {
                        key: "mouseOverElementHandler",
                        value: function(t) {
                            var e = this;
                            if (t && this.predictionData && this.isElement(t))
                                if (this.hoverActivatedDOM.has(t)) this.debug("STAGE3 MouseOver target alerady activated, won't activate again. >>>", t);
                                else {
                                    var n = t.getAttribute("href");
                                    if (!n) return this.isElement(t.parentNode) ? this.mouseOverElementHandler(t.parentNode) : void 0;
                                    var r = setTimeout((function() {
                                        e.debug("STAGE3 MouseOver Trigger >>>", t);
                                        var r = !1;
                                        e.config.prefetchMainDocumentOnHover && e.prefetchMainDocumentCount < e.config.maxPrefetchMainDocumentCount && (r = !0);
                                        var i = e.doPrefetch(n, t, r);
                                        e.debug("STAGE3 MouseOver Trigger Result >>>", i), i && (e.hoverActivatedDOM.add(t), e.prefetchOnHoverCount += 1, r && (e.prefetchMainDocumentCount += 1))
                                    }), this.config.hoverDelay);
                                    t.addEventListener("mouseout", (function e() {
                                        clearTimeout(r), t.removeEventListener("mouseout", e)
                                    }))
                                }
                        }
                    }, {
                        key: "initMouseDownOrTouchStartEventHandler",
                        value: function() {
                            var t = this,
                                e = function e(n) {
                                    t.prefetchOnTouchStartOrMouseDownCount >= t.config.maxTouchStartOrMouseDownPrefetchLimit ? (t.debug("STAGE4 this.config.maxTouchStartOrMouseDownPrefetchLimit reached, removing event handler."), document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)) : t.touchStartOrMouseDownELementHandler(n.target)
                                };
                            document.addEventListener("mousedown", e), document.addEventListener("touchstart", e)
                        }
                    }, {
                        key: "touchStartOrMouseDownELementHandler",
                        value: function(t) {
                            if (t && this.predictionData && this.isElement(t))
                                if (this.touchActivatedDOM.has(t)) this.debug("STAGE4 touchStartOrMouseDown target alerady activated, won't activate again. >>>", t);
                                else {
                                    var e = t.getAttribute("href");
                                    if (!e) return this.isElement(t.parentNode) ? this.touchStartOrMouseDownELementHandler(t.parentNode) : void 0;
                                    var n = !1;
                                    this.config.prefetchMainDocumentOnTouchStartOrMouseDown && this.prefetchMainDocumentCount < this.config.maxPrefetchMainDocumentCount && (n = !0), this.debug("STAGE4 touchStartOrMouseDown Trigger >>>", e, t, t, n);
                                    var r = this.doPrefetch(e, t, n);
                                    r && (this.touchActivatedDOM.add(t), this.prefetchOnTouchStartOrMouseDownCount += 1, n && (this.prefetchMainDocumentCount += 1)), this.debug("STAGE4 touchStartOrMouseDown Result, this.prefetchOnTouchStartOrMouseDownCount", r, this.prefetchOnTouchStartOrMouseDownCount)
                                }
                        }
                    }, {
                        key: "initHitRateTracker",
                        value: function() {
                            var t = this;
                            if ("function" === typeof ga) {
                                document.addEventListener("click", (function e(n) {
                                    var r = n.target || n;
                                    if (r && t.predictionData && t.isElement(r)) {
                                        var i = r.getAttribute("href");
                                        if (!i) return t.isElement(r.parentNode) ? e(r.parentNode) : void 0;
                                        var o = {
                                            hitType: "event",
                                            eventCategory: "Prophet-Client-Path-".concat(window.location.pathname),
                                            eventAction: "predict-".concat(i),
                                            eventLabel: t.prefetchedMainDocument[i] ? "success" : "fail"
                                        };
                                        t.debug("sending GA event >>>>", o), ga("send", o)
                                    }
                                }))
                            }
                        }
                    }, {
                        key: "doPrefetch",
                        value: function(t, e, n) {
                            var r = this.prefetchAPage(t, n);
                            return this.debug("href, dom, prefetchMainDocument, prefetchSuccess >>>", t, e, n, r), this.config.debug && (r || this.prefetchedMainDocument[t] ? e.style.background = n ? "rgba(255,0,0,0.3)" : "rgba(255,255,0,0.3)" : e.style.background = "rgba(0,255,255,0.3) "), r
                        }
                    }, {
                        key: "prefetchAPage",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.prefetchedMainDocument[t]) return this.debug("prefetchAPage tthis.prefetchedMainDocument[href] is ".concat(this.prefetchedMainDocument[t], ", returning.(href: ").concat(t, ")")), !1;
                            var r = this.hrefKeyGenerator(t),
                                i = this.getPredictionSkeleton(r),
                                o = Array.isArray(i) && i.length > 0,
                                a = this.config.prefetchDocumentWhitelistReg.test(t);
                            if (/javascript\:\;/.test(r) || "" === r || window.location.pathname === r) return this.debug("prefetchAPage not prefetching because ther href is invalid. >>> ", t), !1;
                            if (!o && /^(\/\/|http:\/\/|https:\/\/)/.test(t) && !a) return this.debug("prefetchAPage not prefetching because this.config.prefetchDocumentWhitelistReg not match >>> ", t), !1;
                            this.debug("prefetchAPage href,hrefKey >>> ", t, r);
                            var s = [],
                                c = !1,
                                u = !1;
                            this.checkIsSafari() || this.checkIsFireFox() || this.checkIsIE() || !n || !o && !a || (this.debug("prefetchAPage prefetchMainDocument >>> ", r), s.push(this.prefetchNodeGenerator(t, !1, "document")), this.prefetchedMainDocument[t] = !0, c = !0), o && (this.debug("prefetchAPage nextPageSkeleton >>>", i), i.forEach((function(t) {
                                var n = t.url;
                                "image" === t.as && window.devicePixelRatio > 1 && /@1x\./.test(n) && (n = n.replace("@1x", "")), e.prefetchedResource[n] || t.cors || (s.push(e.prefetchNodeGenerator(n, t.cors, t.as)), e.prefetchedResource[n] = !0)
                            })), u = !0), u || this.debug("prefetchAPage pageSkeleton not found >>> ", r);
                            for (var f = function(t) {
                                    var e = s.slice(t, t + 5),
                                        n = document.createDocumentFragment();
                                    e.forEach((function(t) {
                                        n.appendChild(t)
                                    }));
                                    var r = function() {
                                        document.head.appendChild(n)
                                    };
                                    window.requestIdleCallback ? window.requestIdleCallback(r) : setTimeout(r, 5 * t)
                                }, d = 0; d < s.length; d += 5) f(d);
                            this.syncPrefetchedResourceToStorage();
                            var l = !1;
                            return n ? c && (l = !0) : l = u, l
                        }
                    }, {
                        key: "syncPrefetchedResourceToStorage",
                        value: function() {
                            Object.keys(this.prefetchedResource).forEach((function(t) {
                                sessionStorage.setItem("PROPHET_CLINET_PREFETCH_".concat(t), "true")
                            }))
                        }
                    }, {
                        key: "getPredictionFromIndex",
                        value: function(t) {
                            return this.predictionData && Array.isArray(this.predictionData.nextPages) && this.predictionData.nextPages.length > 0 ? this.predictionData.nextPages[t] : null
                        }
                    }, {
                        key: "getPredictionSkeleton",
                        value: function(t) {
                            if (this.predictionData && Array.isArray(this.predictionData.nextPages)) {
                                var e, n = Ft(this.predictionData.nextPages);
                                try {
                                    for (n.s(); !(e = n.n()).done;) {
                                        var r = e.value;
                                        if (r.pagePath === t && Array.isArray(r.pageSkeleton)) return r.pageSkeleton
                                    }
                                } catch (i) {
                                    n.e(i)
                                } finally {
                                    n.f()
                                }
                            }
                            return null
                        }
                    }, {
                        key: "isElement",
                        value: function(t) {
                            return t instanceof Element || t instanceof HTMLDocument && "function" === typeof t.getAttribute
                        }
                    }, {
                        key: "hrefKeyGenerator",
                        value: function(t) {
                            var e = t;
                            return /\?.*$/.test(t) && (e = t.replace(/\?.*$/, "")), /\#.*$/.test(t) && (e = e.replace(/\#.*$/, "")), "" === (e = (e = e.replace(window.location.origin, "")).replace(/\/$/, "")) && (e = "/"), e
                        }
                    }, {
                        key: "prefetchNodeGenerator",
                        value: function(t, e, n) {
                            var r = document.createElement("link");
                            return r.rel = this.relPrefetch, r.href = t, e && r.setAttribute("crossorgin", "anonymous"), n && (r.as = n), r
                        }
                    }]), t
                }(),
                Vt = n("bxWq"),
                Bt = n("p46w"),
                zt = n.n(Bt),
                qt = (n("lrw0"), n("RpOT"), n("0b+E")),
                Kt = n("EwJH");
            var $t = function(t) {
                var e = this.constructor;
                return this.then((function(n) {
                    return e.resolve(t()).then((function() {
                        return n
                    }))
                }), (function(n) {
                    return e.resolve(t()).then((function() {
                        return e.reject(n)
                    }))
                }))
            };
            var Gt = function(t) {
                    return new this((function(e, n) {
                        if (!t || "undefined" === typeof t.length) return n(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                        var r = Array.prototype.slice.call(t);
                        if (0 === r.length) return e([]);
                        var i = r.length;

                        function o(t, n) {
                            if (n && ("object" === typeof n || "function" === typeof n)) {
                                var a = n.then;
                                if ("function" === typeof a) return void a.call(n, (function(e) {
                                    o(t, e)
                                }), (function(n) {
                                    r[t] = {
                                        status: "rejected",
                                        reason: n
                                    }, 0 === --i && e(r)
                                }))
                            }
                            r[t] = {
                                status: "fulfilled",
                                value: n
                            }, 0 === --i && e(r)
                        }
                        for (var a = 0; a < r.length; a++) o(a, r[a])
                    }))
                },
                Wt = setTimeout;

            function Xt(t) {
                return Boolean(t && "undefined" !== typeof t.length)
            }

            function Jt() {}

            function Yt(t) {
                if (!(this instanceof Yt)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], re(t, this)
            }

            function Qt(t, e) {
                for (; 3 === t._state;) t = t._value;
                0 !== t._state ? (t._handled = !0, Yt._immediateFn((function() {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(t._value)
                        } catch (i) {
                            return void te(e.promise, i)
                        }
                        Zt(e.promise, r)
                    } else(1 === t._state ? Zt : te)(e.promise, t._value)
                }))) : t._deferreds.push(e)
            }

            function Zt(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" === typeof e || "function" === typeof e)) {
                        var n = e.then;
                        if (e instanceof Yt) return t._state = 3, t._value = e, void ee(t);
                        if ("function" === typeof n) return void re((r = n, i = e, function() {
                            r.apply(i, arguments)
                        }), t)
                    }
                    t._state = 1, t._value = e, ee(t)
                } catch (o) {
                    te(t, o)
                }
                var r, i
            }

            function te(t, e) {
                t._state = 2, t._value = e, ee(t)
            }

            function ee(t) {
                2 === t._state && 0 === t._deferreds.length && Yt._immediateFn((function() {
                    t._handled || Yt._unhandledRejectionFn(t._value)
                }));
                for (var e = 0, n = t._deferreds.length; e < n; e++) Qt(t, t._deferreds[e]);
                t._deferreds = null
            }

            function ne(t, e, n) {
                this.onFulfilled = "function" === typeof t ? t : null, this.onRejected = "function" === typeof e ? e : null, this.promise = n
            }

            function re(t, e) {
                var n = !1;
                try {
                    t((function(t) {
                        n || (n = !0, Zt(e, t))
                    }), (function(t) {
                        n || (n = !0, te(e, t))
                    }))
                } catch (r) {
                    if (n) return;
                    n = !0, te(e, r)
                }
            }
            Yt.prototype.catch = function(t) {
                return this.then(null, t)
            }, Yt.prototype.then = function(t, e) {
                var n = new this.constructor(Jt);
                return Qt(this, new ne(t, e, n)), n
            }, Yt.prototype.finally = $t, Yt.all = function(t) {
                return new Yt((function(e, n) {
                    if (!Xt(t)) return n(new TypeError("Promise.all accepts an array"));
                    var r = Array.prototype.slice.call(t);
                    if (0 === r.length) return e([]);
                    var i = r.length;

                    function o(t, a) {
                        try {
                            if (a && ("object" === typeof a || "function" === typeof a)) {
                                var s = a.then;
                                if ("function" === typeof s) return void s.call(a, (function(e) {
                                    o(t, e)
                                }), n)
                            }
                            r[t] = a, 0 === --i && e(r)
                        } catch (c) {
                            n(c)
                        }
                    }
                    for (var a = 0; a < r.length; a++) o(a, r[a])
                }))
            }, Yt.allSettled = Gt, Yt.resolve = function(t) {
                return t && "object" === typeof t && t.constructor === Yt ? t : new Yt((function(e) {
                    e(t)
                }))
            }, Yt.reject = function(t) {
                return new Yt((function(e, n) {
                    n(t)
                }))
            }, Yt.race = function(t) {
                return new Yt((function(e, n) {
                    if (!Xt(t)) return n(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, i = t.length; r < i; r++) Yt.resolve(t[r]).then(e, n)
                }))
            }, Yt._immediateFn = "function" === typeof setImmediate && function(t) {
                setImmediate(t)
            } || function(t) {
                Wt(t, 0)
            }, Yt._unhandledRejectionFn = function(t) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var ie = Yt,
                oe = {};
            ce ? oe = window : "undefined" !== typeof self && (oe = self);
            var ae = "Promise" in oe ? oe.Promise : ie,
                se = [].slice,
                ce = "undefined" !== typeof window,
                ue = ce && "undefined" !== typeof performance ? performance : {};
            for (var fe = [], de = 0; de < 256; ++de) fe[de] = (de + 256).toString(16).substr(1);
            var le = new Uint8Array(16);

            function he(t) {
                return function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(fe[t[n]]);
                    return e.join("")
                }("undefined" != typeof crypto && "function" == typeof crypto.getRandomValues ? crypto.getRandomValues(le) : "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues ? msCrypto.getRandomValues(le) : le).substr(0, t)
            }

            function pe(t, e) {
                var n = !1;
                return "string" === typeof e ? n = t === e : Array.isArray(e) && e.forEach((function(e) {
                    n || (n = pe(t, e))
                })), n
            }

            function ve() {
                return ce && "function" === typeof Set && "function" === typeof JSON.stringify && ue && "function" === typeof ue.now && "withCredentials" in new window.XMLHttpRequest
            }

            function ge(t, e, n) {
                if (n && t) {
                    var r = Te(t),
                        i = typeof e;
                    return void 0 != e && "boolean" !== i && "number" !== i && (e = String(e)), n[r] = e, n
                }
            }

            function me(t) {
                return t && t.split("?")[0]
            }

            function ye(t) {
                return null !== t && "object" === typeof t
            }

            function _e(t, e, n) {
                for (var r = 0, i = e.length; r < i; ++r) {
                    var o = e[r];
                    if (ye(o) || "function" === typeof o)
                        for (var a = Object.keys(o), s = 0, c = a.length; s < c; s++) {
                            var u = a[s],
                                f = o[u];
                            n && ye(f) ? (ye(t[u]) || (t[u] = Array.isArray(f) ? [] : {}), _e(t[u], [f], !1)) : t[u] = f
                        }
                }
                return t
            }

            function be() {
                if ("undefined" !== typeof document) {
                    var t = document.currentScript;
                    return t || function() {
                        if ("undefined" !== typeof document)
                            for (var t = document.getElementsByTagName("script"), e = 0, n = t.length; e < n; e++) {
                                var r = t[e];
                                if (r.src.indexOf("elastic") > 0) return r
                            }
                    }()
                }
            }

            function we(t) {
                return _e(t, se.call(arguments, 1), !1)
            }

            function xe(t) {
                return _e(t, se.call(arguments, 1), !0)
            }

            function Ee(t) {
                return "undefined" === typeof t
            }

            function Se() {}

            function Te(t) {
                return t.replace(/[.*"]/g, "_")
            }

            function Oe() {
                return ue.now()
            }

            function Ie(t) {
                return "number" === typeof t && t >= 0 ? t : Oe()
            }

            function Ae(t, e) {
                return Ee(e) || Ee(t) ? null : parseInt(e - t)
            }

            function je(t) {
                ae.resolve().then(t)
            }

            function ke() {
                return "function" === typeof ue.getEntriesByType
            }

            function Pe(t) {
                return "undefined" !== typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(t) >= 0
            }
            var Le = {
                fetchInProgress: !1
            };

            function De(t) {
                return "__apm_symbol__" + t
            }

            function Ce(t, e, n) {
                for (var r = t; r && !r.hasOwnProperty(e);) r = Object.getPrototypeOf(r);
                !r && t[e] && (r = t);
                var i, o, a, s, c = De(e);
                if (r && !(i = r[c])) {
                    i = r[c] = r[e];
                    var u = r && Object.getOwnPropertyDescriptor(r, e);
                    if (!(s = u) || !1 !== s.writable && ("function" !== typeof s.get || "undefined" !== typeof s.set)) {
                        var f = n(i, c, e);
                        r[e] = function() {
                            return f(this, arguments)
                        }, o = r[e], a = i, o[De("OriginalDelegate")] = a
                    }
                }
                return i
            }
            var Ne = De("xhrIgnore"),
                Me = De("xhrSync"),
                Re = De("xhrURL"),
                Fe = De("xhrMethod"),
                Ue = "schedule",
                He = "invoke",
                Ve = "addEventListener",
                Be = "removeEventListener",
                ze = ["link", "css", "script", "img", "xmlhttprequest", "fetch", "beacon", "iframe"],
                qe = 3e5,
                Ke = "page-load",
                $e = "custom",
                Ge = "Unknown",
                We = [Ke, "route-change", "user-interaction", "http-request", $e, "temporary"],
                Xe = 60,
                Je = "xmlhttprequest",
                Ye = "fetch",
                Qe = "history",
                Ze = "eventtarget",
                tn = "error",
                en = "longtask",
                nn = "measure",
                rn = "navigation",
                on = "resource",
                an = "first-contentful-paint",
                sn = "largest-contentful-paint",
                cn = "first-input",
                un = "layout-shift",
                fn = "ConfigService",
                dn = "LoggingService",
                ln = "ApmServer",
                hn = ".truncated",
                pn = 1024;

            function vn(t) {
                var e = XMLHttpRequest.prototype;
                if (e && e[Ve]) var n = "readystatechange",
                    r = "load",
                    i = "error",
                    o = "timeout",
                    a = "abort",
                    s = Ce(e, "open", (function() {
                        return function(t, e) {
                            return t[Ne] || (t[Fe] = e[0], t[Re] = e[1], t[Me] = !1 === e[2]), s.apply(t, e)
                        }
                    })),
                    c = Ce(e, "send", (function() {
                        return function(e, s) {
                            if (e[Ne]) return c.apply(e, s);
                            var f = {
                                source: Je,
                                state: "",
                                type: "macroTask",
                                data: {
                                    target: e,
                                    method: e[Fe],
                                    sync: e[Me],
                                    url: e[Re],
                                    status: ""
                                }
                            };
                            try {
                                return function(e) {
                                    if (e.state !== Ue) {
                                        e.state = Ue, t(Ue, e);
                                        var s = e.data.target;
                                        c(n), c(r), c(o), c(i), c(a)
                                    }

                                    function c(t) {
                                        s[Ve](t, (function(t) {
                                            var i = t.type;
                                            i === n ? 4 === s.readyState && 0 !== s.status && u(e, "success") : u(e, i === r ? "success" : i)
                                        }))
                                    }
                                }(f), c.apply(e, s)
                            } catch (d) {
                                throw u(f, i), d
                            }
                        }
                    }));

                function u(e, n) {
                    e.state !== He && (e.state = He, e.data.status = n, t(He, e))
                }
            }
            for (var gn = ["click"], mn = {}, yn = 0; yn < gn.length; yn++) {
                var _n = gn[yn];
                mn[_n] = De(_n)
            }

            function bn(t, e, n) {
                return t instanceof Element && gn.indexOf(e) >= 0 && "function" === typeof n
            }
            var wn = function() {
                    function t() {
                        this.observers = {}
                    }
                    var e = t.prototype;
                    return e.observe = function(t, e) {
                        var n = this;
                        if ("function" === typeof e) return this.observers[t] || (this.observers[t] = []), this.observers[t].push(e),
                            function() {
                                var r = n.observers[t].indexOf(e);
                                r > -1 && n.observers[t].splice(r, 1)
                            }
                    }, e.sendOnly = function(t, e) {
                        var n = this.observers[t];
                        n && n.forEach((function(t) {
                            try {
                                t.apply(void 0, e)
                            } catch (n) {
                                console.log(n, n.stack)
                            }
                        }))
                    }, e.send = function(t, e) {
                        this.sendOnly(t + ":before", e), this.sendOnly(t, e), this.sendOnly(t + ":after", e)
                    }, t
                }(),
                xn = new wn,
                En = !1;

            function Sn() {
                return En || (En = !0, vn((function(t, e) {
                    xn.send(Je, [t, e])
                })), function(t) {
                    if (window.fetch && window.Request) {
                        var e = window.fetch;
                        window.fetch = function(t, i) {
                            var o, a, s = this,
                                c = arguments;
                            if ("string" === typeof t) o = new Request(t, i), a = t;
                            else {
                                if (!t) return e.apply(s, c);
                                a = (o = t).url
                            }
                            var u = {
                                source: Ye,
                                state: "",
                                type: "macroTask",
                                data: {
                                    target: o,
                                    method: o.method,
                                    url: a,
                                    aborted: !1
                                }
                            };
                            return new ae((function(t, i) {
                                var a;
                                Le.fetchInProgress = !0, n(u);
                                try {
                                    a = e.apply(s, [o])
                                } catch (c) {
                                    return i(c), u.data.error = c, r(u), void(Le.fetchInProgress = !1)
                                }
                                a.then((function(e) {
                                    t(e), je((function() {
                                        u.data.response = e, r(u)
                                    }))
                                }), (function(t) {
                                    i(t), je((function() {
                                        u.data.error = t, r(u)
                                    }))
                                })), Le.fetchInProgress = !1
                            }))
                        }
                    }

                    function n(e) {
                        e.state = Ue, t(Ue, e)
                    }

                    function r(e) {
                        e.state = He, t(He, e)
                    }
                }((function(t, e) {
                    xn.send(Ye, [t, e])
                })), function(t) {
                    if (window.history) {
                        var e = history.pushState;
                        "function" === typeof e && (history.pushState = function(n, r, i) {
                            var o = {
                                source: Qe,
                                data: {
                                    state: n,
                                    title: r,
                                    url: i
                                }
                            };
                            t(He, o), e.apply(this, arguments)
                        })
                    }
                }((function(t, e) {
                    xn.send(Qe, [t, e])
                })), function(t) {
                    if (window.EventTarget) {
                        var e = window.EventTarget.prototype,
                            n = e[Ve],
                            r = e[Be];
                        e[Ve] = function(t, e, r) {
                            var i = this;
                            if (!bn(i, t, e)) return n.apply(i, arguments);
                            var o = a(i, t, e, r),
                                s = Array.prototype.slice.call(arguments);
                            return s[1] = o, n.apply(i, s)
                        }, e[Be] = function(t, e, n) {
                            var i = this;
                            if (!bn(i, t, e)) return r.apply(i, arguments);
                            var o = s(i, t, e, n),
                                a = Array.prototype.slice.call(arguments);
                            return a[1] = o, r.apply(i, a)
                        }
                    }

                    function i(t, e, n, r) {
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            if (o.eventType === e && o.listenerFn === n && o.capture === r) return i
                        }
                        return -1
                    }

                    function o(t) {
                        return "boolean" === typeof t ? t : !!t && !!t.capture
                    }

                    function a(e, n, r, a) {
                        var s = mn[n];
                        if (!s) return r;
                        var c = e[s],
                            u = o(a);
                        if (c) {
                            var f = i(c, n, r, u);
                            if (-1 !== f) return c[f].wrappingFn
                        } else c = e[s] = [];
                        var d = {
                            source: Ze,
                            target: e,
                            eventType: n,
                            listenerFn: r,
                            capture: u,
                            wrappingFn: l
                        };

                        function l() {
                            var e;
                            t(Ue, d);
                            try {
                                e = r.apply(this, arguments)
                            } finally {
                                t(He, d)
                            }
                            return e
                        }
                        return c.push(d), l
                    }

                    function s(t, e, n, r) {
                        var a = mn[e],
                            s = t[a];
                        if (s) {
                            var c = i(s, e, n, o(r));
                            if (-1 !== c) {
                                var u = s[c];
                                return s.splice(c, 1), 0 === s.length && (t[a] = void 0), u.wrappingFn
                            }
                        }
                        return n
                    }
                }((function(t, e) {
                    xn.send(Ze, [t, e])
                }))), xn
            }
            var Tn = {
                    bootstrapTime: null,
                    lastHiddenStart: Number.MIN_SAFE_INTEGER
                },
                On = !1;

            function In() {
                return ve() ? (Sn(), function() {
                    "hidden" === document.visibilityState && (Tn.lastHiddenStart = 0);
                    window.addEventListener("visibilitychange", (function() {
                        "hidden" === document.visibilityState && (Tn.lastHiddenStart = performance.now())
                    }), {
                        capture: !0
                    })
                }(), Tn.bootstrapTime = Oe(), On = !0) : ce && console.log("[Elastic APM] platform is not supported!"), On
            }
            var An = n("MjPQ"),
                jn = n.n(An);

            function kn(t) {
                var e = t.error,
                    n = t.filename,
                    r = t.lineno,
                    i = t.colno,
                    o = [];
                if (e) try {
                    o = jn.a.parse(e)
                } catch (a) {}
                return 0 === o.length && (o = [{
                    fileName: n,
                    lineNumber: r,
                    columnNumber: i
                }]), o.map((function(t) {
                    return t.functionName && (t.functionName = function(t) {
                        var e = t.split("/");
                        return t = (t = (t = e.length > 1 ? ["Object", e[e.length - 1]].join(".") : e[0]).replace(/.<$/gi, ".<anonymous>")).replace(/^Anonymous function$/, "<anonymous>"), t = (e = t.split(".")).length > 1 ? e[e.length - 1] : e[0]
                    }(t.functionName)), t
                })).map((function(t) {
                    var e = t.fileName,
                        n = t.lineNumber,
                        r = t.columnNumber,
                        i = t.functionName,
                        o = void 0 === i ? "<anonymous>" : i;
                    if (!e && !n) return {};
                    if (!r && !n) return {};
                    var a, s = function(t) {
                            return void 0 === t && (t = ""), "<anonymous>" === t && (t = ""), t
                        }(e),
                        c = function(t) {
                            var e = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
                            return t.indexOf(e) > -1 && (t = t.replace(e + "/", "")), t
                        }(s);
                    return (a = s) && 0 === window.location.href.indexOf(a) && (c = "(inline script)"), {
                        abs_path: e,
                        filename: c,
                        function: o,
                        lineno: n,
                        colno: r
                    }
                }))
            }
            var Pn = [
                    ["#", "hash"],
                    ["?", "query"],
                    ["/", "path"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1]
                ],
                Ln = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                Dn = function() {
                    function t(t) {
                        var e, n = this.extractProtocol(t || ""),
                            r = n.protocol,
                            i = n.address,
                            o = n.slashes,
                            a = !r && !o,
                            s = this.getLocation(),
                            c = Pn.slice();
                        i = i.replace("\\", "/"), o || (c[2] = [NaN, "path"]);
                        for (var u = 0; u < c.length; u++) {
                            var f = c[u],
                                d = f[0],
                                l = f[1];
                            if ("string" === typeof d) {
                                if (~(e = i.indexOf(d))) {
                                    var h = f[2];
                                    if (h) {
                                        var p = i.lastIndexOf(d);
                                        e = Math.max(e, p), this[l] = i.slice(0, e), i = i.slice(e + h)
                                    } else this[l] = i.slice(e), i = i.slice(0, e)
                                }
                            } else this[l] = i, i = "";
                            this[l] = this[l] || a && f[3] && s[l] || "", f[3] && (this[l] = this[l].toLowerCase())
                        }
                        if (a && "/" !== this.path.charAt(0) && (this.path = "/" + this.path), this.relative = a, this.protocol = r || s.protocol, this.hostname = this.host, this.port = "", /:\d+$/.test(this.host)) {
                            var v = this.host.split(":"),
                                g = v.pop(),
                                m = v.join(":");
                            ! function(t, e) {
                                switch (e) {
                                    case "http:":
                                        return "80" === t;
                                    case "https:":
                                        return "443" === t
                                }
                                return !0
                            }(g, this.protocol) ? this.port = g: this.host = m, this.hostname = m
                        }
                        this.origin = this.protocol && this.host && "file:" !== this.protocol ? this.protocol + "//" + this.host : "null", this.href = this.toString()
                    }
                    var e = t.prototype;
                    return e.toString = function() {
                        var t = this.protocol;
                        if (t += "//", this.auth) {
                            var e = this.auth.split(":");
                            t += (e[0] ? "[REDACTED]" : "") + (e[1] ? ":[REDACTED]" : "") + "@"
                        }
                        return t += this.host, t += this.path, t += this.query, t += this.hash
                    }, e.getLocation = function() {
                        var t = {};
                        return ce && (t = window), t.location
                    }, e.extractProtocol = function(t) {
                        var e = Ln.exec(t);
                        return {
                            protocol: e[1] ? e[1].toLowerCase() : "",
                            slashes: !!e[2],
                            address: e[3]
                        }
                    }, t
                }();
            var Cn = 91,
                Nn = 93,
                Mn = "external",
                Rn = "resource",
                Fn = "hard-navigation";

            function Un(t) {
                var e = {
                        transfer_size: t.transferSize,
                        encoded_body_size: t.encodedBodySize,
                        decoded_body_size: t.decodedBodySize
                    },
                    n = function(t) {
                        void 0 === t && (t = []);
                        for (var e = [], n = 0; n < t.length; n++) {
                            var r = t[n],
                                i = r.name,
                                o = r.duration,
                                a = r.description,
                                s = i;
                            a && (s += ";desc=" + a), o && (s += ";dur=" + o), e.push(s)
                        }
                        return e.join(", ")
                    }(t.serverTiming);
                return n && (e.headers = {
                    "server-timing": n
                }), e
            }

            function Hn(t, e) {
                var n = t.port,
                    r = t.protocol,
                    i = t.hostname,
                    o = t.host,
                    a = function(t, e) {
                        return "" === t && (t = "http:" === e ? "80" : "https:" === e ? "443" : ""), t
                    }(n, r),
                    s = i.charCodeAt(0) === Cn && i.charCodeAt(i.length - 1) === Nn,
                    c = i;
                return s && (c = i.slice(1, -1)), {
                    service: {
                        name: r + "//" + o,
                        resource: i + ":" + a,
                        type: e
                    },
                    address: c,
                    port: Number(a)
                }
            }

            function Vn() {
                return {
                    page: {
                        referer: document.referrer,
                        url: location.href
                    }
                }
            }

            function Bn(t, e) {
                if (e) {
                    var n;
                    switch (t.type) {
                        case Mn:
                            n = function(t) {
                                var e, n = t.url,
                                    r = t.method,
                                    i = t.target,
                                    o = t.response,
                                    a = new Dn(n),
                                    s = Hn(a, Mn),
                                    c = {
                                        http: {
                                            method: r,
                                            url: a.href
                                        },
                                        destination: s
                                    };
                                return i && "undefined" !== typeof i.status ? e = i.status : o && (e = o.status), c.http.status_code = e, c
                            }(e);
                            break;
                        case Rn:
                            n = function(t) {
                                var e = t.entry,
                                    n = t.url,
                                    r = Hn(new Dn(n), Rn);
                                return {
                                    http: {
                                        url: n,
                                        response: Un(e)
                                    },
                                    destination: r
                                }
                            }(e);
                            break;
                        case Fn:
                            n = function(t) {
                                var e = t.url;
                                return {
                                    destination: Hn(new Dn(e), Fn)
                                }
                            }(e)
                    }
                    t.addContext(n)
                }
            }

            function zn(t, e) {
                var n = void 0 === e ? {} : e,
                    r = (n.tags, function(t, e) {
                        if (null == t) return {};
                        var n, r, i = {},
                            o = Object.keys(t);
                        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                        return i
                    }(n, ["tags"])),
                    i = Vn(),
                    o = {};
                if (t.type === Ke && ke()) {
                    var a = ue.getEntriesByType(rn);
                    a && a.length > 0 && (o = {
                        response: Un(a[0])
                    })
                }
                t.addContext(i, o, r)
            }
            var qn = {
                    service: {
                        name: [pn, !0],
                        version: !0,
                        agent: {
                            version: [pn, !0]
                        },
                        environment: !0
                    },
                    labels: {
                        "*": !0
                    }
                },
                Kn = {
                    "*": !0,
                    headers: {
                        "*": !0
                    }
                },
                $n = {
                    user: {
                        id: !0,
                        email: !0,
                        username: !0
                    },
                    tags: {
                        "*": !0
                    },
                    http: {
                        response: Kn
                    },
                    destination: {
                        address: [pn],
                        service: {
                            "*": [pn, !0]
                        }
                    },
                    response: Kn
                },
                Gn = {
                    name: [pn, !0],
                    type: [pn, !0],
                    id: [pn, !0],
                    trace_id: [pn, !0],
                    parent_id: [pn, !0],
                    transaction_id: [pn, !0],
                    subtype: !0,
                    action: !0,
                    context: $n
                },
                Wn = {
                    name: !0,
                    parent_id: !0,
                    type: [pn, !0],
                    id: [pn, !0],
                    trace_id: [pn, !0],
                    span_count: {
                        started: [pn, !0]
                    },
                    context: $n
                },
                Xn = {
                    id: [pn, !0],
                    trace_id: !0,
                    transaction_id: !0,
                    parent_id: !0,
                    culprit: !0,
                    exception: {
                        type: !0
                    },
                    transaction: {
                        type: !0
                    },
                    context: $n
                };

            function Jn(t) {
                return null == t || "" === t || "undefined" === typeof t
            }

            function Yn(t, e, n) {
                var r = function(t, e, n, r) {
                    return void 0 === e && (e = pn), void 0 === n && (n = !1), void 0 === r && (r = "N/A"), n && Jn(t) && (t = r), "string" === typeof t ? t.substring(0, e) : t
                }(t[e], n[0], n[1]);
                Jn(r) ? delete t[e] : t[e] = r
            }

            function Qn(t, e, n) {
                void 0 === t && (t = {}), void 0 === n && (n = e);
                for (var r = Object.keys(t), i = [], o = function(o) {
                        var a = r[o],
                            s = !0 === t[a] ? i : t[a];
                        Array.isArray(s) ? "*" === a ? Object.keys(n).forEach((function(t) {
                            return Yn(n, t, s)
                        })) : Yn(n, a, s) : Qn(s, e, n[a])
                    }, a = 0; a < r.length; a++) o(a);
                return e
            }
            var Zn = ["stack", "message"];
            var tr = function() {
                    function t(t, e, n) {
                        this._apmServer = t, this._configService = e, this._transactionService = n
                    }
                    var e = t.prototype;
                    return e.createErrorDataModel = function(t) {
                        var e = function(t) {
                                return t.filter((function(t) {
                                    var e = t.filename,
                                        n = t.lineno;
                                    return "undefined" !== typeof e && "undefined" !== typeof n
                                }))
                            }(kn(t)),
                            n = "(inline script)",
                            r = e[e.length - 1];
                        r && r.filename && (n = r.filename);
                        var i = t.message,
                            o = t.error,
                            a = i,
                            s = "",
                            c = {};
                        if (o && "object" === typeof o) {
                            a = a || o.message, s = o.name;
                            var u = function(t) {
                                var e = !1,
                                    n = {};
                                if (Object.keys(t).forEach((function(r) {
                                        if (!(Zn.indexOf(r) >= 0)) {
                                            var i = t[r];
                                            if (null != i && "function" !== typeof i) {
                                                if ("object" === typeof i) {
                                                    if ("function" !== typeof i.toISOString) return;
                                                    i = i.toISOString()
                                                }
                                                n[r] = i, e = !0
                                            }
                                        }
                                    })), e) return n
                            }(o);
                            u && (c.custom = u)
                        }
                        s || a && a.indexOf(":") > -1 && (s = a.split(":")[0]);
                        var f = this._transactionService.getCurrentTransaction(),
                            d = f ? f.context : {},
                            l = this._configService.get("context"),
                            h = (l.tags, function(t, e) {
                                if (null == t) return {};
                                var n, r, i = {},
                                    o = Object.keys(t);
                                for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                                return i
                            }(l, ["tags"])),
                            p = xe({}, Vn(), d, h, c),
                            v = {
                                id: he(),
                                culprit: n,
                                exception: {
                                    message: a,
                                    stacktrace: e,
                                    type: s
                                },
                                context: p
                            };
                        return f && (v = we(v, {
                            trace_id: f.traceId,
                            parent_id: f.id,
                            transaction_id: f.id,
                            transaction: {
                                type: f.type,
                                sampled: f.sampled
                            }
                        })), Qn(Xn, v)
                    }, e.logErrorEvent = function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.createErrorDataModel(t);
                            "undefined" !== typeof e.exception.message && this._apmServer.addError(e)
                        }
                    }, e.registerListeners = function() {
                        var t = this;
                        window.addEventListener("error", (function(e) {
                            return t.logErrorEvent(e)
                        })), window.addEventListener("unhandledrejection", (function(e) {
                            return t.logPromiseEvent(e)
                        }))
                    }, e.logPromiseEvent = function(t) {
                        var e, n = "Unhandled promise rejection: ",
                            r = t.reason,
                            i = void 0 === r ? "<no reason specified>" : r;
                        "string" === typeof i.message ? e = {
                            error: i,
                            message: n + (i.name ? i.name + ": " : "") + i.message
                        } : e = {
                            message: n + (i = "object" === typeof i ? "<object>" : "function" === typeof i ? "<function>" : i)
                        };
                        this.logErrorEvent(e)
                    }, e.logError = function(t) {
                        var e = {};
                        return "string" === typeof t ? e.message = t : e.error = t, this.logErrorEvent(e)
                    }, t
                }(),
                er = function() {
                    function t(t, e) {
                        void 0 === e && (e = {}), this.onFlush = t, this.items = [], this.queueLimit = e.queueLimit || -1, this.flushInterval = e.flushInterval || 0, this.timeoutId = void 0
                    }
                    var e = t.prototype;
                    return e._setTimer = function() {
                        var t = this;
                        this.timeoutId = setTimeout((function() {
                            return t.flush()
                        }), this.flushInterval)
                    }, e._clear = function() {
                        "undefined" !== typeof this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = void 0), this.items = []
                    }, e.flush = function() {
                        this.onFlush(this.items), this._clear()
                    }, e.add = function(t) {
                        this.items.push(t), -1 !== this.queueLimit && this.items.length >= this.queueLimit ? this.flush() : "undefined" === typeof this.timeoutId && this._setTimer()
                    }, t
                }();
            var nr = function() {
                    function t() {}
                    return t.stringify = function(t) {
                        return JSON.stringify(t) + "\n"
                    }, t
                }(),
                rr = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = {}), t || (t = Ge), e || (e = $e), this.name = t, this.type = e, this.options = n, this.id = n.id || he(16), this.traceId = n.traceId, this.sampled = n.sampled, this.timestamp = n.timestamp, this._start = Ie(n.startTime), this._end = void 0, this.ended = !1, this.outcome = void 0, this.onEnd = n.onEnd
                    }
                    var e = t.prototype;
                    return e.ensureContext = function() {
                        this.context || (this.context = {})
                    }, e.addLabels = function(t) {
                        this.ensureContext();
                        var e = this.context;
                        e.tags || (e.tags = {}), Object.keys(t).forEach((function(n) {
                            return ge(n, t[n], e.tags)
                        }))
                    }, e.addContext = function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        0 !== e.length && (this.ensureContext(), xe.apply(void 0, [this.context].concat(e)))
                    }, e.end = function(t) {
                        this.ended || (this.ended = !0, this._end = Ie(t), this.callOnEnd())
                    }, e.callOnEnd = function() {
                        "function" === typeof this.onEnd && this.onEnd(this)
                    }, e.duration = function() {
                        return Ae(this._start, this._end)
                    }, t
                }();
            var ir = function(t) {
                    var e, n;

                    function r(e, n, r) {
                        var i;
                        if ((i = t.call(this, e, n, r) || this).parentId = i.options.parentId, i.subtype = void 0, i.action = void 0, -1 !== i.type.indexOf(".")) {
                            var o = i.type.split(".", 3);
                            i.type = o[0], i.subtype = o[1], i.action = o[2]
                        }
                        return i.sync = i.options.sync, i
                    }
                    return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r.prototype.end = function(e, n) {
                        t.prototype.end.call(this, e), Bn(this, n)
                    }, r
                }(rr),
                or = [
                    ["domainLookupStart", "domainLookupEnd", "Domain lookup"],
                    ["connectStart", "connectEnd", "Making a connection to the server"],
                    ["requestStart", "responseEnd", "Requesting and receiving the document"],
                    ["domLoading", "domInteractive", "Parsing the document, executing sync. scripts"],
                    ["domContentLoadedEventStart", "domContentLoadedEventEnd", 'Fire "DOMContentLoaded" event'],
                    ["loadEventStart", "loadEventEnd", 'Fire "load" event']
                ];

            function ar(t, e, n, r, i) {
                return void 0 === i && (i = 0), "number" === typeof t && "number" === typeof e && t >= i && e > t && t - i >= n && e - i <= r && e - t < qe && t - i < qe && e - i < qe
            }

            function sr(t) {
                var e = t.name,
                    n = t.initiatorType,
                    r = t.startTime,
                    i = t.responseEnd,
                    o = "resource";
                n && (o += "." + n);
                var a = me(e),
                    s = new ir(a, o);
                return s._start = r, s.end(i, {
                    url: e,
                    entry: t
                }), s
            }

            function cr(t, e) {
                return null != e && t > e
            }
            var ur = ["fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
                fr = ["fs", "ls", "le", "cs", "ce", "qs", "rs", "re", "dl", "di", "ds", "de", "dc", "es", "ee"];

            function dr(t) {
                var e = function(t) {
                    var e = t.fetchStart,
                        n = t.navigationStart,
                        r = t.responseStart,
                        i = t.responseEnd;
                    if (e >= n && r >= e && i >= r) {
                        var o = {};
                        return ur.forEach((function(n) {
                            var r = t[n];
                            r && r >= e && (o[n] = parseInt(r - e))
                        })), o
                    }
                    return null
                }(t);
                return null == e ? null : {
                    navigationTiming: e,
                    agent: {
                        timeToFirstByte: e.responseStart,
                        domInteractive: e.domInteractive,
                        domComplete: e.domComplete
                    }
                }
            }

            function lr(t) {
                if (t.captureTimings) {
                    var e = t._end;
                    if (t.type === Ke) {
                        if (t.marks && t.marks.custom) {
                            var n = t.marks.custom;
                            Object.keys(n).forEach((function(e) {
                                n[e] += t._start
                            }))
                        }
                        t._start = 0;
                        var r = ue.timing;
                        (function(t, e, n, r) {
                            for (var i = [], o = 0; o < or.length; o++) {
                                var a = t[or[o][0]],
                                    s = t[or[o][1]];
                                if (ar(a, s, n, r, e)) {
                                    var c = new ir(or[o][2], "hard-navigation.browser-timing"),
                                        u = null;
                                    "requestStart" === or[o][0] && (c.pageResponse = !0, u = {
                                        url: location.origin
                                    }), c._start = a - e, c.end(s - e, u), i.push(c)
                                }
                            }
                            return i
                        })(r, r.fetchStart, 0, e).forEach((function(e) {
                            e.traceId = t.traceId, e.sampled = t.sampled, e.pageResponse && t.options.pageLoadSpanId && (e.id = t.options.pageLoadSpanId), t.spans.push(e)
                        })), t.addMarks(dr(r))
                    }
                    if (ke()) {
                        var i = t._start;
                        (function(t, e, n, r) {
                            for (var i = [], o = 0; o < t.length; o++) {
                                var a = t[o],
                                    s = a.initiatorType,
                                    c = a.name,
                                    u = a.startTime,
                                    f = a.responseEnd; - 1 !== ze.indexOf(s) && null != c && (("xmlhttprequest" === s || "fetch" === s) && (/intake\/v\d+\/rum\/events/.test(c) || cr(u, e)) || ar(u, f, n, r) && i.push(sr(t[o])))
                            }
                            return i
                        })(ue.getEntriesByType(on), Tn.bootstrapTime, i, e).forEach((function(e) {
                                return t.spans.push(e)
                            })),
                            function(t, e, n) {
                                for (var r = [], i = 0; i < t.length; i++) {
                                    var o = t[i],
                                        a = o.name,
                                        s = o.startTime,
                                        c = o.duration,
                                        u = s + c;
                                    if (!(c <= Xe) && ar(s, u, e, n)) {
                                        var f = new ir(a, "app");
                                        f._start = s, f.end(u), r.push(f)
                                    }
                                }
                                return r
                            }(ue.getEntriesByType(nn), i, e).forEach((function(e) {
                                return t.spans.push(e)
                            }))
                    }
                }
            }

            function hr(t) {
                return {
                    ts: t.transfer_size,
                    ebs: t.encoded_body_size,
                    dbs: t.decoded_body_size
                }
            }

            function pr(t) {
                if (!t) return null;
                var e = {},
                    n = t.page,
                    r = t.http,
                    i = t.response,
                    o = t.destination,
                    a = t.user,
                    s = t.custom;
                if (n && (e.p = {
                        rf: n.referer,
                        url: n.url
                    }), r && (e.h = function(t) {
                        var e = {},
                            n = t.method,
                            r = t.status_code,
                            i = t.url,
                            o = t.response;
                        return e.url = i, n && (e.mt = n), r && (e.sc = r), o && (e.r = hr(o)), e
                    }(r)), i && (e.r = hr(i)), o) {
                    var c = o.service;
                    e.dt = {
                        se: {
                            n: c.name,
                            t: c.type,
                            rc: c.resource
                        },
                        ad: o.address,
                        po: o.port
                    }
                }
                return a && (e.u = {
                    id: a.id,
                    un: a.username,
                    em: a.email
                }), s && (e.cu = s), e
            }

            function vr(t) {
                if (!t) return null;
                var e = t.navigationTiming,
                    n = t.agent,
                    r = {
                        nt: {}
                    };
                fr.forEach((function(t, n) {
                    var i = ur[n];
                    r.nt[t] = e[i]
                })), r.a = {
                    fb: r.nt.rs,
                    di: r.nt.di,
                    dc: r.nt.dc
                };
                var i = n.firstContentfulPaint,
                    o = n.largestContentfulPaint;
                return i && (r.a.fp = i), o && (r.a.lp = o), r
            }
            var gr = function() {
                function t(t, e) {
                    this._configService = t, this._loggingService = e, this.queue = void 0, this.throttleEvents = Se
                }
                var e = t.prototype;
                return e.init = function() {
                    var t = this,
                        e = this._configService.get("queueLimit"),
                        n = this._configService.get("flushInterval"),
                        r = this._configService.get("eventsLimit");
                    this.queue = new er((function(e) {
                        var n = t.sendEvents(e);
                        n && n.catch((function(e) {
                            t._loggingService.warn("Failed sending events!", t._constructError(e))
                        }))
                    }), {
                        queueLimit: e,
                        flushInterval: n
                    }), this.throttleEvents = function(t, e, n) {
                        var r, i = this,
                            o = n.limit,
                            a = n.interval,
                            s = 0;
                        return function() {
                            return s++, "undefined" === typeof r && (r = setTimeout((function() {
                                s = 0, r = void 0
                            }), a)), s > o && "function" === typeof e ? e.apply(i, arguments) : t.apply(i, arguments)
                        }
                    }(this.queue.add.bind(this.queue), (function() {
                        return t._loggingService.warn("Dropped events due to throttling!")
                    }), {
                        limit: r,
                        interval: 6e4
                    })
                }, e._postJson = function(t, e) {
                    var n = this,
                        r = {
                            "Content-Type": "application/x-ndjson"
                        };
                    return function(t, e, n) {
                        void 0 === n && (n = "gzip");
                        var r = "function" === typeof CompressionStream;
                        return new ae((function(i) {
                            if (!r) return i({
                                payload: t,
                                headers: e
                            });
                            var o = new Blob([t]).stream().pipeThrough(new CompressionStream(n));
                            return new Response(o).blob().then((function(t) {
                                return e["Content-Encoding"] = n, i({
                                    payload: t,
                                    headers: e
                                })
                            }))
                        }))
                    }(e, r).catch((function(t) {
                        return {
                            payload: e,
                            headers: r
                        }
                    })).then((function(e) {
                        return n._makeHttpRequest("POST", t, e)
                    })).then((function(t) {
                        return t.responseText
                    }))
                }, e._constructError = function(t) {
                    var e = t.url,
                        n = t.status;
                    t.responseText;
                    if ("undefined" == typeof n) return t;
                    var r = e + " HTTP status: " + n;
                    return new Error(r)
                }, e._makeHttpRequest = function(t, e, n) {
                    var r = void 0 === n ? {} : n,
                        i = r.timeout,
                        o = void 0 === i ? 1e4 : i,
                        a = r.payload,
                        s = r.headers;
                    return new ae((function(n, r) {
                        var i = new window.XMLHttpRequest;
                        if (i[Ne] = !0, i.open(t, e, !0), i.timeout = o, s)
                            for (var c in s) s.hasOwnProperty(c) && i.setRequestHeader(c, s[c]);
                        i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                var t = i.status,
                                    o = i.responseText;
                                0 === t || t > 399 && t < 600 ? r({
                                    url: e,
                                    status: t,
                                    responseText: o
                                }) : n(i)
                            }
                        }, i.onerror = function() {
                            var t = i.status,
                                n = i.responseText;
                            r({
                                url: e,
                                status: t,
                                responseText: n
                            })
                        }, i.send(a)
                    }))
                }, e.fetchConfig = function(t, e) {
                    var n = this,
                        r = this._configService.get("serverUrl") + "/config/v1/rum/agents";
                    if (!t) return ae.reject("serviceName is required for fetching central config.");
                    r += "?service.name=" + t, e && (r += "&service.environment=" + e);
                    var i = this._configService.getLocalConfig();
                    return i && (r += "&ifnonematch=" + i.etag), this._makeHttpRequest("GET", r, {
                        timeout: 5e3
                    }).then((function(t) {
                        var e = t.status,
                            r = t.responseText;
                        if (304 === e) return i;
                        var o = JSON.parse(r),
                            a = t.getResponseHeader("etag");
                        return a && (o.etag = a.replace(/["]/g, ""), n._configService.setLocalConfig(o)), o
                    })).catch((function(t) {
                        var e = n._constructError(t);
                        return ae.reject(e)
                    }))
                }, e.createMetaData = function() {
                    var t = this._configService,
                        e = {
                            service: {
                                name: t.get("serviceName"),
                                version: t.get("serviceVersion"),
                                agent: {
                                    name: "rum-js",
                                    version: t.version
                                },
                                language: {
                                    name: "javascript"
                                },
                                environment: t.get("environment")
                            },
                            labels: t.get("context.tags")
                        };
                    return Qn(qn, e)
                }, e.addError = function(t) {
                    var e;
                    this.throttleEvents(((e = {}).errors = t, e))
                }, e.addTransaction = function(t) {
                    var e;
                    this.throttleEvents(((e = {}).transactions = t, e))
                }, e.ndjsonErrors = function(t, e) {
                    var n = e ? "e" : "error";
                    return t.map((function(t) {
                        var r;
                        return nr.stringify(((r = {})[n] = e ? function(t) {
                            var e, n = t.exception,
                                r = {
                                    id: t.id,
                                    cl: t.culprit,
                                    ex: {
                                        mg: n.message,
                                        st: (e = n.stacktrace, e.map((function(t) {
                                            return {
                                                ap: t.abs_path,
                                                f: t.filename,
                                                fn: t.function,
                                                li: t.lineno,
                                                co: t.colno
                                            }
                                        }))),
                                        t: t.type
                                    },
                                    c: pr(t.context)
                                },
                                i = t.transaction;
                            return i && (r.tid = t.trace_id, r.pid = t.parent_id, r.xid = t.transaction_id, r.x = {
                                t: i.type,
                                sm: i.sampled
                            }), r
                        }(t) : t, r))
                    }))
                }, e.ndjsonMetricsets = function(t) {
                    return t.map((function(t) {
                        return nr.stringify({
                            metricset: t
                        })
                    })).join("")
                }, e.ndjsonTransactions = function(t, e) {
                    var n = this,
                        r = e ? "x" : "transaction";
                    return t.map((function(t) {
                        var i, o = "",
                            a = "";
                        return e || (t.spans && (o = t.spans.map((function(t) {
                            return nr.stringify({
                                span: t
                            })
                        })).join(""), delete t.spans), t.breakdown && (a = n.ndjsonMetricsets(t.breakdown), delete t.breakdown)), nr.stringify(((i = {})[r] = e ? function(t) {
                            var e, n = t.spans.map((function(e) {
                                    var n = {
                                        id: e.id,
                                        n: e.name,
                                        t: e.type,
                                        s: e.start,
                                        d: e.duration,
                                        c: pr(e.context),
                                        o: e.outcome
                                    };
                                    return e.parent_id !== t.id && (n.pid = e.parent_id), !0 === e.sync && (n.sy = !0), e.subtype && (n.su = e.subtype), e.action && (n.ac = e.action), n
                                })),
                                r = {
                                    id: t.id,
                                    tid: t.trace_id,
                                    n: t.name,
                                    t: t.type,
                                    d: t.duration,
                                    c: pr(t.context),
                                    m: vr(t.marks),
                                    me: (e = t.breakdown, e.map((function(t) {
                                        var e = t.span,
                                            n = t.samples,
                                            r = null != e;
                                        return r ? {
                                            y: {
                                                t: e.type
                                            },
                                            sa: {
                                                ysc: {
                                                    v: n["span.self_time.count"].value
                                                },
                                                yss: {
                                                    v: n["span.self_time.sum.us"].value
                                                }
                                            }
                                        } : {
                                            sa: {
                                                xdc: {
                                                    v: n["transaction.duration.count"].value
                                                },
                                                xds: {
                                                    v: n["transaction.duration.sum.us"].value
                                                },
                                                xbc: {
                                                    v: n["transaction.breakdown.count"].value
                                                }
                                            }
                                        }
                                    }))),
                                    y: n,
                                    yc: {
                                        sd: n.length
                                    },
                                    sm: t.sampled,
                                    o: t.outcome
                                };
                            if (t.experience) {
                                var i = t.experience,
                                    o = i.cls,
                                    a = i.fid,
                                    s = i.tbt,
                                    c = i.longtask;
                                r.exp = {
                                    cls: o,
                                    fid: a,
                                    tbt: s,
                                    lt: c
                                }
                            }
                            return r
                        }(t) : t, i)) + o + a
                    }))
                }, e.sendEvents = function(t) {
                    var e, n;
                    if (0 !== t.length) {
                        for (var r = [], i = [], o = 0; o < t.length; o++) {
                            var a = t[o];
                            a.transactions && r.push(a.transactions), a.errors && i.push(a.errors)
                        }
                        if (0 !== r.length || 0 !== i.length) {
                            var s = this._configService,
                                c = ((e = {}).transactions = r, e.errors = i, e),
                                u = s.applyFilters(c);
                            if (u) {
                                var f = s.get("apiVersion"),
                                    d = f > 2,
                                    l = [],
                                    h = this.createMetaData(),
                                    p = d ? "m" : "metadata";
                                l.push(nr.stringify(((n = {})[p] = d ? function(t) {
                                    var e = t.service,
                                        n = t.labels,
                                        r = e.agent,
                                        i = e.language;
                                    return {
                                        se: {
                                            n: e.name,
                                            ve: e.version,
                                            a: {
                                                n: r.name,
                                                ve: r.version
                                            },
                                            la: {
                                                n: i.name
                                            },
                                            en: e.environment
                                        },
                                        l: n
                                    }
                                }(h) : h, n)));
                                var v = (l = l.concat(this.ndjsonErrors(u.errors, d), this.ndjsonTransactions(u.transactions, d))).join(""),
                                    g = s.get("serverUrl") + "/intake/v" + f + "/rum/events";
                                return this._postJson(g, v)
                            }
                            this._loggingService.warn("Dropped payload due to filtering!")
                        }
                    }
                }, t
            }();
            var mr, yr = function() {
                    function t() {
                        this.config = {
                            serviceName: "",
                            serviceVersion: "",
                            environment: "",
                            serverUrl: "http://localhost:8200",
                            active: !0,
                            instrument: !0,
                            disableInstrumentations: [],
                            logLevel: "warn",
                            breakdownMetrics: !1,
                            ignoreTransactions: [],
                            eventsLimit: 80,
                            queueLimit: -1,
                            flushInterval: 500,
                            distributedTracing: !0,
                            distributedTracingOrigins: [],
                            distributedTracingHeaderName: "traceparent",
                            pageLoadTraceId: "",
                            pageLoadSpanId: "",
                            pageLoadSampled: !1,
                            pageLoadTransactionName: "",
                            transactionSampleRate: 1,
                            centralConfig: !1,
                            monitorLongtasks: !0,
                            apiVersion: 2,
                            context: {}
                        }, this.events = new wn, this.filters = [], this.version = ""
                    }
                    var e = t.prototype;
                    return e.init = function() {
                        var t = function(t) {
                            if (!t) return {};
                            for (var e = {}, n = /^data-([\w-]+)$/, r = t.attributes, i = 0; i < r.length; i++) {
                                var o = r[i];
                                if (n.test(o.nodeName)) {
                                    var a = o.nodeName.match(n)[1].split("-").map((function(t, e) {
                                        return e > 0 ? t.charAt(0).toUpperCase() + t.substring(1) : t
                                    })).join("");
                                    e[a] = o.value || o.nodeValue
                                }
                            }
                            return e
                        }(be());
                        this.setConfig(t)
                    }, e.setVersion = function(t) {
                        this.version = t
                    }, e.addFilter = function(t) {
                        if ("function" !== typeof t) throw new Error("Argument to must be function");
                        this.filters.push(t)
                    }, e.applyFilters = function(t) {
                        for (var e = 0; e < this.filters.length; e++)
                            if (!(t = this.filters[e](t))) return;
                        return t
                    }, e.get = function(t) {
                        return t.split(".").reduce((function(t, e) {
                            return t && t[e]
                        }), this.config)
                    }, e.setUserContext = function(t) {
                        void 0 === t && (t = {});
                        var e = {},
                            n = t,
                            r = n.id,
                            i = n.username,
                            o = n.email;
                        "number" !== typeof r && "string" !== typeof r || (e.id = r), "string" === typeof i && (e.username = i), "string" === typeof o && (e.email = o), this.config.context.user = we(this.config.context.user || {}, e)
                    }, e.setCustomContext = function(t) {
                        void 0 === t && (t = {}), this.config.context.custom = we(this.config.context.custom || {}, t)
                    }, e.addLabels = function(t) {
                        var e = this;
                        this.config.context.tags || (this.config.context.tags = {}), Object.keys(t).forEach((function(n) {
                            return ge(n, t[n], e.config.context.tags)
                        }))
                    }, e.setConfig = function(t) {
                        void 0 === t && (t = {});
                        var e = t,
                            n = e.transactionSampleRate,
                            r = e.serverUrl;
                        r && (t.serverUrl = r.replace(/\/+$/, "")), Ee(n) || (n < 1e-4 && n > 0 && (n = 1e-4), t.transactionSampleRate = Math.round(1e4 * n) / 1e4), xe(this.config, t), this.events.send("config:change", [this.config])
                    }, e.validate = function(t) {
                        void 0 === t && (t = {});
                        var e = ["serviceName", "serverUrl"],
                            n = {
                                missing: [],
                                invalid: []
                            };
                        Object.keys(t).forEach((function(r) {
                            -1 === e.indexOf(r) || t[r] || n.missing.push(r)
                        })), t.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(t.serviceName) && n.invalid.push({
                            key: "serviceName",
                            value: t.serviceName,
                            allowed: "a-z, A-Z, 0-9, _, -, <space>"
                        });
                        var r = t.transactionSampleRate;
                        return "undefined" !== typeof r && ("number" !== typeof r || isNaN(r) || r < 0 || r > 1) && n.invalid.push({
                            key: "transactionSampleRate",
                            value: r,
                            allowed: "Number between 0 and 1"
                        }), n
                    }, e.getLocalConfig = function() {
                        var t = sessionStorage.getItem("elastic_apm_config");
                        if (t) return JSON.parse(t)
                    }, e.setLocalConfig = function(t) {
                        t && sessionStorage.setItem("elastic_apm_config", JSON.stringify(t))
                    }, t
                }(),
                _r = function() {
                    function t(t) {
                        void 0 === t && (t = {}), this.levels = ["trace", "debug", "info", "warn", "error"], this.level = t.level || "warn", this.prefix = t.prefix || "", this.resetLogMethods()
                    }
                    var e = t.prototype;
                    return e.shouldLog = function(t) {
                        return this.levels.indexOf(t) >= this.levels.indexOf(this.level)
                    }, e.setLevel = function(t) {
                        t !== this.level && (this.level = t, this.resetLogMethods())
                    }, e.resetLogMethods = function() {
                        var t = this;
                        this.levels.forEach((function(e) {
                            t[e] = t.shouldLog(e) ? function() {
                                var t = e;
                                "trace" !== e && "debug" !== e || (t = "info");
                                var n = arguments;
                                if (n[0] = this.prefix + n[0], console) {
                                    var r = console[t] || console.log;
                                    "function" === typeof r && r.apply(console, n)
                                }
                            } : Se
                        }))
                    }, t
                }(),
                br = ((mr = {})[fn] = function() {
                    return new yr
                }, mr[dn] = function() {
                    return new _r({
                        prefix: "[Elastic APM] "
                    })
                }, mr[ln] = function(t) {
                    var e = t.getService([fn, dn]),
                        n = e[0],
                        r = e[1];
                    return new gr(n, r)
                }, mr),
                wr = function() {
                    function t() {
                        this.instances = {}, this.initialized = !1
                    }
                    var e = t.prototype;
                    return e.init = function() {
                        if (!this.initialized) {
                            this.initialized = !0;
                            var t = this.getService(fn);
                            t.init();
                            var e = this.getService([dn, ln]),
                                n = e[0],
                                r = e[1];
                            t.events.observe("config:change", (function() {
                                var e = t.get("logLevel");
                                n.setLevel(e)
                            })), r.init()
                        }
                    }, e.getService = function(t) {
                        var e = this;
                        return "string" === typeof t ? (this.instances[t] || "function" === typeof br[t] && (this.instances[t] = br[t](this)), this.instances[t]) : Array.isArray(t) ? t.map((function(t) {
                            return e.getService(t)
                        })) : void 0
                    }, t
                }();
            var xr = .05;
            var Er = function() {
                    function t(t, e, n, r) {
                        this._apmServer = t, this._configService = e, this._logginService = n, this._transactionService = r
                    }
                    var e = t.prototype;
                    return e.init = function(t) {
                        var e = this;
                        void 0 === t && (t = {}), this._configService.events.observe("transaction:end:after", (function(t) {
                            var n = e.createTransactionPayload(t);
                            n && e._apmServer.addTransaction(n)
                        })), t[Qe] && xn.observe(Qe, this.getHistorySub()), t[Je] && xn.observe(Je, this.getXHRSub()), t[Ye] && xn.observe(Ye, this.getFetchSub()), t[Ze] && xn.observe(Ze, this.getEventTargetSub())
                    }, e.getEventTargetSub = function() {
                        var t = this._transactionService;
                        return function(e, n) {
                            if (e === Ue && n.source === Ze && "click" === n.eventType) {
                                var r = n.target,
                                    i = r.getAttribute("name"),
                                    o = "";
                                i && (o = '["' + i + '"]');
                                var a = r.tagName.toLowerCase(),
                                    s = t.startTransaction("Click - " + a + o, "user-interaction", {
                                        managed: !0,
                                        canReuse: !0,
                                        reuseThreshold: 100
                                    });
                                if (s) {
                                    var c = r.getAttribute("class");
                                    c && s.addContext({
                                        custom: {
                                            classes: c
                                        }
                                    })
                                }
                            }
                        }
                    }, e.getHistorySub = function() {
                        var t = this._transactionService;
                        return function(e, n) {
                            n.source === Qe && e === He && t.startTransaction(n.data.title, "route-change", {
                                managed: !0,
                                canReuse: !0
                            })
                        }
                    }, e.getXHRSub = function() {
                        var t = this;
                        return function(e, n) {
                            n.source !== Je || Le.fetchInProgress || t.processAPICalls(e, n)
                        }
                    }, e.getFetchSub = function() {
                        var t = this;
                        return function(e, n) {
                            n.source === Ye && t.processAPICalls(e, n)
                        }
                    }, e.processAPICalls = function(t, e) {
                        var n = this._configService,
                            r = this._transactionService;
                        if (t === Ue && e.data) {
                            var i = e.data,
                                o = new Dn(i.url),
                                a = i.method + " " + (o.relative ? o.path : me(o.href));
                            r.getCurrentTransaction() || r.startTransaction(a, "http-request", {
                                managed: !0
                            });
                            var s = r.startSpan(a, "external.http", {
                                blocking: !0
                            });
                            if (!s) return;
                            var c = n.get("distributedTracing"),
                                u = n.get("distributedTracingOrigins"),
                                f = new Dn(window.location.href),
                                d = pe(o.origin, f.origin) || pe(o.origin, u),
                                l = i.target;
                            c && d && l && this.injectDtHeader(s, l), i.sync && (s.sync = i.sync), i.span = s
                        } else if (t === He) {
                            var h = e.data;
                            if (h && h.span) {
                                var p, v, g = h.span,
                                    m = h.response,
                                    y = h.target;
                                p = m ? m.status : y.status, "abort" != h.status && (v = p >= 400 || 0 == p ? "failure" : "success"), g.outcome = v;
                                var _ = r.getCurrentTransaction();
                                _ && "http-request" === _.type && (_.outcome = v), r.endSpan(g, h)
                            }
                        }
                    }, e.injectDtHeader = function(t, e) {
                        var n, r = this._configService.get("distributedTracingHeaderName"),
                            i = function(t) {
                                if (t && t.traceId && t.id && t.parentId) {
                                    var e = t.sampled ? "01" : "00",
                                        n = t.sampled ? t.id : t.parentId;
                                    return "00-" + t.traceId + "-" + n + "-" + e
                                }
                            }(t),
                            o = /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(n = i) && "00000000000000000000000000000000" !== n.slice(3, 35) && "0000000000000000" !== n.slice(36, 52);
                        r && i && o && ("function" === typeof e.setRequestHeader ? e.setRequestHeader(r, i) : e.headers && "function" === typeof e.headers.append ? e.headers.append(r, i) : e[r] = i)
                    }, e.extractDtHeader = function(t) {
                        var e = this._configService.get("distributedTracingHeaderName");
                        if (t) return function(t) {
                            var e = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(t);
                            if (e) {
                                var n = "00" !== e[4];
                                return {
                                    traceId: e[2],
                                    id: e[3],
                                    sampled: n
                                }
                            }
                        }(t[e])
                    }, e.filterTransaction = function(t) {
                        var e = t.duration();
                        if (!e) return !1;
                        if (t.isManaged()) {
                            if (e > 6e4) return !1;
                            if (t.sampled && 0 === t.spans.length) return !1
                        }
                        return !0
                    }, e.createTransactionDataModel = function(t) {
                        var e = t._start,
                            n = t.spans.map((function(n) {
                                var r = {
                                    id: n.id,
                                    transaction_id: t.id,
                                    parent_id: n.parentId || t.id,
                                    trace_id: t.traceId,
                                    name: n.name,
                                    type: n.type,
                                    subtype: n.subtype,
                                    action: n.action,
                                    sync: n.sync,
                                    start: parseInt(n._start - e),
                                    duration: n.duration(),
                                    context: n.context,
                                    outcome: n.outcome
                                };
                                return Qn(Gn, r)
                            })),
                            r = {
                                id: t.id,
                                trace_id: t.traceId,
                                name: t.name,
                                type: t.type,
                                duration: t.duration(),
                                spans: n,
                                context: t.context,
                                marks: t.marks,
                                breakdown: t.breakdownTimings,
                                span_count: {
                                    started: n.length
                                },
                                sampled: t.sampled,
                                experience: t.experience,
                                outcome: t.outcome
                            };
                        return Qn(Wn, r)
                    }, e.createTransactionPayload = function(t) {
                        var e = function(t) {
                            if (t.sampled) {
                                var e = t.spans.filter((function(e) {
                                    return e.duration() > 0 && e._start >= t._start && e._end <= t._end
                                }));
                                if (t.isManaged()) {
                                    var n = function(t, e, n) {
                                        t.sort((function(t, e) {
                                            return t._start - e._start
                                        }));
                                        var r = [],
                                            i = 1;
                                        return t.forEach((function(o, a) {
                                            if (0 === r.length) r.push(o);
                                            else {
                                                var s = r[r.length - 1],
                                                    c = s.type === o.type && s.subtype === o.subtype && s.action === o.action && s.name === o.name && o.duration() / e < n && (o._start - s._end) / e < n,
                                                    u = t.length === a + 1;
                                                c && (i++, s._end = o._end), i > 1 && (!c || u) && (s.name = i + "x " + s.name, i = 1), c || r.push(o)
                                            }
                                        })), r
                                    }(e, t.duration(), xr);
                                    t.spans = n
                                } else t.spans = e
                            } else t.resetSpans();
                            return t
                        }(t);
                        if (this.filterTransaction(e)) return this.createTransactionDataModel(t)
                    }, t
                }(),
                Sr = [
                    ["domainLookupStart", "domainLookupEnd", "DNS"],
                    ["connectStart", "connectEnd", "TCP"],
                    ["requestStart", "responseStart", "Request"],
                    ["responseStart", "responseEnd", "Response"],
                    ["domLoading", "domComplete", "Processing"],
                    ["loadEventStart", "loadEventEnd", "Load"]
                ];

            function Tr(t) {
                return {
                    value: t
                }
            }

            function Or(t, e) {
                var n = e.details,
                    r = e.count,
                    i = void 0 === r ? 1 : r,
                    o = e.duration;
                return {
                    transaction: t,
                    span: n,
                    samples: {
                        "span.self_time.count": Tr(i),
                        "span.self_time.sum.us": Tr(o)
                    }
                }
            }

            function Ir(t, e) {
                void 0 === e && (e = ue.timing);
                var n = [],
                    r = t.duration(),
                    i = t.name,
                    o = t.type,
                    a = t.sampled,
                    s = {
                        name: i,
                        type: o
                    };
                if (n.push({
                        transaction: s,
                        samples: {
                            "transaction.duration.count": Tr(1),
                            "transaction.duration.sum.us": Tr(r),
                            "transaction.breakdown.count": Tr(a ? 1 : 0)
                        }
                    }), !a) return n;
                if (o === Ke && e)
                    for (var c = 0; c < Sr.length; c++) {
                        var u = Sr[c],
                            f = Ae(e[u[0]], e[u[1]]);
                        0 !== f && null != f && n.push(Or(s, {
                            details: {
                                type: u[2]
                            },
                            duration: f
                        }))
                    } else {
                        var d = function(t) {
                            var e = {},
                                n = function(t) {
                                    var e = t.spans,
                                        n = t._start,
                                        r = t._end;
                                    if (0 === e.length) return t.duration();
                                    e.sort((function(t, e) {
                                        return t._start - e._start
                                    }));
                                    for (var i = e[0], o = i._end, a = i._start, s = o, c = a - n, u = 1; u < e.length; u++) a = (i = e[u])._start, o = i._end, a > s ? (c += a - s, s = o) : o > s && (s = o);
                                    return s < r && (c += r - s), c
                                }(t);
                            e.app = {
                                count: 1,
                                duration: n
                            };
                            for (var r = t.spans, i = 0; i < r.length; i++) {
                                var o = r[i],
                                    a = o.duration();
                                if (0 !== a && null != a) {
                                    var s = o.type,
                                        c = o.subtype,
                                        u = s.replace(hn, "");
                                    c && (u += "." + c), e[u] || (e[u] = {
                                        duration: 0,
                                        count: 0
                                    }), e[u].count++, e[u].duration += a
                                }
                            }
                            return e
                        }(t);
                        Object.keys(d).forEach((function(t) {
                            var e = t.split("."),
                                r = e[0],
                                i = e[1],
                                o = d[t],
                                a = o.duration,
                                c = o.count;
                            n.push(Or(s, {
                                details: {
                                    type: r,
                                    subtype: i
                                },
                                duration: a,
                                count: c
                            }))
                        }))
                    }
                return n
            }
            var Ar = function(t) {
                    var e, n;

                    function r(e, n, r) {
                        var i;
                        return (i = t.call(this, e, n, r) || this).traceId = he(), i.marks = void 0, i.spans = [], i._activeSpans = {}, i._activeTasks = new Set, i.blocked = !1, i.captureTimings = !1, i.breakdownTimings = [], i.sampled = Math.random() <= i.options.transactionSampleRate, i
                    }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
                    var i = r.prototype;
                    return i.addMarks = function(t) {
                        this.marks = xe(this.marks || {}, t)
                    }, i.mark = function(t) {
                        var e = Te(t),
                            n = Oe() - this._start,
                            r = {};
                        r[e] = n, this.addMarks({
                            custom: r
                        })
                    }, i.canReuse = function() {
                        var t = this.options.reuseThreshold || 5e3;
                        return !!this.options.canReuse && !this.ended && Oe() - this._start < t
                    }, i.redefine = function(t, e, n) {
                        t && (this.name = t), e && (this.type = e), n && we(this.options, n)
                    }, i.startSpan = function(t, e, n) {
                        var r = this;
                        if (!this.ended) {
                            var i = we({}, n);
                            i.onEnd = function(t) {
                                r._onSpanEnd(t)
                            }, i.traceId = this.traceId, i.sampled = this.sampled, i.parentId || (i.parentId = this.id);
                            var o = new ir(t, e, i);
                            return this._activeSpans[o.id] = o, i.blocking && this.addTask(o.id), o
                        }
                    }, i.isFinished = function() {
                        return !this.blocked && 0 === this._activeTasks.size
                    }, i.detectFinish = function() {
                        this.isFinished() && this.end()
                    }, i.end = function(t) {
                        if (!this.ended) {
                            for (var e in this.ended = !0, this._end = Ie(t), this._activeSpans) {
                                var n = this._activeSpans[e];
                                n.type = n.type + hn, n.end(t)
                            }
                            this.callOnEnd()
                        }
                    }, i.captureBreakdown = function() {
                        this.breakdownTimings = Ir(this)
                    }, i.block = function(t) {
                        this.blocked = t, this.blocked || this.detectFinish()
                    }, i.addTask = function(t) {
                        return t || (t = "task-" + he(16)), this._activeTasks.add(t), t
                    }, i.removeTask = function(t) {
                        this._activeTasks.delete(t) && this.detectFinish()
                    }, i.resetSpans = function() {
                        this.spans = []
                    }, i._onSpanEnd = function(t) {
                        this.spans.push(t), delete this._activeSpans[t.id], this.removeTask(t.id)
                    }, i.isManaged = function() {
                        return !!this.options.managed
                    }, r
                }(rr),
                jr = {
                    fid: 0,
                    fcp: 0,
                    tbt: {
                        start: 1 / 0,
                        duration: 0
                    },
                    cls: 0,
                    longtask: {
                        count: 0,
                        duration: 0,
                        max: 0
                    }
                },
                kr = 50;

            function Pr(t, e) {
                var n = e.capturePaint,
                    r = t.getEntriesByType(en),
                    i = {
                        spans: function(t, e) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                var i = t[r],
                                    o = i.name,
                                    a = i.startTime,
                                    s = i.duration,
                                    c = i.attribution,
                                    u = a + s,
                                    f = new ir("Longtask(" + o + ")", en, {
                                        startTime: a
                                    });
                                if (e.count++, e.duration += s, s > e.max && (e.max = s), c.length > 0) {
                                    var d = c[0],
                                        l = d.name,
                                        h = d.containerType,
                                        p = d.containerName,
                                        v = d.containerId,
                                        g = {
                                            attribution: l,
                                            type: h
                                        };
                                    p && (g.name = p), v && (g.id = v), f.addContext({
                                        custom: g
                                    })
                                }
                                f.end(u), n.push(f)
                            }
                            return n
                        }(r, jr.longtask),
                        marks: {}
                    };
                if (!n) return i;
                var o = t.getEntriesByType(sn),
                    a = o[o.length - 1];
                if (a) {
                    var s = parseInt(a.startTime);
                    jr.lcp = s, i.marks.largestContentfulPaint = s
                }
                var c = ue.timing,
                    u = c.fetchStart - c.navigationStart,
                    f = t.getEntriesByName(an)[0];
                if (f) {
                    var d = parseInt(u >= 0 ? f.startTime - u : f.startTime);
                    jr.fcp = d, i.marks.firstContentfulPaint = d
                }
                var l = function(t) {
                    var e = t[0];
                    if (e) {
                        var n = e.startTime,
                            r = e.processingStart,
                            i = new ir("First Input Delay", cn, {
                                startTime: n
                            });
                        return i.end(r), i
                    }
                }(t.getEntriesByType(cn));
                return l && (jr.fid = l.duration(), i.spans.push(l)),
                    function(t) {
                        t.forEach((function(t) {
                            var e = t.name,
                                n = t.startTime,
                                r = t.duration;
                            if (!(n < jr.fcp) && ("self" === e || -1 !== e.indexOf("same-origin"))) {
                                jr.tbt.start = Math.min(jr.tbt.start, n);
                                var i = r - kr;
                                i > 0 && (jr.tbt.duration += i)
                            }
                        }))
                    }(r),
                    function(t) {
                        t.forEach((function(t) {
                            t.hadRecentInput || (jr.cls += t.value)
                        }))
                    }(t.getEntriesByType(un)), i
            }
            var Lr = function() {
                    function t(t) {
                        this.po = {
                            observe: Se,
                            disconnect: Se
                        }, window.PerformanceObserver && (this.po = new PerformanceObserver(t))
                    }
                    var e = t.prototype;
                    return e.start = function(t) {
                        try {
                            var e = !0;
                            t === en && (e = !1), this.po.observe({
                                type: t,
                                buffered: e
                            })
                        } catch (n) {}
                    }, e.stop = function() {
                        this.po.disconnect()
                    }, t
                }(),
                Dr = function() {
                    function t(t, e) {
                        var n = this;
                        this._config = e, this._logger = t, this.currentTransaction = void 0, this.respIntervalId = void 0, this.recorder = new Lr((function(t) {
                            var e = n.getCurrentTransaction();
                            if (e && e.captureTimings) {
                                var r, i = !1;
                                e.type === Ke && (i = !0);
                                var o = Pr(t, {
                                        capturePaint: i
                                    }),
                                    a = o.spans,
                                    s = o.marks;
                                (r = e.spans).push.apply(r, a), e.addMarks({
                                    agent: s
                                })
                            }
                        }))
                    }
                    var e = t.prototype;
                    return e.createCurrentTransaction = function(t, e, n) {
                        var r = new Ar(t, e, n);
                        return this.currentTransaction = r, r
                    }, e.getCurrentTransaction = function() {
                        if (this.currentTransaction && !this.currentTransaction.ended) return this.currentTransaction
                    }, e.createOptions = function(t) {
                        var e = this._config.config,
                            n = we({
                                transactionSampleRate: e.transactionSampleRate
                            }, t);
                        return n.managed && (n = we({
                            pageLoadTraceId: e.pageLoadTraceId,
                            pageLoadSampled: e.pageLoadSampled,
                            pageLoadSpanId: e.pageLoadSpanId,
                            pageLoadTransactionName: e.pageLoadTransactionName
                        }, n)), n
                    }, e.startManagedTransaction = function(t, e, n) {
                        var r = this.getCurrentTransaction(),
                            i = !1;
                        if (r)
                            if (r.canReuse() && n.canReuse) {
                                var o = r.type,
                                    a = We.indexOf(r.type),
                                    s = We.indexOf(e);
                                a >= 0 && s < a && (o = e), r.redefine(t, o, n), i = !0
                            } else r.end(), r = this.createCurrentTransaction(t, e, n);
                        else r = this.createCurrentTransaction(t, e, n);
                        return r.type === Ke && (i || (this.recorder.start(sn), this.recorder.start("paint"), this.recorder.start(cn), this.recorder.start(un)), n.pageLoadTraceId && (r.traceId = n.pageLoadTraceId), n.pageLoadSampled && (r.sampled = n.pageLoadSampled), r.name === Ge && n.pageLoadTransactionName && (r.name = n.pageLoadTransactionName)), !i && this._config.get("monitorLongtasks") && this.recorder.start(en), r.sampled && (r.captureTimings = !0), r
                    }, e.startTransaction = function(t, e, n) {
                        var r, i = this,
                            o = this.createOptions(n),
                            a = !0;
                        o.managed ? this.currentTransaction === (r = this.startManagedTransaction(t, e, o)) && (a = !1) : r = new Ar(t, e, o);
                        return r.onEnd = function() {
                            return i.handleTransactionEnd(r)
                        }, a && this._config.events.send("transaction:start", [r]), r
                    }, e.handleTransactionEnd = function(t) {
                        var e = this;
                        this.recorder.stop();
                        var n = window.location.href;
                        return ae.resolve().then((function() {
                            var r = t.name,
                                i = t.type;
                            if (!(Tn.lastHiddenStart >= t._start) && !e.shouldIgnoreTransaction(r) && "temporary" !== i) {
                                if (i === Ke) {
                                    var o = e._config.get("pageLoadTransactionName");
                                    if (r === Ge && o && (t.name = o), t.captureTimings) {
                                        var a = jr.cls,
                                            s = jr.fid,
                                            c = jr.tbt,
                                            u = jr.longtask;
                                        c.duration > 0 && t.spans.push(function(t) {
                                            var e = t.start,
                                                n = t.duration,
                                                r = new ir("Total Blocking Time", en, {
                                                    startTime: e
                                                });
                                            return r.end(e + n), r
                                        }(c)), t.experience = {}, Pe(en) && (t.experience.tbt = c.duration), Pe(un) && (t.experience.cls = a), s > 0 && (t.experience.fid = s), u.count > 0 && (t.experience.longtask = {
                                            count: u.count,
                                            sum: u.duration,
                                            max: u.max
                                        })
                                    }
                                }
                                t.name === Ge && (t.name = function(t, e) {
                                    void 0 === e && (e = 2);
                                    for (var n = new Dn(t), r = n.query, i = n.path.substring(1).split("/"), o = /\W|_/g, a = /[0-9]/g, s = /[a-z]/g, c = /[A-Z]/g, u = [], f = !1, d = 0; d < i.length; d++) {
                                        var l = i[d];
                                        if (f || d > e - 1) {
                                            l && u.push("*");
                                            break
                                        }
                                        if ((l.match(o) || []).length >= 2) u.push(":id"), f = !0;
                                        else {
                                            var h = (l.match(a) || []).length;
                                            if (h > 3 || l.length > 3 && h / l.length >= .3) u.push(":id"), f = !0;
                                            else {
                                                var p = (l.match(c) || []).length,
                                                    v = (l.match(s) || []).length / l.length,
                                                    g = p / l.length;
                                                l.length > 5 && (g > .3 && g < .6 || v > .3 && v < .6) ? (u.push(":id"), f = !0) : l && u.push(l)
                                            }
                                        }
                                    }
                                    return "/" + (u.length >= 2 ? u.join("/") : u.join("")) + (r ? "?{query}" : "")
                                }(n)), lr(t), e.adjustTransactionTime(t), e._config.get("breakdownMetrics") && t.captureBreakdown();
                                var f = e._config.get("context");
                                zn(t, f), e._config.events.send("transaction:end", [t])
                            }
                        }), (function(t) {
                            0
                        }))
                    }, e.adjustTransactionTime = function(t) {
                        var e = t.spans,
                            n = function(t) {
                                for (var e = t[0], n = 1; n < t.length; n++) {
                                    var r = t[n];
                                    e._start > r._start && (e = r)
                                }
                                return e
                            }(e);
                        n && n._start < t._start && (t._start = n._start);
                        var r = function(t) {
                            for (var e = null, n = 0; n < t.length; n++) {
                                var r = t[n]; - 1 === String(r.type).indexOf("external") && (!e || e._end < r._end) && (e = r)
                            }
                            return e
                        }(e);
                        r && r._end > t._end && (t._end = r._end);
                        for (var i = t._end, o = 0; o < e.length; o++) {
                            var a = e[o];
                            a._end > i && (a._end = i, a.type += hn), a._start > i && (a._start = i)
                        }
                    }, e.shouldIgnoreTransaction = function(t) {
                        var e = this._config.get("ignoreTransactions");
                        if (e && e.length)
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if ("function" === typeof r.test) {
                                    if (r.test(t)) return !0
                                } else if (r === t) return !0
                            }
                        return !1
                    }, e.startSpan = function(t, e, n) {
                        var r = this.getCurrentTransaction();
                        r || (r = this.createCurrentTransaction(void 0, "temporary", this.createOptions({
                            canReuse: !0,
                            managed: !0
                        })));
                        var i = r.startSpan(t, e, n);
                        return i
                    }, e.endSpan = function(t, e) {
                        t && t.end(null, e)
                    }, t
                }();

            function Cr() {
                return br.TransactionService = function(t) {
                    var e = t.getService([dn, fn]),
                        n = e[0],
                        r = e[1];
                    return new Dr(n, r)
                }, br.PerformanceMonitoring = function(t) {
                    var e = t.getService([ln, fn, dn, "TransactionService"]),
                        n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3];
                    return new Er(n, r, i, o)
                }, br.ErrorLogging = function(t) {
                    var e = t.getService([ln, fn, "TransactionService"]),
                        n = e[0],
                        r = e[1],
                        i = e[2];
                    return new tr(n, r, i)
                }, new wr
            }
            var Nr = function() {
                function t(t, e) {
                    this._disable = e, this.serviceFactory = t, this._initialized = !1
                }
                var e = t.prototype;
                return e.isEnabled = function() {
                    return !this._disable
                }, e.isActive = function() {
                    var t = this.serviceFactory.getService(fn);
                    return this.isEnabled() && this._initialized && t.get("active")
                }, e.init = function(t) {
                    var e = this;
                    if (this.isEnabled() && !this._initialized) {
                        this._initialized = !0;
                        var n = this.serviceFactory.getService([fn, dn]),
                            r = n[0],
                            i = n[1];
                        r.setVersion("5.6.2"), this.config(t);
                        var o = r.get("logLevel");
                        if (i.setLevel(o), r.get("active")) {
                            this.serviceFactory.init();
                            var a = function(t, e) {
                                var n, r = ((n = {})[Je] = !1, n[Ye] = !1, n[Qe] = !1, n[Ke] = !1, n[tn] = !1, n[Ze] = !1, n);
                                return t ? (Object.keys(r).forEach((function(t) {
                                    -1 === e.indexOf(t) && (r[t] = !0)
                                })), r) : r
                            }(r.get("instrument"), r.get("disableInstrumentations"));
                            if (this.serviceFactory.getService("PerformanceMonitoring").init(a), a[tn]) this.serviceFactory.getService("ErrorLogging").registerListeners();
                            var s = function() {
                                return a[Ke] && e._sendPageLoadMetrics()
                            };
                            r.get("centralConfig") ? this.fetchCentralConfig().then(s) : s()
                        } else this._disable = !0, i.warn("RUM agent is inactive")
                    }
                    return this
                }, e.fetchCentralConfig = function() {
                    var t = this.serviceFactory.getService([ln, dn, fn]),
                        e = t[0],
                        n = t[1],
                        r = t[2];
                    return e.fetchConfig(r.get("serviceName"), r.get("environment")).then((function(t) {
                        var e = t.transaction_sample_rate;
                        if (e) {
                            var i = {
                                    transactionSampleRate: e = Number(e)
                                },
                                o = r.validate(i).invalid;
                            if (0 === o.length) r.setConfig(i);
                            else {
                                var a = o[0],
                                    s = a.key,
                                    c = a.value,
                                    u = a.allowed;
                                n.warn('invalid value "' + c + '" for ' + s + ". Allowed: " + u + ".")
                            }
                        }
                        return t
                    })).catch((function(t) {
                        n.warn("failed fetching config:", t)
                    }))
                }, e._sendPageLoadMetrics = function() {
                    var t = this.startTransaction(void 0, Ke, {
                        managed: !0,
                        canReuse: !0
                    });
                    if (t) {
                        t.addTask(Ke);
                        var e = function() {
                            setTimeout((function() {
                                return t.removeTask(Ke)
                            }))
                        };
                        "complete" === document.readyState ? e() : window.addEventListener("load", e)
                    }
                }, e.observe = function(t, e) {
                    this.serviceFactory.getService(fn).events.observe(t, e)
                }, e.config = function(t) {
                    var e = this.serviceFactory.getService(fn),
                        n = e.validate(t),
                        r = n.missing,
                        i = n.invalid;
                    if (0 === r.length && 0 === i.length) e.setConfig(t);
                    else {
                        var o = this.serviceFactory.getService(dn),
                            a = "RUM agent isn't correctly configured. ";
                        r.length > 0 && (a += r.join(", ") + " is missing", i.length > 0 && (a += ", ")), i.forEach((function(t, e) {
                            var n = t.key,
                                r = t.value,
                                o = t.allowed;
                            a += n + ' "' + r + '" contains invalid characters! (allowed: ' + o + ")" + (e !== i.length - 1 ? ", " : "")
                        })), o.error(a), e.setConfig({
                            active: !1
                        })
                    }
                }, e.setUserContext = function(t) {
                    this.serviceFactory.getService(fn).setUserContext(t)
                }, e.setCustomContext = function(t) {
                    this.serviceFactory.getService(fn).setCustomContext(t)
                }, e.addLabels = function(t) {
                    this.serviceFactory.getService(fn).addLabels(t)
                }, e.setInitialPageLoadName = function(t) {
                    this.serviceFactory.getService(fn).setConfig({
                        pageLoadTransactionName: t
                    })
                }, e.startTransaction = function(t, e, n) {
                    if (this.isEnabled()) return this.serviceFactory.getService("TransactionService").startTransaction(t, e, n)
                }, e.startSpan = function(t, e, n) {
                    if (this.isEnabled()) return this.serviceFactory.getService("TransactionService").startSpan(t, e, n)
                }, e.getCurrentTransaction = function() {
                    if (this.isEnabled()) return this.serviceFactory.getService("TransactionService").getCurrentTransaction()
                }, e.captureError = function(t) {
                    if (this.isEnabled()) return this.serviceFactory.getService("ErrorLogging").logError(t)
                }, e.addFilter = function(t) {
                    this.serviceFactory.getService(fn).addFilter(t)
                }, t
            }();
            var Mr = function() {
                    if (ce && window.elasticApm) return window.elasticApm;
                    var t = In(),
                        e = Cr(),
                        n = new Nr(e, !t);
                    return ce && (window.elasticApm = n), n
                }(),
                Rr = Mr.init.bind(Mr),
                Fr = Rr({
                    serviceName: "dji-official-reactor",
                    serverUrl: "https://apm-server.djiops.com",
                    serviceVersion: "1.0.0",
                    environment: "PROD",
                    active: JSON.parse("true")
                }),
                Ur = window.location.pathname;
            Fr.setInitialPageLoadName(Ur),
                function() {
                    var t = !1,
                        e = [],
                        n = [],
                        r = null,
                        i = null,
                        o = Fr.startTransaction("page-scroll-fps", "user-interaction");

                    function a() {
                        t || (t = !0, function() {
                            for (var t = 0, i = 0; i < n.length; i++)
                                if (t++, n[i] > 100 + r) {
                                    var o = Math.round(100 * t / (n[i] - r));
                                    t = 0, r = n[i], e.push(o)
                                }
                        }(), e.length > 0 && (o.addLabels({
                            fps_list: e
                        }), o.end()))
                    }
                    Fr.observe("transaction:end", (function(t) {
                        if ("page-load" === t.type) {
                            var e = t && t.spans.length ? t.spans : [];
                            navigator && navigator.connection && navigator.connection.effectiveType && t.addLabels({
                                network_type: navigator.connection.effectiveType
                            });
                            for (var n = 0; n < e.length; n++)
                                if ("resource" === e[n].type && e[n].context && e[n].context.http && e[n].context.http.response) {
                                    var r = e[n].context.http.response;
                                    "undefined" !== r.transfer_size && "undefined" !== r.encoded_body_size && "undefined" !== r.decoded_body_size && e[n].addLabels({
                                        transfer_size: r.transfer_size,
                                        encoded_body_size: r.encoded_body_size,
                                        decoded_body_size: r.decoded_body_size,
                                        cross_origin_resource: 0 === r.transfer_size && 0 === r.encoded_body_size && 0 === r.decoded_body_size,
                                        hit_cache: 0 === r.transfer_size && (0 !== r.encoded_body_size || 0 !== r.decoded_body_size)
                                    })
                                }
                        }
                    })), window.addEventListener("scroll", (function e() {
                        window.removeEventListener("scroll", e), r = performance.now(), i = window.requestAnimationFrame((function e() {
                            var r = performance.now();
                            n.push(r), t ? window.cancelAnimationFrame(i) : i = window.requestAnimationFrame(e)
                        })), setTimeout((function() {
                            a()
                        }), 6e3)
                    }))
                }();
            var Hr = p.a.createElement;

            function Vr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Br(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vr(Object(n), !0).forEach((function(e) {
                        Object(l.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function zr(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(d.a)(t);
                    if (e) {
                        var i = Object(d.a)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(f.a)(this, n)
                }
            }
            var qr = ".dji.com",
                Kr = function(t) {
                    Object(u.a)(n, t);
                    var e = zr(n);

                    function n(t) {
                        var r;
                        Object(a.default)(this, n), r = e.call(this), Object(l.a)(Object(s.a)(r), "setPerformanceMetric", (function() {
                            null !== r._LCP && qt.a.set({
                                metric1: r._LCP
                            })
                        })), Object(l.a)(Object(s.a)(r), "initProphetClientOnLoad", (function() {
                            if (window.ProphetClient = Ht, "undefined" !== typeof Ht && /([\w-]*www[\w-]*\.(dji\.com|dbeta\.me)|localhost)/.test(window.location.hostname)) {
                                function t() {
                                    var t = JSON.parse('{"maxPrefetchOnLoadLimit":1,"maxPrefetchOnVisibleLimit":3,"hoverDelay":300,"maxHoverPrefetchLimit":3,"maxTouchStartOrMouseDownPrefetchLimit":3,"prefetchDocumentWhitelistReg":"REGEXP_MATCH_WHITE_LIST_IS_DISABLED","maxPrefetchMainDocumentCount":3,"debug":false,"APIURL":"https://www-api.dji.com/api/prophet","enable":true,"prefetchMainDocumentOnTouchStartOrMouseDown":false,"minLoadEnableThreshold":800,"maxLoadEnableThreshold":5000}');
                                    t.prefetchDocumentWhitelistReg && "string" === typeof t.prefetchDocumentWhitelistReg && (t.prefetchDocumentWhitelistReg = new RegExp(t.prefetchDocumentWhitelistReg)), "function" === typeof requestIdleCallback ? requestIdleCallback((function() {
                                        new Ht(t)
                                    })) : setTimeout((function() {
                                        new Ht(t)
                                    }))
                                }
                                "complete" !== document.readyState ? window.addEventListener("load", (function() {
                                    t()
                                })) : t()
                            }
                        })), Object(l.a)(Object(s.a)(r), "initPerformanceObserver", (function() {
                            try {
                                new PerformanceObserver((function(t) {
                                    var e = t.getEntries(),
                                        n = e[e.length - 1];
                                    if ("largest-contentful-paint" === n.entryType) {
                                        var i = n.renderTime || n.loadTime;
                                        r._LCP = parseInt(i, 10), r.setPerformanceMetric()
                                    }
                                })).observe({
                                    entryTypes: ["largest-contentful-paint"]
                                })
                            } catch (t) {}
                        })), Object(l.a)(Object(s.a)(r), "handleGetLoadTtfbTime", (function() {
                            window.addEventListener("load", (function() {
                                var t = 0,
                                    e = 0;
                                window.performance && (window.performance.getEntriesByType("navigation")[0] ? (t = Math.round(window.performance.getEntriesByType("navigation")[0].loadEventStart), e = Math.round(window.performance.getEntriesByType("navigation")[0].responseStart - window.performance.getEntriesByType("navigation")[0].requestStart)) : window.performance.timing && (t = Math.round(window.performance.timing.loadEventStart - window.performance.timing.navigationStart), e = Math.round(window.performance.timing.responseStart - window.performance.timing.requestStart))), t && e && (qt.a.set({
                                    metric2: t
                                }), qt.a.set({
                                    metric3: e
                                }), qt.a.event({
                                    category: window.location.pathname + window.location.search,
                                    action: "load",
                                    label: "time",
                                    nonInteraction: !0
                                }))
                            }))
                        })), Object(l.a)(Object(s.a)(r), "handleSetUtmParamsCookie", (function() {
                            var t = !1,
                                e = [{
                                    key: "utm_source",
                                    value: ""
                                }, {
                                    key: "utm_medium",
                                    value: ""
                                }, {
                                    key: "utm_term",
                                    value: ""
                                }, {
                                    key: "utm_content",
                                    value: ""
                                }, {
                                    key: "utm_campaign",
                                    value: ""
                                }];
                            e.forEach((function(e) {
                                e.value = "", Object(st.x)(e.key) && "" !== Object(st.x)(e.key) && (e.value = Object(st.x)(e.key), t = !0)
                            })), t && e.forEach((function(t) {
                                t.value && "" !== t.value ? zt.a.set("form_".concat(t.key), t.value, {
                                    path: "/",
                                    domain: qr,
                                    expires: 15
                                }) : zt.a.remove("form_".concat(t.key), {
                                    path: "/",
                                    domain: qr
                                })
                            }))
                        }));
                        var i = it.a.parse(window.document.cookie),
                            o = t.env,
                            c = t.region,
                            u = t.optimize,
                            f = u.expId,
                            d = u.varId;
                        r._LCP = null;
                        var h = o.ga_id,
                            p = i.ga_uid ? i.ga_uid : null;
                        if (h) {
                            r.initPerformanceObserver(), qt.a.initialize(h, {
                                gaOptions: {
                                    userId: p,
                                    siteSpeedSampleRate: 100
                                }
                            }), qt.a.set({
                                dimension2: p,
                                dimension3: i._ga ? i._ga.substr(6) : null,
                                dimension4: c
                            }), f && d && ga("set", "exp", "".concat(f, ".").concat(d));
                            var v = window.ABTest || {},
                                g = v.expIds,
                                m = v.varIds;
                            if (Array.isArray(g) && Array.isArray(m)) {
                                var y = m.map(Kt.formatVarToNum),
                                    _ = g.filter((function(t, e) {
                                        return t && "number" === typeof y[e]
                                    })).map((function(t, e) {
                                        return "".concat(t, ".").concat(y[e])
                                    })).join("!");
                                ga("set", "exp", _)
                            }
                            if (qt.a.pageview(window.location.pathname + window.location.search), qt.a.ga("require", "displayfeatures"), r.handleGetLoadTtfbTime(), function(t) {
                                    document.querySelector("body").addEventListener("click", (function(e) {
                                        for (var n = e || window.event, r = n.target || n.srcElement; r && r.hasAttribute && !r.hasAttribute("data-ga-action") && "BODY" !== r.tagName;) r = r.parentNode;
                                        if (r && r.hasAttribute && r.hasAttribute("data-ga-action")) {
                                            var i = r.getAttribute("data-ga-action") ? r.getAttribute("data-ga-action") : "click",
                                                o = r.getAttribute("data-ga-category") ? r.getAttribute("data-ga-category") : "",
                                                a = r.getAttribute("data-ga-label") ? r.getAttribute("data-ga-label") : "",
                                                s = r.getAttribute("data-bd-track") ? r.getAttribute("data-bd-track") : "";
                                            o && t && i && t("send", "event", o, i, a), s && "click" === e.type && window._agl && (console.log("here", s), window._agl.push(["track", ["success", {
                                                t: s
                                            }]]))
                                        }
                                    }))
                                }(qt.a.ga), "CN" === c) {
                                qt.a.ga("set", "allowAdFeatures", !1);
                                var b = window._mvq || [];
                                window._mvq = b, b.push(["$setAccount", "m-28941-0"]), b.push(["$logConversion"]), window.addEventListener("load", (function() {
                                    var t = document.createElement("script");
                                    t.type = "text/javascript", t.async = !0, t.src = "https://static-ssl.mediav.com/mvl.js";
                                    var e = document.getElementsByTagName("script")[0];
                                    e.parentNode.insertBefore(t, e)
                                }))
                            }
                        }
                        return r
                    }
                    return Object(c.default)(n, null, [{
                        key: "getInitialProps",
                        value: function() {
                            var t = Object(o.default)(i.a.mark((function t(e) {
                                var n, r, o, a, s, c, u, f, d;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = e.Component, r = e.ctx, t.abrupt("return", {});
                                        case 3:
                                            return function() {
                                                r.state = r.req.state;
                                                var t, e = r.store,
                                                    n = r.state;
                                                e.dispatch((t = n, {
                                                    type: R.a.SET_CONTEXT,
                                                    data: t
                                                })), delete r.req.state
                                            }, o = r.store, a = r.state, s = a.header, c = a.footer, u = a.pageData, f = void 0 === u ? {} : u, d = a.social_image, t.next = 9, o.dispatch(ot.c(r.state.pageData));
                                        case 9:
                                            return t.next = 11, o.dispatch(ot.b(s, c));
                                        case 11:
                                            return t.next = 13, o.dispatch((i = r.state.translation, {
                                                type: R.a.INIT_TRANSLATION,
                                                text: i
                                            }));
                                        case 13:
                                            if (t.t0 = Br, t.t1 = {}, !n.getInitialProps) {
                                                t.next = 21;
                                                break
                                            }
                                            return t.next = 18, n.getInitialProps(r);
                                        case 18:
                                            t.t2 = t.sent, t.next = 22;
                                            break;
                                        case 21:
                                            t.t2 = {};
                                        case 22:
                                            return t.t3 = t.t2, t.t4 = (0, t.t0)(t.t1, t.t3), t.t5 = r.state.env || {}, t.t6 = r.state.country, t.t7 = r.state.language, t.t8 = r.state.subdomain, t.t9 = f.meta_title, t.t10 = f.meta_description, t.t11 = r.state.optimize || {}, t.t12 = d || "https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg", t.abrupt("return", {
                                                pageProps: t.t4,
                                                env: t.t5,
                                                region: t.t6,
                                                language: t.t7,
                                                subdomain: t.t8,
                                                pageTitle: t.t9,
                                                pageDesc: t.t10,
                                                optimize: t.t11,
                                                pageImg: t.t12
                                            });
                                        case 33:
                                        case "end":
                                            return t.stop()
                                    }
                                    var i
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), Object(c.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props,
                                e = t.pageTitle,
                                n = t.pageDesc,
                                r = t.pageImg,
                                i = t.region,
                                o = t.language,
                                a = t.subdomain;
                            this.initAOS(), this.handleSetUtmParamsCookie(), Vt.CCPA.pageAfterLoadHandler(), Vt.CCPA.resetCCPALocaleCooke({
                                    domain: qr
                                }), this.initProphetClientOnLoad(),
                                function(t, e, n) {
                                    var r = navigator && navigator.userAgent;
                                    if (/micromessenger/i.test(r)) {
                                        var i = document.createElement("script");
                                        i.src = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js", i.onload = function() {
                                            var r = {
                                                    title: t,
                                                    only_title: t,
                                                    desc: e,
                                                    imgUrl: n
                                                },
                                                i = document.createElement("script");
                                            i.src = "https://click.dji.com/wechat/sdk/share", i.onload = function() {
                                                window.weixinShare && "function" === typeof window.weixinShare && window.weixinShare({
                                                    shareData: r
                                                })
                                            }, document.body.appendChild(i)
                                        }, document.body.appendChild(i)
                                    }
                                }(e, n, r), window && !window.DUI && (window.DUI = {
                                    I18n: {
                                        locale: o
                                    },
                                    Localize: {
                                        getCountryUrlPrefix: function() {
                                            return at.a.getUrlPrefix(i, o, a)
                                        }
                                    }
                                })
                        }
                    }, {
                        key: "initAOS",
                        value: function() {
                            window.isAOSInited || (document.addEventListener("aos:in", (function() {
                                window.isAOSRefreshed || (window.isAOSRefreshed = !0, setTimeout((function() {
                                    Rt(), window.isAOSRefreshed = !1
                                }), 3e3))
                            })), window.addEventListener("load", (function() {
                                Rt()
                            })), Mt({
                                delay: 0,
                                duration: 600,
                                easing: "ease-in-out",
                                startEvent: "DOMContentLoaded",
                                once: !0
                            }), window.isAOSInited = !0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.Component,
                                n = t.pageProps,
                                r = t.store,
                                i = r.getState(),
                                o = i.page,
                                a = i.translation,
                                s = i.localization,
                                c = i.context.mobileMode,
                                u = o.data.meta_title,
                                f = at.a.t({
                                    i18n: a.data,
                                    localization: s
                                }, "meta.default.title"),
                                d = -1 !== window.navigator.userAgent.toLocaleLowerCase().indexOf("msie");
                            return Hr("div", null, Hr(nt.a, null, Hr("title", null, u || f), Hr("meta", {
                                name: "viewport",
                                content: c ? "width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" : "width=device-width,initial-scale=0.5,minimum-scale=0.5"
                            })), Hr(v.a, {
                                store: r
                            }, d ? Hr(ht, null) : null, Hr(e, n)))
                        }
                    }]), n
                }(m.a);
            e.default = function(t, e) {
                e = _({}, E, e);
                var n = "undefined" === typeof window,
                    r = function(r) {
                        var i = r.initialState,
                            o = r.ctx,
                            a = e.storeKey,
                            s = function() {
                                return t(e.deserializeState(i), _({}, o, e, {
                                    isServer: n
                                }))
                            };
                        return n ? s() : (window.hasOwnProperty(a) || (window[a] = s()), window[a])
                    };
                return function(t) {
                    var i;
                    return (i = function(n) {
                        function i(t, i) {
                            var o = n.call(this, t, i) || this,
                                a = t.initialState;
                            return e.debug && console.log("4. WrappedApp.render created new store with initialState", a), o.store = r({
                                initialState: a
                            }), o
                        }
                        return y(i, n), i.prototype.render = function() {
                            var e = this.props,
                                n = e.initialProps,
                                r = (e.initialState, x(e, ["initialProps", "initialState"]));
                            return p.a.createElement(t, _({}, r, n, {
                                store: this.store
                            }))
                        }, i
                    }(h.Component)).displayName = "withRedux(" + (t.displayName || t.name || "App") + ")", i.getInitialProps = function(i) {
                        return b(void 0, void 0, void 0, (function() {
                            var o, a;
                            return w(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!i) throw new Error("No app context");
                                        if (!i.ctx) throw new Error("No page context");
                                        return o = r({
                                            ctx: i.ctx
                                        }), e.debug && console.log("1. WrappedApp.getInitialProps wrapper got the store with state", o.getState()), i.ctx.store = o, i.ctx.isServer = n, a = {}, "getInitialProps" in t ? [4, t.getInitialProps.call(t, i)] : [3, 2];
                                    case 1:
                                        a = s.sent(), s.label = 2;
                                    case 2:
                                        return e.debug && console.log("3. WrappedApp.getInitialProps has store state", o.getState()), [2, {
                                            isServer: n,
                                            initialState: e.serializeState(o.getState()),
                                            initialProps: a
                                        }]
                                }
                            }))
                        }))
                    }, i
                }
            }((function(t) {
                return tt(Y, t, Z)
            }), {
                debug: !1
            })(Kr)
        },
        "2oH+": function(t, e, n) {
            (function(t, n) {
                var r = 200,
                    i = "__lodash_hash_undefined__",
                    o = 800,
                    a = 16,
                    s = 9007199254740991,
                    c = "[object Arguments]",
                    u = "[object AsyncFunction]",
                    f = "[object Function]",
                    d = "[object GeneratorFunction]",
                    l = "[object Null]",
                    h = "[object Object]",
                    p = "[object Proxy]",
                    v = "[object Undefined]",
                    g = /^\[object .+?Constructor\]$/,
                    m = /^(?:0|[1-9]\d*)$/,
                    y = {};
                y["[object Float32Array]"] = y["[object Float64Array]"] = y["[object Int8Array]"] = y["[object Int16Array]"] = y["[object Int32Array]"] = y["[object Uint8Array]"] = y["[object Uint8ClampedArray]"] = y["[object Uint16Array]"] = y["[object Uint32Array]"] = !0, y[c] = y["[object Array]"] = y["[object ArrayBuffer]"] = y["[object Boolean]"] = y["[object DataView]"] = y["[object Date]"] = y["[object Error]"] = y[f] = y["[object Map]"] = y["[object Number]"] = y[h] = y["[object RegExp]"] = y["[object Set]"] = y["[object String]"] = y["[object WeakMap]"] = !1;
                var _ = "object" == typeof t && t && t.Object === Object && t,
                    b = "object" == typeof self && self && self.Object === Object && self,
                    w = _ || b || Function("return this")(),
                    x = e && !e.nodeType && e,
                    E = x && "object" == typeof n && n && !n.nodeType && n,
                    S = E && E.exports === x,
                    T = S && _.process,
                    O = function() {
                        try {
                            var t = E && E.require && E.require("util").types;
                            return t || T && T.binding && T.binding("util")
                        } catch (e) {}
                    }(),
                    I = O && O.isTypedArray;

                function A(t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                var j, k, P = Array.prototype,
                    L = Function.prototype,
                    D = Object.prototype,
                    C = w["__core-js_shared__"],
                    N = L.toString,
                    M = D.hasOwnProperty,
                    R = function() {
                        var t = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }(),
                    F = D.toString,
                    U = N.call(Object),
                    H = RegExp("^" + N.call(M).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    V = S ? w.Buffer : void 0,
                    B = w.Symbol,
                    z = w.Uint8Array,
                    q = V ? V.allocUnsafe : void 0,
                    K = (j = Object.getPrototypeOf, k = Object, function(t) {
                        return j(k(t))
                    }),
                    $ = Object.create,
                    G = D.propertyIsEnumerable,
                    W = P.splice,
                    X = B ? B.toStringTag : void 0,
                    J = function() {
                        try {
                            var t = wt(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (e) {}
                    }(),
                    Y = V ? V.isBuffer : void 0,
                    Q = Math.max,
                    Z = Date.now,
                    tt = wt(w, "Map"),
                    et = wt(Object, "create"),
                    nt = function() {
                        function t() {}
                        return function(e) {
                            if (!Dt(e)) return {};
                            if ($) return $(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = void 0, n
                        }
                    }();

                function rt(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function it(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function ot(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function at(t) {
                    var e = this.__data__ = new it(t);
                    this.size = e.size
                }

                function st(t, e) {
                    var n = At(t),
                        r = !n && It(t),
                        i = !n && !r && kt(t),
                        o = !n && !r && !i && Nt(t),
                        a = n || r || i || o,
                        s = a ? function(t, e) {
                            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                            return r
                        }(t.length, String) : [],
                        c = s.length;
                    for (var u in t) !e && !M.call(t, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || xt(u, c)) || s.push(u);
                    return s
                }

                function ct(t, e, n) {
                    (void 0 === n || Ot(t[e], n)) && (void 0 !== n || e in t) || dt(t, e, n)
                }

                function ut(t, e, n) {
                    var r = t[e];
                    M.call(t, e) && Ot(r, n) && (void 0 !== n || e in t) || dt(t, e, n)
                }

                function ft(t, e) {
                    for (var n = t.length; n--;)
                        if (Ot(t[n][0], e)) return n;
                    return -1
                }

                function dt(t, e, n) {
                    "__proto__" == e && J ? J(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }
                rt.prototype.clear = function() {
                    this.__data__ = et ? et(null) : {}, this.size = 0
                }, rt.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, rt.prototype.get = function(t) {
                    var e = this.__data__;
                    if (et) {
                        var n = e[t];
                        return n === i ? void 0 : n
                    }
                    return M.call(e, t) ? e[t] : void 0
                }, rt.prototype.has = function(t) {
                    var e = this.__data__;
                    return et ? void 0 !== e[t] : M.call(e, t)
                }, rt.prototype.set = function(t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = et && void 0 === e ? i : e, this
                }, it.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, it.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = ft(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : W.call(e, n, 1), --this.size, !0)
                }, it.prototype.get = function(t) {
                    var e = this.__data__,
                        n = ft(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, it.prototype.has = function(t) {
                    return ft(this.__data__, t) > -1
                }, it.prototype.set = function(t, e) {
                    var n = this.__data__,
                        r = ft(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                }, ot.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new rt,
                        map: new(tt || it),
                        string: new rt
                    }
                }, ot.prototype.delete = function(t) {
                    var e = bt(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, ot.prototype.get = function(t) {
                    return bt(this, t).get(t)
                }, ot.prototype.has = function(t) {
                    return bt(this, t).has(t)
                }, ot.prototype.set = function(t, e) {
                    var n = bt(this, t),
                        r = n.size;
                    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                }, at.prototype.clear = function() {
                    this.__data__ = new it, this.size = 0
                }, at.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }, at.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, at.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, at.prototype.set = function(t, e) {
                    var n = this.__data__;
                    if (n instanceof it) {
                        var i = n.__data__;
                        if (!tt || i.length < r - 1) return i.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new ot(i)
                    }
                    return n.set(t, e), this.size = n.size, this
                };
                var lt, ht = function(t, e, n) {
                    for (var r = -1, i = Object(t), o = n(t), a = o.length; a--;) {
                        var s = o[lt ? a : ++r];
                        if (!1 === e(i[s], s, i)) break
                    }
                    return t
                };

                function pt(t) {
                    return null == t ? void 0 === t ? v : l : X && X in Object(t) ? function(t) {
                        var e = M.call(t, X),
                            n = t[X];
                        try {
                            t[X] = void 0;
                            var r = !0
                        } catch (o) {}
                        var i = F.call(t);
                        r && (e ? t[X] = n : delete t[X]);
                        return i
                    }(t) : function(t) {
                        return F.call(t)
                    }(t)
                }

                function vt(t) {
                    return Ct(t) && pt(t) == c
                }

                function gt(t) {
                    return !(!Dt(t) || function(t) {
                        return !!R && R in t
                    }(t)) && (Pt(t) ? H : g).test(function(t) {
                        if (null != t) {
                            try {
                                return N.call(t)
                            } catch (e) {}
                            try {
                                return t + ""
                            } catch (e) {}
                        }
                        return ""
                    }(t))
                }

                function mt(t) {
                    if (!Dt(t)) return function(t) {
                        var e = [];
                        if (null != t)
                            for (var n in Object(t)) e.push(n);
                        return e
                    }(t);
                    var e = Et(t),
                        n = [];
                    for (var r in t)("constructor" != r || !e && M.call(t, r)) && n.push(r);
                    return n
                }

                function yt(t, e, n, r, i) {
                    t !== e && ht(e, (function(o, a) {
                        if (i || (i = new at), Dt(o)) ! function(t, e, n, r, i, o, a) {
                            var s = St(t, n),
                                c = St(e, n),
                                u = a.get(c);
                            if (u) return void ct(t, n, u);
                            var f = o ? o(s, c, n + "", t, e, a) : void 0,
                                d = void 0 === f;
                            if (d) {
                                var l = At(c),
                                    p = !l && kt(c),
                                    v = !l && !p && Nt(c);
                                f = c, l || p || v ? At(s) ? f = s : Ct(g = s) && jt(g) ? f = function(t, e) {
                                    var n = -1,
                                        r = t.length;
                                    e || (e = Array(r));
                                    for (; ++n < r;) e[n] = t[n];
                                    return e
                                }(s) : p ? (d = !1, f = function(t, e) {
                                    if (e) return t.slice();
                                    var n = t.length,
                                        r = q ? q(n) : new t.constructor(n);
                                    return t.copy(r), r
                                }(c, !0)) : v ? (d = !1, f = function(t, e) {
                                    var n = e ? function(t) {
                                        var e = new t.constructor(t.byteLength);
                                        return new z(e).set(new z(t)), e
                                    }(t.buffer) : t.buffer;
                                    return new t.constructor(n, t.byteOffset, t.length)
                                }(c, !0)) : f = [] : function(t) {
                                    if (!Ct(t) || pt(t) != h) return !1;
                                    var e = K(t);
                                    if (null === e) return !0;
                                    var n = M.call(e, "constructor") && e.constructor;
                                    return "function" == typeof n && n instanceof n && N.call(n) == U
                                }(c) || It(c) ? (f = s, It(s) ? f = function(t) {
                                    return function(t, e, n, r) {
                                        var i = !n;
                                        n || (n = {});
                                        var o = -1,
                                            a = e.length;
                                        for (; ++o < a;) {
                                            var s = e[o],
                                                c = r ? r(n[s], t[s], s, n, t) : void 0;
                                            void 0 === c && (c = t[s]), i ? dt(n, s, c) : ut(n, s, c)
                                        }
                                        return n
                                    }(t, Mt(t))
                                }(s) : Dt(s) && !Pt(s) || (f = function(t) {
                                    return "function" != typeof t.constructor || Et(t) ? {} : nt(K(t))
                                }(c))) : d = !1
                            }
                            var g;
                            d && (a.set(c, f), i(f, c, r, o, a), a.delete(c));
                            ct(t, n, f)
                        }(t, e, a, n, yt, r, i);
                        else {
                            var s = r ? r(St(t, a), o, a + "", t, e, i) : void 0;
                            void 0 === s && (s = o), ct(t, a, s)
                        }
                    }), Mt)
                }

                function _t(t, e) {
                    return Tt(function(t, e, n) {
                        return e = Q(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, i = -1, o = Q(r.length - e, 0), a = Array(o); ++i < o;) a[i] = r[e + i];
                                i = -1;
                                for (var s = Array(e + 1); ++i < e;) s[i] = r[i];
                                return s[e] = n(a), A(t, this, s)
                            }
                    }(t, e, Ut), t + "")
                }

                function bt(t, e) {
                    var n = t.__data__;
                    return function(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                    }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }

                function wt(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return gt(n) ? n : void 0
                }

                function xt(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? s : e) && ("number" == n || "symbol" != n && m.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function Et(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || D)
                }

                function St(t, e) {
                    if (("constructor" !== e || "function" !== typeof t[e]) && "__proto__" != e) return t[e]
                }
                var Tt = function(t) {
                    var e = 0,
                        n = 0;
                    return function() {
                        var r = Z(),
                            i = a - (r - n);
                        if (n = r, i > 0) {
                            if (++e >= o) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }(J ? function(t, e) {
                    return J(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: (n = e, function() {
                            return n
                        }),
                        writable: !0
                    });
                    var n
                } : Ut);

                function Ot(t, e) {
                    return t === e || t !== t && e !== e
                }
                var It = vt(function() {
                        return arguments
                    }()) ? vt : function(t) {
                        return Ct(t) && M.call(t, "callee") && !G.call(t, "callee")
                    },
                    At = Array.isArray;

                function jt(t) {
                    return null != t && Lt(t.length) && !Pt(t)
                }
                var kt = Y || function() {
                    return !1
                };

                function Pt(t) {
                    if (!Dt(t)) return !1;
                    var e = pt(t);
                    return e == f || e == d || e == u || e == p
                }

                function Lt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s
                }

                function Dt(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Ct(t) {
                    return null != t && "object" == typeof t
                }
                var Nt = I ? function(t) {
                    return function(e) {
                        return t(e)
                    }
                }(I) : function(t) {
                    return Ct(t) && Lt(t.length) && !!y[pt(t)]
                };

                function Mt(t) {
                    return jt(t) ? st(t, !0) : mt(t)
                }
                var Rt, Ft = (Rt = function(t, e, n) {
                    yt(t, e, n)
                }, _t((function(t, e) {
                    var n = -1,
                        r = e.length,
                        i = r > 1 ? e[r - 1] : void 0,
                        o = r > 2 ? e[2] : void 0;
                    for (i = Rt.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(t, e, n) {
                            if (!Dt(n)) return !1;
                            var r = typeof e;
                            return !!("number" == r ? jt(n) && xt(e, n.length) : "string" == r && e in n) && Ot(n[e], t)
                        }(e[0], e[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++n < r;) {
                        var a = e[n];
                        a && Rt(t, a, n, i)
                    }
                    return t
                })));

                function Ut(t) {
                    return t
                }
                n.exports = Ft
            }).call(this, n("yLpj"), n("YuTi")(t))
        },
        "3UD+": function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        4: function(t, e, n) {
            n("GcxT"), t.exports = n("nOHt")
        },
        "9/5/": function(t, e, n) {
            (function(e) {
                var n = "Expected a function",
                    r = NaN,
                    i = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    u = parseInt,
                    f = "object" == typeof e && e && e.Object === Object && e,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    l = f || d || Function("return this")(),
                    h = Object.prototype.toString,
                    p = Math.max,
                    v = Math.min,
                    g = function() {
                        return l.Date.now()
                    };

                function m(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function y(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && h.call(t) == i
                        }(t)) return r;
                    if (m(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = m(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(o, "");
                    var n = s.test(t);
                    return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? r : +t
                }
                t.exports = function(t, e, r) {
                    var i, o, a, s, c, u, f = 0,
                        d = !1,
                        l = !1,
                        h = !0;
                    if ("function" != typeof t) throw new TypeError(n);

                    function _(e) {
                        var n = i,
                            r = o;
                        return i = o = void 0, f = e, s = t.apply(r, n)
                    }

                    function b(t) {
                        var n = t - u;
                        return void 0 === u || n >= e || n < 0 || l && t - f >= a
                    }

                    function w() {
                        var t = g();
                        if (b(t)) return x(t);
                        c = setTimeout(w, function(t) {
                            var n = e - (t - u);
                            return l ? v(n, a - (t - f)) : n
                        }(t))
                    }

                    function x(t) {
                        return c = void 0, h && i ? _(t) : (i = o = void 0, s)
                    }

                    function E() {
                        var t = g(),
                            n = b(t);
                        if (i = arguments, o = this, u = t, n) {
                            if (void 0 === c) return function(t) {
                                return f = t, c = setTimeout(w, e), d ? _(t) : s
                            }(u);
                            if (l) return c = setTimeout(w, e), _(u)
                        }
                        return void 0 === c && (c = setTimeout(w, e)), s
                    }
                    return e = y(e) || 0, m(r) && (d = !!r.leading, a = (l = "maxWait" in r) ? p(y(r.maxWait) || 0, e) : a, h = "trailing" in r ? !!r.trailing : h), E.cancel = function() {
                        void 0 !== c && clearTimeout(c), f = 0, i = u = o = c = void 0
                    }, E.flush = function() {
                        return void 0 === c ? s : x(g())
                    }, E
                }
            }).call(this, n("yLpj"))
        },
        "9fj9": function(t, e, n) {
            var r, i, o;
            ! function(n, a) {
                "use strict";
                i = [], void 0 === (o = "function" === typeof(r = function() {
                    function t(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }

                    function e(t, e, n, r, i, o) {
                        void 0 !== t && this.setFunctionName(t), void 0 !== e && this.setArgs(e), void 0 !== n && this.setFileName(n), void 0 !== r && this.setLineNumber(r), void 0 !== i && this.setColumnNumber(i), void 0 !== o && this.setSource(o)
                    }
                    return e.prototype = {
                        getFunctionName: function() {
                            return this.functionName
                        },
                        setFunctionName: function(t) {
                            this.functionName = String(t)
                        },
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(t) {
                            if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                            this.args = t
                        },
                        getFileName: function() {
                            return this.fileName
                        },
                        setFileName: function(t) {
                            this.fileName = String(t)
                        },
                        getLineNumber: function() {
                            return this.lineNumber
                        },
                        setLineNumber: function(e) {
                            if (!t(e)) throw new TypeError("Line Number must be a Number");
                            this.lineNumber = Number(e)
                        },
                        getColumnNumber: function() {
                            return this.columnNumber
                        },
                        setColumnNumber: function(e) {
                            if (!t(e)) throw new TypeError("Column Number must be a Number");
                            this.columnNumber = Number(e)
                        },
                        getSource: function() {
                            return this.source
                        },
                        setSource: function(t) {
                            this.source = String(t)
                        },
                        toString: function() {
                            return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (t(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (t(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        }
                    }, e
                }) ? r.apply(e, i) : r) || (t.exports = o)
            }()
        },
        EwJH: function(t, e, n) {
            var r = n("o0o1"),
                i = n("lSNA"),
                o = n("yXPU");

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        i(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var c = function(t, e) {
                    return Array.isArray(e) && e.find((function(e) {
                        return e && "strippedPath" === e.page && RegExp(e.value).test(t)
                    }))
                },
                u = function(t) {
                    var e = {},
                        n = {},
                        r = t.map((function(t) {
                            return e[t.expKey] = t.expId, n[t.expId] = t.expKey, t.expId
                        }));
                    if (r.length) return "\n    (function (win) {\n      try {\n        win.ABTest = win.ABTest || {};\n        win.ABTest.mapKeyToVar = win.ABTest.mapKeyToVar || {};\n        var abkStrs = [];\n        var expIdToKey = ".concat(JSON.stringify(n), ";\n        var existExpIds = [").concat(r.map((function(t) {
                        return "'".concat(t, "'")
                    })), "];\n\n        if (win.__abData__ && win.__abData__.k) {\n          win.ABTest.mapIdToVar = win.__abData__.k;\n          win.ABTest.mapKeyToId = ").concat(JSON.stringify(e), ";\n          win.ABTest.mapIdToKey = ").concat(JSON.stringify(n), ";\n\n          for (var activeI = 0; activeI < existExpIds.length; activeI++) {\n            var currActiveExpId = existExpIds[activeI];\n            var currActiveExpKey = expIdToKey[currActiveExpId];\n            var varId = win.__abData__.k[currActiveExpId];   \n            if (varId && currActiveExpKey) {\n              win.ABTest.mapKeyToVar[currActiveExpKey] = varId;\n              abkStrs.push(currActiveExpKey + '=' + varId);\n              if (Array.isArray(win.ABTest.expIds) && Array.isArray(win.ABTest.varIds)) {\n                win.ABTest.expIds.push(currActiveExpId);\n                win.ABTest.varIds.push(varId);\n              } else {\n                win.ABTest.expIds = [currActiveExpId];\n                win.ABTest.varIds = [varId];\n              }\n            }\n          }\n          document.documentElement.dataset.abk = abkStrs.join('|');\n        }\n      } catch (e) {console.error(e.message)}\n    })(window)\n  ")
                },
                f = function() {
                    var t = o(r.mark((function t(e, n, i) {
                        var o, a, f, d, l, h, p, v, g, m, y;
                        return r.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = n.language, a = n.country, f = n.path, d = i.ab, l = "", h = "", p = "", !(e && e.enabled)) {
                                        t.next = 25;
                                        break
                                    }
                                    if (!(v = (e.experiments || []).filter((function(t) {
                                            return t.enabled
                                        })).map((function(t) {
                                            return s(s({}, t), {}, {
                                                label: ""
                                            })
                                        }))).length) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.prev = 9, t.next = 12, d.getScriptTag({
                                        apiData: v,
                                        context: {
                                            lang: o,
                                            country: a,
                                            strippedPath: f
                                        },
                                        notSetHtmlAttr: e.notSetHtmlAttr,
                                        htmlDataAttrName: e.htmlDataAttrName || "ab"
                                    });
                                case 12:
                                    l = (l = t.sent).replace(/^<script>/, "").replace(/<\/script>$/, ""), l = "try{".concat(l, "}catch(e){console.error(e.message);}"), g = v.filter((function(t) {
                                        return t.expKey && t.expId && !t.expStorageKey
                                    })), p = u(g), m = function(t) {
                                        return t.expStorageKey && t.expId && c(f, t.targeting)
                                    }, y = v.find(m), r = y, _ = e.finished_exp_group_keys || [], h = r ? "\n      (function (win) {\n        try {\n      let getStorageItem = function () {};\n      let setStorageItem = function () {};\n      let clearStorageItem = function () {};\n      let isPrivate;\n      try {\n        win.localStorage.setItem('is_private', 'no');\n        isPrivate = win.localStorage.getItem('is_private') !== 'no';\n      } catch (e) {\n        isPrivate = true;\n      }\n      if (isPrivate) {\n        getStorageItem = function (name) {\n          var escape = function (s) { return s.replace(/([.*+?^$(){}|[\\]/\\\\])/g, '\\\\$1'); };\n          var match = document.cookie.match(RegExp('(?:^|;\\\\s*)' + escape(name) + '=([^;]*)'));\n          return match ? match[1] : null;\n        };\n        setStorageItem = function (name, value) {\n          var maxAge = 60 * 60 * 24 * 30 * 3;\n          var hostnames = win.location.hostname.split('.').reverse();\n          var domain = (hostnames[1] ? '.' + hostnames[1] : '') + (hostnames[0] ? (hostnames[0] !== 'localhost' ? ('.' + hostnames[0]) : hostnames[0]) : '');\n          if (!value) {\n            maxAge = 0;\n          }\n          document.cookie = name + '=' +  value + '; path=/; domain=' + domain + '; max-age=' + maxAge;\n        };\n        clearStorageItem = function (name) {\n          document.cookie = name + \"=;expires=Thu, 01 Jan 1970 00:00:00 GMT\";\n        }\n      } else {\n        getStorageItem = function (name) { return win.localStorage.getItem(name); };\n        setStorageItem = function (name, value) { win.localStorage.setItem(name, value); };\n        clearStorageItem = function (name) { win.localStorage.removeItem(name); };\n      }\n      \n      var finishedExpKeys = [".concat(_.map((function(t) {
                                        return "'".concat(t, "'")
                                    })), "];\n      for (var endI = 0; endI < finishedExpKeys.length; endI++) {\n        clearStorageItem(finishedExpKeys[endI]);\n      }\n\n      win.ABTest = win.ABTest || {};\n      var ua = win.navigator.userAgent;\n      var browserDowngrade = !!ua.match(/(MicroMessenger|UCBrowser|samsungbrowser|MSIE\\s|Trident\\/|Edge\\/)/ig);\n     \n      var foundExpStorageKey = '").concat(r.expStorageKey, "';\n      var foundExpId = '").concat(r.expId, "';\n      var inExp = !browserDowngrade;\n      if (inExp && foundExpStorageKey && foundExpId) {\n        var storageKey = foundExpStorageKey;\n        var pageExpId = foundExpId;\n\n        var storedExp = (getStorageItem(storageKey) || '').split('=');\n        var storedExpId = storedExp[0];\n        var storedVarId = storedExp[1];\n        var winExpId = '';\n        var winVarId = '';\n\n        if (storedExpId && storedVarId) {\n          winExpId = storedExpId;\n          winVarId = storedVarId;\n        } else if (win.__abData__ && win.__abData__.k && win.__abData__.k[pageExpId]) {\n          var newPageExpId = pageExpId;\n          var newPageVarId = win.__abData__.k[pageExpId];\n          winExpId = newPageExpId;\n          winVarId = newPageVarId;\n          setStorageItem(storageKey, newPageExpId + '=' + newPageVarId);\n        }\n        if (winExpId && winVarId) {\n          win.ABTest.v0V1ExpId = winExpId;\n          win.ABTest.v0V1VarId = winVarId;\n          if (Array.isArray(win.ABTest.expIds) && Array.isArray(win.ABTest.varIds)) {\n            win.ABTest.expIds.push(winExpId);\n            win.ABTest.varIds.push(winVarId);\n          } else {\n            win.ABTest.expIds = [winExpId];\n            win.ABTest.varIds = [winVarId];\n          }\n        }\n      }\n    } catch (e) {console.error(e.message)}\n    })(window)\n    ") : "", t.next = 25;
                                    break;
                                case 22:
                                    t.prev = 22, t.t0 = t.catch(9), console.log(t.t0);
                                case 25:
                                    return t.abrupt("return", {
                                        abScript: l,
                                        v0v1AbScript: h,
                                        publicAbScript: p
                                    });
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                            var r, _
                        }), t, null, [
                            [9, 22]
                        ])
                    })));
                    return function(e, n, r) {
                        return t.apply(this, arguments)
                    }
                }();
            t.exports = {
                generateWindowSetVersionScript: function() {
                    return "\n  (function (win) {\n    try {\n        win.ABTest = win.ABTest || {};\n        var urlSearch = win.location.search.replace(/^[?#&]/, '');\n        var searchlist = urlSearch.split('&');\n        var pathExpId;\n        var pathExpKey;\n        var pathVarId;\n        for(var searchI = 0;searchI<searchlist.length;searchI++) {\n          var searchItem = (searchlist[searchI] || '').split('=');\n          if (searchItem[0] && searchItem[1]) {\n            if (searchItem[0] === 'set_version') {\n              win.ABTest.pageVersion = 'V' + searchItem[1];\n            } else if (searchItem[0] === 'set_exp') {\n              pathExpId = searchItem[1];\n            } else if (searchItem[0] === 'set_var') {\n              pathVarId = searchItem[1];\n              if (win.ABTest.v0V1ExpId) {\n                win.ABTest.v0V1VarId = searchItem[1];\n                pathExpId = win.ABTest.v0V1ExpId;\n              }\n            } else if (searchItem[0] === 'set_expk') {\n              pathExpKey = searchItem[1];\n            }\n          }\n          if(pathExpId && pathVarId){\n            if (win.__abData__ && win.__abData__.k) {\n              win.__abData__.k[pathExpId] = pathVarId;\n            }\n            document.documentElement.dataset.ab = pathExpId + '=' + pathVarId;\n            var targetExpKey = win.ABTest.mapIdToKey && win.ABTest.mapIdToKey[pathExpId];\n            if (targetExpKey) {\n              win.ABTest.mapKeyToVar[targetExpKey] = pathVarId;\n              document.documentElement.dataset.abk = targetExpKey + '=' + pathVarId;\n            }\n          } else if (pathExpKey && pathVarId) {\n            var targetExpId = win.ABTest.mapKeyToId && win.ABTest.mapKeyToId[pathExpKey];\n            if (targetExpId) {\n              if (win.__abData__ && win.__abData__.k) {\n                win.__abData__.k[targetExpId] = pathVarId;\n              }\n              win.ABTest.mapKeyToVar[pathExpKey] = pathVarId;\n              document.documentElement.dataset.ab = targetExpId + '=' + pathVarId;\n              document.documentElement.dataset.abk = pathExpKey + '=' + pathVarId;\n            }\n          }\n        }\n      } catch (e) {}\n    })(window)\n  "
                },
                generateABScript: f,
                formatVarToNum: function(t) {
                    if (!t || "string" !== typeof t) return !1;
                    var e = t.charCodeAt() - 65;
                    return !Number.isNaN(e) && e >= 0 && e <= 6 && e
                },
                formatVarToStr: function(t) {
                    return !t || Number.isNaN(+t) ? t : String.fromCharCode(+t + 65)
                }
            }
        },
        GcxT: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("1TCz")
            }])
        },
        LpSC: function(t, e, n) {
            n("K64n"), t.exports = self.fetch.bind(self)
        },
        MjPQ: function(t, e, n) {
            var r, i, o;
            ! function(a, s) {
                "use strict";
                i = [n("9fj9")], void 0 === (o = "function" === typeof(r = function(t) {
                    var e = /(^|@)\S+\:\d+/,
                        n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                        r = /^(eval@)?(\[native code\])?$/;

                    function i(t, e, n) {
                        if ("function" === typeof Array.prototype.map) return t.map(e, n);
                        for (var r = new Array(t.length), i = 0; i < t.length; i++) r[i] = e.call(n, t[i]);
                        return r
                    }

                    function o(t, e, n) {
                        if ("function" === typeof Array.prototype.filter) return t.filter(e, n);
                        for (var r = [], i = 0; i < t.length; i++) e.call(n, t[i]) && r.push(t[i]);
                        return r
                    }
                    return {
                        parse: function(t) {
                            if ("undefined" !== typeof t.stacktrace || "undefined" !== typeof t["opera#sourceloc"]) return this.parseOpera(t);
                            if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t);
                            if (t.stack) return this.parseFFOrSafari(t);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(t) {
                            if (-1 === t.indexOf(":")) return [t];
                            var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g, ""));
                            return [e[1], e[2] || void 0, e[3] || void 0]
                        },
                        parseV8OrIE: function(e) {
                            return i(o(e.stack.split("\n"), (function(t) {
                                return !!t.match(n)
                            }), this), (function(e) {
                                e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                                    r = this.extractLocation(n.pop()),
                                    i = n.join(" ") || void 0,
                                    o = function(t, e) {
                                        if ("function" === typeof Array.prototype.indexOf) return t.indexOf(e);
                                        for (var n = 0; n < t.length; n++)
                                            if (t[n] === e) return n;
                                        return -1
                                    }(["eval", "<anonymous>"], r[0]) > -1 ? void 0 : r[0];
                                return new t(i, void 0, o, r[1], r[2], e)
                            }), this)
                        },
                        parseFFOrSafari: function(e) {
                            return i(o(e.stack.split("\n"), (function(t) {
                                return !t.match(r)
                            }), this), (function(e) {
                                if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t(e);
                                var n = e.split("@"),
                                    r = this.extractLocation(n.pop()),
                                    i = n.join("@") || void 0;
                                return new t(i, void 0, r[0], r[1], r[2], e)
                            }), this)
                        },
                        parseOpera: function(t) {
                            return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                        },
                        parseOpera9: function(e) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
                                var s = n.exec(r[o]);
                                s && i.push(new t(void 0, void 0, s[2], s[1], void 0, r[o]))
                            }
                            return i
                        },
                        parseOpera10: function(e) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
                                var s = n.exec(r[o]);
                                s && i.push(new t(s[3] || void 0, void 0, s[2], s[1], void 0, r[o]))
                            }
                            return i
                        },
                        parseOpera11: function(n) {
                            return i(o(n.stack.split("\n"), (function(t) {
                                return !!t.match(e) && !t.match(/^Error created at/)
                            }), this), (function(e) {
                                var n, r = e.split("@"),
                                    i = this.extractLocation(r.pop()),
                                    o = r.shift() || "",
                                    a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new t(a, s, i[0], i[1], i[2], e)
                            }), this)
                        }
                    }
                }) ? r.apply(e, i) : r) || (t.exports = o)
            }()
        },
        Ntax: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "c", (function() {
                return s
            }));
            var r = n("wCCn"),
                i = n.n(r),
                o = "https://www1.djicdn.com";

            function a(t) {
                return "".concat(o, "/dps/").concat(t)
            }

            function s(t) {
                return {
                    backgroundImage: "url('".concat(a(t), "')")
                }
            }
            e.a = function() {
                return new i.a({
                    cdn: "www1.djicdn.com",
                    path: "dps",
                    lazyLoad: !0,
                    combo: [{
                        name: "default_"
                    }, {
                        name: "default_webp"
                    }, {
                        name: "default_1x"
                    }, {
                        name: "default_1x_webp"
                    }, {
                        name: "origin"
                    }]
                })
            }
        },
        RpOT: function(t, e, n) {},
        S5C5: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return d
            })), n.d(e, "e", (function() {
                return l
            })), n.d(e, "a", (function() {
                return h
            })), n.d(e, "l", (function() {
                return p
            })), n.d(e, "j", (function() {
                return v
            })), n.d(e, "i", (function() {
                return g
            })), n.d(e, "m", (function() {
                return m
            })), n.d(e, "k", (function() {
                return y
            })), n.d(e, "f", (function() {
                return _
            })), n.d(e, "b", (function() {
                return b
            })), n.d(e, "h", (function() {
                return w
            })), n.d(e, "c", (function() {
                return x
            })), n.d(e, "g", (function() {
                return E
            }));
            var r = n("ODXe"),
                i = n("yWgo"),
                o = "https://terminator.djiits.com",
                a = "https://dji-official-fe.djicdn.com",
                s = "true",
                c = "https://www1.djicdn.com",
                u = JSON.parse('{"official_api":{"test":{"host":"//test-www-api.dbeta.me"},"dev":{"host":"//test-www-api.dbeta.me"},"stag":{"host":"//test-www-api.dbeta.me"},"production":{"host":"//www-api.dji.com"},"master":{"host":"//www-api.dji.com"},"host":"//www-api.dji.com"},"official":{"host":"https://www.dji.com"},"product_center":{"dev":{"host":"https://product.dbeta.me"},"test":{"host":"https://product.dbeta.me"},"stag":{"host":"https://r-product.dbeta.me"},"prod":{"host":"https://product.dji.com"},"host":"https://product.dji.com"},"store-mobile":{"dev":{"host":"m.dbeta.me"},"test":{"host":"m.dbeta.me"},"stag":{"host":"r-m.dbeta.me"},"prod":{"host":"m.dji.com"},"host":"m.dji.com"},"store-pc":{"dev":{"host":"store.dbeta.me"},"test":{"host":"store.dbeta.me"},"stag":{"host":"r-store.dbeta.me"},"prod":{"host":"store.dji.com"},"host":"store.dji.com"},"account-mobile":{"dev":{"host":"m.dbeta.me"},"test":{"host":"m.dbeta.me"},"stag":{"host":"r-m.dbeta.me"},"prod":{"host":"m.dji.com"},"host":"m.dji.com"},"account-pc":{"dev":{"host":"accounts.dbeta.me"},"test":{"host":"accounts.dbeta.me"},"stag":{"host":"r-accounts.dbeta.me"},"prod":{"host":"accounts.dji.com"},"host":"accounts.dji.com"},"repair":{"dev":{"host":"repair.dbeta.me"},"test":{"host":"repair.dbeta.me"},"stag":{"host":"support.dji.com"},"prod":{"host":"support.dji.com"},"host":"support.dji.com"}}'),
                f = "RU,MX,AE,BR,ID";
            if (!o) throw new Error("apiHost undefined!");

            function d(t, e, n, r) {
                return -1 !== f.indexOf(e) ? n("nav" === r ? "v4.common.button.wheretobuy_text.nav" : "v4.common.button.wheretobuy_text") : t
            }

            function l(t, e, n) {
                return -1 !== f.indexOf(n) ? t : e
            }

            function h(t) {
                return "".concat(o).concat(t)
            }

            function p(t) {
                var e = "".concat(window.location.protocol, "//").concat(window.location.host);
                return "".concat(e).concat(t)
            }

            function v(t) {
                return /^(https?:)?\/\/store\.((dbeta\.me)|(dji\.com))/.test(t)
            }

            function g(t) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t = t.trim(), /^(https?:)?\/\//.test(t)) return t.replace(/^https?:/, "");
                var e = "https://www.dji.com" + (/some_hard_condition/.test(t) ? "" : "/") + t;
                return /\b\/\/+/.test(e) && (e = e.replace(/\b\/\/+/g, "/")), "/" !== e && /\/$/g.test(e) && (e = e.substring(0, e.length - 1)), e
            }

            function m(t) {
                if (/(s3\.amazonaws|djicdn\.com)/gi.test(t)) return t;
                var e = c || "";
                return s && a && (e = a), "".concat(e, "/").concat(t)
            }

            function y(t) {
                var e = t.domain,
                    n = t.url,
                    r = t.country,
                    o = void 0 === r ? "" : r,
                    a = t.locale,
                    s = void 0 === a ? "" : a,
                    c = t.mobileMode,
                    d = void 0 !== c && c,
                    l = "",
                    h = n,
                    p = d ? "/mobile" : "";
                if (!!/^(https?:)?\/\//.test(n)) return n;
                e && (l = function(t) {
                    var e = t.domain,
                        n = t.mobileMode;
                    "store" === e && n && (e = "m");
                    var r = u.official;
                    return (r.production && r.production.host || r.host).replace(/w{3,}/, e)
                }(t));
                var v = "";
                /^[A-Za-z]/.test(h) && (h = "/".concat(h)), "store" === e ? (v = i.G.getLangUrlPrefix(s), p = "", "ru" === s && "/shopping-flow" === h ? (l = "", h = v + h.replace("/ru", "")) : "it" === s && "it" === o.toLowerCase() ? v = "" : -1 !== f.indexOf(o) && (l = "", v = i.G.getCountryUrlPrefix({
                    country: o,
                    locale: s
                }), p = d ? "/mobile" : "", h = "/where-to-buy")) : v = e ? i.G.getLangUrlPrefix(s) : i.G.getCountryUrlPrefix({
                    country: o,
                    locale: s
                });
                var g = "".concat(l).concat(v).concat(p).concat(h);
                return "/" !== g && /\/$/g.test(g) && (g = g.substring(0, g.length - 1)), g
            }

            function _(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image",
                    n = {};
                if (!t || /\.svg$/.test(t)) return "bg" === e ? "url(".concat(t, ")") : (n.src = t, n);
                var i = /(http|https):\/\/([^/]+)\/(.+)\/(.+)\.(.+)$/.exec(t),
                    o = Object(r.a)(i, 6),
                    a = o[1],
                    s = o[2],
                    c = o[3],
                    u = o[4],
                    f = o[5],
                    d = "".concat(a, "://").concat(s, "/").concat(c, "/").concat(u, "@1x.").concat(f);
                return "bg" === e ? "\n    background-image: url(".concat(d, "); \n    background-image:-webkit-image-set( url(").concat(d, ") 1x, url(").concat(t, ") 2x); \n    background-image: image-set( url(").concat(d, ") 1x, url(").concat(t, ") 2x)") : (n.src = d, n.srcSet = "".concat(d, " 1x, ").concat(t, " 2x"), n)
            }

            function b(t) {
                if (!t) return !1;
                if (!(!t.match(/^http/gi) && !t.match(/www/gi) && !t.match(/\.com/gi) && !t.match(/^\/\//))) {
                    var e = new URL(t).host,
                        n = new RegExp(e, "gi"),
                        r = new RegExp(window.location.host, "gi");
                    if (!(n.test(t) && r.test(t))) return !0
                }
                return !1
            }

            function w(t) {
                return b(t) ? "_blank" : "_self"
            }

            function x(t, e) {
                var n = (t = (t = t.replace(/\/$/, "")).replace(/(&|\?)?from=buy_now/g, "")).split("#")[1];
                return (t = t.split("#")[0]).indexOf("?") > -1 ? t += "&" : t += "?", (t += "site=brandsite").indexOf("from=") < 0 && e && (t = "".concat(t, "&from=").concat(e)), n && (t = "".concat(t, "#").concat(n)), t
            }

            function E(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = /(.+)(\..+)$/,
                    i = "";
                if (t && "" !== t && n.exec(t) && n.exec(t).length && 3 === n.exec(t).length) {
                    var o = n.exec(t),
                        a = Object(r.a)(o, 3),
                        s = a[1],
                        c = a[2];
                    i = "".concat(s).concat(e).concat(c)
                }
                return i
            }
        },
        Wr5T: function(t, e) {
            ! function() {
                "use strict";
                if ("object" === typeof window)
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var t = function(t) {
                                for (var e = window.document, n = i(e); n;) n = i(e = n.ownerDocument);
                                return e
                            }(),
                            e = [],
                            n = null,
                            r = null;
                        a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a._setupCrossOriginUpdater = function() {
                            return n || (n = function(t, n) {
                                r = t && n ? l(t, n) : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                }, e.forEach((function(t) {
                                    t._checkForIntersections()
                                }))
                            }), n
                        }, a._resetCrossOriginUpdater = function() {
                            n = null, r = null
                        }, a.prototype.observe = function(t) {
                            if (!this._observationTargets.some((function(e) {
                                    return e.element == t
                                }))) {
                                if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: t,
                                    entry: null
                                }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
                            }
                        }, a.prototype.unobserve = function(t) {
                            this._observationTargets = this._observationTargets.filter((function(e) {
                                return e.element != t
                            })), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                        }, a.prototype.disconnect = function() {
                            this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                        }, a.prototype.takeRecords = function() {
                            var t = this._queuedEntries.slice();
                            return this._queuedEntries = [], t
                        }, a.prototype._initThresholds = function(t) {
                            var e = t || [0];
                            return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== n[e - 1]
                            }))
                        }, a.prototype._parseRootMargin = function(t) {
                            var e = (t || "0px").split(/\s+/).map((function(t) {
                                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(e[1]),
                                    unit: e[2]
                                }
                            }));
                            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                        }, a.prototype._monitorIntersections = function(e) {
                            var n = e.defaultView;
                            if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                                var r = this._checkForIntersections,
                                    o = null,
                                    a = null;
                                this.POLL_INTERVAL ? o = n.setInterval(r, this.POLL_INTERVAL) : (s(n, "resize", r, !0), s(e, "scroll", r, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (a = new n.MutationObserver(r)).observe(e, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push((function() {
                                    var t = e.defaultView;
                                    t && (o && t.clearInterval(o), c(t, "resize", r, !0)), c(e, "scroll", r, !0), a && a.disconnect()
                                }));
                                var u = this.root && (this.root.ownerDocument || this.root) || t;
                                if (e != u) {
                                    var f = i(e);
                                    f && this._monitorIntersections(f.ownerDocument)
                                }
                            }
                        }, a.prototype._unmonitorIntersections = function(e) {
                            var n = this._monitoringDocuments.indexOf(e);
                            if (-1 != n) {
                                var r = this.root && (this.root.ownerDocument || this.root) || t;
                                if (!this._observationTargets.some((function(t) {
                                        var n = t.element.ownerDocument;
                                        if (n == e) return !0;
                                        for (; n && n != r;) {
                                            var o = i(n);
                                            if ((n = o && o.ownerDocument) == e) return !0
                                        }
                                        return !1
                                    }))) {
                                    var o = this._monitoringUnsubscribes[n];
                                    if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), e != r) {
                                        var a = i(e);
                                        a && this._unmonitorIntersections(a.ownerDocument)
                                    }
                                }
                            }
                        }, a.prototype._unmonitorAllIntersections = function() {
                            var t = this._monitoringUnsubscribes.slice(0);
                            this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                            for (var e = 0; e < t.length; e++) t[e]()
                        }, a.prototype._checkForIntersections = function() {
                            if (this.root || !n || r) {
                                var t = this._rootIsInDom(),
                                    e = t ? this._getRootRect() : {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                this._observationTargets.forEach((function(r) {
                                    var i = r.element,
                                        a = f(i),
                                        s = this._rootContainsTarget(i),
                                        c = r.entry,
                                        u = t && s && this._computeTargetAndRootIntersection(i, a, e),
                                        d = null;
                                    this._rootContainsTarget(i) ? n && !this.root || (d = e) : d = {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: 0,
                                        height: 0
                                    };
                                    var l = r.entry = new o({
                                        time: window.performance && performance.now && performance.now(),
                                        target: i,
                                        boundingClientRect: a,
                                        rootBounds: d,
                                        intersectionRect: u
                                    });
                                    c ? t && s ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                                }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                            }
                        }, a.prototype._computeTargetAndRootIntersection = function(e, i, o) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var a = i, s = p(e), c = !1; !c && s;) {
                                    var d = null,
                                        h = 1 == s.nodeType ? window.getComputedStyle(s) : {};
                                    if ("none" == h.display) return null;
                                    if (s == this.root || 9 == s.nodeType)
                                        if (c = !0, s == this.root || s == t) n && !this.root ? !r || 0 == r.width && 0 == r.height ? (s = null, d = null, a = null) : d = r : d = o;
                                        else {
                                            var v = p(s),
                                                g = v && f(v),
                                                m = v && this._computeTargetAndRootIntersection(v, g, o);
                                            g && m ? (s = v, d = l(g, m)) : (s = null, a = null)
                                        }
                                    else {
                                        var y = s.ownerDocument;
                                        s != y.body && s != y.documentElement && "visible" != h.overflow && (d = f(s))
                                    }
                                    if (d && (a = u(d, a)), !a) break;
                                    s = s && p(s)
                                }
                                return a
                            }
                        }, a.prototype._getRootRect = function() {
                            var e;
                            if (this.root && !v(this.root)) e = f(this.root);
                            else {
                                var n = v(this.root) ? this.root : t,
                                    r = n.documentElement,
                                    i = n.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: r.clientWidth || i.clientWidth,
                                    width: r.clientWidth || i.clientWidth,
                                    bottom: r.clientHeight || i.clientHeight,
                                    height: r.clientHeight || i.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, a.prototype._expandRectByRootMargin = function(t) {
                            var e = this._rootMarginValues.map((function(e, n) {
                                    return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                                })),
                                n = {
                                    top: t.top - e[0],
                                    right: t.right + e[1],
                                    bottom: t.bottom + e[2],
                                    left: t.left - e[3]
                                };
                            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                        }, a.prototype._hasCrossedThreshold = function(t, e) {
                            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                            if (n !== r)
                                for (var i = 0; i < this.thresholds.length; i++) {
                                    var o = this.thresholds[i];
                                    if (o == n || o == r || o < n !== o < r) return !0
                                }
                        }, a.prototype._rootIsInDom = function() {
                            return !this.root || h(t, this.root)
                        }, a.prototype._rootContainsTarget = function(e) {
                            var n = this.root && (this.root.ownerDocument || this.root) || t;
                            return h(n, e) && (!this.root || n == e.ownerDocument)
                        }, a.prototype._registerInstance = function() {
                            e.indexOf(this) < 0 && e.push(this)
                        }, a.prototype._unregisterInstance = function() {
                            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                        }, window.IntersectionObserver = a, window.IntersectionObserverEntry = o
                    }
                function i(t) {
                    try {
                        return t.defaultView && t.defaultView.frameElement || null
                    } catch (e) {
                        return null
                    }
                }

                function o(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = d(t.rootBounds), this.boundingClientRect = d(t.boundingClientRect), this.intersectionRect = d(t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        r = this.intersectionRect,
                        i = r.width * r.height;
                    this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function a(t, e) {
                    var n = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType) throw new Error("root must be a Document or Element");
                    this._checkForIntersections = function(t, e) {
                        var n = null;
                        return function() {
                            n || (n = setTimeout((function() {
                                t(), n = null
                            }), e))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                        return t.value + t.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function s(t, e, n, r) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function c(t, e, n, r) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function u(t, e) {
                    var n = Math.max(t.top, e.top),
                        r = Math.min(t.bottom, e.bottom),
                        i = Math.max(t.left, e.left),
                        o = Math.min(t.right, e.right),
                        a = o - i,
                        s = r - n;
                    return a >= 0 && s >= 0 && {
                        top: n,
                        bottom: r,
                        left: i,
                        right: o,
                        width: a,
                        height: s
                    } || null
                }

                function f(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (n) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function d(t) {
                    return !t || "x" in t ? t : {
                        top: t.top,
                        y: t.top,
                        bottom: t.bottom,
                        left: t.left,
                        x: t.left,
                        right: t.right,
                        width: t.width,
                        height: t.height
                    }
                }

                function l(t, e) {
                    var n = e.top - t.top,
                        r = e.left - t.left;
                    return {
                        top: n,
                        left: r,
                        height: e.height,
                        width: e.width,
                        bottom: n + e.height,
                        right: r + e.width
                    }
                }

                function h(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = p(n)
                    }
                    return !1
                }

                function p(e) {
                    var n = e.parentNode;
                    return 9 == e.nodeType && e != t ? i(e) : (n && n.assignedSlot && (n = n.assignedSlot.parentNode), n && 11 == n.nodeType && n.host ? n.host : n)
                }

                function v(t) {
                    return t && 9 === t.nodeType
                }
            }()
        },
        YuTi: function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        },
        "hKI/": function(t, e, n) {
            (function(e) {
                var n = "Expected a function",
                    r = NaN,
                    i = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    s = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    u = parseInt,
                    f = "object" == typeof e && e && e.Object === Object && e,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    l = f || d || Function("return this")(),
                    h = Object.prototype.toString,
                    p = Math.max,
                    v = Math.min,
                    g = function() {
                        return l.Date.now()
                    };

                function m(t, e, r) {
                    var i, o, a, s, c, u, f = 0,
                        d = !1,
                        l = !1,
                        h = !0;
                    if ("function" != typeof t) throw new TypeError(n);

                    function m(e) {
                        var n = i,
                            r = o;
                        return i = o = void 0, f = e, s = t.apply(r, n)
                    }

                    function b(t) {
                        var n = t - u;
                        return void 0 === u || n >= e || n < 0 || l && t - f >= a
                    }

                    function w() {
                        var t = g();
                        if (b(t)) return x(t);
                        c = setTimeout(w, function(t) {
                            var n = e - (t - u);
                            return l ? v(n, a - (t - f)) : n
                        }(t))
                    }

                    function x(t) {
                        return c = void 0, h && i ? m(t) : (i = o = void 0, s)
                    }

                    function E() {
                        var t = g(),
                            n = b(t);
                        if (i = arguments, o = this, u = t, n) {
                            if (void 0 === c) return function(t) {
                                return f = t, c = setTimeout(w, e), d ? m(t) : s
                            }(u);
                            if (l) return c = setTimeout(w, e), m(u)
                        }
                        return void 0 === c && (c = setTimeout(w, e)), s
                    }
                    return e = _(e) || 0, y(r) && (d = !!r.leading, a = (l = "maxWait" in r) ? p(_(r.maxWait) || 0, e) : a, h = "trailing" in r ? !!r.trailing : h), E.cancel = function() {
                        void 0 !== c && clearTimeout(c), f = 0, i = u = o = c = void 0
                    }, E.flush = function() {
                        return void 0 === c ? s : x(g())
                    }, E
                }

                function y(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function _(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && h.call(t) == i
                        }(t)) return r;
                    if (y(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = y(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(o, "");
                    var n = s.test(t);
                    return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? r : +t
                }
                t.exports = function(t, e, r) {
                    var i = !0,
                        o = !0;
                    if ("function" != typeof t) throw new TypeError(n);
                    return y(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), m(t, e, {
                        leading: i,
                        maxWait: e,
                        trailing: o
                    })
                }
            }).call(this, n("yLpj"))
        },
        "iVi/": function(t, e, n) {
            "use strict";
            e.parse = function(t, e) {
                if ("string" !== typeof t) throw new TypeError("argument str must be a string");
                for (var n = {}, i = e || {}, a = t.split(o), c = i.decode || r, u = 0; u < a.length; u++) {
                    var f = a[u],
                        d = f.indexOf("=");
                    if (!(d < 0)) {
                        var l = f.substr(0, d).trim(),
                            h = f.substr(++d, f.length).trim();
                        '"' == h[0] && (h = h.slice(1, -1)), void 0 == n[l] && (n[l] = s(h, c))
                    }
                }
                return n
            }, e.serialize = function(t, e, n) {
                var r = n || {},
                    o = r.encode || i;
                if ("function" !== typeof o) throw new TypeError("option encode is invalid");
                if (!a.test(t)) throw new TypeError("argument name is invalid");
                var s = o(e);
                if (s && !a.test(s)) throw new TypeError("argument val is invalid");
                var c = t + "=" + s;
                if (null != r.maxAge) {
                    var u = r.maxAge - 0;
                    if (isNaN(u)) throw new Error("maxAge should be a Number");
                    c += "; Max-Age=" + Math.floor(u)
                }
                if (r.domain) {
                    if (!a.test(r.domain)) throw new TypeError("option domain is invalid");
                    c += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!a.test(r.path)) throw new TypeError("option path is invalid");
                    c += "; Path=" + r.path
                }
                if (r.expires) {
                    if ("function" !== typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                    c += "; Expires=" + r.expires.toUTCString()
                }
                r.httpOnly && (c += "; HttpOnly");
                r.secure && (c += "; Secure");
                if (r.sameSite) {
                    switch ("string" === typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                        case !0:
                            c += "; SameSite=Strict";
                            break;
                        case "lax":
                            c += "; SameSite=Lax";
                            break;
                        case "strict":
                            c += "; SameSite=Strict";
                            break;
                        case "none":
                            c += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return c
            };
            var r = decodeURIComponent,
                i = encodeURIComponent,
                o = /; */,
                a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function s(t, e) {
                try {
                    return e(t)
                } catch (n) {
                    return t
                }
            }
        },
        lrw0: function(t, e, n) {
            t.exports = {
                active: "index__active___GPAYV",
                ie7: "index__ie7___3ozDz",
                ie6: "index__ie6___1zE-e",
                clickable: "index__clickable___zULFn",
                clearfix: "index__clearfix___3NOy8",
                "grid-container": "index__grid-container___1hw-V",
                "grid-container-fluid": "index__grid-container-fluid___xU3DW",
                grid: "index__grid___VR397",
                top: "index__top___2JvZt",
                middle: "index__middle___2_8i0",
                bottom: "index__bottom___2nxEw",
                stretch: "index__stretch___3Psys",
                baseline: "index__baseline___1-_ZA",
                left: "index__left___1Chlf",
                center: "index__center___1iSrG",
                right: "index__right___3uSj6",
                between: "index__between___23sqT",
                around: "index__around___NdH-v",
                cell: "index__cell___3WVO8",
                is: "index__is___1ntA_",
                "is-fifth": "index__is-fifth___3Uul4",
                "is-1": "index__is-1___pK-SX",
                "is-2": "index__is-2___1K_-0",
                "is-3": "index__is-3___9Nm_8",
                "is-4": "index__is-4___3BEyb",
                "is-5": "index__is-5___2BG8x",
                "is-6": "index__is-6___S8AbL",
                "is-7": "index__is-7___1Dd-x",
                "is-8": "index__is-8___1gPwC",
                "is-9": "index__is-9___3aEJb",
                "is-10": "index__is-10___1uALE",
                "is-11": "index__is-11___2Heae",
                "is-12": "index__is-12___1ssvb",
                "is-offset-0": "index__is-offset-0___3PM2F",
                "is-offset-1": "index__is-offset-1___Kuz3r",
                "is-offset-2": "index__is-offset-2___OQSH2",
                "is-offset-3": "index__is-offset-3___1e-GP",
                "is-offset-4": "index__is-offset-4___2mmAf",
                "is-offset-5": "index__is-offset-5___p8mXo",
                "is-offset-6": "index__is-offset-6___1xdp2",
                "is-offset-7": "index__is-offset-7___2zGeD",
                "is-offset-8": "index__is-offset-8___MRL1L",
                "is-offset-9": "index__is-offset-9___3yfiq",
                "is-offset-10": "index__is-offset-10___1d8FP",
                "is-offset-11": "index__is-offset-11___pi6zn",
                "dui-form": "index__dui-form___-W6TV",
                "row-submit": "index__row-submit___1kawY",
                "form-group": "index__form-group___s-4Lo",
                "col-submit": "index__col-submit___3xG2G",
                "fa-caret-down": "index__fa-caret-down___2pBvG",
                "fa-spinner": "index__fa-spinner___1kTl9",
                error: "index__error___2w8rV",
                "checkbox-container": "index__checkbox-container___226eq",
                fa: "index__fa___3-pNY",
                "dui-btn": "index__dui-btn___3Xvyl",
                "dui-btn-sm": "index__dui-btn-sm___18XKi",
                "dui-btn-primary": "index__dui-btn-primary___21WsD",
                "dui-btn-normal": "index__dui-btn-normal___2Khw6",
                "dui-btn-buy": "index__dui-btn-buy___2cPPF",
                "dui-learn-more": "index__dui-learn-more___3A4OO",
                "fa-angle-right": "index__fa-angle-right___1cNUw",
                spinner: "index__spinner___28vWx",
                "sk-bouncedelay": "index__sk-bouncedelay___3_rtG",
                bounce1: "index__bounce1___3w1d0",
                bounce2: "index__bounce2___lAAJ_"
            }
        },
        nSXv: function(t, e, n) {
            t.exports = {
                "browserIncompatible-content": "style__browserIncompatible-content___1c1_p",
                "browser-modal": "style__browser-modal___FH6Pe",
                "brower-box": "style__brower-box___2zTyx",
                "browser-content": "style__browser-content___1bEYn",
                "browser-dji-logo": "style__browser-dji-logo___1dy2f",
                "browser-text-title": "style__browser-text-title___Bj-Yi",
                "browser-text-desc": "style__browser-text-desc___v7EoX",
                "browser-list": "style__browser-list___U3Mhg",
                "browser-item": "style__browser-item___1XFaD",
                name: "style__name___3jE11",
                "browser-chrome": "style__browser-chrome___12_0k",
                "browser-fiefox": "style__browser-fiefox___2Ieax",
                "browser-safair": "style__browser-safair___3RZmj",
                "browser-edge": "style__browser-edge___1ZY3b"
            }
        },
        r7AC: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "d", (function() {
                return i
            })), n.d(e, "b", (function() {
                return a
            })), n.d(e, "c", (function() {
                return s
            }));
            n("Wr5T");

            function r(t) {
                if (!t) return !1;
                for (var e = t.offsetTop, n = t.offsetLeft, r = t.offsetWidth, i = t.offsetHeight; t.offsetParent;) e += (t = t.offsetParent).offsetTop, n += t.offsetLeft;
                return e < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && e + i > window.pageYOffset && n + r > window.pageXOffset
            }

            function i(t, e, n) {
                if (t && "function" === typeof t.getBoundingClientRect) {
                    var r = window.scrollY || window.pageYOffset,
                        i = n || 0,
                        o = r + i,
                        a = r + window.innerHeight - i,
                        s = e || 0,
                        c = t.getBoundingClientRect().top + r,
                        u = c - s,
                        f = c + t.offsetHeight + s;
                    return u < a && f > o
                }
            }
            var o = !1;

            function a(t) {
                var e = t.elm,
                    n = t.offset,
                    r = void 0 === n ? 0 : n,
                    i = t.callback,
                    a = t.threshold,
                    s = void 0 === a ? 0 : a,
                    c = t.defaultInViewOnIE;
                if (e) {
                    if (o && (void 0 !== c && c)) return setTimeout((function() {
                        i({
                            inView: !0,
                            lastEntry: {
                                isIntersecting: !0
                            },
                            observer: {
                                disconnect: function() {}
                            },
                            entries: [{
                                isIntersecting: !0
                            }]
                        })
                    }), 10);
                    var u = {
                        rootMargin: "".concat(r, "px"),
                        threshold: s
                    };
                    new IntersectionObserver((function(t, e) {
                        var n = t[t.length - 1],
                            r = n.isIntersecting,
                            o = i({
                                inView: r,
                                lastEntry: n,
                                observer: e,
                                entries: t
                            });
                        n.isIntersecting && !o && e.disconnect()
                    }), u).observe(e)
                }
            }

            function s(t, e, n) {
                return i(t, e, n ? 48 : 100)
            }
            o = !!window.MSInputMethodContext && !!document.documentMode
        },
        yLpj: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (r) {
                "object" === typeof window && (n = window)
            }
            t.exports = n
        },
        yWgo: function(t, e, n) {
            "use strict";
            n.d(e, "X", (function() {
                return f
            })), n.d(e, "q", (function() {
                return d
            })), n.d(e, "B", (function() {
                return h
            })), n.d(e, "j", (function() {
                return p
            })), n.d(e, "e", (function() {
                return v
            })), n.d(e, "c", (function() {
                return g
            })), n.d(e, "k", (function() {
                return m
            })), n.d(e, "f", (function() {
                return y
            })), n.d(e, "i", (function() {
                return _
            })), n.d(e, "h", (function() {
                return b
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "l", (function() {
                return x
            })), n.d(e, "n", (function() {
                return E
            })), n.d(e, "g", (function() {
                return S
            })), n.d(e, "w", (function() {
                return T
            })), n.d(e, "z", (function() {
                return O
            })), n.d(e, "G", (function() {
                return l
            })), n.d(e, "T", (function() {
                return I
            })), n.d(e, "S", (function() {
                return A
            })), n.d(e, "L", (function() {
                return j
            })), n.d(e, "p", (function() {
                return k
            })), n.d(e, "y", (function() {
                return L
            })), n.d(e, "Q", (function() {
                return D
            })), n.d(e, "r", (function() {
                return C
            })), n.d(e, "R", (function() {
                return N
            })), n.d(e, "v", (function() {
                return M
            })), n.d(e, "K", (function() {
                return R
            })), n.d(e, "M", (function() {
                return F
            })), n.d(e, "J", (function() {
                return U
            })), n.d(e, "F", (function() {
                return H
            })), n.d(e, "U", (function() {
                return V
            })), n.d(e, "H", (function() {
                return B
            })), n.d(e, "s", (function() {
                return z
            })), n.d(e, "b", (function() {
                return q
            })), n.d(e, "P", (function() {
                return K
            })), n.d(e, "W", (function() {
                return $
            })), n.d(e, "t", (function() {
                return G
            })), n.d(e, "A", (function() {
                return W
            })), n.d(e, "x", (function() {
                return X
            })), n.d(e, "d", (function() {
                return J
            })), n.d(e, "E", (function() {
                return Y
            })), n.d(e, "C", (function() {
                return Q
            })), n.d(e, "I", (function() {
                return Z
            })), n.d(e, "Y", (function() {
                return tt
            })), n.d(e, "o", (function() {
                return et
            })), n.d(e, "N", (function() {
                return nt
            })), n.d(e, "O", (function() {
                return rt
            })), n.d(e, "a", (function() {
                return it
            })), n.d(e, "u", (function() {
                return ot
            })), n.d(e, "V", (function() {
                return at
            })), n.d(e, "D", (function() {
                return st
            }));
            var r = n("o0o1"),
                i = n.n(r),
                o = n("KQm4"),
                a = n("HaE+"),
                s = n("p46w"),
                c = n.n(s),
                u = n("bxWq");

            function f(t) {
                return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*\.){1,63}[a-z0-9]+$/.test(t)
            }

            function d(t) {
                var e = c.a.get("lang"),
                    n = "";
                if (t && "" !== t) {
                    var r = t.split(" ")[0],
                        i = r.split("-")[0],
                        o = r.split("-")[1].startsWith("0") ? r.split("-")[1][1] : r.split("-")[1],
                        a = r.split("-")[2].startsWith("0") ? r.split("-")[2][1] : r.split("-")[2];
                    n = "zh-CN" === e ? "".concat(i, " \u5e74 ").concat(o, " \u6708 ").concat(a, " \u65e5") : "".concat(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][parseInt(o, 10) - 1], " ").concat(a, ", ").concat(i)
                }
                return n
            }
            var l = new u.Localize({
                domain: ".dji.com"
            });
            var h = !0;

            function p() {
                if (h) return !!window.navigator.userAgent.match(/\bm?qqbrowser\/([0-9.]+)/gi)
            }

            function v() {
                if (h) {
                    var t = !1,
                        e = window.navigator.userAgent,
                        n = e.indexOf("MSIE "),
                        r = e.indexOf("Trident/"),
                        i = e.indexOf("Edge/");
                    return (n > 0 || r > 0 || i > 0) && (t = !0), t
                }
            }

            function g() {
                if (h) {
                    var t = window.navigator.userAgent;
                    return /firefox/i.test(t)
                }
            }

            function m() {
                if (h) {
                    var t = window.navigator.userAgent;
                    return /Safari/i.test(t) && !/Chrome/i.test(t)
                }
            }

            function y() {
                if (h) {
                    var t = window.navigator.userAgent;
                    return !!t.match(/iPad/i) || !!t.match(/iPhone/i)
                }
            }

            function _() {
                if (h) {
                    var t = window.navigator.platform;
                    return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t)
                }
            }

            function b() {
                if (h) {
                    var t = window.navigator.userAgent.toLowerCase(),
                        e = !!t.match(/iPad/i) || !!t.match(/iPhone/i),
                        n = -1 !== t.indexOf("safari") && -1 === t.indexOf("crios") && -1 === t.indexOf("browser") && -1 === t.indexOf("fxios");
                    return e && n
                }
            }

            function w() {
                if (h) {
                    var t = window.navigator.userAgent;
                    if (!!t.match(/android/gi)) return !1;
                    var e = /MicroMessenger/i.test(t),
                        n = /Safari/i.test(t),
                        r = /Chrome/i.test(t);
                    return !(!n && !r || e)
                }
            }

            function x() {
                if (h) return !!!window.navigator.userAgent.match(/UCBrowser/gi)
            }

            function E() {
                if (h) {
                    var t = window.navigator.userAgent;
                    return /MicroMessenger/i.test(t)
                }
            }

            function S() {
                if (h) {
                    var t = navigator.userAgent,
                        e = -1 !== t.indexOf("Safari") && -1 !== t.indexOf("Version"),
                        n = -1 !== t.indexOf("iPhone") && -1 !== t.indexOf("Version");
                    return e && !n && "ontouchend" in document
                }
            }

            function T() {
                return S() ? Math.max(window.screen.height, window.innerHeight) : window.innerHeight
            }

            function O(t) {
                for (var e = window.location.search.substring(1).split("&"), n = 0, r = e.length; n < r; n++) {
                    var i = e[n].split("=");
                    if (i[0] === t) return i[1]
                }
                return !1
            }

            function I() {
                var t = window.navigator.userAgent,
                    e = !!t.match(/MicroMessenger/gi),
                    n = !!t.match(/iPad/i) || !!t.match(/iPhone/i),
                    r = !!t.match(/UCBrowser/gi),
                    i = !!t.match(/android/gi),
                    o = !!t.match(/\bm?qqbrowser\/([0-9.]+)/gi),
                    a = !!t.match(/DJI-App-Ios/gi),
                    s = !!t.match(/DJI-App-pilot-go/gi),
                    c = !!t.match(/djifly_ios/gi),
                    u = !!t.match(/DJI-app-mimo/gi);
                return i || c || s || n && (r || o || e || a || u)
            }

            function A(t, e) {
                t && (t.style.willChange = e)
            }

            function j(t) {
                t && (t.style.willChange = "auto")
            }

            function k(t) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = Object(a.default)(i.a.mark((function t(e) {
                    var n, r, a, s, c, u, f;
                    return i.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.XLSX, r = e.fileName, a = e.sheetName, s = e.header, c = e.body, n) {
                                    t.next = 4;
                                    break
                                }
                                return console.error("\u7f3a\u5c11 XLSX \u63d2\u4ef6"), t.abrupt("return");
                            case 4:
                                u = n.utils.book_new(), f = n.utils.aoa_to_sheet([s].concat(Object(o.a)(c))), n.utils.book_append_sheet(u, f, a), n.writeFile(u, r, {
                                    bookType: "xlsx",
                                    bookSST: !0,
                                    type: "binary"
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function L() {
                var t = new Date,
                    e = "".concat(t.getMonth() + 1),
                    n = "".concat(t.getDate());
                return e.length < 2 && (e = "0".concat(e)), n.length < 2 && (n = "0".concat(n)), [e, n].join("")
            }

            function D(t, e, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), document.cookie = "".concat(t, "=").concat(e, "; expires=").concat(r.toGMTString())
            }

            function C(t) {
                for (var e = "".concat(t, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    var i = n[r].trim();
                    if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
                }
                return ""
            }

            function N(t, e) {
                try {
                    window.localStorage.setItem(t, e)
                } catch (n) {}
            }

            function M(t) {
                try {
                    return window.localStorage.getItem(t)
                } catch (e) {
                    return ""
                }
            }
            var R = function(t) {
                    t = t || 32;
                    for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = e.length, r = "", i = 0; i < t; i++) r += e.charAt(Math.floor(Math.random() * n));
                    return r
                },
                F = function(t) {
                    "undefined" !== typeof document && "function" === typeof t && ("complete" !== document.readyState ? window.addEventListener("load", t) : t())
                },
                U = function(t) {
                    return t >= 1 ? 1 : t <= 0 ? 0 : t
                },
                H = function(t) {
                    return "number" === typeof t && !Number.isNaN(t)
                },
                V = function(t, e) {
                    var n = Math.pow(10, e || 2);
                    return Math.round(t * n) / n
                },
                B = function(t) {
                    return t >= 1 ? 1 : t <= 0 ? 0 : V(t, 3)
                },
                z = function(t) {
                    var e, n = t.windowWidth,
                        r = t.windowHeight,
                        i = t.videoWhRatio;
                    if (!i) return 1;
                    n / r < (i = +i) ? e = r / (n / i) : e = n / (r * i);
                    return e
                },
                q = function() {
                    if ("undefined" !== typeof document) {
                        var t = document.createElement("canvas");
                        return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
                    }
                },
                K = function() {
                    "undefined" !== typeof document && document.body && (document.body.style.backgroundColor = "black")
                },
                $ = function(t, e, n, r) {
                    if (t && e && n && r) {
                        var i = e.getContext("2d");
                        i.clearRect(0, 0, n, r), i.drawImage(t, 0, 0, n, r)
                    }
                },
                G = function(t, e, n, r) {
                    var i = q();
                    return {
                        _address: i && r && "" !== n ? n : t,
                        _format: i && r && "" !== n ? "webp" : e
                    }
                },
                W = function(t, e) {
                    if (!Number.isNaN(t)) return t % 1 === 0 ? t : parseFloat(t.toFixed(e))
                },
                X = function(t, e) {
                    if (h && !e) {
                        var n = new RegExp("(^|&)".concat(t, "=([^&]*)(&|$)"), "i"),
                            r = window.location.search.substr(1).match(n),
                            i = "";
                        return null != r && (i = r[2]), i
                    }
                };

            function J(t) {
                return Number(t) === t && t % 1 !== 0
            }
            var Y = h && window.location.pathname.includes("/edit/"),
                Q = function(t, e) {
                    "function" === typeof e && h && (window.ABTest = window.ABTest || {}, window.ABTest[t] = window.ABTest[t] || {}, window.ABTest[t].waitingList = window.ABTest[t].waitingList || [], window.ABTest[t].exec = window.ABTest[t].exec || function() {
                        for (var e = window.ABTest[t].waitingList, n = 0; n < e.length; n++) "function" === typeof e[n] && e[n]()
                    }, window.ABTest[t].startFlag ? e() : window.ABTest[t].waitingList.push(e))
                },
                Z = function(t) {
                    return "string" === typeof t ? t : "object" === typeof t && t && t.path || ""
                },
                tt = function(t) {
                    return "string" !== typeof t ? "" : t.includes(".djicdn.com/") ? t : "https://dji-official-fe.djicdn.com/".concat(t)
                },
                et = function(t) {
                    return /vimeo.com\/(\d+)/.test(t) ? "//player.vimeo.com/video/".concat(RegExp.$1) : /\.youku\.com\/player\.php\/sid\/(.+)\/v\.swf/.test(t) ? "https://player.youku.com/embed/".concat(RegExp.$1) : /\.youtube\.com\/watch\?v=(.+)/.test(t) ? "//www.youtube.com/embed/".concat(RegExp.$1) : /^https?:\/\//.test(t) ? t.replace(/^https?:/, "") : t
                },
                nt = function(t, e) {
                    e = +e;
                    var n = document.querySelector(".page-wrapper .sections-wrapper");
                    if (n) {
                        var r = n.clientWidth,
                            i = (document.querySelectorAll(".".concat(t, " ._28KUW")) || [])[e],
                            o = document.querySelector(".".concat(t, " .quark-tab-default-tab-bar")),
                            a = document.querySelector(".".concat(t, " .quark-tab-default-tab-container"));
                        if (i) {
                            var s = -(i.offsetLeft - (r - i.offsetWidth) / 2),
                                c = o.clientWidth;
                            if (-s < 0 || 0 === e) return void a.scroll({
                                left: 0,
                                behavior: "smooth"
                            });
                            if (s < r - c) return void a.scroll({
                                left: -(r - c - 48),
                                behavior: "smooth"
                            });
                            a.scroll({
                                left: -s,
                                behavior: "smooth"
                            })
                        }
                    }
                },
                rt = function(t, e) {
                    e = +e;
                    var n = (document.querySelectorAll(".".concat(t, " ._28KUW")) || [])[e],
                        r = document.querySelector(".".concat(t, " .quark-tab-default-tab-container"));
                    if (n && r) {
                        var i = r.clientWidth / 2 - n.offsetLeft - n.clientWidth / 2;
                        r.scroll({
                            left: -i,
                            behavior: "smooth"
                        })
                    }
                },
                it = function(t, e) {
                    var n, r = e - t,
                        i = r > 0 ? r : -r;
                    return i < 8e-4 ? n = e : (r *= .2, n = t, i >= .03 ? r = r > 0 ? .015 : -.015 : i < .03 && i >= .002 ? r = r > 0 ? .002 : -.002 : i < 8e-4 && (r = r > 0 ? 8e-4 : -8e-4), n += r), n > 1 ? n = 1 : n < 0 && (n = 0), n
                },
                ot = function(t) {
                    var e = +(t || "").replace("px", "");
                    return e && !Number.isNaN(e) ? e >= 18 ? "-0.03em" : "-0.02em" : void 0
                },
                at = function() {
                    if (h) try {
                        window.dispatchEvent(new CustomEvent("scroll"))
                    } catch (t) {}
                },
                st = function(t) {
                    return t.match(/^floatButton$|^supportFloating$/)
                }
        },
        zT9C: function(t, e, n) {
            (function(t, n) {
                var r = 200,
                    i = "__lodash_hash_undefined__",
                    o = 9007199254740991,
                    a = "[object Arguments]",
                    s = "[object Boolean]",
                    c = "[object Date]",
                    u = "[object Function]",
                    f = "[object GeneratorFunction]",
                    d = "[object Map]",
                    l = "[object Number]",
                    h = "[object Object]",
                    p = "[object RegExp]",
                    v = "[object Set]",
                    g = "[object String]",
                    m = "[object Symbol]",
                    y = "[object ArrayBuffer]",
                    _ = "[object DataView]",
                    b = "[object Float32Array]",
                    w = "[object Float64Array]",
                    x = "[object Int8Array]",
                    E = "[object Int16Array]",
                    S = "[object Int32Array]",
                    T = "[object Uint8Array]",
                    O = "[object Uint8ClampedArray]",
                    I = "[object Uint16Array]",
                    A = "[object Uint32Array]",
                    j = /\w*$/,
                    k = /^\[object .+?Constructor\]$/,
                    P = /^(?:0|[1-9]\d*)$/,
                    L = {};
                L[a] = L["[object Array]"] = L[y] = L[_] = L[s] = L[c] = L[b] = L[w] = L[x] = L[E] = L[S] = L[d] = L[l] = L[h] = L[p] = L[v] = L[g] = L[m] = L[T] = L[O] = L[I] = L[A] = !0, L["[object Error]"] = L[u] = L["[object WeakMap]"] = !1;
                var D = "object" == typeof t && t && t.Object === Object && t,
                    C = "object" == typeof self && self && self.Object === Object && self,
                    N = D || C || Function("return this")(),
                    M = e && !e.nodeType && e,
                    R = M && "object" == typeof n && n && !n.nodeType && n,
                    F = R && R.exports === M;

                function U(t, e) {
                    return t.set(e[0], e[1]), t
                }

                function H(t, e) {
                    return t.add(e), t
                }

                function V(t, e, n, r) {
                    var i = -1,
                        o = t ? t.length : 0;
                    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                    return n
                }

                function B(t) {
                    var e = !1;
                    if (null != t && "function" != typeof t.toString) try {
                        e = !!(t + "")
                    } catch (n) {}
                    return e
                }

                function z(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t, r) {
                        n[++e] = [r, t]
                    })), n
                }

                function q(t, e) {
                    return function(n) {
                        return t(e(n))
                    }
                }

                function K(t) {
                    var e = -1,
                        n = Array(t.size);
                    return t.forEach((function(t) {
                        n[++e] = t
                    })), n
                }
                var $ = Array.prototype,
                    G = Function.prototype,
                    W = Object.prototype,
                    X = N["__core-js_shared__"],
                    J = function() {
                        var t = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }(),
                    Y = G.toString,
                    Q = W.hasOwnProperty,
                    Z = W.toString,
                    tt = RegExp("^" + Y.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    et = F ? N.Buffer : void 0,
                    nt = N.Symbol,
                    rt = N.Uint8Array,
                    it = q(Object.getPrototypeOf, Object),
                    ot = Object.create,
                    at = W.propertyIsEnumerable,
                    st = $.splice,
                    ct = Object.getOwnPropertySymbols,
                    ut = et ? et.isBuffer : void 0,
                    ft = q(Object.keys, Object),
                    dt = Mt(N, "DataView"),
                    lt = Mt(N, "Map"),
                    ht = Mt(N, "Promise"),
                    pt = Mt(N, "Set"),
                    vt = Mt(N, "WeakMap"),
                    gt = Mt(Object, "create"),
                    mt = Vt(dt),
                    yt = Vt(lt),
                    _t = Vt(ht),
                    bt = Vt(pt),
                    wt = Vt(vt),
                    xt = nt ? nt.prototype : void 0,
                    Et = xt ? xt.valueOf : void 0;

                function St(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Tt(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Ot(t) {
                    var e = -1,
                        n = t ? t.length : 0;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function It(t) {
                    this.__data__ = new Tt(t)
                }

                function At(t, e) {
                    var n = zt(t) || function(t) {
                            return function(t) {
                                return function(t) {
                                    return !!t && "object" == typeof t
                                }(t) && qt(t)
                            }(t) && Q.call(t, "callee") && (!at.call(t, "callee") || Z.call(t) == a)
                        }(t) ? function(t, e) {
                            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                            return r
                        }(t.length, String) : [],
                        r = n.length,
                        i = !!r;
                    for (var o in t) !e && !Q.call(t, o) || i && ("length" == o || Ut(o, r)) || n.push(o);
                    return n
                }

                function jt(t, e, n) {
                    var r = t[e];
                    Q.call(t, e) && Bt(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                }

                function kt(t, e) {
                    for (var n = t.length; n--;)
                        if (Bt(t[n][0], e)) return n;
                    return -1
                }

                function Pt(t, e, n, r, i, o, k) {
                    var P;
                    if (r && (P = o ? r(t, i, o, k) : r(t)), void 0 !== P) return P;
                    if (!Gt(t)) return t;
                    var D = zt(t);
                    if (D) {
                        if (P = function(t) {
                                var e = t.length,
                                    n = t.constructor(e);
                                e && "string" == typeof t[0] && Q.call(t, "index") && (n.index = t.index, n.input = t.input);
                                return n
                            }(t), !e) return function(t, e) {
                            var n = -1,
                                r = t.length;
                            e || (e = Array(r));
                            for (; ++n < r;) e[n] = t[n];
                            return e
                        }(t, P)
                    } else {
                        var C = Ft(t),
                            N = C == u || C == f;
                        if (Kt(t)) return function(t, e) {
                            if (e) return t.slice();
                            var n = new t.constructor(t.length);
                            return t.copy(n), n
                        }(t, e);
                        if (C == h || C == a || N && !o) {
                            if (B(t)) return o ? t : {};
                            if (P = function(t) {
                                    return "function" != typeof t.constructor || Ht(t) ? {} : (e = it(t), Gt(e) ? ot(e) : {});
                                    var e
                                }(N ? {} : t), !e) return function(t, e) {
                                return Ct(t, Rt(t), e)
                            }(t, function(t, e) {
                                return t && Ct(e, Wt(e), t)
                            }(P, t))
                        } else {
                            if (!L[C]) return o ? t : {};
                            P = function(t, e, n, r) {
                                var i = t.constructor;
                                switch (e) {
                                    case y:
                                        return Dt(t);
                                    case s:
                                    case c:
                                        return new i(+t);
                                    case _:
                                        return function(t, e) {
                                            var n = e ? Dt(t.buffer) : t.buffer;
                                            return new t.constructor(n, t.byteOffset, t.byteLength)
                                        }(t, r);
                                    case b:
                                    case w:
                                    case x:
                                    case E:
                                    case S:
                                    case T:
                                    case O:
                                    case I:
                                    case A:
                                        return function(t, e) {
                                            var n = e ? Dt(t.buffer) : t.buffer;
                                            return new t.constructor(n, t.byteOffset, t.length)
                                        }(t, r);
                                    case d:
                                        return function(t, e, n) {
                                            return V(e ? n(z(t), !0) : z(t), U, new t.constructor)
                                        }(t, r, n);
                                    case l:
                                    case g:
                                        return new i(t);
                                    case p:
                                        return function(t) {
                                            var e = new t.constructor(t.source, j.exec(t));
                                            return e.lastIndex = t.lastIndex, e
                                        }(t);
                                    case v:
                                        return function(t, e, n) {
                                            return V(e ? n(K(t), !0) : K(t), H, new t.constructor)
                                        }(t, r, n);
                                    case m:
                                        return o = t, Et ? Object(Et.call(o)) : {}
                                }
                                var o
                            }(t, C, Pt, e)
                        }
                    }
                    k || (k = new It);
                    var M = k.get(t);
                    if (M) return M;
                    if (k.set(t, P), !D) var R = n ? function(t) {
                        return function(t, e, n) {
                            var r = e(t);
                            return zt(t) ? r : function(t, e) {
                                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                                return t
                            }(r, n(t))
                        }(t, Wt, Rt)
                    }(t) : Wt(t);
                    return function(t, e) {
                        for (var n = -1, r = t ? t.length : 0; ++n < r && !1 !== e(t[n], n, t););
                    }(R || t, (function(i, o) {
                        R && (i = t[o = i]), jt(P, o, Pt(i, e, n, r, o, t, k))
                    })), P
                }

                function Lt(t) {
                    return !(!Gt(t) || (e = t, J && J in e)) && ($t(t) || B(t) ? tt : k).test(Vt(t));
                    var e
                }

                function Dt(t) {
                    var e = new t.constructor(t.byteLength);
                    return new rt(e).set(new rt(t)), e
                }

                function Ct(t, e, n, r) {
                    n || (n = {});
                    for (var i = -1, o = e.length; ++i < o;) {
                        var a = e[i],
                            s = r ? r(n[a], t[a], a, n, t) : void 0;
                        jt(n, a, void 0 === s ? t[a] : s)
                    }
                    return n
                }

                function Nt(t, e) {
                    var n = t.__data__;
                    return function(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                    }(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }

                function Mt(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return Lt(n) ? n : void 0
                }
                St.prototype.clear = function() {
                    this.__data__ = gt ? gt(null) : {}
                }, St.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t]
                }, St.prototype.get = function(t) {
                    var e = this.__data__;
                    if (gt) {
                        var n = e[t];
                        return n === i ? void 0 : n
                    }
                    return Q.call(e, t) ? e[t] : void 0
                }, St.prototype.has = function(t) {
                    var e = this.__data__;
                    return gt ? void 0 !== e[t] : Q.call(e, t)
                }, St.prototype.set = function(t, e) {
                    return this.__data__[t] = gt && void 0 === e ? i : e, this
                }, Tt.prototype.clear = function() {
                    this.__data__ = []
                }, Tt.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = kt(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : st.call(e, n, 1), !0)
                }, Tt.prototype.get = function(t) {
                    var e = this.__data__,
                        n = kt(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, Tt.prototype.has = function(t) {
                    return kt(this.__data__, t) > -1
                }, Tt.prototype.set = function(t, e) {
                    var n = this.__data__,
                        r = kt(n, t);
                    return r < 0 ? n.push([t, e]) : n[r][1] = e, this
                }, Ot.prototype.clear = function() {
                    this.__data__ = {
                        hash: new St,
                        map: new(lt || Tt),
                        string: new St
                    }
                }, Ot.prototype.delete = function(t) {
                    return Nt(this, t).delete(t)
                }, Ot.prototype.get = function(t) {
                    return Nt(this, t).get(t)
                }, Ot.prototype.has = function(t) {
                    return Nt(this, t).has(t)
                }, Ot.prototype.set = function(t, e) {
                    return Nt(this, t).set(t, e), this
                }, It.prototype.clear = function() {
                    this.__data__ = new Tt
                }, It.prototype.delete = function(t) {
                    return this.__data__.delete(t)
                }, It.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, It.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, It.prototype.set = function(t, e) {
                    var n = this.__data__;
                    if (n instanceof Tt) {
                        var i = n.__data__;
                        if (!lt || i.length < r - 1) return i.push([t, e]), this;
                        n = this.__data__ = new Ot(i)
                    }
                    return n.set(t, e), this
                };
                var Rt = ct ? q(ct, Object) : function() {
                        return []
                    },
                    Ft = function(t) {
                        return Z.call(t)
                    };

                function Ut(t, e) {
                    return !!(e = null == e ? o : e) && ("number" == typeof t || P.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function Ht(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || W)
                }

                function Vt(t) {
                    if (null != t) {
                        try {
                            return Y.call(t)
                        } catch (e) {}
                        try {
                            return t + ""
                        } catch (e) {}
                    }
                    return ""
                }

                function Bt(t, e) {
                    return t === e || t !== t && e !== e
                }(dt && Ft(new dt(new ArrayBuffer(1))) != _ || lt && Ft(new lt) != d || ht && "[object Promise]" != Ft(ht.resolve()) || pt && Ft(new pt) != v || vt && "[object WeakMap]" != Ft(new vt)) && (Ft = function(t) {
                    var e = Z.call(t),
                        n = e == h ? t.constructor : void 0,
                        r = n ? Vt(n) : void 0;
                    if (r) switch (r) {
                        case mt:
                            return _;
                        case yt:
                            return d;
                        case _t:
                            return "[object Promise]";
                        case bt:
                            return v;
                        case wt:
                            return "[object WeakMap]"
                    }
                    return e
                });
                var zt = Array.isArray;

                function qt(t) {
                    return null != t && function(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
                    }(t.length) && !$t(t)
                }
                var Kt = ut || function() {
                    return !1
                };

                function $t(t) {
                    var e = Gt(t) ? Z.call(t) : "";
                    return e == u || e == f
                }

                function Gt(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function Wt(t) {
                    return qt(t) ? At(t) : function(t) {
                        if (!Ht(t)) return ft(t);
                        var e = [];
                        for (var n in Object(t)) Q.call(t, n) && "constructor" != n && e.push(n);
                        return e
                    }(t)
                }
                n.exports = function(t) {
                    return Pt(t, !0, !0)
                }
            }).call(this, n("yLpj"), n("YuTi")(t))
        }
    },
    [
        [4, 1, 0]
    ]
]);