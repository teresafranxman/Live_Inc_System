import { api } from "../../../lib/axios";
import type { Product } from "./types/product.type";

export const FetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}