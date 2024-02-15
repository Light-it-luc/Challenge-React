import { Subscription } from "../constants";

interface SubscriptionCardProps {
  subscription: Subscription;
  isMonthlyView: boolean;
  handleAddToCartClick: () => void;
}

export const SubscriptionCard = ({
  subscription,
  isMonthlyView,
  handleAddToCartClick,
}: SubscriptionCardProps) => {
  const Icon = subscription.icon;

  return (
    <div className="card">
      <div className="top">
        <h4 className="itle">{subscription.name} Pack</h4>
        <div
          className={`icon shadow-${
            subscription.featured
              ? "featured"
              : subscription.name.toLocaleLowerCase()
          }`}
        >
          <Icon />
        </div>
        <div>
          <h4 className="price">
            $
            {isMonthlyView
              ? `${subscription.monthlyPrice}`
              : `${subscription.weeklyPrice}`}
          </h4>
        </div>
        <div>
          <p>{subscription.subheading}</p>
        </div>
      </div>

      <div>
        <p>{subscription.description}</p>

        {/* EXTRACT TO BUTTON COMPONENT */}
        <button type="button" onClick={handleAddToCartClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
