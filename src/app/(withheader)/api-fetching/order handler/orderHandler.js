const Cookies = require("js-cookie");
const { default: axios } = require("axios");

let baseUrl = process.env.NEXT_PUBLIC_BASEURL;

let saveOrder = async (data) => {
    try {
        let res = await axios.post(`${baseUrl}order/save`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        })
        return res.data;
    } catch (error) {
        console.error("saveOrder Error:", error);
        return { success: false, message: error.message, data: [] };
    }
}

let getOrder = async () => {
    try {
        let res = await axios.get(`${baseUrl}order/get`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        })
        return res.data;
    } catch (error) {
        console.error("getOrder Error:", error);
        return { success: false, message: error.message, data: [] };
    }
}
module.exports = { saveOrder, getOrder }