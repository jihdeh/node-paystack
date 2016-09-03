import request from "./requests";
let storeSecret;
function Paystack(key) {
  storeSecret = key;
  return this;
  
}

Paystack.prototype.transaction = function(first_argument) {
  return {
    initialize: async function(initArgs) {
      const response = await request(storeSecret, initArgs);
      console.log(response);
      this.init = true;
      return this;
    },
    
    verify: function() {
      console.log(storeSecret);
      this.verfied = "no";
      return this;
    } 
  }
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


export default Paystack;
