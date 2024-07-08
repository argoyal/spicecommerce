import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { CartCreateNestedManyWithoutCustomersInput } from "./CartCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  address?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  carts?: CartCreateNestedManyWithoutCustomersInput;
};
