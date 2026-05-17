import axios from "axios";
import Cookies from "js-cookie";
import { apiBaseUrl } from "../apiBaseUrl";

let baseUrl = apiBaseUrl();

export const getCartItems = async () => {
    try {
        if (!Cookies.get("token")) {
            return {
                success: false,
                message: "Authorization token missing",
                data: []
            };
        }
        const response = await axios.get(`${baseUrl}cart/view`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        });
        return response.data;
    } catch (err) {
        console.error("getCartItems Error:", err);
        return {
            success: false,
            message: err.response?.data?.message || err.message,
            data: err.response?.data?.data || []
        };
    }
}

export const removeFromCart = async (id) => {
    try {
        const response = await axios.post(`${baseUrl}cart/remove`, { id }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        });
        return response.data;
    } catch (err) {
        console.error("removeFromCart Error:", err);
        return {
            success: false,
            message: err.response?.data?.message || err.message,
            data: err.response?.data?.data || []
        };
    }
}

export const updateCartQuantity = async (id, quantity) => {
    try {
        const response = await axios.post(`${baseUrl}cart/update-quantity`, { id, quantity }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        });
        return response.data;
    } catch (err) {
        console.error("updateCartQuantity Error:", err);
        return {
            success: false,
            message: err.response?.data?.message || err.message,
            data: err.response?.data?.data || []
        };
    }
}
