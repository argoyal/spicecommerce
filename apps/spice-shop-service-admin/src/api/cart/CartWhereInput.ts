import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
