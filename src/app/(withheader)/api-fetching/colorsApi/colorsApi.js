import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";

let baseUrl = apiBaseUrl();

export let getColor = async () => {
  try {
    let res = await axios.get(`${baseUrl}products/color/view`);
    return res.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
