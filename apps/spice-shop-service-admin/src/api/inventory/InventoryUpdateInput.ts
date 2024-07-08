import { ProductUpdateManyWithoutInventoriesInput } from "./ProductUpdateManyWithoutInventoriesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  quantity?: number | null;
  products?: ProductUpdateManyWithoutInventoriesInput;
  product?: ProductWhereUniqueInput | null;
};
