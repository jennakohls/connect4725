parcelRequire = function(e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[n][1][r] || r
            }, p.cache = {};
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function(e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function(r, n) {
        e[r] = [function(e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "5xDv": [function(require, module, exports) {
        var define;
        var e;

        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        parcelRequire = function(r, n, o, i) {
            var a = "function" == typeof parcelRequire && parcelRequire,
                u = "function" == typeof require && require;

            function s(e, t) {
                if (!n[e]) {
                    if (!r[e]) {
                        var o = "function" == typeof parcelRequire && parcelRequire;
                        if (!t && o) return o(e, !0);
                        if (a) return a(e, !0);
                        if (u && "string" == typeof e) return u(e);
                        var i = new Error("Cannot find module '" + e + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    l.resolve = function(t) {
                        return r[e][1][t] || t
                    }, l.cache = {};
                    var c = n[e] = new s.Module(e);
                    r[e][0].call(c.exports, l, c, c.exports, this)
                }
                return n[e].exports;

                function l(e) {
                    return s(l.resolve(e))
                }
            }
            s.isParcelRequire = !0, s.Module = function(e) {
                this.id = e, this.bundle = s, this.exports = {}
            }, s.modules = r, s.cache = n, s.parent = a, s.register = function(e, t) {
                r[e] = [function(e, r) {
                    r.exports = t
                }, {}]
            };
            for (var c = 0; c < o.length; c++) s(o[c]);
            if (o.length) {
                var l = s(o[o.length - 1]);
                "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof e && e.amd && e(function() {
                    return l
                })
            }
            return s
        }({
            "g5I+": [function(e, t, r) {
                var n, o, i = t.exports = {};

                function a() {
                    throw new Error("setTimeout has not been defined")
                }

                function u() {
                    throw new Error("clearTimeout has not been defined")
                }

                function s(e) {
                    if (n === setTimeout) return setTimeout(e, 0);
                    if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                    try {
                        return n(e, 0)
                    } catch (t) {
                        try {
                            return n.call(null, e, 0)
                        } catch (t) {
                            return n.call(this, e, 0)
                        }
                    }
                }

                function c(e) {
                    if (o === clearTimeout) return clearTimeout(e);
                    if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                    try {
                        return o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }! function() {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : a
                    } catch (e) {
                        n = a
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : u
                    } catch (e) {
                        o = u
                    }
                }();
                var l, f = [],
                    d = !1,
                    h = -1;

                function p() {
                    d && l && (d = !1, l.length ? f = l.concat(f) : h = -1, f.length && y())
                }

                function y() {
                    if (!d) {
                        var e = s(p);
                        d = !0;
                        for (var t = f.length; t;) {
                            for (l = f, f = []; ++h < t;) l && l[h].run();
                            h = -1, t = f.length
                        }
                        l = null, d = !1, c(e)
                    }
                }

                function v(e, t) {
                    this.fun = e, this.array = t
                }

                function b() {}
                i.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    f.push(new v(e, t)), 1 !== f.length || d || s(y)
                }, v.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function(e) {
                    return []
                }, i.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, i.cwd = function() {
                    return "/"
                }, i.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, i.umask = function() {
                    return 0
                }
            }, {}],
            GTq6: [function(e, r, n) {
                arguments[3], e("process");
                var o = arguments[3],
                    i = e("process");
                ! function(e, o) {
                    "object" == t(n) && void 0 !== r ? r.exports = o() : e.ES6Promise = o()
                }(this, function() {
                    "use strict";

                    function r(e) {
                        return "function" == typeof e
                    }
                    var n = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        a = 0,
                        u = void 0,
                        s = void 0,
                        c = function(e, t) {
                            v[a] = e, v[a + 1] = t, 2 === (a += 2) && (s ? s(b) : B())
                        },
                        l = "undefined" != typeof window ? window : void 0,
                        f = l || {},
                        d = f.MutationObserver || f.WebKitMutationObserver,
                        h = "undefined" == typeof self && void 0 !== i && "[object process]" === {}.toString.call(i),
                        p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function y() {
                        var e = setTimeout;
                        return function() {
                            return e(b, 1)
                        }
                    }
                    var v = new Array(1e3);

                    function b() {
                        for (var e = 0; e < a; e += 2)(0, v[e])(v[e + 1]), v[e] = void 0, v[e + 1] = void 0;
                        a = 0
                    }
                    var m, _, P, w, B = void 0;

                    function E(e, t) {
                        var r = this,
                            n = new this.constructor(A);
                        void 0 === n[S] && D(n);
                        var o = r._state;
                        if (o) {
                            var i = arguments[o - 1];
                            c(function() {
                                return G(o, n, i, r._result)
                            })
                        } else N(r, n, e, t);
                        return n
                    }

                    function g(e) {
                        if (e && "object" == t(e) && e.constructor === this) return e;
                        var r = new this(A);
                        return L(r, e), r
                    }
                    h ? B = function() {
                        return i.nextTick(b)
                    } : d ? (_ = 0, P = new d(b), w = document.createTextNode(""), P.observe(w, {
                        characterData: !0
                    }), B = function() {
                        w.data = _ = ++_ % 2
                    }) : p ? ((m = new MessageChannel).port1.onmessage = b, B = function() {
                        return m.port2.postMessage(0)
                    }) : B = void 0 === l && "function" == typeof e ? function() {
                        try {
                            var e = Function("return this")().require("vertx");
                            return void 0 !== (u = e.runOnLoop || e.runOnContext) ? function() {
                                u(b)
                            } : y()
                        } catch (e) {
                            return y()
                        }
                    }() : y();
                    var S = Math.random().toString(36).substring(2);

                    function A() {}
                    var M = void 0,
                        O = 1,
                        C = 2,
                        I = {
                            error: null
                        };

                    function R(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return I.error = e, I
                        }
                    }

                    function U(e, t, n) {
                        t.constructor === e.constructor && n === E && t.constructor.resolve === g ? function(e, t) {
                            t._state === O ? x(e, t._result) : t._state === C ? k(e, t._result) : N(t, void 0, function(t) {
                                return L(e, t)
                            }, function(t) {
                                return k(e, t)
                            })
                        }(e, t) : n === I ? (k(e, I.error), I.error = null) : void 0 === n ? x(e, t) : r(n) ? function(e, t, r) {
                            c(function(e) {
                                var n = !1,
                                    o = function(e, t, r, n) {
                                        try {
                                            e.call(t, r, n)
                                        } catch (e) {
                                            return e
                                        }
                                    }(r, t, function(r) {
                                        n || (n = !0, t !== r ? L(e, r) : x(e, r))
                                    }, function(t) {
                                        n || (n = !0, k(e, t))
                                    }, e._label);
                                !n && o && (n = !0, k(e, o))
                            }, e)
                        }(e, t, n) : x(e, t)
                    }

                    function L(e, r) {
                        var n, o;
                        e === r ? k(e, new TypeError("You cannot resolve a promise with itself")) : (o = t(n = r), null === n || "object" !== o && "function" !== o ? x(e, r) : U(e, r, R(r)))
                    }

                    function T(e) {
                        e._onerror && e._onerror(e._result), j(e)
                    }

                    function x(e, t) {
                        e._state === M && (e._result = t, e._state = O, 0 !== e._subscribers.length && c(j, e))
                    }

                    function k(e, t) {
                        e._state === M && (e._state = C, e._result = t, c(T, e))
                    }

                    function N(e, t, r, n) {
                        var o = e._subscribers,
                            i = o.length;
                        e._onerror = null, o[i] = t, o[i + O] = r, o[i + C] = n, 0 === i && e._state && c(j, e)
                    }

                    function j(e) {
                        var t = e._subscribers,
                            r = e._state;
                        if (0 !== t.length) {
                            for (var n = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) n = t[a], o = t[a + r], n ? G(r, n, o, i) : o(i);
                            e._subscribers.length = 0
                        }
                    }

                    function G(e, t, n, o) {
                        var i = r(n),
                            a = void 0,
                            u = void 0,
                            s = void 0,
                            c = void 0;
                        if (i) {
                            if ((a = function(e, t) {
                                    try {
                                        return e(t)
                                    } catch (e) {
                                        return I.error = e, I
                                    }
                                }(n, o)) === I ? (c = !0, u = a.error, a.error = null) : s = !0, t === a) return void k(t, new TypeError("A promises callback cannot return that same promise."))
                        } else a = o, s = !0;
                        t._state !== M || (i && s ? L(t, a) : c ? k(t, u) : e === O ? x(t, a) : e === C && k(t, a))
                    }
                    var Y = 0;

                    function D(e) {
                        e[S] = Y++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }
                    var W = function() {
                            function e(e, t) {
                                this._instanceConstructor = e, this.promise = new e(A), this.promise[S] || D(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && x(this.promise, this._result))) : k(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return e.prototype._enumerate = function(e) {
                                for (var t = 0; this._state === M && t < e.length; t++) this._eachEntry(e[t], t)
                            }, e.prototype._eachEntry = function(e, t) {
                                var r = this._instanceConstructor,
                                    n = r.resolve;
                                if (n === g) {
                                    var o = R(e);
                                    if (o === E && e._state !== M) this._settledAt(e._state, t, e._result);
                                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                    else if (r === V) {
                                        var i = new r(A);
                                        U(i, e, o), this._willSettleAt(i, t)
                                    } else this._willSettleAt(new r(function(t) {
                                        return t(e)
                                    }), t)
                                } else this._willSettleAt(n(e), t)
                            }, e.prototype._settledAt = function(e, t, r) {
                                var n = this.promise;
                                n._state === M && (this._remaining--, e === C ? k(n, r) : this._result[t] = r), 0 === this._remaining && x(n, this._result)
                            }, e.prototype._willSettleAt = function(e, t) {
                                var r = this;
                                N(e, void 0, function(e) {
                                    return r._settledAt(O, t, e)
                                }, function(e) {
                                    return r._settledAt(C, t, e)
                                })
                            }, e
                        }(),
                        V = function() {
                            function e(t) {
                                this[S] = Y++, this._result = this._state = void 0, this._subscribers = [], A !== t && ("function" != typeof t && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(), this instanceof e ? function(e, t) {
                                    try {
                                        t(function(t) {
                                            L(e, t)
                                        }, function(t) {
                                            k(e, t)
                                        })
                                    } catch (t) {
                                        k(e, t)
                                    }
                                }(this, t) : function() {
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                }())
                            }
                            return e.prototype.catch = function(e) {
                                return this.then(null, e)
                            }, e.prototype.finally = function(e) {
                                var t = this.constructor;
                                return r(e) ? this.then(function(r) {
                                    return t.resolve(e()).then(function() {
                                        return r
                                    })
                                }, function(r) {
                                    return t.resolve(e()).then(function() {
                                        throw r
                                    })
                                }) : this.then(e, e)
                            }, e
                        }();
                    return V.prototype.then = E, V.all = function(e) {
                        return new W(this, e).promise
                    }, V.race = function(e) {
                        var t = this;
                        return n(e) ? new t(function(r, n) {
                            for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(r, n)
                        }) : new t(function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    }, V.resolve = g, V.reject = function(e) {
                        var t = new this(A);
                        return k(t, e), t
                    }, V._setScheduler = function(e) {
                        s = e
                    }, V._setAsap = function(e) {
                        c = e
                    }, V._asap = c, V.polyfill = function() {
                        var e = void 0;
                        if (void 0 !== o) e = o;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var t = e.Promise;
                        if (t) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(t.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === r && !t.cast) return
                        }
                        e.Promise = V
                    }, V.Promise = V, V
                })
            }, {
                process: "g5I+"
            }],
            kRE6: [function(e, t, r) {
                "use strict";
                t.exports = e("./").polyfill()
            }, {
                "./": "GTq6"
            }],
            "4Uld": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.Utils = void 0;
                var n = e("./board"),
                    o = function() {
                        function e() {}
                        return e.showMessage = function(e) {
                            void 0 === e && (e = "");
                            var t = document.querySelector(".message");
                            if (t) {
                                t.classList.remove("hidden");
                                var r = document.querySelector(".message-body-content");
                                if (r) {
                                    r.innerHTML = e;
                                    var n = document.querySelector(".message-body-dismiss");
                                    n ? n.addEventListener("click", function e() {
                                        t.classList.add("invisible"), t.addEventListener("transitionend", function() {
                                            t.classList.add("hidden"), t.classList.remove("invisible")
                                        }), n.removeEventListener("click", e)
                                    }) : console.error("Message body dismiss DOM is null!")
                                } else console.error("Message body content DOM is null!")
                            } else console.error("Message DOM is null!")
                        }, e.drawCircle = function(e, t) {
                            var r = t.x,
                                n = void 0 === r ? 0 : r,
                                o = t.y,
                                i = void 0 === o ? 0 : o,
                                a = t.r,
                                u = void 0 === a ? 0 : a,
                                s = t.fillStyle,
                                c = void 0 === s ? "" : s,
                                l = t.strokeStyle,
                                f = void 0 === l ? "" : l;
                            e.save(), e.fillStyle = c, e.strokeStyle = f, e.beginPath(), e.arc(n, i, u, 0, 2 * Math.PI, !1), e.fill(), e.restore()
                        }, e.drawMask = function(e) {
                            var t = e.context;
                            t.save(), t.fillStyle = n.Board.MASK_COLOR, t.beginPath();
                            for (var r = 2 * n.Board.PIECE_RADIUS, o = 3 * n.Board.PIECE_RADIUS, i = 0; i < n.Board.ROWS; i++)
                                for (var a = 0; a < n.Board.COLUMNS; a++) t.arc(o * a + n.Board.MASK_X_BEGIN + r, o * i + n.Board.MASK_Y_BEGIN + r, n.Board.PIECE_RADIUS, 0, 2 * Math.PI), t.rect(o * a + n.Board.MASK_X_BEGIN + 2 * r, o * i + n.Board.MASK_Y_BEGIN, -2 * r, 2 * r);
                            t.fill(), t.restore()
                        }, e.clearCanvas = function(e) {
                            e.context.clearRect(0, 0, e.canvas.width, e.canvas.height)
                        }, e.isCoordOnColumn = function(e, t, r) {
                            return (e.x - t) * (e.x - t) <= r * r
                        }, e.getColumnFromCoord = function(t) {
                            for (var r = 0; r < n.Board.COLUMNS; r++)
                                if (e.isCoordOnColumn(t, 3 * n.Board.PIECE_RADIUS * r + n.Board.MASK_X_BEGIN + 2 * n.Board.PIECE_RADIUS, n.Board.PIECE_RADIUS)) return r;
                            return -1
                        }, e.getRandomColumnNumber = function() {
                            return Math.floor(Math.random() * n.Board.COLUMNS)
                        }, e.choose = function(e) {
                            return e[Math.floor(Math.random() * e.length)]
                        }, e.animationFrame = function() {
                            var e = null,
                                t = new Promise(function(t) {
                                    return e = t
                                });
                            return e && window.requestAnimationFrame(e), t
                        }, e.clone = function(e) {
                            for (var t = [], r = 0; r < e.length; r++) t[r] = e[r].slice();
                            return t
                        }, e.getMockPlayerAction = function(t, r, o) {
                            var i = e.clone(t);
                            if (i[0][o] !== n.BoardPiece.EMPTY || o < 0 || o >= n.Board.COLUMNS) return {
                                success: !1,
                                map: i
                            };
                            for (var a = !1, u = 0, s = 0; s < n.Board.ROWS - 1; s++)
                                if (i[s + 1][o] !== n.BoardPiece.EMPTY) {
                                    a = !0, u = s;
                                    break
                                } return a || (u = n.Board.ROWS - 1), i[u][o] = r, {
                                success: !0,
                                map: i
                            }
                        }, e.onresize = function() {
                            var e = [],
                                t = !1;

                            function r() {
                                t || (t = !0, window.requestAnimationFrame ? window.requestAnimationFrame(n) : setTimeout(n, 66))
                            }

                            function n() {
                                e.forEach(function(e) {
                                    e()
                                }), t = !1
                            }
                            return {
                                add: function(t) {
                                    e.length || window.addEventListener("resize", r),
                                        function(t) {
                                            t && e.push(t)
                                        }(t)
                                }
                            }
                        }, e.BIG_POSITIVE_NUMBER = Math.pow(10, 9) + 7, e.BIG_NEGATIVE_NUMBER = -e.BIG_POSITIVE_NUMBER, e
                    }();
                r.Utils = o
            }, {
                "./board": "8m8l"
            }],
            "n+5V": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.BoardBase = r.BoardPiece = void 0;
                var n, o = e("../utils");
                r.BoardPiece = n,
                    function(e) {
                        e[e.EMPTY = 0] = "EMPTY", e[e.PLAYER_1 = 1] = "PLAYER_1", e[e.PLAYER_2 = 2] = "PLAYER_2", e[e.DRAW = 3] = "DRAW"
                    }(n || (r.BoardPiece = n = {}));
                var i = function() {
                    function e(e) {
                        this.context = e, this.map = [], this.winnerBoardPiece = n.EMPTY, this.getBoardScale(), this.initConstants(), this.reset()
                    }
                    return e.prototype.reset = function() {
                        this.map = [];
                        for (var t = 0; t < e.ROWS; t++) {
                            this.map.push([]);
                            for (var r = 0; r < e.COLUMNS; r++) this.map[t].push(n.EMPTY)
                        }
                        this.winnerBoardPiece = n.EMPTY
                    }, e.prototype.getBoardScale = function() {
                        return window.innerWidth < 640 ? e.SCALE = .5 : e.SCALE = 1
                    }, e.prototype.initConstants = function() {
                        e.CANVAS_HEIGHT = 480 * e.SCALE, e.CANVAS_WIDTH = 640 * e.SCALE, e.PIECE_RADIUS = 25 * e.SCALE, e.MASK_X_BEGIN = Math.max(0, e.CANVAS_WIDTH - (3 * e.COLUMNS + 1) * e.PIECE_RADIUS) / 2, e.MASK_Y_BEGIN = Math.max(0, e.CANVAS_HEIGHT - (3 * e.ROWS + 1) * e.PIECE_RADIUS) / 2, e.MESSAGE_WIDTH = 400 * e.SCALE, e.MESSAGE_X_BEGIN = (e.CANVAS_WIDTH - e.MESSAGE_WIDTH) / 2, e.MESSAGE_Y_BEGIN = 20 * e.SCALE
                    }, e.prototype.applyPlayerAction = function(e, t) {
                        return function(e, t, r, n) {
                            return new(r || (r = Promise))(function(o, i) {
                                function a(e) {
                                    try {
                                        s(n.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        s(n.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function s(e) {
                                    e.done ? o(e.value) : new r(function(t) {
                                        t(e.value)
                                    }).then(a, u)
                                }
                                s((n = n.apply(e, t || [])).next())
                            })
                        }(this, void 0, Promise, function() {
                            var r, n, i;
                            return function(e, t) {
                                var r, n, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; a;) try {
                                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, n = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            a.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && a.label < o[1]) {
                                                            a.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, a)
                                            } catch (e) {
                                                i = [6, e], n = 0
                                            } finally {
                                                r = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, function(a) {
                                return r = o.Utils.getMockPlayerAction(this.map, e.boardPiece, t), n = r.success, i = r.map, this.map = i, this.debug(), [2, n]
                            })
                        })
                    }, e.prototype.debug = function() {
                        console.log(this.map.map(function(e) {
                            return e.join(" ")
                        }).join("\n"))
                    }, e.prototype.getWinner = function() {
                        var t = this;
                        if (this.winnerBoardPiece !== n.EMPTY) return this.winnerBoardPiece;
                        for (var r = [
                                [0, -1],
                                [0, 1],
                                [-1, -1],
                                [-1, 0],
                                [-1, 1],
                                [1, -1],
                                [1, 0],
                                [1, 1]
                            ], o = function r(n, o, i, a, u) {
                                return u >= 4 || !(n < 0 || o < 0 || n >= e.ROWS || o >= e.COLUMNS || t.map[n][o] !== i) && r(n + a[0], o + a[1], i, a, u + 1)
                            }, i = 0, a = 0; a < e.ROWS; a++)
                            for (var u = 0; u < e.COLUMNS; u++) {
                                var s = this.map[a][u];
                                if (s !== n.EMPTY) {
                                    for (var c = 0; c < r.length; c++)
                                        if (o(a + r[c][0], u + r[c][1], s, r[c], 1)) return this.winnerBoardPiece = s
                                } else i++
                            }
                        return 0 === i ? this.winnerBoardPiece = n.DRAW : n.EMPTY
                    }, e.prototype.announceWinner = function() {
                        if (this.winnerBoardPiece !== n.EMPTY) {
                            var e = "<h1>Thank you for playing.</h1>";
                            this.winnerBoardPiece === n.DRAW ? e += "It's a draw" : e += "Player " + this.winnerBoardPiece + " wins", e += ".<br />After dismissing this message, click the board to reset game.", o.Utils.showMessage(e)
                        }
                    }, e.prototype.getPlayerColor = function(t) {
                        switch (t) {
                            case n.PLAYER_1:
                                return e.PLAYER_1_COLOR;
                            case n.PLAYER_2:
                                return e.PLAYER_2_COLOR;
                            default:
                                return "transparent"
                        }
                    }, e.ROWS = 6, e.COLUMNS = 7, e.PLAYER_1_COLOR = "#ef453b", e.PLAYER_2_COLOR = "#0059ff", e.PIECE_STROKE_STYLE = "black", e.MASK_COLOR = "#d8d8d8", e
                }();
                r.BoardBase = i
            }, {
                "../utils": "4Uld"
            }],
            "65yB": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.Board = void 0;
                var n, o = e("./base"),
                    i = e("../utils"),
                    a = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    u = function(e, t, r, n) {
                        return new(r || (r = Promise))(function(o, i) {
                            function a(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                e.done ? o(e.value) : new r(function(t) {
                                    t(e.value)
                                }).then(a, u)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    },
                    s = function(e, t) {
                        var r, n, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], n = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    },
                    c = function(e) {
                        function t(t) {
                            var r = e.call(this, t.getContext("2d")) || this;
                            return r.canvas = t, r.getBoardScale(), r.initConstants(), r.reset(), r.onresize(), r
                        }
                        return a(t, e), t.prototype.onresize = function() {
                            var e = this,
                                t = o.BoardBase.SCALE;
                            i.Utils.onresize().add(function() {
                                e.getBoardScale(), t !== o.BoardBase.SCALE && (t = o.BoardBase.SCALE, e.initConstants(), i.Utils.clearCanvas(e), e.render())
                            })
                        }, t.prototype.reset = function() {
                            e.prototype.reset.call(this), this.canvas && (i.Utils.clearCanvas(this), this.render())
                        }, t.prototype.initConstants = function() {
                            e.prototype.initConstants.call(this), this.canvas && (this.canvas.width = o.BoardBase.CANVAS_WIDTH, this.canvas.height = o.BoardBase.CANVAS_HEIGHT)
                        }, t.prototype.animateAction = function(e, t, r) {
                            return u(this, void 0, Promise, function() {
                                var n, a, c, l = this;
                                return s(this, function(f) {
                                    switch (f.label) {
                                        case 0:
                                            n = this.getPlayerColor(r), a = 0, c = function() {
                                                return u(l, void 0, void 0, function() {
                                                    return s(this, function(e) {
                                                        return i.Utils.clearCanvas(this), i.Utils.drawCircle(this.context, {
                                                            x: 3 * o.BoardBase.PIECE_RADIUS * t + o.BoardBase.MASK_X_BEGIN + 2 * o.BoardBase.PIECE_RADIUS,
                                                            y: a + o.BoardBase.MASK_Y_BEGIN + 2 * o.BoardBase.PIECE_RADIUS,
                                                            r: o.BoardBase.PIECE_RADIUS,
                                                            fillStyle: n,
                                                            strokeStyle: o.BoardBase.PIECE_STROKE_STYLE
                                                        }), this.render(), a += o.BoardBase.PIECE_RADIUS, [2]
                                                    })
                                                })
                                            }, f.label = 1;
                                        case 1:
                                            return 3 * e * o.BoardBase.PIECE_RADIUS >= a ? [4, i.Utils.animationFrame()] : [3, 3];
                                        case 2:
                                            return f.sent(), c(), [3, 1];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.prototype.render = function() {
                            i.Utils.drawMask(this);
                            for (var e = 0; e < o.BoardBase.ROWS; e++)
                                for (var t = 0; t < o.BoardBase.COLUMNS; t++) i.Utils.drawCircle(this.context, {
                                    x: 3 * o.BoardBase.PIECE_RADIUS * t + o.BoardBase.MASK_X_BEGIN + 2 * o.BoardBase.PIECE_RADIUS,
                                    y: 3 * o.BoardBase.PIECE_RADIUS * e + o.BoardBase.MASK_Y_BEGIN + 2 * o.BoardBase.PIECE_RADIUS,
                                    r: o.BoardBase.PIECE_RADIUS,
                                    fillStyle: this.getPlayerColor(this.map[e][t]),
                                    strokeStyle: o.BoardBase.PIECE_STROKE_STYLE
                                })
                        }, t.prototype.applyPlayerAction = function(e, t) {
                            return u(this, void 0, Promise, function() {
                                var r, n, a;
                                return s(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (this.map[0][t] !== o.BoardPiece.EMPTY || t < 0 || t >= o.BoardBase.COLUMNS) return [2, !1];
                                            for (r = !1, n = 0, a = 0; a < o.BoardBase.ROWS - 1; a++)
                                                if (this.map[a + 1][t] !== o.BoardPiece.EMPTY) {
                                                    r = !0, n = a;
                                                    break
                                                } return r || (n = o.BoardBase.ROWS - 1), [4, this.animateAction(n, t, e.boardPiece)];
                                        case 1:
                                            return u.sent(), this.map[n][t] = e.boardPiece, this.debug(), [4, i.Utils.animationFrame()];
                                        case 2:
                                            return u.sent(), this.render(), [2, !0]
                                    }
                                })
                            })
                        }, t
                    }(o.BoardBase);
                r.Board = c
            }, {
                "./base": "n+5V",
                "../utils": "4Uld"
            }],
            "8m8l": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = e("./base");
                Object.keys(n).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    })
                });
                var o = e("./ui");
                Object.keys(o).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return o[e]
                        }
                    })
                })
            }, {
                "./base": "n+5V",
                "./ui": "65yB"
            }],
            "+wBg": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.GameBase = void 0;
                var n = e("../board"),
                    o = function(e, t, r, n) {
                        return new(r || (r = Promise))(function(o, i) {
                            function a(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                e.done ? o(e.value) : new r(function(t) {
                                    t(e.value)
                                }).then(a, u)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    },
                    i = function(e, t) {
                        var r, n, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], n = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    },
                    a = function() {
                        function e(e, t) {
                            this.isMoveAllowed = !1, this.isGameWon = !1, this.board = t, this.players = e, this.currentPlayerId = 0, this.reset()
                        }
                        return e.prototype.reset = function() {
                            this.isMoveAllowed = !1, this.isGameWon = !1, this.board.reset(), this.board.debug()
                        }, e.prototype.start = function() {
                            return o(this, void 0, void 0, function() {
                                var e;
                                return i(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.isMoveAllowed = !0, t.label = 1;
                                        case 1:
                                            return this.isGameWon ? [3, 3] : [4, this.move()];
                                        case 2:
                                            return t.sent(), (e = this.board.getWinner()) !== n.BoardPiece.EMPTY ? (console.log("Game over: winner is player ", e), this.isGameWon = !0, this.isMoveAllowed = !1, this.board.announceWinner(), [3, 3]) : [3, 1];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, e.prototype.move = function() {
                            return o(this, void 0, void 0, function() {
                                var e, t, r;
                                return i(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.isMoveAllowed) return [2];
                                            e = this.players[this.currentPlayerId], t = !1, n.label = 1;
                                        case 1:
                                            return t ? [3, 4] : [4, e.getAction(this.board)];
                                        case 2:
                                            return r = n.sent(), this.isMoveAllowed = !1, [4, this.board.applyPlayerAction(e, r)];
                                        case 3:
                                            return t = n.sent(), this.isMoveAllowed = !0, t ? this.afterMove(r) : console.log("Move not allowed! Try again."), [3, 1];
                                        case 4:
                                            return this.currentPlayerId = this.getNextPlayer(), [2]
                                    }
                                })
                            })
                        }, e.prototype.getNextPlayer = function() {
                            return 0 === this.currentPlayerId ? 1 : 0
                        }, e
                    }();
                r.GameBase = a
            }, {
                "../board": "8m8l"
            }],
            yNeU: [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.Player = void 0;
                var n = function(e) {
                    this.boardPiece = e
                };
                r.Player = n
            }, {}],
            FBbP: [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.PlayerAi = void 0;
                var n, o = e("./player"),
                    i = e("../board"),
                    a = e("../utils"),
                    u = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    s = function(e) {
                        function t(t) {
                            var r = e.call(this, t) || this;
                            return r.ownBoardPieceValue = r.getBoardPieceValue(t), r.enemyBoardPiece = t === i.BoardPiece.PLAYER_1 ? i.BoardPiece.PLAYER_2 : i.BoardPiece.PLAYER_1, r
                        }
                        return u(t, e), t.prototype.getBoardPieceValue = function(e) {
                            return e === i.BoardPiece.EMPTY ? 0 : e === this.boardPiece ? 1 : -1
                        }, t.prototype.getStateValue = function(e) {
                            for (var t = i.BoardPiece.EMPTY, r = 0, n = 0; n < i.Board.ROWS; n++)
                                for (var o = 0; o < i.Board.COLUMNS; o++) {
                                    for (var a = 0, u = 0, s = 0, c = 0, l = 0; l <= 3; l++) o + l < i.Board.COLUMNS && (a += this.getBoardPieceValue(e[n][o + l])), n + l < i.Board.ROWS && (u += this.getBoardPieceValue(e[n + l][o])), n + l < i.Board.ROWS && o + l < i.Board.COLUMNS && (s += this.getBoardPieceValue(e[n + l][o + l])), n - l >= 0 && o + l < 7 && (c += this.getBoardPieceValue(e[n - l][o + l]));
                                    r += a * a * a, r += u * u * u, r += s * s * s, r += c * c * c, 4 === Math.abs(a) ? t = a > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(u) ? t = u > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(s) ? t = s > 0 ? this.boardPiece : this.enemyBoardPiece : 4 === Math.abs(c) && (t = c > 0 ? this.boardPiece : this.enemyBoardPiece)
                                }
                            return {
                                winnerBoardPiece: t,
                                chain: r
                            }
                        }, t.prototype.transformValues = function(e, t, r) {
                            var n = t === this.boardPiece,
                                o = t === this.enemyBoardPiece;
                            return n ? e = a.Utils.BIG_POSITIVE_NUMBER - 100 : o && (e = a.Utils.BIG_NEGATIVE_NUMBER + 100), e - r * r
                        }, t.prototype.getMove = function(e, r, n, o) {
                            var i = this.getStateValue(e),
                                a = i.winnerBoardPiece === this.boardPiece,
                                u = i.winnerBoardPiece === this.enemyBoardPiece;
                            return r >= t.MAX_DEPTH || a || u ? {
                                value: this.transformValues(i.chain * this.ownBoardPieceValue, i.winnerBoardPiece, r),
                                move: -1
                            } : r % 2 == 0 ? this.minState(e, r + 1, n, o) : this.maxState(e, r + 1, n, o)
                        }, t.prototype.maxState = function(e, t, r, n) {
                            for (var o = a.Utils.BIG_NEGATIVE_NUMBER, u = [], s = 0; s < i.Board.COLUMNS; s++) {
                                var c = a.Utils.getMockPlayerAction(e, this.boardPiece, s),
                                    l = c.success,
                                    f = c.map;
                                if (l) {
                                    var d = this.getMove(f, t, r, n),
                                        h = d.value;
                                    if (d.move, h > o ? (o = h, u = [s]) : h === o && u.push(s), o > n) return {
                                        value: o,
                                        move: a.Utils.choose(u)
                                    };
                                    r = Math.max(r, o)
                                }
                            }
                            return {
                                value: o,
                                move: a.Utils.choose(u)
                            }
                        }, t.prototype.minState = function(e, t, r, n) {
                            for (var o = a.Utils.BIG_POSITIVE_NUMBER, u = [], s = 0; s < i.Board.COLUMNS; s++) {
                                var c = a.Utils.getMockPlayerAction(e, this.enemyBoardPiece, s),
                                    l = c.success,
                                    f = c.map;
                                if (l) {
                                    var d = this.getMove(f, t, r, n),
                                        h = d.value;
                                    if (d.move, h < o ? (o = h, u = [s]) : h === o && u.push(s), o < r) return {
                                        value: o,
                                        move: a.Utils.choose(u)
                                    };
                                    n = Math.min(n, o)
                                }
                            }
                            return {
                                value: o,
                                move: a.Utils.choose(u)
                            }
                        }, t.prototype.getAction = function(e) {
                            return function(e, t, r, n) {
                                return new(r || (r = Promise))(function(o, i) {
                                    function a(e) {
                                        try {
                                            s(n.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function u(e) {
                                        try {
                                            s(n.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function s(e) {
                                        e.done ? o(e.value) : new r(function(t) {
                                            t(e.value)
                                        }).then(a, u)
                                    }
                                    s((n = n.apply(e, t || [])).next())
                                })
                            }(this, void 0, Promise, function() {
                                var t, r;
                                return function(e, t) {
                                    var r, n, o, i, a = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return i = {
                                        next: u(0),
                                        throw: u(1),
                                        return: u(2)
                                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                        return this
                                    }), i;

                                    function u(i) {
                                        return function(u) {
                                            return function(i) {
                                                if (r) throw new TypeError("Generator is already executing.");
                                                for (; a;) try {
                                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = i;
                                                            break;
                                                        case 4:
                                                            return a.label++, {
                                                                value: i[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            a.label++, n = i[1], i = [0];
                                                            continue;
                                                        case 7:
                                                            i = a.ops.pop(), a.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                                a = 0;
                                                                continue
                                                            }
                                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                                a.label = i[1];
                                                                break
                                                            }
                                                            if (6 === i[0] && a.label < o[1]) {
                                                                a.label = o[1], o = i;
                                                                break
                                                            }
                                                            if (o && a.label < o[2]) {
                                                                a.label = o[2], a.ops.push(i);
                                                                break
                                                            }
                                                            o[2] && a.ops.pop(), a.trys.pop();
                                                            continue
                                                    }
                                                    i = t.call(e, a)
                                                } catch (e) {
                                                    i = [6, e], n = 0
                                                } finally {
                                                    r = o = 0
                                                }
                                                if (5 & i[0]) throw i[1];
                                                return {
                                                    value: i[0] ? i[1] : void 0,
                                                    done: !0
                                                }
                                            }([i, u])
                                        }
                                    }
                                }(this, function(n) {
                                    return t = a.Utils.clone(e.map), r = this.maxState(t, 0, a.Utils.BIG_NEGATIVE_NUMBER, a.Utils.BIG_POSITIVE_NUMBER), console.log("AI " + this.boardPiece + " choose column " + r.move + " with value of " + r.value), [2, r.move]
                                })
                            })
                        }, t.MAX_DEPTH = 4, t
                    }(o.Player);
                r.PlayerAi = s
            }, {
                "./player": "yNeU",
                "../board": "8m8l",
                "../utils": "4Uld"
            }],
            "Sw/V": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.PlayerHuman = void 0;
                var n, o = e("./player"),
                    i = e("../board"),
                    a = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    u = function(e) {
                        function t(t) {
                            var r = e.call(this, t) || this;
                            return r.clickPromiseResolver = null, r
                        }
                        return a(t, e), t.prototype.doAction = function(e) {
                            this.clickPromiseResolver && 0 <= e && e < i.Board.COLUMNS && this.clickPromiseResolver(e)
                        }, t.prototype.getAction = function(e) {
                            return function(e, t, r, n) {
                                return new(r || (r = Promise))(function(o, i) {
                                    function a(e) {
                                        try {
                                            s(n.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function u(e) {
                                        try {
                                            s(n.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }

                                    function s(e) {
                                        e.done ? o(e.value) : new r(function(t) {
                                            t(e.value)
                                        }).then(a, u)
                                    }
                                    s((n = n.apply(e, t || [])).next())
                                })
                            }(this, void 0, Promise, function() {
                                var e = this;
                                return function(e, t) {
                                    var r, n, o, i, a = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return i = {
                                        next: u(0),
                                        throw: u(1),
                                        return: u(2)
                                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                        return this
                                    }), i;

                                    function u(i) {
                                        return function(u) {
                                            return function(i) {
                                                if (r) throw new TypeError("Generator is already executing.");
                                                for (; a;) try {
                                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = i;
                                                            break;
                                                        case 4:
                                                            return a.label++, {
                                                                value: i[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            a.label++, n = i[1], i = [0];
                                                            continue;
                                                        case 7:
                                                            i = a.ops.pop(), a.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                                a = 0;
                                                                continue
                                                            }
                                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                                a.label = i[1];
                                                                break
                                                            }
                                                            if (6 === i[0] && a.label < o[1]) {
                                                                a.label = o[1], o = i;
                                                                break
                                                            }
                                                            if (o && a.label < o[2]) {
                                                                a.label = o[2], a.ops.push(i);
                                                                break
                                                            }
                                                            o[2] && a.ops.pop(), a.trys.pop();
                                                            continue
                                                    }
                                                    i = t.call(e, a)
                                                } catch (e) {
                                                    i = [6, e], n = 0
                                                } finally {
                                                    r = o = 0
                                                }
                                                if (5 & i[0]) throw i[1];
                                                return {
                                                    value: i[0] ? i[1] : void 0,
                                                    done: !0
                                                }
                                            }([i, u])
                                        }
                                    }
                                }(this, function(t) {
                                    return [2, new Promise(function(t) {
                                        return e.clickPromiseResolver = t
                                    })]
                                })
                            })
                        }, t
                    }(o.Player);
                r.PlayerHuman = u
            }, {
                "./player": "yNeU",
                "../board": "8m8l"
            }],
            "7u8J": [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = e("./player");
                Object.keys(n).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    })
                });
                var o = e("./player-ai");
                Object.keys(o).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return o[e]
                        }
                    })
                });
                var i = e("./player-human");
                Object.keys(i).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return i[e]
                        }
                    })
                })
            }, {
                "./player": "yNeU",
                "./player-ai": "FBbP",
                "./player-human": "Sw/V"
            }],
            fED2: [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.initGameLocal2p = function() {
                    var e = this,
                        t = document.querySelector("canvas");
                    if (t) {
                        var r = new o.Board(t),
                            n = [new a.PlayerHuman(o.BoardPiece.PLAYER_1), new a.PlayerHuman(o.BoardPiece.PLAYER_2)],
                            i = new f(n, r);
                        i.start(), t.addEventListener("click", function(r) {
                            return c(e, void 0, void 0, function() {
                                var e, o, a, s;
                                return l(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return i.isGameWon ? (i.reset(), [4, u.Utils.animationFrame()]) : [3, 2];
                                        case 1:
                                            return c.sent(), i.start(), [3, 3];
                                        case 2:
                                            e = t.getBoundingClientRect(), o = r.clientX - e.left, a = r.clientY - e.top, s = u.Utils.getColumnFromCoord({
                                                x: o,
                                                y: a
                                            }), n[i.currentPlayerId].doAction(s), c.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    } else console.error("Canvas DOM is null")
                };
                var n, o = e("../board"),
                    i = e("./game-base"),
                    a = e("../player"),
                    u = e("../utils"),
                    s = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    c = function(e, t, r, n) {
                        return new(r || (r = Promise))(function(o, i) {
                            function a(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                e.done ? o(e.value) : new r(function(t) {
                                    t(e.value)
                                }).then(a, u)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    },
                    l = function(e, t) {
                        var r, n, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], n = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    },
                    f = function(e) {
                        function t(t, r) {
                            return e.call(this, t, r) || this
                        }
                        return s(t, e), t.prototype.afterMove = function() {}, t
                    }(i.GameBase)
            }, {
                "../board": "8m8l",
                "./game-base": "+wBg",
                "../player": "7u8J",
                "../utils": "4Uld"
            }],
            RxRd: [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.initGameLocalAi = function() {
                    var e = this,
                        t = document.querySelector("canvas");
                    if (t) {
                        var r = new o.Board(t),
                            n = new a.PlayerHuman(o.BoardPiece.PLAYER_1),
                            i = new f([n, new a.PlayerAi(o.BoardPiece.PLAYER_2)], r);
                        i.start(), t.addEventListener("click", function(r) {
                            return c(e, void 0, void 0, function() {
                                var e, o, a, s;
                                return l(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return i.isGameWon ? (i.reset(), [4, u.Utils.animationFrame()]) : [3, 2];
                                        case 1:
                                            return c.sent(), i.start(), [3, 3];
                                        case 2:
                                            e = t.getBoundingClientRect(), o = r.clientX - e.left, a = r.clientY - e.top, s = u.Utils.getColumnFromCoord({
                                                x: o,
                                                y: a
                                            }), n.doAction(s), c.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    } else console.error("Canvas DOM is null")
                };
                var n, o = e("../board"),
                    i = e("./game-base"),
                    a = e("../player"),
                    u = e("../utils"),
                    s = (n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            })(e, t)
                    }, function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    c = function(e, t, r, n) {
                        return new(r || (r = Promise))(function(o, i) {
                            function a(e) {
                                try {
                                    s(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function u(e) {
                                try {
                                    s(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                e.done ? o(e.value) : new r(function(t) {
                                    t(e.value)
                                }).then(a, u)
                            }
                            s((n = n.apply(e, t || [])).next())
                        })
                    },
                    l = function(e, t) {
                        var r, n, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (r) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, n = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], n = 0
                                    } finally {
                                        r = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    },
                    f = function(e) {
                        function t(t, r) {
                            return e.call(this, t, r) || this
                        }
                        return s(t, e), t.prototype.afterMove = function() {}, t
                    }(i.GameBase)
            }, {
                "../board": "8m8l",
                "./game-base": "+wBg",
                "../player": "7u8J",
                "../utils": "4Uld"
            }],
            Ztbj: [function(e, t, r) {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = e("./game-base");
                Object.keys(n).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return n[e]
                        }
                    })
                });
                var o = e("./game-local-2p");
                Object.keys(o).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return o[e]
                        }
                    })
                });
                var i = e("./game-local-ai");
                Object.keys(i).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(r, e, {
                        enumerable: !0,
                        get: function() {
                            return i[e]
                        }
                    })
                })
            }, {
                "./game-base": "+wBg",
                "./game-local-2p": "fED2",
                "./game-local-ai": "RxRd"
            }],
            Lat4: [function(e, t, r) {}, {}],
            "+YSF": [function(e, t, r) {
                "use strict";
                e("es6-promise/auto");
                var n = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                    n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                                } return t.default = e, t
                    }(e("./game")),
                    o = e("./board");
                e("./style.css"), document.addEventListener("DOMContentLoaded", function() {
                    var e = document.querySelector("canvas");
                    if (e) {
                        new o.Board(e).render();
                        var t = document.querySelector(".mode-chooser-submit");
                        t && t.addEventListener("click", function() {
                            var e = document.querySelector(".mode");
                            if (e) {
                                for (var t = document.querySelectorAll(".mode-chooser-input"), r = null, o = 0; o < t.length && !(r = t[o].checked ? t[o].value : null); o++);
                                r || (r = "offline-ai"), "offline-human" === r ? n.initGameLocal2p() : "offline-ai" === r && n.initGameLocalAi(), e.classList.add("invisible"), e.addEventListener("transitionend", function() {
                                    e.classList.add("hidden")
                                })
                            }
                        })
                    } else console.error("Canvas DOM is null")
                })
            }, {
                "es6-promise/auto": "kRE6",
                "./game": "Ztbj",
                "./board": "8m8l",
                "./style.css": "Lat4"
            }]
        }, {}, ["+YSF"]);
    }, {}]
}, {}, ["5xDv"], null)
//# sourceMappingURL=./app.eda8459b.32334677.map