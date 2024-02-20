import { Cart } from "../App";
import { Subscription } from "../constants";
import { SubscriptionKey } from "./Cart";

interface CheckoutRowProps {
  isMonthlyView: boolean;
  subscription: Subscription;
  cart: Cart;
  setCart: (cart: Cart) => void;
}

export const CheckoutRow = ({
  isMonthlyView,
  subscription,
  cart,
  setCart,
}: CheckoutRowProps) => {
  const key = subscription.name.toLowerCase() as SubscriptionKey;
  const quantityInCart = cart[key] ?? 0;

  const handleIncrementCart = () => {
    const newCart = { ...cart };
    newCart[key] = quantityInCart + 1;
    setCart(newCart);
  };

  const handleDecrementCart = () => {
    const newCart = { ...cart };
    if (quantityInCart < 2) delete newCart[key];
    else newCart[key] = quantityInCart - 1;
    setCart(newCart);
  };

  return (
    <li>
      <h3>{subscription.name}</h3>
      <div className="select-quantity">
        <button className="quantity-button" onClick={handleDecrementCart}>
          -
        </button>
        <span>{quantityInCart}</span>
        <button className="quantity-button" onClick={handleIncrementCart}>
          +
        </button>
      </div>
      <h3>
        {isMonthlyView
          ? subscription.monthlyPrice * quantityInCart
          : subscription.weeklyPrice * quantityInCart}
      </h3>
    </li>
  );
};
