import axios from 'axios';

const rawBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';
const baseURL = rawBase ? `${rawBase}/api` : 'https://backend-lyart-xi-67.vercel.app/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include JWT token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('dinegrid_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle unauthorized errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear token and redirect to login if unauthorized
      localStorage.removeItem('dinegrid_token');
      localStorage.removeItem('dinegrid_user');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
