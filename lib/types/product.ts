import { Core } from "./core";

export interface Product extends Core {
  title: string;
  description: string;
  referencePrice: number;
  salePrice: number;
  stockQuantity: number;
  images: string[];
}
