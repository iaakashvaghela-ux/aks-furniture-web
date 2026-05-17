import axios from "axios";
import Cookies from "js-cookie";
import { apiBaseUrl } from "../apiBaseUrl";

const baseUrl = apiBaseUrl();

const authHeaders = () => ({
    "Content-Type": "application/json",
    "Authorization": typeof window !== "undefined" && Cookies.get("token") ? `Bearer ${Cookies.get("token")}` : ""
});

const safeError = (err, fallbackMessage) => ({
    success: false,
    message: err.response?.data?.message || err.message || fallbackMessage,
    data: err.response?.data?.data || []
});

export const getWishlistItems = async () => {
    try {
        if (!Cookies.get("token")) {
            return {
                success: false,
                message: "Authorization token missing",
                data: []
            };
        }

        const response = await axios.get(`${baseUrl}wishlist/view`, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("getWishlistItems Error:", err);
        return safeError(err, "Failed to fetch wishlist items");
    }
};

export const addToWishlist = async (productId, price, image, name, category, path) => {
    try {
        const response = await axios.post(`${baseUrl}wishlist/add`, {
            productId,
            price,
            image,
            name,
            category,
            path
        }, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("addToWishlist Error:", err);
        return safeError(err, "Failed to add item to wishlist");
    }
};

export const removeFromWishlist = async (id) => {
    try {
        const response = await axios.post(`${baseUrl}wishlist/remove`, { id }, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("removeFromWishlist Error:", err);
        return safeError(err, "Failed to remove item from wishlist");
    }
};

export const removeProductFromWishlist = async (productId) => {
    try {
        const response = await axios.post(`${baseUrl}wishlist/remove`, { productId }, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("removeProductFromWishlist Error:", err);
        return safeError(err, "Failed to remove item from wishlist");
    }
};

export const toggleWishlist = async (productId, price, image, name, category, path) => {
    try {
        const response = await axios.post(`${baseUrl}wishlist/toggle`, {
            productId,
            price,
            image,
            name,
            category,
            path
        }, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("toggleWishlist Error:", err);
        return safeError(err, "Failed to update wishlist");
    }
};

export const clearWishlist = async () => {
    try {
        const response = await axios.post(`${baseUrl}wishlist/clear`, {}, {
            headers: authHeaders()
        });
        return response.data;
    } catch (err) {
        console.error("clearWishlist Error:", err);
        return safeError(err, "Failed to clear wishlist");
    }
};
