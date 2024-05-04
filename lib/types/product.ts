import { Core } from "./core";

interface Property {
  [key: string]: string;
}

export interface Product extends Core {
  title: string;
  description: string;
  referencePrice: number;
  salePrice: number;
  stockQuantity: number;
  properties: Property;
  images: string[];
}
