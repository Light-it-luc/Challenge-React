import { Subscription } from "../constants";
import { Backdrop } from "./Backdrop";

interface ModalProps {
  setIsModalVisible: (visible: boolean) => void;
  subscriptionCandidate: Subscription;
  addToCart: () => void;
}

export const Modal = ({
  setIsModalVisible,
  subscriptionCandidate,
  addToCart,
}: ModalProps) => {
  const handleConfirm = () => {
    addToCart();
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
