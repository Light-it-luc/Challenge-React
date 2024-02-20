import type { Cart } from "../App";
import { Subscription } from "../constants";
import { Backdrop } from "./Backdrop";

interface ModalProps {
  setIsModalVisible: (visible: boolean) => void;
  subscriptionCandidate: Subscription;
  cart: Cart;
  setCart: (cart: Cart) => void;
}

export const Modal = ({
  setIsModalVisible,
  subscriptionCandidate,
  cart,
  setCart,
}: ModalProps) => {
  const addToCart = (subscription: Subscription) => {
    const cartKey = subscription.name.toLowerCase() as keyof Cart;
    const quantity = cart[cartKey] ?? 0;
    const updatedCart = { ...cart };
    updatedCart[cartKey] = quantity + 1;
    setCart(updatedCart);
  };

  const handleConfirm = () => {
    addToCart(subscriptionCandidate);
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
