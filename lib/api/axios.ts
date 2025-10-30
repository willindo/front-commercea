import axios from "axios";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

const localBackend = "http://localhost:3001";
const prodBackend =
  process.env.NEXT_PUBLIC_API_URL || "https://backnest-vpjt.onrender.com";

export const api = axios.create({
  baseURL: isServer
    ? isProd
      ? prodBackend
      : localBackend // SSR / RSC context
    : isProd
    ? prodBackend
    : localBackend, // Browser context
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("401 unauthorized — redirecting to /auth/login");
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(err);
  }
);
