"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

// const PAYSTACK_BASE = "https://api.paystack.co/";
_axios2.default.defaults.baseURL = "https://api.paystack.co/";
_axios2.default.defaults.headers.post["Content-Type"] = "application/json";

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(secret, objectPackage) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios2.default)({
              method: "post",
              url: "transaction/initialize",
              headers: {
                "Authorization": secret
              },
              data: {
                "reference": _shortid2.default.generate(),
                "amount": objectPackage.amount,
                "email": objectPackage.email
              }
            });

          case 3:
            response = _context.sent;

            console.log(response, "-------");
            return _context.abrupt("return", response);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            // throw error;
            console.log(_context.t0, "eriririr");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  function makeRequests(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return makeRequests;
}();