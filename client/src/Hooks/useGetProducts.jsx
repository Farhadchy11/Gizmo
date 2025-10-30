import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productApi";

export const useGetProducts = (options) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    cacheTime: 1000 * 60 * 30,
  });
};
