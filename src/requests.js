import axios from "axios";
import shortid from "shortid";
// const PAYSTACK_BASE = "https://api.paystack.co/";
axios.defaults.baseURL = "https://api.paystack.co/";
axios.defaults.headers.post["Content-Type"] = "application/json";


export default async function makeRequests(objectPackage) {
  try {
    const response = await axios.post(`${objectPackage.nodeUrl}`, {
      headers: {
        "Authorization": objectPackage.secret
      },
      data: {
        "reference": shortid.generate(),
        "amount": objectPackage.amount,
        "email": objectPackage.email
      }
    });
    return response;
  } catch (error) {
    // throw error;
    console.log(error);
  }
}
