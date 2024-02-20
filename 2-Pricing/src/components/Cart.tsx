import type { Cart as ICart } from "../App";
import { Backdrop } from "./Backdrop";
import { Button } from "./Button";
import { Subscription, subscriptions } from "../constants";
import { CheckoutRow } from "./CheckoutRow";

export type SubscriptionKey = keyof typeof subscriptions;

const getSubscriptionByName = (
  subscriptionName: SubscriptionKey
): Subscription => subscriptions[subscriptionName];

interface CartProps {
  isMonthlyView: boolean;
  cart: ICart;
  setIsCartOpen: (isCarteOpen: boolean) => void;
  setCart: (cart: ICart) => void;
}

export const Cart = ({
  isMonthlyView,
  cart,
  setIsCartOpen,
  setCart,
}: CartProps) => {
  const handleCloseCart = () => setIsCartOpen(false);

  const subscriptionsWithItemsInCart = Object.entries(cart)
    .filter(([subscriptionName, quantityInCart]) => quantityInCart > 0)
    .map(([subscriptionName, quantityInCart]) => subscriptionName);

  const cartPriceAndQuantities = Object.entries(cart).map(
    ([subscriptionName, quantityInCart]) => {
      const subscription = getSubscriptionByName(
        subscriptionName as SubscriptionKey
      );
      return {
        name: subscription.name,
        quantity: quantityInCart,
        price: isMonthlyView
          ? subscription.monthlyPrice
          : subscription.weeklyPrice,
      };
    }
  );

  const totalPrice = cartPriceAndQuantities.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Backdrop onBackdropClick={handleCloseCart} />
      <div id="cart">
        <h2>My Cart</h2>

        {subscriptionsWithItemsInCart.length > 0 ? (
          <>
            <ul>
              <li>
                <h3 className="bold">Item</h3>
                <h3 className="bold">Quantity</h3>
                <h3 className="bold">$</h3>
              </li>

              {subscriptionsWithItemsInCart.map((subscriptionName) => (
                <CheckoutRow
                  key={subscriptionName}
                  isMonthlyView={isMonthlyView}
                  cart={cart}
                  subscription={getSubscriptionByName(
                    subscriptionName as SubscriptionKey
                  )}
                  setCart={setCart}
                />
              ))}

              <li>
                <h3 className="bold">Total</h3>
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
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </>
  );
};
