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
    var requestPayload, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestPayload = {
              headers: {
                "Authorization": secret
              }
            };

            if (state === "initialize") {
              requestPayload = Object.assign(requestPayload, {
                method: "post",
                url: "trasaction/initialize",
                data: {
                  "reference": _shortid2.default.generate(),
                  "amount": objectPackage.amount,
                  "email": objectPackage.email
                }
              });
            } else if (state === "verify") {
              requestPayload = Object.assign(requestPayload, {
                method: "get",
                url: "trasaction/verify/" + objectPackage.reference
              });
            }
            _context.prev = 2;

            console.log(requestPayload);
            _context.next = 6;
            return (0, _axios2.default)(requestPayload);

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);

            // throw error;
            console.log(_context.t0, "eriririr");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 10]]);
  }));

  function makeRequests(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  }

  return makeRequests;
}();