import axios from "axios";
import shortid from "shortid";
// const PAYSTACK_BASE = "https://api.paystack.co/";
axios.defaults.baseURL = "https://api.paystack.co/";
axios.defaults.headers.post["Content-Type"] = "application/json";


export default async function makeRequests(secret, objectPackage, state) {
  let requestPayload = {
    headers: {
      "Authorization": secret
    }
  }
  if (state === "initialize") {
    requestPayload = Object.assign(requestPayload, {
      method: "post",
      url: "trasaction/initialize",
      data: {
        "reference": shortid.generate(),
        "amount": objectPackage.amount,
        "email": objectPackage.email
      }
    })
  } else if (state === "verify") {
    requestPayload = Object.assign(requestPayload, {
      method: "get",
      url: `trasaction/verify/${objectPackage.reference}`
    })
  }
  try {
    console.log(requestPayload)
    const response = await axios(requestPayload);
    return response;
  } catch (error) {
    // throw error;
    console.log(error, "eriririr");
  }
}
