import axios from "axios";
import store from "../Store/store";

const API_URL = "https://bug-report-system.xeosmarthome.com/";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        config.headers.common["X-Access-Token"] = store.getState().auth.accessToken;
        return config;
    },
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            store.dispatch({ type: "SIGN_OUT_SUCCESS" });
        }
        return Promise.reject(error);
    },
);

export { api };
