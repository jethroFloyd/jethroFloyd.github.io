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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/twbs_bootstrap/dist/js/bootstrap.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)                                                                 // 2
 * Copyright 2011-2015 Twitter, Inc.                                                                                  // 3
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 4
 */                                                                                                                   // 5
                                                                                                                      // 6
if (typeof jQuery === 'undefined') {                                                                                  // 7
  throw new Error('Bootstrap\'s JavaScript requires jQuery')                                                          // 8
}                                                                                                                     // 9
                                                                                                                      // 10
+function ($) {                                                                                                       // 11
  var version = $.fn.jquery.split(' ')[0].split('.')                                                                  // 12
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v3.0.0')                   // 14
  }                                                                                                                   // 15
}(jQuery);                                                                                                            // 16
                                                                                                                      // 17
                                                                                                                      // 18
+function ($) {                                                                                                       // 19
                                                                                                                      // 20
/**                                                                                                                   // 21
 * --------------------------------------------------------------------------                                         // 22
 * Bootstrap (v4.0.0-alpha.2): util.js                                                                                // 23
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 24
 * --------------------------------------------------------------------------                                         // 25
 */                                                                                                                   // 26
                                                                                                                      // 27
'use strict';                                                                                                         // 28
                                                                                                                      // 29
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
                                                                                                                      // 31
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
                                                                                                                      // 33
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
                                                                                                                      // 35
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
                                                                                                                      // 37
var Util = (function ($) {                                                                                            // 38
                                                                                                                      // 39
  /**                                                                                                                 // 40
   * ------------------------------------------------------------------------                                         // 41
   * Private TransitionEnd Helpers                                                                                    // 42
   * ------------------------------------------------------------------------                                         // 43
   */                                                                                                                 // 44
                                                                                                                      // 45
  var transition = false;                                                                                             // 46
                                                                                                                      // 47
  var TransitionEndEvent = {                                                                                          // 48
    WebkitTransition: 'webkitTransitionEnd',                                                                          // 49
    MozTransition: 'transitionend',                                                                                   // 50
    OTransition: 'oTransitionEnd otransitionend',                                                                     // 51
    transition: 'transitionend'                                                                                       // 52
  };                                                                                                                  // 53
                                                                                                                      // 54
  // shoutout AngusCroll (https://goo.gl/pxwQGp)                                                                      // 55
  function toType(obj) {                                                                                              // 56
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();                                           // 57
  }                                                                                                                   // 58
                                                                                                                      // 59
  function isElement(obj) {                                                                                           // 60
    return (obj[0] || obj).nodeType;                                                                                  // 61
  }                                                                                                                   // 62
                                                                                                                      // 63
  function getSpecialTransitionEndEvent() {                                                                           // 64
    return {                                                                                                          // 65
      bindType: transition.end,                                                                                       // 66
      delegateType: transition.end,                                                                                   // 67
      handle: function handle(event) {                                                                                // 68
        if ($(event.target).is(this)) {                                                                               // 69
          return event.handleObj.handler.apply(this, arguments);                                                      // 70
        }                                                                                                             // 71
      }                                                                                                               // 72
    };                                                                                                                // 73
  }                                                                                                                   // 74
                                                                                                                      // 75
  function transitionEndTest() {                                                                                      // 76
    if (window.QUnit) {                                                                                               // 77
      return false;                                                                                                   // 78
    }                                                                                                                 // 79
                                                                                                                      // 80
    var el = document.createElement('bootstrap');                                                                     // 81
                                                                                                                      // 82
    for (var _name in TransitionEndEvent) {                                                                           // 83
      if (el.style[_name] !== undefined) {                                                                            // 84
        return { end: TransitionEndEvent[_name] };                                                                    // 85
      }                                                                                                               // 86
    }                                                                                                                 // 87
                                                                                                                      // 88
    return false;                                                                                                     // 89
  }                                                                                                                   // 90
                                                                                                                      // 91
  function transitionEndEmulator(duration) {                                                                          // 92
    var _this = this;                                                                                                 // 93
                                                                                                                      // 94
    var called = false;                                                                                               // 95
                                                                                                                      // 96
    $(this).one(Util.TRANSITION_END, function () {                                                                    // 97
      called = true;                                                                                                  // 98
    });                                                                                                               // 99
                                                                                                                      // 100
    setTimeout(function () {                                                                                          // 101
      if (!called) {                                                                                                  // 102
        Util.triggerTransitionEnd(_this);                                                                             // 103
      }                                                                                                               // 104
    }, duration);                                                                                                     // 105
                                                                                                                      // 106
    return this;                                                                                                      // 107
  }                                                                                                                   // 108
                                                                                                                      // 109
  function setTransitionEndSupport() {                                                                                // 110
    transition = transitionEndTest();                                                                                 // 111
                                                                                                                      // 112
    $.fn.emulateTransitionEnd = transitionEndEmulator;                                                                // 113
                                                                                                                      // 114
    if (Util.supportsTransitionEnd()) {                                                                               // 115
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();                                          // 116
    }                                                                                                                 // 117
  }                                                                                                                   // 118
                                                                                                                      // 119
  /**                                                                                                                 // 120
   * --------------------------------------------------------------------------                                       // 121
   * Public Util Api                                                                                                  // 122
   * --------------------------------------------------------------------------                                       // 123
   */                                                                                                                 // 124
                                                                                                                      // 125
  var Util = {                                                                                                        // 126
                                                                                                                      // 127
    TRANSITION_END: 'bsTransitionEnd',                                                                                // 128
                                                                                                                      // 129
    getUID: function getUID(prefix) {                                                                                 // 130
      do {                                                                                                            // 131
        prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here                          // 132
      } while (document.getElementById(prefix));                                                                      // 133
      return prefix;                                                                                                  // 134
    },                                                                                                                // 135
                                                                                                                      // 136
    getSelectorFromElement: function getSelectorFromElement(element) {                                                // 137
      var selector = element.getAttribute('data-target');                                                             // 138
                                                                                                                      // 139
      if (!selector) {                                                                                                // 140
        selector = element.getAttribute('href') || '';                                                                // 141
        selector = /^#[a-z]/i.test(selector) ? selector : null;                                                       // 142
      }                                                                                                               // 143
                                                                                                                      // 144
      return selector;                                                                                                // 145
    },                                                                                                                // 146
                                                                                                                      // 147
    reflow: function reflow(element) {                                                                                // 148
      new Function('bs', 'return bs')(element.offsetHeight);                                                          // 149
    },                                                                                                                // 150
                                                                                                                      // 151
    triggerTransitionEnd: function triggerTransitionEnd(element) {                                                    // 152
      $(element).trigger(transition.end);                                                                             // 153
    },                                                                                                                // 154
                                                                                                                      // 155
    supportsTransitionEnd: function supportsTransitionEnd() {                                                         // 156
      return Boolean(transition);                                                                                     // 157
    },                                                                                                                // 158
                                                                                                                      // 159
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {                                   // 160
      for (var property in configTypes) {                                                                             // 161
        if (configTypes.hasOwnProperty(property)) {                                                                   // 162
          var expectedTypes = configTypes[property];                                                                  // 163
          var value = config[property];                                                                               // 164
          var valueType = undefined;                                                                                  // 165
                                                                                                                      // 166
          if (value && isElement(value)) {                                                                            // 167
            valueType = 'element';                                                                                    // 168
          } else {                                                                                                    // 169
            valueType = toType(value);                                                                                // 170
          }                                                                                                           // 171
                                                                                                                      // 172
          if (!new RegExp(expectedTypes).test(valueType)) {                                                           // 173
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }                                                                                                           // 175
        }                                                                                                             // 176
      }                                                                                                               // 177
    }                                                                                                                 // 178
  };                                                                                                                  // 179
                                                                                                                      // 180
  setTransitionEndSupport();                                                                                          // 181
                                                                                                                      // 182
  return Util;                                                                                                        // 183
})(jQuery);                                                                                                           // 184
                                                                                                                      // 185
/**                                                                                                                   // 186
 * --------------------------------------------------------------------------                                         // 187
 * Bootstrap (v4.0.0-alpha.2): alert.js                                                                               // 188
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 189
 * --------------------------------------------------------------------------                                         // 190
 */                                                                                                                   // 191
                                                                                                                      // 192
var Alert = (function ($) {                                                                                           // 193
                                                                                                                      // 194
  /**                                                                                                                 // 195
   * ------------------------------------------------------------------------                                         // 196
   * Constants                                                                                                        // 197
   * ------------------------------------------------------------------------                                         // 198
   */                                                                                                                 // 199
                                                                                                                      // 200
  var NAME = 'alert';                                                                                                 // 201
  var VERSION = '4.0.0-alpha';                                                                                        // 202
  var DATA_KEY = 'bs.alert';                                                                                          // 203
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 204
  var DATA_API_KEY = '.data-api';                                                                                     // 205
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 206
  var TRANSITION_DURATION = 150;                                                                                      // 207
                                                                                                                      // 208
  var Selector = {                                                                                                    // 209
    DISMISS: '[data-dismiss="alert"]'                                                                                 // 210
  };                                                                                                                  // 211
                                                                                                                      // 212
  var Event = {                                                                                                       // 213
    CLOSE: 'close' + EVENT_KEY,                                                                                       // 214
    CLOSED: 'closed' + EVENT_KEY,                                                                                     // 215
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY                                                                // 216
  };                                                                                                                  // 217
                                                                                                                      // 218
  var ClassName = {                                                                                                   // 219
    ALERT: 'alert',                                                                                                   // 220
    FADE: 'fade',                                                                                                     // 221
    IN: 'in'                                                                                                          // 222
  };                                                                                                                  // 223
                                                                                                                      // 224
  /**                                                                                                                 // 225
   * ------------------------------------------------------------------------                                         // 226
   * Class Definition                                                                                                 // 227
   * ------------------------------------------------------------------------                                         // 228
   */                                                                                                                 // 229
                                                                                                                      // 230
  var Alert = (function () {                                                                                          // 231
    function Alert(element) {                                                                                         // 232
      _classCallCheck(this, Alert);                                                                                   // 233
                                                                                                                      // 234
      this._element = element;                                                                                        // 235
    }                                                                                                                 // 236
                                                                                                                      // 237
    /**                                                                                                               // 238
     * ------------------------------------------------------------------------                                       // 239
     * Data Api implementation                                                                                        // 240
     * ------------------------------------------------------------------------                                       // 241
     */                                                                                                               // 242
                                                                                                                      // 243
    // getters                                                                                                        // 244
                                                                                                                      // 245
    _createClass(Alert, [{                                                                                            // 246
      key: 'close',                                                                                                   // 247
                                                                                                                      // 248
      // public                                                                                                       // 249
                                                                                                                      // 250
      value: function close(element) {                                                                                // 251
        element = element || this._element;                                                                           // 252
                                                                                                                      // 253
        var rootElement = this._getRootElement(element);                                                              // 254
        var customEvent = this._triggerCloseEvent(rootElement);                                                       // 255
                                                                                                                      // 256
        if (customEvent.isDefaultPrevented()) {                                                                       // 257
          return;                                                                                                     // 258
        }                                                                                                             // 259
                                                                                                                      // 260
        this._removeElement(rootElement);                                                                             // 261
      }                                                                                                               // 262
    }, {                                                                                                              // 263
      key: 'dispose',                                                                                                 // 264
      value: function dispose() {                                                                                     // 265
        $.removeData(this._element, DATA_KEY);                                                                        // 266
        this._element = null;                                                                                         // 267
      }                                                                                                               // 268
                                                                                                                      // 269
      // private                                                                                                      // 270
                                                                                                                      // 271
    }, {                                                                                                              // 272
      key: '_getRootElement',                                                                                         // 273
      value: function _getRootElement(element) {                                                                      // 274
        var selector = Util.getSelectorFromElement(element);                                                          // 275
        var parent = false;                                                                                           // 276
                                                                                                                      // 277
        if (selector) {                                                                                               // 278
          parent = $(selector)[0];                                                                                    // 279
        }                                                                                                             // 280
                                                                                                                      // 281
        if (!parent) {                                                                                                // 282
          parent = $(element).closest('.' + ClassName.ALERT)[0];                                                      // 283
        }                                                                                                             // 284
                                                                                                                      // 285
        return parent;                                                                                                // 286
      }                                                                                                               // 287
    }, {                                                                                                              // 288
      key: '_triggerCloseEvent',                                                                                      // 289
      value: function _triggerCloseEvent(element) {                                                                   // 290
        var closeEvent = $.Event(Event.CLOSE);                                                                        // 291
                                                                                                                      // 292
        $(element).trigger(closeEvent);                                                                               // 293
        return closeEvent;                                                                                            // 294
      }                                                                                                               // 295
    }, {                                                                                                              // 296
      key: '_removeElement',                                                                                          // 297
      value: function _removeElement(element) {                                                                       // 298
        $(element).removeClass(ClassName.IN);                                                                         // 299
                                                                                                                      // 300
        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {                                  // 301
          this._destroyElement(element);                                                                              // 302
          return;                                                                                                     // 303
        }                                                                                                             // 304
                                                                                                                      // 305
        $(element).one(Util.TRANSITION_END, $.proxy(this._destroyElement, this, element)).emulateTransitionEnd(TRANSITION_DURATION);
      }                                                                                                               // 307
    }, {                                                                                                              // 308
      key: '_destroyElement',                                                                                         // 309
      value: function _destroyElement(element) {                                                                      // 310
        $(element).detach().trigger(Event.CLOSED).remove();                                                           // 311
      }                                                                                                               // 312
                                                                                                                      // 313
      // static                                                                                                       // 314
                                                                                                                      // 315
    }], [{                                                                                                            // 316
      key: '_jQueryInterface',                                                                                        // 317
      value: function _jQueryInterface(config) {                                                                      // 318
        return this.each(function () {                                                                                // 319
          var $element = $(this);                                                                                     // 320
          var data = $element.data(DATA_KEY);                                                                         // 321
                                                                                                                      // 322
          if (!data) {                                                                                                // 323
            data = new Alert(this);                                                                                   // 324
            $element.data(DATA_KEY, data);                                                                            // 325
          }                                                                                                           // 326
                                                                                                                      // 327
          if (config === 'close') {                                                                                   // 328
            data[config](this);                                                                                       // 329
          }                                                                                                           // 330
        });                                                                                                           // 331
      }                                                                                                               // 332
    }, {                                                                                                              // 333
      key: '_handleDismiss',                                                                                          // 334
      value: function _handleDismiss(alertInstance) {                                                                 // 335
        return function (event) {                                                                                     // 336
          if (event) {                                                                                                // 337
            event.preventDefault();                                                                                   // 338
          }                                                                                                           // 339
                                                                                                                      // 340
          alertInstance.close(this);                                                                                  // 341
        };                                                                                                            // 342
      }                                                                                                               // 343
    }, {                                                                                                              // 344
      key: 'VERSION',                                                                                                 // 345
      get: function get() {                                                                                           // 346
        return VERSION;                                                                                               // 347
      }                                                                                                               // 348
    }]);                                                                                                              // 349
                                                                                                                      // 350
    return Alert;                                                                                                     // 351
  })();                                                                                                               // 352
                                                                                                                      // 353
  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));                          // 354
                                                                                                                      // 355
  /**                                                                                                                 // 356
   * ------------------------------------------------------------------------                                         // 357
   * jQuery                                                                                                           // 358
   * ------------------------------------------------------------------------                                         // 359
   */                                                                                                                 // 360
                                                                                                                      // 361
  $.fn[NAME] = Alert._jQueryInterface;                                                                                // 362
  $.fn[NAME].Constructor = Alert;                                                                                     // 363
  $.fn[NAME].noConflict = function () {                                                                               // 364
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 365
    return Alert._jQueryInterface;                                                                                    // 366
  };                                                                                                                  // 367
                                                                                                                      // 368
  return Alert;                                                                                                       // 369
})(jQuery);                                                                                                           // 370
                                                                                                                      // 371
/**                                                                                                                   // 372
 * --------------------------------------------------------------------------                                         // 373
 * Bootstrap (v4.0.0-alpha.2): button.js                                                                              // 374
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 375
 * --------------------------------------------------------------------------                                         // 376
 */                                                                                                                   // 377
                                                                                                                      // 378
var Button = (function ($) {                                                                                          // 379
                                                                                                                      // 380
  /**                                                                                                                 // 381
   * ------------------------------------------------------------------------                                         // 382
   * Constants                                                                                                        // 383
   * ------------------------------------------------------------------------                                         // 384
   */                                                                                                                 // 385
                                                                                                                      // 386
  var NAME = 'button';                                                                                                // 387
  var VERSION = '4.0.0-alpha';                                                                                        // 388
  var DATA_KEY = 'bs.button';                                                                                         // 389
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 390
  var DATA_API_KEY = '.data-api';                                                                                     // 391
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 392
                                                                                                                      // 393
  var ClassName = {                                                                                                   // 394
    ACTIVE: 'active',                                                                                                 // 395
    BUTTON: 'btn',                                                                                                    // 396
    FOCUS: 'focus'                                                                                                    // 397
  };                                                                                                                  // 398
                                                                                                                      // 399
  var Selector = {                                                                                                    // 400
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',                                                                    // 401
    DATA_TOGGLE: '[data-toggle="buttons"]',                                                                           // 402
    INPUT: 'input',                                                                                                   // 403
    ACTIVE: '.active',                                                                                                // 404
    BUTTON: '.btn'                                                                                                    // 405
  };                                                                                                                  // 406
                                                                                                                      // 407
  var Event = {                                                                                                       // 408
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,                                                               // 409
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)               // 410
  };                                                                                                                  // 411
                                                                                                                      // 412
  /**                                                                                                                 // 413
   * ------------------------------------------------------------------------                                         // 414
   * Class Definition                                                                                                 // 415
   * ------------------------------------------------------------------------                                         // 416
   */                                                                                                                 // 417
                                                                                                                      // 418
  var Button = (function () {                                                                                         // 419
    function Button(element) {                                                                                        // 420
      _classCallCheck(this, Button);                                                                                  // 421
                                                                                                                      // 422
      this._element = element;                                                                                        // 423
    }                                                                                                                 // 424
                                                                                                                      // 425
    /**                                                                                                               // 426
     * ------------------------------------------------------------------------                                       // 427
     * Data Api implementation                                                                                        // 428
     * ------------------------------------------------------------------------                                       // 429
     */                                                                                                               // 430
                                                                                                                      // 431
    // getters                                                                                                        // 432
                                                                                                                      // 433
    _createClass(Button, [{                                                                                           // 434
      key: 'toggle',                                                                                                  // 435
                                                                                                                      // 436
      // public                                                                                                       // 437
                                                                                                                      // 438
      value: function toggle() {                                                                                      // 439
        var triggerChangeEvent = true;                                                                                // 440
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];                                          // 441
                                                                                                                      // 442
        if (rootElement) {                                                                                            // 443
          var input = $(this._element).find(Selector.INPUT)[0];                                                       // 444
                                                                                                                      // 445
          if (input) {                                                                                                // 446
            if (input.type === 'radio') {                                                                             // 447
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {                                     // 448
                triggerChangeEvent = false;                                                                           // 449
              } else {                                                                                                // 450
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];                                          // 451
                                                                                                                      // 452
                if (activeElement) {                                                                                  // 453
                  $(activeElement).removeClass(ClassName.ACTIVE);                                                     // 454
                }                                                                                                     // 455
              }                                                                                                       // 456
            }                                                                                                         // 457
                                                                                                                      // 458
            if (triggerChangeEvent) {                                                                                 // 459
              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);                                           // 460
              $(this._element).trigger('change');                                                                     // 461
            }                                                                                                         // 462
          }                                                                                                           // 463
        } else {                                                                                                      // 464
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));                   // 465
        }                                                                                                             // 466
                                                                                                                      // 467
        if (triggerChangeEvent) {                                                                                     // 468
          $(this._element).toggleClass(ClassName.ACTIVE);                                                             // 469
        }                                                                                                             // 470
      }                                                                                                               // 471
    }, {                                                                                                              // 472
      key: 'dispose',                                                                                                 // 473
      value: function dispose() {                                                                                     // 474
        $.removeData(this._element, DATA_KEY);                                                                        // 475
        this._element = null;                                                                                         // 476
      }                                                                                                               // 477
                                                                                                                      // 478
      // static                                                                                                       // 479
                                                                                                                      // 480
    }], [{                                                                                                            // 481
      key: '_jQueryInterface',                                                                                        // 482
      value: function _jQueryInterface(config) {                                                                      // 483
        return this.each(function () {                                                                                // 484
          var data = $(this).data(DATA_KEY);                                                                          // 485
                                                                                                                      // 486
          if (!data) {                                                                                                // 487
            data = new Button(this);                                                                                  // 488
            $(this).data(DATA_KEY, data);                                                                             // 489
          }                                                                                                           // 490
                                                                                                                      // 491
          if (config === 'toggle') {                                                                                  // 492
            data[config]();                                                                                           // 493
          }                                                                                                           // 494
        });                                                                                                           // 495
      }                                                                                                               // 496
    }, {                                                                                                              // 497
      key: 'VERSION',                                                                                                 // 498
      get: function get() {                                                                                           // 499
        return VERSION;                                                                                               // 500
      }                                                                                                               // 501
    }]);                                                                                                              // 502
                                                                                                                      // 503
    return Button;                                                                                                    // 504
  })();                                                                                                               // 505
                                                                                                                      // 506
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {                                // 507
    event.preventDefault();                                                                                           // 508
                                                                                                                      // 509
    var button = event.target;                                                                                        // 510
                                                                                                                      // 511
    if (!$(button).hasClass(ClassName.BUTTON)) {                                                                      // 512
      button = $(button).closest(Selector.BUTTON);                                                                    // 513
    }                                                                                                                 // 514
                                                                                                                      // 515
    Button._jQueryInterface.call($(button), 'toggle');                                                                // 516
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {                                    // 517
    var button = $(event.target).closest(Selector.BUTTON)[0];                                                         // 518
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));                                          // 519
  });                                                                                                                 // 520
                                                                                                                      // 521
  /**                                                                                                                 // 522
   * ------------------------------------------------------------------------                                         // 523
   * jQuery                                                                                                           // 524
   * ------------------------------------------------------------------------                                         // 525
   */                                                                                                                 // 526
                                                                                                                      // 527
  $.fn[NAME] = Button._jQueryInterface;                                                                               // 528
  $.fn[NAME].Constructor = Button;                                                                                    // 529
  $.fn[NAME].noConflict = function () {                                                                               // 530
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 531
    return Button._jQueryInterface;                                                                                   // 532
  };                                                                                                                  // 533
                                                                                                                      // 534
  return Button;                                                                                                      // 535
})(jQuery);                                                                                                           // 536
                                                                                                                      // 537
/**                                                                                                                   // 538
 * --------------------------------------------------------------------------                                         // 539
 * Bootstrap (v4.0.0-alpha.2): carousel.js                                                                            // 540
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 541
 * --------------------------------------------------------------------------                                         // 542
 */                                                                                                                   // 543
                                                                                                                      // 544
var Carousel = (function ($) {                                                                                        // 545
                                                                                                                      // 546
  /**                                                                                                                 // 547
   * ------------------------------------------------------------------------                                         // 548
   * Constants                                                                                                        // 549
   * ------------------------------------------------------------------------                                         // 550
   */                                                                                                                 // 551
                                                                                                                      // 552
  var NAME = 'carousel';                                                                                              // 553
  var VERSION = '4.0.0-alpha';                                                                                        // 554
  var DATA_KEY = 'bs.carousel';                                                                                       // 555
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 556
  var DATA_API_KEY = '.data-api';                                                                                     // 557
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 558
  var TRANSITION_DURATION = 600;                                                                                      // 559
                                                                                                                      // 560
  var Default = {                                                                                                     // 561
    interval: 5000,                                                                                                   // 562
    keyboard: true,                                                                                                   // 563
    slide: false,                                                                                                     // 564
    pause: 'hover',                                                                                                   // 565
    wrap: true                                                                                                        // 566
  };                                                                                                                  // 567
                                                                                                                      // 568
  var DefaultType = {                                                                                                 // 569
    interval: '(number|boolean)',                                                                                     // 570
    keyboard: 'boolean',                                                                                              // 571
    slide: '(boolean|string)',                                                                                        // 572
    pause: '(string|boolean)',                                                                                        // 573
    wrap: 'boolean'                                                                                                   // 574
  };                                                                                                                  // 575
                                                                                                                      // 576
  var Direction = {                                                                                                   // 577
    NEXT: 'next',                                                                                                     // 578
    PREVIOUS: 'prev'                                                                                                  // 579
  };                                                                                                                  // 580
                                                                                                                      // 581
  var Event = {                                                                                                       // 582
    SLIDE: 'slide' + EVENT_KEY,                                                                                       // 583
    SLID: 'slid' + EVENT_KEY,                                                                                         // 584
    KEYDOWN: 'keydown' + EVENT_KEY,                                                                                   // 585
    MOUSEENTER: 'mouseenter' + EVENT_KEY,                                                                             // 586
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,                                                                             // 587
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,                                                                 // 588
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY                                                                // 589
  };                                                                                                                  // 590
                                                                                                                      // 591
  var ClassName = {                                                                                                   // 592
    CAROUSEL: 'carousel',                                                                                             // 593
    ACTIVE: 'active',                                                                                                 // 594
    SLIDE: 'slide',                                                                                                   // 595
    RIGHT: 'right',                                                                                                   // 596
    LEFT: 'left',                                                                                                     // 597
    ITEM: 'carousel-item'                                                                                             // 598
  };                                                                                                                  // 599
                                                                                                                      // 600
  var Selector = {                                                                                                    // 601
    ACTIVE: '.active',                                                                                                // 602
    ACTIVE_ITEM: '.active.carousel-item',                                                                             // 603
    ITEM: '.carousel-item',                                                                                           // 604
    NEXT_PREV: '.next, .prev',                                                                                        // 605
    INDICATORS: '.carousel-indicators',                                                                               // 606
    DATA_SLIDE: '[data-slide], [data-slide-to]',                                                                      // 607
    DATA_RIDE: '[data-ride="carousel"]'                                                                               // 608
  };                                                                                                                  // 609
                                                                                                                      // 610
  /**                                                                                                                 // 611
   * ------------------------------------------------------------------------                                         // 612
   * Class Definition                                                                                                 // 613
   * ------------------------------------------------------------------------                                         // 614
   */                                                                                                                 // 615
                                                                                                                      // 616
  var Carousel = (function () {                                                                                       // 617
    function Carousel(element, config) {                                                                              // 618
      _classCallCheck(this, Carousel);                                                                                // 619
                                                                                                                      // 620
      this._items = null;                                                                                             // 621
      this._interval = null;                                                                                          // 622
      this._activeElement = null;                                                                                     // 623
                                                                                                                      // 624
      this._isPaused = false;                                                                                         // 625
      this._isSliding = false;                                                                                        // 626
                                                                                                                      // 627
      this._config = this._getConfig(config);                                                                         // 628
      this._element = $(element)[0];                                                                                  // 629
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];                                        // 630
                                                                                                                      // 631
      this._addEventListeners();                                                                                      // 632
    }                                                                                                                 // 633
                                                                                                                      // 634
    /**                                                                                                               // 635
     * ------------------------------------------------------------------------                                       // 636
     * Data Api implementation                                                                                        // 637
     * ------------------------------------------------------------------------                                       // 638
     */                                                                                                               // 639
                                                                                                                      // 640
    // getters                                                                                                        // 641
                                                                                                                      // 642
    _createClass(Carousel, [{                                                                                         // 643
      key: 'next',                                                                                                    // 644
                                                                                                                      // 645
      // public                                                                                                       // 646
                                                                                                                      // 647
      value: function next() {                                                                                        // 648
        if (!this._isSliding) {                                                                                       // 649
          this._slide(Direction.NEXT);                                                                                // 650
        }                                                                                                             // 651
      }                                                                                                               // 652
    }, {                                                                                                              // 653
      key: 'nextWhenVisible',                                                                                         // 654
      value: function nextWhenVisible() {                                                                             // 655
        // Don't call next when the page isn't visible                                                                // 656
        if (!document.hidden) {                                                                                       // 657
          this.next();                                                                                                // 658
        }                                                                                                             // 659
      }                                                                                                               // 660
    }, {                                                                                                              // 661
      key: 'prev',                                                                                                    // 662
      value: function prev() {                                                                                        // 663
        if (!this._isSliding) {                                                                                       // 664
          this._slide(Direction.PREVIOUS);                                                                            // 665
        }                                                                                                             // 666
      }                                                                                                               // 667
    }, {                                                                                                              // 668
      key: 'pause',                                                                                                   // 669
      value: function pause(event) {                                                                                  // 670
        if (!event) {                                                                                                 // 671
          this._isPaused = true;                                                                                      // 672
        }                                                                                                             // 673
                                                                                                                      // 674
        if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {                           // 675
          Util.triggerTransitionEnd(this._element);                                                                   // 676
          this.cycle(true);                                                                                           // 677
        }                                                                                                             // 678
                                                                                                                      // 679
        clearInterval(this._interval);                                                                                // 680
        this._interval = null;                                                                                        // 681
      }                                                                                                               // 682
    }, {                                                                                                              // 683
      key: 'cycle',                                                                                                   // 684
      value: function cycle(event) {                                                                                  // 685
        if (!event) {                                                                                                 // 686
          this._isPaused = false;                                                                                     // 687
        }                                                                                                             // 688
                                                                                                                      // 689
        if (this._interval) {                                                                                         // 690
          clearInterval(this._interval);                                                                              // 691
          this._interval = null;                                                                                      // 692
        }                                                                                                             // 693
                                                                                                                      // 694
        if (this._config.interval && !this._isPaused) {                                                               // 695
          this._interval = setInterval($.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval);
        }                                                                                                             // 697
      }                                                                                                               // 698
    }, {                                                                                                              // 699
      key: 'to',                                                                                                      // 700
      value: function to(index) {                                                                                     // 701
        var _this2 = this;                                                                                            // 702
                                                                                                                      // 703
        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];                                         // 704
                                                                                                                      // 705
        var activeIndex = this._getItemIndex(this._activeElement);                                                    // 706
                                                                                                                      // 707
        if (index > this._items.length - 1 || index < 0) {                                                            // 708
          return;                                                                                                     // 709
        }                                                                                                             // 710
                                                                                                                      // 711
        if (this._isSliding) {                                                                                        // 712
          $(this._element).one(Event.SLID, function () {                                                              // 713
            return _this2.to(index);                                                                                  // 714
          });                                                                                                         // 715
          return;                                                                                                     // 716
        }                                                                                                             // 717
                                                                                                                      // 718
        if (activeIndex === index) {                                                                                  // 719
          this.pause();                                                                                               // 720
          this.cycle();                                                                                               // 721
          return;                                                                                                     // 722
        }                                                                                                             // 723
                                                                                                                      // 724
        var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;                                    // 725
                                                                                                                      // 726
        this._slide(direction, this._items[index]);                                                                   // 727
      }                                                                                                               // 728
    }, {                                                                                                              // 729
      key: 'dispose',                                                                                                 // 730
      value: function dispose() {                                                                                     // 731
        $(this._element).off(EVENT_KEY);                                                                              // 732
        $.removeData(this._element, DATA_KEY);                                                                        // 733
                                                                                                                      // 734
        this._items = null;                                                                                           // 735
        this._config = null;                                                                                          // 736
        this._element = null;                                                                                         // 737
        this._interval = null;                                                                                        // 738
        this._isPaused = null;                                                                                        // 739
        this._isSliding = null;                                                                                       // 740
        this._activeElement = null;                                                                                   // 741
        this._indicatorsElement = null;                                                                               // 742
      }                                                                                                               // 743
                                                                                                                      // 744
      // private                                                                                                      // 745
                                                                                                                      // 746
    }, {                                                                                                              // 747
      key: '_getConfig',                                                                                              // 748
      value: function _getConfig(config) {                                                                            // 749
        config = $.extend({}, Default, config);                                                                       // 750
        Util.typeCheckConfig(NAME, config, DefaultType);                                                              // 751
        return config;                                                                                                // 752
      }                                                                                                               // 753
    }, {                                                                                                              // 754
      key: '_addEventListeners',                                                                                      // 755
      value: function _addEventListeners() {                                                                          // 756
        if (this._config.keyboard) {                                                                                  // 757
          $(this._element).on(Event.KEYDOWN, $.proxy(this._keydown, this));                                           // 758
        }                                                                                                             // 759
                                                                                                                      // 760
        if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {                        // 761
          $(this._element).on(Event.MOUSEENTER, $.proxy(this.pause, this)).on(Event.MOUSELEAVE, $.proxy(this.cycle, this));
        }                                                                                                             // 763
      }                                                                                                               // 764
    }, {                                                                                                              // 765
      key: '_keydown',                                                                                                // 766
      value: function _keydown(event) {                                                                               // 767
        event.preventDefault();                                                                                       // 768
                                                                                                                      // 769
        if (/input|textarea/i.test(event.target.tagName)) {                                                           // 770
          return;                                                                                                     // 771
        }                                                                                                             // 772
                                                                                                                      // 773
        switch (event.which) {                                                                                        // 774
          case 37:                                                                                                    // 775
            this.prev();break;                                                                                        // 776
          case 39:                                                                                                    // 777
            this.next();break;                                                                                        // 778
          default:                                                                                                    // 779
            return;                                                                                                   // 780
        }                                                                                                             // 781
      }                                                                                                               // 782
    }, {                                                                                                              // 783
      key: '_getItemIndex',                                                                                           // 784
      value: function _getItemIndex(element) {                                                                        // 785
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));                                           // 786
        return this._items.indexOf(element);                                                                          // 787
      }                                                                                                               // 788
    }, {                                                                                                              // 789
      key: '_getItemByDirection',                                                                                     // 790
      value: function _getItemByDirection(direction, activeElement) {                                                 // 791
        var isNextDirection = direction === Direction.NEXT;                                                           // 792
        var isPrevDirection = direction === Direction.PREVIOUS;                                                       // 793
        var activeIndex = this._getItemIndex(activeElement);                                                          // 794
        var lastItemIndex = this._items.length - 1;                                                                   // 795
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
                                                                                                                      // 797
        if (isGoingToWrap && !this._config.wrap) {                                                                    // 798
          return activeElement;                                                                                       // 799
        }                                                                                                             // 800
                                                                                                                      // 801
        var delta = direction === Direction.PREVIOUS ? -1 : 1;                                                        // 802
        var itemIndex = (activeIndex + delta) % this._items.length;                                                   // 803
                                                                                                                      // 804
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];                       // 805
      }                                                                                                               // 806
    }, {                                                                                                              // 807
      key: '_triggerSlideEvent',                                                                                      // 808
      value: function _triggerSlideEvent(relatedTarget, directionalClassname) {                                       // 809
        var slideEvent = $.Event(Event.SLIDE, {                                                                       // 810
          relatedTarget: relatedTarget,                                                                               // 811
          direction: directionalClassname                                                                             // 812
        });                                                                                                           // 813
                                                                                                                      // 814
        $(this._element).trigger(slideEvent);                                                                         // 815
                                                                                                                      // 816
        return slideEvent;                                                                                            // 817
      }                                                                                                               // 818
    }, {                                                                                                              // 819
      key: '_setActiveIndicatorElement',                                                                              // 820
      value: function _setActiveIndicatorElement(element) {                                                           // 821
        if (this._indicatorsElement) {                                                                                // 822
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);                             // 823
                                                                                                                      // 824
          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];                          // 825
                                                                                                                      // 826
          if (nextIndicator) {                                                                                        // 827
            $(nextIndicator).addClass(ClassName.ACTIVE);                                                              // 828
          }                                                                                                           // 829
        }                                                                                                             // 830
      }                                                                                                               // 831
    }, {                                                                                                              // 832
      key: '_slide',                                                                                                  // 833
      value: function _slide(direction, element) {                                                                    // 834
        var _this3 = this;                                                                                            // 835
                                                                                                                      // 836
        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];                                           // 837
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);             // 838
                                                                                                                      // 839
        var isCycling = Boolean(this._interval);                                                                      // 840
                                                                                                                      // 841
        var directionalClassName = direction === Direction.NEXT ? ClassName.LEFT : ClassName.RIGHT;                   // 842
                                                                                                                      // 843
        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {                                               // 844
          this._isSliding = false;                                                                                    // 845
          return;                                                                                                     // 846
        }                                                                                                             // 847
                                                                                                                      // 848
        var slideEvent = this._triggerSlideEvent(nextElement, directionalClassName);                                  // 849
        if (slideEvent.isDefaultPrevented()) {                                                                        // 850
          return;                                                                                                     // 851
        }                                                                                                             // 852
                                                                                                                      // 853
        if (!activeElement || !nextElement) {                                                                         // 854
          // some weirdness is happening, so we bail                                                                  // 855
          return;                                                                                                     // 856
        }                                                                                                             // 857
                                                                                                                      // 858
        this._isSliding = true;                                                                                       // 859
                                                                                                                      // 860
        if (isCycling) {                                                                                              // 861
          this.pause();                                                                                               // 862
        }                                                                                                             // 863
                                                                                                                      // 864
        this._setActiveIndicatorElement(nextElement);                                                                 // 865
                                                                                                                      // 866
        var slidEvent = $.Event(Event.SLID, {                                                                         // 867
          relatedTarget: nextElement,                                                                                 // 868
          direction: directionalClassName                                                                             // 869
        });                                                                                                           // 870
                                                                                                                      // 871
        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {                             // 872
                                                                                                                      // 873
          $(nextElement).addClass(direction);                                                                         // 874
                                                                                                                      // 875
          Util.reflow(nextElement);                                                                                   // 876
                                                                                                                      // 877
          $(activeElement).addClass(directionalClassName);                                                            // 878
          $(nextElement).addClass(directionalClassName);                                                              // 879
                                                                                                                      // 880
          $(activeElement).one(Util.TRANSITION_END, function () {                                                     // 881
            $(nextElement).removeClass(directionalClassName).removeClass(direction);                                  // 882
                                                                                                                      // 883
            $(nextElement).addClass(ClassName.ACTIVE);                                                                // 884
                                                                                                                      // 885
            $(activeElement).removeClass(ClassName.ACTIVE).removeClass(direction).removeClass(directionalClassName);  // 886
                                                                                                                      // 887
            _this3._isSliding = false;                                                                                // 888
                                                                                                                      // 889
            setTimeout(function () {                                                                                  // 890
              return $(_this3._element).trigger(slidEvent);                                                           // 891
            }, 0);                                                                                                    // 892
          }).emulateTransitionEnd(TRANSITION_DURATION);                                                               // 893
        } else {                                                                                                      // 894
          $(activeElement).removeClass(ClassName.ACTIVE);                                                             // 895
          $(nextElement).addClass(ClassName.ACTIVE);                                                                  // 896
                                                                                                                      // 897
          this._isSliding = false;                                                                                    // 898
          $(this._element).trigger(slidEvent);                                                                        // 899
        }                                                                                                             // 900
                                                                                                                      // 901
        if (isCycling) {                                                                                              // 902
          this.cycle();                                                                                               // 903
        }                                                                                                             // 904
      }                                                                                                               // 905
                                                                                                                      // 906
      // static                                                                                                       // 907
                                                                                                                      // 908
    }], [{                                                                                                            // 909
      key: '_jQueryInterface',                                                                                        // 910
      value: function _jQueryInterface(config) {                                                                      // 911
        return this.each(function () {                                                                                // 912
          var data = $(this).data(DATA_KEY);                                                                          // 913
          var _config = $.extend({}, Default, $(this).data());                                                        // 914
                                                                                                                      // 915
          if (typeof config === 'object') {                                                                           // 916
            $.extend(_config, config);                                                                                // 917
          }                                                                                                           // 918
                                                                                                                      // 919
          var action = typeof config === 'string' ? config : _config.slide;                                           // 920
                                                                                                                      // 921
          if (!data) {                                                                                                // 922
            data = new Carousel(this, _config);                                                                       // 923
            $(this).data(DATA_KEY, data);                                                                             // 924
          }                                                                                                           // 925
                                                                                                                      // 926
          if (typeof config === 'number') {                                                                           // 927
            data.to(config);                                                                                          // 928
          } else if (typeof action === 'string') {                                                                    // 929
            if (data[action] === undefined) {                                                                         // 930
              throw new Error('No method named "' + action + '"');                                                    // 931
            }                                                                                                         // 932
            data[action]();                                                                                           // 933
          } else if (_config.interval) {                                                                              // 934
            data.pause();                                                                                             // 935
            data.cycle();                                                                                             // 936
          }                                                                                                           // 937
        });                                                                                                           // 938
      }                                                                                                               // 939
    }, {                                                                                                              // 940
      key: '_dataApiClickHandler',                                                                                    // 941
      value: function _dataApiClickHandler(event) {                                                                   // 942
        var selector = Util.getSelectorFromElement(this);                                                             // 943
                                                                                                                      // 944
        if (!selector) {                                                                                              // 945
          return;                                                                                                     // 946
        }                                                                                                             // 947
                                                                                                                      // 948
        var target = $(selector)[0];                                                                                  // 949
                                                                                                                      // 950
        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {                                                     // 951
          return;                                                                                                     // 952
        }                                                                                                             // 953
                                                                                                                      // 954
        var config = $.extend({}, $(target).data(), $(this).data());                                                  // 955
        var slideIndex = this.getAttribute('data-slide-to');                                                          // 956
                                                                                                                      // 957
        if (slideIndex) {                                                                                             // 958
          config.interval = false;                                                                                    // 959
        }                                                                                                             // 960
                                                                                                                      // 961
        Carousel._jQueryInterface.call($(target), config);                                                            // 962
                                                                                                                      // 963
        if (slideIndex) {                                                                                             // 964
          $(target).data(DATA_KEY).to(slideIndex);                                                                    // 965
        }                                                                                                             // 966
                                                                                                                      // 967
        event.preventDefault();                                                                                       // 968
      }                                                                                                               // 969
    }, {                                                                                                              // 970
      key: 'VERSION',                                                                                                 // 971
      get: function get() {                                                                                           // 972
        return VERSION;                                                                                               // 973
      }                                                                                                               // 974
    }, {                                                                                                              // 975
      key: 'Default',                                                                                                 // 976
      get: function get() {                                                                                           // 977
        return Default;                                                                                               // 978
      }                                                                                                               // 979
    }]);                                                                                                              // 980
                                                                                                                      // 981
    return Carousel;                                                                                                  // 982
  })();                                                                                                               // 983
                                                                                                                      // 984
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);                           // 985
                                                                                                                      // 986
  $(window).on(Event.LOAD_DATA_API, function () {                                                                     // 987
    $(Selector.DATA_RIDE).each(function () {                                                                          // 988
      var $carousel = $(this);                                                                                        // 989
      Carousel._jQueryInterface.call($carousel, $carousel.data());                                                    // 990
    });                                                                                                               // 991
  });                                                                                                                 // 992
                                                                                                                      // 993
  /**                                                                                                                 // 994
   * ------------------------------------------------------------------------                                         // 995
   * jQuery                                                                                                           // 996
   * ------------------------------------------------------------------------                                         // 997
   */                                                                                                                 // 998
                                                                                                                      // 999
  $.fn[NAME] = Carousel._jQueryInterface;                                                                             // 1000
  $.fn[NAME].Constructor = Carousel;                                                                                  // 1001
  $.fn[NAME].noConflict = function () {                                                                               // 1002
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 1003
    return Carousel._jQueryInterface;                                                                                 // 1004
  };                                                                                                                  // 1005
                                                                                                                      // 1006
  return Carousel;                                                                                                    // 1007
})(jQuery);                                                                                                           // 1008
                                                                                                                      // 1009
/**                                                                                                                   // 1010
 * --------------------------------------------------------------------------                                         // 1011
 * Bootstrap (v4.0.0-alpha.2): collapse.js                                                                            // 1012
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1013
 * --------------------------------------------------------------------------                                         // 1014
 */                                                                                                                   // 1015
                                                                                                                      // 1016
var Collapse = (function ($) {                                                                                        // 1017
                                                                                                                      // 1018
  /**                                                                                                                 // 1019
   * ------------------------------------------------------------------------                                         // 1020
   * Constants                                                                                                        // 1021
   * ------------------------------------------------------------------------                                         // 1022
   */                                                                                                                 // 1023
                                                                                                                      // 1024
  var NAME = 'collapse';                                                                                              // 1025
  var VERSION = '4.0.0-alpha';                                                                                        // 1026
  var DATA_KEY = 'bs.collapse';                                                                                       // 1027
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 1028
  var DATA_API_KEY = '.data-api';                                                                                     // 1029
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 1030
  var TRANSITION_DURATION = 600;                                                                                      // 1031
                                                                                                                      // 1032
  var Default = {                                                                                                     // 1033
    toggle: true,                                                                                                     // 1034
    parent: ''                                                                                                        // 1035
  };                                                                                                                  // 1036
                                                                                                                      // 1037
  var DefaultType = {                                                                                                 // 1038
    toggle: 'boolean',                                                                                                // 1039
    parent: 'string'                                                                                                  // 1040
  };                                                                                                                  // 1041
                                                                                                                      // 1042
  var Event = {                                                                                                       // 1043
    SHOW: 'show' + EVENT_KEY,                                                                                         // 1044
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 1045
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 1046
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 1047
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY                                                                // 1048
  };                                                                                                                  // 1049
                                                                                                                      // 1050
  var ClassName = {                                                                                                   // 1051
    IN: 'in',                                                                                                         // 1052
    COLLAPSE: 'collapse',                                                                                             // 1053
    COLLAPSING: 'collapsing',                                                                                         // 1054
    COLLAPSED: 'collapsed'                                                                                            // 1055
  };                                                                                                                  // 1056
                                                                                                                      // 1057
  var Dimension = {                                                                                                   // 1058
    WIDTH: 'width',                                                                                                   // 1059
    HEIGHT: 'height'                                                                                                  // 1060
  };                                                                                                                  // 1061
                                                                                                                      // 1062
  var Selector = {                                                                                                    // 1063
    ACTIVES: '.panel > .in, .panel > .collapsing',                                                                    // 1064
    DATA_TOGGLE: '[data-toggle="collapse"]'                                                                           // 1065
  };                                                                                                                  // 1066
                                                                                                                      // 1067
  /**                                                                                                                 // 1068
   * ------------------------------------------------------------------------                                         // 1069
   * Class Definition                                                                                                 // 1070
   * ------------------------------------------------------------------------                                         // 1071
   */                                                                                                                 // 1072
                                                                                                                      // 1073
  var Collapse = (function () {                                                                                       // 1074
    function Collapse(element, config) {                                                                              // 1075
      _classCallCheck(this, Collapse);                                                                                // 1076
                                                                                                                      // 1077
      this._isTransitioning = false;                                                                                  // 1078
      this._element = element;                                                                                        // 1079
      this._config = this._getConfig(config);                                                                         // 1080
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
                                                                                                                      // 1082
      this._parent = this._config.parent ? this._getParent() : null;                                                  // 1083
                                                                                                                      // 1084
      if (!this._config.parent) {                                                                                     // 1085
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);                                            // 1086
      }                                                                                                               // 1087
                                                                                                                      // 1088
      if (this._config.toggle) {                                                                                      // 1089
        this.toggle();                                                                                                // 1090
      }                                                                                                               // 1091
    }                                                                                                                 // 1092
                                                                                                                      // 1093
    /**                                                                                                               // 1094
     * ------------------------------------------------------------------------                                       // 1095
     * Data Api implementation                                                                                        // 1096
     * ------------------------------------------------------------------------                                       // 1097
     */                                                                                                               // 1098
                                                                                                                      // 1099
    // getters                                                                                                        // 1100
                                                                                                                      // 1101
    _createClass(Collapse, [{                                                                                         // 1102
      key: 'toggle',                                                                                                  // 1103
                                                                                                                      // 1104
      // public                                                                                                       // 1105
                                                                                                                      // 1106
      value: function toggle() {                                                                                      // 1107
        if ($(this._element).hasClass(ClassName.IN)) {                                                                // 1108
          this.hide();                                                                                                // 1109
        } else {                                                                                                      // 1110
          this.show();                                                                                                // 1111
        }                                                                                                             // 1112
      }                                                                                                               // 1113
    }, {                                                                                                              // 1114
      key: 'show',                                                                                                    // 1115
      value: function show() {                                                                                        // 1116
        var _this4 = this;                                                                                            // 1117
                                                                                                                      // 1118
        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {                                       // 1119
          return;                                                                                                     // 1120
        }                                                                                                             // 1121
                                                                                                                      // 1122
        var actives = undefined;                                                                                      // 1123
        var activesData = undefined;                                                                                  // 1124
                                                                                                                      // 1125
        if (this._parent) {                                                                                           // 1126
          actives = $.makeArray($(Selector.ACTIVES));                                                                 // 1127
          if (!actives.length) {                                                                                      // 1128
            actives = null;                                                                                           // 1129
          }                                                                                                           // 1130
        }                                                                                                             // 1131
                                                                                                                      // 1132
        if (actives) {                                                                                                // 1133
          activesData = $(actives).data(DATA_KEY);                                                                    // 1134
          if (activesData && activesData._isTransitioning) {                                                          // 1135
            return;                                                                                                   // 1136
          }                                                                                                           // 1137
        }                                                                                                             // 1138
                                                                                                                      // 1139
        var startEvent = $.Event(Event.SHOW);                                                                         // 1140
        $(this._element).trigger(startEvent);                                                                         // 1141
        if (startEvent.isDefaultPrevented()) {                                                                        // 1142
          return;                                                                                                     // 1143
        }                                                                                                             // 1144
                                                                                                                      // 1145
        if (actives) {                                                                                                // 1146
          Collapse._jQueryInterface.call($(actives), 'hide');                                                         // 1147
          if (!activesData) {                                                                                         // 1148
            $(actives).data(DATA_KEY, null);                                                                          // 1149
          }                                                                                                           // 1150
        }                                                                                                             // 1151
                                                                                                                      // 1152
        var dimension = this._getDimension();                                                                         // 1153
                                                                                                                      // 1154
        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);                              // 1155
                                                                                                                      // 1156
        this._element.style[dimension] = 0;                                                                           // 1157
        this._element.setAttribute('aria-expanded', true);                                                            // 1158
                                                                                                                      // 1159
        if (this._triggerArray.length) {                                                                              // 1160
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);                         // 1161
        }                                                                                                             // 1162
                                                                                                                      // 1163
        this.setTransitioning(true);                                                                                  // 1164
                                                                                                                      // 1165
        var complete = function complete() {                                                                          // 1166
          $(_this4._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);   // 1167
                                                                                                                      // 1168
          _this4._element.style[dimension] = '';                                                                      // 1169
                                                                                                                      // 1170
          _this4.setTransitioning(false);                                                                             // 1171
                                                                                                                      // 1172
          $(_this4._element).trigger(Event.SHOWN);                                                                    // 1173
        };                                                                                                            // 1174
                                                                                                                      // 1175
        if (!Util.supportsTransitionEnd()) {                                                                          // 1176
          complete();                                                                                                 // 1177
          return;                                                                                                     // 1178
        }                                                                                                             // 1179
                                                                                                                      // 1180
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);                                   // 1181
        var scrollSize = 'scroll' + capitalizedDimension;                                                             // 1182
                                                                                                                      // 1183
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                // 1184
                                                                                                                      // 1185
        this._element.style[dimension] = this._element[scrollSize] + 'px';                                            // 1186
      }                                                                                                               // 1187
    }, {                                                                                                              // 1188
      key: 'hide',                                                                                                    // 1189
      value: function hide() {                                                                                        // 1190
        var _this5 = this;                                                                                            // 1191
                                                                                                                      // 1192
        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {                                      // 1193
          return;                                                                                                     // 1194
        }                                                                                                             // 1195
                                                                                                                      // 1196
        var startEvent = $.Event(Event.HIDE);                                                                         // 1197
        $(this._element).trigger(startEvent);                                                                         // 1198
        if (startEvent.isDefaultPrevented()) {                                                                        // 1199
          return;                                                                                                     // 1200
        }                                                                                                             // 1201
                                                                                                                      // 1202
        var dimension = this._getDimension();                                                                         // 1203
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';                         // 1204
                                                                                                                      // 1205
        this._element.style[dimension] = this._element[offsetDimension] + 'px';                                       // 1206
                                                                                                                      // 1207
        Util.reflow(this._element);                                                                                   // 1208
                                                                                                                      // 1209
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);    // 1210
                                                                                                                      // 1211
        this._element.setAttribute('aria-expanded', false);                                                           // 1212
                                                                                                                      // 1213
        if (this._triggerArray.length) {                                                                              // 1214
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);                           // 1215
        }                                                                                                             // 1216
                                                                                                                      // 1217
        this.setTransitioning(true);                                                                                  // 1218
                                                                                                                      // 1219
        var complete = function complete() {                                                                          // 1220
          _this5.setTransitioning(false);                                                                             // 1221
          $(_this5._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);    // 1222
        };                                                                                                            // 1223
                                                                                                                      // 1224
        this._element.style[dimension] = 0;                                                                           // 1225
                                                                                                                      // 1226
        if (!Util.supportsTransitionEnd()) {                                                                          // 1227
          complete();                                                                                                 // 1228
          return;                                                                                                     // 1229
        }                                                                                                             // 1230
                                                                                                                      // 1231
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                // 1232
      }                                                                                                               // 1233
    }, {                                                                                                              // 1234
      key: 'setTransitioning',                                                                                        // 1235
      value: function setTransitioning(isTransitioning) {                                                             // 1236
        this._isTransitioning = isTransitioning;                                                                      // 1237
      }                                                                                                               // 1238
    }, {                                                                                                              // 1239
      key: 'dispose',                                                                                                 // 1240
      value: function dispose() {                                                                                     // 1241
        $.removeData(this._element, DATA_KEY);                                                                        // 1242
                                                                                                                      // 1243
        this._config = null;                                                                                          // 1244
        this._parent = null;                                                                                          // 1245
        this._element = null;                                                                                         // 1246
        this._triggerArray = null;                                                                                    // 1247
        this._isTransitioning = null;                                                                                 // 1248
      }                                                                                                               // 1249
                                                                                                                      // 1250
      // private                                                                                                      // 1251
                                                                                                                      // 1252
    }, {                                                                                                              // 1253
      key: '_getConfig',                                                                                              // 1254
      value: function _getConfig(config) {                                                                            // 1255
        config = $.extend({}, Default, config);                                                                       // 1256
        config.toggle = Boolean(config.toggle); // coerce string values                                               // 1257
        Util.typeCheckConfig(NAME, config, DefaultType);                                                              // 1258
        return config;                                                                                                // 1259
      }                                                                                                               // 1260
    }, {                                                                                                              // 1261
      key: '_getDimension',                                                                                           // 1262
      value: function _getDimension() {                                                                               // 1263
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);                                                    // 1264
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;                                                         // 1265
      }                                                                                                               // 1266
    }, {                                                                                                              // 1267
      key: '_getParent',                                                                                              // 1268
      value: function _getParent() {                                                                                  // 1269
        var _this6 = this;                                                                                            // 1270
                                                                                                                      // 1271
        var parent = $(this._config.parent)[0];                                                                       // 1272
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';                         // 1273
                                                                                                                      // 1274
        $(parent).find(selector).each(function (i, element) {                                                         // 1275
          _this6._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);                       // 1276
        });                                                                                                           // 1277
                                                                                                                      // 1278
        return parent;                                                                                                // 1279
      }                                                                                                               // 1280
    }, {                                                                                                              // 1281
      key: '_addAriaAndCollapsedClass',                                                                               // 1282
      value: function _addAriaAndCollapsedClass(element, triggerArray) {                                              // 1283
        if (element) {                                                                                                // 1284
          var isOpen = $(element).hasClass(ClassName.IN);                                                             // 1285
          element.setAttribute('aria-expanded', isOpen);                                                              // 1286
                                                                                                                      // 1287
          if (triggerArray.length) {                                                                                  // 1288
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);                  // 1289
          }                                                                                                           // 1290
        }                                                                                                             // 1291
      }                                                                                                               // 1292
                                                                                                                      // 1293
      // static                                                                                                       // 1294
                                                                                                                      // 1295
    }], [{                                                                                                            // 1296
      key: '_getTargetFromElement',                                                                                   // 1297
      value: function _getTargetFromElement(element) {                                                                // 1298
        var selector = Util.getSelectorFromElement(element);                                                          // 1299
        return selector ? $(selector)[0] : null;                                                                      // 1300
      }                                                                                                               // 1301
    }, {                                                                                                              // 1302
      key: '_jQueryInterface',                                                                                        // 1303
      value: function _jQueryInterface(config) {                                                                      // 1304
        return this.each(function () {                                                                                // 1305
          var $this = $(this);                                                                                        // 1306
          var data = $this.data(DATA_KEY);                                                                            // 1307
          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);                    // 1308
                                                                                                                      // 1309
          if (!data && _config.toggle && /show|hide/.test(config)) {                                                  // 1310
            _config.toggle = false;                                                                                   // 1311
          }                                                                                                           // 1312
                                                                                                                      // 1313
          if (!data) {                                                                                                // 1314
            data = new Collapse(this, _config);                                                                       // 1315
            $this.data(DATA_KEY, data);                                                                               // 1316
          }                                                                                                           // 1317
                                                                                                                      // 1318
          if (typeof config === 'string') {                                                                           // 1319
            if (data[config] === undefined) {                                                                         // 1320
              throw new Error('No method named "' + config + '"');                                                    // 1321
            }                                                                                                         // 1322
            data[config]();                                                                                           // 1323
          }                                                                                                           // 1324
        });                                                                                                           // 1325
      }                                                                                                               // 1326
    }, {                                                                                                              // 1327
      key: 'VERSION',                                                                                                 // 1328
      get: function get() {                                                                                           // 1329
        return VERSION;                                                                                               // 1330
      }                                                                                                               // 1331
    }, {                                                                                                              // 1332
      key: 'Default',                                                                                                 // 1333
      get: function get() {                                                                                           // 1334
        return Default;                                                                                               // 1335
      }                                                                                                               // 1336
    }]);                                                                                                              // 1337
                                                                                                                      // 1338
    return Collapse;                                                                                                  // 1339
  })();                                                                                                               // 1340
                                                                                                                      // 1341
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                       // 1342
    event.preventDefault();                                                                                           // 1343
                                                                                                                      // 1344
    var target = Collapse._getTargetFromElement(this);                                                                // 1345
    var data = $(target).data(DATA_KEY);                                                                              // 1346
    var config = data ? 'toggle' : $(this).data();                                                                    // 1347
                                                                                                                      // 1348
    Collapse._jQueryInterface.call($(target), config);                                                                // 1349
  });                                                                                                                 // 1350
                                                                                                                      // 1351
  /**                                                                                                                 // 1352
   * ------------------------------------------------------------------------                                         // 1353
   * jQuery                                                                                                           // 1354
   * ------------------------------------------------------------------------                                         // 1355
   */                                                                                                                 // 1356
                                                                                                                      // 1357
  $.fn[NAME] = Collapse._jQueryInterface;                                                                             // 1358
  $.fn[NAME].Constructor = Collapse;                                                                                  // 1359
  $.fn[NAME].noConflict = function () {                                                                               // 1360
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 1361
    return Collapse._jQueryInterface;                                                                                 // 1362
  };                                                                                                                  // 1363
                                                                                                                      // 1364
  return Collapse;                                                                                                    // 1365
})(jQuery);                                                                                                           // 1366
                                                                                                                      // 1367
/**                                                                                                                   // 1368
 * --------------------------------------------------------------------------                                         // 1369
 * Bootstrap (v4.0.0-alpha.2): dropdown.js                                                                            // 1370
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1371
 * --------------------------------------------------------------------------                                         // 1372
 */                                                                                                                   // 1373
                                                                                                                      // 1374
var Dropdown = (function ($) {                                                                                        // 1375
                                                                                                                      // 1376
  /**                                                                                                                 // 1377
   * ------------------------------------------------------------------------                                         // 1378
   * Constants                                                                                                        // 1379
   * ------------------------------------------------------------------------                                         // 1380
   */                                                                                                                 // 1381
                                                                                                                      // 1382
  var NAME = 'dropdown';                                                                                              // 1383
  var VERSION = '4.0.0-alpha';                                                                                        // 1384
  var DATA_KEY = 'bs.dropdown';                                                                                       // 1385
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 1386
  var DATA_API_KEY = '.data-api';                                                                                     // 1387
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 1388
                                                                                                                      // 1389
  var Event = {                                                                                                       // 1390
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 1391
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 1392
    SHOW: 'show' + EVENT_KEY,                                                                                         // 1393
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 1394
    CLICK: 'click' + EVENT_KEY,                                                                                       // 1395
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,                                                               // 1396
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY                                                            // 1397
  };                                                                                                                  // 1398
                                                                                                                      // 1399
  var ClassName = {                                                                                                   // 1400
    BACKDROP: 'dropdown-backdrop',                                                                                    // 1401
    DISABLED: 'disabled',                                                                                             // 1402
    OPEN: 'open'                                                                                                      // 1403
  };                                                                                                                  // 1404
                                                                                                                      // 1405
  var Selector = {                                                                                                    // 1406
    BACKDROP: '.dropdown-backdrop',                                                                                   // 1407
    DATA_TOGGLE: '[data-toggle="dropdown"]',                                                                          // 1408
    FORM_CHILD: '.dropdown form',                                                                                     // 1409
    ROLE_MENU: '[role="menu"]',                                                                                       // 1410
    ROLE_LISTBOX: '[role="listbox"]',                                                                                 // 1411
    NAVBAR_NAV: '.navbar-nav',                                                                                        // 1412
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'                     // 1413
  };                                                                                                                  // 1414
                                                                                                                      // 1415
  /**                                                                                                                 // 1416
   * ------------------------------------------------------------------------                                         // 1417
   * Class Definition                                                                                                 // 1418
   * ------------------------------------------------------------------------                                         // 1419
   */                                                                                                                 // 1420
                                                                                                                      // 1421
  var Dropdown = (function () {                                                                                       // 1422
    function Dropdown(element) {                                                                                      // 1423
      _classCallCheck(this, Dropdown);                                                                                // 1424
                                                                                                                      // 1425
      this._element = element;                                                                                        // 1426
                                                                                                                      // 1427
      this._addEventListeners();                                                                                      // 1428
    }                                                                                                                 // 1429
                                                                                                                      // 1430
    /**                                                                                                               // 1431
     * ------------------------------------------------------------------------                                       // 1432
     * Data Api implementation                                                                                        // 1433
     * ------------------------------------------------------------------------                                       // 1434
     */                                                                                                               // 1435
                                                                                                                      // 1436
    // getters                                                                                                        // 1437
                                                                                                                      // 1438
    _createClass(Dropdown, [{                                                                                         // 1439
      key: 'toggle',                                                                                                  // 1440
                                                                                                                      // 1441
      // public                                                                                                       // 1442
                                                                                                                      // 1443
      value: function toggle() {                                                                                      // 1444
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {                                                  // 1445
          return false;                                                                                               // 1446
        }                                                                                                             // 1447
                                                                                                                      // 1448
        var parent = Dropdown._getParentFromElement(this);                                                            // 1449
        var isActive = $(parent).hasClass(ClassName.OPEN);                                                            // 1450
                                                                                                                      // 1451
        Dropdown._clearMenus();                                                                                       // 1452
                                                                                                                      // 1453
        if (isActive) {                                                                                               // 1454
          return false;                                                                                               // 1455
        }                                                                                                             // 1456
                                                                                                                      // 1457
        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {           // 1458
                                                                                                                      // 1459
          // if mobile we use a backdrop because click events don't delegate                                          // 1460
          var dropdown = document.createElement('div');                                                               // 1461
          dropdown.className = ClassName.BACKDROP;                                                                    // 1462
          $(dropdown).insertBefore(this);                                                                             // 1463
          $(dropdown).on('click', Dropdown._clearMenus);                                                              // 1464
        }                                                                                                             // 1465
                                                                                                                      // 1466
        var relatedTarget = { relatedTarget: this };                                                                  // 1467
        var showEvent = $.Event(Event.SHOW, relatedTarget);                                                           // 1468
                                                                                                                      // 1469
        $(parent).trigger(showEvent);                                                                                 // 1470
                                                                                                                      // 1471
        if (showEvent.isDefaultPrevented()) {                                                                         // 1472
          return false;                                                                                               // 1473
        }                                                                                                             // 1474
                                                                                                                      // 1475
        this.focus();                                                                                                 // 1476
        this.setAttribute('aria-expanded', 'true');                                                                   // 1477
                                                                                                                      // 1478
        $(parent).toggleClass(ClassName.OPEN);                                                                        // 1479
        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));                                                       // 1480
                                                                                                                      // 1481
        return false;                                                                                                 // 1482
      }                                                                                                               // 1483
    }, {                                                                                                              // 1484
      key: 'dispose',                                                                                                 // 1485
      value: function dispose() {                                                                                     // 1486
        $.removeData(this._element, DATA_KEY);                                                                        // 1487
        $(this._element).off(EVENT_KEY);                                                                              // 1488
        this._element = null;                                                                                         // 1489
      }                                                                                                               // 1490
                                                                                                                      // 1491
      // private                                                                                                      // 1492
                                                                                                                      // 1493
    }, {                                                                                                              // 1494
      key: '_addEventListeners',                                                                                      // 1495
      value: function _addEventListeners() {                                                                          // 1496
        $(this._element).on(Event.CLICK, this.toggle);                                                                // 1497
      }                                                                                                               // 1498
                                                                                                                      // 1499
      // static                                                                                                       // 1500
                                                                                                                      // 1501
    }], [{                                                                                                            // 1502
      key: '_jQueryInterface',                                                                                        // 1503
      value: function _jQueryInterface(config) {                                                                      // 1504
        return this.each(function () {                                                                                // 1505
          var data = $(this).data(DATA_KEY);                                                                          // 1506
                                                                                                                      // 1507
          if (!data) {                                                                                                // 1508
            $(this).data(DATA_KEY, data = new Dropdown(this));                                                        // 1509
          }                                                                                                           // 1510
                                                                                                                      // 1511
          if (typeof config === 'string') {                                                                           // 1512
            if (data[config] === undefined) {                                                                         // 1513
              throw new Error('No method named "' + config + '"');                                                    // 1514
            }                                                                                                         // 1515
            data[config].call(this);                                                                                  // 1516
          }                                                                                                           // 1517
        });                                                                                                           // 1518
      }                                                                                                               // 1519
    }, {                                                                                                              // 1520
      key: '_clearMenus',                                                                                             // 1521
      value: function _clearMenus(event) {                                                                            // 1522
        if (event && event.which === 3) {                                                                             // 1523
          return;                                                                                                     // 1524
        }                                                                                                             // 1525
                                                                                                                      // 1526
        var backdrop = $(Selector.BACKDROP)[0];                                                                       // 1527
        if (backdrop) {                                                                                               // 1528
          backdrop.parentNode.removeChild(backdrop);                                                                  // 1529
        }                                                                                                             // 1530
                                                                                                                      // 1531
        var toggles = $.makeArray($(Selector.DATA_TOGGLE));                                                           // 1532
                                                                                                                      // 1533
        for (var i = 0; i < toggles.length; i++) {                                                                    // 1534
          var _parent = Dropdown._getParentFromElement(toggles[i]);                                                   // 1535
          var relatedTarget = { relatedTarget: toggles[i] };                                                          // 1536
                                                                                                                      // 1537
          if (!$(_parent).hasClass(ClassName.OPEN)) {                                                                 // 1538
            continue;                                                                                                 // 1539
          }                                                                                                           // 1540
                                                                                                                      // 1541
          if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
            continue;                                                                                                 // 1543
          }                                                                                                           // 1544
                                                                                                                      // 1545
          var hideEvent = $.Event(Event.HIDE, relatedTarget);                                                         // 1546
          $(_parent).trigger(hideEvent);                                                                              // 1547
          if (hideEvent.isDefaultPrevented()) {                                                                       // 1548
            continue;                                                                                                 // 1549
          }                                                                                                           // 1550
                                                                                                                      // 1551
          toggles[i].setAttribute('aria-expanded', 'false');                                                          // 1552
                                                                                                                      // 1553
          $(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));                       // 1554
        }                                                                                                             // 1555
      }                                                                                                               // 1556
    }, {                                                                                                              // 1557
      key: '_getParentFromElement',                                                                                   // 1558
      value: function _getParentFromElement(element) {                                                                // 1559
        var parent = undefined;                                                                                       // 1560
        var selector = Util.getSelectorFromElement(element);                                                          // 1561
                                                                                                                      // 1562
        if (selector) {                                                                                               // 1563
          parent = $(selector)[0];                                                                                    // 1564
        }                                                                                                             // 1565
                                                                                                                      // 1566
        return parent || element.parentNode;                                                                          // 1567
      }                                                                                                               // 1568
    }, {                                                                                                              // 1569
      key: '_dataApiKeydownHandler',                                                                                  // 1570
      value: function _dataApiKeydownHandler(event) {                                                                 // 1571
        if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {                     // 1572
          return;                                                                                                     // 1573
        }                                                                                                             // 1574
                                                                                                                      // 1575
        event.preventDefault();                                                                                       // 1576
        event.stopPropagation();                                                                                      // 1577
                                                                                                                      // 1578
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {                                                  // 1579
          return;                                                                                                     // 1580
        }                                                                                                             // 1581
                                                                                                                      // 1582
        var parent = Dropdown._getParentFromElement(this);                                                            // 1583
        var isActive = $(parent).hasClass(ClassName.OPEN);                                                            // 1584
                                                                                                                      // 1585
        if (!isActive && event.which !== 27 || isActive && event.which === 27) {                                      // 1586
                                                                                                                      // 1587
          if (event.which === 27) {                                                                                   // 1588
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];                                                     // 1589
            $(toggle).trigger('focus');                                                                               // 1590
          }                                                                                                           // 1591
                                                                                                                      // 1592
          $(this).trigger('click');                                                                                   // 1593
          return;                                                                                                     // 1594
        }                                                                                                             // 1595
                                                                                                                      // 1596
        var items = $.makeArray($(Selector.VISIBLE_ITEMS));                                                           // 1597
                                                                                                                      // 1598
        items = items.filter(function (item) {                                                                        // 1599
          return item.offsetWidth || item.offsetHeight;                                                               // 1600
        });                                                                                                           // 1601
                                                                                                                      // 1602
        if (!items.length) {                                                                                          // 1603
          return;                                                                                                     // 1604
        }                                                                                                             // 1605
                                                                                                                      // 1606
        var index = items.indexOf(event.target);                                                                      // 1607
                                                                                                                      // 1608
        if (event.which === 38 && index > 0) {                                                                        // 1609
          // up                                                                                                       // 1610
          index--;                                                                                                    // 1611
        }                                                                                                             // 1612
                                                                                                                      // 1613
        if (event.which === 40 && index < items.length - 1) {                                                         // 1614
          // down                                                                                                     // 1615
          index++;                                                                                                    // 1616
        }                                                                                                             // 1617
                                                                                                                      // 1618
        if (! ~index) {                                                                                               // 1619
          index = 0;                                                                                                  // 1620
        }                                                                                                             // 1621
                                                                                                                      // 1622
        items[index].focus();                                                                                         // 1623
      }                                                                                                               // 1624
    }, {                                                                                                              // 1625
      key: 'VERSION',                                                                                                 // 1626
      get: function get() {                                                                                           // 1627
        return VERSION;                                                                                               // 1628
      }                                                                                                               // 1629
    }]);                                                                                                              // 1630
                                                                                                                      // 1631
    return Dropdown;                                                                                                  // 1632
  })();                                                                                                               // 1633
                                                                                                                      // 1634
  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();                                                                                              // 1636
  });                                                                                                                 // 1637
                                                                                                                      // 1638
  /**                                                                                                                 // 1639
   * ------------------------------------------------------------------------                                         // 1640
   * jQuery                                                                                                           // 1641
   * ------------------------------------------------------------------------                                         // 1642
   */                                                                                                                 // 1643
                                                                                                                      // 1644
  $.fn[NAME] = Dropdown._jQueryInterface;                                                                             // 1645
  $.fn[NAME].Constructor = Dropdown;                                                                                  // 1646
  $.fn[NAME].noConflict = function () {                                                                               // 1647
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 1648
    return Dropdown._jQueryInterface;                                                                                 // 1649
  };                                                                                                                  // 1650
                                                                                                                      // 1651
  return Dropdown;                                                                                                    // 1652
})(jQuery);                                                                                                           // 1653
                                                                                                                      // 1654
/**                                                                                                                   // 1655
 * --------------------------------------------------------------------------                                         // 1656
 * Bootstrap (v4.0.0-alpha.2): modal.js                                                                               // 1657
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1658
 * --------------------------------------------------------------------------                                         // 1659
 */                                                                                                                   // 1660
                                                                                                                      // 1661
var Modal = (function ($) {                                                                                           // 1662
                                                                                                                      // 1663
  /**                                                                                                                 // 1664
   * ------------------------------------------------------------------------                                         // 1665
   * Constants                                                                                                        // 1666
   * ------------------------------------------------------------------------                                         // 1667
   */                                                                                                                 // 1668
                                                                                                                      // 1669
  var NAME = 'modal';                                                                                                 // 1670
  var VERSION = '4.0.0-alpha';                                                                                        // 1671
  var DATA_KEY = 'bs.modal';                                                                                          // 1672
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 1673
  var DATA_API_KEY = '.data-api';                                                                                     // 1674
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 1675
  var TRANSITION_DURATION = 300;                                                                                      // 1676
  var BACKDROP_TRANSITION_DURATION = 150;                                                                             // 1677
                                                                                                                      // 1678
  var Default = {                                                                                                     // 1679
    backdrop: true,                                                                                                   // 1680
    keyboard: true,                                                                                                   // 1681
    focus: true,                                                                                                      // 1682
    show: true                                                                                                        // 1683
  };                                                                                                                  // 1684
                                                                                                                      // 1685
  var DefaultType = {                                                                                                 // 1686
    backdrop: '(boolean|string)',                                                                                     // 1687
    keyboard: 'boolean',                                                                                              // 1688
    focus: 'boolean',                                                                                                 // 1689
    show: 'boolean'                                                                                                   // 1690
  };                                                                                                                  // 1691
                                                                                                                      // 1692
  var Event = {                                                                                                       // 1693
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 1694
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 1695
    SHOW: 'show' + EVENT_KEY,                                                                                         // 1696
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 1697
    FOCUSIN: 'focusin' + EVENT_KEY,                                                                                   // 1698
    RESIZE: 'resize' + EVENT_KEY,                                                                                     // 1699
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,                                                                       // 1700
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,                                                                   // 1701
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,                                                                   // 1702
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,                                                               // 1703
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY                                                                // 1704
  };                                                                                                                  // 1705
                                                                                                                      // 1706
  var ClassName = {                                                                                                   // 1707
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',                                                                    // 1708
    BACKDROP: 'modal-backdrop',                                                                                       // 1709
    OPEN: 'modal-open',                                                                                               // 1710
    FADE: 'fade',                                                                                                     // 1711
    IN: 'in'                                                                                                          // 1712
  };                                                                                                                  // 1713
                                                                                                                      // 1714
  var Selector = {                                                                                                    // 1715
    DIALOG: '.modal-dialog',                                                                                          // 1716
    DATA_TOGGLE: '[data-toggle="modal"]',                                                                             // 1717
    DATA_DISMISS: '[data-dismiss="modal"]',                                                                           // 1718
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'                                               // 1719
  };                                                                                                                  // 1720
                                                                                                                      // 1721
  /**                                                                                                                 // 1722
   * ------------------------------------------------------------------------                                         // 1723
   * Class Definition                                                                                                 // 1724
   * ------------------------------------------------------------------------                                         // 1725
   */                                                                                                                 // 1726
                                                                                                                      // 1727
  var Modal = (function () {                                                                                          // 1728
    function Modal(element, config) {                                                                                 // 1729
      _classCallCheck(this, Modal);                                                                                   // 1730
                                                                                                                      // 1731
      this._config = this._getConfig(config);                                                                         // 1732
      this._element = element;                                                                                        // 1733
      this._dialog = $(element).find(Selector.DIALOG)[0];                                                             // 1734
      this._backdrop = null;                                                                                          // 1735
      this._isShown = false;                                                                                          // 1736
      this._isBodyOverflowing = false;                                                                                // 1737
      this._ignoreBackdropClick = false;                                                                              // 1738
      this._originalBodyPadding = 0;                                                                                  // 1739
      this._scrollbarWidth = 0;                                                                                       // 1740
    }                                                                                                                 // 1741
                                                                                                                      // 1742
    /**                                                                                                               // 1743
     * ------------------------------------------------------------------------                                       // 1744
     * Data Api implementation                                                                                        // 1745
     * ------------------------------------------------------------------------                                       // 1746
     */                                                                                                               // 1747
                                                                                                                      // 1748
    // getters                                                                                                        // 1749
                                                                                                                      // 1750
    _createClass(Modal, [{                                                                                            // 1751
      key: 'toggle',                                                                                                  // 1752
                                                                                                                      // 1753
      // public                                                                                                       // 1754
                                                                                                                      // 1755
      value: function toggle(relatedTarget) {                                                                         // 1756
        return this._isShown ? this.hide() : this.show(relatedTarget);                                                // 1757
      }                                                                                                               // 1758
    }, {                                                                                                              // 1759
      key: 'show',                                                                                                    // 1760
      value: function show(relatedTarget) {                                                                           // 1761
        var _this7 = this;                                                                                            // 1762
                                                                                                                      // 1763
        var showEvent = $.Event(Event.SHOW, {                                                                         // 1764
          relatedTarget: relatedTarget                                                                                // 1765
        });                                                                                                           // 1766
                                                                                                                      // 1767
        $(this._element).trigger(showEvent);                                                                          // 1768
                                                                                                                      // 1769
        if (this._isShown || showEvent.isDefaultPrevented()) {                                                        // 1770
          return;                                                                                                     // 1771
        }                                                                                                             // 1772
                                                                                                                      // 1773
        this._isShown = true;                                                                                         // 1774
                                                                                                                      // 1775
        this._checkScrollbar();                                                                                       // 1776
        this._setScrollbar();                                                                                         // 1777
                                                                                                                      // 1778
        $(document.body).addClass(ClassName.OPEN);                                                                    // 1779
                                                                                                                      // 1780
        this._setEscapeEvent();                                                                                       // 1781
        this._setResizeEvent();                                                                                       // 1782
                                                                                                                      // 1783
        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));                    // 1784
                                                                                                                      // 1785
        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {                                                     // 1786
          $(_this7._element).one(Event.MOUSEUP_DISMISS, function (event) {                                            // 1787
            if ($(event.target).is(_this7._element)) {                                                                // 1788
              _this7._ignoreBackdropClick = true;                                                                     // 1789
            }                                                                                                         // 1790
          });                                                                                                         // 1791
        });                                                                                                           // 1792
                                                                                                                      // 1793
        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));                                          // 1794
      }                                                                                                               // 1795
    }, {                                                                                                              // 1796
      key: 'hide',                                                                                                    // 1797
      value: function hide(event) {                                                                                   // 1798
        if (event) {                                                                                                  // 1799
          event.preventDefault();                                                                                     // 1800
        }                                                                                                             // 1801
                                                                                                                      // 1802
        var hideEvent = $.Event(Event.HIDE);                                                                          // 1803
                                                                                                                      // 1804
        $(this._element).trigger(hideEvent);                                                                          // 1805
                                                                                                                      // 1806
        if (!this._isShown || hideEvent.isDefaultPrevented()) {                                                       // 1807
          return;                                                                                                     // 1808
        }                                                                                                             // 1809
                                                                                                                      // 1810
        this._isShown = false;                                                                                        // 1811
                                                                                                                      // 1812
        this._setEscapeEvent();                                                                                       // 1813
        this._setResizeEvent();                                                                                       // 1814
                                                                                                                      // 1815
        $(document).off(Event.FOCUSIN);                                                                               // 1816
                                                                                                                      // 1817
        $(this._element).removeClass(ClassName.IN);                                                                   // 1818
                                                                                                                      // 1819
        $(this._element).off(Event.CLICK_DISMISS);                                                                    // 1820
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);                                                                 // 1821
                                                                                                                      // 1822
        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {                              // 1823
                                                                                                                      // 1824
          $(this._element).one(Util.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {                                                                                                      // 1826
          this._hideModal();                                                                                          // 1827
        }                                                                                                             // 1828
      }                                                                                                               // 1829
    }, {                                                                                                              // 1830
      key: 'dispose',                                                                                                 // 1831
      value: function dispose() {                                                                                     // 1832
        $.removeData(this._element, DATA_KEY);                                                                        // 1833
                                                                                                                      // 1834
        $(window).off(EVENT_KEY);                                                                                     // 1835
        $(document).off(EVENT_KEY);                                                                                   // 1836
        $(this._element).off(EVENT_KEY);                                                                              // 1837
        $(this._backdrop).off(EVENT_KEY);                                                                             // 1838
                                                                                                                      // 1839
        this._config = null;                                                                                          // 1840
        this._element = null;                                                                                         // 1841
        this._dialog = null;                                                                                          // 1842
        this._backdrop = null;                                                                                        // 1843
        this._isShown = null;                                                                                         // 1844
        this._isBodyOverflowing = null;                                                                               // 1845
        this._ignoreBackdropClick = null;                                                                             // 1846
        this._originalBodyPadding = null;                                                                             // 1847
        this._scrollbarWidth = null;                                                                                  // 1848
      }                                                                                                               // 1849
                                                                                                                      // 1850
      // private                                                                                                      // 1851
                                                                                                                      // 1852
    }, {                                                                                                              // 1853
      key: '_getConfig',                                                                                              // 1854
      value: function _getConfig(config) {                                                                            // 1855
        config = $.extend({}, Default, config);                                                                       // 1856
        Util.typeCheckConfig(NAME, config, DefaultType);                                                              // 1857
        return config;                                                                                                // 1858
      }                                                                                                               // 1859
    }, {                                                                                                              // 1860
      key: '_showElement',                                                                                            // 1861
      value: function _showElement(relatedTarget) {                                                                   // 1862
        var _this8 = this;                                                                                            // 1863
                                                                                                                      // 1864
        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);                   // 1865
                                                                                                                      // 1866
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {                   // 1867
          // don't move modals dom position                                                                           // 1868
          document.body.appendChild(this._element);                                                                   // 1869
        }                                                                                                             // 1870
                                                                                                                      // 1871
        this._element.style.display = 'block';                                                                        // 1872
        this._element.scrollTop = 0;                                                                                  // 1873
                                                                                                                      // 1874
        if (transition) {                                                                                             // 1875
          Util.reflow(this._element);                                                                                 // 1876
        }                                                                                                             // 1877
                                                                                                                      // 1878
        $(this._element).addClass(ClassName.IN);                                                                      // 1879
                                                                                                                      // 1880
        if (this._config.focus) {                                                                                     // 1881
          this._enforceFocus();                                                                                       // 1882
        }                                                                                                             // 1883
                                                                                                                      // 1884
        var shownEvent = $.Event(Event.SHOWN, {                                                                       // 1885
          relatedTarget: relatedTarget                                                                                // 1886
        });                                                                                                           // 1887
                                                                                                                      // 1888
        var transitionComplete = function transitionComplete() {                                                      // 1889
          if (_this8._config.focus) {                                                                                 // 1890
            _this8._element.focus();                                                                                  // 1891
          }                                                                                                           // 1892
          $(_this8._element).trigger(shownEvent);                                                                     // 1893
        };                                                                                                            // 1894
                                                                                                                      // 1895
        if (transition) {                                                                                             // 1896
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);     // 1897
        } else {                                                                                                      // 1898
          transitionComplete();                                                                                       // 1899
        }                                                                                                             // 1900
      }                                                                                                               // 1901
    }, {                                                                                                              // 1902
      key: '_enforceFocus',                                                                                           // 1903
      value: function _enforceFocus() {                                                                               // 1904
        var _this9 = this;                                                                                            // 1905
                                                                                                                      // 1906
        $(document).off(Event.FOCUSIN) // guard against infinite focus loop                                           // 1907
        .on(Event.FOCUSIN, function (event) {                                                                         // 1908
          if (_this9._element !== event.target && !$(_this9._element).has(event.target).length) {                     // 1909
            _this9._element.focus();                                                                                  // 1910
          }                                                                                                           // 1911
        });                                                                                                           // 1912
      }                                                                                                               // 1913
    }, {                                                                                                              // 1914
      key: '_setEscapeEvent',                                                                                         // 1915
      value: function _setEscapeEvent() {                                                                             // 1916
        var _this10 = this;                                                                                           // 1917
                                                                                                                      // 1918
        if (this._isShown && this._config.keyboard) {                                                                 // 1919
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {                                               // 1920
            if (event.which === 27) {                                                                                 // 1921
              _this10.hide();                                                                                         // 1922
            }                                                                                                         // 1923
          });                                                                                                         // 1924
        } else if (!this._isShown) {                                                                                  // 1925
          $(this._element).off(Event.KEYDOWN_DISMISS);                                                                // 1926
        }                                                                                                             // 1927
      }                                                                                                               // 1928
    }, {                                                                                                              // 1929
      key: '_setResizeEvent',                                                                                         // 1930
      value: function _setResizeEvent() {                                                                             // 1931
        if (this._isShown) {                                                                                          // 1932
          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));                                              // 1933
        } else {                                                                                                      // 1934
          $(window).off(Event.RESIZE);                                                                                // 1935
        }                                                                                                             // 1936
      }                                                                                                               // 1937
    }, {                                                                                                              // 1938
      key: '_hideModal',                                                                                              // 1939
      value: function _hideModal() {                                                                                  // 1940
        var _this11 = this;                                                                                           // 1941
                                                                                                                      // 1942
        this._element.style.display = 'none';                                                                         // 1943
        this._showBackdrop(function () {                                                                              // 1944
          $(document.body).removeClass(ClassName.OPEN);                                                               // 1945
          _this11._resetAdjustments();                                                                                // 1946
          _this11._resetScrollbar();                                                                                  // 1947
          $(_this11._element).trigger(Event.HIDDEN);                                                                  // 1948
        });                                                                                                           // 1949
      }                                                                                                               // 1950
    }, {                                                                                                              // 1951
      key: '_removeBackdrop',                                                                                         // 1952
      value: function _removeBackdrop() {                                                                             // 1953
        if (this._backdrop) {                                                                                         // 1954
          $(this._backdrop).remove();                                                                                 // 1955
          this._backdrop = null;                                                                                      // 1956
        }                                                                                                             // 1957
      }                                                                                                               // 1958
    }, {                                                                                                              // 1959
      key: '_showBackdrop',                                                                                           // 1960
      value: function _showBackdrop(callback) {                                                                       // 1961
        var _this12 = this;                                                                                           // 1962
                                                                                                                      // 1963
        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';                                // 1964
                                                                                                                      // 1965
        if (this._isShown && this._config.backdrop) {                                                                 // 1966
          var doAnimate = Util.supportsTransitionEnd() && animate;                                                    // 1967
                                                                                                                      // 1968
          this._backdrop = document.createElement('div');                                                             // 1969
          this._backdrop.className = ClassName.BACKDROP;                                                              // 1970
                                                                                                                      // 1971
          if (animate) {                                                                                              // 1972
            $(this._backdrop).addClass(animate);                                                                      // 1973
          }                                                                                                           // 1974
                                                                                                                      // 1975
          $(this._backdrop).appendTo(document.body);                                                                  // 1976
                                                                                                                      // 1977
          $(this._element).on(Event.CLICK_DISMISS, function (event) {                                                 // 1978
            if (_this12._ignoreBackdropClick) {                                                                       // 1979
              _this12._ignoreBackdropClick = false;                                                                   // 1980
              return;                                                                                                 // 1981
            }                                                                                                         // 1982
            if (event.target !== event.currentTarget) {                                                               // 1983
              return;                                                                                                 // 1984
            }                                                                                                         // 1985
            if (_this12._config.backdrop === 'static') {                                                              // 1986
              _this12._element.focus();                                                                               // 1987
            } else {                                                                                                  // 1988
              _this12.hide();                                                                                         // 1989
            }                                                                                                         // 1990
          });                                                                                                         // 1991
                                                                                                                      // 1992
          if (doAnimate) {                                                                                            // 1993
            Util.reflow(this._backdrop);                                                                              // 1994
          }                                                                                                           // 1995
                                                                                                                      // 1996
          $(this._backdrop).addClass(ClassName.IN);                                                                   // 1997
                                                                                                                      // 1998
          if (!callback) {                                                                                            // 1999
            return;                                                                                                   // 2000
          }                                                                                                           // 2001
                                                                                                                      // 2002
          if (!doAnimate) {                                                                                           // 2003
            callback();                                                                                               // 2004
            return;                                                                                                   // 2005
          }                                                                                                           // 2006
                                                                                                                      // 2007
          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);    // 2008
        } else if (!this._isShown && this._backdrop) {                                                                // 2009
          $(this._backdrop).removeClass(ClassName.IN);                                                                // 2010
                                                                                                                      // 2011
          var callbackRemove = function callbackRemove() {                                                            // 2012
            _this12._removeBackdrop();                                                                                // 2013
            if (callback) {                                                                                           // 2014
              callback();                                                                                             // 2015
            }                                                                                                         // 2016
          };                                                                                                          // 2017
                                                                                                                      // 2018
          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {                            // 2019
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {                                                                                                    // 2021
            callbackRemove();                                                                                         // 2022
          }                                                                                                           // 2023
        } else if (callback) {                                                                                        // 2024
          callback();                                                                                                 // 2025
        }                                                                                                             // 2026
      }                                                                                                               // 2027
                                                                                                                      // 2028
      // ----------------------------------------------------------------------                                       // 2029
      // the following methods are used to handle overflowing modals                                                  // 2030
      // todo (fat): these should probably be refactored out of modal.js                                              // 2031
      // ----------------------------------------------------------------------                                       // 2032
                                                                                                                      // 2033
    }, {                                                                                                              // 2034
      key: '_handleUpdate',                                                                                           // 2035
      value: function _handleUpdate() {                                                                               // 2036
        this._adjustDialog();                                                                                         // 2037
      }                                                                                                               // 2038
    }, {                                                                                                              // 2039
      key: '_adjustDialog',                                                                                           // 2040
      value: function _adjustDialog() {                                                                               // 2041
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;                  // 2042
                                                                                                                      // 2043
        if (!this._isBodyOverflowing && isModalOverflowing) {                                                         // 2044
          this._element.style.paddingLeft = this._scrollbarWidth + 'px';                                              // 2045
        }                                                                                                             // 2046
                                                                                                                      // 2047
        if (this._isBodyOverflowing && !isModalOverflowing) {                                                         // 2048
          this._element.style.paddingRight = this._scrollbarWidth + 'px~';                                            // 2049
        }                                                                                                             // 2050
      }                                                                                                               // 2051
    }, {                                                                                                              // 2052
      key: '_resetAdjustments',                                                                                       // 2053
      value: function _resetAdjustments() {                                                                           // 2054
        this._element.style.paddingLeft = '';                                                                         // 2055
        this._element.style.paddingRight = '';                                                                        // 2056
      }                                                                                                               // 2057
    }, {                                                                                                              // 2058
      key: '_checkScrollbar',                                                                                         // 2059
      value: function _checkScrollbar() {                                                                             // 2060
        var fullWindowWidth = window.innerWidth;                                                                      // 2061
        if (!fullWindowWidth) {                                                                                       // 2062
          // workaround for missing window.innerWidth in IE8                                                          // 2063
          var documentElementRect = document.documentElement.getBoundingClientRect();                                 // 2064
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);                           // 2065
        }                                                                                                             // 2066
        this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;                                        // 2067
        this._scrollbarWidth = this._getScrollbarWidth();                                                             // 2068
      }                                                                                                               // 2069
    }, {                                                                                                              // 2070
      key: '_setScrollbar',                                                                                           // 2071
      value: function _setScrollbar() {                                                                               // 2072
        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);                          // 2073
                                                                                                                      // 2074
        this._originalBodyPadding = document.body.style.paddingRight || '';                                           // 2075
                                                                                                                      // 2076
        if (this._isBodyOverflowing) {                                                                                // 2077
          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';                               // 2078
        }                                                                                                             // 2079
      }                                                                                                               // 2080
    }, {                                                                                                              // 2081
      key: '_resetScrollbar',                                                                                         // 2082
      value: function _resetScrollbar() {                                                                             // 2083
        document.body.style.paddingRight = this._originalBodyPadding;                                                 // 2084
      }                                                                                                               // 2085
    }, {                                                                                                              // 2086
      key: '_getScrollbarWidth',                                                                                      // 2087
      value: function _getScrollbarWidth() {                                                                          // 2088
        // thx d.walsh                                                                                                // 2089
        var scrollDiv = document.createElement('div');                                                                // 2090
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;                                                           // 2091
        document.body.appendChild(scrollDiv);                                                                         // 2092
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;                                           // 2093
        document.body.removeChild(scrollDiv);                                                                         // 2094
        return scrollbarWidth;                                                                                        // 2095
      }                                                                                                               // 2096
                                                                                                                      // 2097
      // static                                                                                                       // 2098
                                                                                                                      // 2099
    }], [{                                                                                                            // 2100
      key: '_jQueryInterface',                                                                                        // 2101
      value: function _jQueryInterface(config, relatedTarget) {                                                       // 2102
        return this.each(function () {                                                                                // 2103
          var data = $(this).data(DATA_KEY);                                                                          // 2104
          var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);            // 2105
                                                                                                                      // 2106
          if (!data) {                                                                                                // 2107
            data = new Modal(this, _config);                                                                          // 2108
            $(this).data(DATA_KEY, data);                                                                             // 2109
          }                                                                                                           // 2110
                                                                                                                      // 2111
          if (typeof config === 'string') {                                                                           // 2112
            if (data[config] === undefined) {                                                                         // 2113
              throw new Error('No method named "' + config + '"');                                                    // 2114
            }                                                                                                         // 2115
            data[config](relatedTarget);                                                                              // 2116
          } else if (_config.show) {                                                                                  // 2117
            data.show(relatedTarget);                                                                                 // 2118
          }                                                                                                           // 2119
        });                                                                                                           // 2120
      }                                                                                                               // 2121
    }, {                                                                                                              // 2122
      key: 'VERSION',                                                                                                 // 2123
      get: function get() {                                                                                           // 2124
        return VERSION;                                                                                               // 2125
      }                                                                                                               // 2126
    }, {                                                                                                              // 2127
      key: 'Default',                                                                                                 // 2128
      get: function get() {                                                                                           // 2129
        return Default;                                                                                               // 2130
      }                                                                                                               // 2131
    }]);                                                                                                              // 2132
                                                                                                                      // 2133
    return Modal;                                                                                                     // 2134
  })();                                                                                                               // 2135
                                                                                                                      // 2136
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                       // 2137
    var _this13 = this;                                                                                               // 2138
                                                                                                                      // 2139
    var target = undefined;                                                                                           // 2140
    var selector = Util.getSelectorFromElement(this);                                                                 // 2141
                                                                                                                      // 2142
    if (selector) {                                                                                                   // 2143
      target = $(selector)[0];                                                                                        // 2144
    }                                                                                                                 // 2145
                                                                                                                      // 2146
    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());                // 2147
                                                                                                                      // 2148
    if (this.tagName === 'A') {                                                                                       // 2149
      event.preventDefault();                                                                                         // 2150
    }                                                                                                                 // 2151
                                                                                                                      // 2152
    var $target = $(target).one(Event.SHOW, function (showEvent) {                                                    // 2153
      if (showEvent.isDefaultPrevented()) {                                                                           // 2154
        // only register focus restorer if modal will actually get shown                                              // 2155
        return;                                                                                                       // 2156
      }                                                                                                               // 2157
                                                                                                                      // 2158
      $target.one(Event.HIDDEN, function () {                                                                         // 2159
        if ($(_this13).is(':visible')) {                                                                              // 2160
          _this13.focus();                                                                                            // 2161
        }                                                                                                             // 2162
      });                                                                                                             // 2163
    });                                                                                                               // 2164
                                                                                                                      // 2165
    Modal._jQueryInterface.call($(target), config, this);                                                             // 2166
  });                                                                                                                 // 2167
                                                                                                                      // 2168
  /**                                                                                                                 // 2169
   * ------------------------------------------------------------------------                                         // 2170
   * jQuery                                                                                                           // 2171
   * ------------------------------------------------------------------------                                         // 2172
   */                                                                                                                 // 2173
                                                                                                                      // 2174
  $.fn[NAME] = Modal._jQueryInterface;                                                                                // 2175
  $.fn[NAME].Constructor = Modal;                                                                                     // 2176
  $.fn[NAME].noConflict = function () {                                                                               // 2177
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 2178
    return Modal._jQueryInterface;                                                                                    // 2179
  };                                                                                                                  // 2180
                                                                                                                      // 2181
  return Modal;                                                                                                       // 2182
})(jQuery);                                                                                                           // 2183
                                                                                                                      // 2184
/**                                                                                                                   // 2185
 * --------------------------------------------------------------------------                                         // 2186
 * Bootstrap (v4.0.0-alpha.2): scrollspy.js                                                                           // 2187
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 2188
 * --------------------------------------------------------------------------                                         // 2189
 */                                                                                                                   // 2190
                                                                                                                      // 2191
var ScrollSpy = (function ($) {                                                                                       // 2192
                                                                                                                      // 2193
  /**                                                                                                                 // 2194
   * ------------------------------------------------------------------------                                         // 2195
   * Constants                                                                                                        // 2196
   * ------------------------------------------------------------------------                                         // 2197
   */                                                                                                                 // 2198
                                                                                                                      // 2199
  var NAME = 'scrollspy';                                                                                             // 2200
  var VERSION = '4.0.0-alpha';                                                                                        // 2201
  var DATA_KEY = 'bs.scrollspy';                                                                                      // 2202
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 2203
  var DATA_API_KEY = '.data-api';                                                                                     // 2204
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 2205
                                                                                                                      // 2206
  var Default = {                                                                                                     // 2207
    offset: 10,                                                                                                       // 2208
    method: 'auto',                                                                                                   // 2209
    target: ''                                                                                                        // 2210
  };                                                                                                                  // 2211
                                                                                                                      // 2212
  var DefaultType = {                                                                                                 // 2213
    offset: 'number',                                                                                                 // 2214
    method: 'string',                                                                                                 // 2215
    target: '(string|element)'                                                                                        // 2216
  };                                                                                                                  // 2217
                                                                                                                      // 2218
  var Event = {                                                                                                       // 2219
    ACTIVATE: 'activate' + EVENT_KEY,                                                                                 // 2220
    SCROLL: 'scroll' + EVENT_KEY,                                                                                     // 2221
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY                                                                  // 2222
  };                                                                                                                  // 2223
                                                                                                                      // 2224
  var ClassName = {                                                                                                   // 2225
    DROPDOWN_ITEM: 'dropdown-item',                                                                                   // 2226
    DROPDOWN_MENU: 'dropdown-menu',                                                                                   // 2227
    NAV_LINK: 'nav-link',                                                                                             // 2228
    NAV: 'nav',                                                                                                       // 2229
    ACTIVE: 'active'                                                                                                  // 2230
  };                                                                                                                  // 2231
                                                                                                                      // 2232
  var Selector = {                                                                                                    // 2233
    DATA_SPY: '[data-spy="scroll"]',                                                                                  // 2234
    ACTIVE: '.active',                                                                                                // 2235
    LIST_ITEM: '.list-item',                                                                                          // 2236
    LI: 'li',                                                                                                         // 2237
    LI_DROPDOWN: 'li.dropdown',                                                                                       // 2238
    NAV_LINKS: '.nav-link',                                                                                           // 2239
    DROPDOWN: '.dropdown',                                                                                            // 2240
    DROPDOWN_ITEMS: '.dropdown-item',                                                                                 // 2241
    DROPDOWN_TOGGLE: '.dropdown-toggle'                                                                               // 2242
  };                                                                                                                  // 2243
                                                                                                                      // 2244
  var OffsetMethod = {                                                                                                // 2245
    OFFSET: 'offset',                                                                                                 // 2246
    POSITION: 'position'                                                                                              // 2247
  };                                                                                                                  // 2248
                                                                                                                      // 2249
  /**                                                                                                                 // 2250
   * ------------------------------------------------------------------------                                         // 2251
   * Class Definition                                                                                                 // 2252
   * ------------------------------------------------------------------------                                         // 2253
   */                                                                                                                 // 2254
                                                                                                                      // 2255
  var ScrollSpy = (function () {                                                                                      // 2256
    function ScrollSpy(element, config) {                                                                             // 2257
      _classCallCheck(this, ScrollSpy);                                                                               // 2258
                                                                                                                      // 2259
      this._element = element;                                                                                        // 2260
      this._scrollElement = element.tagName === 'BODY' ? window : element;                                            // 2261
      this._config = this._getConfig(config);                                                                         // 2262
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];                                                                                             // 2264
      this._targets = [];                                                                                             // 2265
      this._activeTarget = null;                                                                                      // 2266
      this._scrollHeight = 0;                                                                                         // 2267
                                                                                                                      // 2268
      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this));                                          // 2269
                                                                                                                      // 2270
      this.refresh();                                                                                                 // 2271
      this._process();                                                                                                // 2272
    }                                                                                                                 // 2273
                                                                                                                      // 2274
    /**                                                                                                               // 2275
     * ------------------------------------------------------------------------                                       // 2276
     * Data Api implementation                                                                                        // 2277
     * ------------------------------------------------------------------------                                       // 2278
     */                                                                                                               // 2279
                                                                                                                      // 2280
    // getters                                                                                                        // 2281
                                                                                                                      // 2282
    _createClass(ScrollSpy, [{                                                                                        // 2283
      key: 'refresh',                                                                                                 // 2284
                                                                                                                      // 2285
      // public                                                                                                       // 2286
                                                                                                                      // 2287
      value: function refresh() {                                                                                     // 2288
        var _this14 = this;                                                                                           // 2289
                                                                                                                      // 2290
        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
                                                                                                                      // 2292
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;                         // 2293
                                                                                                                      // 2294
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;                           // 2295
                                                                                                                      // 2296
        this._offsets = [];                                                                                           // 2297
        this._targets = [];                                                                                           // 2298
                                                                                                                      // 2299
        this._scrollHeight = this._getScrollHeight();                                                                 // 2300
                                                                                                                      // 2301
        var targets = $.makeArray($(this._selector));                                                                 // 2302
                                                                                                                      // 2303
        targets.map(function (element) {                                                                              // 2304
          var target = undefined;                                                                                     // 2305
          var targetSelector = Util.getSelectorFromElement(element);                                                  // 2306
                                                                                                                      // 2307
          if (targetSelector) {                                                                                       // 2308
            target = $(targetSelector)[0];                                                                            // 2309
          }                                                                                                           // 2310
                                                                                                                      // 2311
          if (target && (target.offsetWidth || target.offsetHeight)) {                                                // 2312
            // todo (fat): remove sketch reliance on jQuery position/offset                                           // 2313
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];                                      // 2314
          }                                                                                                           // 2315
        }).filter(function (item) {                                                                                   // 2316
          return item;                                                                                                // 2317
        }).sort(function (a, b) {                                                                                     // 2318
          return a[0] - b[0];                                                                                         // 2319
        }).forEach(function (item) {                                                                                  // 2320
          _this14._offsets.push(item[0]);                                                                             // 2321
          _this14._targets.push(item[1]);                                                                             // 2322
        });                                                                                                           // 2323
      }                                                                                                               // 2324
    }, {                                                                                                              // 2325
      key: 'dispose',                                                                                                 // 2326
      value: function dispose() {                                                                                     // 2327
        $.removeData(this._element, DATA_KEY);                                                                        // 2328
        $(this._scrollElement).off(EVENT_KEY);                                                                        // 2329
                                                                                                                      // 2330
        this._element = null;                                                                                         // 2331
        this._scrollElement = null;                                                                                   // 2332
        this._config = null;                                                                                          // 2333
        this._selector = null;                                                                                        // 2334
        this._offsets = null;                                                                                         // 2335
        this._targets = null;                                                                                         // 2336
        this._activeTarget = null;                                                                                    // 2337
        this._scrollHeight = null;                                                                                    // 2338
      }                                                                                                               // 2339
                                                                                                                      // 2340
      // private                                                                                                      // 2341
                                                                                                                      // 2342
    }, {                                                                                                              // 2343
      key: '_getConfig',                                                                                              // 2344
      value: function _getConfig(config) {                                                                            // 2345
        config = $.extend({}, Default, config);                                                                       // 2346
                                                                                                                      // 2347
        if (typeof config.target !== 'string') {                                                                      // 2348
          var id = $(config.target).attr('id');                                                                       // 2349
          if (!id) {                                                                                                  // 2350
            id = Util.getUID(NAME);                                                                                   // 2351
            $(config.target).attr('id', id);                                                                          // 2352
          }                                                                                                           // 2353
          config.target = '#' + id;                                                                                   // 2354
        }                                                                                                             // 2355
                                                                                                                      // 2356
        Util.typeCheckConfig(NAME, config, DefaultType);                                                              // 2357
                                                                                                                      // 2358
        return config;                                                                                                // 2359
      }                                                                                                               // 2360
    }, {                                                                                                              // 2361
      key: '_getScrollTop',                                                                                           // 2362
      value: function _getScrollTop() {                                                                               // 2363
        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;          // 2364
      }                                                                                                               // 2365
    }, {                                                                                                              // 2366
      key: '_getScrollHeight',                                                                                        // 2367
      value: function _getScrollHeight() {                                                                            // 2368
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }                                                                                                               // 2370
    }, {                                                                                                              // 2371
      key: '_process',                                                                                                // 2372
      value: function _process() {                                                                                    // 2373
        var scrollTop = this._getScrollTop() + this._config.offset;                                                   // 2374
        var scrollHeight = this._getScrollHeight();                                                                   // 2375
        var maxScroll = this._config.offset + scrollHeight - this._scrollElement.offsetHeight;                        // 2376
                                                                                                                      // 2377
        if (this._scrollHeight !== scrollHeight) {                                                                    // 2378
          this.refresh();                                                                                             // 2379
        }                                                                                                             // 2380
                                                                                                                      // 2381
        if (scrollTop >= maxScroll) {                                                                                 // 2382
          var target = this._targets[this._targets.length - 1];                                                       // 2383
                                                                                                                      // 2384
          if (this._activeTarget !== target) {                                                                        // 2385
            this._activate(target);                                                                                   // 2386
          }                                                                                                           // 2387
        }                                                                                                             // 2388
                                                                                                                      // 2389
        if (this._activeTarget && scrollTop < this._offsets[0]) {                                                     // 2390
          this._activeTarget = null;                                                                                  // 2391
          this._clear();                                                                                              // 2392
          return;                                                                                                     // 2393
        }                                                                                                             // 2394
                                                                                                                      // 2395
        for (var i = this._offsets.length; i--;) {                                                                    // 2396
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);
                                                                                                                      // 2398
          if (isActiveTarget) {                                                                                       // 2399
            this._activate(this._targets[i]);                                                                         // 2400
          }                                                                                                           // 2401
        }                                                                                                             // 2402
      }                                                                                                               // 2403
    }, {                                                                                                              // 2404
      key: '_activate',                                                                                               // 2405
      value: function _activate(target) {                                                                             // 2406
        this._activeTarget = target;                                                                                  // 2407
                                                                                                                      // 2408
        this._clear();                                                                                                // 2409
                                                                                                                      // 2410
        var queries = this._selector.split(',');                                                                      // 2411
        queries = queries.map(function (selector) {                                                                   // 2412
          return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');               // 2413
        });                                                                                                           // 2414
                                                                                                                      // 2415
        var $link = $(queries.join(','));                                                                             // 2416
                                                                                                                      // 2417
        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {                                                                // 2418
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);                 // 2419
          $link.addClass(ClassName.ACTIVE);                                                                           // 2420
        } else {                                                                                                      // 2421
          // todo (fat) this is kinda sus…                                                                            // 2422
          // recursively add actives to tested nav-links                                                              // 2423
          $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);                             // 2424
        }                                                                                                             // 2425
                                                                                                                      // 2426
        $(this._scrollElement).trigger(Event.ACTIVATE, {                                                              // 2427
          relatedTarget: target                                                                                       // 2428
        });                                                                                                           // 2429
      }                                                                                                               // 2430
    }, {                                                                                                              // 2431
      key: '_clear',                                                                                                  // 2432
      value: function _clear() {                                                                                      // 2433
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);                                      // 2434
      }                                                                                                               // 2435
                                                                                                                      // 2436
      // static                                                                                                       // 2437
                                                                                                                      // 2438
    }], [{                                                                                                            // 2439
      key: '_jQueryInterface',                                                                                        // 2440
      value: function _jQueryInterface(config) {                                                                      // 2441
        return this.each(function () {                                                                                // 2442
          var data = $(this).data(DATA_KEY);                                                                          // 2443
          var _config = typeof config === 'object' && config || null;                                                 // 2444
                                                                                                                      // 2445
          if (!data) {                                                                                                // 2446
            data = new ScrollSpy(this, _config);                                                                      // 2447
            $(this).data(DATA_KEY, data);                                                                             // 2448
          }                                                                                                           // 2449
                                                                                                                      // 2450
          if (typeof config === 'string') {                                                                           // 2451
            if (data[config] === undefined) {                                                                         // 2452
              throw new Error('No method named "' + config + '"');                                                    // 2453
            }                                                                                                         // 2454
            data[config]();                                                                                           // 2455
          }                                                                                                           // 2456
        });                                                                                                           // 2457
      }                                                                                                               // 2458
    }, {                                                                                                              // 2459
      key: 'VERSION',                                                                                                 // 2460
      get: function get() {                                                                                           // 2461
        return VERSION;                                                                                               // 2462
      }                                                                                                               // 2463
    }, {                                                                                                              // 2464
      key: 'Default',                                                                                                 // 2465
      get: function get() {                                                                                           // 2466
        return Default;                                                                                               // 2467
      }                                                                                                               // 2468
    }]);                                                                                                              // 2469
                                                                                                                      // 2470
    return ScrollSpy;                                                                                                 // 2471
  })();                                                                                                               // 2472
                                                                                                                      // 2473
  $(window).on(Event.LOAD_DATA_API, function () {                                                                     // 2474
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));                                                               // 2475
                                                                                                                      // 2476
    for (var i = scrollSpys.length; i--;) {                                                                           // 2477
      var $spy = $(scrollSpys[i]);                                                                                    // 2478
      ScrollSpy._jQueryInterface.call($spy, $spy.data());                                                             // 2479
    }                                                                                                                 // 2480
  });                                                                                                                 // 2481
                                                                                                                      // 2482
  /**                                                                                                                 // 2483
   * ------------------------------------------------------------------------                                         // 2484
   * jQuery                                                                                                           // 2485
   * ------------------------------------------------------------------------                                         // 2486
   */                                                                                                                 // 2487
                                                                                                                      // 2488
  $.fn[NAME] = ScrollSpy._jQueryInterface;                                                                            // 2489
  $.fn[NAME].Constructor = ScrollSpy;                                                                                 // 2490
  $.fn[NAME].noConflict = function () {                                                                               // 2491
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 2492
    return ScrollSpy._jQueryInterface;                                                                                // 2493
  };                                                                                                                  // 2494
                                                                                                                      // 2495
  return ScrollSpy;                                                                                                   // 2496
})(jQuery);                                                                                                           // 2497
                                                                                                                      // 2498
/**                                                                                                                   // 2499
 * --------------------------------------------------------------------------                                         // 2500
 * Bootstrap (v4.0.0-alpha.2): tab.js                                                                                 // 2501
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 2502
 * --------------------------------------------------------------------------                                         // 2503
 */                                                                                                                   // 2504
                                                                                                                      // 2505
var Tab = (function ($) {                                                                                             // 2506
                                                                                                                      // 2507
  /**                                                                                                                 // 2508
   * ------------------------------------------------------------------------                                         // 2509
   * Constants                                                                                                        // 2510
   * ------------------------------------------------------------------------                                         // 2511
   */                                                                                                                 // 2512
                                                                                                                      // 2513
  var NAME = 'tab';                                                                                                   // 2514
  var VERSION = '4.0.0-alpha';                                                                                        // 2515
  var DATA_KEY = 'bs.tab';                                                                                            // 2516
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 2517
  var DATA_API_KEY = '.data-api';                                                                                     // 2518
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 2519
  var TRANSITION_DURATION = 150;                                                                                      // 2520
                                                                                                                      // 2521
  var Event = {                                                                                                       // 2522
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 2523
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 2524
    SHOW: 'show' + EVENT_KEY,                                                                                         // 2525
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 2526
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY                                                                // 2527
  };                                                                                                                  // 2528
                                                                                                                      // 2529
  var ClassName = {                                                                                                   // 2530
    DROPDOWN_MENU: 'dropdown-menu',                                                                                   // 2531
    ACTIVE: 'active',                                                                                                 // 2532
    FADE: 'fade',                                                                                                     // 2533
    IN: 'in'                                                                                                          // 2534
  };                                                                                                                  // 2535
                                                                                                                      // 2536
  var Selector = {                                                                                                    // 2537
    A: 'a',                                                                                                           // 2538
    LI: 'li',                                                                                                         // 2539
    DROPDOWN: '.dropdown',                                                                                            // 2540
    UL: 'ul:not(.dropdown-menu)',                                                                                     // 2541
    FADE_CHILD: '> .nav-item .fade, > .fade',                                                                         // 2542
    ACTIVE: '.active',                                                                                                // 2543
    ACTIVE_CHILD: '> .nav-item > .active, > .active',                                                                 // 2544
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',                                                         // 2545
    DROPDOWN_TOGGLE: '.dropdown-toggle',                                                                              // 2546
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'                                                                 // 2547
  };                                                                                                                  // 2548
                                                                                                                      // 2549
  /**                                                                                                                 // 2550
   * ------------------------------------------------------------------------                                         // 2551
   * Class Definition                                                                                                 // 2552
   * ------------------------------------------------------------------------                                         // 2553
   */                                                                                                                 // 2554
                                                                                                                      // 2555
  var Tab = (function () {                                                                                            // 2556
    function Tab(element) {                                                                                           // 2557
      _classCallCheck(this, Tab);                                                                                     // 2558
                                                                                                                      // 2559
      this._element = element;                                                                                        // 2560
    }                                                                                                                 // 2561
                                                                                                                      // 2562
    /**                                                                                                               // 2563
     * ------------------------------------------------------------------------                                       // 2564
     * Data Api implementation                                                                                        // 2565
     * ------------------------------------------------------------------------                                       // 2566
     */                                                                                                               // 2567
                                                                                                                      // 2568
    // getters                                                                                                        // 2569
                                                                                                                      // 2570
    _createClass(Tab, [{                                                                                              // 2571
      key: 'show',                                                                                                    // 2572
                                                                                                                      // 2573
      // public                                                                                                       // 2574
                                                                                                                      // 2575
      value: function show() {                                                                                        // 2576
        var _this15 = this;                                                                                           // 2577
                                                                                                                      // 2578
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)) {
          return;                                                                                                     // 2580
        }                                                                                                             // 2581
                                                                                                                      // 2582
        var target = undefined;                                                                                       // 2583
        var previous = undefined;                                                                                     // 2584
        var ulElement = $(this._element).closest(Selector.UL)[0];                                                     // 2585
        var selector = Util.getSelectorFromElement(this._element);                                                    // 2586
                                                                                                                      // 2587
        if (ulElement) {                                                                                              // 2588
          previous = $.makeArray($(ulElement).find(Selector.ACTIVE));                                                 // 2589
          previous = previous[previous.length - 1];                                                                   // 2590
        }                                                                                                             // 2591
                                                                                                                      // 2592
        var hideEvent = $.Event(Event.HIDE, {                                                                         // 2593
          relatedTarget: this._element                                                                                // 2594
        });                                                                                                           // 2595
                                                                                                                      // 2596
        var showEvent = $.Event(Event.SHOW, {                                                                         // 2597
          relatedTarget: previous                                                                                     // 2598
        });                                                                                                           // 2599
                                                                                                                      // 2600
        if (previous) {                                                                                               // 2601
          $(previous).trigger(hideEvent);                                                                             // 2602
        }                                                                                                             // 2603
                                                                                                                      // 2604
        $(this._element).trigger(showEvent);                                                                          // 2605
                                                                                                                      // 2606
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {                                       // 2607
          return;                                                                                                     // 2608
        }                                                                                                             // 2609
                                                                                                                      // 2610
        if (selector) {                                                                                               // 2611
          target = $(selector)[0];                                                                                    // 2612
        }                                                                                                             // 2613
                                                                                                                      // 2614
        this._activate(this._element, ulElement);                                                                     // 2615
                                                                                                                      // 2616
        var complete = function complete() {                                                                          // 2617
          var hiddenEvent = $.Event(Event.HIDDEN, {                                                                   // 2618
            relatedTarget: _this15._element                                                                           // 2619
          });                                                                                                         // 2620
                                                                                                                      // 2621
          var shownEvent = $.Event(Event.SHOWN, {                                                                     // 2622
            relatedTarget: previous                                                                                   // 2623
          });                                                                                                         // 2624
                                                                                                                      // 2625
          $(previous).trigger(hiddenEvent);                                                                           // 2626
          $(_this15._element).trigger(shownEvent);                                                                    // 2627
        };                                                                                                            // 2628
                                                                                                                      // 2629
        if (target) {                                                                                                 // 2630
          this._activate(target, target.parentNode, complete);                                                        // 2631
        } else {                                                                                                      // 2632
          complete();                                                                                                 // 2633
        }                                                                                                             // 2634
      }                                                                                                               // 2635
    }, {                                                                                                              // 2636
      key: 'dispose',                                                                                                 // 2637
      value: function dispose() {                                                                                     // 2638
        $.removeClass(this._element, DATA_KEY);                                                                       // 2639
        this._element = null;                                                                                         // 2640
      }                                                                                                               // 2641
                                                                                                                      // 2642
      // private                                                                                                      // 2643
                                                                                                                      // 2644
    }, {                                                                                                              // 2645
      key: '_activate',                                                                                               // 2646
      value: function _activate(element, container, callback) {                                                       // 2647
        var active = $(container).find(Selector.ACTIVE_CHILD)[0];                                                     // 2648
        var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));
                                                                                                                      // 2650
        var complete = $.proxy(this._transitionComplete, this, element, active, isTransitioning, callback);           // 2651
                                                                                                                      // 2652
        if (active && isTransitioning) {                                                                              // 2653
          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                     // 2654
        } else {                                                                                                      // 2655
          complete();                                                                                                 // 2656
        }                                                                                                             // 2657
                                                                                                                      // 2658
        if (active) {                                                                                                 // 2659
          $(active).removeClass(ClassName.IN);                                                                        // 2660
        }                                                                                                             // 2661
      }                                                                                                               // 2662
    }, {                                                                                                              // 2663
      key: '_transitionComplete',                                                                                     // 2664
      value: function _transitionComplete(element, active, isTransitioning, callback) {                               // 2665
        if (active) {                                                                                                 // 2666
          $(active).removeClass(ClassName.ACTIVE);                                                                    // 2667
                                                                                                                      // 2668
          var dropdownChild = $(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];                                      // 2669
                                                                                                                      // 2670
          if (dropdownChild) {                                                                                        // 2671
            $(dropdownChild).removeClass(ClassName.ACTIVE);                                                           // 2672
          }                                                                                                           // 2673
                                                                                                                      // 2674
          active.setAttribute('aria-expanded', false);                                                                // 2675
        }                                                                                                             // 2676
                                                                                                                      // 2677
        $(element).addClass(ClassName.ACTIVE);                                                                        // 2678
        element.setAttribute('aria-expanded', true);                                                                  // 2679
                                                                                                                      // 2680
        if (isTransitioning) {                                                                                        // 2681
          Util.reflow(element);                                                                                       // 2682
          $(element).addClass(ClassName.IN);                                                                          // 2683
        } else {                                                                                                      // 2684
          $(element).removeClass(ClassName.FADE);                                                                     // 2685
        }                                                                                                             // 2686
                                                                                                                      // 2687
        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {                          // 2688
                                                                                                                      // 2689
          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];                                             // 2690
          if (dropdownElement) {                                                                                      // 2691
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);                             // 2692
          }                                                                                                           // 2693
                                                                                                                      // 2694
          element.setAttribute('aria-expanded', true);                                                                // 2695
        }                                                                                                             // 2696
                                                                                                                      // 2697
        if (callback) {                                                                                               // 2698
          callback();                                                                                                 // 2699
        }                                                                                                             // 2700
      }                                                                                                               // 2701
                                                                                                                      // 2702
      // static                                                                                                       // 2703
                                                                                                                      // 2704
    }], [{                                                                                                            // 2705
      key: '_jQueryInterface',                                                                                        // 2706
      value: function _jQueryInterface(config) {                                                                      // 2707
        return this.each(function () {                                                                                // 2708
          var $this = $(this);                                                                                        // 2709
          var data = $this.data(DATA_KEY);                                                                            // 2710
                                                                                                                      // 2711
          if (!data) {                                                                                                // 2712
            data = data = new Tab(this);                                                                              // 2713
            $this.data(DATA_KEY, data);                                                                               // 2714
          }                                                                                                           // 2715
                                                                                                                      // 2716
          if (typeof config === 'string') {                                                                           // 2717
            if (data[config] === undefined) {                                                                         // 2718
              throw new Error('No method named "' + config + '"');                                                    // 2719
            }                                                                                                         // 2720
            data[config]();                                                                                           // 2721
          }                                                                                                           // 2722
        });                                                                                                           // 2723
      }                                                                                                               // 2724
    }, {                                                                                                              // 2725
      key: 'VERSION',                                                                                                 // 2726
      get: function get() {                                                                                           // 2727
        return VERSION;                                                                                               // 2728
      }                                                                                                               // 2729
    }]);                                                                                                              // 2730
                                                                                                                      // 2731
    return Tab;                                                                                                       // 2732
  })();                                                                                                               // 2733
                                                                                                                      // 2734
  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {                                       // 2735
    event.preventDefault();                                                                                           // 2736
    Tab._jQueryInterface.call($(this), 'show');                                                                       // 2737
  });                                                                                                                 // 2738
                                                                                                                      // 2739
  /**                                                                                                                 // 2740
   * ------------------------------------------------------------------------                                         // 2741
   * jQuery                                                                                                           // 2742
   * ------------------------------------------------------------------------                                         // 2743
   */                                                                                                                 // 2744
                                                                                                                      // 2745
  $.fn[NAME] = Tab._jQueryInterface;                                                                                  // 2746
  $.fn[NAME].Constructor = Tab;                                                                                       // 2747
  $.fn[NAME].noConflict = function () {                                                                               // 2748
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 2749
    return Tab._jQueryInterface;                                                                                      // 2750
  };                                                                                                                  // 2751
                                                                                                                      // 2752
  return Tab;                                                                                                         // 2753
})(jQuery);                                                                                                           // 2754
                                                                                                                      // 2755
/* global Tether */                                                                                                   // 2756
                                                                                                                      // 2757
/**                                                                                                                   // 2758
 * --------------------------------------------------------------------------                                         // 2759
 * Bootstrap (v4.0.0-alpha.2): tooltip.js                                                                             // 2760
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 2761
 * --------------------------------------------------------------------------                                         // 2762
 */                                                                                                                   // 2763
                                                                                                                      // 2764
var Tooltip = (function ($) {                                                                                         // 2765
                                                                                                                      // 2766
  /**                                                                                                                 // 2767
   * Check for Tether dependency                                                                                      // 2768
   * Tether - http://github.hubspot.com/tether/                                                                       // 2769
   */                                                                                                                 // 2770
  if (window.Tether === undefined) {                                                                                  // 2771
    throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');                         // 2772
  }                                                                                                                   // 2773
                                                                                                                      // 2774
  /**                                                                                                                 // 2775
   * ------------------------------------------------------------------------                                         // 2776
   * Constants                                                                                                        // 2777
   * ------------------------------------------------------------------------                                         // 2778
   */                                                                                                                 // 2779
                                                                                                                      // 2780
  var NAME = 'tooltip';                                                                                               // 2781
  var VERSION = '4.0.0-alpha';                                                                                        // 2782
  var DATA_KEY = 'bs.tooltip';                                                                                        // 2783
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 2784
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 2785
  var TRANSITION_DURATION = 150;                                                                                      // 2786
  var CLASS_PREFIX = 'bs-tether';                                                                                     // 2787
                                                                                                                      // 2788
  var Default = {                                                                                                     // 2789
    animation: true,                                                                                                  // 2790
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',                                                                                           // 2792
    title: '',                                                                                                        // 2793
    delay: 0,                                                                                                         // 2794
    html: false,                                                                                                      // 2795
    selector: false,                                                                                                  // 2796
    placement: 'top',                                                                                                 // 2797
    offset: '0 0',                                                                                                    // 2798
    constraints: []                                                                                                   // 2799
  };                                                                                                                  // 2800
                                                                                                                      // 2801
  var DefaultType = {                                                                                                 // 2802
    animation: 'boolean',                                                                                             // 2803
    template: 'string',                                                                                               // 2804
    title: '(string|element|function)',                                                                               // 2805
    trigger: 'string',                                                                                                // 2806
    delay: '(number|object)',                                                                                         // 2807
    html: 'boolean',                                                                                                  // 2808
    selector: '(string|boolean)',                                                                                     // 2809
    placement: '(string|function)',                                                                                   // 2810
    offset: 'string',                                                                                                 // 2811
    constraints: 'array'                                                                                              // 2812
  };                                                                                                                  // 2813
                                                                                                                      // 2814
  var AttachmentMap = {                                                                                               // 2815
    TOP: 'bottom center',                                                                                             // 2816
    RIGHT: 'middle left',                                                                                             // 2817
    BOTTOM: 'top center',                                                                                             // 2818
    LEFT: 'middle right'                                                                                              // 2819
  };                                                                                                                  // 2820
                                                                                                                      // 2821
  var HoverState = {                                                                                                  // 2822
    IN: 'in',                                                                                                         // 2823
    OUT: 'out'                                                                                                        // 2824
  };                                                                                                                  // 2825
                                                                                                                      // 2826
  var Event = {                                                                                                       // 2827
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 2828
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 2829
    SHOW: 'show' + EVENT_KEY,                                                                                         // 2830
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 2831
    INSERTED: 'inserted' + EVENT_KEY,                                                                                 // 2832
    CLICK: 'click' + EVENT_KEY,                                                                                       // 2833
    FOCUSIN: 'focusin' + EVENT_KEY,                                                                                   // 2834
    FOCUSOUT: 'focusout' + EVENT_KEY,                                                                                 // 2835
    MOUSEENTER: 'mouseenter' + EVENT_KEY,                                                                             // 2836
    MOUSELEAVE: 'mouseleave' + EVENT_KEY                                                                              // 2837
  };                                                                                                                  // 2838
                                                                                                                      // 2839
  var ClassName = {                                                                                                   // 2840
    FADE: 'fade',                                                                                                     // 2841
    IN: 'in'                                                                                                          // 2842
  };                                                                                                                  // 2843
                                                                                                                      // 2844
  var Selector = {                                                                                                    // 2845
    TOOLTIP: '.tooltip',                                                                                              // 2846
    TOOLTIP_INNER: '.tooltip-inner'                                                                                   // 2847
  };                                                                                                                  // 2848
                                                                                                                      // 2849
  var TetherClass = {                                                                                                 // 2850
    element: false,                                                                                                   // 2851
    enabled: false                                                                                                    // 2852
  };                                                                                                                  // 2853
                                                                                                                      // 2854
  var Trigger = {                                                                                                     // 2855
    HOVER: 'hover',                                                                                                   // 2856
    FOCUS: 'focus',                                                                                                   // 2857
    CLICK: 'click',                                                                                                   // 2858
    MANUAL: 'manual'                                                                                                  // 2859
  };                                                                                                                  // 2860
                                                                                                                      // 2861
  /**                                                                                                                 // 2862
   * ------------------------------------------------------------------------                                         // 2863
   * Class Definition                                                                                                 // 2864
   * ------------------------------------------------------------------------                                         // 2865
   */                                                                                                                 // 2866
                                                                                                                      // 2867
  var Tooltip = (function () {                                                                                        // 2868
    function Tooltip(element, config) {                                                                               // 2869
      _classCallCheck(this, Tooltip);                                                                                 // 2870
                                                                                                                      // 2871
      // private                                                                                                      // 2872
      this._isEnabled = true;                                                                                         // 2873
      this._timeout = 0;                                                                                              // 2874
      this._hoverState = '';                                                                                          // 2875
      this._activeTrigger = {};                                                                                       // 2876
      this._tether = null;                                                                                            // 2877
                                                                                                                      // 2878
      // protected                                                                                                    // 2879
      this.element = element;                                                                                         // 2880
      this.config = this._getConfig(config);                                                                          // 2881
      this.tip = null;                                                                                                // 2882
                                                                                                                      // 2883
      this._setListeners();                                                                                           // 2884
    }                                                                                                                 // 2885
                                                                                                                      // 2886
    /**                                                                                                               // 2887
     * ------------------------------------------------------------------------                                       // 2888
     * jQuery                                                                                                         // 2889
     * ------------------------------------------------------------------------                                       // 2890
     */                                                                                                               // 2891
                                                                                                                      // 2892
    // getters                                                                                                        // 2893
                                                                                                                      // 2894
    _createClass(Tooltip, [{                                                                                          // 2895
      key: 'enable',                                                                                                  // 2896
                                                                                                                      // 2897
      // public                                                                                                       // 2898
                                                                                                                      // 2899
      value: function enable() {                                                                                      // 2900
        this._isEnabled = true;                                                                                       // 2901
      }                                                                                                               // 2902
    }, {                                                                                                              // 2903
      key: 'disable',                                                                                                 // 2904
      value: function disable() {                                                                                     // 2905
        this._isEnabled = false;                                                                                      // 2906
      }                                                                                                               // 2907
    }, {                                                                                                              // 2908
      key: 'toggleEnabled',                                                                                           // 2909
      value: function toggleEnabled() {                                                                               // 2910
        this._isEnabled = !this._isEnabled;                                                                           // 2911
      }                                                                                                               // 2912
    }, {                                                                                                              // 2913
      key: 'toggle',                                                                                                  // 2914
      value: function toggle(event) {                                                                                 // 2915
        if (event) {                                                                                                  // 2916
          var dataKey = this.constructor.DATA_KEY;                                                                    // 2917
          var context = $(event.currentTarget).data(dataKey);                                                         // 2918
                                                                                                                      // 2919
          if (!context) {                                                                                             // 2920
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());                           // 2921
            $(event.currentTarget).data(dataKey, context);                                                            // 2922
          }                                                                                                           // 2923
                                                                                                                      // 2924
          context._activeTrigger.click = !context._activeTrigger.click;                                               // 2925
                                                                                                                      // 2926
          if (context._isWithActiveTrigger()) {                                                                       // 2927
            context._enter(null, context);                                                                            // 2928
          } else {                                                                                                    // 2929
            context._leave(null, context);                                                                            // 2930
          }                                                                                                           // 2931
        } else {                                                                                                      // 2932
                                                                                                                      // 2933
          if ($(this.getTipElement()).hasClass(ClassName.IN)) {                                                       // 2934
            this._leave(null, this);                                                                                  // 2935
            return;                                                                                                   // 2936
          }                                                                                                           // 2937
                                                                                                                      // 2938
          this._enter(null, this);                                                                                    // 2939
        }                                                                                                             // 2940
      }                                                                                                               // 2941
    }, {                                                                                                              // 2942
      key: 'dispose',                                                                                                 // 2943
      value: function dispose() {                                                                                     // 2944
        clearTimeout(this._timeout);                                                                                  // 2945
                                                                                                                      // 2946
        this.cleanupTether();                                                                                         // 2947
                                                                                                                      // 2948
        $.removeData(this.element, this.constructor.DATA_KEY);                                                        // 2949
                                                                                                                      // 2950
        $(this.element).off(this.constructor.EVENT_KEY);                                                              // 2951
                                                                                                                      // 2952
        if (this.tip) {                                                                                               // 2953
          $(this.tip).remove();                                                                                       // 2954
        }                                                                                                             // 2955
                                                                                                                      // 2956
        this._isEnabled = null;                                                                                       // 2957
        this._timeout = null;                                                                                         // 2958
        this._hoverState = null;                                                                                      // 2959
        this._activeTrigger = null;                                                                                   // 2960
        this._tether = null;                                                                                          // 2961
                                                                                                                      // 2962
        this.element = null;                                                                                          // 2963
        this.config = null;                                                                                           // 2964
        this.tip = null;                                                                                              // 2965
      }                                                                                                               // 2966
    }, {                                                                                                              // 2967
      key: 'show',                                                                                                    // 2968
      value: function show() {                                                                                        // 2969
        var _this16 = this;                                                                                           // 2970
                                                                                                                      // 2971
        var showEvent = $.Event(this.constructor.Event.SHOW);                                                         // 2972
                                                                                                                      // 2973
        if (this.isWithContent() && this._isEnabled) {                                                                // 2974
          $(this.element).trigger(showEvent);                                                                         // 2975
                                                                                                                      // 2976
          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);                      // 2977
                                                                                                                      // 2978
          if (showEvent.isDefaultPrevented() || !isInTheDom) {                                                        // 2979
            return;                                                                                                   // 2980
          }                                                                                                           // 2981
                                                                                                                      // 2982
          var tip = this.getTipElement();                                                                             // 2983
          var tipId = Util.getUID(this.constructor.NAME);                                                             // 2984
                                                                                                                      // 2985
          tip.setAttribute('id', tipId);                                                                              // 2986
          this.element.setAttribute('aria-describedby', tipId);                                                       // 2987
                                                                                                                      // 2988
          this.setContent();                                                                                          // 2989
                                                                                                                      // 2990
          if (this.config.animation) {                                                                                // 2991
            $(tip).addClass(ClassName.FADE);                                                                          // 2992
          }                                                                                                           // 2993
                                                                                                                      // 2994
          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
                                                                                                                      // 2996
          var attachment = this._getAttachment(placement);                                                            // 2997
                                                                                                                      // 2998
          $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);                                       // 2999
                                                                                                                      // 3000
          $(this.element).trigger(this.constructor.Event.INSERTED);                                                   // 3001
                                                                                                                      // 3002
          this._tether = new Tether({                                                                                 // 3003
            attachment: attachment,                                                                                   // 3004
            element: tip,                                                                                             // 3005
            target: this.element,                                                                                     // 3006
            classes: TetherClass,                                                                                     // 3007
            classPrefix: CLASS_PREFIX,                                                                                // 3008
            offset: this.config.offset,                                                                               // 3009
            constraints: this.config.constraints,                                                                     // 3010
            addTargetClasses: false                                                                                   // 3011
          });                                                                                                         // 3012
                                                                                                                      // 3013
          Util.reflow(tip);                                                                                           // 3014
          this._tether.position();                                                                                    // 3015
                                                                                                                      // 3016
          $(tip).addClass(ClassName.IN);                                                                              // 3017
                                                                                                                      // 3018
          var complete = function complete() {                                                                        // 3019
            var prevHoverState = _this16._hoverState;                                                                 // 3020
            _this16._hoverState = null;                                                                               // 3021
                                                                                                                      // 3022
            $(_this16.element).trigger(_this16.constructor.Event.SHOWN);                                              // 3023
                                                                                                                      // 3024
            if (prevHoverState === HoverState.OUT) {                                                                  // 3025
              _this16._leave(null, _this16);                                                                          // 3026
            }                                                                                                         // 3027
          };                                                                                                          // 3028
                                                                                                                      // 3029
          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {                                 // 3030
            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);        // 3031
            return;                                                                                                   // 3032
          }                                                                                                           // 3033
                                                                                                                      // 3034
          complete();                                                                                                 // 3035
        }                                                                                                             // 3036
      }                                                                                                               // 3037
    }, {                                                                                                              // 3038
      key: 'hide',                                                                                                    // 3039
      value: function hide(callback) {                                                                                // 3040
        var _this17 = this;                                                                                           // 3041
                                                                                                                      // 3042
        var tip = this.getTipElement();                                                                               // 3043
        var hideEvent = $.Event(this.constructor.Event.HIDE);                                                         // 3044
        var complete = function complete() {                                                                          // 3045
          if (_this17._hoverState !== HoverState.IN && tip.parentNode) {                                              // 3046
            tip.parentNode.removeChild(tip);                                                                          // 3047
          }                                                                                                           // 3048
                                                                                                                      // 3049
          _this17.element.removeAttribute('aria-describedby');                                                        // 3050
          $(_this17.element).trigger(_this17.constructor.Event.HIDDEN);                                               // 3051
          _this17.cleanupTether();                                                                                    // 3052
                                                                                                                      // 3053
          if (callback) {                                                                                             // 3054
            callback();                                                                                               // 3055
          }                                                                                                           // 3056
        };                                                                                                            // 3057
                                                                                                                      // 3058
        $(this.element).trigger(hideEvent);                                                                           // 3059
                                                                                                                      // 3060
        if (hideEvent.isDefaultPrevented()) {                                                                         // 3061
          return;                                                                                                     // 3062
        }                                                                                                             // 3063
                                                                                                                      // 3064
        $(tip).removeClass(ClassName.IN);                                                                             // 3065
                                                                                                                      // 3066
        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {                                   // 3067
                                                                                                                      // 3068
          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);                        // 3069
        } else {                                                                                                      // 3070
          complete();                                                                                                 // 3071
        }                                                                                                             // 3072
                                                                                                                      // 3073
        this._hoverState = '';                                                                                        // 3074
      }                                                                                                               // 3075
                                                                                                                      // 3076
      // protected                                                                                                    // 3077
                                                                                                                      // 3078
    }, {                                                                                                              // 3079
      key: 'isWithContent',                                                                                           // 3080
      value: function isWithContent() {                                                                               // 3081
        return Boolean(this.getTitle());                                                                              // 3082
      }                                                                                                               // 3083
    }, {                                                                                                              // 3084
      key: 'getTipElement',                                                                                           // 3085
      value: function getTipElement() {                                                                               // 3086
        return this.tip = this.tip || $(this.config.template)[0];                                                     // 3087
      }                                                                                                               // 3088
    }, {                                                                                                              // 3089
      key: 'setContent',                                                                                              // 3090
      value: function setContent() {                                                                                  // 3091
        var $tip = $(this.getTipElement());                                                                           // 3092
                                                                                                                      // 3093
        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());                                   // 3094
                                                                                                                      // 3095
        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);                                                   // 3096
                                                                                                                      // 3097
        this.cleanupTether();                                                                                         // 3098
      }                                                                                                               // 3099
    }, {                                                                                                              // 3100
      key: 'setElementContent',                                                                                       // 3101
      value: function setElementContent($element, content) {                                                          // 3102
        var html = this.config.html;                                                                                  // 3103
        if (typeof content === 'object' && (content.nodeType || content.jquery)) {                                    // 3104
          // content is a DOM node or a jQuery                                                                        // 3105
          if (html) {                                                                                                 // 3106
            if (!$(content).parent().is($element)) {                                                                  // 3107
              $element.empty().append(content);                                                                       // 3108
            }                                                                                                         // 3109
          } else {                                                                                                    // 3110
            $element.text($(content).text());                                                                         // 3111
          }                                                                                                           // 3112
        } else {                                                                                                      // 3113
          $element[html ? 'html' : 'text'](content);                                                                  // 3114
        }                                                                                                             // 3115
      }                                                                                                               // 3116
    }, {                                                                                                              // 3117
      key: 'getTitle',                                                                                                // 3118
      value: function getTitle() {                                                                                    // 3119
        var title = this.element.getAttribute('data-original-title');                                                 // 3120
                                                                                                                      // 3121
        if (!title) {                                                                                                 // 3122
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }                                                                                                             // 3124
                                                                                                                      // 3125
        return title;                                                                                                 // 3126
      }                                                                                                               // 3127
    }, {                                                                                                              // 3128
      key: 'cleanupTether',                                                                                           // 3129
      value: function cleanupTether() {                                                                               // 3130
        if (this._tether) {                                                                                           // 3131
          this._tether.destroy();                                                                                     // 3132
        }                                                                                                             // 3133
      }                                                                                                               // 3134
                                                                                                                      // 3135
      // private                                                                                                      // 3136
                                                                                                                      // 3137
    }, {                                                                                                              // 3138
      key: '_getAttachment',                                                                                          // 3139
      value: function _getAttachment(placement) {                                                                     // 3140
        return AttachmentMap[placement.toUpperCase()];                                                                // 3141
      }                                                                                                               // 3142
    }, {                                                                                                              // 3143
      key: '_setListeners',                                                                                           // 3144
      value: function _setListeners() {                                                                               // 3145
        var _this18 = this;                                                                                           // 3146
                                                                                                                      // 3147
        var triggers = this.config.trigger.split(' ');                                                                // 3148
                                                                                                                      // 3149
        triggers.forEach(function (trigger) {                                                                         // 3150
          if (trigger === 'click') {                                                                                  // 3151
            $(_this18.element).on(_this18.constructor.Event.CLICK, _this18.config.selector, $.proxy(_this18.toggle, _this18));
          } else if (trigger !== Trigger.MANUAL) {                                                                    // 3153
            var eventIn = trigger === Trigger.HOVER ? _this18.constructor.Event.MOUSEENTER : _this18.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this18.constructor.Event.MOUSELEAVE : _this18.constructor.Event.FOCUSOUT;
                                                                                                                      // 3156
            $(_this18.element).on(eventIn, _this18.config.selector, $.proxy(_this18._enter, _this18)).on(eventOut, _this18.config.selector, $.proxy(_this18._leave, _this18));
          }                                                                                                           // 3158
        });                                                                                                           // 3159
                                                                                                                      // 3160
        if (this.config.selector) {                                                                                   // 3161
          this.config = $.extend({}, this.config, {                                                                   // 3162
            trigger: 'manual',                                                                                        // 3163
            selector: ''                                                                                              // 3164
          });                                                                                                         // 3165
        } else {                                                                                                      // 3166
          this._fixTitle();                                                                                           // 3167
        }                                                                                                             // 3168
      }                                                                                                               // 3169
    }, {                                                                                                              // 3170
      key: '_fixTitle',                                                                                               // 3171
      value: function _fixTitle() {                                                                                   // 3172
        var titleType = typeof this.element.getAttribute('data-original-title');                                      // 3173
        if (this.element.getAttribute('title') || titleType !== 'string') {                                           // 3174
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');                 // 3175
          this.element.setAttribute('title', '');                                                                     // 3176
        }                                                                                                             // 3177
      }                                                                                                               // 3178
    }, {                                                                                                              // 3179
      key: '_enter',                                                                                                  // 3180
      value: function _enter(event, context) {                                                                        // 3181
        var dataKey = this.constructor.DATA_KEY;                                                                      // 3182
                                                                                                                      // 3183
        context = context || $(event.currentTarget).data(dataKey);                                                    // 3184
                                                                                                                      // 3185
        if (!context) {                                                                                               // 3186
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());                             // 3187
          $(event.currentTarget).data(dataKey, context);                                                              // 3188
        }                                                                                                             // 3189
                                                                                                                      // 3190
        if (event) {                                                                                                  // 3191
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;                    // 3192
        }                                                                                                             // 3193
                                                                                                                      // 3194
        if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {             // 3195
          context._hoverState = HoverState.IN;                                                                        // 3196
          return;                                                                                                     // 3197
        }                                                                                                             // 3198
                                                                                                                      // 3199
        clearTimeout(context._timeout);                                                                               // 3200
                                                                                                                      // 3201
        context._hoverState = HoverState.IN;                                                                          // 3202
                                                                                                                      // 3203
        if (!context.config.delay || !context.config.delay.show) {                                                    // 3204
          context.show();                                                                                             // 3205
          return;                                                                                                     // 3206
        }                                                                                                             // 3207
                                                                                                                      // 3208
        context._timeout = setTimeout(function () {                                                                   // 3209
          if (context._hoverState === HoverState.IN) {                                                                // 3210
            context.show();                                                                                           // 3211
          }                                                                                                           // 3212
        }, context.config.delay.show);                                                                                // 3213
      }                                                                                                               // 3214
    }, {                                                                                                              // 3215
      key: '_leave',                                                                                                  // 3216
      value: function _leave(event, context) {                                                                        // 3217
        var dataKey = this.constructor.DATA_KEY;                                                                      // 3218
                                                                                                                      // 3219
        context = context || $(event.currentTarget).data(dataKey);                                                    // 3220
                                                                                                                      // 3221
        if (!context) {                                                                                               // 3222
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());                             // 3223
          $(event.currentTarget).data(dataKey, context);                                                              // 3224
        }                                                                                                             // 3225
                                                                                                                      // 3226
        if (event) {                                                                                                  // 3227
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;                  // 3228
        }                                                                                                             // 3229
                                                                                                                      // 3230
        if (context._isWithActiveTrigger()) {                                                                         // 3231
          return;                                                                                                     // 3232
        }                                                                                                             // 3233
                                                                                                                      // 3234
        clearTimeout(context._timeout);                                                                               // 3235
                                                                                                                      // 3236
        context._hoverState = HoverState.OUT;                                                                         // 3237
                                                                                                                      // 3238
        if (!context.config.delay || !context.config.delay.hide) {                                                    // 3239
          context.hide();                                                                                             // 3240
          return;                                                                                                     // 3241
        }                                                                                                             // 3242
                                                                                                                      // 3243
        context._timeout = setTimeout(function () {                                                                   // 3244
          if (context._hoverState === HoverState.OUT) {                                                               // 3245
            context.hide();                                                                                           // 3246
          }                                                                                                           // 3247
        }, context.config.delay.hide);                                                                                // 3248
      }                                                                                                               // 3249
    }, {                                                                                                              // 3250
      key: '_isWithActiveTrigger',                                                                                    // 3251
      value: function _isWithActiveTrigger() {                                                                        // 3252
        for (var trigger in this._activeTrigger) {                                                                    // 3253
          if (this._activeTrigger[trigger]) {                                                                         // 3254
            return true;                                                                                              // 3255
          }                                                                                                           // 3256
        }                                                                                                             // 3257
                                                                                                                      // 3258
        return false;                                                                                                 // 3259
      }                                                                                                               // 3260
    }, {                                                                                                              // 3261
      key: '_getConfig',                                                                                              // 3262
      value: function _getConfig(config) {                                                                            // 3263
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);                              // 3264
                                                                                                                      // 3265
        if (config.delay && typeof config.delay === 'number') {                                                       // 3266
          config.delay = {                                                                                            // 3267
            show: config.delay,                                                                                       // 3268
            hide: config.delay                                                                                        // 3269
          };                                                                                                          // 3270
        }                                                                                                             // 3271
                                                                                                                      // 3272
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);                                             // 3273
                                                                                                                      // 3274
        return config;                                                                                                // 3275
      }                                                                                                               // 3276
    }, {                                                                                                              // 3277
      key: '_getDelegateConfig',                                                                                      // 3278
      value: function _getDelegateConfig() {                                                                          // 3279
        var config = {};                                                                                              // 3280
                                                                                                                      // 3281
        if (this.config) {                                                                                            // 3282
          for (var key in this.config) {                                                                              // 3283
            if (this.constructor.Default[key] !== this.config[key]) {                                                 // 3284
              config[key] = this.config[key];                                                                         // 3285
            }                                                                                                         // 3286
          }                                                                                                           // 3287
        }                                                                                                             // 3288
                                                                                                                      // 3289
        return config;                                                                                                // 3290
      }                                                                                                               // 3291
                                                                                                                      // 3292
      // static                                                                                                       // 3293
                                                                                                                      // 3294
    }], [{                                                                                                            // 3295
      key: '_jQueryInterface',                                                                                        // 3296
      value: function _jQueryInterface(config) {                                                                      // 3297
        return this.each(function () {                                                                                // 3298
          var data = $(this).data(DATA_KEY);                                                                          // 3299
          var _config = typeof config === 'object' ? config : null;                                                   // 3300
                                                                                                                      // 3301
          if (!data && /destroy|hide/.test(config)) {                                                                 // 3302
            return;                                                                                                   // 3303
          }                                                                                                           // 3304
                                                                                                                      // 3305
          if (!data) {                                                                                                // 3306
            data = new Tooltip(this, _config);                                                                        // 3307
            $(this).data(DATA_KEY, data);                                                                             // 3308
          }                                                                                                           // 3309
                                                                                                                      // 3310
          if (typeof config === 'string') {                                                                           // 3311
            if (data[config] === undefined) {                                                                         // 3312
              throw new Error('No method named "' + config + '"');                                                    // 3313
            }                                                                                                         // 3314
            data[config]();                                                                                           // 3315
          }                                                                                                           // 3316
        });                                                                                                           // 3317
      }                                                                                                               // 3318
    }, {                                                                                                              // 3319
      key: 'VERSION',                                                                                                 // 3320
      get: function get() {                                                                                           // 3321
        return VERSION;                                                                                               // 3322
      }                                                                                                               // 3323
    }, {                                                                                                              // 3324
      key: 'Default',                                                                                                 // 3325
      get: function get() {                                                                                           // 3326
        return Default;                                                                                               // 3327
      }                                                                                                               // 3328
    }, {                                                                                                              // 3329
      key: 'NAME',                                                                                                    // 3330
      get: function get() {                                                                                           // 3331
        return NAME;                                                                                                  // 3332
      }                                                                                                               // 3333
    }, {                                                                                                              // 3334
      key: 'DATA_KEY',                                                                                                // 3335
      get: function get() {                                                                                           // 3336
        return DATA_KEY;                                                                                              // 3337
      }                                                                                                               // 3338
    }, {                                                                                                              // 3339
      key: 'Event',                                                                                                   // 3340
      get: function get() {                                                                                           // 3341
        return Event;                                                                                                 // 3342
      }                                                                                                               // 3343
    }, {                                                                                                              // 3344
      key: 'EVENT_KEY',                                                                                               // 3345
      get: function get() {                                                                                           // 3346
        return EVENT_KEY;                                                                                             // 3347
      }                                                                                                               // 3348
    }, {                                                                                                              // 3349
      key: 'DefaultType',                                                                                             // 3350
      get: function get() {                                                                                           // 3351
        return DefaultType;                                                                                           // 3352
      }                                                                                                               // 3353
    }]);                                                                                                              // 3354
                                                                                                                      // 3355
    return Tooltip;                                                                                                   // 3356
  })();                                                                                                               // 3357
                                                                                                                      // 3358
  $.fn[NAME] = Tooltip._jQueryInterface;                                                                              // 3359
  $.fn[NAME].Constructor = Tooltip;                                                                                   // 3360
  $.fn[NAME].noConflict = function () {                                                                               // 3361
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 3362
    return Tooltip._jQueryInterface;                                                                                  // 3363
  };                                                                                                                  // 3364
                                                                                                                      // 3365
  return Tooltip;                                                                                                     // 3366
})(jQuery);                                                                                                           // 3367
                                                                                                                      // 3368
/**                                                                                                                   // 3369
 * --------------------------------------------------------------------------                                         // 3370
 * Bootstrap (v4.0.0-alpha.2): popover.js                                                                             // 3371
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 3372
 * --------------------------------------------------------------------------                                         // 3373
 */                                                                                                                   // 3374
                                                                                                                      // 3375
var Popover = (function ($) {                                                                                         // 3376
                                                                                                                      // 3377
  /**                                                                                                                 // 3378
   * ------------------------------------------------------------------------                                         // 3379
   * Constants                                                                                                        // 3380
   * ------------------------------------------------------------------------                                         // 3381
   */                                                                                                                 // 3382
                                                                                                                      // 3383
  var NAME = 'popover';                                                                                               // 3384
  var VERSION = '4.0.0-alpha';                                                                                        // 3385
  var DATA_KEY = 'bs.popover';                                                                                        // 3386
  var EVENT_KEY = '.' + DATA_KEY;                                                                                     // 3387
  var JQUERY_NO_CONFLICT = $.fn[NAME];                                                                                // 3388
                                                                                                                      // 3389
  var Default = $.extend({}, Tooltip.Default, {                                                                       // 3390
    placement: 'right',                                                                                               // 3391
    trigger: 'click',                                                                                                 // 3392
    content: '',                                                                                                      // 3393
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
  });                                                                                                                 // 3395
                                                                                                                      // 3396
  var DefaultType = $.extend({}, Tooltip.DefaultType, {                                                               // 3397
    content: '(string|element|function)'                                                                              // 3398
  });                                                                                                                 // 3399
                                                                                                                      // 3400
  var ClassName = {                                                                                                   // 3401
    FADE: 'fade',                                                                                                     // 3402
    IN: 'in'                                                                                                          // 3403
  };                                                                                                                  // 3404
                                                                                                                      // 3405
  var Selector = {                                                                                                    // 3406
    TITLE: '.popover-title',                                                                                          // 3407
    CONTENT: '.popover-content',                                                                                      // 3408
    ARROW: '.popover-arrow'                                                                                           // 3409
  };                                                                                                                  // 3410
                                                                                                                      // 3411
  var Event = {                                                                                                       // 3412
    HIDE: 'hide' + EVENT_KEY,                                                                                         // 3413
    HIDDEN: 'hidden' + EVENT_KEY,                                                                                     // 3414
    SHOW: 'show' + EVENT_KEY,                                                                                         // 3415
    SHOWN: 'shown' + EVENT_KEY,                                                                                       // 3416
    INSERTED: 'inserted' + EVENT_KEY,                                                                                 // 3417
    CLICK: 'click' + EVENT_KEY,                                                                                       // 3418
    FOCUSIN: 'focusin' + EVENT_KEY,                                                                                   // 3419
    FOCUSOUT: 'focusout' + EVENT_KEY,                                                                                 // 3420
    MOUSEENTER: 'mouseenter' + EVENT_KEY,                                                                             // 3421
    MOUSELEAVE: 'mouseleave' + EVENT_KEY                                                                              // 3422
  };                                                                                                                  // 3423
                                                                                                                      // 3424
  /**                                                                                                                 // 3425
   * ------------------------------------------------------------------------                                         // 3426
   * Class Definition                                                                                                 // 3427
   * ------------------------------------------------------------------------                                         // 3428
   */                                                                                                                 // 3429
                                                                                                                      // 3430
  var Popover = (function (_Tooltip) {                                                                                // 3431
    _inherits(Popover, _Tooltip);                                                                                     // 3432
                                                                                                                      // 3433
    function Popover() {                                                                                              // 3434
      _classCallCheck(this, Popover);                                                                                 // 3435
                                                                                                                      // 3436
      _get(Object.getPrototypeOf(Popover.prototype), 'constructor', this).apply(this, arguments);                     // 3437
    }                                                                                                                 // 3438
                                                                                                                      // 3439
    /**                                                                                                               // 3440
     * ------------------------------------------------------------------------                                       // 3441
     * jQuery                                                                                                         // 3442
     * ------------------------------------------------------------------------                                       // 3443
     */                                                                                                               // 3444
                                                                                                                      // 3445
    _createClass(Popover, [{                                                                                          // 3446
      key: 'isWithContent',                                                                                           // 3447
                                                                                                                      // 3448
      // overrides                                                                                                    // 3449
                                                                                                                      // 3450
      value: function isWithContent() {                                                                               // 3451
        return this.getTitle() || this._getContent();                                                                 // 3452
      }                                                                                                               // 3453
    }, {                                                                                                              // 3454
      key: 'getTipElement',                                                                                           // 3455
      value: function getTipElement() {                                                                               // 3456
        return this.tip = this.tip || $(this.config.template)[0];                                                     // 3457
      }                                                                                                               // 3458
    }, {                                                                                                              // 3459
      key: 'setContent',                                                                                              // 3460
      value: function setContent() {                                                                                  // 3461
        var $tip = $(this.getTipElement());                                                                           // 3462
                                                                                                                      // 3463
        // we use append for html objects to maintain js events                                                       // 3464
        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());                                           // 3465
        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());                                      // 3466
                                                                                                                      // 3467
        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);                                                   // 3468
                                                                                                                      // 3469
        this.cleanupTether();                                                                                         // 3470
      }                                                                                                               // 3471
                                                                                                                      // 3472
      // private                                                                                                      // 3473
                                                                                                                      // 3474
    }, {                                                                                                              // 3475
      key: '_getContent',                                                                                             // 3476
      value: function _getContent() {                                                                                 // 3477
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      }                                                                                                               // 3479
                                                                                                                      // 3480
      // static                                                                                                       // 3481
                                                                                                                      // 3482
    }], [{                                                                                                            // 3483
      key: '_jQueryInterface',                                                                                        // 3484
      value: function _jQueryInterface(config) {                                                                      // 3485
        return this.each(function () {                                                                                // 3486
          var data = $(this).data(DATA_KEY);                                                                          // 3487
          var _config = typeof config === 'object' ? config : null;                                                   // 3488
                                                                                                                      // 3489
          if (!data && /destroy|hide/.test(config)) {                                                                 // 3490
            return;                                                                                                   // 3491
          }                                                                                                           // 3492
                                                                                                                      // 3493
          if (!data) {                                                                                                // 3494
            data = new Popover(this, _config);                                                                        // 3495
            $(this).data(DATA_KEY, data);                                                                             // 3496
          }                                                                                                           // 3497
                                                                                                                      // 3498
          if (typeof config === 'string') {                                                                           // 3499
            if (data[config] === undefined) {                                                                         // 3500
              throw new Error('No method named "' + config + '"');                                                    // 3501
            }                                                                                                         // 3502
            data[config]();                                                                                           // 3503
          }                                                                                                           // 3504
        });                                                                                                           // 3505
      }                                                                                                               // 3506
    }, {                                                                                                              // 3507
      key: 'VERSION',                                                                                                 // 3508
                                                                                                                      // 3509
      // getters                                                                                                      // 3510
                                                                                                                      // 3511
      get: function get() {                                                                                           // 3512
        return VERSION;                                                                                               // 3513
      }                                                                                                               // 3514
    }, {                                                                                                              // 3515
      key: 'Default',                                                                                                 // 3516
      get: function get() {                                                                                           // 3517
        return Default;                                                                                               // 3518
      }                                                                                                               // 3519
    }, {                                                                                                              // 3520
      key: 'NAME',                                                                                                    // 3521
      get: function get() {                                                                                           // 3522
        return NAME;                                                                                                  // 3523
      }                                                                                                               // 3524
    }, {                                                                                                              // 3525
      key: 'DATA_KEY',                                                                                                // 3526
      get: function get() {                                                                                           // 3527
        return DATA_KEY;                                                                                              // 3528
      }                                                                                                               // 3529
    }, {                                                                                                              // 3530
      key: 'Event',                                                                                                   // 3531
      get: function get() {                                                                                           // 3532
        return Event;                                                                                                 // 3533
      }                                                                                                               // 3534
    }, {                                                                                                              // 3535
      key: 'EVENT_KEY',                                                                                               // 3536
      get: function get() {                                                                                           // 3537
        return EVENT_KEY;                                                                                             // 3538
      }                                                                                                               // 3539
    }, {                                                                                                              // 3540
      key: 'DefaultType',                                                                                             // 3541
      get: function get() {                                                                                           // 3542
        return DefaultType;                                                                                           // 3543
      }                                                                                                               // 3544
    }]);                                                                                                              // 3545
                                                                                                                      // 3546
    return Popover;                                                                                                   // 3547
  })(Tooltip);                                                                                                        // 3548
                                                                                                                      // 3549
  $.fn[NAME] = Popover._jQueryInterface;                                                                              // 3550
  $.fn[NAME].Constructor = Popover;                                                                                   // 3551
  $.fn[NAME].noConflict = function () {                                                                               // 3552
    $.fn[NAME] = JQUERY_NO_CONFLICT;                                                                                  // 3553
    return Popover._jQueryInterface;                                                                                  // 3554
  };                                                                                                                  // 3555
                                                                                                                      // 3556
  return Popover;                                                                                                     // 3557
})(jQuery);                                                                                                           // 3558
                                                                                                                      // 3559
}(jQuery);                                                                                                            // 3560
                                                                                                                      // 3561
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['twbs:bootstrap'] = {};

})();
