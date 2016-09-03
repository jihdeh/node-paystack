import request from "./requests";
let storeSecret;
function Paystack(key) {
  storeSecret = key;
  return this;
  
}

Paystack.prototype.transaction = function(first_argument) {
  return {
    initialize: async function(initArgs) {
      console.log(initArgs, "£££££££");
      const response = await request(storeSecret, initArgs);
      this.init = true;
      return this;
    },
    
    verify: function() {
      this.verfied = "no";
      return this;
    } 
  }
};

// let callPaystack = new Paystack();
// callPaystack.transaction().initalize().verify("cccc");


export default Paystack;
