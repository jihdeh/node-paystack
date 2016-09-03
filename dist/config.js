"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requests = require("./requests");

var _requests2 = _interopRequireDefault(_requests);

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
                return (0, _requests2.default)(storeSecret, initArgs);

              case 2:
                response = _context.sent;

                console.log(response);
                this.init = true;
                return _context.abrupt("return", this);

              case 6:
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

    verify: function verify() {
      console.log(storeSecret);
      this.verfied = "no";
      return this;
    }
  };
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


exports.default = Paystack;