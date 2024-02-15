export const SubscriptionCard = ({
  subscription,
  isMonthlyView,
  handleAddToCartClick,
}) => {
  const Icon = subscription.icon;

  return (
    <div>
      <div>
        <div>
          <h4>{subscription.name} Pack</h4>
        </div>
        <div>
          <Icon />
        </div>
        <div>
          <h4>
            $
            {isMonthlyView
              ? subscription.monthlyPrice
              : subscription.weeklyPrice}
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
