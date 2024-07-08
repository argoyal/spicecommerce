import { Product } from "../product/Product";

export type Inventory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  products?: Array<Product>;
  product?: Product | null;
};
