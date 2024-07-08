import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
