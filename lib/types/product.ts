interface Property {
  [key: string]: string;
}

export interface Product {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  referencePrice: number;
  salePrice: number;
  stockQuantity: number;
  properties: Property;
  images: string[];
}
