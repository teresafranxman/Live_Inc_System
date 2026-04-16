export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: Array<string>;
  rating?: number;
  count: number;
  reviews?: Review[];
}
