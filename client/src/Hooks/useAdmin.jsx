import { useState, useEffect } from "react";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure.jsx";
const useAdmin = () => {
  const { user } = useAuthContext();
  console.log("Useadmin hooks user:", user);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("Useadmin hooks isAdmin:", isAdmin);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = user?.email;
        console.log("Fetching admin status for email:", email);
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
