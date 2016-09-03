import request from "./requests";
import {get} from "lodash";
let storeSecret;
function Paystack(key) {
  storeSecret = key;
  return this;
  
}

Paystack.prototype.transaction = function(first_argument) {
  return {
    initialize: function(initArgs) {
      const response = request(storeSecret, initArgs, "initialize");
      this.init = response.data;
      return this;
    },
    
    verify: function(reference) {
      if(this.init) {
        const response = request(storeSecret, get(this.init, "data.data.reference"), "verify");
        this.verfied = response;
      } else {
        console.log("here")
        const response = request(storeSecret, reference, "verify");
        this.verfied = response;
      }
      return this;
    } 
  }
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


export default Paystack;
