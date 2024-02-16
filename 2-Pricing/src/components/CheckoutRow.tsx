import { Cart } from "../App";
import { Subscription } from "../constants";
import { SubscriptionKey } from "./Cart";

interface CheckoutRowProps {
  isMonthlyView: boolean;
  subscription: Subscription;
  inCart: Cart;
  setInCart: (cart: Cart) => void;
}

export const CheckoutRow = ({
  isMonthlyView,
  subscription,
  inCart,
  setInCart,
}: CheckoutRowProps) => {
  const key = subscription.name.toLowerCase() as SubscriptionKey;
  const quantityInCart = inCart[key] ?? 0;

  const handleIncrementCart = () => {
    const newCart = { ...inCart };
    newCart[key] = quantityInCart + 1;
    setInCart(newCart);
  };

  const handleDecrementCart = () => {
    const newCart = { ...inCart };
    if (quantityInCart < 2) delete newCart[key];
    else newCart[key] = quantityInCart - 1;
    setInCart(newCart);
  };

  return (
    <li>
      <h3>{subscription.name}</h3>
      <div>
        <button onClick={handleDecrementCart}>-</button>
        <span>{quantityInCart}</span>
        <button onClick={handleIncrementCart}>+</button>
      </div>
      <h4>
        {isMonthlyView
          ? subscription.monthlyPrice * quantityInCart
          : subscription.weeklyPrice * quantityInCart}
      </h4>
    </li>
  );
};
