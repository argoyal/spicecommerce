import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { CartUpdateManyWithoutCustomersInput } from "./CartUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  address?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  carts?: CartUpdateManyWithoutCustomersInput;
};
