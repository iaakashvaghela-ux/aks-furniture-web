import axios from "axios";

let baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export let getColor = async () => {
  try {
    let res = await axios.get(`${baseUrl}products/color/view`);
    return res.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
