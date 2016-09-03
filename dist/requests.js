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
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(secret, objectPackage, state) {
    var response, _response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (state === "initialize") {}
            _context.prev = 1;

            if (!(state === "initialize")) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return (0, _axios2.default)({
              method: "post",
              url: "/transaction/initialize",
              headers: {
                "Authorization": secret
              },
              data: {
                "reference": _shortid2.default.generate(),
                "amount": objectPackage.amount,
                "email": objectPackage.email
              }
            });

          case 5:
            response = _context.sent;

            console.log(response, "-------");
            return _context.abrupt("return", response);

          case 10:
            if (!(state === "verify")) {
              _context.next = 16;
              break;
            }

            _context.next = 13;
            return (0, _axios2.default)({
              method: "get",
              url: "transaction/verify/" + objectPackage.reference,
              headers: {
                "Authorization": secret
              }
            });

          case 13:
            _response = _context.sent;

            console.log(_response, "---verify----");
            return _context.abrupt("return", _response);

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);

            // throw error;
            console.log(_context.t0, "eriririr");

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 18]]);
  }));

  function makeRequests(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return makeRequests;
}();