import { useState, useEffect } from "react";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure.jsx";

const useAdmin = () => {
  
  const { user } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = user?.email;
        const response = await axiosSecure.get(`/user/admin/${email}`);
        setIsAdmin(response.data.admin);
      } catch (e) {
        console.log("Error fetching admin status:", e);
      }
    };
    fetchData();
  }, [user]);

  return { isAdmin };
};

export default useAdmin;
