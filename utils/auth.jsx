import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/login/";

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(API_URL, {
            username,
            password,
        });
        return response.data.key; 
    } catch (error) {
        console.error("Login failed", error);
        return null;
    }
};
