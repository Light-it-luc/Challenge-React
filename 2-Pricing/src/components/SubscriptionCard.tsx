import { Subscription } from "../constants";
import { Button } from "./Button";

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
    <div className={`card ${subscription.featured ? "featured" : ""}`}>
      {subscription.featured && <div className="tag">Featured</div>}
      <div className="top">
        <h4 className="title">{subscription.name} Pack</h4>
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

      <div className="bottom">
        <p>{subscription.description}</p>

        <Button
          className={`${
            subscription.featured
              ? "primary-button "
              : `secondary-button ${subscription.name.toLowerCase()}-color`
          }`}
          text="Add to cart"
          onClick={handleAddToCartClick}
        />
      </div>
    </div>
  );
};
