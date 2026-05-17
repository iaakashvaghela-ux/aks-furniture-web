import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";

const baseUrl = apiBaseUrl();

export const getAboutPageData = async () => {
  try {
    const res = await axios.get(`${baseUrl}about/page-data`);
    return res.data;
  } catch (error) {
    console.error("getAboutPageData Error:", error);
    return { _status: false, _data: null, paths: {} };
  }
};

export const submitAboutEnquiry = async (payload) => {
  try {
    const res = await axios.post(`${baseUrl}about/enquiry`, payload);
    return res.data;
  } catch (error) {
    console.error("submitAboutEnquiry Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: null
    };
  }
};
