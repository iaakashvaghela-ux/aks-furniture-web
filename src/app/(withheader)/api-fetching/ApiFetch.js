import axios from 'axios'

export const Products = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};


export const ProductBySlug = async (slug) => {
  const res = await axios.get(`https://dummyjson.com/products/${slug}`);
  console.log(res.data);
  return res.data;
};