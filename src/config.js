import request from "./requests";
import {get} from "lodash";
let storeSecret;
function Paystack(key) {
  storeSecret = key;
  return this;
  
}

Paystack.prototype.transaction = function(first_argument) {
  return {
    initialize: async function(initArgs) {
      const response = await request(storeSecret, initArgs, "initialize");
      this.init = response.data;
      return this;
    },
    
    verify: async function(reference) {
      if(this.init) {
        console.log("here")
        const response = await request(storeSecret, get(this.init, "data.data.reference"), "verify");
        this.verfied = response;
      } else {
        console.log("here")
        const response = await request(storeSecret, reference, "verify");
        this.verfied = response;
      }
      return this;
    } 
  }
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


export default Paystack;
