import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";

export const homeCollectionMenuApi = async () => {
  const baseUrl = apiBaseUrl();

  try {
    const res = await axios.get(`${baseUrl}home/collection-menu`);
    return res.data;
  } catch (error) {
    console.error("homeCollectionMenuApi Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: []
    };
  }
};
