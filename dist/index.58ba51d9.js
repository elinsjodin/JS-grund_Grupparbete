// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e4k7L":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "088b4c0858ba51d9";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BLcd":[function(require,module,exports) {
var _navbar = require("./functions/navbar");
var _footer = require("./functions/footer");
var _cartModal = require("./functions/cartModal");
window.onload = function() {
    _navbar.myNavBar();
    _footer.footer();
    _cartModal.cartDropDown();
};

},{"./functions/navbar":"fUsK1","./functions/footer":"3hGNG","./functions/cartModal":"c5lkP"}],"fUsK1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "myNavBar", ()=>myNavBar
);
var _cartModal = require("./cartModal");
function myNavBar() {
    let navBarContainer = document.getElementById("nav-container");
    // hamburger menu button
    let hamburgerContainer = document.createElement("div");
    let hamburgerButton = document.createElement("div");
    const dropdownMenu = document.getElementById("dropdown-menu");
    hamburgerContainer.id = "hamburger-btn";
    hamburgerButton.className = "menu-btn";
    hamburgerContainer.appendChild(hamburgerButton);
    navBarContainer.appendChild(hamburgerContainer);
    let hamburgerBtnOpen = false;
    hamburgerContainer.addEventListener("click", ()=>{
        if (!hamburgerBtnOpen) {
            hamburgerContainer.classList.add("is-open");
            dropdownMenu.classList.add("is-down");
            hamburgerBtnOpen = true;
        } else {
            hamburgerContainer.classList.remove("is-open");
            dropdownMenu.classList.remove("is-down");
            hamburgerBtnOpen = false;
        }
    });
    // LOGO
    let navBarLogo = document.createElement("p");
    navBarLogo.className = "navbar-logo";
    navBarLogo.innerText = "NLP";
    navBarLogo.addEventListener("click", ()=>{
        location.href = "http://localhost:1234/index.html";
    });
    navBarContainer.appendChild(navBarLogo);
    // CARTBUTTON
    let cartButtonDesktop = document.createElement("button");
    cartButtonDesktop.setAttribute("type", "button");
    cartButtonDesktop.className = "cart-button-desktop";
    cartButtonDesktop.addEventListener("click", _cartModal.cartDropDown);
    let cartButtonMobile = document.createElement("button");
    cartButtonMobile.setAttribute("type", "button");
    cartButtonMobile.className = "cart-button-mobile";
    cartButtonMobile.addEventListener("click", ()=>{
        location.href = "http://localhost:1234/pages/cart.html";
    });
    // let cartBtnOpen: boolean = false;
    // cartButtonDesktop.addEventListener("click", () => {
    //   if (!cartBtnOpen) {
    //     cartButtonDesktop.classList.add("is-open");
    //     cartDropDownContainer.classList.add("is-down");
    //     cartBtnOpen = true;
    //   } else {
    //     cartButtonDesktop.classList.remove("is-open");
    //     cartDropDownContainer.classList.remove("is-down");
    //     cartBtnOpen = false;
    //   }
    // });
    let cartLogo = document.createElement("a");
    cartLogo.className = "cart-logo";
    cartLogo.innerHTML = "<i class='bi bi-bag'></i>";
    let cartLogoDesktop = document.createElement("a");
    cartLogoDesktop.className = "cart-logo";
    cartLogoDesktop.innerHTML = "<i class='bi bi-bag'></i>";
    cartButtonDesktop.appendChild(cartLogoDesktop);
    cartButtonMobile.appendChild(cartLogo);
    let cartCounter = document.createElement("span");
    cartCounter.className = "cart-count";
    let cartCounterDesktop = document.createElement("span");
    cartCounterDesktop.className = "cart-count";
    cartButtonDesktop.appendChild(cartCounterDesktop);
    cartButtonMobile.appendChild(cartCounter);
    navBarContainer.appendChild(cartButtonDesktop);
    navBarContainer.appendChild(cartButtonMobile);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./cartModal":"c5lkP"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c5lkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cartDropDown", ()=>cartDropDown
);
var _localStorage = require("../functions/localStorage");
function cartDropDown() {
    let cartDropDownContainer = document.createElement("div");
    cartDropDownContainer.id = "cart-dropdown-container";
    let shoppingCart = document.createElement("div");
    shoppingCart.className = "shopping-cart";
    let shoppingCartHeader = document.createElement("div");
    shoppingCartHeader.className = "shopping-cart-header";
    let shoppingCartLogo = document.createElement("span");
    shoppingCartLogo.className = "shopping-cart-logo";
    shoppingCartLogo.innerHTML = "<i class='bi bi-bag'></i>";
    let shoppingCartCount = document.createElement("span");
    shoppingCartCount.className = "shopping-cart-count";
    shoppingCartCount.innerHTML = counter.toString(); //Skapa funtion
    shoppingCartCount.addEventListener("change", cartCounter); //Skapa funktion
    let shoppingCartTotal = document.createElement("span");
    shoppingCartTotal.className = "shopping-cart-total";
    shoppingCartTotal.innerText = "Total::-";
    let shoppingCartItems = document.createElement("ul");
    shoppingCartItems.className = "shopping-cart-items";
    shoppingCartItems.innerHTML = "";
    let cartItems = _localStorage.cartList;
    for(let i = 0; i < cartItems.length; i++){
        let cartLi = document.createElement("li");
        let itemImg = cartItems[i].product.img;
        let itemTitel = cartItems[i].product.name;
        let cartTotal = cartItems[i].product.price;
        let cartCount = cartItems[i].qty;
        let liImg = document.createElement("span");
        liImg.innerHTML = itemImg.toString();
        cartLi.appendChild(liImg);
        let liTitel = document.createElement("span");
        liTitel.innerHTML = itemTitel.toString();
        cartLi.appendChild(liTitel);
        let liPrice = document.createElement("span");
        liPrice.innerHTML = cartTotal.toString();
        cartLi.appendChild(liPrice);
        let licartCount = document.createElement("span");
        licartCount.innerHTML = cartCount.toString();
        cartLi.appendChild(licartCount);
        shoppingCartItems.appendChild(cartLi);
    }
    let viewCartButton = document.createElement("button");
    viewCartButton.className = "view-cart-button";
    viewCartButton.innerText = "View Cart";
    viewCartButton.addEventListener("click", ()=>{
        if (window.location.href === "http://localhost:1234/pages/cart.html") return false;
        else location.href = "cart.html";
    });
    let shoppingCartCheckoutButton = document.createElement("button");
    shoppingCartCheckoutButton.className = "shopping-cart-checkout-button";
    shoppingCartCheckoutButton.innerText = "Checkout";
    shoppingCartCheckoutButton.addEventListener("click", ()=>{
        if (window.location.href === "http://localhost:1234/pages/checkout.html") return false;
        else location.href = "checkout.html";
    });
    cartDropDownContainer.appendChild(shoppingCart);
    shoppingCart.appendChild(shoppingCartHeader);
    shoppingCartHeader.appendChild(shoppingCartLogo);
    shoppingCartHeader.appendChild(shoppingCartCount);
    shoppingCartHeader.appendChild(shoppingCartTotal);
    shoppingCart.appendChild(shoppingCartItems);
    shoppingCart.appendChild(viewCartButton);
    shoppingCart.appendChild(shoppingCartCheckoutButton);
}

},{"../functions/localStorage":"cAqVF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cAqVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "productList", ()=>productList
);
parcelHelpers.export(exports, "detailsList", ()=>detailsList
);
parcelHelpers.export(exports, "cartList", ()=>cartList
);
parcelHelpers.export(exports, "localStorageKey", ()=>localStorageKey
);
let productList = [];
let detailsList = [];
let cartList = [];
let localStorageKey = JSON.parse(localStorage.getItem("localStorageKey"));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3hGNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footer", ()=>footer1
);
function footer1() {
    let footerContainer = document.getElementById("footer-container");
    let footer = document.createElement("div");
    let contact = document.createElement("p");
    contact.id = "contact";
    contact.innerText = "Contact";
    let faq = document.createElement("p");
    faq.id = "FAQ";
    faq.innerText = "FAQ";
    let philosphy = document.createElement("p");
    philosphy.id = "philosphy";
    philosphy.innerText = "Brand Philosphy";
    let brand = document.createElement("p");
    brand.id = "brand";
    brand.innerHTML = "&#169;NLP";
    footer.appendChild(contact);
    footer.appendChild(faq);
    footer.appendChild(philosphy);
    footer.appendChild(brand);
    footerContainer.appendChild(footer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["e4k7L","7BLcd"], "7BLcd", "parcelRequire9be1")

//# sourceMappingURL=index.58ba51d9.js.map
