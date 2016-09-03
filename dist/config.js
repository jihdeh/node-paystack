"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requests = require("./requests");

var _requests2 = _interopRequireDefault(_requests);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var storeSecret = void 0;
function Paystack(key) {
  storeSecret = key;
  return this;
}

Paystack.prototype.transaction = function (first_argument) {
  return {
    initialize: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(initArgs) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _requests2.default)(storeSecret, initArgs, "initialize");

              case 2:
                response = _context.sent;

                this.init = response.data;
                return _context.abrupt("return", this);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initialize(_x) {
        return _ref.apply(this, arguments);
      }

      return initialize;
    }(),

    verify: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(reference) {
        var response, _response;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.init) {
                  _context2.next = 8;
                  break;
                }

                console.log("here");
                _context2.next = 4;
                return (0, _requests2.default)(storeSecret, (0, _lodash.get)(this.init, "data.data.reference"), "verify");

              case 4:
                response = _context2.sent;

                this.verfied = response;
                _context2.next = 13;
                break;

              case 8:
                console.log("here");
                _context2.next = 11;
                return (0, _requests2.default)(storeSecret, reference, "verify");

              case 11:
                _response = _context2.sent;

                this.verfied = _response;

              case 13:
                return _context2.abrupt("return", this);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verify(_x2) {
        return _ref2.apply(this, arguments);
      }

      return verify;
    }()
  };
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


exports.default = Paystack;