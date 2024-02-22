import { Subscription } from "../constants";

interface CheckoutRowProps {
  isMonthlyView: boolean;
  subscription: Subscription;
  handleIncrementCart: () => void;
  handleDecrementCart: () => void;
  quantityInCart: number;
}

export const CheckoutRow = ({
  isMonthlyView,
  subscription,
  handleIncrementCart,
  handleDecrementCart,
  quantityInCart,
}: CheckoutRowProps) => (
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
