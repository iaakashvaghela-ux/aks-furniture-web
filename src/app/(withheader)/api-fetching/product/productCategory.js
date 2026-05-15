import axios from "axios";

export let categoryApi = async () => {
  let baseUrl = process.env.NEXT_PUBLIC_BASEURL;
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
