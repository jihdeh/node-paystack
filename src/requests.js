import axios from "axios";
import shortid from "shortid";
// const PAYSTACK_BASE = "https://api.paystack.co/";
axios.defaults.baseURL = "https://api.paystack.co/";
axios.defaults.headers.post["Content-Type"] = "application/json";


export default async function makeRequests(secret, objectPackage, state) {
  try {
    if (state === "initialize") {
      const response = await axios({
        method: "post",
        url: `/transaction/initialize`,
        headers: {
          "Authorization": secret
        },
        data: {
          "reference": shortid.generate(),
          "amount": objectPackage.amount,
          "email": objectPackage.email
        }
      });
      return response;
    } else if (state === "verify") {
        const response = await axios({
        method: "get",
        url: `transaction/verify/${objectPackage.reference}`,
        headers: {
          "Authorization": secret
        }
      });
      return response;
    }
  } catch (error) {
    // throw error;
    console.log(error, "eriririr");
  }
}
