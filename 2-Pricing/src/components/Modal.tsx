import { Subscription } from "../constants";
import { Cart } from "../App";

interface ModalProps {
  setIsModalVisible: (visible: boolean) => void;
  subscriptionCandidate: Subscription;
  itemsInCart: Cart;
  setItemsInCart: (newSubscriptions: Cart) => void;
}

export const Modal = ({
  setIsModalVisible,
  subscriptionCandidate,
  itemsInCart,
  setItemsInCart,
}: ModalProps) => {
  // REFACTOR
  const addToCart = (subscription: Subscription) => {
    return;
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
