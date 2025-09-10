import { useState, useEffect } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

const useAdmin = () => {
  // const { user } = useAuthContext();
  // console.log("Useadmin hooks user:", user);
  const { user } = useAuthContext();
  console.log("Useadmin hooks user:", user);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("Useadmin hooks isAdmin:", isAdmin);
  //const [adminData, setAdminData] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  //  var email = user?.email;
  // console.log("Fetching admin status for email:", email);

  useEffect(() => {
    // let timerId;
    const fetchData = async () => {
      try {
        const email = user?.email;
        console.log("Fetching admin status for email:", email);
        //  setLoading(true);
        const response = await axios.get(
          `http://localhost:5050/user/admin/${email}`
        ); // Replace with your API endpoint
        setIsAdmin(response.data.admin);
        // const userData = response.data;
        // setIsAdmin(userData.admin);
        //   const result = await response.json();
        // setIsAdmin(result);
      } catch (e) {
        console.log("Error fetching admin status:", e);
      }
    };
    fetchData();
    // timerId = setTimeout(() => {
    //   fetchData();
    // }, 2000); // 4-second delay

    // return () => {
    //   clearTimeout(timerId);
    // };
  }, [user]);

  // useEffect(() => {
  //   const fetchAdminStatus = async () => {
  //     try {
  //       // Simulate an API call to check admin status and fetch data
  //       //setLoading(true);
  //       // Replace with actual API call to your admin backend
  //       const email = "f400@gmail.com";
  //       const response = await axios.get(
  //         `http://localhost:5050/user/admin/${email}`
  //       );
  //       // const response = await new Promise(resolve => setTimeout(() => resolve({
  //       //   isAdmin: true,
  //       //   data: { users: [], settings: {} }
  //       // }), 1000));

  //       setIsAdmin(response.data.admin);
  //       //  setIsAdmin(response.isAdmin);
  //       // setAdminData(response.data);
  //     } catch (err) {
  //       console.log("Error fetching admin status:", err);
  //     }
  //   };

  //   fetchAdminStatus();
  // }, []); // Empty dependency array ensures it runs only once on mount

  return { isAdmin };
};

export default useAdmin;
