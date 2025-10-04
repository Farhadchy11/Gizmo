import axios from "axios";

export const axiosSecur = axios.create({
  baseURL: `https://gizmo-taupe.vercel.app`,
});
const useAxiosSecur = () => {
  axiosSecur.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosSecur;
};

export default useAxiosSecur;
