import axios from 'axios'

export const Products = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products || [];
  } catch (error) {
    console.error("Products Fetch Error:", error);
    return [];
  }
};


export const ProductBySlug = async (slug) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${slug}`);
    return res.data || {};
  } catch (error) {
    console.error("ProductBySlug Fetch Error:", error);
    return {};
  }
};