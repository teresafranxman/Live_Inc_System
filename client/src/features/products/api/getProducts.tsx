import { useEffect, useState } from "react";
import type { Product } from "./types/product.type";
import { productsList } from "./types/productsList";

export const getProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await new Promise<Product[]>((resolve) => {
          setTimeout(() => {
            resolve(productsList);
          }, 1000);
        });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return products;
};
