"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requests = require("./requests");

var _requests2 = _interopRequireDefault(_requests);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeSecret = void 0;
function Paystack(key) {
  storeSecret = key;
  return this;
}

Paystack.prototype.transaction = function (first_argument) {
  return {
    initialize: function initialize(initArgs) {
      var response = (0, _requests2.default)(storeSecret, initArgs, "initialize");
      this.init = response.data;
      return this;
    },

    verify: function verify(reference) {
      if (this.init) {
        var response = (0, _requests2.default)(storeSecret, (0, _lodash.get)(this.init, "data.data.reference"), "verify");
        this.verfied = response;
      } else {
        console.log("here");
        var _response = (0, _requests2.default)(storeSecret, reference, "verify");
        this.verfied = _response;
      }
      return this;
    }
  };
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


exports.default = Paystack;