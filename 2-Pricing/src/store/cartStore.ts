import { create } from "zustand";
import { SubscriptionKey } from "../components/Cart";

export interface Cart {
  alpha?: number;
  bravo?: number;
  charlie?: number;
  extra?: number;
}

export interface CartStore {
  cart: Cart;
  increment: (key: SubscriptionKey) => void;
  decrement: (key: SubscriptionKey) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: {},
  increment: (subscription: SubscriptionKey) =>
    set((state) => {
      const inCart = state.cart[subscription];
      const quantity = inCart ? inCart + 1 : 1;
      return { cart: { ...state.cart, [subscription]: quantity } };
    }),
  decrement: (subscription: SubscriptionKey) =>
    set((state) => {
      const { [subscription]: inCart, ...restOfCart } = state.cart;
      return inCart && inCart > 0
        ? { cart: { [subscription]: inCart - 1, ...restOfCart } }
        : { cart: { ...restOfCart } };
    }),
}));
