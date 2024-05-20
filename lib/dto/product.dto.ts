import { Product } from "../types/product";

export type ProductsDto = {
  products: {
    statusCode: number;
    products: Product[];
  };
};
