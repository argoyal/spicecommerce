import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  address?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  carts?: CartListRelationFilter;
};
