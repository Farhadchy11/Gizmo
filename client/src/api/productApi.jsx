import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:5050/products");
  return response.data;
};
