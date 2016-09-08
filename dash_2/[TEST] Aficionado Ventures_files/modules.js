//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var meteorInstall = Package['modules-runtime'].meteorInstall;

/* Package-scope variables */
var Buffer, process;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/client.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
require("./install-packages.js");                                            // 1
require("./stubs.js");                                                       // 2
require("./buffer.js");                                                      // 3
require("./process.js");                                                     // 4
require("reify/lib/runtime").enable(module.constructor);                     // 5
                                                                             // 6
exports.addStyles = require("./css").addStyles;                              // 7
                                                                             // 8
///////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/buffer.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  Buffer = global.Buffer || require("buffer").Buffer;                        // 2
} catch (noBuffer) {}                                                        // 3
                                                                             // 4
///////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/css.js                                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var doc = document;                                                          // 1
var head = doc.getElementsByTagName("head").item(0);                         // 2
                                                                             // 3
exports.addStyles = function (css) {                                         // 4
  var style = doc.createElement("style");                                    // 5
                                                                             // 6
  style.setAttribute("type", "text/css");                                    // 7
                                                                             // 8
  // https://msdn.microsoft.com/en-us/library/ms535871(v=vs.85).aspx         // 9
  var internetExplorerSheetObject =                                          // 10
    style.sheet || // Edge/IE11.                                             // 11
    style.styleSheet; // Older IEs.                                          // 12
                                                                             // 13
  if (internetExplorerSheetObject) {                                         // 14
    internetExplorerSheetObject.cssText = css;                               // 15
  } else {                                                                   // 16
    style.appendChild(doc.createTextNode(css));                              // 17
  }                                                                          // 18
                                                                             // 19
  return head.appendChild(style);                                            // 20
};                                                                           // 21
                                                                             // 22
///////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/install-packages.js                                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
function install(name, mainModule) {                                         // 1
  var meteorDir = {};                                                        // 2
                                                                             // 3
  // Given a package name <name>, install a stub module in the               // 4
  // /node_modules/meteor directory called <name>.js, so that                // 5
  // require.resolve("meteor/<name>") will always return                     // 6
  // /node_modules/meteor/<name>.js instead of something like                // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event    // 8
  // that the package contains a file called index.js (#6590).               // 9
                                                                             // 10
  if (mainModule) {                                                          // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {   // 12
      module.exports = require(mainModule);                                  // 13
    }];                                                                      // 14
  } else {                                                                   // 15
    // back compat with old Meteor packages                                  // 16
    meteorDir[name + ".js"] = function (r, e, module) {                      // 17
      module.exports = Package[name];                                        // 18
    };                                                                       // 19
  }                                                                          // 20
                                                                             // 21
  meteorInstall({                                                            // 22
    node_modules: {                                                          // 23
      meteor: meteorDir                                                      // 24
    }                                                                        // 25
  });                                                                        // 26
}                                                                            // 27
                                                                             // 28
// This file will be modified during computeJsOutputFilesMap to include      // 29
// install(<name>) calls for every Meteor package.                           // 30
                                                                             // 31
install("underscore");                                                       // 32
install("meteor");                                                           // 33
install("meteor-base");                                                      // 34
install("mobile-experience");                                                // 35
install("babel-compiler");                                                   // 36
install("ecmascript");                                                       // 37
install("base64");                                                           // 38
install("ejson");                                                            // 39
install("id-map");                                                           // 40
install("ordered-dict");                                                     // 41
install("tracker");                                                          // 42
install("modules-runtime");                                                  // 43
install("modules", "meteor/modules/client.js");                              // 44
install("es5-shim", "meteor/es5-shim/client.js");                            // 45
install("promise", "meteor/promise/client.js");                              // 46
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");       // 47
install("babel-runtime");                                                    // 48
install("random");                                                           // 49
install("mongo-id");                                                         // 50
install("diff-sequence");                                                    // 51
install("geojson-utils", "meteor/geojson-utils/main.js");                    // 52
install("minimongo");                                                        // 53
install("check", "meteor/check/match.js");                                   // 54
install("retry");                                                            // 55
install("ddp-common");                                                       // 56
install("reload");                                                           // 57
install("ddp-client");                                                       // 58
install("ddp");                                                              // 59
install("ddp-server");                                                       // 60
install("allow-deny");                                                       // 61
install("mongo");                                                            // 62
install("blaze-html-templates");                                             // 63
install("reactive-var");                                                     // 64
install("jquery", "meteor/jquery/main.js");                                  // 65
install("standard-minifier-css");                                            // 66
install("standard-minifier-js");                                             // 67
install("npm-bcrypt");                                                       // 68
install("ddp-rate-limiter");                                                 // 69
install("localstorage");                                                     // 70
install("callback-hook");                                                    // 71
install("deps");                                                             // 72
install("htmljs");                                                           // 73
install("observe-sequence");                                                 // 74
install("blaze");                                                            // 75
install("accounts-base", "meteor/accounts-base/client_main.js");             // 76
install("sha");                                                              // 77
install("srp");                                                              // 78
install("accounts-password");                                                // 79
install("twbs:bootstrap");                                                   // 80
install("less");                                                             // 81
install("matb33:bootstrap-base");                                            // 82
install("matb33:bootstrap-glyphicons");                                      // 83
install("ui");                                                               // 84
install("spacebars");                                                        // 85
install("templating");                                                       // 86
install("iron:core");                                                        // 87
install("iron:dynamic-template");                                            // 88
install("iron:layout");                                                      // 89
install("iron:url");                                                         // 90
install("iron:middleware-stack");                                            // 91
install("iron:location");                                                    // 92
install("reactive-dict");                                                    // 93
install("iron:controller");                                                  // 94
install("iron:router");                                                      // 95
install("email");                                                            // 96
install("pfafman:plivo");                                                    // 97
install("service-configuration");                                            // 98
install("session");                                                          // 99
install("accounts-ui-unstyled");                                             // 100
install("accounts-ui");                                                      // 101
install("aldeed:simple-schema");                                             // 102
install("raix:eventemitter");                                                // 103
install("aldeed:collection2-core");                                          // 104
install("aldeed:schema-index");                                              // 105
install("aldeed:schema-deny");                                               // 106
install("aldeed:collection2");                                               // 107
install("livedata");                                                         // 108
install("momentjs:moment");                                                  // 109
install("aldeed:autoform");                                                  // 110
install("meteortoys:toykit");                                                // 111
install("msavin:mongol");                                                    // 112
install("msavin:jetsetter");                                                 // 113
install("meteortoys:blueprint");                                             // 114
install("meteortoys:authenticate");                                          // 115
install("meteortoys:shell");                                                 // 116
install("meteortoys:method");                                                // 117
install("meteortoys:result");                                                // 118
install("meteortoys:autopub");                                               // 119
install("meteortoys:pub");                                                   // 120
install("meteortoys:sub");                                                   // 121
install("meteortoys:email");                                                 // 122
install("meteortoys:listen");                                                // 123
install("meteortoys:throttle");                                              // 124
install("meteortoys:status");                                                // 125
install("meteortoys:hotreload");                                             // 126
install("meteortoys:allthings");                                             // 127
install("peppelg:bootstrap-3-modal");                                        // 128
install("webapp");                                                           // 129
install("hot-code-push");                                                    // 130
install("launch-screen");                                                    // 131
install("autoupdate");                                                       // 132
install("mdg:validation-error");                                             // 133
                                                                             // 134
///////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/process.js                                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // The application can run `npm install process` to provide its own        // 2
  // process stub; otherwise this module will provide a partial stub.        // 3
  process = global.process || require("process");                            // 4
} catch (noProcess) {                                                        // 5
  process = {};                                                              // 6
}                                                                            // 7
                                                                             // 8
if (Meteor.isServer) {                                                       // 9
  // Make require("process") work on the server in all versions of Node.     // 10
  meteorInstall({                                                            // 11
    node_modules: {                                                          // 12
      "process.js": function (r, e, module) {                                // 13
        module.exports = process;                                            // 14
      }                                                                      // 15
    }                                                                        // 16
  });                                                                        // 17
} else {                                                                     // 18
  process.platform = "browser";                                              // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;               // 20
}                                                                            // 21
                                                                             // 22
if (typeof process.env !== "object") {                                       // 23
  process.env = {};                                                          // 24
}                                                                            // 25
                                                                             // 26
_.extend(process.env, meteorEnv);                                            // 27
                                                                             // 28
///////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/stubs.js                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // When meteor-node-stubs is installed in the application's root           // 2
  // node_modules directory, requiring it here installs aliases for stubs    // 3
  // for all Node built-in modules, such as fs, util, and http.              // 4
  require("meteor-node-stubs");                                              // 5
} catch (noStubs) {}                                                         // 6
                                                                             // 7
///////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Entry = require("./entry.js").Entry;                                     // 1
                                                                             // 2
exports.enable = function (Module) {                                         // 3
  var Mp = Module.prototype;                                                 // 4
                                                                             // 5
  if (typeof Mp.import === "function" &&                                     // 6
      typeof Mp.export === "function") {                                     // 7
    // If the Mp.{import,export} methods have already been                   // 8
    // defined, abandon reification immediately.                             // 9
    return Module;                                                           // 10
  }                                                                          // 11
                                                                             // 12
  // Platform-specific code should implement this method however             // 13
  // appropriate. Module.prototype.resolve(id) should return an absolute     // 14
  // version of the given module identifier, like require.resolve.           // 15
  Mp.resolve = Mp.resolve || function resolve(id) {                          // 16
    throw new Error("Module.prototype.resolve not implemented");             // 17
  };                                                                         // 18
                                                                             // 19
  // Platform-specific code should find a way to call this method whenever   // 20
  // the module system is about to return module.exports from require. This  // 21
  // might happen more than once per module, in case of dependency cycles,   // 22
  // so we want Module.prototype.runModuleSetters to run each time.          // 23
  Mp.runModuleSetters = function runModuleSetters() {                        // 24
    var entry = Entry.get(this.id);                                          // 25
    if (entry) {                                                             // 26
      entry.runModuleSetters(this);                                          // 27
    }                                                                        // 28
  };                                                                         // 29
                                                                             // 30
  function setESModule(module) {                                             // 31
    var exports = module.exports;                                            // 32
    if (exports && typeof exports === "object") {                            // 33
      exports.__esModule = true;                                             // 34
    }                                                                        // 35
  }                                                                          // 36
                                                                             // 37
  Mp.import = function (id, setters) {                                       // 38
    var module = this;                                                       // 39
    setESModule(module);                                                     // 40
                                                                             // 41
    var absoluteId = module.resolve(id);                                     // 42
                                                                             // 43
    if (setters && typeof setters === "object") {                            // 44
      var entry = Entry.getOrCreate(absoluteId);                             // 45
      entry.addSetters(setters);                                             // 46
      entry.addParent(module);                                               // 47
    }                                                                        // 48
                                                                             // 49
    var countBefore = entry && entry.runCount;                               // 50
    var exports = typeof module.require === "function"                       // 51
      ? module.require(absoluteId)                                           // 52
      : require(absoluteId);                                                 // 53
                                                                             // 54
    if (entry && entry.runCount === countBefore) {                           // 55
      // If require(absoluteId) didn't run any setters for this entry,       // 56
      // perhaps because it's not the first time this module has been        // 57
      // required, run the setters now using an object that passes as the    // 58
      // real module object.                                                 // 59
      entry.runModuleSetters({                                               // 60
        id: absoluteId,                                                      // 61
        exports: exports,                                                    // 62
        getExportByName: Mp.getExportByName                                  // 63
      });                                                                    // 64
    }                                                                        // 65
  };                                                                         // 66
                                                                             // 67
  // Register a getter function for a local variable in the scope of an      // 68
  // export statement.                                                       // 69
  Mp.export = function (id, getter) {                                        // 70
    var module = this;                                                       // 71
    setESModule(module);                                                     // 72
                                                                             // 73
    var entry = Entry.getOrCreate(module.id);                                // 74
                                                                             // 75
    if (typeof id === "string") {                                            // 76
      entry.addGetter(id, getter);                                           // 77
    } else if (typeof id === "object") {                                     // 78
      entry.addGetters(id);                                                  // 79
    }                                                                        // 80
                                                                             // 81
    if (module.loaded) {                                                     // 82
      // If the module has already been evaluated, then we need to trigger   // 83
      // another round of entry.runModuleSetters calls, which begins by      // 84
      // calling entry.runModuleGetters(module).                             // 85
      entry.runModuleSetters(module);                                        // 86
    } else {                                                                 // 87
      // If the module has not yet finished evaluating, then we only want    // 88
      // to call entry.runModuleGetters(module) to update module.exports.    // 89
      entry.runModuleGetters(module);                                        // 90
    }                                                                        // 91
  };                                                                         // 92
                                                                             // 93
  // This method can be overridden by client code to implement custom export
  // naming logic. The current implementation works well with Babel's        // 95
  // __esModule convention.                                                  // 96
  Mp.getExportByName = function (name) {                                     // 97
    var exports = this.exports;                                              // 98
                                                                             // 99
    if (name === "*") {                                                      // 100
      return exports;                                                        // 101
    }                                                                        // 102
                                                                             // 103
    if (name === "default" &&                                                // 104
        ! (exports &&                                                        // 105
           typeof exports === "object" &&                                    // 106
           exports.__esModule &&                                             // 107
           "default" in exports)) {                                          // 108
      return exports;                                                        // 109
    }                                                                        // 110
                                                                             // 111
    return exports && exports[name];                                         // 112
  };                                                                         // 113
                                                                             // 114
  return Module;                                                             // 115
};                                                                           // 116
                                                                             // 117
///////////////////////////////////////////////////////////////////////////////

}],"entry.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                // 1
var entryMap = Object.create(null);                                          // 2
                                                                             // 3
function Entry(id) {                                                         // 4
  // Same as module.id for this module.                                      // 5
  this.id = id;                                                              // 6
  // The number of times this.runModuleSetters has been called.              // 7
  this.runCount = 0;                                                         // 8
  // Map from parent module identifiers to parent module objects.            // 9
  this.parents = Object.create(null);                                        // 10
  // Setters for assigning to local variables in parent modules.             // 11
  this.setters = Object.create(null);                                        // 12
  // Getters for local variables exported from this module.                  // 13
  this.getters = Object.create(null);                                        // 14
}                                                                            // 15
                                                                             // 16
var Ep = Entry.prototype;                                                    // 17
                                                                             // 18
Entry.get = function (id) {                                                  // 19
  return entryMap[id] || null;                                               // 20
};                                                                           // 21
                                                                             // 22
Entry.getOrCreate = function (id) {                                          // 23
  return entryMap[id] = entryMap[id] || new Entry(id);                       // 24
};                                                                           // 25
                                                                             // 26
Ep.addParent = function (module) {                                           // 27
  this.parents[module.id] = module;                                          // 28
};                                                                           // 29
                                                                             // 30
Ep.addSetters = function (setters) {                                         // 31
  Object.keys(setters).forEach(function (name) {                             // 32
    this.addSetter(name, setters[name]);                                     // 33
  }, this);                                                                  // 34
};                                                                           // 35
                                                                             // 36
Ep.addSetter = function (name, setter) {                                     // 37
  if (typeof name === "string" &&                                            // 38
      typeof setter === "function" &&                                        // 39
      // Ignore any requests for the exports.__esModule property."           // 40
      name !== "__esModule") {                                               // 41
    (this.setters[name] =                                                    // 42
     this.setters[name] || []                                                // 43
    ).push(setter);                                                          // 44
  }                                                                          // 45
};                                                                           // 46
                                                                             // 47
Ep.addGetters = function (getters) {                                         // 48
  Object.keys(getters).forEach(function (name) {                             // 49
    this.addGetter(name, getters[name]);                                     // 50
  }, this);                                                                  // 51
};                                                                           // 52
                                                                             // 53
Ep.addGetter = function (name, getter) {                                     // 54
  if (typeof name === "string" &&                                            // 55
      typeof getter === "function" &&                                        // 56
      // Ignore any requests for the exports.__esModule property."           // 57
      name !== "__esModule") {                                               // 58
    // Should this throw if hasOwn.call(this.getters, name)?                 // 59
    this.getters[name] = getter;                                             // 60
  }                                                                          // 61
};                                                                           // 62
                                                                             // 63
function runModuleSetters(module) {                                          // 64
  var entry = entryMap[module.id];                                           // 65
  if (entry) {                                                               // 66
    entry.runModuleSetters(module);                                          // 67
  }                                                                          // 68
}                                                                            // 69
                                                                             // 70
Ep.runModuleGetters = function (module) {                                    // 71
  var entry = this;                                                          // 72
  Object.keys(entry.getters).forEach(function (name) {                       // 73
    // Make sure we update module.exports[name] with the current value so    // 74
    // that CommonJS require calls remain consistent with module.import.     // 75
    module.exports[name] = entry.getters[name].call(module);                 // 76
  });                                                                        // 77
};                                                                           // 78
                                                                             // 79
Ep.runModuleSetters = function (module) {                                    // 80
  var entry = this;                                                          // 81
  var shouldRunParentSetters = false;                                        // 82
                                                                             // 83
  this.runModuleGetters(module);                                             // 84
                                                                             // 85
  Object.keys(entry.setters).forEach(function (name) {                       // 86
    var value = module.getExportByName(name);                                // 87
                                                                             // 88
    entry.setters[name].forEach(function (setter) {                          // 89
      if (name === "*") {                                                    // 90
        Object.keys(value).forEach(function (name) {                         // 91
          if (name !== "__esModule" &&                                       // 92
              callSetter(module, setter, name, value[name]) === true) {      // 93
            shouldRunParentSetters = true;                                   // 94
          }                                                                  // 95
        });                                                                  // 96
      } else if (callSetter(module, setter, name, value) === true) {         // 97
        shouldRunParentSetters = true;                                       // 98
      }                                                                      // 99
    });                                                                      // 100
  });                                                                        // 101
                                                                             // 102
  ++entry.runCount;                                                          // 103
                                                                             // 104
  if (shouldRunParentSetters) {                                              // 105
    entry.runParentSetters();                                                // 106
  }                                                                          // 107
};                                                                           // 108
                                                                             // 109
function callSetter(module, setter, name, value) {                           // 110
  setter.last = setter.last || Object.create(null);                          // 111
  if (! hasOwn.call(setter.last, name) ||                                    // 112
      value !== setter.last[name]) {                                         // 113
    return setter.call(                                                      // 114
      module,                                                                // 115
      setter.last[name] = value,                                             // 116
      name                                                                   // 117
    );                                                                       // 118
  }                                                                          // 119
}                                                                            // 120
                                                                             // 121
Ep.runParentSetters = function () {                                          // 122
  var parents = this.parents;                                                // 123
  Object.keys(parents).forEach(function (id) {                               // 124
    runModuleSetters(parents[id]);                                           // 125
  });                                                                        // 126
};                                                                           // 127
                                                                             // 128
exports.Entry = Entry;                                                       // 129
                                                                             // 130
///////////////////////////////////////////////////////////////////////////////

}}}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/modules/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.modules = exports, {
  meteorInstall: meteorInstall,
  Buffer: Buffer,
  process: process
});

})();
