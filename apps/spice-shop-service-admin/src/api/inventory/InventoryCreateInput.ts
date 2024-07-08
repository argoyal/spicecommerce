import { ProductCreateNestedManyWithoutInventoriesInput } from "./ProductCreateNestedManyWithoutInventoriesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  quantity?: number | null;
  products?: ProductCreateNestedManyWithoutInventoriesInput;
  product?: ProductWhereUniqueInput | null;
};
