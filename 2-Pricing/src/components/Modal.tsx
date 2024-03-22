import { Subscription } from "../constants";
import { useCartStore } from "../store/cartStore";
import { Backdrop } from "./Backdrop";
import { SubscriptionKey } from "./Cart";

interface ModalProps {
  setIsModalVisible: (visible: boolean) => void;
  subscriptionCandidate: Subscription;
}

export const Modal = ({
  setIsModalVisible,
  subscriptionCandidate,
}: ModalProps) => {
  const increment = useCartStore((state) => state.increment);

  const handleConfirm = () => {
    const candidateCartKey =
      subscriptionCandidate.name.toLocaleLowerCase() as SubscriptionKey;
    increment(candidateCartKey);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Backdrop onBackdropClick={handleCloseModal} />
      <div id="modal">
        <button className="close-modal" onClick={handleCloseModal}>
          ×
        </button>
        <h2>Add to cart?</h2>
        <p>
          Are you sure you want to add {subscriptionCandidate.name} Pack to your
          cart?
        </p>
        <div className="button-container">
          <button className="cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
