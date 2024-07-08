import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  totalAmount: number | null;
  customer?: Customer | null;
  product?: Product | null;
};
