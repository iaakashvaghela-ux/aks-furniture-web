import axios from "axios";
import Cookies from "js-cookie";

let baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const addToCart = async (productId, quantity, price, image, name, category, path) => {
    try {
        const response = await axios.post(`${baseUrl}cart/add`, {
            productId,
            quantity,
            price,
            image,
            name,
            category,
            path
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": typeof window !== "undefined" ? `Bearer ${Cookies.get("token")}` : ""
            }
        });
        return response.data;
    } catch (err) {
        console.error("Add to cart error:", err);
        // Return a safe object with default values to prevent frontend crashes
        return {
            success: false,
            message: err.response?.data?.message || err.message,
            data: err.response?.data?.data || [] // Ensure data is at least an empty array
        };
    }
}
