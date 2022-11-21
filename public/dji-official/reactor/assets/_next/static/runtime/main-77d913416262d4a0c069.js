(window.webpackJsonp = window.webpackJsonp || []).push([
    [63], {
        3: function(t, n, e) {
            e("BnQE"), t.exports = e("BMP1")
        },
        BnQE: function(t, n) {},
        w6Sm: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, "getCLS", (function() {
                return m
            })), e.d(n, "getFCP", (function() {
                return g
            })), e.d(n, "getFID", (function() {
                return S
            })), e.d(n, "getLCP", (function() {
                return y
            })), e.d(n, "getTTFB", (function() {
                return F
            }));
            var i, a, r = function() {
                    return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                },
                o = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return {
                        name: t,
                        value: n,
                        delta: 0,
                        entries: [],
                        id: r(),
                        isFinal: !1
                    }
                },
                u = function(t, n) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var e = new PerformanceObserver((function(t) {
                                return t.getEntries().map(n)
                            }));
                            return e.observe({
                                type: t,
                                buffered: !0
                            }), e
                        }
                    } catch (t) {}
                },
                c = !1,
                s = !1,
                d = function(t) {
                    c = !t.persisted
                },
                p = function() {
                    addEventListener("pagehide", d), addEventListener("unload", (function() {}))
                },
                f = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    s || (p(), s = !0), addEventListener("visibilitychange", (function(n) {
                        var e = n.timeStamp;
                        "hidden" === document.visibilityState && t({
                            timeStamp: e,
                            isUnloading: c
                        })
                    }), {
                        capture: !0,
                        once: n
                    })
                },
                l = function(t, n, e, i) {
                    var a;
                    return function() {
                        e && n.isFinal && e.disconnect(), n.value >= 0 && (i || n.isFinal || "hidden" === document.visibilityState) && (n.delta = n.value - (a || 0), (n.delta || n.isFinal || void 0 === a) && (t(n), a = n.value))
                    }
                },
                m = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        e = o("CLS", 0),
                        i = function(t) {
                            t.hadRecentInput || (e.value += t.value, e.entries.push(t), r())
                        },
                        a = u("layout-shift", i),
                        r = l(t, e, a, n);
                    f((function(t) {
                        var n = t.isUnloading;
                        a && a.takeRecords().map(i), n && (e.isFinal = !0), r()
                    }))
                },
                v = function() {
                    return void 0 === i && (i = "hidden" === document.visibilityState ? 0 : 1 / 0, f((function(t) {
                        var n = t.timeStamp;
                        return i = n
                    }), !0)), {
                        get timeStamp() {
                            return i
                        }
                    }
                },
                g = function(t) {
                    var n = o("FCP"),
                        e = v(),
                        i = u("paint", (function(t) {
                            "first-contentful-paint" === t.name && t.startTime < e.timeStamp && (n.value = t.startTime, n.isFinal = !0, n.entries.push(t), a())
                        })),
                        a = l(t, n, i)
                },
                S = function(t) {
                    var n = o("FID"),
                        e = v(),
                        i = function(t) {
                            t.startTime < e.timeStamp && (n.value = t.processingStart - t.startTime, n.entries.push(t), n.isFinal = !0, r())
                        },
                        a = u("first-input", i),
                        r = l(t, n, a);
                    f((function() {
                        a && (a.takeRecords().map(i), a.disconnect())
                    }), !0), a || window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay((function(t, i) {
                        i.timeStamp < e.timeStamp && (n.value = t, n.isFinal = !0, n.entries = [{
                            entryType: "first-input",
                            name: i.type,
                            target: i.target,
                            cancelable: i.cancelable,
                            startTime: i.timeStamp,
                            processingStart: i.timeStamp + t
                        }], r())
                    }))
                },
                h = function() {
                    return a || (a = new Promise((function(t) {
                        return ["scroll", "keydown", "pointerdown"].map((function(n) {
                            addEventListener(n, t, {
                                once: !0,
                                passive: !0,
                                capture: !0
                            })
                        }))
                    }))), a
                },
                y = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        e = o("LCP"),
                        i = v(),
                        a = function(t) {
                            var n = t.startTime;
                            n < i.timeStamp ? (e.value = n, e.entries.push(t)) : e.isFinal = !0, c()
                        },
                        r = u("largest-contentful-paint", a),
                        c = l(t, e, r, n),
                        s = function() {
                            e.isFinal || (r && r.takeRecords().map(a), e.isFinal = !0, c())
                        };
                    h().then(s), f(s, !0)
                },
                F = function(t) {
                    var n, e = o("TTFB");
                    n = function() {
                        try {
                            var n = performance.getEntriesByType("navigation")[0] || function() {
                                var t = performance.timing,
                                    n = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                                return n
                            }();
                            e.value = e.delta = n.responseStart, e.entries = [n], e.isFinal = !0, t(e)
                        } catch (t) {}
                    }, "complete" === document.readyState ? setTimeout(n, 0) : addEventListener("pageshow", n)
                }
        }
    },
    [
        [3, 1, 0]
    ]
]);