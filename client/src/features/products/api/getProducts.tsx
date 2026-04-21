import { api } from "../../../lib/axios";
import type { Product } from "./types/product.type";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}