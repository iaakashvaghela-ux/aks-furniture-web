import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";

export let categoryApi = async () => {
  let baseUrl = apiBaseUrl();
  try {
    let res = await axios.get(`${baseUrl}products/category/view`);
    return res.data;
  } catch (error) {
    console.error("categoryApi Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: error.response?.data?._data || []
    };
  }
}
