import Paystack from "../";

const callPaystack = new Paystack("Bearer sk_test_008b0a2fa73be91009ed49733e5e61d0c9d95b86");
describe("Initialize paystack transaction", () => {
  it("should make request to Initialize transaction", async (done) => {
    const initializeData = {
      amount: 500,
      email: "jide.b.tade@gmail.com"
    }
    const response = callPaystack.transaction().initialize(initializeData);
    done();
  });

  it("should make request to verify transaction", async (done) => {
    const initializeData = {
      amount: 500,
      email: "jide.b.tade@gmail.com"
    }
    const response = callPaystack.transaction().initialize(initializeData).verify();
    done();
  });
})
