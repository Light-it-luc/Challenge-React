import { Subscription, subscriptions } from "../constants";
import { SubscriptionCard } from "./SubscriptionCard";

interface SubscriptionProps {
  isMonthlyView: boolean;
  setSubscriptionCandidate: (subscription: Subscription) => void;
  setIsModalVisible: (visible: boolean) => void;
}

export const Subscriptions = ({
  isMonthlyView,
  setSubscriptionCandidate,
  setIsModalVisible,
}: SubscriptionProps) => {
  const handleAddToCartClick = (subscription: Subscription) => {
    setSubscriptionCandidate(subscription);
    setIsModalVisible(true);
  };

  return (
    <div>
      {Object.values(subscriptions).map((subscription) => (
        <SubscriptionCard
          key={subscription.name}
          subscription={subscription}
          isMonthlyView={isMonthlyView}
          handleAddToCartClick={() => handleAddToCartClick(subscription)}
        />
      ))}
    </div>
  );
};
