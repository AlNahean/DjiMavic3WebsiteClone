(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
        CYTQ: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("1OyB"),
                o = i("vuIU"),
                r = i("JX7q"),
                s = i("Ji7U"),
                a = i("md7G"),
                l = i("foSv"),
                h = i("rePB"),
                c = i("q1tI"),
                u = i.n(c),
                d = i("qnjL"),
                p = i.n(d),
                g = (i("Lf8g"), i("XrJB")),
                m = i.n(g),
                v = i("iKuz"),
                f = i.n(v),
                w = (i("hYal"), i("gn4A")),
                y = i.n(w),
                T = u.a.createElement,
                x = {
                    "./style.css": {
                        "modal-panel": "style__modal-panel___2YMWs",
                        "click-icon-wrapper": "style__click-icon-wrapper___10ZXR",
                        "style__fade-in___2hXJK": "style__style__fade-in___2hXJK___1HUCo",
                        "click-icon": "style__click-icon___tG4Os",
                        "click-modal-btn": "style__click-modal-btn___dHywU",
                        "click-modal-btn-icon": "style__click-modal-btn-icon___2QkzE",
                        "modal-container": "style__modal-container___1kPXS",
                        "modal-close": "style__modal-close___34PZU",
                        "modal-frame": "style__modal-frame___7fLXq",
                        "modal-content-box": "style__modal-content-box___qOWzU",
                        "modal-container-m": "style__modal-container-m___17Hf9"
                    }
                };

            function S(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = Object(l.a)(e);
                    if (t) {
                        var o = Object(l.a)(this).constructor;
                        i = Reflect.construct(n, arguments, o)
                    } else i = n.apply(this, arguments);
                    return Object(a.a)(this, i)
                }
            }
            var _ = function(e) {
                Object(s.a)(i, e);
                var t = S(i);

                function i(e) {
                    var o;
                    return Object(n.default)(this, i), (o = t.call(this, e)).state = {
                        modalShow: !1,
                        opened: !1
                    }, o.handleCloseButtonClick = o.handleCloseButtonClick.bind(Object(r.a)(o)), o.handleShowButtonClick = o.handleShowButtonClick.bind(Object(r.a)(o)), o.handleWrapperClick = o.handleWrapperClick.bind(Object(r.a)(o)), o
                }
                return Object(o.default)(i, [{
                    key: "handleShowButtonClick",
                    value: function(e) {
                        e.preventDefault();
                        var t = this.state.opened;
                        this.props.isStopPropagation && e.stopPropagation();
                        var i = this.modalDom;
                        if ("undefined" !== typeof document && document) {
                            var n = document.querySelector("body"),
                                o = document.querySelector("html");
                            if (t ? (this.bodyInitialScroll = window.scrollY || window.pageYOffset, this.setState({
                                    modalShow: !0
                                })) : (i.removeNode ? (i.removeNode(), i.appendChild(this.iframeDom), this.iframeDom.appendChild(this.closeDom), n && n.appendChild(i)) : (i.remove(), n && n.append(i)), this.bodyInitialScroll = window.scrollY || window.pageYOffset, this.setState({
                                    modalShow: !0,
                                    opened: !0
                                })), n) this.bodyInitialOverflow = n.style.overflow, o.style.overflow = "hidden", (0, this.props.gaSend)()
                        }
                    }
                }, {
                    key: "handleCloseButtonClick",
                    value: function(e) {
                        if (this.props.isStopPropagation && e && e.stopPropagation(), "undefined" !== typeof document && document) {
                            var t = document.querySelector("body"),
                                i = document.querySelector("html");
                            if (t) {
                                t.style.overflow = this.bodyInitialOverflow || "", t.style.height = "", i.style.overflow = "", window.scrollTo(0, this.bodyInitialScroll), this.setState({
                                    modalShow: !1
                                });
                                var n = this.props.onModalClose;
                                "function" === typeof n && n()
                            }
                        }
                    }
                }, {
                    key: "handleWrapperClick",
                    value: function(e) {
                        e.stopPropagation(), e.target && e.target.classList.contains("modal-container") && this.handleCloseButtonClick()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            i = t.containerClassname,
                            n = t.style,
                            o = (t.btnStyle, t.isMobile),
                            r = (t.t, t.clickDom),
                            s = this.state.modalShow,
                            a = y.a.isUC(),
                            l = {};
                        return l.display = s ? "block" : "none", T("div", {
                            className: "style__modal-panel___2YMWs",
                            style: n,
                            onClick: this.handleShowButtonClick
                        }, r || T("div", {
                            className: "style__click-icon-wrapper___10ZXR"
                        }, T("span", {
                            className: "style__click-icon___tG4Os"
                        })), T("div", {
                            style: l,
                            ref: function(t) {
                                e.modalDom = t
                            },
                            onClick: this.handleWrapperClick,
                            className: "modal-container".concat(i ? " ".concat(i) : "") + " " + f()(o ? "modal-container modal-container-m" : "modal-container", x, {
                                autoResolveMultipleImports: !0,
                                handleMissingStyleName: "warn"
                            })
                        }, T("div", {
                            ref: function(t) {
                                e.iframeDom = t
                            },
                            className: "style__modal-frame___7fLXq",
                            style: {}
                        }, T("div", {
                            ref: function(t) {
                                e.closeDom = t
                            },
                            className: "style__modal-close___34PZU",
                            style: {
                                top: a ? "48px" : ""
                            },
                            onClick: this.handleCloseButtonClick
                        }), this.props.children)))
                    }
                }]), i
            }(u.a.Component);
            Object(h.a)(_, "defaultProps", {
                t: function() {},
                isMobile: !1,
                gaSend: function() {},
                style: {},
                btnStyle: {},
                containerClassname: "",
                isStopPropagation: !1
            });
            var E = _,
                P = u.a.createElement;

            function R(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(i), !0).forEach((function(t) {
                        Object(h.a)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : R(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function C(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = Object(l.a)(e);
                    if (t) {
                        var o = Object(l.a)(this).constructor;
                        i = Reflect.construct(n, arguments, o)
                    } else i = n.apply(this, arguments);
                    return Object(a.a)(this, i)
                }
            }
            var O = function(e) {
                Object(s.a)(i, e);
                var t = C(i);

                function i(e) {
                    var o;
                    return Object(n.default)(this, i), (o = t.call(this, e)).state = {
                        viewer: {}
                    }, o.sendGaData = o.sendGaData.bind(Object(r.a)(o)), o
                }
                return Object(o.default)(i, [{
                    key: "onModalClose",
                    value: function() {
                        var e = this.state.viewer;
                        e.viewport && e.viewport.goHome()
                    }
                }, {
                    key: "sendGaData",
                    value: function() {
                        var e = this.props,
                            t = e.gaSend,
                            i = e.gaLabel;
                        t("click", "card-picture-zoom-click".concat(void 0 === i ? "" : i))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props.conf.zoomConf,
                            t = p()(b(b({
                                prefixUrl: "https://www1.djicdn.com/assets/uploads/p/cda0b531-aa7b-4201-9dd1-ca77c762eecb/zoom-icon/",
                                showNavigator: !1,
                                zoomInButton: "zoomIn",
                                zoomOutButton: "zoomOut",
                                previousButton: "previous",
                                nextButton: "next",
                                sequenceMode: !1,
                                initialPage: 0
                            }, e), {}, {
                                constrainDuringPan: y.a.isMobile()
                            }));
                        window.dragonViewer = t, this.setState({
                            viewer: t
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.conf,
                            i = e.clickDom,
                            n = e.style,
                            o = e.needDownload,
                            r = void 0 === o || o,
                            s = t.zoomConf,
                            a = t.rawImageSize,
                            l = t.rawImageLink,
                            h = t.downloadDesc,
                            c = {};
                        return y.a.isMobile() && (c.height = window.innerHeight), P(u.a.Fragment, null, P(E, {
                            gaSend: this.sendGaData,
                            clickDom: i,
                            style: n,
                            onModalClose: this.onModalClose.bind(this)
                        }, P("div", {
                            className: "style__zoom-image-wrapper___1NAWn"
                        }, P("div", {
                            id: s.id,
                            className: "style__zoom-image___3Ik1u",
                            style: c
                        })), r && P("div", {
                            className: "style__download-wrapper-box___1oBL6"
                        }, P("a", {
                            target: "_blank",
                            href: l,
                            className: "style__pop-up-action-btn-wrapper___cuUhx"
                        }, P(m.a, {
                            name: "download-black-main"
                        }), P("span", {
                            className: "style__text___1W9Sc"
                        }, h, a)))))
                    }
                }]), i
            }(u.a.Component);
            Object(h.a)(O, "defaultProps", {
                gaSend: function() {}
            });
            t.default = O
        },
        hYal: function(e, t, i) {
            e.exports = {
                "modal-panel": "style__modal-panel___2YMWs",
                "click-icon-wrapper": "style__click-icon-wrapper___10ZXR",
                "style__fade-in___2hXJK": "style__style__fade-in___2hXJK___1HUCo",
                "click-icon": "style__click-icon___tG4Os",
                "click-modal-btn": "style__click-modal-btn___dHywU",
                "click-modal-btn-icon": "style__click-modal-btn-icon___2QkzE",
                "modal-container": "style__modal-container___1kPXS",
                "modal-close": "style__modal-close___34PZU",
                "modal-frame": "style__modal-frame___7fLXq",
                "modal-content-box": "style__modal-content-box___qOWzU",
                "modal-container-m": "style__modal-container-m___17Hf9"
            }
        },
        qnjL: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, $;

            function OpenSeadragon(e) {
                return new OpenSeadragon.Viewer(e)
            }! function(e) {
                e.version = {
                    versionStr: "2.4.2",
                    major: parseInt("2", 10),
                    minor: parseInt("4", 10),
                    revision: parseInt("2", 10)
                };
                var t = {
                        "[object Boolean]": "boolean",
                        "[object Number]": "number",
                        "[object String]": "string",
                        "[object Function]": "function",
                        "[object Array]": "array",
                        "[object Date]": "date",
                        "[object RegExp]": "regexp",
                        "[object Object]": "object"
                    },
                    i = Object.prototype.toString,
                    n = Object.prototype.hasOwnProperty;
                e.isFunction = function(t) {
                    return "function" === e.type(t)
                }, e.isArray = Array.isArray || function(t) {
                    return "array" === e.type(t)
                }, e.isWindow = function(e) {
                    return e && "object" === typeof e && "setInterval" in e
                }, e.type = function(e) {
                    return null === e || void 0 === e ? String(e) : t[i.call(e)] || "object"
                }, e.isPlainObject = function(t) {
                    if (!t || "object" !== OpenSeadragon.type(t) || t.nodeType || e.isWindow(t)) return !1;
                    if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                    var i;
                    for (var o in t) i = o;
                    return void 0 === i || n.call(t, i)
                }, e.isEmptyObject = function(e) {
                    for (var t in e) return !1;
                    return !0
                }, e.freezeObject = function(t) {
                    return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(e) {
                        return e
                    }, e.freezeObject(t)
                }, e.supportsCanvas = function() {
                    var t = document.createElement("canvas");
                    return !(!e.isFunction(t.getContext) || !t.getContext("2d"))
                }(), e.isCanvasTainted = function(e) {
                    var t = !1;
                    try {
                        e.getContext("2d").getImageData(0, 0, 1, 1)
                    } catch (i) {
                        t = !0
                    }
                    return t
                }, e.pixelDensityRatio = function() {
                    if (e.supportsCanvas) {
                        var t = document.createElement("canvas").getContext("2d"),
                            i = window.devicePixelRatio || 1,
                            n = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                        return Math.max(i, 1) / n
                    }
                    return 1
                }()
            }(OpenSeadragon),
            function($) {
                $.extend = function() {
                    var e, t, i, n, o, r, s = arguments[0] || {},
                        a = arguments.length,
                        l = !1,
                        h = 1;
                    for ("boolean" === typeof s && (l = s, s = arguments[1] || {}, h = 2), "object" === typeof s || OpenSeadragon.isFunction(s) || (s = {}), a === h && (s = this, --h); h < a; h++)
                        if (null !== (e = arguments[h]) || void 0 !== e)
                            for (t in e) i = s[t], s !== (n = e[t]) && (l && n && (OpenSeadragon.isPlainObject(n) || (o = OpenSeadragon.isArray(n))) ? (o ? (o = !1, r = i && OpenSeadragon.isArray(i) ? i : []) : r = i && OpenSeadragon.isPlainObject(i) ? i : {}, s[t] = OpenSeadragon.extend(l, r, n)) : void 0 !== n && (s[t] = n));
                    return s
                };
                var isIOSDevice = function() {
                    if ("object" !== typeof navigator) return !1;
                    var e = navigator.userAgent;
                    return "string" === typeof e && (-1 !== e.indexOf("iPhone") || -1 !== e.indexOf("iPad") || -1 !== e.indexOf("iPod"))
                };
                $.extend($, {
                    DEFAULT_SETTINGS: {
                        xmlPath: null,
                        tileSources: null,
                        tileHost: null,
                        initialPage: 0,
                        crossOriginPolicy: !1,
                        ajaxWithCredentials: !1,
                        loadTilesWithAjax: !1,
                        ajaxHeaders: {},
                        panHorizontal: !0,
                        panVertical: !0,
                        constrainDuringPan: !1,
                        wrapHorizontal: !1,
                        wrapVertical: !1,
                        visibilityRatio: .5,
                        minPixelRatio: .5,
                        defaultZoomLevel: 0,
                        minZoomLevel: null,
                        maxZoomLevel: null,
                        homeFillsViewer: !1,
                        clickTimeThreshold: 300,
                        clickDistThreshold: 5,
                        dblClickTimeThreshold: 300,
                        dblClickDistThreshold: 20,
                        springStiffness: 6.5,
                        animationTime: 1.2,
                        gestureSettingsMouse: {
                            scrollToZoom: !0,
                            clickToZoom: !0,
                            dblClickToZoom: !1,
                            pinchToZoom: !1,
                            zoomToRefPoint: !0,
                            flickEnabled: !1,
                            flickMinSpeed: 120,
                            flickMomentum: .25,
                            pinchRotate: !1
                        },
                        gestureSettingsTouch: {
                            scrollToZoom: !1,
                            clickToZoom: !1,
                            dblClickToZoom: !0,
                            pinchToZoom: !0,
                            zoomToRefPoint: !0,
                            flickEnabled: !0,
                            flickMinSpeed: 120,
                            flickMomentum: .25,
                            pinchRotate: !1
                        },
                        gestureSettingsPen: {
                            scrollToZoom: !1,
                            clickToZoom: !0,
                            dblClickToZoom: !1,
                            pinchToZoom: !1,
                            zoomToRefPoint: !0,
                            flickEnabled: !1,
                            flickMinSpeed: 120,
                            flickMomentum: .25,
                            pinchRotate: !1
                        },
                        gestureSettingsUnknown: {
                            scrollToZoom: !1,
                            clickToZoom: !1,
                            dblClickToZoom: !0,
                            pinchToZoom: !0,
                            zoomToRefPoint: !0,
                            flickEnabled: !0,
                            flickMinSpeed: 120,
                            flickMomentum: .25,
                            pinchRotate: !1
                        },
                        zoomPerClick: 2,
                        zoomPerScroll: 1.2,
                        zoomPerSecond: 1,
                        blendTime: 0,
                        alwaysBlend: !1,
                        autoHideControls: !0,
                        immediateRender: !1,
                        minZoomImageRatio: .9,
                        maxZoomPixelRatio: 1.1,
                        smoothTileEdgesMinZoom: 1.1,
                        iOSDevice: isIOSDevice(),
                        pixelsPerWheelLine: 40,
                        pixelsPerArrowPress: 40,
                        autoResize: !0,
                        preserveImageSizeOnResize: !1,
                        minScrollDeltaTime: 50,
                        rotationIncrement: 90,
                        showSequenceControl: !0,
                        sequenceControlAnchor: null,
                        preserveViewport: !1,
                        preserveOverlays: !1,
                        navPrevNextWrap: !1,
                        showNavigationControl: !0,
                        navigationControlAnchor: null,
                        showZoomControl: !0,
                        showHomeControl: !0,
                        showFullPageControl: !0,
                        showRotationControl: !1,
                        showFlipControl: !1,
                        controlsFadeDelay: 2e3,
                        controlsFadeLength: 1500,
                        mouseNavEnabled: !0,
                        showNavigator: !1,
                        navigatorId: null,
                        navigatorPosition: null,
                        navigatorSizeRatio: .2,
                        navigatorMaintainSizeRatio: !1,
                        navigatorTop: null,
                        navigatorLeft: null,
                        navigatorHeight: null,
                        navigatorWidth: null,
                        navigatorAutoResize: !0,
                        navigatorAutoFade: !0,
                        navigatorRotate: !0,
                        navigatorBackground: "#000",
                        navigatorOpacity: .8,
                        navigatorBorderColor: "#555",
                        navigatorDisplayRegionColor: "#900",
                        degrees: 0,
                        flipped: !1,
                        opacity: 1,
                        preload: !1,
                        compositeOperation: null,
                        imageSmoothingEnabled: !0,
                        placeholderFillStyle: null,
                        showReferenceStrip: !1,
                        referenceStripScroll: "horizontal",
                        referenceStripElement: null,
                        referenceStripHeight: null,
                        referenceStripWidth: null,
                        referenceStripPosition: "BOTTOM_LEFT",
                        referenceStripSizeRatio: .2,
                        collectionRows: 3,
                        collectionColumns: 0,
                        collectionLayout: "horizontal",
                        collectionMode: !1,
                        collectionTileSize: 800,
                        collectionTileMargin: 80,
                        imageLoaderLimit: 0,
                        maxImageCacheCount: 200,
                        timeout: 3e4,
                        useCanvas: !0,
                        prefixUrl: "/images/",
                        navImages: {
                            zoomIn: {
                                REST: "zoomin_rest.png",
                                GROUP: "zoomin_grouphover.png",
                                HOVER: "zoomin_hover.png",
                                DOWN: "zoomin_pressed.png"
                            },
                            zoomOut: {
                                REST: "zoomout_rest.png",
                                GROUP: "zoomout_grouphover.png",
                                HOVER: "zoomout_hover.png",
                                DOWN: "zoomout_pressed.png"
                            },
                            home: {
                                REST: "home_rest.png",
                                GROUP: "home_grouphover.png",
                                HOVER: "home_hover.png",
                                DOWN: "home_pressed.png"
                            },
                            fullpage: {
                                REST: "fullpage_rest.png",
                                GROUP: "fullpage_grouphover.png",
                                HOVER: "fullpage_hover.png",
                                DOWN: "fullpage_pressed.png"
                            },
                            rotateleft: {
                                REST: "rotateleft_rest.png",
                                GROUP: "rotateleft_grouphover.png",
                                HOVER: "rotateleft_hover.png",
                                DOWN: "rotateleft_pressed.png"
                            },
                            rotateright: {
                                REST: "rotateright_rest.png",
                                GROUP: "rotateright_grouphover.png",
                                HOVER: "rotateright_hover.png",
                                DOWN: "rotateright_pressed.png"
                            },
                            flip: {
                                REST: "flip_rest.png",
                                GROUP: "flip_grouphover.png",
                                HOVER: "flip_hover.png",
                                DOWN: "flip_pressed.png"
                            },
                            previous: {
                                REST: "previous_rest.png",
                                GROUP: "previous_grouphover.png",
                                HOVER: "previous_hover.png",
                                DOWN: "previous_pressed.png"
                            },
                            next: {
                                REST: "next_rest.png",
                                GROUP: "next_grouphover.png",
                                HOVER: "next_hover.png",
                                DOWN: "next_pressed.png"
                            }
                        },
                        debugMode: !1,
                        debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"]
                    },
                    SIGNAL: "----seadragon----",
                    delegate: function(e, t) {
                        return function() {
                            var i = arguments;
                            return void 0 === i && (i = []), t.apply(e, i)
                        }
                    },
                    BROWSERS: {
                        UNKNOWN: 0,
                        IE: 1,
                        FIREFOX: 2,
                        SAFARI: 3,
                        CHROME: 4,
                        OPERA: 5
                    },
                    getElement: function(e) {
                        return "string" == typeof e && (e = document.getElementById(e)), e
                    },
                    getElementPosition: function(e) {
                        var t, i, n = new $.Point;
                        for (i = getOffsetParent(e = $.getElement(e), t = "fixed" == $.getElementStyle(e).position); i;) n.x += e.offsetLeft, n.y += e.offsetTop, t && (n = n.plus($.getPageScroll())), i = getOffsetParent(e = i, t = "fixed" == $.getElementStyle(e).position);
                        return n
                    },
                    getElementOffset: function(e) {
                        var t, i, n = (e = $.getElement(e)) && e.ownerDocument,
                            o = {
                                top: 0,
                                left: 0
                            };
                        return n ? (t = n.documentElement, "undefined" !== typeof e.getBoundingClientRect && (o = e.getBoundingClientRect()), i = n == n.window ? n : 9 === n.nodeType && (n.defaultView || n.parentWindow), new $.Point(o.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), o.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0))) : new $.Point
                    },
                    getElementSize: function(e) {
                        return e = $.getElement(e), new $.Point(e.clientWidth, e.clientHeight)
                    },
                    getElementStyle: document.documentElement.currentStyle ? function(e) {
                        return (e = $.getElement(e)).currentStyle
                    } : function(e) {
                        return e = $.getElement(e), window.getComputedStyle(e, "")
                    },
                    getCssPropertyWithVendorPrefix: function(e) {
                        var t = {};
                        return $.getCssPropertyWithVendorPrefix = function(e) {
                            if (void 0 !== t[e]) return t[e];
                            var i = document.createElement("div").style,
                                n = null;
                            if (void 0 !== i[e]) n = e;
                            else
                                for (var o = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], r = $.capitalizeFirstLetter(e), s = 0; s < o.length; s++) {
                                    var a = o[s] + r;
                                    if (void 0 !== i[a]) {
                                        n = a;
                                        break
                                    }
                                }
                            return t[e] = n, n
                        }, $.getCssPropertyWithVendorPrefix(e)
                    },
                    capitalizeFirstLetter: function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    positiveModulo: function(e, t) {
                        var i = e % t;
                        return i < 0 && (i += t), i
                    },
                    pointInElement: function(e, t) {
                        e = $.getElement(e);
                        var i = $.getElementOffset(e),
                            n = $.getElementSize(e);
                        return t.x >= i.x && t.x < i.x + n.x && t.y < i.y + n.y && t.y >= i.y
                    },
                    getEvent: function(e) {
                        return $.getEvent = e ? function(e) {
                            return e
                        } : function() {
                            return window.event
                        }, $.getEvent(e)
                    },
                    getMousePosition: function(e) {
                        if ("number" == typeof e.pageX) $.getMousePosition = function(e) {
                            var t = new $.Point;
                            return e = $.getEvent(e), t.x = e.pageX, t.y = e.pageY, t
                        };
                        else {
                            if ("number" != typeof e.clientX) throw new Error("Unknown event mouse position, no known technique.");
                            $.getMousePosition = function(e) {
                                var t = new $.Point;
                                return e = $.getEvent(e), t.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, t.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop, t
                            }
                        }
                        return $.getMousePosition(e)
                    },
                    getPageScroll: function() {
                        var e = document.documentElement || {},
                            t = document.body || {};
                        if ("number" == typeof window.pageXOffset) $.getPageScroll = function() {
                            return new $.Point(window.pageXOffset, window.pageYOffset)
                        };
                        else if (t.scrollLeft || t.scrollTop) $.getPageScroll = function() {
                            return new $.Point(document.body.scrollLeft, document.body.scrollTop)
                        };
                        else {
                            if (!e.scrollLeft && !e.scrollTop) return new $.Point(0, 0);
                            $.getPageScroll = function() {
                                return new $.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop)
                            }
                        }
                        return $.getPageScroll()
                    },
                    setPageScroll: function(e) {
                        if ("undefined" !== typeof window.scrollTo) $.setPageScroll = function(e) {
                            window.scrollTo(e.x, e.y)
                        };
                        else {
                            var t = $.getPageScroll();
                            if (t.x === e.x && t.y === e.y) return;
                            document.body.scrollLeft = e.x, document.body.scrollTop = e.y;
                            var i = $.getPageScroll();
                            if (i.x !== t.x && i.y !== t.y) return void($.setPageScroll = function(e) {
                                document.body.scrollLeft = e.x, document.body.scrollTop = e.y
                            });
                            if (document.documentElement.scrollLeft = e.x, document.documentElement.scrollTop = e.y, (i = $.getPageScroll()).x !== t.x && i.y !== t.y) return void($.setPageScroll = function(e) {
                                document.documentElement.scrollLeft = e.x, document.documentElement.scrollTop = e.y
                            });
                            $.setPageScroll = function(e) {}
                        }
                        return $.setPageScroll(e)
                    },
                    getWindowSize: function() {
                        var e = document.documentElement || {},
                            t = document.body || {};
                        if ("number" == typeof window.innerWidth) $.getWindowSize = function() {
                            return new $.Point(window.innerWidth, window.innerHeight)
                        };
                        else if (e.clientWidth || e.clientHeight) $.getWindowSize = function() {
                            return new $.Point(document.documentElement.clientWidth, document.documentElement.clientHeight)
                        };
                        else {
                            if (!t.clientWidth && !t.clientHeight) throw new Error("Unknown window size, no known technique.");
                            $.getWindowSize = function() {
                                return new $.Point(document.body.clientWidth, document.body.clientHeight)
                            }
                        }
                        return $.getWindowSize()
                    },
                    makeCenteredNode: function(e) {
                        e = $.getElement(e);
                        var t = [$.makeNeutralElement("div"), $.makeNeutralElement("div"), $.makeNeutralElement("div")];
                        return $.extend(t[0].style, {
                            display: "table",
                            height: "100%",
                            width: "100%"
                        }), $.extend(t[1].style, {
                            display: "table-row"
                        }), $.extend(t[2].style, {
                            display: "table-cell",
                            verticalAlign: "middle",
                            textAlign: "center"
                        }), t[0].appendChild(t[1]), t[1].appendChild(t[2]), t[2].appendChild(e), t[0]
                    },
                    makeNeutralElement: function(e) {
                        var t = document.createElement(e),
                            i = t.style;
                        return i.background = "transparent none", i.border = "none", i.margin = "0px", i.padding = "0px", i.position = "static", t
                    },
                    now: function() {
                        return Date.now ? $.now = Date.now : $.now = function() {
                            return (new Date).getTime()
                        }, $.now()
                    },
                    makeTransparentImage: function(e) {
                        return $.makeTransparentImage = function(e) {
                            var t = $.makeNeutralElement("img");
                            return t.src = e, t
                        }, $.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 7 && ($.makeTransparentImage = function(e) {
                            var t = $.makeNeutralElement("img"),
                                i = null;
                            return (i = $.makeNeutralElement("span")).style.display = "inline-block", t.onload = function() {
                                i.style.width = i.style.width || t.width + "px", i.style.height = i.style.height || t.height + "px", t.onload = null, t = null
                            }, t.src = e, i.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e + "', sizingMethod='scale')", i
                        }), $.makeTransparentImage(e)
                    },
                    setElementOpacity: function(e, t, i) {
                        var n;
                        e = $.getElement(e), i && !$.Browser.alpha && (t = Math.round(t)), $.Browser.opacity ? e.style.opacity = t < 1 ? t : "" : t < 1 ? (n = "alpha(opacity=" + Math.round(100 * t) + ")", e.style.filter = n) : e.style.filter = ""
                    },
                    setElementTouchActionNone: function(e) {
                        "undefined" !== typeof(e = $.getElement(e)).style.touchAction ? e.style.touchAction = "none" : "undefined" !== typeof e.style.msTouchAction && (e.style.msTouchAction = "none")
                    },
                    addClass: function(e, t) {
                        (e = $.getElement(e)).className ? -1 === (" " + e.className + " ").indexOf(" " + t + " ") && (e.className += " " + t) : e.className = t
                    },
                    indexOf: function(e, t, i) {
                        return Array.prototype.indexOf ? this.indexOf = function(e, t, i) {
                            return e.indexOf(t, i)
                        } : this.indexOf = function(e, t, i) {
                            var n, o, r = i || 0;
                            if (!e) throw new TypeError;
                            if (0 === (o = e.length) || r >= o) return -1;
                            for (r < 0 && (r = o - Math.abs(r)), n = r; n < o; n++)
                                if (e[n] === t) return n;
                            return -1
                        }, this.indexOf(e, t, i)
                    },
                    removeClass: function(e, t) {
                        var i, n, o = [];
                        for (i = (e = $.getElement(e)).className.split(/\s+/), n = 0; n < i.length; n++) i[n] && i[n] !== t && o.push(i[n]);
                        e.className = o.join(" ")
                    },
                    addEvent: function() {
                        if (window.addEventListener) return function(e, t, i, n) {
                            (e = $.getElement(e)).addEventListener(t, i, n)
                        };
                        if (window.attachEvent) return function(e, t, i, n) {
                            (e = $.getElement(e)).attachEvent("on" + t, i)
                        };
                        throw new Error("No known event model.")
                    }(),
                    removeEvent: function() {
                        if (window.removeEventListener) return function(e, t, i, n) {
                            (e = $.getElement(e)).removeEventListener(t, i, n)
                        };
                        if (window.detachEvent) return function(e, t, i, n) {
                            (e = $.getElement(e)).detachEvent("on" + t, i)
                        };
                        throw new Error("No known event model.")
                    }(),
                    cancelEvent: function(e) {
                        (e = $.getEvent(e)).preventDefault ? $.cancelEvent = function(e) {
                            e.preventDefault()
                        } : $.cancelEvent = function(e) {
                            (e = $.getEvent(e)).cancel = !0, e.returnValue = !1
                        }, $.cancelEvent(e)
                    },
                    stopEvent: function(e) {
                        (e = $.getEvent(e)).stopPropagation ? $.stopEvent = function(e) {
                            e.stopPropagation()
                        } : $.stopEvent = function(e) {
                            (e = $.getEvent(e)).cancelBubble = !0
                        }, $.stopEvent(e)
                    },
                    createCallback: function(e, t) {
                        var i, n = [];
                        for (i = 2; i < arguments.length; i++) n.push(arguments[i]);
                        return function() {
                            var i, o = n.concat([]);
                            for (i = 0; i < arguments.length; i++) o.push(arguments[i]);
                            return t.apply(e, o)
                        }
                    },
                    getUrlParameter: function(e) {
                        var t = URLPARAMS[e];
                        return t || null
                    },
                    getUrlProtocol: function(e) {
                        var t = e.match(/^([a-z]+:)\/\//i);
                        return null === t ? window.location.protocol : t[1].toLowerCase()
                    },
                    createAjaxRequest: function(e) {
                        var t;
                        try {
                            t = !!new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (i) {
                            t = !1
                        }
                        if (t) window.XMLHttpRequest ? $.createAjaxRequest = function(e) {
                            return e ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                        } : $.createAjaxRequest = function() {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        };
                        else {
                            if (!window.XMLHttpRequest) throw new Error("Browser doesn't support XMLHttpRequest.");
                            $.createAjaxRequest = function() {
                                return new XMLHttpRequest
                            }
                        }
                        return $.createAjaxRequest(e)
                    },
                    makeAjaxRequest: function(e, t, i) {
                        var n, o, r;
                        $.isPlainObject(e) && (t = e.success, i = e.error, n = e.withCredentials, o = e.headers, r = e.responseType || null, e = e.url);
                        var s = $.getUrlProtocol(e),
                            a = $.createAjaxRequest("file:" === s);
                        if (!$.isFunction(t)) throw new Error("makeAjaxRequest requires a success callback");
                        a.onreadystatechange = function() {
                            4 == a.readyState && (a.onreadystatechange = function() {}, a.status >= 200 && a.status < 300 || 0 === a.status && "http:" !== s && "https:" !== s ? t(a) : ($.console.log("AJAX request returned %d: %s", a.status, e), $.isFunction(i) && i(a)))
                        };
                        try {
                            if (a.open("GET", e, !0), r && (a.responseType = r), o)
                                for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && o[l] && a.setRequestHeader(l, o[l]);
                            n && (a.withCredentials = !0), a.send(null)
                        } catch (u) {
                            var h = u.message;
                            if ($.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 10 && "undefined" != typeof u.number && -2147024891 == u.number && (h += "\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"), $.console.log("%s while making AJAX request: %s", u.name, h), a.onreadystatechange = function() {}, window.XDomainRequest) {
                                var c = new window.XDomainRequest;
                                if (c) {
                                    c.onload = function(e) {
                                        $.isFunction(t) && t({
                                            responseText: c.responseText,
                                            status: 200,
                                            statusText: "OK"
                                        })
                                    }, c.onerror = function(e) {
                                        $.isFunction(i) && i({
                                            responseText: c.responseText,
                                            status: 444,
                                            statusText: "An error happened. Due to an XDomainRequest deficiency we can not extract any information about this error. Upgrade your browser."
                                        })
                                    };
                                    try {
                                        c.open("GET", e), c.send()
                                    } catch (d) {
                                        $.isFunction(i) && i(a, u)
                                    }
                                }
                            } else $.isFunction(i) && i(a, u)
                        }
                        return a
                    },
                    jsonp: function(e) {
                        var t, i = e.url,
                            n = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                            o = e.callbackName || "openseadragon" + $.now(),
                            r = window[o],
                            s = "$1" + o + "$2",
                            a = e.param || "callback",
                            l = e.callback;
                        i = i.replace(/(\=)\?(&|$)|\?\?/i, s), i += (/\?/.test(i) ? "&" : "?") + a + "=" + o, window[o] = function(e) {
                            if (r) window[o] = r;
                            else try {
                                delete window[o]
                            } catch (t) {}
                            l && $.isFunction(l) && l(e)
                        }, t = document.createElement("script"), void 0 === e.async && !1 === e.async || (t.async = "async"), e.scriptCharset && (t.charset = e.scriptCharset), t.src = i, t.onload = t.onreadystatechange = function(e, i) {
                            (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, n && t.parentNode && n.removeChild(t), t = void 0)
                        }, n.insertBefore(t, n.firstChild)
                    },
                    createFromDZI: function() {
                        throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open."
                    },
                    parseXml: function(e) {
                        if (window.DOMParser) $.parseXml = function(e) {
                            return (new DOMParser).parseFromString(e, "text/xml")
                        };
                        else {
                            if (!window.ActiveXObject) throw new Error("Browser doesn't support XML DOM.");
                            $.parseXml = function(e) {
                                var t = null;
                                return (t = new ActiveXObject("Microsoft.XMLDOM")).async = !1, t.loadXML(e), t
                            }
                        }
                        return $.parseXml(e)
                    },
                    parseJSON: function(string) {
                        return window.JSON && window.JSON.parse ? $.parseJSON = window.JSON.parse : $.parseJSON = function(string) {
                            return eval("(" + string + ")")
                        }, $.parseJSON(string)
                    },
                    imageFormatSupported: function(e) {
                        return !!FILEFORMATS[(e = e || "").toLowerCase()]
                    }
                });
                var nullfunction = function(e) {};
                $.console = window.console || {
                    log: nullfunction,
                    debug: nullfunction,
                    info: nullfunction,
                    warn: nullfunction,
                    error: nullfunction,
                    assert: nullfunction
                }, $.Browser = {
                    vendor: $.BROWSERS.UNKNOWN,
                    version: 0,
                    alpha: !0
                };
                var FILEFORMATS = {
                        bmp: !1,
                        jpeg: !0,
                        jpg: !0,
                        png: !0,
                        tif: !1,
                        wdp: !1
                    },
                    URLPARAMS = {};

                function getOffsetParent(e, t) {
                    return t && e != document.body ? document.body : e.offsetParent
                }! function() {
                    var e = navigator.appVersion,
                        t = navigator.userAgent;
                    switch (navigator.appName) {
                        case "Microsoft Internet Explorer":
                            window.attachEvent && window.ActiveXObject && ($.Browser.vendor = $.BROWSERS.IE, $.Browser.version = parseFloat(t.substring(t.indexOf("MSIE") + 5, t.indexOf(";", t.indexOf("MSIE")))));
                            break;
                        case "Netscape":
                            window.addEventListener && (t.indexOf("Firefox") >= 0 ? ($.Browser.vendor = $.BROWSERS.FIREFOX, $.Browser.version = parseFloat(t.substring(t.indexOf("Firefox") + 8))) : t.indexOf("Safari") >= 0 ? ($.Browser.vendor = t.indexOf("Chrome") >= 0 ? $.BROWSERS.CHROME : $.BROWSERS.SAFARI, $.Browser.version = parseFloat(t.substring(t.substring(0, t.indexOf("Safari")).lastIndexOf("/") + 1, t.indexOf("Safari")))) : null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(t) && ($.Browser.vendor = $.BROWSERS.IE, $.Browser.version = parseFloat(RegExp.$1)));
                            break;
                        case "Opera":
                            $.Browser.vendor = $.BROWSERS.OPERA, $.Browser.version = parseFloat(e)
                    }
                    var i, n, o, r = window.location.search.substring(1).split("&");
                    for (o = 0; o < r.length; o++)
                        if ((n = (i = r[o]).indexOf("=")) > 0) {
                            var s = i.substring(0, n),
                                a = i.substring(n + 1);
                            try {
                                URLPARAMS[s] = decodeURIComponent(a)
                            } catch (l) {
                                $.console.error("Ignoring malformed URL parameter: %s=%s", s, a)
                            }
                        }
                    $.Browser.alpha = !($.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 9 || $.Browser.vendor == $.BROWSERS.CHROME && $.Browser.version < 2), $.Browser.opacity = !($.Browser.vendor == $.BROWSERS.IE && $.Browser.version < 9)
                }(),
                function(e) {
                    var t = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame,
                        i = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || e.msCancelAnimationFrame;
                    if (t && i) $.requestAnimationFrame = function() {
                        return t.apply(e, arguments)
                    }, $.cancelAnimationFrame = function() {
                        return i.apply(e, arguments)
                    };
                    else {
                        var n, o = [],
                            r = [],
                            s = 0;
                        $.requestAnimationFrame = function(e) {
                            return o.push([++s, e]), n || (n = setInterval((function() {
                                if (o.length) {
                                    var e = $.now(),
                                        t = r;
                                    for (r = o, o = t; r.length;) r.shift()[1](e)
                                } else clearInterval(n), n = void 0
                            }), 20)), s
                        }, $.cancelAnimationFrame = function(e) {
                            var t, i;
                            for (t = 0, i = o.length; t < i; t += 1)
                                if (o[t][0] === e) return void o.splice(t, 1);
                            for (t = 0, i = r.length; t < i; t += 1)
                                if (r[t][0] === e) return void r.splice(t, 1)
                        }
                    }
                }(window)
            }(OpenSeadragon), __WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
                    return OpenSeadragon
                }) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__),
                function(e) {
                    var t = {
                        supportsFullScreen: !1,
                        isFullScreen: function() {
                            return !1
                        },
                        getFullScreenElement: function() {
                            return null
                        },
                        requestFullScreen: function() {},
                        exitFullScreen: function() {},
                        cancelFullScreen: function() {},
                        fullScreenEventName: "",
                        fullScreenErrorEventName: ""
                    };
                    document.exitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
                        return document.fullscreenElement
                    }, t.requestFullScreen = function(e) {
                        return e.requestFullscreen()
                    }, t.exitFullScreen = function() {
                        document.exitFullscreen()
                    }, t.fullScreenEventName = "fullscreenchange", t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
                        return document.msFullscreenElement
                    }, t.requestFullScreen = function(e) {
                        return e.msRequestFullscreen()
                    }, t.exitFullScreen = function() {
                        document.msExitFullscreen()
                    }, t.fullScreenEventName = "MSFullscreenChange", t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
                        return document.webkitFullscreenElement
                    }, t.requestFullScreen = function(e) {
                        return e.webkitRequestFullscreen()
                    }, t.exitFullScreen = function() {
                        document.webkitExitFullscreen()
                    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
                        return document.webkitCurrentFullScreenElement
                    }, t.requestFullScreen = function(e) {
                        return e.webkitRequestFullScreen()
                    }, t.exitFullScreen = function() {
                        document.webkitCancelFullScreen()
                    }, t.fullScreenEventName = "webkitfullscreenchange", t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0, t.getFullScreenElement = function() {
                        return document.mozFullScreenElement
                    }, t.requestFullScreen = function(e) {
                        return e.mozRequestFullScreen()
                    }, t.exitFullScreen = function() {
                        document.mozCancelFullScreen()
                    }, t.fullScreenEventName = "mozfullscreenchange", t.fullScreenErrorEventName = "mozfullscreenerror"), t.isFullScreen = function() {
                        return null !== t.getFullScreenElement()
                    }, t.cancelFullScreen = function() {
                        e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), t.exitFullScreen()
                    }, e.extend(e, t)
                }(OpenSeadragon), $ = OpenSeadragon, $.EventSource = function() {
                    this.events = {}
                }, $.EventSource.prototype = {
                    addOnceHandler: function(e, t, i, n) {
                        var o = this;
                        n = n || 1;
                        var r = 0,
                            s = function(i) {
                                ++r === n && o.removeHandler(e, s), t(i)
                            };
                        this.addHandler(e, s, i)
                    },
                    addHandler: function(e, t, i) {
                        var n = this.events[e];
                        n || (this.events[e] = n = []), t && $.isFunction(t) && (n[n.length] = {
                            handler: t,
                            userData: i || null
                        })
                    },
                    removeHandler: function(e, t) {
                        var i, n = this.events[e],
                            o = [];
                        if (n && $.isArray(n)) {
                            for (i = 0; i < n.length; i++) n[i].handler !== t && o.push(n[i]);
                            this.events[e] = o
                        }
                    },
                    removeAllHandlers: function(e) {
                        if (e) this.events[e] = [];
                        else
                            for (var t in this.events) this.events[t] = []
                    },
                    getHandler: function(e) {
                        var t = this.events[e];
                        return t && t.length ? (t = 1 === t.length ? [t[0]] : Array.apply(null, t), function(e, i) {
                            var n, o = t.length;
                            for (n = 0; n < o; n++) t[n] && (i.eventSource = e, i.userData = t[n].userData, t[n].handler(i))
                        }) : null
                    },
                    raiseEvent: function(e, t) {
                        var i = this.getHandler(e);
                        i && (t || (t = {}), i(this, t))
                    }
                },
                function(e) {
                    var t = [],
                        i = {};

                    function n(t) {
                        var n, o = i[t.hash],
                            r = o.activePointersLists.length;
                        for (n = 0; n < r; n++) o.activePointersLists[n].captureCount > 0 && (e.removeEvent(e.MouseTracker.captureElement, "mousemove", o.mousemovecaptured, !0), e.removeEvent(e.MouseTracker.captureElement, "mouseup", o.mouseupcaptured, !0), e.removeEvent(e.MouseTracker.captureElement, e.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove", o.pointermovecaptured, !0), e.removeEvent(e.MouseTracker.captureElement, e.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp", o.pointerupcaptured, !0), e.removeEvent(e.MouseTracker.captureElement, "touchmove", o.touchmovecaptured, !0), e.removeEvent(e.MouseTracker.captureElement, "touchend", o.touchendcaptured, !0), o.activePointersLists[n].captureCount = 0);
                        for (n = 0; n < r; n++) o.activePointersLists.pop()
                    }

                    function o(t) {
                        var o, r, s = i[t.hash];
                        if (s.tracking) {
                            for (r = 0; r < e.MouseTracker.subscribeEvents.length; r++) o = e.MouseTracker.subscribeEvents[r], e.removeEvent(t.element, o, s[o], !1);
                            n(t), s.tracking = !1
                        }
                    }

                    function r(t, n) {
                        var o = i[t.hash];
                        if ("pointerevent" === n) return {
                            upName: e.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp",
                            upHandler: o.pointerupcaptured,
                            moveName: e.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove",
                            moveHandler: o.pointermovecaptured
                        };
                        if ("mouse" === n) return {
                            upName: "mouseup",
                            upHandler: o.mouseupcaptured,
                            moveName: "mousemove",
                            moveHandler: o.mousemovecaptured
                        };
                        if ("touch" === n) return {
                            upName: "touchend",
                            upHandler: o.touchendcaptured,
                            moveName: "touchmove",
                            moveHandler: o.touchmovecaptured
                        };
                        throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")
                    }

                    function s(t, i, n) {
                        var o, s = t.getActivePointersListByType(i);
                        s.captureCount += n || 1, 1 === s.captureCount && (e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? t.element.setCapture(!0) : (o = r(t, e.MouseTracker.havePointerEvents ? "pointerevent" : i), de && pe(window.top) && e.addEvent(window.top, o.upName, o.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, o.upName, o.upHandler, !0), e.addEvent(e.MouseTracker.captureElement, o.moveName, o.moveHandler, !0)))
                    }

                    function a(t, i, n) {
                        var o, s = t.getActivePointersListByType(i);
                        s.captureCount -= n || 1, 0 === s.captureCount && (e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? t.element.releaseCapture() : (o = r(t, e.MouseTracker.havePointerEvents ? "pointerevent" : i), de && pe(window.top) && e.removeEvent(window.top, o.upName, o.upHandler, !0), e.removeEvent(e.MouseTracker.captureElement, o.moveName, o.moveHandler, !0), e.removeEvent(e.MouseTracker.captureElement, o.upName, o.upHandler, !0)))
                    }

                    function l(t) {
                        var i;
                        if (e.MouseTracker.unprefixedPointerEvents) i = t.pointerType;
                        else switch (t.pointerType) {
                            case 2:
                                i = "touch";
                                break;
                            case 3:
                                i = "pen";
                                break;
                            case 4:
                                i = "mouse";
                                break;
                            default:
                                i = ""
                        }
                        return i
                    }

                    function h(t) {
                        return e.getMousePosition(t)
                    }

                    function c(e, t) {
                        return u(h(e), t)
                    }

                    function u(t, i) {
                        var n = e.getElementOffset(i);
                        return t.minus(n)
                    }

                    function d(t, i) {
                        return new e.Point((t.x + i.x) / 2, (t.y + i.y) / 2)
                    }

                    function p(t, i) {
                        t.clickHandler && e.cancelEvent(i)
                    }

                    function g(t, i) {
                        t.dblClickHandler && e.cancelEvent(i)
                    }

                    function m(t, i) {
                        t.keyDownHandler && (i = e.getEvent(i), t.keyDownHandler({
                            eventSource: t,
                            keyCode: i.keyCode ? i.keyCode : i.charCode,
                            ctrl: i.ctrlKey,
                            shift: i.shiftKey,
                            alt: i.altKey,
                            meta: i.metaKey,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) || e.cancelEvent(i))
                    }

                    function v(t, i) {
                        t.keyUpHandler && (i = e.getEvent(i), t.keyUpHandler({
                            eventSource: t,
                            keyCode: i.keyCode ? i.keyCode : i.charCode,
                            ctrl: i.ctrlKey,
                            shift: i.shiftKey,
                            alt: i.altKey,
                            meta: i.metaKey,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) || e.cancelEvent(i))
                    }

                    function f(t, i) {
                        t.keyHandler && (i = e.getEvent(i), t.keyHandler({
                            eventSource: t,
                            keyCode: i.keyCode ? i.keyCode : i.charCode,
                            ctrl: i.ctrlKey,
                            shift: i.shiftKey,
                            alt: i.altKey,
                            meta: i.metaKey,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) || e.cancelEvent(i))
                    }

                    function w(t, i) {
                        t.focusHandler && (i = e.getEvent(i), !1 === t.focusHandler({
                            eventSource: t,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(i))
                    }

                    function y(t, i) {
                        t.blurHandler && (i = e.getEvent(i), !1 === t.blurHandler({
                            eventSource: t,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(i))
                    }

                    function T(e, t) {
                        S(e, t, t)
                    }

                    function x(t, i) {
                        var n = {
                            target: (i = e.getEvent(i)).target || i.srcElement,
                            type: "wheel",
                            shiftKey: i.shiftKey || !1,
                            clientX: i.clientX,
                            clientY: i.clientY,
                            pageX: i.pageX ? i.pageX : i.clientX,
                            pageY: i.pageY ? i.pageY : i.clientY,
                            deltaMode: "MozMousePixelScroll" == i.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0
                        };
                        "mousewheel" == e.MouseTracker.wheelEventName ? n.deltaY = -i.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : n.deltaY = i.detail, S(t, n, i)
                    }

                    function S(t, i, n) {
                        var o;
                        o = i.deltaY < 0 ? 1 : -1, t.scrollHandler && !1 === t.scrollHandler({
                            eventSource: t,
                            pointerType: "mouse",
                            position: c(i, t.element),
                            scroll: o,
                            shift: i.shiftKey,
                            isTouchEvent: !1,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n)
                    }

                    function _(e, t) {
                        if (e === t) return !1;
                        for (; t && t !== e;) t = t.parentNode;
                        return t === e
                    }

                    function E(t, i) {
                        R(t, i = e.getEvent(i))
                    }

                    function P(t, i) {
                        (i = e.getEvent(i)).currentTarget === i.relatedTarget || _(i.currentTarget, i.relatedTarget) || R(t, i)
                    }

                    function R(t, i) {
                        ae(t, i, [{
                            id: e.MouseTracker.mousePointerId,
                            type: "mouse",
                            isPrimary: !0,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function b(t, i) {
                        O(t, i = e.getEvent(i))
                    }

                    function C(t, i) {
                        (i = e.getEvent(i)).currentTarget === i.relatedTarget || _(i.currentTarget, i.relatedTarget) || O(t, i)
                    }

                    function O(t, i) {
                        le(t, i, [{
                            id: e.MouseTracker.mousePointerId,
                            type: "mouse",
                            isPrimary: !0,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function k(t) {
                        return e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? 1 === t ? 0 : 2 === t ? 2 : 4 === t ? 1 : -1 : t
                    }

                    function I(t, i) {
                        he(t, i = e.getEvent(i), [{
                            id: e.MouseTracker.mousePointerId,
                            type: "mouse",
                            isPrimary: !0,
                            currentPos: h(i),
                            currentTime: e.now()
                        }], k(i.button)) && (e.stopEvent(i), s(t, "mouse")), (t.clickHandler || t.dblClickHandler || t.pressHandler || t.dragHandler || t.dragEndHandler) && e.cancelEvent(i)
                    }

                    function D(e, t) {
                        M(e, t)
                    }

                    function B(t, i) {
                        M(t, i), e.stopEvent(i)
                    }

                    function M(t, i) {
                        ce(t, i = e.getEvent(i), [{
                            id: e.MouseTracker.mousePointerId,
                            type: "mouse",
                            isPrimary: !0,
                            currentPos: h(i),
                            currentTime: e.now()
                        }], k(i.button)) && a(t, "mouse")
                    }

                    function z(e, t) {
                        F(e, t)
                    }

                    function H(t, i) {
                        F(t, i), e.stopEvent(i)
                    }

                    function F(t, i) {
                        ue(t, i = e.getEvent(i), [{
                            id: e.MouseTracker.mousePointerId,
                            type: "mouse",
                            isPrimary: !0,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function L(e, t, i) {
                        var n, o = i.getLength(),
                            r = [];
                        if ("touch" === i.type || i.contacts > 0) {
                            for (n = 0; n < o; n++) r.push(i.getByIndex(n));
                            r.length > 0 && (ce(e, t, r, 0), i.captureCount = 1, a(e, i.type), le(e, t, r))
                        }
                    }

                    function A(i, n) {
                        var o, r, a, l, c = n.changedTouches.length,
                            u = [],
                            d = i.getActivePointersListByType("touch");
                        for (o = e.now(), d.getLength() > n.touches.length - c && (e.console.warn("Tracked touch contact count doesn't match event.touches.length. Removing all tracked touch pointers."), L(i, n, d)), r = 0; r < c; r++) u.push({
                            id: n.changedTouches[r].identifier,
                            type: "touch",
                            currentPos: h(n.changedTouches[r]),
                            currentTime: o
                        });
                        for (ae(i, n, u), r = 0; r < t.length; r++)
                            if (t[r] !== i && t[r].isTracking() && _(t[r].element, i.element)) {
                                for (l = [], a = 0; a < c; a++) l.push({
                                    id: n.changedTouches[a].identifier,
                                    type: "touch",
                                    currentPos: h(n.changedTouches[a]),
                                    currentTime: o
                                });
                                ae(t[r], n, l)
                            }
                        he(i, n, u, 0) && (e.stopEvent(n), s(i, "touch", c)), e.cancelEvent(n)
                    }

                    function N(e, t) {
                        j(e, t)
                    }

                    function W(t, i) {
                        j(t, i), e.stopEvent(i)
                    }

                    function j(i, n) {
                        var o, r, s, l, c = n.changedTouches.length,
                            u = [];
                        for (o = e.now(), r = 0; r < c; r++) u.push({
                            id: n.changedTouches[r].identifier,
                            type: "touch",
                            currentPos: h(n.changedTouches[r]),
                            currentTime: o
                        });
                        for (ce(i, n, u, 0) && a(i, "touch", c), le(i, n, u), r = 0; r < t.length; r++)
                            if (t[r] !== i && t[r].isTracking() && _(t[r].element, i.element)) {
                                for (l = [], s = 0; s < c; s++) l.push({
                                    id: n.changedTouches[s].identifier,
                                    type: "touch",
                                    currentPos: h(n.changedTouches[s]),
                                    currentTime: o
                                });
                                le(t[r], n, l)
                            }
                        e.cancelEvent(n)
                    }

                    function U(e, t) {
                        G(e, t)
                    }

                    function V(t, i) {
                        G(t, i), e.stopEvent(i)
                    }

                    function G(t, i) {
                        var n, o = i.changedTouches.length,
                            r = [];
                        for (n = 0; n < o; n++) r.push({
                            id: i.changedTouches[n].identifier,
                            type: "touch",
                            currentPos: h(i.changedTouches[n]),
                            currentTime: e.now()
                        });
                        ue(t, i, r), e.cancelEvent(i)
                    }

                    function q(e, t) {
                        var i = e.getActivePointersListByType("touch");
                        L(e, t, i)
                    }

                    function $(e, t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }

                    function Z(e, t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }

                    function X(t, i) {
                        i.currentTarget === i.relatedTarget || _(i.currentTarget, i.relatedTarget) || ae(t, i, [{
                            id: i.pointerId,
                            type: l(i),
                            isPrimary: i.isPrimary,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function K(t, i) {
                        i.currentTarget === i.relatedTarget || _(i.currentTarget, i.relatedTarget) || le(t, i, [{
                            id: i.pointerId,
                            type: l(i),
                            isPrimary: i.isPrimary,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function Y(t, i) {
                        var n;
                        he(t, i, [n = {
                            id: i.pointerId,
                            type: l(i),
                            isPrimary: i.isPrimary,
                            currentPos: h(i),
                            currentTime: e.now()
                        }], i.button) && (e.stopEvent(i), s(t, n.type)), (t.clickHandler || t.dblClickHandler || t.pressHandler || t.dragHandler || t.dragEndHandler || t.pinchHandler) && e.cancelEvent(i)
                    }

                    function J(e, t) {
                        ee(e, t)
                    }

                    function Q(t, i) {
                        t.getActivePointersListByType(l(i)).getById(i.pointerId) && ee(t, i), e.stopEvent(i)
                    }

                    function ee(t, i) {
                        var n;
                        ce(t, i, [n = {
                            id: i.pointerId,
                            type: l(i),
                            isPrimary: i.isPrimary,
                            currentPos: h(i),
                            currentTime: e.now()
                        }], i.button) && a(t, n.type)
                    }

                    function te(e, t) {
                        ne(e, t)
                    }

                    function ie(t, i) {
                        t.getActivePointersListByType(l(i)).getById(i.pointerId) && ne(t, i), e.stopEvent(i)
                    }

                    function ne(t, i) {
                        ue(t, i, [{
                            id: i.pointerId,
                            type: l(i),
                            isPrimary: i.isPrimary,
                            currentPos: h(i),
                            currentTime: e.now()
                        }])
                    }

                    function oe(e, t) {
                        ! function(e, t, i) {
                            ce(e, t, i, 0), le(e, t, i)
                        }(e, t, [{
                            id: t.pointerId,
                            type: l(t)
                        }])
                    }

                    function re(e, t) {
                        return Object.prototype.hasOwnProperty.call(t, "isPrimary") || (0 === e.getLength() ? t.isPrimary = !0 : t.isPrimary = !1), t.speed = 0, t.direction = 0, t.contactPos = t.currentPos, t.contactTime = t.currentTime, t.lastPos = t.currentPos, t.lastTime = t.currentTime, e.add(t)
                    }

                    function se(e, t) {
                        var i, n;
                        return e.getById(t.id) ? (i = e.removeById(t.id), Object.prototype.hasOwnProperty.call(t, "isPrimary") || (n = e.getPrimary()) || (n = e.getByIndex(0)) && (n.isPrimary = !0)) : i = e.getLength(), i
                    }

                    function ae(t, i, n) {
                        var o, r, s, a = t.getActivePointersListByType(n[0].type),
                            l = n.length;
                        for (o = 0; o < l; o++) r = n[o], (s = a.getById(r.id)) ? (s.insideElement = !0, s.lastPos = s.currentPos, s.lastTime = s.currentTime, s.currentPos = r.currentPos, s.currentTime = r.currentTime, r = s) : (r.captured = !1, r.insideElementPressed = !1, r.insideElement = !0, re(a, r)), t.enterHandler && !1 === t.enterHandler({
                            eventSource: t,
                            pointerType: r.type,
                            position: u(r.currentPos, t.element),
                            buttons: a.buttons,
                            pointers: t.getActivePointerCount(),
                            insideElementPressed: r.insideElementPressed,
                            buttonDownAny: 0 !== a.buttons,
                            isTouchEvent: "touch" === r.type,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(i)
                    }

                    function le(t, i, n) {
                        var o, r, s, a = t.getActivePointersListByType(n[0].type),
                            l = n.length;
                        for (o = 0; o < l; o++) r = n[o], (s = a.getById(r.id)) && (s.captured ? (s.insideElement = !1, s.lastPos = s.currentPos, s.lastTime = s.currentTime, s.currentPos = r.currentPos, s.currentTime = r.currentTime) : se(a, s), r = s), t.exitHandler && !1 === t.exitHandler({
                            eventSource: t,
                            pointerType: r.type,
                            position: r.currentPos && u(r.currentPos, t.element),
                            buttons: a.buttons,
                            pointers: t.getActivePointerCount(),
                            insideElementPressed: !!s && s.insideElementPressed,
                            buttonDownAny: 0 !== a.buttons,
                            isTouchEvent: "touch" === r.type,
                            originalEvent: i,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(i)
                    }

                    function he(t, n, o, r) {
                        var s, a, l, h = i[t.hash],
                            c = t.getActivePointersListByType(o[0].type),
                            p = o.length;
                        "undefined" !== typeof n.buttons ? c.buttons = n.buttons : e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? 0 === r ? c.buttons += 1 : 1 === r ? c.buttons += 4 : 2 === r ? c.buttons += 2 : 3 === r ? c.buttons += 8 : 4 === r ? c.buttons += 16 : 5 === r && (c.buttons += 32) : 0 === r ? c.buttons |= 1 : 1 === r ? c.buttons |= 4 : 2 === r ? c.buttons |= 2 : 3 === r ? c.buttons |= 8 : 4 === r ? c.buttons |= 16 : 5 === r && (c.buttons |= 32);
                        var g = t.getActivePointersListsExceptType(o[0].type);
                        for (s = 0; s < g.length; s++) L(t, n, g[s]);
                        if (0 !== r) return t.nonPrimaryPressHandler && !1 === t.nonPrimaryPressHandler({
                            eventSource: t,
                            pointerType: o[0].type,
                            position: u(o[0].currentPos, t.element),
                            button: r,
                            buttons: c.buttons,
                            isTouchEvent: "touch" === o[0].type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n), !1;
                        for (s = 0; s < p; s++) a = o[s], (l = c.getById(a.id)) ? (l.captured = !0, l.insideElementPressed = !0, l.insideElement = !0, l.contactPos = a.currentPos, l.contactTime = a.currentTime, l.lastPos = l.currentPos, l.lastTime = l.currentTime, l.currentPos = a.currentPos, l.currentTime = a.currentTime, a = l) : (a.captured = !0, a.insideElementPressed = !0, a.insideElement = !0, re(c, a)), c.addContact(), (t.dragHandler || t.dragEndHandler || t.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(t, a), 1 === c.contacts ? t.pressHandler && !1 === t.pressHandler({
                            eventSource: t,
                            pointerType: a.type,
                            position: u(a.contactPos, t.element),
                            buttons: c.buttons,
                            isTouchEvent: "touch" === a.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n) : 2 === c.contacts && t.pinchHandler && "touch" === a.type && (h.pinchGPoints = c.asArray(), h.lastPinchDist = h.currentPinchDist = h.pinchGPoints[0].currentPos.distanceTo(h.pinchGPoints[1].currentPos), h.lastPinchCenter = h.currentPinchCenter = d(h.pinchGPoints[0].currentPos, h.pinchGPoints[1].currentPos));
                        return !0
                    }

                    function ce(t, n, o, r) {
                        var s, a, l, h, c, p, g = i[t.hash],
                            m = t.getActivePointersListByType(o[0].type),
                            v = o.length,
                            f = !1,
                            w = !1;
                        if ("undefined" !== typeof n.buttons ? m.buttons = n.buttons : e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? 0 === r ? m.buttons -= 1 : 1 === r ? m.buttons -= 4 : 2 === r ? m.buttons -= 2 : 3 === r ? m.buttons -= 8 : 4 === r ? m.buttons -= 16 : 5 === r && (m.buttons -= 32) : 0 === r ? m.buttons ^= -2 : 1 === r ? m.buttons ^= -5 : 2 === r ? m.buttons ^= -3 : 3 === r ? m.buttons ^= -9 : 4 === r ? m.buttons ^= -17 : 5 === r && (m.buttons ^= -33), 0 !== r) {
                            t.nonPrimaryReleaseHandler && !1 === t.nonPrimaryReleaseHandler({
                                eventSource: t,
                                pointerType: o[0].type,
                                position: u(o[0].currentPos, t.element),
                                button: r,
                                buttons: m.buttons,
                                isTouchEvent: "touch" === o[0].type,
                                originalEvent: n,
                                preventDefaultAction: !1,
                                userData: t.userData
                            }) && e.cancelEvent(n);
                            var y = t.getActivePointersListByType("mouse");
                            return L(t, n, y), !1
                        }
                        if ("undefined" === typeof o[0].currentPos) return L(t, n, m), !1;
                        for (l = 0; l < v; l++) h = o[l], (c = m.getById(h.id)) && (c.captured && (c.captured = !1, f = !0, w = !0), c.lastPos = c.currentPos, c.lastTime = c.currentTime, c.currentPos = h.currentPos, c.currentTime = h.currentTime, c.insideElement || se(m, c), s = c.currentPos, a = c.currentTime, w ? (m.removeContact(), (t.dragHandler || t.dragEndHandler || t.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(t, c), 0 === m.contacts ? (t.releaseHandler && !1 === t.releaseHandler({
                            eventSource: t,
                            pointerType: c.type,
                            position: u(s, t.element),
                            buttons: m.buttons,
                            insideElementPressed: c.insideElementPressed,
                            insideElementReleased: c.insideElement,
                            isTouchEvent: "touch" === c.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n), t.dragEndHandler && !c.currentPos.equals(c.contactPos) && !1 === t.dragEndHandler({
                            eventSource: t,
                            pointerType: c.type,
                            position: u(c.currentPos, t.element),
                            speed: c.speed,
                            direction: c.direction,
                            shift: n.shiftKey,
                            isTouchEvent: "touch" === c.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n), (t.clickHandler || t.dblClickHandler) && c.insideElement && (p = a - c.contactTime <= t.clickTimeThreshold && c.contactPos.distanceTo(s) <= t.clickDistThreshold, t.clickHandler && !1 === t.clickHandler({
                            eventSource: t,
                            pointerType: c.type,
                            position: u(c.currentPos, t.element),
                            quick: p,
                            shift: n.shiftKey,
                            isTouchEvent: "touch" === c.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n), t.dblClickHandler && p && (m.clicks++, 1 === m.clicks ? (g.lastClickPos = s, g.dblClickTimeOut = setTimeout((function() {
                            m.clicks = 0
                        }), t.dblClickTimeThreshold)) : 2 === m.clicks && (clearTimeout(g.dblClickTimeOut), m.clicks = 0, g.lastClickPos.distanceTo(s) <= t.dblClickDistThreshold && !1 === t.dblClickHandler({
                            eventSource: t,
                            pointerType: c.type,
                            position: u(c.currentPos, t.element),
                            shift: n.shiftKey,
                            isTouchEvent: "touch" === c.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n), g.lastClickPos = null)))) : 2 === m.contacts && t.pinchHandler && "touch" === c.type && (g.pinchGPoints = m.asArray(), g.lastPinchDist = g.currentPinchDist = g.pinchGPoints[0].currentPos.distanceTo(g.pinchGPoints[1].currentPos), g.lastPinchCenter = g.currentPinchCenter = d(g.pinchGPoints[0].currentPos, g.pinchGPoints[1].currentPos))) : t.releaseHandler && !1 === t.releaseHandler({
                            eventSource: t,
                            pointerType: c.type,
                            position: u(s, t.element),
                            buttons: m.buttons,
                            insideElementPressed: c.insideElementPressed,
                            insideElementReleased: c.insideElement,
                            isTouchEvent: "touch" === c.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n));
                        return f
                    }

                    function ue(t, n, o) {
                        var r, s, a, l, h, p = i[t.hash],
                            g = t.getActivePointersListByType(o[0].type),
                            m = o.length;
                        for ("undefined" !== typeof n.buttons && (g.buttons = n.buttons), r = 0; r < m; r++) s = o[r], (a = g.getById(s.id)) ? (Object.prototype.hasOwnProperty.call(s, "isPrimary") && (a.isPrimary = s.isPrimary), a.lastPos = a.currentPos, a.lastTime = a.currentTime, a.currentPos = s.currentPos, a.currentTime = s.currentTime) : (s.captured = !1, s.insideElementPressed = !1, s.insideElement = !0, re(g, s));
                        t.stopHandler && "mouse" === o[0].type && (clearTimeout(t.stopTimeOut), t.stopTimeOut = setTimeout((function() {
                            ! function(e, t, i) {
                                e.stopHandler && e.stopHandler({
                                    eventSource: e,
                                    pointerType: i,
                                    position: c(t, e.element),
                                    buttons: e.getActivePointersListByType(i).buttons,
                                    isTouchEvent: "touch" === i,
                                    originalEvent: t,
                                    preventDefaultAction: !1,
                                    userData: e.userData
                                })
                            }(t, n, o[0].type)
                        }), t.stopDelay)), 0 === g.contacts ? t.moveHandler && !1 === t.moveHandler({
                            eventSource: t,
                            pointerType: o[0].type,
                            position: u(o[0].currentPos, t.element),
                            buttons: g.buttons,
                            isTouchEvent: "touch" === o[0].type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n) : 1 === g.contacts ? (t.moveHandler && (a = g.asArray()[0], !1 === t.moveHandler({
                            eventSource: t,
                            pointerType: a.type,
                            position: u(a.currentPos, t.element),
                            buttons: g.buttons,
                            isTouchEvent: "touch" === a.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n)), t.dragHandler && (h = (a = g.asArray()[0]).currentPos.minus(a.lastPos), !1 === t.dragHandler({
                            eventSource: t,
                            pointerType: a.type,
                            position: u(a.currentPos, t.element),
                            buttons: g.buttons,
                            delta: h,
                            speed: a.speed,
                            direction: a.direction,
                            shift: n.shiftKey,
                            isTouchEvent: "touch" === a.type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n))) : 2 === g.contacts && (t.moveHandler && (l = g.asArray(), !1 === t.moveHandler({
                            eventSource: t,
                            pointerType: l[0].type,
                            position: u(d(l[0].currentPos, l[1].currentPos), t.element),
                            buttons: g.buttons,
                            isTouchEvent: "touch" === l[0].type,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n)), t.pinchHandler && "touch" === o[0].type && (h = p.pinchGPoints[0].currentPos.distanceTo(p.pinchGPoints[1].currentPos)) != p.currentPinchDist && (p.lastPinchDist = p.currentPinchDist, p.currentPinchDist = h, p.lastPinchCenter = p.currentPinchCenter, p.currentPinchCenter = d(p.pinchGPoints[0].currentPos, p.pinchGPoints[1].currentPos), !1 === t.pinchHandler({
                            eventSource: t,
                            pointerType: "touch",
                            gesturePoints: p.pinchGPoints,
                            lastCenter: u(p.lastPinchCenter, t.element),
                            center: u(p.currentPinchCenter, t.element),
                            lastDistance: p.lastPinchDist,
                            distance: p.currentPinchDist,
                            shift: n.shiftKey,
                            originalEvent: n,
                            preventDefaultAction: !1,
                            userData: t.userData
                        }) && e.cancelEvent(n)))
                    }
                    e.MouseTracker = function(n) {
                        t.push(this);
                        var o = arguments;
                        e.isPlainObject(n) || (n = {
                            element: o[0],
                            clickTimeThreshold: o[1],
                            clickDistThreshold: o[2]
                        }), this.hash = Math.random(), this.element = e.getElement(n.element), this.clickTimeThreshold = n.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = n.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = n.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = n.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = n.userData || null, this.stopDelay = n.stopDelay || 50, this.enterHandler = n.enterHandler || null, this.exitHandler = n.exitHandler || null, this.pressHandler = n.pressHandler || null, this.nonPrimaryPressHandler = n.nonPrimaryPressHandler || null, this.releaseHandler = n.releaseHandler || null, this.nonPrimaryReleaseHandler = n.nonPrimaryReleaseHandler || null, this.moveHandler = n.moveHandler || null, this.scrollHandler = n.scrollHandler || null, this.clickHandler = n.clickHandler || null, this.dblClickHandler = n.dblClickHandler || null, this.dragHandler = n.dragHandler || null, this.dragEndHandler = n.dragEndHandler || null, this.pinchHandler = n.pinchHandler || null, this.stopHandler = n.stopHandler || null, this.keyDownHandler = n.keyDownHandler || null, this.keyUpHandler = n.keyUpHandler || null, this.keyHandler = n.keyHandler || null, this.focusHandler = n.focusHandler || null, this.blurHandler = n.blurHandler || null;
                        var r = this;
                        i[this.hash] = {
                            click: function(e) {
                                p(r, e)
                            },
                            dblclick: function(e) {
                                g(r, e)
                            },
                            keydown: function(e) {
                                m(r, e)
                            },
                            keyup: function(e) {
                                v(r, e)
                            },
                            keypress: function(e) {
                                f(r, e)
                            },
                            focus: function(e) {
                                w(r, e)
                            },
                            blur: function(e) {
                                y(r, e)
                            },
                            wheel: function(e) {
                                T(r, e)
                            },
                            mousewheel: function(e) {
                                x(r, e)
                            },
                            DOMMouseScroll: function(e) {
                                x(r, e)
                            },
                            MozMousePixelScroll: function(e) {
                                x(r, e)
                            },
                            mouseenter: function(e) {
                                E(r, e)
                            },
                            mouseleave: function(e) {
                                b(r, e)
                            },
                            mouseover: function(e) {
                                P(r, e)
                            },
                            mouseout: function(e) {
                                C(r, e)
                            },
                            mousedown: function(e) {
                                I(r, e)
                            },
                            mouseup: function(e) {
                                D(r, e)
                            },
                            mouseupcaptured: function(e) {
                                B(r, e)
                            },
                            mousemove: function(e) {
                                z(r, e)
                            },
                            mousemovecaptured: function(e) {
                                H(r, e)
                            },
                            touchstart: function(e) {
                                A(r, e)
                            },
                            touchend: function(e) {
                                N(r, e)
                            },
                            touchendcaptured: function(e) {
                                W(r, e)
                            },
                            touchmove: function(e) {
                                U(r, e)
                            },
                            touchmovecaptured: function(e) {
                                V(r, e)
                            },
                            touchcancel: function(e) {
                                q(r, e)
                            },
                            gesturestart: function(e) {
                                $(r, e)
                            },
                            gesturechange: function(e) {
                                Z(r, e)
                            },
                            pointerover: function(e) {
                                X(r, e)
                            },
                            MSPointerOver: function(e) {
                                X(r, e)
                            },
                            pointerout: function(e) {
                                K(r, e)
                            },
                            MSPointerOut: function(e) {
                                K(r, e)
                            },
                            pointerdown: function(e) {
                                Y(r, e)
                            },
                            MSPointerDown: function(e) {
                                Y(r, e)
                            },
                            pointerup: function(e) {
                                J(r, e)
                            },
                            MSPointerUp: function(e) {
                                J(r, e)
                            },
                            pointermove: function(e) {
                                te(r, e)
                            },
                            MSPointerMove: function(e) {
                                te(r, e)
                            },
                            pointercancel: function(e) {
                                oe(r, e)
                            },
                            MSPointerCancel: function(e) {
                                oe(r, e)
                            },
                            pointerupcaptured: function(e) {
                                Q(r, e)
                            },
                            pointermovecaptured: function(e) {
                                ie(r, e)
                            },
                            tracking: !1,
                            activePointersLists: [],
                            lastClickPos: null,
                            dblClickTimeOut: null,
                            pinchGPoints: [],
                            lastPinchDist: 0,
                            currentPinchDist: 0,
                            lastPinchCenter: null,
                            currentPinchCenter: null
                        }, n.startDisabled || this.setTracking(!0)
                    }, e.MouseTracker.prototype = {
                        destroy: function() {
                            var e;
                            for (o(this), this.element = null, e = 0; e < t.length; e++)
                                if (t[e] === this) {
                                    t.splice(e, 1);
                                    break
                                }
                            i[this.hash] = null, delete i[this.hash]
                        },
                        isTracking: function() {
                            return i[this.hash].tracking
                        },
                        setTracking: function(t) {
                            return t ? function(t) {
                                var o, r, s = i[t.hash];
                                if (!s.tracking) {
                                    for (r = 0; r < e.MouseTracker.subscribeEvents.length; r++) o = e.MouseTracker.subscribeEvents[r], e.addEvent(t.element, o, s[o], !1);
                                    n(t), s.tracking = !0
                                }
                            }(this) : o(this), this
                        },
                        getActivePointersListsExceptType: function(e) {
                            for (var t = i[this.hash], n = [], o = 0; o < t.activePointersLists.length; ++o) t.activePointersLists[o].type !== e && n.push(t.activePointersLists[o]);
                            return n
                        },
                        getActivePointersListByType: function(t) {
                            var n, o, r = i[this.hash],
                                s = r.activePointersLists.length;
                            for (n = 0; n < s; n++)
                                if (r.activePointersLists[n].type === t) return r.activePointersLists[n];
                            return o = new e.MouseTracker.GesturePointList(t), r.activePointersLists.push(o), o
                        },
                        getActivePointerCount: function() {
                            var e, t = i[this.hash],
                                n = t.activePointersLists.length,
                                o = 0;
                            for (e = 0; e < n; e++) o += t.activePointersLists[e].getLength();
                            return o
                        },
                        enterHandler: function() {},
                        exitHandler: function() {},
                        pressHandler: function() {},
                        nonPrimaryPressHandler: function() {},
                        releaseHandler: function() {},
                        nonPrimaryReleaseHandler: function() {},
                        moveHandler: function() {},
                        scrollHandler: function() {},
                        clickHandler: function() {},
                        dblClickHandler: function() {},
                        dragHandler: function() {},
                        dragEndHandler: function() {},
                        pinchHandler: function() {},
                        stopHandler: function() {},
                        keyDownHandler: function() {},
                        keyUpHandler: function() {},
                        keyHandler: function() {},
                        focusHandler: function() {},
                        blurHandler: function() {}
                    }, e.MouseTracker.resetAllMouseTrackers = function() {
                        for (var e = 0; e < t.length; e++) t[e].isTracking() && (t[e].setTracking(!1), t[e].setTracking(!0))
                    }, e.MouseTracker.gesturePointVelocityTracker = function() {
                        var t = [],
                            i = 0,
                            n = 0,
                            o = function(e, t) {
                                return e.hash.toString() + t.type + t.id.toString()
                            },
                            r = function() {
                                var i, o, r, s, a, l, h = t.length,
                                    c = e.now();
                                for (s = c - n, n = c, i = 0; i < h; i++)(r = (o = t[i]).gPoint).direction = Math.atan2(r.currentPos.y - o.lastPos.y, r.currentPos.x - o.lastPos.x), a = o.lastPos.distanceTo(r.currentPos), o.lastPos = r.currentPos, l = 1e3 * a / (s + 1), r.speed = .75 * l + .25 * r.speed
                            };
                        return {
                            addPoint: function(s, a) {
                                var l = o(s, a);
                                t.push({
                                    guid: l,
                                    gPoint: a,
                                    lastPos: a.currentPos
                                }), 1 === t.length && (n = e.now(), i = window.setInterval(r, 50))
                            },
                            removePoint: function(e, n) {
                                var r, s = o(e, n),
                                    a = t.length;
                                for (r = 0; r < a; r++)
                                    if (t[r].guid === s) {
                                        t.splice(r, 1), 0 === --a && window.clearInterval(i);
                                        break
                                    }
                            }
                        }
                    }(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = e.Browser.vendor == e.BROWSERS.IE && e.Browser.version > 8 || "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.supportsMouseCapture = function() {
                        var t = document.createElement("div");
                        return e.isFunction(t.setCapture) && e.isFunction(t.releaseCapture)
                    }(), e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", e.MouseTracker.wheelEventName], "DOMMouseScroll" == e.MouseTracker.wheelEventName && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent && (window.navigator.pointerEnabled || e.Browser.vendor !== e.BROWSERS.IE) ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.unprefixedPointerEvents = !0, navigator.maxTouchPoints ? e.MouseTracker.maxTouchPoints = navigator.maxTouchPoints : e.MouseTracker.maxTouchPoints = 0, e.MouseTracker.haveMouseEnter = !1) : window.MSPointerEvent && window.navigator.msPointerEnabled ? (e.MouseTracker.havePointerEvents = !0, e.MouseTracker.subscribeEvents.push("MSPointerOver", "MSPointerOut", "MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"), e.MouseTracker.unprefixedPointerEvents = !1, navigator.msMaxTouchPoints ? e.MouseTracker.maxTouchPoints = navigator.msMaxTouchPoints : e.MouseTracker.maxTouchPoints = 0, e.MouseTracker.haveMouseEnter = !1) : (e.MouseTracker.havePointerEvents = !1, e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 9 ? (e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave"), e.MouseTracker.haveMouseEnter = !0) : (e.MouseTracker.subscribeEvents.push("mouseover", "mouseout"), e.MouseTracker.haveMouseEnter = !1), e.MouseTracker.subscribeEvents.push("mousedown", "mouseup", "mousemove"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.maxTouchPoints = 10), e.MouseTracker.GesturePointList = function(e) {
                        this._gPoints = [], this.type = e, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0
                    }, e.MouseTracker.GesturePointList.prototype = {
                        getLength: function() {
                            return this._gPoints.length
                        },
                        asArray: function() {
                            return this._gPoints
                        },
                        add: function(e) {
                            return this._gPoints.push(e)
                        },
                        removeById: function(e) {
                            var t, i = this._gPoints.length;
                            for (t = 0; t < i; t++)
                                if (this._gPoints[t].id === e) {
                                    this._gPoints.splice(t, 1);
                                    break
                                }
                            return this._gPoints.length
                        },
                        getByIndex: function(e) {
                            return e < this._gPoints.length ? this._gPoints[e] : null
                        },
                        getById: function(e) {
                            var t, i = this._gPoints.length;
                            for (t = 0; t < i; t++)
                                if (this._gPoints[t].id === e) return this._gPoints[t];
                            return null
                        },
                        getPrimary: function(e) {
                            var t, i = this._gPoints.length;
                            for (t = 0; t < i; t++)
                                if (this._gPoints[t].isPrimary) return this._gPoints[t];
                            return null
                        },
                        addContact: function() {
                            ++this.contacts, this.contacts > 1 && ("mouse" === this.type || "pen" === this.type) && (this.contacts = 1)
                        },
                        removeContact: function() {
                            --this.contacts, this.contacts < 0 && (this.contacts = 0)
                        }
                    };
                    var de = function() {
                        try {
                            return window.self !== window.top
                        } catch (e) {
                            return !0
                        }
                    }();

                    function pe(e) {
                        try {
                            return e.addEventListener && e.removeEventListener
                        } catch (t) {
                            return !1
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.ControlAnchor = {
                        NONE: 0,
                        TOP_LEFT: 1,
                        TOP_RIGHT: 2,
                        BOTTOM_RIGHT: 3,
                        BOTTOM_LEFT: 4,
                        ABSOLUTE: 5
                    }, e.Control = function(t, i, n) {
                        var o = t.parentNode;
                        "number" === typeof i && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), i = {
                            anchor: i
                        }), i.attachToViewer = "undefined" === typeof i.attachToViewer || i.attachToViewer, this.autoFade = "undefined" === typeof i.autoFade || i.autoFade, this.element = t, this.anchor = i.anchor, this.container = n, this.anchor == e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = "number" == typeof i.top ? i.top + "px" : i.top, this.wrapper.style.left = "number" == typeof i.left ? i.left + "px" : i.left, this.wrapper.style.height = "number" == typeof i.height ? i.height + "px" : i.height, this.wrapper.style.width = "number" == typeof i.width ? i.width + "px" : i.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor == e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), i.attachToViewer ? this.anchor == e.ControlAnchor.TOP_RIGHT || this.anchor == e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : o.appendChild(this.wrapper)
                    }, e.Control.prototype = {
                        destroy: function() {
                            this.wrapper.removeChild(this.element), this.container.removeChild(this.wrapper)
                        },
                        isVisible: function() {
                            return "none" != this.wrapper.style.display
                        },
                        setVisible: function(t) {
                            this.wrapper.style.display = t ? this.anchor == e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none"
                        },
                        setOpacity: function(t) {
                            this.element[e.SIGNAL] && e.Browser.vendor == e.BROWSERS.IE ? e.setElementOpacity(this.element, t, !0) : e.setElementOpacity(this.wrapper, t, !0)
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    function t(e, t) {
                        var i, n = e.controls;
                        for (i = n.length - 1; i >= 0; i--)
                            if (n[i].element == t) return i;
                        return -1
                    }
                    e.ControlDock = function(t) {
                        var i, n, o = ["topleft", "topright", "bottomright", "bottomleft"];
                        for (e.extend(!0, this, {
                                id: "controldock-" + e.now() + "-" + Math.floor(1e6 * Math.random()),
                                container: e.makeNeutralElement("div"),
                                controls: []
                            }, t), this.container.onsubmit = function() {
                                return !1
                            }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), this.element.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%"), n = 0; n < o.length; n++) i = o[n], this.controls[i] = e.makeNeutralElement("div"), this.controls[i].style.position = "absolute", i.match("left") && (this.controls[i].style.left = "0px"), i.match("right") && (this.controls[i].style.right = "0px"), i.match("top") && (this.controls[i].style.top = "0px"), i.match("bottom") && (this.controls[i].style.bottom = "0px");
                        this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft)
                    }, e.ControlDock.prototype = {
                        addControl: function(i, n) {
                            var o = null;
                            if (!(t(this, i = e.getElement(i)) >= 0)) {
                                switch (n.anchor) {
                                    case e.ControlAnchor.TOP_RIGHT:
                                        o = this.controls.topright, i.style.position = "relative", i.style.paddingRight = "0px", i.style.paddingTop = "0px";
                                        break;
                                    case e.ControlAnchor.BOTTOM_RIGHT:
                                        o = this.controls.bottomright, i.style.position = "relative", i.style.paddingRight = "0px", i.style.paddingBottom = "0px";
                                        break;
                                    case e.ControlAnchor.BOTTOM_LEFT:
                                        o = this.controls.bottomleft, i.style.position = "relative", i.style.paddingLeft = "0px", i.style.paddingBottom = "0px";
                                        break;
                                    case e.ControlAnchor.TOP_LEFT:
                                        o = this.controls.topleft, i.style.position = "relative", i.style.paddingLeft = "0px", i.style.paddingTop = "0px";
                                        break;
                                    case e.ControlAnchor.ABSOLUTE:
                                        o = this.container, i.style.margin = "0px", i.style.padding = "0px";
                                        break;
                                    default:
                                    case e.ControlAnchor.NONE:
                                        o = this.container, i.style.margin = "0px", i.style.padding = "0px"
                                }
                                this.controls.push(new e.Control(i, n, o)), i.style.display = "inline-block"
                            }
                        },
                        removeControl: function(i) {
                            var n = t(this, i = e.getElement(i));
                            return n >= 0 && (this.controls[n].destroy(), this.controls.splice(n, 1)), this
                        },
                        clearControls: function() {
                            for (; this.controls.length > 0;) this.controls.pop().destroy();
                            return this
                        },
                        areControlsEnabled: function() {
                            var e;
                            for (e = this.controls.length - 1; e >= 0; e--)
                                if (this.controls[e].isVisible()) return !0;
                            return !1
                        },
                        setControlsEnabled: function(e) {
                            var t;
                            for (t = this.controls.length - 1; t >= 0; t--) this.controls[t].setVisible(e);
                            return this
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.Placement = e.freezeObject({
                        CENTER: 0,
                        TOP_LEFT: 1,
                        TOP: 2,
                        TOP_RIGHT: 3,
                        RIGHT: 4,
                        BOTTOM_RIGHT: 5,
                        BOTTOM: 6,
                        BOTTOM_LEFT: 7,
                        LEFT: 8,
                        properties: {
                            0: {
                                isLeft: !1,
                                isHorizontallyCentered: !0,
                                isRight: !1,
                                isTop: !1,
                                isVerticallyCentered: !0,
                                isBottom: !1
                            },
                            1: {
                                isLeft: !0,
                                isHorizontallyCentered: !1,
                                isRight: !1,
                                isTop: !0,
                                isVerticallyCentered: !1,
                                isBottom: !1
                            },
                            2: {
                                isLeft: !1,
                                isHorizontallyCentered: !0,
                                isRight: !1,
                                isTop: !0,
                                isVerticallyCentered: !1,
                                isBottom: !1
                            },
                            3: {
                                isLeft: !1,
                                isHorizontallyCentered: !1,
                                isRight: !0,
                                isTop: !0,
                                isVerticallyCentered: !1,
                                isBottom: !1
                            },
                            4: {
                                isLeft: !1,
                                isHorizontallyCentered: !1,
                                isRight: !0,
                                isTop: !1,
                                isVerticallyCentered: !0,
                                isBottom: !1
                            },
                            5: {
                                isLeft: !1,
                                isHorizontallyCentered: !1,
                                isRight: !0,
                                isTop: !1,
                                isVerticallyCentered: !1,
                                isBottom: !0
                            },
                            6: {
                                isLeft: !1,
                                isHorizontallyCentered: !0,
                                isRight: !1,
                                isTop: !1,
                                isVerticallyCentered: !1,
                                isBottom: !0
                            },
                            7: {
                                isLeft: !0,
                                isHorizontallyCentered: !1,
                                isRight: !1,
                                isTop: !1,
                                isVerticallyCentered: !1,
                                isBottom: !0
                            },
                            8: {
                                isLeft: !0,
                                isHorizontallyCentered: !1,
                                isRight: !1,
                                isTop: !1,
                                isVerticallyCentered: !0,
                                isBottom: !1
                            }
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    var t = {},
                        i = 1;

                    function n(t) {
                        return t = e.getElement(t), new e.Point(0 === t.clientWidth ? 1 : t.clientWidth, 0 === t.clientHeight ? 1 : t.clientHeight)
                    }

                    function o(t, i) {
                        if (i instanceof e.Overlay) return i;
                        var n = null;
                        if (i.element) n = e.getElement(i.element);
                        else {
                            var o = i.id ? i.id : "openseadragon-overlay-" + Math.floor(1e7 * Math.random());
                            (n = e.getElement(i.id)) || ((n = document.createElement("a")).href = "#/overlay/" + o), n.id = o, e.addClass(n, i.className ? i.className : "openseadragon-overlay")
                        }
                        var r = i.location,
                            s = i.width,
                            a = i.height;
                        if (!r) {
                            var l = i.x,
                                h = i.y;
                            if (void 0 !== i.px) {
                                var c = t.viewport.imageToViewportRectangle(new e.Rect(i.px, i.py, s || 0, a || 0));
                                l = c.x, h = c.y, s = void 0 !== s ? c.width : void 0, a = void 0 !== a ? c.height : void 0
                            }
                            r = new e.Point(l, h)
                        }
                        var u = i.placement;
                        return u && "string" === e.type(u) && (u = e.Placement[i.placement.toUpperCase()]), new e.Overlay({
                            element: n,
                            location: r,
                            placement: u,
                            onDraw: i.onDraw,
                            checkResize: i.checkResize,
                            width: s,
                            height: a,
                            rotationMode: i.rotationMode
                        })
                    }

                    function r(e, t) {
                        var i;
                        for (i = e.length - 1; i >= 0; i--)
                            if (e[i].element === t) return i;
                        return -1
                    }

                    function s(t, i) {
                        return e.requestAnimationFrame((function() {
                            i(t)
                        }))
                    }

                    function a(t) {
                        e.requestAnimationFrame((function() {
                            ! function(t) {
                                var i, n, o, r;
                                if (t.controlsShouldFade) {
                                    for (i = e.now(), n = i - t.controlsFadeBeginTime, o = 1 - n / t.controlsFadeLength, o = Math.min(1, o), o = Math.max(0, o), r = t.controls.length - 1; r >= 0; r--) t.controls[r].autoFade && t.controls[r].setOpacity(o);
                                    o > 0 && a(t)
                                }
                            }(t)
                        }))
                    }

                    function l(t) {
                        t.autoHideControls && (t.controlsShouldFade = !0, t.controlsFadeBeginTime = e.now() + t.controlsFadeDelay, window.setTimeout((function() {
                            a(t)
                        }), t.controlsFadeDelay))
                    }

                    function h(e) {
                        var t;
                        for (e.controlsShouldFade = !1, t = e.controls.length - 1; t >= 0; t--) e.controls[t].setOpacity(1)
                    }

                    function c() {
                        h(this)
                    }

                    function u() {
                        l(this)
                    }

                    function d(t) {
                        var i = {
                            originalEvent: t.originalEvent,
                            preventDefaultAction: t.preventDefaultAction,
                            preventVerticalPan: t.preventVerticalPan,
                            preventHorizontalPan: t.preventHorizontalPan
                        };
                        if (this.raiseEvent("canvas-key", i), i.preventDefaultAction || t.ctrl || t.alt || t.meta) return !0;
                        switch (t.keyCode) {
                            case 38:
                                return i.preventVerticalPan || (t.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), !1;
                            case 40:
                                return i.preventVerticalPan || (t.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), !1;
                            case 37:
                                return i.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), !1;
                            case 39:
                                return i.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), !1;
                            default:
                                return !0
                        }
                    }

                    function p(t) {
                        var i = {
                            originalEvent: t.originalEvent,
                            preventDefaultAction: t.preventDefaultAction,
                            preventVerticalPan: t.preventVerticalPan,
                            preventHorizontalPan: t.preventHorizontalPan
                        };
                        if (this.raiseEvent("canvas-key", i), i.preventDefaultAction || t.ctrl || t.alt || t.meta) return !0;
                        switch (t.keyCode) {
                            case 43:
                            case 61:
                                return this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), !1;
                            case 45:
                                return this.viewport.zoomBy(.9), this.viewport.applyConstraints(), !1;
                            case 48:
                                return this.viewport.goHome(), this.viewport.applyConstraints(), !1;
                            case 119:
                            case 87:
                                return i.preventVerticalPan || (t.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), !1;
                            case 115:
                            case 83:
                                return i.preventVerticalPan || (t.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), !1;
                            case 97:
                                return i.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), !1;
                            case 100:
                                return i.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), !1;
                            case 114:
                                return this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)), this.viewport.applyConstraints(), !1;
                            case 82:
                                return this.viewport.flipped ? this.viewport.setRotation(e.positiveModulo(this.viewport.degrees + this.rotationIncrement, 360)) : this.viewport.setRotation(e.positiveModulo(this.viewport.degrees - this.rotationIncrement, 360)), this.viewport.applyConstraints(), !1;
                            case 102:
                                return this.viewport.toggleFlip(), !1;
                            default:
                                return !0
                        }
                    }

                    function g(e) {
                        var t;
                        document.activeElement == this.canvas || this.canvas.focus(), this.viewport.flipped && (e.position.x = this.viewport.getContainerSize().x - e.position.x);
                        var i = {
                            tracker: e.eventSource,
                            position: e.position,
                            quick: e.quick,
                            shift: e.shift,
                            originalEvent: e.originalEvent,
                            preventDefaultAction: e.preventDefaultAction
                        };
                        this.raiseEvent("canvas-click", i), !i.preventDefaultAction && this.viewport && e.quick && (t = this.gestureSettingsByDeviceType(e.pointerType)).clickToZoom && (this.viewport.zoomBy(e.shift ? 1 / this.zoomPerClick : this.zoomPerClick, t.zoomToRefPoint ? this.viewport.pointFromPixel(e.position, !0) : null), this.viewport.applyConstraints())
                    }

                    function m(e) {
                        var t, i = {
                            tracker: e.eventSource,
                            position: e.position,
                            shift: e.shift,
                            originalEvent: e.originalEvent,
                            preventDefaultAction: e.preventDefaultAction
                        };
                        this.raiseEvent("canvas-double-click", i), !i.preventDefaultAction && this.viewport && (t = this.gestureSettingsByDeviceType(e.pointerType)).dblClickToZoom && (this.viewport.zoomBy(e.shift ? 1 / this.zoomPerClick : this.zoomPerClick, t.zoomToRefPoint ? this.viewport.pointFromPixel(e.position, !0) : null), this.viewport.applyConstraints())
                    }

                    function v(e) {
                        var t, i = {
                            tracker: e.eventSource,
                            position: e.position,
                            delta: e.delta,
                            speed: e.speed,
                            direction: e.direction,
                            shift: e.shift,
                            originalEvent: e.originalEvent,
                            preventDefaultAction: e.preventDefaultAction
                        };
                        if (this.raiseEvent("canvas-drag", i), !i.preventDefaultAction && this.viewport) {
                            if (t = this.gestureSettingsByDeviceType(e.pointerType), this.panHorizontal || (e.delta.x = 0), this.panVertical || (e.delta.y = 0), this.viewport.flipped && (e.delta.x = -e.delta.x), this.constrainDuringPan) {
                                var n = this.viewport.deltaPointsFromPixels(e.delta.negate());
                                this.viewport.centerSpringX.target.value += n.x, this.viewport.centerSpringY.target.value += n.y;
                                var o = this.viewport.getBounds(),
                                    r = this.viewport.getConstrainedBounds();
                                this.viewport.centerSpringX.target.value -= n.x, this.viewport.centerSpringY.target.value -= n.y, o.x != r.x && (e.delta.x = 0), o.y != r.y && (e.delta.y = 0)
                            }
                            this.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta.negate()), t.flickEnabled && !this.constrainDuringPan)
                        }
                    }

                    function f(t) {
                        if (!t.preventDefaultAction && this.viewport) {
                            var i = this.gestureSettingsByDeviceType(t.pointerType);
                            if (i.flickEnabled && t.speed >= i.flickMinSpeed) {
                                var n = 0;
                                this.panHorizontal && (n = i.flickMomentum * t.speed * Math.cos(t.direction));
                                var o = 0;
                                this.panVertical && (o = i.flickMomentum * t.speed * Math.sin(t.direction));
                                var r = this.viewport.pixelFromPoint(this.viewport.getCenter(!0)),
                                    s = this.viewport.pointFromPixel(new e.Point(r.x - n, r.y - o));
                                this.viewport.panTo(s, !1)
                            }
                            this.viewport.applyConstraints()
                        }
                        this.raiseEvent("canvas-drag-end", {
                            tracker: t.eventSource,
                            position: t.position,
                            speed: t.speed,
                            direction: t.direction,
                            shift: t.shift,
                            originalEvent: t.originalEvent
                        })
                    }

                    function w(e) {
                        this.raiseEvent("canvas-enter", {
                            tracker: e.eventSource,
                            pointerType: e.pointerType,
                            position: e.position,
                            buttons: e.buttons,
                            pointers: e.pointers,
                            insideElementPressed: e.insideElementPressed,
                            buttonDownAny: e.buttonDownAny,
                            originalEvent: e.originalEvent
                        })
                    }

                    function y(t) {
                        window.location != window.parent.location && e.MouseTracker.resetAllMouseTrackers(), this.raiseEvent("canvas-exit", {
                            tracker: t.eventSource,
                            pointerType: t.pointerType,
                            position: t.position,
                            buttons: t.buttons,
                            pointers: t.pointers,
                            insideElementPressed: t.insideElementPressed,
                            buttonDownAny: t.buttonDownAny,
                            originalEvent: t.originalEvent
                        })
                    }

                    function T(e) {
                        this.raiseEvent("canvas-press", {
                            tracker: e.eventSource,
                            pointerType: e.pointerType,
                            position: e.position,
                            insideElementPressed: e.insideElementPressed,
                            insideElementReleased: e.insideElementReleased,
                            originalEvent: e.originalEvent
                        })
                    }

                    function x(e) {
                        this.raiseEvent("canvas-release", {
                            tracker: e.eventSource,
                            pointerType: e.pointerType,
                            position: e.position,
                            insideElementPressed: e.insideElementPressed,
                            insideElementReleased: e.insideElementReleased,
                            originalEvent: e.originalEvent
                        })
                    }

                    function S(e) {
                        this.raiseEvent("canvas-nonprimary-press", {
                            tracker: e.eventSource,
                            position: e.position,
                            pointerType: e.pointerType,
                            button: e.button,
                            buttons: e.buttons,
                            originalEvent: e.originalEvent
                        })
                    }

                    function _(e) {
                        this.raiseEvent("canvas-nonprimary-release", {
                            tracker: e.eventSource,
                            position: e.position,
                            pointerType: e.pointerType,
                            button: e.button,
                            buttons: e.buttons,
                            originalEvent: e.originalEvent
                        })
                    }

                    function E(e) {
                        var t, i, n;
                        if (!e.preventDefaultAction && this.viewport && ((t = this.gestureSettingsByDeviceType(e.pointerType)).pinchToZoom && (i = this.viewport.pointFromPixel(e.center, !0), n = this.viewport.pointFromPixel(e.lastCenter, !0).minus(i), this.panHorizontal || (n.x = 0), this.panVertical || (n.y = 0), this.viewport.zoomBy(e.distance / e.lastDistance, i, !0), t.zoomToRefPoint && this.viewport.panBy(n, !0), this.viewport.applyConstraints()), t.pinchRotate)) {
                            var o = Math.atan2(e.gesturePoints[0].currentPos.y - e.gesturePoints[1].currentPos.y, e.gesturePoints[0].currentPos.x - e.gesturePoints[1].currentPos.x),
                                r = Math.atan2(e.gesturePoints[0].lastPos.y - e.gesturePoints[1].lastPos.y, e.gesturePoints[0].lastPos.x - e.gesturePoints[1].lastPos.x);
                            this.viewport.setRotation(this.viewport.getRotation() + (o - r) * (180 / Math.PI))
                        }
                        return this.raiseEvent("canvas-pinch", {
                            tracker: e.eventSource,
                            gesturePoints: e.gesturePoints,
                            lastCenter: e.lastCenter,
                            center: e.center,
                            lastDistance: e.lastDistance,
                            distance: e.distance,
                            shift: e.shift,
                            originalEvent: e.originalEvent
                        }), !1
                    }

                    function P(t) {
                        var i, n, o;
                        if ((o = e.now()) - this._lastScrollTime > this.minScrollDeltaTime) {
                            if (this._lastScrollTime = o, this.viewport.flipped && (t.position.x = this.viewport.getContainerSize().x - t.position.x), !t.preventDefaultAction && this.viewport && (i = this.gestureSettingsByDeviceType(t.pointerType)).scrollToZoom && (n = Math.pow(this.zoomPerScroll, t.scroll), this.viewport.zoomBy(n, i.zoomToRefPoint ? this.viewport.pointFromPixel(t.position, !0) : null), this.viewport.applyConstraints()), this.raiseEvent("canvas-scroll", {
                                    tracker: t.eventSource,
                                    position: t.position,
                                    scroll: t.scroll,
                                    shift: t.shift,
                                    originalEvent: t.originalEvent
                                }), i && i.scrollToZoom) return !1
                        } else if ((i = this.gestureSettingsByDeviceType(t.pointerType)) && i.scrollToZoom) return !1
                    }

                    function R(e) {
                        t[this.hash].mouseInside = !0, h(this), this.raiseEvent("container-enter", {
                            tracker: e.eventSource,
                            position: e.position,
                            buttons: e.buttons,
                            pointers: e.pointers,
                            insideElementPressed: e.insideElementPressed,
                            buttonDownAny: e.buttonDownAny,
                            originalEvent: e.originalEvent
                        })
                    }

                    function b(e) {
                        e.pointers < 1 && (t[this.hash].mouseInside = !1, t[this.hash].animating || l(this)), this.raiseEvent("container-exit", {
                            tracker: e.eventSource,
                            position: e.position,
                            buttons: e.buttons,
                            pointers: e.pointers,
                            insideElementPressed: e.insideElementPressed,
                            buttonDownAny: e.buttonDownAny,
                            originalEvent: e.originalEvent
                        })
                    }

                    function C(e) {
                        ! function(e) {
                            if (e._opening) return;
                            if (e.autoResize) {
                                var i = n(e.container),
                                    o = t[e.hash].prevContainerSize;
                                if (!i.equals(o)) {
                                    var r = e.viewport;
                                    if (e.preserveImageSizeOnResize) {
                                        var s = o.x / i.x,
                                            a = r.getZoom() * s,
                                            c = r.getCenter();
                                        r.resize(i, !1), r.zoomTo(a, null, !0), r.panTo(c, !0)
                                    } else {
                                        var u = r.getBounds();
                                        r.resize(i, !0), r.fitBoundsWithConstraints(u, !0)
                                    }
                                    t[e.hash].prevContainerSize = i, t[e.hash].forceRedraw = !0
                                }
                            }
                            var d = e.viewport.update(),
                                p = e.world.update() || d;
                            d && e.raiseEvent("viewport-change");
                            e.referenceStrip && (p = e.referenceStrip.update(e.viewport) || p);
                            !t[e.hash].animating && p && (e.raiseEvent("animation-start"), h(e));
                            (p || t[e.hash].forceRedraw || e.world.needsDraw()) && (! function(e) {
                                e.imageLoader.clear(), e.drawer.clear(), e.world.draw(), e.raiseEvent("update-viewport", {})
                            }(e), e._drawOverlays(), e.navigator && e.navigator.update(e.viewport), t[e.hash].forceRedraw = !1, p && e.raiseEvent("animation"));
                            t[e.hash].animating && !p && (e.raiseEvent("animation-finish"), t[e.hash].mouseInside || l(e));
                            t[e.hash].animating = p
                        }(e), e.isOpen() ? e._updateRequestId = s(e, C) : e._updateRequestId = !1
                    }

                    function O(e, t) {
                        return e ? e + t : t
                    }

                    function k() {
                        t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = this.zoomPerSecond, t[this.hash].zooming = !0, B(this)
                    }

                    function I() {
                        t[this.hash].lastZoomTime = e.now(), t[this.hash].zoomFactor = 1 / this.zoomPerSecond, t[this.hash].zooming = !0, B(this)
                    }

                    function D() {
                        t[this.hash].zooming = !1
                    }

                    function B(t) {
                        e.requestAnimationFrame(e.delegate(t, M))
                    }

                    function M() {
                        var i, n, o;
                        t[this.hash].zooming && this.viewport && (n = (i = e.now()) - t[this.hash].lastZoomTime, o = Math.pow(t[this.hash].zoomFactor, n / 1e3), this.viewport.zoomBy(o), this.viewport.applyConstraints(), t[this.hash].lastZoomTime = i, B(this))
                    }

                    function z() {
                        this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints())
                    }

                    function H() {
                        this.viewport && (t[this.hash].zooming = !1, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints())
                    }

                    function F() {
                        this.buttons.emulateEnter(), this.buttons.emulateExit()
                    }

                    function L() {
                        this.viewport && this.viewport.goHome()
                    }

                    function A() {
                        this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()), this.buttons && this.buttons.emulateExit(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints()
                    }

                    function N() {
                        if (this.viewport) {
                            var t = this.viewport.getRotation();
                            t = this.viewport.flipped ? e.positiveModulo(t + this.rotationIncrement, 360) : e.positiveModulo(t - this.rotationIncrement, 360), this.viewport.setRotation(t)
                        }
                    }

                    function W() {
                        if (this.viewport) {
                            var t = this.viewport.getRotation();
                            t = this.viewport.flipped ? e.positiveModulo(t - this.rotationIncrement, 360) : e.positiveModulo(t + this.rotationIncrement, 360), this.viewport.setRotation(t)
                        }
                    }

                    function j() {
                        this.viewport.toggleFlip()
                    }

                    function U() {
                        var e = this._sequenceIndex - 1;
                        this.navPrevNextWrap && e < 0 && (e += this.tileSources.length), this.goToPage(e)
                    }

                    function V() {
                        var e = this._sequenceIndex + 1;
                        this.navPrevNextWrap && e >= this.tileSources.length && (e = 0), this.goToPage(e)
                    }
                    e.Viewer = function(o) {
                        var r, a, h = arguments,
                            c = this;
                        if (e.isPlainObject(o) || (o = {
                                id: h[0],
                                xmlPath: h.length > 1 ? h[1] : void 0,
                                prefixUrl: h.length > 2 ? h[2] : void 0,
                                controls: h.length > 3 ? h[3] : void 0,
                                overlays: h.length > 4 ? h[4] : void 0
                            }), o.config && (e.extend(!0, o, o.config), delete o.config), e.extend(!0, this, {
                                id: o.id,
                                hash: o.hash || i++,
                                initialPage: 0,
                                element: null,
                                container: null,
                                canvas: null,
                                overlays: [],
                                overlaysContainer: null,
                                previousBody: [],
                                customControls: [],
                                source: null,
                                drawer: null,
                                world: null,
                                viewport: null,
                                navigator: null,
                                collectionViewport: null,
                                collectionDrawer: null,
                                navImages: null,
                                buttons: null,
                                profiler: null
                            }, e.DEFAULT_SETTINGS, o), "undefined" === typeof this.hash) throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
                        for ("undefined" !== typeof t[this.hash] && e.console.warn("Hash " + this.hash + " has already been used."), t[this.hash] = {
                                fsBoundsDelta: new e.Point(1, 1),
                                prevContainerSize: null,
                                animating: !1,
                                forceRedraw: !1,
                                mouseInside: !1,
                                group: null,
                                zooming: !1,
                                zoomFactor: null,
                                lastZoomTime: null,
                                fullPage: !1,
                                onfullscreenchange: null
                            }, this._sequenceIndex = 0, this._firstOpen = !0, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", (function(t) {
                                var i = e.getString("Errors.OpenFailed", t.eventSource, t.message);
                                c._showMessage(i)
                            })), e.ControlDock.call(this, o), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (a = this.canvas.style).width = "100%", a.height = "100%", a.overflow = "hidden", a.position = "absolute", a.top = "0px", a.left = "0px", e.setElementTouchActionNone(this.canvas), "" !== o.tabIndex && (this.canvas.tabIndex = void 0 === o.tabIndex ? 0 : o.tabIndex), this.container.className = "openseadragon-container", function(e) {
                                e.width = "100%", e.height = "100%", e.position = "relative", e.overflow = "hidden", e.left = "0px", e.top = "0px", e.textAlign = "left"
                            }(this.container.style), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({
                                element: this.canvas,
                                startDisabled: !this.mouseNavEnabled,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                dblClickTimeThreshold: this.dblClickTimeThreshold,
                                dblClickDistThreshold: this.dblClickDistThreshold,
                                keyDownHandler: e.delegate(this, d),
                                keyHandler: e.delegate(this, p),
                                clickHandler: e.delegate(this, g),
                                dblClickHandler: e.delegate(this, m),
                                dragHandler: e.delegate(this, v),
                                dragEndHandler: e.delegate(this, f),
                                enterHandler: e.delegate(this, w),
                                exitHandler: e.delegate(this, y),
                                pressHandler: e.delegate(this, T),
                                releaseHandler: e.delegate(this, x),
                                nonPrimaryPressHandler: e.delegate(this, S),
                                nonPrimaryReleaseHandler: e.delegate(this, _),
                                scrollHandler: e.delegate(this, P),
                                pinchHandler: e.delegate(this, E)
                            }), this.outerTracker = new e.MouseTracker({
                                element: this.container,
                                startDisabled: !this.mouseNavEnabled,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                dblClickTimeThreshold: this.dblClickTimeThreshold,
                                dblClickDistThreshold: this.dblClickDistThreshold,
                                enterHandler: e.delegate(this, R),
                                exitHandler: e.delegate(this, b)
                            }), this.toolbar && (this.toolbar = new e.ControlDock({
                                element: this.toolbar
                            })), this.bindStandardControls(), t[this.hash].prevContainerSize = n(this.container), this.world = new e.World({
                                viewer: this
                            }), this.world.addHandler("add-item", (function(e) {
                                c.source = c.world.getItemAt(0).source, t[c.hash].forceRedraw = !0, c._updateRequestId || (c._updateRequestId = s(c, C))
                            })), this.world.addHandler("remove-item", (function(e) {
                                c.world.getItemCount() ? c.source = c.world.getItemAt(0).source : c.source = null, t[c.hash].forceRedraw = !0
                            })), this.world.addHandler("metrics-change", (function(e) {
                                c.viewport && c.viewport._setContentBounds(c.world.getHomeBounds(), c.world.getContentFactor())
                            })), this.world.addHandler("item-index-change", (function(e) {
                                c.source = c.world.getItemAt(0).source
                            })), this.viewport = new e.Viewport({
                                containerSize: t[this.hash].prevContainerSize,
                                springStiffness: this.springStiffness,
                                animationTime: this.animationTime,
                                minZoomImageRatio: this.minZoomImageRatio,
                                maxZoomPixelRatio: this.maxZoomPixelRatio,
                                visibilityRatio: this.visibilityRatio,
                                wrapHorizontal: this.wrapHorizontal,
                                wrapVertical: this.wrapVertical,
                                defaultZoomLevel: this.defaultZoomLevel,
                                minZoomLevel: this.minZoomLevel,
                                maxZoomLevel: this.maxZoomLevel,
                                viewer: this,
                                degrees: this.degrees,
                                flipped: this.flipped,
                                navigatorRotate: this.navigatorRotate,
                                homeFillsViewer: this.homeFillsViewer,
                                margins: this.viewportMargins
                            }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({
                                jobLimit: this.imageLoaderLimit,
                                timeout: o.timeout
                            }), this.tileCache = new e.TileCache({
                                maxImageCacheCount: this.maxImageCacheCount
                            }), this.drawer = new e.Drawer({
                                viewer: this,
                                viewport: this.viewport,
                                element: this.canvas,
                                debugGridColor: this.debugGridColor
                            }), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (r = this.buttons.buttons.indexOf(this.rotateLeft), this.buttons.buttons.splice(r, 1), this.buttons.element.removeChild(this.rotateLeft.element)), this.rotateRight && (r = this.buttons.buttons.indexOf(this.rotateRight), this.buttons.buttons.splice(r, 1), this.buttons.element.removeChild(this.rotateRight.element))), this.showNavigator && (this.navigator = new e.Navigator({
                                id: this.navigatorId,
                                position: this.navigatorPosition,
                                sizeRatio: this.navigatorSizeRatio,
                                maintainSizeRatio: this.navigatorMaintainSizeRatio,
                                top: this.navigatorTop,
                                left: this.navigatorLeft,
                                width: this.navigatorWidth,
                                height: this.navigatorHeight,
                                autoResize: this.navigatorAutoResize,
                                autoFade: this.navigatorAutoFade,
                                prefixUrl: this.prefixUrl,
                                viewer: this,
                                navigatorRotate: this.navigatorRotate,
                                background: this.navigatorBackground,
                                opacity: this.navigatorOpacity,
                                borderColor: this.navigatorBorderColor,
                                displayRegionColor: this.navigatorDisplayRegionColor,
                                crossOriginPolicy: this.crossOriginPolicy
                            })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), r = 0; r < this.customControls.length; r++) this.addControl(this.customControls[r].id, {
                            anchor: this.customControls[r].anchor
                        });
                        e.requestAnimationFrame((function() {
                            l(c)
                        })), void 0 === this.imageSmoothingEnabled || this.imageSmoothingEnabled || this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled)
                    }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, {
                        isOpen: function() {
                            return !!this.world.getItemCount()
                        },
                        openDzi: function(t) {
                            return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(t)
                        },
                        openTileSource: function(t) {
                            return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(t)
                        },
                        open: function(t, i) {
                            var n = this;
                            if (this.close(), t) {
                                if (this.sequenceMode && e.isArray(t)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), "undefined" == typeof i || isNaN(i) || (this.initialPage = i), this.tileSources = t, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), void this._updateSequenceButtons(this._sequenceIndex);
                                if (e.isArray(t) || (t = [t]), t.length) {
                                    this._opening = !0;
                                    for (var r, s = t.length, a = 0, l = 0, h = function() {
                                            if (a + l === s)
                                                if (a) {
                                                    !n._firstOpen && n.preserveViewport || (n.viewport.goHome(!0), n.viewport.update()), n._firstOpen = !1;
                                                    var e = t[0];
                                                    if (e.tileSource && (e = e.tileSource), n.overlays && !n.preserveOverlays)
                                                        for (var i = 0; i < n.overlays.length; i++) n.currentOverlays[i] = o(n, n.overlays[i]);
                                                    n._drawOverlays(), n._opening = !1, n.raiseEvent("open", {
                                                        source: e
                                                    })
                                                } else n._opening = !1, n.raiseEvent("open-failed", r)
                                        }, c = function(t) {
                                            e.isPlainObject(t) && t.tileSource || (t = {
                                                tileSource: t
                                            }), void 0 !== t.index && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete t.index), void 0 === t.collectionImmediately && (t.collectionImmediately = !0);
                                            var i = t.success;
                                            t.success = function(e) {
                                                if (a++, t.tileSource.overlays)
                                                    for (var o = 0; o < t.tileSource.overlays.length; o++) n.addOverlay(t.tileSource.overlays[o]);
                                                i && i(e), h()
                                            };
                                            var o = t.error;
                                            t.error = function(e) {
                                                l++, r || (r = e), o && o(e), h()
                                            }, n.addTiledImage(t)
                                        }, u = 0; u < t.length; u++) c(t[u]);
                                    return this
                                }
                            }
                        },
                        close: function() {
                            return t[this.hash] ? (this._opening = !1, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), t[this.hash].animating = !1, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this
                        },
                        destroy: function() {
                            if (t[this.hash]) {
                                if (this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), null !== this._updateRequestId && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.removeAllHandlers(), this.element)
                                    for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                                this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), t[this.hash] = null, delete t[this.hash], this.canvas = null, this.container = null, this.element = null
                            }
                        },
                        isMouseNavEnabled: function() {
                            return this.innerTracker.isTracking()
                        },
                        setMouseNavEnabled: function(e) {
                            return this.innerTracker.setTracking(e), this.outerTracker.setTracking(e), this.raiseEvent("mouse-enabled", {
                                enabled: e
                            }), this
                        },
                        areControlsEnabled: function() {
                            var e, t = this.controls.length;
                            for (e = 0; e < this.controls.length; e++) t = t && this.controls[e].isVisible();
                            return t
                        },
                        setControlsEnabled: function(e) {
                            return e ? h(this) : l(this), this.raiseEvent("controls-enabled", {
                                enabled: e
                            }), this
                        },
                        setDebugMode: function(e) {
                            for (var t = 0; t < this.world.getItemCount(); t++) this.world.getItemAt(t).debugMode = e;
                            this.debugMode = e, this.forceRedraw()
                        },
                        isFullPage: function() {
                            return t[this.hash].fullPage
                        },
                        setFullPage: function(i) {
                            var n, o, r = document.body,
                                s = r.style,
                                a = document.documentElement.style,
                                l = this;
                            if (i == this.isFullPage()) return this;
                            var h = {
                                fullPage: i,
                                preventDefaultAction: !1
                            };
                            if (this.raiseEvent("pre-full-page", h), h.preventDefaultAction) return this;
                            if (i) {
                                for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = s.margin, this.docMargin = a.margin, s.margin = "0", a.margin = "0", this.bodyPadding = s.padding, this.docPadding = a.padding, s.padding = "0", a.padding = "0", this.bodyWidth = s.width, this.docWidth = a.width, s.width = "100%", a.width = "100%", this.bodyHeight = s.height, this.docHeight = a.height, s.height = "100%", a.height = "100%", this.previousBody = [], t[this.hash].prevElementParent = this.element.parentNode, t[this.hash].prevNextSibling = this.element.nextSibling, t[this.hash].prevElementWidth = this.element.style.width, t[this.hash].prevElementHeight = this.element.style.height, n = r.childNodes.length, o = 0; o < n; o++) this.previousBody.push(r.childNodes[0]), r.removeChild(r.childNodes[0]);
                                this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, r.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), r.appendChild(this.element), this.element.style.height = e.getWindowSize().y + "px", this.element.style.width = e.getWindowSize().x + "px", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), t[this.hash].fullPage = !0, e.delegate(this, R)({})
                            } else {
                                for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, s.margin = this.bodyMargin, a.margin = this.docMargin, s.padding = this.bodyPadding, a.padding = this.docPadding, s.width = this.bodyWidth, a.width = this.docWidth, s.height = this.bodyHeight, a.height = this.docHeight, r.removeChild(this.element), n = this.previousBody.length, o = 0; o < n; o++) r.appendChild(this.previousBody.shift());
                                e.removeClass(this.element, "fullpage"), t[this.hash].prevElementParent.insertBefore(this.element, t[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (r.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = t[this.hash].prevElementWidth, this.element.style.height = t[this.hash].prevElementHeight;
                                var c = 0,
                                    u = function() {
                                        e.setPageScroll(l.pageScroll);
                                        var t = e.getPageScroll();
                                        ++c < 10 && (t.x !== l.pageScroll.x || t.y !== l.pageScroll.y) && e.requestAnimationFrame(u)
                                    };
                                e.requestAnimationFrame(u), t[this.hash].fullPage = !1, e.delegate(this, b)({})
                            }
                            return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", {
                                fullPage: i
                            }), this
                        },
                        setFullScreen: function(t) {
                            var i = this;
                            if (!e.supportsFullScreen) return this.setFullPage(t);
                            if (e.isFullScreen() === t) return this;
                            var n = {
                                fullScreen: t,
                                preventDefaultAction: !1
                            };
                            if (this.raiseEvent("pre-full-screen", n), n.preventDefaultAction) return this;
                            if (t) {
                                if (this.setFullPage(!0), !this.isFullPage()) return this;
                                this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
                                var o = function() {
                                    var t = e.isFullScreen();
                                    t || (e.removeEvent(document, e.fullScreenEventName, o), e.removeEvent(document, e.fullScreenErrorEventName, o), i.setFullPage(!1), i.isFullPage() && (i.element.style.width = i.fullPageStyleWidth, i.element.style.height = i.fullPageStyleHeight)), i.navigator && i.viewport && setTimeout((function() {
                                        i.navigator.update(i.viewport)
                                    })), i.raiseEvent("full-screen", {
                                        fullScreen: t
                                    })
                                };
                                e.addEvent(document, e.fullScreenEventName, o), e.addEvent(document, e.fullScreenErrorEventName, o), e.requestFullScreen(document.body)
                            } else e.exitFullScreen();
                            return this
                        },
                        isVisible: function() {
                            return "hidden" != this.container.style.visibility
                        },
                        setVisible: function(e) {
                            return this.container.style.visibility = e ? "" : "hidden", this.raiseEvent("visible", {
                                visible: e
                            }), this
                        },
                        addTiledImage: function(t) {
                            e.console.assert(t, "[Viewer.addTiledImage] options is required"), e.console.assert(t.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!t.replace || t.index > -1 && t.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
                            var i = this;
                            t.replace && (t.replaceItem = i.world.getItemAt(t.index)), this._hideMessage(), void 0 === t.placeholderFillStyle && (t.placeholderFillStyle = this.placeholderFillStyle), void 0 === t.opacity && (t.opacity = this.opacity), void 0 === t.preload && (t.preload = this.preload), void 0 === t.compositeOperation && (t.compositeOperation = this.compositeOperation), void 0 === t.crossOriginPolicy && (t.crossOriginPolicy = void 0 !== t.tileSource.crossOriginPolicy ? t.tileSource.crossOriginPolicy : this.crossOriginPolicy), void 0 === t.ajaxWithCredentials && (t.ajaxWithCredentials = this.ajaxWithCredentials), void 0 === t.loadTilesWithAjax && (t.loadTilesWithAjax = this.loadTilesWithAjax), void 0 === t.ajaxHeaders || null === t.ajaxHeaders ? t.ajaxHeaders = this.ajaxHeaders : e.isPlainObject(t.ajaxHeaders) && e.isPlainObject(this.ajaxHeaders) && (t.ajaxHeaders = e.extend({}, this.ajaxHeaders, t.ajaxHeaders));
                            var n = {
                                options: t
                            };

                            function o(e) {
                                for (var o = 0; o < i._loadQueue.length; o++)
                                    if (i._loadQueue[o] === n) {
                                        i._loadQueue.splice(o, 1);
                                        break
                                    }
                                0 === i._loadQueue.length && r(n), i.raiseEvent("add-item-failed", e), t.error && t.error(e)
                            }

                            function r(e) {
                                i.collectionMode && (i.world.arrange({
                                    immediately: e.options.collectionImmediately,
                                    rows: i.collectionRows,
                                    columns: i.collectionColumns,
                                    layout: i.collectionLayout,
                                    tileSize: i.collectionTileSize,
                                    tileMargin: i.collectionTileMargin
                                }), i.world.setAutoRefigureSizes(!0))
                            }

                            function s() {
                                for (var t, n, o; i._loadQueue.length && (t = i._loadQueue[0]).tileSource;) {
                                    if (i._loadQueue.splice(0, 1), t.options.replace) {
                                        var s = i.world.getIndexOfItem(t.options.replaceItem); - 1 != s && (t.options.index = s), i.world.removeItem(t.options.replaceItem)
                                    }
                                    n = new e.TiledImage({
                                        viewer: i,
                                        source: t.tileSource,
                                        viewport: i.viewport,
                                        drawer: i.drawer,
                                        tileCache: i.tileCache,
                                        imageLoader: i.imageLoader,
                                        x: t.options.x,
                                        y: t.options.y,
                                        width: t.options.width,
                                        height: t.options.height,
                                        fitBounds: t.options.fitBounds,
                                        fitBoundsPlacement: t.options.fitBoundsPlacement,
                                        clip: t.options.clip,
                                        placeholderFillStyle: t.options.placeholderFillStyle,
                                        opacity: t.options.opacity,
                                        preload: t.options.preload,
                                        degrees: t.options.degrees,
                                        compositeOperation: t.options.compositeOperation,
                                        springStiffness: i.springStiffness,
                                        animationTime: i.animationTime,
                                        minZoomImageRatio: i.minZoomImageRatio,
                                        wrapHorizontal: i.wrapHorizontal,
                                        wrapVertical: i.wrapVertical,
                                        immediateRender: i.immediateRender,
                                        blendTime: i.blendTime,
                                        alwaysBlend: i.alwaysBlend,
                                        minPixelRatio: i.minPixelRatio,
                                        smoothTileEdgesMinZoom: i.smoothTileEdgesMinZoom,
                                        iOSDevice: i.iOSDevice,
                                        crossOriginPolicy: t.options.crossOriginPolicy,
                                        ajaxWithCredentials: t.options.ajaxWithCredentials,
                                        loadTilesWithAjax: t.options.loadTilesWithAjax,
                                        ajaxHeaders: t.options.ajaxHeaders,
                                        debugMode: i.debugMode
                                    }), i.collectionMode && i.world.setAutoRefigureSizes(!1), i.world.addItem(n, {
                                        index: t.options.index
                                    }), 0 === i._loadQueue.length && r(t), 1 !== i.world.getItemCount() || i.preserveViewport || i.viewport.goHome(!0), i.navigator && (o = e.extend({}, t.options, {
                                        replace: !1,
                                        originalTiledImage: n,
                                        tileSource: t.tileSource
                                    }), i.navigator.addTiledImage(o)), t.options.success && t.options.success({
                                        item: n
                                    })
                                }
                            }
                            e.isArray(t.tileSource) ? setTimeout((function() {
                                o({
                                    message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                                    source: t.tileSource,
                                    options: t
                                })
                            })) : (this._loadQueue.push(n), function(t, i, n, o, r) {
                                var s = t;
                                if ("string" == e.type(i))
                                    if (i.match(/^\s*<.*>\s*$/)) i = e.parseXml(i);
                                    else if (i.match(/^\s*[\{\[].*[\}\]]\s*$/)) try {
                                    var a = e.parseJSON(i);
                                    i = a
                                } catch (h) {}

                                function l(e, t) {
                                    e.ready ? o(e) : (e.addHandler("ready", (function() {
                                        o(e)
                                    })), e.addHandler("open-failed", (function(e) {
                                        r({
                                            message: e.message,
                                            source: t
                                        })
                                    })))
                                }
                                setTimeout((function() {
                                    if ("string" == e.type(i))(i = new e.TileSource({
                                        url: i,
                                        crossOriginPolicy: void 0 !== n.crossOriginPolicy ? n.crossOriginPolicy : t.crossOriginPolicy,
                                        ajaxWithCredentials: t.ajaxWithCredentials,
                                        ajaxHeaders: t.ajaxHeaders,
                                        useCanvas: t.useCanvas,
                                        success: function(e) {
                                            o(e.tileSource)
                                        }
                                    })).addHandler("open-failed", (function(e) {
                                        r(e)
                                    }));
                                    else if (e.isPlainObject(i) || i.nodeType)
                                        if (void 0 !== i.crossOriginPolicy || void 0 === n.crossOriginPolicy && void 0 === t.crossOriginPolicy || (i.crossOriginPolicy = void 0 !== n.crossOriginPolicy ? n.crossOriginPolicy : t.crossOriginPolicy), void 0 === i.ajaxWithCredentials && (i.ajaxWithCredentials = t.ajaxWithCredentials), void 0 === i.useCanvas && (i.useCanvas = t.useCanvas), e.isFunction(i.getTileUrl)) {
                                            var a = new e.TileSource(i);
                                            a.getTileUrl = i.getTileUrl, o(a)
                                        } else {
                                            var h = e.TileSource.determineType(s, i);
                                            if (!h) return void r({
                                                message: "Unable to load TileSource",
                                                source: i
                                            });
                                            var c = h.prototype.configure.apply(s, [i]);
                                            l(new h(c), i)
                                        }
                                    else l(i, i)
                                }))
                            }(this, t.tileSource, t, (function(e) {
                                n.tileSource = e, s()
                            }), (function(e) {
                                e.options = t, o(e), s()
                            })))
                        },
                        addSimpleImage: function(t) {
                            e.console.assert(t, "[Viewer.addSimpleImage] options is required"), e.console.assert(t.url, "[Viewer.addSimpleImage] options.url is required");
                            var i = e.extend({}, t, {
                                tileSource: {
                                    type: "image",
                                    url: t.url
                                }
                            });
                            delete i.url, this.addTiledImage(i)
                        },
                        addLayer: function(t) {
                            var i = this;
                            e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
                            var n = e.extend({}, t, {
                                success: function(e) {
                                    i.raiseEvent("add-layer", {
                                        options: t,
                                        drawer: e.item
                                    })
                                },
                                error: function(e) {
                                    i.raiseEvent("add-layer-failed", e)
                                }
                            });
                            return this.addTiledImage(n), this
                        },
                        getLayerAtLevel: function(t) {
                            return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(t)
                        },
                        getLevelOfLayer: function(t) {
                            return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(t)
                        },
                        getLayersCount: function() {
                            return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount()
                        },
                        setLayerLevel: function(t, i) {
                            return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(t, i)
                        },
                        removeLayer: function(t) {
                            return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(t)
                        },
                        forceRedraw: function() {
                            return t[this.hash].forceRedraw = !0, this
                        },
                        bindSequenceControls: function() {
                            var t = e.delegate(this, c),
                                i = e.delegate(this, u),
                                n = e.delegate(this, V),
                                o = e.delegate(this, U),
                                r = this.navImages,
                                s = !0;
                            return this.showSequenceControl && ((this.previousButton || this.nextButton) && (s = !1), this.previousButton = new e.Button({
                                element: this.previousButton ? e.getElement(this.previousButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.PreviousPage"),
                                srcRest: O(this.prefixUrl, r.previous.REST),
                                srcGroup: O(this.prefixUrl, r.previous.GROUP),
                                srcHover: O(this.prefixUrl, r.previous.HOVER),
                                srcDown: O(this.prefixUrl, r.previous.DOWN),
                                onRelease: o,
                                onFocus: t,
                                onBlur: i
                            }), this.nextButton = new e.Button({
                                element: this.nextButton ? e.getElement(this.nextButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.NextPage"),
                                srcRest: O(this.prefixUrl, r.next.REST),
                                srcGroup: O(this.prefixUrl, r.next.GROUP),
                                srcHover: O(this.prefixUrl, r.next.HOVER),
                                srcDown: O(this.prefixUrl, r.next.DOWN),
                                onRelease: n,
                                onFocus: t,
                                onBlur: i
                            }), this.navPrevNextWrap || this.previousButton.disable(), this.tileSources && this.tileSources.length || this.nextButton.disable(), s && (this.paging = new e.ButtonGroup({
                                buttons: [this.previousButton, this.nextButton],
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold
                            }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, {
                                anchor: e.ControlAnchor.BOTTOM_RIGHT
                            }) : this.addControl(this.pagingControl, {
                                anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT
                            }))), this
                        },
                        bindStandardControls: function() {
                            var t = e.delegate(this, k),
                                i = e.delegate(this, D),
                                n = e.delegate(this, z),
                                o = e.delegate(this, I),
                                r = e.delegate(this, H),
                                s = e.delegate(this, L),
                                a = e.delegate(this, A),
                                l = e.delegate(this, N),
                                h = e.delegate(this, W),
                                d = e.delegate(this, j),
                                p = e.delegate(this, c),
                                g = e.delegate(this, u),
                                m = this.navImages,
                                v = [],
                                f = !0;
                            return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (f = !1), this.showZoomControl && (v.push(this.zoomInButton = new e.Button({
                                element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.ZoomIn"),
                                srcRest: O(this.prefixUrl, m.zoomIn.REST),
                                srcGroup: O(this.prefixUrl, m.zoomIn.GROUP),
                                srcHover: O(this.prefixUrl, m.zoomIn.HOVER),
                                srcDown: O(this.prefixUrl, m.zoomIn.DOWN),
                                onPress: t,
                                onRelease: i,
                                onClick: n,
                                onEnter: t,
                                onExit: i,
                                onFocus: p,
                                onBlur: g
                            })), v.push(this.zoomOutButton = new e.Button({
                                element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.ZoomOut"),
                                srcRest: O(this.prefixUrl, m.zoomOut.REST),
                                srcGroup: O(this.prefixUrl, m.zoomOut.GROUP),
                                srcHover: O(this.prefixUrl, m.zoomOut.HOVER),
                                srcDown: O(this.prefixUrl, m.zoomOut.DOWN),
                                onPress: o,
                                onRelease: i,
                                onClick: r,
                                onEnter: o,
                                onExit: i,
                                onFocus: p,
                                onBlur: g
                            }))), this.showHomeControl && v.push(this.homeButton = new e.Button({
                                element: this.homeButton ? e.getElement(this.homeButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.Home"),
                                srcRest: O(this.prefixUrl, m.home.REST),
                                srcGroup: O(this.prefixUrl, m.home.GROUP),
                                srcHover: O(this.prefixUrl, m.home.HOVER),
                                srcDown: O(this.prefixUrl, m.home.DOWN),
                                onRelease: s,
                                onFocus: p,
                                onBlur: g
                            })), this.showFullPageControl && v.push(this.fullPageButton = new e.Button({
                                element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.FullPage"),
                                srcRest: O(this.prefixUrl, m.fullpage.REST),
                                srcGroup: O(this.prefixUrl, m.fullpage.GROUP),
                                srcHover: O(this.prefixUrl, m.fullpage.HOVER),
                                srcDown: O(this.prefixUrl, m.fullpage.DOWN),
                                onRelease: a,
                                onFocus: p,
                                onBlur: g
                            })), this.showRotationControl && (v.push(this.rotateLeftButton = new e.Button({
                                element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.RotateLeft"),
                                srcRest: O(this.prefixUrl, m.rotateleft.REST),
                                srcGroup: O(this.prefixUrl, m.rotateleft.GROUP),
                                srcHover: O(this.prefixUrl, m.rotateleft.HOVER),
                                srcDown: O(this.prefixUrl, m.rotateleft.DOWN),
                                onRelease: l,
                                onFocus: p,
                                onBlur: g
                            })), v.push(this.rotateRightButton = new e.Button({
                                element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.RotateRight"),
                                srcRest: O(this.prefixUrl, m.rotateright.REST),
                                srcGroup: O(this.prefixUrl, m.rotateright.GROUP),
                                srcHover: O(this.prefixUrl, m.rotateright.HOVER),
                                srcDown: O(this.prefixUrl, m.rotateright.DOWN),
                                onRelease: h,
                                onFocus: p,
                                onBlur: g
                            }))), this.showFlipControl && v.push(this.flipButton = new e.Button({
                                element: this.flipButton ? e.getElement(this.flipButton) : null,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold,
                                tooltip: e.getString("Tooltips.Flip"),
                                srcRest: O(this.prefixUrl, m.flip.REST),
                                srcGroup: O(this.prefixUrl, m.flip.GROUP),
                                srcHover: O(this.prefixUrl, m.flip.HOVER),
                                srcDown: O(this.prefixUrl, m.flip.DOWN),
                                onRelease: d,
                                onFocus: p,
                                onBlur: g
                            })), f && (this.buttons = new e.ButtonGroup({
                                buttons: v,
                                clickTimeThreshold: this.clickTimeThreshold,
                                clickDistThreshold: this.clickDistThreshold
                            }), this.navControl = this.buttons.element, this.addHandler("open", e.delegate(this, F)), this.toolbar ? this.toolbar.addControl(this.navControl, {
                                anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
                            }) : this.addControl(this.navControl, {
                                anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
                            }))), this
                        },
                        currentPage: function() {
                            return this._sequenceIndex
                        },
                        goToPage: function(e) {
                            return this.tileSources && e >= 0 && e < this.tileSources.length && (this._sequenceIndex = e, this._updateSequenceButtons(e), this.open(this.tileSources[e]), this.referenceStrip && this.referenceStrip.setFocus(e), this.raiseEvent("page", {
                                page: e
                            })), this
                        },
                        addOverlay: function(t, i, n, s) {
                            var a;
                            if (a = e.isPlainObject(t) ? t : {
                                    element: t,
                                    location: i,
                                    placement: n,
                                    onDraw: s
                                }, t = e.getElement(a.element), r(this.currentOverlays, t) >= 0) return this;
                            var l = o(this, a);
                            return this.currentOverlays.push(l), l.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", {
                                element: t,
                                location: a.location,
                                placement: a.placement
                            }), this
                        },
                        updateOverlay: function(i, n, o) {
                            var s;
                            return i = e.getElement(i), (s = r(this.currentOverlays, i)) >= 0 && (this.currentOverlays[s].update(n, o), t[this.hash].forceRedraw = !0, this.raiseEvent("update-overlay", {
                                element: i,
                                location: n,
                                placement: o
                            })), this
                        },
                        removeOverlay: function(i) {
                            var n;
                            return i = e.getElement(i), (n = r(this.currentOverlays, i)) >= 0 && (this.currentOverlays[n].destroy(), this.currentOverlays.splice(n, 1), t[this.hash].forceRedraw = !0, this.raiseEvent("remove-overlay", {
                                element: i
                            })), this
                        },
                        clearOverlays: function() {
                            for (; this.currentOverlays.length > 0;) this.currentOverlays.pop().destroy();
                            return t[this.hash].forceRedraw = !0, this.raiseEvent("clear-overlay", {}), this
                        },
                        getOverlayById: function(t) {
                            var i;
                            return t = e.getElement(t), (i = r(this.currentOverlays, t)) >= 0 ? this.currentOverlays[i] : null
                        },
                        _updateSequenceButtons: function(e) {
                            this.nextButton && (this.tileSources && this.tileSources.length - 1 !== e ? this.nextButton.enable() : this.navPrevNextWrap || this.nextButton.disable()), this.previousButton && (e > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable())
                        },
                        _showMessage: function(t) {
                            this._hideMessage();
                            var i = e.makeNeutralElement("div");
                            i.appendChild(document.createTextNode(t)), this.messageDiv = e.makeCenteredNode(i), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv)
                        },
                        _hideMessage: function() {
                            var e = this.messageDiv;
                            e && (e.parentNode.removeChild(e), delete this.messageDiv)
                        },
                        gestureSettingsByDeviceType: function(e) {
                            switch (e) {
                                case "mouse":
                                    return this.gestureSettingsMouse;
                                case "touch":
                                    return this.gestureSettingsTouch;
                                case "pen":
                                    return this.gestureSettingsPen;
                                default:
                                    return this.gestureSettingsUnknown
                            }
                        },
                        _drawOverlays: function() {
                            var e, t = this.currentOverlays.length;
                            for (e = 0; e < t; e++) this.currentOverlays[e].drawHTML(this.overlaysContainer, this.viewport)
                        },
                        _cancelPendingImages: function() {
                            this._loadQueue = []
                        },
                        removeReferenceStrip: function() {
                            this.showReferenceStrip = !1, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null)
                        },
                        addReferenceStrip: function() {
                            if (this.showReferenceStrip = !0, this.sequenceMode) {
                                if (this.referenceStrip) return;
                                this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({
                                    id: this.referenceStripElement,
                                    position: this.referenceStripPosition,
                                    sizeRatio: this.referenceStripSizeRatio,
                                    scroll: this.referenceStripScroll,
                                    height: this.referenceStripHeight,
                                    width: this.referenceStripWidth,
                                    tileSources: this.tileSources,
                                    prefixUrl: this.prefixUrl,
                                    useCanvas: this.useCanvas,
                                    viewer: this
                                }), this.referenceStrip.setFocus(this._sequenceIndex))
                            } else e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.')
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    function t(e) {
                        var t = {
                            tracker: e.eventSource,
                            position: e.position,
                            quick: e.quick,
                            shift: e.shift,
                            originalEvent: e.originalEvent,
                            preventDefaultAction: e.preventDefaultAction
                        };
                        if (this.viewer.raiseEvent("navigator-click", t), !t.preventDefaultAction && e.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
                            this.viewer.viewport.flipped && (e.position.x = this.viewport.getContainerSize().x - e.position.x);
                            var i = this.viewport.pointFromPixel(e.position);
                            this.panVertical ? this.panHorizontal || (i.x = this.viewer.viewport.getCenter(!0).x) : i.y = this.viewer.viewport.getCenter(!0).y, this.viewer.viewport.panTo(i), this.viewer.viewport.applyConstraints()
                        }
                    }

                    function i(e) {
                        var t = {
                            tracker: e.eventSource,
                            position: e.position,
                            delta: e.delta,
                            speed: e.speed,
                            direction: e.direction,
                            shift: e.shift,
                            originalEvent: e.originalEvent,
                            preventDefaultAction: e.preventDefaultAction
                        };
                        this.viewer.raiseEvent("navigator-drag", t), !t.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (e.delta.x = 0), this.panVertical || (e.delta.y = 0), this.viewer.viewport.flipped && (e.delta.x = -e.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(e.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints())
                    }

                    function n(e) {
                        e.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints()
                    }

                    function o(e) {
                        return this.viewer.raiseEvent("navigator-scroll", {
                            tracker: e.eventSource,
                            position: e.position,
                            scroll: e.scroll,
                            shift: e.shift,
                            originalEvent: e.originalEvent
                        }), !1
                    }

                    function r(e, t) {
                        s(e, "rotate(" + t + "deg)")
                    }

                    function s(e, t) {
                        e.style.webkitTransform = t, e.style.mozTransform = t, e.style.msTransform = t, e.style.oTransform = t, e.style.transform = t
                    }
                    e.Navigator = function(s) {
                        var a, l, h, c, u = s.viewer,
                            d = this;

                        function p(e) {
                            r(d.displayRegionContainer, e), r(d.displayRegion, -e), d.viewport.setRotation(e)
                        }(s.id ? (this.element = document.getElementById(s.id), s.controlOptions = {
                            anchor: e.ControlAnchor.NONE,
                            attachToViewer: !1,
                            autoFade: !1
                        }) : (s.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), s.controlOptions = {
                            anchor: e.ControlAnchor.TOP_RIGHT,
                            attachToViewer: !0,
                            autoFade: s.autoFade
                        }, s.position && ("BOTTOM_RIGHT" == s.position ? s.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : "BOTTOM_LEFT" == s.position ? s.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : "TOP_RIGHT" == s.position ? s.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : "TOP_LEFT" == s.position ? s.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : "ABSOLUTE" == s.position && (s.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, s.controlOptions.top = s.top, s.controlOptions.left = s.left, s.controlOptions.height = s.height, s.controlOptions.width = s.width))), this.element.id = s.id, this.element.className += " navigator", (s = e.extend(!0, {
                            sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio
                        }, s, {
                            element: this.element,
                            tabIndex: -1,
                            showNavigator: !1,
                            mouseNavEnabled: !1,
                            showNavigationControl: !1,
                            showSequenceControl: !1,
                            immediateRender: !0,
                            blendTime: 0,
                            animationTime: 0,
                            autoResize: s.autoResize,
                            minZoomImageRatio: 1,
                            background: s.background,
                            opacity: s.opacity,
                            borderColor: s.borderColor,
                            displayRegionColor: s.displayRegionColor
                        })).minPixelRatio = this.minPixelRatio = u.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(2 * this.borderWidth, 2 * this.borderWidth).minus(this.fudge), s.controlOptions.anchor != e.ControlAnchor.NONE && (h = this.element.style, c = this.borderWidth, h.margin = "0px", h.border = c + "px solid " + s.borderColor, h.padding = "0px", h.background = s.background, h.opacity = s.opacity, h.overflow = "hidden"), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", function(e, t) {
                            e.position = "relative", e.top = "0px", e.left = "0px", e.fontSize = "0px", e.overflow = "hidden", e.border = t + "px solid " + s.displayRegionColor, e.margin = "0px", e.padding = "0px", e.background = "transparent", e.float = "left", e.cssFloat = "left", e.styleFloat = "left", e.zIndex = 999999999, e.cursor = "default"
                        }(this.displayRegion.style, this.borderWidth), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", u.addControl(this.element, s.controlOptions), this._resizeWithViewer = s.controlOptions.anchor != e.ControlAnchor.ABSOLUTE && s.controlOptions.anchor != e.ControlAnchor.NONE, s.width && s.height ? (this.setWidth(s.width), this.setHeight(s.height)) : this._resizeWithViewer && (a = e.getElementSize(u.element), this.element.style.height = Math.round(a.y * s.sizeRatio) + "px", this.element.style.width = Math.round(a.x * s.sizeRatio) + "px", this.oldViewerSize = a, l = e.getElementSize(this.element), this.elementArea = l.x * l.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [s]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer), s.navigatorRotate) && (p(s.viewer.viewport ? s.viewer.viewport.getRotation() : s.viewer.degrees || 0), s.viewer.addHandler("rotate", (function(e) {
                            p(e.degrees)
                        })));
                        this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({
                            element: this.element,
                            dragHandler: e.delegate(this, i),
                            clickHandler: e.delegate(this, t),
                            releaseHandler: e.delegate(this, n),
                            scrollHandler: e.delegate(this, o)
                        }), this.addHandler("reset-size", (function() {
                            d.viewport && d.viewport.goHome(!0)
                        })), u.world.addHandler("item-index-change", (function(e) {
                            window.setTimeout((function() {
                                var t = d.world.getItemAt(e.previousIndex);
                                d.world.setItemIndex(t, e.newIndex)
                            }), 1)
                        })), u.world.addHandler("remove-item", (function(e) {
                            var t = e.item,
                                i = d._getMatchingItem(t);
                            i && d.world.removeItem(i)
                        })), this.update(u.viewport)
                    }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, {
                        updateSize: function() {
                            if (this.viewport) {
                                var t = new e.Point(0 === this.container.clientWidth ? 1 : this.container.clientWidth, 0 === this.container.clientHeight ? 1 : this.container.clientHeight);
                                t.equals(this.oldContainerSize) || (this.viewport.resize(t, !0), this.viewport.goHome(!0), this.oldContainerSize = t, this.drawer.clear(), this.world.draw())
                            }
                        },
                        setWidth: function(e) {
                            this.width = e, this.element.style.width = "number" == typeof e ? e + "px" : e, this._resizeWithViewer = !1
                        },
                        setHeight: function(e) {
                            this.height = e, this.element.style.height = "number" == typeof e ? e + "px" : e, this._resizeWithViewer = !1
                        },
                        setFlip: function(e) {
                            return this.viewport.setFlip(e), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this
                        },
                        setDisplayTransform: function(e) {
                            s(this.displayRegion, e), s(this.canvas, e), s(this.element, e)
                        },
                        update: function(t) {
                            var i, n, o, r, s, a;
                            if (i = e.getElementSize(this.viewer.element), this._resizeWithViewer && i.x && i.y && !i.equals(this.oldViewerSize) && (this.oldViewerSize = i, this.maintainSizeRatio || !this.elementArea ? (n = i.x * this.sizeRatio, o = i.y * this.sizeRatio) : (n = Math.sqrt(this.elementArea * (i.x / i.y)), o = this.elementArea / n), this.element.style.width = Math.round(n) + "px", this.element.style.height = Math.round(o) + "px", this.elementArea || (this.elementArea = n * o), this.updateSize()), t && this.viewport) {
                                r = t.getBoundsNoRotate(!0), s = this.viewport.pixelFromPointNoRotate(r.getTopLeft(), !1), a = this.viewport.pixelFromPointNoRotate(r.getBottomRight(), !1).minus(this.totalBorderWidths);
                                var l = this.displayRegion.style;
                                l.display = this.world.getItemCount() ? "block" : "none", l.top = Math.round(s.y) + "px", l.left = Math.round(s.x) + "px";
                                var h = Math.abs(s.x - a.x),
                                    c = Math.abs(s.y - a.y);
                                l.width = Math.round(Math.max(h, 0)) + "px", l.height = Math.round(Math.max(c, 0)) + "px"
                            }
                        },
                        addTiledImage: function(t) {
                            var i = this,
                                n = t.originalTiledImage;
                            delete t.original;
                            var o = e.extend({}, t, {
                                success: function(e) {
                                    var t = e.item;

                                    function o() {
                                        i._matchBounds(t, n)
                                    }
                                    t._originalForNavigator = n, i._matchBounds(t, n, !0), n.addHandler("bounds-change", o), n.addHandler("clip-change", o), n.addHandler("opacity-change", (function() {
                                        i._matchOpacity(t, n)
                                    })), n.addHandler("composite-operation-change", (function() {
                                        i._matchCompositeOperation(t, n)
                                    }))
                                }
                            });
                            return e.Viewer.prototype.addTiledImage.apply(this, [o])
                        },
                        _getMatchingItem: function(e) {
                            for (var t, i = this.world.getItemCount(), n = 0; n < i; n++)
                                if ((t = this.world.getItemAt(n))._originalForNavigator === e) return t;
                            return null
                        },
                        _matchBounds: function(e, t, i) {
                            var n = t.getBoundsNoRotate();
                            e.setPosition(n.getTopLeft(), i), e.setWidth(n.width, i), e.setRotation(t.getRotation(), i), e.setClip(t.getClip())
                        },
                        _matchOpacity: function(e, t) {
                            e.setOpacity(t.opacity)
                        },
                        _matchCompositeOperation: function(e, t) {
                            e.setCompositeOperation(t.compositeOperation)
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    var t = {
                        Errors: {
                            Dzc: "Sorry, we don't support Deep Zoom Collections!",
                            Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
                            Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
                            ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
                            Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
                            Status: "This space unintentionally left blank ({0} {1}).",
                            OpenFailed: "Unable to open {0}: {1}"
                        },
                        Tooltips: {
                            FullPage: "Toggle full page",
                            Home: "Go home",
                            ZoomIn: "Zoom in",
                            ZoomOut: "Zoom out",
                            NextPage: "Next page",
                            PreviousPage: "Previous page",
                            RotateLeft: "Rotate left",
                            RotateRight: "Rotate right",
                            Flip: "Flip Horizontally"
                        }
                    };
                    e.extend(e, {
                        getString: function(i) {
                            var n, o = i.split("."),
                                r = null,
                                s = arguments,
                                a = t;
                            for (n = 0; n < o.length - 1; n++) a = a[o[n]] || {};
                            return "string" != typeof(r = a[o[n]]) && (e.console.log("Untranslated source string:", i), r = ""), r.replace(/\{\d+\}/g, (function(e) {
                                var t = parseInt(e.match(/\d+/), 10) + 1;
                                return t < s.length ? s[t] : ""
                            }))
                        },
                        setString: function(e, i) {
                            var n, o = e.split("."),
                                r = t;
                            for (n = 0; n < o.length - 1; n++) r[o[n]] || (r[o[n]] = {}), r = r[o[n]];
                            r[o[n]] = i
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.Point = function(e, t) {
                        this.x = "number" == typeof e ? e : 0, this.y = "number" == typeof t ? t : 0
                    }, e.Point.prototype = {
                        clone: function() {
                            return new e.Point(this.x, this.y)
                        },
                        plus: function(t) {
                            return new e.Point(this.x + t.x, this.y + t.y)
                        },
                        minus: function(t) {
                            return new e.Point(this.x - t.x, this.y - t.y)
                        },
                        times: function(t) {
                            return new e.Point(this.x * t, this.y * t)
                        },
                        divide: function(t) {
                            return new e.Point(this.x / t, this.y / t)
                        },
                        negate: function() {
                            return new e.Point(-this.x, -this.y)
                        },
                        distanceTo: function(e) {
                            return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2))
                        },
                        squaredDistanceTo: function(e) {
                            return Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2)
                        },
                        apply: function(t) {
                            return new e.Point(t(this.x), t(this.y))
                        },
                        equals: function(t) {
                            return t instanceof e.Point && this.x === t.x && this.y === t.y
                        },
                        rotate: function(t, i) {
                            var n, o;
                            if (i = i || new e.Point(0, 0), t % 90 === 0) {
                                switch (e.positiveModulo(t, 360)) {
                                    case 0:
                                        n = 1, o = 0;
                                        break;
                                    case 90:
                                        n = 0, o = 1;
                                        break;
                                    case 180:
                                        n = -1, o = 0;
                                        break;
                                    case 270:
                                        n = 0, o = -1
                                }
                            } else {
                                var r = t * Math.PI / 180;
                                n = Math.cos(r), o = Math.sin(r)
                            }
                            var s = n * (this.x - i.x) - o * (this.y - i.y) + i.x,
                                a = o * (this.x - i.x) + n * (this.y - i.y) + i.y;
                            return new e.Point(s, a)
                        },
                        toString: function() {
                            return "(" + Math.round(100 * this.x) / 100 + "," + Math.round(100 * this.y) / 100 + ")"
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.TileSource = function(t, i, n, o, r, s) {
                        var a, l, h = this,
                            c = arguments;
                        if (a = e.isPlainObject(t) ? t : {
                                width: c[0],
                                height: c[1],
                                tileSize: c[2],
                                tileOverlap: c[3],
                                minLevel: c[4],
                                maxLevel: c[5]
                            }, e.EventSource.call(this), e.extend(!0, this, a), !this.success)
                            for (l = 0; l < arguments.length; l++)
                                if (e.isFunction(arguments[l])) {
                                    this.success = arguments[l];
                                    break
                                }
                        this.success && this.addHandler("ready", (function(e) {
                            h.success(e)
                        })), "string" == e.type(arguments[0]) && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = !1, this.getImageInfo(this.url)) : (this.ready = !0, this.aspectRatio = a.width && a.height ? a.width / a.height : 1, this.dimensions = new e.Point(a.width, a.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = a.tileOverlap ? a.tileOverlap : 0, this.minLevel = a.minLevel ? a.minLevel : 0, this.maxLevel = void 0 !== a.maxLevel && null !== a.maxLevel ? a.maxLevel : a.width && a.height ? Math.ceil(Math.log(Math.max(a.width, a.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this))
                    }, e.TileSource.prototype = {
                        getTileSize: function(t) {
                            return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth
                        },
                        getTileWidth: function(e) {
                            return this._tileWidth ? this._tileWidth : this.getTileSize(e)
                        },
                        getTileHeight: function(e) {
                            return this._tileHeight ? this._tileHeight : this.getTileSize(e)
                        },
                        getLevelScale: function(e) {
                            var t, i = {};
                            for (t = 0; t <= this.maxLevel; t++) i[t] = 1 / Math.pow(2, this.maxLevel - t);
                            return this.getLevelScale = function(e) {
                                return i[e]
                            }, this.getLevelScale(e)
                        },
                        getNumTiles: function(t) {
                            var i = this.getLevelScale(t),
                                n = Math.ceil(i * this.dimensions.x / this.getTileWidth(t)),
                                o = Math.ceil(i * this.dimensions.y / this.getTileHeight(t));
                            return new e.Point(n, o)
                        },
                        getPixelRatio: function(t) {
                            var i = this.dimensions.times(this.getLevelScale(t)),
                                n = 1 / i.x,
                                o = 1 / i.y;
                            return new e.Point(n, o)
                        },
                        getClosestLevel: function() {
                            var e, t;
                            for (e = this.minLevel + 1; e <= this.maxLevel && !((t = this.getNumTiles(e)).x > 1 || t.y > 1); e++);
                            return e - 1
                        },
                        getTileAtPoint: function(t, i) {
                            var n = i.x >= 0 && i.x <= 1 && i.y >= 0 && i.y <= 1 / this.aspectRatio;
                            e.console.assert(n, "[TileSource.getTileAtPoint] must be called with a valid point.");
                            var o = this.dimensions.x * this.getLevelScale(t),
                                r = i.x * o,
                                s = i.y * o,
                                a = Math.floor(r / this.getTileWidth(t)),
                                l = Math.floor(s / this.getTileHeight(t));
                            i.x >= 1 && (a = this.getNumTiles(t).x - 1);
                            return i.y >= 1 / this.aspectRatio - 1e-15 && (l = this.getNumTiles(t).y - 1), new e.Point(a, l)
                        },
                        getTileBounds: function(t, i, n, o) {
                            var r = this.dimensions.times(this.getLevelScale(t)),
                                s = this.getTileWidth(t),
                                a = this.getTileHeight(t),
                                l = 0 === i ? 0 : s * i - this.tileOverlap,
                                h = 0 === n ? 0 : a * n - this.tileOverlap,
                                c = s + (0 === i ? 1 : 2) * this.tileOverlap,
                                u = a + (0 === n ? 1 : 2) * this.tileOverlap,
                                d = 1 / r.x;
                            return c = Math.min(c, r.x - l), u = Math.min(u, r.y - h), o ? new e.Rect(0, 0, c, u) : new e.Rect(l * d, h * d, c * d, u * d)
                        },
                        getImageInfo: function(t) {
                            var i, n, o, r, s, a, l, h = this;
                            t && (l = (a = (s = t.split("/"))[s.length - 1]).lastIndexOf(".")) > -1 && (s[s.length - 1] = a.slice(0, l)), n = function(i) {
                                "string" === typeof i && (i = e.parseXml(i));
                                var n = e.TileSource.determineType(h, i, t);
                                n ? (void 0 === (r = n.prototype.configure.apply(h, [i, t])).ajaxWithCredentials && (r.ajaxWithCredentials = h.ajaxWithCredentials), o = new n(r), h.ready = !0, h.raiseEvent("ready", {
                                    tileSource: o
                                })) : h.raiseEvent("open-failed", {
                                    message: "Unable to load TileSource",
                                    source: t
                                })
                            }, t.match(/\.js$/) ? (i = t.split("/").pop().replace(".js", ""), e.jsonp({
                                url: t,
                                async: !1,
                                callbackName: i,
                                callback: n
                            })) : e.makeAjaxRequest({
                                url: t,
                                withCredentials: this.ajaxWithCredentials,
                                headers: this.ajaxHeaders,
                                success: function(t) {
                                    var i = function(t) {
                                        var i, n, o = t.responseText,
                                            r = t.status;
                                        if (!t) throw new Error(e.getString("Errors.Security"));
                                        if (200 !== t.status && 0 !== t.status) throw r = t.status, i = 404 == r ? "Not Found" : t.statusText, new Error(e.getString("Errors.Status", r, i));
                                        if (o.match(/\s*<.*/)) try {
                                            n = t.responseXML && t.responseXML.documentElement ? t.responseXML : e.parseXml(o)
                                        } catch (s) {
                                            n = t.responseText
                                        } else if (o.match(/\s*[\{\[].*/)) try {
                                            n = e.parseJSON(o)
                                        } catch (s) {
                                            n = o
                                        } else n = o;
                                        return n
                                    }(t);
                                    n(i)
                                },
                                error: function(e, i) {
                                    var n;
                                    try {
                                        n = "HTTP " + e.status + " attempting to load TileSource"
                                    } catch (o) {
                                        n = ("undefined" != typeof i && i.toString ? i.toString() : "Unknown error") + " attempting to load TileSource"
                                    }
                                    h.raiseEvent("open-failed", {
                                        message: n,
                                        source: t
                                    })
                                }
                            })
                        },
                        supports: function(e, t) {
                            return !1
                        },
                        configure: function(e, t) {
                            throw new Error("Method not implemented.")
                        },
                        getTileUrl: function(e, t, i) {
                            throw new Error("Method not implemented.")
                        },
                        getTileAjaxHeaders: function(e, t, i) {
                            return {}
                        },
                        tileExists: function(e, t, i) {
                            var n = this.getNumTiles(e);
                            return e >= this.minLevel && e <= this.maxLevel && t >= 0 && i >= 0 && t < n.x && i < n.y
                        }
                    }, e.extend(!0, e.TileSource.prototype, e.EventSource.prototype), e.TileSource.determineType = function(t, i, n) {
                        var o;
                        for (o in OpenSeadragon)
                            if (o.match(/.+TileSource$/) && e.isFunction(OpenSeadragon[o]) && e.isFunction(OpenSeadragon[o].prototype.supports) && OpenSeadragon[o].prototype.supports.call(t, i, n)) return OpenSeadragon[o];
                        e.console.error("No TileSource was able to open %s %s", n, i)
                    }
                }(OpenSeadragon),
                function(e) {
                    function t(t, i) {
                        var n, o, r = i.Image,
                            s = r.Url,
                            a = r.Format,
                            l = r.Size,
                            h = r.DisplayRect || [],
                            c = parseInt(l.Width, 10),
                            u = parseInt(l.Height, 10),
                            d = parseInt(r.TileSize, 10),
                            p = parseInt(r.Overlap, 10),
                            g = [];
                        for (o = 0; o < h.length; o++) n = h[o].Rect, g.push(new e.DisplayRect(parseInt(n.X, 10), parseInt(n.Y, 10), parseInt(n.Width, 10), parseInt(n.Height, 10), parseInt(n.MinLevel, 10), parseInt(n.MaxLevel, 10)));
                        return e.extend(!0, {
                            width: c,
                            height: u,
                            tileSize: d,
                            tileOverlap: p,
                            minLevel: null,
                            maxLevel: null,
                            tilesUrl: s,
                            fileFormat: a,
                            displayRects: g
                        }, i)
                    }
                    e.DziTileSource = function(t, i, n, o, r, s, a, l, h) {
                        var c, u, d, p;
                        if (p = e.isPlainObject(t) ? t : {
                                width: arguments[0],
                                height: arguments[1],
                                tileSize: arguments[2],
                                tileOverlap: arguments[3],
                                tilesUrl: arguments[4],
                                fileFormat: arguments[5],
                                displayRects: arguments[6],
                                minLevel: arguments[7],
                                maxLevel: arguments[8]
                            }, this._levelRects = {}, this.tilesUrl = p.tilesUrl, this.fileFormat = p.fileFormat, this.displayRects = p.displayRects, this.displayRects)
                            for (c = this.displayRects.length - 1; c >= 0; c--)
                                for (d = (u = this.displayRects[c]).minLevel; d <= u.maxLevel; d++) this._levelRects[d] || (this._levelRects[d] = []), this._levelRects[d].push(u);
                        e.TileSource.apply(this, [p])
                    }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            var i;
                            return e.Image ? i = e.Image.xmlns : e.documentElement && ("Image" != e.documentElement.localName && "Image" != e.documentElement.tagName || (i = e.documentElement.namespaceURI)), -1 !== (i = (i || "").toLowerCase()).indexOf("schemas.microsoft.com/deepzoom/2008") || -1 !== i.indexOf("schemas.microsoft.com/deepzoom/2009")
                        },
                        configure: function(i, n) {
                            var o;
                            return o = e.isPlainObject(i) ? t(this, i) : function(i, n) {
                                if (!n || !n.documentElement) throw new Error(e.getString("Errors.Xml"));
                                var o, r, s, a, l, h = n.documentElement,
                                    c = h.localName || h.tagName,
                                    u = n.documentElement.namespaceURI,
                                    d = null,
                                    p = [];
                                if ("Image" == c) try {
                                    if (void 0 === (a = h.getElementsByTagName("Size")[0]) && (a = h.getElementsByTagNameNS(u, "Size")[0]), d = {
                                            Image: {
                                                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                                                Url: h.getAttribute("Url"),
                                                Format: h.getAttribute("Format"),
                                                DisplayRect: null,
                                                Overlap: parseInt(h.getAttribute("Overlap"), 10),
                                                TileSize: parseInt(h.getAttribute("TileSize"), 10),
                                                Size: {
                                                    Height: parseInt(a.getAttribute("Height"), 10),
                                                    Width: parseInt(a.getAttribute("Width"), 10)
                                                }
                                            }
                                        }, !e.imageFormatSupported(d.Image.Format)) throw new Error(e.getString("Errors.ImageFormat", d.Image.Format.toUpperCase()));
                                    for (void 0 === (o = h.getElementsByTagName("DisplayRect")) && (o = h.getElementsByTagNameNS(u, "DisplayRect")[0]), l = 0; l < o.length; l++) r = o[l], void 0 === (s = r.getElementsByTagName("Rect")[0]) && (s = r.getElementsByTagNameNS(u, "Rect")[0]), p.push({
                                        Rect: {
                                            X: parseInt(s.getAttribute("X"), 10),
                                            Y: parseInt(s.getAttribute("Y"), 10),
                                            Width: parseInt(s.getAttribute("Width"), 10),
                                            Height: parseInt(s.getAttribute("Height"), 10),
                                            MinLevel: parseInt(r.getAttribute("MinLevel"), 10),
                                            MaxLevel: parseInt(r.getAttribute("MaxLevel"), 10)
                                        }
                                    });
                                    return p.length && (d.Image.DisplayRect = p), t(i, d)
                                } catch (m) {
                                    throw m instanceof Error ? m : new Error(e.getString("Errors.Dzi"))
                                } else {
                                    if ("Collection" == c) throw new Error(e.getString("Errors.Dzc"));
                                    if ("Error" == c) {
                                        var g = h.getElementsByTagName("Message")[0].firstChild.nodeValue;
                                        throw new Error(g)
                                    }
                                }
                                throw new Error(e.getString("Errors.Dzi"))
                            }(this, i), n && !o.tilesUrl && (o.tilesUrl = n.replace(/([^\/]+?)(\.(dzi|xml|js)?(\?[^\/]*)?)?\/?$/, "$1_files/"), -1 != n.search(/\.(dzi|xml|js)\?/) ? o.queryParams = n.match(/\?.*/) : o.queryParams = ""), o
                        },
                        getTileUrl: function(e, t, i) {
                            return [this.tilesUrl, e, "/", t, "_", i, ".", this.fileFormat, this.queryParams].join("")
                        },
                        tileExists: function(e, t, i) {
                            var n, o, r, s, a, l, h, c = this._levelRects[e];
                            if (this.minLevel && e < this.minLevel || this.maxLevel && e > this.maxLevel) return !1;
                            if (!c || !c.length) return !0;
                            for (h = c.length - 1; h >= 0; h--)
                                if (!(e < (n = c[h]).minLevel || e > n.maxLevel) && (o = this.getLevelScale(e), r = n.x * o, s = n.y * o, a = r + n.width * o, l = s + n.height * o, r = Math.floor(r / this._tileWidth), s = Math.floor(s / this._tileWidth), a = Math.ceil(a / this._tileWidth), l = Math.ceil(l / this._tileWidth), r <= t && t < a && s <= i && i < l)) return !0;
                            return !1
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    function t(e) {
                        var t = Array.isArray(e.profile) ? e.profile[0] : e.profile,
                            i = -1 !== ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"].indexOf(t),
                            n = !1;
                        return 2 === e.version && e.profile.length > 1 && e.profile[1].supports && (n = -1 !== e.profile[1].supports.indexOf("sizeByW")), 3 === e.version && e.extraFeatures && (n = -1 !== e.extraFeatures.indexOf("sizeByWh")), !i || n
                    }

                    function i(e) {
                        for (var t = [], i = 0; i < e.sizes.length; i++) t.push({
                            url: e["@id"] + "/full/" + e.sizes[i].width + "," + (3 === e.version ? e.sizes[i].height : "") + "/0/default." + e.tileFormat,
                            width: e.sizes[i].width,
                            height: e.sizes[i].height
                        });
                        return t.sort((function(e, t) {
                            return e.width - t.width
                        }))
                    }
                    e.IIIFTileSource = function(n) {
                        if (e.extend(!0, this, n), !(this.height && this.width && this["@id"])) throw new Error("IIIF required parameters not provided.");
                        if (n.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = n.version, this.tile_width && this.tile_height) n.tileWidth = this.tile_width, n.tileHeight = this.tile_height;
                        else if (this.tile_width) n.tileSize = this.tile_width;
                        else if (this.tile_height) n.tileSize = this.tile_height;
                        else if (this.tiles)
                            if (1 == this.tiles.length) n.tileWidth = this.tiles[0].width, n.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
                            else {
                                this.scale_factors = [];
                                for (var o = 0; o < this.tiles.length; o++)
                                    for (var r = 0; r < this.tiles[o].scaleFactors.length; r++) {
                                        var s = this.tiles[o].scaleFactors[r];
                                        this.scale_factors.push(s), n.tileSizePerScaleFactor[s] = {
                                            width: this.tiles[o].width,
                                            height: this.tiles[o].height || this.tiles[o].width
                                        }
                                    }
                            }
                        else if (t(n)) {
                            for (var a = Math.min(this.height, this.width), l = [256, 512, 1024], h = [], c = 0; c < l.length; c++) l[c] <= a && h.push(l[c]);
                            h.length > 0 ? n.tileSize = Math.max.apply(null, h) : n.tileSize = a
                        } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0, n.levels = i(this), e.extend(!0, n, {
                            width: n.levels[n.levels.length - 1].width,
                            height: n.levels[n.levels.length - 1].height,
                            tileSize: Math.max(n.height, n.width),
                            tileOverlap: 0,
                            minLevel: 0,
                            maxLevel: n.levels.length - 1
                        }), this.levels = n.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
                        if (!n.maxLevel && !this.emulateLegacyImagePyramid)
                            if (this.scale_factors) {
                                var u = Math.max.apply(null, this.scale_factors);
                                n.maxLevel = Math.round(Math.log(u) * Math.LOG2E)
                            } else n.maxLevel = Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)));
                        e.TileSource.apply(this, [n])
                    }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            return !(!e.protocol || "http://iiif.io/api/image" != e.protocol) || (!(!e["@context"] || "http://library.stanford.edu/iiif/image-api/1.1/context.json" != e["@context"] && "http://iiif.io/api/image/1/context.json" != e["@context"]) || (!(!e.profile || 0 !== e.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html")) || (!!(e.identifier && e.width && e.height) || !(!e.documentElement || "info" != e.documentElement.tagName || "http://library.stanford.edu/iiif/image-api/ns/" != e.documentElement.namespaceURI))))
                        },
                        configure: function(t, i) {
                            if (e.isPlainObject(t)) {
                                if (t["@context"]) {
                                    var n = t["@context"];
                                    if (Array.isArray(n))
                                        for (var o = 0; o < n.length; o++)
                                            if ("string" === typeof n[o] && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(n[o]) || "http://library.stanford.edu/iiif/image-api/1.1/context.json" === n[o])) {
                                                n = n[o];
                                                break
                                            }
                                    switch (n) {
                                        case "http://iiif.io/api/image/1/context.json":
                                        case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                                            t.version = 1;
                                            break;
                                        case "http://iiif.io/api/image/2/context.json":
                                            t.version = 2;
                                            break;
                                        case "http://iiif.io/api/image/3/context.json":
                                            t.version = 3;
                                            break;
                                        default:
                                            e.console.error("Data has a @context property which contains no known IIIF context URI.")
                                    }
                                } else t["@context"] = "http://iiif.io/api/image/1.0/context.json", t["@id"] = i.replace("/info.json", ""), t.version = 1;
                                if (!t["@id"] && t.id && (t["@id"] = t.id), t.preferredFormats)
                                    for (var r = 0; r < t.preferredFormats.length; r++)
                                        if (OpenSeadragon.imageFormatSupported(t.preferredFormats[r])) {
                                            t.tileFormat = t.preferredFormats[r];
                                            break
                                        }
                                return t
                            }
                            var s = function(t) {
                                if (!t || !t.documentElement) throw new Error(e.getString("Errors.Xml"));
                                var i = t.documentElement,
                                    n = i.tagName,
                                    o = null;
                                if ("info" == n) try {
                                    return function t(i, n, o) {
                                        var r, s;
                                        if (3 == i.nodeType && o)(s = i.nodeValue.trim()).match(/^\d*$/) && (s = Number(s)), n[o] ? (e.isArray(n[o]) || (n[o] = [n[o]]), n[o].push(s)) : n[o] = s;
                                        else if (1 == i.nodeType)
                                            for (r = 0; r < i.childNodes.length; r++) t(i.childNodes[r], n, i.nodeName)
                                    }(i, o = {}), o
                                } catch (r) {
                                    throw r instanceof Error ? r : new Error(e.getString("Errors.IIIF"))
                                }
                                throw new Error(e.getString("Errors.IIIF"))
                            }(t);
                            return s["@context"] = "http://iiif.io/api/image/1.0/context.json", s["@id"] = i.replace("/info.xml", ""), s.version = 1, s
                        },
                        getTileWidth: function(t) {
                            if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, t);
                            var i = Math.pow(2, this.maxLevel - t);
                            return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[i] ? this.tileSizePerScaleFactor[i].width : this._tileWidth
                        },
                        getTileHeight: function(t) {
                            if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, t);
                            var i = Math.pow(2, this.maxLevel - t);
                            return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[i] ? this.tileSizePerScaleFactor[i].height : this._tileHeight
                        },
                        getLevelScale: function(t) {
                            if (this.emulateLegacyImagePyramid) {
                                var i = NaN;
                                return this.levels.length > 0 && t >= this.minLevel && t <= this.maxLevel && (i = this.levels[t].width / this.levels[this.maxLevel].width), i
                            }
                            return e.TileSource.prototype.getLevelScale.call(this, t)
                        },
                        getNumTiles: function(t) {
                            return this.emulateLegacyImagePyramid ? this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0) : e.TileSource.prototype.getNumTiles.call(this, t)
                        },
                        getTileAtPoint: function(t, i) {
                            return this.emulateLegacyImagePyramid ? new e.Point(0, 0) : e.TileSource.prototype.getTileAtPoint.call(this, t, i)
                        },
                        getTileUrl: function(e, t, i) {
                            if (this.emulateLegacyImagePyramid) {
                                var n = null;
                                return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (n = this.levels[e].url), n
                            }
                            var o, r, s, a, l, h, c, u, d, p, g, m, v, f = Math.pow(.5, this.maxLevel - e),
                                w = Math.ceil(this.width * f),
                                y = Math.ceil(this.height * f);
                            return o = this.getTileWidth(e), r = this.getTileHeight(e), s = Math.ceil(o / f), a = Math.ceil(r / f), v = 1 === this.version ? "native." + this.tileFormat : "default." + this.tileFormat, w < o && y < r ? (p = 2 === this.version && w === this.width ? "max" : 3 === this.version && w === this.width && y === this.height ? "max" : 3 === this.version ? w + "," + y : w + ",", l = "full") : (h = t * s, c = i * a, u = Math.min(s, this.width - h), d = Math.min(a, this.height - c), l = 0 === t && 0 === i && u === this.width && d === this.height ? "full" : [h, c, u, d].join(","), g = Math.ceil(u * f), m = Math.ceil(d * f), p = 2 === this.version && g === this.width ? "max" : 3 === this.version && g === this.width && m === this.height ? "max" : 3 === this.version ? g + "," + m : g + ","), [this["@id"], l, p, "0", v].join("/")
                        },
                        __testonly__: {
                            canBeTiled: t,
                            constructLevels: i
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.OsmTileSource = function(t, i, n, o, r) {
                        var s;
                        (s = e.isPlainObject(t) ? t : {
                            width: arguments[0],
                            height: arguments[1],
                            tileSize: arguments[2],
                            tileOverlap: arguments[3],
                            tilesUrl: arguments[4]
                        }).width && s.height || (s.width = 65572864, s.height = 65572864), s.tileSize || (s.tileSize = 256, s.tileOverlap = 0), s.tilesUrl || (s.tilesUrl = "http://tile.openstreetmap.org/"), s.minLevel = 8, e.TileSource.apply(this, [s])
                    }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            return e.type && "openstreetmaps" == e.type
                        },
                        configure: function(e, t) {
                            return e
                        },
                        getTileUrl: function(e, t, i) {
                            return this.tilesUrl + (e - 8) + "/" + t + "/" + i + ".png"
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.TmsTileSource = function(t, i, n, o, r) {
                        var s;
                        s = e.isPlainObject(t) ? t : {
                            width: arguments[0],
                            height: arguments[1],
                            tileSize: arguments[2],
                            tileOverlap: arguments[3],
                            tilesUrl: arguments[4]
                        };
                        var a, l = 256 * Math.ceil(s.width / 256),
                            h = 256 * Math.ceil(s.height / 256);
                        a = l > h ? l / 256 : h / 256, s.maxLevel = Math.ceil(Math.log(a) / Math.log(2)) - 1, s.tileSize = 256, s.width = l, s.height = h, e.TileSource.apply(this, [s])
                    }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            return e.type && "tiledmapservice" == e.type
                        },
                        configure: function(e, t) {
                            return e
                        },
                        getTileUrl: function(e, t, i) {
                            var n = this.getNumTiles(e).y - 1;
                            return this.tilesUrl + e + "/" + t + "/" + (n - i) + ".png"
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.ZoomifyTileSource = function(e) {
                        e.tileSize = 256;
                        var t = {
                            x: e.width,
                            y: e.height
                        };
                        for (e.imageSizes = [{
                                x: e.width,
                                y: e.height
                            }], e.gridSize = [this._getGridSize(e.width, e.height, e.tileSize)]; parseInt(t.x, 10) > e.tileSize || parseInt(t.y, 10) > e.tileSize;) t.x = Math.floor(t.x / 2), t.y = Math.floor(t.y / 2), e.imageSizes.push({
                            x: t.x,
                            y: t.y
                        }), e.gridSize.push(this._getGridSize(t.x, t.y, e.tileSize));
                        e.imageSizes.reverse(), e.gridSize.reverse(), e.minLevel = 0, e.maxLevel = e.gridSize.length - 1, OpenSeadragon.TileSource.apply(this, [e])
                    }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, {
                        _getGridSize: function(e, t, i) {
                            return {
                                x: Math.ceil(e / i),
                                y: Math.ceil(t / i)
                            }
                        },
                        _calculateAbsoluteTileNumber: function(e, t, i) {
                            for (var n = 0, o = {}, r = 0; r < e; r++) n += (o = this.gridSize[r]).x * o.y;
                            return n += (o = this.gridSize[e]).x * i + t
                        },
                        supports: function(e, t) {
                            return e.type && "zoomifytileservice" == e.type
                        },
                        configure: function(e, t) {
                            return e
                        },
                        getTileUrl: function(e, t, i) {
                            var n, o = this._calculateAbsoluteTileNumber(e, t, i);
                            return n = Math.floor(o / 256), this.tilesUrl + "TileGroup" + n + "/" + e + "-" + t + "-" + i + ".jpg"
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    function t(e, t) {
                        return t.levels
                    }
                    e.LegacyTileSource = function(t) {
                        var i, n, o;
                        e.isArray(t) && (i = {
                            type: "legacy-image-pyramid",
                            levels: t
                        }), i.levels = function(t) {
                            var i, n, o = [];
                            for (n = 0; n < t.length; n++)(i = t[n]).height && i.width && i.url ? o.push({
                                url: i.url,
                                width: Number(i.width),
                                height: Number(i.height)
                            }) : e.console.error("Unsupported image format: %s", i.url ? i.url : "<no URL>");
                            return o.sort((function(e, t) {
                                return e.height - t.height
                            }))
                        }(i.levels), i.levels.length > 0 ? (n = i.levels[i.levels.length - 1].width, o = i.levels[i.levels.length - 1].height) : (n = 0, o = 0, e.console.error("No supported image formats found")), e.extend(!0, i, {
                            width: n,
                            height: o,
                            tileSize: Math.max(o, n),
                            tileOverlap: 0,
                            minLevel: 0,
                            maxLevel: i.levels.length > 0 ? i.levels.length - 1 : 0
                        }), e.TileSource.apply(this, [i]), this.levels = i.levels
                    }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            return e.type && "legacy-image-pyramid" == e.type || e.documentElement && "legacy-image-pyramid" == e.documentElement.getAttribute("type")
                        },
                        configure: function(i, n) {
                            return e.isPlainObject(i) ? t(this, i) : function(i, n) {
                                if (!n || !n.documentElement) throw new Error(e.getString("Errors.Xml"));
                                var o, r, s = n.documentElement,
                                    a = s.tagName,
                                    l = null,
                                    h = [];
                                if ("image" == a) try {
                                    for (l = {
                                            type: s.getAttribute("type"),
                                            levels: []
                                        }, h = s.getElementsByTagName("level"), r = 0; r < h.length; r++) o = h[r], l.levels.push({
                                        url: o.getAttribute("url"),
                                        width: parseInt(o.getAttribute("width"), 10),
                                        height: parseInt(o.getAttribute("height"), 10)
                                    });
                                    return t(i, l)
                                } catch (c) {
                                    throw c instanceof Error ? c : new Error("Unknown error parsing Legacy Image Pyramid XML.")
                                } else {
                                    if ("collection" == a) throw new Error("Legacy Image Pyramid Collections not yet supported.");
                                    if ("error" == a) throw new Error("Error: " + n)
                                }
                                throw new Error("Unknown element " + a)
                            }(this, i)
                        },
                        getLevelScale: function(e) {
                            var t = NaN;
                            return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (t = this.levels[e].width / this.levels[this.maxLevel].width), t
                        },
                        getNumTiles: function(t) {
                            return this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0)
                        },
                        getTileUrl: function(e, t, i) {
                            var n = null;
                            return this.levels.length > 0 && e >= this.minLevel && e <= this.maxLevel && (n = this.levels[e].url), n
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.ImageTileSource = function(t) {
                        t = e.extend({
                            buildPyramid: !0,
                            crossOriginPolicy: !1,
                            ajaxWithCredentials: !1,
                            useCanvas: !0
                        }, t), e.TileSource.apply(this, [t])
                    }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, {
                        supports: function(e, t) {
                            return e.type && "image" === e.type
                        },
                        configure: function(e, t) {
                            return e
                        },
                        getImageInfo: function(t) {
                            var i = this._image = new Image,
                                n = this;
                            this.crossOriginPolicy && (i.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (i.useCredentials = this.ajaxWithCredentials), e.addEvent(i, "load", (function() {
                                n.width = Object.prototype.hasOwnProperty.call(i, "naturalWidth") ? i.naturalWidth : i.width, n.height = Object.prototype.hasOwnProperty.call(i, "naturalHeight") ? i.naturalHeight : i.height, n.aspectRatio = n.width / n.height, n.dimensions = new e.Point(n.width, n.height), n._tileWidth = n.width, n._tileHeight = n.height, n.tileOverlap = 0, n.minLevel = 0, n.levels = n._buildLevels(), n.maxLevel = n.levels.length - 1, n.ready = !0, n.raiseEvent("ready", {
                                    tileSource: n
                                })
                            })), e.addEvent(i, "error", (function() {
                                n.raiseEvent("open-failed", {
                                    message: "Error loading image at " + t,
                                    source: t
                                })
                            })), i.src = t
                        },
                        getLevelScale: function(e) {
                            var t = NaN;
                            return e >= this.minLevel && e <= this.maxLevel && (t = this.levels[e].width / this.levels[this.maxLevel].width), t
                        },
                        getNumTiles: function(t) {
                            return this.getLevelScale(t) ? new e.Point(1, 1) : new e.Point(0, 0)
                        },
                        getTileUrl: function(e, t, i) {
                            var n = null;
                            return e >= this.minLevel && e <= this.maxLevel && (n = this.levels[e].url), n
                        },
                        getContext2D: function(e, t, i) {
                            var n = null;
                            return e >= this.minLevel && e <= this.maxLevel && (n = this.levels[e].context2D), n
                        },
                        _buildLevels: function() {
                            var t = [{
                                url: this._image.src,
                                width: Object.prototype.hasOwnProperty.call(this._image, "naturalWidth") ? this._image.naturalWidth : this._image.width,
                                height: Object.prototype.hasOwnProperty.call(this._image, "naturalHeight") ? this._image.naturalHeight : this._image.height
                            }];
                            if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas) return delete this._image, t;
                            var i = Object.prototype.hasOwnProperty.call(this._image, "naturalWidth") ? this._image.naturalWidth : this._image.width,
                                n = Object.prototype.hasOwnProperty.call(this._image, "naturalHeight") ? this._image.naturalHeight : this._image.height,
                                o = document.createElement("canvas"),
                                r = o.getContext("2d");
                            if (o.width = i, o.height = n, r.drawImage(this._image, 0, 0, i, n), t[0].context2D = r, delete this._image, e.isCanvasTainted(o)) return t;
                            for (; i >= 2 && n >= 2;) {
                                i = Math.floor(i / 2), n = Math.floor(n / 2);
                                var s = document.createElement("canvas"),
                                    a = s.getContext("2d");
                                s.width = i, s.height = n, a.drawImage(o, 0, 0, i, n), t.splice(0, 0, {
                                    context2D: a,
                                    width: i,
                                    height: n
                                }), o = s, r = a
                            }
                            return t
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.TileSourceCollection = function(t, i, n, o) {
                        e.console.error("TileSourceCollection is deprecated; use World instead")
                    }
                }(OpenSeadragon),
                function(e) {
                    function t(i) {
                        e.requestAnimationFrame((function() {
                            ! function(i) {
                                var n, o, r;
                                i.shouldFade && (n = e.now(), o = n - i.fadeBeginTime, r = 1 - o / i.fadeLength, r = Math.min(1, r), r = Math.max(0, r), i.imgGroup && e.setElementOpacity(i.imgGroup, r, !0), r > 0 && t(i))
                            }(i)
                        }))
                    }

                    function i(t, i) {
                        t.element.disabled || (i >= e.ButtonState.GROUP && t.currentState == e.ButtonState.REST && (! function(t) {
                            t.shouldFade = !1, t.imgGroup && e.setElementOpacity(t.imgGroup, 1, !0)
                        }(t), t.currentState = e.ButtonState.GROUP), i >= e.ButtonState.HOVER && t.currentState == e.ButtonState.GROUP && (t.imgHover && (t.imgHover.style.visibility = ""), t.currentState = e.ButtonState.HOVER), i >= e.ButtonState.DOWN && t.currentState == e.ButtonState.HOVER && (t.imgDown && (t.imgDown.style.visibility = ""), t.currentState = e.ButtonState.DOWN))
                    }

                    function n(i, n) {
                        i.element.disabled || (n <= e.ButtonState.HOVER && i.currentState == e.ButtonState.DOWN && (i.imgDown && (i.imgDown.style.visibility = "hidden"), i.currentState = e.ButtonState.HOVER), n <= e.ButtonState.GROUP && i.currentState == e.ButtonState.HOVER && (i.imgHover && (i.imgHover.style.visibility = "hidden"), i.currentState = e.ButtonState.GROUP), n <= e.ButtonState.REST && i.currentState == e.ButtonState.GROUP && (! function(i) {
                            i.shouldFade = !0, i.fadeBeginTime = e.now() + i.fadeDelay, window.setTimeout((function() {
                                t(i)
                            }), i.fadeDelay)
                        }(i), i.currentState = e.ButtonState.REST))
                    }
                    e.ButtonState = {
                        REST: 0,
                        GROUP: 1,
                        HOVER: 2,
                        DOWN: 3
                    }, e.Button = function(t) {
                        var o = this;
                        e.EventSource.call(this), e.extend(!0, this, {
                            tooltip: null,
                            srcRest: null,
                            srcGroup: null,
                            srcHover: null,
                            srcDown: null,
                            clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
                            clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
                            fadeDelay: 0,
                            fadeLength: 2e3,
                            onPress: null,
                            onRelease: null,
                            onClick: null,
                            onEnter: null,
                            onExit: null,
                            onFocus: null,
                            onBlur: null
                        }, t), this.element = t.element || e.makeNeutralElement("div"), t.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", e.Browser.vendor == e.BROWSERS.FIREFOX && e.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""), this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = !1, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({
                            element: this.element,
                            clickTimeThreshold: this.clickTimeThreshold,
                            clickDistThreshold: this.clickDistThreshold,
                            enterHandler: function(t) {
                                t.insideElementPressed ? (i(o, e.ButtonState.DOWN), o.raiseEvent("enter", {
                                    originalEvent: t.originalEvent
                                })) : t.buttonDownAny || i(o, e.ButtonState.HOVER)
                            },
                            focusHandler: function(e) {
                                this.enterHandler(e), o.raiseEvent("focus", {
                                    originalEvent: e.originalEvent
                                })
                            },
                            exitHandler: function(t) {
                                n(o, e.ButtonState.GROUP), t.insideElementPressed && o.raiseEvent("exit", {
                                    originalEvent: t.originalEvent
                                })
                            },
                            blurHandler: function(e) {
                                this.exitHandler(e), o.raiseEvent("blur", {
                                    originalEvent: e.originalEvent
                                })
                            },
                            pressHandler: function(t) {
                                i(o, e.ButtonState.DOWN), o.raiseEvent("press", {
                                    originalEvent: t.originalEvent
                                })
                            },
                            releaseHandler: function(t) {
                                t.insideElementPressed && t.insideElementReleased ? (n(o, e.ButtonState.HOVER), o.raiseEvent("release", {
                                    originalEvent: t.originalEvent
                                })) : t.insideElementPressed ? n(o, e.ButtonState.GROUP) : i(o, e.ButtonState.HOVER)
                            },
                            clickHandler: function(e) {
                                e.quick && o.raiseEvent("click", {
                                    originalEvent: e.originalEvent
                                })
                            },
                            keyHandler: function(e) {
                                return 13 !== e.keyCode || (o.raiseEvent("click", {
                                    originalEvent: e.originalEvent
                                }), o.raiseEvent("release", {
                                    originalEvent: e.originalEvent
                                }), !1)
                            }
                        }), n(this, e.ButtonState.REST)
                    }, e.extend(e.Button.prototype, e.EventSource.prototype, {
                        notifyGroupEnter: function() {
                            i(this, e.ButtonState.GROUP)
                        },
                        notifyGroupExit: function() {
                            n(this, e.ButtonState.REST)
                        },
                        disable: function() {
                            this.notifyGroupExit(), this.element.disabled = !0, e.setElementOpacity(this.element, .2, !0)
                        },
                        enable: function() {
                            this.element.disabled = !1, e.setElementOpacity(this.element, 1, !0), this.notifyGroupEnter()
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.ButtonGroup = function(t) {
                        e.extend(!0, this, {
                            buttons: [],
                            clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
                            clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
                            labelText: ""
                        }, t);
                        var i, n = this.buttons.concat([]),
                            o = this;
                        if (this.element = t.element || e.makeNeutralElement("div"), !t.group)
                            for (this.element.style.display = "inline-block", i = 0; i < n.length; i++) this.element.appendChild(n[i].element);
                        e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({
                            element: this.element,
                            clickTimeThreshold: this.clickTimeThreshold,
                            clickDistThreshold: this.clickDistThreshold,
                            enterHandler: function(e) {
                                var t;
                                for (t = 0; t < o.buttons.length; t++) o.buttons[t].notifyGroupEnter()
                            },
                            exitHandler: function(e) {
                                var t;
                                if (!e.insideElementPressed)
                                    for (t = 0; t < o.buttons.length; t++) o.buttons[t].notifyGroupExit()
                            }
                        })
                    }, e.ButtonGroup.prototype = {
                        emulateEnter: function() {
                            this.tracker.enterHandler({
                                eventSource: this.tracker
                            })
                        },
                        emulateExit: function() {
                            this.tracker.exitHandler({
                                eventSource: this.tracker
                            })
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.Rect = function(t, i, n, o, r) {
                        var s, a;
                        this.x = "number" === typeof t ? t : 0, this.y = "number" === typeof i ? i : 0, this.width = "number" === typeof n ? n : 0, this.height = "number" === typeof o ? o : 0, this.degrees = "number" === typeof r ? r : 0, this.degrees = e.positiveModulo(this.degrees, 360), this.degrees >= 270 ? (s = this.getTopRight(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 270) : this.degrees >= 180 ? (s = this.getBottomRight(), this.x = s.x, this.y = s.y, this.degrees -= 180) : this.degrees >= 90 && (s = this.getBottomLeft(), this.x = s.x, this.y = s.y, a = this.height, this.height = this.width, this.width = a, this.degrees -= 90)
                    }, e.Rect.fromSummits = function(t, i, n) {
                        var o = t.distanceTo(i),
                            r = t.distanceTo(n),
                            s = i.minus(t),
                            a = Math.atan(s.y / s.x);
                        return s.x < 0 ? a += Math.PI : s.y < 0 && (a += 2 * Math.PI), new e.Rect(t.x, t.y, o, r, a / Math.PI * 180)
                    }, e.Rect.prototype = {
                        clone: function() {
                            return new e.Rect(this.x, this.y, this.width, this.height, this.degrees)
                        },
                        getAspectRatio: function() {
                            return this.width / this.height
                        },
                        getTopLeft: function() {
                            return new e.Point(this.x, this.y)
                        },
                        getBottomRight: function() {
                            return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft())
                        },
                        getTopRight: function() {
                            return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft())
                        },
                        getBottomLeft: function() {
                            return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft())
                        },
                        getCenter: function() {
                            return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft())
                        },
                        getSize: function() {
                            return new e.Point(this.width, this.height)
                        },
                        equals: function(t) {
                            return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees
                        },
                        times: function(t) {
                            return new e.Rect(this.x * t, this.y * t, this.width * t, this.height * t, this.degrees)
                        },
                        translate: function(t) {
                            return new e.Rect(this.x + t.x, this.y + t.y, this.width, this.height, this.degrees)
                        },
                        union: function(t) {
                            var i = this.getBoundingBox(),
                                n = t.getBoundingBox(),
                                o = Math.min(i.x, n.x),
                                r = Math.min(i.y, n.y),
                                s = Math.max(i.x + i.width, n.x + n.width),
                                a = Math.max(i.y + i.height, n.y + n.height);
                            return new e.Rect(o, r, s - o, a - r)
                        },
                        intersection: function(t) {
                            var i = 1e-10,
                                n = [],
                                o = this.getTopLeft();
                            t.containsPoint(o, i) && n.push(o);
                            var r = this.getTopRight();
                            t.containsPoint(r, i) && n.push(r);
                            var s = this.getBottomLeft();
                            t.containsPoint(s, i) && n.push(s);
                            var a = this.getBottomRight();
                            t.containsPoint(a, i) && n.push(a);
                            var l = t.getTopLeft();
                            this.containsPoint(l, i) && n.push(l);
                            var h = t.getTopRight();
                            this.containsPoint(h, i) && n.push(h);
                            var c = t.getBottomLeft();
                            this.containsPoint(c, i) && n.push(c);
                            var u = t.getBottomRight();
                            this.containsPoint(u, i) && n.push(u);
                            for (var d = this._getSegments(), p = t._getSegments(), g = 0; g < d.length; g++)
                                for (var m = d[g], v = 0; v < p.length; v++) {
                                    var f = p[v],
                                        w = y(m[0], m[1], f[0], f[1]);
                                    w && n.push(w)
                                }

                            function y(t, n, o, r) {
                                var s = n.minus(t),
                                    a = r.minus(o),
                                    l = -a.x * s.y + s.x * a.y;
                                if (0 === l) return null;
                                var h = (s.x * (t.y - o.y) - s.y * (t.x - o.x)) / l,
                                    c = (a.x * (t.y - o.y) - a.y * (t.x - o.x)) / l;
                                return -i <= h && h <= 1 - i && -i <= c && c <= 1 - i ? new e.Point(t.x + c * s.x, t.y + c * s.y) : null
                            }
                            if (0 === n.length) return null;
                            for (var T = n[0].x, x = n[0].x, S = n[0].y, _ = n[0].y, E = 1; E < n.length; E++) {
                                var P = n[E];
                                P.x < T && (T = P.x), P.x > x && (x = P.x), P.y < S && (S = P.y), P.y > _ && (_ = P.y)
                            }
                            return new e.Rect(T, S, x - T, _ - S)
                        },
                        _getSegments: function() {
                            var e = this.getTopLeft(),
                                t = this.getTopRight(),
                                i = this.getBottomLeft(),
                                n = this.getBottomRight();
                            return [
                                [e, t],
                                [t, n],
                                [n, i],
                                [i, e]
                            ]
                        },
                        rotate: function(t, i) {
                            if (0 === (t = e.positiveModulo(t, 360))) return this.clone();
                            i = i || this.getCenter();
                            var n = this.getTopLeft().rotate(t, i),
                                o = this.getTopRight().rotate(t, i).minus(n);
                            o = o.apply((function(e) {
                                return Math.abs(e) < 1e-15 ? 0 : e
                            }));
                            var r = Math.atan(o.y / o.x);
                            return o.x < 0 ? r += Math.PI : o.y < 0 && (r += 2 * Math.PI), new e.Rect(n.x, n.y, this.width, this.height, r / Math.PI * 180)
                        },
                        getBoundingBox: function() {
                            if (0 === this.degrees) return this.clone();
                            var t = this.getTopLeft(),
                                i = this.getTopRight(),
                                n = this.getBottomLeft(),
                                o = this.getBottomRight(),
                                r = Math.min(t.x, i.x, n.x, o.x),
                                s = Math.max(t.x, i.x, n.x, o.x),
                                a = Math.min(t.y, i.y, n.y, o.y),
                                l = Math.max(t.y, i.y, n.y, o.y);
                            return new e.Rect(r, a, s - r, l - a)
                        },
                        getIntegerBoundingBox: function() {
                            var t = this.getBoundingBox(),
                                i = Math.floor(t.x),
                                n = Math.floor(t.y),
                                o = Math.ceil(t.width + t.x - i),
                                r = Math.ceil(t.height + t.y - n);
                            return new e.Rect(i, n, o, r)
                        },
                        containsPoint: function(e, t) {
                            t = t || 0;
                            var i = this.getTopLeft(),
                                n = this.getTopRight(),
                                o = this.getBottomLeft(),
                                r = n.minus(i),
                                s = o.minus(i);
                            return (e.x - i.x) * r.x + (e.y - i.y) * r.y >= -t && (e.x - n.x) * r.x + (e.y - n.y) * r.y <= t && (e.x - i.x) * s.x + (e.y - i.y) * s.y >= -t && (e.x - o.x) * s.x + (e.y - o.y) * s.y <= t
                        },
                        toString: function() {
                            return "[" + Math.round(100 * this.x) / 100 + ", " + Math.round(100 * this.y) / 100 + ", " + Math.round(100 * this.width) / 100 + "x" + Math.round(100 * this.height) / 100 + ", " + Math.round(100 * this.degrees) / 100 + "deg]"
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    var t = {};

                    function i(t) {
                        var i = Number(this.element.style.marginLeft.replace("px", "")),
                            n = Number(this.element.style.marginTop.replace("px", "")),
                            r = Number(this.element.style.width.replace("px", "")),
                            s = Number(this.element.style.height.replace("px", "")),
                            a = e.getElementSize(this.viewer.canvas);
                        return this.dragging = !0, this.element && ("horizontal" == this.scroll ? -t.delta.x > 0 ? i > -(r - a.x) && (this.element.style.marginLeft = i + 2 * t.delta.x + "px", o(this, a.x, i + 2 * t.delta.x)) : -t.delta.x < 0 && i < 0 && (this.element.style.marginLeft = i + 2 * t.delta.x + "px", o(this, a.x, i + 2 * t.delta.x)) : -t.delta.y > 0 ? n > -(s - a.y) && (this.element.style.marginTop = n + 2 * t.delta.y + "px", o(this, a.y, n + 2 * t.delta.y)) : -t.delta.y < 0 && n < 0 && (this.element.style.marginTop = n + 2 * t.delta.y + "px", o(this, a.y, n + 2 * t.delta.y))), !1
                    }

                    function n(t) {
                        var i = Number(this.element.style.marginLeft.replace("px", "")),
                            n = Number(this.element.style.marginTop.replace("px", "")),
                            r = Number(this.element.style.width.replace("px", "")),
                            s = Number(this.element.style.height.replace("px", "")),
                            a = e.getElementSize(this.viewer.canvas);
                        return this.element && ("horizontal" == this.scroll ? t.scroll > 0 ? i > -(r - a.x) && (this.element.style.marginLeft = i - 60 * t.scroll + "px", o(this, a.x, i - 60 * t.scroll)) : t.scroll < 0 && i < 0 && (this.element.style.marginLeft = i - 60 * t.scroll + "px", o(this, a.x, i - 60 * t.scroll)) : t.scroll < 0 ? n > a.y - s && (this.element.style.marginTop = n + 60 * t.scroll + "px", o(this, a.y, n + 60 * t.scroll)) : t.scroll > 0 && n < 0 && (this.element.style.marginTop = n + 60 * t.scroll + "px", o(this, a.y, n + 60 * t.scroll))), !1
                    }

                    function o(t, i, n) {
                        var o, r, s, a, l, h, c;
                        for (o = "horizontal" == t.scroll ? t.panelWidth : t.panelHeight, r = Math.ceil(i / o) + 5, h = r = (r = (s = Math.ceil((Math.abs(n) + i) / o) + 1) - r) < 0 ? 0 : r; h < s && h < t.panels.length; h++)
                            if (!(c = t.panels[h]).activePanel) {
                                var u, d = t.viewer.tileSources[h];
                                u = d.referenceStripThumbnailUrl ? {
                                    type: "image",
                                    url: d.referenceStripThumbnailUrl
                                } : d, (a = new e.Viewer({
                                    id: c.id,
                                    tileSources: [u],
                                    element: c,
                                    navigatorSizeRatio: t.sizeRatio,
                                    showNavigator: !1,
                                    mouseNavEnabled: !1,
                                    showNavigationControl: !1,
                                    showSequenceControl: !1,
                                    immediateRender: !0,
                                    blendTime: 0,
                                    animationTime: 0,
                                    loadTilesWithAjax: t.viewer.loadTilesWithAjax,
                                    ajaxHeaders: t.viewer.ajaxHeaders,
                                    useCanvas: t.useCanvas
                                })).displayRegion = e.makeNeutralElement("div"), a.displayRegion.id = c.id + "-displayregion", a.displayRegion.className = "displayregion", (l = a.displayRegion.style).position = "relative", l.top = "0px", l.left = "0px", l.fontSize = "0px", l.overflow = "hidden", l.float = "left", l.cssFloat = "left", l.styleFloat = "left", l.zIndex = 999999999, l.cursor = "default", l.width = t.panelWidth - 4 + "px", l.height = t.panelHeight - 4 + "px", a.displayRegion.innerTracker = new e.MouseTracker({
                                    element: a.displayRegion,
                                    startDisabled: !0
                                }), c.getElementsByTagName("div")[0].appendChild(a.displayRegion), t.miniViewers[c.id] = a, c.activePanel = !0
                            }
                    }

                    function r(e) {
                        var t = e.eventSource.element;
                        return "horizontal" == this.scroll ? t.style.marginBottom = "0px" : t.style.marginLeft = "0px", !1
                    }

                    function s(t) {
                        var i = t.eventSource.element;
                        return "horizontal" == this.scroll ? i.style.marginBottom = "-" + e.getElementSize(i).y / 2 + "px" : i.style.marginLeft = "-" + e.getElementSize(i).x / 2 + "px", !1
                    }

                    function a(e) {
                        if (e.preventDefaultAction || e.ctrl || e.alt || e.meta) return !0;
                        switch (e.keyCode) {
                            case 38:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: 1,
                                    shift: null
                                }), !1;
                            case 40:
                            case 37:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: -1,
                                    shift: null
                                }), !1;
                            case 39:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: 1,
                                    shift: null
                                }), !1;
                            default:
                                return !0
                        }
                    }

                    function l(e) {
                        if (e.preventDefaultAction || e.ctrl || e.alt || e.meta) return !0;
                        switch (e.keyCode) {
                            case 61:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: 1,
                                    shift: null
                                }), !1;
                            case 45:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: -1,
                                    shift: null
                                }), !1;
                            case 48:
                            case 119:
                            case 87:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: 1,
                                    shift: null
                                }), !1;
                            case 115:
                            case 83:
                            case 97:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: -1,
                                    shift: null
                                }), !1;
                            case 100:
                                return n.call(this, {
                                    eventSource: this.tracker,
                                    position: null,
                                    scroll: 1,
                                    shift: null
                                }), !1;
                            default:
                                return !0
                        }
                    }
                    e.ReferenceStrip = function(h) {
                        var c, u, d, p = h.viewer,
                            g = e.getElementSize(p.element);
                        for (h.id || (h.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = h.id, this.element.className = "referencestrip"), h = e.extend(!0, {
                                sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
                                position: e.DEFAULT_SETTINGS.referenceStripPosition,
                                scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
                                clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
                            }, h, {
                                element: this.element,
                                showNavigator: !1,
                                mouseNavEnabled: !1,
                                showNavigationControl: !1,
                                showSequenceControl: !1
                            }), e.extend(this, h), t[this.id] = {
                                animating: !1
                            }, this.minPixelRatio = this.viewer.minPixelRatio, (u = this.element.style).marginTop = "0px", u.marginRight = "0px", u.marginBottom = "0px", u.marginLeft = "0px", u.left = "0px", u.bottom = "0px", u.border = "0px", u.background = "#000", u.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, .8), this.viewer = p, this.innerTracker = new e.MouseTracker({
                                element: this.element,
                                dragHandler: e.delegate(this, i),
                                scrollHandler: e.delegate(this, n),
                                enterHandler: e.delegate(this, r),
                                exitHandler: e.delegate(this, s),
                                keyDownHandler: e.delegate(this, a),
                                keyHandler: e.delegate(this, l)
                            }), h.width && h.height ? (this.element.style.width = h.width + "px", this.element.style.height = h.height + "px", p.addControl(this.element, {
                                anchor: e.ControlAnchor.BOTTOM_LEFT
                            })) : "horizontal" == h.scroll ? (this.element.style.width = g.x * h.sizeRatio * p.tileSources.length + 12 * p.tileSources.length + "px", this.element.style.height = g.y * h.sizeRatio + "px", p.addControl(this.element, {
                                anchor: e.ControlAnchor.BOTTOM_LEFT
                            })) : (this.element.style.height = g.y * h.sizeRatio * p.tileSources.length + 12 * p.tileSources.length + "px", this.element.style.width = g.x * h.sizeRatio + "px", p.addControl(this.element, {
                                anchor: e.ControlAnchor.TOP_LEFT
                            })), this.panelWidth = g.x * this.sizeRatio + 8, this.panelHeight = g.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, d = 0; d < p.tileSources.length; d++)(c = e.makeNeutralElement("div")).id = this.element.id + "-" + d, c.style.width = this.panelWidth + "px", c.style.height = this.panelHeight + "px", c.style.display = "inline", c.style.float = "left", c.style.cssFloat = "left", c.style.styleFloat = "left", c.style.padding = "2px", e.setElementTouchActionNone(c), c.innerTracker = new e.MouseTracker({
                            element: c,
                            clickTimeThreshold: this.clickTimeThreshold,
                            clickDistThreshold: this.clickDistThreshold,
                            pressHandler: function(t) {
                                t.eventSource.dragging = e.now()
                            },
                            releaseHandler: function(t) {
                                var i = t.eventSource,
                                    n = i.element.id,
                                    o = Number(n.split("-")[2]),
                                    r = e.now();
                                t.insideElementPressed && t.insideElementReleased && i.dragging && r - i.dragging < i.clickTimeThreshold && (i.dragging = null, p.goToPage(o))
                            }
                        }), this.element.appendChild(c), c.activePanel = !1, this.panels.push(c);
                        o(this, "vertical" == this.scroll ? g.y : g.x, 0), this.setFocus(0)
                    }, e.extend(e.ReferenceStrip.prototype, e.EventSource.prototype, e.Viewer.prototype, {
                        setFocus: function(t) {
                            var i, n = this.element.querySelector("#" + this.element.id + "-" + t),
                                s = e.getElementSize(this.viewer.canvas),
                                a = Number(this.element.style.width.replace("px", "")),
                                l = Number(this.element.style.height.replace("px", "")),
                                h = -Number(this.element.style.marginLeft.replace("px", "")),
                                c = -Number(this.element.style.marginTop.replace("px", ""));
                            this.currentSelected !== n && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = n, this.currentSelected.style.background = "#999", "horizontal" == this.scroll ? (i = Number(t) * (this.panelWidth + 3)) > h + s.x - this.panelWidth ? (i = Math.min(i, a - s.x), this.element.style.marginLeft = -i + "px", o(this, s.x, -i)) : i < h && (i = Math.max(0, i - s.x / 2), this.element.style.marginLeft = -i + "px", o(this, s.x, -i)) : (i = Number(t) * (this.panelHeight + 3)) > c + s.y - this.panelHeight ? (i = Math.min(i, l - s.y), this.element.style.marginTop = -i + "px", o(this, s.y, -i)) : i < c && (i = Math.max(0, i - s.y / 2), this.element.style.marginTop = -i + "px", o(this, s.y, -i)), this.currentPage = t, r.call(this, {
                                eventSource: this.innerTracker
                            }))
                        },
                        update: function() {
                            return !!t[this.id].animating && (e.console.log("image reference strip update"), !0)
                        },
                        destroy: function() {
                            if (this.miniViewers)
                                for (var e in this.miniViewers) this.miniViewers[e].destroy();
                            this.element && this.element.parentNode.removeChild(this.element)
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    e.DisplayRect = function(t, i, n, o, r, s) {
                        e.Rect.apply(this, [t, i, n, o]), this.minLevel = r, this.maxLevel = s
                    }, e.extend(e.DisplayRect.prototype, e.Rect.prototype)
                }(OpenSeadragon),
                function(e) {
                    e.Spring = function(t) {
                        var i = arguments;
                        "object" != typeof t && (t = {
                            initial: i.length && "number" == typeof i[0] ? i[0] : void 0,
                            springStiffness: i.length > 1 ? i[1].springStiffness : 5,
                            animationTime: i.length > 1 ? i[1].animationTime : 1.5
                        }), e.console.assert("number" === typeof t.springStiffness && 0 !== t.springStiffness, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert("number" === typeof t.animationTime && t.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), t.exponential && (this._exponential = !0, delete t.exponential), e.extend(!0, this, t), this.current = {
                            value: "number" == typeof this.initial ? this.initial : this._exponential ? 0 : 1,
                            time: e.now()
                        }, e.console.assert(!this._exponential || 0 !== this.current.value, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = {
                            value: this.current.value,
                            time: this.current.time
                        }, this.target = {
                            value: this.current.value,
                            time: this.current.time
                        }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
                    }, e.Spring.prototype = {
                        resetTo: function(t) {
                            e.console.assert(!this._exponential || 0 !== t, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = t, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
                        },
                        springTo: function(t) {
                            e.console.assert(!this._exponential || 0 !== t, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = t, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value))
                        },
                        shiftBy: function(t) {
                            this.start.value += t, this.target.value += t, this._exponential && (e.console.assert(0 !== this.target.value && 0 !== this.start.value, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value))
                        },
                        setExponential: function(t) {
                            this._exponential = t, this._exponential && (e.console.assert(0 !== this.current.value && 0 !== this.target.value && 0 !== this.start.value, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value))
                        },
                        update: function() {
                            var t, i;
                            this.current.time = e.now(), this._exponential ? (t = this.start._logValue, i = this.target._logValue) : (t = this.start.value, i = this.target.value);
                            var n, o, r = this.current.time >= this.target.time ? i : t + (i - t) * (n = this.springStiffness, o = (this.current.time - this.start.time) / (this.target.time - this.start.time), (1 - Math.exp(n * -o)) / (1 - Math.exp(-n))),
                                s = this.current.value;
                            return this._exponential ? this.current.value = Math.exp(r) : this.current.value = r, s != this.current.value
                        },
                        isAtTargetValue: function() {
                            return this.current.value === this.target.value
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    function t(t) {
                        e.extend(!0, this, {
                            timeout: e.DEFAULT_SETTINGS.timeout,
                            jobId: null
                        }, t), this.image = null
                    }
                    t.prototype = {
                        errorMsg: null,
                        start: function() {
                            var t = this,
                                i = this.abort;
                            this.image = new Image, this.image.onload = function() {
                                t.finish(!0)
                            }, this.image.onabort = this.image.onerror = function() {
                                t.errorMsg = "Image load aborted", t.finish(!1)
                            }, this.jobId = window.setTimeout((function() {
                                t.errorMsg = "Image load exceeded timeout (" + t.timeout + " ms)", t.finish(!1)
                            }), this.timeout), this.loadWithAjax ? (this.request = e.makeAjaxRequest({
                                url: this.src,
                                withCredentials: this.ajaxWithCredentials,
                                headers: this.ajaxHeaders,
                                responseType: "arraybuffer",
                                success: function(e) {
                                    var i;
                                    try {
                                        i = new window.Blob([e.response])
                                    } catch (s) {
                                        var n = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                                        if ("TypeError" === s.name && n) {
                                            var o = new n;
                                            o.append(e.response), i = o.getBlob()
                                        }
                                    }
                                    0 === i.size && (t.errorMsg = "Empty image response.", t.finish(!1));
                                    var r = (window.URL || window.webkitURL).createObjectURL(i);
                                    t.image.src = r
                                },
                                error: function(e) {
                                    t.errorMsg = "Image load aborted - XHR error", t.finish(!1)
                                }
                            }), this.abort = function() {
                                t.request.abort(), "function" === typeof i && i()
                            }) : (!1 !== this.crossOriginPolicy && (this.image.crossOrigin = this.crossOriginPolicy), this.image.src = this.src)
                        },
                        finish: function(e) {
                            this.image.onload = this.image.onerror = this.image.onabort = null, e || (this.image = null), this.jobId && window.clearTimeout(this.jobId), this.callback(this)
                        }
                    }, e.ImageLoader = function(t) {
                        e.extend(!0, this, {
                            jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
                            timeout: e.DEFAULT_SETTINGS.timeout,
                            jobQueue: [],
                            jobsInProgress: 0
                        }, t)
                    }, e.ImageLoader.prototype = {
                        addJob: function(e) {
                            var i = this,
                                n = new t({
                                    src: e.src,
                                    loadWithAjax: e.loadWithAjax,
                                    ajaxHeaders: e.loadWithAjax ? e.ajaxHeaders : null,
                                    crossOriginPolicy: e.crossOriginPolicy,
                                    ajaxWithCredentials: e.ajaxWithCredentials,
                                    callback: function(t) {
                                        ! function(e, t, i) {
                                            e.jobsInProgress--, (!e.jobLimit || e.jobsInProgress < e.jobLimit) && e.jobQueue.length > 0 && (e.jobQueue.shift().start(), e.jobsInProgress++);
                                            i(t.image, t.errorMsg, t.request)
                                        }(i, t, e.callback)
                                    },
                                    abort: e.abort,
                                    timeout: this.timeout
                                });
                            !this.jobLimit || this.jobsInProgress < this.jobLimit ? (n.start(), this.jobsInProgress++) : this.jobQueue.push(n)
                        },
                        clear: function() {
                            for (var e = 0; e < this.jobQueue.length; e++) {
                                var t = this.jobQueue[e];
                                "function" === typeof t.abort && t.abort()
                            }
                            this.jobQueue = []
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.Tile = function(e, t, i, n, o, r, s, a, l, h) {
                        this.level = e, this.x = t, this.y = i, this.bounds = n, this.sourceBounds = h, this.exists = o, this.url = r, this.context2D = s, this.loadWithAjax = a, this.ajaxHeaders = l, this.ajaxHeaders ? this.cacheKey = this.url + "+" + JSON.stringify(this.ajaxHeaders) : this.cacheKey = this.url, this.loaded = !1, this.loading = !1, this.element = null, this.imgElement = null, this.image = null, this.style = null, this.position = null, this.size = null, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.beingDrawn = !1, this.lastTouchTime = 0, this.isRightMost = !1, this.isBottomMost = !1
                    }, e.Tile.prototype = {
                        toString: function() {
                            return this.level + "/" + this.x + "_" + this.y
                        },
                        _hasTransparencyChannel: function() {
                            return !!this.context2D || this.url.match(".png")
                        },
                        drawHTML: function(t) {
                            this.cacheImageRecord ? this.loaded ? (this.element || (this.element = e.makeNeutralElement("div"), this.imgElement = this.cacheImageRecord.getImage().cloneNode(), this.imgElement.style.msInterpolationMode = "nearest-neighbor", this.imgElement.style.width = "100%", this.imgElement.style.height = "100%", this.style = this.element.style, this.style.position = "absolute"), this.element.parentNode != t && t.appendChild(this.element), this.imgElement.parentNode != this.element && this.element.appendChild(this.imgElement), this.style.top = this.position.y + "px", this.style.left = this.position.x + "px", this.style.height = this.size.y + "px", this.style.width = this.size.x + "px", e.setElementOpacity(this.element, this.opacity)) : e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString()) : e.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached", this.toString())
                        },
                        drawCanvas: function(t, i, n, o) {
                            var r, s, a, l = this.position.times(e.pixelDensityRatio),
                                h = this.size.times(e.pixelDensityRatio);
                            this.context2D || this.cacheImageRecord ? (r = this.context2D || this.cacheImageRecord.getRenderedContext(), this.loaded && r ? (t.save(), t.globalAlpha = this.opacity, "number" === typeof n && 1 !== n && (l = l.times(n), h = h.times(n)), o instanceof e.Point && (l = l.plus(o)), 1 === t.globalAlpha && this._hasTransparencyChannel() && t.clearRect(l.x, l.y, h.x, h.y), i({
                                context: t,
                                tile: this,
                                rendered: r
                            }), this.sourceBounds ? (s = Math.min(this.sourceBounds.width, r.canvas.width), a = Math.min(this.sourceBounds.height, r.canvas.height)) : (s = r.canvas.width, a = r.canvas.height), t.drawImage(r.canvas, 0, 0, s, a, l.x, l.y, h.x, h.y), t.restore()) : e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString())) : e.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached", this.toString())
                        },
                        getScaleForEdgeSmoothing: function() {
                            var t;
                            if (this.cacheImageRecord) t = this.cacheImageRecord.getRenderedContext();
                            else {
                                if (!this.context2D) return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
                                t = this.context2D
                            }
                            return t.canvas.width / (this.size.x * e.pixelDensityRatio)
                        },
                        getTranslationForEdgeSmoothing: function(t, i, n) {
                            var o = Math.max(1, Math.ceil((n.x - i.x) / 2)),
                                r = Math.max(1, Math.ceil((n.y - i.y) / 2));
                            return new e.Point(o, r).minus(this.position.times(e.pixelDensityRatio).times(t || 1).apply((function(e) {
                                return e % 1
                            })))
                        },
                        unload: function() {
                            this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = !1, this.loading = !1
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({
                        NO_ROTATION: 1,
                        EXACT: 2,
                        BOUNDING_BOX: 3
                    }), e.Overlay = function(t, i, n) {
                        var o;
                        o = e.isPlainObject(t) ? t : {
                            element: t,
                            location: i,
                            placement: n
                        }, this.element = o.element, this.style = o.element.style, this._init(o)
                    }, e.Overlay.prototype = {
                        _init: function(t) {
                            this.location = t.location, this.placement = void 0 === t.placement ? e.Placement.TOP_LEFT : t.placement, this.onDraw = t.onDraw, this.checkResize = void 0 === t.checkResize || t.checkResize, this.width = void 0 === t.width ? null : t.width, this.height = void 0 === t.height ? null : t.height, this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = null !== this.width && null !== this.height, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location
                        },
                        adjust: function(t, i) {
                            var n = e.Placement.properties[this.placement];
                            n && (n.isHorizontallyCentered ? t.x -= i.x / 2 : n.isRight && (t.x -= i.x), n.isVerticallyCentered ? t.y -= i.y / 2 : n.isBottom && (t.y -= i.y))
                        },
                        destroy: function() {
                            var t = this.element,
                                i = this.style;
                            t.parentNode && (t.parentNode.removeChild(t), t.prevElementParent && (i.display = "none", document.body.appendChild(t))), this.onDraw = null, i.top = "", i.left = "", i.position = "", null !== this.width && (i.width = ""), null !== this.height && (i.height = "");
                            var n = e.getCssPropertyWithVendorPrefix("transformOrigin"),
                                o = e.getCssPropertyWithVendorPrefix("transform");
                            n && o && (i[n] = "", i[o] = "")
                        },
                        drawHTML: function(t, i) {
                            var n = this.element;
                            n.parentNode !== t && (n.prevElementParent = n.parentNode, n.prevNextSibling = n.nextSibling, t.appendChild(n), this.style.position = "absolute", this.size = e.getElementSize(n));
                            var o = this._getOverlayPositionAndSize(i),
                                r = o.position,
                                s = this.size = o.size,
                                a = o.rotate;
                            if (this.onDraw) this.onDraw(r, s, this.element);
                            else {
                                var l = this.style;
                                l.left = r.x + "px", l.top = r.y + "px", null !== this.width && (l.width = s.x + "px"), null !== this.height && (l.height = s.y + "px");
                                var h = e.getCssPropertyWithVendorPrefix("transformOrigin"),
                                    c = e.getCssPropertyWithVendorPrefix("transform");
                                h && c && (a ? (l[h] = this._getTransformOrigin(), l[c] = "rotate(" + a + "deg)") : (l[h] = "", l[c] = "")), "none" !== l.display && (l.display = "block")
                            }
                        },
                        _getOverlayPositionAndSize: function(t) {
                            var i = t.pixelFromPoint(this.location, !0),
                                n = this._getSizeInPixels(t);
                            this.adjust(i, n);
                            var o = 0;
                            if (t.degrees && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
                                if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && null !== this.width && null !== this.height) {
                                    var r = new e.Rect(i.x, i.y, n.x, n.y),
                                        s = this._getBoundingBox(r, t.degrees);
                                    i = s.getTopLeft(), n = s.getSize()
                                } else o = t.degrees;
                            return {
                                position: i,
                                size: n,
                                rotate: o
                            }
                        },
                        _getSizeInPixels: function(t) {
                            var i = this.size.x,
                                n = this.size.y;
                            if (null !== this.width || null !== this.height) {
                                var o = t.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), !0);
                                null !== this.width && (i = o.x), null !== this.height && (n = o.y)
                            }
                            if (this.checkResize && (null === this.width || null === this.height)) {
                                var r = this.size = e.getElementSize(this.element);
                                null === this.width && (i = r.x), null === this.height && (n = r.y)
                            }
                            return new e.Point(i, n)
                        },
                        _getBoundingBox: function(e, t) {
                            var i = this._getPlacementPoint(e);
                            return e.rotate(t, i).getBoundingBox()
                        },
                        _getPlacementPoint: function(t) {
                            var i = new e.Point(t.x, t.y),
                                n = e.Placement.properties[this.placement];
                            return n && (n.isHorizontallyCentered ? i.x += t.width / 2 : n.isRight && (i.x += t.width), n.isVerticallyCentered ? i.y += t.height / 2 : n.isBottom && (i.y += t.height)), i
                        },
                        _getTransformOrigin: function() {
                            var t = "",
                                i = e.Placement.properties[this.placement];
                            return i ? (i.isLeft ? t = "left" : i.isRight && (t = "right"), i.isTop ? t += " top" : i.isBottom && (t += " bottom"), t) : t
                        },
                        update: function(t, i) {
                            var n = e.isPlainObject(t) ? t : {
                                location: t,
                                placement: i
                            };
                            this._init({
                                location: n.location || this.location,
                                placement: void 0 !== n.placement ? n.placement : this.placement,
                                onDraw: n.onDraw || this.onDraw,
                                checkResize: n.checkResize || this.checkResize,
                                width: void 0 !== n.width ? n.width : this.width,
                                height: void 0 !== n.height ? n.height : this.height,
                                rotationMode: n.rotationMode || this.rotationMode
                            })
                        },
                        getBounds: function(t) {
                            e.console.assert(t, "A viewport must now be passed to Overlay.getBounds.");
                            var i = this.width,
                                n = this.height;
                            if (null === i || null === n) {
                                var o = t.deltaPointsFromPixelsNoRotate(this.size, !0);
                                null === i && (i = o.x), null === n && (n = o.y)
                            }
                            var r = this.location.clone();
                            return this.adjust(r, new e.Point(i, n)), this._adjustBoundsForRotation(t, new e.Rect(r.x, r.y, i, n))
                        },
                        _adjustBoundsForRotation: function(t, i) {
                            if (!t || 0 === t.degrees || this.rotationMode === e.OverlayRotationMode.EXACT) return i;
                            if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
                                if (null === this.width || null === this.height) return i;
                                var n = this._getOverlayPositionAndSize(t);
                                return t.viewerElementToViewportRectangle(new e.Rect(n.position.x, n.position.y, n.size.x, n.size.y))
                            }
                            return i.rotate(-t.degrees, this._getPlacementPoint(i))
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.Drawer = function(t) {
                        e.console.assert(t.viewer, "[Drawer] options.viewer is required");
                        var i = arguments;
                        if (e.isPlainObject(t) || (t = {
                                source: i[0],
                                viewport: i[1],
                                element: i[2]
                            }), e.console.assert(t.viewport, "[Drawer] options.viewport is required"), e.console.assert(t.element, "[Drawer] options.element is required"), t.source && e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"), this.viewer = t.viewer, this.viewport = t.viewport, this.debugGridColor = "string" === typeof t.debugGridColor ? [t.debugGridColor] : t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, t.opacity && e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"), this.useCanvas = e.supportsCanvas && (!this.viewer || this.viewer.useCanvas), this.container = e.getElement(t.element), this.canvas = e.makeNeutralElement(this.useCanvas ? "canvas" : "div"), this.context = this.useCanvas ? this.canvas.getContext("2d") : null, this.sketchCanvas = null, this.sketchContext = null, this.element = this.container, this.container.dir = "ltr", this.useCanvas) {
                            var n = this._calculateCanvasSize();
                            this.canvas.width = n.x, this.canvas.height = n.y
                        }
                        this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", e.setElementOpacity(this.canvas, this.opacity, !0), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._imageSmoothingEnabled = !0
                    }, e.Drawer.prototype = {
                        addOverlay: function(t, i, n, o) {
                            return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."), this.viewer.addOverlay(t, i, n, o), this
                        },
                        updateOverlay: function(t, i, n) {
                            return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."), this.viewer.updateOverlay(t, i, n), this
                        },
                        removeOverlay: function(t) {
                            return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."), this.viewer.removeOverlay(t), this
                        },
                        clearOverlays: function() {
                            return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."), this.viewer.clearOverlays(), this
                        },
                        viewportCoordToDrawerCoord: function(t) {
                            var i = this.viewport.pixelFromPointNoRotate(t, !0);
                            return new e.Point(i.x * e.pixelDensityRatio, i.y * e.pixelDensityRatio)
                        },
                        clipWithPolygons: function(e, t) {
                            if (this.useCanvas) {
                                var i = this._getContext(t);
                                i.beginPath(), e.forEach((function(e) {
                                    e.forEach((function(e, t) {
                                        i[0 === t ? "moveTo" : "lineTo"](e.x, e.y)
                                    }))
                                })), i.clip()
                            }
                        },
                        setOpacity: function(t) {
                            e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
                            for (var i = this.viewer.world, n = 0; n < i.getItemCount(); n++) i.getItemAt(n).setOpacity(t);
                            return this
                        },
                        getOpacity: function() {
                            e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
                            for (var t = this.viewer.world, i = 0, n = 0; n < t.getItemCount(); n++) {
                                var o = t.getItemAt(n).getOpacity();
                                o > i && (i = o)
                            }
                            return i
                        },
                        needsUpdate: function() {
                            return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."), this.viewer.world.needsDraw()
                        },
                        numTilesLoaded: function() {
                            return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."), this.viewer.tileCache.numTilesLoaded()
                        },
                        reset: function() {
                            return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."), this.viewer.world.resetItems(), this
                        },
                        update: function() {
                            return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."), this.clear(), this.viewer.world.draw(), this
                        },
                        canRotate: function() {
                            return this.useCanvas
                        },
                        destroy: function() {
                            this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null
                        },
                        clear: function() {
                            if (this.canvas.innerHTML = "", this.useCanvas) {
                                var e = this._calculateCanvasSize();
                                if ((this.canvas.width != e.x || this.canvas.height != e.y) && (this.canvas.width = e.x, this.canvas.height = e.y, this._updateImageSmoothingEnabled(this.context), null !== this.sketchCanvas)) {
                                    var t = this._calculateSketchCanvasSize();
                                    this.sketchCanvas.width = t.x, this.sketchCanvas.height = t.y, this._updateImageSmoothingEnabled(this.sketchContext)
                                }
                                this._clear()
                            }
                        },
                        _clear: function(e, t) {
                            if (this.useCanvas) {
                                var i = this._getContext(e);
                                if (t) i.clearRect(t.x, t.y, t.width, t.height);
                                else {
                                    var n = i.canvas;
                                    i.clearRect(0, 0, n.width, n.height)
                                }
                            }
                        },
                        viewportToDrawerRectangle: function(t) {
                            var i = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0),
                                n = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
                            return new e.Rect(i.x * e.pixelDensityRatio, i.y * e.pixelDensityRatio, n.x * e.pixelDensityRatio, n.y * e.pixelDensityRatio)
                        },
                        drawTile: function(t, i, n, o, r) {
                            if (e.console.assert(t, "[Drawer.drawTile] tile is required"), e.console.assert(i, "[Drawer.drawTile] drawingHandler is required"), this.useCanvas) {
                                var s = this._getContext(n);
                                o = o || 1, t.drawCanvas(s, i, o, r)
                            } else t.drawHTML(this.canvas)
                        },
                        _getContext: function(e) {
                            var t = this.context;
                            if (e) {
                                if (null === this.sketchCanvas) {
                                    this.sketchCanvas = document.createElement("canvas");
                                    var i = this._calculateSketchCanvasSize();
                                    if (this.sketchCanvas.width = i.x, this.sketchCanvas.height = i.y, this.sketchContext = this.sketchCanvas.getContext("2d"), 0 === this.viewport.getRotation()) {
                                        var n = this;
                                        this.viewer.addHandler("rotate", (function e() {
                                            if (0 !== n.viewport.getRotation()) {
                                                n.viewer.removeHandler("rotate", e);
                                                var t = n._calculateSketchCanvasSize();
                                                n.sketchCanvas.width = t.x, n.sketchCanvas.height = t.y
                                            }
                                        }))
                                    }
                                    this._updateImageSmoothingEnabled(this.sketchContext)
                                }
                                t = this.sketchContext
                            }
                            return t
                        },
                        saveContext: function(e) {
                            this.useCanvas && this._getContext(e).save()
                        },
                        restoreContext: function(e) {
                            this.useCanvas && this._getContext(e).restore()
                        },
                        setClip: function(e, t) {
                            if (this.useCanvas) {
                                var i = this._getContext(t);
                                i.beginPath(), i.rect(e.x, e.y, e.width, e.height), i.clip()
                            }
                        },
                        drawRectangle: function(e, t, i) {
                            if (this.useCanvas) {
                                var n = this._getContext(i);
                                n.save(), n.fillStyle = t, n.fillRect(e.x, e.y, e.width, e.height), n.restore()
                            }
                        },
                        blendSketch: function(t, i, n, o) {
                            var r = t;
                            if (e.isPlainObject(r) || (r = {
                                    opacity: t,
                                    scale: i,
                                    translate: n,
                                    compositeOperation: o
                                }), this.useCanvas && this.sketchCanvas) {
                                t = r.opacity, o = r.compositeOperation;
                                var s = r.bounds;
                                if (this.context.save(), this.context.globalAlpha = t, o && (this.context.globalCompositeOperation = o), s) s.x < 0 && (s.width += s.x, s.x = 0), s.x + s.width > this.canvas.width && (s.width = this.canvas.width - s.x), s.y < 0 && (s.height += s.y, s.y = 0), s.y + s.height > this.canvas.height && (s.height = this.canvas.height - s.y), this.context.drawImage(this.sketchCanvas, s.x, s.y, s.width, s.height, s.x, s.y, s.width, s.height);
                                else {
                                    i = r.scale || 1;
                                    var a = (n = r.translate) instanceof e.Point ? n : new e.Point(0, 0),
                                        l = 0,
                                        h = 0;
                                    if (n) {
                                        var c = this.sketchCanvas.width - this.canvas.width,
                                            u = this.sketchCanvas.height - this.canvas.height;
                                        l = Math.round(c / 2), h = Math.round(u / 2)
                                    }
                                    this.context.drawImage(this.sketchCanvas, a.x - l * i, a.y - h * i, (this.canvas.width + 2 * l) * i, (this.canvas.height + 2 * h) * i, -l, -h, this.canvas.width + 2 * l, this.canvas.height + 2 * h)
                                }
                                this.context.restore()
                            }
                        },
                        drawDebugInfo: function(t, i, n, o) {
                            if (this.useCanvas) {
                                var r = this.viewer.world.getIndexOfItem(o) % this.debugGridColor.length,
                                    s = this.context;
                                s.save(), s.lineWidth = 2 * e.pixelDensityRatio, s.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", s.strokeStyle = this.debugGridColor[r], s.fillStyle = this.debugGridColor[r], 0 !== this.viewport.degrees && this._offsetForRotation({
                                    degrees: this.viewport.degrees
                                }), o.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
                                    degrees: o.getRotation(!0),
                                    point: o.viewport.pixelFromPointNoRotate(o._getRotationPoint(!0), !0)
                                }), 0 === o.viewport.degrees && o.getRotation(!0) % 360 === 0 && o._drawer.viewer.viewport.getFlip() && o._drawer._flip(), s.strokeRect(t.position.x * e.pixelDensityRatio, t.position.y * e.pixelDensityRatio, t.size.x * e.pixelDensityRatio, t.size.y * e.pixelDensityRatio);
                                var a = (t.position.x + t.size.x / 2) * e.pixelDensityRatio,
                                    l = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
                                s.translate(a, l), s.rotate(Math.PI / 180 * -this.viewport.degrees), s.translate(-a, -l), 0 === t.x && 0 === t.y && (s.fillText("Zoom: " + this.viewport.getZoom(), t.position.x * e.pixelDensityRatio, (t.position.y - 30) * e.pixelDensityRatio), s.fillText("Pan: " + this.viewport.getBounds().toString(), t.position.x * e.pixelDensityRatio, (t.position.y - 20) * e.pixelDensityRatio)), s.fillText("Level: " + t.level, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 20) * e.pixelDensityRatio), s.fillText("Column: " + t.x, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 30) * e.pixelDensityRatio), s.fillText("Row: " + t.y, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 40) * e.pixelDensityRatio), s.fillText("Order: " + n + " of " + i, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 50) * e.pixelDensityRatio), s.fillText("Size: " + t.size.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 60) * e.pixelDensityRatio), s.fillText("Position: " + t.position.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 70) * e.pixelDensityRatio), 0 !== this.viewport.degrees && this._restoreRotationChanges(), o.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(), 0 === o.viewport.degrees && o.getRotation(!0) % 360 === 0 && o._drawer.viewer.viewport.getFlip() && o._drawer._flip(), s.restore()
                            }
                        },
                        debugRect: function(t) {
                            if (this.useCanvas) {
                                var i = this.context;
                                i.save(), i.lineWidth = 2 * e.pixelDensityRatio, i.strokeStyle = this.debugGridColor[0], i.fillStyle = this.debugGridColor[0], i.strokeRect(t.x * e.pixelDensityRatio, t.y * e.pixelDensityRatio, t.width * e.pixelDensityRatio, t.height * e.pixelDensityRatio), i.restore()
                            }
                        },
                        setImageSmoothingEnabled: function(e) {
                            this.useCanvas && (this._imageSmoothingEnabled = e, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw())
                        },
                        _updateImageSmoothingEnabled: function(e) {
                            e.msImageSmoothingEnabled = this._imageSmoothingEnabled, e.imageSmoothingEnabled = this._imageSmoothingEnabled
                        },
                        getCanvasSize: function(t) {
                            var i = this._getContext(t).canvas;
                            return new e.Point(i.width, i.height)
                        },
                        getCanvasCenter: function() {
                            return new e.Point(this.canvas.width / 2, this.canvas.height / 2)
                        },
                        _offsetForRotation: function(t) {
                            var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(),
                                n = this._getContext(t.useSketch);
                            n.save(), n.translate(i.x, i.y), this.viewer.viewport.flipped ? (n.rotate(Math.PI / 180 * -t.degrees), n.scale(-1, 1)) : n.rotate(Math.PI / 180 * t.degrees), n.translate(-i.x, -i.y)
                        },
                        _flip: function(t) {
                            var i = (t = t || {}).point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter(),
                                n = this._getContext(t.useSketch);
                            n.translate(i.x, 0), n.scale(-1, 1), n.translate(-i.x, 0)
                        },
                        _restoreRotationChanges: function(e) {
                            this._getContext(e).restore()
                        },
                        _calculateCanvasSize: function() {
                            var t = e.pixelDensityRatio,
                                i = this.viewport.getContainerSize();
                            return {
                                x: Math.round(i.x * t),
                                y: Math.round(i.y * t)
                            }
                        },
                        _calculateSketchCanvasSize: function() {
                            var e = this._calculateCanvasSize();
                            if (0 === this.viewport.getRotation()) return e;
                            var t = Math.ceil(Math.sqrt(e.x * e.x + e.y * e.y));
                            return {
                                x: t,
                                y: t
                            }
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.Viewport = function(t) {
                        var i = arguments;
                        i.length && i[0] instanceof e.Point && (t = {
                            containerSize: i[0],
                            contentSize: i[1],
                            config: i[2]
                        }), t.config && (e.extend(!0, t, t.config), delete t.config), this._margins = e.extend({
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        }, t.margins || {}), delete t.margins, e.extend(!0, this, {
                            containerSize: null,
                            contentSize: null,
                            zoomPoint: null,
                            viewer: null,
                            springStiffness: e.DEFAULT_SETTINGS.springStiffness,
                            animationTime: e.DEFAULT_SETTINGS.animationTime,
                            minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
                            maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
                            visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
                            wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
                            wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
                            defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
                            minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
                            maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
                            degrees: e.DEFAULT_SETTINGS.degrees,
                            flipped: e.DEFAULT_SETTINGS.flipped,
                            homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer
                        }, t), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({
                            initial: 0,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this.centerSpringY = new e.Spring({
                            initial: 0,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this.zoomSpring = new e.Spring({
                            exponential: !0,
                            initial: 1,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(!0), this.update()
                    }, e.Viewport.prototype = {
                        resetContentSize: function(t) {
                            return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, t.y / t.x), t.x), this
                        },
                        setHomeBounds: function(t, i) {
                            e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(t, i)
                        },
                        _setContentBounds: function(t, i) {
                            e.console.assert(t, "[Viewport._setContentBounds] bounds is required"), e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = t.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(i), this._contentBounds = t.rotate(this.degrees).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(i), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", {
                                contentSize: this._contentSizeNoRotate.clone(),
                                contentFactor: i,
                                homeBounds: this._contentBoundsNoRotate.clone(),
                                contentBounds: this._contentBounds.clone()
                            })
                        },
                        getHomeZoom: function() {
                            if (this.defaultZoomLevel) return this.defaultZoomLevel;
                            var e = this._contentAspectRatio / this.getAspectRatio();
                            return (this.homeFillsViewer ? e >= 1 ? e : 1 : e >= 1 ? 1 : e) / this._contentBounds.width
                        },
                        getHomeBounds: function() {
                            return this.getHomeBoundsNoRotate().rotate(-this.getRotation())
                        },
                        getHomeBoundsNoRotate: function() {
                            var t = this._contentBounds.getCenter(),
                                i = 1 / this.getHomeZoom(),
                                n = i / this.getAspectRatio();
                            return new e.Rect(t.x - i / 2, t.y - n / 2, i, n)
                        },
                        goHome: function(e) {
                            return this.viewer && this.viewer.raiseEvent("home", {
                                immediately: e
                            }), this.fitBounds(this.getHomeBounds(), e)
                        },
                        getMinZoom: function() {
                            var e = this.getHomeZoom();
                            return this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * e
                        },
                        getMaxZoom: function() {
                            var e = this.maxZoomLevel;
                            return e || (e = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, e /= this._contentBounds.width), Math.max(e, this.getHomeZoom())
                        },
                        getAspectRatio: function() {
                            return this._containerInnerSize.x / this._containerInnerSize.y
                        },
                        getContainerSize: function() {
                            return new e.Point(this.containerSize.x, this.containerSize.y)
                        },
                        getMargins: function() {
                            return e.extend({}, this._margins)
                        },
                        setMargins: function(t) {
                            e.console.assert("object" === e.type(t), "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            }, t), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw()
                        },
                        getBounds: function(e) {
                            return this.getBoundsNoRotate(e).rotate(-this.getRotation())
                        },
                        getBoundsNoRotate: function(t) {
                            var i = this.getCenter(t),
                                n = 1 / this.getZoom(t),
                                o = n / this.getAspectRatio();
                            return new e.Rect(i.x - n / 2, i.y - o / 2, n, o)
                        },
                        getBoundsWithMargins: function(e) {
                            return this.getBoundsNoRotateWithMargins(e).rotate(-this.getRotation(), this.getCenter(e))
                        },
                        getBoundsNoRotateWithMargins: function(e) {
                            var t = this.getBoundsNoRotate(e),
                                i = this._containerInnerSize.x * this.getZoom(e);
                            return t.x -= this._margins.left / i, t.y -= this._margins.top / i, t.width += (this._margins.left + this._margins.right) / i, t.height += (this._margins.top + this._margins.bottom) / i, t
                        },
                        getCenter: function(t) {
                            var i, n, o, r, s, a, l = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value),
                                h = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
                            return t ? l : this.zoomPoint ? (i = this.pixelFromPoint(this.zoomPoint, !0), r = (o = 1 / (n = this.getZoom())) / this.getAspectRatio(), s = new e.Rect(l.x - o / 2, l.y - r / 2, o, r), a = this._pixelFromPoint(this.zoomPoint, s).minus(i).divide(this._containerInnerSize.x * n), h.plus(a)) : h
                        },
                        getZoom: function(e) {
                            return e ? this.zoomSpring.current.value : this.zoomSpring.target.value
                        },
                        _applyZoomConstraints: function(e) {
                            return Math.max(Math.min(e, this.getMaxZoom()), this.getMinZoom())
                        },
                        _applyBoundaryConstraints: function(t) {
                            var i = new e.Rect(t.x, t.y, t.width, t.height);
                            if (this.wrapHorizontal);
                            else {
                                var n = this.visibilityRatio * i.width,
                                    o = i.x + i.width,
                                    r = this._contentBoundsNoRotate.x + this._contentBoundsNoRotate.width,
                                    s = this._contentBoundsNoRotate.x - o + n,
                                    a = r - i.x - n;
                                n > this._contentBoundsNoRotate.width ? i.x += (s + a) / 2 : a < 0 ? i.x += a : s > 0 && (i.x += s)
                            }
                            if (this.wrapVertical);
                            else {
                                var l = this.visibilityRatio * i.height,
                                    h = i.y + i.height,
                                    c = this._contentBoundsNoRotate.y + this._contentBoundsNoRotate.height,
                                    u = this._contentBoundsNoRotate.y - h + l,
                                    d = c - i.y - l;
                                l > this._contentBoundsNoRotate.height ? i.y += (u + d) / 2 : d < 0 ? i.y += d : u > 0 && (i.y += u)
                            }
                            return i
                        },
                        _raiseConstraintsEvent: function(e) {
                            this.viewer && this.viewer.raiseEvent("constrain", {
                                immediately: e
                            })
                        },
                        applyConstraints: function(e) {
                            var t = this.getZoom(),
                                i = this._applyZoomConstraints(t);
                            t !== i && this.zoomTo(i, this.zoomPoint, e);
                            var n = this.getBoundsNoRotate(),
                                o = this._applyBoundaryConstraints(n);
                            return this._raiseConstraintsEvent(e), (n.x !== o.x || n.y !== o.y || e) && this.fitBounds(o.rotate(-this.getRotation()), e), this
                        },
                        ensureVisible: function(e) {
                            return this.applyConstraints(e)
                        },
                        _fitBounds: function(t, i) {
                            var n = (i = i || {}).immediately || !1,
                                o = i.constraints || !1,
                                r = this.getAspectRatio(),
                                s = t.getCenter(),
                                a = new e.Rect(t.x, t.y, t.width, t.height, t.degrees + this.getRotation()).getBoundingBox();
                            a.getAspectRatio() >= r ? a.height = a.width / r : a.width = a.height * r, a.x = s.x - a.width / 2, a.y = s.y - a.height / 2;
                            var l = 1 / a.width;
                            if (o) {
                                var h = a.getAspectRatio(),
                                    c = this._applyZoomConstraints(l);
                                l !== c && (l = c, a.width = 1 / l, a.x = s.x - a.width / 2, a.height = a.width / h, a.y = s.y - a.height / 2), s = (a = this._applyBoundaryConstraints(a)).getCenter(), this._raiseConstraintsEvent(n)
                            }
                            if (n) return this.panTo(s, !0), this.zoomTo(l, null, !0);
                            this.panTo(this.getCenter(!0), !0), this.zoomTo(this.getZoom(!0), null, !0);
                            var u = this.getBounds(),
                                d = this.getZoom();
                            if (0 === d || Math.abs(l / d - 1) < 1e-8) return this.zoomTo(l, !0), this.panTo(s, n);
                            var p = (a = a.rotate(-this.getRotation())).getTopLeft().times(l).minus(u.getTopLeft().times(d)).divide(l - d);
                            return this.zoomTo(l, p, n)
                        },
                        fitBounds: function(e, t) {
                            return this._fitBounds(e, {
                                immediately: t,
                                constraints: !1
                            })
                        },
                        fitBoundsWithConstraints: function(e, t) {
                            return this._fitBounds(e, {
                                immediately: t,
                                constraints: !0
                            })
                        },
                        fitVertically: function(t) {
                            var i = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
                            return this.fitBounds(i, t)
                        },
                        fitHorizontally: function(t) {
                            var i = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
                            return this.fitBounds(i, t)
                        },
                        getConstrainedBounds: function(e) {
                            var t;
                            return t = this.getBounds(e), this._applyBoundaryConstraints(t)
                        },
                        panBy: function(t, i) {
                            var n = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
                            return this.panTo(n.plus(t), i)
                        },
                        panTo: function(e, t) {
                            return t ? (this.centerSpringX.resetTo(e.x), this.centerSpringY.resetTo(e.y)) : (this.centerSpringX.springTo(e.x), this.centerSpringY.springTo(e.y)), this.viewer && this.viewer.raiseEvent("pan", {
                                center: e,
                                immediately: t
                            }), this
                        },
                        zoomBy: function(e, t, i) {
                            return this.zoomTo(this.zoomSpring.target.value * e, t, i)
                        },
                        zoomTo: function(t, i, n) {
                            var o = this;
                            return this.zoomPoint = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null, n ? this._adjustCenterSpringsForZoomPoint((function() {
                                o.zoomSpring.resetTo(t)
                            })) : this.zoomSpring.springTo(t), this.viewer && this.viewer.raiseEvent("zoom", {
                                zoom: t,
                                refPoint: i,
                                immediately: n
                            }), this
                        },
                        setRotation: function(t) {
                            return this.viewer && this.viewer.drawer.canRotate() ? (this.degrees = e.positiveModulo(t, 360), this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", {
                                degrees: t
                            }), this) : this
                        },
                        getRotation: function() {
                            return this.degrees
                        },
                        resize: function(e, t) {
                            var i, n = this.getBoundsNoRotate(),
                                o = n;
                            return this.containerSize.x = e.x, this.containerSize.y = e.y, this._updateContainerInnerSize(), t && (i = e.x / this.containerSize.x, o.width = n.width * i, o.height = o.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", {
                                newContainerSize: e,
                                maintain: t
                            }), this.fitBounds(o, !0)
                        },
                        _updateContainerInnerSize: function() {
                            this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)))
                        },
                        update: function() {
                            var e = this;
                            this._adjustCenterSpringsForZoomPoint((function() {
                                e.zoomSpring.update()
                            })), this.centerSpringX.update(), this.centerSpringY.update();
                            var t = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom;
                            return this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, t
                        },
                        _adjustCenterSpringsForZoomPoint: function(e) {
                            if (this.zoomPoint) {
                                var t = this.pixelFromPoint(this.zoomPoint, !0);
                                e();
                                var i = this.pixelFromPoint(this.zoomPoint, !0).minus(t),
                                    n = this.deltaPointsFromPixels(i, !0);
                                this.centerSpringX.shiftBy(n.x), this.centerSpringY.shiftBy(n.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null)
                            } else e()
                        },
                        deltaPixelsFromPointsNoRotate: function(e, t) {
                            return e.times(this._containerInnerSize.x * this.getZoom(t))
                        },
                        deltaPixelsFromPoints: function(e, t) {
                            return this.deltaPixelsFromPointsNoRotate(e.rotate(this.getRotation()), t)
                        },
                        deltaPointsFromPixelsNoRotate: function(e, t) {
                            return e.divide(this._containerInnerSize.x * this.getZoom(t))
                        },
                        deltaPointsFromPixels: function(e, t) {
                            return this.deltaPointsFromPixelsNoRotate(e, t).rotate(-this.getRotation())
                        },
                        pixelFromPointNoRotate: function(e, t) {
                            return this._pixelFromPointNoRotate(e, this.getBoundsNoRotate(t))
                        },
                        pixelFromPoint: function(e, t) {
                            return this._pixelFromPoint(e, this.getBoundsNoRotate(t))
                        },
                        _pixelFromPointNoRotate: function(t, i) {
                            return t.minus(i.getTopLeft()).times(this._containerInnerSize.x / i.width).plus(new e.Point(this._margins.left, this._margins.top))
                        },
                        _pixelFromPoint: function(e, t) {
                            return this._pixelFromPointNoRotate(e.rotate(this.getRotation(), this.getCenter(!0)), t)
                        },
                        pointFromPixelNoRotate: function(t, i) {
                            var n = this.getBoundsNoRotate(i);
                            return t.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / n.width).plus(n.getTopLeft())
                        },
                        pointFromPixel: function(e, t) {
                            return this.pointFromPixelNoRotate(e, t).rotate(-this.getRotation(), this.getCenter(!0))
                        },
                        _viewportToImageDelta: function(t, i) {
                            var n = this._contentBoundsNoRotate.width;
                            return new e.Point(t * this._contentSizeNoRotate.x / n, i * this._contentSizeNoRotate.x / n)
                        },
                        viewportToImageCoordinates: function(t, i) {
                            if (t instanceof e.Point) return this.viewportToImageCoordinates(t.x, t.y);
                            if (this.viewer) {
                                var n = this.viewer.world.getItemCount();
                                if (n > 1) e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
                                else if (1 === n) {
                                    return this.viewer.world.getItemAt(0).viewportToImageCoordinates(t, i, !0)
                                }
                            }
                            return this._viewportToImageDelta(t - this._contentBoundsNoRotate.x, i - this._contentBoundsNoRotate.y)
                        },
                        _imageToViewportDelta: function(t, i) {
                            var n = this._contentBoundsNoRotate.width;
                            return new e.Point(t / this._contentSizeNoRotate.x * n, i / this._contentSizeNoRotate.x * n)
                        },
                        imageToViewportCoordinates: function(t, i) {
                            if (t instanceof e.Point) return this.imageToViewportCoordinates(t.x, t.y);
                            if (this.viewer) {
                                var n = this.viewer.world.getItemCount();
                                if (n > 1) e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
                                else if (1 === n) {
                                    return this.viewer.world.getItemAt(0).imageToViewportCoordinates(t, i, !0)
                                }
                            }
                            var o = this._imageToViewportDelta(t, i);
                            return o.x += this._contentBoundsNoRotate.x, o.y += this._contentBoundsNoRotate.y, o
                        },
                        imageToViewportRectangle: function(t, i, n, o) {
                            var r = t;
                            if (r instanceof e.Rect || (r = new e.Rect(t, i, n, o)), this.viewer) {
                                var s = this.viewer.world.getItemCount();
                                if (s > 1) e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
                                else if (1 === s) {
                                    return this.viewer.world.getItemAt(0).imageToViewportRectangle(t, i, n, o, !0)
                                }
                            }
                            var a = this.imageToViewportCoordinates(r.x, r.y),
                                l = this._imageToViewportDelta(r.width, r.height);
                            return new e.Rect(a.x, a.y, l.x, l.y, r.degrees)
                        },
                        viewportToImageRectangle: function(t, i, n, o) {
                            var r = t;
                            if (r instanceof e.Rect || (r = new e.Rect(t, i, n, o)), this.viewer) {
                                var s = this.viewer.world.getItemCount();
                                if (s > 1) e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
                                else if (1 === s) {
                                    return this.viewer.world.getItemAt(0).viewportToImageRectangle(t, i, n, o, !0)
                                }
                            }
                            var a = this.viewportToImageCoordinates(r.x, r.y),
                                l = this._viewportToImageDelta(r.width, r.height);
                            return new e.Rect(a.x, a.y, l.x, l.y, r.degrees)
                        },
                        viewerElementToImageCoordinates: function(e) {
                            var t = this.pointFromPixel(e, !0);
                            return this.viewportToImageCoordinates(t)
                        },
                        imageToViewerElementCoordinates: function(e) {
                            var t = this.imageToViewportCoordinates(e);
                            return this.pixelFromPoint(t, !0)
                        },
                        windowToImageCoordinates: function(t) {
                            e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
                            var i = t.minus(e.getElementPosition(this.viewer.element));
                            return this.viewerElementToImageCoordinates(i)
                        },
                        imageToWindowCoordinates: function(t) {
                            return e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer."), this.imageToViewerElementCoordinates(t).plus(e.getElementPosition(this.viewer.element))
                        },
                        viewerElementToViewportCoordinates: function(e) {
                            return this.pointFromPixel(e, !0)
                        },
                        viewportToViewerElementCoordinates: function(e) {
                            return this.pixelFromPoint(e, !0)
                        },
                        viewerElementToViewportRectangle: function(t) {
                            return e.Rect.fromSummits(this.pointFromPixel(t.getTopLeft(), !0), this.pointFromPixel(t.getTopRight(), !0), this.pointFromPixel(t.getBottomLeft(), !0))
                        },
                        viewportToViewerElementRectangle: function(t) {
                            return e.Rect.fromSummits(this.pixelFromPoint(t.getTopLeft(), !0), this.pixelFromPoint(t.getTopRight(), !0), this.pixelFromPoint(t.getBottomLeft(), !0))
                        },
                        windowToViewportCoordinates: function(t) {
                            e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
                            var i = t.minus(e.getElementPosition(this.viewer.element));
                            return this.viewerElementToViewportCoordinates(i)
                        },
                        viewportToWindowCoordinates: function(t) {
                            return e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer."), this.viewportToViewerElementCoordinates(t).plus(e.getElementPosition(this.viewer.element))
                        },
                        viewportToImageZoom: function(t) {
                            if (this.viewer) {
                                var i = this.viewer.world.getItemCount();
                                if (i > 1) e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
                                else if (1 === i) {
                                    return this.viewer.world.getItemAt(0).viewportToImageZoom(t)
                                }
                            }
                            var n = this._contentSizeNoRotate.x;
                            return t * (this._containerInnerSize.x / n * this._contentBoundsNoRotate.width)
                        },
                        imageToViewportZoom: function(t) {
                            if (this.viewer) {
                                var i = this.viewer.world.getItemCount();
                                if (i > 1) e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");
                                else if (1 === i) {
                                    return this.viewer.world.getItemAt(0).imageToViewportZoom(t)
                                }
                            }
                            return t * (this._contentSizeNoRotate.x / this._containerInnerSize.x / this._contentBoundsNoRotate.width)
                        },
                        toggleFlip: function() {
                            return this.setFlip(!this.getFlip()), this
                        },
                        getFlip: function() {
                            return this.flipped
                        },
                        setFlip: function(e) {
                            return this.flipped === e ? this : (this.flipped = e, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", {
                                flipped: e
                            }), this)
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    function t(e, t, n, o, r, s, l, h, c) {
                        var u = l.getBoundingBox().getTopLeft(),
                            d = l.getBoundingBox().getBottomRight();
                        e.viewer && e.viewer.raiseEvent("update-level", {
                            tiledImage: e,
                            havedrawn: t,
                            level: o,
                            opacity: r,
                            visibility: s,
                            drawArea: l,
                            topleft: u,
                            bottomright: d,
                            currenttime: h,
                            best: c
                        }), a(e.coverage, o), a(e.loadingCoverage, o);
                        for (var p = e._getCornerTiles(o, u, d), g = p.topLeft, m = p.bottomRight, v = e.source.getNumTiles(o), f = e.viewport.pixelFromPoint(e.viewport.getCenter()), w = g.x; w <= m.x; w++)
                            for (var y = g.y; y <= m.y; y++) {
                                if (!e.wrapHorizontal && !e.wrapVertical) {
                                    var T = e.source.getTileBounds(o, w, y);
                                    if (null === l.intersection(T)) continue
                                }
                                c = i(e, n, t, w, y, o, r, s, f, v, h, c)
                            }
                        return c
                    }

                    function i(t, i, o, a, l, h, c, u, d, p, g, m) {
                        var v = function(t, i, n, o, r, s, a, l, h, c) {
                                var u, d, p, g, m, v, f, w, y;
                                s[n] || (s[n] = {});
                                s[n][t] || (s[n][t] = {});
                                s[n][t][i] || (u = (l.x + t % l.x) % l.x, d = (l.y + i % l.y) % l.y, p = r.getTileBounds(n, u, d), g = r.getTileBounds(n, u, d, !0), m = r.tileExists(n, u, d), v = r.getTileUrl(n, u, d), o.loadTilesWithAjax ? (f = r.getTileAjaxHeaders(n, u, d), e.isPlainObject(o.ajaxHeaders) && (f = e.extend({}, o.ajaxHeaders, f))) : f = null, w = r.getContext2D ? r.getContext2D(n, u, d) : void 0, p.x += (t - u) / l.x, p.y += c / h * ((i - d) / l.y), y = new e.Tile(n, t, i, p, m, v, w, o.loadTilesWithAjax, f, g), u === l.x - 1 && (y.isRightMost = !0), d === l.y - 1 && (y.isBottomMost = !0), s[n][t][i] = y);
                                return (y = s[n][t][i]).lastTouchTime = a, y
                            }(a, l, h, t, t.source, t.tilesMatrix, g, p, t._worldWidthCurrent, t._worldHeightCurrent),
                            f = o;
                        t.viewer && t.viewer.raiseEvent("update-tile", {
                            tiledImage: t,
                            tile: v
                        }), s(t.coverage, h, a, l, !1);
                        var w = v.loaded || v.loading || r(t.loadingCoverage, h, a, l);
                        if (s(t.loadingCoverage, h, a, l, w), !v.exists) return m;
                        if (i && !f && (r(t.coverage, h, a, l) ? s(t.coverage, h, a, l, !0) : f = !0), !f) return m;
                        if (function(t, i, n, o, r, s) {
                                var a = t.bounds.getTopLeft();
                                a.x *= s._scaleSpring.current.value, a.y *= s._scaleSpring.current.value, a.x += s._xSpring.current.value, a.y += s._ySpring.current.value;
                                var l = t.bounds.getSize();
                                l.x *= s._scaleSpring.current.value, l.y *= s._scaleSpring.current.value;
                                var h = n.pixelFromPointNoRotate(a, !0),
                                    c = n.pixelFromPointNoRotate(a, !1),
                                    u = n.deltaPixelsFromPointsNoRotate(l, !0),
                                    d = n.deltaPixelsFromPointsNoRotate(l, !1),
                                    p = c.plus(d.divide(2)),
                                    g = o.squaredDistanceTo(p);
                                i || (u = u.plus(new e.Point(1, 1)));
                                t.isRightMost && s.wrapHorizontal && (u.x += .75);
                                t.isBottomMost && s.wrapVertical && (u.y += .75);
                                t.position = h, t.size = u, t.squaredDistance = g, t.visibility = r
                            }(v, t.source.tileOverlap, t.viewport, d, u, t), !v.loaded)
                            if (v.context2D) n(t, v);
                            else {
                                var y = t._tileCache.getImageRecord(v.cacheKey);
                                if (y) n(t, v, y.getImage())
                            }
                        v.loaded ? function(e, t, i, n, o, r, a) {
                            var l, h, c = 1e3 * e.blendTime;
                            t.blendStart || (t.blendStart = a);
                            l = a - t.blendStart, h = c ? Math.min(1, l / c) : 1, e.alwaysBlend && (h *= r);
                            if (t.opacity = h, e.lastDrawn.push(t), 1 === h) s(e.coverage, o, i, n, !0), e._hasOpaqueTile = !0;
                            else if (l < c) return !0;
                            return !1
                        }(t, v, a, l, h, c, g) && (t._needsDraw = !0) : v.loading ? t._tilesLoading++ : w || (m = function(e, t) {
                            if (!e) return t;
                            if (t.visibility > e.visibility) return t;
                            if (t.visibility == e.visibility && t.squaredDistance < e.squaredDistance) return t;
                            return e
                        }(m, v));
                        return m
                    }

                    function n(e, t, i, n, o) {
                        var r = 0;

                        function s() {
                            return r++, a
                        }

                        function a() {
                            0 === --r && (t.loading = !1, t.loaded = !0, t.context2D || e._tileCache.cacheTile({
                                image: i,
                                tile: t,
                                cutoff: n,
                                tiledImage: e
                            }), e._needsDraw = !0)
                        }
                        e.viewer.raiseEvent("tile-loaded", {
                            tile: t,
                            tiledImage: e,
                            tileRequest: o,
                            image: i,
                            getCompletionCallback: s
                        }), s()()
                    }

                    function o(e, t, i, n) {
                        var o, r, s, a;
                        if (!e[t]) return !1;
                        if (void 0 === i || void 0 === n) {
                            for (s in o = e[t])
                                if (Object.prototype.hasOwnProperty.call(o, s))
                                    for (a in r = o[s])
                                        if (Object.prototype.hasOwnProperty.call(r, a) && !r[a]) return !1;
                            return !0
                        }
                        return void 0 === e[t][i] || void 0 === e[t][i][n] || !0 === e[t][i][n]
                    }

                    function r(e, t, i, n) {
                        return void 0 === i || void 0 === n ? o(e, t + 1) : o(e, t + 1, 2 * i, 2 * n) && o(e, t + 1, 2 * i, 2 * n + 1) && o(e, t + 1, 2 * i + 1, 2 * n) && o(e, t + 1, 2 * i + 1, 2 * n + 1)
                    }

                    function s(t, i, n, o, r) {
                        t[i] ? (t[i][n] || (t[i][n] = {}), t[i][n][o] = r) : e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", i)
                    }

                    function a(e, t) {
                        e[t] = {}
                    }
                    e.TiledImage = function(t) {
                        var i = this;
                        e.console.assert(t.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(t.drawer, "[TiledImage] options.drawer is required"), e.console.assert(t.viewer, "[TiledImage] options.viewer is required"), e.console.assert(t.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(t.source, "[TiledImage] options.source is required"), e.console.assert(!t.clip || t.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = t.tileCache, delete t.tileCache, this._drawer = t.drawer, delete t.drawer, this._imageLoader = t.imageLoader, delete t.imageLoader, t.clip instanceof e.Rect && (this._clip = t.clip.clone()), delete t.clip;
                        var n = t.x || 0;
                        delete t.x;
                        var o = t.y || 0;
                        delete t.y, this.normHeight = t.source.dimensions.y / t.source.dimensions.x, this.contentAspectX = t.source.dimensions.x / t.source.dimensions.y;
                        var r = 1;
                        t.width ? (r = t.width, delete t.width, t.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete t.height)) : t.height && (r = t.height / this.normHeight, delete t.height);
                        var s = t.fitBounds;
                        delete t.fitBounds;
                        var a = t.fitBoundsPlacement || OpenSeadragon.Placement.CENTER;
                        delete t.fitBoundsPlacement;
                        var l = t.degrees || 0;
                        delete t.degrees, e.extend(!0, this, {
                            viewer: null,
                            tilesMatrix: {},
                            coverage: {},
                            loadingCoverage: {},
                            lastDrawn: [],
                            lastResetTime: 0,
                            _midDraw: !1,
                            _needsDraw: !0,
                            _hasOpaqueTile: !1,
                            _tilesLoading: 0,
                            springStiffness: e.DEFAULT_SETTINGS.springStiffness,
                            animationTime: e.DEFAULT_SETTINGS.animationTime,
                            minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
                            wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
                            wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
                            immediateRender: e.DEFAULT_SETTINGS.immediateRender,
                            blendTime: e.DEFAULT_SETTINGS.blendTime,
                            alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
                            minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
                            smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
                            iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
                            debugMode: e.DEFAULT_SETTINGS.debugMode,
                            crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
                            ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
                            placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
                            opacity: e.DEFAULT_SETTINGS.opacity,
                            preload: e.DEFAULT_SETTINGS.preload,
                            compositeOperation: e.DEFAULT_SETTINGS.compositeOperation
                        }, t), this._preload = this.preload, delete this.preload, this._fullyLoaded = !1, this._xSpring = new e.Spring({
                            initial: n,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this._ySpring = new e.Spring({
                            initial: o,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this._scaleSpring = new e.Spring({
                            initial: r,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this._degreesSpring = new e.Spring({
                            initial: l,
                            springStiffness: this.springStiffness,
                            animationTime: this.animationTime
                        }), this._updateForScale(), s && this.fitBounds(s, a, !0), this._drawingHandler = function(t) {
                            i.viewer.raiseEvent("tile-drawing", e.extend({
                                tiledImage: i
                            }, t))
                        }
                    }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, {
                        needsDraw: function() {
                            return this._needsDraw
                        },
                        getFullyLoaded: function() {
                            return this._fullyLoaded
                        },
                        _setFullyLoaded: function(e) {
                            e !== this._fullyLoaded && (this._fullyLoaded = e, this.raiseEvent("fully-loaded-change", {
                                fullyLoaded: this._fullyLoaded
                            }))
                        },
                        reset: function() {
                            this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = !0
                        },
                        update: function() {
                            var e = this._xSpring.update(),
                                t = this._ySpring.update(),
                                i = this._scaleSpring.update(),
                                n = this._degreesSpring.update();
                            return !!(e || t || i || n) && (this._updateForScale(), this._needsDraw = !0, !0)
                        },
                        draw: function() {
                            0 !== this.opacity || this._preload ? (this._midDraw = !0, this._updateViewport(), this._midDraw = !1) : this._needsDraw = !1
                        },
                        destroy: function() {
                            this.reset()
                        },
                        getBounds: function(e) {
                            return this.getBoundsNoRotate(e).rotate(this.getRotation(e), this._getRotationPoint(e))
                        },
                        getBoundsNoRotate: function(t) {
                            return t ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget)
                        },
                        getWorldBounds: function() {
                            return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds()
                        },
                        getClippedBounds: function(t) {
                            var i = this.getBoundsNoRotate(t);
                            if (this._clip) {
                                var n = (t ? this._worldWidthCurrent : this._worldWidthTarget) / this.source.dimensions.x,
                                    o = this._clip.times(n);
                                i = new e.Rect(i.x + o.x, i.y + o.y, o.width, o.height)
                            }
                            return i.rotate(this.getRotation(t), this._getRotationPoint(t))
                        },
                        getContentSize: function() {
                            return new e.Point(this.source.dimensions.x, this.source.dimensions.y)
                        },
                        _viewportToImageDelta: function(t, i, n) {
                            var o = n ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                            return new e.Point(t * (this.source.dimensions.x / o), i * (this.source.dimensions.y * this.contentAspectX / o))
                        },
                        viewportToImageCoordinates: function(t, i, n) {
                            var o;
                            return t instanceof e.Point ? (n = i, o = t) : o = new e.Point(t, i), o = o.rotate(-this.getRotation(n), this._getRotationPoint(n)), n ? this._viewportToImageDelta(o.x - this._xSpring.current.value, o.y - this._ySpring.current.value) : this._viewportToImageDelta(o.x - this._xSpring.target.value, o.y - this._ySpring.target.value)
                        },
                        _imageToViewportDelta: function(t, i, n) {
                            var o = n ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                            return new e.Point(t / this.source.dimensions.x * o, i / this.source.dimensions.y / this.contentAspectX * o)
                        },
                        imageToViewportCoordinates: function(t, i, n) {
                            t instanceof e.Point && (n = i, i = t.y, t = t.x);
                            var o = this._imageToViewportDelta(t, i);
                            return n ? (o.x += this._xSpring.current.value, o.y += this._ySpring.current.value) : (o.x += this._xSpring.target.value, o.y += this._ySpring.target.value), o.rotate(this.getRotation(n), this._getRotationPoint(n))
                        },
                        imageToViewportRectangle: function(t, i, n, o, r) {
                            var s = t;
                            s instanceof e.Rect ? r = i : s = new e.Rect(t, i, n, o);
                            var a = this.imageToViewportCoordinates(s.getTopLeft(), r),
                                l = this._imageToViewportDelta(s.width, s.height, r);
                            return new e.Rect(a.x, a.y, l.x, l.y, s.degrees + this.getRotation(r))
                        },
                        viewportToImageRectangle: function(t, i, n, o, r) {
                            var s = t;
                            t instanceof e.Rect ? r = i : s = new e.Rect(t, i, n, o);
                            var a = this.viewportToImageCoordinates(s.getTopLeft(), r),
                                l = this._viewportToImageDelta(s.width, s.height, r);
                            return new e.Rect(a.x, a.y, l.x, l.y, s.degrees - this.getRotation(r))
                        },
                        viewerElementToImageCoordinates: function(e) {
                            var t = this.viewport.pointFromPixel(e, !0);
                            return this.viewportToImageCoordinates(t)
                        },
                        imageToViewerElementCoordinates: function(e) {
                            var t = this.imageToViewportCoordinates(e);
                            return this.viewport.pixelFromPoint(t, !0)
                        },
                        windowToImageCoordinates: function(e) {
                            var t = e.minus(OpenSeadragon.getElementPosition(this.viewer.element));
                            return this.viewerElementToImageCoordinates(t)
                        },
                        imageToWindowCoordinates: function(e) {
                            return this.imageToViewerElementCoordinates(e).plus(OpenSeadragon.getElementPosition(this.viewer.element))
                        },
                        _viewportToTiledImageRectangle: function(t) {
                            var i = this._scaleSpring.current.value;
                            return t = t.rotate(-this.getRotation(!0), this._getRotationPoint(!0)), new e.Rect((t.x - this._xSpring.current.value) / i, (t.y - this._ySpring.current.value) / i, t.width / i, t.height / i, t.degrees)
                        },
                        viewportToImageZoom: function(e) {
                            return this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x * e
                        },
                        imageToViewportZoom: function(e) {
                            return e / (this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x)
                        },
                        setPosition: function(e, t) {
                            var i = this._xSpring.target.value === e.x && this._ySpring.target.value === e.y;
                            if (t) {
                                if (i && this._xSpring.current.value === e.x && this._ySpring.current.value === e.y) return;
                                this._xSpring.resetTo(e.x), this._ySpring.resetTo(e.y), this._needsDraw = !0
                            } else {
                                if (i) return;
                                this._xSpring.springTo(e.x), this._ySpring.springTo(e.y), this._needsDraw = !0
                            }
                            i || this._raiseBoundsChange()
                        },
                        setWidth: function(e, t) {
                            this._setScale(e, t)
                        },
                        setHeight: function(e, t) {
                            this._setScale(e / this.normHeight, t)
                        },
                        setCroppingPolygons: function(t) {
                            var i = function(t) {
                                return t.map((function(t) {
                                    try {
                                        if (function(t) {
                                                return t instanceof e.Point || "number" === typeof t.x && "number" === typeof t.y
                                            }(t)) return {
                                            x: t.x,
                                            y: t.y
                                        };
                                        throw new Error
                                    } catch (i) {
                                        throw new Error("A Provided cropping polygon point is not supported")
                                    }
                                }))
                            };
                            try {
                                if (!e.isArray(t)) throw new Error("Provided cropping polygon is not an array");
                                this._croppingPolygons = t.map((function(e) {
                                    return i(e)
                                }))
                            } catch (n) {
                                e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(n), this._croppingPolygons = null
                            }
                        },
                        resetCroppingPolygons: function() {
                            this._croppingPolygons = null
                        },
                        fitBounds: function(t, i, n) {
                            i = i || e.Placement.CENTER;
                            var o = e.Placement.properties[i],
                                r = this.contentAspectX,
                                s = 0,
                                a = 0,
                                l = 1,
                                h = 1;
                            if (this._clip && (r = this._clip.getAspectRatio(), l = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, t.getAspectRatio() > r ? (s = this._clip.x / this._clip.height * t.height, a = this._clip.y / this._clip.height * t.height) : (s = this._clip.x / this._clip.width * t.width, a = this._clip.y / this._clip.width * t.width)), t.getAspectRatio() > r) {
                                var c = t.height / h,
                                    u = 0;
                                o.isHorizontallyCentered ? u = (t.width - t.height * r) / 2 : o.isRight && (u = t.width - t.height * r), this.setPosition(new e.Point(t.x - s + u, t.y - a), n), this.setHeight(c, n)
                            } else {
                                var d = t.width / l,
                                    p = 0;
                                o.isVerticallyCentered ? p = (t.height - t.width / r) / 2 : o.isBottom && (p = t.height - t.width / r), this.setPosition(new e.Point(t.x - s, t.y - a + p), n), this.setWidth(d, n)
                            }
                        },
                        getClip: function() {
                            return this._clip ? this._clip.clone() : null
                        },
                        setClip: function(t) {
                            e.console.assert(!t || t instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), t instanceof e.Rect ? this._clip = t.clone() : this._clip = null, this._needsDraw = !0, this.raiseEvent("clip-change")
                        },
                        getOpacity: function() {
                            return this.opacity
                        },
                        setOpacity: function(e) {
                            e !== this.opacity && (this.opacity = e, this._needsDraw = !0, this.raiseEvent("opacity-change", {
                                opacity: this.opacity
                            }))
                        },
                        getPreload: function() {
                            return this._preload
                        },
                        setPreload: function(e) {
                            this._preload = !!e, this._needsDraw = !0
                        },
                        getRotation: function(e) {
                            return e ? this._degreesSpring.current.value : this._degreesSpring.target.value
                        },
                        setRotation: function(e, t) {
                            this._degreesSpring.target.value === e && this._degreesSpring.isAtTargetValue() || (t ? this._degreesSpring.resetTo(e) : this._degreesSpring.springTo(e), this._needsDraw = !0, this._raiseBoundsChange())
                        },
                        _getRotationPoint: function(e) {
                            return this.getBoundsNoRotate(e).getCenter()
                        },
                        getCompositeOperation: function() {
                            return this.compositeOperation
                        },
                        setCompositeOperation: function(e) {
                            e !== this.compositeOperation && (this.compositeOperation = e, this._needsDraw = !0, this.raiseEvent("composite-operation-change", {
                                compositeOperation: this.compositeOperation
                            }))
                        },
                        _setScale: function(e, t) {
                            var i = this._scaleSpring.target.value === e;
                            if (t) {
                                if (i && this._scaleSpring.current.value === e) return;
                                this._scaleSpring.resetTo(e), this._updateForScale(), this._needsDraw = !0
                            } else {
                                if (i) return;
                                this._scaleSpring.springTo(e), this._updateForScale(), this._needsDraw = !0
                            }
                            i || this._raiseBoundsChange()
                        },
                        _updateForScale: function() {
                            this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value
                        },
                        _raiseBoundsChange: function() {
                            this.raiseEvent("bounds-change")
                        },
                        _isBottomItem: function() {
                            return this.viewer.world.getItemAt(0) === this
                        },
                        _getLevelsInterval: function() {
                            var e = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))),
                                t = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x * this._scaleSpring.current.value,
                                i = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(t / this.minPixelRatio) / Math.log(2))));
                            return i = Math.max(i, this.source.minLevel || 0), {
                                lowestLevel: e = Math.min(e, i),
                                highestLevel: i
                            }
                        },
                        _updateViewport: function() {
                            for (this._needsDraw = !1, this._tilesLoading = 0, this.loadingCoverage = {}; this.lastDrawn.length > 0;) {
                                this.lastDrawn.pop().beingDrawn = !1
                            }
                            var i = this.viewport,
                                r = this._viewportToTiledImageRectangle(i.getBoundsWithMargins(!0));
                            if (!this.wrapHorizontal && !this.wrapVertical) {
                                var s = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
                                if (null === (r = r.intersection(s))) return
                            }
                            for (var a = this._getLevelsInterval(), l = a.lowestLevel, h = a.highestLevel, c = null, u = !1, d = e.now(), p = h; p >= l; p--) {
                                var g = !1,
                                    m = i.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(p), !0).x * this._scaleSpring.current.value;
                                if (p === l || !u && m >= this.minPixelRatio) g = !0, u = !0;
                                else if (!u) continue;
                                var v = i.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(p), !1).x * this._scaleSpring.current.value,
                                    f = i.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), !1).x * this._scaleSpring.current.value,
                                    w = this.immediateRender ? 1 : f;
                                if (c = t(this, u, g, p, Math.min(1, (m - .5) / .5), w / Math.abs(w - v), r, d, c), o(this.coverage, p)) break
                            }! function(t, i) {
                                if (0 === t.opacity || 0 === i.length && !t.placeholderFillStyle) return;
                                var n, o, r, s = i[0];
                                s && (n = t.opacity < 1 || t.compositeOperation && "source-over" !== t.compositeOperation || !t._isBottomItem() && s._hasTransparencyChannel());
                                var a, l = t.viewport.getZoom(!0),
                                    h = t.viewportToImageZoom(l);
                                i.length > 1 && h > t.smoothTileEdgesMinZoom && !t.iOSDevice && t.getRotation(!0) % 360 === 0 && e.supportsCanvas && (n = !0, o = s.getScaleForEdgeSmoothing(), r = s.getTranslationForEdgeSmoothing(o, t._drawer.getCanvasSize(!1), t._drawer.getCanvasSize(!0)));
                                n && (o || (a = t.viewport.viewportToViewerElementRectangle(t.getClippedBounds(!0)).getIntegerBoundingBox(), t._drawer.viewer.viewport.getFlip() && (0 === t.viewport.degrees && t.getRotation(!0) % 360 === 0 || (a.x = t._drawer.viewer.container.clientWidth - (a.x + a.width))), a = a.times(e.pixelDensityRatio)), t._drawer._clear(!0, a));
                                o || (0 !== t.viewport.degrees && t._drawer._offsetForRotation({
                                    degrees: t.viewport.degrees,
                                    useSketch: n
                                }), t.getRotation(!0) % 360 !== 0 && t._drawer._offsetForRotation({
                                    degrees: t.getRotation(!0),
                                    point: t.viewport.pixelFromPointNoRotate(t._getRotationPoint(!0), !0),
                                    useSketch: n
                                }), 0 === t.viewport.degrees && t.getRotation(!0) % 360 === 0 && t._drawer.viewer.viewport.getFlip() && t._drawer._flip());
                                var c = !1;
                                if (t._clip) {
                                    t._drawer.saveContext(n);
                                    var u = t.imageToViewportRectangle(t._clip, !0);
                                    u = u.rotate(-t.getRotation(!0), t._getRotationPoint(!0));
                                    var d = t._drawer.viewportToDrawerRectangle(u);
                                    o && (d = d.times(o)), r && (d = d.translate(r)), t._drawer.setClip(d, n), c = !0
                                }
                                if (t._croppingPolygons) {
                                    t._drawer.saveContext(n);
                                    try {
                                        var p = t._croppingPolygons.map((function(e) {
                                            return e.map((function(e) {
                                                var i = t.imageToViewportCoordinates(e.x, e.y, !0).rotate(-t.getRotation(!0), t._getRotationPoint(!0)),
                                                    n = t._drawer.viewportCoordToDrawerCoord(i);
                                                return o && (n = n.times(o)), n
                                            }))
                                        }));
                                        t._drawer.clipWithPolygons(p, n)
                                    } catch (f) {
                                        e.console.error(f)
                                    }
                                    c = !0
                                }
                                if (t.placeholderFillStyle && !1 === t._hasOpaqueTile) {
                                    var g = t._drawer.viewportToDrawerRectangle(t.getBounds(!0));
                                    o && (g = g.times(o)), r && (g = g.translate(r));
                                    var m = null;
                                    m = "function" === typeof t.placeholderFillStyle ? t.placeholderFillStyle(t, t._drawer.context) : t.placeholderFillStyle, t._drawer.drawRectangle(g, m, n)
                                }
                                for (var v = i.length - 1; v >= 0; v--) s = i[v], t._drawer.drawTile(s, t._drawingHandler, n, o, r), s.beingDrawn = !0, t.viewer && t.viewer.raiseEvent("tile-drawn", {
                                    tiledImage: t,
                                    tile: s
                                });
                                c && t._drawer.restoreContext(n);
                                o || (t.getRotation(!0) % 360 !== 0 && t._drawer._restoreRotationChanges(n), 0 !== t.viewport.degrees && t._drawer._restoreRotationChanges(n));
                                n && (o && (0 !== t.viewport.degrees && t._drawer._offsetForRotation({
                                    degrees: t.viewport.degrees,
                                    useSketch: !1
                                }), t.getRotation(!0) % 360 !== 0 && t._drawer._offsetForRotation({
                                    degrees: t.getRotation(!0),
                                    point: t.viewport.pixelFromPointNoRotate(t._getRotationPoint(!0), !0),
                                    useSketch: !1
                                })), t._drawer.blendSketch({
                                    opacity: t.opacity,
                                    scale: o,
                                    translate: r,
                                    compositeOperation: t.compositeOperation,
                                    bounds: a
                                }), o && (t.getRotation(!0) % 360 !== 0 && t._drawer._restoreRotationChanges(!1), 0 !== t.viewport.degrees && t._drawer._restoreRotationChanges(!1)));
                                o || 0 === t.viewport.degrees && t.getRotation(!0) % 360 === 0 && t._drawer.viewer.viewport.getFlip() && t._drawer._flip();
                                ! function(t, i) {
                                    if (t.debugMode)
                                        for (var n = i.length - 1; n >= 0; n--) {
                                            var o = i[n];
                                            try {
                                                t._drawer.drawDebugInfo(o, i.length, n, t)
                                            } catch (f) {
                                                e.console.error(f)
                                            }
                                        }
                                }(t, i)
                            }(this, this.lastDrawn), c && !c.context2D ? (! function(t, i, o) {
                                i.loading = !0, t._imageLoader.addJob({
                                    src: i.url,
                                    loadWithAjax: i.loadWithAjax,
                                    ajaxHeaders: i.ajaxHeaders,
                                    crossOriginPolicy: t.crossOriginPolicy,
                                    ajaxWithCredentials: t.ajaxWithCredentials,
                                    callback: function(r, s, a) {
                                        ! function(t, i, o, r, s, a) {
                                            if (!r) return e.console.log("Tile %s failed to load: %s - error: %s", i, i.url, s), t.viewer.raiseEvent("tile-load-failed", {
                                                tile: i,
                                                tiledImage: t,
                                                time: o,
                                                message: s,
                                                tileRequest: a
                                            }), i.loading = !1, void(i.exists = !1);
                                            if (o < t.lastResetTime) return e.console.log("Ignoring tile %s loaded before reset: %s", i, i.url), void(i.loading = !1);
                                            var l = function() {
                                                var e = t.source.getClosestLevel();
                                                n(t, i, r, e, a)
                                            };
                                            t._midDraw ? window.setTimeout(l, 1) : l()
                                        }(t, i, o, r, s, a)
                                    },
                                    abort: function() {
                                        i.loading = !1
                                    }
                                })
                            }(this, c, d), this._needsDraw = !0, this._setFullyLoaded(!1)) : this._setFullyLoaded(0 === this._tilesLoading)
                        },
                        _getCornerTiles: function(t, i, n) {
                            var o, r, s, a;
                            this.wrapHorizontal ? (o = e.positiveModulo(i.x, 1), r = e.positiveModulo(n.x, 1)) : (o = Math.max(0, i.x), r = Math.min(1, n.x));
                            var l = 1 / this.source.aspectRatio;
                            this.wrapVertical ? (s = e.positiveModulo(i.y, l), a = e.positiveModulo(n.y, l)) : (s = Math.max(0, i.y), a = Math.min(l, n.y));
                            var h = this.source.getTileAtPoint(t, new e.Point(o, s)),
                                c = this.source.getTileAtPoint(t, new e.Point(r, a)),
                                u = this.source.getNumTiles(t);
                            return this.wrapHorizontal && (h.x += u.x * Math.floor(i.x), c.x += u.x * Math.floor(n.x)), this.wrapVertical && (h.y += u.y * Math.floor(i.y / l), c.y += u.y * Math.floor(n.y / l)), {
                                topLeft: h,
                                bottomRight: c
                            }
                        }
                    })
                }(OpenSeadragon),
                function(e) {
                    var t = function(t) {
                            e.console.assert(t, "[TileCache.cacheTile] options is required"), e.console.assert(t.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(t.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = t.tile, this.tiledImage = t.tiledImage
                        },
                        i = function(t) {
                            e.console.assert(t, "[ImageRecord] options is required"), e.console.assert(t.image, "[ImageRecord] options.image is required"), this._image = t.image, this._tiles = []
                        };
                    i.prototype = {
                        destroy: function() {
                            this._image = null, this._renderedContext = null, this._tiles = null
                        },
                        getImage: function() {
                            return this._image
                        },
                        getRenderedContext: function() {
                            if (!this._renderedContext) {
                                var e = document.createElement("canvas");
                                e.width = this._image.width, e.height = this._image.height, this._renderedContext = e.getContext("2d"), this._renderedContext.drawImage(this._image, 0, 0), this._image = null
                            }
                            return this._renderedContext
                        },
                        setRenderedContext: function(t) {
                            e.console.error("ImageRecord.setRenderedContext is deprecated. The rendered context should be created by the ImageRecord itself when calling ImageRecord.getRenderedContext."), this._renderedContext = t
                        },
                        addTile: function(t) {
                            e.console.assert(t, "[ImageRecord.addTile] tile is required"), this._tiles.push(t)
                        },
                        removeTile: function(t) {
                            for (var i = 0; i < this._tiles.length; i++)
                                if (this._tiles[i] === t) return void this._tiles.splice(i, 1);
                            e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", t)
                        },
                        getTileCount: function() {
                            return this._tiles.length
                        }
                    }, e.TileCache = function(t) {
                        t = t || {}, this._maxImageCacheCount = t.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0
                    }, e.TileCache.prototype = {
                        numTilesLoaded: function() {
                            return this._tilesLoaded.length
                        },
                        cacheTile: function(n) {
                            e.console.assert(n, "[TileCache.cacheTile] options is required"), e.console.assert(n.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(n.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(n.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
                            var o = n.cutoff || 0,
                                r = this._tilesLoaded.length,
                                s = this._imagesLoaded[n.tile.cacheKey];
                            if (s || (e.console.assert(n.image, "[TileCache.cacheTile] options.image is required to create an ImageRecord"), s = this._imagesLoaded[n.tile.cacheKey] = new i({
                                    image: n.image
                                }), this._imagesLoadedCount++), s.addTile(n.tile), n.tile.cacheImageRecord = s, this._imagesLoadedCount > this._maxImageCacheCount) {
                                for (var a, l, h, c, u, d, p = null, g = -1, m = null, v = this._tilesLoaded.length - 1; v >= 0; v--)(a = (d = this._tilesLoaded[v]).tile).level <= o || a.beingDrawn || (p ? (c = a.lastTouchTime, l = p.lastTouchTime, u = a.level, h = p.level, (c < l || c == l && u > h) && (p = a, g = v, m = d)) : (p = a, g = v, m = d));
                                p && g >= 0 && (this._unloadTile(m), r = g)
                            }
                            this._tilesLoaded[r] = new t({
                                tile: n.tile,
                                tiledImage: n.tiledImage
                            })
                        },
                        clearTilesFor: function(t) {
                            var i;
                            e.console.assert(t, "[TileCache.clearTilesFor] tiledImage is required");
                            for (var n = 0; n < this._tilesLoaded.length; ++n)(i = this._tilesLoaded[n]).tiledImage === t && (this._unloadTile(i), this._tilesLoaded.splice(n, 1), n--)
                        },
                        getImageRecord: function(t) {
                            return e.console.assert(t, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[t]
                        },
                        _unloadTile: function(t) {
                            e.console.assert(t, "[TileCache._unloadTile] tileRecord is required");
                            var i = t.tile,
                                n = t.tiledImage;
                            i.unload(), i.cacheImageRecord = null;
                            var o = this._imagesLoaded[i.cacheKey];
                            o.removeTile(i), o.getTileCount() || (o.destroy(), delete this._imagesLoaded[i.cacheKey], this._imagesLoadedCount--), n.viewer.raiseEvent("tile-unloaded", {
                                tile: i,
                                tiledImage: n
                            })
                        }
                    }
                }(OpenSeadragon),
                function(e) {
                    e.World = function(t) {
                        var i = this;
                        e.console.assert(t.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = t.viewer, this._items = [], this._needsDraw = !1, this._autoRefigureSizes = !0, this._needsSizesFigured = !1, this._delegatedFigureSizes = function(e) {
                            i._autoRefigureSizes ? i._figureSizes() : i._needsSizesFigured = !0
                        }, this._figureSizes()
                    }, e.extend(e.World.prototype, e.EventSource.prototype, {
                        addItem: function(t, i) {
                            if (e.console.assert(t, "[World.addItem] item is required"), e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), void 0 !== (i = i || {}).index) {
                                var n = Math.max(0, Math.min(this._items.length, i.index));
                                this._items.splice(n, 0, t)
                            } else this._items.push(t);
                            this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0, this._needsDraw = !0, t.addHandler("bounds-change", this._delegatedFigureSizes), t.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", {
                                item: t
                            })
                        },
                        getItemAt: function(t) {
                            return e.console.assert(void 0 !== t, "[World.getItemAt] index is required"), this._items[t]
                        },
                        getIndexOfItem: function(t) {
                            return e.console.assert(t, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, t)
                        },
                        getItemCount: function() {
                            return this._items.length
                        },
                        setItemIndex: function(t, i) {
                            e.console.assert(t, "[World.setItemIndex] item is required"), e.console.assert(void 0 !== i, "[World.setItemIndex] index is required");
                            var n = this.getIndexOfItem(t);
                            if (i >= this._items.length) throw new Error("Index bigger than number of layers.");
                            i !== n && -1 !== n && (this._items.splice(n, 1), this._items.splice(i, 0, t), this._needsDraw = !0, this.raiseEvent("item-index-change", {
                                item: t,
                                previousIndex: n,
                                newIndex: i
                            }))
                        },
                        removeItem: function(t) {
                            e.console.assert(t, "[World.removeItem] item is required");
                            var i = e.indexOf(this._items, t); - 1 !== i && (t.removeHandler("bounds-change", this._delegatedFigureSizes), t.removeHandler("clip-change", this._delegatedFigureSizes), t.destroy(), this._items.splice(i, 1), this._figureSizes(), this._needsDraw = !0, this._raiseRemoveItem(t))
                        },
                        removeAll: function() {
                            var e, t;
                            for (this.viewer._cancelPendingImages(), t = 0; t < this._items.length; t++)(e = this._items[t]).removeHandler("bounds-change", this._delegatedFigureSizes), e.removeHandler("clip-change", this._delegatedFigureSizes), e.destroy();
                            var i = this._items;
                            for (this._items = [], this._figureSizes(), this._needsDraw = !0, t = 0; t < i.length; t++) e = i[t], this._raiseRemoveItem(e)
                        },
                        resetItems: function() {
                            for (var e = 0; e < this._items.length; e++) this._items[e].reset()
                        },
                        update: function() {
                            for (var e = !1, t = 0; t < this._items.length; t++) e = this._items[t].update() || e;
                            return e
                        },
                        draw: function() {
                            for (var e = 0; e < this._items.length; e++) this._items[e].draw();
                            this._needsDraw = !1
                        },
                        needsDraw: function() {
                            for (var e = 0; e < this._items.length; e++)
                                if (this._items[e].needsDraw()) return !0;
                            return this._needsDraw
                        },
                        getHomeBounds: function() {
                            return this._homeBounds.clone()
                        },
                        getContentFactor: function() {
                            return this._contentFactor
                        },
                        setAutoRefigureSizes: function(e) {
                            this._autoRefigureSizes = e, e & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = !1)
                        },
                        arrange: function(t) {
                            var i, n = (t = t || {}).immediately || !1,
                                o = t.layout || e.DEFAULT_SETTINGS.collectionLayout,
                                r = t.rows || e.DEFAULT_SETTINGS.collectionRows,
                                s = t.columns || e.DEFAULT_SETTINGS.collectionColumns,
                                a = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize,
                                l = a + (t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin);
                            i = !t.rows && s ? s : Math.ceil(this._items.length / r);
                            var h, c, u, d, p, g = 0,
                                m = 0;
                            this.setAutoRefigureSizes(!1);
                            for (var v = 0; v < this._items.length; v++) v && v % i === 0 && ("horizontal" === o ? (m += l, g = 0) : (g += l, m = 0)), d = (u = (c = (h = this._items[v]).getBounds()).width > c.height ? a : a * (c.width / c.height)) * (c.height / c.width), p = new e.Point(g + (a - u) / 2, m + (a - d) / 2), h.setPosition(p, n), h.setWidth(u, n), "horizontal" === o ? g += l : m += l;
                            this.setAutoRefigureSizes(!0)
                        },
                        _figureSizes: function() {
                            var t = this._homeBounds ? this._homeBounds.clone() : null,
                                i = this._contentSize ? this._contentSize.clone() : null,
                                n = this._contentFactor || 0;
                            if (this._items.length) {
                                var o = this._items[0],
                                    r = o.getBounds();
                                this._contentFactor = o.getContentSize().x / r.width;
                                for (var s = o.getClippedBounds().getBoundingBox(), a = s.x, l = s.y, h = s.x + s.width, c = s.y + s.height, u = 1; u < this._items.length; u++) r = (o = this._items[u]).getBounds(), this._contentFactor = Math.max(this._contentFactor, o.getContentSize().x / r.width), s = o.getClippedBounds().getBoundingBox(), a = Math.min(a, s.x), l = Math.min(l, s.y), h = Math.max(h, s.x + s.width), c = Math.max(c, s.y + s.height);
                                this._homeBounds = new e.Rect(a, l, h - a, c - l), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor)
                            } else this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
                            this._contentFactor === n && this._homeBounds.equals(t) && this._contentSize.equals(i) || this.raiseEvent("metrics-change", {})
                        },
                        _raiseRemoveItem: function(e) {
                            this.raiseEvent("remove-item", {
                                item: e
                            })
                        }
                    })
                }(OpenSeadragon)
        }
    }
]);