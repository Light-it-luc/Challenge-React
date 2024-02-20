import type { Cart as ICart } from "../App";
import { Backdrop } from "./Backdrop";
import { Button } from "./Button";
import { Subscription, subscriptions } from "../constants";
import { CheckoutRow } from "./CheckoutRow";

export type SubscriptionKey = keyof typeof subscriptions;

interface CartProps {
  isMonthlyView: boolean;
  cart: ICart;
  setIsCartOpen: (cartIsVisible: boolean) => void;
  setCart: (newCartContents: ICart) => void;
}

export const Cart = ({
  isMonthlyView,
  cart,
  setIsCartOpen,
  setCart,
}: CartProps) => {
  const handleCloseCart = () => setIsCartOpen(false);

  const getSubscriptionByName = (
    subscriptionName: SubscriptionKey
  ): Subscription => subscriptions[subscriptionName];

  const subscriptionsWithItemsInCart = Object.entries(cart)
    .filter(([subscriptionName, quantityInCart]) => quantityInCart > 0)
    .map(([subscriptionName, quantityInCart]) => subscriptionName);

  const rows = subscriptionsWithItemsInCart.map((subscriptionName) => (
    <CheckoutRow
      key={subscriptionName}
      isMonthlyView={isMonthlyView}
      cart={cart}
      subscription={getSubscriptionByName(subscriptionName as SubscriptionKey)}
      setCart={setCart}
    />
  ));

  const totalPrice = Object.entries(cart)
    .map(([subscriptionName, quantityInCart]) => {
      const subscription = getSubscriptionByName(
        subscriptionName as SubscriptionKey
      );
      return isMonthlyView
        ? subscription.monthlyPrice * quantityInCart
        : subscription.weeklyPrice * quantityInCart;
    })
    .reduce((total, current) => total + current, 0);

  return (
    <>
      <Backdrop onBackdropClick={handleCloseCart} />
      <div id="cart">
        <h2>My Cart</h2>

        {subscriptionsWithItemsInCart.length > 0 && (
          <>
            <ul>
              <li>
                <h3 className="bold">Item</h3>
                <h3 className="bold">Quantity</h3>
                <h3 className="bold">$</h3>
              </li>

              {rows}

              <li>
                <h3 className="bold">Total</h3>{" "}
                <h3 className="bold">${totalPrice}</h3>
              </li>
            </ul>

            <div className="checkout-container">
              <Button
                text="Checkout"
                className="primary-button w75"
                onClick={() => console.log("Checkout")}
              />
            </div>
          </>
        )}

        {subscriptionsWithItemsInCart.length === 0 && (
          <div>
            <h3>Your cart is empty</h3>
          </div>
        )}
      </div>
    </>
  );
};
