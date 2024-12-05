var prestashop;
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = !0;
        return module.exports;
        /******/
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
    /******/
}
)([(function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    __webpack_require__(3);
    __webpack_require__(5);
    __webpack_require__(10);
    __webpack_require__(11);
    __webpack_require__(12);
    __webpack_require__(13);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _events = __webpack_require__(14);
    var _events2 = _interopRequireDefault(_events);
    var _common = __webpack_require__(7);
    window.$ = _jquery2['default'];
    window.jQuery = _jquery2['default'];
    for (var i in _events2['default'].prototype) {
        _prestashop2['default'][i] = _events2['default'].prototype[i]
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        (0,
        _common.psShowHide)()
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "use strict";
    (function(global, factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, !0) : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return factory(w)
            }
        } else {
            factory(global)
        }
    }
    )(typeof window !== "undefined" ? window : undefined, function(window, noGlobal) {
        var arr = [];
        var document = window.document;
        var _slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var version = "2.2.4"
          , jQuery = function jQuery(selector, context) {
            return new jQuery.fn.init(selector,context)
        }
          , rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , rmsPrefix = /^-ms-/
          , rdashAlpha = /-([\da-z])/gi
          , fcamelCase = function fcamelCase(all, letter) {
            return letter.toUpperCase()
        };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function toArray() {
                return _slice.call(this)
            },
            get: function get(num) {
                return num != null ? num < 0 ? this[num + this.length] : this[num] : _slice.call(this)
            },
            pushStack: function pushStack(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                ret.context = this.context;
                return ret
            },
            each: function each(callback) {
                return jQuery.each(this, callback)
            },
            map: function map(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            slice: function slice() {
                return this.pushStack(_slice.apply(this, arguments))
            },
            first: function first() {
                return this.eq(0)
            },
            last: function last() {
                return this.eq(-1)
            },
            eq: function eq(i) {
                var len = this.length
                  , j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            end: function end() {
                return this.prevObject || this.constructor()
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) {
                target = {}
            }
            if (i === length) {
                target = this;
                i--
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = !1;
                                clone = src && jQuery.isArray(src) ? src : []
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {}
                            }
                            target[name] = jQuery.extend(deep, clone, copy)
                        } else if (copy !== undefined) {
                            target[name] = copy
                        }
                    }
                }
            }
            return target
        }
        ;
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function error(msg) {
                throw new Error(msg)
            },
            noop: function noop() {},
            isFunction: function isFunction(obj) {
                return jQuery.type(obj) === "function"
            },
            isArray: Array.isArray,
            isWindow: function isWindow(obj) {
                return obj != null && obj === obj.window
            },
            isNumeric: function isNumeric(obj) {
                var realStringObj = obj && obj.toString();
                return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0
            },
            isPlainObject: function isPlainObject(obj) {
                var key;
                if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                    return !1
                }
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                    return !1
                }
                for (key in obj) {}
                return key === undefined || hasOwn.call(obj, key)
            },
            isEmptyObject: function isEmptyObject(obj) {
                var name;
                for (name in obj) {
                    return !1
                }
                return !0
            },
            type: function type(obj) {
                if (obj == null) {
                    return obj + ""
                }
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
            },
            globalEval: function globalEval(code) {
                var script, indirect = eval;
                code = jQuery.trim(code);
                if (code) {
                    if (code.indexOf("use strict") === 1) {
                        script = document.createElement("script");
                        script.text = code;
                        document.head.appendChild(script).parentNode.removeChild(script)
                    } else {
                        indirect(code)
                    }
                }
            },
            camelCase: function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            nodeName: function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            },
            each: function each(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) {
                    length = obj.length;
                    for (; i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === !1) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === !1) {
                            break
                        }
                    }
                }
                return obj
            },
            trim: function trim(text) {
                return text == null ? "" : (text + "").replace(rtrim, "")
            },
            makeArray: function makeArray(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArrayLike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                    } else {
                        push.call(ret, arr)
                    }
                }
                return ret
            },
            inArray: function inArray(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i)
            },
            merge: function merge(first, second) {
                var len = +second.length
                  , j = 0
                  , i = first.length;
                for (; j < len; j++) {
                    first[i++] = second[j]
                }
                first.length = i;
                return first
            },
            grep: function grep(elems, callback, invert) {
                var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                for (; i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i])
                    }
                }
                return matches
            },
            map: function map(elems, callback, arg) {
                var length, value, i = 0, ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value)
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value)
                        }
                    }
                }
                return concat.apply([], ret)
            },
            guid: 1,
            proxy: function proxy(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp
                }
                if (!jQuery.isFunction(fn)) {
                    return undefined
                }
                args = _slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(_slice.call(arguments)))
                }
                ;
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy
            },
            now: Date.now,
            support: support
        });
        if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        });
        function isArrayLike(obj) {
            var length = !!obj && "length"in obj && obj.length
              , type = jQuery.type(obj);
            if (type === "function" || jQuery.isWindow(obj)) {
                return !1
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj
        }
        var Sizzle = (function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function sortOrder(a, b) {
                if (a === b) {
                    hasDuplicate = !0
                }
                return 0
            }, MAX_NEGATIVE = 1 << 31, hasOwn = ({}).hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function indexOf(list, elem) {
                var i = 0
                  , len = list.length;
                for (; i < len; i++) {
                    if (list[i] === elem) {
                        return i
                    }
                }
                return -1
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+","g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                "ID": new RegExp("^#(" + identifier + ")"),
                "CLASS": new RegExp("^\\.(" + identifier + ")"),
                "TAG": new RegExp("^(" + identifier + "|[*])"),
                "ATTR": new RegExp("^" + attributes),
                "PSEUDO": new RegExp("^" + pseudos),
                "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),
                "bool": new RegExp("^(?:" + booleans + ")$","i"),
                "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")
            }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"), funescape = function funescape(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 0x10000;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00)
            }, unloadHandler = function unloadHandler() {
                setDocument()
            };
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els))
                    }
                    : function(target, els) {
                        var j = target.length
                          , i = 0;
                        while (target[j++] = els[i++]) {}
                        target.length = j - 1
                    }
                }
            }
            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context)
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if (m = match[1]) {
                                if (nodeType === 9) {
                                    if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results
                                        }
                                    } else {
                                        return results
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results
                            }
                        }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector
                            } else if (context.nodeName.toLowerCase() !== "object") {
                                if (nid = context.getAttribute("id")) {
                                    nid = nid.replace(rescape, "\\$&")
                                } else {
                                    context.setAttribute("id", nid = expando)
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                while (i--) {
                                    groups[i] = nidselect + " " + toSelector(groups[i])
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed)
            }
            function createCache() {
                var keys = [];
                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()]
                    }
                    return cache[key + " "] = value
                }
                return cache
            }
            function markFunction(fn) {
                fn[expando] = !0;
                return fn
            }
            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div)
                } catch (e) {
                    return !1
                } finally {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div)
                    }
                    div = null
                }
            }
            function addHandle(attrs, handler) {
                var arr = attrs.split("|")
                  , i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler
                }
            }
            function siblingCheck(a, b) {
                var cur = b && a
                  , diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                if (diff) {
                    return diff
                }
                if (cur) {
                    while (cur = cur.nextSibling) {
                        if (cur === b) {
                            return -1
                        }
                    }
                }
                return a ? 1 : -1
            }
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type
                }
            }
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type
                }
            }
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[j = matchIndexes[i]]) {
                                seed[j] = !(matches[j] = seed[j])
                            }
                        }
                    })
                })
            }
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : !1
            }
            ;
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if ((parent = document.defaultView) && parent.top !== parent) {
                    if (parent.addEventListener) {
                        parent.addEventListener("unload", unloadHandler, !1)
                    } else if (parent.attachEvent) {
                        parent.attachEvent("onunload", unloadHandler)
                    }
                }
                support.attributes = assert(function(div) {
                    div.className = "i";
                    return !div.getAttribute("className")
                });
                support.getElementsByTagName = assert(function(div) {
                    div.appendChild(document.createComment(""));
                    return !div.getElementsByTagName("*").length
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(div) {
                    docElem.appendChild(div).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length
                });
                if (support.getById) {
                    Expr.find.ID = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m ? [m] : []
                        }
                    }
                    ;
                    Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }
                } else {
                    delete Expr.find.ID;
                    Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }
                }
                Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag)
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag)
                    }
                }
                : function(tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while (elem = results[i++]) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem)
                            }
                        }
                        return tmp
                    }
                    return results
                }
                ;
                Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className)
                    }
                }
                ;
                rbuggyMatches = [];
                rbuggyQSA = [];
                if (support.qsa = rnative.test(document.querySelectorAll)) {
                    assert(function(div) {
                        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (div.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                        }
                        if (!div.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                        }
                        if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=")
                        }
                        if (!div.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked")
                        }
                        if (!div.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]")
                        }
                    });
                    assert(function(div) {
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        div.appendChild(input).setAttribute("name", "D");
                        if (div.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=")
                        }
                        if (!div.querySelectorAll(":enabled").length) {
                            rbuggyQSA.push(":enabled", ":disabled")
                        }
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:")
                    })
                }
                if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                    assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div");
                        matches.call(div, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos)
                    })
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a
                      , bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
                }
                : function(a, b) {
                    if (b) {
                        while (b = b.parentNode) {
                            if (b === a) {
                                return !0
                            }
                        }
                    }
                    return !1
                }
                ;
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1
                        }
                        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                    }
                    return compare & 4 ? -1 : 1
                }
                : function(a, b) {
                    if (a === b) {
                        hasDuplicate = !0;
                        return 0
                    }
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
                    } else if (aup === bup) {
                        return siblingCheck(a, b)
                    }
                    cur = a;
                    while (cur = cur.parentNode) {
                        ap.unshift(cur)
                    }
                    cur = b;
                    while (cur = cur.parentNode) {
                        bp.unshift(cur)
                    }
                    while (ap[i] === bp[i]) {
                        i++
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                }
                ;
                return document
            }
            ;
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements)
            }
            ;
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0
            }
            ;
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context)
                }
                return contains(context, elem)
            }
            ;
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem)
                }
                var fn = Expr.attrHandle[name.toLowerCase()]
                  , val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
            }
            ;
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
            }
            ;
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while (elem = results[i++]) {
                        if (elem === results[i]) {
                            j = duplicates.push(i)
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1)
                    }
                }
                sortInput = null;
                return results
            }
            ;
            getText = Sizzle.getText = function(elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    while (node = elem[i++]) {
                        ret += getText(node)
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem)
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue
                }
                return ret
            }
            ;
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
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
                    "ATTR": function ATTR(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " "
                        }
                        return match.slice(0, 4)
                    },
                    "CHILD": function CHILD(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0])
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +(match[7] + match[8] || match[3] === "odd")
                        } else if (match[3]) {
                            Sizzle.error(match[0])
                        }
                        return match
                    },
                    "PSEUDO": function PSEUDO(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr.CHILD.test(match[0])) {
                            return null
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || ""
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess)
                        }
                        return match.slice(0, 3)
                    }
                },
                filter: {
                    "TAG": function TAG(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return !0
                        }
                        : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                        }
                    },
                    "CLASS": function CLASS(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "")
                        })
                    },
                    "ATTR": function ATTR(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!="
                            }
                            if (!operator) {
                                return !0
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1
                        }
                    },
                    "CHILD": function CHILD(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth"
                          , forward = type.slice(-4) !== "last"
                          , ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode
                        }
                        : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = !1;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while (node = node[dir]) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return !1
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling"
                                    }
                                    return !0
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                                            break
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex
                                    }
                                    if (diff === !1) {
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [dirruns, diff]
                                                }
                                                if (node === elem) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || diff % first === 0 && diff / first >= 0
                            }
                        }
                    },
                    "PSEUDO": function PSEUDO(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument)
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i])
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }
                        }
                        return fn
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = []
                          , results = []
                          , matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if (elem = unmatched[i]) {
                                    seed[i] = !(matches[i] = elem)
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop()
                        }
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0
                        }
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                        }
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang)
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return !1
                        }
                    }),
                    "target": function target(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id
                    },
                    "root": function root(elem) {
                        return elem === docElem
                    },
                    "focus": function focus(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    },
                    "enabled": function enabled(elem) {
                        return elem.disabled === !1
                    },
                    "disabled": function disabled(elem) {
                        return elem.disabled === !0
                    },
                    "checked": function checked(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
                    },
                    "selected": function selected(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex
                        }
                        return elem.selected === !0
                    },
                    "empty": function empty(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return !1
                            }
                        }
                        return !0
                    },
                    "parent": function parent(elem) {
                        return !Expr.pseudos.empty(elem)
                    },
                    "header": function header(elem) {
                        return rheader.test(elem.nodeName)
                    },
                    "input": function input(elem) {
                        return rinputs.test(elem.nodeName)
                    },
                    "button": function button(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button"
                    },
                    "text": function text(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
                    },
                    "first": createPositionalPseudo(function() {
                        return [0]
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1]
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0; ) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length; ) {
                            matchIndexes.push(i)
                        }
                        return matchIndexes
                    })
                }
            };
            Expr.pseudos.nth = Expr.pseudos.eq;
            for (i in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
                Expr.pseudos[i] = createInputPseudo(i)
            }
            for (i in {
                submit: !0,
                reset: !0
            }) {
                Expr.pseudos[i] = createButtonPseudo(i)
            }
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0)
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar
                        }
                        groups.push(tokens = [])
                    }
                    matched = !1;
                    if (match = rcombinators.exec(soFar)) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length)
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length)
                        }
                    }
                    if (!matched) {
                        break
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            }
            ;
            function toSelector(tokens) {
                var i = 0
                  , len = tokens.length
                  , selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value
                }
                return selector
            }
            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir
                  , checkNonElements = base && dir === "parentNode"
                  , doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml)
                        }
                    }
                }
                : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return !0
                                }
                            }
                        }
                    } else {
                        while (elem = elem[dir]) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return newCache[2] = oldCache[2]
                                } else {
                                    uniqueCache[dir] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                }
            }
            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return !1
                        }
                    }
                    return !0
                }
                : matchers[0]
            }
            function multipleContexts(selector, contexts, results) {
                var i = 0
                  , len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results)
                }
                return results
            }
            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (; i < len; i++) {
                    if (elem = unmatched[i]) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i)
                            }
                        }
                    }
                }
                return newUnmatched
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter)
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector)
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml)
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if (elem = temp[i]) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if (elem = matcherOut[i]) {
                                        temp.push(matcherIn[i] = elem)
                                    }
                                }
                                postFinder(null, matcherOut = [], temp, xml)
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem)
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml)
                        } else {
                            push.apply(results, matcherOut)
                        }
                    }
                })
            }
            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                    return elem === checkContext
                }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                    return indexOf(checkContext, elem) > -1
                }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    checkContext = null;
                    return ret
                }
                ];
                for (; i < len; i++) {
                    if (matcher = Expr.relative[tokens[i].type]) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)]
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                        }
                        matchers.push(matcher)
                    }
                }
                return elementMatcher(matchers)
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0
                  , byElement = elementMatchers.length > 0
                  , superMatcher = function superMatcher(seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                    if (outermost) {
                        outermostContext = context === document || context || outermost
                    }
                    for (; i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            if (!context && elem.ownerDocument !== document) {
                                setDocument(elem);
                                xml = !documentIsHTML
                            }
                            while (matcher = elementMatchers[j++]) {
                                if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique
                            }
                        }
                        if (bySet) {
                            if (elem = !matcher && elem) {
                                matchedCount--
                            }
                            if (seed) {
                                unmatched.push(elem)
                            }
                        }
                    }
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while (matcher = setMatchers[j++]) {
                            matcher(unmatched, setMatched, context, xml)
                        }
                        if (seed) {
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results)
                                    }
                                }
                            }
                            setMatched = condense(setMatched)
                        }
                        push.apply(results, setMatched);
                        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                            Sizzle.uniqueSort(results)
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup
                    }
                    return unmatched
                };
                return bySet ? markFunction(superMatcher) : superMatcher
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector)
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached)
                        } else {
                            elementMatchers.push(cached)
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector
                }
                return cached
            }
            ;
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results
                        } else if (compiled) {
                            context = context.parentNode
                        }
                        selector = selector.slice(tokens.shift().value.length)
                    }
                    i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results
                                }
                                break
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results
            }
            ;
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(div1) {
                return div1.compareDocumentPosition(document.createElement("div")) & 1
            });
            if (!assert(function(div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild.getAttribute("href") === "#"
            })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!support.attributes || !assert(function(div) {
                div.innerHTML = "<input/>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value") === ""
            })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue
                    }
                })
            }
            if (!assert(function(div) {
                return div.getAttribute("disabled") == null
            })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                    }
                })
            }
            return Sizzle
        }
        )(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        var dir = function dir(elem, _dir, until) {
            var matched = []
              , truncate = until !== undefined;
            while ((elem = elem[_dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break
                    }
                    matched.push(elem)
                }
            }
            return matched
        };
        var _siblings = function _siblings(n, elem) {
            var matched = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n)
                }
            }
            return matched
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
        var risSimple = /^.[^:#\[\.,]*$/;
        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not
                })
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return elem === qualifier !== not
                })
            }
            if (typeof qualifier === "string") {
                if (risSimple.test(qualifier)) {
                    return jQuery.filter(qualifier, elements, not)
                }
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function(elem) {
                return indexOf.call(qualifier, elem) > -1 !== not
            })
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")"
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1
            }))
        }
        ;
        jQuery.fn.extend({
            find: function find(selector) {
                var i, len = this.length, ret = [], self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return !0
                            }
                        }
                    }))
                }
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret)
                }
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret
            },
            filter: function filter(selector) {
                return this.pushStack(winnow(this, selector || [], !1))
            },
            not: function not(selector) {
                return this.pushStack(winnow(this, selector || [], !0))
            },
            is: function is(selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
                return this
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [null, selector, null]
                } else {
                    match = rquickExpr.exec(selector)
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match])
                                } else {
                                    this.attr(match, context[match])
                                }
                            }
                        }
                        return this
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            this.length = 1;
                            this[0] = elem
                        }
                        this.context = document;
                        this.selector = selector;
                        return this
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector)
                } else {
                    return this.constructor(context).find(selector)
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this
            } else if (jQuery.isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context
            }
            return jQuery.makeArray(selector, this)
        }
        ;
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/
          , guaranteedUnique = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        jQuery.fn.extend({
            has: function has(target) {
                var targets = jQuery(target, this)
                  , l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (; i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return !0
                        }
                    }
                })
            },
            closest: function closest(selectors, context) {
                var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                        if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
            },
            index: function index(elem) {
                if (!elem) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0])
                }
                return indexOf.call(this, elem.jquery ? elem[0] : elem)
            },
            add: function add(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
            },
            addBack: function addBack(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
            }
        });
        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur
        }
        jQuery.each({
            parent: function parent(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null
            },
            parents: function parents(elem) {
                return dir(elem, "parentNode")
            },
            parentsUntil: function parentsUntil(elem, i, until) {
                return dir(elem, "parentNode", until)
            },
            next: function next(elem) {
                return sibling(elem, "nextSibling")
            },
            prev: function prev(elem) {
                return sibling(elem, "previousSibling")
            },
            nextAll: function nextAll(elem) {
                return dir(elem, "nextSibling")
            },
            prevAll: function prevAll(elem) {
                return dir(elem, "previousSibling")
            },
            nextUntil: function nextUntil(elem, i, until) {
                return dir(elem, "nextSibling", until)
            },
            prevUntil: function prevUntil(elem, i, until) {
                return dir(elem, "previousSibling", until)
            },
            siblings: function siblings(elem) {
                return _siblings((elem.parentNode || {}).firstChild, elem)
            },
            children: function children(elem) {
                return _siblings(elem.firstChild)
            },
            contents: function contents(elem) {
                return elem.contentDocument || jQuery.merge([], elem.childNodes)
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until
                }
                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched)
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched)
                    }
                    if (rparentsprev.test(name)) {
                        matched.reverse()
                    }
                }
                return this.pushStack(matched)
            }
        });
        var rnotwhite = /\S+/g;
        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
                object[flag] = !0
            });
            return object
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, _fired, _locked, list = [], queue = [], firingIndex = -1, fire = function fire() {
                _locked = options.once;
                _fired = firing = !0;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                        if (list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = !1
                        }
                    }
                }
                if (!options.memory) {
                    memory = !1
                }
                firing = !1;
                if (_locked) {
                    if (memory) {
                        list = []
                    } else {
                        list = ""
                    }
                }
            }, self = {
                add: function add() {
                    if (list) {
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory)
                        }
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (jQuery.isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg)
                                    }
                                } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                                    add(arg)
                                }
                            })
                        }
                        )(arguments);
                        if (memory && !firing) {
                            fire()
                        }
                    }
                    return this
                },
                remove: function remove() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (index <= firingIndex) {
                                firingIndex--
                            }
                        }
                    });
                    return this
                },
                has: function has(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                },
                empty: function empty() {
                    if (list) {
                        list = []
                    }
                    return this
                },
                disable: function disable() {
                    _locked = queue = [];
                    list = memory = "";
                    return this
                },
                disabled: function disabled() {
                    return !list
                },
                lock: function lock() {
                    _locked = queue = [];
                    if (!memory) {
                        list = memory = ""
                    }
                    return this
                },
                locked: function locked() {
                    return !!_locked
                },
                fireWith: function fireWith(context, args) {
                    if (!_locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire()
                        }
                    }
                    return this
                },
                fire: function fire() {
                    self.fireWith(this, arguments);
                    return this
                },
                fired: function fired() {
                    return !!_fired
                }
            };
            return self
        }
        ;
        jQuery.extend({
            Deferred: function Deferred(func) {
                var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]]
                  , _state = "pending"
                  , _promise = {
                    state: function state() {
                        return _state
                    },
                    always: function always() {
                        deferred.done(arguments).fail(arguments);
                        return this
                    },
                    then: function then() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = jQuery.isFunction(fns[i]) && fns[i];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                                    } else {
                                        newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                    }
                                })
                            });
                            fns = null
                        }).promise()
                    },
                    promise: function promise(obj) {
                        return obj != null ? jQuery.extend(obj, _promise) : _promise
                    }
                }
                  , deferred = {};
                _promise.pipe = _promise.then;
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2]
                      , stateString = tuple[3];
                    _promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            _state = stateString
                        }, tuples[i ^ 1][2].disable, tuples[2][2].lock)
                    }
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
                        return this
                    }
                    ;
                    deferred[tuple[0] + "With"] = list.fireWith
                });
                _promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred)
                }
                return deferred
            },
            when: function when(subordinate) {
                var i = 0, resolveValues = _slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function updateFunc(i, contexts, values) {
                    return function(value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values)
                        } else if (!--remaining) {
                            deferred.resolveWith(contexts, values)
                        }
                    }
                }, progressValues, progressContexts, resolveContexts;
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) {
                        if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject)
                        } else {
                            --remaining
                        }
                    }
                }
                if (!remaining) {
                    deferred.resolveWith(resolveContexts, resolveValues)
                }
                return deferred.promise()
            }
        });
        var readyList;
        jQuery.fn.ready = function(fn) {
            jQuery.ready.promise().done(fn);
            return this
        }
        ;
        jQuery.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function holdReady(hold) {
                if (hold) {
                    jQuery.readyWait++
                } else {
                    jQuery.ready(!0)
                }
            },
            ready: function ready(wait) {
                if (wait === !0 ? --jQuery.readyWait : jQuery.isReady) {
                    return
                }
                jQuery.isReady = !0;
                if (wait !== !0 && --jQuery.readyWait > 0) {
                    return
                }
                readyList.resolveWith(document, [jQuery]);
                if (jQuery.fn.triggerHandler) {
                    jQuery(document).triggerHandler("ready");
                    jQuery(document).off("ready")
                }
            }
        });
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready()
        }
        jQuery.ready.promise = function(obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
                if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
                    window.setTimeout(jQuery.ready)
                } else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed)
                }
            }
            return readyList.promise(obj)
        }
        ;
        jQuery.ready.promise();
        var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0
              , len = elems.length
              , bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = !0;
                for (i in key) {
                    access(elems, fn, i, key[i], !0, emptyGet, raw)
                }
            } else if (value !== undefined) {
                chainable = !0;
                if (!jQuery.isFunction(value)) {
                    raw = !0
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value)
                        }
                    }
                }
                if (fn) {
                    for (; i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
        };
        var acceptData = function acceptData(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
        };
        function Data() {
            this.expando = jQuery.expando + Data.uid++
        }
        Data.uid = 1;
        Data.prototype = {
            register: function register(owner, initial) {
                var value = initial || {};
                if (owner.nodeType) {
                    owner[this.expando] = value
                } else {
                    Object.defineProperty(owner, this.expando, {
                        value: value,
                        writable: !0,
                        configurable: !0
                    })
                }
                return owner[this.expando]
            },
            cache: function cache(owner) {
                if (!acceptData(owner)) {
                    return {}
                }
                var value = owner[this.expando];
                if (!value) {
                    value = {};
                    if (acceptData(owner)) {
                        if (owner.nodeType) {
                            owner[this.expando] = value
                        } else {
                            Object.defineProperty(owner, this.expando, {
                                value: value,
                                configurable: !0
                            })
                        }
                    }
                }
                return value
            },
            set: function set(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") {
                    cache[data] = value
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop]
                    }
                }
                return cache
            },
            get: function get(owner, key) {
                return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key]
            },
            access: function access(owner, key, value) {
                var stored;
                if (key === undefined || key && typeof key === "string" && value === undefined) {
                    stored = this.get(owner, key);
                    return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key))
                }
                this.set(owner, key, value);
                return value !== undefined ? value : key
            },
            remove: function remove(owner, key) {
                var i, name, camel, cache = owner[this.expando];
                if (cache === undefined) {
                    return
                }
                if (key === undefined) {
                    this.register(owner)
                } else {
                    if (jQuery.isArray(key)) {
                        name = key.concat(key.map(jQuery.camelCase))
                    } else {
                        camel = jQuery.camelCase(key);
                        if (key in cache) {
                            name = [key, camel]
                        } else {
                            name = camel;
                            name = name in cache ? [name] : name.match(rnotwhite) || []
                        }
                    }
                    i = name.length;
                    while (i--) {
                        delete cache[name[i]]
                    }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = undefined
                    } else {
                        delete owner[this.expando]
                    }
                }
            },
            hasData: function hasData(owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache)
            }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , rmultiDash = /[A-Z]/g;
        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data
                    } catch (e) {}
                    dataUser.set(elem, key, data)
                } else {
                    data = undefined
                }
            }
            return data
        }
        jQuery.extend({
            hasData: function hasData(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem)
            },
            data: function data(elem, name, _data) {
                return dataUser.access(elem, name, _data)
            },
            removeData: function removeData(elem, name) {
                dataUser.remove(elem, name)
            },
            _data: function _data(elem, name, data) {
                return dataPriv.access(elem, name, data)
            },
            _removeData: function _removeData(elem, name) {
                dataPriv.remove(elem, name)
            }
        });
        jQuery.fn.extend({
            data: function data(key, value) {
                var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name])
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", !0)
                        }
                    }
                    return data
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        dataUser.set(this, key)
                    })
                }
                return access(this, function(value) {
                    var data, camelKey;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                        if (data !== undefined) {
                            return data
                        }
                        camelKey = jQuery.camelCase(key);
                        data = dataUser.get(elem, camelKey);
                        if (data !== undefined) {
                            return data
                        }
                        data = dataAttr(elem, camelKey, undefined);
                        if (data !== undefined) {
                            return data
                        }
                        return
                    }
                    camelKey = jQuery.camelCase(key);
                    this.each(function() {
                        var data = dataUser.get(this, camelKey);
                        dataUser.set(this, camelKey, value);
                        if (key.indexOf("-") > -1 && data !== undefined) {
                            dataUser.set(this, key, value)
                        }
                    })
                }, null, value, arguments.length > 1, null, !0)
            },
            removeData: function removeData(key) {
                return this.each(function() {
                    dataUser.remove(this, key)
                })
            }
        });
        jQuery.extend({
            queue: function queue(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) {
                        if (!queue || jQuery.isArray(data)) {
                            queue = dataPriv.access(elem, type, jQuery.makeArray(data))
                        } else {
                            queue.push(data)
                        }
                    }
                    return queue || []
                }
            },
            dequeue: function dequeue(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type)
                  , startLength = queue.length
                  , fn = queue.shift()
                  , hooks = jQuery._queueHooks(elem, type)
                  , next = function next() {
                    jQuery.dequeue(elem, type)
                };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress")
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks)
                }
                if (!startLength && hooks) {
                    hooks.empty.fire()
                }
            },
            _queueHooks: function _queueHooks(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [type + "queue", key])
                    })
                })
            }
        });
        jQuery.fn.extend({
            queue: function queue(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type)
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            dequeue: function dequeue(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type)
                })
            },
            clearQueue: function clearQueue(type) {
                return this.queue(type || "fx", [])
            },
            promise: function promise(type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function resolve() {
                    if (!--count) {
                        defer.resolveWith(elements, [elements])
                    }
                };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve)
                    }
                }
                resolve();
                return defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function isHidden(elem, el) {
            elem = el || elem;
            return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem)
        };
        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
                return tween.cur()
            }
            : function() {
                return jQuery.css(elem, prop, "")
            }
            , initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3];
                valueParts = valueParts || [];
                initialInUnit = +initial || 1;
                do {
                    scale = scale || ".5";
                    initialInUnit = initialInUnit / scale;
                    jQuery.style(elem, prop, initialInUnit + unit)
                } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted
                }
            }
            return adjusted
        }
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([\w:-]+)/;
        var rscriptType = /^$|\/(?:java|ecma)script/i;
        var wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
            var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
            return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret
        }
        function setGlobalEval(elems, refElements) {
            var i = 0
              , l = elems.length;
            for (; i < l; i++) {
                dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
            }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem))
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = ""
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) {
                        ignored.push(elem)
                    }
                    continue
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp)
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem)
                        }
                    }
                }
            }
            return fragment
        }
        (function() {
            var fragment = document.createDocumentFragment()
              , div = fragment.appendChild(document.createElement("div"))
              , input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
        }
        )();
        var rkeyEvent = /^key/
          , rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
            return !0
        }
        function returnFalse() {
            return !1
        }
        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {}
        }
        function _on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined
                }
                for (type in types) {
                    _on(elem, type, selector, data, types[type], one)
                }
                return elem
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined
                }
            }
            if (fn === !1) {
                fn = returnFalse
            } else if (!fn) {
                return elem
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments)
                }
                ;
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
            }
            return elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector)
            })
        }
        jQuery.event = {
            global: {},
            add: function add(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) {
                    return
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {}
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined
                    }
                }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === !1) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle)
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj)
                    } else {
                        handlers.push(handleObj)
                    }
                    jQuery.event.global[type] = !0
                }
            },
            remove: function remove(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return
                }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, !0)
                        }
                        continue
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj)
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) {
                            jQuery.removeEvent(elem, type, elemData.handle)
                        }
                        delete events[type]
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    dataPriv.remove(elem, "handle events")
                }
            },
            dispatch: function dispatch(event) {
                event = jQuery.event.fix(event);
                var i, j, ret, matched, handleObj, handlerQueue = [], args = _slice.call(arguments), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                args[0] = event;
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === !1) {
                    return
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === !1) {
                                    event.preventDefault();
                                    event.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event)
                }
                return event.result
            },
            handlers: function handlers(event, _handlers) {
                var i, matches, sel, handleObj, handlerQueue = [], delegateCount = _handlers.delegateCount, cur = event.target;
                if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                    for (; cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && (cur.disabled !== !0 || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = _handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) {
                                    matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length
                                }
                                if (matches[sel]) {
                                    matches.push(handleObj)
                                }
                            }
                            if (matches.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matches
                                })
                            }
                        }
                    }
                }
                if (delegateCount < _handlers.length) {
                    handlerQueue.push({
                        elem: this,
                        handlers: _handlers.slice(delegateCount)
                    })
                }
                return handlerQueue
            },
            props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function filter(event, original) {
                    if (event.which == null) {
                        event.which = original.charCode != null ? original.charCode : original.keyCode
                    }
                    return event
                }
            },
            mouseHooks: {
                props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
                filter: function filter(event, original) {
                    var eventDoc, doc, body, button = original.button;
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
                    }
                    if (!event.which && button !== undefined) {
                        event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0
                    }
                    return event
                }
            },
            fix: function fix(event) {
                if (event[jQuery.expando]) {
                    return event
                }
                var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
                if (!fixHook) {
                    this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}
                }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop]
                }
                if (!event.target) {
                    event.target = document
                }
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode
                }
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function trigger() {
                        if (this !== safeActiveElement() && this.focus) {
                            this.focus();
                            return !1
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function trigger() {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return !1
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function trigger() {
                        if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                            this.click();
                            return !1
                        }
                    },
                    _default: function _default(event) {
                        return jQuery.nodeName(event.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function postDispatch(event) {
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result
                        }
                    }
                }
            }
        };
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle)
            }
        }
        ;
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src,props)
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === !1 ? returnTrue : returnFalse
            } else {
                this.type = src
            }
            if (props) {
                jQuery.extend(this, props)
            }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = !0
        }
        ;
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function preventDefault() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function stopPropagation() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function stopImmediatePropagation() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function handle(event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    if (!related || related !== target && !jQuery.contains(target, related)) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix
                    }
                    return ret
                }
            }
        });
        jQuery.fn.extend({
            on: function on(types, selector, data, fn) {
                return _on(this, types, selector, data, fn)
            },
            one: function one(types, selector, data, fn) {
                return _on(this, types, selector, data, fn, 1)
            },
            off: function off(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type])
                    }
                    return this
                }
                if (selector === !1 || typeof selector === "function") {
                    fn = selector;
                    selector = undefined
                }
                if (fn === !1) {
                    fn = returnFalse
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector)
                })
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
          , rnoInnerhtml = /<script|<style|<link/i
          , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
          , rscriptTypeMasked = /^true\/(.*)/
          , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
            return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
        }
        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem
        }
        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) {
                elem.type = match[1]
            } else {
                elem.removeAttribute("type")
            }
            return elem
        }
        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return
            }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0,
                        l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i])
                        }
                    }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur)
            }
        }
        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue
            }
        }
        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html())
                    }
                    domManip(self, args, callback, ignored)
                })
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first
                }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (; i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, !0, !0);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"))
                            }
                        }
                        callback.call(collection[i], node, i)
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src)
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""))
                                }
                            }
                        }
                    }
                }
            }
            return collection
        }
        function _remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
            for (; (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                    jQuery.cleanData(getAll(node))
                }
                if (node.parentNode) {
                    if (keepData && jQuery.contains(node.ownerDocument, node)) {
                        setGlobalEval(getAll(node, "script"))
                    }
                    node.parentNode.removeChild(node)
                }
            }
            return elem
        }
        jQuery.extend({
            htmlPrefilter: function htmlPrefilter(html) {
                return html.replace(rxhtmlTag, "<$1></$2>")
            },
            clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0,
                    l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i])
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0,
                        l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i])
                        }
                    } else {
                        cloneCopyEvent(elem, clone)
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"))
                }
                return clone
            },
            cleanData: function cleanData(elems) {
                var data, elem, type, special = jQuery.event.special, i = 0;
                for (; (elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type)
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle)
                                    }
                                }
                            }
                            elem[dataPriv.expando] = undefined
                        }
                        if (elem[dataUser.expando]) {
                            elem[dataUser.expando] = undefined
                        }
                    }
                }
            }
        });
        jQuery.fn.extend({
            domManip: domManip,
            detach: function detach(selector) {
                return _remove(this, selector, !0)
            },
            remove: function remove(selector) {
                return _remove(this, selector)
            },
            text: function text(value) {
                return access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value
                        }
                    })
                }, null, value, arguments.length)
            },
            append: function append() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function prepend() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function before() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this)
                    }
                })
            },
            after: function after() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling)
                    }
                })
            },
            empty: function empty() {
                var elem, i = 0;
                for (; (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, !1));
                        elem.textContent = ""
                    }
                }
                return this
            },
            clone: function clone(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
            },
            html: function html(value) {
                return access(this, function(value) {
                    var elem = this[0] || {}
                      , i = 0
                      , l = this.length;
                    if (value === undefined && elem.nodeType === 1) {
                        return elem.innerHTML
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, !1));
                                    elem.innerHTML = value
                                }
                            }
                            elem = 0
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value)
                    }
                }, null, value, arguments.length)
            },
            replaceWith: function replaceWith() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) {
                        jQuery.cleanData(getAll(this));
                        if (parent) {
                            parent.replaceChild(elem, this)
                        }
                    }
                }, ignored)
            }
        });
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(!0);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get())
                }
                return this.pushStack(ret)
            }
        });
        var iframe, elemdisplay = {
            HTML: "block",
            BODY: "block"
        };
        function actualDisplay(name, doc) {
            var elem = jQuery(doc.createElement(name)).appendTo(doc.body)
              , display = jQuery.css(elem[0], "display");
            elem.detach();
            return display
        }
        function defaultDisplay(nodeName) {
            var doc = document
              , display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
                if (display === "none" || !display) {
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                    doc = iframe[0].contentDocument;
                    doc.write();
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach()
                }
                elemdisplay[nodeName] = display
            }
            return display
        }
        var rmargin = /^margin/;
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");
        var getStyles = function getStyles(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window
            }
            return view.getComputedStyle(elem)
        };
        var swap = function swap(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name]
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name]
            }
            return ret
        };
        var documentElement = document.documentElement;
        (function() {
            var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
            if (!div.style) {
                return
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(!0).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            container.appendChild(div);
            function computeStyleTests() {
                div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                div.innerHTML = "";
                documentElement.appendChild(container);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = divStyle.marginLeft === "2px";
                boxSizingReliableVal = divStyle.width === "4px";
                div.style.marginRight = "50%";
                pixelMarginRightVal = divStyle.marginRight === "4px";
                documentElement.removeChild(container)
            }
            jQuery.extend(support, {
                pixelPosition: function pixelPosition() {
                    computeStyleTests();
                    return pixelPositionVal
                },
                boxSizingReliable: function boxSizingReliable() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return boxSizingReliableVal
                },
                pixelMarginRight: function pixelMarginRight() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return pixelMarginRightVal
                },
                reliableMarginLeft: function reliableMarginLeft() {
                    if (boxSizingReliableVal == null) {
                        computeStyleTests()
                    }
                    return reliableMarginLeftVal
                },
                reliableMarginRight: function reliableMarginRight() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    documentElement.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                    documentElement.removeChild(container);
                    div.removeChild(marginDiv);
                    return ret
                }
            })
        }
        )();
        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
            if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name)
            }
            if (computed) {
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth
                }
            }
            return ret !== undefined ? ret + "" : ret
        }
        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function get() {
                    if (conditionFn()) {
                        delete this.get;
                        return
                    }
                    return (this.get = hookFn).apply(this, arguments)
                }
            }
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/
          , cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , cssPrefixes = ["Webkit", "O", "Moz", "ms"]
          , emptyStyle = document.createElement("div").style;
        function vendorPropName(name) {
            if (name in emptyStyle) {
                return name
            }
            var capName = name[0].toUpperCase() + name.slice(1)
              , i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                    return name
                }
            }
        }
        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
        }
        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0
              , val = 0;
            for (; i < 4; i += 2) {
                if (extra === "margin") {
                    val += jQuery.css(elem, extra + cssExpand[i], !0, styles)
                }
                if (isBorderBox) {
                    if (extra === "content") {
                        val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)
                    }
                    if (extra !== "margin") {
                        val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                    }
                } else {
                    val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles);
                    if (extra !== "padding") {
                        val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)
                    }
                }
            }
            return val
        }
        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = !0
              , val = name === "width" ? elem.offsetWidth : elem.offsetHeight
              , styles = getStyles(elem)
              , isBorderBox = jQuery.css(elem, "boxSizing", !1, styles) === "border-box";
            if (val <= 0 || val == null) {
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) {
                    val = elem.style[name]
                }
                if (rnumnonpx.test(val)) {
                    return val
                }
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
                val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }
        function showHide(elements, show) {
            var display, elem, hidden, values = [], index = 0, length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                values[index] = dataPriv.get(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index] && display === "none") {
                        elem.style.display = ""
                    }
                    if (elem.style.display === "" && isHidden(elem)) {
                        values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName))
                    }
                } else {
                    hidden = isHidden(elem);
                    if (display !== "none" || !hidden) {
                        dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))
                    }
                }
            }
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue
                }
                if (!show || elem.style.display === "none" || elem.style.display === "") {
                    elem.style.display = show ? values[index] || "" : "none"
                }
            }
            return elements
        }
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function get(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret
                        }
                    }
                }
            },
            cssNumber: {
                "animationIterationCount": !0,
                "columnCount": !0,
                "fillOpacity": !0,
                "flexGrow": !0,
                "flexShrink": !0,
                "fontWeight": !0,
                "lineHeight": !0,
                "opacity": !0,
                "order": !0,
                "orphans": !0,
                "widows": !0,
                "zIndex": !0,
                "zoom": !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function style(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return
                }
                var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number"
                    }
                    if (value == null || value !== value) {
                        return
                    }
                    if (type === "number") {
                        value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")
                    }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit"
                    }
                    if (!hooks || !("set"in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        style[name] = value
                    }
                } else {
                    if (hooks && "get"in hooks && (ret = hooks.get(elem, !1, extra)) !== undefined) {
                        return ret
                    }
                    return style[name]
                }
            },
            css: function css(elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name);
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get"in hooks) {
                    val = hooks.get(elem, !0, extra)
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles)
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name]
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === !0 || isFinite(num) ? num || 0 : val
                }
                return val
            }
        });
        jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function get(elem, computed, extra) {
                    if (computed) {
                        return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, name, extra)
                        }) : getWidthOrHeight(elem, name, extra)
                    }
                },
                set: function set(elem, value, extra) {
                    var matches, styles = extra && getStyles(elem), subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", !1, styles) === "border-box", styles);
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[name] = value;
                        value = jQuery.css(elem, name)
                    }
                    return setPositiveNumber(elem, value, subtract)
                }
            }
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left
                })) + "px"
            }
        });
        jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
            if (computed) {
                return swap(elem, {
                    "display": "inline-block"
                }, curCSS, [elem, "marginRight"])
            }
        });
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function expand(value) {
                    var i = 0
                      , expanded = {}
                      , parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
                    }
                    return expanded
                }
            };
            if (!rmargin.test(prefix)) {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
            }
        });
        jQuery.fn.extend({
            css: function css(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {}, i = 0;
                    if (jQuery.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], !1, styles)
                        }
                        return map
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            },
            show: function show() {
                return showHide(this, !0)
            },
            hide: function hide() {
                return showHide(this)
            },
            toggle: function toggle(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (isHidden(this)) {
                        jQuery(this).show()
                    } else {
                        jQuery(this).hide()
                    }
                })
            }
        });
        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem,options,prop,end,easing)
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function init(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
            },
            cur: function cur() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
            },
            run: function run(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
                } else {
                    this.pos = eased = percent
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (hooks && hooks.set) {
                    hooks.set(this)
                } else {
                    Tween.propHooks._default.set(this)
                }
                return this
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function get(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                        return tween.elem[tween.prop]
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result
                },
                set: function set(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween)
                    } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                    } else {
                        tween.elem[tween.prop] = tween.now
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function set(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now
                }
            }
        };
        jQuery.easing = {
            linear: function linear(p) {
                return p
            },
            swing: function swing(p) {
                return 0.5 - Math.cos(p * Math.PI) / 2
            },
            _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function createFxNow() {
            window.setTimeout(function() {
                fxNow = undefined
            });
            return fxNow = jQuery.now()
        }
        function genFx(type, includeWidth) {
            var which, i = 0, attrs = {
                height: type
            };
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type
            }
            return attrs
        }
        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
            for (; index < length; index++) {
                if (tween = collection[index].call(animation, prop, value)) {
                    return tween
                }
            }
        }
        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire()
                        }
                    }
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire()
                        }
                    })
                })
            }
            if (elem.nodeType === 1 && ("height"in props || "width"in props)) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                display = jQuery.css(elem, "display");
                checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
                if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                    style.display = "inline-block"
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2]
                })
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.exec(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = !0
                        } else {
                            continue
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                } else {
                    display = undefined
                }
            }
            if (!jQuery.isEmptyObject(orig)) {
                if (dataShow) {
                    if ("hidden"in dataShow) {
                        hidden = dataShow.hidden
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {})
                }
                if (toggle) {
                    dataShow.hidden = !hidden
                }
                if (hidden) {
                    jQuery(elem).show()
                } else {
                    anim.done(function() {
                        jQuery(elem).hide()
                    })
                }
                anim.done(function() {
                    var prop;
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop])
                    }
                });
                for (prop in orig) {
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0
                        }
                    }
                }
            } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
                style.display = display
            }
        }
        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0]
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index]
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand"in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing
                        }
                    }
                } else {
                    specialEasing[name] = easing
                }
            }
        }
        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                delete tick.elem
            }), tick = function tick() {
                if (stopped) {
                    return !1
                }
                var currentTime = fxNow || createFxNow()
                  , remaining = Math.max(0, animation.startTime + animation.duration - currentTime)
                  , temp = remaining / animation.duration || 0
                  , percent = 1 - temp
                  , index = 0
                  , length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent)
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return !1
                }
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(!0, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function createTween(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween
                },
                stop: function stop(gotoEnd) {
                    var index = 0
                      , length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this
                    }
                    stopped = !0;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1)
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd])
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd])
                    }
                    return this
                }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (jQuery.isFunction(result.stop)) {
                        jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result)
                    }
                    return result
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation)
            }
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween
                }
                ]
            },
            tweener: function tweener(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"]
                } else {
                    props = props.match(rnotwhite)
                }
                var prop, index = 0, length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback)
                }
            },
            prefilters: [defaultPrefilter],
            prefilter: function prefilter(callback, prepend) {
                if (prepend) {
                    Animation.prefilters.unshift(callback)
                } else {
                    Animation.prefilters.push(callback)
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
            };
            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
            if (opt.queue == null || opt.queue === !0) {
                opt.queue = "fx"
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) {
                    opt.old.call(this)
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue)
                }
            }
            ;
            return opt
        }
        ;
        jQuery.fn.extend({
            fadeTo: function fadeTo(speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback)
            },
            animate: function animate(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop)
                  , optall = jQuery.speed(speed, easing, callback)
                  , doAnimation = function doAnimation() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(!0)
                    }
                };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
            },
            stop: function stop(type, clearQueue, gotoEnd) {
                var stopQueue = function stopQueue(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd)
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined
                }
                if (clearQueue && type !== !1) {
                    this.queue(type || "fx", [])
                }
                return this.each(function() {
                    var dequeue = !0
                      , index = type != null && type + "queueHooks"
                      , timers = jQuery.timers
                      , data = dataPriv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index])
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index])
                            }
                        }
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = !1;
                            timers.splice(index, 1)
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type)
                    }
                })
            },
            finish: function finish(type) {
                if (type !== !1) {
                    type = type || "fx"
                }
                return this.each(function() {
                    var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    data.finish = !0;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, !0)
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(!0);
                            timers.splice(index, 1)
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this)
                        }
                    }
                    delete data.finish
                })
            }
        });
        jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
            }
        });
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback)
            }
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0, timers = jQuery.timers;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1)
                }
            }
            if (!timers.length) {
                jQuery.fx.stop()
            }
            fxNow = undefined
        }
        ;
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            if (timer()) {
                jQuery.fx.start()
            } else {
                jQuery.timers.pop()
            }
        }
        ;
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (!timerId) {
                timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval)
            }
        }
        ;
        jQuery.fx.stop = function() {
            window.clearInterval(timerId);
            timerId = null
        }
        ;
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout)
                }
            })
        }
        ;
        (function() {
            var input = document.createElement("input")
              , select = document.createElement("select")
              , opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            select.disabled = !0;
            support.optDisabled = !opt.disabled;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t"
        }
        )();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function attr(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1)
            },
            removeAttr: function removeAttr(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name)
                })
            }
        });
        jQuery.extend({
            attr: function attr(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                if (typeof elem.getAttribute === "undefined") {
                    return jQuery.prop(elem, name, value)
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                        return
                    }
                    if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret
                    }
                    elem.setAttribute(name, value + "");
                    return value
                }
                if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret
                }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret
            },
            attrHooks: {
                type: {
                    set: function set(elem, value) {
                        if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val
                            }
                            return value
                        }
                    }
                }
            },
            removeAttr: function removeAttr(elem, value) {
                var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while (name = attrNames[i++]) {
                        propName = jQuery.propFix[name] || name;
                        if (jQuery.expr.match.bool.test(name)) {
                            elem[propName] = !1
                        }
                        elem.removeAttribute(name)
                    }
                }
            }
        });
        boolHook = {
            set: function set(elem, value, name) {
                if (value === !1) {
                    jQuery.removeAttr(elem, name)
                } else {
                    elem.setAttribute(name, name)
                }
                return name
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle;
                if (!isXML) {
                    handle = attrHandle[name];
                    attrHandle[name] = ret;
                    ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                    attrHandle[name] = handle
                }
                return ret
            }
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i
          , rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function prop(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1)
            },
            removeProp: function removeProp(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name]
                })
            }
        });
        jQuery.extend({
            prop: function prop(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name]
                }
                if (value !== undefined) {
                    if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret
                    }
                    return elem[name] = value
                }
                if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret
                }
                return elem[name]
            },
            propHooks: {
                tabIndex: {
                    get: function get(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function get(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex
                    }
                    return null
                },
                set: function set(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            jQuery.propFix[this.toLowerCase()] = this
        });
        var rclass = /[\t\r\n\f]/g;
        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || ""
        }
        jQuery.fn.extend({
            addClass: function addClass(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)))
                    })
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " "
                                }
                            }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function removeClass(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) {
                                while (cur.indexOf(" " + clazz + " ") > -1) {
                                    cur = cur.replace(" " + clazz + " ", " ")
                                }
                            }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function toggleClass(value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") {
                    return stateVal ? this.addClass(value) : this.removeClass(value)
                }
                if (jQuery.isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
                    })
                }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (type === "string") {
                        i = 0;
                        self = jQuery(this);
                        classNames = value.match(rnotwhite) || [];
                        while (className = classNames[i++]) {
                            if (self.hasClass(className)) {
                                self.removeClass(className)
                            } else {
                                self.addClass(className)
                            }
                        }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) {
                            dataPriv.set(this, "__className__", className)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function hasClass(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while (elem = this[i++]) {
                    if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                        return !0
                    }
                }
                return !1
            }
        });
        var rreturn = /\r/g
          , rspaces = /[\x20\t\r\n\f]+/g;
        jQuery.fn.extend({
            val: function val(value) {
                var hooks, ret, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get"in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret
                        }
                        ret = elem.value;
                        return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret
                    }
                    return
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (isFunction) {
                        val = value.call(this, i, jQuery(this).val())
                    } else {
                        val = value
                    }
                    if (val == null) {
                        val = ""
                    } else if (typeof val === "number") {
                        val += ""
                    } else if (jQuery.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + ""
                        })
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set"in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val
                    }
                })
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function get(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ")
                    }
                },
                select: {
                    get: function get(elem) {
                        var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value
                                }
                                values.push(value)
                            }
                        }
                        return values
                    },
                    set: function set(elem, value) {
                        var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                optionSet = !0
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1
                        }
                        return values
                    }
                }
            }
        });
        jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
                set: function set(elem, value) {
                    if (jQuery.isArray(value)) {
                        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
                    }
                }
            };
            if (!support.checkOn) {
                jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value
                }
            }
        });
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
        jQuery.extend(jQuery.event, {
            trigger: function trigger(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return
                }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort()
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type,typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem
                }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === !1) {
                    return
                }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data)
                    }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === !1) {
                            event.preventDefault()
                        }
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === !1) && acceptData(elem)) {
                        if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null
                            }
                            jQuery.event.triggered = type;
                            elem[type]();
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp
                            }
                        }
                    }
                }
                return event.result
            },
            simulate: function simulate(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: !0
                });
                jQuery.event.trigger(e, null, elem)
            }
        });
        jQuery.fn.extend({
            trigger: function trigger(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this)
                })
            },
            triggerHandler: function triggerHandler(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, !0)
                }
            }
        });
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
            }
        });
        jQuery.fn.extend({
            hover: function hover(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
            }
        });
        support.focusin = "onfocusin"in window;
        if (!support.focusin) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function handler(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
                };
                jQuery.event.special[fix] = {
                    setup: function setup() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix);
                        if (!attaches) {
                            doc.addEventListener(orig, handler, !0)
                        }
                        dataPriv.access(doc, fix, (attaches || 0) + 1)
                    },
                    teardown: function teardown() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, !0);
                            dataPriv.remove(doc, fix)
                        } else {
                            dataPriv.access(doc, fix, attaches)
                        }
                    }
                }
            })
        }
        var location = window.location;
        var nonce = jQuery.now();
        var rquery = /\?/;
        jQuery.parseJSON = function(data) {
            return JSON.parse(data + "")
        }
        ;
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") {
                return null
            }
            try {
                xml = new window.DOMParser().parseFromString(data, "text/xml")
            } catch (e) {
                xml = undefined
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data)
            }
            return xml
        }
        ;
        var rhash = /#.*$/
          , rts = /([?&])_=[^&]*/
          , rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg
          , rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , rnoContent = /^(?:GET|HEAD)$/
          , rprotocol = /^\/\//
          , prefilters = {}
          , transports = {}
          , allTypes = "*/".concat("*")
          , originAnchor = document.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*"
                }
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func)) {
                    while (dataType = dataTypes[i++]) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func)
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func)
                        }
                    }
                }
            }
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}
              , seekingTransport = structure === transports;
            function inspect(dataType) {
                var selected;
                inspected[dataType] = !0;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return !1
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport)
                    }
                });
                return selected
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }
        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
                }
            }
            if (deep) {
                jQuery.extend(!0, target, deep)
            }
            return target
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break
                    }
                }
            }
            if (dataTypes[0]in responses) {
                finalDataType = dataTypes[0]
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break
                    }
                    if (!firstDataType) {
                        firstDataType = type
                    }
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType)
                }
                return responses[finalDataType]
            }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv]
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType)
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === !0) {
                                            conv = converters[conv2]
                                        } else if (converters[conv2] !== !0) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (conv !== !0) {
                            if (conv && s.throws) {
                                response = conv(response)
                            } else {
                                try {
                                    response = conv(response)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            }
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": jQuery.parseJSON,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function ajaxSetup(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function ajax(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), _statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                    readyState: 0,
                    getResponseHeader: function getResponseHeader(key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while (match = rheaders.exec(responseHeadersString)) {
                                    responseHeaders[match[1].toLowerCase()] = match[2]
                                }
                            }
                            match = responseHeaders[key.toLowerCase()]
                        }
                        return match == null ? null : match
                    },
                    getAllResponseHeaders: function getAllResponseHeaders() {
                        return state === 2 ? responseHeadersString : null
                    },
                    setRequestHeader: function setRequestHeader(name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value
                        }
                        return this
                    },
                    overrideMimeType: function overrideMimeType(type) {
                        if (!state) {
                            s.mimeType = type
                        }
                        return this
                    },
                    statusCode: function statusCode(map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {
                                    _statusCode[code] = [_statusCode[code], map[code]]
                                }
                            } else {
                                jqXHR.always(map[jqXHR.status])
                            }
                        }
                        return this
                    },
                    abort: function abort(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText)
                        }
                        done(0, finalText);
                        return this
                    }
                };
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
                    } catch (e) {
                        s.crossDomain = !0
                    }
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional)
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (state === 2) {
                    return jqXHR
                }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart")
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url;
                if (!s.hasContent) {
                    if (s.data) {
                        cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data
                    }
                    if (s.cache === !1) {
                        s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++
                    }
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
                    }
                }
                if (s.data && s.hasContent && s.contentType !== !1 || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType)
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i])
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || state === 2)) {
                    return jqXHR.abort()
                }
                strAbort = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                    jqXHR[i](s[i])
                }
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport")
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s])
                    }
                    if (state === 2) {
                        return jqXHR
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout")
                        }, s.timeout)
                    }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done)
                    } catch (e) {
                        if (state < 2) {
                            done(-1, e)
                        } else {
                            throw e
                        }
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) {
                        return
                    }
                    state = 2;
                    if (timeoutTimer) {
                        window.clearTimeout(timeoutTimer)
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses)
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent"
                        } else if (status === 304) {
                            statusText = "notmodified"
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
                    }
                    jqXHR.statusCode(_statusCode);
                    _statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!--jQuery.active) {
                            jQuery.event.trigger("ajaxStop")
                        }
                    }
                }
                return jqXHR
            },
            getJSON: function getJSON(url, data, callback) {
                return jQuery.get(url, data, callback, "json")
            },
            getScript: function getScript(url, callback) {
                return jQuery.get(url, undefined, callback, "script")
            }
        });
        jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined
                }
                return jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url))
            }
        });
        jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ;
        jQuery.fn.extend({
            wrapAll: function wrapAll(html) {
                var wrap;
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapAll(html.call(this, i))
                    })
                }
                if (this[0]) {
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0])
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild
                        }
                        return elem
                    }).append(this)
                }
                return this
            },
            wrapInner: function wrapInner(html) {
                if (jQuery.isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i))
                    })
                }
                return this.each(function() {
                    var self = jQuery(this)
                      , contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html)
                    } else {
                        self.append(html)
                    }
                })
            },
            wrap: function wrap(html) {
                var isFunction = jQuery.isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
                })
            },
            unwrap: function unwrap() {
                return this.parent().each(function() {
                    if (!jQuery.nodeName(this, "body")) {
                        jQuery(this).replaceWith(this.childNodes)
                    }
                }).end()
            }
        });
        jQuery.expr.filters.hidden = function(elem) {
            return !jQuery.expr.filters.visible(elem)
        }
        ;
        jQuery.expr.filters.visible = function(elem) {
            return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0
        }
        ;
        var r20 = /%20/g
          , rbracket = /\[\]$/
          , rCRLF = /\r?\n/g
          , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
          , rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v)
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add)
                    }
                })
            } else if (!traditional && jQuery.type(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
                }
            } else {
                add(prefix, obj)
            }
        }
        jQuery.param = function(a, traditional) {
            var prefix, s = [], add = function add(key, value) {
                value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
            };
            if (traditional === undefined) {
                traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional
            }
            if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
                jQuery.each(a, function() {
                    add(this.name, this.value)
                })
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add)
                }
            }
            return s.join("&").replace(r20, "+")
        }
        ;
        jQuery.fn.extend({
            serialize: function serialize() {
                return jQuery.param(this.serializeArray())
            },
            serializeArray: function serializeArray() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        }
                    }) : {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }).get()
            }
        });
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest()
            } catch (e) {}
        }
        ;
        var xhrSuccessStatus = {
            0: 200,
            1223: 204
        }
          , xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials"in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function send(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i]
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType)
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i])
                        }
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                                    if (type === "abort") {
                                        xhr.abort()
                                    } else if (type === "error") {
                                        if (typeof xhr.status !== "number") {
                                            complete(0, "error")
                                        } else {
                                            complete(xhr.status, xhr.statusText)
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders())
                                    }
                                }
                            }
                        }
                        ;
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = callback("error");
                        if (xhr.onabort !== undefined) {
                            xhr.onabort = errorCallback
                        } else {
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    window.setTimeout(function() {
                                        if (callback) {
                                            errorCallback()
                                        }
                                    })
                                }
                            }
                        }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null)
                        } catch (e) {
                            if (callback) {
                                throw e
                            }
                        }
                    },
                    abort: function abort() {
                        if (callback) {
                            callback()
                        }
                    }
                }
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function textScript(text) {
                    jQuery.globalEval(text);
                    return text
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = !1
            }
            if (s.crossDomain) {
                s.type = "GET"
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function send(_, complete) {
                        script = jQuery("<script>").prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type)
                            }
                        }
                        );
                        document.head.appendChild(script[0])
                    },
                    abort: function abort() {
                        if (callback) {
                            callback()
                        }
                    }
                }
            }
        });
        var oldCallbacks = []
          , rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function jsonpCallback() {
                var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
                this[callback] = !0;
                return callback
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
                } else if (s.jsonp !== !1) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called")
                    }
                    return responseContainer[0]
                }
                ;
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments
                }
                ;
                jqXHR.always(function() {
                    if (overwritten === undefined) {
                        jQuery(window).removeProp(callbackName)
                    } else {
                        window[callbackName] = overwritten
                    }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName)
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) {
                        overwritten(responseContainer[0])
                    }
                    responseContainer = overwritten = undefined
                });
                return "script"
            }
        });
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = !1
            }
            context = context || document;
            var parsed = rsingleTag.exec(data)
              , scripts = !keepScripts && [];
            if (parsed) {
                return [context.createElement(parsed[1])]
            }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove()
            }
            return jQuery.merge([], parsed.childNodes)
        }
        ;
        var _load = jQuery.fn.load;
        jQuery.fn.load = function(url, params, callback) {
            if (typeof url !== "string" && _load) {
                return _load.apply(this, arguments)
            }
            var selector, type, response, self = this, off = url.indexOf(" ");
            if (off > -1) {
                selector = jQuery.trim(url.slice(off));
                url = url.slice(0, off)
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined
            } else if (params && typeof params === "object") {
                type = "POST"
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
                    })
                }
                )
            }
            return this
        }
        ;
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn)
            }
        });
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem
            }).length
        }
        ;
        function getWindow(elem) {
            return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView
        }
        jQuery.offset = {
            setOffset: function setOffset(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                if (position === "static") {
                    elem.style.position = "relative"
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0
                }
                if (jQuery.isFunction(options)) {
                    options = options.call(elem, i, jQuery.extend({}, curOffset))
                }
                if (options.top != null) {
                    props.top = options.top - curOffset.top + curTop
                }
                if (options.left != null) {
                    props.left = options.left - curOffset.left + curLeft
                }
                if ("using"in options) {
                    options.using.call(elem, props)
                } else {
                    curElem.css(props)
                }
            }
        };
        jQuery.fn.extend({
            offset: function offset(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i)
                    })
                }
                var docElem, win, elem = this[0], box = {
                    top: 0,
                    left: 0
                }, doc = elem && elem.ownerDocument;
                if (!doc) {
                    return
                }
                docElem = doc.documentElement;
                if (!jQuery.contains(docElem, elem)) {
                    return box
                }
                box = elem.getBoundingClientRect();
                win = getWindow(doc);
                return {
                    top: box.top + win.pageYOffset - docElem.clientTop,
                    left: box.left + win.pageXOffset - docElem.clientLeft
                }
            },
            position: function position() {
                if (!this[0]) {
                    return
                }
                var offsetParent, offset, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect()
                } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) {
                        parentOffset = offsetParent.offset()
                    }
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                }
            },
            offsetParent: function offsetParent() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.offsetParent
                    }
                    return offsetParent || documentElement
                })
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win = getWindow(elem);
                    if (val === undefined) {
                        return win ? win[prop] : elem[method]
                    }
                    if (win) {
                        win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset)
                    } else {
                        elem[method] = val
                    }
                }, method, val, arguments.length)
            }
        });
        jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);
                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                }
            })
        });
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean")
                      , extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) {
                            return elem.document.documentElement["client" + name]
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                    }, type, chainable ? margin : undefined, chainable, null)
                }
            })
        });
        jQuery.fn.extend({
            bind: function bind(types, data, fn) {
                return this.on(types, null, data, fn)
            },
            unbind: function unbind(types, fn) {
                return this.off(types, null, fn)
            },
            delegate: function delegate(selector, types, data, fn) {
                return this.on(types, selector, data, fn)
            },
            undelegate: function undelegate(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
            },
            size: function size() {
                return this.length
            }
        });
        jQuery.fn.andSelf = jQuery.fn.addBack;
        if (!0) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [],
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return jQuery
            }
            .apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
        var _jQuery = window.jQuery
          , _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery
            }
            return jQuery
        }
        ;
        if (!noGlobal) {
            window.jQuery = window.$ = jQuery
        }
        return jQuery
    })
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    (0,
    _jquery2['default'])(document).ready(function() {
        _prestashop2['default'].on('updateCart', function(event) {
            _prestashop2['default'].cart = event.reason.cart;
            var getCartViewUrl = (0,
            _jquery2['default'])('.js-cart').data('refresh-url');
            var requestData = {};
            if (event && event.reason) {
                requestData = {
                    id_product_attribute: event.reason.idProductAttribute,
                    id_product: event.reason.idProduct
                }
            }
            _jquery2['default'].post(getCartViewUrl, requestData).then(function(resp) {
                (0,
                _jquery2['default'])('.cart-detailed-totals').replaceWith(resp.cart_detailed_totals);
                (0,
                _jquery2['default'])('.cart-summary-items-subtotal').replaceWith(resp.cart_summary_items_subtotal);
                (0,
                _jquery2['default'])('.cart-summary-totals').replaceWith(resp.cart_summary_totals);
                (0,
                _jquery2['default'])('.cart-detailed-actions').replaceWith(resp.cart_detailed_actions);
                (0,
                _jquery2['default'])('.cart-voucher').replaceWith(resp.cart_voucher);
                (0,
                _jquery2['default'])('.cart-overview').replaceWith(resp.cart_detailed);
                (0,
                _jquery2['default'])('#product_customization_id').val(0);
                (0,
                _jquery2['default'])('.js-cart-line-product-quantity').each(function(index, input) {
                    var $input = (0,
                    _jquery2['default'])(input);
                    $input.attr('value', $input.val())
                });
                _prestashop2['default'].emit('updatedCart', {
                    eventType: 'updateCart',
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateCart',
                    resp: resp
                })
            })
        });
        var $body = (0,
        _jquery2['default'])('body');
        $body.on('click', '[data-button-action="add-to-cart"]', function(event) {
            event.preventDefault();
            if ((0,
            _jquery2['default'])('#quantity_wanted').val() > (0,
            _jquery2['default'])('[data-stock]').data('stock') && (0,
            _jquery2['default'])('[data-allow-oosp]').data('allow-oosp').length === 0) {
                (0,
                _jquery2['default'])('[data-button-action="add-to-cart"]').attr('disabled', 'disabled')
            } else {
                var _ret = (function() {
                    var $form = (0,
                    _jquery2['default'])(event.target).closest('form');
                    var query = $form.serialize() + '&add=1&action=update';
                    var actionURL = $form.attr('action');
                    var isQuantityInputValid = function isQuantityInputValid($input) {
                        var validInput = !0;
                        $input.each(function(index, input) {
                            var $input = (0,
                            _jquery2['default'])(input);
                            var minimalValue = parseInt($input.attr('min'), 10);
                            if (minimalValue && $input.val() < minimalValue) {
                                onInvalidQuantity($input);
                                validInput = !1
                            }
                        });
                        return validInput
                    };
                    var onInvalidQuantity = function onInvalidQuantity($input) {
                        $input.parents('.product-add-to-cart').first().find('.product-minimal-quantity').addClass('error');
                        $input.parent().find('label').addClass('error')
                    };
                    var $quantityInput = $form.find('input[min]');
                    if (!isQuantityInputValid($quantityInput)) {
                        onInvalidQuantity($quantityInput);
                        return {
                            v: undefined
                        }
                    }
                    _jquery2['default'].post(actionURL, query, null, 'json').then(function(resp) {
                        _prestashop2['default'].emit('updateCart', {
                            reason: {
                                idProduct: resp.id_product,
                                idProductAttribute: resp.id_product_attribute,
                                linkAction: 'add-to-cart',
                                cart: resp.cart
                            },
                            resp: resp
                        })
                    }).fail(function(resp) {
                        _prestashop2['default'].emit('handleError', {
                            eventType: 'addProductToCart',
                            resp: resp
                        })
                    })
                }
                )();
                if (typeof _ret === 'object')
                    return _ret.v
            }
        });
        $body.on('submit', '[data-link-action="add-voucher"]', function(event) {
            event.preventDefault();
            var $addVoucherForm = (0,
            _jquery2['default'])(event.currentTarget);
            var getCartViewUrl = $addVoucherForm.attr('action');
            if (0 === $addVoucherForm.find('[name=action]').length) {
                $addVoucherForm.append((0,
                _jquery2['default'])('<input>', {
                    'type': 'hidden',
                    'name': 'ajax',
                    "value": 1
                }))
            }
            if (0 === $addVoucherForm.find('[name=action]').length) {
                $addVoucherForm.append((0,
                _jquery2['default'])('<input>', {
                    'type': 'hidden',
                    'name': 'action',
                    "value": "update"
                }))
            }
            _jquery2['default'].post(getCartViewUrl, $addVoucherForm.serialize(), null, 'json').then(function(resp) {
                if (resp.hasError) {
                    (0,
                    _jquery2['default'])('.js-error').show().find('.js-error-text').text(resp.errors[0]);
                    return
                }
                _prestashop2['default'].emit('updateCart', {
                    reason: event.target.dataset,
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateCart',
                    resp: resp
                })
            })
        })
    });
    /***/
}
), (function(module, exports) {
    // module.exports = prestashop;
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _checkoutAddress = __webpack_require__(6);
    var _checkoutAddress2 = _interopRequireDefault(_checkoutAddress);
    var _checkoutDelivery = __webpack_require__(8);
    var _checkoutDelivery2 = _interopRequireDefault(_checkoutDelivery);
    var _checkoutPayment = __webpack_require__(9);
    var _checkoutPayment2 = _interopRequireDefault(_checkoutPayment);
    function setUpCheckout() {
        (0,
        _checkoutAddress2['default'])();
        (0,
        _checkoutDelivery2['default'])();
        (0,
        _checkoutPayment2['default'])();
        handleCheckoutStepChange()
    }
    function handleCheckoutStepChange() {
        (0,
        _jquery2['default'])('.checkout-step').off('click');
        var currentStepClass = 'js-current-step';
        var currentStepSelector = '.' + currentStepClass;
        var stepsAfterPersonalInformation = (0,
        _jquery2['default'])('#checkout-personal-information-step').nextAll();
        (0,
        _jquery2['default'])(currentStepSelector).prevAll().add(stepsAfterPersonalInformation).on('click', function(event) {
            var $nextStep = (0,
            _jquery2['default'])(event.target).closest('.checkout-step');
            if (!$nextStep.hasClass('-unreachable')) {
                (0,
                _jquery2['default'])(currentStepSelector + ', .-current').removeClass(currentStepClass + ' -current');
                $nextStep.toggleClass('-current');
                $nextStep.toggleClass(currentStepClass)
            }
            _prestashop2['default'].emit('changedCheckoutStep', {
                event: event
            })
        });
        (0,
        _jquery2['default'])(currentStepSelector + ':not(#checkout-personal-information-step)').nextAll().on('click', function(event) {
            (0,
            _jquery2['default'])(currentStepSelector + ' button.continue').click();
            _prestashop2['default'].emit('changedCheckoutStep', {
                event: event
            })
        })
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        if ((0,
        _jquery2['default'])('#checkout').length === 1) {
            setUpCheckout()
        }
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _common = __webpack_require__(7);
    var editAddress = (0,
    _common.psGetRequestParameter)('editAddress');
    var useSameAddress = (0,
    _common.psGetRequestParameter)('use_same_address');
    exports['default'] = function() {
        (0,
        _jquery2['default'])('.js-edit-addresses').on('click', function(event) {
            event.stopPropagation();
            (0,
            _jquery2['default'])('#checkout-addresses-step').trigger('click');
            _prestashop2['default'].emit('editAddress')
        });
        (0,
        _jquery2['default'])('#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]').on('click', function() {
            (0,
            _jquery2['default'])('.address-item').removeClass('selected');
            (0,
            _jquery2['default'])('.address-item:has(input[type=radio]:checked)').addClass('selected');
            var idFailureAddress = (0,
            _jquery2['default'])(".js-address-error").prop('id').split('-').pop();
            var notValidAddresses = (0,
            _jquery2['default'])('#not-valid-addresses').val();
            var addressType = this.name.split('_').pop();
            var $addressError = (0,
            _jquery2['default'])('.js-address-error[name=alert-' + addressType + ']');
            switchEditAddressButtonColor(!1, idFailureAddress, addressType);
            if (notValidAddresses !== "" && editAddress === null) {
                if (notValidAddresses.split(',').indexOf(this.value) >= 0) {
                    $addressError.show();
                    switchEditAddressButtonColor(!0, this.value, addressType);
                    (0,
                    _jquery2['default'])(".js-address-error").prop('id', "id-failure-address-" + this.value)
                } else {
                    $addressError.hide()
                }
            } else {
                $addressError.hide()
            }
            var $visibleAddressError = (0,
            _jquery2['default'])('.js-address-error:visible');
            switchConfirmAddressesButtonState($visibleAddressError.length <= 0)
        })
    }
    ;
    (0,
    _jquery2['default'])(window).load(function() {
        var $visibleAddressError = (0,
        _jquery2['default'])('.js-address-error:visible');
        if (parseInt(useSameAddress) === 0) {
            (0,
            _jquery2['default'])('#invoice-addresses input[type=radio]:checked').trigger('click')
        }
        if (editAddress !== null || (0,
        _jquery2['default'])('.js-address-form:visible').length > 1) {
            $visibleAddressError.hide()
        }
        if ($visibleAddressError.length > 0) {
            (function() {
                var idFailureAddress = (0,
                _jquery2['default'])(".js-address-error").prop('id').split('-').pop();
                $visibleAddressError.each(function() {
                    switchEditAddressButtonColor(!0, idFailureAddress, (0,
                    _jquery2['default'])(this).attr('name').split('-').pop())
                })
            }
            )()
        }
        $visibleAddressError = (0,
        _jquery2['default'])('.js-address-error:visible');
        switchConfirmAddressesButtonState($visibleAddressError.length <= 0)
    });
    var switchEditAddressButtonColor = function switchEditAddressButtonColor(enabled, id, type) {
        var color = "#7a7a7a";
        if (enabled) {
            (0,
            _jquery2['default'])('#' + type + '-addresses a.edit-address').prop('style', 'color: #7a7a7a !important');
            color = "#2fb5d2"
        }
        (0,
        _jquery2['default'])('#id-address-' + type + '-address-' + id + ' a.edit-address').prop('style', 'color: ' + color + ' !important')
    };
    var switchConfirmAddressesButtonState = function switchConfirmAddressesButtonState(enable) {
        (0,
        _jquery2['default'])('button[name=confirm-addresses]').prop("disabled", !enable)
    };
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    exports.psShowHide = psShowHide;
    exports.psGetRequestParameter = psGetRequestParameter;
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    function psShowHide() {
        (0,
        _jquery2['default'])('.ps-shown-by-js').show();
        (0,
        _jquery2['default'])('.ps-hidden-by-js').hide()
    }
    function psGetRequestParameter(paramName) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value) {
            vars[key] = value !== undefined ? value : ''
        });
        if (paramName !== undefined) {
            return vars[paramName] ? vars[paramName] : null
        }
        return vars
    }
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    exports['default'] = function() {
        var $body = (0,
        _jquery2['default'])('body');
        var deliveryFormSelector = '#js-delivery';
        var summarySelector = '#js-checkout-summary';
        var deliveryStepSelector = '#checkout-delivery-step';
        var editDeliveryButtonSelector = '.js-edit-delivery';
        var updateDeliveryForm = function updateDeliveryForm(event) {
            var $deliveryMethodForm = (0,
            _jquery2['default'])(deliveryFormSelector);
            var requestData = $deliveryMethodForm.serialize();
            var $inputChecked = (0,
            _jquery2['default'])(event.currentTarget);
            var $newDeliveryOption = $inputChecked.parents("div.delivery-option");
            _jquery2['default'].post($deliveryMethodForm.data('url-update'), requestData).then(function(resp) {
                (0,
                _jquery2['default'])(summarySelector).replaceWith(resp.preview);
                _prestashop2['default'].emit('updatedDeliveryForm', {
                    dataForm: $deliveryMethodForm.serializeArray(),
                    deliveryOption: $newDeliveryOption,
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].trigger('handleError', {
                    eventType: 'updateDeliveryOptions',
                    resp: resp
                })
            })
        };
        $body.on('change', deliveryFormSelector + ' input', updateDeliveryForm);
        $body.on('click', editDeliveryButtonSelector, function(event) {
            event.stopPropagation();
            (0,
            _jquery2['default'])(deliveryStepSelector).trigger('click');
            _prestashop2['default'].emit('editDelivery')
        })
    }
    ;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var Payment = (function() {
        function Payment() {
            _classCallCheck(this, Payment);
            this.confirmationSelector = '#payment-confirmation';
            this.paymentSelector = '#payment-section';
            this.conditionsSelector = '#conditions-to-approve';
            this.conditionAlertSelector = '.js-alert-payment-conditions';
            this.additionalInformatonSelector = '.js-additional-information';
            this.optionsForm = '.js-payment-option-form'
        }
        _createClass(Payment, [{
            key: 'init',
            value: function init() {
                (0,
                _jquery2['default'])(this.paymentSelector + ' input[type="checkbox"][disabled]').attr('disabled', !1);
                var $body = (0,
                _jquery2['default'])('body');
                $body.on('change', this.conditionsSelector + ' input[type="checkbox"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                $body.on('change', 'input[name="payment-option"]', _jquery2['default'].proxy(this.toggleOrderButton, this));
                $body.on('click', this.confirmationSelector + ' button', _jquery2['default'].proxy(this.confirm, this));
                this.collapseOptions()
            }
        }, {
            key: 'collapseOptions',
            value: function collapseOptions() {
                (0,
                _jquery2['default'])(this.additionalInformatonSelector + ', ' + this.optionsForm).hide()
            }
        }, {
            key: 'getSelectedOption',
            value: function getSelectedOption() {
                return (0,
                _jquery2['default'])('input[name="payment-option"]:checked').attr('id')
            }
        }, {
            key: 'hideConfirmation',
            value: function hideConfirmation() {
                (0,
                _jquery2['default'])(this.confirmationSelector).hide()
            }
        }, {
            key: 'showConfirmation',
            value: function showConfirmation() {
                (0,
                _jquery2['default'])(this.confirmationSelector).show()
            }
        }, {
            key: 'toggleOrderButton',
            value: function toggleOrderButton() {
                var show = !0;
                (0,
                _jquery2['default'])(this.conditionsSelector + ' input[type="checkbox"]').each(function(_, checkbox) {
                    if (!checkbox.checked) {
                        show = !1
                    }
                });
                this.collapseOptions();
                var selectedOption = this.getSelectedOption();
                if (!selectedOption) {
                    show = !1
                }
                (0,
                _jquery2['default'])('#' + selectedOption + '-additional-information').show();
                (0,
                _jquery2['default'])('#pay-with-' + selectedOption + '-form').show();
                (0,
                _jquery2['default'])('.js-payment-binary').hide();
                if ((0,
                _jquery2['default'])('#' + selectedOption).hasClass('binary')) {
                    var paymentOption = this.getPaymentOptionSelector(selectedOption);
                    this.hideConfirmation();
                    (0,
                    _jquery2['default'])(paymentOption).show();
                    if (show) {
                        (0,
                        _jquery2['default'])(paymentOption).removeClass('disabled')
                    } else {
                        (0,
                        _jquery2['default'])(paymentOption).addClass('disabled')
                    }
                } else {
                    this.showConfirmation();
                    (0,
                    _jquery2['default'])(this.confirmationSelector + ' button').attr('disabled', !show);
                    if (show) {
                        (0,
                        _jquery2['default'])(this.conditionAlertSelector).hide()
                    } else {
                        (0,
                        _jquery2['default'])(this.conditionAlertSelector).show()
                    }
                }
            }
        }, {
            key: 'getPaymentOptionSelector',
            value: function getPaymentOptionSelector(option) {
                var moduleName = (0,
                _jquery2['default'])('#' + option).data('module-name');
                return '.js-payment-' + moduleName
            }
        }, {
            key: 'confirm',
            value: function confirm() {
                var option = this.getSelectedOption();
                if (option) {
                    (0,
                    _jquery2['default'])('#pay-with-' + option + '-form form').submit()
                }
            }
        }]);
        return Payment
    }
    )();
    exports['default'] = function() {
        var payment = new Payment();
        payment.init();
        return payment
    }
    ;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var pendingQuery = !1;
    function updateResults(data) {
        pendingQuery = !1;
        prestashop.emit('updateProductList', data);
        window.history.pushState(data, undefined, data.current_url);
        window.scrollTo(0, 0)
    }
    function handleError() {
        pendingQuery = !1
    }
    function makeQuery(url) {
        if (pendingQuery) {} else {
            var slightlyDifferentURL = [url, url.indexOf('?') >= 0 ? '&' : '?', 'from-xhr'].join('');
            _jquery2['default'].get(slightlyDifferentURL, null, null, 'json').then(updateResults).fail(handleError)
        }
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        prestashop.on('updateFacets', function(param) {
            makeQuery(param)
        })
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    (0,
    _jquery2['default'])(document).ready(function() {
        (0,
        _jquery2['default'])('body').on('click', '.quick-view', function(event) {
            _prestashop2['default'].emit('clickQuickView', {
                dataset: (0,
                _jquery2['default'])(event.target).closest('.js-product-miniature').data()
            });
            event.preventDefault()
        })
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _common = __webpack_require__(7);
    (0,
    _jquery2['default'])(document).ready(function() {
        (0,
        _jquery2['default'])('body').on('change', '.product-variants [data-product-attribute]', function() {
            (0,
            _jquery2['default'])("input[name$='refresh']").click()
        });
        (0,
        _jquery2['default'])('body').on('click', '.product-refresh', function(event, extraParameters) {
            var $productRefresh = (0,
            _jquery2['default'])(this);
            event.preventDefault();
            var eventType = 'updatedProductCombination';
            if (typeof extraParameters !== 'undefined' && extraParameters.eventType) {
                eventType = extraParameters.eventType
            }
            var preview = (0,
            _common.psGetRequestParameter)('preview');
            if (preview !== null) {
                preview = '&preview=' + preview
            } else {
                preview = ''
            }
            var query = (0,
            _jquery2['default'])(event.target.form).serialize() + '&ajax=1&action=productrefresh' + preview;
            var actionURL = (0,
            _jquery2['default'])(event.target.form).attr('action');
            _jquery2['default'].post(actionURL, query, null, 'json').then(function(resp) {
                _prestashop2['default'].emit('updateProduct', {
                    reason: {
                        productUrl: resp.productUrl
                    },
                    refreshUrl: $productRefresh.data('url-update'),
                    eventType: eventType,
                    resp: resp
                })
            })
        });
        _prestashop2['default'].on('updateProduct', function(event) {
            if (typeof event.refreshUrl == "undefined") {
                event.refreshUrl = !0
            }
            var eventType = event.eventType;
            var replaceAddToCartSections = function replaceAddToCartSections(addCartHtml) {
                var $addToCartSnippet = (0,
                _jquery2['default'])(addCartHtml);
                var $addProductToCart = (0,
                _jquery2['default'])('.product-add-to-cart');
                function replaceAddToCartSection(replacement) {
                    var replace = replacement.$addToCartSnippet.find(replacement.targetSelector);
                    if ((0,
                    _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).length > 0) {
                        if (replace.length > 0) {
                            (0,
                            _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).replaceWith(replace[0].outerHTML)
                        } else {
                            (0,
                            _jquery2['default'])(replacement.$targetParent.find(replacement.targetSelector)).html('')
                        }
                    }
                }
                var productAvailabilitySelector = '.add';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productAvailabilitySelector
                });
                var productAvailabilityMessageSelector = '#product-availability';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productAvailabilityMessageSelector
                });
                var productMinimalQuantitySelector = '.product-minimal-quantity';
                replaceAddToCartSection({
                    $addToCartSnippet: $addToCartSnippet,
                    $targetParent: $addProductToCart,
                    targetSelector: productMinimalQuantitySelector
                })
            };
            _jquery2['default'].post(event.reason.productUrl, {
                ajax: '1',
                action: 'refresh'
            }, null, 'json').then(function(resp) {
                (0,
                _jquery2['default'])('.product-prices').replaceWith(resp.product_prices);
                (0,
                _jquery2['default'])('.product-customization').replaceWith(resp.product_customization);
                (0,
                _jquery2['default'])('.product-variants').replaceWith(resp.product_variants);
                (0,
                _jquery2['default'])('.product-discounts').replaceWith(resp.product_discounts);
                (0,
                _jquery2['default'])('.images-container').replaceWith(resp.product_cover_thumbnails);
                (0,
                _jquery2['default'])('.product-additional-info').replaceWith(resp.product_additional_info);
                (0,
                _jquery2['default'])('#product-details').replaceWith(resp.product_details);
                var $productAddToCart = undefined;
                (0,
                _jquery2['default'])(resp.product_add_to_cart).each(function(index, value) {
                    if ((0,
                    _jquery2['default'])(value).hasClass('product-add-to-cart')) {
                        $productAddToCart = (0,
                        _jquery2['default'])(value)
                    }
                });
                replaceAddToCartSections($productAddToCart);
                var minimalProductQuantity = parseInt(resp.product_minimal_quantity, 10);
                var quantityInputSelector = '#quantity_wanted';
                var quantityInput = (0,
                _jquery2['default'])(quantityInputSelector);
                var quantity_wanted = quantityInput.val();
                if (!isNaN(minimalProductQuantity) && quantity_wanted < minimalProductQuantity && eventType !== 'updatedProductQuantity') {
                    quantityInput.attr('min', minimalProductQuantity);
                    quantityInput.val(minimalProductQuantity)
                }
                if (event.refreshUrl) {
                    window.history.pushState({
                        id_product_attribute: resp.id_product_attribute
                    }, undefined, resp.product_url)
                }
                _prestashop2['default'].emit('updatedProduct', resp)
            })
        })
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(2);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(4);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    function handleCountryChange(selectors) {
        (0,
        _jquery2['default'])('body').on('change', selectors.country, function() {
            var requestData = {
                id_country: (0,
                _jquery2['default'])(selectors.country).val(),
                id_address: (0,
                _jquery2['default'])(selectors.address + ' form').data('id-address')
            };
            var getFormViewUrl = (0,
            _jquery2['default'])(selectors.address + ' form').data('refresh-url');
            var formFieldsSelector = selectors.address + ' input';
            _jquery2['default'].post(getFormViewUrl, requestData).then(function(resp) {
                var inputs = [];
                (0,
                _jquery2['default'])(formFieldsSelector).each(function() {
                    inputs[(0,
                    _jquery2['default'])(this).prop('name')] = (0,
                    _jquery2['default'])(this).val()
                });
                (0,
                _jquery2['default'])(selectors.address).replaceWith(resp.address_form);
                (0,
                _jquery2['default'])(formFieldsSelector).each(function() {
                    (0,
                    _jquery2['default'])(this).val(inputs[(0,
                    _jquery2['default'])(this).prop('name')])
                });
                _prestashop2['default'].emit('updatedAddressForm', {
                    target: (0,
                    _jquery2['default'])(selectors.address),
                    resp: resp
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateAddressForm',
                    resp: resp
                })
            })
        })
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        handleCountryChange({
            'country': '.js-country',
            'address': '.js-address-form'
        })
    });
    /***/
}
), (function(module, exports) {
    'use strict';
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this
    }
    ;
    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        if (!this._events)
            this._events = {};
        if (type === 'error') {
            if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er
                } else {
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                    err.context = er;
                    throw err
                }
            }
        }
        handler = this._events[type];
        if (isUndefined(handler))
            return !1;
        if (isFunction(handler)) {
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args)
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }
        return !0
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events)
            this._events = {};
        if (this._events.newListener)
            this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
            this._events[type] = listener;
        else if (isObject(this._events[type]))
            this._events[type].push(listener);
        else
            this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners
            } else {
                m = EventEmitter.defaultMaxListeners
            }
            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = !0;
                console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                if (typeof console.trace === 'function') {
                    console.trace()
                }
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        var fired = !1;
        function g() {
            this.removeListener(type, g);
            if (!fired) {
                fired = !0;
                listener.apply(this, arguments)
            }
        }
        g.listener = listener;
        this.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events || !this._events[type])
            return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || isFunction(list.listener) && list.listener === listener) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit('removeListener', type, listener)
        } else if (isObject(list)) {
            for (i = length; i-- > 0; ) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            if (list.length === 1) {
                list.length = 0;
                delete this._events[type]
            } else {
                list.splice(position, 1)
            }
            if (this._events.removeListener)
                this.emit('removeListener', type, listener)
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events)
            return this;
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this
        }
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener')
                    continue;
                this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
            this.removeListener(type, listeners)
        } else if (listeners) {
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret
    }
    ;
    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length
        }
        return 0
    }
    ;
    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type)
    }
    ;
    function isFunction(arg) {
        return typeof arg === 'function'
    }
    function isNumber(arg) {
        return typeof arg === 'number'
    }
    function isObject(arg) {
        return typeof arg === 'object' && arg !== null
    }
    function isUndefined(arg) {
        return arg === void 0
    }
    /***/
}
)]);
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = !0;
        return module.exports;
        /******/
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
    /******/
}
)([(function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    __webpack_require__(2);
    __webpack_require__(4);
    __webpack_require__(5);
    __webpack_require__(6);
    __webpack_require__(7);
    __webpack_require__(8);
    __webpack_require__(9);
    __webpack_require__(11);
    __webpack_require__(53);
    __webpack_require__(55);
    __webpack_require__(56);
    __webpack_require__(57);
    __webpack_require__(60);
    __webpack_require__(61);
    var _componentsDropDown = __webpack_require__(62);
    var _componentsDropDown2 = _interopRequireDefault(_componentsDropDown);
    var _componentsForm = __webpack_require__(63);
    var _componentsForm2 = _interopRequireDefault(_componentsForm);
    var _componentsProductMiniature = __webpack_require__(59);
    var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
    var _componentsProductSelect = __webpack_require__(64);
    var _componentsProductSelect2 = _interopRequireDefault(_componentsProductSelect);
    var _componentsTopMenu = __webpack_require__(65);
    var _componentsTopMenu2 = _interopRequireDefault(_componentsTopMenu);
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _events = __webpack_require__(66);
    var _events2 = _interopRequireDefault(_events);
    __webpack_require__(67);
    __webpack_require__(68);
    __webpack_require__(69);
    for (var i in _events2['default'].prototype) {
        _prestashop2['default'][i] = _events2['default'].prototype[i]
    }
    $(document).ready(function() {
        var dropDownEl = $('.js-dropdown');
        var form = new _componentsForm2['default']();
        var topMenuEl = $('.js-top-menu ul[data-depth="0"]');
        var dropDown = new _componentsDropDown2['default'](dropDownEl);
        var topMenu = new _componentsTopMenu2['default'](topMenuEl);
        var productMinitature = new _componentsProductMiniature2['default']();
        var productSelect = new _componentsProductSelect2['default']();
        dropDown.init();
        form.init();
        topMenu.init();
        productMinitature.init();
        productSelect.init()
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.Tether = __webpack_require__(3);
        /* WEBPACK VAR INJECTION */
    }
    .call(exports, (function() {
        return this
    }())))
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(root, factory) {
        if (!0) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else if (typeof exports === 'object') {
            module.exports = factory(require, exports, module)
        } else {
            root.Tether = factory()
        }
    }(this, function(require, exports, module) {
        'use strict';
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value'in descriptor)
                        descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }
        )();
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        var TetherBase = undefined;
        if (typeof TetherBase === 'undefined') {
            TetherBase = {
                modules: []
            }
        }
        var zeroElement = null;
        function getActualBoundingClientRect(node) {
            var boundingRect = node.getBoundingClientRect();
            var rect = {};
            for (var k in boundingRect) {
                rect[k] = boundingRect[k]
            }
            if (node.ownerDocument !== document) {
                var _frameElement = node.ownerDocument.defaultView.frameElement;
                if (_frameElement) {
                    var frameRect = getActualBoundingClientRect(_frameElement);
                    rect.top += frameRect.top;
                    rect.bottom += frameRect.top;
                    rect.left += frameRect.left;
                    rect.right += frameRect.left
                }
            }
            return rect
        }
        function getScrollParents(el) {
            var computedStyle = getComputedStyle(el) || {};
            var position = computedStyle.position;
            var parents = [];
            if (position === 'fixed') {
                return [el]
            }
            var parent = el;
            while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
                var style = undefined;
                try {
                    style = getComputedStyle(parent)
                } catch (err) {}
                if (typeof style === 'undefined' || style === null) {
                    parents.push(parent);
                    return parents
                }
                var _style = style;
                var overflow = _style.overflow;
                var overflowX = _style.overflowX;
                var overflowY = _style.overflowY;
                if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
                    if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
                        parents.push(parent)
                    }
                }
            }
            parents.push(el.ownerDocument.body);
            if (el.ownerDocument !== document) {
                parents.push(el.ownerDocument.defaultView)
            }
            return parents
        }
        var uniqueId = (function() {
            var id = 0;
            return function() {
                return ++id
            }
        }
        )();
        var zeroPosCache = {};
        var getOrigin = function getOrigin() {
            var node = zeroElement;
            if (!node || !document.body.contains(node)) {
                node = document.createElement('div');
                node.setAttribute('data-tether-id', uniqueId());
                extend(node.style, {
                    top: 0,
                    left: 0,
                    position: 'absolute'
                });
                document.body.appendChild(node);
                zeroElement = node
            }
            var id = node.getAttribute('data-tether-id');
            if (typeof zeroPosCache[id] === 'undefined') {
                zeroPosCache[id] = getActualBoundingClientRect(node);
                defer(function() {
                    delete zeroPosCache[id]
                })
            }
            return zeroPosCache[id]
        };
        function removeUtilElements() {
            if (zeroElement) {
                document.body.removeChild(zeroElement)
            }
            zeroElement = null
        }
        ;function getBounds(el) {
            var doc = undefined;
            if (el === document) {
                doc = document;
                el = document.documentElement
            } else {
                doc = el.ownerDocument
            }
            var docEl = doc.documentElement;
            var box = getActualBoundingClientRect(el);
            var origin = getOrigin();
            box.top -= origin.top;
            box.left -= origin.left;
            if (typeof box.width === 'undefined') {
                box.width = document.body.scrollWidth - box.left - box.right
            }
            if (typeof box.height === 'undefined') {
                box.height = document.body.scrollHeight - box.top - box.bottom
            }
            box.top = box.top - docEl.clientTop;
            box.left = box.left - docEl.clientLeft;
            box.right = doc.body.clientWidth - box.width - box.left;
            box.bottom = doc.body.clientHeight - box.height - box.top;
            return box
        }
        function getOffsetParent(el) {
            return el.offsetParent || document.documentElement
        }
        var _scrollBarSize = null;
        function getScrollBarSize() {
            if (_scrollBarSize) {
                return _scrollBarSize
            }
            var inner = document.createElement('div');
            inner.style.width = '100%';
            inner.style.height = '200px';
            var outer = document.createElement('div');
            extend(outer.style, {
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                visibility: 'hidden',
                width: '200px',
                height: '150px',
                overflow: 'hidden'
            });
            outer.appendChild(inner);
            document.body.appendChild(outer);
            var widthContained = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var widthScroll = inner.offsetWidth;
            if (widthContained === widthScroll) {
                widthScroll = outer.clientWidth
            }
            document.body.removeChild(outer);
            var width = widthContained - widthScroll;
            _scrollBarSize = {
                width: width,
                height: width
            };
            return _scrollBarSize
        }
        function extend() {
            var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var args = [];
            Array.prototype.push.apply(args, arguments);
            args.slice(1).forEach(function(obj) {
                if (obj) {
                    for (var key in obj) {
                        if (({}).hasOwnProperty.call(obj, key)) {
                            out[key] = obj[key]
                        }
                    }
                }
            });
            return out
        }
        function removeClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                name.split(' ').forEach(function(cls) {
                    if (cls.trim()) {
                        el.classList.remove(cls)
                    }
                })
            } else {
                var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)','gi');
                var className = getClassName(el).replace(regex, ' ');
                setClassName(el, className)
            }
        }
        function addClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                name.split(' ').forEach(function(cls) {
                    if (cls.trim()) {
                        el.classList.add(cls)
                    }
                })
            } else {
                removeClass(el, name);
                var cls = getClassName(el) + (' ' + name);
                setClassName(el, cls)
            }
        }
        function hasClass(el, name) {
            if (typeof el.classList !== 'undefined') {
                return el.classList.contains(name)
            }
            var className = getClassName(el);
            return new RegExp('(^| )' + name + '( |$)','gi').test(className)
        }
        function getClassName(el) {
            if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
                return el.className.baseVal
            }
            return el.className
        }
        function setClassName(el, className) {
            el.setAttribute('class', className)
        }
        function updateClasses(el, add, all) {
            all.forEach(function(cls) {
                if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
                    removeClass(el, cls)
                }
            });
            add.forEach(function(cls) {
                if (!hasClass(el, cls)) {
                    addClass(el, cls)
                }
            })
        }
        var deferred = [];
        var defer = function defer(fn) {
            deferred.push(fn)
        };
        var flush = function flush() {
            var fn = undefined;
            while (fn = deferred.pop()) {
                fn()
            }
        };
        var Evented = (function() {
            function Evented() {
                _classCallCheck(this, Evented)
            }
            _createClass(Evented, [{
                key: 'on',
                value: function on(event, handler, ctx) {
                    var once = arguments.length <= 3 || arguments[3] === undefined ? !1 : arguments[3];
                    if (typeof this.bindings === 'undefined') {
                        this.bindings = {}
                    }
                    if (typeof this.bindings[event] === 'undefined') {
                        this.bindings[event] = []
                    }
                    this.bindings[event].push({
                        handler: handler,
                        ctx: ctx,
                        once: once
                    })
                }
            }, {
                key: 'once',
                value: function once(event, handler, ctx) {
                    this.on(event, handler, ctx, !0)
                }
            }, {
                key: 'off',
                value: function off(event, handler) {
                    if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
                        return
                    }
                    if (typeof handler === 'undefined') {
                        delete this.bindings[event]
                    } else {
                        var i = 0;
                        while (i < this.bindings[event].length) {
                            if (this.bindings[event][i].handler === handler) {
                                this.bindings[event].splice(i, 1)
                            } else {
                                ++i
                            }
                        }
                    }
                }
            }, {
                key: 'trigger',
                value: function trigger(event) {
                    if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
                        var i = 0;
                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key]
                        }
                        while (i < this.bindings[event].length) {
                            var _bindings$event$i = this.bindings[event][i];
                            var handler = _bindings$event$i.handler;
                            var ctx = _bindings$event$i.ctx;
                            var once = _bindings$event$i.once;
                            var context = ctx;
                            if (typeof context === 'undefined') {
                                context = this
                            }
                            handler.apply(context, args);
                            if (once) {
                                this.bindings[event].splice(i, 1)
                            } else {
                                ++i
                            }
                        }
                    }
                }
            }]);
            return Evented
        }
        )();
        TetherBase.Utils = {
            getActualBoundingClientRect: getActualBoundingClientRect,
            getScrollParents: getScrollParents,
            getBounds: getBounds,
            getOffsetParent: getOffsetParent,
            extend: extend,
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass,
            updateClasses: updateClasses,
            defer: defer,
            flush: flush,
            uniqueId: uniqueId,
            Evented: Evented,
            getScrollBarSize: getScrollBarSize,
            removeUtilElements: removeUtilElements
        };
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']()
                    } finally {
                        if (_d)
                            throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        }
        )();
        var _createClass = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1;
                    descriptor.configurable = !0;
                    if ('value'in descriptor)
                        descriptor.writable = !0;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }
        )();
        var _get = function get(_x6, _x7, _x8) {
            var _again = !0;
            _function: while (_again) {
                var object = _x6
                  , property = _x7
                  , receiver = _x8;
                _again = !1;
                if (object === null)
                    object = Function.prototype;
                var desc = Object.getOwnPropertyDescriptor(object, property);
                if (desc === undefined) {
                    var parent = Object.getPrototypeOf(object);
                    if (parent === null) {
                        return undefined
                    } else {
                        _x6 = parent;
                        _x7 = property;
                        _x8 = receiver;
                        _again = !0;
                        desc = parent = undefined;
                        continue _function
                    }
                } else if ('value'in desc) {
                    return desc.value
                } else {
                    var getter = desc.get;
                    if (getter === undefined) {
                        return undefined
                    }
                    return getter.call(receiver)
                }
            }
        };
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function')
            }
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        if (typeof TetherBase === 'undefined') {
            throw new Error('You must include the utils.js file before tether.js')
        }
        var _TetherBase$Utils = TetherBase.Utils;
        var getScrollParents = _TetherBase$Utils.getScrollParents;
        var getBounds = _TetherBase$Utils.getBounds;
        var getOffsetParent = _TetherBase$Utils.getOffsetParent;
        var extend = _TetherBase$Utils.extend;
        var addClass = _TetherBase$Utils.addClass;
        var removeClass = _TetherBase$Utils.removeClass;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        var flush = _TetherBase$Utils.flush;
        var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
        var removeUtilElements = _TetherBase$Utils.removeUtilElements;
        function within(a, b) {
            var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
            return a + diff >= b && b >= a - diff
        }
        var transformKey = (function() {
            if (typeof document === 'undefined') {
                return ''
            }
            var el = document.createElement('div');
            var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
            for (var i = 0; i < transforms.length; ++i) {
                var key = transforms[i];
                if (el.style[key] !== undefined) {
                    return key
                }
            }
        }
        )();
        var tethers = [];
        var position = function position() {
            tethers.forEach(function(tether) {
                tether.position(!1)
            });
            flush()
        };
        function now() {
            if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
                return performance.now()
            }
            return +new Date()
        }
        (function() {
            var lastCall = null;
            var lastDuration = null;
            var pendingTimeout = null;
            var tick = function tick() {
                if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
                    lastDuration = Math.min(lastDuration - 16, 250);
                    pendingTimeout = setTimeout(tick, 250);
                    return
                }
                if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
                    return
                }
                if (pendingTimeout != null) {
                    clearTimeout(pendingTimeout);
                    pendingTimeout = null
                }
                lastCall = now();
                position();
                lastDuration = now() - lastCall
            };
            if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
                ['resize', 'scroll', 'touchmove'].forEach(function(event) {
                    window.addEventListener(event, tick)
                })
            }
        }
        )();
        var MIRROR_LR = {
            center: 'center',
            left: 'right',
            right: 'left'
        };
        var MIRROR_TB = {
            middle: 'middle',
            top: 'bottom',
            bottom: 'top'
        };
        var OFFSET_MAP = {
            top: 0,
            left: 0,
            middle: '50%',
            center: '50%',
            bottom: '100%',
            right: '100%'
        };
        var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
            var left = attachment.left;
            var top = attachment.top;
            if (left === 'auto') {
                left = MIRROR_LR[relativeToAttachment.left]
            }
            if (top === 'auto') {
                top = MIRROR_TB[relativeToAttachment.top]
            }
            return {
                left: left,
                top: top
            }
        };
        var attachmentToOffset = function attachmentToOffset(attachment) {
            var left = attachment.left;
            var top = attachment.top;
            if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
                left = OFFSET_MAP[attachment.left]
            }
            if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
                top = OFFSET_MAP[attachment.top]
            }
            return {
                left: left,
                top: top
            }
        };
        function addOffset() {
            var out = {
                top: 0,
                left: 0
            };
            for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
                offsets[_key] = arguments[_key]
            }
            offsets.forEach(function(_ref) {
                var top = _ref.top;
                var left = _ref.left;
                if (typeof top === 'string') {
                    top = parseFloat(top, 10)
                }
                if (typeof left === 'string') {
                    left = parseFloat(left, 10)
                }
                out.top += top;
                out.left += left
            });
            return out
        }
        function offsetToPx(offset, size) {
            if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
                offset.left = parseFloat(offset.left, 10) / 100 * size.width
            }
            if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
                offset.top = parseFloat(offset.top, 10) / 100 * size.height
            }
            return offset
        }
        var parseOffset = function parseOffset(value) {
            var _value$split = value.split(' ');
            var _value$split2 = _slicedToArray(_value$split, 2);
            var top = _value$split2[0];
            var left = _value$split2[1];
            return {
                top: top,
                left: left
            }
        };
        var parseAttachment = parseOffset;
        var TetherClass = (function(_Evented) {
            _inherits(TetherClass, _Evented);
            function TetherClass(options) {
                var _this = this;
                _classCallCheck(this, TetherClass);
                _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
                this.position = this.position.bind(this);
                tethers.push(this);
                this.history = [];
                this.setOptions(options, !1);
                TetherBase.modules.forEach(function(module) {
                    if (typeof module.initialize !== 'undefined') {
                        module.initialize.call(_this)
                    }
                });
                this.position()
            }
            _createClass(TetherClass, [{
                key: 'getClass',
                value: function getClass() {
                    var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                    var classes = this.options.classes;
                    if (typeof classes !== 'undefined' && classes[key]) {
                        return this.options.classes[key]
                    } else if (this.options.classPrefix) {
                        return this.options.classPrefix + '-' + key
                    } else {
                        return key
                    }
                }
            }, {
                key: 'setOptions',
                value: function setOptions(options) {
                    var _this2 = this;
                    var pos = arguments.length <= 1 || arguments[1] === undefined ? !0 : arguments[1];
                    var defaults = {
                        offset: '0 0',
                        targetOffset: '0 0',
                        targetAttachment: 'auto auto',
                        classPrefix: 'tether'
                    };
                    this.options = extend(defaults, options);
                    var _options = this.options;
                    var element = _options.element;
                    var target = _options.target;
                    var targetModifier = _options.targetModifier;
                    this.element = element;
                    this.target = target;
                    this.targetModifier = targetModifier;
                    if (this.target === 'viewport') {
                        this.target = document.body;
                        this.targetModifier = 'visible'
                    } else if (this.target === 'scroll-handle') {
                        this.target = document.body;
                        this.targetModifier = 'scroll-handle'
                    }
                    ['element', 'target'].forEach(function(key) {
                        if (typeof _this2[key] === 'undefined') {
                            throw new Error('Tether Error: Both element and target must be defined')
                        }
                        if (typeof _this2[key].jquery !== 'undefined') {
                            _this2[key] = _this2[key][0]
                        } else if (typeof _this2[key] === 'string') {
                            _this2[key] = document.querySelector(_this2[key])
                        }
                    });
                    addClass(this.element, this.getClass('element'));
                    if (!(this.options.addTargetClasses === !1)) {
                        addClass(this.target, this.getClass('target'))
                    }
                    if (!this.options.attachment) {
                        throw new Error('Tether Error: You must provide an attachment')
                    }
                    this.targetAttachment = parseAttachment(this.options.targetAttachment);
                    this.attachment = parseAttachment(this.options.attachment);
                    this.offset = parseOffset(this.options.offset);
                    this.targetOffset = parseOffset(this.options.targetOffset);
                    if (typeof this.scrollParents !== 'undefined') {
                        this.disable()
                    }
                    if (this.targetModifier === 'scroll-handle') {
                        this.scrollParents = [this.target]
                    } else {
                        this.scrollParents = getScrollParents(this.target)
                    }
                    if (!(this.options.enabled === !1)) {
                        this.enable(pos)
                    }
                }
            }, {
                key: 'getTargetBounds',
                value: function getTargetBounds() {
                    if (typeof this.targetModifier !== 'undefined') {
                        if (this.targetModifier === 'visible') {
                            if (this.target === document.body) {
                                return {
                                    top: pageYOffset,
                                    left: pageXOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                }
                            } else {
                                var bounds = getBounds(this.target);
                                var out = {
                                    height: bounds.height,
                                    width: bounds.width,
                                    top: bounds.top,
                                    left: bounds.left
                                };
                                out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                                out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                                out.height = Math.min(innerHeight, out.height);
                                out.height -= 2;
                                out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                                out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                                out.width = Math.min(innerWidth, out.width);
                                out.width -= 2;
                                if (out.top < pageYOffset) {
                                    out.top = pageYOffset
                                }
                                if (out.left < pageXOffset) {
                                    out.left = pageXOffset
                                }
                                return out
                            }
                        } else if (this.targetModifier === 'scroll-handle') {
                            var bounds = undefined;
                            var target = this.target;
                            if (target === document.body) {
                                target = document.documentElement;
                                bounds = {
                                    left: pageXOffset,
                                    top: pageYOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                }
                            } else {
                                bounds = getBounds(target)
                            }
                            var style = getComputedStyle(target);
                            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
                            var scrollBottom = 0;
                            if (hasBottomScroll) {
                                scrollBottom = 15
                            }
                            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
                            var out = {
                                width: 15,
                                height: height * 0.975 * (height / target.scrollHeight),
                                left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                            };
                            var fitAdj = 0;
                            if (height < 408 && this.target === document.body) {
                                fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58
                            }
                            if (this.target !== document.body) {
                                out.height = Math.max(out.height, 24)
                            }
                            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
                            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
                            if (this.target === document.body) {
                                out.height = Math.max(out.height, 24)
                            }
                            return out
                        }
                    } else {
                        return getBounds(this.target)
                    }
                }
            }, {
                key: 'clearCache',
                value: function clearCache() {
                    this._cache = {}
                }
            }, {
                key: 'cache',
                value: function cache(k, getter) {
                    if (typeof this._cache === 'undefined') {
                        this._cache = {}
                    }
                    if (typeof this._cache[k] === 'undefined') {
                        this._cache[k] = getter.call(this)
                    }
                    return this._cache[k]
                }
            }, {
                key: 'enable',
                value: function enable() {
                    var _this3 = this;
                    var pos = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
                    if (!(this.options.addTargetClasses === !1)) {
                        addClass(this.target, this.getClass('enabled'))
                    }
                    addClass(this.element, this.getClass('enabled'));
                    this.enabled = !0;
                    this.scrollParents.forEach(function(parent) {
                        if (parent !== _this3.target.ownerDocument) {
                            parent.addEventListener('scroll', _this3.position)
                        }
                    });
                    if (pos) {
                        this.position()
                    }
                }
            }, {
                key: 'disable',
                value: function disable() {
                    var _this4 = this;
                    removeClass(this.target, this.getClass('enabled'));
                    removeClass(this.element, this.getClass('enabled'));
                    this.enabled = !1;
                    if (typeof this.scrollParents !== 'undefined') {
                        this.scrollParents.forEach(function(parent) {
                            parent.removeEventListener('scroll', _this4.position)
                        })
                    }
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    var _this5 = this;
                    this.disable();
                    tethers.forEach(function(tether, i) {
                        if (tether === _this5) {
                            tethers.splice(i, 1)
                        }
                    });
                    if (tethers.length === 0) {
                        removeUtilElements()
                    }
                }
            }, {
                key: 'updateAttachClasses',
                value: function updateAttachClasses(elementAttach, targetAttach) {
                    var _this6 = this;
                    elementAttach = elementAttach || this.attachment;
                    targetAttach = targetAttach || this.targetAttachment;
                    var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
                    if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
                        this._addAttachClasses.splice(0, this._addAttachClasses.length)
                    }
                    if (typeof this._addAttachClasses === 'undefined') {
                        this._addAttachClasses = []
                    }
                    var add = this._addAttachClasses;
                    if (elementAttach.top) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.top)
                    }
                    if (elementAttach.left) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.left)
                    }
                    if (targetAttach.top) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.top)
                    }
                    if (targetAttach.left) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.left)
                    }
                    var all = [];
                    sides.forEach(function(side) {
                        all.push(_this6.getClass('element-attached') + '-' + side);
                        all.push(_this6.getClass('target-attached') + '-' + side)
                    });
                    defer(function() {
                        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                            return
                        }
                        updateClasses(_this6.element, _this6._addAttachClasses, all);
                        if (!(_this6.options.addTargetClasses === !1)) {
                            updateClasses(_this6.target, _this6._addAttachClasses, all)
                        }
                        delete _this6._addAttachClasses
                    })
                }
            }, {
                key: 'position',
                value: function position() {
                    var _this7 = this;
                    var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? !0 : arguments[0];
                    if (!this.enabled) {
                        return
                    }
                    this.clearCache();
                    var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, targetAttachment);
                    var elementPos = this.cache('element-bounds', function() {
                        return getBounds(_this7.element)
                    });
                    var width = elementPos.width;
                    var height = elementPos.height;
                    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                        var _lastSize = this.lastSize;
                        width = _lastSize.width;
                        height = _lastSize.height
                    } else {
                        this.lastSize = {
                            width: width,
                            height: height
                        }
                    }
                    var targetPos = this.cache('target-bounds', function() {
                        return _this7.getTargetBounds()
                    });
                    var targetSize = targetPos;
                    var offset = offsetToPx(attachmentToOffset(this.attachment), {
                        width: width,
                        height: height
                    });
                    var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
                    var manualOffset = offsetToPx(this.offset, {
                        width: width,
                        height: height
                    });
                    var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
                    offset = addOffset(offset, manualOffset);
                    targetOffset = addOffset(targetOffset, manualTargetOffset);
                    var left = targetPos.left + targetOffset.left - offset.left;
                    var top = targetPos.top + targetOffset.top - offset.top;
                    for (var i = 0; i < TetherBase.modules.length; ++i) {
                        var _module2 = TetherBase.modules[i];
                        var ret = _module2.position.call(this, {
                            left: left,
                            top: top,
                            targetAttachment: targetAttachment,
                            targetPos: targetPos,
                            elementPos: elementPos,
                            offset: offset,
                            targetOffset: targetOffset,
                            manualOffset: manualOffset,
                            manualTargetOffset: manualTargetOffset,
                            scrollbarSize: scrollbarSize,
                            attachment: this.attachment
                        });
                        if (ret === !1) {
                            return !1
                        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
                            continue
                        } else {
                            top = ret.top;
                            left = ret.left
                        }
                    }
                    var next = {
                        page: {
                            top: top,
                            left: left
                        },
                        viewport: {
                            top: top - pageYOffset,
                            bottom: pageYOffset - top - height + innerHeight,
                            left: left - pageXOffset,
                            right: pageXOffset - left - width + innerWidth
                        }
                    };
                    var doc = this.target.ownerDocument;
                    var win = doc.defaultView;
                    var scrollbarSize = undefined;
                    if (win.innerHeight > doc.documentElement.clientHeight) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.bottom -= scrollbarSize.height
                    }
                    if (win.innerWidth > doc.documentElement.clientWidth) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.right -= scrollbarSize.width
                    }
                    if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
                        next.page.bottom = doc.body.scrollHeight - top - height;
                        next.page.right = doc.body.scrollWidth - left - width
                    }
                    if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== !1 && !(typeof this.targetModifier !== 'undefined')) {
                        (function() {
                            var offsetParent = _this7.cache('target-offsetparent', function() {
                                return getOffsetParent(_this7.target)
                            });
                            var offsetPosition = _this7.cache('target-offsetparent-bounds', function() {
                                return getBounds(offsetParent)
                            });
                            var offsetParentStyle = getComputedStyle(offsetParent);
                            var offsetParentSize = offsetPosition;
                            var offsetBorder = {};
                            ['Top', 'Left', 'Bottom', 'Right'].forEach(function(side) {
                                offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width'])
                            });
                            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
                            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
                            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                                if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                                    var scrollTop = offsetParent.scrollTop;
                                    var scrollLeft = offsetParent.scrollLeft;
                                    next.offset = {
                                        top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                                        left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                                    }
                                }
                            }
                        }
                        )()
                    }
                    this.move(next);
                    this.history.unshift(next);
                    if (this.history.length > 3) {
                        this.history.pop()
                    }
                    if (flushChanges) {
                        flush()
                    }
                    return !0
                }
            }, {
                key: 'move',
                value: function move(pos) {
                    var _this8 = this;
                    if (!(typeof this.element.parentNode !== 'undefined')) {
                        return
                    }
                    var same = {};
                    for (var type in pos) {
                        same[type] = {};
                        for (var key in pos[type]) {
                            var found = !1;
                            for (var i = 0; i < this.history.length; ++i) {
                                var point = this.history[i];
                                if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                                    found = !0;
                                    break
                                }
                            }
                            if (!found) {
                                same[type][key] = !0
                            }
                        }
                    }
                    var css = {
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    };
                    var transcribe = function transcribe(_same, _pos) {
                        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
                        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
                        if (gpu !== !1) {
                            var yPos = undefined
                              , xPos = undefined;
                            if (_same.top) {
                                css.top = 0;
                                yPos = _pos.top
                            } else {
                                css.bottom = 0;
                                yPos = -_pos.bottom
                            }
                            if (_same.left) {
                                css.left = 0;
                                xPos = _pos.left
                            } else {
                                css.right = 0;
                                xPos = -_pos.right
                            }
                            if (window.matchMedia) {
                                var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
                                if (!retina) {
                                    xPos = Math.round(xPos);
                                    yPos = Math.round(yPos)
                                }
                            }
                            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
                            if (transformKey !== 'msTransform') {
                                css[transformKey] += " translateZ(0)"
                            }
                        } else {
                            if (_same.top) {
                                css.top = _pos.top + 'px'
                            } else {
                                css.bottom = _pos.bottom + 'px'
                            }
                            if (_same.left) {
                                css.left = _pos.left + 'px'
                            } else {
                                css.right = _pos.right + 'px'
                            }
                        }
                    };
                    var moved = !1;
                    if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
                        css.position = 'absolute';
                        transcribe(same.page, pos.page)
                    } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
                        css.position = 'fixed';
                        transcribe(same.viewport, pos.viewport)
                    } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
                        (function() {
                            css.position = 'absolute';
                            var offsetParent = _this8.cache('target-offsetparent', function() {
                                return getOffsetParent(_this8.target)
                            });
                            if (getOffsetParent(_this8.element) !== offsetParent) {
                                defer(function() {
                                    _this8.element.parentNode.removeChild(_this8.element);
                                    offsetParent.appendChild(_this8.element)
                                })
                            }
                            transcribe(same.offset, pos.offset);
                            moved = !0
                        }
                        )()
                    } else {
                        css.position = 'absolute';
                        transcribe({
                            top: !0,
                            left: !0
                        }, pos.page)
                    }
                    if (!moved) {
                        if (this.options.bodyElement) {
                            this.options.bodyElement.appendChild(this.element)
                        } else {
                            var offsetParentIsBody = !0;
                            var currentNode = this.element.parentNode;
                            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
                                if (getComputedStyle(currentNode).position !== 'static') {
                                    offsetParentIsBody = !1;
                                    break
                                }
                                currentNode = currentNode.parentNode
                            }
                            if (!offsetParentIsBody) {
                                this.element.parentNode.removeChild(this.element);
                                this.element.ownerDocument.body.appendChild(this.element)
                            }
                        }
                    }
                    var writeCSS = {};
                    var write = !1;
                    for (var key in css) {
                        var val = css[key];
                        var elVal = this.element.style[key];
                        if (elVal !== val) {
                            write = !0;
                            writeCSS[key] = val
                        }
                    }
                    if (write) {
                        defer(function() {
                            extend(_this8.element.style, writeCSS);
                            _this8.trigger('repositioned')
                        })
                    }
                }
            }]);
            return TetherClass
        }
        )(Evented);
        TetherClass.modules = [];
        TetherBase.position = position;
        var Tether = extend(TetherClass, TetherBase);
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']()
                    } finally {
                        if (_d)
                            throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        }
        )();
        var _TetherBase$Utils = TetherBase.Utils;
        var getBounds = _TetherBase$Utils.getBounds;
        var extend = _TetherBase$Utils.extend;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
        function getBoundingRect(tether, to) {
            if (to === 'scrollParent') {
                to = tether.scrollParents[0]
            } else if (to === 'window') {
                to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]
            }
            if (to === document) {
                to = to.documentElement
            }
            if (typeof to.nodeType !== 'undefined') {
                (function() {
                    var node = to;
                    var size = getBounds(to);
                    var pos = size;
                    var style = getComputedStyle(to);
                    to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
                    if (node.ownerDocument !== document) {
                        var win = node.ownerDocument.defaultView;
                        to[0] += win.pageXOffset;
                        to[1] += win.pageYOffset;
                        to[2] += win.pageXOffset;
                        to[3] += win.pageYOffset
                    }
                    BOUNDS_FORMAT.forEach(function(side, i) {
                        side = side[0].toUpperCase() + side.substr(1);
                        if (side === 'Top' || side === 'Left') {
                            to[i] += parseFloat(style['border' + side + 'Width'])
                        } else {
                            to[i] -= parseFloat(style['border' + side + 'Width'])
                        }
                    })
                }
                )()
            }
            return to
        }
        TetherBase.modules.push({
            position: function position(_ref) {
                var _this = this;
                var top = _ref.top;
                var left = _ref.left;
                var targetAttachment = _ref.targetAttachment;
                if (!this.options.constraints) {
                    return !0
                }
                var _cache = this.cache('element-bounds', function() {
                    return getBounds(_this.element)
                });
                var height = _cache.height;
                var width = _cache.width;
                if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                    var _lastSize = this.lastSize;
                    width = _lastSize.width;
                    height = _lastSize.height
                }
                var targetSize = this.cache('target-bounds', function() {
                    return _this.getTargetBounds()
                });
                var targetHeight = targetSize.height;
                var targetWidth = targetSize.width;
                var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
                this.options.constraints.forEach(function(constraint) {
                    var outOfBoundsClass = constraint.outOfBoundsClass;
                    var pinnedClass = constraint.pinnedClass;
                    if (outOfBoundsClass) {
                        allClasses.push(outOfBoundsClass)
                    }
                    if (pinnedClass) {
                        allClasses.push(pinnedClass)
                    }
                });
                allClasses.forEach(function(cls) {
                    ['left', 'top', 'right', 'bottom'].forEach(function(side) {
                        allClasses.push(cls + '-' + side)
                    })
                });
                var addClasses = [];
                var tAttachment = extend({}, targetAttachment);
                var eAttachment = extend({}, this.attachment);
                this.options.constraints.forEach(function(constraint) {
                    var to = constraint.to;
                    var attachment = constraint.attachment;
                    var pin = constraint.pin;
                    if (typeof attachment === 'undefined') {
                        attachment = ''
                    }
                    var changeAttachX = undefined
                      , changeAttachY = undefined;
                    if (attachment.indexOf(' ') >= 0) {
                        var _attachment$split = attachment.split(' ');
                        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
                        changeAttachY = _attachment$split2[0];
                        changeAttachX = _attachment$split2[1]
                    } else {
                        changeAttachX = changeAttachY = attachment
                    }
                    var bounds = getBoundingRect(_this, to);
                    if (changeAttachY === 'target' || changeAttachY === 'both') {
                        if (top < bounds[1] && tAttachment.top === 'top') {
                            top += targetHeight;
                            tAttachment.top = 'bottom'
                        }
                        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                            top -= targetHeight;
                            tAttachment.top = 'top'
                        }
                    }
                    if (changeAttachY === 'together') {
                        if (tAttachment.top === 'top') {
                            if (eAttachment.top === 'bottom' && top < bounds[1]) {
                                top += targetHeight;
                                tAttachment.top = 'bottom';
                                top += height;
                                eAttachment.top = 'top'
                            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                                top -= height - targetHeight;
                                tAttachment.top = 'bottom';
                                eAttachment.top = 'bottom'
                            }
                        }
                        if (tAttachment.top === 'bottom') {
                            if (eAttachment.top === 'top' && top + height > bounds[3]) {
                                top -= targetHeight;
                                tAttachment.top = 'top';
                                top -= height;
                                eAttachment.top = 'bottom'
                            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                                top += height - targetHeight;
                                tAttachment.top = 'top';
                                eAttachment.top = 'top'
                            }
                        }
                        if (tAttachment.top === 'middle') {
                            if (top + height > bounds[3] && eAttachment.top === 'top') {
                                top -= height;
                                eAttachment.top = 'bottom'
                            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                                top += height;
                                eAttachment.top = 'top'
                            }
                        }
                    }
                    if (changeAttachX === 'target' || changeAttachX === 'both') {
                        if (left < bounds[0] && tAttachment.left === 'left') {
                            left += targetWidth;
                            tAttachment.left = 'right'
                        }
                        if (left + width > bounds[2] && tAttachment.left === 'right') {
                            left -= targetWidth;
                            tAttachment.left = 'left'
                        }
                    }
                    if (changeAttachX === 'together') {
                        if (left < bounds[0] && tAttachment.left === 'left') {
                            if (eAttachment.left === 'right') {
                                left += targetWidth;
                                tAttachment.left = 'right';
                                left += width;
                                eAttachment.left = 'left'
                            } else if (eAttachment.left === 'left') {
                                left += targetWidth;
                                tAttachment.left = 'right';
                                left -= width;
                                eAttachment.left = 'right'
                            }
                        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
                            if (eAttachment.left === 'left') {
                                left -= targetWidth;
                                tAttachment.left = 'left';
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (eAttachment.left === 'right') {
                                left -= targetWidth;
                                tAttachment.left = 'left';
                                left += width;
                                eAttachment.left = 'left'
                            }
                        } else if (tAttachment.left === 'center') {
                            if (left + width > bounds[2] && eAttachment.left === 'left') {
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (left < bounds[0] && eAttachment.left === 'right') {
                                left += width;
                                eAttachment.left = 'left'
                            }
                        }
                    }
                    if (changeAttachY === 'element' || changeAttachY === 'both') {
                        if (top < bounds[1] && eAttachment.top === 'bottom') {
                            top += height;
                            eAttachment.top = 'top'
                        }
                        if (top + height > bounds[3] && eAttachment.top === 'top') {
                            top -= height;
                            eAttachment.top = 'bottom'
                        }
                    }
                    if (changeAttachX === 'element' || changeAttachX === 'both') {
                        if (left < bounds[0]) {
                            if (eAttachment.left === 'right') {
                                left += width;
                                eAttachment.left = 'left'
                            } else if (eAttachment.left === 'center') {
                                left += width / 2;
                                eAttachment.left = 'left'
                            }
                        }
                        if (left + width > bounds[2]) {
                            if (eAttachment.left === 'left') {
                                left -= width;
                                eAttachment.left = 'right'
                            } else if (eAttachment.left === 'center') {
                                left -= width / 2;
                                eAttachment.left = 'right'
                            }
                        }
                    }
                    if (typeof pin === 'string') {
                        pin = pin.split(',').map(function(p) {
                            return p.trim()
                        })
                    } else if (pin === !0) {
                        pin = ['top', 'left', 'right', 'bottom']
                    }
                    pin = pin || [];
                    var pinned = [];
                    var oob = [];
                    if (top < bounds[1]) {
                        if (pin.indexOf('top') >= 0) {
                            top = bounds[1];
                            pinned.push('top')
                        } else {
                            oob.push('top')
                        }
                    }
                    if (top + height > bounds[3]) {
                        if (pin.indexOf('bottom') >= 0) {
                            top = bounds[3] - height;
                            pinned.push('bottom')
                        } else {
                            oob.push('bottom')
                        }
                    }
                    if (left < bounds[0]) {
                        if (pin.indexOf('left') >= 0) {
                            left = bounds[0];
                            pinned.push('left')
                        } else {
                            oob.push('left')
                        }
                    }
                    if (left + width > bounds[2]) {
                        if (pin.indexOf('right') >= 0) {
                            left = bounds[2] - width;
                            pinned.push('right')
                        } else {
                            oob.push('right')
                        }
                    }
                    if (pinned.length) {
                        (function() {
                            var pinnedClass = undefined;
                            if (typeof _this.options.pinnedClass !== 'undefined') {
                                pinnedClass = _this.options.pinnedClass
                            } else {
                                pinnedClass = _this.getClass('pinned')
                            }
                            addClasses.push(pinnedClass);
                            pinned.forEach(function(side) {
                                addClasses.push(pinnedClass + '-' + side)
                            })
                        }
                        )()
                    }
                    if (oob.length) {
                        (function() {
                            var oobClass = undefined;
                            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                                oobClass = _this.options.outOfBoundsClass
                            } else {
                                oobClass = _this.getClass('out-of-bounds')
                            }
                            addClasses.push(oobClass);
                            oob.forEach(function(side) {
                                addClasses.push(oobClass + '-' + side)
                            })
                        }
                        )()
                    }
                    if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
                        eAttachment.left = tAttachment.left = !1
                    }
                    if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
                        eAttachment.top = tAttachment.top = !1
                    }
                    if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
                        _this.updateAttachClasses(eAttachment, tAttachment);
                        _this.trigger('update', {
                            attachment: eAttachment,
                            targetAttachment: tAttachment
                        })
                    }
                });
                defer(function() {
                    if (!(_this.options.addTargetClasses === !1)) {
                        updateClasses(_this.target, addClasses, allClasses)
                    }
                    updateClasses(_this.element, addClasses, allClasses)
                });
                return {
                    top: top,
                    left: left
                }
            }
        });
        'use strict';
        var _TetherBase$Utils = TetherBase.Utils;
        var getBounds = _TetherBase$Utils.getBounds;
        var updateClasses = _TetherBase$Utils.updateClasses;
        var defer = _TetherBase$Utils.defer;
        TetherBase.modules.push({
            position: function position(_ref) {
                var _this = this;
                var top = _ref.top;
                var left = _ref.left;
                var _cache = this.cache('element-bounds', function() {
                    return getBounds(_this.element)
                });
                var height = _cache.height;
                var width = _cache.width;
                var targetPos = this.getTargetBounds();
                var bottom = top + height;
                var right = left + width;
                var abutted = [];
                if (top <= targetPos.bottom && bottom >= targetPos.top) {
                    ['left', 'right'].forEach(function(side) {
                        var targetPosSide = targetPos[side];
                        if (targetPosSide === left || targetPosSide === right) {
                            abutted.push(side)
                        }
                    })
                }
                if (left <= targetPos.right && right >= targetPos.left) {
                    ['top', 'bottom'].forEach(function(side) {
                        var targetPosSide = targetPos[side];
                        if (targetPosSide === top || targetPosSide === bottom) {
                            abutted.push(side)
                        }
                    })
                }
                var allClasses = [];
                var addClasses = [];
                var sides = ['left', 'top', 'right', 'bottom'];
                allClasses.push(this.getClass('abutted'));
                sides.forEach(function(side) {
                    allClasses.push(_this.getClass('abutted') + '-' + side)
                });
                if (abutted.length) {
                    addClasses.push(this.getClass('abutted'))
                }
                abutted.forEach(function(side) {
                    addClasses.push(_this.getClass('abutted') + '-' + side)
                });
                defer(function() {
                    if (!(_this.options.addTargetClasses === !1)) {
                        updateClasses(_this.target, addClasses, allClasses)
                    }
                    updateClasses(_this.element, addClasses, allClasses)
                });
                return !0
            }
        });
        'use strict';
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = !0;
                var _d = !1;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i)
                            break
                    }
                } catch (err) {
                    _d = !0;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return'])
                            _i['return']()
                    } finally {
                        if (_d)
                            throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        }
        )();
        TetherBase.modules.push({
            position: function position(_ref) {
                var top = _ref.top;
                var left = _ref.left;
                if (!this.options.shift) {
                    return
                }
                var shift = this.options.shift;
                if (typeof this.options.shift === 'function') {
                    shift = this.options.shift.call(this, {
                        top: top,
                        left: left
                    })
                }
                var shiftTop = undefined
                  , shiftLeft = undefined;
                if (typeof shift === 'string') {
                    shift = shift.split(' ');
                    shift[1] = shift[1] || shift[0];
                    var _shift = shift;
                    var _shift2 = _slicedToArray(_shift, 2);
                    shiftTop = _shift2[0];
                    shiftLeft = _shift2[1];
                    shiftTop = parseFloat(shiftTop, 10);
                    shiftLeft = parseFloat(shiftLeft, 10)
                } else {
                    shiftTop = shift.top;
                    shiftLeft = shift.left
                }
                top += shiftTop;
                left += shiftLeft;
                return {
                    top: top,
                    left: left
                }
            }
        });
        return Tether
    }));
    /***/
}
), (function(module, exports) {
    "use strict";
    if ("undefined" == typeof jQuery)
        throw new Error("Bootstrap's JavaScript requires jQuery");
    +(function(a) {
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }
    )(jQuery),
    +(function(a) {
        "use strict";
        function b(a, b) {
            if ("function" != typeof b && null !== b)
                throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
        function c(a, b) {
            if (!(a instanceof b))
                throw new TypeError("Cannot call a class as a function")
        }
        var d = function d(a, b, c) {
            for (var d = !0; d; ) {
                var e = a
                  , f = b
                  , g = c;
                d = !1,
                null === e && (e = Function.prototype);
                var h = Object.getOwnPropertyDescriptor(e, f);
                if (void 0 !== h) {
                    if ("value"in h)
                        return h.value;
                    var i = h.get;
                    if (void 0 === i)
                        return;
                    return i.call(g)
                }
                var j = Object.getPrototypeOf(e);
                if (null === j)
                    return;
                a = j,
                b = f,
                c = g,
                d = !0,
                h = j = void 0
            }
        }
          , e = (function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1,
                    d.configurable = !0,
                    "value"in d && (d.writable = !0),
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c),
                d && a(b, d),
                b
            }
        }
        )()
          , f = (function(a) {
            function b(a) {
                return ({}).toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }
            function c(a) {
                return (a[0] || a).nodeType
            }
            function d() {
                return {
                    bindType: h.end,
                    delegateType: h.end,
                    handle: function handle(b) {
                        if (a(b.target).is(this))
                            return b.handleObj.handler.apply(this, arguments)
                    }
                }
            }
            function e() {
                if (window.QUnit)
                    return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b])
                        return {
                            end: j[b]
                        };
                return !1
            }
            function f(b) {
                var c = this
                  , d = !1;
                return a(this).one(k.TRANSITION_END, function() {
                    d = !0
                }),
                setTimeout(function() {
                    d || k.triggerTransitionEnd(c)
                }, b),
                this
            }
            function g() {
                h = e(),
                a.fn.emulateTransitionEnd = f,
                k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
            }
            var h = !1
              , i = 1e6
              , j = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }
              , k = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function getUID(a) {
                    do
                        a += ~~(Math.random() * i);
                    while (document.getElementById(a));
                    return a
                },
                getSelectorFromElement: function getSelectorFromElement(a) {
                    var b = a.getAttribute("data-target");
                    return b || (b = a.getAttribute("href") || "",
                    b = /^#[a-z]/i.test(b) ? b : null),
                    b
                },
                reflow: function reflow(a) {
                    new Function("bs","return bs")(a.offsetHeight)
                },
                triggerTransitionEnd: function triggerTransitionEnd(b) {
                    a(b).trigger(h.end)
                },
                supportsTransitionEnd: function supportsTransitionEnd() {
                    return Boolean(h)
                },
                typeCheckConfig: function typeCheckConfig(a, d, e) {
                    for (var f in e)
                        if (e.hasOwnProperty(f)) {
                            var g = e[f]
                              , h = d[f]
                              , i = void 0;
                            if ((i = h && c(h) ? "element" : b(h),
                            !new RegExp(g).test(i)))
                                throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                        }
                }
            };
            return g(),
            k
        }
        )(jQuery)
          , g = ((function(a) {
            var b = "alert"
              , d = "4.0.0-alpha.4"
              , g = "bs.alert"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 150
              , l = {
                DISMISS: '[data-dismiss="alert"]'
            }
              , m = {
                CLOSE: "close" + h,
                CLOSED: "closed" + h,
                CLICK_DATA_API: "click" + h + i
            }
              , n = {
                ALERT: "alert",
                FADE: "fade",
                IN: "in"
            }
              , o = (function() {
                function b(a) {
                    c(this, b),
                    this._element = a
                }
                return e(b, [{
                    key: "close",
                    value: function value(a) {
                        a = a || this._element;
                        var b = this._getRootElement(a)
                          , c = this._triggerCloseEvent(b);
                        c.isDefaultPrevented() || this._removeElement(b)
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, g),
                        this._element = null
                    }
                }, {
                    key: "_getRootElement",
                    value: function value(b) {
                        var c = f.getSelectorFromElement(b)
                          , d = !1;
                        return c && (d = a(c)[0]),
                        d || (d = a(b).closest("." + n.ALERT)[0]),
                        d
                    }
                }, {
                    key: "_triggerCloseEvent",
                    value: function value(b) {
                        var c = a.Event(m.CLOSE);
                        return a(b).trigger(c),
                        c
                    }
                }, {
                    key: "_removeElement",
                    value: function value(b) {
                        return a(b).removeClass(n.IN),
                        f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                    }
                }, {
                    key: "_destroyElement",
                    value: function value(b) {
                        a(b).detach().trigger(m.CLOSED).remove()
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(c) {
                        return this.each(function() {
                            var d = a(this)
                              , e = d.data(g);
                            e || (e = new b(this),
                            d.data(g, e)),
                            "close" === c && e[c](this)
                        })
                    }
                }, {
                    key: "_handleDismiss",
                    value: function value(a) {
                        return function(b) {
                            b && b.preventDefault(),
                            a.close(this)
                        }
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }]),
                b
            }
            )();
            return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o())),
            a.fn[b] = o._jQueryInterface,
            a.fn[b].Constructor = o,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                o._jQueryInterface
            }
            ,
            o
        }
        )(jQuery),
        (function(a) {
            var b = "button"
              , d = "4.0.0-alpha.4"
              , f = "bs.button"
              , g = "." + f
              , h = ".data-api"
              , i = a.fn[b]
              , j = {
                ACTIVE: "active",
                BUTTON: "btn",
                FOCUS: "focus"
            }
              , k = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }
              , l = {
                CLICK_DATA_API: "click" + g + h,
                FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
            }
              , m = (function() {
                function b(a) {
                    c(this, b),
                    this._element = a
                }
                return e(b, [{
                    key: "toggle",
                    value: function value() {
                        var b = !0
                          , c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                            var d = a(this._element).find(k.INPUT)[0];
                            if (d) {
                                if ("radio" === d.type)
                                    if (d.checked && a(this._element).hasClass(j.ACTIVE))
                                        b = !1;
                                    else {
                                        var e = a(c).find(k.ACTIVE)[0];
                                        e && a(e).removeClass(j.ACTIVE)
                                    }
                                b && (d.checked = !a(this._element).hasClass(j.ACTIVE),
                                a(this._element).trigger("change")),
                                d.focus()
                            }
                        } else
                            this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                        b && a(this._element).toggleClass(j.ACTIVE)
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, f),
                        this._element = null
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(c) {
                        return this.each(function() {
                            var d = a(this).data(f);
                            d || (d = new b(this),
                            a(this).data(f, d)),
                            "toggle" === c && d[c]()
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }]),
                b
            }
            )();
            return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)),
                m._jQueryInterface.call(a(c), "toggle")
            }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
            }),
            a.fn[b] = m._jQueryInterface,
            a.fn[b].Constructor = m,
            a.fn[b].noConflict = function() {
                return a.fn[b] = i,
                m._jQueryInterface
            }
            ,
            m
        }
        )(jQuery),
        (function(a) {
            var b = "carousel"
              , d = "4.0.0-alpha.4"
              , g = "bs.carousel"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 600
              , l = 37
              , m = 39
              , n = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }
              , o = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }
              , p = {
                NEXT: "next",
                PREVIOUS: "prev"
            }
              , q = {
                SLIDE: "slide" + h,
                SLID: "slid" + h,
                KEYDOWN: "keydown" + h,
                MOUSEENTER: "mouseenter" + h,
                MOUSELEAVE: "mouseleave" + h,
                LOAD_DATA_API: "load" + h + i,
                CLICK_DATA_API: "click" + h + i
            }
              , r = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "right",
                LEFT: "left",
                ITEM: "carousel-item"
            }
              , s = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".next, .prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }
              , t = (function() {
                function i(b, d) {
                    c(this, i),
                    this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this._config = this._getConfig(d),
                    this._element = a(b)[0],
                    this._indicatorsElement = a(this._element).find(s.INDICATORS)[0],
                    this._addEventListeners()
                }
                return e(i, [{
                    key: "next",
                    value: function value() {
                        this._isSliding || this._slide(p.NEXT)
                    }
                }, {
                    key: "nextWhenVisible",
                    value: function value() {
                        document.hidden || this.next()
                    }
                }, {
                    key: "prev",
                    value: function value() {
                        this._isSliding || this._slide(p.PREVIOUS)
                    }
                }, {
                    key: "pause",
                    value: function value(b) {
                        b || (this._isPaused = !0),
                        a(this._element).find(s.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element),
                        this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                    }
                }, {
                    key: "cycle",
                    value: function value(b) {
                        b || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                        this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                    }
                }, {
                    key: "to",
                    value: function value(b) {
                        var c = this;
                        this._activeElement = a(this._element).find(s.ACTIVE_ITEM)[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || b < 0)) {
                            if (this._isSliding)
                                return void a(this._element).one(q.SLID, function() {
                                    return c.to(b)
                                });
                            if (d === b)
                                return this.pause(),
                                void this.cycle();
                            var e = b > d ? p.NEXT : p.PREVIOUS;
                            this._slide(e, this._items[b])
                        }
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a(this._element).off(h),
                        a.removeData(this._element, g),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                    }
                }, {
                    key: "_getConfig",
                    value: function value(c) {
                        return c = a.extend({}, n, c),
                        f.typeCheckConfig(b, c, o),
                        c
                    }
                }, {
                    key: "_addEventListeners",
                    value: function value() {
                        this._config.keyboard && a(this._element).on(q.KEYDOWN, a.proxy(this._keydown, this)),
                        "hover" !== this._config.pause || "ontouchstart"in document.documentElement || a(this._element).on(q.MOUSEENTER, a.proxy(this.pause, this)).on(q.MOUSELEAVE, a.proxy(this.cycle, this))
                    }
                }, {
                    key: "_keydown",
                    value: function value(a) {
                        if ((a.preventDefault(),
                        !/input|textarea/i.test(a.target.tagName)))
                            switch (a.which) {
                            case l:
                                this.prev();
                                break;
                            case m:
                                this.next();
                                break;
                            default:
                                return
                            }
                    }
                }, {
                    key: "_getItemIndex",
                    value: function value(b) {
                        return this._items = a.makeArray(a(b).parent().find(s.ITEM)),
                        this._items.indexOf(b)
                    }
                }, {
                    key: "_getItemByDirection",
                    value: function value(a, b) {
                        var c = a === p.NEXT
                          , d = a === p.PREVIOUS
                          , e = this._getItemIndex(b)
                          , f = this._items.length - 1
                          , g = d && 0 === e || c && e === f;
                        if (g && !this._config.wrap)
                            return b;
                        var h = a === p.PREVIOUS ? -1 : 1
                          , i = (e + h) % this._items.length;
                        return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                    }
                }, {
                    key: "_triggerSlideEvent",
                    value: function value(b, c) {
                        var d = a.Event(q.SLIDE, {
                            relatedTarget: b,
                            direction: c
                        });
                        return a(this._element).trigger(d),
                        d
                    }
                }, {
                    key: "_setActiveIndicatorElement",
                    value: function value(b) {
                        if (this._indicatorsElement) {
                            a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);
                            var c = this._indicatorsElement.children[this._getItemIndex(b)];
                            c && a(c).addClass(r.ACTIVE)
                        }
                    }
                }, {
                    key: "_slide",
                    value: function value(b, c) {
                        var d = this
                          , e = a(this._element).find(s.ACTIVE_ITEM)[0]
                          , g = c || e && this._getItemByDirection(b, e)
                          , h = Boolean(this._interval)
                          , i = b === p.NEXT ? r.LEFT : r.RIGHT;
                        if (g && a(g).hasClass(r.ACTIVE))
                            return void (this._isSliding = !1);
                        var j = this._triggerSlideEvent(g, i);
                        if (!j.isDefaultPrevented() && e && g) {
                            this._isSliding = !0,
                            h && this.pause(),
                            this._setActiveIndicatorElement(g);
                            var l = a.Event(q.SLID, {
                                relatedTarget: g,
                                direction: i
                            });
                            f.supportsTransitionEnd() && a(this._element).hasClass(r.SLIDE) ? (a(g).addClass(b),
                            f.reflow(g),
                            a(e).addClass(i),
                            a(g).addClass(i),
                            a(e).one(f.TRANSITION_END, function() {
                                a(g).removeClass(i).removeClass(b),
                                a(g).addClass(r.ACTIVE),
                                a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i),
                                d._isSliding = !1,
                                setTimeout(function() {
                                    return a(d._element).trigger(l)
                                }, 0)
                            }).emulateTransitionEnd(k)) : (a(e).removeClass(r.ACTIVE),
                            a(g).addClass(r.ACTIVE),
                            this._isSliding = !1,
                            a(this._element).trigger(l)),
                            h && this.cycle()
                        }
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(b) {
                        return this.each(function() {
                            var c = a(this).data(g)
                              , d = a.extend({}, n, a(this).data());
                            "object" == typeof b && a.extend(d, b);
                            var e = "string" == typeof b ? b : d.slide;
                            if ((c || (c = new i(this,d),
                            a(this).data(g, c)),
                            "number" == typeof b))
                                c.to(b);
                            else if ("string" == typeof e) {
                                if (void 0 === c[e])
                                    throw new Error('No method named "' + e + '"');
                                c[e]()
                            } else
                                d.interval && (c.pause(),
                                c.cycle())
                        })
                    }
                }, {
                    key: "_dataApiClickHandler",
                    value: function value(b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                            var d = a(c)[0];
                            if (d && a(d).hasClass(r.CAROUSEL)) {
                                var e = a.extend({}, a(d).data(), a(this).data())
                                  , h = this.getAttribute("data-slide-to");
                                h && (e.interval = !1),
                                i._jQueryInterface.call(a(d), e),
                                h && a(d).data(g).to(h),
                                b.preventDefault()
                            }
                        }
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return n
                    }
                }]),
                i
            }
            )();
            return a(document).on(q.CLICK_DATA_API, s.DATA_SLIDE, t._dataApiClickHandler),
            a(window).on(q.LOAD_DATA_API, function() {
                a(s.DATA_RIDE).each(function() {
                    var b = a(this);
                    t._jQueryInterface.call(b, b.data())
                })
            }),
            a.fn[b] = t._jQueryInterface,
            a.fn[b].Constructor = t,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                t._jQueryInterface
            }
            ,
            t
        }
        )(jQuery),
        (function(a) {
            var b = "collapse"
              , d = "4.0.0-alpha.4"
              , g = "bs.collapse"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 600
              , l = {
                toggle: !0,
                parent: ""
            }
              , m = {
                toggle: "boolean",
                parent: "string"
            }
              , n = {
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                CLICK_DATA_API: "click" + h + i
            }
              , o = {
                IN: "in",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            }
              , p = {
                WIDTH: "width",
                HEIGHT: "height"
            }
              , q = {
                ACTIVES: ".panel > .in, .panel > .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            }
              , r = (function() {
                function h(b, d) {
                    c(this, h),
                    this._isTransitioning = !1,
                    this._element = b,
                    this._config = this._getConfig(d),
                    this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))),
                    this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
                }
                return e(h, [{
                    key: "toggle",
                    value: function value() {
                        a(this._element).hasClass(o.IN) ? this.hide() : this.show()
                    }
                }, {
                    key: "show",
                    value: function value() {
                        var b = this;
                        if (!this._isTransitioning && !a(this._element).hasClass(o.IN)) {
                            var c = void 0
                              , d = void 0;
                            if ((this._parent && (c = a.makeArray(a(q.ACTIVES)),
                            c.length || (c = null)),
                            !(c && (d = a(c).data(g),
                            d && d._isTransitioning)))) {
                                var e = a.Event(n.SHOW);
                                if ((a(this._element).trigger(e),
                                !e.isDefaultPrevented())) {
                                    c && (h._jQueryInterface.call(a(c), "hide"),
                                    d || a(c).data(g, null));
                                    var i = this._getDimension();
                                    a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),
                                    this._element.style[i] = 0,
                                    this._element.setAttribute("aria-expanded", !0),
                                    this._triggerArray.length && a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                    var j = function j() {
                                        a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),
                                        b._element.style[i] = "",
                                        b.setTransitioning(!1),
                                        a(b._element).trigger(n.SHOWN)
                                    };
                                    if (!f.supportsTransitionEnd())
                                        return void j();
                                    var l = i[0].toUpperCase() + i.slice(1)
                                      , m = "scroll" + l;
                                    a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(k),
                                    this._element.style[i] = this._element[m] + "px"
                                }
                            }
                        }
                    }
                }, {
                    key: "hide",
                    value: function value() {
                        var b = this;
                        if (!this._isTransitioning && a(this._element).hasClass(o.IN)) {
                            var c = a.Event(n.HIDE);
                            if ((a(this._element).trigger(c),
                            !c.isDefaultPrevented())) {
                                var d = this._getDimension()
                                  , e = d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[d] = this._element[e] + "px",
                                f.reflow(this._element),
                                a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),
                                this._element.setAttribute("aria-expanded", !1),
                                this._triggerArray.length && a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded", !1),
                                this.setTransitioning(!0);
                                var g = function g() {
                                    b.setTransitioning(!1),
                                    a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)
                                };
                                return this._element.style[d] = 0,
                                f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : void g()
                            }
                        }
                    }
                }, {
                    key: "setTransitioning",
                    value: function value(a) {
                        this._isTransitioning = a
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, g),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                    }
                }, {
                    key: "_getConfig",
                    value: function value(c) {
                        return c = a.extend({}, l, c),
                        c.toggle = Boolean(c.toggle),
                        f.typeCheckConfig(b, c, m),
                        c
                    }
                }, {
                    key: "_getDimension",
                    value: function value() {
                        var b = a(this._element).hasClass(p.WIDTH);
                        return b ? p.WIDTH : p.HEIGHT
                    }
                }, {
                    key: "_getParent",
                    value: function value() {
                        var b = this
                          , c = a(this._config.parent)[0]
                          , d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return a(c).find(d).each(function(a, c) {
                            b._addAriaAndCollapsedClass(h._getTargetFromElement(c), [c])
                        }),
                        c
                    }
                }, {
                    key: "_addAriaAndCollapsedClass",
                    value: function value(b, c) {
                        if (b) {
                            var d = a(b).hasClass(o.IN);
                            b.setAttribute("aria-expanded", d),
                            c.length && a(c).toggleClass(o.COLLAPSED, !d).attr("aria-expanded", d)
                        }
                    }
                }], [{
                    key: "_getTargetFromElement",
                    value: function value(b) {
                        var c = f.getSelectorFromElement(b);
                        return c ? a(c)[0] : null
                    }
                }, {
                    key: "_jQueryInterface",
                    value: function value(b) {
                        return this.each(function() {
                            var c = a(this)
                              , d = c.data(g)
                              , e = a.extend({}, l, c.data(), "object" == typeof b && b);
                            if ((!d && e.toggle && /show|hide/.test(b) && (e.toggle = !1),
                            d || (d = new h(this,e),
                            c.data(g, d)),
                            "string" == typeof b)) {
                                if (void 0 === d[b])
                                    throw new Error('No method named "' + b + '"');
                                d[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return l
                    }
                }]),
                h
            }
            )();
            return a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function(b) {
                b.preventDefault();
                var c = r._getTargetFromElement(this)
                  , d = a(c).data(g)
                  , e = d ? "toggle" : a(this).data();
                r._jQueryInterface.call(a(c), e)
            }),
            a.fn[b] = r._jQueryInterface,
            a.fn[b].Constructor = r,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                r._jQueryInterface
            }
            ,
            r
        }
        )(jQuery),
        (function(a) {
            var b = "dropdown"
              , d = "4.0.0-alpha.4"
              , g = "bs.dropdown"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 27
              , l = 38
              , m = 40
              , n = 3
              , o = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                CLICK: "click" + h,
                CLICK_DATA_API: "click" + h + i,
                KEYDOWN_DATA_API: "keydown" + h + i
            }
              , p = {
                BACKDROP: "dropdown-backdrop",
                DISABLED: "disabled",
                OPEN: "open"
            }
              , q = {
                BACKDROP: ".dropdown-backdrop",
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                ROLE_MENU: '[role="menu"]',
                ROLE_LISTBOX: '[role="listbox"]',
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
            }
              , r = (function() {
                function b(a) {
                    c(this, b),
                    this._element = a,
                    this._addEventListeners()
                }
                return e(b, [{
                    key: "toggle",
                    value: function value() {
                        if (this.disabled || a(this).hasClass(p.DISABLED))
                            return !1;
                        var c = b._getParentFromElement(this)
                          , d = a(c).hasClass(p.OPEN);
                        if ((b._clearMenus(),
                        d))
                            return !1;
                        if ("ontouchstart"in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                            var e = document.createElement("div");
                            e.className = p.BACKDROP,
                            a(e).insertBefore(this),
                            a(e).on("click", b._clearMenus)
                        }
                        var f = {
                            relatedTarget: this
                        }
                          , g = a.Event(o.SHOW, f);
                        return a(c).trigger(g),
                        !g.isDefaultPrevented() && (this.focus(),
                        this.setAttribute("aria-expanded", "true"),
                        a(c).toggleClass(p.OPEN),
                        a(c).trigger(a.Event(o.SHOWN, f)),
                        !1)
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, g),
                        a(this._element).off(h),
                        this._element = null
                    }
                }, {
                    key: "_addEventListeners",
                    value: function value() {
                        a(this._element).on(o.CLICK, this.toggle)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(c) {
                        return this.each(function() {
                            var d = a(this).data(g);
                            if ((d || a(this).data(g, d = new b(this)),
                            "string" == typeof c)) {
                                if (void 0 === d[c])
                                    throw new Error('No method named "' + c + '"');
                                d[c].call(this)
                            }
                        })
                    }
                }, {
                    key: "_clearMenus",
                    value: function value(c) {
                        if (!c || c.which !== n) {
                            var d = a(q.BACKDROP)[0];
                            d && d.parentNode.removeChild(d);
                            for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                var g = b._getParentFromElement(e[f])
                                  , h = {
                                    relatedTarget: e[f]
                                };
                                if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                    var i = a.Event(o.HIDE, h);
                                    a(g).trigger(i),
                                    i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"),
                                    a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                                }
                            }
                        }
                    }
                }, {
                    key: "_getParentFromElement",
                    value: function value(b) {
                        var c = void 0
                          , d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]),
                        c || b.parentNode
                    }
                }, {
                    key: "_dataApiKeydownHandler",
                    value: function value(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(),
                        c.stopPropagation(),
                        !this.disabled && !a(this).hasClass(p.DISABLED))) {
                            var d = b._getParentFromElement(this)
                              , e = a(d).hasClass(p.OPEN);
                            if (!e && c.which !== k || e && c.which === k) {
                                if (c.which === k) {
                                    var f = a(d).find(q.DATA_TOGGLE)[0];
                                    a(f).trigger("focus")
                                }
                                return void a(this).trigger("click")
                            }
                            var g = a.makeArray(a(q.VISIBLE_ITEMS));
                            if ((g = g.filter(function(a) {
                                return a.offsetWidth || a.offsetHeight
                            }),
                            g.length)) {
                                var h = g.indexOf(c.target);
                                c.which === l && h > 0 && h--,
                                c.which === m && h < g.length - 1 && h++,
                                h < 0 && (h = 0),
                                g[h].focus()
                            }
                        }
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }]),
                b
            }
            )();
            return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
                a.stopPropagation()
            }),
            a.fn[b] = r._jQueryInterface,
            a.fn[b].Constructor = r,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                r._jQueryInterface
            }
            ,
            r
        }
        )(jQuery),
        (function(a) {
            var b = "modal"
              , d = "4.0.0-alpha.4"
              , g = "bs.modal"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 300
              , l = 150
              , m = 27
              , n = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }
              , o = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }
              , p = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                FOCUSIN: "focusin" + h,
                RESIZE: "resize" + h,
                CLICK_DISMISS: "click.dismiss" + h,
                KEYDOWN_DISMISS: "keydown.dismiss" + h,
                MOUSEUP_DISMISS: "mouseup.dismiss" + h,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
                CLICK_DATA_API: "click" + h + i
            }
              , q = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                IN: "in"
            }
              , r = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
            }
              , s = (function() {
                function i(b, d) {
                    c(this, i),
                    this._config = this._getConfig(d),
                    this._element = b,
                    this._dialog = a(b).find(r.DIALOG)[0],
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._originalBodyPadding = 0,
                    this._scrollbarWidth = 0
                }
                return e(i, [{
                    key: "toggle",
                    value: function value(a) {
                        return this._isShown ? this.hide() : this.show(a)
                    }
                }, {
                    key: "show",
                    value: function value(b) {
                        var c = this
                          , d = a.Event(p.SHOW, {
                            relatedTarget: b
                        });
                        a(this._element).trigger(d),
                        this._isShown || d.isDefaultPrevented() || (this._isShown = !0,
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        a(document.body).addClass(q.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        a(this._element).on(p.CLICK_DISMISS, r.DATA_DISMISS, a.proxy(this.hide, this)),
                        a(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                            a(c._element).one(p.MOUSEUP_DISMISS, function(b) {
                                a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                            })
                        }),
                        this._showBackdrop(a.proxy(this._showElement, this, b)))
                    }
                }, {
                    key: "hide",
                    value: function value(b) {
                        b && b.preventDefault();
                        var c = a.Event(p.HIDE);
                        a(this._element).trigger(c),
                        this._isShown && !c.isDefaultPrevented() && (this._isShown = !1,
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        a(document).off(p.FOCUSIN),
                        a(this._element).removeClass(q.IN),
                        a(this._element).off(p.CLICK_DISMISS),
                        a(this._dialog).off(p.MOUSEDOWN_DISMISS),
                        f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(k) : this._hideModal())
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, g),
                        a(window).off(h),
                        a(document).off(h),
                        a(this._element).off(h),
                        a(this._backdrop).off(h),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._originalBodyPadding = null,
                        this._scrollbarWidth = null
                    }
                }, {
                    key: "_getConfig",
                    value: function value(c) {
                        return c = a.extend({}, n, c),
                        f.typeCheckConfig(b, c, o),
                        c
                    }
                }, {
                    key: "_showElement",
                    value: function value(b) {
                        var c = this
                          , d = f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.scrollTop = 0,
                        d && f.reflow(this._element),
                        a(this._element).addClass(q.IN),
                        this._config.focus && this._enforceFocus();
                        var e = a.Event(p.SHOWN, {
                            relatedTarget: b
                        })
                          , g = function g() {
                            c._config.focus && c._element.focus(),
                            a(c._element).trigger(e)
                        };
                        d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g()
                    }
                }, {
                    key: "_enforceFocus",
                    value: function value() {
                        var b = this;
                        a(document).off(p.FOCUSIN).on(p.FOCUSIN, function(c) {
                            document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                        })
                    }
                }, {
                    key: "_setEscapeEvent",
                    value: function value() {
                        var b = this;
                        this._isShown && this._config.keyboard ? a(this._element).on(p.KEYDOWN_DISMISS, function(a) {
                            a.which === m && b.hide()
                        }) : this._isShown || a(this._element).off(p.KEYDOWN_DISMISS)
                    }
                }, {
                    key: "_setResizeEvent",
                    value: function value() {
                        this._isShown ? a(window).on(p.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(p.RESIZE)
                    }
                }, {
                    key: "_hideModal",
                    value: function value() {
                        var b = this;
                        this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", "true"),
                        this._showBackdrop(function() {
                            a(document.body).removeClass(q.OPEN),
                            b._resetAdjustments(),
                            b._resetScrollbar(),
                            a(b._element).trigger(p.HIDDEN)
                        })
                    }
                }, {
                    key: "_removeBackdrop",
                    value: function value() {
                        this._backdrop && (a(this._backdrop).remove(),
                        this._backdrop = null)
                    }
                }, {
                    key: "_showBackdrop",
                    value: function value(b) {
                        var c = this
                          , d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var e = f.supportsTransitionEnd() && d;
                            if ((this._backdrop = document.createElement("div"),
                            this._backdrop.className = q.BACKDROP,
                            d && a(this._backdrop).addClass(d),
                            a(this._backdrop).appendTo(document.body),
                            a(this._element).on(p.CLICK_DISMISS, function(a) {
                                return c._ignoreBackdropClick ? void (c._ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                            }),
                            e && f.reflow(this._backdrop),
                            a(this._backdrop).addClass(q.IN),
                            !b))
                                return;
                            if (!e)
                                return void b();
                            a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(l)
                        } else if (!this._isShown && this._backdrop) {
                            a(this._backdrop).removeClass(q.IN);
                            var g = function g() {
                                c._removeBackdrop(),
                                b && b()
                            };
                            f.supportsTransitionEnd() && a(this._element).hasClass(q.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                        } else
                            b && b()
                    }
                }, {
                    key: "_handleUpdate",
                    value: function value() {
                        this._adjustDialog()
                    }
                }, {
                    key: "_adjustDialog",
                    value: function value() {
                        var a = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }
                }, {
                    key: "_resetAdjustments",
                    value: function value() {
                        this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                    }
                }, {
                    key: "_checkScrollbar",
                    value: function value() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                    }
                }, {
                    key: "_setScrollbar",
                    value: function value() {
                        var b = parseInt(a(r.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "",
                        this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                    }
                }, {
                    key: "_resetScrollbar",
                    value: function value() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }
                }, {
                    key: "_getScrollbarWidth",
                    value: function value() {
                        var a = document.createElement("div");
                        a.className = q.SCROLLBAR_MEASURER,
                        document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a),
                        b
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(b, c) {
                        return this.each(function() {
                            var d = a(this).data(g)
                              , e = a.extend({}, i.Default, a(this).data(), "object" == typeof b && b);
                            if ((d || (d = new i(this,e),
                            a(this).data(g, d)),
                            "string" == typeof b)) {
                                if (void 0 === d[b])
                                    throw new Error('No method named "' + b + '"');
                                d[b](c)
                            } else
                                e.show && d.show(c)
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return n
                    }
                }]),
                i
            }
            )();
            return a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                var c = this
                  , d = void 0
                  , e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var h = a(d).data(g) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                "A" === this.tagName && b.preventDefault();
                var i = a(d).one(p.SHOW, function(b) {
                    b.isDefaultPrevented() || i.one(p.HIDDEN, function() {
                        a(c).is(":visible") && c.focus()
                    })
                });
                s._jQueryInterface.call(a(d), h, this)
            }),
            a.fn[b] = s._jQueryInterface,
            a.fn[b].Constructor = s,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                s._jQueryInterface
            }
            ,
            s
        }
        )(jQuery),
        (function(a) {
            var b = "scrollspy"
              , d = "4.0.0-alpha.4"
              , g = "bs.scrollspy"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = {
                offset: 10,
                method: "auto",
                target: ""
            }
              , l = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }
              , m = {
                ACTIVATE: "activate" + h,
                SCROLL: "scroll" + h,
                LOAD_DATA_API: "load" + h + i
            }
              , n = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            }
              , o = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }
              , p = {
                OFFSET: "offset",
                POSITION: "position"
            }
              , q = (function() {
                function i(b, d) {
                    c(this, i),
                    this._element = b,
                    this._scrollElement = "BODY" === b.tagName ? window : b,
                    this._config = this._getConfig(d),
                    this._selector = this._config.target + " " + o.NAV_LINKS + "," + (this._config.target + " " + o.DROPDOWN_ITEMS),
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    a(this._scrollElement).on(m.SCROLL, a.proxy(this._process, this)),
                    this.refresh(),
                    this._process()
                }
                return e(i, [{
                    key: "refresh",
                    value: function value() {
                        var b = this
                          , c = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET
                          , d = "auto" === this._config.method ? c : this._config.method
                          , e = d === p.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight();
                        var g = a.makeArray(a(this._selector));
                        g.map(function(b) {
                            var c = void 0
                              , g = f.getSelectorFromElement(b);
                            return g && (c = a(g)[0]),
                            c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                        }).filter(function(a) {
                            return a
                        }).sort(function(a, b) {
                            return a[0] - b[0]
                        }).forEach(function(a) {
                            b._offsets.push(a[0]),
                            b._targets.push(a[1])
                        })
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeData(this._element, g),
                        a(this._scrollElement).off(h),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                    }
                }, {
                    key: "_getConfig",
                    value: function value(c) {
                        if ((c = a.extend({}, k, c),
                        "string" != typeof c.target)) {
                            var d = a(c.target).attr("id");
                            d || (d = f.getUID(b),
                            a(c.target).attr("id", d)),
                            c.target = "#" + d
                        }
                        return f.typeCheckConfig(b, c, l),
                        c
                    }
                }, {
                    key: "_getScrollTop",
                    value: function value() {
                        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                    }
                }, {
                    key: "_getScrollHeight",
                    value: function value() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                }, {
                    key: "_process",
                    value: function value() {
                        var a = this._getScrollTop() + this._config.offset
                          , b = this._getScrollHeight()
                          , c = this._config.offset + b - this._scrollElement.offsetHeight;
                        if ((this._scrollHeight !== b && this.refresh(),
                        a >= c)) {
                            var d = this._targets[this._targets.length - 1];
                            this._activeTarget !== d && this._activate(d)
                        }
                        if (this._activeTarget && a < this._offsets[0])
                            return this._activeTarget = null,
                            void this._clear();
                        for (var e = this._offsets.length; e--; ) {
                            var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                            f && this._activate(this._targets[e])
                        }
                    }
                }, {
                    key: "_activate",
                    value: function value(b) {
                        this._activeTarget = b,
                        this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function(a) {
                            return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                        });
                        var d = a(c.join(","));
                        d.hasClass(n.DROPDOWN_ITEM) ? (d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),
                        d.addClass(n.ACTIVE)) : d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),
                        a(this._scrollElement).trigger(m.ACTIVATE, {
                            relatedTarget: b
                        })
                    }
                }, {
                    key: "_clear",
                    value: function value() {
                        a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(b) {
                        return this.each(function() {
                            var c = a(this).data(g)
                              , d = "object" == typeof b && b || null;
                            if ((c || (c = new i(this,d),
                            a(this).data(g, c)),
                            "string" == typeof b)) {
                                if (void 0 === c[b])
                                    throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return k
                    }
                }]),
                i
            }
            )();
            return a(window).on(m.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--; ) {
                    var d = a(b[c]);
                    q._jQueryInterface.call(d, d.data())
                }
            }),
            a.fn[b] = q._jQueryInterface,
            a.fn[b].Constructor = q,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                q._jQueryInterface
            }
            ,
            q
        }
        )(jQuery),
        (function(a) {
            var b = "tab"
              , d = "4.0.0-alpha.4"
              , g = "bs.tab"
              , h = "." + g
              , i = ".data-api"
              , j = a.fn[b]
              , k = 150
              , l = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                CLICK_DATA_API: "click" + h + i
            }
              , m = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                FADE: "fade",
                IN: "in"
            }
              , n = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                UL: "ul:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }
              , o = (function() {
                function b(a) {
                    c(this, b),
                    this._element = a
                }
                return e(b, [{
                    key: "show",
                    value: function value() {
                        var b = this;
                        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                            var c = void 0
                              , d = void 0
                              , e = a(this._element).closest(n.UL)[0]
                              , g = f.getSelectorFromElement(this._element);
                            e && (d = a.makeArray(a(e).find(n.ACTIVE)),
                            d = d[d.length - 1]);
                            var h = a.Event(l.HIDE, {
                                relatedTarget: this._element
                            })
                              , i = a.Event(l.SHOW, {
                                relatedTarget: d
                            });
                            if ((d && a(d).trigger(h),
                            a(this._element).trigger(i),
                            !i.isDefaultPrevented() && !h.isDefaultPrevented())) {
                                g && (c = a(g)[0]),
                                this._activate(this._element, e);
                                var j = function j() {
                                    var c = a.Event(l.HIDDEN, {
                                        relatedTarget: b._element
                                    })
                                      , e = a.Event(l.SHOWN, {
                                        relatedTarget: d
                                    });
                                    a(d).trigger(c),
                                    a(b._element).trigger(e)
                                };
                                c ? this._activate(c, c.parentNode, j) : j()
                            }
                        }
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        a.removeClass(this._element, g),
                        this._element = null
                    }
                }, {
                    key: "_activate",
                    value: function value(b, c, d) {
                        var e = a(c).find(n.ACTIVE_CHILD)[0]
                          , g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0]))
                          , h = a.proxy(this._transitionComplete, this, b, e, g, d);
                        e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(),
                        e && a(e).removeClass(m.IN)
                    }
                }, {
                    key: "_transitionComplete",
                    value: function value(b, c, d, e) {
                        if (c) {
                            a(c).removeClass(m.ACTIVE);
                            var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                            g && a(g).removeClass(m.ACTIVE),
                            c.setAttribute("aria-expanded", !1)
                        }
                        if ((a(b).addClass(m.ACTIVE),
                        b.setAttribute("aria-expanded", !0),
                        d ? (f.reflow(b),
                        a(b).addClass(m.IN)) : a(b).removeClass(m.FADE),
                        b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU))) {
                            var h = a(b).closest(n.DROPDOWN)[0];
                            h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),
                            b.setAttribute("aria-expanded", !0)
                        }
                        e && e()
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(c) {
                        return this.each(function() {
                            var d = a(this)
                              , e = d.data(g);
                            if ((e || (e = e = new b(this),
                            d.data(g, e)),
                            "string" == typeof c)) {
                                if (void 0 === e[c])
                                    throw new Error('No method named "' + c + '"');
                                e[c]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }]),
                b
            }
            )();
            return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
                b.preventDefault(),
                o._jQueryInterface.call(a(this), "show")
            }),
            a.fn[b] = o._jQueryInterface,
            a.fn[b].Constructor = o,
            a.fn[b].noConflict = function() {
                return a.fn[b] = j,
                o._jQueryInterface
            }
            ,
            o
        }
        )(jQuery),
        (function(a) {
            if (void 0 === window.Tether)
                throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
            var b = "tooltip"
              , d = "4.0.0-alpha.4"
              , g = "bs.tooltip"
              , h = "." + g
              , i = a.fn[b]
              , j = 150
              , k = "bs-tether"
              , l = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: "0 0",
                constraints: []
            }
              , m = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array"
            }
              , n = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            }
              , o = {
                IN: "in",
                OUT: "out"
            }
              , p = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                INSERTED: "inserted" + h,
                CLICK: "click" + h,
                FOCUSIN: "focusin" + h,
                FOCUSOUT: "focusout" + h,
                MOUSEENTER: "mouseenter" + h,
                MOUSELEAVE: "mouseleave" + h
            }
              , q = {
                FADE: "fade",
                IN: "in"
            }
              , r = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            }
              , s = {
                element: !1,
                enabled: !1
            }
              , t = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            }
              , u = (function() {
                function i(a, b) {
                    c(this, i),
                    this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._tether = null,
                    this.element = a,
                    this.config = this._getConfig(b),
                    this.tip = null,
                    this._setListeners()
                }
                return e(i, [{
                    key: "enable",
                    value: function value() {
                        this._isEnabled = !0
                    }
                }, {
                    key: "disable",
                    value: function value() {
                        this._isEnabled = !1
                    }
                }, {
                    key: "toggleEnabled",
                    value: function value() {
                        this._isEnabled = !this._isEnabled
                    }
                }, {
                    key: "toggle",
                    value: function value(b) {
                        if (b) {
                            var c = this.constructor.DATA_KEY
                              , d = a(b.currentTarget).data(c);
                            d || (d = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                            a(b.currentTarget).data(c, d)),
                            d._activeTrigger.click = !d._activeTrigger.click,
                            d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                        } else {
                            if (a(this.getTipElement()).hasClass(q.IN))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }
                }, {
                    key: "dispose",
                    value: function value() {
                        clearTimeout(this._timeout),
                        this.cleanupTether(),
                        a.removeData(this.element, this.constructor.DATA_KEY),
                        a(this.element).off(this.constructor.EVENT_KEY),
                        this.tip && a(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        this._tether = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                    }
                }, {
                    key: "show",
                    value: function value() {
                        var b = this
                          , c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            a(this.element).trigger(c);
                            var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                            if (c.isDefaultPrevented() || !d)
                                return;
                            var e = this.getTipElement()
                              , g = f.getUID(this.constructor.NAME);
                            e.setAttribute("id", g),
                            this.element.setAttribute("aria-describedby", g),
                            this.setContent(),
                            this.config.animation && a(e).addClass(q.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement
                              , j = this._getAttachment(h);
                            a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                            a(this.element).trigger(this.constructor.Event.INSERTED),
                            this._tether = new Tether({
                                attachment: j,
                                element: e,
                                target: this.element,
                                classes: s,
                                classPrefix: k,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }),
                            f.reflow(e),
                            this._tether.position(),
                            a(e).addClass(q.IN);
                            var l = function l() {
                                var c = b._hoverState;
                                b._hoverState = null,
                                a(b.element).trigger(b.constructor.Event.SHOWN),
                                c === o.OUT && b._leave(null, b)
                            };
                            if (f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE))
                                return void a(this.tip).one(f.TRANSITION_END, l).emulateTransitionEnd(i._TRANSITION_DURATION);
                            l()
                        }
                    }
                }, {
                    key: "hide",
                    value: function value(b) {
                        var c = this
                          , d = this.getTipElement()
                          , e = a.Event(this.constructor.Event.HIDE)
                          , g = function g() {
                            c._hoverState !== o.IN && d.parentNode && d.parentNode.removeChild(d),
                            c.element.removeAttribute("aria-describedby"),
                            a(c.element).trigger(c.constructor.Event.HIDDEN),
                            c.cleanupTether(),
                            b && b()
                        };
                        a(this.element).trigger(e),
                        e.isDefaultPrevented() || (a(d).removeClass(q.IN),
                        f.supportsTransitionEnd() && a(this.tip).hasClass(q.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(j) : g(),
                        this._hoverState = "")
                    }
                }, {
                    key: "isWithContent",
                    value: function value() {
                        return Boolean(this.getTitle())
                    }
                }, {
                    key: "getTipElement",
                    value: function value() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function value() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(r.TOOLTIP_INNER), this.getTitle()),
                        b.removeClass(q.FADE).removeClass(q.IN),
                        this.cleanupTether()
                    }
                }, {
                    key: "setElementContent",
                    value: function value(b, c) {
                        var d = this.config.html;
                        "object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
                    }
                }, {
                    key: "getTitle",
                    value: function value() {
                        var a = this.element.getAttribute("data-original-title");
                        return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        a
                    }
                }, {
                    key: "cleanupTether",
                    value: function value() {
                        this._tether && this._tether.destroy()
                    }
                }, {
                    key: "_getAttachment",
                    value: function value(a) {
                        return n[a.toUpperCase()]
                    }
                }, {
                    key: "_setListeners",
                    value: function value() {
                        var b = this
                          , c = this.config.trigger.split(" ");
                        c.forEach(function(c) {
                            if ("click" === c)
                                a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                            else if (c !== t.MANUAL) {
                                var d = c === t.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN
                                  , e = c === t.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                            }
                        }),
                        this.config.selector ? this.config = a.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }
                }, {
                    key: "_fixTitle",
                    value: function value() {
                        var a = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                    }
                }, {
                    key: "_enter",
                    value: function value(b, c) {
                        var d = this.constructor.DATA_KEY;
                        return c = c || a(b.currentTarget).data(d),
                        c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                        a(b.currentTarget).data(d, c)),
                        b && (c._activeTrigger["focusin" === b.type ? t.FOCUS : t.HOVER] = !0),
                        a(c.getTipElement()).hasClass(q.IN) || c._hoverState === o.IN ? void (c._hoverState = o.IN) : (clearTimeout(c._timeout),
                        c._hoverState = o.IN,
                        c.config.delay && c.config.delay.show ? void (c._timeout = setTimeout(function() {
                            c._hoverState === o.IN && c.show()
                        }, c.config.delay.show)) : void c.show())
                    }
                }, {
                    key: "_leave",
                    value: function value(b, c) {
                        var d = this.constructor.DATA_KEY;
                        if ((c = c || a(b.currentTarget).data(d),
                        c || (c = new this.constructor(b.currentTarget,this._getDelegateConfig()),
                        a(b.currentTarget).data(d, c)),
                        b && (c._activeTrigger["focusout" === b.type ? t.FOCUS : t.HOVER] = !1),
                        !c._isWithActiveTrigger()))
                            return clearTimeout(c._timeout),
                            c._hoverState = o.OUT,
                            c.config.delay && c.config.delay.hide ? void (c._timeout = setTimeout(function() {
                                c._hoverState === o.OUT && c.hide()
                            }, c.config.delay.hide)) : void c.hide()
                    }
                }, {
                    key: "_isWithActiveTrigger",
                    value: function value() {
                        for (var a in this._activeTrigger)
                            if (this._activeTrigger[a])
                                return !0;
                        return !1
                    }
                }, {
                    key: "_getConfig",
                    value: function value(c) {
                        return c = a.extend({}, this.constructor.Default, a(this.element).data(), c),
                        c.delay && "number" == typeof c.delay && (c.delay = {
                            show: c.delay,
                            hide: c.delay
                        }),
                        f.typeCheckConfig(b, c, this.constructor.DefaultType),
                        c
                    }
                }, {
                    key: "_getDelegateConfig",
                    value: function value() {
                        var a = {};
                        if (this.config)
                            for (var b in this.config)
                                this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                        return a
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(b) {
                        return this.each(function() {
                            var c = a(this).data(g)
                              , d = "object" == typeof b ? b : null;
                            if ((c || !/destroy|hide/.test(b)) && (c || (c = new i(this,d),
                            a(this).data(g, c)),
                            "string" == typeof b)) {
                                if (void 0 === c[b])
                                    throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return d
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return l
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return b
                    }
                }, {
                    key: "DATA_KEY",
                    get: function get() {
                        return g
                    }
                }, {
                    key: "Event",
                    get: function get() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function get() {
                        return h
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return m
                    }
                }]),
                i
            }
            )();
            return a.fn[b] = u._jQueryInterface,
            a.fn[b].Constructor = u,
            a.fn[b].noConflict = function() {
                return a.fn[b] = i,
                u._jQueryInterface
            }
            ,
            u
        }
        )(jQuery));
        (function(a) {
            var f = "popover"
              , h = "4.0.0-alpha.4"
              , i = "bs.popover"
              , j = "." + i
              , k = a.fn[f]
              , l = a.extend({}, g.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            })
              , m = a.extend({}, g.DefaultType, {
                content: "(string|element|function)"
            })
              , n = {
                FADE: "fade",
                IN: "in"
            }
              , o = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content",
                ARROW: ".popover-arrow"
            }
              , p = {
                HIDE: "hide" + j,
                HIDDEN: "hidden" + j,
                SHOW: "show" + j,
                SHOWN: "shown" + j,
                INSERTED: "inserted" + j,
                CLICK: "click" + j,
                FOCUSIN: "focusin" + j,
                FOCUSOUT: "focusout" + j,
                MOUSEENTER: "mouseenter" + j,
                MOUSELEAVE: "mouseleave" + j
            }
              , q = (function(g) {
                function k() {
                    c(this, k),
                    d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(this, arguments)
                }
                return b(k, g),
                e(k, [{
                    key: "isWithContent",
                    value: function value() {
                        return this.getTitle() || this._getContent()
                    }
                }, {
                    key: "getTipElement",
                    value: function value() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function value() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(o.TITLE), this.getTitle()),
                        this.setElementContent(b.find(o.CONTENT), this._getContent()),
                        b.removeClass(n.FADE).removeClass(n.IN),
                        this.cleanupTether()
                    }
                }, {
                    key: "_getContent",
                    value: function value() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function value(b) {
                        return this.each(function() {
                            var c = a(this).data(i)
                              , d = "object" == typeof b ? b : null;
                            if ((c || !/destroy|hide/.test(b)) && (c || (c = new k(this,d),
                            a(this).data(i, c)),
                            "string" == typeof b)) {
                                if (void 0 === c[b])
                                    throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function get() {
                        return h
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return l
                    }
                }, {
                    key: "NAME",
                    get: function get() {
                        return f
                    }
                }, {
                    key: "DATA_KEY",
                    get: function get() {
                        return i
                    }
                }, {
                    key: "Event",
                    get: function get() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function get() {
                        return j
                    }
                }, {
                    key: "DefaultType",
                    get: function get() {
                        return m
                    }
                }]),
                k
            }
            )(g);
            return a.fn[f] = q._jQueryInterface,
            a.fn[f].Constructor = q,
            a.fn[f].noConflict = function() {
                return a.fn[f] = k,
                q._jQueryInterface
            }
            ,
            q
        }
        )(jQuery)
    }
    )(jQuery);
    /***/
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    !function() {
        window.flexibility = {},
        Array.prototype.forEach || (Array.prototype.forEach = function(t) {
            if (void 0 === this || null === this)
                throw new TypeError(this + "is not an object");
            if (!(t instanceof Function))
                throw new TypeError(t + " is not a function");
            for (var e = Object(this), i = arguments[1], n = e instanceof String ? e.split("") : e, r = Math.max(Math.min(n.length, 9007199254740991), 0) || 0, o = -1; ++o < r; )
                o in n && t.call(i, n[o], o, e)
        }
        ),
        function(t, e) {
            !0 ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [],
            __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = e() : t.computeLayout = e()
        }(flexibility, function() {
            var t = function() {
                function t(e) {
                    if ((!e.layout || e.isDirty) && (e.layout = {
                        width: void 0,
                        height: void 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }),
                    e.style || (e.style = {}),
                    e.children || (e.children = []),
                    e.style.measure && e.children && e.children.length)
                        throw new Error("Using custom measure function is supported only for leaf nodes.");
                    return e.children.forEach(t),
                    e
                }
                function e(t) {
                    return void 0 === t
                }
                function i(t) {
                    return t === q || t === G
                }
                function n(t) {
                    return t === U || t === Z
                }
                function r(t, e) {
                    if (void 0 !== t.style.marginStart && i(e))
                        return t.style.marginStart;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.marginLeft;
                        break;
                    case "row-reverse":
                        n = t.style.marginRight;
                        break;
                    case "column":
                        n = t.style.marginTop;
                        break;
                    case "column-reverse":
                        n = t.style.marginBottom
                    }
                    return void 0 !== n ? n : void 0 !== t.style.margin ? t.style.margin : 0
                }
                function o(t, e) {
                    if (void 0 !== t.style.marginEnd && i(e))
                        return t.style.marginEnd;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.marginRight;
                        break;
                    case "row-reverse":
                        n = t.style.marginLeft;
                        break;
                    case "column":
                        n = t.style.marginBottom;
                        break;
                    case "column-reverse":
                        n = t.style.marginTop
                    }
                    return null != n ? n : void 0 !== t.style.margin ? t.style.margin : 0
                }
                function l(t, e) {
                    if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && i(e))
                        return t.style.paddingStart;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.paddingLeft;
                        break;
                    case "row-reverse":
                        n = t.style.paddingRight;
                        break;
                    case "column":
                        n = t.style.paddingTop;
                        break;
                    case "column-reverse":
                        n = t.style.paddingBottom
                    }
                    return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0
                }
                function a(t, e) {
                    if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && i(e))
                        return t.style.paddingEnd;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.paddingRight;
                        break;
                    case "row-reverse":
                        n = t.style.paddingLeft;
                        break;
                    case "column":
                        n = t.style.paddingBottom;
                        break;
                    case "column-reverse":
                        n = t.style.paddingTop
                    }
                    return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0
                }
                function d(t, e) {
                    if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && i(e))
                        return t.style.borderStartWidth;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.borderLeftWidth;
                        break;
                    case "row-reverse":
                        n = t.style.borderRightWidth;
                        break;
                    case "column":
                        n = t.style.borderTopWidth;
                        break;
                    case "column-reverse":
                        n = t.style.borderBottomWidth
                    }
                    return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0
                }
                function s(t, e) {
                    if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && i(e))
                        return t.style.borderEndWidth;
                    var n = null;
                    switch (e) {
                    case "row":
                        n = t.style.borderRightWidth;
                        break;
                    case "row-reverse":
                        n = t.style.borderLeftWidth;
                        break;
                    case "column":
                        n = t.style.borderBottomWidth;
                        break;
                    case "column-reverse":
                        n = t.style.borderTopWidth
                    }
                    return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0
                }
                function u(t, e) {
                    return l(t, e) + d(t, e)
                }
                function y(t, e) {
                    return a(t, e) + s(t, e)
                }
                function c(t, e) {
                    return d(t, e) + s(t, e)
                }
                function f(t, e) {
                    return r(t, e) + o(t, e)
                }
                function h(t, e) {
                    return u(t, e) + y(t, e)
                }
                function m(t) {
                    return t.style.justifyContent ? t.style.justifyContent : "flex-start"
                }
                function v(t) {
                    return t.style.alignContent ? t.style.alignContent : "flex-start"
                }
                function p(t, e) {
                    return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : "stretch"
                }
                function x(t, e) {
                    if (e === N) {
                        if (t === q)
                            return G;
                        if (t === G)
                            return q
                    }
                    return t
                }
                function g(t, e) {
                    var i;
                    return i = t.style.direction ? t.style.direction : M,
                    i === M && (i = void 0 === e ? A : e),
                    i
                }
                function b(t) {
                    return t.style.flexDirection ? t.style.flexDirection : U
                }
                function w(t, e) {
                    return n(t) ? x(q, e) : U
                }
                function W(t) {
                    return t.style.position ? t.style.position : "relative"
                }
                function L(t) {
                    return W(t) === tt && t.style.flex > 0
                }
                function E(t) {
                    return "wrap" === t.style.flexWrap
                }
                function S(t, e) {
                    return t.layout[ot[e]] + f(t, e)
                }
                function k(t, e) {
                    return void 0 !== t.style[ot[e]] && t.style[ot[e]] >= 0
                }
                function C(t, e) {
                    return void 0 !== t.style[e]
                }
                function T(t) {
                    return void 0 !== t.style.measure
                }
                function H(t, e) {
                    return void 0 !== t.style[e] ? t.style[e] : 0
                }
                function $(t, e, i) {
                    var n = {
                        row: t.style.minWidth,
                        "row-reverse": t.style.minWidth,
                        column: t.style.minHeight,
                        "column-reverse": t.style.minHeight
                    }[e]
                      , r = {
                        row: t.style.maxWidth,
                        "row-reverse": t.style.maxWidth,
                        column: t.style.maxHeight,
                        "column-reverse": t.style.maxHeight
                    }[e]
                      , o = i;
                    return void 0 !== r && r >= 0 && o > r && (o = r),
                    void 0 !== n && n >= 0 && n > o && (o = n),
                    o
                }
                function z(t, e) {
                    return t > e ? t : e
                }
                function B(t, e) {
                    void 0 === t.layout[ot[e]] && k(t, e) && (t.layout[ot[e]] = z($(t, e, t.style[ot[e]]), h(t, e)))
                }
                function D(t, e, i) {
                    e.layout[nt[i]] = t.layout[ot[i]] - e.layout[ot[i]] - e.layout[rt[i]]
                }
                function I(t, e) {
                    return void 0 !== t.style[it[e]] ? H(t, it[e]) : -H(t, nt[e])
                }
                function R(t, n, l, a) {
                    var s = g(t, a)
                      , R = x(b(t), s)
                      , M = w(R, s)
                      , A = x(q, s);
                    B(t, R),
                    B(t, M),
                    t.layout.direction = s,
                    t.layout[it[R]] += r(t, R) + I(t, R),
                    t.layout[nt[R]] += o(t, R) + I(t, R),
                    t.layout[it[M]] += r(t, M) + I(t, M),
                    t.layout[nt[M]] += o(t, M) + I(t, M);
                    var N = t.children.length
                      , lt = h(t, A)
                      , at = h(t, U);
                    if (T(t)) {
                        var dt = !e(t.layout[ot[A]])
                          , st = F;
                        st = k(t, A) ? t.style.width : dt ? t.layout[ot[A]] : n - f(t, A),
                        st -= lt;
                        var ut = F;
                        ut = k(t, U) ? t.style.height : e(t.layout[ot[U]]) ? l - f(t, A) : t.layout[ot[U]],
                        ut -= h(t, U);
                        var yt = !k(t, A) && !dt
                          , ct = !k(t, U) && e(t.layout[ot[U]]);
                        if (yt || ct) {
                            var ft = t.style.measure(st, ut);
                            yt && (t.layout.width = ft.width + lt),
                            ct && (t.layout.height = ft.height + at)
                        }
                        if (0 === N)
                            return
                    }
                    var ht, mt, vt, pt, xt = E(t), gt = m(t), bt = u(t, R), wt = u(t, M), Wt = h(t, R), Lt = h(t, M), Et = !e(t.layout[ot[R]]), St = !e(t.layout[ot[M]]), kt = i(R), Ct = null, Tt = null, Ht = F;
                    Et && (Ht = t.layout[ot[R]] - Wt);
                    for (var $t = 0, zt = 0, Bt = 0, Dt = 0, It = 0, Rt = 0; N > zt; ) {
                        var jt, Ft, Mt = 0, At = 0, Nt = 0, qt = 0, Gt = Et && gt === O || !Et && gt !== _, Ut = Gt ? N : $t, Zt = !0, Ot = N, _t = null, Jt = null, Kt = bt, Pt = 0;
                        for (ht = $t; N > ht; ++ht) {
                            vt = t.children[ht],
                            vt.lineIndex = Rt,
                            vt.nextAbsoluteChild = null,
                            vt.nextFlexChild = null;
                            var Qt = p(t, vt);
                            if (Qt === Y && W(vt) === tt && St && !k(vt, M))
                                vt.layout[ot[M]] = z($(vt, M, t.layout[ot[M]] - Lt - f(vt, M)), h(vt, M));
                            else if (W(vt) === et)
                                for (null === Ct && (Ct = vt),
                                null !== Tt && (Tt.nextAbsoluteChild = vt),
                                Tt = vt,
                                mt = 0; 2 > mt; mt++)
                                    pt = 0 !== mt ? q : U,
                                    !e(t.layout[ot[pt]]) && !k(vt, pt) && C(vt, it[pt]) && C(vt, nt[pt]) && (vt.layout[ot[pt]] = z($(vt, pt, t.layout[ot[pt]] - h(t, pt) - f(vt, pt) - H(vt, it[pt]) - H(vt, nt[pt])), h(vt, pt)));
                            var Vt = 0;
                            if (Et && L(vt) ? (At++,
                            Nt += vt.style.flex,
                            null === _t && (_t = vt),
                            null !== Jt && (Jt.nextFlexChild = vt),
                            Jt = vt,
                            Vt = h(vt, R) + f(vt, R)) : (jt = F,
                            Ft = F,
                            kt ? Ft = k(t, U) ? t.layout[ot[U]] - at : l - f(t, U) - at : jt = k(t, A) ? t.layout[ot[A]] - lt : n - f(t, A) - lt,
                            0 === Bt && j(vt, jt, Ft, s),
                            W(vt) === tt && (qt++,
                            Vt = S(vt, R))),
                            xt && Et && Mt + Vt > Ht && ht !== $t) {
                                qt--,
                                Bt = 1;
                                break
                            }
                            Gt && (W(vt) !== tt || L(vt)) && (Gt = !1,
                            Ut = ht),
                            Zt && (W(vt) !== tt || Qt !== Y && Qt !== Q || e(vt.layout[ot[M]])) && (Zt = !1,
                            Ot = ht),
                            Gt && (vt.layout[rt[R]] += Kt,
                            Et && D(t, vt, R),
                            Kt += S(vt, R),
                            Pt = z(Pt, $(vt, M, S(vt, M)))),
                            Zt && (vt.layout[rt[M]] += Dt + wt,
                            St && D(t, vt, M)),
                            Bt = 0,
                            Mt += Vt,
                            zt = ht + 1
                        }
                        var Xt = 0
                          , Yt = 0
                          , te = 0;
                        if (te = Et ? Ht - Mt : z(Mt, 0) - Mt,
                        0 !== At) {
                            var ee, ie, ne = te / Nt;
                            for (Jt = _t; null !== Jt; )
                                ee = ne * Jt.style.flex + h(Jt, R),
                                ie = $(Jt, R, ee),
                                ee !== ie && (te -= ie,
                                Nt -= Jt.style.flex),
                                Jt = Jt.nextFlexChild;
                            for (ne = te / Nt,
                            0 > ne && (ne = 0),
                            Jt = _t; null !== Jt; )
                                Jt.layout[ot[R]] = $(Jt, R, ne * Jt.style.flex + h(Jt, R)),
                                jt = F,
                                k(t, A) ? jt = t.layout[ot[A]] - lt : kt || (jt = n - f(t, A) - lt),
                                Ft = F,
                                k(t, U) ? Ft = t.layout[ot[U]] - at : kt && (Ft = l - f(t, U) - at),
                                j(Jt, jt, Ft, s),
                                vt = Jt,
                                Jt = Jt.nextFlexChild,
                                vt.nextFlexChild = null
                        } else
                            gt !== O && (gt === _ ? Xt = te / 2 : gt === J ? Xt = te : gt === K ? (te = z(te, 0),
                            Yt = At + qt - 1 !== 0 ? te / (At + qt - 1) : 0) : gt === P && (Yt = te / (At + qt),
                            Xt = Yt / 2));
                        for (Kt += Xt,
                        ht = Ut; zt > ht; ++ht)
                            vt = t.children[ht],
                            W(vt) === et && C(vt, it[R]) ? vt.layout[rt[R]] = H(vt, it[R]) + d(t, R) + r(vt, R) : (vt.layout[rt[R]] += Kt,
                            Et && D(t, vt, R),
                            W(vt) === tt && (Kt += Yt + S(vt, R),
                            Pt = z(Pt, $(vt, M, S(vt, M)))));
                        var re = t.layout[ot[M]];
                        for (St || (re = z($(t, M, Pt + Lt), Lt)),
                        ht = Ot; zt > ht; ++ht)
                            if (vt = t.children[ht],
                            W(vt) === et && C(vt, it[M]))
                                vt.layout[rt[M]] = H(vt, it[M]) + d(t, M) + r(vt, M);
                            else {
                                var oe = wt;
                                if (W(vt) === tt) {
                                    var Qt = p(t, vt);
                                    if (Qt === Y)
                                        e(vt.layout[ot[M]]) && (vt.layout[ot[M]] = z($(vt, M, re - Lt - f(vt, M)), h(vt, M)));
                                    else if (Qt !== Q) {
                                        var le = re - Lt - S(vt, M);
                                        oe += Qt === V ? le / 2 : le
                                    }
                                }
                                vt.layout[rt[M]] += Dt + oe,
                                St && D(t, vt, M)
                            }
                        Dt += Pt,
                        It = z(It, Kt),
                        Rt += 1,
                        $t = zt
                    }
                    if (Rt > 1 && St) {
                        var ae = t.layout[ot[M]] - Lt
                          , de = ae - Dt
                          , se = 0
                          , ue = wt
                          , ye = v(t);
                        ye === X ? ue += de : ye === V ? ue += de / 2 : ye === Y && ae > Dt && (se = de / Rt);
                        var ce = 0;
                        for (ht = 0; Rt > ht; ++ht) {
                            var fe = ce
                              , he = 0;
                            for (mt = fe; N > mt; ++mt)
                                if (vt = t.children[mt],
                                W(vt) === tt) {
                                    if (vt.lineIndex !== ht)
                                        break;
                                    e(vt.layout[ot[M]]) || (he = z(he, vt.layout[ot[M]] + f(vt, M)))
                                }
                            for (ce = mt,
                            he += se,
                            mt = fe; ce > mt; ++mt)
                                if (vt = t.children[mt],
                                W(vt) === tt) {
                                    var me = p(t, vt);
                                    if (me === Q)
                                        vt.layout[rt[M]] = ue + r(vt, M);
                                    else if (me === X)
                                        vt.layout[rt[M]] = ue + he - o(vt, M) - vt.layout[ot[M]];
                                    else if (me === V) {
                                        var ve = vt.layout[ot[M]];
                                        vt.layout[rt[M]] = ue + (he - ve) / 2
                                    } else
                                        me === Y && (vt.layout[rt[M]] = ue + r(vt, M))
                                }
                            ue += he
                        }
                    }
                    var pe = !1
                      , xe = !1;
                    if (Et || (t.layout[ot[R]] = z($(t, R, It + y(t, R)), Wt),
                    (R === G || R === Z) && (pe = !0)),
                    St || (t.layout[ot[M]] = z($(t, M, Dt + Lt), Lt),
                    (M === G || M === Z) && (xe = !0)),
                    pe || xe)
                        for (ht = 0; N > ht; ++ht)
                            vt = t.children[ht],
                            pe && D(t, vt, R),
                            xe && D(t, vt, M);
                    for (Tt = Ct; null !== Tt; ) {
                        for (mt = 0; 2 > mt; mt++)
                            pt = 0 !== mt ? q : U,
                            !e(t.layout[ot[pt]]) && !k(Tt, pt) && C(Tt, it[pt]) && C(Tt, nt[pt]) && (Tt.layout[ot[pt]] = z($(Tt, pt, t.layout[ot[pt]] - c(t, pt) - f(Tt, pt) - H(Tt, it[pt]) - H(Tt, nt[pt])), h(Tt, pt))),
                            C(Tt, nt[pt]) && !C(Tt, it[pt]) && (Tt.layout[it[pt]] = t.layout[ot[pt]] - Tt.layout[ot[pt]] - H(Tt, nt[pt]));
                        vt = Tt,
                        Tt = Tt.nextAbsoluteChild,
                        vt.nextAbsoluteChild = null
                    }
                }
                function j(t, e, i, n) {
                    t.shouldUpdate = !0;
                    var r = t.style.direction || A
                      , o = !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.parentMaxHeight === i && t.lastLayout.direction === r;
                    o ? (t.layout.width = t.lastLayout.width,
                    t.layout.height = t.lastLayout.height,
                    t.layout.top = t.lastLayout.top,
                    t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}),
                    t.lastLayout.requestedWidth = t.layout.width,
                    t.lastLayout.requestedHeight = t.layout.height,
                    t.lastLayout.parentMaxWidth = e,
                    t.lastLayout.parentMaxHeight = i,
                    t.lastLayout.direction = r,
                    t.children.forEach(function(t) {
                        t.layout.width = void 0,
                        t.layout.height = void 0,
                        t.layout.top = 0,
                        t.layout.left = 0
                    }),
                    R(t, e, i, n),
                    t.lastLayout.width = t.layout.width,
                    t.lastLayout.height = t.layout.height,
                    t.lastLayout.top = t.layout.top,
                    t.lastLayout.left = t.layout.left)
                }
                var F, M = "inherit", A = "ltr", N = "rtl", q = "row", G = "row-reverse", U = "column", Z = "column-reverse", O = "flex-start", _ = "center", J = "flex-end", K = "space-between", P = "space-around", Q = "flex-start", V = "center", X = "flex-end", Y = "stretch", tt = "relative", et = "absolute", it = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom"
                }, nt = {
                    row: "right",
                    "row-reverse": "left",
                    column: "bottom",
                    "column-reverse": "top"
                }, rt = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom"
                }, ot = {
                    row: "width",
                    "row-reverse": "width",
                    column: "height",
                    "column-reverse": "height"
                };
                return {
                    layoutNodeImpl: R,
                    computeLayout: j,
                    fillNodes: t
                }
            }();
            return "object" == typeof exports && (module.exports = t),
            function(e) {
                t.fillNodes(e),
                t.computeLayout(e)
            }
        }),
        !window.addEventListener && window.attachEvent && function() {
            Window.prototype.addEventListener = HTMLDocument.prototype.addEventListener = Element.prototype.addEventListener = function(t, e) {
                this.attachEvent("on" + t, e)
            }
            ,
            Window.prototype.removeEventListener = HTMLDocument.prototype.removeEventListener = Element.prototype.removeEventListener = function(t, e) {
                this.detachEvent("on" + t, e)
            }
        }(),
        flexibility.detect = function() {
            var t = document.createElement("p");
            try {
                return t.style.display = "flex",
                "flex" === t.style.display
            } catch (e) {
                return !1
            }
        }
        ,
        !flexibility.detect() && document.attachEvent && document.documentElement.currentStyle && document.attachEvent("onreadystatechange", function() {
            flexibility.onresize({
                target: document.documentElement
            })
        }),
        flexibility.init = function(t) {
            var e = t.onlayoutcomplete;
            return e || (e = t.onlayoutcomplete = {
                node: t,
                style: {},
                children: []
            }),
            e.style.display = t.currentStyle["-js-display"] || t.currentStyle.display,
            e
        }
        ;
        var t, e = 1e3, i = 15, n = document.documentElement, r = 0, o = 0;
        flexibility.onresize = function(l) {
            if (n.clientWidth !== r || n.clientHeight !== o) {
                r = n.clientWidth,
                o = n.clientHeight,
                clearTimeout(t),
                window.removeEventListener("resize", flexibility.onresize);
                var a = l.target && 1 === l.target.nodeType ? l.target : document.documentElement;
                flexibility.walk(a),
                t = setTimeout(function() {
                    window.addEventListener("resize", flexibility.onresize)
                }, e / i)
            }
        }
        ;
        var l = {
            alignContent: {
                initial: "stretch",
                valid: /^(flex-start|flex-end|center|space-between|space-around|stretch)/
            },
            alignItems: {
                initial: "stretch",
                valid: /^(flex-start|flex-end|center|baseline|stretch)$/
            },
            boxSizing: {
                initial: "content-box",
                valid: /^(border-box|content-box)$/
            },
            flexDirection: {
                initial: "row",
                valid: /^(row|row-reverse|column|column-reverse)$/
            },
            flexWrap: {
                initial: "nowrap",
                valid: /^(nowrap|wrap|wrap-reverse)$/
            },
            justifyContent: {
                initial: "flex-start",
                valid: /^(flex-start|flex-end|center|space-between|space-around)$/
            }
        };
        flexibility.updateFlexContainerCache = function(t) {
            var e = t.style
              , i = t.node.currentStyle
              , n = t.node.style
              , r = {};
            (i["flex-flow"] || n["flex-flow"] || "").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i, function(t, e, i) {
                r.flexDirection = e,
                r.flexWrap = i
            });
            for (var o in l) {
                var a = o.replace(/[A-Z]/g, "-$&").toLowerCase()
                  , d = l[o]
                  , s = i[a] || n[a];
                e[o] = d.valid.test(s) ? s : r[o] || d.initial
            }
        }
        ;
        var a = {
            alignSelf: {
                initial: "auto",
                valid: /^(auto|flex-start|flex-end|center|baseline|stretch)$/
            },
            boxSizing: {
                initial: "content-box",
                valid: /^(border-box|content-box)$/
            },
            flexBasis: {
                initial: "auto",
                valid: /^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/
            },
            flexGrow: {
                initial: 0,
                valid: /^\+?(0|[1-9][0-9]*)$/
            },
            flexShrink: {
                initial: 0,
                valid: /^\+?(0|[1-9][0-9]*)$/
            },
            order: {
                initial: 0,
                valid: /^([-+]?[0-9]+)$/
            }
        };
        flexibility.updateFlexItemCache = function(t) {
            var e = t.style
              , i = t.node.currentStyle
              , n = t.node.style
              , r = {};
            (i.flex || n.flex || "").replace(/^\+?(0|[1-9][0-9]*)/, function(t) {
                r.flexGrow = t
            });
            for (var o in a) {
                var l = o.replace(/[A-Z]/g, "-$&").toLowerCase()
                  , d = a[o]
                  , s = i[l] || n[l];
                e[o] = d.valid.test(s) ? s : r[o] || d.initial
            }
        }
        ;
        var d = "border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;"
          , s = {
            medium: 4,
            none: 0,
            thick: 6,
            thin: 2
        }
          , u = {
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            height: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            maxHeight: 0,
            maxWidth: 0,
            minHeight: 0,
            minWidth: 0,
            width: 0
        }
          , y = /^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/
          , c = 100;
        flexibility.updateLengthCache = function(t) {
            var e, i, n, r = t.node, o = t.style, l = r.parentNode, a = document.createElement("_"), f = a.runtimeStyle, h = r.currentStyle;
            f.cssText = d + "font-size:" + h.fontSize,
            l.insertBefore(a, r.nextSibling),
            o.fontSize = a.offsetWidth,
            f.fontSize = o.fontSize + "px";
            for (var m in u) {
                var v = h[m];
                y.test(v) || "auto" === v && !/(width|height)/i.test(m) ? /%$/.test(v) ? (/^(bottom|height|top)$/.test(m) ? (i || (i = l.offsetHeight),
                n = i) : (e || (e = l.offsetWidth),
                n = e),
                o[m] = parseFloat(v) * n / c) : (f.width = v,
                o[m] = a.offsetWidth) : /^border/.test(m) && v in s ? o[m] = s[v] : delete o[m]
            }
            l.removeChild(a),
            "none" === h.borderTopStyle && (o.borderTopWidth = 0),
            "none" === h.borderRightStyle && (o.borderRightWidth = 0),
            "none" === h.borderBottomStyle && (o.borderBottomWidth = 0),
            "none" === h.borderLeftStyle && (o.borderLeftWidth = 0),
            o.originalWidth = o.width,
            o.originalHeight = o.height,
            o.width || o.minWidth || (/flex/.test(o.display) ? o.width = r.offsetWidth : o.minWidth = r.offsetWidth),
            o.height || o.minHeight || /flex/.test(o.display) || (o.minHeight = r.offsetHeight)
        }
        ,
        flexibility.walk = function(t) {
            var e = flexibility.init(t)
              , i = e.style
              , n = i.display;
            if ("none" === n)
                return {};
            var r = n.match(/^(inline)?flex$/);
            if (r && (flexibility.updateFlexContainerCache(e),
            t.runtimeStyle.cssText = "display:" + (r[1] ? "inline-block" : "block"),
            e.children = []),
            Array.prototype.forEach.call(t.childNodes, function(t, n) {
                if (1 === t.nodeType) {
                    var o = flexibility.walk(t)
                      , l = o.style;
                    o.index = n,
                    r && (flexibility.updateFlexItemCache(o),
                    "auto" === l.alignSelf && (l.alignSelf = i.alignItems),
                    l.flex = l.flexGrow,
                    t.runtimeStyle.cssText = "display:inline-block",
                    e.children.push(o))
                }
            }),
            r) {
                e.children.forEach(function(t) {
                    flexibility.updateLengthCache(t)
                }),
                e.children.sort(function(t, e) {
                    return t.style.order - e.style.order || t.index - e.index
                }),
                /-reverse$/.test(i.flexDirection) && (e.children.reverse(),
                i.flexDirection = i.flexDirection.replace(/-reverse$/, ""),
                "flex-start" === i.justifyContent ? i.justifyContent = "flex-end" : "flex-end" === i.justifyContent && (i.justifyContent = "flex-start")),
                flexibility.updateLengthCache(e),
                delete e.lastLayout,
                delete e.layout;
                var o = i.borderTopWidth
                  , l = i.borderBottomWidth;
                i.borderTopWidth = 0,
                i.borderBottomWidth = 0,
                i.borderLeftWidth = 0,
                "column" === i.flexDirection && (i.width -= i.borderRightWidth),
                flexibility.computeLayout(e),
                t.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:relative;width:" + (e.layout.width + i.borderRightWidth) + "px;height:" + (e.layout.height + o + l) + "px";
                var a = []
                  , d = 1
                  , s = "column" === i.flexDirection ? "width" : "height";
                e.children.forEach(function(t) {
                    a[t.lineIndex] = Math.max(a[t.lineIndex] || 0, t.layout[s]),
                    d = Math.max(d, t.lineIndex + 1)
                }),
                e.children.forEach(function(t) {
                    var e = t.layout;
                    "stretch" === t.style.alignSelf && (e[s] = a[t.lineIndex]),
                    t.node.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:absolute;margin:0;width:" + e.width + "px;height:" + e.height + "px;top:" + e.top + "px;left:" + e.left + "px"
                })
            }
            return e
        }
    }();
    /***/
}
), (function(module, exports) {
    (function($) {
        'use strict';
        var _currentSpinnerId = 0;
        function _scopedEventName(name, id) {
            return name + '.touchspin_' + id
        }
        function _scopeEventNames(names, id) {
            return $.map(names, function(name) {
                return _scopedEventName(name, id)
            })
        }
        $.fn.TouchSpin = function(options) {
            if (options === 'destroy') {
                this.each(function() {
                    var originalinput = $(this)
                      , originalinput_data = originalinput.data();
                    $(document).off(_scopeEventNames(['mouseup', 'touchend', 'touchcancel', 'mousemove', 'touchmove', 'scroll', 'scrollstart'], originalinput_data.spinnerid).join(' '))
                });
                return
            }
            var defaults = {
                min: 0,
                max: 100,
                initval: '',
                replacementval: '',
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: 'round',
                stepintervaldelay: 500,
                verticalbuttons: !1,
                verticalupclass: 'glyphicon glyphicon-chevron-up',
                verticaldownclass: 'glyphicon glyphicon-chevron-down',
                prefix: '',
                postfix: '',
                prefix_extraclass: '',
                postfix_extraclass: '',
                booster: !0,
                boostat: 10,
                maxboostedstep: !1,
                mousewheel: !0,
                buttondown_class: 'btn btn-default',
                buttonup_class: 'btn btn-default',
                buttondown_txt: '-',
                buttonup_txt: '+'
            };
            var attributeMap = {
                min: 'min',
                max: 'max',
                initval: 'init-val',
                replacementval: 'replacement-val',
                step: 'step',
                decimals: 'decimals',
                stepinterval: 'step-interval',
                verticalbuttons: 'vertical-buttons',
                verticalupclass: 'vertical-up-class',
                verticaldownclass: 'vertical-down-class',
                forcestepdivisibility: 'force-step-divisibility',
                stepintervaldelay: 'step-interval-delay',
                prefix: 'prefix',
                postfix: 'postfix',
                prefix_extraclass: 'prefix-extra-class',
                postfix_extraclass: 'postfix-extra-class',
                booster: 'booster',
                boostat: 'boostat',
                maxboostedstep: 'max-boosted-step',
                mousewheel: 'mouse-wheel',
                buttondown_class: 'button-down-class',
                buttonup_class: 'button-up-class',
                buttondown_txt: 'button-down-txt',
                buttonup_txt: 'button-up-txt'
            };
            return this.each(function() {
                var settings, originalinput = $(this), originalinput_data = originalinput.data(), container, elements, value, downSpinTimer, upSpinTimer, downDelayTimeout, upDelayTimeout, spincount = 0, spinning = !1;
                init();
                function init() {
                    if (originalinput.data('alreadyinitialized')) {
                        return
                    }
                    originalinput.data('alreadyinitialized', !0);
                    _currentSpinnerId += 1;
                    originalinput.data('spinnerid', _currentSpinnerId);
                    if (!originalinput.is('input')) {
                        console.log('Must be an input.');
                        return
                    }
                    _initSettings();
                    _setInitval();
                    _checkValue();
                    _buildHtml();
                    _initElements();
                    _hideEmptyPrefixPostfix();
                    _bindEvents();
                    _bindEventsInterface();
                    elements.input.css('display', 'block')
                }
                function _setInitval() {
                    if (settings.initval !== '' && originalinput.val() === '') {
                        originalinput.val(settings.initval)
                    }
                }
                function changeSettings(newsettings) {
                    _updateSettings(newsettings);
                    _checkValue();
                    var value = elements.input.val();
                    if (value !== '') {
                        value = Number(elements.input.val());
                        elements.input.val(value.toFixed(settings.decimals))
                    }
                }
                function _initSettings() {
                    settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options)
                }
                function _parseAttributes() {
                    var data = {};
                    $.each(attributeMap, function(key, value) {
                        var attrName = 'bts-' + value + '';
                        if (originalinput.is('[data-' + attrName + ']')) {
                            data[key] = originalinput.data(attrName)
                        }
                    });
                    return data
                }
                function _updateSettings(newsettings) {
                    settings = $.extend({}, settings, newsettings)
                }
                function _buildHtml() {
                    var initval = originalinput.val()
                      , parentelement = originalinput.parent();
                    if (initval !== '') {
                        initval = Number(initval).toFixed(settings.decimals)
                    }
                    originalinput.data('initvalue', initval).val(initval);
                    originalinput.addClass('form-control');
                    if (parentelement.hasClass('input-group')) {
                        _advanceInputGroup(parentelement)
                    } else {
                        _buildInputGroup()
                    }
                }
                function _advanceInputGroup(parentelement) {
                    parentelement.addClass('bootstrap-touchspin');
                    var prev = originalinput.prev()
                      , next = originalinput.next();
                    var downhtml, uphtml, prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>', postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';
                    if (prev.hasClass('input-group-btn')) {
                        downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
                        prev.append(downhtml)
                    } else {
                        downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
                        $(downhtml).insertBefore(originalinput)
                    }
                    if (next.hasClass('input-group-btn')) {
                        uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
                        next.prepend(uphtml)
                    } else {
                        uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
                        $(uphtml).insertAfter(originalinput)
                    }
                    $(prefixhtml).insertBefore(originalinput);
                    $(postfixhtml).insertAfter(originalinput);
                    container = parentelement
                }
                function _buildInputGroup() {
                    var html;
                    if (settings.verticalbuttons) {
                        html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>'
                    } else {
                        html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>'
                    }
                    container = $(html).insertBefore(originalinput);
                    $('.bootstrap-touchspin-prefix', container).after(originalinput);
                    if (originalinput.hasClass('input-sm')) {
                        container.addClass('input-group-sm')
                    } else if (originalinput.hasClass('input-lg')) {
                        container.addClass('input-group-lg')
                    }
                }
                function _initElements() {
                    elements = {
                        down: $('.bootstrap-touchspin-down', container),
                        up: $('.bootstrap-touchspin-up', container),
                        input: $('input', container),
                        prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
                        postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
                    }
                }
                function _hideEmptyPrefixPostfix() {
                    if (settings.prefix === '') {
                        elements.prefix.hide()
                    }
                    if (settings.postfix === '') {
                        elements.postfix.hide()
                    }
                }
                function _bindEvents() {
                    originalinput.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 38) {
                            if (spinning !== 'up') {
                                upOnce();
                                startUpSpin()
                            }
                            ev.preventDefault()
                        } else if (code === 40) {
                            if (spinning !== 'down') {
                                downOnce();
                                startDownSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    originalinput.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 38) {
                            stopSpin()
                        } else if (code === 40) {
                            stopSpin()
                        }
                    });
                    originalinput.on('blur', function() {
                        _checkValue()
                    });
                    elements.down.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            if (spinning !== 'down') {
                                downOnce();
                                startDownSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    elements.down.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            stopSpin()
                        }
                    });
                    elements.up.on('keydown', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            if (spinning !== 'up') {
                                upOnce();
                                startUpSpin()
                            }
                            ev.preventDefault()
                        }
                    });
                    elements.up.on('keyup', function(ev) {
                        var code = ev.keyCode || ev.which;
                        if (code === 32 || code === 13) {
                            stopSpin()
                        }
                    });
                    elements.down.on('mousedown.touchspin', function(ev) {
                        elements.down.off('touchstart.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        downOnce();
                        startDownSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.down.on('touchstart.touchspin', function(ev) {
                        elements.down.off('mousedown.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        downOnce();
                        startDownSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('mousedown.touchspin', function(ev) {
                        elements.up.off('touchstart.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        upOnce();
                        startUpSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('touchstart.touchspin', function(ev) {
                        elements.up.off('mousedown.touchspin');
                        if (originalinput.is(':disabled')) {
                            return
                        }
                        upOnce();
                        startUpSpin();
                        ev.preventDefault();
                        ev.stopPropagation()
                    });
                    elements.up.on('mouseout touchleave touchend touchcancel', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        stopSpin()
                    });
                    elements.down.on('mouseout touchleave touchend touchcancel', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        stopSpin()
                    });
                    elements.down.on('mousemove touchmove', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        ev.preventDefault()
                    });
                    elements.up.on('mousemove touchmove', function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.stopPropagation();
                        ev.preventDefault()
                    });
                    $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.preventDefault();
                        stopSpin()
                    });
                    $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function(ev) {
                        if (!spinning) {
                            return
                        }
                        ev.preventDefault();
                        stopSpin()
                    });
                    originalinput.on('mousewheel DOMMouseScroll', function(ev) {
                        if (!settings.mousewheel || !originalinput.is(':focus')) {
                            return
                        }
                        var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
                        ev.stopPropagation();
                        ev.preventDefault();
                        if (delta < 0) {
                            downOnce()
                        } else {
                            upOnce()
                        }
                    })
                }
                function _bindEventsInterface() {
                    originalinput.on('touchspin.uponce', function() {
                        stopSpin();
                        upOnce()
                    });
                    originalinput.on('touchspin.downonce', function() {
                        stopSpin();
                        downOnce()
                    });
                    originalinput.on('touchspin.startupspin', function() {
                        startUpSpin()
                    });
                    originalinput.on('touchspin.startdownspin', function() {
                        startDownSpin()
                    });
                    originalinput.on('touchspin.stopspin', function() {
                        stopSpin()
                    });
                    originalinput.on('touchspin.updatesettings', function(e, newsettings) {
                        changeSettings(newsettings)
                    })
                }
                function _forcestepdivisibility(value) {
                    switch (settings.forcestepdivisibility) {
                    case 'round':
                        return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
                    case 'floor':
                        return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
                    case 'ceil':
                        return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
                    default:
                        return value
                    }
                }
                function _checkValue() {
                    var val, parsedval, returnval;
                    val = originalinput.val();
                    if (val === '') {
                        if (settings.replacementval !== '') {
                            originalinput.val(settings.replacementval);
                            originalinput.trigger('change')
                        }
                        return
                    }
                    if (settings.decimals > 0 && val === '.') {
                        return
                    }
                    parsedval = parseFloat(val);
                    if (isNaN(parsedval)) {
                        if (settings.replacementval !== '') {
                            parsedval = settings.replacementval
                        } else {
                            parsedval = 0
                        }
                    }
                    returnval = parsedval;
                    if (parsedval.toString() !== val) {
                        returnval = parsedval
                    }
                    if (parsedval < settings.min) {
                        returnval = settings.min
                    }
                    if (parsedval > settings.max) {
                        returnval = settings.max
                    }
                    returnval = _forcestepdivisibility(returnval);
                    if (Number(val).toString() !== returnval.toString()) {
                        originalinput.val(returnval);
                        originalinput.trigger('change')
                    }
                }
                function _getBoostedStep() {
                    if (!settings.booster) {
                        return settings.step
                    } else {
                        var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
                        if (settings.maxboostedstep) {
                            if (boosted > settings.maxboostedstep) {
                                boosted = settings.maxboostedstep;
                                value = Math.round((value / boosted)) * boosted
                            }
                        }
                        return Math.max(settings.step, boosted)
                    }
                }
                function upOnce() {
                    _checkValue();
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        value = 0
                    }
                    var initvalue = value
                      , boostedstep = _getBoostedStep();
                    value = value + boostedstep;
                    if (value > settings.max) {
                        value = settings.max;
                        originalinput.trigger('touchspin.on.max');
                        stopSpin()
                    }
                    elements.input.val(Number(value).toFixed(settings.decimals));
                    if (initvalue !== value) {
                        originalinput.trigger('change')
                    }
                }
                function downOnce() {
                    _checkValue();
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        value = 0
                    }
                    var initvalue = value
                      , boostedstep = _getBoostedStep();
                    value = value - boostedstep;
                    if (value < settings.min) {
                        value = settings.min;
                        originalinput.trigger('touchspin.on.min');
                        stopSpin()
                    }
                    elements.input.val(value.toFixed(settings.decimals));
                    if (initvalue !== value) {
                        originalinput.trigger('change')
                    }
                }
                function startDownSpin() {
                    stopSpin();
                    spincount = 0;
                    spinning = 'down';
                    originalinput.trigger('touchspin.on.startspin');
                    originalinput.trigger('touchspin.on.startdownspin');
                    downDelayTimeout = setTimeout(function() {
                        downSpinTimer = setInterval(function() {
                            spincount++;
                            downOnce()
                        }, settings.stepinterval)
                    }, settings.stepintervaldelay)
                }
                function startUpSpin() {
                    stopSpin();
                    spincount = 0;
                    spinning = 'up';
                    originalinput.trigger('touchspin.on.startspin');
                    originalinput.trigger('touchspin.on.startupspin');
                    upDelayTimeout = setTimeout(function() {
                        upSpinTimer = setInterval(function() {
                            spincount++;
                            upOnce()
                        }, settings.stepinterval)
                    }, settings.stepintervaldelay)
                }
                function stopSpin() {
                    clearTimeout(downDelayTimeout);
                    clearTimeout(upDelayTimeout);
                    clearInterval(downSpinTimer);
                    clearInterval(upSpinTimer);
                    switch (spinning) {
                    case 'up':
                        originalinput.trigger('touchspin.on.stopupspin');
                        originalinput.trigger('touchspin.on.stopspin');
                        break;
                    case 'down':
                        originalinput.trigger('touchspin.on.stopdownspin');
                        originalinput.trigger('touchspin.on.stopspin');
                        break
                    }
                    spincount = 0;
                    spinning = !1
                }
            })
        }
    }
    )(jQuery);
    /***/
}
), (function(module, exports) {
    !function(a, b, c, d) {
        function e(b, c) {
            this.settings = null,
            this.options = a.extend({}, e.Defaults, c),
            this.$element = a(b),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)),
            a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)),
            a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        },
        e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        e.Type = {
            Event: "event",
            State: "state"
        },
        e.Plugins = {},
        e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || ""
                  , c = !this.settings.autoWidth
                  , d = this.settings.rtl
                  , e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
                !c && this.$stage.children().css(e),
                a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                  , c = null
                  , d = this._items.length
                  , e = !this.settings.autoWidth
                  , f = [];
                for (a.items = {
                    merge: !1,
                    width: b
                }; d--; )
                    c = this._mergers[d],
                    c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                    a.items.merge = c > 1 || a.items.merge,
                    f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = []
                  , c = this._items
                  , d = this.settings
                  , e = Math.max(2 * d.items, 4)
                  , f = 2 * Math.ceil(c.length / 2)
                  , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
                  , h = ""
                  , i = "";
                for (g /= 2; g--; )
                    b.push(this.normalize(b.length / 2, !0)),
                    h += c[b[b.length - 1]][0].outerHTML,
                    b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                    i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b,
                a(h).addClass("cloned").appendTo(this.$stage),
                a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                    d = f[c - 1] || 0,
                    e = this._widths[this.relative(c)] + this.settings.margin,
                    f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding
                  , b = this._coordinates
                  , c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length
                  , c = !this.settings.autoWidth
                  , d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--; )
                        a.css.width = this._widths[this.relative(b)],
                        d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width,
                    d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0,
                a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
                this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
                for (c = 0,
                d = this._coordinates.length; d > c; c++)
                    a = this._coordinates[c - 1] || 0,
                    b = Math.abs(this._coordinates[c]) + f * e,
                    (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                this.settings.center && (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"))
            }
        }],
        e.prototype.initialize = function() {
            if (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
            this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"),
                c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
                e = this.$element.children(c).width(),
                b.length && 0 >= e && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass),
            this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
            this.$element.append(this.$stage.parent()),
            this.replace(this.$element.children().not(this.$stage.parent())),
            this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
            this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized")
        }
        ,
        e.prototype.setup = function() {
            var b = this.viewport()
              , c = this.options.responsive
              , d = -1
              , e = null;
            c ? (a.each(c, function(a) {
                b >= a && a > d && (d = Number(a))
            }),
            e = a.extend({}, this.options, c[d]),
            "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
            delete e.responsive,
            e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
            this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }),
            this._breakpoint = d,
            this.settings = e,
            this.invalidate("settings"),
            this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }
        ,
        e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
            this.settings.merge = !1)
        }
        ,
        e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
            this.trigger("prepared", {
                content: c.data
            }),
            c.data
        }
        ,
        e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b; )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
                b++;
            this._invalidated = {},
            !this.is("valid") && this.enter("valid")
        }
        ,
        e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }
        ,
        e.prototype.refresh = function() {
            this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed")
        }
        ,
        e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer),
            this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }
        ,
        e.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
            !1) : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized"))) : !1 : !1
        }
        ,
        e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
            this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
            this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })),
            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
            this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }
        ,
        e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
            d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(),
            d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }),
            this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
            this.invalidate("position")),
            this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
            this.speed(0),
            this._drag.time = (new Date).getTime(),
            this._drag.target = a(b.target),
            this._drag.stage.start = d,
            this._drag.stage.current = d,
            this._drag.pointer = this.pointer(b),
            a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
            a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
                Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"))
            }, this)))
        }
        ,
        e.prototype.onDragMove = function(a) {
            var b = null
              , c = null
              , d = null
              , e = this.difference(this._drag.pointer, this.pointer(a))
              , f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(),
            this.settings.loop ? (b = this.coordinates(this.minimum()),
            c = this.coordinates(this.maximum() + 1) - b,
            f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
            c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
            d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
            f.x = Math.max(Math.min(f.x, b + d), c + d)),
            this._drag.stage.current = f,
            this.animate(f.x))
        }
        ,
        e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
              , e = this._drag.stage.current
              , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
            this.invalidate("position"),
            this.update(),
            this._drag.direction = f,
            (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })),
            this.is("dragging") && (this.leave("dragging"),
            this.trigger("dragged"))
        }
        ,
        e.prototype.closest = function(b, c) {
            var d = -1
              , e = 30
              , f = this.width()
              , g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                return "left" === c && b > h - e && h + e > b ? d = a : "right" === c && b > h - f - e && h - f + e > b ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                -1 === d
            }, this)),
            this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
            d
        }
        ,
        e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
            c && (this.enter("animating"),
            this.trigger("translate")),
            a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }
        ,
        e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }
        ,
        e.prototype.current = function(a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (a = this.normalize(a),
            this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)),
                this._current = a,
                this.invalidate("position"),
                this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }
        ,
        e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0,
            this.is("valid") && this.leave("valid")),
            a.map(this._invalidated, function(a, b) {
                return b
            })
        }
        ,
        e.prototype.reset = function(a) {
            a = this.normalize(a),
            a !== d && (this._speed = 0,
            this._current = a,
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(a)),
            this.release(["translate", "translated"]))
        }
        ,
        e.prototype.normalize = function(a, b) {
            var c = this._items.length
              , e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
            a
        }
        ,
        e.prototype.relative = function(a) {
            return a -= this._clones.length / 2,
            this.normalize(a, !0)
        }
        ,
        e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings, f = this._coordinates.length;
            if (e.loop)
                f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length,
                c = this._items[--b].width(),
                d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin,
                !(c > d)); )
                    ;
                f = b + 1
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2),
            Math.max(f, 0)
        }
        ,
        e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }
        ,
        e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0),
            this._items[a])
        }
        ,
        e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
            this._mergers[a])
        }
        ,
        e.prototype.clones = function(b) {
            var c = this._clones.length / 2
              , e = c + this._items.length
              , f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }
        ,
        e.prototype.speed = function(a) {
            return a !== d && (this._speed = a),
            this._speed
        }
        ,
        e.prototype.coordinates = function(b) {
            var c, e = 1, f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
            f = b + 1),
            c = this._coordinates[b],
            c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
            c = Math.ceil(c))
        }
        ,
        e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }
        ,
        e.prototype.to = function(a, b) {
            var c = this.current()
              , d = null
              , e = a - this.relative(c)
              , f = (e > 0) - (0 > e)
              , g = this._items.length
              , h = this.minimum()
              , i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
            a = c + e,
            d = ((a - h) % g + g) % g + h,
            d !== a && i >= d - e && d - e > 0 && (c = d - e,
            a = d,
            this.reset(c))) : this.settings.rewind ? (i += 1,
            a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
            this.speed(this.duration(c, a, b)),
            this.current(a),
            this.$element.is(":visible") && this.update()
        }
        ,
        e.prototype.next = function(a) {
            a = a || !1,
            this.to(this.relative(this.current()) + 1, a)
        }
        ,
        e.prototype.prev = function(a) {
            a = a || !1,
            this.to(this.relative(this.current()) - 1, a)
        }
        ,
        e.prototype.onTransitionEnd = function(a) {
            return a !== d && (a.stopPropagation(),
            (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"),
            void this.trigger("translated"))
        }
        ,
        e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b)
                d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth)
                d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth)
                    throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }
        ,
        e.prototype.replace = function(b) {
            this.$stage.empty(),
            this._items = [],
            b && (b = b instanceof jQuery ? b : a(b)),
            this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
            b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)),
            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
            this.invalidate("items")
        }
        ,
        e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0),
            b = b instanceof jQuery ? b : a(b),
            this.trigger("add", {
                content: b,
                position: c
            }),
            b = this.prepare(b),
            0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
            this._items[e] && this.reset(this._items[e].index()),
            this.invalidate("items"),
            this.trigger("added", {
                content: b,
                position: c
            })
        }
        ,
        e.prototype.remove = function(a) {
            a = this.normalize(a, !0),
            a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }),
            this._items[a].remove(),
            this._items.splice(a, 1),
            this._mergers.splice(a, 1),
            this.invalidate("items"),
            this.trigger("removed", {
                content: null,
                position: a
            }))
        }
        ,
        e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"),
                c = a(c),
                a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }
        ,
        e.prototype.destroy = function() {
            this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            a(c).off(".owl.core"),
            this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer),
            this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins)
                this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
        }
        ,
        e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
            }
        }
        ,
        e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }
        ,
        e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
        ,
        e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            }
              , i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase())
              , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }),
            this.register({
                type: e.Type.Event,
                name: b
            }),
            this.$element.trigger(j),
            this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
            j
        }
        ,
        e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0),
                this._states.current[b]++
            }, this))
        }
        ,
        e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }
        ,
        e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}),
                !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }
                    ,
                    a.event.special[b.name].owl = !0
                }
            } else
                b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
                this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                    return a.inArray(c, this._states.tags[b.name]) === d
                }, this)))
        }
        ,
        e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }
        ,
        e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }
        ,
        e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event,
            a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
            a.pageX ? (c.x = a.pageX,
            c.y = a.pageY) : (c.x = a.clientX,
            c.y = a.clientY),
            c
        }
        ,
        e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }
        ,
        e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }
        ,
        a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this)
                  , f = d.data("owl.carousel");
                f || (f = new e(this,"object" == typeof b && b),
                d.data("owl.carousel", f),
                a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }),
                    f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                        f[c].apply(this, [].slice.call(arguments, 1)),
                        this.release([c]))
                    }, f))
                })),
                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }
        ,
        a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._interval = null,
            this._visible = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
        e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"),
            this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }
        ,
        e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
            this._core.$element.toggleClass("owl-hidden", !this._visible),
            this._visible && this._core.invalidate("width") && this._core.refresh())
        }
        ,
        e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._loaded = [],
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e; )
                            this.load(h / 2 + this._core.relative(g)),
                            h && a.each(this._core.clones(this._core.relative(g)), i),
                            g++
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        },
        e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c)
              , e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"),
                f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1),
                    this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image,
                e.onload = a.proxy(function() {
                    f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1"
                    }),
                    this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this),
                e.src = g)
            }, this)),
            this._loaded.push(d.get(0)))
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
        e.prototype.update = function() {
            var b = this._core._current
              , c = b + this._core.settings.items
              , d = this._core.$stage.children().toArray().slice(b, c)
              , e = []
              , f = 0;
            a.each(d, function(b, c) {
                e.push(a(c).height())
            }),
            f = Math.max.apply(null, e),
            this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._videos = {},
            this._playing = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"),
                        this.fetch(c, a(b.content)))
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers),
            this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
        e.prototype.fetch = function(a, b) {
            var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }()
              , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
              , e = a.attr("data-width") || this._core.settings.videoWidth
              , f = a.attr("data-height") || this._core.settings.videoHeight
              , g = a.attr("href");
            if (!g)
                throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
            d[3].indexOf("youtu") > -1)
                c = "youtube";
            else if (d[3].indexOf("vimeo") > -1)
                c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6],
            this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            },
            b.attr("data-video", g),
            this.thumbnail(a, this._videos[g])
        }
        ,
        e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
                e = '<div class="owl-video-play-icon"></div>',
                d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
                b.after(d),
                b.after(e)
            };
            return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
            this._core.settings.lazyLoad && (i = "data-src",
            j = "owl-lazy"),
            h.length ? (l(h.attr(i)),
            h.remove(),
            !1) : void ("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
            l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large,
                    l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a.framegrab_url,
                    l(f)
                }
            }))
        }
        ,
        e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"),
            this._playing.find(".owl-video-frame").remove(),
            this._playing.removeClass("owl-video-playing"),
            this._playing = null,
            this._core.leave("playing"),
            this._core.trigger("stopped", null, "video")
        }
        ,
        e.prototype.play = function(b) {
            var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"),
            this._core.trigger("play", null, "video"),
            e = this._core.items(this._core.relative(e.index())),
            this._core.reset(e.index()),
            "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
            a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
            this._playing = e.addClass("owl-video-playing"))
        }
        ,
        e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b,
            this.core.options = a.extend({}, e.Defaults, this.core.options),
            this.swapping = !0,
            this.previous = d,
            this.next = d,
            this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                    this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            },
            this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
        e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)),
                f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }
        ,
        e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
            this.core.onTransitionEnd()
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null);
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._timeout = null,
            this._paused = !1,
            this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            },
            this._core.$element.on(this._handlers),
            this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
        e.prototype.play = function(a, b) {
            this._paused = !1,
            this._core.is("rotating") || (this._core.enter("rotating"),
            this._setAutoPlayInterval())
        }
        ,
        e.prototype._getNextTimeout = function(d, e) {
            return this._timeout && b.clearTimeout(this._timeout),
            b.setTimeout(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout)
        }
        ,
        e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }
        ,
        e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearTimeout(this._timeout),
            this._core.leave("rotating"))
        }
        ,
        e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b,
            this._initialized = !1,
            this._pages = [],
            this._controls = {},
            this._templates = [],
            this.$element = this._core.$element,
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            },
            this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    this._initialized = !0,
                    this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"))
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
        e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
            this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)),
            this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)),
            c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
            this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
            this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(),
                this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides)
                this._core[b] = a.proxy(this[b], this)
        }
        ,
        e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers)
                this.$element.off(a, this._handlers[a]);
            for (b in this._controls)
                this._controls[b].remove();
            for (d in this.overides)
                this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        }
        ,
        e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
            g.dots || "page" == g.slideBy)
                for (this._pages = [],
                a = d,
                b = 0,
                c = 0; e > a; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }),
                        Math.min(f, a - d) === f)
                            break;
                        b = 0,
                        ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }
        ,
        e.prototype.draw = function() {
            var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d),
            c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
            this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
            this._controls.$absolute.toggleClass("disabled", !c.dots || d),
            c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
            c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }
        ,
        e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }
        ,
        e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }
        ,
        e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
            d = this._pages.length,
            b ? ++c : --c,
            c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
            d = this._core.items().length,
            b ? c += e.slideBy : c -= e.slideBy),
            c
        }
        ,
        e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }
        ,
        e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }
        ,
        e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length,
            a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c,
            this._hashes = {},
            this.$element = this._core.$element,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c)
                            return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current()))
                          , e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                        if (!e || b.location.hash.slice(1) === e)
                            return;
                        b.location.hash = e
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers),
            a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1)
                  , e = this._core.$stage.children()
                  , f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        },
        e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers)
                this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this))
                "function" != typeof this[d] && (this[d] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var e = !1
              , f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                return g[b] !== d ? (e = c ? b : !0,
                !1) : void 0
            }),
            e
        }
        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style
          , h = "Webkit Moz O ms".split(" ")
          , i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        }
          , j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
        j.csstransitions() && (a.support.transition = new String(f("transition")),
        a.support.transition.end = i.transition.end[a.support.transition]),
        j.cssanimations() && (a.support.animation = new String(f("animation")),
        a.support.animation.end = i.animation.end[a.support.animation]),
        j.csstransforms() && (a.support.transform = new String(f("transform")),
        a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
    /***/
}
), (function(module, exports) {
    (function($) {
        $.fn.extend({
            slimScroll: function(options) {
                var defaults = {
                    width: 'auto',
                    height: '250px',
                    size: '7px',
                    color: '#000',
                    position: 'right',
                    distance: '1px',
                    start: 'top',
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: '#333',
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: 'slimScrollRail',
                    barClass: 'slimScrollBar',
                    wrapperClass: 'slimScrollDiv',
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: '7px',
                    railBorderRadius: '7px'
                };
                var o = $.extend(defaults, options);
                this.each(function() {
                    var isOverPanel, isOverBar, isDragg, queueHide, touchDif, barHeight, percentScroll, lastScroll, divS = '<div></div>', minBarHeight = 30, releaseScroll = !1;
                    var me = $(this);
                    if (me.parent().hasClass(o.wrapperClass)) {
                        var offset = me.scrollTop();
                        bar = me.siblings('.' + o.barClass);
                        rail = me.siblings('.' + o.railClass);
                        getBarHeight();
                        if ($.isPlainObject(options)) {
                            if ('height'in options && options.height == 'auto') {
                                me.parent().css('height', 'auto');
                                me.css('height', 'auto');
                                var height = me.parent().parent().height();
                                me.parent().css('height', height);
                                me.css('height', height)
                            } else if ('height'in options) {
                                var h = options.height;
                                me.parent().css('height', h);
                                me.css('height', h)
                            }
                            if ('scrollTo'in options) {
                                offset = parseInt(o.scrollTo)
                            } else if ('scrollBy'in options) {
                                offset += parseInt(o.scrollBy)
                            } else if ('destroy'in options) {
                                bar.remove();
                                rail.remove();
                                me.unwrap();
                                return
                            }
                            scrollContent(offset, !1, !0)
                        }
                        return
                    } else if ($.isPlainObject(options)) {
                        if ('destroy'in options) {
                            return
                        }
                    }
                    o.height = (o.height == 'auto') ? me.parent().height() : o.height;
                    var wrapper = $(divS).addClass(o.wrapperClass).css({
                        position: 'relative',
                        overflow: 'hidden',
                        width: o.width,
                        height: o.height
                    });
                    me.css({
                        overflow: 'hidden',
                        width: o.width,
                        height: o.height
                    });
                    var rail = $(divS).addClass(o.railClass).css({
                        width: o.size,
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
                        'border-radius': o.railBorderRadius,
                        background: o.railColor,
                        opacity: o.railOpacity,
                        zIndex: 90
                    });
                    var bar = $(divS).addClass(o.barClass).css({
                        background: o.color,
                        width: o.size,
                        position: 'absolute',
                        top: 0,
                        opacity: o.opacity,
                        display: o.alwaysVisible ? 'block' : 'none',
                        'border-radius': o.borderRadius,
                        BorderRadius: o.borderRadius,
                        MozBorderRadius: o.borderRadius,
                        WebkitBorderRadius: o.borderRadius,
                        zIndex: 99
                    });
                    var posCss = (o.position == 'right') ? {
                        right: o.distance
                    } : {
                        left: o.distance
                    };
                    rail.css(posCss);
                    bar.css(posCss);
                    me.wrap(wrapper);
                    me.parent().append(bar);
                    me.parent().append(rail);
                    if (o.railDraggable) {
                        bar.bind("mousedown", function(e) {
                            var $doc = $(document);
                            isDragg = !0;
                            t = parseFloat(bar.css('top'));
                            pageY = e.pageY;
                            $doc.bind("mousemove.slimscroll", function(e) {
                                currTop = t + e.pageY - pageY;
                                bar.css('top', currTop);
                                scrollContent(0, bar.position().top, !1)
                            });
                            $doc.bind("mouseup.slimscroll", function(e) {
                                isDragg = !1;
                                hideBar();
                                $doc.unbind('.slimscroll')
                            });
                            return !1
                        }).bind("selectstart.slimscroll", function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            return !1
                        })
                    }
                    rail.hover(function() {
                        showBar()
                    }, function() {
                        hideBar()
                    });
                    bar.hover(function() {
                        isOverBar = !0
                    }, function() {
                        isOverBar = !1
                    });
                    me.hover(function() {
                        isOverPanel = !0;
                        showBar();
                        hideBar()
                    }, function() {
                        isOverPanel = !1;
                        hideBar()
                    });
                    me.bind('touchstart', function(e, b) {
                        if (e.originalEvent.touches.length) {
                            touchDif = e.originalEvent.touches[0].pageY
                        }
                    });
                    me.bind('touchmove', function(e) {
                        if (!releaseScroll) {
                            e.originalEvent.preventDefault()
                        }
                        if (e.originalEvent.touches.length) {
                            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
                            scrollContent(diff, !0);
                            touchDif = e.originalEvent.touches[0].pageY
                        }
                    });
                    getBarHeight();
                    if (o.start === 'bottom') {
                        bar.css({
                            top: me.outerHeight() - bar.outerHeight()
                        });
                        scrollContent(0, !0)
                    } else if (o.start !== 'top') {
                        scrollContent($(o.start).position().top, null, !0);
                        if (!o.alwaysVisible) {
                            bar.hide()
                        }
                    }
                    attachWheel(this);
                    function _onWheel(e) {
                        if (!isOverPanel) {
                            return
                        }
                        var e = e || window.event;
                        var delta = 0;
                        if (e.wheelDelta) {
                            delta = -e.wheelDelta / 120
                        }
                        if (e.detail) {
                            delta = e.detail / 3
                        }
                        var target = e.target || e.srcTarget || e.srcElement;
                        if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
                            scrollContent(delta, !0)
                        }
                        if (e.preventDefault && !releaseScroll) {
                            e.preventDefault()
                        }
                        if (!releaseScroll) {
                            e.returnValue = !1
                        }
                    }
                    function scrollContent(y, isWheel, isJump) {
                        releaseScroll = !1;
                        var delta = y;
                        var maxTop = me.outerHeight() - bar.outerHeight();
                        if (isWheel) {
                            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();
                            delta = Math.min(Math.max(delta, 0), maxTop);
                            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
                            bar.css({
                                top: delta + 'px'
                            })
                        }
                        percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
                        delta = percentScroll * (me[0].scrollHeight - me.outerHeight());
                        if (isJump) {
                            delta = y;
                            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
                            bar.css({
                                top: offsetTop + 'px'
                            })
                        }
                        me.scrollTop(delta);
                        me.trigger('slimscrolling', ~~delta);
                        showBar();
                        hideBar()
                    }
                    function attachWheel(target) {
                        if (window.addEventListener) {
                            target.addEventListener('DOMMouseScroll', _onWheel, !1);
                            target.addEventListener('mousewheel', _onWheel, !1)
                        } else {
                            document.attachEvent("onmousewheel", _onWheel)
                        }
                    }
                    function getBarHeight() {
                        barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
                        bar.css({
                            height: barHeight + 'px'
                        });
                        var display = barHeight == me.outerHeight() ? 'none' : 'block';
                        bar.css({
                            display: display
                        })
                    }
                    function showBar() {
                        getBarHeight();
                        clearTimeout(queueHide);
                        if (percentScroll == ~~percentScroll) {
                            releaseScroll = o.allowPageScroll;
                            if (lastScroll != percentScroll) {
                                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                                me.trigger('slimscroll', msg)
                            }
                        } else {
                            releaseScroll = !1
                        }
                        lastScroll = percentScroll;
                        if (barHeight >= me.outerHeight()) {
                            releaseScroll = !0;
                            return
                        }
                        bar.stop(!0, !0).fadeIn('fast');
                        if (o.railVisible) {
                            rail.stop(!0, !0).fadeIn('fast')
                        }
                    }
                    function hideBar() {
                        if (!o.alwaysVisible) {
                            queueHide = setTimeout(function() {
                                if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                                    bar.fadeOut('slow');
                                    rail.fadeOut('slow')
                                }
                            }, 1000)
                        }
                    }
                });
                return this
            }
        });
        $.fn.extend({
            slimscroll: $.fn.slimScroll
        })
    }
    )(jQuery);
    /***/
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(root, factory) {
        if (!0) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10)],
            __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else if (typeof exports === 'object') {
            module.exports = factory(require('jquery'))
        } else {
            root.lightbox = factory(root.jQuery)
        }
    }(this, function($) {
        function Lightbox(options) {
            this.album = [];
            this.currentImageIndex = void 0;
            this.init();
            this.options = $.extend({}, this.constructor.defaults);
            this.option(options)
        }
        Lightbox.defaults = {
            albumLabel: 'Image %1 of %2',
            alwaysShowNavOnTouchDevices: !1,
            fadeDuration: 600,
            fitImagesInViewport: !0,
            imageFadeDuration: 600,
            positionFromTop: 50,
            resizeDuration: 700,
            showImageNumberLabel: !0,
            wrapAround: !1,
            disableScrolling: !1,
            sanitizeTitle: !1
        };
        Lightbox.prototype.option = function(options) {
            $.extend(this.options, options)
        }
        ;
        Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
            return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages)
        }
        ;
        Lightbox.prototype.init = function() {
            var self = this;
            $(document).ready(function() {
                self.enable();
                self.build()
            })
        }
        ;
        Lightbox.prototype.enable = function() {
            var self = this;
            $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
                self.start($(event.currentTarget));
                return !1
            })
        }
        ;
        Lightbox.prototype.build = function() {
            var self = this;
            $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));
            this.$lightbox = $('#lightbox');
            this.$overlay = $('#lightboxOverlay');
            this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
            this.$container = this.$lightbox.find('.lb-container');
            this.$image = this.$lightbox.find('.lb-image');
            this.$nav = this.$lightbox.find('.lb-nav');
            this.containerPadding = {
                top: parseInt(this.$container.css('padding-top'), 10),
                right: parseInt(this.$container.css('padding-right'), 10),
                bottom: parseInt(this.$container.css('padding-bottom'), 10),
                left: parseInt(this.$container.css('padding-left'), 10)
            };
            this.imageBorderWidth = {
                top: parseInt(this.$image.css('border-top-width'), 10),
                right: parseInt(this.$image.css('border-right-width'), 10),
                bottom: parseInt(this.$image.css('border-bottom-width'), 10),
                left: parseInt(this.$image.css('border-left-width'), 10)
            };
            this.$overlay.hide().on('click', function() {
                self.end();
                return !1
            });
            this.$lightbox.hide().on('click', function(event) {
                if ($(event.target).attr('id') === 'lightbox') {
                    self.end()
                }
                return !1
            });
            this.$outerContainer.on('click', function(event) {
                if ($(event.target).attr('id') === 'lightbox') {
                    self.end()
                }
                return !1
            });
            this.$lightbox.find('.lb-prev').on('click', function() {
                if (self.currentImageIndex === 0) {
                    self.changeImage(self.album.length - 1)
                } else {
                    self.changeImage(self.currentImageIndex - 1)
                }
                return !1
            });
            this.$lightbox.find('.lb-next').on('click', function() {
                if (self.currentImageIndex === self.album.length - 1) {
                    self.changeImage(0)
                } else {
                    self.changeImage(self.currentImageIndex + 1)
                }
                return !1
            });
            this.$nav.on('mousedown', function(event) {
                if (event.which === 3) {
                    self.$nav.css('pointer-events', 'none');
                    self.$lightbox.one('contextmenu', function() {
                        setTimeout(function() {
                            this.$nav.css('pointer-events', 'auto')
                        }
                        .bind(self), 0)
                    })
                }
            });
            this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
                self.end();
                return !1
            })
        }
        ;
        Lightbox.prototype.start = function($link) {
            var self = this;
            var $window = $(window);
            $window.on('resize', $.proxy(this.sizeOverlay, this));
            $('select, object, embed').css({
                visibility: 'hidden'
            });
            this.sizeOverlay();
            this.album = [];
            var imageNumber = 0;
            function addToAlbum($link) {
                self.album.push({
                    link: $link.attr('href'),
                    title: $link.attr('data-title') || $link.attr('title')
                })
            }
            var dataLightboxValue = $link.attr('data-lightbox');
            var $links;
            if (dataLightboxValue) {
                $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
                for (var i = 0; i < $links.length; i = ++i) {
                    addToAlbum($($links[i]));
                    if ($links[i] === $link[0]) {
                        imageNumber = i
                    }
                }
            } else {
                if ($link.attr('rel') === 'lightbox') {
                    addToAlbum($link)
                } else {
                    $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
                    for (var j = 0; j < $links.length; j = ++j) {
                        addToAlbum($($links[j]));
                        if ($links[j] === $link[0]) {
                            imageNumber = j
                        }
                    }
                }
            }
            var top = $window.scrollTop() + this.options.positionFromTop;
            var left = $window.scrollLeft();
            this.$lightbox.css({
                top: top + 'px',
                left: left + 'px'
            }).fadeIn(this.options.fadeDuration);
            if (this.options.disableScrolling) {
                $('body').addClass('lb-disable-scrolling')
            }
            this.changeImage(imageNumber)
        }
        ;
        Lightbox.prototype.changeImage = function(imageNumber) {
            var self = this;
            this.disableKeyboardNav();
            var $image = this.$lightbox.find('.lb-image');
            this.$overlay.fadeIn(this.options.fadeDuration);
            $('.lb-loader').fadeIn('slow');
            this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
            this.$outerContainer.addClass('animating');
            var preloader = new Image();
            preloader.onload = function() {
                var $preloader;
                var imageHeight;
                var imageWidth;
                var maxImageHeight;
                var maxImageWidth;
                var windowHeight;
                var windowWidth;
                $image.attr('src', self.album[imageNumber].link);
                $preloader = $(preloader);
                $image.width(preloader.width);
                $image.height(preloader.height);
                if (self.options.fitImagesInViewport) {
                    windowWidth = $(window).width();
                    windowHeight = $(window).height();
                    maxImageWidth = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
                    maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;
                    if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
                        maxImageWidth = self.options.maxWidth
                    }
                    if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
                        maxImageHeight = self.options.maxHeight
                    }
                    if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
                        if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
                            imageWidth = maxImageWidth;
                            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
                            $image.width(imageWidth);
                            $image.height(imageHeight)
                        } else {
                            imageHeight = maxImageHeight;
                            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
                            $image.width(imageWidth);
                            $image.height(imageHeight)
                        }
                    }
                }
                self.sizeContainer($image.width(), $image.height())
            }
            ;
            preloader.src = this.album[imageNumber].link;
            this.currentImageIndex = imageNumber
        }
        ;
        Lightbox.prototype.sizeOverlay = function() {
            this.$overlay.width($(document).width()).height($(document).height())
        }
        ;
        Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
            var self = this;
            var oldWidth = this.$outerContainer.outerWidth();
            var oldHeight = this.$outerContainer.outerHeight();
            var newWidth = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
            var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
            function postResize() {
                self.$lightbox.find('.lb-dataContainer').width(newWidth);
                self.$lightbox.find('.lb-prevLink').height(newHeight);
                self.$lightbox.find('.lb-nextLink').height(newHeight);
                self.showImage()
            }
            if (oldWidth !== newWidth || oldHeight !== newHeight) {
                this.$outerContainer.animate({
                    width: newWidth,
                    height: newHeight
                }, this.options.resizeDuration, 'swing', function() {
                    postResize()
                })
            } else {
                postResize()
            }
        }
        ;
        Lightbox.prototype.showImage = function() {
            this.$lightbox.find('.lb-loader').stop(!0).hide();
            this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);
            this.updateNav();
            this.updateDetails();
            this.preloadNeighboringImages();
            this.enableKeyboardNav()
        }
        ;
        Lightbox.prototype.updateNav = function() {
            var alwaysShowNav = !1;
            try {
                document.createEvent('TouchEvent');
                alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? !0 : !1
            } catch (e) {}
            this.$lightbox.find('.lb-nav').show();
            if (this.album.length > 1) {
                if (this.options.wrapAround) {
                    if (alwaysShowNav) {
                        this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1')
                    }
                    this.$lightbox.find('.lb-prev, .lb-next').show()
                } else {
                    if (this.currentImageIndex > 0) {
                        this.$lightbox.find('.lb-prev').show();
                        if (alwaysShowNav) {
                            this.$lightbox.find('.lb-prev').css('opacity', '1')
                        }
                    }
                    if (this.currentImageIndex < this.album.length - 1) {
                        this.$lightbox.find('.lb-next').show();
                        if (alwaysShowNav) {
                            this.$lightbox.find('.lb-next').css('opacity', '1')
                        }
                    }
                }
            }
        }
        ;
        Lightbox.prototype.updateDetails = function() {
            var self = this;
            if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== '') {
                var $caption = this.$lightbox.find('.lb-caption');
                if (this.options.sanitizeTitle) {
                    $caption.text(this.album[this.currentImageIndex].title)
                } else {
                    $caption.html(this.album[this.currentImageIndex].title)
                }
                $caption.fadeIn('fast').find('a').on('click', function(event) {
                    if ($(this).attr('target') !== undefined) {
                        window.open($(this).attr('href'), $(this).attr('target'))
                    } else {
                        location.href = $(this).attr('href')
                    }
                })
            }
            if (this.album.length > 1 && this.options.showImageNumberLabel) {
                var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
                this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast')
            } else {
                this.$lightbox.find('.lb-number').hide()
            }
            this.$outerContainer.removeClass('animating');
            this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
                return self.sizeOverlay()
            })
        }
        ;
        Lightbox.prototype.preloadNeighboringImages = function() {
            if (this.album.length > this.currentImageIndex + 1) {
                var preloadNext = new Image();
                preloadNext.src = this.album[this.currentImageIndex + 1].link
            }
            if (this.currentImageIndex > 0) {
                var preloadPrev = new Image();
                preloadPrev.src = this.album[this.currentImageIndex - 1].link
            }
        }
        ;
        Lightbox.prototype.enableKeyboardNav = function() {
            $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this))
        }
        ;
        Lightbox.prototype.disableKeyboardNav = function() {
            $(document).off('.keyboard')
        }
        ;
        Lightbox.prototype.keyboardAction = function(event) {
            var KEYCODE_ESC = 27;
            var KEYCODE_LEFTARROW = 37;
            var KEYCODE_RIGHTARROW = 39;
            var keycode = event.keyCode;
            var key = String.fromCharCode(keycode).toLowerCase();
            if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
                this.end()
            } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
                if (this.currentImageIndex !== 0) {
                    this.changeImage(this.currentImageIndex - 1)
                } else if (this.options.wrapAround && this.album.length > 1) {
                    this.changeImage(this.album.length - 1)
                }
            } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
                if (this.currentImageIndex !== this.album.length - 1) {
                    this.changeImage(this.currentImageIndex + 1)
                } else if (this.options.wrapAround && this.album.length > 1) {
                    this.changeImage(0)
                }
            }
        }
        ;
        Lightbox.prototype.end = function() {
            this.disableKeyboardNav();
            $(window).off('resize', this.sizeOverlay);
            this.$lightbox.fadeOut(this.options.fadeDuration);
            this.$overlay.fadeOut(this.options.fadeDuration);
            $('select, object, embed').css({
                visibility: 'visible'
            });
            if (this.options.disableScrolling) {
                $('body').removeClass('lb-disable-scrolling')
            }
        }
        ;
        return new Lightbox()
    }));
    /***/
}
), (function(module, exports) {
    module.exports = jQuery;
    /***/
}
), (function(module, exports) {/***/
}
), /* 12 */
, /* 13 */
, /* 14 */
, /* 15 */
, /* 16 */
, /* 17 */
, /* 18 */
, /* 19 */
, /* 20 */
, /* 21 */
, /* 22 */
, /* 23 */
, /* 24 */
, /* 25 */
, /* 26 */
, /* 27 */
, /* 28 */
, /* 29 */
, /* 30 */
, /* 31 */
, /* 32 */
, /* 33 */
, /* 34 */
, /* 35 */
, /* 36 */
, /* 37 */
, /* 38 */
, /* 39 */
, /* 40 */
, /* 41 */
, /* 42 */
, /* 43 */
, /* 44 */
, /* 45 */
, /* 46 */
, /* 47 */
, /* 48 */
, /* 49 */
, /* 50 */
, /* 51 */
, /* 52 */
, (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    _prestashop2['default'].responsive = _prestashop2['default'].responsive || {};
    _prestashop2['default'].responsive.current_width = window.innerWidth;
    _prestashop2['default'].responsive.min_width = 992;
    _prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
    function swapChildren(obj1, obj2) {
        var temp = obj2.children().detach();
        obj2.empty().append(obj1.children().detach());
        obj1.append(temp)
    }
    function toggleMobileStyles() {
        if (_prestashop2['default'].responsive.mobile) {
            (0,
            _jquery2['default'])("*[id^='_desktop_']").each(function(idx, el) {
                var target = (0,
                _jquery2['default'])('#' + el.id.replace('_desktop_', '_mobile_'));
                if (target.length) {
                    swapChildren((0,
                    _jquery2['default'])(el), target)
                }
            })
        } else {
            (0,
            _jquery2['default'])("*[id^='_mobile_']").each(function(idx, el) {
                var target = (0,
                _jquery2['default'])('#' + el.id.replace('_mobile_', '_desktop_'));
                if (target.length) {
                    swapChildren((0,
                    _jquery2['default'])(el), target)
                }
            })
        }
        _prestashop2['default'].emit('responsive update', {
            mobile: _prestashop2['default'].responsive.mobile
        })
    }
    (0,
    _jquery2['default'])(window).on('resize', function() {
        var _cw = _prestashop2['default'].responsive.current_width;
        var _mw = _prestashop2['default'].responsive.min_width;
        var _w = window.innerWidth;
        var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
        _prestashop2['default'].responsive.current_width = _w;
        _prestashop2['default'].responsive.mobile = _prestashop2['default'].responsive.current_width < _prestashop2['default'].responsive.min_width;
        if (_toggle) {
            toggleMobileStyles()
        }
    });
    (0,
    _jquery2['default'])(document).ready(function() {
        if (_prestashop2['default'].responsive.mobile) {
            toggleMobileStyles()
        }
    });
    /***/
}
), (function(module, exports) {
    // module.exports = prestashop;
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    function setUpCheckout() {
        if ((0,
        _jquery2['default'])('.js-cancel-address').length !== 0) {
            (0,
            _jquery2['default'])('.checkout-step:not(.js-current-step) .step-title').addClass('not-allowed')
        }
        (0,
        _jquery2['default'])('.js-terms a').on('click', function(event) {
            event.preventDefault();
            var url = (0,
            _jquery2['default'])(event.target).attr('href');
            if (url) {
                url += '?content_only=1';
                _jquery2['default'].get(url, function(content) {
                    (0,
                    _jquery2['default'])('#modal').find('.js-modal-content').html((0,
                    _jquery2['default'])(content).find('.page-cms').contents())
                }).fail(function(resp) {
                    _prestashop2['default'].emit('handleError', {
                        eventType: 'clickTerms',
                        resp: resp
                    })
                })
            }
            (0,
            _jquery2['default'])('#modal').modal('show')
        });
        (0,
        _jquery2['default'])('.js-gift-checkbox').on('click', function(event) {
            (0,
            _jquery2['default'])('#gift').collapse('toggle')
        })
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        if ((0,
        _jquery2['default'])('body#checkout').length === 1) {
            setUpCheckout()
        }
        _prestashop2['default'].on('updatedDeliveryForm', function(params) {
            if (typeof params.deliveryOption === 'undefined' || 0 === params.deliveryOption.length) {
                return
            }
            (0,
            _jquery2['default'])(".carrier-extra-content").hide();
            params.deliveryOption.next(".carrier-extra-content").slideDown()
        })
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    function initRmaItemSelector() {
        (0,
        _jquery2['default'])('#order-return-form table thead input[type=checkbox]').on('click', function() {
            var checked = (0,
            _jquery2['default'])(this).prop('checked');
            (0,
            _jquery2['default'])('#order-return-form table tbody input[type=checkbox]').each(function(_, checkbox) {
                (0,
                _jquery2['default'])(checkbox).prop('checked', checked)
            })
        })
    }
    function setupCustomerScripts() {
        if ((0,
        _jquery2['default'])('body#order-detail')) {
            initRmaItemSelector()
        }
    }
    (0,
    _jquery2['default'])(document).ready(setupCustomerScripts);
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    __webpack_require__(58);
    var _componentsProductMiniature = __webpack_require__(59);
    var _componentsProductMiniature2 = _interopRequireDefault(_componentsProductMiniature);
    (0,
    _jquery2['default'])(document).ready(function() {
        tokenVariable();
        _prestashop2['default'].on('clickQuickView', function(elm) {
            var data = {
                'action': 'quickview',
                'id_product': elm.dataset.idProduct,
                'id_product_attribute': elm.dataset.idProductAttribute
            };
            _jquery2['default'].post(_prestashop2['default'].urls.pages.product, data, null, 'json').then(function(resp) {
                (0,
                _jquery2['default'])('body').append(resp.quickview_html);
                var productModal = (0,
                _jquery2['default'])('#quickview-modal-' + resp.product.id + '-' + resp.product.id_product_attribute);
                productModal.modal('show');
                productConfig(productModal);
                productModal.on('hidden.bs.modal', function() {
                    productModal.remove()
                });
                prdImgCarousel(".modal.quickview .product-images")
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'clickQuickView',
                    resp: resp
                })
            })
        });
        var productConfig = function productConfig(qv) {
            var MAX_THUMBS = 3;
            var $thumbnails = qv.find('.js-qv-product-images');
            (0,
            _jquery2['default'])('.js-thumb').on('click', function(event) {
                if ((0,
                _jquery2['default'])('.js-thumb').hasClass('selected')) {
                    (0,
                    _jquery2['default'])('.js-thumb').removeClass('selected')
                }
                (0,
                _jquery2['default'])(event.currentTarget).addClass('selected');
                (0,
                _jquery2['default'])('.js-qv-product-cover').attr('src', (0,
                _jquery2['default'])(event.target).data('image-large-src'))
            });
            qv.find('#quantity_wanted').TouchSpin({
                verticalbuttons: !0,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin',
                buttonup_class: 'btn btn-touchspin js-touchspin',
                min: 1,
                max: 1000000
            })
        };
        (0,
        _jquery2['default'])('body').on('click', '#search_filter_toggler', function() {
            (0,
            _jquery2['default'])('#search_filters_wrapper').removeClass('hidden-md-down');
            (0,
            _jquery2['default'])('#content-wrapper').addClass('hidden-md-down')
        });
        (0,
        _jquery2['default'])('#search_filter_controls .clear').on('click', function() {
            (0,
            _jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');
            (0,
            _jquery2['default'])('#content-wrapper').removeClass('hidden-md-down')
        });
        (0,
        _jquery2['default'])('#search_filter_controls .ok').on('click', function() {
            (0,
            _jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');
            (0,
            _jquery2['default'])('#content-wrapper').removeClass('hidden-md-down')
        });
        var parseSearchUrl = function parseSearchUrl(event) {
            if (event.target.dataset.searchUrl !== undefined) {
                return event.target.dataset.searchUrl
            }
            if ((0,
            _jquery2['default'])(event.target).parent()[0].dataset.searchUrl === undefined) {
                throw new Error('Can not parse search URL')
            }
            return (0,
            _jquery2['default'])(event.target).parent()[0].dataset.searchUrl
        };
        (0,
        _jquery2['default'])('body').on('change', '#search_filters input[data-search-url]', function(event) {
            _prestashop2['default'].emit('updateFacets', parseSearchUrl(event))
        });
        (0,
        _jquery2['default'])('body').on('click', '.js-search-filters-clear-all', function(event) {
            _prestashop2['default'].emit('updateFacets', parseSearchUrl(event))
        });
        (0,
        _jquery2['default'])('body').on('click', '.js-search-link', function(event) {
            event.preventDefault();
            _prestashop2['default'].emit('updateFacets', (0,
            _jquery2['default'])(event.target).closest('a').get(0).href)
        });
        (0,
        _jquery2['default'])('body').on('change', '#search_filters select', function(event) {
            var form = (0,
            _jquery2['default'])(event.target).closest('form');
            _prestashop2['default'].emit('updateFacets', '?' + form.serialize())
        });
        _prestashop2['default'].on('updateProductList', function(data) {
            updateProductListDOM(data);
            var view = _jquery2['default'].totalStorage('display');
            if (view && view != 'grid')
                display(view);
            else
                (0,
                _jquery2['default'])('.display').find('li#grid').addClass('selected')
        })
    });
    function updateProductListDOM(data) {
        (0,
        _jquery2['default'])('#search_filters').replaceWith(data.rendered_facets);
        (0,
        _jquery2['default'])('#js-active-search-filters').replaceWith(data.rendered_active_filters);
        (0,
        _jquery2['default'])('#js-product-list-top').replaceWith(data.rendered_products_top);
        (0,
        _jquery2['default'])('#js-product-list').replaceWith(data.rendered_products);
        (0,
        _jquery2['default'])('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);
        tokenVariable();
        var productMinitature = new _componentsProductMiniature2['default']();
        productMinitature.init()
    }
    function tokenVariable() {
        (0,
        _jquery2['default'])(".product-add-to-cart .td-add-to-cart-or-refresh").attr("action", (0,
        _jquery2['default'])('#carttoken').val());
        (0,
        _jquery2['default'])(".product-add-to-cart .td-add-to-cart-or-refresh .td-token").attr("value", (0,
        _jquery2['default'])('#tokenid').val())
    }
    /***/
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window) {
        "use strict";
        if (window.jQuery) {
            return
        }
        var $ = function(selector, context) {
            return new $.fn.init(selector,context)
        };
        $.isWindow = function(obj) {
            return obj && obj === obj.window
        }
        ;
        $.type = function(obj) {
            if (!obj) {
                return obj + ""
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
        }
        ;
        $.isArray = Array.isArray || function(obj) {
            return $.type(obj) === "array"
        }
        ;
        function isArraylike(obj) {
            var length = obj.length
              , type = $.type(obj);
            if (type === "function" || $.isWindow(obj)) {
                return !1
            }
            if (obj.nodeType === 1 && length) {
                return !0
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1)in obj
        }
        $.isPlainObject = function(obj) {
            var key;
            if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
                return !1
            }
            try {
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (e) {
                return !1
            }
            for (key in obj) {}
            return key === undefined || hasOwn.call(obj, key)
        }
        ;
        $.each = function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === !1) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        if (!obj.hasOwnProperty(i)) {
                            continue
                        }
                        value = callback.apply(obj[i], args);
                        if (value === !1) {
                            break
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === !1) {
                            break
                        }
                    }
                } else {
                    for (i in obj) {
                        if (!obj.hasOwnProperty(i)) {
                            continue
                        }
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === !1) {
                            break
                        }
                    }
                }
            }
            return obj
        }
        ;
        $.data = function(node, key, value) {
            if (value === undefined) {
                var getId = node[$.expando]
                  , store = getId && cache[getId];
                if (key === undefined) {
                    return store
                } else if (store) {
                    if (key in store) {
                        return store[key]
                    }
                }
                /* $.setData() */
            } else if (key !== undefined) {
                var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
                cache[setId] = cache[setId] || {};
                cache[setId][key] = value;
                return value
            }
        }
        ;
        $.removeData = function(node, keys) {
            var id = node[$.expando]
              , store = id && cache[id];
            if (store) {
                if (!keys) {
                    delete cache[id]
                } else {
                    $.each(keys, function(_, key) {
                        delete store[key]
                    })
                }
            }
        }
        ;
        $.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++
            }
            if (typeof target !== "object" && $.type(target) !== "function") {
                target = {}
            }
            if (i === length) {
                target = this;
                i--
            }
            for (; i < length; i++) {
                if ((options = arguments[i])) {
                    for (name in options) {
                        if (!options.hasOwnProperty(name)) {
                            continue
                        }
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue
                        }
                        if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = !1;
                                clone = src && $.isArray(src) ? src : []
                            } else {
                                clone = src && $.isPlainObject(src) ? src : {}
                            }
                            target[name] = $.extend(deep, clone, copy)
                        } else if (copy !== undefined) {
                            target[name] = copy
                        }
                    }
                }
            }
            return target
        }
        ;
        $.queue = function(elem, type, data) {
            function $makeArray(arr, results) {
                var ret = results || [];
                if (arr) {
                    if (isArraylike(Object(arr))) {
                        (function(first, second) {
                            var len = +second.length
                              , j = 0
                              , i = first.length;
                            while (j < len) {
                                first[i++] = second[j++]
                            }
                            if (len !== len) {
                                while (second[j] !== undefined) {
                                    first[i++] = second[j++]
                                }
                            }
                            first.length = i;
                            return first
                        }
                        )(ret, typeof arr === "string" ? [arr] : arr)
                    } else {
                        [].push.call(ret, arr)
                    }
                }
                return ret
            }
            if (!elem) {
                return
            }
            type = (type || "fx") + "queue";
            var q = $.data(elem, type);
            if (!data) {
                return q || []
            }
            if (!q || $.isArray(data)) {
                q = $.data(elem, type, $makeArray(data))
            } else {
                q.push(data)
            }
            return q
        }
        ;
        $.dequeue = function(elems, type) {
            $.each(elems.nodeType ? [elems] : elems, function(i, elem) {
                type = type || "fx";
                var queue = $.queue(elem, type)
                  , fn = queue.shift();
                if (fn === "inprogress") {
                    fn = queue.shift()
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress")
                    }
                    fn.call(elem, function() {
                        $.dequeue(elem, type)
                    })
                }
            })
        }
        ;
        $.fn = $.prototype = {
            init: function(selector) {
                if (selector.nodeType) {
                    this[0] = selector;
                    return this
                } else {
                    throw new Error("Not a DOM node.")
                }
            },
            offset: function() {
                var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function offsetParentFn(elem) {
                    var offsetParent = elem.offsetParent;
                    while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
                        offsetParent = offsetParent.offsetParent
                    }
                    return offsetParent || document
                }
                var elem = this[0]
                  , offsetParent = offsetParentFn(elem)
                  , offset = this.offset()
                  , parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {
                    top: 0,
                    left: 0
                } : $(offsetParent).offset();
                offset.top -= parseFloat(elem.style.marginTop) || 0;
                offset.left -= parseFloat(elem.style.marginLeft) || 0;
                if (offsetParent.style) {
                    parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
                    parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
                }
                return {
                    top: offset.top - parentOffset.top,
                    left: offset.left - parentOffset.left
                }
            }
        };
        var cache = {};
        $.expando = "velocity" + (new Date().getTime());
        $.uuid = 0;
        var class2type = {}
          , hasOwn = class2type.hasOwnProperty
          , toString = class2type.toString;
        var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
        for (var i = 0; i < types.length; i++) {
            class2type["[object " + types[i] + "]"] = types[i].toLowerCase()
        }
        $.fn.init.prototype = $.fn;
        window.Velocity = {
            Utilities: $
        }
    }
    )(window);
    (function(factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = factory();
            /* AMD module. */
        } else if (!0) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            /* Browser globals. */
        } else {
            factory()
        }
    }(function() {
        "use strict";
        return function(global, window, document, undefined) {
            var IE = (function() {
                if (document.documentMode) {
                    return document.documentMode
                } else {
                    for (var i = 7; i > 4; i--) {
                        var div = document.createElement("div");
                        div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
                        if (div.getElementsByTagName("span").length) {
                            div = null;
                            return i
                        }
                    }
                }
                return undefined
            }
            )();
            var rAFShim = (function() {
                var timeLast = 0;
                return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                    var timeCurrent = (new Date()).getTime(), timeDelta;
                    timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
                    timeLast = timeCurrent + timeDelta;
                    return setTimeout(function() {
                        callback(timeCurrent + timeDelta)
                    }, timeDelta)
                }
            }
            )();
            var performance = (function() {
                var perf = window.performance || {};
                if (typeof perf.now !== "function") {
                    var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();
                    perf.now = function() {
                        return (new Date()).getTime() - nowOffset
                    }
                }
                return perf
            }
            )();
            function compactSparseArray(array) {
                var index = -1
                  , length = array ? array.length : 0
                  , result = [];
                while (++index < length) {
                    var value = array[index];
                    if (value) {
                        result.push(value)
                    }
                }
                return result
            }
            var _slice = (function() {
                var slice = Array.prototype.slice;
                try {
                    slice.call(document.documentElement);
                    return slice
                } catch (e) {
                    return function(begin, end) {
                        var len = this.length;
                        if (typeof begin !== "number") {
                            begin = 0
                        }
                        if (typeof end !== "number") {
                            end = len
                        }
                        if (this.slice) {
                            return slice.call(this, begin, end)
                        }
                        var i, cloned = [], start = (begin >= 0) ? begin : Math.max(0, len + begin), upTo = end < 0 ? len + end : Math.min(end, len), size = upTo - start;
                        if (size > 0) {
                            cloned = new Array(size);
                            if (this.charAt) {
                                for (i = 0; i < size; i++) {
                                    cloned[i] = this.charAt(start + i)
                                }
                            } else {
                                for (i = 0; i < size; i++) {
                                    cloned[i] = this[start + i]
                                }
                            }
                        }
                        return cloned
                    }
                }
            }
            )();
            var _inArray = (function() {
                if (Array.prototype.includes) {
                    return function(arr, val) {
                        return arr.includes(val)
                    }
                }
                if (Array.prototype.indexOf) {
                    return function(arr, val) {
                        return arr.indexOf(val) >= 0
                    }
                }
                return function(arr, val) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] === val) {
                            return !0
                        }
                    }
                    return !1
                }
            }
            );
            function sanitizeElements(elements) {
                if (Type.isWrapped(elements)) {
                    elements = _slice.call(elements);
                    /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
                } else if (Type.isNode(elements)) {
                    elements = [elements]
                }
                return elements
            }
            var Type = {
                isNumber: function(variable) {
                    return (typeof variable === "number")
                },
                isString: function(variable) {
                    return (typeof variable === "string")
                },
                isArray: Array.isArray || function(variable) {
                    return Object.prototype.toString.call(variable) === "[object Array]"
                }
                ,
                isFunction: function(variable) {
                    return Object.prototype.toString.call(variable) === "[object Function]"
                },
                isNode: function(variable) {
                    return variable && variable.nodeType
                },
                isWrapped: function(variable) {
                    return variable && variable !== window && Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable) && !Type.isNode(variable) && (variable.length === 0 || Type.isNode(variable[0]))
                },
                isSVG: function(variable) {
                    return window.SVGElement && (variable instanceof window.SVGElement)
                },
                isEmptyObject: function(variable) {
                    for (var name in variable) {
                        if (variable.hasOwnProperty(name)) {
                            return !1
                        }
                    }
                    return !0
                }
            };
            var $, isJQuery = !1;
            if (global.fn && global.fn.jquery) {
                $ = global;
                isJQuery = !0
            } else {
                $ = window.Velocity.Utilities
            }
            if (IE <= 8 && !isJQuery) {
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
            } else if (IE <= 7) {
                jQuery.fn.velocity = jQuery.fn.animate;
                return
            }
            var DURATION_DEFAULT = 400
              , EASING_DEFAULT = "swing";
            var Velocity = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: window.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: document.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {/* Defined below. */
                },
                Utilities: $,
                Redirects: {/* Manually registered by the user. */
                },
                Easings: {/* Defined below. */
                },
                Promise: window.Promise,
                defaults: {
                    queue: "",
                    duration: DURATION_DEFAULT,
                    easing: EASING_DEFAULT,
                    begin: undefined,
                    complete: undefined,
                    progress: undefined,
                    display: undefined,
                    visibility: undefined,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(element) {
                    $.data(element, "velocity", {
                        isSVG: Type.isSVG(element),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(queueName) {
                    var currentTime = (new Date()).getTime();
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        if (activeCall) {
                            if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === !1))) {
                                return !0
                            }
                            activeCall[5] = {
                                resume: !1
                            }
                        }
                    });
                    $.each(Velocity.State.delayedElements, function(k, element) {
                        if (!element) {
                            return
                        }
                        pauseDelayOnElement(element, currentTime)
                    })
                },
                resumeAll: function(queueName) {
                    var currentTime = (new Date()).getTime();
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        if (activeCall) {
                            if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === !1))) {
                                return !0
                            }
                            if (activeCall[5]) {
                                activeCall[5].resume = !0
                            }
                        }
                    });
                    $.each(Velocity.State.delayedElements, function(k, element) {
                        if (!element) {
                            return
                        }
                        resumeDelayOnElement(element, currentTime)
                    })
                }
            };
            if (window.pageYOffset !== undefined) {
                Velocity.State.scrollAnchor = window;
                Velocity.State.scrollPropertyLeft = "pageXOffset";
                Velocity.State.scrollPropertyTop = "pageYOffset"
            } else {
                Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
                Velocity.State.scrollPropertyLeft = "scrollLeft";
                Velocity.State.scrollPropertyTop = "scrollTop"
            }
            function Data(element) {
                var response = $.data(element, "velocity");
                return response === null ? undefined : response
            }
            function pauseDelayOnElement(element, currentTime) {
                var data = Data(element);
                if (data && data.delayTimer && !data.delayPaused) {
                    data.delayRemaining = data.delay - currentTime + data.delayBegin;
                    data.delayPaused = !0;
                    clearTimeout(data.delayTimer.setTimeout)
                }
            }
            function resumeDelayOnElement(element, currentTime) {
                var data = Data(element);
                if (data && data.delayTimer && data.delayPaused) {
                    data.delayPaused = !1;
                    data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining)
                }
            }
            function generateStep(steps) {
                return function(p) {
                    return Math.round(p * steps) * (1 / steps)
                }
            }
            function generateBezier(mX1, mY1, mX2, mY2) {
                var NEWTON_ITERATIONS = 4
                  , NEWTON_MIN_SLOPE = 0.001
                  , SUBDIVISION_PRECISION = 0.0000001
                  , SUBDIVISION_MAX_ITERATIONS = 10
                  , kSplineTableSize = 11
                  , kSampleStepSize = 1.0 / (kSplineTableSize - 1.0)
                  , float32ArraySupported = "Float32Array"in window;
                if (arguments.length !== 4) {
                    return !1
                }
                for (var i = 0; i < 4; ++i) {
                    if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
                        return !1
                    }
                }
                mX1 = Math.min(mX1, 1);
                mX2 = Math.min(mX2, 1);
                mX1 = Math.max(mX1, 0);
                mX2 = Math.max(mX2, 0);
                var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
                function A(aA1, aA2) {
                    return 1.0 - 3.0 * aA2 + 3.0 * aA1
                }
                function B(aA1, aA2) {
                    return 3.0 * aA2 - 6.0 * aA1
                }
                function C(aA1) {
                    return 3.0 * aA1
                }
                function calcBezier(aT, aA1, aA2) {
                    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT
                }
                function getSlope(aT, aA1, aA2) {
                    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1)
                }
                function newtonRaphsonIterate(aX, aGuessT) {
                    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
                        var currentSlope = getSlope(aGuessT, mX1, mX2);
                        if (currentSlope === 0.0) {
                            return aGuessT
                        }
                        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                        aGuessT -= currentX / currentSlope
                    }
                    return aGuessT
                }
                function calcSampleValues() {
                    for (var i = 0; i < kSplineTableSize; ++i) {
                        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2)
                    }
                }
                function binarySubdivide(aX, aA, aB) {
                    var currentX, currentT, i = 0;
                    do {
                        currentT = aA + (aB - aA) / 2.0;
                        currentX = calcBezier(currentT, mX1, mX2) - aX;
                        if (currentX > 0.0) {
                            aB = currentT
                        } else {
                            aA = currentT
                        }
                    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
                    return currentT
                }
                function getTForX(aX) {
                    var intervalStart = 0.0
                      , currentSample = 1
                      , lastSample = kSplineTableSize - 1;
                    for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                        intervalStart += kSampleStepSize
                    }
                    --currentSample;
                    var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample])
                      , guessForT = intervalStart + dist * kSampleStepSize
                      , initialSlope = getSlope(guessForT, mX1, mX2);
                    if (initialSlope >= NEWTON_MIN_SLOPE) {
                        return newtonRaphsonIterate(aX, guessForT)
                    } else if (initialSlope === 0.0) {
                        return guessForT
                    } else {
                        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize)
                    }
                }
                var _precomputed = !1;
                function precompute() {
                    _precomputed = !0;
                    if (mX1 !== mY1 || mX2 !== mY2) {
                        calcSampleValues()
                    }
                }
                var f = function(aX) {
                    if (!_precomputed) {
                        precompute()
                    }
                    if (mX1 === mY1 && mX2 === mY2) {
                        return aX
                    }
                    if (aX === 0) {
                        return 0
                    }
                    if (aX === 1) {
                        return 1
                    }
                    return calcBezier(getTForX(aX), mY1, mY2)
                };
                f.getControlPoints = function() {
                    return [{
                        x: mX1,
                        y: mY1
                    }, {
                        x: mX2,
                        y: mY2
                    }]
                }
                ;
                var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
                f.toString = function() {
                    return str
                }
                ;
                return f
            }
            var generateSpringRK4 = (function() {
                function springAccelerationForState(state) {
                    return (-state.tension * state.x) - (state.friction * state.v)
                }
                function springEvaluateStateWithDerivative(initialState, dt, derivative) {
                    var state = {
                        x: initialState.x + derivative.dx * dt,
                        v: initialState.v + derivative.dv * dt,
                        tension: initialState.tension,
                        friction: initialState.friction
                    };
                    return {
                        dx: state.v,
                        dv: springAccelerationForState(state)
                    }
                }
                function springIntegrateState(state, dt) {
                    var a = {
                        dx: state.v,
                        dv: springAccelerationForState(state)
                    }
                      , b = springEvaluateStateWithDerivative(state, dt * 0.5, a)
                      , c = springEvaluateStateWithDerivative(state, dt * 0.5, b)
                      , d = springEvaluateStateWithDerivative(state, dt, c)
                      , dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx)
                      , dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
                    state.x = state.x + dxdt * dt;
                    state.v = state.v + dvdt * dt;
                    return state
                }
                return function springRK4Factory(tension, friction, duration) {
                    var initState = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, path = [0], time_lapsed = 0, tolerance = 1 / 10000, DT = 16 / 1000, have_duration, dt, last_state;
                    tension = parseFloat(tension) || 500;
                    friction = parseFloat(friction) || 20;
                    duration = duration || null;
                    initState.tension = tension;
                    initState.friction = friction;
                    have_duration = duration !== null;
                    if (have_duration) {
                        time_lapsed = springRK4Factory(tension, friction);
                        dt = time_lapsed / duration * DT
                    } else {
                        dt = DT
                    }
                    while (!0) {
                        last_state = springIntegrateState(last_state || initState, dt);
                        path.push(1 + last_state.x);
                        time_lapsed += 16;
                        if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
                            break
                        }
                    }
                    return !have_duration ? time_lapsed : function(percentComplete) {
                        return path[(percentComplete * (path.length - 1)) | 0]
                    }
                }
            }());
            Velocity.Easings = {
                linear: function(p) {
                    return p
                },
                swing: function(p) {
                    return 0.5 - Math.cos(p * Math.PI) / 2
                },
                spring: function(p) {
                    return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6))
                }
            };
            $.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function(i, easingArray) {
                Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1])
            });
            function getEasing(value, duration) {
                var easing = value;
                if (Type.isString(value)) {
                    if (!Velocity.Easings[value]) {
                        easing = !1
                    }
                } else if (Type.isArray(value) && value.length === 1) {
                    easing = generateStep.apply(null, value)
                } else if (Type.isArray(value) && value.length === 2) {
                    easing = generateSpringRK4.apply(null, value.concat([duration]))
                } else if (Type.isArray(value) && value.length === 4) {
                    easing = generateBezier.apply(null, value)
                } else {
                    easing = !1
                }
                if (easing === !1) {
                    if (Velocity.Easings[Velocity.defaults.easing]) {
                        easing = Velocity.defaults.easing
                    } else {
                        easing = EASING_DEFAULT
                    }
                }
                return easing
            }
            var CSS = Velocity.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        "aliceblue": "240,248,255",
                        "antiquewhite": "250,235,215",
                        "aquamarine": "127,255,212",
                        "aqua": "0,255,255",
                        "azure": "240,255,255",
                        "beige": "245,245,220",
                        "bisque": "255,228,196",
                        "black": "0,0,0",
                        "blanchedalmond": "255,235,205",
                        "blueviolet": "138,43,226",
                        "blue": "0,0,255",
                        "brown": "165,42,42",
                        "burlywood": "222,184,135",
                        "cadetblue": "95,158,160",
                        "chartreuse": "127,255,0",
                        "chocolate": "210,105,30",
                        "coral": "255,127,80",
                        "cornflowerblue": "100,149,237",
                        "cornsilk": "255,248,220",
                        "crimson": "220,20,60",
                        "cyan": "0,255,255",
                        "darkblue": "0,0,139",
                        "darkcyan": "0,139,139",
                        "darkgoldenrod": "184,134,11",
                        "darkgray": "169,169,169",
                        "darkgrey": "169,169,169",
                        "darkgreen": "0,100,0",
                        "darkkhaki": "189,183,107",
                        "darkmagenta": "139,0,139",
                        "darkolivegreen": "85,107,47",
                        "darkorange": "255,140,0",
                        "darkorchid": "153,50,204",
                        "darkred": "139,0,0",
                        "darksalmon": "233,150,122",
                        "darkseagreen": "143,188,143",
                        "darkslateblue": "72,61,139",
                        "darkslategray": "47,79,79",
                        "darkturquoise": "0,206,209",
                        "darkviolet": "148,0,211",
                        "deeppink": "255,20,147",
                        "deepskyblue": "0,191,255",
                        "dimgray": "105,105,105",
                        "dimgrey": "105,105,105",
                        "dodgerblue": "30,144,255",
                        "firebrick": "178,34,34",
                        "floralwhite": "255,250,240",
                        "forestgreen": "34,139,34",
                        "fuchsia": "255,0,255",
                        "gainsboro": "220,220,220",
                        "ghostwhite": "248,248,255",
                        "gold": "255,215,0",
                        "goldenrod": "218,165,32",
                        "gray": "128,128,128",
                        "grey": "128,128,128",
                        "greenyellow": "173,255,47",
                        "green": "0,128,0",
                        "honeydew": "240,255,240",
                        "hotpink": "255,105,180",
                        "indianred": "205,92,92",
                        "indigo": "75,0,130",
                        "ivory": "255,255,240",
                        "khaki": "240,230,140",
                        "lavenderblush": "255,240,245",
                        "lavender": "230,230,250",
                        "lawngreen": "124,252,0",
                        "lemonchiffon": "255,250,205",
                        "lightblue": "173,216,230",
                        "lightcoral": "240,128,128",
                        "lightcyan": "224,255,255",
                        "lightgoldenrodyellow": "250,250,210",
                        "lightgray": "211,211,211",
                        "lightgrey": "211,211,211",
                        "lightgreen": "144,238,144",
                        "lightpink": "255,182,193",
                        "lightsalmon": "255,160,122",
                        "lightseagreen": "32,178,170",
                        "lightskyblue": "135,206,250",
                        "lightslategray": "119,136,153",
                        "lightsteelblue": "176,196,222",
                        "lightyellow": "255,255,224",
                        "limegreen": "50,205,50",
                        "lime": "0,255,0",
                        "linen": "250,240,230",
                        "magenta": "255,0,255",
                        "maroon": "128,0,0",
                        "mediumaquamarine": "102,205,170",
                        "mediumblue": "0,0,205",
                        "mediumorchid": "186,85,211",
                        "mediumpurple": "147,112,219",
                        "mediumseagreen": "60,179,113",
                        "mediumslateblue": "123,104,238",
                        "mediumspringgreen": "0,250,154",
                        "mediumturquoise": "72,209,204",
                        "mediumvioletred": "199,21,133",
                        "midnightblue": "25,25,112",
                        "mintcream": "245,255,250",
                        "mistyrose": "255,228,225",
                        "moccasin": "255,228,181",
                        "navajowhite": "255,222,173",
                        "navy": "0,0,128",
                        "oldlace": "253,245,230",
                        "olivedrab": "107,142,35",
                        "olive": "128,128,0",
                        "orangered": "255,69,0",
                        "orange": "255,165,0",
                        "orchid": "218,112,214",
                        "palegoldenrod": "238,232,170",
                        "palegreen": "152,251,152",
                        "paleturquoise": "175,238,238",
                        "palevioletred": "219,112,147",
                        "papayawhip": "255,239,213",
                        "peachpuff": "255,218,185",
                        "peru": "205,133,63",
                        "pink": "255,192,203",
                        "plum": "221,160,221",
                        "powderblue": "176,224,230",
                        "purple": "128,0,128",
                        "red": "255,0,0",
                        "rosybrown": "188,143,143",
                        "royalblue": "65,105,225",
                        "saddlebrown": "139,69,19",
                        "salmon": "250,128,114",
                        "sandybrown": "244,164,96",
                        "seagreen": "46,139,87",
                        "seashell": "255,245,238",
                        "sienna": "160,82,45",
                        "silver": "192,192,192",
                        "skyblue": "135,206,235",
                        "slateblue": "106,90,205",
                        "slategray": "112,128,144",
                        "snow": "255,250,250",
                        "springgreen": "0,255,127",
                        "steelblue": "70,130,180",
                        "tan": "210,180,140",
                        "teal": "0,128,128",
                        "thistle": "216,191,216",
                        "tomato": "255,99,71",
                        "turquoise": "64,224,208",
                        "violet": "238,130,238",
                        "wheat": "245,222,179",
                        "whitesmoke": "245,245,245",
                        "white": "255,255,255",
                        "yellowgreen": "154,205,50",
                        "yellow": "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
                        "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        "backgroundPosition": ["X Y", "0% 0%"],
                        "transformOrigin": ["X Y Z", "50% 50% 0px"],
                        "perspectiveOrigin": ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var i = 0; i < CSS.Lists.colors.length; i++) {
                            var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
                            CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents]
                        }
                        var rootProperty, hookTemplate, hookNames;
                        if (IE) {
                            for (rootProperty in CSS.Hooks.templates) {
                                if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
                                    continue
                                }
                                hookTemplate = CSS.Hooks.templates[rootProperty];
                                hookNames = hookTemplate[0].split(" ");
                                var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
                                if (hookNames[0] === "Color") {
                                    hookNames.push(hookNames.shift());
                                    defaultValues.push(defaultValues.shift());
                                    CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")]
                                }
                            }
                        }
                        for (rootProperty in CSS.Hooks.templates) {
                            if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
                                continue
                            }
                            hookTemplate = CSS.Hooks.templates[rootProperty];
                            hookNames = hookTemplate[0].split(" ");
                            for (var j in hookNames) {
                                if (!hookNames.hasOwnProperty(j)) {
                                    continue
                                }
                                var fullHookName = rootProperty + hookNames[j]
                                  , hookPosition = j;
                                CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition]
                            }
                        }
                    },
                    getRoot: function(property) {
                        var hookData = CSS.Hooks.registered[property];
                        if (hookData) {
                            return hookData[0]
                        } else {
                            return property
                        }
                    },
                    getUnit: function(str, start) {
                        var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        if (unit && _inArray(CSS.Lists.units, unit)) {
                            return unit
                        }
                        return ""
                    },
                    fixColors: function(str) {
                        return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
                            if (CSS.Lists.colorNames.hasOwnProperty($2)) {
                                return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)")
                            }
                            return $1 + $2
                        })
                    },
                    cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
                        if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
                            rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1]
                        }
                        if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
                            rootPropertyValue = CSS.Hooks.templates[rootProperty][1]
                        }
                        return rootPropertyValue
                    },
                    extractValue: function(fullHookName, rootPropertyValue) {
                        var hookData = CSS.Hooks.registered[fullHookName];
                        if (hookData) {
                            var hookRoot = hookData[0]
                              , hookPosition = hookData[1];
                            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
                            return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition]
                        } else {
                            return rootPropertyValue
                        }
                    },
                    injectValue: function(fullHookName, hookValue, rootPropertyValue) {
                        var hookData = CSS.Hooks.registered[fullHookName];
                        if (hookData) {
                            var hookRoot = hookData[0], hookPosition = hookData[1], rootPropertyValueParts, rootPropertyValueUpdated;
                            rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
                            rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
                            rootPropertyValueParts[hookPosition] = hookValue;
                            rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
                            return rootPropertyValueUpdated
                        } else {
                            return rootPropertyValue
                        }
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(type, element, propertyValue) {
                            switch (type) {
                            case "name":
                                return "clip";
                            case "extract":
                                var extracted;
                                if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                    extracted = propertyValue
                                } else {
                                    extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
                                    extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue
                                }
                                return extracted;
                            case "inject":
                                return "rect(" + propertyValue + ")"
                            }
                        },
                        blur: function(type, element, propertyValue) {
                            switch (type) {
                            case "name":
                                return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var extracted = parseFloat(propertyValue);
                                if (!(extracted || extracted === 0)) {
                                    var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    if (blurComponent) {
                                        extracted = blurComponent[1];
                                        /* If the component doesn't exist, default blur to 0. */
                                    } else {
                                        extracted = 0
                                    }
                                }
                                return extracted;
                            case "inject":
                                if (!parseFloat(propertyValue)) {
                                    return "none"
                                } else {
                                    return "blur(" + propertyValue + ")"
                                }
                            }
                        },
                        opacity: function(type, element, propertyValue) {
                            if (IE <= 8) {
                                switch (type) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
                                    if (extracted) {
                                        propertyValue = extracted[1] / 100
                                    } else {
                                        propertyValue = 1
                                    }
                                    return propertyValue;
                                case "inject":
                                    element.style.zoom = 1;
                                    if (parseFloat(propertyValue) >= 1) {
                                        return ""
                                    } else {
                                        return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")"
                                    }
                                }
                                /* With all other browsers, normalization is not required; return the same values that were passed in. */
                            } else {
                                switch (type) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return propertyValue;
                                case "inject":
                                    return propertyValue
                                }
                            }
                        }
                    },
                    register: function() {
                        if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
                            CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D)
                        }
                        for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
                            (function() {
                                var transformName = CSS.Lists.transformsBase[i];
                                CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
                                    switch (type) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                                            return /^scale/i.test(transformName) ? 1 : 0
                                        }
                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
                                    case "inject":
                                        var invalid = !1;
                                        switch (transformName.substr(0, transformName.length - 1)) {
                                        case "translate":
                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
                                            break;
                                        case "scal":
                                        case "scale":
                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                                                propertyValue = 1
                                            }
                                            invalid = !/(\d)$/i.test(propertyValue);
                                            break;
                                        case "skew":
                                            invalid = !/(deg|\d)$/i.test(propertyValue);
                                            break;
                                        case "rotate":
                                            invalid = !/(deg|\d)$/i.test(propertyValue);
                                            break
                                        }
                                        if (!invalid) {
                                            Data(element).transformCache[transformName] = "(" + propertyValue + ")"
                                        }
                                        return Data(element).transformCache[transformName]
                                    }
                                }
                            }
                            )()
                        }
                        for (var j = 0; j < CSS.Lists.colors.length; j++) {
                            (function() {
                                var colorName = CSS.Lists.colors[j];
                                CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
                                    switch (type) {
                                    case "name":
                                        return colorName;
                                    case "extract":
                                        var extracted;
                                        if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
                                            extracted = propertyValue
                                        } else {
                                            var converted, colorNames = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            if (/^[A-z]+$/i.test(propertyValue)) {
                                                if (colorNames[propertyValue] !== undefined) {
                                                    converted = colorNames[propertyValue]
                                                } else {
                                                    converted = colorNames.black
                                                }
                                                /* Convert hex values to rgb. */
                                            } else if (CSS.RegEx.isHex.test(propertyValue)) {
                                                converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
                                                /* If the provided color doesn't match any of the accepted color formats, default to black. */
                                            } else if (!(/^rgba?\(/i.test(propertyValue))) {
                                                converted = colorNames.black
                                            }
                                            extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
                                            extracted += " 1"
                                        }
                                        return extracted;
                                    case "inject":
                                        if (/^rgb/.test(propertyValue)) {
                                            return propertyValue
                                        }
                                        if (IE <= 8) {
                                            if (propertyValue.split(" ").length === 4) {
                                                propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ")
                                            }
                                            /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                        } else if (propertyValue.split(" ").length === 3) {
                                            propertyValue += " 1"
                                        }
                                        return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }
                            )()
                        }
                        function augmentDimension(name, element, wantInner) {
                            var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
                            if (isBorderBox === (wantInner || !1)) {
                                var i, value, augment = 0, sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"], fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
                                for (i = 0; i < fields.length; i++) {
                                    value = parseFloat(CSS.getPropertyValue(element, fields[i]));
                                    if (!isNaN(value)) {
                                        augment += value
                                    }
                                }
                                return wantInner ? -augment : augment
                            }
                            return 0
                        }
                        function getDimension(name, wantInner) {
                            return function(type, element, propertyValue) {
                                switch (type) {
                                case "name":
                                    return name;
                                case "extract":
                                    return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
                                case "inject":
                                    return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px"
                                }
                            }
                        }
                        CSS.Normalizations.registered.innerWidth = getDimension("width", !0);
                        CSS.Normalizations.registered.innerHeight = getDimension("height", !0);
                        CSS.Normalizations.registered.outerWidth = getDimension("width");
                        CSS.Normalizations.registered.outerHeight = getDimension("height")
                    }
                },
                Names: {
                    camelCase: function(property) {
                        return property.replace(/-(\w)/g, function(match, subMatch) {
                            return subMatch.toUpperCase()
                        })
                    },
                    SVGAttribute: function(property) {
                        var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
                            SVGAttributes += "|transform"
                        }
                        return new RegExp("^(" + SVGAttributes + ")$","i").test(property)
                    },
                    prefixCheck: function(property) {
                        if (Velocity.State.prefixMatches[property]) {
                            return [Velocity.State.prefixMatches[property], !0]
                        } else {
                            var vendors = ["", "Webkit", "Moz", "ms", "O"];
                            for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
                                var propertyPrefixed;
                                if (i === 0) {
                                    propertyPrefixed = property
                                } else {
                                    propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
                                        return match.toUpperCase()
                                    })
                                }
                                if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
                                    Velocity.State.prefixMatches[property] = propertyPrefixed;
                                    return [propertyPrefixed, !0]
                                }
                            }
                            return [property, !1]
                        }
                    }
                },
                Values: {
                    hexToRgb: function(hex) {
                        var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgbParts;
                        hex = hex.replace(shortformRegex, function(m, r, g, b) {
                            return r + r + g + g + b + b
                        });
                        rgbParts = longformRegex.exec(hex);
                        return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(value) {
                        return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value))
                    },
                    getUnitType: function(property) {
                        if (/^(rotate|skew)/i.test(property)) {
                            return "deg"
                        } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
                            return ""
                        } else {
                            return "px"
                        }
                    },
                    getDisplayType: function(element) {
                        var tagName = element && element.tagName.toString().toLowerCase();
                        if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
                            return "inline"
                        } else if (/^(li)$/i.test(tagName)) {
                            return "list-item"
                        } else if (/^(tr)$/i.test(tagName)) {
                            return "table-row"
                        } else if (/^(table)$/i.test(tagName)) {
                            return "table"
                        } else if (/^(tbody)$/i.test(tagName)) {
                            return "table-row-group";
                            /* Default to "block" when no match is found. */
                        } else {
                            return "block"
                        }
                    },
                    addClass: function(element, className) {
                        if (element) {
                            if (element.classList) {
                                element.classList.add(className)
                            } else if (Type.isString(element.className)) {
                                element.className += (element.className.length ? " " : "") + className
                            } else {
                                var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
                                element.setAttribute("class", currentClass + (currentClass ? " " : "") + className)
                            }
                        }
                    },
                    removeClass: function(element, className) {
                        if (element) {
                            if (element.classList) {
                                element.classList.remove(className)
                            } else if (Type.isString(element.className)) {
                                element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)","gi"), " ")
                            } else {
                                var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
                                element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)","gi"), " "))
                            }
                        }
                    }
                },
                getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
                    function computePropertyValue(element, property) {
                        var computedValue = 0;
                        if (IE <= 8) {
                            computedValue = $.css(element, property)
                        } else {
                            var toggleDisplay = !1;
                            if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
                                toggleDisplay = !0;
                                CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element))
                            }
                            var revertDisplay = function() {
                                if (toggleDisplay) {
                                    CSS.setPropertyValue(element, "display", "none")
                                }
                            };
                            if (!forceStyleLookup) {
                                if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                                    revertDisplay();
                                    return contentBoxHeight
                                } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                                    revertDisplay();
                                    return contentBoxWidth
                                }
                            }
                            var computedStyle;
                            if (Data(element) === undefined) {
                                computedStyle = window.getComputedStyle(element, null)
                            } else if (!Data(element).computedStyle) {
                                computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null)
                            } else {
                                computedStyle = Data(element).computedStyle
                            }
                            if (property === "borderColor") {
                                property = "borderTopColor"
                            }
                            if (IE === 9 && property === "filter") {
                                computedValue = computedStyle.getPropertyValue(property);
                                /* GET */
                            } else {
                                computedValue = computedStyle[property]
                            }
                            if (computedValue === "" || computedValue === null) {
                                computedValue = element.style[property]
                            }
                            revertDisplay()
                        }
                        if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
                            var position = computePropertyValue(element, "position");
                            if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
                                computedValue = $(element).position()[property] + "px";
                                /* GET */
                            }
                        }
                        return computedValue
                    }
                    var propertyValue;
                    if (CSS.Hooks.registered[property]) {
                        var hook = property
                          , hookRoot = CSS.Hooks.getRoot(hook);
                        if (rootPropertyValue === undefined) {
                            rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]);
                            /* GET */
                        }
                        if (CSS.Normalizations.registered[hookRoot]) {
                            rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue)
                        }
                        propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue)
                    } else if (CSS.Normalizations.registered[property]) {
                        var normalizedPropertyName, normalizedPropertyValue;
                        normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
                        if (normalizedPropertyName !== "transform") {
                            normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]);
                            if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
                                normalizedPropertyValue = CSS.Hooks.templates[property][1]
                            }
                        }
                        propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue)
                    }
                    if (!/^[\d-]/.test(propertyValue)) {
                        var data = Data(element);
                        if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
                            if (/^(height|width)$/i.test(property)) {
                                try {
                                    propertyValue = element.getBBox()[property]
                                } catch (error) {
                                    propertyValue = 0
                                }
                                /* Otherwise, access the attribute value directly. */
                            } else {
                                propertyValue = element.getAttribute(property)
                            }
                        } else {
                            propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]);
                            /* GET */
                        }
                    }
                    if (CSS.Values.isCSSNullValue(propertyValue)) {
                        propertyValue = 0
                    }
                    if (Velocity.debug >= 2) {
                        console.log("Get " + property + ": " + propertyValue)
                    }
                    return propertyValue
                },
                setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
                    var propertyName = property;
                    if (property === "scroll") {
                        if (scrollData.container) {
                            scrollData.container["scroll" + scrollData.direction] = propertyValue;
                            /* Otherwise, Velocity defaults to scrolling the browser window. */
                        } else {
                            if (scrollData.direction === "Left") {
                                window.scrollTo(propertyValue, scrollData.alternateValue)
                            } else {
                                window.scrollTo(scrollData.alternateValue, propertyValue)
                            }
                        }
                    } else {
                        if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
                            CSS.Normalizations.registered[property]("inject", element, propertyValue);
                            propertyName = "transform";
                            propertyValue = Data(element).transformCache[property]
                        } else {
                            if (CSS.Hooks.registered[property]) {
                                var hookName = property
                                  , hookRoot = CSS.Hooks.getRoot(property);
                                rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot);
                                propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
                                property = hookRoot
                            }
                            if (CSS.Normalizations.registered[property]) {
                                propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
                                property = CSS.Normalizations.registered[property]("name", element)
                            }
                            propertyName = CSS.Names.prefixCheck(property)[0];
                            if (IE <= 8) {
                                try {
                                    element.style[propertyName] = propertyValue
                                } catch (error) {
                                    if (Velocity.debug) {
                                        console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]")
                                    }
                                }
                            } else {
                                var data = Data(element);
                                if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
                                    element.setAttribute(property, propertyValue)
                                } else {
                                    element.style[propertyName] = propertyValue
                                }
                            }
                            if (Velocity.debug >= 2) {
                                console.log("Set " + property + " (" + propertyName + "): " + propertyValue)
                            }
                        }
                    }
                    return [propertyName, propertyValue]
                },
                flushTransformCache: function(element) {
                    var transformString = ""
                      , data = Data(element);
                    if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
                        var getTransformFloat = function(transformProperty) {
                            return parseFloat(CSS.getPropertyValue(element, transformProperty))
                        };
                        var SVGTransforms = {
                            translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
                            skewX: [getTransformFloat("skewX")],
                            skewY: [getTransformFloat("skewY")],
                            scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
                            rotate: [getTransformFloat("rotateZ"), 0, 0]
                        };
                        $.each(Data(element).transformCache, function(transformName) {
                            if (/^translate/i.test(transformName)) {
                                transformName = "translate"
                            } else if (/^scale/i.test(transformName)) {
                                transformName = "scale"
                            } else if (/^rotate/i.test(transformName)) {
                                transformName = "rotate"
                            }
                            if (SVGTransforms[transformName]) {
                                transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
                                delete SVGTransforms[transformName]
                            }
                        })
                    } else {
                        var transformValue, perspective;
                        $.each(Data(element).transformCache, function(transformName) {
                            transformValue = Data(element).transformCache[transformName];
                            if (transformName === "transformPerspective") {
                                perspective = transformValue;
                                return !0
                            }
                            if (IE === 9 && transformName === "rotateZ") {
                                transformName = "rotate"
                            }
                            transformString += transformName + transformValue + " "
                        });
                        if (perspective) {
                            transformString = "perspective" + perspective + " " + transformString
                        }
                    }
                    CSS.setPropertyValue(element, "transform", transformString)
                }
            };
            CSS.Hooks.register();
            CSS.Normalizations.register();
            Velocity.hook = function(elements, arg2, arg3) {
                var value;
                elements = sanitizeElements(elements);
                $.each(elements, function(i, element) {
                    if (Data(element) === undefined) {
                        Velocity.init(element)
                    }
                    if (arg3 === undefined) {
                        if (value === undefined) {
                            value = CSS.getPropertyValue(element, arg2)
                        }
                        /* Set property value. */
                    } else {
                        var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);
                        if (adjustedSet[0] === "transform") {
                            Velocity.CSS.flushTransformCache(element)
                        }
                        value = adjustedSet
                    }
                });
                return value
            }
            ;
            var animate = function() {
                var opts;
                function getChain() {
                    if (isUtility) {
                        return promiseData.promise || null;
                        /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
                    } else {
                        return elementsWrapped
                    }
                }
                var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))), isUtility, elementsWrapped, argumentIndex;
                var elements, propertiesMap, options;
                if (Type.isWrapped(this)) {
                    isUtility = !1;
                    argumentIndex = 0;
                    elements = this;
                    elementsWrapped = this;
                    /* Otherwise, raw elements are being animated via the utility function. */
                } else {
                    isUtility = !0;
                    argumentIndex = 1;
                    elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0]
                }
                var promiseData = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (isUtility && Velocity.Promise) {
                    promiseData.promise = new Velocity.Promise(function(resolve, reject) {
                        promiseData.resolver = resolve;
                        promiseData.rejecter = reject
                    }
                    )
                }
                if (syntacticSugar) {
                    propertiesMap = arguments[0].properties || arguments[0].p;
                    options = arguments[0].options || arguments[0].o
                } else {
                    propertiesMap = arguments[argumentIndex];
                    options = arguments[argumentIndex + 1]
                }
                elements = sanitizeElements(elements);
                if (!elements) {
                    if (promiseData.promise) {
                        if (!propertiesMap || !options || options.promiseRejectEmpty !== !1) {
                            promiseData.rejecter()
                        } else {
                            promiseData.resolver()
                        }
                    }
                    return
                }
                var elementsLength = elements.length
                  , elementsIndex = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
                    var startingArgumentPosition = argumentIndex + 1;
                    options = {};
                    for (var i = startingArgumentPosition; i < arguments.length; i++) {
                        if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
                            options.duration = arguments[i];
                            /* Treat strings and arrays as easings. */
                        } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
                            options.easing = arguments[i];
                            /* Treat a function as a complete callback. */
                        } else if (Type.isFunction(arguments[i])) {
                            options.complete = arguments[i]
                        }
                    }
                }
                var action;
                switch (propertiesMap) {
                case "scroll":
                    action = "scroll";
                    break;
                case "reverse":
                    action = "reverse";
                    break;
                case "pause":
                    var currentTime = (new Date()).getTime();
                    $.each(elements, function(i, element) {
                        pauseDelayOnElement(element, currentTime)
                    });
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        var found = !1;
                        if (activeCall) {
                            $.each(activeCall[1], function(k, activeElement) {
                                var queueName = (options === undefined) ? "" : options;
                                if (queueName !== !0 && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === !1)) {
                                    return !0
                                }
                                $.each(elements, function(l, element) {
                                    if (element === activeElement) {
                                        activeCall[5] = {
                                            resume: !1
                                        };
                                        found = !0;
                                        return !1
                                    }
                                });
                                if (found) {
                                    return !1
                                }
                            })
                        }
                    });
                    return getChain();
                case "resume":
                    $.each(elements, function(i, element) {
                        resumeDelayOnElement(element, currentTime)
                    });
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        var found = !1;
                        if (activeCall) {
                            $.each(activeCall[1], function(k, activeElement) {
                                var queueName = (options === undefined) ? "" : options;
                                if (queueName !== !0 && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === !1)) {
                                    return !0
                                }
                                if (!activeCall[5]) {
                                    return !0
                                }
                                $.each(elements, function(l, element) {
                                    if (element === activeElement) {
                                        activeCall[5].resume = !0;
                                        found = !0;
                                        return !1
                                    }
                                });
                                if (found) {
                                    return !1
                                }
                            })
                        }
                    });
                    return getChain();
                case "finish":
                case "finishAll":
                case "stop":
                    $.each(elements, function(i, element) {
                        if (Data(element) && Data(element).delayTimer) {
                            clearTimeout(Data(element).delayTimer.setTimeout);
                            if (Data(element).delayTimer.next) {
                                Data(element).delayTimer.next()
                            }
                            delete Data(element).delayTimer
                        }
                        if (propertiesMap === "finishAll" && (options === !0 || Type.isString(options))) {
                            $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                if (Type.isFunction(item)) {
                                    item()
                                }
                            });
                            $.queue(element, Type.isString(options) ? options : "", [])
                        }
                    });
                    var callsToStop = [];
                    $.each(Velocity.State.calls, function(i, activeCall) {
                        if (activeCall) {
                            $.each(activeCall[1], function(k, activeElement) {
                                var queueName = (options === undefined) ? "" : options;
                                if (queueName !== !0 && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === !1)) {
                                    return !0
                                }
                                $.each(elements, function(l, element) {
                                    if (element === activeElement) {
                                        if (options === !0 || Type.isString(options)) {
                                            $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                                if (Type.isFunction(item)) {
                                                    item(null, !0)
                                                }
                                            });
                                            $.queue(element, Type.isString(options) ? options : "", [])
                                        }
                                        if (propertiesMap === "stop") {
                                            var data = Data(element);
                                            if (data && data.tweensContainer && queueName !== !1) {
                                                $.each(data.tweensContainer, function(m, activeTween) {
                                                    activeTween.endValue = activeTween.currentValue
                                                })
                                            }
                                            callsToStop.push(i)
                                        } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
                                            activeCall[2].duration = 1
                                        }
                                    }
                                })
                            })
                        }
                    });
                    if (propertiesMap === "stop") {
                        $.each(callsToStop, function(i, j) {
                            completeCall(j, !0)
                        });
                        if (promiseData.promise) {
                            promiseData.resolver(elements)
                        }
                    }
                    return getChain();
                default:
                    if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
                        action = "start"
                    } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
                        opts = $.extend({}, options);
                        var durationOriginal = opts.duration
                          , delayOriginal = opts.delay || 0;
                        if (opts.backwards === !0) {
                            elements = $.extend(!0, [], elements).reverse()
                        }
                        $.each(elements, function(elementIndex, element) {
                            if (parseFloat(opts.stagger)) {
                                opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex)
                            } else if (Type.isFunction(opts.stagger)) {
                                opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength)
                            }
                            if (opts.drag) {
                                opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                                opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200)
                            }
                            Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined)
                        });
                        return getChain()
                    } else {
                        var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        if (promiseData.promise) {
                            promiseData.rejecter(new Error(abortError))
                        } else if (window.console) {
                            console.log(abortError)
                        }
                        return getChain()
                    }
                }
                var callUnitConversionData = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                };
                var call = [];
                function processElement(element, elementArrayIndex) {
                    var opts = $.extend({}, Velocity.defaults, options), tweensContainer = {}, elementUnitConversionData;
                    if (Data(element) === undefined) {
                        Velocity.init(element)
                    }
                    if (parseFloat(opts.delay) && opts.queue !== !1) {
                        $.queue(element, opts.queue, function(next) {
                            Velocity.velocityQueueEntryFlag = !0;
                            var callIndex = Velocity.State.delayedElements.count++;
                            Velocity.State.delayedElements[callIndex] = element;
                            var delayComplete = (function(index) {
                                return function() {
                                    Velocity.State.delayedElements[index] = !1;
                                    next()
                                }
                            }
                            )(callIndex);
                            Data(element).delayBegin = (new Date()).getTime();
                            Data(element).delay = parseFloat(opts.delay);
                            Data(element).delayTimer = {
                                setTimeout: setTimeout(next, parseFloat(opts.delay)),
                                next: delayComplete
                            }
                        })
                    }
                    switch (opts.duration.toString().toLowerCase()) {
                    case "fast":
                        opts.duration = 200;
                        break;
                    case "normal":
                        opts.duration = DURATION_DEFAULT;
                        break;
                    case "slow":
                        opts.duration = 600;
                        break;
                    default:
                        opts.duration = parseFloat(opts.duration) || 1
                    }
                    if (Velocity.mock !== !1) {
                        if (Velocity.mock === !0) {
                            opts.duration = opts.delay = 1
                        } else {
                            opts.duration *= parseFloat(Velocity.mock) || 1;
                            opts.delay *= parseFloat(Velocity.mock) || 1
                        }
                    }
                    opts.easing = getEasing(opts.easing, opts.duration);
                    if (opts.begin && !Type.isFunction(opts.begin)) {
                        opts.begin = null
                    }
                    if (opts.progress && !Type.isFunction(opts.progress)) {
                        opts.progress = null
                    }
                    if (opts.complete && !Type.isFunction(opts.complete)) {
                        opts.complete = null
                    }
                    if (opts.display !== undefined && opts.display !== null) {
                        opts.display = opts.display.toString().toLowerCase();
                        if (opts.display === "auto") {
                            opts.display = Velocity.CSS.Values.getDisplayType(element)
                        }
                    }
                    if (opts.visibility !== undefined && opts.visibility !== null) {
                        opts.visibility = opts.visibility.toString().toLowerCase()
                    }
                    opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
                    function buildQueue(next) {
                        var data, lastTweensContainer;
                        if (opts.begin && elementsIndex === 0) {
                            try {
                                opts.begin.call(elements, elements)
                            } catch (error) {
                                setTimeout(function() {
                                    throw error
                                }, 1)
                            }
                        }
                        if (action === "scroll") {
                            var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"), scrollOffset = parseFloat(opts.offset) || 0, scrollPositionCurrent, scrollPositionCurrentAlternate, scrollPositionEnd;
                            if (opts.container) {
                                if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
                                    opts.container = opts.container[0] || opts.container;
                                    scrollPositionCurrent = opts.container["scroll" + scrollDirection];
                                    scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset
                                } else {
                                    opts.container = null
                                }
                            } else {
                                scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]];
                                scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]];
                                scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset;
                                /* GET */
                            }
                            tweensContainer = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: scrollPositionCurrent,
                                    currentValue: scrollPositionCurrent,
                                    endValue: scrollPositionEnd,
                                    unitType: "",
                                    easing: opts.easing,
                                    scrollData: {
                                        container: opts.container,
                                        direction: scrollDirection,
                                        alternateValue: scrollPositionCurrentAlternate
                                    }
                                },
                                element: element
                            };
                            if (Velocity.debug) {
                                console.log("tweensContainer (scroll): ", tweensContainer.scroll, element)
                            }
                        } else if (action === "reverse") {
                            data = Data(element);
                            if (!data) {
                                return
                            }
                            if (!data.tweensContainer) {
                                $.dequeue(element, opts.queue);
                                return
                            } else {
                                if (data.opts.display === "none") {
                                    data.opts.display = "auto"
                                }
                                if (data.opts.visibility === "hidden") {
                                    data.opts.visibility = "visible"
                                }
                                data.opts.loop = !1;
                                data.opts.begin = null;
                                data.opts.complete = null;
                                if (!options.easing) {
                                    delete opts.easing
                                }
                                if (!options.duration) {
                                    delete opts.duration
                                }
                                opts = $.extend({}, data.opts, opts);
                                lastTweensContainer = $.extend(!0, {}, data ? data.tweensContainer : null);
                                for (var lastTween in lastTweensContainer) {
                                    if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
                                        var lastStartValue = lastTweensContainer[lastTween].startValue;
                                        lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                                        lastTweensContainer[lastTween].endValue = lastStartValue;
                                        if (!Type.isEmptyObject(options)) {
                                            lastTweensContainer[lastTween].easing = opts.easing
                                        }
                                        if (Velocity.debug) {
                                            console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element)
                                        }
                                    }
                                }
                                tweensContainer = lastTweensContainer
                            }
                        } else if (action === "start") {
                            data = Data(element);
                            if (data && data.tweensContainer && data.isAnimating === !0) {
                                lastTweensContainer = data.tweensContainer
                            }
                            var parsePropertyValue = function(valueData, skipResolvingEasing) {
                                var endValue, easing, startValue;
                                if (Type.isFunction(valueData)) {
                                    valueData = valueData.call(element, elementArrayIndex, elementsLength)
                                }
                                if (Type.isArray(valueData)) {
                                    endValue = valueData[0];
                                    if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                                        startValue = valueData[1];
                                        /* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
                                    } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
                                        easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
                                        startValue = valueData[2]
                                    } else {
                                        startValue = valueData[1] || valueData[2]
                                    }
                                    /* Handle the single-value format. */
                                } else {
                                    endValue = valueData
                                }
                                if (!skipResolvingEasing) {
                                    easing = easing || opts.easing
                                }
                                if (Type.isFunction(endValue)) {
                                    endValue = endValue.call(element, elementArrayIndex, elementsLength)
                                }
                                if (Type.isFunction(startValue)) {
                                    startValue = startValue.call(element, elementArrayIndex, elementsLength)
                                }
                                return [endValue || 0, easing, startValue]
                            };
                            var fixPropertyValue = function(property, valueData) {
                                var rootProperty = CSS.Hooks.getRoot(property), rootPropertyValue = !1, endValue = valueData[0], easing = valueData[1], startValue = valueData[2], pattern;
                                if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === !1 && CSS.Normalizations.registered[rootProperty] === undefined) {
                                    if (Velocity.debug) {
                                        console.log("Skipping [" + rootProperty + "] due to a lack of browser support.")
                                    }
                                    return
                                }
                                if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                                    startValue = 0
                                }
                                if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
                                    if (startValue === undefined) {
                                        startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType
                                    }
                                    rootPropertyValue = data.rootPropertyValueCache[rootProperty];
                                    /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
                                } else {
                                    if (CSS.Hooks.registered[property]) {
                                        if (startValue === undefined) {
                                            rootPropertyValue = CSS.getPropertyValue(element, rootProperty);
                                            startValue = CSS.getPropertyValue(element, property, rootPropertyValue)
                                        } else {
                                            rootPropertyValue = CSS.Hooks.templates[rootProperty][1]
                                        }
                                        /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
                                    } else if (startValue === undefined) {
                                        startValue = CSS.getPropertyValue(element, property);
                                        /* GET */
                                    }
                                }
                                var separatedValue, endValueUnitType, startValueUnitType, operator = !1;
                                var separateValue = function(property, value) {
                                    var unitType, numericValue;
                                    numericValue = (value || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(match) {
                                        unitType = match;
                                        return ""
                                    });
                                    if (!unitType) {
                                        unitType = CSS.Values.getUnitType(property)
                                    }
                                    return [numericValue, unitType]
                                };
                                if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
                                    pattern = "";
                                    var iStart = 0
                                      , iEnd = 0
                                      , aStart = []
                                      , aEnd = []
                                      , inCalc = 0
                                      , inRGB = 0
                                      , inRGBA = 0;
                                    startValue = CSS.Hooks.fixColors(startValue);
                                    endValue = CSS.Hooks.fixColors(endValue);
                                    while (iStart < startValue.length && iEnd < endValue.length) {
                                        var cStart = startValue[iStart]
                                          , cEnd = endValue[iEnd];
                                        if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
                                            var tStart = cStart
                                              , tEnd = cEnd
                                              , dotStart = "."
                                              , dotEnd = ".";
                                            while (++iStart < startValue.length) {
                                                cStart = startValue[iStart];
                                                if (cStart === dotStart) {
                                                    dotStart = ".."
                                                } else if (!/\d/.test(cStart)) {
                                                    break
                                                }
                                                tStart += cStart
                                            }
                                            while (++iEnd < endValue.length) {
                                                cEnd = endValue[iEnd];
                                                if (cEnd === dotEnd) {
                                                    dotEnd = ".."
                                                } else if (!/\d/.test(cEnd)) {
                                                    break
                                                }
                                                tEnd += cEnd
                                            }
                                            var uStart = CSS.Hooks.getUnit(startValue, iStart)
                                              , uEnd = CSS.Hooks.getUnit(endValue, iEnd);
                                            iStart += uStart.length;
                                            iEnd += uEnd.length;
                                            if (uStart === uEnd) {
                                                if (tStart === tEnd) {
                                                    pattern += tStart + uStart
                                                } else {
                                                    pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
                                                    aStart.push(parseFloat(tStart));
                                                    aEnd.push(parseFloat(tEnd))
                                                }
                                            } else {
                                                var nStart = parseFloat(tStart)
                                                  , nEnd = parseFloat(tEnd);
                                                pattern += (inCalc < 5 ? "calc" : "") + "(" + (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart + " + " + (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd + ")";
                                                if (nStart) {
                                                    aStart.push(nStart);
                                                    aEnd.push(0)
                                                }
                                                if (nEnd) {
                                                    aStart.push(0);
                                                    aEnd.push(nEnd)
                                                }
                                            }
                                        } else if (cStart === cEnd) {
                                            pattern += cStart;
                                            iStart++;
                                            iEnd++;
                                            if (inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "(") {
                                                inCalc++
                                            } else if ((inCalc && inCalc < 5) || inCalc >= 4 && cStart === ")" && --inCalc < 5) {
                                                inCalc = 0
                                            }
                                            if (inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "(") {
                                                if (inRGB === 3 && cStart === "a") {
                                                    inRGBA = 1
                                                }
                                                inRGB++
                                            } else if (inRGBA && cStart === ",") {
                                                if (++inRGBA > 3) {
                                                    inRGB = inRGBA = 0
                                                }
                                            } else if ((inRGBA && inRGB < (inRGBA ? 5 : 4)) || inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
                                                inRGB = inRGBA = 0
                                            }
                                        } else {
                                            inCalc = 0;
                                            break
                                        }
                                    }
                                    if (iStart !== startValue.length || iEnd !== endValue.length) {
                                        if (Velocity.debug) {
                                            console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]")
                                        }
                                        pattern = undefined
                                    }
                                    if (pattern) {
                                        if (aStart.length) {
                                            if (Velocity.debug) {
                                                console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]")
                                            }
                                            startValue = aStart;
                                            endValue = aEnd;
                                            endValueUnitType = startValueUnitType = ""
                                        } else {
                                            pattern = undefined
                                        }
                                    }
                                }
                                if (!pattern) {
                                    separatedValue = separateValue(property, startValue);
                                    startValue = separatedValue[0];
                                    startValueUnitType = separatedValue[1];
                                    separatedValue = separateValue(property, endValue);
                                    endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
                                        operator = subMatch;
                                        return ""
                                    });
                                    endValueUnitType = separatedValue[1];
                                    startValue = parseFloat(startValue) || 0;
                                    endValue = parseFloat(endValue) || 0;
                                    if (endValueUnitType === "%") {
                                        if (/^(fontSize|lineHeight)$/.test(property)) {
                                            endValue = endValue / 100;
                                            endValueUnitType = "em";
                                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
                                        } else if (/^scale/.test(property)) {
                                            endValue = endValue / 100;
                                            endValueUnitType = "";
                                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
                                        } else if (/(Red|Green|Blue)$/i.test(property)) {
                                            endValue = (endValue / 100) * 255;
                                            endValueUnitType = ""
                                        }
                                    }
                                }
                                var calculateUnitRatios = function() {
                                    var sameRatioIndicators = {
                                        myParent: element.parentNode || document.body,
                                        position: CSS.getPropertyValue(element, "position"),
                                        fontSize: CSS.getPropertyValue(element, "fontSize")
                                    }
                                      , samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent))
                                      , sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
                                    callUnitConversionData.lastParent = sameRatioIndicators.myParent;
                                    callUnitConversionData.lastPosition = sameRatioIndicators.position;
                                    callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
                                    var measurement = 100
                                      , unitRatios = {};
                                    if (!sameEmRatio || !samePercentRatio) {
                                        var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                                        Velocity.init(dummy);
                                        sameRatioIndicators.myParent.appendChild(dummy);
                                        $.each(["overflow", "overflowX", "overflowY"], function(i, property) {
                                            Velocity.CSS.setPropertyValue(dummy, property, "hidden")
                                        });
                                        Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
                                        Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
                                        Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
                                        $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
                                            Velocity.CSS.setPropertyValue(dummy, property, measurement + "%")
                                        });
                                        Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
                                        unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, !0)) || 1) / measurement;
                                        unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, !0)) || 1) / measurement;
                                        unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement;
                                        sameRatioIndicators.myParent.removeChild(dummy)
                                    } else {
                                        unitRatios.emToPx = callUnitConversionData.lastEmToPx;
                                        unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
                                        unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight
                                    }
                                    if (callUnitConversionData.remToPx === null) {
                                        callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16;
                                        /* GET */
                                    }
                                    if (callUnitConversionData.vwToPx === null) {
                                        callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100;
                                        callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100;
                                        /* GET */
                                    }
                                    unitRatios.remToPx = callUnitConversionData.remToPx;
                                    unitRatios.vwToPx = callUnitConversionData.vwToPx;
                                    unitRatios.vhToPx = callUnitConversionData.vhToPx;
                                    if (Velocity.debug >= 1) {
                                        console.log("Unit ratios: " + JSON.stringify(unitRatios), element)
                                    }
                                    return unitRatios
                                };
                                if (/[\/*]/.test(operator)) {
                                    endValueUnitType = startValueUnitType
                                } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
                                    if (endValue === 0) {
                                        endValueUnitType = startValueUnitType
                                    } else {
                                        elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
                                        var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
                                        switch (startValueUnitType) {
                                        case "%":
                                            startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            startValue *= elementUnitConversionData[startValueUnitType + "ToPx"]
                                        }
                                        switch (endValueUnitType) {
                                        case "%":
                                            startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"]
                                        }
                                    }
                                }
                                switch (operator) {
                                case "+":
                                    endValue = startValue + endValue;
                                    break;
                                case "-":
                                    endValue = startValue - endValue;
                                    break;
                                case "*":
                                    endValue = startValue * endValue;
                                    break;
                                case "/":
                                    endValue = startValue / endValue;
                                    break
                                }
                                tweensContainer[property] = {
                                    rootPropertyValue: rootPropertyValue,
                                    startValue: startValue,
                                    currentValue: startValue,
                                    endValue: endValue,
                                    unitType: endValueUnitType,
                                    easing: easing
                                };
                                if (pattern) {
                                    tweensContainer[property].pattern = pattern
                                }
                                if (Velocity.debug) {
                                    console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element)
                                }
                            };
                            for (var property in propertiesMap) {
                                if (!propertiesMap.hasOwnProperty(property)) {
                                    continue
                                }
                                var propertyName = CSS.Names.camelCase(property)
                                  , valueData = parsePropertyValue(propertiesMap[property]);
                                if (_inArray(CSS.Lists.colors, propertyName)) {
                                    var endValue = valueData[0]
                                      , easing = valueData[1]
                                      , startValue = valueData[2];
                                    if (CSS.RegEx.isHex.test(endValue)) {
                                        var colorComponents = ["Red", "Green", "Blue"]
                                          , endValueRGB = CSS.Values.hexToRgb(endValue)
                                          , startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
                                        for (var i = 0; i < colorComponents.length; i++) {
                                            var dataArray = [endValueRGB[i]];
                                            if (easing) {
                                                dataArray.push(easing)
                                            }
                                            if (startValueRGB !== undefined) {
                                                dataArray.push(startValueRGB[i])
                                            }
                                            fixPropertyValue(propertyName + colorComponents[i], dataArray)
                                        }
                                        continue
                                    }
                                }
                                fixPropertyValue(propertyName, valueData)
                            }
                            tweensContainer.element = element
                        }
                        if (tweensContainer.element) {
                            CSS.Values.addClass(element, "velocity-animating");
                            call.push(tweensContainer);
                            data = Data(element);
                            if (data) {
                                if (opts.queue === "") {
                                    data.tweensContainer = tweensContainer;
                                    data.opts = opts
                                }
                                data.isAnimating = !0
                            }
                            if (elementsIndex === elementsLength - 1) {
                                Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);
                                if (Velocity.State.isTicking === !1) {
                                    Velocity.State.isTicking = !0;
                                    tick()
                                }
                            } else {
                                elementsIndex++
                            }
                        }
                    }
                    if (opts.queue === !1) {
                        if (opts.delay) {
                            var callIndex = Velocity.State.delayedElements.count++;
                            Velocity.State.delayedElements[callIndex] = element;
                            var delayComplete = (function(index) {
                                return function() {
                                    Velocity.State.delayedElements[index] = !1;
                                    buildQueue()
                                }
                            }
                            )(callIndex);
                            Data(element).delayBegin = (new Date()).getTime();
                            Data(element).delay = parseFloat(opts.delay);
                            Data(element).delayTimer = {
                                setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
                                next: delayComplete
                            }
                        } else {
                            buildQueue()
                        }
                    } else {
                        $.queue(element, opts.queue, function(next, clearQueue) {
                            if (clearQueue === !0) {
                                if (promiseData.promise) {
                                    promiseData.resolver(elements)
                                }
                                return !0
                            }
                            Velocity.velocityQueueEntryFlag = !0;
                            buildQueue(next)
                        })
                    }
                    if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
                        $.dequeue(element)
                    }
                }
                $.each(elements, function(i, element) {
                    if (Type.isNode(element)) {
                        processElement(element, i)
                    }
                });
                opts = $.extend({}, Velocity.defaults, options);
                opts.loop = parseInt(opts.loop, 10);
                var reverseCallsCount = (opts.loop * 2) - 1;
                if (opts.loop) {
                    for (var x = 0; x < reverseCallsCount; x++) {
                        var reverseOptions = {
                            delay: opts.delay,
                            progress: opts.progress
                        };
                        if (x === reverseCallsCount - 1) {
                            reverseOptions.display = opts.display;
                            reverseOptions.visibility = opts.visibility;
                            reverseOptions.complete = opts.complete
                        }
                        animate(elements, "reverse", reverseOptions)
                    }
                }
                return getChain()
            };
            Velocity = $.extend(animate, Velocity);
            Velocity.animate = animate;
            var ticker = window.requestAnimationFrame || rAFShim;
            if (!Velocity.State.isMobile && document.hidden !== undefined) {
                var updateTicker = function() {
                    if (document.hidden) {
                        ticker = function(callback) {
                            return setTimeout(function() {
                                callback(!0)
                            }, 16)
                        }
                        ;
                        tick()
                    } else {
                        ticker = window.requestAnimationFrame || rAFShim
                    }
                };
                updateTicker();
                document.addEventListener("visibilitychange", updateTicker)
            }
            function tick(timestamp) {
                if (timestamp) {
                    var timeCurrent = Velocity.timestamp && timestamp !== !0 ? timestamp : performance.now();
                    var callsLength = Velocity.State.calls.length;
                    if (callsLength > 10000) {
                        Velocity.State.calls = compactSparseArray(Velocity.State.calls);
                        callsLength = Velocity.State.calls.length
                    }
                    for (var i = 0; i < callsLength; i++) {
                        if (!Velocity.State.calls[i]) {
                            continue
                        }
                        var callContainer = Velocity.State.calls[i]
                          , call = callContainer[0]
                          , opts = callContainer[2]
                          , timeStart = callContainer[3]
                          , firstTick = !!timeStart
                          , tweenDummyValue = null
                          , pauseObject = callContainer[5]
                          , millisecondsEllapsed = callContainer[6];
                        if (!timeStart) {
                            timeStart = Velocity.State.calls[i][3] = timeCurrent - 16
                        }
                        if (pauseObject) {
                            if (pauseObject.resume === !0) {
                                timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);
                                callContainer[5] = null
                            } else {
                                continue
                            }
                        }
                        millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;
                        var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);
                        for (var j = 0, callLength = call.length; j < callLength; j++) {
                            var tweensContainer = call[j]
                              , element = tweensContainer.element;
                            if (!Data(element)) {
                                continue
                            }
                            var transformPropertyExists = !1;
                            if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
                                if (opts.display === "flex") {
                                    var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    $.each(flexValues, function(i, flexValue) {
                                        CSS.setPropertyValue(element, "display", flexValue)
                                    })
                                }
                                CSS.setPropertyValue(element, "display", opts.display)
                            }
                            if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                                CSS.setPropertyValue(element, "visibility", opts.visibility)
                            }
                            for (var property in tweensContainer) {
                                if (tweensContainer.hasOwnProperty(property) && property !== "element") {
                                    var tween = tweensContainer[property], currentValue, easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
                                    if (Type.isString(tween.pattern)) {
                                        var patternReplace = percentComplete === 1 ? function($0, index, round) {
                                            var result = tween.endValue[index];
                                            return round ? Math.round(result) : result
                                        }
                                        : function($0, index, round) {
                                            var startValue = tween.startValue[index]
                                              , tweenDelta = tween.endValue[index] - startValue
                                              , result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
                                            return round ? Math.round(result) : result
                                        }
                                        ;
                                        currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace)
                                    } else if (percentComplete === 1) {
                                        currentValue = tween.endValue
                                    } else {
                                        var tweenDelta = tween.endValue - tween.startValue;
                                        currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
                                        /* If no value change is occurring, don't proceed with DOM updating. */
                                    }
                                    if (!firstTick && (currentValue === tween.currentValue)) {
                                        continue
                                    }
                                    tween.currentValue = currentValue;
                                    if (property === "tween") {
                                        tweenDummyValue = currentValue
                                    } else {
                                        var hookRoot;
                                        if (CSS.Hooks.registered[property]) {
                                            hookRoot = CSS.Hooks.getRoot(property);
                                            var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
                                            if (rootPropertyValueCache) {
                                                tween.rootPropertyValue = rootPropertyValueCache
                                            }
                                        }
                                        var adjustedSetData = CSS.setPropertyValue(element, property, tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);
                                        if (CSS.Hooks.registered[property]) {
                                            if (CSS.Normalizations.registered[hookRoot]) {
                                                Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1])
                                            } else {
                                                Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1]
                                            }
                                        }
                                        if (adjustedSetData[0] === "transform") {
                                            transformPropertyExists = !0
                                        }
                                    }
                                }
                            }
                            if (opts.mobileHA) {
                                if (Data(element).transformCache.translate3d === undefined) {
                                    Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
                                    transformPropertyExists = !0
                                }
                            }
                            if (transformPropertyExists) {
                                CSS.flushTransformCache(element)
                            }
                        }
                        if (opts.display !== undefined && opts.display !== "none") {
                            Velocity.State.calls[i][2].display = !1
                        }
                        if (opts.visibility !== undefined && opts.visibility !== "hidden") {
                            Velocity.State.calls[i][2].visibility = !1
                        }
                        if (opts.progress) {
                            opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, (timeStart + opts.duration) - timeCurrent), timeStart, tweenDummyValue)
                        }
                        if (percentComplete === 1) {
                            completeCall(i)
                        }
                    }
                }
                if (Velocity.State.isTicking) {
                    ticker(tick)
                }
            }
            function completeCall(callIndex, isStopped) {
                if (!Velocity.State.calls[callIndex]) {
                    return !1
                }
                var call = Velocity.State.calls[callIndex][0]
                  , elements = Velocity.State.calls[callIndex][1]
                  , opts = Velocity.State.calls[callIndex][2]
                  , resolver = Velocity.State.calls[callIndex][4];
                var remainingCallsExist = !1;
                for (var i = 0, callLength = call.length; i < callLength; i++) {
                    var element = call[i].element;
                    if (!isStopped && !opts.loop) {
                        if (opts.display === "none") {
                            CSS.setPropertyValue(element, "display", opts.display)
                        }
                        if (opts.visibility === "hidden") {
                            CSS.setPropertyValue(element, "visibility", opts.visibility)
                        }
                    }
                    var data = Data(element);
                    if (opts.loop !== !0 && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
                        if (data) {
                            data.isAnimating = !1;
                            data.rootPropertyValueCache = {};
                            var transformHAPropertyExists = !1;
                            $.each(CSS.Lists.transforms3D, function(i, transformName) {
                                var defaultValue = /^scale/.test(transformName) ? 1 : 0
                                  , currentValue = data.transformCache[transformName];
                                if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                                    transformHAPropertyExists = !0;
                                    delete data.transformCache[transformName]
                                }
                            });
                            if (opts.mobileHA) {
                                transformHAPropertyExists = !0;
                                delete data.transformCache.translate3d
                            }
                            if (transformHAPropertyExists) {
                                CSS.flushTransformCache(element)
                            }
                            CSS.Values.removeClass(element, "velocity-animating")
                        }
                    }
                    if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
                        try {
                            opts.complete.call(elements, elements)
                        } catch (error) {
                            setTimeout(function() {
                                throw error
                            }, 1)
                        }
                    }
                    if (resolver && opts.loop !== !0) {
                        resolver(elements)
                    }
                    if (data && opts.loop === !0 && !isStopped) {
                        $.each(data.tweensContainer, function(propertyName, tweenContainer) {
                            if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
                                var oldStartValue = tweenContainer.startValue;
                                tweenContainer.startValue = tweenContainer.endValue;
                                tweenContainer.endValue = oldStartValue
                            }
                            if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
                                tweenContainer.endValue = 0;
                                tweenContainer.startValue = 100
                            }
                        });
                        Velocity(element, "reverse", {
                            loop: !0,
                            delay: opts.delay
                        })
                    }
                    if (opts.queue !== !1) {
                        $.dequeue(element, opts.queue)
                    }
                }
                Velocity.State.calls[callIndex] = !1;
                for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
                    if (Velocity.State.calls[j] !== !1) {
                        remainingCallsExist = !0;
                        break
                    }
                }
                if (remainingCallsExist === !1) {
                    Velocity.State.isTicking = !1;
                    delete Velocity.State.calls;
                    Velocity.State.calls = []
                }
            }
            global.Velocity = Velocity;
            if (global !== window) {
                global.fn.velocity = animate;
                global.fn.velocity.defaults = Velocity.defaults
            }
            $.each(["Down", "Up"], function(i, direction) {
                Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
                    var opts = $.extend({}, options)
                      , begin = opts.begin
                      , complete = opts.complete
                      , inlineValues = {}
                      , computedValues = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                    if (opts.display === undefined) {
                        opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none")
                    }
                    opts.begin = function() {
                        if (elementsIndex === 0 && begin) {
                            begin.call(elements, elements)
                        }
                        for (var property in computedValues) {
                            if (!computedValues.hasOwnProperty(property)) {
                                continue
                            }
                            inlineValues[property] = element.style[property];
                            var propertyValue = CSS.getPropertyValue(element, property);
                            computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue]
                        }
                        inlineValues.overflow = element.style.overflow;
                        element.style.overflow = "hidden"
                    }
                    ;
                    opts.complete = function() {
                        for (var property in inlineValues) {
                            if (inlineValues.hasOwnProperty(property)) {
                                element.style[property] = inlineValues[property]
                            }
                        }
                        if (elementsIndex === elementsSize - 1) {
                            if (complete) {
                                complete.call(elements, elements)
                            }
                            if (promiseData) {
                                promiseData.resolver(elements)
                            }
                        }
                    }
                    ;
                    Velocity(element, computedValues, opts)
                }
            });
            $.each(["In", "Out"], function(i, direction) {
                Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
                    var opts = $.extend({}, options)
                      , complete = opts.complete
                      , propertiesMap = {
                        opacity: (direction === "In") ? 1 : 0
                    };
                    if (elementsIndex !== 0) {
                        opts.begin = null
                    }
                    if (elementsIndex !== elementsSize - 1) {
                        opts.complete = null
                    } else {
                        opts.complete = function() {
                            if (complete) {
                                complete.call(elements, elements)
                            }
                            if (promiseData) {
                                promiseData.resolver(elements)
                            }
                        }
                    }
                    if (opts.display === undefined) {
                        opts.display = (direction === "In" ? "auto" : "none")
                    }
                    Velocity(this, propertiesMap, opts)
                }
            });
            return Velocity
        }((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined))
    }))
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var ProductMinitature = (function() {
        function ProductMinitature() {
            _classCallCheck(this, ProductMinitature)
        }
        _createClass(ProductMinitature, [{
            key: 'init',
            value: function init() {
                (0,
                _jquery2['default'])('.js-product-miniature').each(function(index, element) {
                    if ((0,
                    _jquery2['default'])(element).find('.color').length > 5) {
                        (function() {
                            var count = 0;
                            (0,
                            _jquery2['default'])(element).find('.color').each(function(index, element) {
                                if (index > 4) {
                                    (0,
                                    _jquery2['default'])(element).hide();
                                    count++
                                }
                            });
                            (0,
                            _jquery2['default'])(element).find('.js-count').append('+' + count)
                        }
                        )()
                    }
                })
            }
        }]);
        return ProductMinitature
    }
    )();
    exports['default'] = ProductMinitature;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    (0,
    _jquery2['default'])(document).ready(function() {
        createProductSpin();
        createInputFile();
        coverImage();
        prestashop.on('updatedProduct', function(event) {
            createInputFile();
            coverImage();
            if (event && event.product_minimal_quantity) {
                var minimalProductQuantity = parseInt(event.product_minimal_quantity, 10);
                var quantityInputSelector = '#quantity_wanted';
                var quantityInput = (0,
                _jquery2['default'])(quantityInputSelector);
                quantityInput.trigger('touchspin.updatesettings', {
                    min: minimalProductQuantity
                })
            }
            prdImgCarousel("#main .product-images");
            (0,
            _jquery2['default'])((0,
            _jquery2['default'])('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');
            (0,
            _jquery2['default'])('.js-product-images-modal').replaceWith(event.product_images_modal)
        });
        function coverImage() {
            (0,
            _jquery2['default'])('.js-thumb').on('click', function(event) {
                (0,
                _jquery2['default'])('.js-modal-product-cover').attr('src', (0,
                _jquery2['default'])(event.target).data('image-large-src'));
                (0,
                _jquery2['default'])('.selected').removeClass('selected');
                (0,
                _jquery2['default'])(event.target).addClass('selected');
                (0,
                _jquery2['default'])('.js-qv-product-cover').prop('src', (0,
                _jquery2['default'])(event.currentTarget).data('image-large-src'))
            })
        }
        function createInputFile() {
            (0,
            _jquery2['default'])('.js-file-input').on('change', function(event) {
                var target = undefined
                  , file = undefined;
                if ((target = (0,
                _jquery2['default'])(event.currentTarget)[0]) && (file = target.files[0])) {
                    (0,
                    _jquery2['default'])(target).prev().text(file.name)
                }
            })
        }
        function createProductSpin() {
            var quantityInput = (0,
            _jquery2['default'])('#quantity_wanted');
            quantityInput.TouchSpin({
                verticalbuttons: !0,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin',
                buttonup_class: 'btn btn-touchspin js-touchspin',
                min: parseInt(quantityInput.attr('min'), 10),
                max: 1000000
            });
            quantityInput.on('change', function(event) {
                var $productRefresh = (0,
                _jquery2['default'])('.product-refresh');
                (0,
                _jquery2['default'])(event.currentTarget).trigger('touchspin.stopspin');
                $productRefresh.trigger('click', {
                    eventType: 'updatedProductQuantity'
                });
                event.preventDefault();
                return !1
            })
        }
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    _prestashop2['default'].cart = _prestashop2['default'].cart || {};
    _prestashop2['default'].cart.active_inputs = null;
    var spinnerSelector = 'input[name="product-quantity-spin"]';
    function createSpin() {
        _jquery2['default'].each((0,
        _jquery2['default'])(spinnerSelector), function(index, spinner) {
            (0,
            _jquery2['default'])(spinner).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: 'material-icons touchspin-up',
                verticaldownclass: 'material-icons touchspin-down',
                buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
                buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
                min: parseInt((0,
                _jquery2['default'])(spinner).attr('min'), 10),
                max: 1000000
            })
        })
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        var productLineInCartSelector = '.js-cart-line-product-quantity';
        var promises = [];
        _prestashop2['default'].on('updateCart', function() {
            (0,
            _jquery2['default'])('.quickview').modal('hide')
        });
        _prestashop2['default'].on('updatedCart', function() {
            createSpin()
        });
        createSpin();
        var $body = (0,
        _jquery2['default'])('body');
        function isTouchSpin(namespace) {
            return namespace === 'on.startupspin' || namespace === 'on.startdownspin'
        }
        function shouldIncreaseProductQuantity(namespace) {
            return namespace === 'on.startupspin'
        }
        function findCartLineProductQuantityInput($target) {
            var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);
            if ($input.is(':focus')) {
                return null
            } else {
                return $input
            }
        }
        function camelize(subject) {
            var actionTypeParts = subject.split('-');
            var i = undefined;
            var part = undefined;
            var camelizedSubject = '';
            for (i = 0; i < actionTypeParts.length; i++) {
                part = actionTypeParts[i];
                if (0 !== i) {
                    part = part.substring(0, 1).toUpperCase() + part.substring(1)
                }
                camelizedSubject = camelizedSubject + part
            }
            return camelizedSubject
        }
        function parseCartAction($target, namespace) {
            if (!isTouchSpin(namespace)) {
                return {
                    url: $target.attr('href'),
                    type: camelize($target.data('link-action'))
                }
            }
            var $input = findCartLineProductQuantityInput($target);
            if (!$input) {
                return
            }
            var cartAction = {};
            if (shouldIncreaseProductQuantity(namespace)) {
                cartAction = {
                    url: $input.data('up-url'),
                    type: 'increaseProductQuantity'
                }
            } else {
                cartAction = {
                    url: $input.data('down-url'),
                    type: 'decreaseProductQuantity'
                }
            }
            return cartAction
        }
        var abortPreviousRequests = function abortPreviousRequests() {
            var promise;
            while (promises.length > 0) {
                promise = promises.pop();
                promise.abort()
            }
        };
        var getTouchSpinInput = function getTouchSpinInput($button) {
            return (0,
            _jquery2['default'])($button.parents('.bootstrap-touchspin').find('input'))
        };
        var handleCartAction = function handleCartAction(event) {
            event.preventDefault();
            var $target = (0,
            _jquery2['default'])(event.currentTarget);
            var dataset = event.currentTarget.dataset;
            var cartAction = parseCartAction($target, event.namespace);
            var requestData = {
                ajax: '1',
                action: 'update'
            };
            if (typeof cartAction === 'undefined') {
                return
            }
            abortPreviousRequests();
            _jquery2['default'].ajax({
                url: cartAction.url,
                method: 'POST',
                data: requestData,
                dataType: 'json',
                beforeSend: function beforeSend(jqXHR) {
                    promises.push(jqXHR)
                }
            }).then(function(resp) {
                var $quantityInput = getTouchSpinInput($target);
                $quantityInput.val(resp.quantity);
                _prestashop2['default'].emit('updateCart', {
                    reason: dataset
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateProductInCart',
                    resp: resp,
                    cartAction: cartAction.type
                })
            })
        };
        $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);
        $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
        $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);
        function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
            abortPreviousRequests();
            return _jquery2['default'].ajax({
                url: updateQuantityInCartUrl,
                method: 'POST',
                data: requestData,
                dataType: 'json',
                beforeSend: function beforeSend(jqXHR) {
                    promises.push(jqXHR)
                }
            }).then(function(resp) {
                $target.val(resp.quantity);
                var dataset;
                if ($target && $target.dataset) {
                    dataset = $target.dataset
                } else {
                    dataset = resp
                }
                _prestashop2['default'].emit('updateCart', {
                    reason: dataset
                })
            }).fail(function(resp) {
                _prestashop2['default'].emit('handleError', {
                    eventType: 'updateProductQuantityInCart',
                    resp: resp
                })
            })
        }
        function getRequestData(quantity) {
            return {
                ajax: '1',
                qty: Math.abs(quantity),
                action: 'update',
                op: getQuantityChangeType(quantity)
            }
        }
        function getQuantityChangeType($quantity) {
            return $quantity > 0 ? 'up' : 'down'
        }
        function updateProductQuantityInCart(event) {
            var $target = (0,
            _jquery2['default'])(event.currentTarget);
            var updateQuantityInCartUrl = $target.data('update-url');
            var baseValue = $target.attr('value');
            var targetValue = $target.val();
            if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
                $target.val(baseValue);
                return
            }
            var qty = targetValue - baseValue;
            if (qty == 0) {
                return
            }
            var requestData = getRequestData(qty);
            sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target)
        }
        $body.on('focusout', productLineInCartSelector, function(event) {
            updateProductQuantityInCart(event)
        });
        $body.on('keyup', productLineInCartSelector, function(event) {
            if (event.keyCode == 13) {
                updateProductQuantityInCart(event)
            }
        });
        $body.on('click', '.js-discount .code', function(event) {
            event.stopPropagation();
            var $code = (0,
            _jquery2['default'])(event.currentTarget);
            var $discountInput = (0,
            _jquery2['default'])('[name=discount_name]');
            $discountInput.val($code.text());
            return !1
        })
    });
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var DropDown = (function() {
        function DropDown(el) {
            _classCallCheck(this, DropDown);
            this.el = el
        }
        _createClass(DropDown, [{
            key: 'init',
            value: function init() {
                this.el.on('show.bs.dropdown', function(e, el) {
                    if (el) {
                        (0,
                        _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(!0, !0).slideDown()
                    } else {
                        (0,
                        _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0, !0).slideDown()
                    }
                });
                this.el.on('hide.bs.dropdown', function(e, el) {
                    if (el) {
                        (0,
                        _jquery2['default'])('#' + el).find('.dropdown-menu').first().stop(!0, !0).slideUp()
                    } else {
                        (0,
                        _jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0, !0).slideUp()
                    }
                });
                this.el.find('select.link').each(function(idx, el) {
                    (0,
                    _jquery2['default'])(el).on('change', function(event) {
                        window.location = (0,
                        _jquery2['default'])(this).val()
                    })
                })
            }
        }]);
        return DropDown
    }
    )();
    exports['default'] = DropDown;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var Form = (function() {
        function Form() {
            _classCallCheck(this, Form)
        }
        _createClass(Form, [{
            key: 'init',
            value: function init() {
                this.parentFocus();
                this.togglePasswordVisibility()
            }
        }, {
            key: 'parentFocus',
            value: function parentFocus() {
                (0,
                _jquery2['default'])('.js-child-focus').focus(function() {
                    (0,
                    _jquery2['default'])(this).closest('.js-parent-focus').addClass('focus')
                });
                (0,
                _jquery2['default'])('.js-child-focus').focusout(function() {
                    (0,
                    _jquery2['default'])(this).closest('.js-parent-focus').removeClass('focus')
                })
            }
        }, {
            key: 'togglePasswordVisibility',
            value: function togglePasswordVisibility() {
                (0,
                _jquery2['default'])('button[data-action="show-password"]').on('click', function() {
                    var elm = (0,
                    _jquery2['default'])(this).closest('.input-group').children('input.js-visible-password');
                    if (elm.attr('type') === 'password') {
                        elm.attr('type', 'text');
                        (0,
                        _jquery2['default'])(this).text((0,
                        _jquery2['default'])(this).data('textHide'))
                    } else {
                        elm.attr('type', 'password');
                        (0,
                        _jquery2['default'])(this).text((0,
                        _jquery2['default'])(this).data('textShow'))
                    }
                })
            }
        }]);
        return Form
    }
    )();
    exports['default'] = Form;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    __webpack_require__(58);
    var ProductSelect = (function() {
        function ProductSelect() {
            _classCallCheck(this, ProductSelect)
        }
        _createClass(ProductSelect, [{
            key: 'init',
            value: function init() {
                (0,
                _jquery2['default'])('body').on('click', '.js-modal-thumb', function(event) {
                    if ((0,
                    _jquery2['default'])('.js-modal-thumb').hasClass('selected')) {
                        (0,
                        _jquery2['default'])('.js-modal-thumb').removeClass('selected')
                    }
                    (0,
                    _jquery2['default'])(event.currentTarget).addClass('selected');
                    (0,
                    _jquery2['default'])('.js-modal-product-cover').attr('src', (0,
                    _jquery2['default'])(event.target).data('image-large-src'));
                    (0,
                    _jquery2['default'])('.js-modal-product-cover').attr('title', (0,
                    _jquery2['default'])(event.target).attr('title'));
                    (0,
                    _jquery2['default'])('.js-modal-product-cover').attr('alt', (0,
                    _jquery2['default'])(event.target).attr('alt'))
                });
                (0,
                _jquery2['default'])('body').on('click', '.layer .zoom-in', function(event) {
                    prdImgCarousel("#product-modal .product-images")
                })
            }
        }]);
        return ProductSelect
    }
    )();
    exports['default'] = ProductSelect;
    module.exports = exports['default'];
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: !0
    });
    var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1;
                descriptor.configurable = !0;
                if ('value'in descriptor)
                    descriptor.writable = !0;
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor
        }
    }
    )();
    var _get = function get(_x, _x2, _x3) {
        var _again = !0;
        _function: while (_again) {
            var object = _x
              , property = _x2
              , receiver = _x3;
            _again = !1;
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    _x = parent;
                    _x2 = property;
                    _x3 = receiver;
                    _again = !0;
                    desc = parent = undefined;
                    continue _function
                }
            } else if ('value'in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        }
    };
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
        }
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
    }
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    var _dropDown = __webpack_require__(62);
    var _dropDown2 = _interopRequireDefault(_dropDown);
    var TopMenu = (function(_DropDown) {
        _inherits(TopMenu, _DropDown);
        function TopMenu() {
            _classCallCheck(this, TopMenu);
            _get(Object.getPrototypeOf(TopMenu.prototype), 'constructor', this).apply(this, arguments)
        }
        _createClass(TopMenu, [{
            key: 'init',
            value: function init() {
                var _this = this;
                var elmId = undefined;
                var self = this;
                this.el.find('li').hover(function(e) {
                    if (_this.el.parent().hasClass('mobile')) {
                        return
                    }
                    if (elmId !== (0,
                    _jquery2['default'])(e.currentTarget).attr('id')) {
                        if ((0,
                        _jquery2['default'])(e.target).data('depth') === 0) {
                            (0,
                            _jquery2['default'])('#' + elmId + ' .js-sub-menu').hide()
                        }
                        elmId = (0,
                        _jquery2['default'])(e.currentTarget).attr('id')
                    }
                    if (elmId && (0,
                    _jquery2['default'])(e.target).data('depth') === 0) {
                        (0,
                        _jquery2['default'])('#' + elmId + ' .js-sub-menu').show()
                    }
                });
                (0,
                _jquery2['default'])('.menu-icon').on('click', function() {
                    document.getElementById("mobile_top_menu_wrapper").style.width = "300px";
                    document.getElementById("menuCanvas").style.width = "100%";
                    document.getElementById("menuCanvas").style.opacity = "0.8";
                    self.toggleMobileMenu()
                });
                (0,
                _jquery2['default'])('.tdclose').on('click', function() {
                    document.getElementById("mobile_top_menu_wrapper").style.width = "0px";
                    (0,
                    _jquery2['default'])('#menuCanvas').removeAttr('style')
                });
                (0,
                _jquery2['default'])('.js-top-menu').mouseleave(function() {
                    if (_this.el.parent().hasClass('mobile')) {
                        return
                    }
                    (0,
                    _jquery2['default'])('#' + elmId + ' .js-sub-menu').hide()
                });
                this.el.on('click', function(e) {
                    if (_this.el.parent().hasClass('mobile')) {
                        return
                    }
                    e.stopPropagation()
                });
                prestashop.on('responsive update', function(event) {
                    (0,
                    _jquery2['default'])('.js-sub-menu').removeAttr('style');
                    self.toggleMobileMenu()
                });
                _get(Object.getPrototypeOf(TopMenu.prototype), 'init', this).call(this)
            }
        }, {
            key: 'toggleMobileMenu',
            value: function toggleMobileMenu() {
                if ((0,
                _jquery2['default'])('#mobile_top_menu_wrapper').is(":visible")) {} else {}
            }
        }]);
        return TopMenu
    }
    )(_dropDown2['default']);
    exports['default'] = TopMenu;
    function topNavbar() {
        (0,
        _jquery2['default'])("#top-menu > li > .sub-menu > ul.top-menu").each(function() {
            var a = (0,
            _jquery2['default'])(this).children("li").length
              , b = 0;
            (0,
            _jquery2['default'])(this).children("li").each(function(c, d) {
                b = a
            }),
            b < 1 ? (0,
            _jquery2['default'])(this).parent().addClass("onecolumn") : b % 3 === 0 || b > 3 ? (0,
            _jquery2['default'])(this).parent().addClass("threecolumn") : b % 2 === 0 && (0,
            _jquery2['default'])(this).parent().addClass("twocolumn")
        });
        var a = (0,
        _jquery2['default'])("#_desktop_top_menu")
          , b = (0,
        _jquery2['default'])(a).find("#top-menu > li");
        b.hover(function() {
            (0,
            _jquery2['default'])(document).width() <= 991 ? (0,
            _jquery2['default'])("#_desktop_top_menu .sub-menu").removeAttr("style") : (0,
            _jquery2['default'])(document).width() >= 992 && ((0,
            _jquery2['default'])("body").hasClass("lang-rtl") ? (0,
            _jquery2['default'])("#_desktop_top_menu .sub-menu").each(function() {
                var a = (0,
                _jquery2['default'])("#_desktop_top_menu").offset()
                  , b = (0,
                _jquery2['default'])(this).parent().offset()
                  , c = (0,
                _jquery2['default'])(this).parent().outerWidth()
                  , d = (0,
                _jquery2['default'])(window).width()
                  , e = d - (a.left + (0,
                _jquery2['default'])("#_desktop_top_menu").outerWidth())
                  , f = d - (b.left + c)
                  , g = f + (0,
                _jquery2['default'])(this).outerWidth() - (e + (0,
                _jquery2['default'])("#_desktop_top_menu").outerWidth());
                g > 0 && (0,
                _jquery2['default'])(this).css("margin-right", "-" + g + "px")
            }) : (0,
            _jquery2['default'])("#_desktop_top_menu .sub-menu").each(function() {
                var a = (0,
                _jquery2['default'])("#_desktop_top_menu").offset()
                  , b = (0,
                _jquery2['default'])(this).parent().offset()
                  , c = b.left + (0,
                _jquery2['default'])(this).outerWidth() - (a.left + (0,
                _jquery2['default'])("#_desktop_top_menu").outerWidth());
                c > 0 && (0,
                _jquery2['default'])(this).css("margin-left", "-" + c + "px")
            }))
        })
    }
    (0,
    _jquery2['default'])(document).ready(function() {
        topNavbar()
    }),
    (0,
    _jquery2['default'])(window).resize(function() {
        topNavbar()
    });
    module.exports = exports['default'];
    /***/
}
), (function(module, exports) {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined
    }
    module.exports = EventEmitter;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this
    }
    ;
    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        if (!this._events)
            this._events = {};
        if (type === 'error') {
            if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er
                } else {
                    var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                    err.context = er;
                    throw err
                }
            }
        }
        handler = this._events[type];
        if (isUndefined(handler))
            return !1;
        if (isFunction(handler)) {
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args)
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }
        return !0
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events)
            this._events = {};
        if (this._events.newListener)
            this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
        if (!this._events[type])
            this._events[type] = listener;
        else if (isObject(this._events[type]))
            this._events[type].push(listener);
        else
            this._events[type] = [this._events[type], listener];
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners
            } else {
                m = EventEmitter.defaultMaxListeners
            }
            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = !0;
                console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                if (typeof console.trace === 'function') {
                    console.trace()
                }
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        var fired = !1;
        function g() {
            this.removeListener(type, g);
            if (!fired) {
                fired = !0;
                listener.apply(this, arguments)
            }
        }
        g.listener = listener;
        this.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener))
            throw TypeError('listener must be a function');
        if (!this._events || !this._events[type])
            return this;
        list = this._events[type];
        length = list.length;
        position = -1;
        if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit('removeListener', type, listener)
        } else if (isObject(list)) {
            for (i = length; i-- > 0; ) {
                if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            if (list.length === 1) {
                list.length = 0;
                delete this._events[type]
            } else {
                list.splice(position, 1)
            }
            if (this._events.removeListener)
                this.emit('removeListener', type, listener)
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events)
            return this;
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this
        }
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener')
                    continue;
                this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this
        }
        listeners = this._events[type];
        if (isFunction(listeners)) {
            this.removeListener(type, listeners)
        } else if (listeners) {
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret
    }
    ;
    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length
        }
        return 0
    }
    ;
    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type)
    }
    ;
    function isFunction(arg) {
        return typeof arg === 'function'
    }
    function isNumber(arg) {
        return typeof arg === 'number'
    }
    function isObject(arg) {
        return typeof arg === 'object' && arg !== null
    }
    function isUndefined(arg) {
        return arg === void 0
    }
    /***/
}
), (function(module, exports) {
    "use strict";
    (function($) {
        var nextId = 0;
        var Filestyle = function Filestyle(element, options) {
            this.options = options;
            this.$elementFilestyle = [];
            this.$element = $(element)
        };
        Filestyle.prototype = {
            clear: function clear() {
                this.$element.val("");
                this.$elementFilestyle.find(":text").val("");
                this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function destroy() {
                this.$element.removeAttr("style").removeData("filestyle");
                this.$elementFilestyle.remove()
            },
            disabled: function disabled(value) {
                if (value === !0) {
                    if (!this.options.disabled) {
                        this.$element.attr("disabled", "true");
                        this.$elementFilestyle.find("label").attr("disabled", "true");
                        this.options.disabled = !0
                    }
                } else {
                    if (value === !1) {
                        if (this.options.disabled) {
                            this.$element.removeAttr("disabled");
                            this.$elementFilestyle.find("label").removeAttr("disabled");
                            this.options.disabled = !1
                        }
                    } else {
                        return this.options.disabled
                    }
                }
            },
            buttonBefore: function buttonBefore(value) {
                if (value === !0) {
                    if (!this.options.buttonBefore) {
                        this.options.buttonBefore = !0;
                        if (this.options.input) {
                            this.$elementFilestyle.remove();
                            this.constructor();
                            this.pushNameFiles()
                        }
                    }
                } else {
                    if (value === !1) {
                        if (this.options.buttonBefore) {
                            this.options.buttonBefore = !1;
                            if (this.options.input) {
                                this.$elementFilestyle.remove();
                                this.constructor();
                                this.pushNameFiles()
                            }
                        }
                    } else {
                        return this.options.buttonBefore
                    }
                }
            },
            icon: function icon(value) {
                if (value === !0) {
                    if (!this.options.icon) {
                        this.options.icon = !0;
                        this.$elementFilestyle.find("label").prepend(this.htmlIcon())
                    }
                } else {
                    if (value === !1) {
                        if (this.options.icon) {
                            this.options.icon = !1;
                            this.$elementFilestyle.find(".icon-span-filestyle").remove()
                        }
                    } else {
                        return this.options.icon
                    }
                }
            },
            input: function input(value) {
                if (value === !0) {
                    if (!this.options.input) {
                        this.options.input = !0;
                        if (this.options.buttonBefore) {
                            this.$elementFilestyle.append(this.htmlInput())
                        } else {
                            this.$elementFilestyle.prepend(this.htmlInput())
                        }
                        this.$elementFilestyle.find(".badge").remove();
                        this.pushNameFiles();
                        this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn")
                    }
                } else {
                    if (value === !1) {
                        if (this.options.input) {
                            this.options.input = !1;
                            this.$elementFilestyle.find(":text").remove();
                            var files = this.pushNameFiles();
                            if (files.length > 0 && this.options.badge) {
                                this.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>")
                            }
                            this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                        }
                    } else {
                        return this.options.input
                    }
                }
            },
            size: function size(value) {
                if (value !== undefined) {
                    var btn = this.$elementFilestyle.find("label")
                      , input = this.$elementFilestyle.find("input");
                    btn.removeClass("btn-lg btn-sm");
                    input.removeClass("input-lg input-sm");
                    if (value != "nr") {
                        btn.addClass("btn-" + value);
                        input.addClass("input-" + value)
                    }
                } else {
                    return this.options.size
                }
            },
            placeholder: function placeholder(value) {
                if (value !== undefined) {
                    this.options.placeholder = value;
                    this.$elementFilestyle.find("input").attr("placeholder", value)
                } else {
                    return this.options.placeholder
                }
            },
            buttonText: function buttonText(value) {
                if (value !== undefined) {
                    this.options.buttonText = value;
                    this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)
                } else {
                    return this.options.buttonText
                }
            },
            buttonName: function buttonName(value) {
                if (value !== undefined) {
                    this.options.buttonName = value;
                    this.$elementFilestyle.find("label").attr({
                        "class": "btn " + this.options.buttonName
                    })
                } else {
                    return this.options.buttonName
                }
            },
            iconName: function iconName(value) {
                if (value !== undefined) {
                    this.$elementFilestyle.find(".icon-span-filestyle").attr({
                        "class": "icon-span-filestyle " + this.options.iconName
                    })
                } else {
                    return this.options.iconName
                }
            },
            htmlIcon: function htmlIcon() {
                if (this.options.icon) {
                    return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> '
                } else {
                    return ""
                }
            },
            htmlInput: function htmlInput() {
                if (this.options.input) {
                    return '<input type="text" class="form-control ' + (this.options.size == "nr" ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> '
                } else {
                    return ""
                }
            },
            pushNameFiles: function pushNameFiles() {
                var content = ""
                  , files = [];
                if (this.$element[0].files === undefined) {
                    files[0] = {
                        name: this.$element[0] && this.$element[0].value
                    }
                } else {
                    files = this.$element[0].files
                }
                for (var i = 0; i < files.length; i++) {
                    content += files[i].name.split("\\").pop() + ", "
                }
                if (content !== "") {
                    this.$elementFilestyle.find(":text").val(content.replace(/\, $/g, ""))
                } else {
                    this.$elementFilestyle.find(":text").val("")
                }
                return files
            },
            constructor: function constructor() {
                var _self = this, html = "", id = _self.$element.attr("id"), files = [], btn = "", $label;
                if (id === "" || !id) {
                    id = "filestyle-" + nextId;
                    _self.$element.attr({
                        id: id
                    });
                    nextId++
                }
                btn = '<span class="group-span-filestyle ' + (_self.options.input ? "input-group-btn" : "") + '"><label for="' + id + '" class="btn ' + _self.options.buttonName + " " + (_self.options.size == "nr" ? "" : "btn-" + _self.options.size) + '" ' + (_self.options.disabled ? 'disabled="true"' : "") + ">" + _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + "</span></label></span>";
                html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;
                _self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + "</div>");
                _self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(e) {
                    if (e.keyCode === 13 || e.charCode === 32) {
                        _self.$elementFilestyle.find("label").click();
                        return !1
                    }
                });
                _self.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(_self.$elementFilestyle);
                if (_self.options.disabled) {
                    _self.$element.attr("disabled", "true")
                }
                _self.$element.change(function() {
                    var files = _self.pushNameFiles();
                    if (_self.options.input == !1 && _self.options.badge) {
                        if (_self.$elementFilestyle.find(".badge").length == 0) {
                            _self.$elementFilestyle.find("label").append(' <span class="badge">' + files.length + "</span>")
                        } else {
                            if (files.length == 0) {
                                _self.$elementFilestyle.find(".badge").remove()
                            } else {
                                _self.$elementFilestyle.find(".badge").html(files.length)
                            }
                        }
                    } else {
                        _self.$elementFilestyle.find(".badge").remove()
                    }
                });
                if (window.navigator.userAgent.search(/firefox/i) > -1) {
                    _self.$elementFilestyle.find("label").click(function() {
                        _self.$element.click();
                        return !1
                    })
                }
            }
        };
        var old = $.fn.filestyle;
        $.fn.filestyle = function(option, value) {
            var get = ""
              , element = this.each(function() {
                if ($(this).attr("type") === "file") {
                    var $this = $(this)
                      , data = $this.data("filestyle")
                      , options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === "object" && option);
                    if (!data) {
                        $this.data("filestyle", data = new Filestyle(this,options));
                        data.constructor()
                    }
                    if (typeof option === "string") {
                        get = data[option](value)
                    }
                }
            });
            if (typeof get !== undefined) {
                return get
            } else {
                return element
            }
        }
        ;
        $.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1,
            placeholder: ""
        };
        $.fn.filestyle.noConflict = function() {
            $.fn.filestyle = old;
            return this
        }
        ;
        $(function() {
            $(".filestyle").each(function() {
                var $this = $(this)
                  , options = {
                    input: $this.attr("data-input") === "false" ? !1 : !0,
                    icon: $this.attr("data-icon") === "false" ? !1 : !0,
                    buttonBefore: $this.attr("data-buttonBefore") === "true" ? !0 : !1,
                    disabled: $this.attr("data-disabled") === "true" ? !0 : !1,
                    size: $this.attr("data-size"),
                    buttonText: $this.attr("data-buttonText"),
                    buttonName: $this.attr("data-buttonName"),
                    iconName: $this.attr("data-iconName"),
                    badge: $this.attr("data-badge") === "false" ? !1 : !0,
                    placeholder: $this.attr("data-placeholder")
                };
                $this.filestyle(options)
            })
        })
    }
    )(window.jQuery);
    /***/
}
), (function(module, exports) {
    "use strict";
    (function($) {
        $.fn.scrollbox = function(config) {
            var defConfig = {
                linear: !1,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: !0,
                onMouseOverPause: !0,
                paused: !1,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: !0,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: !1
            };
            config = $.extend(defConfig, config);
            config.scrollOffset = config.direction === "vertical" ? "scrollTop" : "scrollLeft";
            if (config.queue) {
                config.queue = $("#" + config.queue)
            }
            return this.each(function() {
                var container = $(this), containerUL, scrollingId = null, nextScrollId = null, paused = !1, releaseStack, backward, forward, resetClock, scrollForward, scrollBackward, forwardHover, pauseHover, switchCount = 0, stackedTriggerIndex = 0;
                if (config.onMouseOverPause) {
                    container.bind("mouseover", function() {
                        paused = !0
                    });
                    container.bind("mouseout", function() {
                        paused = !1
                    })
                }
                containerUL = container.children(config.listElement + ":first-child");
                if (config.infiniteLoop === !1 && config.switchAmount === 0) {
                    config.switchAmount = containerUL.children().length
                }
                scrollForward = function() {
                    if (paused) {
                        return
                    }
                    var curLi, i, newScrollOffset, scrollDistance, theStep;
                    curLi = containerUL.children(config.listItemElement + ":first-child");
                    scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.outerHeight(!0) : curLi.outerWidth(!0);
                    if (!config.linear) {
                        theStep = Math.max(3, parseInt((scrollDistance - container[0][config.scrollOffset]) * .3, 10));
                        newScrollOffset = Math.min(container[0][config.scrollOffset] + theStep, scrollDistance)
                    } else {
                        newScrollOffset = Math.min(container[0][config.scrollOffset] + config.step, scrollDistance)
                    }
                    container[0][config.scrollOffset] = newScrollOffset;
                    if (newScrollOffset >= scrollDistance) {
                        for (i = 0; i < config.switchItems; i++) {
                            if (config.queue && config.queue.find(config.listItemElement).length > 0) {
                                containerUL.append(config.queue.find(config.listItemElement)[0]);
                                containerUL.children(config.listItemElement + ":first-child").remove()
                            } else {
                                containerUL.append(containerUL.children(config.listItemElement + ":first-child"))
                            }
                            ++switchCount
                        }
                        container[0][config.scrollOffset] = 0;
                        clearInterval(scrollingId);
                        scrollingId = null;
                        if ($.isFunction(config.afterForward)) {
                            config.afterForward.call(container, {
                                switchCount: switchCount,
                                currentFirstChild: containerUL.children(config.listItemElement + ":first-child")
                            })
                        }
                        if (config.triggerStackable && stackedTriggerIndex !== 0) {
                            releaseStack();
                            return
                        }
                        if (config.infiniteLoop === !1 && switchCount >= config.switchAmount) {
                            return
                        }
                        if (config.autoPlay) {
                            nextScrollId = setTimeout(forward, config.delay * 1e3)
                        }
                    }
                }
                ;
                scrollBackward = function() {
                    if (paused) {
                        return
                    }
                    var curLi, i, newScrollOffset, scrollDistance, theStep;
                    if (container[0][config.scrollOffset] === 0) {
                        for (i = 0; i < config.switchItems; i++) {
                            containerUL.children(config.listItemElement + ":last-child").insertBefore(containerUL.children(config.listItemElement + ":first-child"))
                        }
                        curLi = containerUL.children(config.listItemElement + ":first-child");
                        scrollDistance = config.distance !== "auto" ? config.distance : config.direction === "vertical" ? curLi.height() : curLi.width();
                        container[0][config.scrollOffset] = scrollDistance
                    }
                    if (!config.linear) {
                        theStep = Math.max(3, parseInt(container[0][config.scrollOffset] * .3, 10));
                        newScrollOffset = Math.max(container[0][config.scrollOffset] - theStep, 0)
                    } else {
                        newScrollOffset = Math.max(container[0][config.scrollOffset] - config.step, 0)
                    }
                    container[0][config.scrollOffset] = newScrollOffset;
                    if (newScrollOffset === 0) {
                        --switchCount;
                        clearInterval(scrollingId);
                        scrollingId = null;
                        if ($.isFunction(config.afterBackward)) {
                            config.afterBackward.call(container, {
                                switchCount: switchCount,
                                currentFirstChild: containerUL.children(config.listItemElement + ":first-child")
                            })
                        }
                        if (config.triggerStackable && stackedTriggerIndex !== 0) {
                            releaseStack();
                            return
                        }
                        if (config.autoPlay) {
                            nextScrollId = setTimeout(forward, config.delay * 1e3)
                        }
                    }
                }
                ;
                releaseStack = function() {
                    if (stackedTriggerIndex === 0) {
                        return
                    }
                    if (stackedTriggerIndex > 0) {
                        stackedTriggerIndex--;
                        nextScrollId = setTimeout(forward, 0)
                    } else {
                        stackedTriggerIndex++;
                        nextScrollId = setTimeout(backward, 0)
                    }
                }
                ;
                forward = function() {
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollForward, config.speed)
                }
                ;
                backward = function() {
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollBackward, config.speed)
                }
                ;
                forwardHover = function() {
                    config.autoPlay = !0;
                    paused = !1;
                    clearInterval(scrollingId);
                    scrollingId = setInterval(scrollForward, config.speed)
                }
                ;
                pauseHover = function() {
                    paused = !0
                }
                ;
                resetClock = function(delay) {
                    config.delay = delay || config.delay;
                    clearTimeout(nextScrollId);
                    if (config.autoPlay) {
                        nextScrollId = setTimeout(forward, config.delay * 1e3)
                    }
                }
                ;
                if (config.autoPlay) {
                    nextScrollId = setTimeout(forward, config.startDelay * 1e3)
                }
                container.bind("resetClock", function(delay) {
                    resetClock(delay)
                });
                container.bind("forward", function() {
                    if (config.triggerStackable) {
                        if (scrollingId !== null) {
                            stackedTriggerIndex++
                        } else {
                            forward()
                        }
                    } else {
                        clearTimeout(nextScrollId);
                        forward()
                    }
                });
                container.bind("backward", function() {
                    if (config.triggerStackable) {
                        if (scrollingId !== null) {
                            stackedTriggerIndex--
                        } else {
                            backward()
                        }
                    } else {
                        clearTimeout(nextScrollId);
                        backward()
                    }
                });
                container.bind("pauseHover", function() {
                    pauseHover()
                });
                container.bind("forwardHover", function() {
                    forwardHover()
                });
                container.bind("speedUp", function(event, speed) {
                    if (speed === "undefined") {
                        speed = Math.max(1, parseInt(config.speed / 2, 10))
                    }
                    config.speed = speed
                });
                container.bind("speedDown", function(event, speed) {
                    if (speed === "undefined") {
                        speed = config.speed * 2
                    }
                    config.speed = speed
                });
                container.bind("updateConfig", function(event, options) {
                    config = $.extend(config, options)
                })
            })
        }
    }
    )(jQuery);
    /***/
}
), (function(module, exports, __webpack_require__) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            'default': obj
        }
    }
    var _prestashop = __webpack_require__(54);
    var _prestashop2 = _interopRequireDefault(_prestashop);
    var _jquery = __webpack_require__(10);
    var _jquery2 = _interopRequireDefault(_jquery);
    _prestashop2['default'].blockcart = _prestashop2['default'].blockcart || {};
    _prestashop2['default'].blockcart.showModal = function(html) {
        function getBlockCartModal() {
            return (0,
            _jquery2['default'])('#blockcart-modal')
        }
        var $blockCartModal = getBlockCartModal();
        if ($blockCartModal.length) {
            $blockCartModal.remove()
        }
        (0,
        _jquery2['default'])('body').append(html);
        $blockCartModal = getBlockCartModal();
        $blockCartModal.modal('show').on('hidden.bs.modal', function(event) {
            _prestashop2['default'].emit('updateProduct', {
                reason: event.currentTarget.dataset
            })
        })
    }
    ;
    /***/
}
)]);
$(document).ready(function() {
    $('.st_reg_terms_link').on('click', (event) => {
        event.preventDefault();
        var url = $(event.target).attr('href');
        if (url) {
            url += `?content_only=1`;
            $.get(url, (content) => {
                $('#st_reg_modal').find('.js-modal-content').html($(content).find('.page-cms').contents())
            }
            ).fail( (resp) => {}
            )
        }
        $('#st_reg_modal').modal('show')
    }
    )
});
var GoogleAnalyticEnhancedECommerce = {
    setCurrency: function(Currency) {
        ga('set', '&cu', Currency)
    },
    add: function(Product, Order, Impression) {
        var Products = {};
        var Orders = {};
        var ProductFieldObject = ['id', 'name', 'category', 'brand', 'variant', 'price', 'quantity', 'coupon', 'list', 'position', 'dimension1'];
        var OrderFieldObject = ['id', 'affiliation', 'revenue', 'tax', 'shipping', 'coupon', 'list', 'step', 'option'];
        if (Product != null) {
            if (Impression && Product.quantity !== undefined) {
                delete Product.quantity
            }
            for (var productKey in Product) {
                for (var i = 0; i < ProductFieldObject.length; i++) {
                    if (productKey.toLowerCase() == ProductFieldObject[i]) {
                        if (Product[productKey] != null) {
                            Products[productKey.toLowerCase()] = Product[productKey]
                        }
                    }
                }
            }
        }
        if (Order != null) {
            for (var orderKey in Order) {
                for (var j = 0; j < OrderFieldObject.length; j++) {
                    if (orderKey.toLowerCase() == OrderFieldObject[j]) {
                        Orders[orderKey.toLowerCase()] = Order[orderKey]
                    }
                }
            }
        }
        if (Impression) {
            ga('ec:addImpression', Products)
        } else {
            ga('ec:addProduct', Products)
        }
    },
    addProductDetailView: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'detail');
        ga('send', 'event', 'UX', 'detail', 'Product Detail View', {
            'nonInteraction': 1
        })
    },
    addToCart: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'add');
        ga('send', 'event', 'UX', 'click', 'Add to Cart')
    },
    removeFromCart: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'remove');
        ga('send', 'event', 'UX', 'click', 'Remove From cart')
    },
    addProductImpression: function(Product) {},
    refundByOrderId: function(Order) {
        ga('ec:setAction', 'refund', {
            'id': Order.id
        });
        ga('send', 'event', 'Ecommerce', 'Refund', {
            'nonInteraction': 1
        })
    },
    refundByProduct: function(Order) {
        ga('ec:setAction', 'refund', {
            'id': Order.id,
        });
        ga('send', 'event', 'Ecommerce', 'Refund', {
            'nonInteraction': 1
        })
    },
    addProductClick: function(Product) {
        var ClickPoint = jQuery('a[href$="' + Product.url + '"].quick-view');
        ClickPoint.on("click", function() {
            GoogleAnalyticEnhancedECommerce.add(Product);
            ga('ec:setAction', 'click', {
                list: Product.list
            });
            ga('send', 'event', 'Product Quick View', 'click', Product.list, {
                'hitCallback': function() {
                    return !ga.loaded
                }
            })
        })
    },
    addProductClickByHttpReferal: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'click', {
            list: Product.list
        });
        ga('send', 'event', 'Product Click', 'click', Product.list, {
            'nonInteraction': 1,
            'hitCallback': function() {
                return !ga.loaded
            }
        })
    },
    addTransaction: function(Order) {
        ga('ec:setAction', 'purchase', Order);
        ga('send', 'event', 'Transaction', 'purchase', {
            'hitCallback': function() {
                $.get(Order.url, {
                    orderid: Order.id,
                    customer: Order.customer
                })
            }
        })
    },
    addCheckout: function(Step) {
        ga('ec:setAction', 'checkout', {
            'step': Step
        });
        ga('send', 'pageview')
    },
    addCheckoutOption: function(Step, Option) {
        ga('ec:setAction', 'checkout_option', {
            'step': Step,
            'option': Option
        });
        ga('send', 'event', 'Checkout', 'Option')
    }
};
var GoogleAnalyticEnhancedECommerce = {
    setCurrency: function(Currency) {
        ga('set', '&cu', Currency)
    },
    add: function(Product, Order, Impression) {
        var Products = {};
        var Orders = {};
        var ProductFieldObject = ['id', 'name', 'category', 'brand', 'variant', 'price', 'quantity', 'coupon', 'list', 'position', 'dimension1'];
        var OrderFieldObject = ['id', 'affiliation', 'revenue', 'tax', 'shipping', 'coupon', 'list', 'step', 'option'];
        if (Product != null) {
            if (Impression && Product.quantity !== undefined) {
                delete Product.quantity
            }
            for (var productKey in Product) {
                for (var i = 0; i < ProductFieldObject.length; i++) {
                    if (productKey.toLowerCase() == ProductFieldObject[i]) {
                        if (Product[productKey] != null) {
                            Products[productKey.toLowerCase()] = Product[productKey]
                        }
                    }
                }
            }
        }
        if (Order != null) {
            for (var orderKey in Order) {
                for (var j = 0; j < OrderFieldObject.length; j++) {
                    if (orderKey.toLowerCase() == OrderFieldObject[j]) {
                        Orders[orderKey.toLowerCase()] = Order[orderKey]
                    }
                }
            }
        }
        if (Impression) {
            ga('ec:addImpression', Products)
        } else {
            ga('ec:addProduct', Products)
        }
    },
    addProductDetailView: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'detail');
        ga('send', 'event', 'UX', 'detail', 'Product Detail View', {
            'nonInteraction': 1
        })
    },
    addToCart: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'add');
        ga('send', 'event', 'UX', 'click', 'Add to Cart')
    },
    removeFromCart: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'remove');
        ga('send', 'event', 'UX', 'click', 'Remove From cart')
    },
    addProductImpression: function(Product) {},
    refundByOrderId: function(Order) {
        ga('ec:setAction', 'refund', {
            'id': Order.id
        });
        ga('send', 'event', 'Ecommerce', 'Refund', {
            'nonInteraction': 1
        })
    },
    refundByProduct: function(Order) {
        ga('ec:setAction', 'refund', {
            'id': Order.id,
        });
        ga('send', 'event', 'Ecommerce', 'Refund', {
            'nonInteraction': 1
        })
    },
    addProductClick: function(Product) {
        var ClickPoint = jQuery('a[href$="' + Product.url + '"].quick-view');
        ClickPoint.on("click", function() {
            GoogleAnalyticEnhancedECommerce.add(Product);
            ga('ec:setAction', 'click', {
                list: Product.list
            });
            ga('send', 'event', 'Product Quick View', 'click', Product.list, {
                'hitCallback': function() {
                    return !ga.loaded
                }
            })
        })
    },
    addProductClickByHttpReferal: function(Product) {
        this.add(Product);
        ga('ec:setAction', 'click', {
            list: Product.list
        });
        ga('send', 'event', 'Product Click', 'click', Product.list, {
            'nonInteraction': 1,
            'hitCallback': function() {
                return !ga.loaded
            }
        })
    },
    addTransaction: function(Order) {
        ga('ec:setAction', 'purchase', Order);
        ga('send', 'event', 'Transaction', 'purchase', {
            'hitCallback': function() {
                $.get(Order.url, {
                    orderid: Order.id,
                    customer: Order.customer
                })
            }
        })
    },
    addCheckout: function(Step) {
        ga('ec:setAction', 'checkout', {
            'step': Step
        })
    }
};
$('#submitComment').bind('click', function(event) {
    event.preventDefault();
    var data = {
        'action': 'postcomment',
        'id_post': $('input[name=\'id_post\']').val(),
        'comment_parent': $('input[name=\'comment_parent\']').val(),
        'name': $('input[name=\'name\']').val(),
        'website': $('input[name=\'website\']').val(),
        'smartblogcaptcha': $('input[name=\'smartblogcaptcha\']').val(),
        'comment': $('textarea[name=\'comment\']').val(),
        'mail': $('input[name=\'mail\']').val()
    };
    $.ajax({
        url: baseDir + 'modules/smartblog/ajax.php',
        data: data,
        dataType: 'json',
        beforeSend: function() {
            $('.success, .warning, .error').remove();
            $('#submitComment').attr('disabled', !0);
            $('#commentInput').before('<div class="attention"><img src="http://321cart.com/sellya/catalog/view/theme/default/image/loading.gif" alt="" />Please wait!</div>')
        },
        complete: function() {
            $('#submitComment').attr('disabled', !1);
            $('.attention').remove()
        },
        success: function(json) {
            if (json.error) {
                $('#commentInput').before('<div class="warning">' + json.error.common + '</div>');
                if (json.error.name) {
                    $('.inputName').after('<span class="error">' + json.error.name + '</span>')
                }
                if (json.error.mail) {
                    $('.inputMail').after('<span class="error">' + json.error.mail + '</span>')
                }
                if (json.error.comment) {
                    $('.inputContent').after('<span class="error">' + json.error.comment + '</span>')
                }
                if (json.error.captcha) {
                    $('.smartblogcaptcha').after('<span class="error">' + json.error.captcha + '</span>')
                }
            }
            if (json.success) {
                $('input[name=\'name\']').val('');
                $('input[name=\'mail\']').val('');
                $('input[name=\'website\']').val('');
                $('textarea[name=\'comment\']').val('');
                $('input[name=\'smartblogcaptcha\']').val('');
                $('#commentInput').before('<div class="success">' + json.success + '</div>');
                setTimeout(function() {
                    $('.success').fadeOut(300).delay(450).remove()
                }, 5000)
            }
        }
    })
});
var addComment = {
    moveForm: function(commId, parentId, respondId, postId) {
        var t = this, div, comm = t.I(commId), respond = t.I(respondId), cancel = t.I('cancel-comment-reply-link'), parent = t.I('comment_parent'), post = t.I('comment_post_ID');
        if (!comm || !respond || !cancel || !parent)
            return;
        t.respondId = respondId;
        postId = postId || !1;
        if (!t.I('wp-temp-form-div')) {
            div = document.createElement('div');
            div.id = 'wp-temp-form-div';
            div.style.display = 'none';
            respond.parentNode.insertBefore(div, respond)
        }
        comm.parentNode.insertBefore(respond, comm.nextSibling);
        if (post && postId)
            post.value = postId;
        parent.value = parentId;
        cancel.style.display = '';
        cancel.onclick = function() {
            var t = addComment
              , temp = t.I('wp-temp-form-div')
              , respond = t.I(t.respondId);
            if (!temp || !respond)
                return;
            t.I('comment_parent').value = '0';
            temp.parentNode.insertBefore(respond, temp);
            temp.parentNode.removeChild(temp);
            this.style.display = 'none';
            this.onclick = null;
            return !1
        }
        ;
        try {
            t.I('comment').focus()
        } catch (e) {}
        return !1
    },
    I: function(e) {
        return document.getElementById(e)
    }
};
(function(e) {
    var t = function(t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = {
            currentSlide: 0,
            currentImage: "",
            totalSlides: 0,
            running: !1,
            paused: !1,
            stop: !1,
            controlNavEl: !1
        };
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function() {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width()
              , s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        }
        if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function() {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function(t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#")
                    r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function() {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function() {
                d(s, o, r, !1)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function() {
                if (i.running) {
                    return !1
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function() {
                if (i.running) {
                    return !1
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb"))
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function() {
                if (i.running)
                    return !1;
                if (e(this).hasClass("active"))
                    return !1;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function() {
                i.paused = !0;
                clearInterval(f);
                f = ""
            }, function() {
                i.paused = !1;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function() {
                        d(s, o, r, !1)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function() {
            u.attr("src", i.currentImage.attr("src"));
            i.running = !1;
            e(o).each(function() {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function() {
                    d(s, o, r, !1)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                        left: o * s + "px",
                        width: t.width() - o * s + "px",
                        height: i + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({
                        left: o * s + "px",
                        width: o + "px",
                        height: i + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({
                height: e(r.currentImage).height()
            }, n.animSpeed)
        };
        var p = function(t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols)
              , s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                            opacity: 0,
                            left: i * a + "px",
                            top: s * o + "px",
                            width: t.width() - i * a + "px"
                        }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({
                            opacity: 0,
                            left: i * a + "px",
                            top: s * o + "px",
                            width: i + "px"
                        }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({
                height: e(r.currentImage).height()
            }, n.animSpeed)
        };
        var d = function(t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return !1
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            }
            if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect
              , f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = !0;
            var l = 0
              , c = 0
              , d = ""
              , m = ""
              , g = ""
              , y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({
                        top: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    n.css({
                        bottom: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function() {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    }
                    if (b === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function() {
                    var n = e(this);
                    var i = n.width();
                    n.css({
                        top: "0px",
                        width: "0px"
                    });
                    if (c === r.slices - 1) {
                        setTimeout(function() {
                            n.animate({
                                width: i,
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({
                                width: i,
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: t.width() + "px"
                });
                m.animate({
                    opacity: "1.0"
                }, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: "0px",
                    opacity: "1"
                });
                m.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({
                    width: "0px",
                    opacity: "1",
                    left: "",
                    right: "0px"
                });
                m.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function() {
                    m.css({
                        left: "0px",
                        right: ""
                    });
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function() {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function() {
                            n.animate({
                                opacity: "1"
                            }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function() {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function(n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function() {
                                        f.animate({
                                            opacity: "1",
                                            width: l,
                                            height: c
                                        }, r.animSpeed / 1.3, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function() {
                                        f.animate({
                                            opacity: "1",
                                            width: l,
                                            height: c
                                        }, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            }
                            )(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function(e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10),
            n = e[--r],
            e[r] = e[t],
            e[t] = n)
                ;
            return e
        };
        var m = function(e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function() {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = !0;
                m("Stop Slider")
            }
        }
        ;
        this.start = function() {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = !1;
                m("Start Slider")
            }
        }
        ;
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function(n) {
        return this.each(function(r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this,n);
            s.data("nivoslider", o)
        })
    }
    ;
    e.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3e3,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        pauseOnHover: !0,
        manualAdvance: !1,
        prevText: "Prev",
        nextText: "Next",
        randomStart: !1,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    };
    e.fn._reverse = [].reverse
}
)(jQuery);
$(window).load(function() {
    $("#slider").nivoSlider({
        effect: 'fade',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 1000,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        pauseTime: $('#tdimageslider').data('interval'),
        pauseOnHover: $('#tdimageslider').data('pause')
    });
    $("#spinner").fadeOut("slow")
});
var rtl1 = !1;
$(document).ready(function() {
    if ($("body").hasClass("lang-rtl")) {
        rtl1 = !0
    }
    $('#tdcategoryproducts .product_list').each(function() {
        var tabid = $(this).data('tabid');
        var tdowlcategoryslider = $('#tdcategorycarousel_' + tabid);
        tdowlcategoryslider.owlCarousel({
            responsiveClass: !0,
            nav: !0,
            loop: !0,
            rtl: rtl1,
            navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                544: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    })
});
var rtl1 = !1;
jQuery(document).ready(function($) {
    if ($("body").hasClass("lang-rtl")) {
        rtl1 = !0
    }
    $("#testimonial-carousel").owlCarousel({
        rtl: rtl1,
        autoplay: !0,
        autoplayTimeout: 3000,
        responsiveClass: !0,
        nav: !0,
        navText: ['<i class="material-icons"></i>', '<i class="material-icons"></i>'],
        loop: !0,
        items: 1,
        autoplayHoverPause: $('#tdtestimonials').data('pause'),
        smartSpeed: 450
    })
});
$(document).ready(function() {
    $(document).on('click', '.add_to_compare', function(e) {
        e.preventDefault();
        if (typeof addToCompare != 'undefined')
            addToCompare(parseInt($(this).data('id-product')))
    });
    modelCompare();
    reloadProductComparison();
    compareButtonsStatusRefresh();
    totalCompareButtons()
});
function modelCompare() {
    var modelCompare = '';
    modelCompare += '<div id="tdcompare-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
    modelCompare += '<div class="modal-dialog" role="document">'
    modelCompare += '<div class="modal-content">'
    modelCompare += '<div class="modal-header">'
    modelCompare += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    modelCompare += '<span aria-hidden="true">&times;</span>'
    modelCompare += '</button>'
    modelCompare += '<div class="modal-msg">'
    modelCompare += '</div>'
    modelCompare += '</div>'
    modelCompare += '<div class="modal-footer">'
    modelCompare += '</div>'
    modelCompare += '</div>'
    modelCompare += '</div>'
    modelCompare += '</div>'
    $('body').append(modelCompare)
}
function addToCompare(productId) {
    var totalValueNow = parseInt($('.bt_compare').next('.compare_product_count').val());
    var action, totalVal;
    var content_max_product = '<div class="compare-msg">' + max_item + '</div>';
    var content_add_product = '<div class="compare-msg">' + compareAdd + '</div>';
    var content_remove_product = '<div class="compare-msg">' + compareRemove + '</div>';
    var content_compare_product = '<a class="btn btn-secondary" href="' + compareUrl + '">' + compareView + '</a>';
    if ($.inArray(parseInt(productId), comparedProductsIds) === -1)
        action = 'add';
    else
        action = 'remove';
    $.ajax({
        url: compareUrl + '?ajax=1&action=' + action + '&id_product=' + productId,
        async: !0,
        cache: !1,
        success: function(data) {
            if (action === 'add' && comparedProductsIds.length < comparator_max_item) {
                comparedProductsIds.push(parseInt(productId)),
                compareButtonsStatusRefresh(),
                totalVal = totalValueNow + 1,
                $('.bt_compare').next('.compare_product_count').val(totalVal),
                totalValue(totalVal);
                $('#tdcompare-modal .modal-msg').html(content_add_product);
                $('#tdcompare-modal .modal-footer').html(content_compare_product);
                $('#tdcompare-modal').modal('show')
            } else if (action === 'remove') {
                comparedProductsIds.splice($.inArray(parseInt(productId), comparedProductsIds), 1),
                compareButtonsStatusRefresh(),
                totalVal = totalValueNow - 1,
                $('.bt_compare').next('.compare_product_count').val(totalVal),
                totalValue(totalVal);
                $('#tdcompare-modal .modal-msg').html(content_remove_product);
                $('#tdcompare-modal .modal-footer').html(content_compare_product);
                $('#tdcompare-modal').modal('show')
            } else {
                $('#tdcompare-modal .modal-msg').html(content_max_product);
                $('#tdcompare-modal .modal-footer').html(content_compare_product);
                $('#tdcompare-modal').modal('show')
            }
            totalCompareButtons()
        },
        error: function() {},
        beforeSend: function() {
            $(".add_to_compare[data-id-product='" + productId + "']").addClass('adding')
        },
        complete: function() {
            $(".add_to_compare[data-id-product='" + productId + "']").removeClass('adding')
        }
    })
}
function reloadProductComparison() {
    $(document).on('click', 'a.cmp_remove', function(e) {
        e.preventDefault();
        var idProduct = parseInt($(this).data('id-product'));
        $.ajax({
            url: compareUrl + '?ajax=1&action=remove&id_product=' + idProduct,
            async: !1,
            cache: !1
        });
        $('td.product-' + idProduct).fadeOut(600)
    })
}
;function compareButtonsStatusRefresh() {
    $('.add_to_compare').each(function() {
        if ($.inArray(parseInt($(this).data('id-product')), comparedProductsIds) !== -1)
            $(this).addClass('checked');
        else
            $(this).removeClass('checked')
    })
}
function totalCompareButtons() {
    var totalProductsToCompare = parseInt($('.bt_compare .total-compare-val').html());
    if (typeof totalProductsToCompare !== "number" || totalProductsToCompare === 0)
        $('.bt_compare').attr("disabled", !0);
    else
        $('.bt_compare').attr("disabled", !1)
}
function totalValue(value) {
    $('.bt_compare').find('.total-compare-val').html(value)
}
function get(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return results[1]
}
;var wishlistProductsIds = [];
$(document).ready(function() {
    wishlistRefreshStatus();
    modelWishlist();
    $(document).on('change', 'select[name=wishlists]', function() {
        WishlistChangeDefault('wishlist_block_list', $(this).val())
    });
    $('.wishlist').each(function() {
        current = $(this);
        var htmlContent = $(this).children('.popover-content').html();
        $(this).children('.wishlist_button_list').popover({
            html: !0,
            content: htmlContent
        })
    })
});
function modelWishlist() {
    var modelWishlist = '';
    modelWishlist += '<div id="tdwishlist-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
    modelWishlist += '<div class="modal-dialog" role="document">'
    modelWishlist += '<div class="modal-content">'
    modelWishlist += '<div class="modal-header">'
    modelWishlist += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
    modelWishlist += '<span aria-hidden="true">&times;</span>'
    modelWishlist += '</button>'
    modelWishlist += '<div class="modal-msg">'
    modelWishlist += '</div>'
    modelWishlist += '</div>'
    modelWishlist += '<div class="modal-footer">'
    modelWishlist += '</div>'
    modelWishlist += '</div>'
    modelWishlist += '</div>'
    modelWishlist += '</div>'
    $('body').append(modelWishlist)
}
function WishlistCart(id, action, id_product, id_product_attribute, quantity, id_wishlist) {
    var content_add_wishlist = '<div class="compare-msg">' + added_to_wishlist + '</div>';
    var content_login_req = '<div class="compare-msg">' + loggin_required + '</div>';
    var content_wishlist_button = '<a class="btn btn-secondary" href="' + mywishlist_url + '">' + wishlistView + '</a>';
    var content_login_button = '<a class="btn btn-secondary" href="' + login_url + '">' + loginLabel + '</a>';
    $.ajax({
        type: 'GET',
        url: baseDir + 'modules/tdproductwishlist/cart.php?rand=' + new Date().getTime(),
        headers: {
            "cache-control": "no-cache"
        },
        async: !0,
        cache: !1,
        data: 'action=' + action + '&id_product=' + id_product + '&quantity=' + quantity + '&token=' + static_token + '&id_product_attribute=' + id_product_attribute + '&id_wishlist=' + id_wishlist,
        success: function(data) {
            if (action == 'add') {
                if (isLogged == !0) {
                    wishlistProductsIdsAdd(id_product);
                    wishlistRefreshStatus();
                    $('.wishtlist_top .cart-wishlist-number').html(data);
                    $('#tdcompare-modal .modal-msg').html(content_add_wishlist);
                    $('#tdcompare-modal .modal-footer').html(content_wishlist_button);
                    $('#tdcompare-modal').modal('show')
                } else {
                    $('#tdcompare-modal .modal-msg').html(content_login_req);
                    $('#tdcompare-modal .modal-footer').html(content_login_button);
                    $('#tdcompare-modal').modal('show')
                }
            }
            if (action == 'delete') {
                wishlistProductsIdsRemove(id_product);
                wishlistRefreshStatus()
            }
            if ($('#' + id).length != 0) {
                $('#' + id).slideUp('normal');
                document.getElementById(id).innerHTML = data;
                $('#' + id).slideDown('normal')
            }
        }
    })
}
function WishlistChangeDefault(id, id_wishlist) {
    $.ajax({
        type: 'GET',
        url: baseDir + 'modules/tdproductwishlist/cart.php?rand=' + new Date().getTime(),
        headers: {
            "cache-control": "no-cache"
        },
        async: !0,
        data: 'id_wishlist=' + id_wishlist + '&token=' + static_token,
        cache: !1,
        success: function(data) {
            $('#' + id).slideUp('normal');
            document.getElementById(id).innerHTML = data;
            $('#' + id).slideDown('normal')
        }
    })
}
function WishlistManage(id, id_wishlist) {
    $.ajax({
        type: 'GET',
        async: !0,
        url: baseDir + 'modules/tdproductwishlist/managewishlist.php?rand=' + new Date().getTime(),
        headers: {
            "cache-control": "no-cache"
        },
        data: 'id_wishlist=' + id_wishlist + '&refresh=' + !1,
        cache: !1,
        success: function(data) {
            $('#' + id).hide();
            document.getElementById(id).innerHTML = data;
            $('#' + id).fadeIn('slow');
            $('.wishlist_change_button').each(function(index) {
                $(this).change(function() {
                    wishlistProductChange($('option:selected', this).attr('data-id-product'), $('option:selected', this).attr('data-id-product-attribute'), $('option:selected', this).attr('data-id-old-wishlist'), $('option:selected', this).attr('data-id-new-wishlist'))
                })
            })
        }
    })
}
function WishlistProductManage(id, action, id_wishlist, id_product, id_product_attribute, quantity, priority) {
    $.ajax({
        type: 'GET',
        async: !0,
        url: baseDir + 'modules/tdproductwishlist/managewishlist.php?rand=' + new Date().getTime(),
        headers: {
            "cache-control": "no-cache"
        },
        data: 'action=' + action + '&id_wishlist=' + id_wishlist + '&id_product=' + id_product + '&id_product_attribute=' + id_product_attribute + '&quantity=' + quantity + '&priority=' + priority + '&refresh=' + !0,
        cache: !1,
        success: function(data) {
            if (action == 'delete') {
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeOut('fast')
            } else if (action == 'update') {
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeOut('fast');
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeIn('fast')
            }
            nb_products = 0;
            $("[id^='quantity']").each(function(index, element) {
                nb_products += parseInt(element.value)
            });
            $("#wishlist_" + id_wishlist).children('td').eq(1).html(nb_products)
        }
    })
}
function WishlistDelete(id, id_wishlist, msg) {
    var res = confirm(msg);
    if (res == !1) {
        return (!1)
    }
    if (typeof mywishlist_url == 'undefined') {
        return (!1)
    }
    $.ajax({
        type: 'GET',
        async: !0,
        dataType: "json",
        url: mywishlist_url,
        headers: {
            "cache-control": "no-cache"
        },
        cache: !1,
        data: {
            rand: new Date().getTime(),
            deleted: 1,
            myajax: 1,
            id_wishlist: id_wishlist,
            action: 'deletelist'
        },
        success: function(data) {
            var mywishlist_siblings_count = $('#' + id).siblings().length;
            $('#' + id).fadeOut('slow').remove();
            $("#block-order-detail").html('');
            if (mywishlist_siblings_count == 0) {
                $("#block-history").remove()
            }
            if (data.id_default) {
                var td_default = $("#wishlist_" + data.id_default + " > .wishlist_default");
                $("#wishlist_" + data.id_default + " > .wishlist_default > a").remove();
                td_default.append('<p class="is_wish_list_default"><i class="fa fa-check-square"></i></p>')
            }
        }
    })
}
function WishlistDefault(id, id_wishlist) {
    if (typeof mywishlist_url == 'undefined') {
        return (!1)
    }
    $.ajax({
        type: 'GET',
        async: !0,
        url: mywishlist_url,
        headers: {
            "cache-control": "no-cache"
        },
        cache: !1,
        data: {
            rand: new Date().getTime(),
            'default': 1,
            id_wishlist: id_wishlist,
            myajax: 1,
            action: 'setdefault'
        },
        success: function(data) {
            var old_default_id = $(".is_wish_list_default").parents("tr").attr("id");
            var td_check = $(".is_wish_list_default").parent();
            $(".is_wish_list_default").remove();
            td_check.append('<a href="#" onclick="javascript:event.preventDefault();(WishlistDefault(\'' + old_default_id + '\', \'' + old_default_id.replace("wishlist_", "") + '\'));"><i class="fa fa-square"></i></a>');
            var td_default = $("#" + id + " > .wishlist_default");
            $("#" + id + " > .wishlist_default > a").remove();
            td_default.append('<p class="is_wish_list_default"><i class="fa fa-check-square"></i></p>')
        }
    })
}
function WishlistSend(id, id_wishlist, id_email) {
    var email_list = {};
    $('#submitTdWishlist').addClass('loading').attr('disabled', 'true');
    for (var i = 1; i <= 10; i++) {
        if ($('#' + id_email + i).val() && !$('#' + id_email + i).attr('disabled')) {
            email_list[id_email + i] = $('#' + id_email + i).val()
        }
    }
    $.ajax({
        type: 'POST',
        headers: {
            "cache-control": "no-cache"
        },
        url: baseDir + 'modules/tdproductwishlist/sendwishlist.php',
        async: !0,
        cache: !1,
        data: {
            token: static_token,
            id_wishlist: id_wishlist,
            emails: email_list
        },
        success: function(data) {
            try {
                var emailResponse = JSON.parse(data);
                $.each(email_list, function(key, value) {
                    var field = $('#' + key).parent().siblings('.form-control-label')
                    if (emailResponse[key] == 1) {
                        field.css('color', 'green');
                        $('#' + key).attr('disabled', !0)
                    } else {
                        field.css('color', 'red')
                    }
                });
                $('#submitTdWishlist').removeClass('loading').removeAttr('disabled')
            } catch (err) {
                alert('TECHNICAL ERROR: Please try again later.');
                $('#submitTdWishlist').removeClass('loading').removeAttr('disabled')
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('TECHNICAL ERROR: Please try again later.')
        }
    })
}
function wishlistProductsIdsAdd(id) {
    if ($.inArray(parseInt(id), wishlistProductsIds) == -1) {
        wishlistProductsIds.push(parseInt(id))
    }
}
function wishlistProductsIdsRemove(id) {
    wishlistProductsIds.splice($.inArray(parseInt(id), wishlistProductsIds), 1)
}
function wishlistRefreshStatus() {
    $('.addToWishlist').each(function() {
        if ($.inArray(parseInt($(this).attr('data-rel')), wishlistProductsIds) != -1) {
            $(this).addClass('checked')
        } else {
            $(this).removeClass('checked')
        }
    })
}
function wishlistProductChange(id_product, id_product_attribute, id_old_wishlist, id_new_wishlist) {
    if (typeof mywishlist_url == 'undefined') {
        return (!1)
    }
    var quantity = $('#quantity_' + id_product + '_' + id_product_attribute).val();
    $.ajax({
        type: 'GET',
        url: mywishlist_url,
        headers: {
            "cache-control": "no-cache"
        },
        async: !0,
        cache: !1,
        dataType: "json",
        data: {
            id_product: id_product,
            id_product_attribute: id_product_attribute,
            quantity: quantity,
            priority: $('#priority_' + id_product + '_' + id_product_attribute).val(),
            id_old_wishlist: id_old_wishlist,
            id_new_wishlist: id_new_wishlist,
            myajax: 1,
            action: 'productchangewishlist'
        },
        success: function(data) {
            if (data.success == !0) {
                $('#wlp_' + id_product + '_' + id_product_attribute).fadeOut('slow');
                $('#wishlist_' + id_old_wishlist + ' td:nth-child(2)').text($('#wishlist_' + id_old_wishlist + ' td:nth-child(2)').text() - quantity);
                $('#wishlist_' + id_new_wishlist + ' td:nth-child(2)').text(+$('#wishlist_' + id_new_wishlist + ' td:nth-child(2)').text() + +quantity)
            } else {
                if (!!$.prototype.fancybox) {
                    $.fancybox.open([{
                        type: 'inline',
                        autoScale: !0,
                        minHeight: 30,
                        content: '<p class="fancybox-error">' + data.error + '</p>'
                    }], {
                        padding: 0
                    })
                }
            }
        }
    })
}
;(function($) {
    $.fn.textareaCount = function(options, fn) {
        var defaults = {
            maxCharacterSize: -1,
            originalStyle: 'originalTextareaInfo',
            warningStyle: 'warningTextareaInfo',
            warningNumber: 20,
            displayFormat: '#input characters | #words words'
        };
        var options = $.extend(defaults, options);
        var container = $(this);
        $("<div class='charleft'>&nbsp;</div>").insertAfter(container);
        var charLeftCss = {
            'width': container.width()
        };
        var charLeftInfo = getNextCharLeftInformation(container);
        charLeftInfo.addClass(options.originalStyle);
        charLeftInfo.css(charLeftCss);
        var numInput = 0;
        var maxCharacters = options.maxCharacterSize;
        var numLeft = 0;
        var numWords = 0;
        container.bind('keyup', function(event) {
            limitTextAreaByCharacterCount()
        }).bind('mouseover', function(event) {
            setTimeout(function() {
                limitTextAreaByCharacterCount()
            }, 10)
        }).bind('paste', function(event) {
            setTimeout(function() {
                limitTextAreaByCharacterCount()
            }, 10)
        });
        function limitTextAreaByCharacterCount() {
            charLeftInfo.html(countByCharacters());
            if (typeof fn != 'undefined') {
                fn.call(this, getInfo())
            }
            return !0
        }
        function countByCharacters() {
            var content = container.val();
            var contentLength = content.length;
            if (options.maxCharacterSize > 0) {
                if (contentLength >= options.maxCharacterSize) {
                    content = content.substring(0, options.maxCharacterSize)
                }
                var newlineCount = getNewlineCount(content);
                var systemmaxCharacterSize = options.maxCharacterSize - newlineCount;
                if (!isWin()) {
                    systemmaxCharacterSize = options.maxCharacterSize
                }
                if (contentLength > systemmaxCharacterSize) {
                    var originalScrollTopPosition = this.scrollTop;
                    container.val(content.substring(0, systemmaxCharacterSize));
                    this.scrollTop = originalScrollTopPosition
                }
                charLeftInfo.removeClass(options.warningStyle);
                if (systemmaxCharacterSize - contentLength <= options.warningNumber) {
                    charLeftInfo.addClass(options.warningStyle)
                }
                numInput = container.val().length + newlineCount;
                if (!isWin()) {
                    numInput = container.val().length
                }
                numWords = countWord(getCleanedWordString(container.val()));
                numLeft = maxCharacters - numInput
            } else {
                var newlineCount = getNewlineCount(content);
                numInput = container.val().length + newlineCount;
                if (!isWin()) {
                    numInput = container.val().length
                }
                numWords = countWord(getCleanedWordString(container.val()))
            }
            return formatDisplayInfo()
        }
        function formatDisplayInfo() {
            var format = options.displayFormat;
            format = format.replace('#input', numInput);
            format = format.replace('#words', numWords);
            if (maxCharacters > 0) {
                format = format.replace('#max', maxCharacters);
                format = format.replace('#left', numLeft)
            }
            return format
        }
        function getInfo() {
            var info = {
                input: numInput,
                max: maxCharacters,
                left: numLeft,
                words: numWords
            };
            return info
        }
        function getNextCharLeftInformation(container) {
            return container.next('.charleft')
        }
        function isWin() {
            var strOS = navigator.appVersion;
            if (strOS.toLowerCase().indexOf('win') != -1) {
                return !0
            }
            return !1
        }
        function getNewlineCount(content) {
            var newlineCount = 0;
            for (var i = 0; i < content.length; i++) {
                if (content.charAt(i) == '\n') {
                    newlineCount++
                }
            }
            return newlineCount
        }
        function getCleanedWordString(content) {
            var fullStr = content + " ";
            var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
            var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
            var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
            var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
            var splitString = cleanedStr.split(" ");
            return splitString
        }
        function countWord(cleanedWordString) {
            var word_count = cleanedWordString.length - 1;
            return word_count
        }
    }
}
)(jQuery);
$(document).ready(function() {
    $('input.star').rating();
    $('.auto-submit-star').rating();
    $('.open-comment-form').click(function() {
        if ($('#criterions_list').length) {
            $('#tdcomment-modal').modal('show')
        } else {
            if ($('#tdcomment-modal .modal-header .disable-form-comment').length) {
                $('#tdcomment-modal').modal('show')
            } else {
                $('#submitNewMessage').remove();
                $('#tdcomment-modal .modal-header .modal-title').remove();
                $('#tdcomment-modal .modal-body').remove();
                $('#tdcomment-modal .modal-header').append('<h2 class="disable-form-comment">' + disable_comment + '</h2>');
                $('#tdcomment-modal').modal('show')
            }
        }
        return !1
    });
    $(document).on('click', 'button.usefulness_btn', function(e) {
        var id_product_comment = $(this).data('id-product-comment');
        var is_usefull = $(this).data('is-usefull');
        var parent = $(this).parent();
        $.ajax({
            url: productcomments_controller_url,
            data: {
                id_product_comment: id_product_comment,
                action: 'comment_is_usefull',
                value: is_usefull
            },
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            success: function(result) {
                parent.fadeOut('slow', function() {
                    parent.remove()
                })
            }
        })
    });
    $(document).on('click', 'span.report_btn', function(e) {
        var idProductComment = $(this).data('id-product-comment');
        var parent = $(this).parent();
        $.ajax({
            url: productcomments_controller_url,
            data: {
                id_product_comment: idProductComment,
                action: 'report_abuse'
            },
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            success: function(result) {
                parent.fadeOut('slow', function() {
                    parent.remove()
                })
            }
        })
    });
    $(document).on('click', '#submitNewMessage', function(e) {
        e.preventDefault();
        url_options = '?';
        if (!productcomments_url_rewrite) {
            url_options = '&'
        }
        $.ajax({
            url: productcomments_controller_url + url_options + 'action=add_comment',
            data: $('#id_new_comment_form').serialize(),
            type: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            dataType: "json",
            success: function(data) {
                if (data.result) {
                    $('#submitNewMessage').fadeOut('slow', function() {
                        $(this).remove()
                    });
                    $('#tdcomment-modal .modal-body').fadeOut('slow', function() {
                        $(this).remove();
                        $('#tdcomment-modal .modal-header .modal-title').remove();
                        if (moderation_active) {
                            $('#tdcomment-modal .modal-header').append('<h2>' + productcomment_added_moderation + '</h2>')
                        } else {
                            $('#tdcomment-modal .modal-header').append('<h2>' + productcomment_added + '</h2>')
                        }
                    })
                } else {
                    $('#new_comment_form_error ul').html('');
                    $.each(data.errors, function(index, value) {
                        $('#new_comment_form_error ul').append('<li>' + value + '</li>')
                    });
                    $('#new_comment_form_error').slideDown('slow')
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("TECHNICAL ERROR, Please Try Again Later");
                window.location.reload()
            }
        });
        $('#tdcomment-modal').on('hidden.bs.modal', function() {
            if (!$('#submitNewMessage').length && !$('#tdcomment-modal .modal-body .disable-form-comment').length) {
                window.location.reload()
            }
        })
    });
    $(document).on('click', '.comments_advices .reviews', function(e) {
        if ($('.tdcommenttab').length) {
            $('.tdcommenttab').trigger('click');
            $('html, body').animate({
                scrollTop: $('.tdcommenttab').offset().top
            }, 500)
        }
        return !1
    })
});
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}(';4(w)(3($){$.Y.T=3(c){c=$.15({m:\'X U\',E:\'\',B:z,8:z},c||{});o d={};o e={t:3(n,a,b){2.6(n);$(a).D(\'.j\').A().l(b||\'x\')},6:3(n){$(d[n].7).O(\'.j\').u(\'9\').u(\'x\')},h:3(n){4(!$(d[n].5).Z(\'.m\')){$(d[n].5).D(\'.j\').A().l(\'9\')}},g:3(n,a){d[n].5=a;o b=$(a).L(\'a\').K();$(d[n].7).J(b);e.6(n);e.h(n);4(c.I)c.I.W(d[n].7,[b,a])}};2.V(3(i){o n=2.G;4(!d[n])d[n]={r:0};i=d[n].r;d[n].r++;4(i==0){c.8=$(2).S(\'p\')||c.8;d[n].7=$(\'<R Q="P" G="\'+n+\'" q=""\'+(c.8?\' p="p"\':\'\')+\'>\');$(2).C(d[n].7);4(c.8||c.B){}F{$(2).C($(\'<k y="m"><a s="\'+c.m+\'">\'+c.E+\'</a></k>\').H(3(){e.6(n);$(2).l(\'9\')}).v(3(){e.h(n);$(2).u(\'9\')}).g(3(){e.g(n,2)}))}};f=$(\'<k y="j"><a s="\'+(2.s||2.q)+\'">\'+2.q+\'</a></k>\');$(2).N(f);4(c.8){$(f).l(\'M\')}F{$(f).H(3(){e.6(n);e.t(n,2)}).v(3(){e.6(n);e.h(n)}).g(3(){e.g(n,2)})};4(2.14)d[n].5=f;$(2).13();4(i+1==2.12)e.h(n)});11(n 10 d)4(d[n].5){e.t(n,d[n].5,\'9\');$(d[n].7).J($(d[n].5).L(\'a\').K())}16 2}})(w);', 62, 69, '||this|function|if|currentElem|drain|valueElem|readOnly|star_on||||||eStar|click|reset||star|div|addClass|cancel||var|disabled|value|count|title|fill|removeClass|mouseout|jQuery|star_hover|class|false|andSelf|required|before|prevAll|cancelValue|else|name|mouseover|callback|val|text|children|star_readonly|after|siblings|hidden|type|input|attr|rating|Rating|each|apply|Cancel|fn|is|in|for|length|remove|checked|extend|return'.split('|'), 0, {}));
(function(c, I, B) {
    c.fn.responsiveSlides = function(l) {
        var a = c.extend({
            auto: !0,
            speed: 500,
            timeout: 4E3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: c.noop,
            after: c.noop
        }, l);
        return this.each(function() {
            B++;
            var f = c(this), s, r, t, m, p, q, n = 0, e = f.children(), C = e.size(), h = parseFloat(a.speed), D = parseFloat(a.timeout), u = parseFloat(a.maxwidth), g = a.namespace, d = g + B, E = g + "_nav " + d + "_nav", v = g + "_here", j = d + "_on", w = d + "_s", k = c("<ul class='" + g + "_tabs " + d + "_tabs' />"), x = {
                "float": "left",
                position: "relative",
                opacity: 1,
                zIndex: 2
            }, y = {
                "float": "none",
                position: "absolute",
                opacity: 0,
                zIndex: 1
            }, F = function() {
                var b = (document.body || document.documentElement).style
                  , a = "transition";
                if ("string" === typeof b[a])
                    return !0;
                s = ["Moz", "Webkit", "Khtml", "O", "ms"];
                var a = a.charAt(0).toUpperCase() + a.substr(1), c;
                for (c = 0; c < s.length; c++)
                    if ("string" === typeof b[s[c] + a])
                        return !0;
                return !1
            }(), z = function(b) {
                a.before(b);
                F ? (e.removeClass(j).css(y).eq(b).addClass(j).css(x),
                n = b,
                setTimeout(function() {
                    a.after(b)
                }, h)) : e.stop().fadeOut(h, function() {
                    c(this).removeClass(j).css(y).css("opacity", 1)
                }).eq(b).fadeIn(h, function() {
                    c(this).addClass(j).css(x);
                    a.after(b);
                    n = b
                })
            };
            a.random && (e.sort(function() {
                return Math.round(Math.random()) - 0.5
            }),
            f.empty().append(e));
            e.each(function(a) {
                this.id = w + a
            });
            f.addClass(g + " " + d);
            l && l.maxwidth && f.css("max-width", u);
            e.hide().css(y).eq(0).addClass(j).css(x).show();
            F && e.show().css({
                "-webkit-transition": "opacity " + h + "ms ease-in-out",
                "-moz-transition": "opacity " + h + "ms ease-in-out",
                "-o-transition": "opacity " + h + "ms ease-in-out",
                transition: "opacity " + h + "ms ease-in-out"
            });
            if (1 < e.size()) {
                if (D < h + 100)
                    return;
                if (a.pager && !a.manualControls) {
                    var A = [];
                    e.each(function(a) {
                        a += 1;
                        A += "<li><a href='#' class='" + w + a + "'>" + a + "</a></li>"
                    });
                    k.append(A);
                    l.navContainer ? c(a.navContainer).append(k) : f.after(k)
                }
                a.manualControls && (k = c(a.manualControls),
                k.addClass(g + "_tabs " + d + "_tabs"));
                (a.pager || a.manualControls) && k.find("li").each(function(a) {
                    c(this).addClass(w + (a + 1))
                });
                if (a.pager || a.manualControls)
                    q = k.find("a"),
                    r = function(a) {
                        q.closest("li").removeClass(v).eq(a).addClass(v)
                    }
                    ;
                a.auto && (t = function() {
                    p = setInterval(function() {
                        e.stop(!0, !0);
                        var b = n + 1 < C ? n + 1 : 0;
                        (a.pager || a.manualControls) && r(b);
                        z(b)
                    }, D)
                }
                ,
                t());
                m = function() {
                    a.auto && (clearInterval(p),
                    t())
                }
                ;
                a.pause && f.hover(function() {
                    clearInterval(p)
                }, function() {
                    m()
                });
                if (a.pager || a.manualControls)
                    q.bind("click", function(b) {
                        b.preventDefault();
                        a.pauseControls || m();
                        b = q.index(this);
                        n === b || c("." + j).queue("fx").length || (r(b),
                        z(b))
                    }).eq(0).closest("li").addClass(v),
                    a.pauseControls && q.hover(function() {
                        clearInterval(p)
                    }, function() {
                        m()
                    });
                if (a.nav) {
                    g = "<a href='#' class='" + E + " prev'>" + a.prevText + "</a><a href='#' class='" + E + " next'>" + a.nextText + "</a>";
                    l.navContainer ? c(a.navContainer).append(g) : f.after(g);
                    var d = c("." + d + "_nav")
                      , G = d.filter(".prev");
                    d.bind("click", function(b) {
                        b.preventDefault();
                        b = c("." + j);
                        if (!b.queue("fx").length) {
                            var d = e.index(b);
                            b = d - 1;
                            d = d + 1 < C ? n + 1 : 0;
                            z(c(this)[0] === G[0] ? b : d);
                            if (a.pager || a.manualControls)
                                r(c(this)[0] === G[0] ? b : d);
                            a.pauseControls || m()
                        }
                    });
                    a.pauseControls && d.hover(function() {
                        clearInterval(p)
                    }, function() {
                        m()
                    })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && l.maxwidth) {
                var H = function() {
                    f.css("width", "100%");
                    f.width() > u && f.css("width", u)
                };
                H();
                c(I).bind("resize", function() {
                    H()
                })
            }
        })
    }
}
)(jQuery, this, 0);
jQuery(document).ready(function($) {
    var homesliderConfig = {
        speed: 500,
        timeout: $('.homeslider-container').data('interval'),
        nav: !0,
        random: !1,
        pause: $('.homeslider-container').data('pause'),
        maxwidth: "",
        namespace: "homeslider",
        before: function() {},
        after: function() {}
    };
    $(".rslides").responsiveSlides(homesliderConfig)
});
(function($) {
    var ls = window.localStorage;
    var supported;
    if (typeof ls == 'undefined' || typeof window.JSON == 'undefined') {
        supported = !1
    } else {
        supported = !0
    }
    $.totalStorage = function(key, value, options) {
        return $.totalStorage.impl.init(key, value)
    }
    $.totalStorage.setItem = function(key, value) {
        return $.totalStorage.impl.setItem(key, value)
    }
    $.totalStorage.getItem = function(key) {
        return $.totalStorage.impl.getItem(key)
    }
    $.totalStorage.getAll = function() {
        return $.totalStorage.impl.getAll()
    }
    $.totalStorage.deleteItem = function(key) {
        return $.totalStorage.impl.deleteItem(key)
    }
    $.totalStorage.impl = {
        init: function(key, value) {
            if (typeof value != 'undefined') {
                return this.setItem(key, value)
            } else {
                return this.getItem(key)
            }
        },
        setItem: function(key, value) {
            if (!supported) {
                try {
                    $.cookie(key, value);
                    return value
                } catch (e) {
                    console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie')
                }
            }
            var saver = JSON.stringify(value);
            ls.setItem(key, saver);
            return this.parseResult(saver)
        },
        getItem: function(key) {
            if (!supported) {
                try {
                    return this.parseResult($.cookie(key))
                } catch (e) {
                    return null
                }
            }
            return this.parseResult(ls.getItem(key))
        },
        deleteItem: function(key) {
            if (!supported) {
                try {
                    $.cookie(key, null);
                    return !0
                } catch (e) {
                    return !1
                }
            }
            ls.removeItem(key);
            return !0
        },
        getAll: function() {
            var items = new Array();
            if (!supported) {
                try {
                    var pairs = document.cookie.split(";");
                    for (var i = 0; i < pairs.length; i++) {
                        var pair = pairs[i].split('=');
                        var key = pair[0];
                        items.push({
                            key: key,
                            value: this.parseResult($.cookie(key))
                        })
                    }
                } catch (e) {
                    return null
                }
            } else {
                for (var i in ls) {
                    if (i.length) {
                        items.push({
                            key: i,
                            value: this.parseResult(ls.getItem(i))
                        })
                    }
                }
            }
            return items
        },
        parseResult: function(res) {
            var ret;
            try {
                ret = JSON.parse(res);
                if (ret == 'true') {
                    ret = !0
                }
                if (ret == 'false') {
                    ret = !1
                }
                if (parseFloat(ret) == ret && typeof ret != "object") {
                    ret = parseFloat(ret)
                }
            } catch (e) {}
            return ret
        }
    }
}
)(jQuery);
!function(t) {
    var o = {
        init: function(o) {
            var e = {
                offset: !0,
                bgfixed: !0,
                invert: !0
            };
            return this.each(function() {
                function n() {
                    p = s.data("source-url"),
                    g = parseFloat(s.data("source-width")),
                    h = parseFloat(s.data("source-height")),
                    s.css({
                        "background-image": "url(" + p + ")"
                    }),
                    r()
                }
                function r() {
                    u.on("scroll", function() {
                        e.offset && i()
                    }).trigger("scroll"),
                    u.on("resize", function() {
                        s.css({}),
                        e.offset && l()
                    }).trigger("resize")
                }
                function i() {
                    c()
                }
                function l() {
                    c()
                }
                function c() {
                    var t, o, n, r;
                    f = s.outerHeight(),
                    windowHeight = u.height(),
                    a = s.offset().top,
                    t = d.scrollTop(),
                    o = t + windowHeight,
                    n = t - f,
                    o > a && a > n && (r = o - n,
                    pixelScrolled = t - (a - windowHeight),
                    percentScrolled = pixelScrolled / r,
                    e.invert ? (deltaTopScrollVal = 100 * percentScrolled,
                    s.css({
                        "background-position": "50% " + deltaTopScrollVal + "%"
                    })) : (deltaTopScrollVal = 100 * (1 - percentScrolled),
                    s.css({
                        "background-position": "50% " + deltaTopScrollVal + "%"
                    })))
                }
                o && t.extend(e, o);
                {
                    var a, s = t(this), u = t(window), d = t(document), f = 0, p = "", g = "", h = "";
                    Boolean(navigator.userAgent.match(/MSIE ([8]+)\./))
                }
                n()
            })
        },
        destroy: function() {},
        reposition: function() {},
        update: function() {}
    };
    t.fn.sitManParallex = function(e) {
        return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method with name " + e + " is not exist for jQuery") : o.init.apply(this, arguments)
    }
}(jQuery);
var responsiveflag = !1;
var responsiveflag1 = !1;
var rtl1 = !1;
$(document).ready(function() {
    if ($("body").hasClass("lang-rtl")) {
        rtl1 = !0
    }
    jQuery('.menu-icon .cat-title').text('MENU');
    jQuery('#contact .left-column').addClass('col-lg-10 col-centered');
    jQuery('#index .tdstoryblock-outer .left-block-hm').removeClass('col-sm-8').addClass('col-sm-6');
    jQuery('#cms .tdstoryblock-outer .left-block-hm').removeClass('col-sm-8').addClass('col-sm-10 col-centered');
    jQuery('.sub-menu.js-sub-menu').removeClass('threecolumn').addClass('onecolumn');
    jQuery('#left-column .products_block.block .title_block').text('FLAVOURS');
    responsiveResize();
    accordionCart();
    bindGrid();
    $(window).resize(responsiveResize);
    initialize_owl($('#td_feature_product, #td_new_product, #td_bestseller_product, #td_special_product'));
    initialize_owl($('#feature-carousel'));
    initialize_owl($('#newproduct-carousel'));
    initialize_owl($('#bestseller-carousel'));
    initialize_owl($('#special-carousel'));
    initialize_owl($('#accessories-carousel'));
    initialize_owl($('#crossselling-carousel'));
    initialize_owl($('#productscategory-carousel'));
    prdImgCarousel("#main .product-images");
    function initialize_owl(el) {
        el.owlCarousel({
            responsiveClass: !0,
            nav: !0,
            loop: !0,
            rtl: rtl1,
            navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                544: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }
    var tdcustomproducts = $("#customproduct-carousel");
    tdcustomproducts.owlCarousel({
        rtl: rtl1,
        responsiveClass: !0,
        loop: !0,
        nav: !0,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    var tdsmartblog = $("#smartblog-carousel");
    tdsmartblog.owlCarousel({
        responsiveClass: !0,
        nav: !0,
        loop: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    var tdteamblock = $("#tdteamblock-caraousel");
    tdteamblock.owlCarousel({
        rtl: rtl1,
        responsiveClass: !0,
        autoplay: !0,
        loop: !0,
        nav: !1,
        smartSpeed: 450,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    var tdgallerycms = $("#tdgallarycms-carousel");
    tdgallerycms.owlCarousel({
        rtl: rtl1,
        responsiveClass: !0,
        autoplay: !0,
        loop: !0,
        nav: !1,
        smartSpeed: 450,
        stopOnHover: !0,
        navText: ['<i class="material-icons"></i>', '<i class="material-icons"></i>'],
        responsive: {
            0: {
                items: 1
            },
            543: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    var tdmanufacturer = $("#manufacturer-carousel");
    tdmanufacturer.owlCarousel({
        responsiveClass: !0,
        nav: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            544: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    var tdsubcategory = $("#subcategory-carousel");
    tdsubcategory.owlCarousel({
        responsiveClass: !0,
        nav: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 2
            },
            544: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    var tdscategorylist = $(".category-container");
    tdscategorylist.owlCarousel({
        responsiveClass: !0,
        nav: !0,
        loop: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    var tdinstagram = $("#instagram-carousel");
    tdinstagram.owlCarousel({
        responsiveClass: !0,
        nav: !0,
        loop: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1400: {
                items: 6
            }
        }
    });
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if (!isMobile) {
        if ($(".parallax").length) {
            $(".parallax").sitManParallex({
                invert: !1
            })
        }
    } else {
        $(".parallax").sitManParallex({
            invert: !0
        })
    }
    $(".searchtoggle").on("click", function(event) {
        $(this).toggleClass('active').parent().find('.tdsearchtoggle').stop().slideToggle('medium');
        event.stopPropagation()
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.backtotop').fadeIn(500)
        } else {
            $('.backtotop').fadeOut(500)
        }
    });
    $('.backtotop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })
});
function prdImgCarousel(prdId) {
    $(prdId).owlCarousel({
        responsiveClass: !0,
        nav: !0,
        rtl: rtl1,
        navText: ['<i class="fa icon"></i>', '<i class="fa icon"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
}
function responsiveResize() {
    if ($(window).width() <= 991 && responsiveflag == !1) {
        accordion('enable');
        accordionFooter('enable');
        responsiveflag = !0
    } else if ($(window).width() >= 992) {
        accordion('disable');
        accordionFooter('disable');
        responsiveflag = !1
    }
    if ($(window).width() <= 767 && responsiveflag1 == !1) {
        accordionTab('enable');
        responsiveflag1 = !0
    } else if ($(window).width() >= 768) {
        accordionTab('disable');
        responsiveflag1 = !1
    }
}
function accordionTab(status) {
    if (status == 'enable') {
        $('.nav-tabs-dropdown').removeAttr('style');
        $('.nav-tabs-dropdown').each(function(i, elm) {
            $(elm).text($(elm).next('ul').find('li a.active').text())
        });
        $('.nav-tabs-dropdown').on('click', function(e) {
            $(e.target).toggleClass('open').next('ul').slideToggle();
            e.preventDefault()
        });
        $('.nav.nav-tabs.nav-tabs-horizontal a[data-toggle="tab"]').on('click', function(e) {
            $(e.target).closest('ul').slideUp('fast').prev('a').removeClass('open').text($(this).text());
            e.preventDefault()
        });
        $('.nav-tabs-dropdown').siblings('.nav.nav-tabs.nav-tabs-horizontal').slideUp('fast')
    } else {
        $('.nav-tabs-dropdown').hide();
        $('.nav-tabs-dropdown').siblings('.nav.nav-tabs.nav-tabs-horizontal').removeClass('open').removeAttr('style').slideDown('fast');
        $('.nav.nav-tabs.nav-tabs-horizontal a[data-toggle="tab"]').unbind('click');
        $('.nav-tabs-dropdown').removeClass('open').unbind('click')
    }
}
function accordionFooter(status) {
    if (status == 'enable') {
        $('#footer h4.title_block').on('click', function(e) {
            $(this).toggleClass('active').parent().find('.toggle-footer').stop().slideToggle('medium');
            e.preventDefault()
        })
        $('#footer').addClass('accordion').find('.toggle-footer').slideUp('fast')
    } else {
        $('#footer h4.title_block').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
        $('#footer').removeClass('accordion')
    }
}
function accordion(status) {
    if (status == 'enable') {
        var accordion_selector = '#right-column .block .title_block, #left-column .block .title_block';
        $(accordion_selector).on('click', function(e) {
            $(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
            e.preventDefault()
        });
        $('#right-column, #left-column').addClass('accordion').find('.block .block_content').slideUp('fast')
    } else {
        $('#right-column .block .title_block, #left-column .block .title_block').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
        $('#left-column, #right-column').removeClass('accordion')
    }
}
function accordionCart() {
    $('#header .blockcart .shoppingcart').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('active').parent().find('.cart_block').stop().slideToggle('medium');
        e.preventDefault()
    })
    $('.blockcart').find('.cart_block').slideUp('medium');
    $('#header .cart_block ul.products').slimScroll({
        height: '100%'
    })
}
$(document).on('click', function(e) {
    e.stopPropagation();
    $('.blockcart').find('.cart_block').slideUp('medium');
    $('#header .blockcart .shoppingcart').removeClass('active')
});
function bindGrid() {
    var view = $.totalStorage('display');
    if (view && view != 'grid')
        display(view);
    else
        $('.display').find('#grid').addClass('selected');
    $(document).on('click', '#grid', function(e) {
        e.preventDefault();
        $('#products div.products').animate({
            opacity: 0
        }, 400);
        setTimeout(function() {
            display('grid')
        }, 400)
        $('#products div.products').animate({
            opacity: 1
        }, 400)
    });
    $(document).on('click', '#list', function(e) {
        e.preventDefault();
        $('#products div.products').animate({
            opacity: 0
        }, 400)
        setTimeout(function() {
            display('list')
        }, 400)
        $('#products div.products').animate({
            opacity: 1
        }, 400)
    })
}
function display(view) {
    if (view == 'list') {
        $('#products div.products').removeClass('grid').addClass('list');
        $('#products div.products > article').removeClass('col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4').addClass('col-xs-12');
        $('#products div.products > article').each(function(index, element) {
            var html = '';
            html = '<div class="product-container">';
            html += '<div class="row">';
            html += '<div class="thumbnail-container col-xs-12 col-sm-6 col-md-4 col-lg-4">' + $(element).find('.thumbnail-container').html() + '</div>';
            html += '<div class="product-description col-xs-12 col-sm-6 col-md-8 col-lg-8">';
            html += '<h2 class="h3 product-title" itemprop="name">' + $(element).find('.product-title').html() + '</h2>';
            var price = $(element).find('.product-price-and-shipping').html();
            if (price != null) {
                html += '<div class="product-price-and-shipping">' + price + '</div>'
            }
            var hookReviews = $(element).find('.comments_note').html();
            if (hookReviews != null) {
                html += '<div class="comments_note" itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating">' + hookReviews + '</div>'
            }
            html += '<p class="product-desc" itemprop="description">' + $(element).find('.product-desc').html() + '</p>';
            var colorList = $(element).find('.highlighted-informations').html();
            if (colorList != null) {
                html += '<div class="highlighted-informations hidden-sm-down">' + colorList + '</div>'
            }
            html += '<div class="button-container">' + $(element).find('.button-container').html() + '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            $(element).html(html)
        });
        $('.display').find('li#list').addClass('selected');
        $('.display').find('li#grid').removeAttr('class');
        $.totalStorage('display', 'list')
    } else {
        $('#products div.products').removeClass('list').addClass('grid');
        $('#products div.products > article').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4 col-lg-6 col-xl-4');
        $('#products div.products > article').each(function(index, element) {
            var html = '';
            html += '<div class="product-container">';
            html += '<div class="thumbnail-container">' + $(element).find('.thumbnail-container').html() + '</div>';
            html += '<div class="product-description">';
            html += '<h1 class="h3 product-title" itemprop="name">' + $(element).find('.product-title').html() + '</h1>';
            var price = $(element).find('.product-price-and-shipping').html();
            if (price != null) {
                html += '<div class="product-price-and-shipping">' + price + '</div>'
            }
            var hookReviews = $(element).find('.comments_note').html();
            if (hookReviews != null) {
                html += '<div class="comments_note" itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating">' + hookReviews + '</div>'
            }
            html += '<p class="product-desc" itemprop="description">' + $(element).find('.product-desc').html() + '</p>';
            var colorList = $(element).find('.highlighted-informations').html();
            if (colorList != null) {
                html += '<div class="highlighted-informations hidden-sm-down">' + colorList + '</div>'
            }
            html += '</div>';
            html += '</div>';
            $(element).html(html)
        });
        $('.display').find('li#grid').addClass('selected');
        $('.display').find('li#list').removeAttr('class');
        $.totalStorage('display', 'grid')
    }
}
function stickyHeader() {
    var fixed = $(".nav-full-width");
    var height = parseInt(fixed.height());
    var outerHeight = parseInt($("#header").height());
    $(window).scroll(function() {
        if ($(window).width() > 991) {
            if ($(this).scrollTop() > outerHeight) {
                fixed.addClass("fixed");
                $('header#header').addClass("header-length").css('marginTop', height)
            } else {
                fixed.removeClass("fixed");
                $('header#header').removeClass("header-length").removeAttr('style')
            }
        } else {
            fixed.removeClass("fixed");
            $('header#header').removeClass("header-length").removeAttr('style')
        }
    })
}
$(document).ready(function() {
    stickyHeader()
});
$(window).resize(function() {
    stickyHeader()
})
