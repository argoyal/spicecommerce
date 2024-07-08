import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  products?: ProductListRelationFilter;
  product?: ProductWhereUniqueInput;
};
