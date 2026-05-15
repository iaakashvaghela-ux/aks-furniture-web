import axios from "axios";


export let homeSliderApi = async () => {
  let baseUrl = process.env.NEXT_PUBLIC_BASEURL;
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
