import axios from "axios";

let baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const viewTestimonials = async () => {
    try {
        const response = await axios.get(`${baseUrl}testimonials/view`);
        return response.data;
    } catch (error) {
        console.error("viewTestimonials Error:", error);
        return {
            success: false,
            message: error.response?.data?.message || error.message,
            data: []
        };
    }
}