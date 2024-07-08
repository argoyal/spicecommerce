import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";
import { Cart } from "../cart/Cart";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  category?: Category | null;
  inventory?: Inventory | null;
  orders?: Array<Order>;
  inventories?: Array<Inventory>;
  carts?: Array<Cart>;
};
