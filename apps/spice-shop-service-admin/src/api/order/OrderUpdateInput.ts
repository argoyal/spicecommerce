import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  totalAmount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
