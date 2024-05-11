import axios from "axios";


export const baseURL = 'http://localhost:8000'
const api = axios.create({
    baseURL: baseURL
});

export interface apiCall<Type>{
    success: Type,
    error : {
        error_code : string,
        error_message : string,
        error_field : string[]
    }
}


// Add an interceptor to include the token from localStorage in every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined) {
            config.headers["token"] = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api