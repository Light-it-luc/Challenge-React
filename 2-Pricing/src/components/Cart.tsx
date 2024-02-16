import type { Cart as ICart } from "../App";
import { Backdrop } from "./Backdrop";
import { Button } from "./Button";
import { Subscription, subscriptions } from "../constants";
import { CheckoutRow } from "./CheckoutRow";

export type SubscriptionKey = keyof typeof subscriptions;

interface CartProps {
  isMonthlyView: boolean;
  inCart: ICart;
  setIsCartOpen: (cartIsVisible: boolean) => void;
  setInCart: (newCartContents: ICart) => void;
}

export const Cart = ({
  isMonthlyView,
  inCart,
  setIsCartOpen,
  setInCart,
}: CartProps) => {
  const handleCloseCart = () => setIsCartOpen(false);

  const getSubscriptionByName = (
    subscriptionName: SubscriptionKey
  ): Subscription => subscriptions[subscriptionName];

  const subscriptionsWithItemsInCart = Object.entries(inCart)
    .filter(([subscriptionName, quantityInCart]) => quantityInCart > 0)
    .map(([subscriptionName, quantityInCart]) => subscriptionName);

  const rows = subscriptionsWithItemsInCart.map((subscriptionName) => (
    <CheckoutRow
      key={subscriptionName}
      isMonthlyView={isMonthlyView}
      inCart={inCart}
      subscription={getSubscriptionByName(subscriptionName as SubscriptionKey)}
      setInCart={setInCart}
    />
  ));

  const totalPrice = Object.entries(inCart)
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
            {rows}

            <li>
              <h2>Total</h2> <h2>${totalPrice}</h2>
            </li>
            <Button
              text="Checkout"
              className="primary-button"
              onClick={() => console.log("Checkout")}
            />
          </>
        )}
      </div>
    </>
  );
};
