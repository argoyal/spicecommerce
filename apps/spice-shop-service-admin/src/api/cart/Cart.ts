import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customer?: Customer | null;
  product?: Product | null;
};
