import { useState, useReducer, useEffect, useMemo } from 'react';
import require$$0 from 'crypto';
import { linearAlgebraMath } from 'pj-math';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
  _classCheckPrivateStaticAccess(receiver, classConstructor);

  return method;
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classCheckPrivateStaticAccess(receiver, classConstructor) {
  if (receiver !== classConstructor) {
    throw new TypeError("Private static access of wrong provenance");
  }
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return fn;
}

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);

  privateMap.set(obj, value);
}

function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);

  privateSet.add(obj);
}

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = require$$0;

var rng$2 = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid$2(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

var bytesToUuid_1 = bytesToUuid$2;

var rng$1 = rng$2;
var bytesToUuid$1 = bytesToUuid_1;

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1$1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng$1();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid$1(b);
}

var v1_1 = v1$1;

var rng = rng$2;
var bytesToUuid = bytesToUuid_1;

function v4$1(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

var v4_1 = v4$1;

var v1 = v1_1;
var v4 = v4_1;

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

var uuid_1 = uuid;

var Component = /*#__PURE__*/_createClass(function Component() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : uuid_1.v4();
  var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  _classCallCheck(this, Component);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "active", void 0);

  this.id = id;
  this.active = active;
});

function generateNextID(i) {
  return [(i >> 0 & 0xFF) / 0xFF, (i >> 8 & 0xFF) / 0xFF, (i >> 16 & 0xFF) / 0xFF];
}

var PickComponent = /*#__PURE__*/function (_Component) {
  _inherits(PickComponent, _Component);

  var _super = _createSuper(PickComponent);

  function PickComponent(id, quantity) {
    var _this;

    _classCallCheck(this, PickComponent);

    _this = _super.call(this, id, PickComponent.constructor.name);

    _defineProperty(_assertThisInitialized(_this), "__pickID", [0, 0, 0]);

    _this.__pickID = generateNextID(quantity + 4);
    return _this;
  }

  _createClass(PickComponent, [{
    key: "pickID",
    get: function get() {
      return this.__pickID;
    },
    set: function set(_) {}
  }]);

  return PickComponent;
}(Component);

var COMPONENTS = {
  TRANSFORM: 'TransformComponent',
  CUBE_MAP: 'CubeMapComponent',
  COLLIDER: 'ColliderComponent',
  DIRECTIONAL_LIGHT: 'DirectionalLightComponent',
  POINT_LIGHT: 'PointLightComponent',
  PICK: 'PickComponent',
  SPOT_LIGHT: 'SpotLightComponent',
  FOLDER: 'FolderComponent',
  MATERIAL: 'MaterialComponent',
  MESH: 'MeshComponent',
  PHYSICS: 'PhysicsBodyComponent',
  SKYBOX: 'SkyboxComponent',
  TERRAIN: 'TerrainComponent',
  SKYLIGHT: 'SkylightComponent',
  SCRIPT: 'ScriptComponent',
  CAMERA: 'CameraComponent'
};

var ScriptComponent = /*#__PURE__*/function (_Component) {
  _inherits(ScriptComponent, _Component);

  var _super = _createSuper(ScriptComponent);

  function ScriptComponent(id) {
    var _this;

    _classCallCheck(this, ScriptComponent);

    _this = _super.call(this, id);

    _defineProperty(_assertThisInitialized(_this), "ready", false);

    _defineProperty(_assertThisInitialized(_this), "scripts", []);

    return _this;
  }

  return _createClass(ScriptComponent);
}(Component);

function useEngineEssentials(renderingTarget) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      meshes = _useState2[0],
      setMeshes = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      materials = _useState4[0],
      setMaterials = _useState4[1];

  var _useReducer = useReducer(entityReducer, []),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      entities = _useReducer2[0],
      dispatchEntities = _useReducer2[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      scripts = _useState6[0],
      setScripts = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      gpu = _useState8[0],
      setGpu = _useState8[1];

  useEffect(function () {
    if (renderingTarget) {
      var target = document.getElementById(renderingTarget);

      if (target) {
        var ctx = target.getContext('webgl2', {
          antialias: false,
          preserveDrawingBuffer: true,
          premultipliedAlpha: false
        });
        ctx.getExtension("EXT_color_buffer_float");
        ctx.getExtension('OES_texture_float');
        ctx.getExtension('OES_texture_float_linear');
        ctx.enable(ctx.BLEND);
        ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
        ctx.enable(ctx.CULL_FACE);
        ctx.cullFace(ctx.BACK);
        ctx.enable(ctx.DEPTH_TEST);
        ctx.depthFunc(ctx.LESS);
        ctx.frontFace(ctx.CCW);
        setGpu(ctx);
      }
    }
  }, [renderingTarget]);
  return {
    gpu: gpu,
    entities: entities,
    dispatchEntities: dispatchEntities,
    meshes: meshes,
    setMeshes: setMeshes,
    materials: materials,
    setMaterials: setMaterials,
    scripts: scripts,
    setScripts: setScripts
  };
}
var ENTITY_ACTIONS = {
  ADD: 0,
  UPDATE: 2,
  UPDATE_COMPONENT: 3,
  REMOVE: 4,
  DISPATCH_BLOCK: 6,
  PUSH_BLOCK: 7,
  REMOVE_BLOCK: 8,
  CLEAR: 9,
  LINK_MULTIPLE: 10
};

function deleteEntity(entity, entities) {
  var copy = _toConsumableArray(entities).filter(function (e) {
    return e.id !== entity.id;
  });

  for (var i = 0; i < copy.length; i++) {
    if (copy[i].linkedTo === entity.id) copy = deleteEntity(copy[i], copy);
  }

  return copy;
}

function entityReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  var stateCopy = _toConsumableArray(state);

  var entityIndex = state.findIndex(function (e) {
    return e.id === (payload === null || payload === void 0 ? void 0 : payload.entityID);
  });

  if (entityIndex > -1) {
    var entity = stateCopy[entityIndex];

    switch (type) {
      // ENTITY
      case ENTITY_ACTIONS.UPDATE:
        {
          var key = payload.key,
              data = payload.data;
          if (key === 'name') entity.name = data;else if (key === 'active') entity.active = data;else if (key === 'linkedTo') entity.linkedTo = data;
          stateCopy[entityIndex] = entity;
          return stateCopy;
        }

      case ENTITY_ACTIONS.REMOVE:
        {
          return deleteEntity(stateCopy[entityIndex], stateCopy);
        }

      case ENTITY_ACTIONS.UPDATE_COMPONENT:
        {
          var _key = payload.key,
              _data = payload.data;
          entity.components[_key] = _data;
          stateCopy[entityIndex] = entity;
          return stateCopy;
        }

      default:
        return stateCopy;
    }
  } else switch (type) {
    case ENTITY_ACTIONS.LINK_MULTIPLE:
      return state.map(function (s) {
        if (payload.indexOf(s.id) > 0) {
          s.linkedTo = payload[0];
        }

        return s;
      });

    case ENTITY_ACTIONS.CLEAR:
      return [];

    case ENTITY_ACTIONS.ADD:
      {
        var _entity = payload;
        _entity.components[COMPONENTS.PICK] = new PickComponent(undefined, state.length + 1);
        _entity.components[COMPONENTS.SCRIPT] = new ScriptComponent();
        return [].concat(_toConsumableArray(state), [_entity]);
      }

    case ENTITY_ACTIONS.DISPATCH_BLOCK:
      {
        var block = payload;
        if (Array.isArray(block)) return block.map(function (entity, i) {
          entity.components[COMPONENTS.PICK] = new PickComponent(undefined, i + 1);
          if (!entity.components[COMPONENTS.SCRIPT]) entity.components[COMPONENTS.SCRIPT] = new ScriptComponent();
          return entity;
        });else return stateCopy;
      }

    case ENTITY_ACTIONS.REMOVE_BLOCK:
      {
        var _block = payload;

        if (Array.isArray(_block)) {
          return stateCopy.filter(function (e) {
            return !_block.includes(e.id) && !_block.includes(e.linkedTo);
          });
        } else return stateCopy;
      }

    case ENTITY_ACTIONS.PUSH_BLOCK:
      {
        var _block2 = payload;
        if (Array.isArray(_block2)) return [].concat(_toConsumableArray(stateCopy), _toConsumableArray(_block2.map(function (e, i) {
          var entity = e;
          entity.components[COMPONENTS.PICK] = new PickComponent(undefined, i + state.length + 1);
          if (!entity.components[COMPONENTS.SCRIPT]) entity.components[COMPONENTS.SCRIPT] = new ScriptComponent();
          return entity;
        })));else return stateCopy;
      }

    default:
      return stateCopy;
  }
}

var SYSTEMS = {
  SCRIPT: '0',
  PERF: '1',
  PHYSICS: '2',
  TRANSFORMATION: '3',
  SHADOWS: '4',
  PICK: '5',
  MESH: '6',
  FORWARD: '7',
  AO: '8',
  CULLING: '9',
  CUBE_MAP: '10',
  CAMERA_CUBE: '11'
};

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals$9(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

var common = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EPSILON: EPSILON,
  get ARRAY_TYPE () { return ARRAY_TYPE; },
  RANDOM: RANDOM,
  setMatrixArrayType: setMatrixArrayType,
  toRadian: toRadian,
  equals: equals$9
});

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create$8() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone$8(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy$8(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity$5(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues$8(m00, m01, m10, m11) {
  var out = new ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set$8(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose$2(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert$6(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint$2(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant$3(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply$8(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate$4(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale$8(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation$4(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling$3(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str$8(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob$3(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add$8(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract$6(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals$8(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals$8(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar$3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd$3(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul$8 = multiply$8;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub$6 = subtract$6;

var mat2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$8,
  clone: clone$8,
  copy: copy$8,
  identity: identity$5,
  fromValues: fromValues$8,
  set: set$8,
  transpose: transpose$2,
  invert: invert$6,
  adjoint: adjoint$2,
  determinant: determinant$3,
  multiply: multiply$8,
  rotate: rotate$4,
  scale: scale$8,
  fromRotation: fromRotation$4,
  fromScaling: fromScaling$3,
  str: str$8,
  frob: frob$3,
  LDU: LDU,
  add: add$8,
  subtract: subtract$6,
  exactEquals: exactEquals$8,
  equals: equals$8,
  multiplyScalar: multiplyScalar$3,
  multiplyScalarAndAdd: multiplyScalarAndAdd$3,
  mul: mul$8,
  sub: sub$6
});

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create$7() {
  var out = new ARRAY_TYPE(6);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone$7(a) {
  var out = new ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy$7(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity$4(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues$7(a, b, c, d, tx, ty) {
  var out = new ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set$7(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert$5(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant$2(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply$7(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate$3(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale$7(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate$3(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation$3(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling$2(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation$3(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str$7(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob$2(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add$7(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract$5(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar$2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd$2(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals$7(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals$7(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul$7 = multiply$7;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub$5 = subtract$5;

var mat2d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$7,
  clone: clone$7,
  copy: copy$7,
  identity: identity$4,
  fromValues: fromValues$7,
  set: set$7,
  invert: invert$5,
  determinant: determinant$2,
  multiply: multiply$7,
  rotate: rotate$3,
  scale: scale$7,
  translate: translate$3,
  fromRotation: fromRotation$3,
  fromScaling: fromScaling$2,
  fromTranslation: fromTranslation$3,
  str: str$7,
  frob: frob$2,
  add: add$7,
  subtract: subtract$5,
  multiplyScalar: multiplyScalar$2,
  multiplyScalarAndAdd: multiplyScalarAndAdd$2,
  exactEquals: exactEquals$7,
  equals: equals$7,
  mul: mul$7,
  sub: sub$5
});

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create$6() {
  var out = new ARRAY_TYPE(9);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4$1(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone$6(a) {
  var out = new ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy$6(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues$6(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set$6(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity$3(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose$1(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert$4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint$1(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant$1(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply$6(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate$2(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate$2(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale$6(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation$2(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation$2(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling$1(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat$1(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str$6(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob$1(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add$6(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract$4(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar$1(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd$1(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals$6(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals$6(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul$6 = multiply$6;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub$4 = subtract$4;

var mat3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$6,
  fromMat4: fromMat4$1,
  clone: clone$6,
  copy: copy$6,
  fromValues: fromValues$6,
  set: set$6,
  identity: identity$3,
  transpose: transpose$1,
  invert: invert$4,
  adjoint: adjoint$1,
  determinant: determinant$1,
  multiply: multiply$6,
  translate: translate$2,
  rotate: rotate$2,
  scale: scale$6,
  fromTranslation: fromTranslation$2,
  fromRotation: fromRotation$2,
  fromScaling: fromScaling$1,
  fromMat2d: fromMat2d,
  fromQuat: fromQuat$1,
  normalFromMat4: normalFromMat4,
  projection: projection,
  str: str$6,
  frob: frob$1,
  add: add$6,
  subtract: subtract$4,
  multiplyScalar: multiplyScalar$1,
  multiplyScalarAndAdd: multiplyScalarAndAdd$1,
  exactEquals: exactEquals$6,
  equals: equals$6,
  mul: mul$6,
  sub: sub$4
});

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create$5() {
  var out = new ARRAY_TYPE(16);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone$5(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy$5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues$5(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set$5(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity$2(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert$3(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply$5(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate$1(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale$5(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate$1(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX$3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY$3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ$3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation$1(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation$1(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation$1(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation$1(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation$1(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation$1(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt$1(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity$2(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str$5(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add$5(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract$3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals$5(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals$5(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul$5 = multiply$5;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub$3 = subtract$3;

var mat4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$5,
  clone: clone$5,
  copy: copy$5,
  fromValues: fromValues$5,
  set: set$5,
  identity: identity$2,
  transpose: transpose,
  invert: invert$3,
  adjoint: adjoint,
  determinant: determinant,
  multiply: multiply$5,
  translate: translate$1,
  scale: scale$5,
  rotate: rotate$1,
  rotateX: rotateX$3,
  rotateY: rotateY$3,
  rotateZ: rotateZ$3,
  fromTranslation: fromTranslation$1,
  fromScaling: fromScaling,
  fromRotation: fromRotation$1,
  fromXRotation: fromXRotation,
  fromYRotation: fromYRotation,
  fromZRotation: fromZRotation,
  fromRotationTranslation: fromRotationTranslation$1,
  fromQuat2: fromQuat2,
  getTranslation: getTranslation$1,
  getScaling: getScaling,
  getRotation: getRotation$1,
  fromRotationTranslationScale: fromRotationTranslationScale,
  fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
  fromQuat: fromQuat,
  frustum: frustum,
  perspectiveNO: perspectiveNO,
  perspective: perspective,
  perspectiveZO: perspectiveZO,
  perspectiveFromFieldOfView: perspectiveFromFieldOfView,
  orthoNO: orthoNO,
  ortho: ortho,
  orthoZO: orthoZO,
  lookAt: lookAt$1,
  targetTo: targetTo,
  str: str$5,
  frob: frob,
  add: add$5,
  subtract: subtract$3,
  multiplyScalar: multiplyScalar,
  multiplyScalarAndAdd: multiplyScalarAndAdd,
  exactEquals: exactEquals$5,
  equals: equals$5,
  mul: mul$5,
  sub: sub$3
});

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create$4() {
  var out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone$4(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length$4(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues$4(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy$4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set$4(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add$4(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract$2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply$4(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide$2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil$2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor$2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min$2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max$2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round$2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale$4(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd$2(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance$2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance$2(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength$4(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate$2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse$2(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize$4(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot$4(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross$2(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp$4(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random$3(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  var z = RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4$2(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3$1(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat$1(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX$2(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY$2(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ$2(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle$1(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot$4(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero$2(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str$4(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals$4(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals$4(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub$2 = subtract$2;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul$4 = multiply$4;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div$2 = divide$2;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist$2 = distance$2;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist$2 = squaredDistance$2;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len$4 = length$4;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen$4 = squaredLength$4;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$2 = function () {
  var vec = create$4();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

var vec3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$4,
  clone: clone$4,
  length: length$4,
  fromValues: fromValues$4,
  copy: copy$4,
  set: set$4,
  add: add$4,
  subtract: subtract$2,
  multiply: multiply$4,
  divide: divide$2,
  ceil: ceil$2,
  floor: floor$2,
  min: min$2,
  max: max$2,
  round: round$2,
  scale: scale$4,
  scaleAndAdd: scaleAndAdd$2,
  distance: distance$2,
  squaredDistance: squaredDistance$2,
  squaredLength: squaredLength$4,
  negate: negate$2,
  inverse: inverse$2,
  normalize: normalize$4,
  dot: dot$4,
  cross: cross$2,
  lerp: lerp$4,
  hermite: hermite,
  bezier: bezier,
  random: random$3,
  transformMat4: transformMat4$2,
  transformMat3: transformMat3$1,
  transformQuat: transformQuat$1,
  rotateX: rotateX$2,
  rotateY: rotateY$2,
  rotateZ: rotateZ$2,
  angle: angle$1,
  zero: zero$2,
  str: str$4,
  exactEquals: exactEquals$4,
  equals: equals$4,
  sub: sub$2,
  mul: mul$4,
  div: div$2,
  dist: dist$2,
  sqrDist: sqrDist$2,
  len: len$4,
  sqrLen: sqrLen$4,
  forEach: forEach$2
});

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create$3() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone$3(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues$3(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy$3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set$3(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add$3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract$1(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply$3(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide$1(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil$1(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor$1(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min$1(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max$1(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round$1(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale$3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd$1(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance$1(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance$1(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length$3(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength$3(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate$1(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse$1(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize$3(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot$3(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross$1(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp$3(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random$2(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4$1(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero$1(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str$3(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals$3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals$3(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub$1 = subtract$1;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul$3 = multiply$3;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div$1 = divide$1;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist$1 = distance$1;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist$1 = squaredDistance$1;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len$3 = length$3;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen$3 = squaredLength$3;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$1 = function () {
  var vec = create$3();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

var vec4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$3,
  clone: clone$3,
  fromValues: fromValues$3,
  copy: copy$3,
  set: set$3,
  add: add$3,
  subtract: subtract$1,
  multiply: multiply$3,
  divide: divide$1,
  ceil: ceil$1,
  floor: floor$1,
  min: min$1,
  max: max$1,
  round: round$1,
  scale: scale$3,
  scaleAndAdd: scaleAndAdd$1,
  distance: distance$1,
  squaredDistance: squaredDistance$1,
  length: length$3,
  squaredLength: squaredLength$3,
  negate: negate$1,
  inverse: inverse$1,
  normalize: normalize$3,
  dot: dot$3,
  cross: cross$1,
  lerp: lerp$3,
  random: random$2,
  transformMat4: transformMat4$1,
  transformQuat: transformQuat,
  zero: zero$1,
  str: str$3,
  exactEquals: exactEquals$3,
  equals: equals$3,
  sub: sub$1,
  mul: mul$3,
  div: div$1,
  dist: dist$1,
  sqrDist: sqrDist$1,
  len: len$3,
  sqrLen: sqrLen$3,
  forEach: forEach$1
});

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create$2() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity$1(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot$2(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply$2(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX$1(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY$1(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ$1(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale$2(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random$1(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert$2(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate$1(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str$2(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone$2 = clone$3;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues$2 = fromValues$3;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy$2 = copy$3;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set$2 = set$3;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add$2 = add$3;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul$2 = multiply$2;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale$2 = scale$3;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot$2 = dot$3;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp$2 = lerp$3;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length$2 = length$3;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len$2 = length$2;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength$2 = squaredLength$3;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen$2 = squaredLength$2;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize$2 = normalize$3;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals$2 = exactEquals$3;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals$2 = equals$3;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = create$4();
  var xUnitVec3 = fromValues$4(1, 0, 0);
  var yUnitVec3 = fromValues$4(0, 1, 0);
  return function (out, a, b) {
    var dot = dot$4(a, b);

    if (dot < -0.999999) {
      cross$2(tmpvec3, xUnitVec3, a);
      if (len$4(tmpvec3) < 0.000001) cross$2(tmpvec3, yUnitVec3, a);
      normalize$4(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross$2(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize$2(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create$2();
  var temp2 = create$2();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = create$6();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize$2(out, fromMat3(out, matr));
  };
}();

var quat = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$2,
  identity: identity$1,
  setAxisAngle: setAxisAngle,
  getAxisAngle: getAxisAngle,
  getAngle: getAngle,
  multiply: multiply$2,
  rotateX: rotateX$1,
  rotateY: rotateY$1,
  rotateZ: rotateZ$1,
  calculateW: calculateW,
  exp: exp,
  ln: ln,
  pow: pow,
  slerp: slerp,
  random: random$1,
  invert: invert$2,
  conjugate: conjugate$1,
  fromMat3: fromMat3,
  fromEuler: fromEuler,
  str: str$2,
  clone: clone$2,
  fromValues: fromValues$2,
  copy: copy$2,
  set: set$2,
  add: add$2,
  mul: mul$2,
  scale: scale$2,
  dot: dot$2,
  lerp: lerp$2,
  length: length$2,
  len: len$2,
  squaredLength: squaredLength$2,
  sqrLen: sqrLen$2,
  normalize: normalize$2,
  exactEquals: exactEquals$2,
  equals: equals$2,
  rotationTo: rotationTo,
  sqlerp: sqlerp,
  setAxes: setAxes
});

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create$1() {
  var dq = new ARRAY_TYPE(8);

  if (ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone$1(a) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues$1(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = create$2();
  getRotation$1(outer, a);
  var t = new ARRAY_TYPE(3);
  getTranslation$1(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy$1(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set$1(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = copy$2;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = copy$2;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  rotateX$1(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  rotateY$1(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  rotateZ$1(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < EPSILON) {
    return copy$1(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add$1(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply$1(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul$1 = multiply$1;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale$1(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot$1 = dot$2;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp$1(out, a, b, t) {
  var mt = 1 - t;
  if (dot$1(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert$1(out, a) {
  var sqlen = squaredLength$1(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length$1 = length$2;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len$1 = length$1;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength$1 = squaredLength$2;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen$1 = squaredLength$1;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize$1(out, a) {
  var magnitude = squaredLength$1(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str$1(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals$1(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals$1(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

var quat2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create$1,
  clone: clone$1,
  fromValues: fromValues$1,
  fromRotationTranslationValues: fromRotationTranslationValues,
  fromRotationTranslation: fromRotationTranslation,
  fromTranslation: fromTranslation,
  fromRotation: fromRotation,
  fromMat4: fromMat4,
  copy: copy$1,
  identity: identity,
  set: set$1,
  getReal: getReal,
  getDual: getDual,
  setReal: setReal,
  setDual: setDual,
  getTranslation: getTranslation,
  translate: translate,
  rotateX: rotateX,
  rotateY: rotateY,
  rotateZ: rotateZ,
  rotateByQuatAppend: rotateByQuatAppend,
  rotateByQuatPrepend: rotateByQuatPrepend,
  rotateAroundAxis: rotateAroundAxis,
  add: add$1,
  multiply: multiply$1,
  mul: mul$1,
  scale: scale$1,
  dot: dot$1,
  lerp: lerp$1,
  invert: invert$1,
  conjugate: conjugate,
  length: length$1,
  len: len$1,
  squaredLength: squaredLength$1,
  sqrLen: sqrLen$1,
  normalize: normalize$1,
  str: str$1,
  exactEquals: exactEquals$1,
  equals: equals$1
});

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new ARRAY_TYPE(2);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

var vec2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  create: create,
  clone: clone,
  fromValues: fromValues,
  copy: copy,
  set: set,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  ceil: ceil,
  floor: floor,
  min: min,
  max: max,
  round: round,
  scale: scale,
  scaleAndAdd: scaleAndAdd,
  distance: distance,
  squaredDistance: squaredDistance,
  length: length,
  squaredLength: squaredLength,
  negate: negate,
  inverse: inverse,
  normalize: normalize,
  dot: dot,
  cross: cross,
  lerp: lerp,
  random: random,
  transformMat2: transformMat2,
  transformMat2d: transformMat2d,
  transformMat3: transformMat3,
  transformMat4: transformMat4,
  rotate: rotate,
  angle: angle,
  zero: zero,
  str: str,
  exactEquals: exactEquals,
  equals: equals,
  len: len,
  sub: sub,
  mul: mul,
  div: div,
  dist: dist,
  sqrDist: sqrDist,
  sqrLen: sqrLen,
  forEach: forEach
});

var glMatrix = /*#__PURE__*/Object.freeze({
  __proto__: null,
  glMatrix: common,
  mat2: mat2,
  mat2d: mat2d,
  mat3: mat3,
  mat4: mat4,
  quat: quat,
  quat2: quat2,
  vec2: vec2,
  vec3: vec3,
  vec4: vec4
});

function isArrayBufferV(value) {
  return value && value.buffer instanceof ArrayBuffer && value.byteLength !== undefined;
}

function createVAO(gpu) {
  var vao = gpu.createVertexArray();
  gpu.bindVertexArray(vao);
  return vao;
}
function createVBO(gpu, type, data) {
  var renderingType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gpu.STATIC_DRAW;
  if (data.length === 0) return null;

  if (!isArrayBufferV(data)) {
    return null;
  }

  var buffer = gpu.createBuffer();
  gpu.bindBuffer(type, buffer);
  gpu.bufferData(type, data, renderingType);
  return buffer;
}
function createRBO(gpu, width, height) {
  var typeStorage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gpu.DEPTH24_STENCIL8;
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gpu.DEPTH_STENCIL_ATTACHMENT;
  var rbo = gpu.createRenderbuffer();
  gpu.bindRenderbuffer(gpu.RENDERBUFFER, rbo);
  gpu.renderbufferStorage(gpu.RENDERBUFFER, typeStorage, width, height);
  gpu.framebufferRenderbuffer(gpu.FRAMEBUFFER, type, gpu.RENDERBUFFER, rbo);
  if (gpu.checkFramebufferStatus(gpu.FRAMEBUFFER) !== gpu.FRAMEBUFFER_COMPLETE) return null;
  return rbo;
}
function createTexture(gpu, width, height, internalFormat, border, format, type, data, minFilter, magFilter, wrapS, wrapT, yFlip) {
  var autoUnbind = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : true;
  var texture = gpu.createTexture();
  gpu.bindTexture(gpu.TEXTURE_2D, texture);
  gpu.texImage2D(gpu.TEXTURE_2D, 0, internalFormat, width, height, border, format, type, data);
  gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_MAG_FILTER, magFilter);
  gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_MIN_FILTER, minFilter);
  if (wrapS !== undefined) gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_WRAP_S, wrapS);
  if (wrapT !== undefined) gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_WRAP_T, wrapT);
  if (yFlip === true) gpu.pixelStorei(gpu.UNPACK_FLIP_Y_WEBGL, false);
  if (autoUnbind) gpu.bindTexture(gpu.TEXTURE_2D, null);
  return texture;
}
function bindTexture(index, texture, location, gpu) {
  gpu.activeTexture(gpu.TEXTURE0 + index);
  gpu.bindTexture(gpu.TEXTURE_2D, texture);
  gpu.uniform1i(location, index);
}
function lookAt(yaw, pitch, position) {
  var cosPitch = Math.cos(pitch);
  var sinPitch = Math.sin(pitch);
  var cosYaw = Math.cos(yaw);
  var sinYaw = Math.sin(yaw);
  var xAxis = [cosYaw, 0, -sinYaw],
      yAxis = [sinYaw * sinPitch, cosPitch, cosYaw * sinPitch],
      zAxis = [sinYaw * cosPitch, -sinPitch, cosPitch * cosYaw];
  var p1, p2, p3;
  p1 = dot$4(position, xAxis);
  p2 = dot$4(position, yAxis);
  p3 = dot$4(position, zAxis);
  return [xAxis[0], yAxis[0], zAxis[0], 0, xAxis[1], yAxis[1], zAxis[1], 0, xAxis[2], yAxis[2], zAxis[2], 0, -p1, -p2, -p3, 1];
}
function copyTexture(target, source, gpu) {
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gpu.DEPTH_BUFFER_BIT;
  gpu.bindFramebuffer(gpu.READ_FRAMEBUFFER, source.FBO);
  gpu.bindFramebuffer(gpu.DRAW_FRAMEBUFFER, target.FBO);
  gpu.blitFramebuffer(0, 0, source.width, source.height, 0, 0, target.width, target.height, type, gpu.NEAREST);
  gpu.bindFramebuffer(gpu.FRAMEBUFFER, target.FBO);
}

var VBO = /*#__PURE__*/function () {
  function VBO(gpu, index, data, type, size, dataType) {
    var normalized = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var renderingType = arguments.length > 7 ? arguments[7] : undefined;
    var stride = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    _classCallCheck(this, VBO);

    this.gpu = gpu;
    this.id = createVBO(this.gpu, type, data, renderingType);
    this.gpu.vertexAttribPointer(index, size, dataType, normalized, stride, 0);
    this.gpu.bindBuffer(type, null);
    this.stride = stride;
    this.index = index;
    this.type = type;
    this.size = size;
    this.normalized = normalized;
    this.length = data.length;
  }

  _createClass(VBO, [{
    key: "enable",
    value: function enable() {
      this.gpu.enableVertexAttribArray(this.index);
      this.gpu.bindBuffer(this.type, this.id);
      this.gpu.vertexAttribPointer(this.index, this.size, this.type, this.normalized, this.stride, 0);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.gpu.disableVertexAttribArray(this.index);
      this.gpu.bindBuffer(this.type, null);
    }
  }]);

  return VBO;
}();

var MeshInstance = /*#__PURE__*/function () {
  function MeshInstance(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? uuid_1.v4() : _ref$id,
        gpu = _ref.gpu,
        vertices = _ref.vertices,
        indices = _ref.indices,
        normals = _ref.normals,
        uvs = _ref.uvs,
        tangents = _ref.tangents,
        maxBoundingBox = _ref.maxBoundingBox,
        minBoundingBox = _ref.minBoundingBox;
        _ref.wireframeBuffer;
        var material = _ref.material;

    _classCallCheck(this, MeshInstance);

    _defineProperty(this, "verticesQuantity", 0);

    _defineProperty(this, "trianglesQuantity", 0);

    _defineProperty(this, "maxBoundingBox", []);

    _defineProperty(this, "minBoundingBox", []);

    _defineProperty(this, "VAO", void 0);

    _defineProperty(this, "vertexVBO", void 0);

    _defineProperty(this, "indexVBO", void 0);

    _defineProperty(this, "normalVBO", void 0);

    _defineProperty(this, "uvVBO", void 0);

    _defineProperty(this, "tangentVBO", void 0);

    this.id = id;
    this.gpu = gpu;
    this.material = material;
    this.maxBoundingBox = maxBoundingBox;
    this.minBoundingBox = minBoundingBox;
    this.trianglesQuantity = indices.length / 3;
    this.verticesQuantity = indices.length;
    this.VAO = createVAO(gpu);
    this.indexVBO = createVBO(gpu, gpu.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices));
    this.vertexVBO = new VBO(gpu, 1, new Float32Array(vertices), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    if (normals && normals.length > 0) this.normalVBO = new VBO(gpu, 2, new Float32Array(normals), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    if (uvs && uvs.length > 0) this.uvVBO = new VBO(gpu, 3, new Float32Array(uvs), gpu.ARRAY_BUFFER, 2, gpu.FLOAT);
    if (tangents && tangents.length > 0) this.tangentVBO = new VBO(gpu, 4, new Float32Array(tangents), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    gpu.bindVertexArray(null);
    gpu.bindBuffer(gpu.ELEMENT_ARRAY_BUFFER, null);
  }

  _createClass(MeshInstance, [{
    key: "use",
    value: function use() {
      this.gpu.bindVertexArray(this.VAO);
      this.gpu.bindBuffer(this.gpu.ELEMENT_ARRAY_BUFFER, this.indexVBO);
      this.vertexVBO.enable();
      if (this.normalVBO) this.normalVBO.enable();
      if (this.uvVBO) this.uvVBO.enable();
      if (this.tangentVBO) this.tangentVBO.enable();
    }
  }, {
    key: "finish",
    value: function finish() {
      this.gpu.bindVertexArray(null);
      this.gpu.bindBuffer(this.gpu.ELEMENT_ARRAY_BUFFER, null);
      this.vertexVBO.disable();
      if (this.uvVBO) this.uvVBO.disable();
      if (this.normalVBO) this.normalVBO.disable();
      if (this.tangentVBO) this.tangentVBO.disable();
    }
  }]);

  return MeshInstance;
}();

var WebWorker = /*#__PURE__*/function () {
  function WebWorker() {
    _classCallCheck(this, WebWorker);

    _defineProperty(this, "_worker", void 0);
  }

  _createClass(WebWorker, [{
    key: "_build",
    value: function _build(m) {
      this._worker = new Worker(URL.createObjectURL(new Blob(["(".concat(m, ")()")])));
    }
  }, {
    key: "createExecution",
    value: function () {
      var _createExecution = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data, execute) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  _this._build(execute);

                  _this._worker.addEventListener('message', function (e) {
                    _this._worker.terminate();

                    resolve(e.data);
                  });

                  _this._worker.postMessage(data);
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createExecution(_x, _x2) {
        return _createExecution.apply(this, arguments);
      }

      return createExecution;
    }()
  }]);

  return WebWorker;
}();

function blendWithColor() {
  var COLOR_BLEND_OPERATIONS = {
    ADD: 0,
    MULTIPLY: 1,
    POWER: 2,
    LERP: 3
  };
  self.addEventListener('message', function (event) {
    new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
        var _event$data, src, color, operation, split, _split$map, _split$map2, r, g, b, res, blob, imageToLoad;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _event$data = event.data, src = _event$data.src, color = _event$data.color, operation = _event$data.operation;
                split = color.match(/[\d.]+/g);
                _split$map = split.map(function (v) {
                  return parseFloat(v);
                }), _split$map2 = _slicedToArray(_split$map, 3), r = _split$map2[0], g = _split$map2[1], b = _split$map2[2];
                _context.next = 5;
                return fetch(src);

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.blob();

              case 8:
                blob = _context.sent;
                _context.next = 11;
                return createImageBitmap(blob);

              case 11:
                imageToLoad = _context.sent;
                _context.t0 = self;
                _context.next = 15;
                return new Promise(function (resolve) {
                  var c = new OffscreenCanvas(imageToLoad.width, imageToLoad.height);
                  var ctx = c.getContext("2d");
                  ctx.drawImage(imageToLoad, 0, 0);
                  var imgData = ctx.getImageData(0, 0, imageToLoad.width, imageToLoad.height);
                  var data = imgData.data;
                  var newImage = new Array(data.length);

                  for (var i = 0; i < data.length; i += 4) {
                    switch (operation) {
                      case COLOR_BLEND_OPERATIONS.POWER:
                        newImage[i] = Math.pow(data[i], r);
                        newImage[i + 1] = Math.pow(data[i + 1], g);
                        newImage[i + 2] = Math.pow(data[i + 2], b);
                        newImage[i + 3] = data[i + 3];
                        break;

                      case COLOR_BLEND_OPERATIONS.ADD:
                        newImage[i] = data[i] + r;
                        newImage[i + 1] = data[i + 1] + g;
                        newImage[i + 2] = data[i + 2] + b;
                        newImage[i + 3] = data[i + 3];
                        break;

                      default:
                        newImage[i] = data[i] * r;
                        newImage[i + 1] = data[i + 1] * g;
                        newImage[i + 2] = data[i + 2] * b;
                        newImage[i + 3] = data[i + 3];
                        break;
                    }
                  }

                  imgData.data.set(newImage);
                  ctx.putImageData(imgData, 0, 0);
                  c.convertToBlob({
                    type: "image/png",
                    quality: 1
                  }).then(function (blob) {
                    var reader = new FileReader();

                    reader.onloadend = function () {
                      return resolve(reader.result);
                    };

                    reader.readAsDataURL(blob);
                  });
                });

              case 15:
                _context.t1 = _context.sent;

                _context.t0.postMessage.call(_context.t0, _context.t1);

                resolve();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"]();
  });
}
function colorToImage() {
  self.addEventListener('message', function (event) {
    var _event$data2 = event.data,
        color = _event$data2.color,
        resolution = _event$data2.resolution;
    var c = new OffscreenCanvas(resolution, resolution);
    var ctx = c.getContext("2d");
    ctx.fillStyle = typeof color === 'string' ? color : "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", ").concat(color[3], ")");
    ctx.fillRect(0, 0, resolution, resolution);
    c.convertToBlob({
      type: "image/png",
      quality: .1
    }).then(function (blob) {
      var reader = new FileReader();

      reader.onloadend = function () {
        return self.postMessage(reader.result);
      };

      reader.readAsDataURL(blob);
    });
  });
}
function linearInterpolate() {
  self.addEventListener('message', function (event) {
    new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve) {
        var _event$data3, img, img0, factor, getBitmap, image1, image2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _event$data3 = event.data, img = _event$data3.img, img0 = _event$data3.img0, factor = _event$data3.factor;

                getBitmap = /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(src) {
                    var res, blob;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return fetch(src);

                          case 2:
                            res = _context2.sent;
                            _context2.next = 5;
                            return res.blob();

                          case 5:
                            blob = _context2.sent;
                            _context2.next = 8;
                            return createImageBitmap(blob);

                          case 8:
                            return _context2.abrupt("return", _context2.sent);

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function getBitmap(_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }();

                _context3.next = 4;
                return getBitmap(img);

              case 4:
                image1 = _context3.sent;
                _context3.next = 7;
                return getBitmap(img0);

              case 7:
                image2 = _context3.sent;
                _context3.t0 = self;
                _context3.next = 11;
                return new Promise(function (resolve) {
                  var canvas1 = new OffscreenCanvas(image1.width, image1.height),
                      ctx1 = canvas1.getContext("2d");
                  var canvas2 = new OffscreenCanvas(image2.width, image2.height),
                      ctx2 = canvas2.getContext("2d");
                  ctx1.drawImage(image1, 0, 0);
                  ctx2.drawImage(image2, 0, 0);
                  var data1 = ctx1.getImageData(0, 0, image1.width, image1.height);
                  var data2 = ctx2.getImageData(0, 0, image2.width, image2.height);
                  var ddata1 = data1.data;
                  var ddata2 = data2.data;
                  var newImage = new Uint8Array(ddata1.length);

                  for (var i = 0; i < ddata1.length; i += 4) {
                    newImage[i] = ddata1[i] * (1 - factor) + ddata2[i] * factor;
                    newImage[i + 1] = ddata1[i + 1] * (1 - factor) + ddata2[i + 1] * factor;
                    newImage[i + 2] = ddata1[i + 2] * (1 - factor) + ddata2[i + 2] * factor;
                    newImage[i + 3] = ddata1[i + 3] * (1 - factor) + ddata2[i + 3] * factor;
                  }

                  ddata1.set(newImage);
                  ctx1.putImageData(data1, 0, 0);
                  canvas1.convertToBlob({
                    type: "image/png",
                    quality: 1
                  }).then(function (blob) {
                    var reader = new FileReader();

                    reader.onloadend = function () {
                      return resolve(reader.result);
                    };

                    reader.readAsDataURL(blob);
                  });
                });

              case 11:
                _context3.t1 = _context3.sent;

                _context3.t0.postMessage.call(_context3.t0, _context3.t1);

                resolve();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"]();
  });
}
function heightBasedLinearInterpolate() {
  self.addEventListener('message', function (event) {
    new Promise( /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
        var _event$data4, img, img0, heightImg, f, getBitmap, image1, image2, heightMap;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _event$data4 = event.data, img = _event$data4.img, img0 = _event$data4.img0, heightImg = _event$data4.heightImg, f = _event$data4.f;

                getBitmap = /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(src) {
                    var res, blob;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return fetch(src);

                          case 2:
                            res = _context4.sent;
                            _context4.next = 5;
                            return res.blob();

                          case 5:
                            blob = _context4.sent;
                            _context4.next = 8;
                            return createImageBitmap(blob);

                          case 8:
                            return _context4.abrupt("return", _context4.sent);

                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function getBitmap(_x5) {
                    return _ref5.apply(this, arguments);
                  };
                }();

                _context5.next = 4;
                return getBitmap(img);

              case 4:
                image1 = _context5.sent;
                _context5.next = 7;
                return getBitmap(img0);

              case 7:
                image2 = _context5.sent;
                _context5.next = 10;
                return getBitmap(heightImg);

              case 10:
                heightMap = _context5.sent;
                _context5.t0 = self;
                _context5.next = 14;
                return new Promise(function (resolve) {
                  var canvas1 = new OffscreenCanvas(image1.width, image1.height),
                      ctx1 = canvas1.getContext("2d");
                  var canvas2 = new OffscreenCanvas(image2.width, image2.height),
                      ctx2 = canvas2.getContext("2d");
                  var canvasHeight = new OffscreenCanvas(heightMap.width, heightMap.height),
                      ctxHeight = canvasHeight.getContext("2d");
                  ctx1.drawImage(image1, 0, 0);
                  ctx2.drawImage(image2, 0, 0);
                  var data1 = ctx1.getImageData(0, 0, image1.width, image1.height);
                  var data2 = ctx2.getImageData(0, 0, image2.width, image2.height);
                  var heightMapData = ctxHeight.getImageData(0, 0, heightMap.width, heightMap.height);
                  var ddata1 = data1.data;
                  var ddata2 = data2.data;
                  var height = heightMapData.data;
                  var factor = f * 255;
                  var newImage = new Uint8Array(ddata1.length);

                  for (var i = 0; i < ddata1.length; i += 4) {
                    if (factor <= height[i]) {
                      newImage[i] = ddata1[i];
                      newImage[i + 1] = ddata1[i + 1];
                      newImage[i + 2] = ddata1[i + 2];
                      newImage[i + 3] = ddata1[i + 3];
                    } else {
                      newImage[i] = ddata2[i];
                      newImage[i + 1] = ddata2[i + 1];
                      newImage[i + 2] = ddata2[i + 2];
                      newImage[i + 3] = ddata2[i + 3];
                    }
                  }

                  ddata1.set(newImage);
                  ctx1.putImageData(data1, 0, 0);
                  canvas1.convertToBlob({
                    type: "image/png",
                    quality: 1
                  }).then(function (blob) {
                    var reader = new FileReader();

                    reader.onloadend = function () {
                      return resolve(reader.result);
                    };

                    reader.readAsDataURL(blob);
                  });
                });

              case 14:
                _context5.t1 = _context5.sent;

                _context5.t0.postMessage.call(_context5.t0, _context5.t1);

                resolve();

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }())["catch"]();
  });
}

function resize() {
  self.addEventListener('message', function (event) {
    var _event$data = event.data,
        src = _event$data.src,
        w = _event$data.w,
        h = _event$data.h,
        sizePercent = _event$data.sizePercent,
        quality = _event$data.quality;
    fetch(src).then(function (res) {
      res.blob().then(function (blob) {
        createImageBitmap(blob).then(function (imageToLoad) {
          var width = w ? w : sizePercent ? imageToLoad.width * sizePercent : imageToLoad.width;
          var height = h ? h : sizePercent ? imageToLoad.height * sizePercent : imageToLoad.height;
          if (width === 0 || height === 0) self.postMessage(undefined);
          if (imageToLoad.width === width && imageToLoad.height === height) self.postMessage(src);else {
            var canvas = new OffscreenCanvas(width, height),
                ctx = canvas.getContext("2d");
            ctx.drawImage(imageToLoad, 0, 0, width, height);
            canvas.convertToBlob({
              type: "image/png",
              quality: quality
            }).then(function (b) {
              var reader = new FileReader();
              reader.readAsDataURL(b);

              reader.onloadend = function () {
                return self.postMessage(reader.result);
              };
            });
          }
        });
      });
    });
  });
}
function getImageBitmap() {
  var doIt = function doIt(event) {
    fetch(event.data).then(function (res) {
      res.blob().then(function (blob) {
        createImageBitmap(blob).then(function (result) {
          return self.postMessage(result);
        });
      });
    });
  };

  self.addEventListener('message', function (event) {
    return doIt(event);
  });
}
function extractChannel() {
  self.addEventListener('message', function (event) {
    new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
        var _event$data2, channels, img, _channels, r, g, b, a, res, blob, imageToLoad;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _event$data2 = event.data, channels = _event$data2.channels, img = _event$data2.img;
                _channels = _slicedToArray(channels, 4), r = _channels[0], g = _channels[1], b = _channels[2], a = _channels[3];
                _context.next = 4;
                return fetch(img);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.blob();

              case 7:
                blob = _context.sent;
                _context.next = 10;
                return createImageBitmap(blob);

              case 10:
                imageToLoad = _context.sent;
                _context.t0 = self;
                _context.next = 14;
                return new Promise(function (resolve) {
                  var c = new OffscreenCanvas(imageToLoad.width, imageToLoad.height);
                  var ctx = c.getContext("2d");
                  ctx.drawImage(imageToLoad, 0, 0);
                  var imgData = ctx.getImageData(0, 0, imageToLoad.width, imageToLoad.height);
                  var data = imgData.data;
                  var newImage = new Uint8Array(data.length);

                  for (var i = 0; i < data.length; i += 4) {
                    newImage[i] = data[i] * r;
                    newImage[i + 1] = data[i + 1] * g;
                    newImage[i + 2] = data[i + 2] * b;
                    newImage[i + 3] = data[i + 3] * a;
                  }

                  imgData.data.set(newImage);
                  ctx.putImageData(imgData, 0, 0);
                  c.convertToBlob({
                    type: "image/png",
                    quality: 1
                  }).then(function (blob) {
                    var reader = new FileReader();

                    reader.onloadend = function () {
                      return resolve(reader.result);
                    };

                    reader.readAsDataURL(blob);
                  });
                });

              case 14:
                _context.t1 = _context.sent;

                _context.t0.postMessage.call(_context.t0, _context.t1);

                resolve();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"]();
  });
}
function invert() {
  self.addEventListener('message', function (event) {
    new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
        var img, res, blob, imageToLoad;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                img = event.data.img;
                _context2.next = 3;
                return fetch(img);

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.blob();

              case 6:
                blob = _context2.sent;
                _context2.next = 9;
                return createImageBitmap(blob);

              case 9:
                imageToLoad = _context2.sent;
                _context2.t0 = self;
                _context2.next = 13;
                return new Promise(function (resolve) {
                  var c = new OffscreenCanvas(imageToLoad.width, imageToLoad.height);
                  var ctx = c.getContext("2d");
                  ctx.drawImage(imageToLoad, 0, 0);
                  ctx.globalCompositeOperation = 'difference';
                  ctx.fillStyle = 'white';
                  ctx.fillRect(0, 0, imageToLoad.width, imageToLoad.height);
                  c.convertToBlob({
                    type: "image/png",
                    quality: 1
                  }).then(function (blob) {
                    var reader = new FileReader();

                    reader.onloadend = function () {
                      return resolve(reader.result);
                    };

                    reader.readAsDataURL(blob);
                  });
                });

              case 13:
                _context2.t1 = _context2.sent;

                _context2.t0.postMessage.call(_context2.t0, _context2.t1);

                resolve();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }())["catch"]();
  });
}

var ImageProcessor = /*#__PURE__*/function () {
  function ImageProcessor() {
    _classCallCheck(this, ImageProcessor);
  }

  _createClass(ImageProcessor, null, [{
    key: "getImageBitmap",
    value: function () {
      var _getImageBitmap2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(base64) {
        var w;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                w = new WebWorker();
                _context.next = 3;
                return w.createExecution(base64, getImageBitmap.toString());

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getImageBitmap$1(_x) {
        return _getImageBitmap2.apply(this, arguments);
      }

      return getImageBitmap$1;
    }()
  }, {
    key: "noise",
    value: function noise(size) {
      var canvas = document.createElement("canvas");
      var w = canvas.width = size;
      var h = canvas.height = size;
      var context = canvas.getContext("2d");

      for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
          var num = Math.floor(Math.random() * 2);
          context.fillStyle = "rgb(" + num + "," + num + "," + num + ")";
          context.fillRect(i, j, 1, 1);
        }
      }

      return canvas.toDataURL();
    }
  }, {
    key: "getPixel",
    value: function getPixel(ctx, x, y) {
      var imgData = ctx.getImageData(x, y, 1, 1);
      return imgData.data;
    }
  }, {
    key: "getContext",
    value: function getContext(image) {
      var c = document.createElement("canvas");
      c.width = image.naturalWidth;
      c.height = image.naturalHeight;
      var ctx = c.getContext("2d");
      ctx.drawImage(image, 0, 0);
      return ctx;
    }
  }, {
    key: "byChannels",
    value: function () {
      var _byChannels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(channels, img) {
        var worker;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                worker = new WebWorker();
                _context2.next = 3;
                return worker.createExecution({
                  img: img,
                  channels: channels
                }, extractChannel.toString());

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function byChannels(_x2, _x3) {
        return _byChannels.apply(this, arguments);
      }

      return byChannels;
    }()
  }, {
    key: "invert",
    value: function () {
      var _invert2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(img) {
        var worker;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                worker = new WebWorker();
                _context3.next = 3;
                return worker.createExecution({
                  img: img
                }, invert.toString());

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function invert$1(_x4) {
        return _invert2.apply(this, arguments);
      }

      return invert$1;
    }()
  }, {
    key: "heightBasedLinearInterpolate",
    value: function () {
      var _heightBasedLinearInterpolate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(img, img0, heightImg, f) {
        var worker;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                worker = new WebWorker();
                _context4.next = 3;
                return worker.createExecution({
                  img: img,
                  img0: img0,
                  heightImg: heightImg,
                  f: f
                }, heightBasedLinearInterpolate.toString());

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function heightBasedLinearInterpolate$1(_x5, _x6, _x7, _x8) {
        return _heightBasedLinearInterpolate2.apply(this, arguments);
      }

      return heightBasedLinearInterpolate$1;
    }()
  }, {
    key: "linearInterpolate",
    value: function () {
      var _linearInterpolate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(img, img0, factor) {
        var worker;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                worker = new WebWorker();
                _context5.next = 3;
                return worker.createExecution({
                  img: img,
                  img0: img0,
                  factor: factor
                }, linearInterpolate.toString());

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function linearInterpolate$1(_x9, _x10, _x11) {
        return _linearInterpolate2.apply(this, arguments);
      }

      return linearInterpolate$1;
    }()
  }, {
    key: "colorToImage",
    value: function () {
      var _colorToImage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(color) {
        var resolution,
            worker,
            _args6 = arguments;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                resolution = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 256;
                worker = new WebWorker();
                _context6.next = 4;
                return worker.createExecution({
                  color: color,
                  resolution: resolution
                }, colorToImage.toString());

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function colorToImage$1(_x12) {
        return _colorToImage2.apply(this, arguments);
      }

      return colorToImage$1;
    }()
  }, {
    key: "resizeImage",
    value: function () {
      var _resizeImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(src, w, h, sizePercent) {
        var quality,
            worker,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                quality = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : 1;
                worker = new WebWorker();
                _context7.next = 4;
                return worker.createExecution({
                  src: src,
                  w: w,
                  h: h,
                  sizePercent: sizePercent,
                  quality: quality
                }, resize.toString());

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function resizeImage(_x13, _x14, _x15, _x16) {
        return _resizeImage.apply(this, arguments);
      }

      return resizeImage;
    }()
  }, {
    key: "blendWithColor",
    value: function () {
      var _blendWithColor2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(src, color, operation) {
        var w;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                w = new WebWorker();
                _context8.next = 3;
                return w.createExecution({
                  color: color,
                  operation: operation,
                  src: src
                }, blendWithColor.toString());

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function blendWithColor$1(_x17, _x18, _x19) {
        return _blendWithColor2.apply(this, arguments);
      }

      return blendWithColor$1;
    }()
  }]);

  return ImageProcessor;
}();

var TextureInstance = /*#__PURE__*/function () {
  function TextureInstance(img, yFlip, gpu, internalFormat, format, repeat, noMipMapping, type, width, height, border, onLoad) {
    var _this = this;

    _classCallCheck(this, TextureInstance);

    _defineProperty(this, "loaded", false);

    this.attributes = {
      yFlip: yFlip,
      internalFormat: internalFormat,
      format: format,
      repeat: repeat,
      noMipMapping: noMipMapping,
      type: type,
      width: width,
      height: height,
      border: border
    };

    var init = function init(res) {
      return _this._init(res, yFlip, gpu, internalFormat, format, repeat, noMipMapping, type, width, height, border, onLoad);
    };

    if (typeof img === 'string') {
      if (img.includes('data:image/')) ImageProcessor.getImageBitmap(img).then(function (res) {
        res.naturalHeight = res.height;
        res.naturalWidth = res.width;
        init(res);
      });else {
        var i = new Image();
        i.src = img;
        i.decode().then(function () {
          return init(i);
        });
      }
    } else init(img);
  }

  _createClass(TextureInstance, [{
    key: "_init",
    value: function _init(img, yFlip, gpu) {
      var internalFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : gpu.SRGB8_ALPHA8;
      var format = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gpu.RGBA;
      var repeat = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var noMipMapping = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var type = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : gpu.UNSIGNED_BYTE;
      var width = arguments.length > 8 ? arguments[8] : undefined;
      var height = arguments.length > 9 ? arguments[9] : undefined;
      var border = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
      var onLoad = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : function () {
        return null;
      };
      var anisotropicEXT = gpu.getExtension('EXT_texture_filter_anisotropic');
      var newTexture = gpu.createTexture();
      if (yFlip === true) gpu.pixelStorei(gpu.UNPACK_FLIP_Y_WEBGL, true);
      gpu.bindTexture(gpu.TEXTURE_2D, newTexture);
      gpu.texImage2D(gpu.TEXTURE_2D, 0, internalFormat, width ? width : img.naturalWidth, height ? height : img.naturalHeight, border, format, type, img);
      gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_MAG_FILTER, repeat ? gpu.REPEAT : gpu.LINEAR);
      gpu.texParameteri(gpu.TEXTURE_2D, gpu.TEXTURE_MIN_FILTER, repeat ? gpu.REPEAT : gpu.LINEAR_MIPMAP_LINEAR);

      if (anisotropicEXT && !noMipMapping) {
        var anisotropicAmountMin = 8;
        var anisotropicAmount = Math.min(anisotropicAmountMin, gpu.getParameter(anisotropicEXT.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        gpu.texParameterf(gpu.TEXTURE_2D, anisotropicEXT.TEXTURE_MAX_ANISOTROPY_EXT, anisotropicAmount);
      }

      if (!noMipMapping) gpu.generateMipmap(gpu.TEXTURE_2D);
      gpu.bindTexture(gpu.TEXTURE_2D, null);
      this.texture = newTexture;
      this.loaded = true;
      onLoad();
    }
  }, {
    key: "update",
    value: function update(newImage, gpu) {
      var _this2 = this;

      if (this.loaded) {
        gpu.deleteTexture(this.texture);
        ImageProcessor.getImageBitmap(newImage).then(function (res) {
          _this2._init(res, _this2.attributes.yFlip, gpu, _this2.attributes.internalFormat, _this2.attributes.format, _this2.attributes.repeat, _this2.attributes.noMipMapping, _this2.attributes.type, _this2.attributes.width, _this2.attributes.height, _this2.attributes.border);
        });
      }
    }
  }]);

  return TextureInstance;
}();

var PBR = {
  distributionGGX: "\n        float distributionGGX (vec3 N, vec3 H, float roughness){\n            float a2    = roughness * roughness * roughness * roughness;\n            float NdotH = max (dot (N, H), 0.0);\n            float denom = (NdotH * NdotH * (a2 - 1.0) + 1.0);\n            return a2 / (PI * denom * denom);\n        }\n    ",
  geometrySchlickGGX: "\n        float geometrySchlickGGX (float NdotV, float roughness){\n            float r = (roughness + 1.0);\n            float k = (r * r) / 8.0;\n            return NdotV / (NdotV * (1.0 - k) + k);\n        }",
  geometrySmith: "\n        float geometrySmith (vec3 N, vec3 V, vec3 L, float roughness){\n            return geometrySchlickGGX (max (dot (N, L), 0.0), roughness) *\n            geometrySchlickGGX (max (dot (N, V), 0.0), roughness);\n        }\n    ",
  fresnelSchlick: "\n        vec3 fresnelSchlick (float cosTheta, vec3 F0){\n            return F0 + (1.0 - F0) * pow (1.0 - cosTheta, 5.0);\n        }\n    ",
  fresnelSchlickRoughness: "\n        vec3 fresnelSchlickRoughness (float cosTheta, vec3 F0, float roughness){\n            return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow (1.0 - cosTheta, 5.0);\n        }\n    ",
  computeDirectionalLight: "\n        vec3 computeDirectionalLight(vec3 V, vec3 F0, vec3 lightDir, vec3 ambient, vec3 fragPosition, float roughness, float metallic, vec3 N, vec3 albedo){\n            vec3 H = normalize(V + lightDir);\n            float distance    = length(lightDir - fragPosition);\n       \n            float NDF = distributionGGX(N, H, roughness);\n            float G   = geometrySmith(N, V, lightDir, roughness);\n            vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);\n            vec3 kD = vec3(1.0) - F;\n            kD *= 1.0 - metallic;\n        \n            vec3 numerator    = NDF * G * F;\n            float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, lightDir), 0.0) + 0.0001;\n            vec3 specular     = numerator / denominator;\n        \n            float NdotL = max(dot(N, lightDir), 0.0);\n        \n            return (kD * albedo / PI + specular) * ambient * NdotL;\n        }",
  computePointLight: "\n      \n        vec4 computePointLights (in mat4 pointLight, vec3 fragPosition, vec3 V, vec3 N, float quantityToDivide, float roughness, float metallic, vec3 albedo, vec3 F0, int index) {\n            vec3 Lo = vec3(0.);    \n \n            vec3 positionPLight = vec3(pointLight[0][0], pointLight[0][1], pointLight[0][2]);\n            vec3 colorPLight = vec3(pointLight[1][0], pointLight[1][1], pointLight[1][2]);\n            vec3 attenuationPLight = vec3(pointLight[2][0], pointLight[2][1], pointLight[2][2]);\n \n              \n            vec3 L = normalize(positionPLight - fragPosition);\n            vec3 H = normalize(V + L);\n            float distance    = length(positionPLight - fragPosition);\n            float attFactor = 1.0 / (attenuationPLight.x + (attenuationPLight.y * distance) + (attenuationPLight.z * distance * distance));\n            vec3 radiance     = colorPLight * attFactor;\n        \n            float NDF = distributionGGX(N, H, roughness);\n            float G   = geometrySmith(N, V, L, roughness);\n            vec3 F    = fresnelSchlick(max(dot(H, V), 0.0), F0);\n        \n            vec3 kS = F;\n            vec3 kD = vec3(1.0) - kS;\n            kD *= 1.0 - metallic;\n        \n            vec3 numerator    = NDF * G * F;\n            float denominator = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.0001;\n            vec3 specular     = numerator / denominator;\n        \n            float NdotL = max(dot(N, L), 0.0);\n\n                   \n             \n            Lo = (kD * albedo / PI + specular) * radiance * NdotL;\n            return  vec4(Lo, pointLight[3][2]);   \n        }"
};

var Shadows = "\nfloat sampleShadowMap (vec2 coord, float compare, sampler2D shadowMapTexture){\n    return step(compare, texture(shadowMapTexture, coord.xy).r);\n}\n\nfloat sampleShadowMapLinear (vec2 coord, float compare, sampler2D shadowMapTexture, vec2 shadowTexelSize){\n\n\n    vec2 pixelPos = coord.xy/shadowTexelSize + vec2(0.5);\n    vec2 fracPart = fract(pixelPos);\n    vec2 startTexel = (pixelPos - fracPart) * shadowTexelSize;\n\n    float bottomLeftTexel = sampleShadowMap(startTexel, compare, shadowMapTexture);\n    float bottomRightTexel = sampleShadowMap(startTexel + vec2(shadowTexelSize.x, 0.0), compare, shadowMapTexture);\n    float topLeftTexel = sampleShadowMap(startTexel + vec2(0.0, shadowTexelSize.y), compare, shadowMapTexture);\n    float topRightTexel = sampleShadowMap(startTexel + vec2(shadowTexelSize.x, shadowTexelSize.y), compare, shadowMapTexture);\n\n\n    float mixOne = mix(bottomLeftTexel, topLeftTexel, fracPart.y);\n    float mixTwo = mix(bottomRightTexel, topRightTexel, fracPart.y);\n\n    return mix(mixOne, mixTwo, fracPart.x);\n}\n\nfloat sampleSoftShadows(vec2 coord, float compare, sampler2D shadowMapTexture, float shadowMapResolution){\n    const float SAMPLES = 3.0;\n    const float SAMPLES_START = (SAMPLES -1.0)/2.0;\n    const float SAMPLES_SQUARED = SAMPLES * SAMPLES;\n\n    vec2 shadowTexelSize = vec2(1.0/shadowMapResolution, 1.0/shadowMapResolution);\n    float response = 0.0;\n\n    for (float y= -SAMPLES_START; y <= SAMPLES_START; y+=1.0){\n        for (float x= -SAMPLES_START; x <= SAMPLES_START; x+=1.0){\n            vec2 coordsOffset = vec2(x, y)*shadowTexelSize;\n            response += sampleShadowMapLinear(coord + coordsOffset, compare, shadowMapTexture, shadowTexelSize);\n        }\n    }\n    return response/SAMPLES_SQUARED;\n}\n\nfloat calculateShadows (vec4 fragPosLightSpace, vec2 faceOffset, sampler2D shadowMapTexture, float shadowMapsQuantity, float shadowMapResolution){\n    float response = 1.0;\n    vec3 pos = (fragPosLightSpace.xyz / fragPosLightSpace.w)* 0.5 + 0.5;\n\n    if (pos.z > 1.0){\n        pos.z = 1.0;\n    }\n    float bias = 0.0001;\n    float compare = pos.z - bias;\n\n    response = sampleSoftShadows(vec2(pos.x/shadowMapsQuantity + faceOffset.x/shadowMapsQuantity, pos.y/shadowMapsQuantity + faceOffset.y/shadowMapsQuantity), compare, shadowMapTexture, shadowMapResolution);\n\n    return response;\n}\n\nfloat pointLightShadow(vec3 fragPosition, vec3 lightPos, int index, vec2 shadowClipNearFar) {\n    if(index > 1){\n        return 1.;\n    }else{\n        vec3 lightToFrag = normalize(lightPos - fragPosition); \n        float depth;\n        if(index == 0 )\n            depth = texture(shadowCube0, -lightToFrag).r ;\n        else\n            depth = texture(shadowCube1,-lightToFrag).r ;\n        depth += 0.05;\n        float fromLightToFrag = (length(fragPosition - lightPos) - shadowClipNearFar.x)  / (shadowClipNearFar.y - shadowClipNearFar.x);\n        \n        return  fromLightToFrag > depth ? 0. : 1.; \n    }\n}\n";

var GI = "\nvec4 dirToSH(vec3 dir){\n    return vec4(SH_C0, -SH_C1 * dir.y, SH_C1 * dir.z, -SH_C1 * dir.x);\n}\nvec3 getGridCellf(vec3 world_space_position, int _max_grid_size) \n{\n    const vec3 center = vec3(0.);\n    vec3 max_grid_size = vec3(_max_grid_size);\n    vec3 min = center - vec3(max_grid_size * 0.5 * CELLSIZE);\n    return vec3((world_space_position - min) / CELLSIZE);\n}\n\nvec4 sampleGI(in sampler2D t, vec3 gridCell, int gridSize) {\n    float f_grid_size = float(gridSize);\n    float zFloor = floor(gridCell.z);\n\n    vec2 tex_coord = vec2(gridCell.x / (f_grid_size * f_grid_size) + zFloor / f_grid_size , gridCell.y / f_grid_size);\n\n    vec4 t1 = texture(t, tex_coord);\n    vec4 t2 = texture(t, vec2(tex_coord.x + (1.0 / f_grid_size), tex_coord.y));\n\n    return mix(t1,t2, gridCell.z - zFloor);\n}\n\nvec3 computeGIIntensity(vec3 fragPosition, vec3 normal, int gridSize)\n{\n    vec4 sh_intensity = dirToSH(-normalize(normal));\n    vec3 gridCell = getGridCellf(fragPosition, gridSize);\n\n    vec4 red = sampleGI(redIndirectSampler, gridCell, gridSize);\n    vec4 green = sampleGI(greenIndirectSampler, gridCell, gridSize);\n    vec4 blue = sampleGI(blueIndirectSampler, gridCell, gridSize);\n\n    return vec3(dot(sh_intensity, red), dot(sh_intensity, green), dot(sh_intensity, blue));\n}\n";

var METHODS = {
  distributionGGX: '@import(distributionGGX)',
  geometrySchlickGGX: '@import(geometrySchlickGGX)',
  geometrySmith: '@import(geometrySmith)',
  fresnelSchlick: '@import(fresnelSchlick)',
  fresnelSchlickRoughness: '@import(fresnelSchlickRoughness)',
  computeDirectionalLight: '@import(computeDirectionalLight)',
  computePointLight: '@import(computePointLight)',
  calculateShadows: '@import(calculateShadows)',
  gi: '@import(GI)'
};

var Bundler = /*#__PURE__*/function () {
  function Bundler() {
    _classCallCheck(this, Bundler);
  }

  _createClass(Bundler, null, [{
    key: "applyMethods",
    value: function applyMethods(shaderCode) {
      var response = shaderCode;
      Object.keys(METHODS).forEach(function (key) {
        if (key === 'gi') response = response.replaceAll(METHODS[key], GI);
        if (key === 'calculateShadows') response = response.replaceAll(METHODS[key], Shadows);
        if (PBR[key]) response = response.replaceAll(METHODS[key], PBR[key]);
      });
      return response;
    }
  }]);

  return Bundler;
}();

var TYPES = {
  'vec2': 'uniform2fv',
  'vec3': 'uniform3fv',
  'vec4': 'uniform4fv',
  'mat3': 'uniformMatrix3fv',
  'mat4': 'uniformMatrix4fv',
  'float': 'uniform1f',
  'int': 'uniform1i',
  'sampler2D': 'sampler2D',
  'samplerCube': 'cubemap',
  'ivec2': 'uniform2iv',
  'ivec3': 'uniform3iv',
  'bool': 'uniform1i'
};

var ShaderInstance = /*#__PURE__*/function () {
  function ShaderInstance(vertex, fragment, gpu) {
    var setMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
      return null;
    };

    _classCallCheck(this, ShaderInstance);

    _defineProperty(this, "available", false);

    _defineProperty(this, "regex", /uniform(\s+)(highp|mediump|lowp)?(\s*)((\w|_)+)((\s|\w|_)*);/gm);

    _defineProperty(this, "structRegex", function (type) {
      return new RegExp("(struct\\s+".concat(type, "\\s*\\s*{.+?(?<=}))"), 'gs');
    });

    _defineProperty(this, "defineRegex", function (global) {
      return new RegExp("#define(\\s+)((\\w|_)+)(\\s+)(.+)", global ? 'gmi' : 'mi');
    });

    _defineProperty(this, "regexMatch", /uniform(\s+)(highp|mediump|lowp)?(\s*)((\w|_)+)((\s|\w|_)*);$/m);

    _defineProperty(this, "regexArray", function (global) {
      return new RegExp('uniform(\\s+)(highp|mediump|lowp)?(\\s*)((\\w|_)+)((\\s|\\w|_)*)\\[(\\w+)\\](\\s*);$', global ? 'gm' : 'm');
    });

    var alert = [];
    this.program = gpu.createProgram();
    this.gpu = gpu;

    var vCode = this._compileShader(trimString(vertex), gpu === null || gpu === void 0 ? void 0 : gpu.VERTEX_SHADER, function (m) {
      return alert.push(m);
    });

    var fCode = this._compileShader(trimString(fragment), gpu === null || gpu === void 0 ? void 0 : gpu.FRAGMENT_SHADER, function (m) {
      return alert.push(m);
    });

    this.uniforms = [].concat(_toConsumableArray(this._extractUniforms(vCode)), _toConsumableArray(this._extractUniforms(fCode))).flat();
    console.log(alert);
    setMessage({
      error: gpu.getError(),
      messages: alert,
      hasError: alert.length > 0
    });
    this.uniforms = this.uniforms.filter(function (u) {
      return _typeof(u.uLocation) === "object" || _typeof(u.uLocations) === "object";
    });
  }

  _createClass(ShaderInstance, [{
    key: "_compileShader",
    value: function _compileShader(shaderCode, shaderType, pushMessage) {
      var bundledCode = Bundler.applyMethods(shaderCode);
      var shader = this.gpu.createShader(shaderType);
      this.gpu.shaderSource(shader, bundledCode);
      this.gpu.compileShader(shader);
      var compiled = this.gpu.getShaderParameter(shader, this.gpu.COMPILE_STATUS);

      if (!compiled) {
        pushMessage(this.gpu.getShaderInfoLog(shader));
        this.available = false;
      } else {
        this.gpu.attachShader(this.program, shader);
        this.gpu.linkProgram(this.program);
        this.available = true;
      }

      return bundledCode;
    }
  }, {
    key: "_extractUniforms",
    value: function _extractUniforms(code) {
      var _this = this;

      var uniformObjects = [];
      var uniforms = code.match(this.regex);

      if (uniforms) {
        uniforms.forEach(function (u) {
          var match = u.match(_this.regexMatch);

          if (match) {
            var type = match[4];
            var name = match[6].replace(' ', '').trim();

            if (TYPES[type] !== undefined) {
              uniformObjects.push({
                type: type,
                name: name,
                uLocation: _this.gpu.getUniformLocation(_this.program, name)
              });
            } else {
              var struct = code.match(_this.structRegex(type));
              var reg = /^(\s*)(\w+)(\s*)((\w|_)+)/m;

              if (struct) {
                struct = struct[0].split('\n').filter(function (e) {
                  return Object.keys(TYPES).some(function (v) {
                    return e.includes(v);
                  });
                });
                uniformObjects.push.apply(uniformObjects, _toConsumableArray(struct.map(function (s) {
                  var current = s.match(reg);

                  if (current) {
                    return {
                      type: current[2],
                      name: current[4],
                      parent: name,
                      uLocation: _this.gpu.getUniformLocation(_this.program, name + '.' + current[4])
                    };
                  }
                }).filter(function (e) {
                  return e !== undefined;
                })));
              }
            }
          }
        });
      }

      var arrayUniforms = code.match(this.regexArray(true));
      var definitions = code.match(this.defineRegex(true));
      if (arrayUniforms) arrayUniforms.forEach(function (u) {
        var match = u.match(_this.regexArray(false));

        if (match) {
          var _definitions$find;

          var type = match[4];
          var name = match[6].replace(' ', '');
          var define = (_definitions$find = definitions.find(function (d) {
            return d.includes(match[8]);
          })) === null || _definitions$find === void 0 ? void 0 : _definitions$find.match(_this.defineRegex(false));

          if (define !== undefined) {
            var arraySize = parseInt(define[5]);

            if (TYPES[type] !== undefined) {
              uniformObjects.push({
                type: type,
                name: name,
                arraySize: arraySize,
                uLocations: new Array(arraySize).fill(null).map(function (_, i) {
                  return _this.gpu.getUniformLocation(_this.program, name + "[".concat(i, "]"));
                })
              });
            } else {
              var struct = code.match(_this.structRegex(type));
              var reg = /^(\s*)(\w+)(\s*)((\w|_)+)/m;

              if (struct) {
                struct = struct[0].split('\n').filter(function (e) {
                  return Object.keys(TYPES).some(function (v) {
                    return e.includes(v);
                  });
                });
                uniformObjects.push.apply(uniformObjects, _toConsumableArray(struct.map(function (s) {
                  var current = s.match(reg);

                  if (current) {
                    return {
                      type: current[2],
                      name: current[4],
                      parent: name,
                      arraySize: arraySize,
                      uLocations: new Array(arraySize).fill(null).map(function (_, i) {
                        return _this.gpu.getUniformLocation(_this.program, name + "[".concat(i, "]") + '.' + current[4]);
                      })
                    };
                  }
                }).filter(function (e) {
                  return e !== undefined;
                })));
              }
            }
          }
        }
      });
      return uniformObjects;
    }
  }, {
    key: "bindForUse",
    value: function bindForUse(data) {
      var currentSamplerIndex = 0;

      for (var v = 0; v < this.uniforms.length; v++) {
        var current = this.uniforms[v];

        if (current.arraySize !== undefined) {
          var dataAttr = current.parent !== undefined ? data[current.parent] : data[current.name];
          if (dataAttr) for (var i = 0; i < (current.arraySize < dataAttr.length ? current.arraySize : dataAttr.length); i++) {
            if (current.parent) this._bind(current.uLocations[i], dataAttr[i][current.name], current.type, currentSamplerIndex, function () {
              return currentSamplerIndex++;
            }, current);else this._bind(current.uLocations[i], dataAttr[i], current.type, currentSamplerIndex, function () {
              return currentSamplerIndex++;
            }, current);
          }
        } else {
          var dataAttribute = current.parent !== undefined ? data[current.parent][current.name] : data[current.name];

          this._bind(current.uLocation, dataAttribute, current.type, currentSamplerIndex, function () {
            return currentSamplerIndex++;
          }, current);
        }
      }
    }
  }, {
    key: "_bind",
    value: function _bind(uLocation, data, type, currentSamplerIndex, increaseIndex, key) {
      switch (type) {
        case 'float':
        case 'int':
        case 'vec2':
        case 'vec3':
        case 'vec4':
        case 'ivec2':
        case 'ivec3':
        case 'bool':
          try {
            this.gpu[TYPES[type]](uLocation, data);
          } catch (e) {}

          break;

        case 'mat3':
        case 'mat4':
          this.gpu[TYPES[type]](uLocation, false, data);
          break;

        case 'samplerCube':
          this.gpu.activeTexture(this.gpu.TEXTURE0 + currentSamplerIndex);
          this.gpu.bindTexture(this.gpu.TEXTURE_CUBE_MAP, data);
          this.gpu.uniform1i(uLocation, currentSamplerIndex);
          increaseIndex();
          break;

        case 'sampler2D':
          bindTexture(currentSamplerIndex, data, uLocation, this.gpu);
          increaseIndex();
          break;
      }
    }
  }, {
    key: "use",
    value: function use() {
      this.gpu.useProgram(this.program);
    }
  }]);

  return ShaderInstance;
}();
function trimString(str) {
  return str.replaceAll(/^(\s*)/gm, '').replaceAll(/^\s*\n/gm, '');
}

var DATA_TYPES$1 = {
  NUMBER: 0,
  TEXTURE: 'sampler2D',
  COLOR: 2,
  STRING: 4,
  OBJECT: 5,
  OPTIONS: 6,
  ATLAS: 7,
  EXECUTION: 11,
  CONSTANT: 12,
  ANY: 13,
  ENTITY: 15,
  KEY: 16,
  FLOAT: 'float',
  INT: 'int',
  VEC2: 'vec2',
  VEC3: 'vec3',
  VEC4: 'vec4',
  MAT3: 'mat3',
  MAT4: 'mat4',
  BOOL: 'bool',
  UNDEFINED: -1 // TO BE DETERMINED ON COMPILATION

};

var MaterialInstance = /*#__PURE__*/function () {
  function MaterialInstance(gpu, vertexShader, shader) {
    var uniformData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var settings = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var onCompiled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {
      return null;
    };
    var id = arguments.length > 6 ? arguments[6] : undefined;

    _classCallCheck(this, MaterialInstance);

    _defineProperty(this, "ready", false);

    _defineProperty(this, "uniformData", {});

    _defineProperty(this, "uniforms", []);

    _defineProperty(this, "settings", {});

    _defineProperty(this, "rsmAlbedo", void 0);

    this.gpu = gpu;
    this.id = id;

    this._initializeSettings(settings);

    this.shader = [shader, vertexShader, uniformData, onCompiled];
  }

  _createClass(MaterialInstance, [{
    key: "_initializeSettings",
    value: function _initializeSettings(settings) {
      this.settings = settings;

      if (settings.rsmAlbedo) {
        if (this.rsmAlbedo) this.gpu.deleteTexture(this.rsmAlbedo.texture);
        this.rsmAlbedo = new TextureInstance(settings.rsmAlbedo, false, this.gpu, this.gpu.SRGB8_ALPHA8, this.gpu.RGBA, true, false, this.gpu.UNSIGNED_BYTE, undefined, undefined, 0, function () {
          return null;
        });
        delete this.settings.rsmAlbedo;
      }
    }
  }, {
    key: "shader",
    set: function set(_ref) {
      var _this = this;

      var _ref2 = _slicedToArray(_ref, 5),
          shader = _ref2[0],
          vertexShader = _ref2[1],
          uniformData = _ref2[2],
          onCompiled = _ref2[3],
          settings = _ref2[4];

      this.ready = false;

      if (settings) {
        this._initializeSettings(settings);
      }

      var message;
      if (this._shader) this.gpu.deleteProgram(this._shader.program);
      this._shader = new ShaderInstance(vertexShader, shader, this.gpu, function (m) {
        return message = m;
      });
      Promise.all(uniformData.map(function (k) {
        return new Promise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
            var img, texture;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = k.type;
                    _context.next = _context.t0 === DATA_TYPES$1.COLOR ? 3 : _context.t0 === DATA_TYPES$1.TEXTURE ? 3 : 15;
                    break;

                  case 3:
                    if (!(k.type === DATA_TYPES$1.TEXTURE)) {
                      _context.next = 7;
                      break;
                    }

                    _context.t1 = k.data;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return ImageProcessor.colorToImage(k.data, 32);

                  case 9:
                    _context.t1 = _context.sent;

                  case 10:
                    img = _context.t1;
                    _context.next = 13;
                    return new Promise(function (r) {
                      var _k$format, _k$format2;

                      texture = new TextureInstance(img, k.yFlip, _this.gpu, _this.gpu[(_k$format = k.format) === null || _k$format === void 0 ? void 0 : _k$format.internalFormat], _this.gpu[(_k$format2 = k.format) === null || _k$format2 === void 0 ? void 0 : _k$format2.format], true, false, _this.gpu.UNSIGNED_BYTE, undefined, undefined, 0, function () {
                        r();
                      });
                    });

                  case 13:
                    _this.uniformData[k.key] = texture.texture;
                    return _context.abrupt("break", 17);

                  case 15:
                    _this.uniformData[k.key] = k.data;
                    return _context.abrupt("break", 17);

                  case 17:
                    resolve();

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
      })).then(function () {
        if (onCompiled) onCompiled(message);
        _this.ready = true;
      });
    }
  }, {
    key: "use",
    value: function use() {
      var bind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var additionalUniforms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (bind) this._shader.use();

      var data = _objectSpread2(_objectSpread2({}, this.uniformData), additionalUniforms);

      this._shader.bindForUse(data);
    }
  }]);

  return MaterialInstance;
}();

var Entity = /*#__PURE__*/function () {
  function Entity() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : uuid_1.v4();
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Empty entity';
    var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var linkedTo = arguments.length > 3 ? arguments[3] : undefined;
    var isBlueprint = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, Entity);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "active", void 0);

    _defineProperty(this, "components", {});

    _defineProperty(this, "linkedTo", void 0);

    _defineProperty(this, "isBlueprint", false);

    this.id = id;
    this.name = name;
    this.active = active;
    this.isBlueprint = isBlueprint;
    this.linkedTo = linkedTo;
  }

  _createClass(Entity, [{
    key: "addComponent",
    value: function addComponent(componentClassObject) {
      this.components[componentClassObject.constructor.name] = componentClassObject;
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(componentName) {
      delete this.components[componentName];
    }
  }]);

  return Entity;
}();

var DirectionalLightComponent = /*#__PURE__*/function (_Component) {
  _inherits(DirectionalLightComponent, _Component);

  var _super = _createSuper(DirectionalLightComponent);

  function DirectionalLightComponent(id) {
    var _this;

    _classCallCheck(this, DirectionalLightComponent);

    _this = _super.call(this, id, 'DirectionalLightComponent');

    _defineProperty(_assertThisInitialized(_this), "_color", [255, 255, 255]);

    _defineProperty(_assertThisInitialized(_this), "_direction", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_zNear", -1);

    _defineProperty(_assertThisInitialized(_this), "_zFar", 10000);

    _defineProperty(_assertThisInitialized(_this), "_transformationMatrix", Array.from(create$5()));

    _defineProperty(_assertThisInitialized(_this), "_lightView", Array.from(create$5()));

    _defineProperty(_assertThisInitialized(_this), "_lightProjection", Array.from(create$5()));

    _defineProperty(_assertThisInitialized(_this), "_size", 35);

    _defineProperty(_assertThisInitialized(_this), "_atlasFace", [0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_changed", true);

    _defineProperty(_assertThisInitialized(_this), "_shadowMap", true);

    _defineProperty(_assertThisInitialized(_this), "_center", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "intensity", 1);

    _this._update();

    return _this;
  }

  _createClass(DirectionalLightComponent, [{
    key: "shadowMap",
    get: function get() {
      return this._shadowMap;
    },
    set: function set(data) {
      this._shadowMap = data;
    }
  }, {
    key: "lightView",
    get: function get() {
      return this._lightView;
    },
    set: function set(data) {
      this._lightView = data;
    }
  }, {
    key: "changed",
    get: function get() {
      return this._changed;
    },
    set: function set(_) {
      this._changed = false;
    }
  }, {
    key: "fixedColor",
    get: function get() {
      return [this._color[0] * this.intensity / 255, this._color[1] * this.intensity / 255, this._color[2] * this.intensity / 255];
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(data) {
      this._color = data;
    }
  }, {
    key: "atlasFace",
    get: function get() {
      return this._atlasFace;
    },
    set: function set(data) {
      this._atlasFace = data;
    }
  }, {
    key: "zNear",
    get: function get() {
      return this._zNear;
    },
    set: function set(data) {
      this._zNear = data;

      this._update();
    }
  }, {
    key: "zFar",
    get: function get() {
      return this._zFar;
    },
    set: function set(data) {
      this._zFar = data;

      this._update();
    }
  }, {
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(data) {
      this._direction = data;

      this._update();

      this._transformationMatrix[12] = data[0];
      this._transformationMatrix[13] = data[1];
      this._transformationMatrix[14] = data[2];
    }
  }, {
    key: "transformationMatrix",
    get: function get() {
      return this._transformationMatrix;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(data) {
      this._size = data;

      this._update();
    }
  }, {
    key: "lightProjection",
    get: function get() {
      return this._lightProjection;
    },
    set: function set(data) {}
  }, {
    key: "center",
    get: function get() {
      return this._center;
    },
    set: function set(data) {
      this._center = data;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._lightView = [];
      lookAt$1(this._lightView, this._direction, this._center, [0, 1, 0]);
      this._lightProjection = [];
      ortho(this._lightProjection, -this._size, this._size, -this._size, this._size, this._zNear, this._zFar);
      this._changed = true;
    }
  }]);

  return DirectionalLightComponent;
}(Component);

var SkylightComponent = /*#__PURE__*/function (_DirectionalLightComp) {
  _inherits(SkylightComponent, _DirectionalLightComp);

  var _super = _createSuper(SkylightComponent);

  function SkylightComponent(id) {
    var _this;

    _classCallCheck(this, SkylightComponent);

    _this = _super.call(this, id);

    _defineProperty(_assertThisInitialized(_this), "rsmResolution", 512);

    _defineProperty(_assertThisInitialized(_this), "samples", 32);

    _defineProperty(_assertThisInitialized(_this), "indirectAttenuation", 1);

    _defineProperty(_assertThisInitialized(_this), "shadowMap", true);

    _this.name = 'SkylightComponent';
    return _this;
  }

  _createClass(SkylightComponent, [{
    key: "attenuation",
    get: function get() {
      return this.indirectAttenuation;
    },
    set: function set(data) {
      this.indirectAttenuation = data;
      this._changed = true;
    }
  }, {
    key: "lpvSamples",
    get: function get() {
      return this.samples;
    },
    set: function set(data) {
      this.samples = data;
      this._changed = true;
    }
  }]);

  return SkylightComponent;
}(DirectionalLightComponent);

var MESH_TYPES = {
  STATIC: 0,
  DYNAMIC: 1
};

var MeshComponent = /*#__PURE__*/function (_Component) {
  _inherits(MeshComponent, _Component);

  var _super = _createSuper(MeshComponent);

  function MeshComponent(id, meshID) {
    var _this;

    _classCallCheck(this, MeshComponent);

    _this = _super.call(this, id, MeshComponent.constructor.name);

    _defineProperty(_assertThisInitialized(_this), "meshID", void 0);

    _defineProperty(_assertThisInitialized(_this), "normalMatrix", create$6());

    _defineProperty(_assertThisInitialized(_this), "query", void 0);

    _defineProperty(_assertThisInitialized(_this), "meshType", MESH_TYPES.STATIC);

    _this.meshID = meshID;
    _this.queryInProgress = false;
    _this.occluded = false;
    return _this;
  }

  return _createClass(MeshComponent);
}(Component);

var PointLightComponent = /*#__PURE__*/function (_Component) {
  _inherits(PointLightComponent, _Component);

  var _super = _createSuper(PointLightComponent);

  function PointLightComponent(id) {
    var _this;

    _classCallCheck(this, PointLightComponent);

    _this = _super.call(this, id, PointLightComponent.constructor.name);

    _defineProperty(_assertThisInitialized(_this), "_color", [255, 255, 255]);

    _defineProperty(_assertThisInitialized(_this), "attenuation", [1, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_changed", true);

    _defineProperty(_assertThisInitialized(_this), "_zNear", 1);

    _defineProperty(_assertThisInitialized(_this), "_zFar", 1000);

    _defineProperty(_assertThisInitialized(_this), "shadowMap", true);

    _defineProperty(_assertThisInitialized(_this), "intensity", 1);

    return _this;
  }

  _createClass(PointLightComponent, [{
    key: "zNear",
    get: function get() {
      return this._zNear;
    },
    set: function set(data) {
      this._zNear = data;
      this._changed = true;
    }
  }, {
    key: "zFar",
    get: function get() {
      return this._zFar;
    },
    set: function set(data) {
      this._zFar = data;
      this._changed = true;
    }
  }, {
    key: "changed",
    get: function get() {
      return this._changed;
    },
    set: function set(_) {
      this._changed = false;
    }
  }, {
    key: "fixedColor",
    get: function get() {
      return [this._color[0] * this.intensity / 255, this._color[1] * this.intensity / 255, this._color[2] * this.intensity / 255];
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(data) {
      this._color = data;
    }
  }]);

  return PointLightComponent;
}(Component);

var SkyboxComponent = /*#__PURE__*/function (_Component) {
  _inherits(SkyboxComponent, _Component);

  var _super = _createSuper(SkyboxComponent);

  function SkyboxComponent(id) {
    var _this;

    _classCallCheck(this, SkyboxComponent);

    _this = _super.call(this, id, 'SkyboxComponent');

    _defineProperty(_assertThisInitialized(_this), "__cubeMap", void 0);

    _defineProperty(_assertThisInitialized(_this), "__initialized", false);

    _defineProperty(_assertThisInitialized(_this), "_resolution", 512);

    _defineProperty(_assertThisInitialized(_this), "_gamma", 1);

    _defineProperty(_assertThisInitialized(_this), "_exposure", 1);

    _defineProperty(_assertThisInitialized(_this), "imageID", undefined);

    _defineProperty(_assertThisInitialized(_this), "_prefilteredMipmaps", 6);

    return _this;
  }

  _createClass(SkyboxComponent, [{
    key: "blob",
    get: function get() {
      return this.__blob;
    },
    set: function set(data) {
      this.__blob = data;
      this.__initialized = false;
    }
  }, {
    key: "resolution",
    get: function get() {
      return this._resolution;
    },
    set: function set(data) {
      this._resolution = data;
      this.__initialized = false;
    }
  }, {
    key: "ready",
    get: function get() {
      return this.__initialized;
    },
    set: function set(data) {
      this.__initialized = data;
    }
  }, {
    key: "gamma",
    get: function get() {
      return this._gamma;
    },
    set: function set(data) {
      this._gamma = data;
    }
  }, {
    key: "exposure",
    get: function get() {
      return this._exposure;
    },
    set: function set(data) {
      this._exposure = data;
    }
  }, {
    key: "prefilteredMipmaps",
    get: function get() {
      return this._prefilteredMipmaps;
    },
    set: function set(data) {
      this._prefilteredMipmaps = data;
    }
  }, {
    key: "cubeMap",
    get: function get() {
      return this.__cubeMap;
    },
    set: function set(data) {
      this.__cubeMap = data;
    }
  }]);

  return SkyboxComponent;
}(Component);

var SpotLightComponent = /*#__PURE__*/function (_Component) {
  _inherits(SpotLightComponent, _Component);

  var _super = _createSuper(SpotLightComponent);

  function SpotLightComponent(id) {
    var _this;

    _classCallCheck(this, SpotLightComponent);

    _this = _super.call(this, id, SpotLightComponent.constructor.name);

    _defineProperty(_assertThisInitialized(_this), "color", [255, 255, 255]);

    _defineProperty(_assertThisInitialized(_this), "cutoff", 0);

    _defineProperty(_assertThisInitialized(_this), "direction", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_transformationMatrix", Array.from(create$5()));

    _defineProperty(_assertThisInitialized(_this), "_position", [0, 0, 0]);

    return _this;
  }

  _createClass(SpotLightComponent, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(data) {
      this._position = data;
      this._transformationMatrix[12] = data[0];
      this._transformationMatrix[13] = data[1];
      this._transformationMatrix[14] = data[2];
    }
  }, {
    key: "fixedColor",
    get: function get() {
      return this.color.map(function (i) {
        return i / 255;
      });
    }
  }, {
    key: "transformationMatrix",
    get: function get() {
      return this._transformationMatrix;
    }
  }]);

  return SpotLightComponent;
}(Component);

var MaterialComponent = /*#__PURE__*/function (_Component) {
  _inherits(MaterialComponent, _Component);

  var _super = _createSuper(MaterialComponent);

  function MaterialComponent(id, materialID) {
    var _this;

    _classCallCheck(this, MaterialComponent);

    _this = _super.call(this, id, MaterialComponent.name);

    _defineProperty(_assertThisInitialized(_this), "materialID", void 0);

    _defineProperty(_assertThisInitialized(_this), "overrideMaterial", false);

    _defineProperty(_assertThisInitialized(_this), "radius", 50);

    _defineProperty(_assertThisInitialized(_this), "doubleSided", true);

    _defineProperty(_assertThisInitialized(_this), "uniforms", []);

    _defineProperty(_assertThisInitialized(_this), "uniformValues", {});

    _this.materialID = materialID;
    return _this;
  }

  return _createClass(MaterialComponent);
}(Component);

var toDeg = 57.2957795131;

var Transformation = /*#__PURE__*/function () {
  function Transformation() {
    _classCallCheck(this, Transformation);
  }

  _createClass(Transformation, null, [{
    key: "transform",
    value: function transform(translation, rotate, scale) {
      var quaternion = rotate.length > 3 ? rotate : fromEuler([], rotate[0] * toDeg, rotate[1] * toDeg, rotate[2] * toDeg);
      return fromRotationTranslationScale([], quaternion, translation, scale);
    }
  }, {
    key: "extractTransformations",
    value: function extractTransformations(mat) {
      return {
        translation: getTranslation$1([], mat),
        rotationQuat: normalize$2([], getRotation$1([], mat)),
        scaling: getScaling([], mat)
      };
    }
  }, {
    key: "getEuler",
    value: function getEuler(q) {
      var angles = [];
      var sinr_cosp = 2 * (q[3] * q[0] + q[1] * q[2]);
      var cosr_cosp = 1 - 2 * (q[0] * q[0] + q[1] * q[1]);
      angles[0] = Math.atan2(sinr_cosp, cosr_cosp);
      var sinp = 2 * (q[3] * q[1] - q[2] * q[0]);
      if (Math.abs(sinp) >= 1) angles[1] = 3.14 * sinp / Math.abs(sinp);else angles[1] = Math.asin(sinp);
      var siny_cosp = 2 * (q[3] * q[2] + q[0] * q[1]);
      var cosy_cosp = 1 - 2 * (q[1] * q[1] + q[2] * q[2]);
      angles[2] = Math.atan2(siny_cosp, cosy_cosp);
      return angles;
    }
  }, {
    key: "updateTransform",
    value: function updateTransform(axis, data, key, engine, entityID, setAlert) {
      var entity = engine.entities.find(function (e) {
        return e.id === entityID;
      });
      var component = entity.components[COMPONENTS.TRANSFORM];
      var prev = component[key];
      component[key] = [axis === 'x' ? data : prev[0], axis === 'y' ? data : prev[1], axis === 'z' ? data : prev[2]];
      if (entity.components[COMPONENTS.POINT_LIGHT]) entity.components[COMPONENTS.POINT_LIGHT].changed = true;
      if (entity.components[COMPONENTS.CUBE_MAP]) setAlert({
        message: 'Reflection captures need to be rebuilt',
        type: 'alert'
      });
      engine.dispatchEntities({
        type: ENTITY_ACTIONS.UPDATE_COMPONENT,
        payload: {
          entityID: entityID,
          key: COMPONENTS.TRANSFORM,
          data: component
        }
      });
    }
  }]);

  return Transformation;
}();

var TransformComponent = /*#__PURE__*/function (_Component) {
  _inherits(TransformComponent, _Component);

  var _super = _createSuper(TransformComponent);

  function TransformComponent(id) {
    var _this;

    _classCallCheck(this, TransformComponent);

    var name = TransformComponent.constructor.name;
    _this = _super.call(this, id, name);

    _defineProperty(_assertThisInitialized(_this), "__rotation", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_rotationQuat", [0, 0, 0, 1]);

    _defineProperty(_assertThisInitialized(_this), "_translation", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_scaling", [1, 1, 1]);

    _defineProperty(_assertThisInitialized(_this), "__changed", false);

    _defineProperty(_assertThisInitialized(_this), "_transformationMatrix", create$5());

    _defineProperty(_assertThisInitialized(_this), "_rotationUpdated", false);

    _defineProperty(_assertThisInitialized(_this), "__initializedEuler", false);

    _defineProperty(_assertThisInitialized(_this), "lockedRotation", false);

    _defineProperty(_assertThisInitialized(_this), "lockedScaling", false);

    _defineProperty(_assertThisInitialized(_this), "updateQuatOnEulerChange", true);

    return _this;
  }

  _createClass(TransformComponent, [{
    key: "changed",
    get: function get() {
      return this.__changed;
    },
    set: function set(data) {
      this.__changed = data;
    }
  }, {
    key: "position",
    get: function get() {
      return _toConsumableArray(this._translation);
    }
  }, {
    key: "rotation",
    get: function get() {
      return _toConsumableArray(this.__rotation);
    },
    set: function set(data) {
      this.__changed = true;
      this.__rotation = data;
      var toDeg = 57.29;
      this._rotationUpdated = true;
      if (this.updateQuatOnEulerChange) this._rotationQuat = fromEuler([], this.__rotation[0] * toDeg, this.__rotation[1] * toDeg, this.__rotation[2] * toDeg);
    }
  }, {
    key: "scaling",
    get: function get() {
      return _toConsumableArray(this._scaling);
    },
    set: function set(data) {
      this.__changed = true;
      this._scaling = data;
    }
  }, {
    key: "translation",
    get: function get() {
      return _toConsumableArray(this._translation);
    },
    set: function set(data) {
      this.__changed = true;
      this._translation = data;
    }
  }, {
    key: "transformationMatrix",
    get: function get() {
      return this._transformationMatrix;
    },
    set: function set(data) {
      this._transformationMatrix = data;
      this.__changed = false;
    }
  }, {
    key: "rotationQuat",
    get: function get() {
      return _toConsumableArray(this._rotationQuat);
    },
    set: function set(q) {
      this.__changed = true;
      this._rotationUpdated = false;
      normalize$2(this._rotationQuat, q);

      if (this.__initializedEuler) {
        this.__initializedEuler = true;
        this.__rotation = Transformation.getEuler(this._rotationQuat);
      }
    }
  }, {
    key: "rotationUpdated",
    get: function get() {
      return this._rotationUpdated;
    }
  }]);

  return TransformComponent;
}(Component);

var FolderComponent = /*#__PURE__*/function (_Component) {
  _inherits(FolderComponent, _Component);

  var _super = _createSuper(FolderComponent);

  function FolderComponent(id, name, active) {
    _classCallCheck(this, FolderComponent);

    return _super.call(this, id, name, active);
  }

  return _createClass(FolderComponent);
}(Component);

var PhysicsBodyComponent = /*#__PURE__*/function (_Component) {
  _inherits(PhysicsBodyComponent, _Component);

  var _super = _createSuper(PhysicsBodyComponent);

  function PhysicsBodyComponent(id) {
    var _this;

    _classCallCheck(this, PhysicsBodyComponent);

    _this = _super.call(this, id);

    _defineProperty(_assertThisInitialized(_this), "_mass", 1);

    _defineProperty(_assertThisInitialized(_this), "_acceleration", [0, 0, 0]);

    _defineProperty(_assertThisInitialized(_this), "_velocity", [0, 0, 0]);

    return _this;
  }

  _createClass(PhysicsBodyComponent, [{
    key: "mass",
    get: function get() {
      return this._mass;
    },
    set: function set(data) {
      this._mass = data;
    }
  }, {
    key: "acceleration",
    get: function get() {
      return this._acceleration;
    },
    set: function set(data) {
      this._acceleration = data;
    }
  }, {
    key: "velocity",
    get: function get() {
      return this._velocity;
    },
    set: function set(data) {
      this._velocity = data;
    }
  }]);

  return PhysicsBodyComponent;
}(Component);

var CubeMapComponent = /*#__PURE__*/function (_Component) {
  _inherits(CubeMapComponent, _Component);

  var _super = _createSuper(CubeMapComponent);

  function CubeMapComponent(id, resolution, position) {
    var _this;

    _classCallCheck(this, CubeMapComponent);

    _this = _super.call(this, id, CubeMapComponent.constructor.name);

    _defineProperty(_assertThisInitialized(_this), "_res", 128);

    _defineProperty(_assertThisInitialized(_this), "__cubeMap", void 0);

    _defineProperty(_assertThisInitialized(_this), "_transformationMatrix", Array.from(create$5()));

    _defineProperty(_assertThisInitialized(_this), "_irradiance", true);

    _defineProperty(_assertThisInitialized(_this), "_prefilteredMipmaps", 6);

    _defineProperty(_assertThisInitialized(_this), "radius", 50);

    if (resolution) _this._resolution = resolution;
    if (position) _this.position = position;
    return _this;
  }

  _createClass(CubeMapComponent, [{
    key: "resolution",
    get: function get() {
      return this._res;
    },
    set: function set(data) {
      this._res = data;
    }
  }, {
    key: "cubeMap",
    get: function get() {
      return this.__cubeMap;
    },
    set: function set(data) {
      this.__cubeMap = data;
    }
  }, {
    key: "prefilteredMap",
    get: function get() {
      var _this$__cubeMap;

      return (_this$__cubeMap = this.__cubeMap) === null || _this$__cubeMap === void 0 ? void 0 : _this$__cubeMap.prefiltered;
    }
  }, {
    key: "irradianceMap",
    get: function get() {
      var _this$__cubeMap2;

      return (_this$__cubeMap2 = this.__cubeMap) === null || _this$__cubeMap2 === void 0 ? void 0 : _this$__cubeMap2.irradianceTexture;
    }
  }, {
    key: "prefilteredMipmaps",
    get: function get() {
      return this._prefilteredMipmaps;
    },
    set: function set(data) {
      this._prefilteredMipmaps = data;
    }
  }, {
    key: "irradiance",
    get: function get() {
      return this._irradiance;
    },
    set: function set(data) {
      this._irradiance = data;
    }
  }, {
    key: "transformationMatrix",
    get: function get() {
      return this._transformationMatrix;
    }
  }]);

  return CubeMapComponent;
}(Component);

var cube = [-1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, 1];

var vertex$b = "#version 300 es\nlayout (location = 1) in vec3 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\n\nout vec3 vPosition;\nvoid main() {\n    vPosition = position;\n\n    gl_Position = projectionMatrix * viewMatrix * vec4(vPosition, 1.0);\n}\n\n";
var irradiance = "#version 300 es\nprecision highp float;\n\nout vec4 fragColor;\nin vec3 vPosition;\n\nuniform samplerCube uSampler;\n\nconst float PI = 3.14159265359;\n\nvoid main(){\n    vec3 N = normalize(vPosition);\n\n    vec3 irradiance = vec3(0.0);\n\n    // tangent space calculation from origin point\n    vec3 up    = vec3(0.0, 1.0, 0.0);\n    vec3 right = normalize(cross(up, N));\n    up         = normalize(cross(N, right));\n\n    float sampleDelta = 0.025;\n    float nrSamples = 0.0;\n    for(float phi = 0.0; phi < 2.0 * PI; phi += sampleDelta){\n        for(float theta = 0.0; theta < 0.5 * PI; theta += sampleDelta){\n            vec3 tangentSample = vec3(sin(theta) * cos(phi),  sin(theta) * sin(phi), cos(theta));\n            vec3 sampleVec = tangentSample.x * right + tangentSample.y * up + tangentSample.z * N;\n            irradiance += texture(uSampler, sampleVec).rgb * cos(theta) * sin(theta);\n            nrSamples++;\n        }\n    }\n    irradiance = PI * irradiance * (1.0 / float(nrSamples));\n\n    fragColor = vec4(irradiance, 1.0);\n}\n";
var prefiltered = "#version 300 es\n\nprecision highp float;\n\nout vec4 FragColor;\nin vec3 vPosition;\n\nuniform samplerCube environmentMap;\nuniform float roughness;\n\nconst float PI = 3.14159265359;\n// ----------------------------------------------------------------------------\nfloat DistributionGGX(vec3 N, vec3 H, float roughness)\n{\n    float a = roughness*roughness;\n    float a2 = a*a;\n    float NdotH = max(dot(N, H), 0.0);\n    float NdotH2 = NdotH*NdotH;\n\n    float nom   = a2;\n    float denom = (NdotH2 * (a2 - 1.0) + 1.0);\n    denom = PI * denom * denom;\n\n    return nom / denom;\n}\n// ----------------------------------------------------------------------------\n// http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html\n// efficient VanDerCorpus calculation.\nfloat RadicalInverse_VdC(uint bits)\n{\n    bits = (bits << 16u) | (bits >> 16u);\n    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n    return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n}\n// ----------------------------------------------------------------------------\nvec2 Hammersley(uint i, uint N)\n{\n    return vec2(float(i)/float(N), RadicalInverse_VdC(i));\n}\n// ----------------------------------------------------------------------------\nvec3 ImportanceSampleGGX(vec2 Xi, vec3 N, float roughness)\n{\n    float a = roughness*roughness;\n\n    float phi = 2.0 * PI * Xi.x;\n    float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));\n    float sinTheta = sqrt(1.0 - cosTheta*cosTheta);\n\n    // from spherical coordinates to cartesian coordinates - halfway vector\n    vec3 H;\n    H.x = cos(phi) * sinTheta;\n    H.y = sin(phi) * sinTheta;\n    H.z = cosTheta;\n\n    // from tangent-space H vector to world-space sample vector\n    vec3 up          = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n    vec3 tangent   = normalize(cross(up, N));\n    vec3 bitangent = cross(N, tangent);\n\n    vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;\n    return normalize(sampleVec);\n}\n// ----------------------------------------------------------------------------\nvoid main()\n{\n    vec3 N = normalize(vPosition);\n\n    // make the simplyfying assumption that V equals R equals the normal\n    vec3 R = N;\n    vec3 V = R;\n\n    const uint SAMPLE_COUNT = 1024u;\n    vec3 prefilteredColor = vec3(0.0);\n    float totalWeight = 0.0;\n\n    for(uint i = 0u; i < SAMPLE_COUNT; ++i)\n    {\n        // generates a sample vector that's biased towards the preferred alignment direction (importance sampling).\n        vec2 Xi = Hammersley(i, SAMPLE_COUNT);\n        vec3 H = ImportanceSampleGGX(Xi, N, roughness);\n        vec3 L  = normalize(2.0 * dot(V, H) * H - V);\n\n        float NdotL = max(dot(N, L), 0.0);\n        if(NdotL > 0.0)\n        {\n            // sample from the environment's mip level based on roughness/pdf\n            float D   = DistributionGGX(N, H, roughness);\n            float NdotH = max(dot(N, H), 0.0);\n            float HdotV = max(dot(H, V), 0.0);\n            float pdf = D * NdotH / (4.0 * HdotV) + 0.0001;\n\n            float resolution = 512.0; // resolution of source cubemap (per face)\n            float saTexel  = 4.0 * PI / (6.0 * resolution * resolution);\n            float saSample = 1.0 / (float(SAMPLE_COUNT) * pdf + 0.0001);\n\n            float mipLevel = roughness == 0.0 ? 0.0 : 0.5 * log2(saSample / saTexel);\n\n            prefilteredColor += textureLod(environmentMap, -L, mipLevel).rgb * NdotL;\n            totalWeight      += NdotL;\n        }\n    }\n\n    prefilteredColor = prefilteredColor / totalWeight;\n   \n    FragColor = vec4(prefilteredColor, 1.0);\n}\n";

var CubeMapInstance = /*#__PURE__*/function () {
  function CubeMapInstance(gpu, resolution, asDepth) {
    _classCallCheck(this, CubeMapInstance);

    _defineProperty(this, "texture", void 0);

    _defineProperty(this, "prefiltered", void 0);

    _defineProperty(this, "irradianceTexture", void 0);

    _defineProperty(this, "gpu", void 0);

    _defineProperty(this, "_prefilteredShader", void 0);

    _defineProperty(this, "_res", void 0);

    _defineProperty(this, "__resChanged", void 0);

    this.gpu = gpu;
    if (!asDepth) this._vertexBuffer = new VBO(gpu, 1, new Float32Array(cube), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    this._res = resolution;
    this._prefilteredShader = asDepth ? null : new ShaderInstance(vertex$b, prefiltered, gpu);
    this._irradianceShader = asDepth ? null : new ShaderInstance(vertex$b, irradiance, gpu);
    this._asDepth = asDepth;
  }

  _createClass(CubeMapInstance, [{
    key: "vbo",
    get: function get() {
      return this._vertexBuffer;
    },
    set: function set(_) {}
  }, {
    key: "resolution",
    get: function get() {
      return this._res;
    },
    set: function set(data) {
      this._res = data;
      this.__resChanged = true;
    }
  }, {
    key: "generateIrradiance",
    value: function generateIrradiance() {
      var _this = this;

      if (!this._asDepth) {
        this._irradianceShader.use();

        this.draw(function (yaw, pitch, perspective) {
          _this._vertexBuffer.enable();

          _this._irradianceShader.bindForUse({
            projectionMatrix: perspective,
            viewMatrix: lookAt(yaw, pitch, [0, 0, 0]),
            uSampler: _this.texture
          });

          _this.gpu.drawArrays(_this.gpu.TRIANGLES, 0, 36);
        }, true, undefined, undefined, true);
      }
    }
  }, {
    key: "generatePrefiltered",
    value: function generatePrefiltered() {
      var mipLevels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 128;

      if (!this._asDepth) {
        var perspective$1 = perspective([], 1.57, 1, .1, 10),
            gpu = this.gpu;
        gpu.viewport(0, 0, resolution, resolution);
        this.prefiltered = this._initializeTexture(resolution, true);
        gpu.generateMipmap(gpu.TEXTURE_CUBE_MAP);
        var frameBuffer = gpu.createFramebuffer();
        gpu.bindFramebuffer(gpu.FRAMEBUFFER, frameBuffer);
        var rbo = gpu.createRenderbuffer();
        gpu.bindRenderbuffer(gpu.RENDERBUFFER, rbo);
        gpu.renderbufferStorage(gpu.RENDERBUFFER, gpu.DEPTH_COMPONENT24, resolution, resolution);
        gpu.framebufferRenderbuffer(gpu.FRAMEBUFFER, gpu.DEPTH_ATTACHMENT, gpu.RENDERBUFFER, rbo);

        this._prefilteredShader.use();

        this._vertexBuffer.enable();

        for (var i = 0; i < mipLevels; i++) {
          var currentRes = resolution * Math.pow(0.5, i);
          var roughness = i / (mipLevels - 1);
          gpu.viewport(0, 0, currentRes, currentRes);

          for (var j = 0; j < 6; j++) {
            gpu.renderbufferStorage(gpu.RENDERBUFFER, gpu.DEPTH_COMPONENT24, currentRes, currentRes);
            var rotations = getRotation(j);
            gpu.framebufferTexture2D(gpu.FRAMEBUFFER, gpu.COLOR_ATTACHMENT0, gpu.TEXTURE_CUBE_MAP_POSITIVE_X + j, this.prefiltered, i);

            this._prefilteredShader.bindForUse({
              projectionMatrix: perspective$1,
              viewMatrix: lookAt(rotations.yaw, rotations.pitch, [0, 0, 0]),
              roughness: roughness,
              environmentMap: this.texture
            });

            gpu.drawArrays(gpu.TRIANGLES, 0, 36);
          }
        }

        this._vertexBuffer.disable();

        this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, null);
        this.gpu.bindRenderbuffer(this.gpu.RENDERBUFFER, null);
        this.gpu.bindTexture(this.gpu.TEXTURE_2D, null);
        this.gpu.bindTexture(this.gpu.TEXTURE_CUBE_MAP, null);
        this.gpu.deleteFramebuffer(frameBuffer);
        this.gpu.deleteRenderbuffer(rbo);
        return this;
      } else return this;
    }
  }, {
    key: "draw",
    value: function draw(callback, useVBO) {
      var zFar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var zNear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .1;
      var asIrradiance = arguments.length > 4 ? arguments[4] : undefined;
      var resolution = asIrradiance ? 32 : this._res,
          texture;
      var perspective$1 = perspective([], Math.PI / 2, 1, zNear, zFar),
          gpu = this.gpu,
          frameBuffer = gpu.createFramebuffer();
      gpu.bindFramebuffer(gpu.FRAMEBUFFER, frameBuffer);
      gpu.viewport(0, 0, resolution, resolution);
      var rbo = gpu.createRenderbuffer();
      gpu.bindRenderbuffer(gpu.RENDERBUFFER, rbo);
      gpu.renderbufferStorage(gpu.RENDERBUFFER, gpu.DEPTH_COMPONENT24, resolution, resolution);
      gpu.framebufferRenderbuffer(gpu.FRAMEBUFFER, gpu.DEPTH_ATTACHMENT, gpu.RENDERBUFFER, rbo);

      if (!asIrradiance) {
        if (!this.texture || this.__resChanged) this.texture = this._initializeTexture(resolution);
        this.__resChanged = false;
        texture = this.texture;
      } else {
        if (!this.irradianceTexture) this.irradianceTexture = this._initializeTexture(resolution);
        texture = this.irradianceTexture;
      }

      if (useVBO && !this._asDepth) this._vertexBuffer.enable();

      for (var i = 0; i < 6; i++) {
        var rotations = getRotation(i);
        gpu.framebufferTexture2D(gpu.FRAMEBUFFER, this._asDepth ? gpu.DEPTH_ATTACHMENT : gpu.COLOR_ATTACHMENT0, gpu.TEXTURE_CUBE_MAP_POSITIVE_X + i, texture, 0);
        gpu.clear(gpu.COLOR_BUFFER_BIT | gpu.DEPTH_BUFFER_BIT);
        callback(rotations.yaw, rotations.pitch, perspective$1, i);
      }

      if (useVBO && !this._asDepth) this._vertexBuffer.disable(); // gpu.bindFramebuffer(gpu.FRAMEBUFFER, null)
      // gpu.bindRenderbuffer(gpu.RENDERBUFFER, null)
      // gpu.bindTexture(gpu.TEXTURE_2D, null)
      // gpu.bindTexture(gpu.TEXTURE_CUBE_MAP, null)

      gpu.deleteFramebuffer(frameBuffer);
      gpu.deleteRenderbuffer(rbo);
      return this;
    }
  }, {
    key: "_initializeTexture",
    value: function _initializeTexture(resolution, mipmap) {
      var gpu = this.gpu;
      gpu.viewport(0, 0, resolution, resolution);
      var texture = gpu.createTexture();
      gpu.bindTexture(gpu.TEXTURE_CUBE_MAP, texture);
      gpu.texParameteri(gpu.TEXTURE_CUBE_MAP, gpu.TEXTURE_MAG_FILTER, this._asDepth ? gpu.NEAREST : gpu.LINEAR);
      gpu.texParameteri(gpu.TEXTURE_CUBE_MAP, gpu.TEXTURE_MIN_FILTER, this._asDepth ? gpu.NEAREST : mipmap ? gpu.LINEAR_MIPMAP_LINEAR : gpu.LINEAR);
      gpu.texParameteri(gpu.TEXTURE_CUBE_MAP, gpu.TEXTURE_WRAP_S, gpu.CLAMP_TO_EDGE);
      gpu.texParameteri(gpu.TEXTURE_CUBE_MAP, gpu.TEXTURE_WRAP_T, gpu.CLAMP_TO_EDGE);
      gpu.texParameteri(gpu.TEXTURE_CUBE_MAP, gpu.TEXTURE_WRAP_R, gpu.CLAMP_TO_EDGE);
      var d = [{
        access: gpu.TEXTURE_CUBE_MAP_POSITIVE_X
      }, {
        access: gpu.TEXTURE_CUBE_MAP_NEGATIVE_X
      }, {
        access: gpu.TEXTURE_CUBE_MAP_POSITIVE_Y
      }, {
        access: gpu.TEXTURE_CUBE_MAP_NEGATIVE_Y
      }, {
        access: gpu.TEXTURE_CUBE_MAP_POSITIVE_Z
      }, {
        access: gpu.TEXTURE_CUBE_MAP_NEGATIVE_Z
      }];

      for (var i = 0; i < 6; i++) {
        gpu.texImage2D(d[i].access, 0, this._asDepth ? gpu.DEPTH_COMPONENT32F : gpu.RGBA16F, resolution, resolution, 0, this._asDepth ? gpu.DEPTH_COMPONENT : gpu.RGBA, gpu.FLOAT, null);
      }

      return texture;
    }
  }]);

  return CubeMapInstance;
}();

function getRotation(index) {
  switch (index) {
    case 0:
      return {
        yaw: 1.57,
        pitch: 0
      };

    case 1:
      return {
        yaw: -1.57,
        pitch: 0
      };

    case 2:
      return {
        yaw: Math.PI,
        pitch: -1.57
      };

    case 3:
      return {
        yaw: Math.PI,
        pitch: 1.57
      };

    case 4:
      return {
        yaw: Math.PI,
        pitch: 0
      };

    case 5:
      return {
        yaw: 0,
        pitch: 0
      };

    default:
      return {
        yaw: 0,
        pitch: 0
      };
  }
}

var CameraComponent = /*#__PURE__*/function (_Component) {
  _inherits(CameraComponent, _Component);

  var _super = _createSuper(CameraComponent);

  function CameraComponent(id) {
    var _this;

    _classCallCheck(this, CameraComponent);

    _this = _super.call(this, id);

    _defineProperty(_assertThisInitialized(_this), "fov", 1.57);

    _defineProperty(_assertThisInitialized(_this), "aspectRatio", 1);

    _defineProperty(_assertThisInitialized(_this), "zFar", 10000);

    _defineProperty(_assertThisInitialized(_this), "zNear", .1);

    return _this;
  }

  return _createClass(CameraComponent);
}(Component);

var RootCameraInstance = /*#__PURE__*/function () {
  function RootCameraInstance() {
    _classCallCheck(this, RootCameraInstance);

    _defineProperty(this, "position", [0, 10, 0]);

    _defineProperty(this, "rotation", [0, 0, 0, 1]);

    _defineProperty(this, "zNear", .1);

    _defineProperty(this, "zFar", 1000);

    _defineProperty(this, "fov", Math.PI / 2);

    _defineProperty(this, "aspectRatio", 1);

    _defineProperty(this, "viewMatrix", create$5());

    _defineProperty(this, "projectionMatrix", create$5());

    _defineProperty(this, "centerOn", [0, 0, 0]);

    this.updateProjection();
    this.updateViewMatrix();
  }

  _createClass(RootCameraInstance, [{
    key: "updateProjection",
    value: function updateProjection() {
      perspective(this.projectionMatrix, this.fov, this.aspectRatio, this.zNear, this.zFar);
    }
  }, {
    key: "getNotTranslatedViewMatrix",
    value: function getNotTranslatedViewMatrix() {
      var m = _toConsumableArray(this.viewMatrix).flat();

      m[12] = m[13] = m[14] = 0;
      return m;
    }
  }, {
    key: "updateViewMatrix",
    value: function updateViewMatrix() {
      fromRotationTranslation$1(this.viewMatrix, this.rotation, this.position);
      invert$3(this.viewMatrix, this.viewMatrix);
    }
  }]);

  return RootCameraInstance;
}();

var System = /*#__PURE__*/function () {
  function System() {

    _classCallCheck(this, System);
  }

  _createClass(System, [{
    key: "updateFBOResolution",
    value: function updateFBOResolution() {}
  }, {
    key: "execute",
    value: function execute() {}
  }, {
    key: "_find",
    value: function _find(elements, compare) {
      var found = [];

      for (var i = 0; i < elements.length; i++) {
        if (compare(elements[i])) found.push(elements[i]);
      }

      return found;
    }
  }]);

  return System;
}();

var vertex$a = "#version 300 es\n#define MAX_LIGHTS 4\n\nlayout (location = 0) in vec3 position;\n \n \nout vec2 texCoord; \n \nvoid main() {\n\n    texCoord = position.xy * 0.5 + 0.5;\n    gl_Position = vec4(position, 1);\n}    \n\n\n";
var fragment$a = "#version 300 es\nprecision highp float;\n\n#define MAX_LIGHTS 4\n#define MAX_POINT_LIGHTS 24\n#define CELLSIZE 2.25\n#define PI 3.14159265359\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n\nin vec2 texCoord;\n\nuniform mat3 directionalLightsData[MAX_LIGHTS];\nuniform mat4 dirLightPOV[MAX_LIGHTS];\nuniform vec3 cameraVec;\nuniform mat4 pointLightData[MAX_POINT_LIGHTS];\nuniform mat3 settings;\n//[\n//    dirLightQuantity, shadowMapResolution, indirectLightAttenuation,\n//    gridSize, noGI, lightQuantity,\n//    noShadowProcessing, shadowMapsQuantity, 0\n//] \n\nuniform samplerCube shadowCube0;\nuniform samplerCube shadowCube1;\nuniform sampler2D positionSampler;\nuniform sampler2D normalSampler;\nuniform sampler2D albedoSampler;\nuniform sampler2D behaviourSampler;\nuniform sampler2D ambientSampler;\nuniform sampler2D emissiveSampler;\nuniform sampler2D redIndirectSampler;\nuniform sampler2D greenIndirectSampler;\nuniform sampler2D blueIndirectSampler;\nuniform sampler2D shadowMapTexture;\nout vec4 finalColor;\n\n\n\n@import(distributionGGX)\n\n@import(geometrySchlickGGX)\n\n@import(geometrySmith)\n\n@import(fresnelSchlick)\n\n@import(fresnelSchlickRoughness)\n\n@import(computeDirectionalLight)\n\n@import(GI)\n\n@import(calculateShadows)\n\n@import(computePointLight)\n\nvoid main() {\n    float shadowMapsQuantity = settings[2][1];\n    int dirLightQuantity = int(settings[0][0]);\n    float shadowMapResolution = settings[0][1];\n    float indirectLightAttenuation = settings[0][2];\n    int gridSize = int(settings[1][0]);\n    bool noGI = settings[1][1] == 1.;\n    bool noShadowProcessing = settings[2][0] == 1.; \n    int lightQuantity = int(settings[1][2]);\n\n    ivec2 fragCoord = ivec2(gl_FragCoord.xy);\n    vec3 fragPosition = texture(positionSampler, texCoord).rgb;\n    if (fragPosition.x == 0.0 && fragPosition.y == 0.0 && fragPosition.z == 0.0)\n        discard;\n\n    vec3 emissive = texture(emissiveSampler, texCoord).rgb;\n    vec3 color;\n    if(length(emissive) <= 1.){\n        vec3 V = normalize(cameraVec - fragPosition);\n        vec3 albedo = texture(albedoSampler, texCoord).rgb;\n        vec3 N = texture(normalSampler, texCoord).rgb;\n        vec3 ambient = texture(ambientSampler, texCoord).rgb;\n        float ao = texture(behaviourSampler, texCoord).r;\n     \n        float roughness = texture(behaviourSampler, texCoord).g;\n        float metallic =texture(behaviourSampler, texCoord).b;\n        \n        float NdotV    = max(dot(N, V), 0.000001);\n        vec3 F0 = vec3(0.04);\n        vec3 Lo = vec3(0.0);\n        vec3 GI = vec3(0.);\n        \n        F0 = mix(F0, albedo, metallic);\n        \n        if(noGI == false){\n            vec3 lpvIntensity = computeGIIntensity(fragPosition, N, gridSize);\n            vec3 lpvRadiance = vec3(max(0.0, lpvIntensity.r), max(0.0, lpvIntensity.g), max(0.0, lpvIntensity.b)) / PI;\n            GI = (lpvRadiance * albedo * ao) * indirectLightAttenuation;\n        }\n    \n        float shadows = dirLightQuantity > 0 || lightQuantity > 0?  0. : 1.0;\n        float quantityToDivide = float(dirLightQuantity) + float(lightQuantity);\n\n         for (int i = 0; i < dirLightQuantity; i++){\n            vec4 fragPosLightSpace  = dirLightPOV[i] * vec4(fragPosition, 1.0);\n            vec3 lightDir =  normalize(vec3(directionalLightsData[i][0][0], directionalLightsData[i][0][1],directionalLightsData[i][0][2]));\n            vec3 lightColor =  vec3(directionalLightsData[i][1][0], directionalLightsData[i][1][1],directionalLightsData[i][1][2]);\n            vec2 atlasFace = vec2(directionalLightsData[i][2][0], directionalLightsData[i][2][1]);    \n            \n            Lo += computeDirectionalLight(\n                V,\n                F0,\n                lightDir,\n                lightColor,\n                fragPosition,\n                roughness,\n                metallic,\n                N,\n                albedo\n            );\n            if(directionalLightsData[i][2][2] == 1. && noShadowProcessing == false)\n                shadows += calculateShadows(fragPosLightSpace, atlasFace, shadowMapTexture, shadowMapsQuantity, shadowMapResolution)/quantityToDivide;\n            else\n                shadows += 1./quantityToDivide;            \n        }\n       \n        for (int i = 0; i < lightQuantity; ++i){\n            vec4 currentLightData = computePointLights(pointLightData[i],  fragPosition, V, N, quantityToDivide, roughness, metallic, albedo, F0, i);\n            Lo += currentLightData.rgb;\n            float zNear = pointLightData[i][3][0];\n            float zFar = pointLightData[i][3][1];\n            vec3 positionPLight = vec3(pointLightData[i][0][0], pointLightData[i][0][1], pointLightData[i][0][2]);\n            if(currentLightData.a == 1. && i <= 2 && noShadowProcessing == false)\n                shadows += pointLightShadow(fragPosition, positionPLight, i, vec2(zNear, zFar))/quantityToDivide;\n            else\n                shadows += 1./quantityToDivide;            \n        }\n      \n        Lo = Lo* shadows; \n        color = (ambient  + Lo +  GI + emissive);\n    }\n    else\n        color = emissive ;\n \n    if(noShadowProcessing == true)\n        finalColor = vec4(1., 0., 0., 1.0);\n    else\n        finalColor = vec4(color, 1.0);\n}\n";

var vertex$9 = "#version 300 es\nlayout (location = 0) in vec3 position;\nout vec2 texCoord;\n\nvoid main() {\n    texCoord = (position.xy) * 0.5 + 0.5;\n    gl_Position = vec4(position, 1);\n}    \n\n";
var fragment$9 = "#version 300 es\nprecision highp float;\nin vec2 texCoord;\n\nuniform sampler2D positionSampler;\nuniform sampler2D albedoSampler;\n\nout vec4 finalColor;\n\n\nvoid main() {\n    ivec2 fragCoord = ivec2(gl_FragCoord.xy);\n\n    vec3 fragPosition = texelFetch(positionSampler, fragCoord, 0).xyz;\n    if (fragPosition.x == 0.0 && fragPosition.y == 0.0 && fragPosition.z == 0.0)\n        discard;     \n    finalColor = vec4(texture(albedoSampler, texCoord).rgb, 1.0);\n}\n";

var SHADING_MODELS = {
  FLAT: 0,
  DETAIL: 1,
  WIREFRAME: 2
};

var DeferredSystem = /*#__PURE__*/function (_System) {
  _inherits(DeferredSystem, _System);

  var _super = _createSuper(DeferredSystem);

  function DeferredSystem(gpu) {
    var _this;

    _classCallCheck(this, DeferredSystem);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.deferredShader = new ShaderInstance(vertex$a, fragment$a, gpu);
    _this.flatDeferredShader = new ShaderInstance(vertex$9, fragment$9, gpu);
    return _this;
  }

  _createClass(DeferredSystem, [{
    key: "_getDeferredShader",
    value: function _getDeferredShader(shadingModel) {
      switch (shadingModel) {
        case SHADING_MODELS.FLAT:
          return this.flatDeferredShader;

        case SHADING_MODELS.DETAIL:
          return this.deferredShader;

        case SHADING_MODELS.WIREFRAME:
          return this.flatDeferredShader;

        default:
          return this.deferredShader;
      }
    }
  }, {
    key: "execute",
    value: function execute(options, systems, data, giGridSize, giFBO) {
      var _shadowMapSystem$shad, _shadowMapSystem$cube, _shadowMapSystem$cube2;

      _get(_getPrototypeOf(DeferredSystem.prototype), "execute", this).call(this);

      var pointLightsQuantity = data.pointLightsQuantity,
          maxTextures = data.maxTextures,
          directionalLightsData = data.directionalLightsData,
          dirLightPOV = data.dirLightPOV,
          pointLightData = data.pointLightData,
          skylight = data.skylight;
      var camera = options.camera;
          options.gamma;
          options.exposure;
          var shadingModel = options.shadingModel;

      _get(_getPrototypeOf(DeferredSystem.prototype), "execute", this).call(this);

      var shadowMapSystem = systems[SYSTEMS.SHADOWS],
          deferredSystem = systems[SYSTEMS.MESH];
      var mutableData = {
        shadowMapResolution: 1,
        shadowMapsQuantity: 1,
        indirectLightAttenuation: 1
      };

      if (shadowMapSystem) {
        mutableData.shadowMapResolution = shadowMapSystem.maxResolution;
        mutableData.shadowMapsQuantity = shadowMapSystem.maxResolution / shadowMapSystem.resolutionPerTexture;
      }

      var deferred = this._getDeferredShader(shadingModel);

      if (skylight) {
        directionalLightsData.push(skylight);
        mutableData.indirectLightAttenuation = skylight === null || skylight === void 0 ? void 0 : skylight.attenuation;
      }

      deferred.use();
      deferred.bindForUse({
        positionSampler: deferredSystem.frameBuffer.colors[0],
        normalSampler: deferredSystem.frameBuffer.colors[1],
        albedoSampler: deferredSystem.frameBuffer.colors[2],
        behaviourSampler: deferredSystem.frameBuffer.colors[3],
        ambientSampler: deferredSystem.frameBuffer.colors[4],
        emissiveSampler: deferredSystem.frameBuffer.colors[5],
        shadowMapTexture: shadowMapSystem === null || shadowMapSystem === void 0 ? void 0 : (_shadowMapSystem$shad = shadowMapSystem.shadowsFrameBuffer) === null || _shadowMapSystem$shad === void 0 ? void 0 : _shadowMapSystem$shad.depthSampler,
        redIndirectSampler: giFBO === null || giFBO === void 0 ? void 0 : giFBO.colors[0],
        greenIndirectSampler: giFBO === null || giFBO === void 0 ? void 0 : giFBO.colors[1],
        blueIndirectSampler: giFBO === null || giFBO === void 0 ? void 0 : giFBO.colors[2],
        shadowCube0: shadowMapSystem === null || shadowMapSystem === void 0 ? void 0 : (_shadowMapSystem$cube = shadowMapSystem.cubeMaps[0]) === null || _shadowMapSystem$cube === void 0 ? void 0 : _shadowMapSystem$cube.texture,
        shadowCube1: shadowMapSystem === null || shadowMapSystem === void 0 ? void 0 : (_shadowMapSystem$cube2 = shadowMapSystem.cubeMaps[1]) === null || _shadowMapSystem$cube2 === void 0 ? void 0 : _shadowMapSystem$cube2.texture,
        cameraVec: camera.position,
        settings: [maxTextures, mutableData.shadowMapResolution, mutableData.indirectLightAttenuation, giGridSize ? giGridSize : 1, giFBO ? 0 : 1, pointLightsQuantity, shadowMapSystem ? 0 : 1, mutableData.shadowMapsQuantity, 0],
        directionalLightsData: directionalLightsData,
        dirLightPOV: dirLightPOV,
        pointLightData: pointLightData
      });
      deferredSystem.frameBuffer.draw();
    }
  }]);

  return DeferredSystem;
}(System);

var vertex$8 = "#version 300 es\nlayout (location = 0) in vec3 position;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nout highp vec3 texCoord;\n\n\nvoid main(){\n    texCoord = position;\n    \n    mat4 m = viewMatrix ;\n   m[3][0]  = 0.0;\n   m[3][1]  = 0.0;\n   m[3][2]  = 0.0;\n\n    gl_Position = projectionMatrix * m * vec4(position, 1.0);\n}\n";
var fragment$8 = "#version 300 es\n\nprecision mediump float;\n\nin highp vec3 texCoord;\n\n\nuniform float gamma;\nuniform float exposure;\nuniform samplerCube uTexture;\n\nout vec4 finalColor;\nvoid main(void){\n\n    vec3 fragment = vec3(1.0) - exp(-texture(uTexture, texCoord).rgb * exposure);\n    fragment = pow(fragment, vec3(1.0/gamma));\n\n    finalColor = vec4(fragment, 1.);\n}\n";
var generationFragment = "#version 300 es\nprecision highp float;\nin vec3 vPosition;\n\nuniform sampler2D uSampler;\n\nout vec4 fragColor;\n\nconst vec2 invAtan = vec2(0.1591, 0.3183);\nvec2 sampleMapTexture(vec3 v){\n    vec2 uv = vec2(atan(v.z, v.x), asin(v.y));\n    uv *= invAtan;\n    uv += 0.5;\n\n    return uv;\n}\n\nvoid main() {\n    vec2 uv = sampleMapTexture(normalize(vPosition));\n    vec3 color = texture(uSampler, uv.xy).rgb;\n    fragColor = vec4(color, 1.0);\n}\n\n";

var SkyboxSystem = /*#__PURE__*/function (_System) {
  _inherits(SkyboxSystem, _System);

  var _super = _createSuper(SkyboxSystem);

  function SkyboxSystem(gpu) {
    var _this;

    _classCallCheck(this, SkyboxSystem);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.shader = new ShaderInstance(vertex$8, fragment$8, gpu);
    _this.vao = createVAO(gpu);
    _this._vertexBuffer = new VBO(gpu, 0, new Float32Array(cube), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    return _this;
  }

  _createClass(SkyboxSystem, [{
    key: "execute",
    value: function execute(data, options) {
      _get(_getPrototypeOf(SkyboxSystem.prototype), "execute", this).call(this);

      var skybox = data.skybox;
      var camera = options.camera,
          isOrtho = options.isOrtho;

      if (skybox && skybox.ready && !isOrtho) {
        this.gpu.depthMask(false);
        this.shader.use();
        this.gpu.bindVertexArray(this.vao);

        this._vertexBuffer.enable();

        this.shader.bindForUse({
          uTexture: skybox.cubeMap.texture,
          projectionMatrix: camera.projectionMatrix,
          viewMatrix: camera.viewMatrix,
          gamma: skybox.gamma,
          exposure: skybox.exposure
        });
        this.gpu.drawArrays(this.gpu.TRIANGLES, 0, 36);

        this._vertexBuffer.disable();

        this.gpu.depthMask(true);
      }
    }
  }]);

  return SkyboxSystem;
}(System);

var vertex$7 = "#version 300 es\nprecision highp float;\n\nlayout (location = 0) in vec2 a_cell_index;\nuniform highp int u_grid_size;\nflat out ivec2 v_cell_index;\n\nvec2 get_grid_output_position()\n{\n    vec2 offset_position = a_cell_index + vec2(0.5);\n    float f_grid_size = float(u_grid_size);\n\n    return vec2((2.0 * offset_position.x) / (f_grid_size * f_grid_size), (2.0 * offset_position.y) / f_grid_size) - vec2(1.0);\n}\n\nvoid main() \n{\n    vec2 screen_pos = get_grid_output_position();\n    v_cell_index = ivec2(a_cell_index);\n    gl_PointSize = 1.0;\n    gl_Position = vec4(screen_pos, 0.0, 1.0);\n}\n";
var fragment$7 = "#version 300 es\nprecision highp float;\n\n#define PI 3.1415926\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n#define SH_cosLobe_C0 0.886226925\n#define SH_cosLobe_C1 1.02332671\n#define CELLSIZE 2.25\n\nflat in ivec2 v_cell_index;\n\nuniform highp int u_grid_size;\nuniform sampler2D u_red_contribution;\nuniform sampler2D u_green_contribution;\nuniform sampler2D u_blue_contribution;\nuniform sampler2D u_red_geometry_volume;\nuniform sampler2D u_green_geometry_volume;\nuniform sampler2D u_blue_geometry_volume;\nuniform bool u_first_iteration;\n\n\nlayout(location = 0) out vec4 o_red_color;\nlayout(location = 1) out vec4 o_green_color;\nlayout(location = 2) out vec4 o_blue_color;\nlayout(location = 3) out vec4 o_next_iteration_red_color;\nlayout(location = 4) out vec4 o_next_iteration_green_color;\nlayout(location = 5) out vec4 o_next_iteration_blue_color;\n\n\n\nvec4 red_contribution = vec4(0.0);\nvec4 green_contribution = vec4(0.0);\nvec4 blue_contribution = vec4(0.0);\nfloat occlusion_amplifier = 1.0f;\n\nconst mat3 neighbourOrientations[6] = mat3[] (\n    mat3(1, 0, 0,0, 1, 0,0, 0, 1),\n    mat3(-1, 0, 0,0, 1, 0,0, 0, -1),\n    mat3(0, 0, 1,0, 1, 0,-1, 0, 0),\n    mat3(0, 0, -1,0, 1, 0,1, 0, 0),\n    mat3(1, 0, 0,0, 0, 1,0, -1, 0),\n    mat3(1, 0, 0,0, 0, -1,0, 1, 0)\n);\nconst ivec2 sideFaces[4] = ivec2[] (\n    ivec2(1, 0),\n    ivec2(0, 1),\n    ivec2(-1, 0),\n    ivec2(0, -1)\n);\n\nvec3 get_eval_side_direction(int index, mat3 orientation)\n{\n    const float small_component = 0.4472135;\n    const float big_component = 0.894427;\n\n    vec2 current_side = vec2(sideFaces[index]);\n    return orientation * vec3(current_side.x * small_component, current_side.y * small_component, big_component);\n}\n\nvec3 get_reproj_side_direction(int index, mat3 orientation)\n{\n    ivec2 current_side = sideFaces[index];\n    return orientation * vec3(current_side.x, current_side.y, 0);\n}\n\nvec4 evalCosineLobeToDir(vec3 dir)\n{\n    return vec4( SH_cosLobe_C0, -SH_cosLobe_C1 * dir.y, SH_cosLobe_C1 * dir.z, -SH_cosLobe_C1 * dir.x );\n}\n\nvec4 dirToSH(vec3 dir)\n{\n    return vec4(SH_C0, -SH_C1 * dir.y, SH_C1 * dir.z, -SH_C1 * dir.x);\n}\n\n\nvoid propagate()\n{\n    const float direct_face_solid_angle = 0.4006696846 / PI;\n    const float side_face_solid_angle = 0.4234413544 / PI;\n\n    for (int neighbour = 0; neighbour < 6; neighbour++)\n    {\n        mat3 orientation = neighbourOrientations[neighbour];\n        vec3 direction = orientation * vec3(0.0, 0.0, 1.0);\n\n        ivec2 index_offset = ivec2(\n            direction.x + (direction.z * float(u_grid_size)), \n            direction.y\n        );\n\n        ivec2 neighbour_index = v_cell_index - index_offset;\n\n        vec4 red_contribution_neighbour = texelFetch(u_red_contribution, neighbour_index, 0);\n        vec4 green_contribution_neighbour = texelFetch(u_green_contribution, neighbour_index, 0);\n        vec4 blue_contribution_neighbour = texelFetch(u_blue_contribution, neighbour_index, 0);\n\n        float red_occlusion_val = 1.0;\n        float green_occlusion_val = 1.0;\n        float blue_occlusion_val = 1.0;\n\n        if (!u_first_iteration) {\n            vec3 h_direction = 0.5 * direction;\n            ivec2 offset = ivec2(\n                h_direction.x + (h_direction.z * float(u_grid_size)),\n                h_direction.y\n            );\n            ivec2 occ_coord = v_cell_index - offset;\n\n            vec4 red_occ_coeffs = texelFetch(u_red_geometry_volume, occ_coord, 0);\n            vec4 green_occ_coeffs = texelFetch(u_green_geometry_volume, occ_coord, 0);\n            vec4 blue_occ_coeffs = texelFetch(u_blue_geometry_volume, occ_coord, 0);\n\n            red_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(red_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n            green_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(green_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n            blue_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(blue_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n        }\n\n        float occluded_direct_face_red_contribution = red_occlusion_val * direct_face_solid_angle;\n        float occluded_direct_face_green_contribution = green_occlusion_val * direct_face_solid_angle;\n        float occluded_direct_face_blue_contribution = blue_occlusion_val * direct_face_solid_angle;\n\n        vec4 direction_cosine_lobe = evalCosineLobeToDir(direction);\n        vec4 direction_spherical_harmonic = dirToSH(direction);\n\n        red_contribution += occluded_direct_face_red_contribution * max(0.0, dot(red_contribution_neighbour, direction_spherical_harmonic)) * direction_cosine_lobe;\n        green_contribution += occluded_direct_face_green_contribution * max(0.0, dot( green_contribution_neighbour, direction_spherical_harmonic)) * direction_cosine_lobe;\n        blue_contribution += occluded_direct_face_blue_contribution * max(0.0, dot(blue_contribution_neighbour, direction_spherical_harmonic)) * direction_cosine_lobe;\n\n        // Add contributions of faces of neighbour\n        for (int face = 0; face < 4; face++)\n        {\n            vec3 eval_direction = get_eval_side_direction(face, orientation);\n            vec3 reproj_direction = get_reproj_side_direction(face, orientation);\n\n            // No occlusion in the first step\n            if (!u_first_iteration) {\n                vec3 h_direction = 0.5 * direction;\n                ivec2 offset = ivec2(\n                    h_direction.x + (h_direction.z * float(u_grid_size)),\n                    h_direction.y\n                );\n                ivec2 occ_coord = v_cell_index - offset;\n\n                vec4 red_occ_coeffs = texelFetch(u_red_geometry_volume, occ_coord, 0);\n                vec4 green_occ_coeffs = texelFetch(u_green_geometry_volume, occ_coord, 0);\n                vec4 blue_occ_coeffs = texelFetch(u_blue_geometry_volume, occ_coord, 0);\n\n                red_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(red_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n                green_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(green_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n                blue_occlusion_val = 1.0 - clamp(occlusion_amplifier * dot(blue_occ_coeffs, dirToSH(-direction)), 0.0, 1.0);\n            }\n\n            float occluded_side_face_red_contribution = red_occlusion_val * side_face_solid_angle;\n            float occluded_side_face_green_contribution = green_occlusion_val * side_face_solid_angle;\n            float occluded_side_face_blue_contribution = blue_occlusion_val * side_face_solid_angle;\n\n            vec4 reproj_direction_cosine_lobe = evalCosineLobeToDir(reproj_direction);\n            vec4 eval_direction_spherical_harmonic = dirToSH(eval_direction);\n            \n            red_contribution += occluded_side_face_red_contribution * max(0.0, dot(red_contribution_neighbour, eval_direction_spherical_harmonic)) * reproj_direction_cosine_lobe;\n            green_contribution += occluded_side_face_green_contribution * max(0.0, dot(green_contribution_neighbour, eval_direction_spherical_harmonic)) * reproj_direction_cosine_lobe;\n            blue_contribution += occluded_side_face_blue_contribution * max(0.0, dot(blue_contribution_neighbour, eval_direction_spherical_harmonic)) * reproj_direction_cosine_lobe;\n        }\n    }\n}\n\nvoid main()\n{\n    propagate();\n\n    o_red_color = red_contribution;\n    o_green_color = green_contribution;\n    o_blue_color = blue_contribution;\n\n    o_next_iteration_red_color = red_contribution;\n    o_next_iteration_green_color = green_contribution;\n    o_next_iteration_blue_color = blue_contribution;\n}\n";

var Quad = /*#__PURE__*/function () {
  function Quad(gpu) {
    _classCallCheck(this, Quad);

    this.gpu = gpu;
    this.vao = createVAO(gpu);
    this.vbo = new VBO(gpu, 0, new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0]), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
  }

  _createClass(Quad, [{
    key: "draw",
    value: function draw() {
      this.gpu.bindVertexArray(this.vao);
      this.vbo.enable();
      this.gpu.drawArrays(this.gpu.TRIANGLES, 0, 6);
    }
  }]);

  return Quad;
}();

var FramebufferInstance = /*#__PURE__*/function (_Quad) {
  _inherits(FramebufferInstance, _Quad);

  var _super = _createSuper(FramebufferInstance);

  function FramebufferInstance(gpu) {
    var _this;

    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.screen.width;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.screen.height;

    _classCallCheck(this, FramebufferInstance);

    _this = _super.call(this, gpu);

    _defineProperty(_assertThisInitialized(_this), "FBO", void 0);

    _defineProperty(_assertThisInitialized(_this), "RBO", void 0);

    _defineProperty(_assertThisInitialized(_this), "depthSampler", void 0);

    _defineProperty(_assertThisInitialized(_this), "colors", []);

    _defineProperty(_assertThisInitialized(_this), "attachments", []);

    _this.gpu = gpu;
    _this.width = width;
    _this.height = height;
    _this.FBO = gpu.createFramebuffer();
    _this.fallback = {
      w: _this.width,
      h: _this.height,
      attachment: 0,
      precision: _this.gpu.RGBA16F,
      format: _this.gpu.RGBA,
      type: _this.gpu.FLOAT,
      linear: false,
      repeat: false,
      flip: false
    };
    return _this;
  }

  _createClass(FramebufferInstance, [{
    key: "startMapping",
    value: function startMapping() {
      var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.FBO;
      var autoSetViewport = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (autoSetViewport) this.gpu.viewport(0, 0, this.width, this.height);
      this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, buffer);
      if (clear) this.gpu.clear(this.gpu.COLOR_BUFFER_BIT | this.gpu.DEPTH_BUFFER_BIT);
    }
  }, {
    key: "stopMapping",
    value: function stopMapping() {
      var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, null);

      if (clear) {
        var _this$gpu;

        (_this$gpu = this.gpu) === null || _this$gpu === void 0 ? void 0 : _this$gpu.viewport(0, 0, this.gpu.drawingBufferWidth, this.gpu.drawingBufferHeight);
      }
    }
  }, {
    key: "draw",
    value: function draw(shader) {
      _get(_getPrototypeOf(FramebufferInstance.prototype), "draw", this).call(this);
    }
  }, {
    key: "depthTexture",
    value: function depthTexture() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.gpu.DEPTH_COMPONENT32F;
      this.use();
      this.depthSampler = createTexture(this.gpu, this.width, this.height, precision, 0, this.gpu.DEPTH_COMPONENT, this.gpu.FLOAT, null, this.gpu.NEAREST, this.gpu.NEAREST, this.gpu.CLAMP_TO_EDGE, this.gpu.CLAMP_TO_EDGE, true);
      this.gpu.framebufferTexture2D(this.gpu.FRAMEBUFFER, this.gpu.DEPTH_ATTACHMENT, this.gpu.TEXTURE_2D, this.depthSampler, 0);
      return this;
    }
  }, {
    key: "depthTest",
    value: function depthTest() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.gpu.DEPTH_COMPONENT24;
      this.use();
      this.RBO = createRBO(this.gpu, this.width, this.height, precision, this.gpu.DEPTH_ATTACHMENT);
      return this;
    }
  }, {
    key: "texture",
    value: function texture(obj) {
      var _this$fallback$obj = _objectSpread2(_objectSpread2({}, this.fallback), obj),
          w = _this$fallback$obj.w,
          h = _this$fallback$obj.h,
          attachment = _this$fallback$obj.attachment,
          precision = _this$fallback$obj.precision,
          format = _this$fallback$obj.format,
          type = _this$fallback$obj.type,
          linear = _this$fallback$obj.linear,
          repeat = _this$fallback$obj.repeat,
          flip = _this$fallback$obj.flip;

      this.use();
      var texture = this.gpu.createTexture();
      if (flip === true) this.gpu.pixelStorei(this.gpu.UNPACK_FLIP_Y_WEBGL, true);
      this.gpu.bindTexture(this.gpu.TEXTURE_2D, texture);
      this.gpu.texParameteri(this.gpu.TEXTURE_2D, this.gpu.TEXTURE_MAG_FILTER, linear ? this.gpu.LINEAR : this.gpu.NEAREST);
      this.gpu.texParameteri(this.gpu.TEXTURE_2D, this.gpu.TEXTURE_MIN_FILTER, linear ? this.gpu.LINEAR : this.gpu.NEAREST);
      this.gpu.texParameteri(this.gpu.TEXTURE_2D, this.gpu.TEXTURE_WRAP_S, repeat ? this.gpu.REPEAT : this.gpu.CLAMP_TO_EDGE);
      this.gpu.texParameteri(this.gpu.TEXTURE_2D, this.gpu.TEXTURE_WRAP_T, repeat ? this.gpu.REPEAT : this.gpu.CLAMP_TO_EDGE);
      this.gpu.texImage2D(this.gpu.TEXTURE_2D, 0, precision, w, h, 0, format, type, null);
      this.gpu.framebufferTexture2D(this.gpu.FRAMEBUFFER, this.gpu.COLOR_ATTACHMENT0 + attachment, this.gpu.TEXTURE_2D, texture, 0);
      this.colors.push(texture);
      this.attachments[attachment] = this.gpu.COLOR_ATTACHMENT0 + attachment;
      this.gpu.drawBuffers(this.attachments);
      return this;
    }
  }, {
    key: "appendTexture",
    value: function appendTexture(texture) {
      var attachment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var rebind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var resetDrawBuffers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (rebind) this.use();
      this.gpu.framebufferTexture2D(this.gpu.FRAMEBUFFER, this.gpu.COLOR_ATTACHMENT0 + attachment, this.gpu.TEXTURE_2D, texture, 0);
      this.attachments[attachment] = this.gpu.COLOR_ATTACHMENT0 + attachment;
      if (resetDrawBuffers) this.gpu.drawBuffers(this.attachments);
    }
  }, {
    key: "use",
    value: function use() {
      this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, this.FBO);
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, this.FBO);
      this.gpu.clear(this.gpu.COLOR_BUFFER_BIT | this.gpu.DEPTH_BUFFER_BIT | this.gpu.STENCIL_BUFFER_BIT);
    }
  }]);

  return FramebufferInstance;
}(Quad);

var PropagationSystem = /*#__PURE__*/function (_System) {
  _inherits(PropagationSystem, _System);

  var _super = _createSuper(PropagationSystem);

  function PropagationSystem(gpu) {
    var _this;

    _classCallCheck(this, PropagationSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "size", 512);

    _defineProperty(_assertThisInitialized(_this), "framebufferSize", 32);

    _this.gpu = gpu;
    _this.shader = new ShaderInstance(vertex$7, fragment$7, gpu);
    _this.propagationFramebuffer = new FramebufferInstance(gpu, Math.pow(_this.framebufferSize, 2), _this.framebufferSize);
    _this.accumulatedBuffer = new FramebufferInstance(gpu, Math.pow(_this.framebufferSize, 2), _this.framebufferSize);

    _this.propagationFramebuffer.texture({
      attachment: 0,
      linear: true,
      repeat: true
    }).texture({
      attachment: 1,
      linear: true,
      repeat: true
    }).texture({
      attachment: 2,
      linear: true,
      repeat: true
    });

    _this.accumulatedBuffer.texture({
      attachment: 0,
      linear: true,
      repeat: true
    }).texture({
      attachment: 1,
      linear: true,
      repeat: true
    }).texture({
      attachment: 2,
      linear: true,
      repeat: true
    });

    var positionData = new Float32Array(_this.framebufferSize * _this.framebufferSize * _this.framebufferSize * 2);
    var positionIndex = 0;

    for (var x = 0; x < _this.framebufferSize * _this.framebufferSize; x++) {
      for (var y = 0; y < _this.framebufferSize; y++) {
        positionData[positionIndex++] = x;
        positionData[positionIndex++] = y;
      }
    }

    _this.propagation = GlobalIlluminationSystem.createPointsData(positionData, _this.gpu);
    _this.ready = true;
    return _this;
  }

  _createClass(PropagationSystem, [{
    key: "execute",
    value: function execute(_ref) {
      var iterations = _ref.iterations;
          _ref.skylight;
          var lightInjectionFBO = _ref.lightInjectionFBO,
          geometryInjectionFBO = _ref.geometryInjectionFBO;
      var LPVS = [lightInjectionFBO, this.propagationFramebuffer];
      var lpvIndex;
      this.gpu.viewport(0, 0, Math.pow(this.framebufferSize, 2), this.framebufferSize);
      this.gpu.disable(this.gpu.DEPTH_TEST);
      this.gpu.enable(this.gpu.BLEND);
      this.gpu.blendFunc(this.gpu.ONE, this.gpu.ONE);
      this.shader.use();

      for (var i = 0; i < iterations; i++) {
        lpvIndex = i & 1;
        var readLPV = LPVS[lpvIndex];
        var nextIterationLPV = LPVS[lpvIndex ^ 1];
        this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, nextIterationLPV.FBO);
        this.gpu.clear(this.gpu.COLOR_BUFFER_BIT | this.gpu.DEPTH_BUFFER_BIT | this.gpu.STENCIL_BUFFER_BIT);
        this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, null);

        this._lightPropagationIteration(i, readLPV, nextIterationLPV, geometryInjectionFBO);
      }
    }
  }, {
    key: "_drawTargets",
    value: function _drawTargets(currentBuffer) {
      this.accumulatedBuffer.appendTexture(currentBuffer.colors[0], 3, true, false);
      this.accumulatedBuffer.appendTexture(currentBuffer.colors[1], 4, false, false);
      this.accumulatedBuffer.appendTexture(currentBuffer.colors[2], 5, false, true);
    }
  }, {
    key: "_lightPropagationIteration",
    value: function _lightPropagationIteration(iteration, readLPV, nextIterationLPV, geometryInjectionFBO) {
      this._drawTargets(nextIterationLPV);

      this.shader.bindForUse({
        u_grid_size: this.framebufferSize,
        u_red_contribution: readLPV.colors[0],
        u_green_contribution: readLPV.colors[1],
        u_blue_contribution: readLPV.colors[2],
        u_red_geometry_volume: geometryInjectionFBO.colors[0],
        u_green_geometry_volume: geometryInjectionFBO.colors[1],
        u_blue_geometry_volume: geometryInjectionFBO.colors[2],
        u_first_iteration: iteration <= 0
      });
      this.gpu.bindVertexArray(this.propagation.pointArray);
      this.gpu.enableVertexAttribArray(0);
      this.gpu.bindBuffer(this.gpu.ARRAY_BUFFER, this.propagation.pointPositions);
      this.gpu.vertexAttribPointer(0, 2, this.gpu.FLOAT, false, 8, 0);
      this.gpu.drawArrays(this.gpu.POINTS, 0, this.propagation.dataLength);
    }
  }]);

  return PropagationSystem;
}(System);

var vertex$6 = "#version 300 es\nprecision highp float;\n\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n#define SH_cosLobe_C0 0.886226925\n#define SH_cosLobe_C1 1.02332671\n#define CELLSIZE 2.25\n\nlayout(location = 0) in vec2 a_point_position;\n\nuniform lowp int u_grid_size;\nuniform lowp int u_rsm_size;\n\nuniform sampler2D u_rsm_flux;\nuniform sampler2D u_rsm_world_positions;\nuniform sampler2D u_rsm_world_normals;\n\n\nstruct RSMTexel\n{\n    vec3 world_position;\n    vec3 world_normal;\n    vec4 flux;\n};\nout RSMTexel v_rsm_texel;\n\nvec3 getGridCellf(vec3 world_space_position, int _max_grid_size)\n{\n    const vec3 center = vec3(0);\n    vec3 max_grid_size = vec3(_max_grid_size);\n    vec3 min = center - vec3(max_grid_size * 0.5 * CELLSIZE);\n    return vec3((world_space_position - min) / CELLSIZE);\n}\nivec3 getGridCelli(vec3 world_space_position, int max_grid_size)\n{\n    return ivec3(getGridCellf(world_space_position, max_grid_size));\n}\nRSMTexel get_rsm_texel(ivec2 texCoord) \n{\n    RSMTexel texel;\n    texel.world_normal = texelFetch(u_rsm_world_normals, texCoord, 0).xyz;\n    texel.world_position = texelFetch(u_rsm_world_positions, texCoord, 0).xyz + 0.5 * CELLSIZE * texel.world_normal;\n    texel.flux = texelFetch(u_rsm_flux, texCoord, 0);\n    return texel;\n}\nvec2 get_grid_output_position(ivec3 gridCell)\n{\n    float f_texture_size = float(u_grid_size);\n    vec2 tex_coords = vec2((gridCell.x % u_grid_size) + u_grid_size * gridCell.z, gridCell.y) + vec2(0.5);\n    vec2 ndc = vec2((2.0 * tex_coords.x) / (f_texture_size * f_texture_size), (2.0 * tex_coords.y) / f_texture_size) - vec2(1.0);\n    return ndc;\n}\n\nvoid main()\n{\n    ivec2 rsm_tex_coords = ivec2(gl_VertexID % u_rsm_size, gl_VertexID / u_rsm_size);\n    v_rsm_texel = get_rsm_texel(rsm_tex_coords);\n    ivec3 grid_cell = getGridCelli(v_rsm_texel.world_position, u_grid_size);\n    vec2 tex_coord = get_grid_output_position(grid_cell);\n    gl_PointSize = 1.0;\n    gl_Position = vec4(tex_coord, 0.0, 1.0);\n}\n\n";
var fragment$6 = "#version 300 es\nprecision highp float;\n\n#define PI 3.1415926\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n#define SH_cosLobe_C0 0.886226925\n#define SH_cosLobe_C1 1.02332671\n#define CELLSIZE 2.25\n\n\nstruct RSMTexel {\n    vec3 world_position;\n    vec3 world_normal;\n    vec4 flux;\n};\nin RSMTexel v_rsm_texel;\n\nuniform lowp int u_grid_size;\nuniform lowp int u_rsm_size;\n\nlayout(location = 0) out vec4 o_red_color;\nlayout(location = 1) out vec4 o_green_color;\nlayout(location = 2) out vec4 o_blue_color;\n\nvec4 evalCosineLobeToDir(vec3 dir)\n{\n    return vec4( SH_cosLobe_C0, -SH_cosLobe_C1 * dir.y, SH_cosLobe_C1 * dir.z, -SH_cosLobe_C1 * dir.x );\n}\n\nvoid main()\n{\n    float surfelWeight = float(u_grid_size) / float(u_rsm_size);\n    vec4 SH_coeffs = (evalCosineLobeToDir(v_rsm_texel.world_normal) / PI) * surfelWeight;\n    vec4 shR = SH_coeffs * v_rsm_texel.flux.r;\n    vec4 shG = SH_coeffs * v_rsm_texel.flux.g;\n    vec4 shB = SH_coeffs * v_rsm_texel.flux.b;\n\n    o_red_color = shR;\n    o_green_color = shG;\n    o_blue_color = shB;\n}\n\n";

var vertex$5 = "#version 300 es\n\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n#define SH_cosLobe_C0 0.886226925\n#define SH_cosLobe_C1 1.02332671\n#define CELLSIZE 2.25\n \n \nuniform int u_texture_size;\nuniform int u_rsm_size;\nuniform vec3 u_light_direction;\nuniform sampler2D u_rsm_flux;\nuniform sampler2D u_rsm_world_positions;\nuniform sampler2D u_rsm_world_normals;\n\nstruct RSMTexel \n{\n    vec3 world_position;\n    vec3 world_normal;\n    vec4 flux;\n};\n\nout RSMTexel v_rsm_texel;\nout float surfel_area;\n\n\n\nvec3 getGridCellf(vec3 world_space_position, int _max_grid_size)\n{\n    const vec3 center = vec3(0);\n    vec3 max_grid_size = vec3(_max_grid_size);\n    vec3 min = center - vec3(max_grid_size * 0.5 * CELLSIZE);\n    return vec3((world_space_position - min) / CELLSIZE);\n}\n\nivec3 getGridCelli(vec3 world_space_position, int max_grid_size)\n{\n    return ivec3(getGridCellf(world_space_position, max_grid_size));\n}\n\nRSMTexel getRSMTexel(ivec2 texCoord) \n{\n    RSMTexel texel;\n    texel.world_normal = texelFetch(u_rsm_world_normals, texCoord, 0).xyz;\n    texel.world_position = texelFetch(u_rsm_world_positions, texCoord, 0).xyz + 0.5 * texel.world_normal;\n    texel.flux = texelFetch(u_rsm_flux, texCoord, 0);\n    return texel;\n}\n\n\nvec2 getRenderingTexCoords(ivec3 gridCell)\n{\n    float f_texture_size = float(u_texture_size);\n    vec2 tex_coords = vec2((gridCell.x % u_texture_size) + u_texture_size * gridCell.z, gridCell.y) + vec2(0.5);\n    vec2 ndc = vec2((2.0 * tex_coords.x) / (f_texture_size * f_texture_size), (2.0 * tex_coords.y) / f_texture_size) - vec2(1.0);\n    return ndc;\n}\n\nfloat calculateSurfelAreaLight(vec3 lightPos)\n{\n    float fov = 0.785398;\n    float aspect = float(u_rsm_size / u_rsm_size);\n    float tan_fov_x_half = tan(fov);\n    float tan_fov_y_half = tan(fov) * aspect;\n\n    return (4.0 * lightPos.z * lightPos.z * tan_fov_x_half * tan_fov_y_half) / float(u_rsm_size * u_rsm_size);\n}\n\nvoid main()\n{\n    ivec2 rsm_tex_coords = ivec2(gl_VertexID % u_rsm_size, gl_VertexID / u_rsm_size);\n    v_rsm_texel = getRSMTexel(rsm_tex_coords);\n    ivec3 v_grid_cell = getGridCelli(v_rsm_texel.world_position, u_texture_size);\n    vec2 tex_coord = getRenderingTexCoords(v_grid_cell);\n    gl_PointSize = 1.0;\n    gl_Position = vec4(tex_coord, 0.0, 1.0);\n    surfel_area = calculateSurfelAreaLight(u_light_direction);\n}\n\n";
var fragment$5 = "#version 300 es\nprecision highp float;\n\n#define SH_C0 0.282094791\n#define SH_C1 0.488602512\n#define SH_cosLobe_C0 0.886226925\n#define SH_cosLobe_C1 1.02332671\n#define CELLSIZE 2.25\n\nstruct RSMTexel {\n    vec3 world_position;\n    vec3 world_normal;\n    vec4 flux;\n};\nin RSMTexel v_rsm_texel;\nin float surfel_area;\n\nuniform vec3 u_light_direction;\n\nlayout(location = 0) out vec4 o_red_color;\nlayout(location = 1) out vec4 o_green_color;\nlayout(location = 2) out vec4 o_blue_color;\n\nvec4 evalCosineLobeToDir(vec3 dir)\n{\n    return vec4( SH_cosLobe_C0, -SH_cosLobe_C1 * dir.y, SH_cosLobe_C1 * dir.z, -SH_cosLobe_C1 * dir.x );\n}\nvec4 dirToSH(vec3 dir)\n{\n    return vec4(SH_C0, -SH_C1 * dir.y, SH_C1 * dir.z, -SH_C1 * dir.x);\n}\nfloat calculateBlockingPotencial(vec3 dir, vec3 normal)\n{\n    return clamp((surfel_area * clamp(dot(normal, dir), 0.0, 1.0)) / (CELLSIZE * CELLSIZE), 0.0, 1.0);\n}\n\nvoid main()\n{\n    if (length(v_rsm_texel.world_normal) < .01)\n        discard;\n\n    vec3 light_dir = normalize(u_light_direction - v_rsm_texel.world_position);\n    float blocking_potencial = calculateBlockingPotencial(light_dir, v_rsm_texel.world_normal);\n\n    vec4 SH_coeffs = evalCosineLobeToDir(v_rsm_texel.world_normal) * blocking_potencial;\n    vec4 shR = SH_coeffs * v_rsm_texel.flux.r;\n    vec4 shG = SH_coeffs * v_rsm_texel.flux.g;\n    vec4 shB = SH_coeffs * v_rsm_texel.flux.b;\n\n    o_red_color = shR;\n    o_green_color = shG;\n    o_blue_color = shB;\n}\n";

var InjectionSystem = /*#__PURE__*/function (_System) {
  _inherits(InjectionSystem, _System);

  var _super = _createSuper(InjectionSystem);

  function InjectionSystem(gpu) {
    var _this;

    _classCallCheck(this, InjectionSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "size", 512);

    _defineProperty(_assertThisInitialized(_this), "framebufferSize", 32);

    _this.gpu = gpu;
    _this.lightInjectionShader = new ShaderInstance(vertex$6, fragment$6, gpu);
    _this.geometryInjectionShader = new ShaderInstance(vertex$5, fragment$5, gpu);
    _this.injectionFramebuffer = new FramebufferInstance(gpu, Math.pow(_this.framebufferSize, 2), _this.framebufferSize);
    _this.geometryInjectionFramebuffer = new FramebufferInstance(gpu, Math.pow(_this.framebufferSize, 2), _this.framebufferSize);

    _this.injectionFramebuffer.texture({
      attachment: 0,
      linear: true,
      repeat: true
    }).texture({
      attachment: 1,
      linear: true,
      repeat: true
    }).texture({
      attachment: 2,
      linear: true,
      repeat: true
    });

    _this.geometryInjectionFramebuffer.texture({
      attachment: 0,
      linear: true,
      repeat: true
    }).texture({
      attachment: 1,
      linear: true,
      repeat: true
    }).texture({
      attachment: 2,
      linear: true,
      repeat: true
    });

    _this.injection = GlobalIlluminationSystem.createPointsData(GlobalIlluminationSystem.createInjectionPointCloud(_this.size), _this.gpu);
    return _this;
  }

  _createClass(InjectionSystem, [{
    key: "execute",
    value: function execute(rsmFBO, direction, step) {
      this.gpu.viewport(0, 0, Math.pow(this.framebufferSize, 2), this.framebufferSize);
      this.gpu.disable(this.gpu.DEPTH_TEST);
      this.gpu.enable(this.gpu.BLEND);
      this.gpu.blendFunc(this.gpu.ONE, this.gpu.ONE);

      if (step === STEPS.LIGHT_INJECTION) {
        this.injectionFramebuffer.use();
        this.lightInjectionShader.use();
        this.lightInjectionShader.bindForUse({
          u_rsm_world_normals: rsmFBO.colors[0],
          u_rsm_flux: rsmFBO.colors[1],
          u_rsm_world_positions: rsmFBO.colors[2],
          u_rsm_size: this.size,
          u_grid_size: this.framebufferSize
        });

        this._draw();
      } else {
        this.geometryInjectionFramebuffer.use();
        this.gpu.viewport(0, 0, Math.pow(this.framebufferSize, 2), this.framebufferSize);
        this.geometryInjectionShader.use();
        this.geometryInjectionShader.bindForUse({
          u_rsm_world_normals: rsmFBO.colors[0],
          u_rsm_flux: rsmFBO.colors[1],
          u_rsm_world_positions: rsmFBO.colors[2],
          u_rsm_size: this.size,
          u_light_direction: direction,
          u_texture_size: this.framebufferSize
        });

        this._draw();
      }
    }
  }, {
    key: "_draw",
    value: function _draw() {
      this.gpu.bindVertexArray(this.injection.pointArray);
      this.gpu.enableVertexAttribArray(0);
      this.gpu.bindBuffer(this.gpu.ARRAY_BUFFER, this.injection.pointPositions);
      this.gpu.vertexAttribPointer(0, 2, this.gpu.FLOAT, false, 8, 0);
      this.gpu.drawArrays(this.gpu.POINTS, 0, this.injection.dataLength / 2);
    }
  }]);

  return InjectionSystem;
}(System);

var STEPS = {
  LIGHT_INJECTION: 0,
  GEOMETRY_INJECTION: 1,
  LIGHT_PROPAGATION: 2,
  DONE: 3
};

var GlobalIlluminationSystem = /*#__PURE__*/function (_System) {
  _inherits(GlobalIlluminationSystem, _System);

  var _super = _createSuper(GlobalIlluminationSystem);

  function GlobalIlluminationSystem(gpu) {
    var _this;

    _classCallCheck(this, GlobalIlluminationSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "step", STEPS.LIGHT_INJECTION);

    _this.gpu = gpu;
    _this.samplesAmmount = 32;
    _this.injectionSystem = new InjectionSystem(gpu);
    _this.lightPropagationSystem = new PropagationSystem(gpu);
    return _this;
  }

  _createClass(GlobalIlluminationSystem, [{
    key: "size",
    get: function get() {
      return this.samplesAmmount;
    }
  }, {
    key: "accumulatedBuffer",
    get: function get() {
      return this.lightPropagationSystem.accumulatedBuffer;
    }
  }, {
    key: "execute",
    value: function execute(shadowMapSystem, skylight, noRSM) {
      _get(_getPrototypeOf(GlobalIlluminationSystem.prototype), "execute", this).call(this);

      if (shadowMapSystem && shadowMapSystem.needsGIUpdate && skylight && !noRSM) {
        this.step = STEPS.LIGHT_INJECTION;
        shadowMapSystem.needsGIUpdate = false;
      }

      if (noRSM || !skylight) this.step = STEPS.DONE;

      if (this.step !== STEPS.DONE) {
        switch (this.step) {
          case STEPS.LIGHT_INJECTION:
            this._clear();

            this.injectionSystem.execute(shadowMapSystem.rsmFramebuffer, skylight.direction, this.step);
            this.step = STEPS.GEOMETRY_INJECTION;
            break;

          case STEPS.GEOMETRY_INJECTION:
            this.injectionSystem.execute(shadowMapSystem.rsmFramebuffer, skylight.direction, this.step);
            this.step = STEPS.LIGHT_PROPAGATION;
            break;

          case STEPS.LIGHT_PROPAGATION:
            this.lightPropagationSystem.execute({
              iterations: skylight.lpvSamples,
              skylight: skylight,
              lightInjectionFBO: this.injectionSystem.injectionFramebuffer,
              geometryInjectionFBO: this.injectionSystem.geometryInjectionFramebuffer
            });
            this.step = STEPS.DONE;
            break;

          default:
            this.step = STEPS.DONE;
            break;
        }

        this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, null);
        this.gpu.clear(this.gpu.COLOR_BUFFER_BIT | this.gpu.DEPTH_BUFFER_BIT);
        this.gpu.enable(this.gpu.DEPTH_TEST);
        this.gpu.blendFunc(this.gpu.SRC_ALPHA, this.gpu.ONE_MINUS_SRC_ALPHA);
      }
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.gpu.disable(this.gpu.BLEND);
      this.gpu.viewport(0, 0, Math.pow(this.framebufferSize, 2), this.framebufferSize);
      this.lightPropagationSystem.accumulatedBuffer.clear();
      this.injectionSystem.geometryInjectionFramebuffer.clear();
      this.injectionSystem.injectionFramebuffer.clear();
      this.gpu.bindFramebuffer(this.gpu.FRAMEBUFFER, null);
    }
  }], [{
    key: "createPointsData",
    value: function createPointsData(positionData, gpu) {
      var pointPositions = gpu.createBuffer();
      gpu.bindBuffer(gpu.ARRAY_BUFFER, pointPositions);
      gpu.bufferData(gpu.ARRAY_BUFFER, positionData, gpu.STATIC_DRAW);
      var pointArray = gpu.createVertexArray();
      gpu.bindVertexArray(pointArray);
      gpu.bindBuffer(gpu.ARRAY_BUFFER, pointPositions);
      gpu.vertexAttribPointer(0, 2, gpu.FLOAT, false, 8, 0);
      gpu.enableVertexAttribArray(0);
      gpu.bindVertexArray(null);
      gpu.bindBuffer(gpu.ARRAY_BUFFER, null);
      return {
        dataLength: positionData.length,
        pointArray: pointArray,
        pointPositions: pointPositions
      };
    }
  }, {
    key: "createInjectionPointCloud",
    value: function createInjectionPointCloud(size) {
      var positionData = new Float32Array(size * size * 2);
      var positionIndex = 0;

      for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
          positionData[positionIndex++] = x;
          positionData[positionIndex++] = y;
        }
      }

      return positionData;
    }
  }]);

  return GlobalIlluminationSystem;
}(System);

var ForwardSystem = /*#__PURE__*/function (_System) {
  _inherits(ForwardSystem, _System);

  var _super = _createSuper(ForwardSystem);

  function ForwardSystem(gpu) {
    var _this;

    _classCallCheck(this, ForwardSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "lastMaterial", void 0);

    _defineProperty(_assertThisInitialized(_this), "cubeMapsConsumeMap", {});

    _this.gpu = gpu;
    return _this;
  }

  _createClass(ForwardSystem, [{
    key: "execute",
    value: function execute(options, systems, data, sceneColor) {
      var _systems$SYSTEMS$CUBE;

      _get(_getPrototypeOf(ForwardSystem.prototype), "execute", this).call(this);

      var meshes = data.meshes,
          skybox = data.skybox,
          materials = data.materials,
          meshSources = data.meshSources,
          cubeMapsSources = data.cubeMapsSources,
          pointLightsQuantity = data.pointLightsQuantity,
          maxTextures = data.maxTextures,
          directionalLightsData = data.directionalLightsData,
          dirLightPOV = data.dirLightPOV,
          pointLightData = data.pointLightData;
      var elapsed = options.elapsed,
          camera = options.camera,
          fallbackMaterial = options.fallbackMaterial,
          brdf = options.brdf;
      var toConsumeCubeMaps = (_systems$SYSTEMS$CUBE = systems[SYSTEMS.CUBE_MAP]) === null || _systems$SYSTEMS$CUBE === void 0 ? void 0 : _systems$SYSTEMS$CUBE.cubeMapsConsumeMap;
      this.lastMaterial = undefined;

      for (var m = 0; m < meshes.length; m++) {
        var current = meshes[m];
        var mesh = meshSources[current.components[COMPONENTS.MESH].meshID];

        if (mesh !== undefined) {
          var t = current.components[COMPONENTS.TRANSFORM];
          var currentMaterial = materials[current.components[COMPONENTS.MATERIAL].materialID];
          var mat = currentMaterial && currentMaterial.ready ? currentMaterial : fallbackMaterial;
          if (!mat || !mat.ready) mat = fallbackMaterial;
          var c = toConsumeCubeMaps ? toConsumeCubeMaps[current.id] : undefined;
          var cubeMapToApply = void 0,
              ambient = {};
          if (c) cubeMapToApply = cubeMapsSources[c];

          if (cubeMapToApply) {
            var cube = cubeMapToApply.components[COMPONENTS.CUBE_MAP];
            ambient.irradianceMap = cube.irradiance ? cube.irradianceMap : skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.irradianceTexture;
            ambient.prefilteredMap = cube.prefilteredMap;
            ambient.prefilteredLod = cube.prefilteredMipmaps;
          } else if (skybox && skybox.cubeMap !== undefined) {
            ambient.irradianceMap = skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.irradianceTexture;
            ambient.prefilteredMap = skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.prefiltered;
            ambient.prefilteredLod = 6;
          }

          this.drawMesh(mesh, camera.position, camera.viewMatrix, camera.projectionMatrix, t.transformationMatrix, mat, current.components[COMPONENTS.MESH].normalMatrix, current.components[COMPONENTS.MATERIAL], brdf, maxTextures, directionalLightsData, dirLightPOV, pointLightsQuantity, pointLightData, elapsed, ambient.irradianceMap, ambient.prefilteredMap, ambient.prefilteredLod, sceneColor);
        }
      }
    }
  }, {
    key: "drawMesh",
    value: function drawMesh(mesh, camPosition, viewMatrix, projectionMatrix, transformMatrix, material, normalMatrix, materialComponent, brdf, directionalLightsQuantity, directionalLightsData, dirLightPOV, pointLightsQuantity, pointLightData, elapsed, closestIrradiance, closestPrefiltered, prefilteredLod, sceneColor) {
      var _material$settings;

      if (material && (_material$settings = material.settings) !== null && _material$settings !== void 0 && _material$settings.isForwardShaded) {
        var _material$settings2, _material$settings3, _material$settings4, _material$settings5, _material$settings6, _material$settings7, _material$settings8, _material$settings9, _material$settings10, _material$settings11, _material$settings12, _material$settings13, _material$settings14;

        mesh.use();
        material.use(this.lastMaterial !== material.id, _objectSpread2({
          projectionMatrix: projectionMatrix,
          transformMatrix: transformMatrix,
          viewMatrix: viewMatrix,
          normalMatrix: normalMatrix,
          sceneColor: sceneColor,
          brdfSampler: brdf,
          elapsedTime: elapsed,
          cameraVec: camPosition,
          irradianceMap: closestIrradiance,
          prefilteredMapSampler: closestPrefiltered,
          ambientLODSamples: prefilteredLod,
          directionalLightsData: directionalLightsData,
          directionalLightsQuantity: directionalLightsQuantity,
          dirLightPOV: dirLightPOV,
          lightQuantity: pointLightsQuantity,
          pointLightData: pointLightData
        }, materialComponent.overrideMaterial ? materialComponent.uniformValues : {}));
        this.lastMaterial = material.id;
        if ((_material$settings2 = material.settings) !== null && _material$settings2 !== void 0 && _material$settings2.doubleSided) this.gpu.disable(this.gpu.CULL_FACE);else if ((_material$settings3 = material.settings) !== null && _material$settings3 !== void 0 && _material$settings3.cullFace) this.gpu.cullFace(this.gpu[(_material$settings4 = material.settings) === null || _material$settings4 === void 0 ? void 0 : _material$settings4.cullFace]);
        if (!((_material$settings5 = material.settings) !== null && _material$settings5 !== void 0 && _material$settings5.depthMask)) this.gpu.depthMask(false);
        if (!((_material$settings6 = material.settings) !== null && _material$settings6 !== void 0 && _material$settings6.depthTest)) this.gpu.disable(this.gpu.DEPTH_TEST);
        if (!((_material$settings7 = material.settings) !== null && _material$settings7 !== void 0 && _material$settings7.blend)) this.gpu.disable(this.gpu.BLEND);else if ((_material$settings8 = material.settings) !== null && _material$settings8 !== void 0 && _material$settings8.blendFunc) this.gpu.blendFunc(this.gpu[(_material$settings9 = material.settings) === null || _material$settings9 === void 0 ? void 0 : _material$settings9.blendFuncSource], this.gpu[(_material$settings10 = material.settings) === null || _material$settings10 === void 0 ? void 0 : _material$settings10.blendFuncTarget]);
        this.gpu.drawElements(this.gpu.TRIANGLES, mesh.verticesQuantity, this.gpu.UNSIGNED_INT, 0);
        if ((_material$settings11 = material.settings) !== null && _material$settings11 !== void 0 && _material$settings11.doubleSided) this.gpu.enable(this.gpu.CULL_FACE);
        if (!((_material$settings12 = material.settings) !== null && _material$settings12 !== void 0 && _material$settings12.depthMask)) this.gpu.depthMask(true);
        if (!((_material$settings13 = material.settings) !== null && _material$settings13 !== void 0 && _material$settings13.depthTest)) this.gpu.enable(this.gpu.DEPTH_TEST);
        if (!((_material$settings14 = material.settings) !== null && _material$settings14 !== void 0 && _material$settings14.blend)) this.gpu.enable(this.gpu.BLEND);
        mesh.finish();
      }
    }
  }]);

  return ForwardSystem;
}(System);

var vertex$4 = "#version 300 es\nlayout (location = 0) in vec3 position;\nout vec2 vTexcoord;\n \n\nvoid main() {\n    vTexcoord = (position.xy) * 0.5 + 0.5;\n    gl_Position = vec4(position, 1.0);\n}    \n";
var AMDFSR1 = "#version 300 es\nprecision highp float;\n/*\n* FidelityFX Super Resolution scales up a low resolution\n* image, while adding fine detail.\n*\n* MIT Open License\n*\n* https://gpuopen.com/fsr\n*\n* Left: FSR processed\n* Right: Original texture, bilinear interpolation\n*\n* Mouse at top: Sharpness 0 stops (maximum)\n* Mouse at bottom: Sharpness 2 stops (minimum)\n*\n* It works in two passes-\n*   EASU upsamples the image with a clamped Lanczos kernel.\n*   RCAS sharpens the image at the target resolution.\n*\n* I needed to make a few changes to improve readability and\n* WebGL compatibility in an algorithm I don't fully understand.\n* Expect bugs.\n*\n* Shader not currently running for WebGL1 targets (eg. mobile Safari)\n*\n* There is kind of no point to using FSR in Shadertoy, as it renders buffers\n* at full target resolution. But this might be useful for WebGL based demos\n* running smaller-than-target render buffers.\n*\n* For sharpening with a full resolution render buffer,\n* FidelityFX CAS is a better option.\n* https://www.shadertoy.com/view/ftsXzM\n*\n* For readability and compatibility, these optimisations have been removed:\n*   * Fast approximate inverse and inversesqrt\n*   * textureGather fetches (not WebGL compatible)\n*   * Multiplying by reciprocal instead of division\n*\n* Apologies to AMD for the numerous slowdowns and errors I have introduced.\n*\n*/\n\n/***** RCAS *****/\n#define FSR_RCAS_LIMIT (0.25-(1.0/16.0))\n//#define FSR_RCAS_DENOISE\n\n// Input callback prototypes that need to be implemented by calling shader\n\n\nin vec2 vTexcoord;\nuniform sampler2D uSampler;\nout vec4 finalColor;\n\nvec4 FsrRcasLoadF(vec2 p);\n//------------------------------------------------------------------------------------------------------------------------------\nvoid FsrRcasCon(\n    out float con,\n    // The scale is {0.0 := maximum, to N>0, where N is the number of stops (halving) of the reduction of sharpness}.\n    float sharpness\n){\n    // Transform from stops to linear value.\n    con = exp2(-sharpness);\n}\n\nvec3 FsrRcasF(\n    vec2 ip, // Integer pixel position in output.\n   float con)\n{\n    // Constant generated by RcasSetup().\n    // Algorithm uses minimal 3x3 pixel neighborhood.\n    //    b \n    //  d e f\n    //    h\n    vec2 sp = vec2(ip);\n    vec3 b = FsrRcasLoadF(sp + vec2( 0.,-1.)).rgb;\n    vec3 d = FsrRcasLoadF(sp + vec2(-1., 0.)).rgb;\n    vec3 e = FsrRcasLoadF(sp).rgb;\n    vec3 f = FsrRcasLoadF(sp+vec2( 1., 0.)).rgb;\n    vec3 h = FsrRcasLoadF(sp+vec2( 0., 1.)).rgb;\n    // Luma times 2.\n    float bL = b.g + .5 * (b.b + b.r);\n    float dL = d.g + .5 * (d.b + d.r);\n    float eL = e.g + .5 * (e.b + e.r);\n    float fL = f.g + .5 * (f.b + f.r);\n    float hL = h.g + .5 * (h.b + h.r);\n    // Noise detection.\n    float nz = .25 * (bL + dL + fL + hL) - eL;\n    nz=clamp(\n        abs(nz)\n        /(\n            max(max(bL,dL),max(eL,max(fL,hL)))\n            -min(min(bL,dL),min(eL,min(fL,hL)))\n        ),\n        0., 1.\n    );\n    nz=1.-.5*nz;\n    // Min and max of ring.\n    vec3 mn4 = min(b, min(f, h));\n    vec3 mx4 = max(b, max(f, h));\n    // Immediate constants for peak range.\n    vec2 peakC = vec2(1., -4.);\n    // Limiters, these need to be high precision RCPs.\n    vec3 hitMin = mn4 / (4. * mx4);\n    vec3 hitMax = (peakC.x - mx4) / (4.* mn4 + peakC.y);\n    vec3 lobeRGB = max(-hitMin, hitMax);\n    float lobe = max(\n        -FSR_RCAS_LIMIT,\n        min(max(lobeRGB.r, max(lobeRGB.g, lobeRGB.b)), 0.)\n    )*con;\n    // Apply noise removal.\n    #ifdef FSR_RCAS_DENOISE\n    lobe *= nz;\n    #endif\n    // Resolve, which needs the medium precision rcp approximation to avoid visible tonality changes.\n    return (lobe * (b + d + h + f) + e) / (4. * lobe + 1.);\n} \n\n\nvec4 FsrRcasLoadF(vec2 p) {\n    return texture(uSampler,vTexcoord);\n} \n\nvoid main(){\n    float con;\n    float sharpness = 0.2;\n\n    FsrRcasCon(con,sharpness);\n    \n    vec3 fragment = FsrRcasF(gl_FragCoord.xy, con);   \n    finalColor = vec4(fragment, 1.);\n}\n";
var fragment$4 = "#version 300 es\nprecision highp float;\n\nin vec2 vTexcoord;\n\nuniform sampler2D uSampler;\nuniform vec3 inverseFilterTextureSize;\n\nuniform ivec2 enabled ;// [fxaa, filmGrain]\nuniform  vec4 settings; //[FXAASpanMax, FXAAReduceMin, FXAAReduceMul, amountFilmGrain]\nuniform vec3 colorGrading; //[gamma, exposure, elapsed]\n\n\nout vec4 finalColor;\n\nvec3 FXAA(){\n    float fxaaSpanMax = 8.0;\n    float fxaaReduceMin = 1.0/128.0;\n    float fxaaReduceMul = 1.0/8.0;\n\n    vec2 texCoordOffset = inverseFilterTextureSize.xy;\n\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaTL = dot(luma, texture(uSampler, vTexcoord.xy + (vec2(-1.0, -1.0) * texCoordOffset)).xyz);\n    float lumaTR = dot(luma, texture(uSampler, vTexcoord.xy + (vec2(1.0, -1.0) * texCoordOffset)).xyz);\n    float lumaBL = dot(luma, texture(uSampler, vTexcoord.xy + (vec2(-1.0, 1.0) * texCoordOffset)).xyz);\n    float lumaBR = dot(luma, texture(uSampler, vTexcoord.xy + (vec2(1.0, 1.0) * texCoordOffset)).xyz);\n    float lumaM  = dot(luma, texture(uSampler, vTexcoord.xy).xyz);\n\n    vec2 dir;\n    dir.x = -((lumaTL + lumaTR) - (lumaBL + lumaBR));\n    dir.y = ((lumaTL + lumaBL) - (lumaTR + lumaBR));\n\n    float dirReduce = max((lumaTL + lumaTR + lumaBL + lumaBR) * (fxaaReduceMul * 0.25), fxaaReduceMin);\n    float inverseDirAdjustment = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);\n\n    dir = min(vec2(fxaaSpanMax, fxaaSpanMax),\n    max(vec2(-fxaaSpanMax, -fxaaSpanMax), dir * inverseDirAdjustment)) * texCoordOffset;\n\n    vec3 result1 = (1.0/2.0) * (\n    texture(uSampler, vTexcoord.xy + (dir * vec2(1.0/3.0 - 0.5))).xyz +\n    texture(uSampler, vTexcoord.xy + (dir * vec2(2.0/3.0 - 0.5))).xyz);\n\n    vec3 result2 = result1 * (1.0/2.0) + (1.0/4.0) * (\n    texture(uSampler, vTexcoord.xy + (dir * vec2(0.0/3.0 - 0.5))).xyz +\n    texture(uSampler, vTexcoord.xy + (dir * vec2(3.0/3.0 - 0.5))).xyz);\n\n    float lumaMin = min(lumaM, min(min(lumaTL, lumaTR), min(lumaBL, lumaBR)));\n    float lumaMax = max(lumaM, max(max(lumaTL, lumaTR), max(lumaBL, lumaBR)));\n    float lumaResult2 = dot(luma, result2);\n\n    if(lumaResult2 < lumaMin || lumaResult2 > lumaMax)\n        return result1;\n    else\n        return result2;\n}\n\nvec3 filmGrain(vec3 fragCurrentColor){\n\n    vec2 texSize  = vec2(textureSize(uSampler, 0).xy);\n    vec2 texCoord = gl_FragCoord.xy / texSize;\n    \n    vec3 color = fragCurrentColor;\n    float randomIntensity = fract(10000. * sin((gl_FragCoord.x + gl_FragCoord.y * colorGrading.b/2.)));\n    color += settings.w * randomIntensity;\n    return color;\n}\n\nvoid main() {  \n    vec3 fragment;    \n\n    if(enabled.r == 1)\n        fragment = FXAA();\n    else\n        fragment = texture(uSampler, vTexcoord).rgb;\n        \n    fragment = vec3(1.0) - exp(-fragment * colorGrading.g);\n    fragment = pow(fragment, vec3(1.0/colorGrading.r));\n\n    if(enabled.g == 1)\n        fragment = filmGrain(fragment);\n      \n    finalColor = vec4(fragment, 1.0);\n}\n\n";
var noFxaaFragment = "#version 300 es\nprecision mediump float;\n\nin vec2 vTexcoord;\n\nuniform sampler2D uSampler;\nout vec4 finalColor;\n\nvoid main() {\n    vec3 fragment = texture(uSampler, vTexcoord).rgb;   \n    finalColor = vec4(fragment, 1.0);\n}\n\n";

var brightFragment = "#version 300 es\n\nprecision lowp float;\n\nin vec2 vTexcoord;\nuniform sampler2D sceneColor;\nuniform float threshold;\nout vec4 fragColor;\n\n\nvoid main(){\n    vec4 color = texture(sceneColor, vTexcoord);\n    float brightness = (color.r  * 0.2126 ) + (color.g  * 0.7152 ) +  (color.b * 0.0722 );\n    if (brightness > threshold)\n        fragColor = color;\n       \n    else \n        fragColor = vec4(0.,0.,0.,1.);\n   \n     \n}";
var blurBox = "#version 300 es\n\nprecision mediump float;\n\nin vec2 vTexcoord;\nuniform sampler2D sceneColor;\nuniform vec2 resolution;\nout vec4 fragColor;\nconst float kernel = 7.0;\nconst float weight = 1.0;\nuniform bool isWidth; \n\n\nvoid main( )\n{\n \n    vec3 sum = vec3(0);\n    float pixelSize = 1.0 / resolution.x; \n    \n    // Horizontal Blur\n    vec3 accumulation = vec3(0);\n    vec3 weightsum = vec3(0);\n    \n    vec2 vector;\n    for (float i = -kernel; i <= kernel; i++){\n         if(isWidth == true)\n            vector = vec2(pixelSize * i, 0.); \n        else\n            vector = vec2(0., pixelSize * i);\n        accumulation += texture(sceneColor, vTexcoord + vector).xyz * weight;\n        weightsum += weight;\n    }\n    \n    sum = accumulation / weightsum;\n    \n    fragColor = vec4(sum, 1.0);\n}\n";
var bilinearUpSampling = "#version 300 es\n\nprecision mediump float;\n\nout vec4 fragColor;\nin vec2 vTexcoord;\n\nuniform vec2 resolution;\nuniform sampler2D blurred;\nuniform sampler2D nextSampler;\nuniform float bloomIntensity;\n \n\nvec4 upsampleTent(vec2 texelSize, vec4 sampleScale)\n{\n    vec4 d = vec4(texelSize.x, texelSize.y, texelSize.x, texelSize.y) * vec4(1.0, 1.0, -1.0, 0.0) * sampleScale;\n\n    vec4 s;\n    s =  texture( blurred, vTexcoord - d.xy);\n    s += texture( blurred, vTexcoord - d.wy) * 2.0;\n    s += texture( blurred, vTexcoord - d.zy);\n\n    s += texture( blurred, vTexcoord - d.zw) * 2.0;\n    s += texture( blurred, vTexcoord) * 4.0;\n    s += texture( blurred, vTexcoord - d.xw) * 2.0;\n\n    s += texture( blurred, vTexcoord - d.zy);\n    s += texture( blurred, vTexcoord - d.wy) * 2.0;\n    s += texture( blurred, vTexcoord - d.xy);\n\n    return s * (1.0 / 16.0);\n}\n\nvoid main(void){\n    fragColor = vec4(vec3(upsampleTent(1./resolution, vec4(2.)) + texture(nextSampler, vTexcoord)), bloomIntensity);\n}\n";
var compositeFragment = "\n#version 300 es\n\nprecision mediump float;\n\nout vec4 fragColor;\nin vec2 vTexcoord;\n\nuniform sampler2D blurred;\nuniform sampler2D sceneColor;\nuniform vec2 intensity; // [Distortion, CA] \nuniform ivec3 settings; // [Distortion, Chromatic aberration, bloom]\n\n\nvec3 cA(vec2 uv){\n    float amount = intensity.y * .001;\n    vec3 col;\n    col.r = texture( sceneColor, vec2(uv.x+amount,uv.y) ).r;\n    col.g = texture( sceneColor, uv ).g;\n    col.b = texture( sceneColor, vec2(uv.x-amount,uv.y) ).b;\n    return col;\n}\nvec2 computeUV( vec2 uv, float k){\n    vec2 t = uv - .5;\n    float r2 = t.x * t.x + t.y * t.y;\n    float f = 1. + r2 * (  .1 - k * sqrt(r2));\n   \n    vec2 nUv = f * t + .5;\n    return nUv;    \n}\n \nvoid main(void){\n    vec2 texCoord = settings.r == 1 ? computeUV( vTexcoord, intensity.x * .5)  : vTexcoord;\n    vec3 b = settings.b == 1 ? texture(blurred, texCoord).rgb : vec3(0.);\n    vec3 color = settings.g == 1 ? cA(texCoord): texture(sceneColor, texCoord).rgb;\n    \n     \n    fragColor = vec4(color + b, 1.);\n \n}\n";

var CompositPass = /*#__PURE__*/function (_System) {
  _inherits(CompositPass, _System);

  var _super = _createSuper(CompositPass);

  function CompositPass(gpu) {
    var _this;

    var postProcessingResolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      w: window.screen.width,
      h: window.screen.height
    };

    _classCallCheck(this, CompositPass);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.w = postProcessingResolution.w;
    _this.h = postProcessingResolution.h;
    _this.blurBuffers = [];
    _this.upSampledBuffers = [];
    var pW = _this.w,
        pH = _this.h;

    for (var i = 0; i < 4; i++) {
      var wW = pW / 2,
          hH = pH / 2;
      var wBlurFrameBuffer = new FramebufferInstance(gpu, wW, hH);
      wBlurFrameBuffer.texture({
        linear: true
      });
      var hBlurFrameBuffer = new FramebufferInstance(gpu, wW, hH);
      hBlurFrameBuffer.texture({
        linear: true
      });

      _this.blurBuffers.push({
        height: hBlurFrameBuffer,
        width: wBlurFrameBuffer
      });

      pW = wW;
      pH = hH;
    }

    for (var _i = 0; _i < 4; _i++) {
      var _wW = pW * 2,
          _hH = pH * 2;

      var b = new FramebufferInstance(gpu, _wW, _hH).texture({
        linear: true
      });

      _this.upSampledBuffers.push(b);

      pW = _wW;
      pH = _hH;
    }

    _this.compositeShader = new ShaderInstance(vertex$4, compositeFragment, gpu);
    _this.upSamplingShader = new ShaderInstance(vertex$4, bilinearUpSampling, gpu);
    _this.brightShader = new ShaderInstance(vertex$4, brightFragment, gpu);
    _this.blurShader = new ShaderInstance(vertex$4, blurBox, gpu);
    return _this;
  }

  _createClass(CompositPass, [{
    key: "execute",
    value: function execute(options, systems, data, entities, entitiesMap, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          worker = _ref2[0],
          output = _ref2[1];

      _get(_getPrototypeOf(CompositPass.prototype), "execute", this).call(this);

      var bloomStrength = options.bloomStrength,
          bloomThreshold = options.bloomThreshold,
          distortion = options.distortion,
          chromaticAberration = options.chromaticAberration,
          bloom = options.bloom,
          distortionStrength = options.distortionStrength,
          chromaticAberrationStrength = options.chromaticAberrationStrength;

      if (bloom) {
        output.startMapping();
        this.brightShader.use();
        this.brightShader.bindForUse({
          sceneColor: worker.colors[0],
          threshold: bloomThreshold
        });
        output.draw();
        output.stopMapping();
        this.blurShader.use();

        for (var index = 0; index < 4; index++) {
          this.blurSample(index, this.blurShader, output);
        }

        for (var _index = 0; _index < 3; _index++) {
          var current = this.upSampledBuffers[_index];
          current.startMapping();
          this.upSamplingShader.use();
          this.upSamplingShader.bindForUse({
            blurred: this.blurBuffers[_index].height.colors[0],
            nextSampler: this.blurBuffers[_index + 1].height.colors[0],
            resolution: [current.width, current.height],
            bloomIntensity: bloomStrength
          });
          current.draw();
          current.stopMapping();
        }
      }

      output.startMapping();
      this.compositeShader.use();
      this.compositeShader.bindForUse({
        blurred: this.upSampledBuffers[2].colors[0],
        sceneColor: worker.colors[0],
        resolution: [this.w, this.h],
        intensity: [distortionStrength, chromaticAberrationStrength],
        settings: [distortion ? 1 : 0, chromaticAberration ? 1 : 0, bloom ? 1 : 0]
      });
      output.draw();
      output.stopMapping();
    }
  }, {
    key: "blurSample",
    value: function blurSample(level) {
      var shader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.blurShader;
      var framebuffer = arguments.length > 2 ? arguments[2] : undefined;
      var _this$blurBuffers$lev = this.blurBuffers[level],
          width = _this$blurBuffers$lev.width,
          height = _this$blurBuffers$lev.height;
      var previousColor = level > 0 ? this.blurBuffers[level - 1].height.colors[0] : framebuffer.colors[0];
      width.startMapping();
      shader.bindForUse({
        sceneColor: previousColor,
        resolution: [width.width, width.height],
        isWidth: true
      });
      width.draw();
      width.stopMapping();
      height.startMapping();
      shader.bindForUse({
        sceneColor: width.colors[0],
        resolution: [height.width, height.height],
        isWidth: false
      });
      height.draw();
      height.stopMapping();
    }
  }]);

  return CompositPass;
}(System);

var FinalPass = /*#__PURE__*/function (_System) {
  _inherits(FinalPass, _System);

  var _super = _createSuper(FinalPass);

  function FinalPass(gpu) {
    var _this;

    _classCallCheck(this, FinalPass);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "lookUpRandom", []);

    _defineProperty(_assertThisInitialized(_this), "lookUpIndex", 0);

    _this.gpu = gpu;
    _this.shader = new ShaderInstance(vertex$4, fragment$4, gpu);

    for (var i = 1e6; i > 0; i--) {
      _this.lookUpRandom.push(Math.random());
    }

    return _this;
  }

  _createClass(FinalPass, [{
    key: "lookup",
    value: function lookup() {
      return ++this.lookUpIndex >= this.lookUpRandom.length ? this.lookUpRandom[this.lookUpIndex = 0] : this.lookUpRandom[this.lookUpIndex];
    }
  }, {
    key: "execute",
    value: function execute(options, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          worker = _ref2[0],
          output = _ref2[1];

      _get(_getPrototypeOf(FinalPass.prototype), "execute", this).call(this);

      var gamma = options.gamma,
          exposure = options.exposure,
          fxaa = options.fxaa,
          filmGrain = options.filmGrain,
          FXAASpanMax = options.FXAASpanMax,
          FXAAReduceMin = options.FXAAReduceMin,
          FXAAReduceMul = options.FXAAReduceMul,
          filmGrainStrength = options.filmGrainStrength;
      this.shader.use();
      output.startMapping();
      this.shader.bindForUse({
        uSampler: worker.colors[0],
        enabled: [fxaa ? 1 : 0, filmGrain ? 1 : 0],
        settings: [FXAASpanMax, FXAAReduceMin, FXAAReduceMul, filmGrainStrength],
        colorGrading: [gamma, exposure, this.lookup()],
        FXAASpanMax: 8,
        FXAAReduceMin: 1 / 128,
        inverseFilterTextureSize: [1 / this.gpu.drawingBufferWidth, 1 / this.gpu.drawingBufferHeight, 0],
        FXAAReduceMul: 1 / 8
      });
      output.draw();
      output.stopMapping();
    }
  }]);

  return FinalPass;
}(System);

var PostProcessingWrapper = /*#__PURE__*/function (_System) {
  _inherits(PostProcessingWrapper, _System);

  var _super = _createSuper(PostProcessingWrapper);

  function PostProcessingWrapper(gpu, postProcessingResolution) {
    var _this;

    _classCallCheck(this, PostProcessingWrapper);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.shader = new ShaderInstance(vertex$4, AMDFSR1, gpu);
    _this.compositPass = new CompositPass(gpu, postProcessingResolution);
    _this.finalPass = new FinalPass(gpu, postProcessingResolution);
    return _this;
  }

  _createClass(PostProcessingWrapper, [{
    key: "execute",
    value: function execute(options, systems, data, entities, entitiesMap, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          a = _ref2[0],
          b = _ref2[1];

      _get(_getPrototypeOf(PostProcessingWrapper.prototype), "execute", this).call(this);

      var fsr = options.fsr;
      var worker = a,
          output = b;
      this.compositPass.execute(options, systems, data, entities, entitiesMap, [worker, output]);
      worker = b;
      output = a;
      this.finalPass.execute(options, [worker, output]);
      var cache = output;
      output = worker;
      worker = cache;
      this.shader.use();
      this.shader.bindForUse({
        uSampler: worker.colors[0],
        fsr: fsr ? 1 : 0
      });
      output.draw();
    }
  }]);

  return PostProcessingWrapper;
}(System);

var RenderingWrapper = /*#__PURE__*/function (_System) {
  _inherits(RenderingWrapper, _System);

  var _super = _createSuper(RenderingWrapper);

  function RenderingWrapper(gpu) {
    var _this;

    var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      w: window.screen.width,
      h: window.screen.height
    };

    _classCallCheck(this, RenderingWrapper);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.frameBuffer = new FramebufferInstance(gpu, resolution.w, resolution.h);

    _this.frameBuffer.texture().depthTest();

    _this.shader = new ShaderInstance(vertex$4, noFxaaFragment, gpu);
    _this.forwardSystem = new ForwardSystem(gpu);
    _this.GISystem = new GlobalIlluminationSystem(gpu);
    _this.skyboxSystem = new SkyboxSystem(gpu);
    _this.deferredSystem = new DeferredSystem(gpu);
    _this.postProcessingWrapper = new PostProcessingWrapper(gpu, resolution);
    return _this;
  }

  _createClass(RenderingWrapper, [{
    key: "execute",
    value: function execute(options, systems, data, entities, entitiesMap, onWrap, _ref) {
      var a = _ref.a,
          b = _ref.b;

      _get(_getPrototypeOf(RenderingWrapper.prototype), "execute", this).call(this);

      data.skybox;
          var skylight = data.skylight;
      options.camera;
          var noRSM = options.noRSM;
      this.GISystem.execute(systems[SYSTEMS.SHADOWS], skylight, noRSM);
      this.frameBuffer.startMapping();
      this.skyboxSystem.execute(data, options);
      var giFBO, giGridSize;

      if (!noRSM && skylight) {
        giGridSize = this.GISystem.size;
        giFBO = this.GISystem.accumulatedBuffer;
      }

      if (onWrap) onWrap.execute(options, systems, data, entities, entitiesMap, false);
      this.deferredSystem.execute(options, systems, data, giGridSize, giFBO);
      this.frameBuffer.stopMapping();
      a.startMapping();
      this.shader.use();
      this.shader.bindForUse({
        uSampler: this.frameBuffer.colors[0]
      });
      b.draw();
      copyTexture(a, systems[SYSTEMS.MESH].frameBuffer, this.gpu, this.gpu.DEPTH_BUFFER_BIT);
      this.forwardSystem.execute(options, systems, data, this.frameBuffer.colors[0]);
      if (onWrap) onWrap.execute(options, systems, data, entities, entitiesMap, true);
      a.stopMapping();
      this.postProcessingWrapper.execute(options, systems, data, entities, entitiesMap, [a, b]);
    }
  }]);

  return RenderingWrapper;
}(System);

var img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAgACAAMBIgACEQEDEQH/xAAcAAEBAQEBAQEBAQAAAAAAAAAAAQIDBAUGBwj/2gAIAQEAAAAA/wAvzMyxMpM5MpmSJIiRMwiRCIhIQg/Y5mZlnMjOZEkmUiRISZRERCERCIT9jMzMkzllMJEkzERJESRIQiIQgiP2GZmTMkzMpmSEzJCREiREREEIgg/XTMyzmSZkjMkhmSISImREQiCCCP1+JmZkzJJllmRIkkRCIzCCEIIgT9dMSZzJmSTKTKRJESIQmREECCEP1kzmTOZMsySMyJCSIiESEIEQCD9XmZzJnMmWZGUkRJIQhEhAgIID9TMzOcs5kykykZJDMQEJEEsAiwP1GZnMzliSZSSJMhJEIIQQEAA/T5zmZmIxJJGUiSQMkCDIAAA/TYmJnLEmZJIZSMiEQQIAAAP0mc5zmZmZMxlkyJIhEAEAAKD9FnOczDOZMyJJGQyCQAIAKFD9DiYzM5mZJmQySQgggAhQoFD7+JjMwzmTLMhkkEgAABQKUX7uM4mczEkzJGTIgQEKKRQpRSvt4ziYkxJJhIkQQAQpQFFFUr7OcZxM5zJJnJEMgIUiigVSqVT7HPOMzEmcpmZDJBFRQKqktKpVK+tjGcZzMzCTLIQgFihVKFLVVVPqYxnGc5zJJJlCAIoVZSrQtKqrV+jjGM4mcyTKSQksWKKKLVUVVqqqvo88YxnOZmTJJLIAUUqlVVKtVVqvfzxzznOcySSJCCyilFpVqlWlq1a9vPnjGczMyykElllUFpaWqtlq2qq1fZy54xnOZnJlJYAKqqWi22lWqtVV9fLnjnnOZlkkJYClWqLaq1VW1VWrfTy588ZznMkhAihapVq0q20q1atVfRy5YxjOcpJABQqrVqqaW0q2rVWu/LlzxiZzGSAUKVpVVbVq0tqqtWu/DnyxnOZkkAVVKqqtapVtVVq2qXtw5c8YzMyABVKqqq6LVtotW1VVevDlyxnEkiClKWqq1VW1atLVqqtXr5+PPGM5SAKqqqrVVatLbS0tWqrr5+PLGJmEFKqqqqtWqaLbRatVSu3m4csZzIhVFqqtVapbNUtUq2qWl6+XjyxnMgKqltVS1VqrRaWrRaWuvl4c8ZzAVVVVUtVaqlLaLS0tF7eThyxMwVVVaVVpVoq0toLS0tO/j8/PGSUq1VUqiqqqpaFVVLQ9Hj8/PEhaqqqlKUqqLRaKpVBfT4eHPMFW1SqFKUUpZastKoLT1eDhzyLbapQKFCiqLQaBVD1+Dhzi221VAAUChVLGgLQPb8/hg1bbaKlggAUKLUoLQVfb87ji3V1bQEIQAApQC0C09/zeM1rWrbQiREIQAsoAaAaD6HzebW96toiSRIkIQABYWgWg+l83Gt73q0SRmSSJEQQSypazaBaA+n82dOvTWtEkzJMySSSISAEoAWgD6nztdu3TWiSZmczMzJJJIhBAFgWgA+r4evo7dNVM5zmYmc5mcySJIgQuVshaAA+t5PT6u26mZjOM5xnOczMmZEiQBKQoAA+vy9vq67TOM455xjOM5zmZyzIkMgAAAA+xv6Pp6WZxzxjnjGMYziYmZlmJEQQAAAD7Xu+l6Kxjnz58+eOeMYxnOc5kzIyiCTWQAAA+/wDa+h1c+fPlz5c+fPnjnjOM5zmZkykSCVkqAAA/UfpPYxz5ceXLly58+fPGMYznOc5ZkSMgZW5AAA/cfqOmOXHjx48uPLnz5c8YxjOJiZkmUiIGbWQAAP6h+gzx4cOHHhx5cuXLnzxzxjOc5mcyZRIgZ0ZAAA/tvv4efzefhw48OXLjz58+eMYzjOZnLMiRIEpkAAD/AERx8vm83n8/Djw48uXLnzxzxjOM5mcsyJEgBkAAD//EABsBAQEBAQEBAQEAAAAAAAAAAAABAgMEBQYH/9oACAECEAAAAPxN1q3Vt0tW2qqqqvh6utW3S6qraqqVT4mtXV01a1VVaVSl+JrWrq26W1VWiqD491rVuratpS0KD5GtaurbbVWiqAPk71q3Vtq0oUAPl61rVurVUoACPm71rV01aKAEIPnb3rVultAEEIjw73rV1aUAkCQk8m961ppaCIRCRE83TW7dNAQhIiRI8/Xerq0pEJEhIkTj13rVq0kJESJEiTn13vVoIiRIkSRIx23u2wIiRImUSIx36atCJESJJERIz36atQkSJESEiRJ6N6pESRERESEiejpUJERCREJEiendSREEIiESDPp0kkAgQhIEx6bmSAoBIBIx6M4kLVpQgEg5deeIttulqgEgODjhda1rVuqUJYA8vDhNb3vW9XWloAA+f4eWunTp03vWtXTQAA+H829uvXr13vetatWgAPx/l79+/br16b3u6ulUAD+ddfT6e/ft0673rWroaAA//8QAHQEAAgMBAQEBAQAAAAAAAAAAAQIAAwQFBggJB//aAAgBAxAAAAD6TStEREVFVFVVVVCqFAUBR/REREREVFCooQKoUKAFAA/oCJWiKiqgVQqhVAAUAAQe7rrREVUCqoUBQAsWAAQT2tdaIiqqhVEUAACAQQSD11aVoiqAoAAAgggkEkk9KiJWihQBAJBIJJJJDJ3K0RUVRAJBDJJIZDCYelXWiqoAkkMhMMJhJJh0V1oqgCQwxoWJhJYkljVWiKsEhJJLMWLEsWLFjzqkVRIYWLMzMzMxcsxZmPCprUSEsWdmdndnZmZmZmZvJ0osjFmZ3d3sd2sZ2ZnZmZvCUoIWdrHsex7bHsd3dnZ2Zmb+a0oC7WWvbZba9tlr2WO7s7MzM/8AJKULPbZbdbddbbZbbZa9juzszMzfxSlS9tt91999911tttlr2uzszMzN/AqA9t2i/To0ab777rbbbHsd2dmLMfnCmW3aNOrVq06tGi++262yx3ZmZmLH5dpa7Rr17NmvXq1aNF911tj2M5YsWJ+SK3069m7du27NevTovuustd3LMSST8Zpdr3b+j0Ohu3bNerRfdbbY7sxLEmH4cmnd0en0+l0uhu269d+i62yx2YsSYTPgSzX0ur1ut1en0t+3Zq0X3WWu7MYSTCfzrv39btdns9fqdPobdmrRfdZY7M0JMjSfmpp6nb7/AHe32Ot0+ju16tF9tju5JMjSSfl9q7XovR+g7va63T6O7Zp0XXPYzMZCZJJ+U230fqPTei7/AG+v1Ohu16r77Xd2MaSSST8jep631vqPSeg7fX6nQ3a9V91ru5LSSSST8cvR+19h6r0vf7nX6fR27NN91ru5aSSSST8V/c+49j6v0voO51+n0duvVfbbY7MZJJJJP//EACUQAAMAAgIBBAEFAAAAAAAAAAABEQJQAxASBDEycWAgISMwoP/aAAgBAQABPwH/AGgP8Af4Ax79j37Hv2Pfse/Y9+x79j3+Qx77IY99kPf5D3+Q9/kMe+zHv8x7/Me/5B/0Tb8g/wBEIQhCbbk9x9whCEIQm15fcfUIQhCEJtuX3fUEiEIQhCE2vL7vpISIQhCE2/L8mJCQkQhCEJt+X5MSEhIhCEITb8nzZijHESIQhCbjP5swxFiQhCE3MvI/s48RYkIQhB7jjVzf2YYniQhBjHuPTYX9zHEhBoYx9Me29Fx/xpniQYxjGMY9t6bj8eLD6IMYxj6Yx7ZY+KSGMYxj6Y+mPp7L/8QAIRABAQEBAQEBAAMAAwEAAAAAEQABECAwQCExQVBhoXH/2gAIAQEAAT8QiPG54PmdOEdOkeCOEeCOkRwiPBER4PG5w7ucOnC3OnTp0i3OkdIjhEeCOkREREfLc87nTpwjpHCOEd3hHCPBEdIjwRERERHxPRw8FucPB0jhERHSOkeSI6REeDh7ObHDwcPG5HCPBHCPRHSI6REeCIiIi3PjvN9nTu8OkeCPBEeSI4REREREREd3Pic3weDpwjhHSI8bnCI6REeSIiIiIiLebnN8b7OkdPRHSPBEREeCIiIiIiIiPhueD2eThHTh4IjwRERHkiIiIiIiIiIjmxw8bno8Ho8keiIiIjwRwiIiI6eTwd3O7nN8HDpbnoiI8ERHgiI8kRERERERERbnNzm283O7w4eTpwj4EREeT8BEREeN975PR6IiOEREeiIiIiIiIiIiIiIi2222Le7bzY+hER5PmRERERERERERHCPW93h06cPtvzIiIiIiIiIiIiIjm83ztvN+RERHgiI+ZERERERERERHCIi3m83/AIc9EREREREREc223ztvC3m/IiIj2REeCIiIiIiIiIiI6RbFvN8bw5vo6REeSI8ER4IiIiIjwRERERERbzbbeb04eiPoRHgjyREREREREREREREW283m+9t+RER0jpERER0iIiIiI6REREREW22823m83u/EiPB4OkcI6RHTpERERERHCItttt7vk9ER8SPRHDwRwiIiIiOkREREW22228Lbeb9Dp04R5IiOEREREdIiIiIjpFttttttvjfJw4fI4Rw4Rw4R0iIiIiI6REREW22283xvzOnDyRHkiOEcI6RHSIiIiOEW222+Nt9Hs4dPJw4cOERHCIjhERER0iIjm22222/Q+ZHSOHDyRHCIiI6RER0iLbbbbbbbfmcI4R6OEeThEcOkdIiOkRERHG222+z4HThEcPJHCOER0iIjhHCOEREdONttt/GcOHg4RwjpERHDwREREdI4R0223m832eT0RHgiOkcI4dOHCIjpHCOEdNtttt+5HSIjhHSOEeSIjhEdOEcI8HTbbbbfuR4PJwiPJ04eSIjhHSOnbbeb8yPRHSOEcI6Rw6dPBwjpHTp2237kR06R06RwiOHg4eDwdOkebbbfZwjwR0jwdI4RwjycOHk6dI8Edtttt+BHk8EcIjhwjwcPJ04dOEeDwdttt6eyOkRERwjwdI4R08nDh08EeD0Nt+JHCI8HSI4R06R4Ijh5PB4PJ4G2+CI6RERERERERER4PJHCI4Rw8Hg8Ho23yRERERHCI8EeSOkdI8HojpHg+DtvSI4RERERERERERERHk8nk8keCPZ323wRERERERERERHCIiPZ4OHTh4I9kd/34iIiIiIiIiIiIiIjwRER5PR9SPWP53nbc4REREREREREcIjpwjpHT8Z8P77zvCIiIiIiIiIiIiPqdPJ09nwOf33nYiIiIiIiIiIjhER+A+h8Dxg3edyIiIjgiIiIjhERER4IjweD9P8AfeSLMsmTPAERERERERw8EfkPge/7r+0WZZMmegCIiIiIjp0j4Hgt4eD4Hx/s4zLJkyZ5AREREREcOHD9Z9NuWcGTLnoAiIiIiOH2PufbHRy55wRFuRFucI/Hvk5vg/HDcueYEW5bluW5bnC39W8Pw/8Au8W55xs3Lcty3Lcty222377+7/2+Mc7tmzcty3Lcty3Lcty3Lbbbeb8N8b3f1Yf/AL9rOe3Zs3Lcty3Lcty2222237b539Yv4c8Hs2bMW5bluW5bbbbbbbbbb+DfRb+N7BzP4s47NmLFi3Lcty3LbbbbbfG8234789/G3f8AtsOc7wYsWLc4xbbltttttttvjbeb43u2+8/N/Is/uwWzFixY8httttttvNt5vx23n+2/tFn+bbixZ6b4G2222222283m/He76z8+OL/mFn1bem9N422223m831vd7v7f/8QAHhEBAAMAAgMBAQAAAAAAAAAAEQABEAIgAxIwBED/2gAIAQIBAQIAlYxx1xji4uKuuOri9FxVVfg9XFirFVXqx6rixVxVXq9FjqqqqqtSpUrXXFiqxVVVro93VVVVVVlbXZdVVVVValSsr5Kqqqqq1Kla9FVVVVVVWpUqVK16KqqqqqrUr4PZdVVVWpUqVK+asYqqqtSpUrurisWKqqtSpXZ1xYrFiqrxlSvkuOKuKsXjKlZXwWLjiuOLxlSpWKriqqxi4sXhKldVcVVcdYuPCVK6qrFxcXHXPHK1VViuLi64545UVVVVdXoxenilRVVVV6PzfFKtfZVV+L3c8Mbv29lVXVV7vTwy7vl7eyqqxfi9vFfLlfP39lq1cdWLH4cL5875+9cqurq6tf5efLn5PeuVXV1dXV1KlSv5P1eW/JXLjy43xurqVK+Fff8AZ5q58b43xnGVKlSpWVK6VlfXl5eF8JxnGcZUqVKlSpUrtX1//8QAIhEAAQMCBgMAAAAAAAAAAAAAAQIRUAADEiEiMUBxUWGQ/9oACAECAQM/APmBkIDIQGkQGkQDIEA1sdQGFCeoDCyfVPz3vLD7Gn55uXFL8kmA/8QAHxEBAAIDAQEBAQEBAAAAAAAAAQISAAMRBBAgMBMF/9oACAEDAQECAERERERE4iIiMa1rVjWta1rWtaoiIiIiInE5yrGta1rWta1rWtaoiIiInETiJXla1rWta1rWta0oiIiIiIic5zla1rWta1rWtaUpRERExMROJznOV5Wta1rWtaVpSjjiI4mJxOc5znK1rWta1rWtKUpRxxxxPqZznOc5yta1rWta1pSlKOOOOOJ95nOc5zla1rWta0pSlKUljjjjjj+OZznK1rWta1rWtaUpSjjjjj++c5znK1rWta1rWhClKSxXH9c+c5wOVCta1qQrSlKUpLFXud795nOBwOVIka1rUhStKUpJVe979PpgcCoESNa1rWtKVIEKSWS9734YYYYAAAESJEiRIkSJAiRpSlJSZWt3o9MMMMAAACJEiRIkSJEiRIka1rOTJlYkIiYYYYAAAABEiRIkSJEiRIkSJGc2d7EiQjFjhkciABEiBEiRIkSJEiRI1I1IzmzvckSixY5HI5EiRIhEiRIkSJEiRIkSJEjzlZ7HZcmSjKMosGOQyORIkQiRIkSJEiRAA5yvOcnsdhsJxnCUGDDIZDIESJEjGMYxIkSJEiR5znA5wJ7f9TZGcJwlBgwyGQyBAiRIgEQAACoc4HOc5Pb/AKx2QnCeuWt15rzXkCBAiQIgAAAAc5wOc58nuNsNsNmueqWp15qzWQIECMYxiAAAAc5znM585LdHbDZrnqnplpdWas1msgQIESIEQAAOc5nPnPjuju17dM9MtDpzTmrNZrIECBEiAAAHPzz4GG+G7Tt0T0S0OjNOajUayBAgRIgAABzOZz6HyO/Xu0bPNPzPndGaM0mo1msgQIkQAAA5nPnK/iG7Vu82zyy8r5s8+aDSajUayBAiRAAwwzn3n6N/n3eSfkfLnlzzmg0mo1GsgQIkQwAMPofwl6PHt8UvG+TPLnnzRmnNRrNeQyIZHDDD4YH8pejwT8D4s8meXPNmjNOas1ZryGQyORwwww/r493/ADnwZ4s8meXPPmjNOas15ryGQwyOGGGGR/p//8QAJBEAAgEDAwUAAwAAAAAAAAAAADEBAhFAECEwAxIgMmFQUZD/2gAIAQMBAz8A/lF9zt3+A3fisv74oQhY150+6oQhC1WMt9EIQhZW0bl5L2EIQhCyLU0l5gQhCELRY9pppuXmBCEIQtFyX4+7r1REqbF+0QhCELRcd+Ser1Zr/dVz1PUQhHqIQsf/2Q==";

var vertex$3 = "#version 300 es\n\nlayout (location = 1) in vec3 position;\nlayout (location = 2) in vec3 normal;\nlayout (location = 3) in vec2 uvTexture;\nlayout (location = 4) in vec3 tangentVec;\n\nuniform mat4 viewMatrix;\nuniform mat4 transformMatrix;\nuniform mat4 projectionMatrix;\nuniform vec3 cameraVec;\n\n\nout vec4 vPosition;\nout vec2 texCoord;\nout mat3 toTangentSpace;\nout vec3 normalVec;\n\nout vec3 viewDirection;\n \n\nvoid main(){\n    vPosition =  transformMatrix *   vec4(position, 1.0);\n    \n    vec3 T = normalize( mat3(transformMatrix)  * normalize(tangentVec));\n    vec3 N =  normalize(mat3(transformMatrix) * normal);\n    vec3 biTangent = cross(N, tangentVec); \n    vec3 B =  normalize(mat3(transformMatrix) * biTangent);\n    B = dot(biTangent, B)  > 0. ? -B : B;\n    \n    toTangentSpace = mat3(T, B, N);\n    \n    viewDirection = transpose(toTangentSpace) * (vPosition.xyz - cameraVec);\n    texCoord = uvTexture;\n    normalVec = normal;\n\n   \n    gl_Position = projectionMatrix * viewMatrix * vPosition;\n}\n";
var fragment$3 = "#version 300 es\nprecision highp float;\n// IN\nin vec4 vPosition;\nin vec3 normalVec;\nin mat3 toTangentSpace;\n\nuniform sampler2D brdfSampler;\nuniform samplerCube irradianceMap;\nuniform samplerCube prefilteredMapSampler;\nuniform float ambientLODSamples;\nuniform vec3 cameraVec;\n\n// OUTPUTS\nlayout (location = 0) out vec4 gPosition;\nlayout (location = 1) out vec4 gNormal;\nlayout (location = 2) out vec4 gAlbedo;\nlayout (location = 3) out vec4 gBehaviour;\nlayout (location = 4) out vec4 gAmbient;\nlayout (location = 5) out vec4 gEmissive;\nconst float PI = 3.14159265359;\n\n\n@import(fresnelSchlickRoughness)\n\n//vec2 parallaxMapping (vec2 texCoord, vec3 viewDir, sampler2D heightMap )\n//{\n//    if(settings.x == 1){\n//            float layer_depth = 1.0 / layers;\n//            float currentLayerDepth = 0.0;\n//            vec2 delta_uv = viewDir.xy * heightScale / (viewDir.z * layers);\n//            vec2 cur_uv = texCoord;\n//    \n//            float depth_from_tex = 1.-texture(heightMap, cur_uv).r;\n//    \n//            for (int i = 0; i < 32; i++) {\n//                currentLayerDepth += layer_depth;\n//                cur_uv -= delta_uv;\n//                depth_from_tex = 1.-texture(heightMap, cur_uv).r;\n//                if (depth_from_tex < currentLayerDepth) {\n//                    break;\n//                }\n//            }\n//            vec2 prev_uv = cur_uv + delta_uv;\n//            float next = depth_from_tex - currentLayerDepth;\n//            float prev = texture(heightMap, prev_uv).r - currentLayerDepth\n//                         + layer_depth;\n//            float weight = next / (next - prev);\n//            vec2 UVs = mix(cur_uv, prev_uv, weight);\n//            if (settings.y == 1 && ( UVs.x > 1.0 || UVs.y > 1.0 || UVs.x < 0.0 || UVs.y < 0.0))\n//                discard;\n//            return UVs;\n//    }\n//    else{\n//            return texCoord ;  \n//    }\n//}\n\n//settings = [\n//    parallaxEnabled,\n//    discardOffPixels,\n//    generateAmbient\n//]\n\nvoid main(){  \n    gPosition = vPosition;\n\n    gAlbedo = vec4(.5, .5, .5, 1.);\n    gBehaviour = vec4(1.,1.,0.,1.);\n    gNormal = vec4(normalize(toTangentSpace * ((vec3(.5, .5, 1.) * 2.0)- 1.0)), 1.0);\n    \n    vec3 diffuse = vec3(0.);\n    vec3 specular = vec3(0.);\n    \n    vec3 V = normalize(cameraVec - vPosition.xyz);\n    float NdotV    = max(dot(gNormal.rgb, V), 0.000001);\n    vec3 F0 = mix(vec3(0.04), gAlbedo.rgb, gBehaviour.b);\n    \n    vec3 F    = fresnelSchlickRoughness(NdotV, F0, gBehaviour.g);\n    vec3 kD = (1.0 - F) * (1.0 - gBehaviour.b);\n    diffuse = texture(irradianceMap, vec3(gNormal.r, -gNormal.g, gNormal.b)).rgb * gAlbedo.rgb * kD;\n\n    vec3 prefilteredColor = textureLod(prefilteredMapSampler, reflect(-V, gNormal.rgb), gBehaviour.g * ambientLODSamples).rgb;\n    vec2 brdf = texture(brdfSampler, vec2(NdotV, gBehaviour.g)).rg;\n    specular = prefilteredColor * (F * brdf.r + brdf.g);\n\n    gAmbient = vec4((diffuse + specular), 1.);\n    gEmissive = vec4(.0, 0., 0., 1.);\n}\n";

function cloneClass(orig) {
  return orig ? Object.assign(Object.create(Object.getPrototypeOf(orig)), orig) : orig;
}

function toObject(classes) {
  var keys = classes.filter(function (c) {
    return c !== undefined;
  }).map(function (m, i) {
    return {
      id: m.id,
      index: i
    };
  });
  var res = {};
  keys.forEach(function (k) {
    res[k.id] = classes[k.index];
  });
  return res;
}

var sameSizeVertex = "#version 300 es\nlayout (location = 1) in vec3 position;\n\n#define SIZE .2\nuniform vec3 camPos;\nuniform vec3 translation;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 transformMatrix;\n\nvoid main() {\n vec3 t = translation - camPos;\n     \n    float len = length(camPos - translation) * SIZE; \n    mat4 tt = transformMatrix;\n    \n     \n    mat4 sc;\n    for ( int x = 0; x < 4; x++ )\n        for ( int y = 0; y < 4; y++ )\n            if ( x == y && x <= 2 )\n                sc[x][y] = len;\n            else if ( x == y )\n                sc[x][y] = 1.;\n            else\n                sc[x][y] = 0.;  \n                \n    tt[3][0]  += t.x;\n    tt[3][1]  += t.y;\n    tt[3][2]  += t.z;\n    \n    gl_Position =  projectionMatrix * viewMatrix * tt * sc * vec4(position,1.0);   \n}\n";
var vertex$2 = "#version 300 es\nlayout (location = 1) in vec3 position;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 transformMatrix;\n\nvoid main() {\n\n        gl_Position = projectionMatrix * viewMatrix * transformMatrix * vec4(position, 1.0);\n  \n}\n";
var fragment$2 = "#version 300 es\nprecision highp float;\n\nuniform vec4 uID;\n\nout vec4 fragColor;\n\nvoid main() {\n    fragColor = uID;\n}\n";

var PickSystem = /*#__PURE__*/function (_System) {
  _inherits(PickSystem, _System);

  var _super = _createSuper(PickSystem);

  function PickSystem(gpu) {
    var _this;

    _classCallCheck(this, PickSystem);

    _this = _super.call(this, []);
    _this.gpu = gpu;
    _this.frameBuffer = new FramebufferInstance(gpu, 1, 1);

    _this.frameBuffer.texture({
      attachment: 0,
      linear: true,
      repeat: true,
      storage: false,
      precision: _this.gpu.RGBA,
      format: _this.gpu.RGBA,
      type: _this.gpu.UNSIGNED_BYTE
    }).depthTest(_this.gpu.DEPTH_COMPONENT16);

    _this.shader = new ShaderInstance(vertex$2, fragment$2, gpu);
    _this.shaderSameSize = new ShaderInstance(sameSizeVertex, fragment$2, gpu);
    _this.mesh = new MeshInstance({
      gpu: gpu,
      vertices: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1],
      indices: [0, 3, 9, 0, 9, 6, 8, 10, 21, 8, 21, 19, 20, 23, 17, 20, 17, 14, 13, 15, 4, 13, 4, 2, 7, 18, 12, 7, 12, 1, 22, 11, 5, 22, 5, 16]
    });
    return _this;
  }

  _createClass(PickSystem, [{
    key: "pickElement",
    value: function pickElement(drawCallback, pickCoords, camera, sameSize, isOrtho) {
      this.shader.use();
      this.frameBuffer.startMapping();

      var pickerProjection = this._getProjection(pickCoords, camera, isOrtho);

      drawCallback(sameSize ? this.shaderSameSize : this.shader, pickerProjection);
      var data = new Uint8Array(4);
      this.gpu.readPixels(0, 0, 1, 1, this.gpu.RGBA, this.gpu.UNSIGNED_BYTE, data);
      this.frameBuffer.stopMapping();
      return data[0] + data[1] + data[2];
    }
  }, {
    key: "_getProjection",
    value: function _getProjection(_ref, camera, isOrtho) {
      var x = _ref.x,
          y = _ref.y;
      var m = create$5();
      if (isOrtho) m = camera.projectionMatrix;else {
        var aspect = camera.aspectRatio;
        var top = Math.tan(camera.fov / 2) * camera.zNear,
            bottom = -top,
            left = aspect * bottom,
            right = aspect * top;
        var width = Math.abs(right - left);
        var height = Math.abs(top - bottom);
        var pixelX = x * this.gpu.canvas.width / this.gpu.canvas.clientWidth;
        var pixelY = this.gpu.canvas.height - y * this.gpu.canvas.height / this.gpu.canvas.clientHeight - 1;
        var subLeft = left + pixelX * width / this.gpu.canvas.width;
        var subBottom = bottom + pixelY * height / this.gpu.canvas.height;
        var subWidth = 1 / this.gpu.canvas.width;
        var subHeight = 1 / this.gpu.canvas.height;
        frustum(m, subLeft, subLeft + subWidth, subBottom, subBottom + subHeight, camera.zNear, camera.zFar);
      }
      return m;
    }
  }], [{
    key: "drawMesh",
    value: function drawMesh(mesh, instance, viewMatrix, projectionMatrix, transformMatrix, shader, gpu) {
      shader.bindForUse({
        uID: [].concat(_toConsumableArray(instance.components[COMPONENTS.PICK].pickID), [1]),
        projectionMatrix: projectionMatrix,
        transformMatrix: transformMatrix,
        viewMatrix: viewMatrix
      });
      gpu.bindVertexArray(mesh.VAO);
      gpu.bindBuffer(gpu.ELEMENT_ARRAY_BUFFER, mesh.indexVBO);
      mesh.vertexVBO.enable();
      gpu.drawElements(gpu.TRIANGLES, mesh.verticesQuantity, gpu.UNSIGNED_INT, 0);
      gpu.bindVertexArray(null);
      gpu.bindBuffer(gpu.ELEMENT_ARRAY_BUFFER, null);
      mesh.vertexVBO.disable();
    }
  }]);

  return PickSystem;
}(System);

var KEYS = {
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  ShiftLeft: "ShiftLeft",
  ShiftRight: "ShiftRight",
  ControlLeft: "ControlLeft",
  ControlRight: "ControlRight",
  AltLeft: "AltLeft",
  AltRight: "AltRight",
  Pause: "Pause",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Space: "Space",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  PrintScreen: "PrintScreen",
  Insert: "Insert",
  Delete: "Delete",
  Digit0: "Digit0",
  Digit1: "Digit1",
  Digit2: "Digit2",
  Digit3: "Digit3",
  Digit4: "Digit4",
  Digit5: "Digit5",
  Digit6: "Digit6",
  Digit7: "Digit7",
  Digit8: "Digit8",
  Digit9: "Digit9",
  KeyA: "KeyA",
  KeyB: "KeyB",
  KeyC: "KeyC",
  KeyD: "KeyD",
  KeyE: "KeyE",
  KeyF: "KeyF",
  KeyG: "KeyG",
  KeyH: "KeyH",
  KeyI: "KeyI",
  KeyJ: "KeyJ",
  KeyK: "KeyK",
  KeyL: "KeyL",
  KeyM: "KeyM",
  KeyN: "KeyN",
  KeyO: "KeyO",
  KeyP: "KeyP",
  KeyQ: "KeyQ",
  KeyR: "KeyR",
  KeyS: "KeyS",
  KeyT: "KeyT",
  KeyU: "KeyU",
  KeyV: "KeyV",
  KeyW: "KeyW",
  KeyX: "KeyX",
  KeyY: "KeyY",
  KeyZ: "KeyZ",
  MetaLeft: "MetaLeft",
  MetaRight: "MetaRight",
  ContextMenu: "ContextMenu",
  Numpad0: "Numpad0",
  Numpad1: "Numpad1",
  Numpad2: "Numpad2",
  Numpad3: "Numpad3",
  Numpad4: "Numpad4",
  Numpad5: "Numpad5",
  Numpad6: "Numpad6",
  Numpad7: "Numpad7",
  Numpad8: "Numpad8",
  Numpad9: "Numpad9",
  NumpadMultiply: "NumpadMultiply",
  NumpadAdd: "NumpadAdd",
  NumpadSubtract: "NumpadSubtract",
  NumpadDecimal: "NumpadDecimal",
  NumpadDivide: "NumpadDivide",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  NumLock: "NumLock",
  ScrollLock: "ScrollLock",
  AudioVolumeMute: "AudioVolumeMute",
  AudioVolumeDown: "AudioVolumeDown",
  AudioVolumeUp: "AudioVolumeUp",
  LaunchMediaPlayer: "LaunchMediaPlayer",
  LaunchApplication1: "LaunchApplication1",
  LaunchApplication2: "LaunchApplication2",
  Semicolon: "Semicolon",
  Equal: "Equal",
  Comma: "Comma",
  Minus: "Minus",
  Period: "Period",
  Slash: "Slash",
  Backquote: "Backquote",
  BracketLeft: "BracketLeft",
  Backslash: "Backslash",
  BracketRight: "BracketRight",
  Quote: "Quote",
  Mouse0: "MouseLeft",
  Mouse1: "MouseMiddle",
  Mouse2: "MouseRight",
  Mouse3: "MouseKey0",
  Mouse4: "MouseKey1",
  Mouse5: "MouseKey2"
};

var ScriptSystem = /*#__PURE__*/function (_System) {
  _inherits(ScriptSystem, _System);

  var _super = _createSuper(ScriptSystem);

  function ScriptSystem(gpu, canvasID) {
    var _this;

    _classCallCheck(this, ScriptSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "pressedKeys", {});

    _defineProperty(_assertThisInitialized(_this), "eventSet", false);

    _defineProperty(_assertThisInitialized(_this), "mousePosition", {
      x: 0,
      y: 0
    });

    _this.gpu = gpu;
    var canvas = document.getElementById(canvasID);
    _this.id = canvas.id.replace('-canvas', '');
    var targetID = canvasID + '-scripting';
    if (document.getElementById(targetID) !== null) _this.renderTarget = document.getElementById(targetID);else {
      _this.renderTarget = document.createElement('code');
      _this.renderTarget.id = targetID;
      Object.assign(_this.renderTarget.style, {
        backdropFilter: "blur(10px) brightness(70%)",
        borderRadius: "5px",
        width: "fit-content",
        height: 'fit-content',
        position: 'absolute',
        bottom: '4px',
        left: '4px',
        zIndex: '10',
        color: 'white',
        padding: '8px',
        fontSize: '.75rem',
        maxWidth: '15vw',
        display: 'none',
        maxHeight: '50vh',
        overflow: 'hidden'
      });
      canvas.parentNode.appendChild(_this.renderTarget);
    }

    document.addKey = function (key) {
      _this.pressedKeys[key] = true;
    };

    document.removeKey = function (key) {
      delete _this.pressedKeys[key];
    };

    document.setMouse = function (position) {
      _this.mousePosition = position;
    };

    return _this;
  }

  _createClass(ScriptSystem, [{
    key: "execute",
    value: function execute(options, systems, data, entities, entitiesMap, updateAllLights) {
      _get(_getPrototypeOf(ScriptSystem.prototype), "execute", this).call(this);

      var scriptedEntities = data.scriptedEntities,
          scripts = data.scripts,
          meshSources = data.meshSources;
      var canExecutePhysicsAnimation = options.canExecutePhysicsAnimation,
          lockCamera = options.lockCamera,
          elapsed = options.elapsed,
          camera = options.camera;

      if (canExecutePhysicsAnimation) {
        if (!this.eventSet) {
          lockCamera(true);
          this.eventSet = true;
          document.addEventListener('mouseup', handler);
          document.addEventListener('keydown', handler);
          document.addEventListener('keyup', handler);
          document.addEventListener('mousemove', handler);
          document.addEventListener('mousedown', handler);
        }

        this.renderTarget.style.display = 'block';
        var keys = Object.keys(scriptedEntities);

        for (var i = 0; i < keys.length; i++) {
          var embeddedScript = scripts[scriptedEntities[keys[i]].components[COMPONENTS.SCRIPT].registryID];
          if (embeddedScript) this.executeLoop(embeddedScript.executor, elapsed, entitiesMap, camera, meshSources, systems[SYSTEMS.PICK], entities, updateAllLights);else {
            var entityScripts = scriptedEntities[keys[i]].components[COMPONENTS.SCRIPT].scripts;

            for (var j = 0; j < entityScripts.length; j++) {
              var currentS = scripts[entityScripts[j]];
              if (currentS) this.executeLoop(currentS.executor, elapsed, _defineProperty({}, scriptedEntities[keys[i]].id, scriptedEntities[keys[i]]), camera, meshSources, systems[SYSTEMS.PICK], entities, updateAllLights);
            }
          }
        } // LEVEL BLUEPRINT


        if (scripts[this.id]) this.executeLoop(scripts[this.id].executor, elapsed, entitiesMap, camera, meshSources, systems[SYSTEMS.PICK], entities, updateAllLights);
      } else if (this.eventSet) {
        lockCamera(false);
        this.eventSet = false;
        this.renderTarget.style.display = 'none';
        this.renderTarget.innerText = '';
        document.removeEventListener('mouseup', handler);
        document.removeEventListener('mousedown', handler);
        document.removeEventListener('keydown', handler);
        document.removeEventListener('keyup', handler);
        document.removeEventListener('mousemove', handler);
      }
    }
  }, {
    key: "executeLoop",
    value: function executeLoop(executor, elapsed, entities, camera, meshSources, pickSystem, entitiesArr, updateAllLights) {
      var _this2 = this;

      executor.execute({
        elapsed: elapsed,
        entities: entities,
        renderTarget: this.renderTarget,
        pressedKeys: this.pressedKeys,
        KEYS: KEYS,
        mousePosition: this.mousePosition,
        camera: camera,
        glMatrix: glMatrix,
        COMPONENTS: COMPONENTS,
        utils: {
          toEuler: Transformation.getEuler,
          pick: function pick(entity) {
            var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this2.mousePosition;

            if (entity.components[COMPONENTS.MESH]) {
              var index = pickSystem.pickElement(function (shader, proj) {
                var _entity$components$CO;

                var mesh = meshSources[(_entity$components$CO = entity.components[COMPONENTS.MESH]) === null || _entity$components$CO === void 0 ? void 0 : _entity$components$CO.meshID];
                PickSystem.drawMesh(mesh, entity, camera.viewMatrix, proj, entity.components[COMPONENTS.TRANSFORM].transformationMatrix, shader, _this2.gpu);
              }, coords, camera);
              return entitiesArr.find(function (e) {
                var _e$components$COMPONE;

                return ((_e$components$COMPONE = e.components[COMPONENTS.PICK]) === null || _e$components$COMPONE === void 0 ? void 0 : _e$components$COMPONE.pickID[0]) * 255 === index;
              });
            }

            return undefined;
          },
          updateAllLights: updateAllLights
        }
      });
    }
  }], [{
    key: "parseScript",
    value: function parseScript(code) {
      var className = code.name ? prepareName(code.name) : 'Script';
      var hasName = code.match(/class(\s+)(\w+)/gm);
      var body = "\n            ".concat(hasName !== null ? code : "class ".concat(className, " ").concat(code), "            \n            return new ").concat(hasName !== null ? hasName[0].replace('class', '') : className, "()\n        ");
      var executionLine = new Function('', body);
      return executionLine([]);
    }
  }]);

  return ScriptSystem;
}(System);

function prepareName(name) {
  var word = name.trim().replaceAll(/\s/g, "").replaceAll('-', '').replaceAll('_', '').replaceAll('.', '').replaceAll(',', '');
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function handler(event) {
  var addKey = event.currentTarget.addKey;
  var removeKey = event.currentTarget.removeKey;
  var setMouse = event.currentTarget.setMouse;

  switch (event.type) {
    case 'keydown':
      addKey(event.code);
      break;

    case 'keyup':
      removeKey(event.code);
      break;

    case 'mousemove':
      setMouse({
        x: event.clientX,
        y: event.clientY
      });
      break;

    case 'mousedown':
      addKey('Mouse' + event.button);
      break;

    case 'mouseup':
      removeKey('Mouse' + event.button);
      break;
  }
}

var _loadSkybox = /*#__PURE__*/new WeakSet();

var RenderingPackager = /*#__PURE__*/function () {
  function RenderingPackager() {
    _classCallCheck(this, RenderingPackager);

    _classPrivateMethodInitSpec(this, _loadSkybox);

    _defineProperty(this, "rootCamera", new RootCameraInstance());
  }

  _createClass(RenderingPackager, [{
    key: "makePackage",
    value: function makePackage(_ref) {
      var _filteredEntities$fil, _filteredEntities$fil2;

      var entities = _ref.entities,
          materials = _ref.materials,
          meshes = _ref.meshes,
          params = _ref.params,
          _ref$scripts = _ref.scripts,
          scripts = _ref$scripts === void 0 ? [] : _ref$scripts,
          onBeforeRender = _ref.onBeforeRender,
          onWrap = _ref.onWrap,
          gpu = _ref.gpu,
          brdf = _ref.brdf,
          fallbackMaterial = _ref.fallbackMaterial;
      var filteredEntities = (params.canExecutePhysicsAnimation ? entities.map(function (e) {
        return cloneClass(e);
      }) : entities).filter(function (e) {
        return e.active;
      });

      var attributes = _objectSpread2({}, params);

      var data = {
        pointLights: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.POINT_LIGHT];
        }),
        spotLights: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.SPOT_LIGHT];
        }),
        terrains: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.TERRAIN];
        }),
        meshes: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.MESH];
        }),
        skybox: (_filteredEntities$fil = filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.SKYBOX] && e.active;
        })[0]) === null || _filteredEntities$fil === void 0 ? void 0 : _filteredEntities$fil.components[COMPONENTS.SKYBOX],
        directionalLights: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.DIRECTIONAL_LIGHT];
        }),
        skylight: (_filteredEntities$fil2 = filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.SKYLIGHT] && e.active;
        })[0]) === null || _filteredEntities$fil2 === void 0 ? void 0 : _filteredEntities$fil2.components[COMPONENTS.SKYLIGHT],
        cubeMaps: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.CUBE_MAP];
        }),
        cameras: filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.CAMERA];
        }),
        scriptedEntities: toObject(filteredEntities.filter(function (e) {
          return e.components[COMPONENTS.SCRIPT];
        })),
        materials: toObject(materials),
        meshSources: toObject(meshes),
        scripts: toObject(RenderingPackager.parseScripts(scripts)),
        entitiesMap: toObject(entities)
      };

      _classPrivateMethodGet(this, _loadSkybox, _loadSkybox2).call(this, data.skybox, gpu);

      data.cubeMapsSources = toObject(data.cubeMaps);
      attributes.camera = params.camera ? params.camera : this.rootCamera;
      attributes.entitiesLength = filteredEntities.length;
      attributes.onWrap = onWrap ? onWrap : function () {
        return null;
      };
      attributes.onBeforeRender = onBeforeRender ? onBeforeRender : function () {
        return null;
      };
      attributes.brdf = brdf;
      attributes.fallbackMaterial = fallbackMaterial;
      return {
        data: _objectSpread2(_objectSpread2({}, data), this.getLightsUniforms(data.pointLights, data.directionalLights)),
        attributes: attributes,
        filteredEntities: filteredEntities
      };
    }
  }, {
    key: "getLightsUniforms",
    value: function getLightsUniforms(pointLights, directionalLights) {
      var maxTextures = directionalLights.length,
          pointLightsQuantity = pointLights.length;
      var directionalLightsData = [],
          dirLightPOV = [],
          lClip = [],
          pointLightData = [];

      _classStaticPrivateMethodGet(RenderingPackager, RenderingPackager, _getArray).call(RenderingPackager, maxTextures, function (i) {
        var current = directionalLights[i];

        if (current && current.components[COMPONENTS.DIRECTIONAL_LIGHT]) {
          var l = current.components[COMPONENTS.DIRECTIONAL_LIGHT];
          directionalLightsData[i] = [l.direction, l.fixedColor, [].concat(_toConsumableArray(l.atlasFace), [l.shadowMap ? 1 : 0])].flat();
          dirLightPOV[i] = multiply$5([], l.lightProjection, l.lightView);
        }
      });

      _classStaticPrivateMethodGet(RenderingPackager, RenderingPackager, _getArray).call(RenderingPackager, pointLightsQuantity, function (i) {
        var current = pointLights[i];

        if (current && current.components[COMPONENTS.POINT_LIGHT]) {
          var _current$components$C, _current$components$C2, _current$components$C3, _current$components$C4;

          lClip[i] = [(_current$components$C = current.components[COMPONENTS.POINT_LIGHT]) === null || _current$components$C === void 0 ? void 0 : _current$components$C.zNear, (_current$components$C2 = current.components[COMPONENTS.POINT_LIGHT]) === null || _current$components$C2 === void 0 ? void 0 : _current$components$C2.zFar];
          pointLightData[i] = [[].concat(_toConsumableArray(current.components[COMPONENTS.TRANSFORM].position), [0]), [].concat(_toConsumableArray((_current$components$C3 = current.components[COMPONENTS.POINT_LIGHT]) === null || _current$components$C3 === void 0 ? void 0 : _current$components$C3.fixedColor), [0]), [].concat(_toConsumableArray((_current$components$C4 = current.components[COMPONENTS.POINT_LIGHT]) === null || _current$components$C4 === void 0 ? void 0 : _current$components$C4.attenuation), [0]), [current.components[COMPONENTS.POINT_LIGHT].zFar, current.components[COMPONENTS.POINT_LIGHT].zNear, current.components[COMPONENTS.POINT_LIGHT].shadowMap ? 1 : 0, 0]].flat();
        }
      });

      return {
        pointLightsQuantity: pointLightsQuantity,
        pointLightData: pointLightData,
        maxTextures: maxTextures,
        directionalLightsData: directionalLightsData,
        dirLightPOV: dirLightPOV,
        lClip: lClip
      };
    }
  }], [{
    key: "parseScripts",
    value: function parseScripts(scripts) {
      return scripts.map(function (s) {
        try {
          return {
            id: s.id,
            executor: ScriptSystem.parseScript(s.executors)
          };
        } catch (e) {
          return undefined;
        }
      }).filter(function (e) {
        return e !== undefined;
      });
    }
  }]);

  return RenderingPackager;
}();

function _getArray(size, onIndex) {
  for (var i = 0; i < size; i++) {
    onIndex(i);
  }
}

function _loadSkybox2(skyboxElement, gpu) {
  if (skyboxElement && !skyboxElement.ready) {
    var shader = new ShaderInstance(vertex$b, generationFragment, gpu);
    if (!skyboxElement.cubeMap) skyboxElement.cubeMap = new CubeMapInstance(gpu, skyboxElement.resolution, false);

    if (skyboxElement.blob) {
      skyboxElement.texture = createTexture(gpu, skyboxElement.blob.width, skyboxElement.blob.height, gpu.RGB16F, 0, gpu.RGB, gpu.FLOAT, skyboxElement.blob, gpu.LINEAR, gpu.LINEAR, gpu.CLAMP_TO_EDGE, gpu.CLAMP_TO_EDGE);
      shader.use();
      skyboxElement.cubeMap.resolution = skyboxElement.resolution;
      skyboxElement.cubeMap.draw(function (yaw, pitch, perspective) {
        shader.bindForUse({
          projectionMatrix: perspective,
          viewMatrix: lookAt(yaw, pitch, [0, 0, 0]),
          uSampler: skyboxElement.texture
        });
        gpu.drawArrays(gpu.TRIANGLES, 0, 36);
      }, true);
      skyboxElement.cubeMap.generateIrradiance();
      skyboxElement.cubeMap.generatePrefiltered(skyboxElement.prefilteredMipmaps, skyboxElement.resolution / skyboxElement.prefilteredMipmaps);
      skyboxElement.ready = true;
    }

    gpu.deleteProgram(shader.program);
  }
}

var CameraCubeSystem = /*#__PURE__*/function (_System) {
  _inherits(CameraCubeSystem, _System);

  var _super = _createSuper(CameraCubeSystem);

  function CameraCubeSystem(id) {
    var _this;

    _classCallCheck(this, CameraCubeSystem);

    _this = _super.call(this, []);
    _this.renderTarget = document.getElementById(id.replace('-canvas', '-camera'));
    return _this;
  }

  _createClass(CameraCubeSystem, [{
    key: "execute",
    value: function execute(options) {
      _get(_getPrototypeOf(CameraCubeSystem.prototype), "execute", this).call(this);

      var camera = options.camera;

      if (this.renderTarget) {
        var t = camera.getNotTranslatedViewMatrix();
        this.renderTarget.style.transform = "translateZ(calc(var(--cubeSize) * -3)) matrix3d(".concat(t, ")");
      }
    }
  }]);

  return CameraCubeSystem;
}(System);

var CullingSystem = /*#__PURE__*/function (_System) {
  _inherits(CullingSystem, _System);

  var _super = _createSuper(CullingSystem);

  function CullingSystem(gpu) {
    var _this;

    _classCallCheck(this, CullingSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "_ready", false);

    _this.gpu = gpu;
    return _this;
  }

  _createClass(CullingSystem, [{
    key: "execute",
    value: function execute(options, systems, data) {
      _get(_getPrototypeOf(CullingSystem.prototype), "execute", this).call(this); // TODO - REMOVE NOT VISIBLE - REMOVE FRUSTUM CULLED - REMOVE GPU OCCLUSION CULLED
      // const filteredMeshes = this._find(entities, e => filteredEntities.meshes[e.id] !== undefined)
      // filteredMeshes.forEach(m => {
      //     if(!m.query)
      //         m.query = this.gpu.createQuery()
      //
      //     if (m.queryInProgress && this.gpu.getQueryParameter(m.query, this.gpu.QUERY_RESULT_AVAILABLE)) {
      //         m.occluded = !this.gpu.getQueryParameter(m.query, this.gpu.QUERY_RESULT);
      //         m.queryInProgress = false;
      //     }
      //     if (!m.queryInProgress) {
      //         this.gpu.beginQuery(this.gpu.ANY_SAMPLES_PASSED_CONSERVATIVE, m.query);
      //         this.gpu.drawArrays(this.gpu.TRIANGLES, 0, m.boundingBoxNumVertices);
      //         this.gpu.endQuery(this.gpu.ANY_SAMPLES_PASSED_CONSERVATIVE);
      //         m.queryInProgress = true;
      //     }
      // })

    }
  }]);

  return CullingSystem;
}(System);

var GBufferSystem = /*#__PURE__*/function (_System) {
  _inherits(GBufferSystem, _System);

  var _super = _createSuper(GBufferSystem);

  function GBufferSystem(gpu) {
    var _this;

    var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      w: window.screen.width,
      h: window.screen.height
    };

    _classCallCheck(this, GBufferSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "lastMaterial", void 0);

    _this.gpu = gpu;
    _this.frameBuffer = new FramebufferInstance(gpu, resolution.w, resolution.h);

    _this.frameBuffer.texture({
      attachment: 0,
      precision: _this.gpu.RGBA32F,
      format: _this.gpu.RGBA,
      type: _this.gpu.FLOAT
    }).texture({
      attachment: 1
    }).texture({
      attachment: 2
    }).texture({
      attachment: 3
    }).texture({
      attachment: 4
    }).texture({
      attachment: 5
    }).depthTest();

    return _this;
  }

  _createClass(GBufferSystem, [{
    key: "execute",
    value: function execute(options, systems, data) {
      var _systems$SYSTEMS$CUBE;

      _get(_getPrototypeOf(GBufferSystem.prototype), "execute", this).call(this);

      var meshes = data.meshes,
          skybox = data.skybox,
          materials = data.materials,
          meshSources = data.meshSources,
          cubeMapsSources = data.cubeMapsSources;
      var elapsed = options.elapsed,
          camera = options.camera,
          fallbackMaterial = options.fallbackMaterial,
          brdf = options.brdf;
      this.frameBuffer.startMapping();
      var toConsumeCubeMaps = (_systems$SYSTEMS$CUBE = systems[SYSTEMS.CUBE_MAP]) === null || _systems$SYSTEMS$CUBE === void 0 ? void 0 : _systems$SYSTEMS$CUBE.cubeMapsConsumeMap;
      this.lastMaterial = undefined;

      for (var m = 0; m < meshes.length; m++) {
        var current = meshes[m];
        var mesh = meshSources[current.components[COMPONENTS.MESH].meshID];

        if (mesh !== undefined) {
          var t = current.components[COMPONENTS.TRANSFORM];
          var currentMaterial = materials[current.components[COMPONENTS.MATERIAL].materialID];
          var mat = currentMaterial && currentMaterial.ready ? currentMaterial : fallbackMaterial;
          if (!mat || !mat.ready) mat = fallbackMaterial;
          var c = toConsumeCubeMaps ? toConsumeCubeMaps[current.id] : undefined;
          var cubeMapToApply = void 0,
              ambient = {};
          if (c) cubeMapToApply = cubeMapsSources[c];

          if (cubeMapToApply) {
            var cube = cubeMapToApply.components[COMPONENTS.CUBE_MAP];
            ambient.irradianceMap = cube.irradiance ? cube.irradianceMap : skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.irradianceTexture;
            ambient.prefilteredMap = cube.prefilteredMap;
            ambient.prefilteredLod = cube.prefilteredMipmaps;
          } else if (skybox && skybox.cubeMap !== undefined) {
            ambient.irradianceMap = skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.irradianceTexture;
            ambient.prefilteredMap = skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.prefiltered;
            ambient.prefilteredLod = 6;
          }

          this.drawMesh(mesh, camera.position, camera.viewMatrix, camera.projectionMatrix, t.transformationMatrix, mat, current.components[COMPONENTS.MESH].normalMatrix, undefined, current.components[COMPONENTS.MATERIAL], ambient.irradianceMap, ambient.prefilteredMap, ambient.prefilteredLod, elapsed, brdf);
        }
      }

      this.frameBuffer.stopMapping();
    }
  }, {
    key: "drawMesh",
    value: function drawMesh(mesh, camPosition, viewMatrix, projectionMatrix, transformMatrix, material, normalMatrix, indexSelected, materialComponent, closestIrradiance, closestPrefiltered, prefilteredLod, elapsed, brdf) {
      var _material$settings;

      if (material && !((_material$settings = material.settings) !== null && _material$settings !== void 0 && _material$settings.isForwardShaded)) {
        var _material$settings2, _material$settings3, _material$settings4, _material$settings5, _material$settings6, _material$settings7, _material$settings8, _material$settings9, _material$settings10, _material$settings11, _material$settings12, _material$settings13, _material$settings14;

        mesh.use();
        material.use(this.lastMaterial !== material.id, _objectSpread2({
          projectionMatrix: projectionMatrix,
          transformMatrix: transformMatrix,
          viewMatrix: viewMatrix,
          normalMatrix: normalMatrix,
          indexSelected: indexSelected,
          brdfSampler: brdf,
          elapsedTime: elapsed,
          cameraVec: camPosition,
          irradianceMap: closestIrradiance,
          prefilteredMapSampler: closestPrefiltered,
          ambientLODSamples: prefilteredLod
        }, materialComponent.overrideMaterial ? materialComponent.uniformValues : {}));
        this.lastMaterial = material.id;
        if ((_material$settings2 = material.settings) !== null && _material$settings2 !== void 0 && _material$settings2.doubleSided) this.gpu.disable(this.gpu.CULL_FACE);else if ((_material$settings3 = material.settings) !== null && _material$settings3 !== void 0 && _material$settings3.cullFace) this.gpu.cullFace(this.gpu[(_material$settings4 = material.settings) === null || _material$settings4 === void 0 ? void 0 : _material$settings4.cullFace]);
        if (((_material$settings5 = material.settings) === null || _material$settings5 === void 0 ? void 0 : _material$settings5.depthMask) === false) this.gpu.depthMask(false);
        if (((_material$settings6 = material.settings) === null || _material$settings6 === void 0 ? void 0 : _material$settings6.depthTest) === false) this.gpu.disable(this.gpu.DEPTH_TEST);
        if (((_material$settings7 = material.settings) === null || _material$settings7 === void 0 ? void 0 : _material$settings7.blend) === false) this.gpu.disable(this.gpu.BLEND);else if ((_material$settings8 = material.settings) !== null && _material$settings8 !== void 0 && _material$settings8.blendFunc) this.gpu.blendFunc(this.gpu[(_material$settings9 = material.settings) === null || _material$settings9 === void 0 ? void 0 : _material$settings9.blendFuncSource], this.gpu[(_material$settings10 = material.settings) === null || _material$settings10 === void 0 ? void 0 : _material$settings10.blendFuncTarget]);
        this.gpu.drawElements(this.gpu.TRIANGLES, mesh.verticesQuantity, this.gpu.UNSIGNED_INT, 0);
        if ((_material$settings11 = material.settings) !== null && _material$settings11 !== void 0 && _material$settings11.doubleSided) this.gpu.enable(this.gpu.CULL_FACE);
        if (((_material$settings12 = material.settings) === null || _material$settings12 === void 0 ? void 0 : _material$settings12.depthMask) === false) this.gpu.depthMask(true);
        if (((_material$settings13 = material.settings) === null || _material$settings13 === void 0 ? void 0 : _material$settings13.depthTest) === false) this.gpu.enable(this.gpu.DEPTH_TEST);
        if (((_material$settings14 = material.settings) === null || _material$settings14 === void 0 ? void 0 : _material$settings14.blend) === false) this.gpu.enable(this.gpu.BLEND);
        mesh.finish();
      }
    }
  }]);

  return GBufferSystem;
}(System);

var PerformanceSystem = /*#__PURE__*/function (_System) {
  _inherits(PerformanceSystem, _System);

  var _super = _createSuper(PerformanceSystem);

  function PerformanceSystem(gpu, canvasID) {
    var _this;

    _classCallCheck(this, PerformanceSystem);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_framesRendered", 0);

    _defineProperty(_assertThisInitialized(_this), "_times", []);

    _defineProperty(_assertThisInitialized(_this), "_visible", true);

    _defineProperty(_assertThisInitialized(_this), "_entitiesLength", 0);

    _this.gpu = gpu;
    var canvas = document.getElementById(canvasID);
    var targetID = canvas.id.replace('-canvas', '-performance-metrics');
    if (document.getElementById(targetID) !== null) _this.renderTarget = document.getElementById(targetID);else {
      _this.renderTarget = document.createElement('div');
      _this.renderTarget.id = targetID;
      Object.assign(_this.renderTarget.style, {
        backdropFilter: "blur(10px) brightness(70%)",
        borderRadius: "5px",
        width: "fit-content",
        height: 'fit-content',
        position: 'absolute',
        bottom: '4px',
        left: '4px',
        zIndex: '10',
        color: 'white',
        padding: '8px',
        fontSize: '.75rem'
      });
      canvas.parentNode.appendChild(_this.renderTarget);
    }
    return _this;
  }

  _createClass(PerformanceSystem, [{
    key: "execute",
    value: function execute(options, systems, data) {
      _get(_getPrototypeOf(PerformanceSystem.prototype), "execute", this).call(this);

      var meshSources = data.meshSources;

      if (options.performanceMetrics) {
        if (this._entitiesLength !== options.entitiesLength) {
          this._triangles = Object.keys(meshSources).map(function (key) {
            return meshSources[key].trianglesQuantity;
          }).reduce(function (p, a) {
            return p + a;
          }, 0);
          this._meshesQuantity = Object.keys(meshSources).length;
          this._entitiesLength = options.entitiesLength;
        }

        if (!this._visible) {
          this._visible = true;
          this.renderTarget.style.display = 'block';
        } // FRAMERATE - FRAME-TIME


        var start = performance.now();

        while (this._times.length > 0 && this._times[0] <= start - 1000) {
          this._times.shift();
        }

        this._times.push(start);

        this._framesRendered = this._times.length; // if (!this._lowest || this._framesRendered < this._lowest)
        //     this._lowest = this._framesRendered
        // MEMORY

        var totalMemUsage = 0;
        Object.entries(process.memoryUsage()).forEach(function (item) {
          totalMemUsage += item[1] / 1024 / 1024;
        });
        totalMemUsage = totalMemUsage.toFixed(0);
        this.renderTarget.innerHTML = "\n                <div style=\"display: grid; align-items: flex-start; gap: 8px\">\n                    <div style=\"display: flex; align-items: center; gap: 4px\">\n                        <div>\n                            <b>".concat(this._framesRendered, "</b> fps\n                        </div>\n                       |\n                        <div>\n                           <b>").concat((start - this._previusStartTime).toFixed(2), "</b> ms\n                        </div>\n                    </div>\n                   <div>\n                       RAM: <b>").concat(totalMemUsage, "</b> mb\n                    </div>\n                    <div>\n                        Meshes:  <b>").concat(this._meshesQuantity, "</b>\n                    </div>\n                    <div>\n                        Triangles:  <b>").concat(this._triangles, "</b>\n                    </div>\n                </div>\n            ");
        this._previusStartTime = start;
      } else if (this._visible) {
        this._visible = false;
        this.renderTarget.style.display = 'none';
      }
    }
  }]);

  return PerformanceSystem;
}(System);

var vertex$1 = "#version 300 es\n\nlayout (location = 1) in vec3 position;\nlayout (location = 2) in vec3 normal;\nlayout (location = 3) in vec2 uvTexture;\nlayout (location = 4) in vec3 tangentVec;\n  \nuniform mat4 viewMatrix;\nuniform mat4 transformMatrix;\nuniform mat4 projectionMatrix;\n \nout vec3 vWorldSpacePosition; \nout vec2 texCoord;\nout vec3 normalVec;\n\nvoid main() {\n    texCoord = uvTexture;\n    vec4 worldSpacePos = transformMatrix * vec4(position , 1.);\n    vec4 p = projectionMatrix * viewMatrix * worldSpacePos;\n    \n \n    normalVec = normalize(normal);\n    vWorldSpacePosition = worldSpacePos.xyz;\n    \n    gl_Position = p;\n}\n";
var fragment$1 = "#version 300 es\nprecision mediump  float;\n\n \nin vec3 vWorldSpacePosition;\nin vec2 texCoord;\nin vec3 normalVec;\n\nuniform vec3 lightColor;\nuniform sampler2D albedoSampler; \n\nlayout (location = 0) out vec4 rsmNormal;\nlayout (location = 1) out vec4 rsmFlux;\nlayout (location = 2) out vec4 rsmWorld;\n\n\nvoid main(void){\n    \n      \n    rsmNormal =  vec4(normalVec, 1.0);\n    rsmFlux = vec4((lightColor * texture(albedoSampler, texCoord).rgb), 1.0);\n    rsmWorld = vec4(vec3(vWorldSpacePosition.xyz), 1.0);\n    \n \n}\n";

var vertex = "#version 300 es\n\nlayout (location = 1) in vec3 position;\n\nuniform mat4 viewMatrix;\nuniform mat4 transformMatrix;\nuniform mat4 projectionMatrix;\nout vec4 vPosition;\n \nvoid main() { \n    vPosition = transformMatrix * vec4(position , 1.) ;\n    gl_Position = projectionMatrix * viewMatrix * vPosition;\n\n}\n";
var fragment = "#version 300 es\nprecision mediump  float;\n\nvoid main(void){\n \n}\n";
var omniFragment = "#version 300 es\nprecision mediump  float;\n\nuniform vec3 lightPosition;\nuniform vec2 shadowClipNearFar;\n\nin vec4 vPosition;\n \nvoid main(void){\n    vec3 fromLightToFrag = (vPosition.xyz - lightPosition);\n   \n    float lightFragDist =(length(fromLightToFrag) - shadowClipNearFar.x)/(shadowClipNearFar.y - shadowClipNearFar.x);\n\n    gl_FragDepth = lightFragDist;\n}\n";

var VIEWS = {
  target: [[1., 0., 0.], [-1., 0., 0.], [0., 1., 0.], [0., -1., 0.], [0., 0., 1.], [0., 0., -1.]],
  up: [[0., -1., 0.], [0., -1., 0.], [0., 0., 1.], [0., 0., -1.], [0., -1., 0.], [0., -1., 0.]]
};

var ShadowMapSystem = /*#__PURE__*/function (_System) {
  _inherits(ShadowMapSystem, _System);

  var _super = _createSuper(ShadowMapSystem);

  function ShadowMapSystem(gpu) {
    var _this;

    _classCallCheck(this, ShadowMapSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "_needsGIUpdate", true);

    _this.gpu = gpu;
    _this.maxCubeMaps = 2;
    _this.cubeMaps = [new CubeMapInstance(gpu, 512, true), new CubeMapInstance(gpu, 512, true)];
    _this.resolutionPerTexture = 1024;
    _this.maxResolution = 4096;
    _this.rsmResolution = 512;
    _this.rsmFramebuffer = new FramebufferInstance(gpu, _this.rsmResolution, _this.rsmResolution);

    _this.rsmFramebuffer.texture({
      attachment: 0
    }).texture({
      attachment: 1
    }).texture({
      attachment: 2
    }).depthTest();

    _this.shadowsFrameBuffer = new FramebufferInstance(gpu, _this.maxResolution, _this.maxResolution);

    _this.shadowsFrameBuffer.depthTexture();

    _this.reflectiveShadowMapShader = new ShaderInstance(vertex$1, fragment$1, gpu);
    _this.shadowMapShader = new ShaderInstance(vertex, fragment, gpu);
    _this.shadowMapOmniShader = new ShaderInstance(vertex, omniFragment, gpu);
    return _this;
  }

  _createClass(ShadowMapSystem, [{
    key: "needsGIUpdate",
    get: function get() {
      return this._needsGIUpdate;
    },
    set: function set(data) {
      this._needsGIUpdate = data;
    }
  }, {
    key: "execute",
    value: function execute(options, systems, data) {
      var _systems$SYSTEMS$TRAN,
          _this2 = this;

      _get(_getPrototypeOf(ShadowMapSystem.prototype), "execute", this).call(this);

      var pointLights = data.pointLights;
          data.spotLights;
          data.terrains;
          var meshes = data.meshes;
          data.skybox;
          var directionalLights = data.directionalLights,
          materials = data.materials,
          meshSources = data.meshSources;
          data.cubeMaps;
          var skylight = data.skylight;
      var shadingModel = options.shadingModel,
          dataChanged = options.dataChanged,
          setDataChanged = options.setDataChanged;
      var lights2D = [],
          sky = false,
          lights3D = [],
          transformChanged = (_systems$SYSTEMS$TRAN = systems[SYSTEMS.TRANSFORMATION]) === null || _systems$SYSTEMS$TRAN === void 0 ? void 0 : _systems$SYSTEMS$TRAN.changed;

      for (var i = 0; i < directionalLights.length; i++) {
        var current = directionalLights[i].components[COMPONENTS.DIRECTIONAL_LIGHT];

        if ((current.changed || transformChanged || skylight !== null && skylight !== void 0 && skylight.changed) && current.shadowMap) {
          lights2D.push(current);
          current.changed = false;
        }
      }

      for (var _i = 0; _i < pointLights.length; _i++) {
        var _current = pointLights[_i].components[COMPONENTS.POINT_LIGHT];

        if ((_current.changed || transformChanged) && _current.shadowMap) {
          lights3D.push(_objectSpread2(_objectSpread2({}, _current), {}, {
            translation: pointLights[_i].components[COMPONENTS.TRANSFORM].position
          }));
          _current.changed = false;
        }
      }

      if (skylight && (skylight.changed || lights2D.length > 0)) {
        sky = skylight.changed || transformChanged;
        if (skylight.shadowMap && (lights2D.length > 0 || skylight.changed)) lights2D.push(skylight);
        skylight.changed = false;
      }

      if (shadingModel === SHADING_MODELS.DETAIL && (lights2D.length > 0 || lights3D.length > 0)) {
        (function () {
          _this2.gpu.cullFace(_this2.gpu.FRONT);

          if (dataChanged) setDataChanged();

          _this2.shadowMapShader.use();

          var meshSystem = systems[SYSTEMS.MESH];
          var currentColumn = 0,
              currentRow = 0;

          _this2.gpu.clearDepth(1);

          if (lights2D.length > 0) {
            _this2.shadowsFrameBuffer.startMapping();

            _this2.gpu.enable(_this2.gpu.SCISSOR_TEST);

            for (var face = 0; face < Math.pow(_this2.maxResolution / _this2.resolutionPerTexture, 2); face++) {
              if (face < lights2D.length) {
                _this2.gpu.viewport(currentColumn * _this2.resolutionPerTexture, currentRow * _this2.resolutionPerTexture, _this2.resolutionPerTexture, _this2.resolutionPerTexture);

                _this2.gpu.scissor(currentColumn * _this2.resolutionPerTexture, currentRow * _this2.resolutionPerTexture, _this2.resolutionPerTexture, _this2.resolutionPerTexture);

                _this2.gpu.clear(_this2.gpu.DEPTH_BUFFER_BIT);

                var currentLight = lights2D[face];
                currentLight.atlasFace = [currentColumn, 0];

                _this2._loopMeshes(meshes, meshSources, meshSystem, materials, _this2.shadowMapShader, currentLight.lightView, currentLight.lightProjection, currentLight.fixedColor);
              }

              if (currentColumn > _this2.maxResolution / _this2.resolutionPerTexture) {
                currentColumn = 0;
                currentRow += 1;
              } else currentColumn += 1;
            }

            _this2.gpu.disable(_this2.gpu.SCISSOR_TEST);

            _this2.shadowsFrameBuffer.stopMapping();
          }

          if (sky) {
            _this2.needsGIUpdate = true;

            _this2.reflectiveShadowMapShader.use();

            _this2.rsmFramebuffer.startMapping(); // TODO - USE MESH MATERIAL SHADER


            _this2._loopMeshes(meshes, meshSources, meshSystem, materials, _this2.reflectiveShadowMapShader, skylight.lightView, skylight.lightProjection, skylight.fixedColor);

            _this2.rsmFramebuffer.stopMapping();
          }

          if (lights3D.length > 0) {
            _this2.shadowMapOmniShader.use();

            _this2.gpu.viewport(0, 0, 512, 512);

            var _loop = function _loop(_i2) {
              var current = lights3D[_i2];

              if (current) {
                _this2.cubeMaps[_i2].draw(function (yaw, pitch, perspective, index) {
                  var target = add$4([], current.translation, VIEWS.target[index]);

                  _this2._loopMeshes(meshes, meshSources, meshSystem, materials, _this2.shadowMapOmniShader, lookAt$1([], current.translation, target, VIEWS.up[index]), perspective, undefined, current.translation, [current.zNear, current.zFar]);
                }, false, current.zFar, current.zNear);
              }
            };

            for (var _i2 = 0; _i2 < _this2.maxCubeMaps; _i2++) {
              _loop(_i2);
            }
          }

          _this2.gpu.cullFace(_this2.gpu.BACK);
        })();
      }
    }
  }, {
    key: "_loopMeshes",
    value: function _loopMeshes(meshes, meshSources, meshSystem, materials, shader, view, projection, color, lightPosition, shadowClipNearFar) {
      for (var m = 0; m < meshes.length; m++) {
        var current = meshes[m];
        var mesh = meshSources[current.components[COMPONENTS.MESH].meshID];

        if (mesh !== undefined) {
          var currentMaterialID = current.components[COMPONENTS.MATERIAL].materialID;
          var mat = materials[currentMaterialID] ? materials[currentMaterialID] : undefined;
          if (!mat || !mat.ready) mat = meshSystem.fallbackMaterial;
          var t = current.components[COMPONENTS.TRANSFORM];

          this._drawMesh(mesh, view, projection, t.transformationMatrix, mat, color, shader, lightPosition, shadowClipNearFar);
        }
      }
    }
  }, {
    key: "_drawMesh",
    value: function _drawMesh(mesh, viewMatrix, projectionMatrix, transformMatrix, mat, lightColor, shader, lightPosition, shadowClipNearFar) {
      this.gpu.bindVertexArray(mesh.VAO);
      this.gpu.bindBuffer(this.gpu.ELEMENT_ARRAY_BUFFER, mesh.indexVBO);
      mesh.vertexVBO.enable();

      if (shader === this.reflectiveShadowMapShader) {
        mesh.normalVBO.enable();
        mesh.uvVBO.enable();
      }

      shader.bindForUse({
        shadowClipNearFar: shadowClipNearFar,
        viewMatrix: viewMatrix,
        transformMatrix: transformMatrix,
        projectionMatrix: projectionMatrix,
        lightColor: lightColor,
        albedoSampler: mat === null || mat === void 0 ? void 0 : mat.rsmAlbedo,
        lightPosition: lightPosition
      });
      this.gpu.drawElements(this.gpu.TRIANGLES, mesh.verticesQuantity, this.gpu.UNSIGNED_INT, 0);
      this.gpu.bindVertexArray(null);
      this.gpu.bindBuffer(this.gpu.ELEMENT_ARRAY_BUFFER, null);
      mesh.vertexVBO.disable();
      mesh.normalVBO.disable();
      mesh.uvVBO.disable();
    }
  }]);

  return ShadowMapSystem;
}(System);

var TransformSystem = /*#__PURE__*/function (_System) {
  _inherits(TransformSystem, _System);

  var _super = _createSuper(TransformSystem);

  function TransformSystem() {
    var _this;

    _classCallCheck(this, TransformSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "_changed", false);

    _defineProperty(_assertThisInitialized(_this), "_changedMeshes", []);

    return _this;
  }

  _createClass(TransformSystem, [{
    key: "changed",
    get: function get() {
      return this._changed;
    }
  }, {
    key: "execute",
    value: function execute(options, systems, data, entities) {
      var _this2 = this;

      _get(_getPrototypeOf(TransformSystem.prototype), "execute", this).call(this);

      this._changed = false;
      this._changedMeshes = [];

      var _loop = function _loop(i) {
        var _current$components$C;

        var current = entities[i];

        if (current !== undefined && (_current$components$C = current.components[COMPONENTS.TRANSFORM]) !== null && _current$components$C !== void 0 && _current$components$C.changed) {
          var _this2$_find$, _this2$_find$$compone;

          _this2._changedMeshes.push(current);

          _this2._changed = true;
          var parent;
          if (current.linkedTo) parent = (_this2$_find$ = _this2._find(entities, function (e) {
            return e.id === current.linkedTo;
          })[0]) === null || _this2$_find$ === void 0 ? void 0 : (_this2$_find$$compone = _this2$_find$.components[COMPONENTS.TRANSFORM]) === null || _this2$_find$$compone === void 0 ? void 0 : _this2$_find$$compone.transformationMatrix;
          var component = current.components[COMPONENTS.TRANSFORM];
          var transformationMatrix = Transformation.transform(component.translation, component.rotationQuat, component.scaling, options.rotationType, component.transformationMatrix);

          if (current.components[COMPONENTS.COLLIDER]) {
            switch (current.components[COMPONENTS.COLLIDER].axis) {
              case 'x':
                if (current.components[COMPONENTS.TRANSFORM].scaling[0] > 1) current.components[COMPONENTS.COLLIDER].radius *= component.scaling[0];
                break;

              case 'y':
                if (current.components[COMPONENTS.TRANSFORM].scaling[1] > 1) current.components[COMPONENTS.COLLIDER].radius *= component.scaling[1];
                break;

              case 'z':
                if (current.components[COMPONENTS.TRANSFORM].scaling[2] > 1) current.components[COMPONENTS.COLLIDER].radius *= component.scaling[2];
                break;
            }
          }

          if (parent) multiply$5(current.components[COMPONENTS.TRANSFORM].transformationMatrix, parent, transformationMatrix);else current.components[COMPONENTS.TRANSFORM].transformationMatrix = transformationMatrix;

          for (var j = 0; j < entities.length; j++) {
            if (entities[j].components[COMPONENTS.TRANSFORM] && entities[j].linkedTo === current.id) entities[j].components[COMPONENTS.TRANSFORM].changed = true;
          }

          current.components[COMPONENTS.TRANSFORM].changed = false;
          if (current.components[COMPONENTS.MESH] !== undefined) current.components[COMPONENTS.MESH].normalMatrix = _this2._updateNormalMatrix(current.components[COMPONENTS.TRANSFORM].transformationMatrix);
        }
      };

      for (var i = 0; i < entities.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "_updateNormalMatrix",
    value: function _updateNormalMatrix(transformationMatrix) {
      return linearAlgebraMath.normalMatrix(Array.from(transformationMatrix));
    }
  }]);

  return TransformSystem;
}(System);

function intersectBoundingSphere(currentRadius, targetRadius, currentPosition, targetPosition) {
  var radiusDistance = currentRadius + targetRadius;

  if (targetPosition.length === 3 || currentPosition === 3) {
    var centerDistance = [0, 0, 0];
    subtract$2(centerDistance, targetPosition, currentPosition);
    centerDistance = length$4(centerDistance);
    return centerDistance - radiusDistance <= .1;
  } else {
    var _centerDistance = [0, 0, 0, 1];
    subtract$1(_centerDistance, targetPosition, currentPosition);
    _centerDistance = length$3(_centerDistance);
    return _centerDistance - radiusDistance <= .1;
  }
}

var STEPS_CUBE_MAP = {
  BASE: 0,
  DONE: 3,
  CALCULATE: 4
};

var CubeMapSystem = /*#__PURE__*/function (_System) {
  _inherits(CubeMapSystem, _System);

  var _super = _createSuper(CubeMapSystem);

  function CubeMapSystem(gpu) {
    var _this;

    _classCallCheck(this, CubeMapSystem);

    _this = _super.call(this, []);

    _defineProperty(_assertThisInitialized(_this), "step", STEPS_CUBE_MAP.BASE);

    _defineProperty(_assertThisInitialized(_this), "lastCallLength", -1);

    _defineProperty(_assertThisInitialized(_this), "cubeMapsConsumeMap", {});

    _this.gpu = gpu;
    _this.skyShader = new ShaderInstance(vertex$8, fragment$8, gpu);
    _this.vao = createVAO(gpu);
    _this.vbo = new VBO(gpu, 0, new Float32Array(cube), gpu.ARRAY_BUFFER, 3, gpu.FLOAT);
    gpu.bindVertexArray(null);
    return _this;
  }

  _createClass(CubeMapSystem, [{
    key: "execute",
    value: function execute(options, systems, data) {
      _get(_getPrototypeOf(CubeMapSystem.prototype), "execute", this).call(this);

      var cubeMaps = data.cubeMaps,
          skybox = data.skybox; // RADIUS 10

      if (this.lastCallLength !== cubeMaps.length) {
        this.step = STEPS_CUBE_MAP.BASE;
        this.lastCallLength = cubeMaps.length;
      }

      if (this.step !== STEPS_CUBE_MAP.DONE && (skybox && skybox.cubeMap || !skybox)) this.regenerate(data, options, systems);
    }
  }, {
    key: "regenerate",
    value: function regenerate(data, options, systems) {
      var cubeMaps = data.cubeMaps,
          meshes = data.meshes;

      switch (this.step) {
        case STEPS_CUBE_MAP.BASE:
          this._generateBaseTexture(options, systems, data);

          for (var i = 0; i < cubeMaps.length; i++) {
            var current = cubeMaps[i].components[COMPONENTS.CUBE_MAP];
            current.cubeMap.generateIrradiance();
          }

          for (var _i = 0; _i < cubeMaps.length; _i++) {
            var _current = cubeMaps[_i].components[COMPONENTS.CUBE_MAP];

            _current.cubeMap.generatePrefiltered(_current.prefilteredMipmaps, _current.resolution);
          }

          this.step = STEPS_CUBE_MAP.CALCULATE;
          break;

        case STEPS_CUBE_MAP.CALCULATE:
          var changedMeshes = meshes;
          var newCubeMaps = {};

          for (var _i2 = 0; _i2 < cubeMaps.length; _i2++) {
            var _current2 = cubeMaps[_i2].components[COMPONENTS.CUBE_MAP],
                pos = cubeMaps[_i2].components[COMPONENTS.TRANSFORM].position,
                radius = _current2.radius;

            for (var m = 0; m < changedMeshes.length; m++) {
              var currentMesh = changedMeshes[m].components;
              if (intersectBoundingSphere(currentMesh[COMPONENTS.MATERIAL].radius, radius, currentMesh[COMPONENTS.TRANSFORM].position.slice(0, 3), pos)) newCubeMaps[changedMeshes[m].id] = cubeMaps[_i2].id;
            }
          }

          this.cubeMapsConsumeMap = newCubeMaps;
          this.step = STEPS_CUBE_MAP.DONE;
          break;

        default:
          this.step = STEPS_CUBE_MAP.DONE;
          break;
      }
    }
  }, {
    key: "_generateBaseTexture",
    value: function _generateBaseTexture(options, systems, data) {
      var _this2 = this;

      data.pointLights;
          var meshes = data.meshes,
          skybox = data.skybox;
          data.directionalLights;
          var materials = data.materials,
          meshSources = data.meshSources,
          cubeMaps = data.cubeMaps,
          translucentMeshes = data.translucentMeshes,
          maxTextures = data.maxTextures,
          dirLights = data.dirLights,
          dirLightPOV = data.dirLightPOV,
          pointLightsQuantity = data.pointLightsQuantity,
          pointLightData = data.pointLightData;
      var fallbackMaterial = options.fallbackMaterial,
          brdf = options.brdf;
      this.gpu.clearDepth(1);

      var _loop = function _loop(i) {
        var current = cubeMaps[i].components[COMPONENTS.CUBE_MAP];
        current.cubeMap.resolution = current.resolution;
        current.cubeMap.draw(function (yaw, pitch, projection, index) {
          var target = add$4([], cubeMaps[i].components[COMPONENTS.TRANSFORM].position, VIEWS.target[index]);
          var view = lookAt$1([], cubeMaps[i].components[COMPONENTS.TRANSFORM].position, target, VIEWS.up[index]);

          var nView = _toConsumableArray(view);

          nView[12] = nView[13] = nView[14] = 0;

          if (skybox && skybox.cubeMap) {
            _this2.gpu.depthMask(false);

            _this2.skyShader.use();

            _this2.gpu.bindVertexArray(_this2.vao);

            _this2.vbo.enable();

            _this2.skyShader.bindForUse({
              uTexture: skybox === null || skybox === void 0 ? void 0 : skybox.cubeMap.texture,
              projectionMatrix: projection,
              viewMatrix: nView,
              gamma: skybox === null || skybox === void 0 ? void 0 : skybox.gamma,
              exposure: skybox === null || skybox === void 0 ? void 0 : skybox.exposure
            });

            _this2.gpu.drawArrays(_this2.gpu.TRIANGLES, 0, 36);

            _this2.vbo.disable();

            _this2.gpu.depthMask(true);
          }

          _this2.shader.use();

          _this2._loopMeshes(view, projection, cubeMaps[i].components[COMPONENTS.TRANSFORM].position, fallbackMaterial, brdf, materials, translucentMeshes, meshSources, meshes, maxTextures, dirLights, dirLightPOV, pointLightsQuantity, pointLightData);
        }, false, 10000, 1);
      };

      for (var i = 0; i < cubeMaps.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "_loopMeshes",
    value: function _loopMeshes(view, projection, cubeMapPosition, fallbackMaterial, brdf, materials, translucentMeshes, meshSources, meshes, maxTextures, dirLights, dirLightPOV, pointLightsQuantity, pointLightData) {
      for (var m = 0; m < meshes.length; m++) {
        var current = meshes[m];
        var mesh = meshSources[current.components[COMPONENTS.MESH].meshID];

        if (mesh !== undefined && !translucentMeshes[current.id]) {
          var t = current.components[COMPONENTS.TRANSFORM];
          var currentMaterial = materials[current.components[COMPONENTS.MATERIAL].materialID];
          var mat = currentMaterial ? currentMaterial : fallbackMaterial;
          if (!mat || !mat.ready) mat = fallbackMaterial;

          this._drawMesh(mesh, cubeMapPosition, view, projection, t.transformationMatrix, mat, current.components[COMPONENTS.MESH].normalMatrix, current.components[COMPONENTS.MATERIAL], brdf, maxTextures, dirLights, dirLightPOV, pointLightsQuantity, pointLightData);
        }
      }
    }
  }, {
    key: "_drawMesh",
    value: function _drawMesh(mesh, camPosition, viewMatrix, projectionMatrix, transformMatrix, material, normalMatrix, materialComponent, brdf, maxTextures, dirLights, dirLightPOV, pointLightsQuantity, pointLightData) {
      var gpu = this.gpu;
      gpu.bindVertexArray(mesh.VAO);
      gpu.bindBuffer(gpu.ELEMENT_ARRAY_BUFFER, mesh.indexVBO);
      mesh.vertexVBO.enable();
      mesh.normalVBO.enable();
      mesh.uvVBO.enable();
      mesh.tangentVBO.enable(); // TODO - USE MESH MATERIAL SHADER

      this.shader.bindForUse({
        pbrMaterial: {
          albedo: material.albedo.texture,
          metallic: material.metallic.texture,
          roughness: material.roughness.texture,
          normal: material.normal.texture,
          height: material.height.texture,
          ao: material.ao.texture,
          emissive: material.emissive.texture
        },
        uvScale: materialComponent.overrideMaterial ? materialComponent.tiling : material.uvScale,
        projectionMatrix: projectionMatrix,
        transformMatrix: transformMatrix,
        viewMatrix: viewMatrix,
        cameraVec: camPosition,
        normalMatrix: normalMatrix,
        brdfSampler: brdf,
        dirLightQuantity: maxTextures,
        directionalLights: dirLights,
        dirLightPOV: dirLightPOV,
        lightQuantity: pointLightsQuantity,
        pointLightsQuantity: pointLightsQuantity,
        pointLightData: pointLightData
      });
      gpu.drawElements(gpu.TRIANGLES, mesh.verticesQuantity, gpu.UNSIGNED_INT, 0);
      gpu.bindVertexArray(null);
      gpu.bindBuffer(gpu.ELEMENT_ARRAY_BUFFER, null);
      mesh.vertexVBO.disable();
      mesh.uvVBO.disable();
      mesh.normalVBO.disable();
      mesh.tangentVBO.disable();
    }
  }]);

  return CubeMapSystem;
}(System);

function getSystemKey(s, gpu, resolution) {
  switch (true) {
    case s === SYSTEMS.CAMERA_CUBE:
      return new CameraCubeSystem(gpu.canvas.id);

    case s === SYSTEMS.AO:
      return undefined;

    case s === SYSTEMS.CULLING:
      return new CullingSystem(gpu);

    case s === SYSTEMS.MESH:
      return new GBufferSystem(gpu, resolution);

    case s === SYSTEMS.PERF:
      return new PerformanceSystem(gpu, gpu.canvas.id);

    case s === SYSTEMS.PHYSICS:
      return undefined;

    case s === SYSTEMS.PICK:
      return new PickSystem(gpu);

    case s === SYSTEMS.SHADOWS:
      return new ShadowMapSystem(gpu);

    case s === SYSTEMS.TRANSFORMATION:
      return new TransformSystem();

    case s === SYSTEMS.CUBE_MAP:
      return new CubeMapSystem(gpu);

    case s === SYSTEMS.SCRIPT:
      return new ScriptSystem(gpu, gpu.canvas.id);

    default:
      return undefined;
  }
}

var _systems = /*#__PURE__*/new WeakMap();

var Renderer = /*#__PURE__*/function () {
  function Renderer(gpu, resolution, systems) {
    var _this = this;

    _classCallCheck(this, Renderer);

    _defineProperty(this, "rootCamera", new RootCameraInstance());

    _defineProperty(this, "viewTarget", this.rootCamera);

    _defineProperty(this, "packager", new RenderingPackager());

    _defineProperty(this, "canRun", true);

    _defineProperty(this, "data", {});

    _defineProperty(this, "params", {});

    _classPrivateFieldInitSpec(this, _systems, {
      writable: true,
      value: {}
    });

    this.canvas = gpu.canvas;
    this.gpu = gpu;
    this.wrapper = new RenderingWrapper(gpu, resolution);
    var brdf = new Image();
    brdf.src = img;
    brdf.decode().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.brdf = createTexture(gpu, 512, 512, gpu.RGBA32F, 0, gpu.RGBA, gpu.FLOAT, brdf, gpu.LINEAR, gpu.LINEAR, gpu.CLAMP_TO_EDGE, gpu.CLAMP_TO_EDGE);
              _this.params.brdf = _this.brdf;
              _context.t0 = MaterialInstance;
              _context.t1 = _this.gpu;
              _context.t2 = vertex$3;
              _context.t3 = fragment$3;
              _context.t4 = [{
                key: 'brdfSampler',
                data: _this.brdf,
                type: DATA_TYPES$1.UNDEFINED
              }];
              _context.next = 9;
              return ImageProcessor.colorToImage('rgba(128, 128, 128, 1)');

            case 9:
              _context.t5 = _context.sent;
              _context.t6 = {
                isForward: false,
                rsmAlbedo: _context.t5,
                doubledSided: true
              };

              _context.t7 = function () {
                return _this._ready = true;
              };

              _context.t8 = uuid_1.v4();
              _this.fallbackMaterial = new _context.t0(_context.t1, _context.t2, _context.t3, _context.t4, _context.t6, _context.t7, _context.t8);
              _this.params.fallbackMaterial = _this.fallbackMaterial;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    var a = new FramebufferInstance(gpu),
        b = new FramebufferInstance(gpu);
    a.texture().depthTest();
    b.texture();
    this.postProcessingFramebuffers = {
      a: a,
      b: b
    };
    var sys = [].concat(_toConsumableArray(systems), [SYSTEMS.MESH]);
    sys.forEach(function (s) {
      var system = getSystemKey(s, gpu, resolution);
      if (system) _classPrivateFieldGet(_this, _systems)[s] = system;
    });
    this.sortedSystems = Object.keys(_classPrivateFieldGet(this, _systems)).sort();
  }

  _createClass(Renderer, [{
    key: "systems",
    get: function get() {
      return _classPrivateFieldGet(this, _systems);
    }
  }, {
    key: "callback",
    value: function callback() {
      var _this2 = this;

      var elapsed = performance.now() - this.then;

      if (elapsed > this.fpsInterval) {
        var now = performance.now();
        this.then = now - elapsed % this.fpsInterval;
        this.params.onBeforeRender();
        this.params.elapsed = elapsed;
        this.gpu.clear(this.gpu.COLOR_BUFFER_BIT | this.gpu.DEPTH_BUFFER_BIT);

        for (var s = 0; s < this.sortedSystems.length; s++) {
          _classPrivateFieldGet(this, _systems)[this.sortedSystems[s]].execute(this.params, _classPrivateFieldGet(this, _systems), this.data, this.filteredEntities, this.data.entitiesMap, function () {
            return _this2.data = _objectSpread2(_objectSpread2({}, _this2.data), _this2.packager.getLightsUniforms(_this2.data.pointLights, _this2.data.directionalLights));
          });
        }

        this.wrapper.execute(this.params, _classPrivateFieldGet(this, _systems), this.data, this.filteredEntities, this.data.entitiesMap, this.params.onWrap, this.postProcessingFramebuffers);
      }

      if (this.canRun) requestAnimationFrame(function () {
        return _this2.callback();
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.canRun = true;
      requestAnimationFrame(function () {
        return _this3.callback();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$resizeObs;

      (_this$resizeObs = this.resizeObs) === null || _this$resizeObs === void 0 ? void 0 : _this$resizeObs.disconnect();
      this.canRun = false;
    }
  }, {
    key: "updatePackage",
    value: function updatePackage(entities, materials, meshes, params) {
      var _this4 = this;

      var scripts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var onBeforeRender = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {
        return null;
      };
      var onWrap = arguments.length > 6 ? arguments[6] : undefined;
      var packageData = this.packager.makePackage({
        entities: entities,
        materials: materials,
        meshes: meshes,
        params: params,
        scripts: scripts,
        onBeforeRender: onBeforeRender,
        onWrap: onWrap,
        gpu: this.gpu,
        brdf: this.brdf,
        fallbackMaterial: this.fallbackMaterial
      });
      this.data = packageData.data;
      this.params = packageData.attributes;
      this.filteredEntities = packageData.filteredEntities;
      this.resizeObs = new ResizeObserver(function () {
        if (_this4.canvas) {
          var bBox = _this4.canvas.getBoundingClientRect();

          _this4.params.camera.aspectRatio = bBox.width / bBox.height;

          _this4.params.camera.updateProjection();
        }
      });
      this.resizeObs.observe(this.canvas);
      this.fpsInterval = 1000 / (this.params.frameRate ? this.params.frameRate : 75);
      this.then = performance.now();
    }
  }]);

  return Renderer;
}();

var _ENTITIES;
var DATA_TYPES = {
  ENTITY: 0,
  MATERIAL: 1,
  MESH: 2,
  SCRIPT: 3
};
function useLoader(id, loader) {
  var _useEngineEssentials = useEngineEssentials(id),
      meshes = _useEngineEssentials.meshes,
      setMeshes = _useEngineEssentials.setMeshes,
      materials = _useEngineEssentials.materials,
      setMaterials = _useEngineEssentials.setMaterials,
      entities = _useEngineEssentials.entities,
      dispatchEntities = _useEngineEssentials.dispatchEntities,
      scripts = _useEngineEssentials.scripts,
      setScripts = _useEngineEssentials.setScripts,
      gpu = _useEngineEssentials.gpu;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      canRender = _useState2[0],
      setCanRender = _useState2[1];

  var _useState3 = useState({
    fxaa: true,
    meshes: meshes,
    gamma: 2.2,
    exposure: 1,
    materials: [],
    noRSM: true,
    bloom: true,
    filmGrain: true,
    filmGrainStrength: .07,
    bloomStrength: .1,
    bloomThreshold: .75
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var renderer = useMemo(function () {
    if (gpu) return new Renderer(gpu, {
      w: window.screen.width,
      h: window.screen.height
    }, [SYSTEMS.MESH, SYSTEMS.SHADOWS, SYSTEMS.SCRIPT, SYSTEMS.TRANSFORMATION, SYSTEMS.CUBE_MAP, SYSTEMS.PICK]);
    return undefined;
  }, [gpu]);
  useEffect(function () {
    loader.importAll().then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result) {
        var m, s, e, mat, promises, _loop, i;

        return regeneratorRuntime.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                m = [], s = [], e = [], mat = [], promises = [];
                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                  var _result$i, type, data, id;

                  return regeneratorRuntime.wrap(function _loop$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _result$i = result[i], type = _result$i.type, data = _result$i.data, id = _result$i.id;
                          _context.t0 = type;
                          _context.next = _context.t0 === DATA_TYPES.ENTITY ? 4 : _context.t0 === DATA_TYPES.MATERIAL ? 10 : _context.t0 === DATA_TYPES.MESH ? 12 : _context.t0 === DATA_TYPES.SCRIPT ? 14 : 16;
                          break;

                        case 4:
                          _context.t1 = e;
                          _context.next = 7;
                          return mapEntity(data, gpu);

                        case 7:
                          _context.t2 = _context.sent;

                          _context.t1.push.call(_context.t1, _context.t2);

                          return _context.abrupt("break", 16);

                        case 10:
                          promises.push(new Promise(function (resolve) {
                            var material = new MaterialInstance(gpu, data.vertexShader, data.shader, data.uniformData, data.settings, function () {
                              return resolve(true);
                            }, data.id);
                            mat.push(material);
                          }));
                          return _context.abrupt("break", 16);

                        case 12:
                          m.push(new MeshInstance(data));
                          return _context.abrupt("break", 16);

                        case 14:
                          s.push({
                            id: id,
                            executors: new data()
                          });
                          return _context.abrupt("break", 16);

                        case 16:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _loop);
                });
                _context2.t0 = regeneratorRuntime.keys(result);

              case 3:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 8;
                  break;
                }

                i = _context2.t1.value;
                return _context2.delegateYield(_loop(i), "t2", 6);

              case 6:
                _context2.next = 3;
                break;

              case 8:
                _context2.next = 10;
                return Promise.all(promises);

              case 10:
                setMaterials(mat);
                setMeshes(m);
                setScripts(s);
                setSettings(loader.settings);
                dispatchEntities({
                  type: ENTITY_ACTIONS.DISPATCH_BLOCK,
                  payload: e
                });
                setCanRender(true);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, []);
  useEffect(function () {
    if (canRender && renderer) {
      renderer.start();
    } else if (renderer) renderer.stop();
  }, [canRender]);
  useEffect(function () {
    if (renderer) {
      renderer.updatePackage(entities, materials, meshes, _objectSpread2(_objectSpread2({}, settings), {}, {
        canExecutePhysicsAnimation: true
      }), scripts);
    }

    return function () {
      return renderer === null || renderer === void 0 ? void 0 : renderer.stop();
    };
  }, [meshes, materials, entities, gpu, id, renderer, canRender]);
  return {};
}

function mapEntity(_x2, _x3) {
  return _mapEntity.apply(this, arguments);
}

function _mapEntity() {
  _mapEntity = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(entity, gpu) {
    var parsedEntity, _loop2, k;

    return regeneratorRuntime.wrap(function _callee15$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            parsedEntity = new Entity(entity.id, entity.name, entity.active, entity.linkedTo);
            parsedEntity.blueprintID = entity.blueprintID;
            _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(k) {
              var component;
              return regeneratorRuntime.wrap(function _loop2$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (!(typeof ENTITIES[k] === 'function')) {
                        _context16.next = 5;
                        break;
                      }

                      _context16.next = 3;
                      return ENTITIES[k](entity, k, gpu);

                    case 3:
                      component = _context16.sent;

                      if (component) {
                        if (k !== COMPONENTS.MATERIAL) Object.keys(entity.components[k]).forEach(function (oK) {
                          if (!oK.includes("__")) component[oK] = entity.components[k][oK];
                        });
                        parsedEntity.components[k] = component;
                      }

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _loop2);
            });
            _context17.t0 = regeneratorRuntime.keys(entity.components);

          case 4:
            if ((_context17.t1 = _context17.t0()).done) {
              _context17.next = 9;
              break;
            }

            k = _context17.t1.value;
            return _context17.delegateYield(_loop2(k), "t2", 7);

          case 7:
            _context17.next = 4;
            break;

          case 9:
            return _context17.abrupt("return", parsedEntity);

          case 10:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee15);
  }));
  return _mapEntity.apply(this, arguments);
}

var ENTITIES = (_ENTITIES = {}, _defineProperty(_ENTITIES, COMPONENTS.DIRECTIONAL_LIGHT, function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(entity, k) {
    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new DirectionalLightComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.SKYLIGHT, function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(entity, k) {
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new SkylightComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.MESH, function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(entity, k) {
    return regeneratorRuntime.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new MeshComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.POINT_LIGHT, function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(entity, k) {
    return regeneratorRuntime.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new PointLightComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.SKYBOX, function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(entity, k, gpu) {
    var component;
    return regeneratorRuntime.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            component = new SkyboxComponent(entity.components[k].id, gpu); // const fileData = await ProjectLoader.readFromRegistry(entity.components[k].imageID, fileSystem)
            // if (fileData) {
            //     const img = await ImageProcessor.getImageBitmap(fileData)
            //     component.imageID = entity.components[k].imageID
            //     component.blob = img
            // }

            return _context7.abrupt("return", component);

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.SPOT_LIGHT, function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(entity, k) {
    return regeneratorRuntime.wrap(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", new SpotLightComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.MATERIAL, function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(entity, k, gpu) {
    var newMat;
    return regeneratorRuntime.wrap(function _callee8$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            newMat = new MaterialComponent(entity.components[k].id);
            newMat.materialID = entity.components[k].materialID; // const toLoad = (entity.components[k].uniforms ? entity.components[k].uniforms : []).map(u => {
            //     if (u.type === DATA_TYPES.TEXTURE && u.modified)
            //         return new Promise(async resolve => {
            //             // const fileData = await ProjectLoader.readFromRegistry(u.value, fileSystem)
            //             // if (fileData) {
            //             //     let texture
            //             //     await new Promise(r => {
            //             //         const k = u.format
            //             //         texture = new TextureInstance(
            //             //             fileData,
            //             //             k.yFlip,
            //             //             gpu,
            //             //             gpu[k.internalFormat],
            //             //             gpu[k.format],
            //             //             true,
            //             //             false,
            //             //             gpu.UNSIGNED_BYTE,
            //             //             undefined,
            //             //             undefined,
            //             //             0,
            //             //             () => {
            //             //                 r()
            //             //             }
            //             //         )
            //             //     })
            //             //     resolve({key: u.key, value: texture.texture, changed: true})
            //             // }
            //         // })
            //     // else
            //         return new Promise(resolve => resolve(u))
            // })

            newMat.uniforms = entity.components[k].uniforms;
            newMat.overrideMaterial = entity.components[k].overrideMaterial;
            newMat.uniformValues = {}; // const values = await Promise.all(toLoad)

            newMat.uniformValues = _objectSpread2({}, entity.components[k].uniformValues); // values.forEach(dd => {
            //     if (dd.changed)
            //         newMat.uniformValues[dd.key] = dd.value
            // })

            newMat.doubleSided = entity.components[k].doubleSided;
            newMat.overrideMaterial = entity.components[k].overrideMaterial;
            return _context9.abrupt("return", newMat);

          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.TRANSFORM, function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(entity, k) {
    var component;
    return regeneratorRuntime.wrap(function _callee9$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            component = new TransformComponent(entity.components[k].id, true);
            component.changed = true;

            try {
              component.updateQuatOnEulerChange = false;
              component.rotation = Transformation.getEuler(entity.components[k]._rotationQuat);
              component.updateQuatOnEulerChange = true;
            } catch (e) {}

            return _context10.abrupt("return", component);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.FOLDER, function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(entity, k) {
    return regeneratorRuntime.wrap(function _callee10$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", new FolderComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.PHYSICS, function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(entity, k) {
    return regeneratorRuntime.wrap(function _callee11$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", new PhysicsBodyComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.CUBE_MAP, function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(entity, k, gpu) {
    var component;
    return regeneratorRuntime.wrap(function _callee12$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            component = new CubeMapComponent(entity.components[k].id);
            component.cubeMap = new CubeMapInstance(gpu, component.resolution);
            return _context13.abrupt("return", component);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x26, _x27, _x28) {
    return _ref12.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.CAMERA, function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(entity, k) {
    return regeneratorRuntime.wrap(function _callee13$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt("return", new CameraComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x29, _x30) {
    return _ref13.apply(this, arguments);
  };
}()), _defineProperty(_ENTITIES, COMPONENTS.SCRIPT, function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(entity, k) {
    return regeneratorRuntime.wrap(function _callee14$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", new ScriptComponent(entity.components[k].id));

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x31, _x32) {
    return _ref14.apply(this, arguments);
  };
}()), _ENTITIES);

export { useLoader };
