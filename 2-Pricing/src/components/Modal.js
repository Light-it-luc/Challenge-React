export const Modal = ({
  setIsModalVisible,
  subscriptionCandidate,
  itemsInCart,
  setItemsInCart,
}) => {
  const addToCart = (subscription) => {
    const inCart = structuredClone(itemsInCart);

    if (subscription.name in inCart) {
      inCart[subscription.name].count++;
    } else {
      inCart[subscription.name].count = 1;
    }

    setItemsInCart(inCart);
  };

  const handleConfirm = () => {
    addToCart(subscriptionCandidate);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="modal">
      <h2>Add to cart?</h2>
      <p>
        Are you sure you want to add {subscriptionCandidate.name} Pack to your
        cart?
      </p>

      <div>
        <button onClick={handleCloseModal}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};
