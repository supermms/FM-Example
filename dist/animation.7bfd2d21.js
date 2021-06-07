// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
},{}],"node_modules/hey-listen/dist/hey-listen.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.invariant = void 0;

var warning = function () {};

exports.warning = warning;

var invariant = function () {};

exports.invariant = invariant;

if ("development" !== 'production') {
  exports.warning = warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };

  exports.invariant = invariant = function (check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}
},{}],"node_modules/popmotion/dist/es/utils/clamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = void 0;

var clamp = function (min, max, v) {
  return Math.min(Math.max(v, min), max);
};

exports.clamp = clamp;
},{}],"node_modules/popmotion/dist/es/animations/utils/find-spring.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcAngularFreq = calcAngularFreq;
exports.findSpring = findSpring;
exports.minDuration = exports.minDamping = exports.maxDuration = exports.maxDamping = void 0;

var _heyListen = require("hey-listen");

var _clamp = require("../../utils/clamp.js");

var safeMin = 0.001;
var minDuration = 0.01;
exports.minDuration = minDuration;
var maxDuration = 10.0;
exports.maxDuration = maxDuration;
var minDamping = 0.05;
exports.minDamping = minDamping;
var maxDamping = 1;
exports.maxDamping = maxDamping;

function findSpring(_a) {
  var _b = _a.duration,
      duration = _b === void 0 ? 800 : _b,
      _c = _a.bounce,
      bounce = _c === void 0 ? 0.25 : _c,
      _d = _a.velocity,
      velocity = _d === void 0 ? 0 : _d,
      _e = _a.mass,
      mass = _e === void 0 ? 1 : _e;
  var envelope;
  var derivative;
  (0, _heyListen.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
  var dampingRatio = 1 - bounce;
  dampingRatio = (0, _clamp.clamp)(minDamping, maxDamping, dampingRatio);
  duration = (0, _clamp.clamp)(minDuration, maxDuration, duration / 1000);

  if (dampingRatio < 1) {
    envelope = function (undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var a = exponentialDecay - velocity;
      var b = calcAngularFreq(undampedFreq, dampingRatio);
      var c = Math.exp(-delta);
      return safeMin - a / b * c;
    };

    derivative = function (undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var d = delta * velocity + velocity;
      var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
      var f = Math.exp(-delta);
      var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
      var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = function (undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (undampedFreq - velocity) * duration + 1;
      return -safeMin + a * b;
    };

    derivative = function (undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (velocity - undampedFreq) * (duration * duration);
      return a * b;
    };
  }

  var initialGuess = 5 / duration;
  var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1000;

  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration: duration
    };
  } else {
    var stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness: stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration: duration
    };
  }
}

var rootIterations = 12;

function approximateRoot(envelope, derivative, initialGuess) {
  var result = initialGuess;

  for (var i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }

  return result;
}

function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
},{"hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","../../utils/clamp.js":"node_modules/popmotion/dist/es/utils/clamp.js"}],"node_modules/popmotion/dist/es/animations/generators/spring.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spring = spring;

var _tslib = require("tslib");

var _findSpring = require("../utils/find-spring.js");

var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];

function isSpringType(options, keys) {
  return keys.some(function (key) {
    return options[key] !== undefined;
  });
}

function getSpringOptions(options) {
  var springOptions = (0, _tslib.__assign)({
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false
  }, options);

  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    var derived = (0, _findSpring.findSpring)(options);
    springOptions = (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, springOptions), derived), {
      velocity: 0.0,
      mass: 1.0
    });
    springOptions.isResolvedFromDuration = true;
  }

  return springOptions;
}

function spring(_a) {
  var _b = _a.from,
      from = _b === void 0 ? 0.0 : _b,
      _c = _a.to,
      to = _c === void 0 ? 1.0 : _c,
      _d = _a.restSpeed,
      restSpeed = _d === void 0 ? 2 : _d,
      restDelta = _a.restDelta,
      options = (0, _tslib.__rest)(_a, ["from", "to", "restSpeed", "restDelta"]);
  var state = {
    done: false,
    value: from
  };

  var _e = getSpringOptions(options),
      stiffness = _e.stiffness,
      damping = _e.damping,
      mass = _e.mass,
      velocity = _e.velocity,
      duration = _e.duration,
      isResolvedFromDuration = _e.isResolvedFromDuration;

  var resolveSpring = zero;
  var resolveVelocity = zero;

  function createSpring() {
    var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    var initialDelta = to - from;
    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;

    if (dampingRatio < 1) {
      var angularFreq_1 = (0, _findSpring.calcAngularFreq)(undampedAngularFreq, dampingRatio);

      resolveSpring = function (t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 * Math.sin(angularFreq_1 * t) + initialDelta * Math.cos(angularFreq_1 * t));
      };

      resolveVelocity = function (t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 + initialDelta * Math.cos(angularFreq_1 * t)) - envelope * (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = function (t) {
        return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
      };
    } else {
      var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);

      resolveSpring = function (t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
      };
    }
  }

  createSpring();
  return {
    next: function (t) {
      var current = resolveSpring(t);

      if (!isResolvedFromDuration) {
        var currentVelocity = resolveVelocity(t) * 1000;
        var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }

      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: function () {
      var _a;

      velocity = -velocity;
      _a = [to, from], from = _a[0], to = _a[1];
      createSpring();
    }
  };
}

spring.needsInterpolation = function (a, b) {
  return typeof a === "string" || typeof b === "string";
};

var zero = function (_t) {
  return 0;
};
},{"tslib":"node_modules/tslib/tslib.es6.js","../utils/find-spring.js":"node_modules/popmotion/dist/es/animations/utils/find-spring.js"}],"node_modules/popmotion/dist/es/utils/progress.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progress = void 0;

var progress = function (from, to, value) {
  var toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

exports.progress = progress;
},{}],"node_modules/popmotion/dist/es/utils/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mix = void 0;

var mix = function (from, to, progress) {
  return -progress * from + progress * to + from;
};

exports.mix = mix;
},{}],"node_modules/style-value-types/dist/es/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
exports.singleColorRegex = exports.sanitize = exports.floatRegex = exports.colorRegex = exports.clamp = void 0;

var clamp = function (min, max) {
  return function (v) {
    return Math.max(Math.min(v, max), min);
  };
};

exports.clamp = clamp;

var sanitize = function (v) {
  return v % 1 ? Number(v.toFixed(5)) : v;
};

exports.sanitize = sanitize;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
exports.floatRegex = floatRegex;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
exports.colorRegex = colorRegex;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
exports.singleColorRegex = singleColorRegex;

function isString(v) {
  return typeof v === 'string';
}
},{}],"node_modules/style-value-types/dist/es/numbers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scale = exports.number = exports.alpha = void 0;

var _tslib = require("tslib");

var _utils = require("../utils.js");

var number = {
  test: function (v) {
    return typeof v === 'number';
  },
  parse: parseFloat,
  transform: function (v) {
    return v;
  }
};
exports.number = number;
var alpha = (0, _tslib.__assign)((0, _tslib.__assign)({}, number), {
  transform: (0, _utils.clamp)(0, 1)
});
exports.alpha = alpha;
var scale = (0, _tslib.__assign)((0, _tslib.__assign)({}, number), {
  default: 1
});
exports.scale = scale;
},{"tslib":"node_modules/tslib/tslib.es6.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js"}],"node_modules/style-value-types/dist/es/numbers/units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vw = exports.vh = exports.px = exports.progressPercentage = exports.percent = exports.degrees = void 0;

var _tslib = require("tslib");

var _utils = require("../utils.js");

var createUnitType = function (unit) {
  return {
    test: function (v) {
      return (0, _utils.isString)(v) && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) {
      return "" + v + unit;
    }
  };
};

var degrees = createUnitType('deg');
exports.degrees = degrees;
var percent = createUnitType('%');
exports.percent = percent;
var px = createUnitType('px');
exports.px = px;
var vh = createUnitType('vh');
exports.vh = vh;
var vw = createUnitType('vw');
exports.vw = vw;
var progressPercentage = (0, _tslib.__assign)((0, _tslib.__assign)({}, percent), {
  parse: function (v) {
    return percent.parse(v) / 100;
  },
  transform: function (v) {
    return percent.transform(v * 100);
  }
});
exports.progressPercentage = progressPercentage;
},{"tslib":"node_modules/tslib/tslib.es6.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js"}],"node_modules/style-value-types/dist/es/color/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitColor = exports.isColorString = void 0;

var _utils = require("../utils.js");

var isColorString = function (type, testProp) {
  return function (v) {
    return Boolean((0, _utils.isString)(v) && _utils.singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
  };
};

exports.isColorString = isColorString;

var splitColor = function (aName, bName, cName) {
  return function (v) {
    var _a;

    if (!(0, _utils.isString)(v)) return v;

    var _b = v.match(_utils.floatRegex),
        a = _b[0],
        b = _b[1],
        c = _b[2],
        alpha = _b[3];

    return _a = {}, _a[aName] = parseFloat(a), _a[bName] = parseFloat(b), _a[cName] = parseFloat(c), _a.alpha = alpha !== undefined ? parseFloat(alpha) : 1, _a;
  };
};

exports.splitColor = splitColor;
},{"../utils.js":"node_modules/style-value-types/dist/es/utils.js"}],"node_modules/style-value-types/dist/es/color/hsla.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hsla = void 0;

var _index = require("../numbers/index.js");

var _units = require("../numbers/units.js");

var _utils = require("../utils.js");

var _utils2 = require("./utils.js");

var hsla = {
  test: (0, _utils2.isColorString)('hsl', 'hue'),
  parse: (0, _utils2.splitColor)('hue', 'saturation', 'lightness'),
  transform: function (_a) {
    var hue = _a.hue,
        saturation = _a.saturation,
        lightness = _a.lightness,
        _b = _a.alpha,
        alpha$1 = _b === void 0 ? 1 : _b;
    return 'hsla(' + Math.round(hue) + ', ' + _units.percent.transform((0, _utils.sanitize)(saturation)) + ', ' + _units.percent.transform((0, _utils.sanitize)(lightness)) + ', ' + (0, _utils.sanitize)(_index.alpha.transform(alpha$1)) + ')';
  }
};
exports.hsla = hsla;
},{"../numbers/index.js":"node_modules/style-value-types/dist/es/numbers/index.js","../numbers/units.js":"node_modules/style-value-types/dist/es/numbers/units.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js","./utils.js":"node_modules/style-value-types/dist/es/color/utils.js"}],"node_modules/style-value-types/dist/es/color/rgba.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgba = exports.rgbUnit = void 0;

var _tslib = require("tslib");

var _index = require("../numbers/index.js");

var _utils = require("../utils.js");

var _utils2 = require("./utils.js");

var clampRgbUnit = (0, _utils.clamp)(0, 255);
var rgbUnit = (0, _tslib.__assign)((0, _tslib.__assign)({}, _index.number), {
  transform: function (v) {
    return Math.round(clampRgbUnit(v));
  }
});
exports.rgbUnit = rgbUnit;
var rgba = {
  test: (0, _utils2.isColorString)('rgb', 'red'),
  parse: (0, _utils2.splitColor)('red', 'green', 'blue'),
  transform: function (_a) {
    var red = _a.red,
        green = _a.green,
        blue = _a.blue,
        _b = _a.alpha,
        alpha$1 = _b === void 0 ? 1 : _b;
    return 'rgba(' + rgbUnit.transform(red) + ', ' + rgbUnit.transform(green) + ', ' + rgbUnit.transform(blue) + ', ' + (0, _utils.sanitize)(_index.alpha.transform(alpha$1)) + ')';
  }
};
exports.rgba = rgba;
},{"tslib":"node_modules/tslib/tslib.es6.js","../numbers/index.js":"node_modules/style-value-types/dist/es/numbers/index.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js","./utils.js":"node_modules/style-value-types/dist/es/color/utils.js"}],"node_modules/style-value-types/dist/es/color/hex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hex = void 0;

var _rgba = require("./rgba.js");

var _utils = require("./utils.js");

function parseHex(v) {
  var r = '';
  var g = '';
  var b = '';
  var a = '';

  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}

var hex = {
  test: (0, _utils.isColorString)('#'),
  parse: parseHex,
  transform: _rgba.rgba.transform
};
exports.hex = hex;
},{"./rgba.js":"node_modules/style-value-types/dist/es/color/rgba.js","./utils.js":"node_modules/style-value-types/dist/es/color/utils.js"}],"node_modules/style-value-types/dist/es/color/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = void 0;

var _utils = require("../utils.js");

var _hex = require("./hex.js");

var _hsla = require("./hsla.js");

var _rgba = require("./rgba.js");

var color = {
  test: function (v) {
    return _rgba.rgba.test(v) || _hex.hex.test(v) || _hsla.hsla.test(v);
  },
  parse: function (v) {
    if (_rgba.rgba.test(v)) {
      return _rgba.rgba.parse(v);
    } else if (_hsla.hsla.test(v)) {
      return _hsla.hsla.parse(v);
    } else {
      return _hex.hex.parse(v);
    }
  },
  transform: function (v) {
    return (0, _utils.isString)(v) ? v : v.hasOwnProperty('red') ? _rgba.rgba.transform(v) : _hsla.hsla.transform(v);
  }
};
exports.color = color;
},{"../utils.js":"node_modules/style-value-types/dist/es/utils.js","./hex.js":"node_modules/style-value-types/dist/es/color/hex.js","./hsla.js":"node_modules/style-value-types/dist/es/color/hsla.js","./rgba.js":"node_modules/style-value-types/dist/es/color/rgba.js"}],"node_modules/style-value-types/dist/es/complex/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complex = void 0;

var _index = require("../color/index.js");

var _index2 = require("../numbers/index.js");

var _utils = require("../utils.js");

var colorToken = '${c}';
var numberToken = '${n}';

function test(v) {
  var _a, _b, _c, _d;

  return isNaN(v) && (0, _utils.isString)(v) && ((_b = (_a = v.match(_utils.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils.colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}

function analyse(v) {
  var values = [];
  var numColors = 0;
  var colors = v.match(_utils.colorRegex);

  if (colors) {
    numColors = colors.length;
    v = v.replace(_utils.colorRegex, colorToken);
    values.push.apply(values, colors.map(_index.color.parse));
  }

  var numbers = v.match(_utils.floatRegex);

  if (numbers) {
    v = v.replace(_utils.floatRegex, numberToken);
    values.push.apply(values, numbers.map(_index2.number.parse));
  }

  return {
    values: values,
    numColors: numColors,
    tokenised: v
  };
}

function parse(v) {
  return analyse(v).values;
}

function createTransformer(v) {
  var _a = analyse(v),
      values = _a.values,
      numColors = _a.numColors,
      tokenised = _a.tokenised;

  var numValues = values.length;
  return function (v) {
    var output = tokenised;

    for (var i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _index.color.transform(v[i]) : (0, _utils.sanitize)(v[i]));
    }

    return output;
  };
}

var convertNumbersToZero = function (v) {
  return typeof v === 'number' ? 0 : v;
};

function getAnimatableNone(v) {
  var parsed = parse(v);
  var transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}

var complex = {
  test: test,
  parse: parse,
  createTransformer: createTransformer,
  getAnimatableNone: getAnimatableNone
};
exports.complex = complex;
},{"../color/index.js":"node_modules/style-value-types/dist/es/color/index.js","../numbers/index.js":"node_modules/style-value-types/dist/es/numbers/index.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js"}],"node_modules/style-value-types/dist/es/complex/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = void 0;

var _tslib = require("tslib");

var _index = require("./index.js");

var _utils = require("../utils.js");

var maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);

function applyDefaultFilter(v) {
  var _a = v.slice(0, -1).split('('),
      name = _a[0],
      value = _a[1];

  if (name === 'drop-shadow') return v;
  var number = (value.match(_utils.floatRegex) || [])[0];
  if (!number) return v;
  var unit = value.replace(number, '');
  var defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + '(' + defaultValue + unit + ')';
}

var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = (0, _tslib.__assign)((0, _tslib.__assign)({}, _index.complex), {
  getAnimatableNone: function (v) {
    var functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(' ') : v;
  }
});
exports.filter = filter;
},{"tslib":"node_modules/tslib/tslib.es6.js","./index.js":"node_modules/style-value-types/dist/es/complex/index.js","../utils.js":"node_modules/style-value-types/dist/es/utils.js"}],"node_modules/style-value-types/dist/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "alpha", {
  enumerable: true,
  get: function () {
    return _index.alpha;
  }
});
Object.defineProperty(exports, "number", {
  enumerable: true,
  get: function () {
    return _index.number;
  }
});
Object.defineProperty(exports, "scale", {
  enumerable: true,
  get: function () {
    return _index.scale;
  }
});
Object.defineProperty(exports, "degrees", {
  enumerable: true,
  get: function () {
    return _units.degrees;
  }
});
Object.defineProperty(exports, "percent", {
  enumerable: true,
  get: function () {
    return _units.percent;
  }
});
Object.defineProperty(exports, "progressPercentage", {
  enumerable: true,
  get: function () {
    return _units.progressPercentage;
  }
});
Object.defineProperty(exports, "px", {
  enumerable: true,
  get: function () {
    return _units.px;
  }
});
Object.defineProperty(exports, "vh", {
  enumerable: true,
  get: function () {
    return _units.vh;
  }
});
Object.defineProperty(exports, "vw", {
  enumerable: true,
  get: function () {
    return _units.vw;
  }
});
Object.defineProperty(exports, "hsla", {
  enumerable: true,
  get: function () {
    return _hsla.hsla;
  }
});
Object.defineProperty(exports, "rgbUnit", {
  enumerable: true,
  get: function () {
    return _rgba.rgbUnit;
  }
});
Object.defineProperty(exports, "rgba", {
  enumerable: true,
  get: function () {
    return _rgba.rgba;
  }
});
Object.defineProperty(exports, "hex", {
  enumerable: true,
  get: function () {
    return _hex.hex;
  }
});
Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function () {
    return _index2.color;
  }
});
Object.defineProperty(exports, "complex", {
  enumerable: true,
  get: function () {
    return _index3.complex;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function () {
    return _filter.filter;
  }
});

var _index = require("./numbers/index.js");

var _units = require("./numbers/units.js");

var _hsla = require("./color/hsla.js");

var _rgba = require("./color/rgba.js");

var _hex = require("./color/hex.js");

var _index2 = require("./color/index.js");

var _index3 = require("./complex/index.js");

var _filter = require("./complex/filter.js");
},{"./numbers/index.js":"node_modules/style-value-types/dist/es/numbers/index.js","./numbers/units.js":"node_modules/style-value-types/dist/es/numbers/units.js","./color/hsla.js":"node_modules/style-value-types/dist/es/color/hsla.js","./color/rgba.js":"node_modules/style-value-types/dist/es/color/rgba.js","./color/hex.js":"node_modules/style-value-types/dist/es/color/hex.js","./color/index.js":"node_modules/style-value-types/dist/es/color/index.js","./complex/index.js":"node_modules/style-value-types/dist/es/complex/index.js","./complex/filter.js":"node_modules/style-value-types/dist/es/complex/filter.js"}],"node_modules/popmotion/dist/es/utils/mix-color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixLinearColor = exports.mixColor = void 0;

var _tslib = require("tslib");

var _mix = require("./mix.js");

var _styleValueTypes = require("style-value-types");

var _heyListen = require("hey-listen");

var mixLinearColor = function (from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};

exports.mixLinearColor = mixLinearColor;
var colorTypes = [_styleValueTypes.hex, _styleValueTypes.rgba, _styleValueTypes.hsla];

var getColorType = function (v) {
  return colorTypes.find(function (type) {
    return type.test(v);
  });
};

var notAnimatable = function (color) {
  return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};

var mixColor = function (from, to) {
  var fromColorType = getColorType(from);
  var toColorType = getColorType(to);
  (0, _heyListen.invariant)(!!fromColorType, notAnimatable(from));
  (0, _heyListen.invariant)(!!toColorType, notAnimatable(to));
  (0, _heyListen.invariant)(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var fromColor = fromColorType.parse(from);
  var toColor = toColorType.parse(to);
  var blended = (0, _tslib.__assign)({}, fromColor);
  var mixFunc = fromColorType === _styleValueTypes.hsla ? _mix.mix : mixLinearColor;
  return function (v) {
    for (var key in blended) {
      if (key !== "alpha") {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = (0, _mix.mix)(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

exports.mixColor = mixColor;
},{"tslib":"node_modules/tslib/tslib.es6.js","./mix.js":"node_modules/popmotion/dist/es/utils/mix.js","style-value-types":"node_modules/style-value-types/dist/es/index.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/es/utils/inc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroPoint = exports.isNum = void 0;
var zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};
exports.zeroPoint = zeroPoint;

var isNum = function (v) {
  return typeof v === 'number';
};

exports.isNum = isNum;
},{}],"node_modules/popmotion/dist/es/utils/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = void 0;

var combineFunctions = function (a, b) {
  return function (v) {
    return b(a(v));
  };
};

var pipe = function () {
  var transformers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    transformers[_i] = arguments[_i];
  }

  return transformers.reduce(combineFunctions);
};

exports.pipe = pipe;
},{}],"node_modules/popmotion/dist/es/utils/mix-complex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixObject = exports.mixComplex = exports.mixArray = void 0;

var _tslib = require("tslib");

var _styleValueTypes = require("style-value-types");

var _mix = require("./mix.js");

var _mixColor = require("./mix-color.js");

var _inc = require("./inc.js");

var _pipe = require("./pipe.js");

var _heyListen = require("hey-listen");

function getMixer(origin, target) {
  if ((0, _inc.isNum)(origin)) {
    return function (v) {
      return (0, _mix.mix)(origin, target, v);
    };
  } else if (_styleValueTypes.color.test(origin)) {
    return (0, _mixColor.mixColor)(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}

var mixArray = function (from, to) {
  var output = (0, _tslib.__spreadArray)([], from);
  var numValues = output.length;
  var blendValue = from.map(function (fromThis, i) {
    return getMixer(fromThis, to[i]);
  });
  return function (v) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

exports.mixArray = mixArray;

var mixObject = function (origin, target) {
  var output = (0, _tslib.__assign)((0, _tslib.__assign)({}, origin), target);
  var blendValue = {};

  for (var key in output) {
    if (origin[key] !== undefined && target[key] !== undefined) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }

  return function (v) {
    for (var key in blendValue) {
      output[key] = blendValue[key](v);
    }

    return output;
  };
};

exports.mixObject = mixObject;

function analyse(value) {
  var parsed = _styleValueTypes.complex.parse(value);

  var numValues = parsed.length;
  var numNumbers = 0;
  var numRGB = 0;
  var numHSL = 0;

  for (var i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== undefined) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }

  return {
    parsed: parsed,
    numNumbers: numNumbers,
    numRGB: numRGB,
    numHSL: numHSL
  };
}

var mixComplex = function (origin, target) {
  var template = _styleValueTypes.complex.createTransformer(target);

  var originStats = analyse(origin);
  var targetStats = analyse(target);
  (0, _heyListen.invariant)(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
  return (0, _pipe.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
};

exports.mixComplex = mixComplex;
},{"tslib":"node_modules/tslib/tslib.es6.js","style-value-types":"node_modules/style-value-types/dist/es/index.js","./mix.js":"node_modules/popmotion/dist/es/utils/mix.js","./mix-color.js":"node_modules/popmotion/dist/es/utils/mix-color.js","./inc.js":"node_modules/popmotion/dist/es/utils/inc.js","./pipe.js":"node_modules/popmotion/dist/es/utils/pipe.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/es/utils/interpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;

var _progress = require("./progress.js");

var _mix = require("./mix.js");

var _mixColor = require("./mix-color.js");

var _mixComplex = require("./mix-complex.js");

var _styleValueTypes = require("style-value-types");

var _clamp = require("./clamp.js");

var _pipe = require("./pipe.js");

var _heyListen = require("hey-listen");

var mixNumber = function (from, to) {
  return function (p) {
    return (0, _mix.mix)(from, to, p);
  };
};

function detectMixerFactory(v) {
  if (typeof v === 'number') {
    return mixNumber;
  } else if (typeof v === 'string') {
    if (_styleValueTypes.color.test(v)) {
      return _mixColor.mixColor;
    } else {
      return _mixComplex.mixComplex;
    }
  } else if (Array.isArray(v)) {
    return _mixComplex.mixArray;
  } else if (typeof v === 'object') {
    return _mixComplex.mixObject;
  }
}

function createMixers(output, ease, customMixer) {
  var mixers = [];
  var mixerFactory = customMixer || detectMixerFactory(output[0]);
  var numMixers = output.length - 1;

  for (var i = 0; i < numMixers; i++) {
    var mixer = mixerFactory(output[i], output[i + 1]);

    if (ease) {
      var easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = (0, _pipe.pipe)(easingFunction, mixer);
    }

    mixers.push(mixer);
  }

  return mixers;
}

function fastInterpolate(_a, _b) {
  var from = _a[0],
      to = _a[1];
  var mixer = _b[0];
  return function (v) {
    return mixer((0, _progress.progress)(from, to, v));
  };
}

function slowInterpolate(input, mixers) {
  var inputLength = input.length;
  var lastInputIndex = inputLength - 1;
  return function (v) {
    var mixerIndex = 0;
    var foundMixerIndex = false;

    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }

    if (!foundMixerIndex) {
      var i = 1;

      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }

      mixerIndex = i - 1;
    }

    var progressInRange = (0, _progress.progress)(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}

function interpolate(input, output, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.clamp,
      isClamp = _c === void 0 ? true : _c,
      ease = _b.ease,
      mixer = _b.mixer;

  var inputLength = input.length;
  (0, _heyListen.invariant)(inputLength === output.length, 'Both input and output ranges must be the same length');
  (0, _heyListen.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');

  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }

  var mixers = createMixers(output, ease, mixer);
  var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? function (v) {
    return interpolator((0, _clamp.clamp)(input[0], input[inputLength - 1], v));
  } : interpolator;
}
},{"./progress.js":"node_modules/popmotion/dist/es/utils/progress.js","./mix.js":"node_modules/popmotion/dist/es/utils/mix.js","./mix-color.js":"node_modules/popmotion/dist/es/utils/mix-color.js","./mix-complex.js":"node_modules/popmotion/dist/es/utils/mix-complex.js","style-value-types":"node_modules/style-value-types/dist/es/index.js","./clamp.js":"node_modules/popmotion/dist/es/utils/clamp.js","./pipe.js":"node_modules/popmotion/dist/es/utils/pipe.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/es/easing/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseEasing = exports.mirrorEasing = exports.createExpoIn = exports.createBackIn = exports.createAnticipate = void 0;

var reverseEasing = function (easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};

exports.reverseEasing = reverseEasing;

var mirrorEasing = function (easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};

exports.mirrorEasing = mirrorEasing;

var createExpoIn = function (power) {
  return function (p) {
    return Math.pow(p, power);
  };
};

exports.createExpoIn = createExpoIn;

var createBackIn = function (power) {
  return function (p) {
    return p * p * ((power + 1) * p - power);
  };
};

exports.createBackIn = createBackIn;

var createAnticipate = function (power) {
  var backEasing = createBackIn(power);
  return function (p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};

exports.createAnticipate = createAnticipate;
},{}],"node_modules/popmotion/dist/es/easing/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = exports.easeOut = exports.easeInOut = exports.easeIn = exports.circOut = exports.circInOut = exports.circIn = exports.bounceOut = exports.bounceInOut = exports.bounceIn = exports.backOut = exports.backInOut = exports.backIn = exports.anticipate = void 0;

var _utils = require("./utils.js");

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;

var linear = function (p) {
  return p;
};

exports.linear = linear;
var easeIn = (0, _utils.createExpoIn)(2);
exports.easeIn = easeIn;
var easeOut = (0, _utils.reverseEasing)(easeIn);
exports.easeOut = easeOut;
var easeInOut = (0, _utils.mirrorEasing)(easeIn);
exports.easeInOut = easeInOut;

var circIn = function (p) {
  return 1 - Math.sin(Math.acos(p));
};

exports.circIn = circIn;
var circOut = (0, _utils.reverseEasing)(circIn);
exports.circOut = circOut;
var circInOut = (0, _utils.mirrorEasing)(circOut);
exports.circInOut = circInOut;
var backIn = (0, _utils.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
exports.backIn = backIn;
var backOut = (0, _utils.reverseEasing)(backIn);
exports.backOut = backOut;
var backInOut = (0, _utils.mirrorEasing)(backIn);
exports.backInOut = backInOut;
var anticipate = (0, _utils.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
exports.anticipate = anticipate;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;

var bounceOut = function (p) {
  if (p === 1 || p === 0) return p;
  var p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};

exports.bounceOut = bounceOut;
var bounceIn = (0, _utils.reverseEasing)(bounceOut);
exports.bounceIn = bounceIn;

var bounceInOut = function (p) {
  return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};

exports.bounceInOut = bounceInOut;
},{"./utils.js":"node_modules/popmotion/dist/es/easing/utils.js"}],"node_modules/popmotion/dist/es/animations/generators/keyframes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertOffsetToTimes = convertOffsetToTimes;
exports.defaultEasing = defaultEasing;
exports.defaultOffset = defaultOffset;
exports.keyframes = keyframes;

var _interpolate = require("../../utils/interpolate.js");

var _index = require("../../easing/index.js");

function defaultEasing(values, easing) {
  return values.map(function () {
    return easing || _index.easeInOut;
  }).splice(0, values.length - 1);
}

function defaultOffset(values) {
  var numValues = values.length;
  return values.map(function (_value, i) {
    return i !== 0 ? i / (numValues - 1) : 0;
  });
}

function convertOffsetToTimes(offset, duration) {
  return offset.map(function (o) {
    return o * duration;
  });
}

function keyframes(_a) {
  var _b = _a.from,
      from = _b === void 0 ? 0 : _b,
      _c = _a.to,
      to = _c === void 0 ? 1 : _c,
      ease = _a.ease,
      offset = _a.offset,
      _d = _a.duration,
      duration = _d === void 0 ? 300 : _d;
  var state = {
    done: false,
    value: from
  };
  var values = Array.isArray(to) ? to : [from, to];
  var times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);

  function createInterpolator() {
    return (0, _interpolate.interpolate)(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }

  var interpolator = createInterpolator();
  return {
    next: function (t) {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: function () {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}
},{"../../utils/interpolate.js":"node_modules/popmotion/dist/es/utils/interpolate.js","../../easing/index.js":"node_modules/popmotion/dist/es/easing/index.js"}],"node_modules/popmotion/dist/es/animations/generators/decay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decay = decay;

function decay(_a) {
  var _b = _a.velocity,
      velocity = _b === void 0 ? 0 : _b,
      _c = _a.from,
      from = _c === void 0 ? 0 : _c,
      _d = _a.power,
      power = _d === void 0 ? 0.8 : _d,
      _e = _a.timeConstant,
      timeConstant = _e === void 0 ? 350 : _e,
      _f = _a.restDelta,
      restDelta = _f === void 0 ? 0.5 : _f,
      modifyTarget = _a.modifyTarget;
  var state = {
    done: false,
    value: from
  };
  var amplitude = power * velocity;
  var ideal = from + amplitude;
  var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - from;
  return {
    next: function (t) {
      var delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: function () {}
  };
}
},{}],"node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAnimationFromOptions = detectAnimationFromOptions;

var _spring = require("../generators/spring.js");

var _keyframes = require("../generators/keyframes.js");

var _decay = require("../generators/decay.js");

var types = {
  keyframes: _keyframes.keyframes,
  spring: _spring.spring,
  decay: _decay.decay
};

function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return _keyframes.keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }

  var keys = new Set(Object.keys(config));

  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return _keyframes.keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return _spring.spring;
  }

  return _keyframes.keyframes;
}
},{"../generators/spring.js":"node_modules/popmotion/dist/es/animations/generators/spring.js","../generators/keyframes.js":"node_modules/popmotion/dist/es/animations/generators/keyframes.js","../generators/decay.js":"node_modules/popmotion/dist/es/animations/generators/decay.js"}],"node_modules/framesync/dist/es/on-next-frame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onNextFrame = exports.defaultTimestep = void 0;
var defaultTimestep = 1 / 60 * 1000;
exports.defaultTimestep = defaultTimestep;
var getCurrentTime = typeof performance !== "undefined" ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var onNextFrame = typeof window !== "undefined" ? function (callback) {
  return window.requestAnimationFrame(callback);
} : function (callback) {
  return setTimeout(function () {
    return callback(getCurrentTime());
  }, defaultTimestep);
};
exports.onNextFrame = onNextFrame;
},{}],"node_modules/framesync/dist/es/create-render-step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRenderStep = createRenderStep;

function createRenderStep(runNextFrame) {
  var toRun = [];
  var toRunNextFrame = [];
  var numToRun = 0;
  var isProcessing = false;
  var toKeepAlive = new WeakSet();
  var step = {
    schedule: function (callback, keepAlive, immediate) {
      if (keepAlive === void 0) {
        keepAlive = false;
      }

      if (immediate === void 0) {
        immediate = false;
      }

      var addToCurrentFrame = immediate && isProcessing;
      var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);

      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
      }

      return callback;
    },
    cancel: function (callback) {
      var index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: function (frameData) {
      var _a;

      isProcessing = true;
      _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;

      if (numToRun) {
        for (var i = 0; i < numToRun; i++) {
          var callback = toRun[i];
          callback(frameData);

          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }

      isProcessing = false;
    }
  };
  return step;
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/framesync/dist/es/index.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFrameData = exports.flushSync = exports.cancelSync = exports.default = void 0;

var _onNextFrame = require("./on-next-frame.js");

var _createRenderStep = require("./create-render-step.js");

var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = (0, _createRenderStep.createRenderStep)(function () {
    return runNextFrame = true;
  });
  return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  var step = steps[key];

  acc[key] = function (process, keepAlive, immediate) {
    if (keepAlive === void 0) {
      keepAlive = false;
    }

    if (immediate === void 0) {
      immediate = false;
    }

    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };

  return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
exports.cancelSync = cancelSync;
var flushSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = function () {
    return steps[key].process(frame);
  };

  return acc;
}, {});
exports.flushSync = flushSync;

var processStep = function (stepId) {
  return steps[stepId].process(frame);
};

var processFrame = function (timestamp) {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? _onNextFrame.defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (runNextFrame) {
    useDefaultElapsed = false;
    (0, _onNextFrame.onNextFrame)(processFrame);
  }
};

var startLoop = function () {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) (0, _onNextFrame.onNextFrame)(processFrame);
};

var getFrameData = function () {
  return frame;
};

exports.getFrameData = getFrameData;
var _default = sync;
exports.default = _default;
},{"./on-next-frame.js":"node_modules/framesync/dist/es/on-next-frame.js","./create-render-step.js":"node_modules/framesync/dist/es/create-render-step.js","process":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"node_modules/popmotion/dist/es/animations/utils/elapsed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasRepeatDelayElapsed = hasRepeatDelayElapsed;
exports.loopElapsed = loopElapsed;
exports.reverseElapsed = reverseElapsed;

function loopElapsed(elapsed, duration, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return elapsed - duration - delay;
}

function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
  if (delay === void 0) {
    delay = 0;
  }

  if (isForwardPlayback === void 0) {
    isForwardPlayback = true;
  }

  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}

function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
},{}],"node_modules/popmotion/dist/es/animations/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;

var _tslib = require("tslib");

var _detectAnimationFromOptions = require("./utils/detect-animation-from-options.js");

var _framesync = _interopRequireWildcard(require("framesync"));

var _interpolate = require("../utils/interpolate.js");

var _elapsed = require("./utils/elapsed.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var framesync = function (update) {
  var passTimestamp = function (_a) {
    var delta = _a.delta;
    return update(delta);
  };

  return {
    start: function () {
      return _framesync.default.update(passTimestamp, true);
    },
    stop: function () {
      return _framesync.cancelSync.update(passTimestamp);
    }
  };
};

function animate(_a) {
  var _b, _c;

  var from = _a.from,
      _d = _a.autoplay,
      autoplay = _d === void 0 ? true : _d,
      _e = _a.driver,
      driver = _e === void 0 ? framesync : _e,
      _f = _a.elapsed,
      elapsed = _f === void 0 ? 0 : _f,
      _g = _a.repeat,
      repeatMax = _g === void 0 ? 0 : _g,
      _h = _a.repeatType,
      repeatType = _h === void 0 ? "loop" : _h,
      _j = _a.repeatDelay,
      repeatDelay = _j === void 0 ? 0 : _j,
      onPlay = _a.onPlay,
      onStop = _a.onStop,
      onComplete = _a.onComplete,
      onRepeat = _a.onRepeat,
      onUpdate = _a.onUpdate,
      options = (0, _tslib.__rest)(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  var to = options.to;
  var driverControls;
  var repeatCount = 0;
  var computedDuration = options.duration;
  var latest;
  var isComplete = false;
  var isForwardPlayback = true;
  var interpolateFromNumber;
  var animator = (0, _detectAnimationFromOptions.detectAnimationFromOptions)(options);

  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = (0, _interpolate.interpolate)([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }

  var animation = animator((0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
    from: from,
    to: to
  }));

  function repeat() {
    repeatCount++;

    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = (0, _elapsed.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = (0, _elapsed.loopElapsed)(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror") animation.flipTarget();
    }

    isComplete = false;
    onRepeat && onRepeat();
  }

  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }

  function update(delta) {
    if (!isForwardPlayback) delta = -delta;
    elapsed += delta;

    if (!isComplete) {
      var state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber) latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }

    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);

    if (isComplete) {
      if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;

      if (repeatCount < repeatMax) {
        (0, _elapsed.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }

  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }

  autoplay && play();
  return {
    stop: function () {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}
},{"tslib":"node_modules/tslib/tslib.es6.js","./utils/detect-animation-from-options.js":"node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js","framesync":"node_modules/framesync/dist/es/index.js","../utils/interpolate.js":"node_modules/popmotion/dist/es/utils/interpolate.js","./utils/elapsed.js":"node_modules/popmotion/dist/es/animations/utils/elapsed.js"}],"node_modules/popmotion/dist/es/utils/velocity-per-second.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.velocityPerSecond = velocityPerSecond;

function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
},{}],"node_modules/popmotion/dist/es/animations/inertia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inertia = inertia;

var _tslib = require("tslib");

var _index = require("./index.js");

var _velocityPerSecond = require("../utils/velocity-per-second.js");

var _framesync = require("framesync");

function inertia(_a) {
  var _b = _a.from,
      from = _b === void 0 ? 0 : _b,
      _c = _a.velocity,
      velocity = _c === void 0 ? 0 : _c,
      min = _a.min,
      max = _a.max,
      _d = _a.power,
      power = _d === void 0 ? 0.8 : _d,
      _e = _a.timeConstant,
      timeConstant = _e === void 0 ? 750 : _e,
      _f = _a.bounceStiffness,
      bounceStiffness = _f === void 0 ? 500 : _f,
      _g = _a.bounceDamping,
      bounceDamping = _g === void 0 ? 10 : _g,
      _h = _a.restDelta,
      restDelta = _h === void 0 ? 1 : _h,
      modifyTarget = _a.modifyTarget,
      driver = _a.driver,
      onUpdate = _a.onUpdate,
      onComplete = _a.onComplete;
  var currentAnimation;

  function isOutOfBounds(v) {
    return min !== undefined && v < min || max !== undefined && v > max;
  }

  function boundaryNearest(v) {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }

  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = (0, _index.animate)((0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
      driver: driver,
      onUpdate: function (v) {
        var _a;

        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete: onComplete
    }));
  }

  function startSpring(options) {
    startAnimation((0, _tslib.__assign)({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta: restDelta
    }, options));
  }

  if (isOutOfBounds(from)) {
    startSpring({
      from: from,
      velocity: velocity,
      to: boundaryNearest(from)
    });
  } else {
    var target = power * velocity + from;
    if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
    var boundary_1 = boundaryNearest(target);
    var heading_1 = boundary_1 === min ? -1 : 1;
    var prev_1;
    var current_1;

    var checkBoundary = function (v) {
      prev_1 = current_1;
      current_1 = v;
      velocity = (0, _velocityPerSecond.velocityPerSecond)(v - prev_1, (0, _framesync.getFrameData)().delta);

      if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
        startSpring({
          from: v,
          to: boundary_1,
          velocity: velocity
        });
      }
    };

    startAnimation({
      type: "decay",
      from: from,
      velocity: velocity,
      timeConstant: timeConstant,
      power: power,
      restDelta: restDelta,
      modifyTarget: modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
    });
  }

  return {
    stop: function () {
      return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    }
  };
}
},{"tslib":"node_modules/tslib/tslib.es6.js","./index.js":"node_modules/popmotion/dist/es/animations/index.js","../utils/velocity-per-second.js":"node_modules/popmotion/dist/es/utils/velocity-per-second.js","framesync":"node_modules/framesync/dist/es/index.js"}],"node_modules/popmotion/dist/es/utils/radians-to-degrees.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radiansToDegrees = void 0;

var radiansToDegrees = function (radians) {
  return radians * 180 / Math.PI;
};

exports.radiansToDegrees = radiansToDegrees;
},{}],"node_modules/popmotion/dist/es/utils/angle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angle = void 0;

var _radiansToDegrees = require("./radians-to-degrees.js");

var _inc = require("./inc.js");

var angle = function (a, b) {
  if (b === void 0) {
    b = _inc.zeroPoint;
  }

  return (0, _radiansToDegrees.radiansToDegrees)(Math.atan2(b.y - a.y, b.x - a.x));
};

exports.angle = angle;
},{"./radians-to-degrees.js":"node_modules/popmotion/dist/es/utils/radians-to-degrees.js","./inc.js":"node_modules/popmotion/dist/es/utils/inc.js"}],"node_modules/popmotion/dist/es/utils/apply-offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyOffset = void 0;

var applyOffset = function (from, to) {
  var hasReceivedFrom = true;

  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }

  return function (v) {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
};

exports.applyOffset = applyOffset;
},{}],"node_modules/popmotion/dist/es/utils/attract.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAttractor = exports.attractExpo = exports.attract = void 0;

var identity = function (v) {
  return v;
};

var createAttractor = function (alterDisplacement) {
  if (alterDisplacement === void 0) {
    alterDisplacement = identity;
  }

  return function (constant, origin, v) {
    var displacement = origin - v;
    var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
  };
};

exports.createAttractor = createAttractor;
var attract = createAttractor();
exports.attract = attract;
var attractExpo = createAttractor(Math.sqrt);
exports.attractExpo = attractExpo;
},{}],"node_modules/popmotion/dist/es/utils/degrees-to-radians.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.degreesToRadians = void 0;

var degreesToRadians = function (degrees) {
  return degrees * Math.PI / 180;
};

exports.degreesToRadians = degreesToRadians;
},{}],"node_modules/popmotion/dist/es/utils/is-point.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPoint = void 0;

var isPoint = function (point) {
  return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

exports.isPoint = isPoint;
},{}],"node_modules/popmotion/dist/es/utils/is-point-3d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPoint3D = void 0;

var _isPoint = require("./is-point.js");

var isPoint3D = function (point) {
  return (0, _isPoint.isPoint)(point) && point.hasOwnProperty('z');
};

exports.isPoint3D = isPoint3D;
},{"./is-point.js":"node_modules/popmotion/dist/es/utils/is-point.js"}],"node_modules/popmotion/dist/es/utils/distance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distance = distance;

var _isPoint = require("./is-point.js");

var _isPoint3d = require("./is-point-3d.js");

var _inc = require("./inc.js");

var distance1D = function (a, b) {
  return Math.abs(a - b);
};

function distance(a, b) {
  if ((0, _inc.isNum)(a) && (0, _inc.isNum)(b)) {
    return distance1D(a, b);
  } else if ((0, _isPoint.isPoint)(a) && (0, _isPoint.isPoint)(b)) {
    var xDelta = distance1D(a.x, b.x);
    var yDelta = distance1D(a.y, b.y);
    var zDelta = (0, _isPoint3d.isPoint3D)(a) && (0, _isPoint3d.isPoint3D)(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}
},{"./is-point.js":"node_modules/popmotion/dist/es/utils/is-point.js","./is-point-3d.js":"node_modules/popmotion/dist/es/utils/is-point-3d.js","./inc.js":"node_modules/popmotion/dist/es/utils/inc.js"}],"node_modules/popmotion/dist/es/utils/point-from-vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointFromVector = void 0;

var _degreesToRadians = require("./degrees-to-radians.js");

var pointFromVector = function (origin, angle, distance) {
  angle = (0, _degreesToRadians.degreesToRadians)(angle);
  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};

exports.pointFromVector = pointFromVector;
},{"./degrees-to-radians.js":"node_modules/popmotion/dist/es/utils/degrees-to-radians.js"}],"node_modules/popmotion/dist/es/utils/to-decimal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDecimal = void 0;

var toDecimal = function (num, precision) {
  if (precision === void 0) {
    precision = 2;
  }

  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};

exports.toDecimal = toDecimal;
},{}],"node_modules/popmotion/dist/es/utils/smooth-frame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoothFrame = void 0;

var _toDecimal = require("./to-decimal.js");

var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
  if (smoothing === void 0) {
    smoothing = 0;
  }

  return (0, _toDecimal.toDecimal)(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};

exports.smoothFrame = smoothFrame;
},{"./to-decimal.js":"node_modules/popmotion/dist/es/utils/to-decimal.js"}],"node_modules/popmotion/dist/es/utils/smooth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smooth = void 0;

var _smoothFrame = require("./smooth-frame.js");

var _framesync = require("framesync");

var smooth = function (strength) {
  if (strength === void 0) {
    strength = 50;
  }

  var previousValue = 0;
  var lastUpdated = 0;
  return function (v) {
    var currentFramestamp = (0, _framesync.getFrameData)().timestamp;
    var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    var newValue = timeDelta ? (0, _smoothFrame.smoothFrame)(previousValue, v, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

exports.smooth = smooth;
},{"./smooth-frame.js":"node_modules/popmotion/dist/es/utils/smooth-frame.js","framesync":"node_modules/framesync/dist/es/index.js"}],"node_modules/popmotion/dist/es/utils/snap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snap = void 0;

var snap = function (points) {
  if (typeof points === 'number') {
    return function (v) {
      return Math.round(v / points) * points;
    };
  } else {
    var i_1 = 0;
    var numPoints_1 = points.length;
    return function (v) {
      var lastDistance = Math.abs(points[0] - v);

      for (i_1 = 1; i_1 < numPoints_1; i_1++) {
        var point = points[i_1];
        var distance = Math.abs(point - v);
        if (distance === 0) return point;
        if (distance > lastDistance) return points[i_1 - 1];
        if (i_1 === numPoints_1 - 1) return point;
        lastDistance = distance;
      }
    };
  }
};

exports.snap = snap;
},{}],"node_modules/popmotion/dist/es/utils/velocity-per-frame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.velocityPerFrame = velocityPerFrame;

function velocityPerFrame(xps, frameDuration) {
  return xps / (1000 / frameDuration);
}
},{}],"node_modules/popmotion/dist/es/utils/wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = void 0;

var wrap = function (min, max, v) {
  var rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

exports.wrap = wrap;
},{}],"node_modules/popmotion/dist/es/easing/cubic-bezier.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicBezier = cubicBezier;

var _index = require("./index.js");

var a = function (a1, a2) {
  return 1.0 - 3.0 * a2 + 3.0 * a1;
};

var b = function (a1, a2) {
  return 3.0 * a2 - 6.0 * a1;
};

var c = function (a1) {
  return 3.0 * a1;
};

var calcBezier = function (t, a1, a2) {
  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};

var getSlope = function (t, a1, a2) {
  return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};

var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX;
  var currentT;
  var i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);

  return currentT;
}

var newtonIterations = 8;
var newtonMinSlope = 0.001;

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < newtonIterations; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return _index.linear;
  var sampleValues = new Float32Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function (t) {
    return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  };
}
},{"./index.js":"node_modules/popmotion/dist/es/easing/index.js"}],"node_modules/popmotion/dist/es/easing/steps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.steps = void 0;

var _clamp = require("../utils/clamp.js");

var steps = function (steps, direction) {
  if (direction === void 0) {
    direction = 'end';
  }

  return function (progress) {
    progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
    var expanded = progress * steps;
    var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
    return (0, _clamp.clamp)(0, 1, rounded / steps);
  };
};

exports.steps = steps;
},{"../utils/clamp.js":"node_modules/popmotion/dist/es/utils/clamp.js"}],"node_modules/popmotion/dist/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "animate", {
  enumerable: true,
  get: function () {
    return _index.animate;
  }
});
Object.defineProperty(exports, "inertia", {
  enumerable: true,
  get: function () {
    return _inertia.inertia;
  }
});
Object.defineProperty(exports, "decay", {
  enumerable: true,
  get: function () {
    return _decay.decay;
  }
});
Object.defineProperty(exports, "spring", {
  enumerable: true,
  get: function () {
    return _spring.spring;
  }
});
Object.defineProperty(exports, "keyframes", {
  enumerable: true,
  get: function () {
    return _keyframes.keyframes;
  }
});
Object.defineProperty(exports, "angle", {
  enumerable: true,
  get: function () {
    return _angle.angle;
  }
});
Object.defineProperty(exports, "applyOffset", {
  enumerable: true,
  get: function () {
    return _applyOffset.applyOffset;
  }
});
Object.defineProperty(exports, "attract", {
  enumerable: true,
  get: function () {
    return _attract.attract;
  }
});
Object.defineProperty(exports, "attractExpo", {
  enumerable: true,
  get: function () {
    return _attract.attractExpo;
  }
});
Object.defineProperty(exports, "createAttractor", {
  enumerable: true,
  get: function () {
    return _attract.createAttractor;
  }
});
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function () {
    return _clamp.clamp;
  }
});
Object.defineProperty(exports, "degreesToRadians", {
  enumerable: true,
  get: function () {
    return _degreesToRadians.degreesToRadians;
  }
});
Object.defineProperty(exports, "distance", {
  enumerable: true,
  get: function () {
    return _distance.distance;
  }
});
Object.defineProperty(exports, "interpolate", {
  enumerable: true,
  get: function () {
    return _interpolate.interpolate;
  }
});
Object.defineProperty(exports, "isPoint3D", {
  enumerable: true,
  get: function () {
    return _isPoint3d.isPoint3D;
  }
});
Object.defineProperty(exports, "isPoint", {
  enumerable: true,
  get: function () {
    return _isPoint.isPoint;
  }
});
Object.defineProperty(exports, "mixColor", {
  enumerable: true,
  get: function () {
    return _mixColor.mixColor;
  }
});
Object.defineProperty(exports, "mixComplex", {
  enumerable: true,
  get: function () {
    return _mixComplex.mixComplex;
  }
});
Object.defineProperty(exports, "mix", {
  enumerable: true,
  get: function () {
    return _mix.mix;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "pointFromVector", {
  enumerable: true,
  get: function () {
    return _pointFromVector.pointFromVector;
  }
});
Object.defineProperty(exports, "progress", {
  enumerable: true,
  get: function () {
    return _progress.progress;
  }
});
Object.defineProperty(exports, "radiansToDegrees", {
  enumerable: true,
  get: function () {
    return _radiansToDegrees.radiansToDegrees;
  }
});
Object.defineProperty(exports, "smoothFrame", {
  enumerable: true,
  get: function () {
    return _smoothFrame.smoothFrame;
  }
});
Object.defineProperty(exports, "smooth", {
  enumerable: true,
  get: function () {
    return _smooth.smooth;
  }
});
Object.defineProperty(exports, "snap", {
  enumerable: true,
  get: function () {
    return _snap.snap;
  }
});
Object.defineProperty(exports, "toDecimal", {
  enumerable: true,
  get: function () {
    return _toDecimal.toDecimal;
  }
});
Object.defineProperty(exports, "velocityPerFrame", {
  enumerable: true,
  get: function () {
    return _velocityPerFrame.velocityPerFrame;
  }
});
Object.defineProperty(exports, "velocityPerSecond", {
  enumerable: true,
  get: function () {
    return _velocityPerSecond.velocityPerSecond;
  }
});
Object.defineProperty(exports, "wrap", {
  enumerable: true,
  get: function () {
    return _wrap.wrap;
  }
});
Object.defineProperty(exports, "anticipate", {
  enumerable: true,
  get: function () {
    return _index2.anticipate;
  }
});
Object.defineProperty(exports, "backIn", {
  enumerable: true,
  get: function () {
    return _index2.backIn;
  }
});
Object.defineProperty(exports, "backInOut", {
  enumerable: true,
  get: function () {
    return _index2.backInOut;
  }
});
Object.defineProperty(exports, "backOut", {
  enumerable: true,
  get: function () {
    return _index2.backOut;
  }
});
Object.defineProperty(exports, "bounceIn", {
  enumerable: true,
  get: function () {
    return _index2.bounceIn;
  }
});
Object.defineProperty(exports, "bounceInOut", {
  enumerable: true,
  get: function () {
    return _index2.bounceInOut;
  }
});
Object.defineProperty(exports, "bounceOut", {
  enumerable: true,
  get: function () {
    return _index2.bounceOut;
  }
});
Object.defineProperty(exports, "circIn", {
  enumerable: true,
  get: function () {
    return _index2.circIn;
  }
});
Object.defineProperty(exports, "circInOut", {
  enumerable: true,
  get: function () {
    return _index2.circInOut;
  }
});
Object.defineProperty(exports, "circOut", {
  enumerable: true,
  get: function () {
    return _index2.circOut;
  }
});
Object.defineProperty(exports, "easeIn", {
  enumerable: true,
  get: function () {
    return _index2.easeIn;
  }
});
Object.defineProperty(exports, "easeInOut", {
  enumerable: true,
  get: function () {
    return _index2.easeInOut;
  }
});
Object.defineProperty(exports, "easeOut", {
  enumerable: true,
  get: function () {
    return _index2.easeOut;
  }
});
Object.defineProperty(exports, "linear", {
  enumerable: true,
  get: function () {
    return _index2.linear;
  }
});
Object.defineProperty(exports, "cubicBezier", {
  enumerable: true,
  get: function () {
    return _cubicBezier.cubicBezier;
  }
});
Object.defineProperty(exports, "steps", {
  enumerable: true,
  get: function () {
    return _steps.steps;
  }
});
Object.defineProperty(exports, "createAnticipate", {
  enumerable: true,
  get: function () {
    return _utils.createAnticipate;
  }
});
Object.defineProperty(exports, "createBackIn", {
  enumerable: true,
  get: function () {
    return _utils.createBackIn;
  }
});
Object.defineProperty(exports, "createExpoIn", {
  enumerable: true,
  get: function () {
    return _utils.createExpoIn;
  }
});
Object.defineProperty(exports, "mirrorEasing", {
  enumerable: true,
  get: function () {
    return _utils.mirrorEasing;
  }
});
Object.defineProperty(exports, "reverseEasing", {
  enumerable: true,
  get: function () {
    return _utils.reverseEasing;
  }
});

var _index = require("./animations/index.js");

var _inertia = require("./animations/inertia.js");

var _decay = require("./animations/generators/decay.js");

var _spring = require("./animations/generators/spring.js");

var _keyframes = require("./animations/generators/keyframes.js");

var _angle = require("./utils/angle.js");

var _applyOffset = require("./utils/apply-offset.js");

var _attract = require("./utils/attract.js");

var _clamp = require("./utils/clamp.js");

var _degreesToRadians = require("./utils/degrees-to-radians.js");

var _distance = require("./utils/distance.js");

var _interpolate = require("./utils/interpolate.js");

var _isPoint3d = require("./utils/is-point-3d.js");

var _isPoint = require("./utils/is-point.js");

var _mixColor = require("./utils/mix-color.js");

var _mixComplex = require("./utils/mix-complex.js");

var _mix = require("./utils/mix.js");

var _pipe = require("./utils/pipe.js");

var _pointFromVector = require("./utils/point-from-vector.js");

var _progress = require("./utils/progress.js");

var _radiansToDegrees = require("./utils/radians-to-degrees.js");

var _smoothFrame = require("./utils/smooth-frame.js");

var _smooth = require("./utils/smooth.js");

var _snap = require("./utils/snap.js");

var _toDecimal = require("./utils/to-decimal.js");

var _velocityPerFrame = require("./utils/velocity-per-frame.js");

var _velocityPerSecond = require("./utils/velocity-per-second.js");

var _wrap = require("./utils/wrap.js");

var _index2 = require("./easing/index.js");

var _cubicBezier = require("./easing/cubic-bezier.js");

var _steps = require("./easing/steps.js");

var _utils = require("./easing/utils.js");
},{"./animations/index.js":"node_modules/popmotion/dist/es/animations/index.js","./animations/inertia.js":"node_modules/popmotion/dist/es/animations/inertia.js","./animations/generators/decay.js":"node_modules/popmotion/dist/es/animations/generators/decay.js","./animations/generators/spring.js":"node_modules/popmotion/dist/es/animations/generators/spring.js","./animations/generators/keyframes.js":"node_modules/popmotion/dist/es/animations/generators/keyframes.js","./utils/angle.js":"node_modules/popmotion/dist/es/utils/angle.js","./utils/apply-offset.js":"node_modules/popmotion/dist/es/utils/apply-offset.js","./utils/attract.js":"node_modules/popmotion/dist/es/utils/attract.js","./utils/clamp.js":"node_modules/popmotion/dist/es/utils/clamp.js","./utils/degrees-to-radians.js":"node_modules/popmotion/dist/es/utils/degrees-to-radians.js","./utils/distance.js":"node_modules/popmotion/dist/es/utils/distance.js","./utils/interpolate.js":"node_modules/popmotion/dist/es/utils/interpolate.js","./utils/is-point-3d.js":"node_modules/popmotion/dist/es/utils/is-point-3d.js","./utils/is-point.js":"node_modules/popmotion/dist/es/utils/is-point.js","./utils/mix-color.js":"node_modules/popmotion/dist/es/utils/mix-color.js","./utils/mix-complex.js":"node_modules/popmotion/dist/es/utils/mix-complex.js","./utils/mix.js":"node_modules/popmotion/dist/es/utils/mix.js","./utils/pipe.js":"node_modules/popmotion/dist/es/utils/pipe.js","./utils/point-from-vector.js":"node_modules/popmotion/dist/es/utils/point-from-vector.js","./utils/progress.js":"node_modules/popmotion/dist/es/utils/progress.js","./utils/radians-to-degrees.js":"node_modules/popmotion/dist/es/utils/radians-to-degrees.js","./utils/smooth-frame.js":"node_modules/popmotion/dist/es/utils/smooth-frame.js","./utils/smooth.js":"node_modules/popmotion/dist/es/utils/smooth.js","./utils/snap.js":"node_modules/popmotion/dist/es/utils/snap.js","./utils/to-decimal.js":"node_modules/popmotion/dist/es/utils/to-decimal.js","./utils/velocity-per-frame.js":"node_modules/popmotion/dist/es/utils/velocity-per-frame.js","./utils/velocity-per-second.js":"node_modules/popmotion/dist/es/utils/velocity-per-second.js","./utils/wrap.js":"node_modules/popmotion/dist/es/utils/wrap.js","./easing/index.js":"node_modules/popmotion/dist/es/easing/index.js","./easing/cubic-bezier.js":"node_modules/popmotion/dist/es/easing/cubic-bezier.js","./easing/steps.js":"node_modules/popmotion/dist/es/easing/steps.js","./easing/utils.js":"node_modules/popmotion/dist/es/easing/utils.js"}],"animation.js":[function(require,module,exports) {
"use strict";

var _popmotion = require("popmotion");

var ball = document.querySelector(".box");
var divStyler = (0, _popmotion.styler)(ball);
var ballXY = (0, _popmotion.value)({
  x: 0,
  y: 0
}, divStyler.set);
(0, _popmotion.listen)(ball, "mousedown touchstart").start(function (e) {
  e.preventDefault();
  (0, _popmotion.pointer)(ballXY.get()).start(ballXY);
});
(0, _popmotion.listen)(document, "mouseup").start(function () {
  (0, _popmotion.spring)({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: {
      x: 0,
      y: 0
    },
    stiffness: 200
  }).start(ballXY);
});
},{"popmotion":"node_modules/popmotion/dist/es/index.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59172" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","animation.js"], null)
//# sourceMappingURL=/animation.7bfd2d21.js.map