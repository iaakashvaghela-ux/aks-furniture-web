import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";


export let homeSliderApi = async () => {
  let baseUrl = apiBaseUrl();
  try {
    let res = await axios.get(`${baseUrl}home/slider`);
    return res.data;
  } catch (error) {
    console.error("homeSliderApi Error:", error);
    return {
      _status: false,
      _message: error.message,
      _data: []
    };
  }
}
