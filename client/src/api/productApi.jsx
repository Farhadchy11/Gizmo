import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://gizmo-taupe.vercel.app/products");
  return response.data;
};
