import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";


let baseUrl = apiBaseUrl();
export let homeProductApi = async () => {
  try {
    let res = await axios.get(`${baseUrl}products/view`);
    return res.data;
  } catch (error) {
    console.error("homeProductApi Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: error.response?.data?._data || []
    };
  }
}



export let homeProductBySlug = async (slug) => {
  try {
    let res = await axios.get(`${baseUrl}products/${slug}`);
    return res.data;
  } catch (error) {
    console.error("homeProductBySlug Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: error.response?.data?._data || {}
    };
  }
}



