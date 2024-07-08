import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  customerId?: SortOrder;
  productId?: SortOrder;
};
