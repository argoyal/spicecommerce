import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
  inventory?: InventoryWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  carts?: CartUpdateManyWithoutProductsInput;
};
