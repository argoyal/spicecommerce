import { Order } from "../order/Order";
import { Cart } from "../cart/Cart";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  orders?: Array<Order>;
  carts?: Array<Cart>;
};
