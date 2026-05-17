import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";


export let productApi = async (filters = {}) => {
  let baseUrl = apiBaseUrl();
  try {
    const params = new URLSearchParams();

    if (filters.category && filters.category !== "All") {
      params.set("category", filters.category);
    }

    if (filters.colors?.length) {
      params.set("colors", filters.colors.join(","));
    }

    if (filters.maxPrice) {
      params.set("maxPrice", filters.maxPrice);
    }

    const queryString = params.toString();
    let res = await axios.get(`${baseUrl}products/view${queryString ? `?${queryString}` : ""}`);
    return res.data;
  } catch (error) {
    console.error("productApi Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: error.response?.data?._data || []
    };
  }
}


export let productBySlug = async (slug) => {
  let baseUrl = apiBaseUrl();
  try {
    let res = await axios.get(`${baseUrl}products/${slug}`);
    return res.data;
  } catch (error) {
    console.error("productBySlug Error:", error);
    return {
      _status: false,
      _message: error.response?.data?._message || error.message,
      _data: error.response?.data?._data || {}
    };
  }
}

