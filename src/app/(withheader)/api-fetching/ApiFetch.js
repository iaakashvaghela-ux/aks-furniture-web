import axios from 'axios'
import { apiBaseUrl } from './apiBaseUrl';

export const Products = async () => {
  const baseUrl = apiBaseUrl();
  try {
    const res = await axios.get(`${baseUrl}products/view`);
    return res.data?._data || [];
  } catch (error) {
    console.error("Products Fetch Error:", error);
    return [];
  }
};


export const ProductBySlug = async (slug) => {
  const baseUrl = apiBaseUrl();
  try {
    const res = await axios.get(`${baseUrl}products/${slug}`);
    return res.data?._data || {};
  } catch (error) {
    console.error("ProductBySlug Fetch Error:", error);
    return {};
  }
};
