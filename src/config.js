import request from "./requests";
import {get} from "lodash";
let storeSecret;

function Paystack(key) {
  storeSecret = key;
  return this;
}

Paystack.prototype.transaction = {
  initialize: async(initArgs) => {
    const response = await request(storeSecret, initArgs);
    this.init = response.data;
    return this;
  },

  verify: function(reference) {
    if (this.init) {
      const waitResponse = (async function() {
        const response = await request(storeSecret, get(this.init, "data.data.reference"), "verify");
        return response;
      })();
      this.verfied = waitResponse;
    } else {
      const response = request(storeSecret, reference, "verify");
      this.verfied = response;
    }
    return this;
  }
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


export default Paystack;
