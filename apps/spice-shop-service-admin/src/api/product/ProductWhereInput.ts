import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  category?: CategoryWhereUniqueInput;
  inventory?: InventoryWhereUniqueInput;
  orders?: OrderListRelationFilter;
  inventories?: InventoryListRelationFilter;
  carts?: CartListRelationFilter;
};
