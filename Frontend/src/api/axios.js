import axios from "axios";
// import { serverUrl } from "../../config/serverUrl";


const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, // IMPORTANT for refresh cookie
});

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const clearAccessToken = () => {
  accessToken = null;
};

// Attach access token to every request
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Auto refresh on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/api/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/api/auth/refresh");
        setAccessToken(res.data.accessToken);

        originalRequest.headers.Authorization =
          `Bearer ${res.data.accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        // ✅ THIS IS EXPECTED WHEN USER IS LOGGED OUT
        clearAccessToken();

        // Optional: redirect only if needed
        if (window.location.pathname !== "/signin") {
          window.location.replace("/signin");
        }

        // ❗ Prevent console spam
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);



export default api;
