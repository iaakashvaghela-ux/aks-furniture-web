import Cookies from "js-cookie";
import axios from "axios";
import { apiBaseUrl } from "../apiBaseUrl";

let baseUrl = apiBaseUrl();

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
export { saveOrder, getOrder }
