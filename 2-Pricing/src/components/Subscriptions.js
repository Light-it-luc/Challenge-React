import { subscriptions } from "../constants";
import { SubscriptionCard } from "./SubscriptionCard";

export const Subscriptions = ({
  isMonthlyView,
  setSubscriptionCandidate,
  setIsModalVisible,
}) => {
  const handleAddToCartClick = (subscription) => {
    setSubscriptionCandidate(subscription);
    setIsModalVisible(true);
  };
  return (
    <div>
      {Object.keys(subscriptions).map((key) => (
        <SubscriptionCard
          key={subscriptions[key].name}
          subscription={subscriptions[key]}
          isMonthlyView={isMonthlyView}
          handleAddToCartClick={handleAddToCartClick}
        />
      ))}
    </div>
  );
};
