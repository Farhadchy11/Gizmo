import axios from "axios";
//import useAuthContext from "./useAuthContext";
//import { useNavigate } from "react-router-dom";



// axios.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("access-token");
  //     console.log(token);
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

export const axiosSecur = axios.create({
  baseURL: `https://ecommerceserver-mocha.vercel.app`,
});
const useAxiosSecur = () => {
  // const { logOut } = useAuthContext();
  //const navigate = useNavigate();
  axiosSecur.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("ami tumake stop hoyte boltechi je", token);
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
