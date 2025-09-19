import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";
import { useState, useEffect } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [refetch, setRefetchTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(
          "https://ecommerceserver-mocha.vercel.app/allusers"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [refetch]);

  const refetchData = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  const deleteUser = (id) => {
    const userId = id;
    console.log(ids);

    axiosSecure
      .delete("https://ecommerceserver-mocha.vercel.app/users", {
        data: { userId },
      })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-4 text-center">
        All Users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border  rounded-lg text-center">
          <thead>
            <tr className="">
              <th className="p-3">Name</th>

              <th className="p-3">Email</th>

              <th className="p-3">Delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t  transition-all">
                <td className="p-3 text-sm md:text-base">{user.name}</td>

                <td className="p-3 text-sm md:text-base">{user.email}</td>

                <td className="p-3 text-sm md:text-base">
                  <button onClick={() => deleteUser(user._id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={refetchData}>Refetch Data</button>
    </div>
  );
};

export default AllUsers;
