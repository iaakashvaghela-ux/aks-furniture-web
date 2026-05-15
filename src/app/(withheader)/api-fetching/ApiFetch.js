import axios from 'axios'

export const Products = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  try {
    const res = await axios.get(`${baseUrl}products/view`);
    return res.data?._data || [];
  } catch (error) {
    console.error("Products Fetch Error:", error);
    return [];
  }
};


export const ProductBySlug = async (slug) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  try {
    const res = await axios.get(`${baseUrl}products/${slug}`);
    return res.data?._data || {};
  } catch (error) {
    console.error("ProductBySlug Fetch Error:", error);
    return {};
  }
};
