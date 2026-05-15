import axios from "axios";

export const homeCollectionMenuApi = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

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
