import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: CategoryWhereUniqueInput | null;
  inventory?: InventoryWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  carts?: CartCreateNestedManyWithoutProductsInput;
};
